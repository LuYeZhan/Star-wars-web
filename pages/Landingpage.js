'use strict'

function LandingPage(parentElement){
  this.parentElement = parentElement;
  this.elements = null;
}

LandingPage.prototype.generate = function(){
  this.elements = `
    <header>
    <h1>Super Cool Star Wars website</h1>
    <h2>Here you can find the information to become the best fan of Star Wars </h2>
    </header>
  `;
  this.render();
}

LandingPage.prototype.render = function(){
  this.parentElement.innerHTML = this.elements;

}