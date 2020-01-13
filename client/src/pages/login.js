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
class login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loading: false,
      errors: {}
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      loading: true
    });
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    axios
      .post("http://localhost:9000/login", userData)
      .then(res => {
        console.log(res.data);
        this.setState({
          loading: false
        });
        localStorage.clear();
        localStorage.setItem("userid", res.data);
        console.log(res);
        this.props.history.push("/home");
      })
      .catch(err => {
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
              Login
            </Typography>
            <form noValidate onSubmit={this.handleSubmit}>
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
                label="Password"
                className={classes.textField}
                helperText={errors.password}
                error={errors.password ? true : false}
                value={this.state.password}
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
                Login
                {loading && (
                  <CircularProgress size={30} className={classes.progress} />
                )}
              </Button>
              <br />
              <small>
                dont have an account ? sign up <Link to="/signup">here</Link>
              </small>
            </form>
          </Grid>

          <Grid item sm />
        </Grid>
      </div>
    );
  }
}

login.propType = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(login);
