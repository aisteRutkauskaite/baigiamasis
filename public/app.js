!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);function o(){return!!localStorage.getItem("token")}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.createElement(e);for(var o in t)n.setAttribute(o,t[o]);for(var r=arguments.length,a=new Array(r>2?r-2:0),u=2;u<r;u++)a[u-2]=arguments[u];return a.forEach((function(e){var t=document.createTextNode(e);n.append(t)})),n}function a(e){e.preventDefault();var t={};d.forEach((function(e){console.log(e.name),t[e.name]=e.value})),console.log(t),fetch("http://rest.stecenka.lt/login",{headers:{"Content-type":"application/json"},method:"POST",body:JSON.stringify(t)}).then((function(e){return e.ok,e.json()})).then((function(t){t&&(localStorage.setItem("token",t),e.target.remove(),function(){document.body.style.backgroundColor="lightgrey";var e=document.createElement("h1");document.body.append(e),e.innerHTML="YES, your login is OK",e.classList.add()}())}))}var u,i,c,l,d=[{placeholder:"Email",name:"email",type:"email",value:""},{placeholder:"Password",name:"password",type:"password"}],f=[{type:"submit",name:"login",title:"Prisijungti"}];if(console.log(o()),!o()){var s=(u=d,i=f,c=a,l=document.createElement("form"),u.forEach((function(e){var t=r("input",e);t.addEventListener("keyup",(function(n){e.value=t.value})),l.append(t)})),i.forEach((function(e){var t=r("button",e,e.title);l.append(t)})),l.addEventListener("submit",c),l.classList.add(),l);document.body.append(s)}}]);