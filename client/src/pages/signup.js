import React, { Component } from "react";
import icon from "../images/icon.jpg";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
// materialui
import Grid from "@material-ui/core/Grid";
import { Typography, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = {
  form: {
    textAlign: "center",
    margin: "60px"
  },
  image: {
    margin: "20px auto 20px auto",
    height: "70px",

    borderRadius: "40%"
  },
  pageTittle: {
    color: "#616161",
    fontFamily: "-apple-system",

    margin: "10px auto 10px auto"
  },
  customError: {
    color: "Red"
  },
  textField: {
    margin: "5px"
  },
  button: {
    margin: "10px"
  }
};
class signup extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      loading: false,
      errors: {}
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      loading: true
    });
    const newUser = {
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };
    console.log(newUser);
    axios
      .post("http://localhost:9000/signup", newUser)
      .then(res => {
        console.log(res.data);
        this.setState({
          loading: false
        });
        this.props.history.push("/home");
      })
      .catch(err => {
        console.log(err);
        this.setState({
          errors: err.response.data,
          loading: false
        });
      });
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    const { classes } = this.props;
    const { errors, loading } = this.state;
    return (
      <div>
        <Grid container className={classes.form}>
          <Grid item sm />
          <Grid item sm>
            <img src={icon} alt="travel" className={classes.image} />
            <Typography variant="h2" className={classes.pageTittle}>
              SignUp
            </Typography>
            <form noValidate onSubmit={this.handleSubmit}>
              <TextField
                id="userName"
                name="userName"
                type="name"
                label="Name"
                className={classes.textField}
                helperText={errors.email}
                error={errors.email ? true : false}
                value={this.state.userName}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                id="email"
                name="email"
                type="email"
                label="Email"
                className={classes.textField}
                helperText={errors.email}
                error={errors.email ? true : false}
                value={this.state.email}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                id="password"
                name="password"
                type="password"
                label="password"
                className={classes.textField}
                helperText={errors.password}
                error={errors.password ? true : false}
                value={this.state.password}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                label="Confirm Password"
                className={classes.textField}
                helperText={errors.email}
                error={errors.email ? true : false}
                value={this.state.confirmPassword}
                onChange={this.handleChange}
                fullWidth
              />
              {errors.general && (
                <Typography variant="body2" className={classes.customError}>
                  {errors.general}
                </Typography>
              )}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
                disabled={loading}
              >
                signup
                {loading && (
                  <CircularProgress size={30} className={classes.progress} />
                )}
              </Button>
              <br />
              <small>
                Already have an account ? Login <Link to="/login">here</Link>
              </small>
            </form>
          </Grid>

          <Grid item sm />
        </Grid>
      </div>
    );
  }
}

signup.propType = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(signup);
