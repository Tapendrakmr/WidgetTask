import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import axios from "axios";
import { Paper, Typography } from "@material-ui/core";
const styles = {
  paper: {
    marginTop: "20px",
    width: "250px"
  }
};

export class Profile extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      userEmail: "",
      userid: localStorage.getItem("userid").replace(/""/g, "")
    };
  }
  componentWillMount() {
    axios
      .get(`http://localhost:9000/profile/${this.state.userid}`)
      .then(res => {
        // console.log(res.data);
        // console.log("hello");
        this.setState({
          userName: res.data.userName,
          userEmail: res.data.email
        });
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.paper}>
          <Typography variant="body">{this.state.userName}</Typography>
          <br></br>
          <Typography variant="body">{this.state.userEmail}</Typography>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Profile);
