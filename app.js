'use strict';

function main (){
  var ENTRY_POINT = '/';
  var layoutInstance = null;
  var navbarInstance = null;
  var rootElement = document.querySelector('#root');
  var links = [
    {name: 'Home',
    url: '/',
    },
    {name: 'Movies',
    url: '/movies',
    }
  ];

  generateLayout();
  generateNavbar();
  addListenersToNavBar();
  activateRouter();
  

  function generateLayout(){
    layoutInstance = new Layout(rootElement);
    layoutInstance.generate();
  }

  function generateNavbar(){
    navbarInstance = new Navbar(layoutInstance.header, links);
    navbarInstance.generate();
  }
  function activateRouter(){
    routerInstance.buildDOM(ENTRY_POINT, layoutInstance.main);
  }
  function addListenersToNavBar(){
    var anchors = document.querySelectorAll('nav a');
    anchors.forEach(function(anchor){
      anchor.addEventListener('click', changePage)
    })
  }
function changePage(event){
  // console.dir sirve para ver el objeto y todas sus propiedades de lo que esta dentro del console
  // console.dir(event.target.attributes.url.value);
  var url = event.target.attributes.url.value;
  routerInstance.buildDOM(url, layoutInstance.main);
}

};

window.addEventListener('load',main);