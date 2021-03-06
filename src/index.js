  import Phaser from "phaser";
  import React from "react";
  import ReactDOM from "react-dom";
  import Title from "./components/gTitle.jsx";
  import playGame from "./phaser/scene";


  //console.log(App);

  export const config = {
      type: Phaser.AUTO,
      parent: "phaser",
      width: 800,
      height: 600,
      scene: playGame
  };

  const game = new Phaser.Game(config);

  ReactDOM.render( <
      Title / > ,
      document.getElementById("root") || document.createElement("div")
  );