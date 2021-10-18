import './App.css';
import Manu from './webpage_component/Manu';
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter,MemoryRouter, Route, Switch } from "react-router-dom";

import Home from './webpage_component/Home'
import Skills from './webpage_component/Skills'
import Works from './webpage_component/Works'
import Contact from './webpage_component/Contact'
import Error from './webpage_component/Error'

function App() {
  AOS.init({
    duration: 1500,
  });
  return (
    <>

      <MemoryRouter>
        <Manu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/work" component={Works} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </MemoryRouter>
    </>
  );
}

export default App;
