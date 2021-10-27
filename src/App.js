import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/styles.scss";
import Videos from "./pages/Videos";
import Magazines from "./pages/Magazines";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Paper from "./pages/Paper";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Magazines">
            <Magazines />
          </Route>
          <Route path="/Videos">
            <Videos />
          </Route>
          <Route path="/Paper">
            <Paper />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
