import './App.css';
import Manu from './webpage_component/Manu';
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './webpage_component/Home'
import Codes from './webpage_component/Codes'
import Portfolio from './webpage_component/Portfolio'
import Contact from './webpage_component/Contact'
import Error from './webpage_component/Error'

function App() {
  AOS.init({
    duration: 2000,
  });
  return (
    <>

      <BrowserRouter>
        <Manu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/codes" component={Codes} />
          <Route exact path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
