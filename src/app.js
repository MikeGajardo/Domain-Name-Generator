/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let fullUrl = [];
  let pronoun = ["the", "our"];
  let adjective = ["awesome", "gigantic"];
  let noun = ["skater", "bulldog"];
  let domain = [".com", ".org", ".eth"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adjective.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domain.length; l++) {
          fullUrl.push(pronoun[i] + adjective[j] + noun[k] + domain[l]);
          console.log(fullUrl[fullUrl.length - 1]);
        }
      }
    }
  }
};
