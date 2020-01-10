import React from "react";
// import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "./App.css";

// Pages
import login from "./pages/login";
import signup from "./pages/signup";
import home from "./pages/home";

// componentWillMount() {
//   axios.get("http://localhost:9000/").then(res => {
//     console.log(res);
//     this.setState({
//       name: res.data.name,
//       fullName: res.data.fullName
//     });
//   });

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={login} />
          <Route exact path="/signup" component={signup} />
          <Route exact path="/home" component={home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
