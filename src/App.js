import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import './App.css';
import About from "./pages/About";
import Home from "./pages/Home";
import Photo from "./pages/Photo";
import Video from "./pages/Video";
import Header from "./components/Header";
import ScrollToTop from './ScrollToTop'
import Uncommon from "./pages/Uncommon";
import RiseOfShinga from "./pages/RiseOfShinga";
import Who from "./pages/Who";





function App() {
  return (
    <Router>
      <ScrollToTop>
       <Header />
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/about" component={About}/>
       <Route exact path="/photography" component={Photo}/>
       <Route exact path="/videography" component={Video}/>
       <Route exact path="/uncommon" component={Uncommon} />
       <Route exact path="/riseofshinga" component={RiseOfShinga} />
       <Route exact path="/who" component={Who} />
     </Switch>
</ScrollToTop>
      </Router>
  );
}

export default App;


