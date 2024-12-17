/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let dotX = [".com", ".net", ".us", ".io"];
let domainText = "";
function makeDomains() {
  pronoun.map(pronounEl => {
    adj.map(adjEl => {
      noun.map(nounEl => {
        dotX.map((dotXEl, index) => {
          domainText += `<li class="list-group-item ${
            index % 2 === 0 ? "bg-success text-white" : ""
          }">${pronounEl}${adjEl}${nounEl}${dotXEl}</li>`;
        });
      });
    });
  });
  document.getElementById("domain").innerHTML = domainText;
}
window.onload = function() {
  makeDomains();
};
