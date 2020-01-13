import React, { Component } from "react";
import Navbar from "../component/Navbar";

// import Pages
import Profile from "../component/Profile";
import Time from "../component/Time";
import Task from "../component/Task";
// material ui
import Grid from "@material-ui/core/Grid";
export class home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Grid container>
          <Grid item sm>
            <Profile />
          </Grid>
          <Grid item sm>
            <Task />
          </Grid>
          <Grid item sm>
            <Time />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default home;
