/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let dotX = [".com", ".net", ".us", ".io"];

window.onload = function() {
  //write your code here
  for (const pronounEl of pronoun) {
    for (const adjEl of adj) {
      for (const nounEl of noun) {
        for (const dotXEl of dotX) {
          console.log(pronounEl + adjEl + nounEl + dotXEl);
        }
      }
    }
  }
};
