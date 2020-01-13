import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = {};
export class Scream extends Component {
  render() {
    const {
      classes,
      scream: { heading }
    } = this.props;
    return (
      <Card className={classes.card}>
        <p>{heading}</p>
      </Card>
    );
  }
}

export default withStyles(styles)(Scream);
