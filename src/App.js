import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Home from "./pages/home.jsx";
import eEnvoy from "./pages/epochenvoy.jsw";
import Save from "./pages/usesave.jsx";
import { auth } from "./services/firebase";

//through signin routes here for saves, need auth for account saves but not local or uploaded

//need users for google sign in/google play. do i need/want anyother sign ins?



export default App;