import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import sun from "../images/sun.jpg";
import moon from "../images/moon.jpg";

// material Ui
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";

const styles = {
  image: {
    height: "150px",

    borderRadius: "20%"
  },
  paper: {
    marginTop: "20px",
    marginLeft: "100px",
    width: "250px"
  }
};
export class Time extends Component {
  state = {
    time: new Date()
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  render() {
    let t = Number(this.state.time.getHours());
    var image;
    if ((t >= 20 && t <= 24) || (t >= 0 && t <= 7)) {
      image = moon;
    } else {
      image = sun;
    }
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.paper}>
          <img src={image} className={classes.image} />
          <h2> {this.state.time.toLocaleTimeString()}.</h2>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Time);
