/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let pronoun = ["the", "our", "my", "her", "his"];
  let adj = ["great", "big", "bad", "broken", "beautifull"];
  let noun = ["jogger", "racoon", "car", "dog", "heart"];
  let extencion = [".com", ".cl", ".es", ".org", ".dev"];

  for (let e = 0; e < extencion.length; e++) {
    for (let n = 0; n < noun.length; n++) {
      for (let a = 0; a < adj.length; a++) {
        for (let p = 0; p < pronoun.length; p++) {
          let domain = "";
          domain += pronoun[p];
          domain += adj[a];
          domain += noun[n];
          domain += extencion[e];
          console.log(`${domain} \n`);
        }
      }
    }
  }
};
