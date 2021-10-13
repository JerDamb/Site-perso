import React from "react";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Knowledges from "./pages/Knowledges";
import Portfolio from "./pages/Portfolio";
import Framer from "./pages/Framer";
import Test from "./pages/Test";
import NotFound from "./pages/NotFound";


import { AnimatePresence } from "framer-motion";

const App = () => {
  
  // let location = useLocation();
  return (
    <>
      <BrowserRouter>
        <AnimatePresence exitBeforeEnter>
        {/* <Switch location={useLocation} key={useLocation.pathname}> */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/competences" component={Test} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/test" component={Knowledges} />
            <Route path="/framer" component={Framer} />
            <Route component={NotFound} />
          </Switch>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
};

export default App;
