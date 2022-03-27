import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import './App.css';
import About from "./pages/About";
import Home from "./pages/Home";
import Photo from "./pages/Photo";
import Video from "./pages/Video";
import Header from "./components/Header";





function App() {
  return (
    <Router>
       <Header />
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/about" component={About}/>
       <Route exact path="/photography" component={Photo}/>
       <Route exact path="/videography" component={Video}/>

     </Switch>

      </Router>
  );
}

export default App;


