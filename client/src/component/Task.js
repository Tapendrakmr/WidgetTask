import React, { Component } from "react";
import axios from "axios";
import Scream from "./taskmethod/Scream";
import withStyles from "@material-ui/core/styles/withStyles";
import Add from "./taskmethod/add";
const styles = {};

class Task extends Component {
  constructor() {
    super();
    this.state = {
      screams: null,
      userid: localStorage.getItem("userid").replace(/""/g, "")
    };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:9000/allTask/${this.state.userid}`)
      .then(res => {
        this.setState({
          screams: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.screams);
    let recentScream = this.state.screams ? (
      this.state.screams.map(scream => <Scream scream={scream} />)
    ) : (
      <p>Loading...</p>
    );
    return (
      <div>
        <Add />
        <p>{recentScream}</p>
      </div>
    );
  }
}

export default withStyles(styles)(Task);
