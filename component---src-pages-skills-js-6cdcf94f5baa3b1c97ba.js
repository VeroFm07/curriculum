"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[785],{8013:function(t,e,n){n.r(e),n.d(e,{default:function(){return x}});var r=n(7294),i=n(6507),o=n(682),l=n(5893),a=function(){return a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},a.apply(this,arguments)},s=function(){function t(){}return t.isString=function(t){return"[object String]"===Object.prototype.toString.call(t)},t.isNumber=function(t){return"[object Number]"===Object.prototype.toString.call(t)},t.getHSL=function(e,n,r){var i=function(e){return t.isNumber(e)?e:e.minimum+n*(e.maximum-e.minimum)/r},o=i(e.hue),l=i(e.saturation),a=i(e.level);return"hsl(".concat(o,", ").concat(l,"%, ").concat(a,"%)")},t.getHeight=function(e){return t.isString(e)?e:"".concat(e,"px")},t}();!function(t,e){void 0===e&&(e={});var n=e.insertAt;if("undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}(":root {\n  --skillBarTextColor: #ffffff;\n  --skillBarBgColor: #eee;\n  --skillBarTitleBgColor: #d35400;\n  --skillBarBg: #e67e22;\n}\n\n.skillbar {\n  position:relative;\n  display:block;\n  margin-bottom:15px;\n  width:100%;\n  background: var(--skillBarBgColor);\n  border-radius: 3px;\n  -moz-border-radius:3px;\n  -webkit-border-radius:3px;\n  -webkit-transition:0.4s linear;\n  -moz-transition:0.4s linear;\n  -ms-transition:0.4s linear;\n  -o-transition:0.4s linear;\n  transition:0.4s linear;\n  -webkit-transition-property:width, background-color;\n  -moz-transition-property:width, background-color;\n  -o-transition-property:width, background-color;\n  transition-property:width, background-color;\n}\n\n.skillbar-title {\n  position:absolute;\n  top:0;\n  left:0;\n  width:110px;\n  font-weight:bold;\n  font-size:13px;\n  color: var(--skillBarTextColor);\n  background: var(--skillBarTitleBgColor);\n  -webkit-border-radius:3px 0 0 4px;\n  -moz-border-radius:3px 0 0 3px;\n  border-radius:3px 0 0 3px;\n  height:inherit;\n}\n\n.skillbar-title span {\n  display:block;\n  background:rgba(0, 0, 0, 0.1);\n  padding:0 20px;\n  height:inherit;\n  line-height:inherit;\n  -webkit-border-top-left-radius:3px;\n  -webkit-border-bottom-left-radius:3px;\n  -moz-border-radius-topleft:3px;\n  -moz-border-radius-bottomleft:3px;\n  border-top-left-radius:3px;\n  border-bottom-left-radius:3px;\n}\n\n.skillbar-bar {\n  height:inherit;\n  position:absolute;\n  left:110px;\n  background: var(--skillBarBg);\n  border-radius: 0 3px 3px 0;\n  -moz-border-radius: 0 3px 3px 0;\n  -webkit-border-radius: 0 3px 3px 0;\n}\n\n.skillbar-percent {\n  position:absolute;\n  right:10px;\n  top:0;\n  font-size:11px;\n  line-height:inherit;\n  color: var(--skillBarTextColor);\n}\n\n.collapsed {\n  width: 0% !important;\n}\n");var c=function(t){var e,n,i,o,c=t.skills,u=t.colors,d=t.barBackground,b=void 0===d?"transparent":d,p=t.offset,f=void 0===p?"25px":p,m=t.height,k=void 0===m?35:m,h=t.symbol,g=void 0===h?"%":h,v=t.animationDuration,x=void 0===v?3e3:v,y=t.animationDelay,S=void 0===y?1e3:y,E=t.animationThreshold,w=void 0===E?.8:E,B=(0,r.useRef)(null),C=(0,r.useState)(!0),_=C[0],N=C[1],j=(n=(0,r.useState)(!0),i=n[0],o=n[1],(0,r.useEffect)((function(){o(!1)}),[]),i);e=function(t,e,n){var i=(0,r.useState)(null),o=i[0],l=i[1];return(0,r.useEffect)((function(){if(!n&&t.current&&"function"==typeof IntersectionObserver){var r=new IntersectionObserver((function(t){l(t[0])}),e);return r.observe(t.current),function(){l(null),r.disconnect()}}return function(){}}),[t.current,e.threshold,e.root,e.rootMargin]),o}(B,{root:null,rootMargin:f,threshold:w},j),(0,r.useEffect)((function(){if(e&&e.isIntersecting){var t=setTimeout((function(){return N(!1)}),S);return function(){return clearTimeout(t)}}}),[e]);var T=(0,r.useCallback)((function(t,e){return t.color&&t.color.bar&&s.isString(t.color.bar)?t.color.bar:u&&u.bar?s.isString(u.bar)?u.bar:s.getHSL(u.bar,e,c.length):""}),[]),z=(0,r.useCallback)((function(t,e,n){return t.color&&t.color.title&&t.color.title[n]&&s.isString(t.color.title[n])?t.color.title[n]:u&&u.title&&u.title[n]?s.isString(u.title[n])?u.title[n]:s.getHSL(u.title[n],e,c.length):""}),[]);return(0,l.jsx)("div",a({"data-testid":"skillbar/root",ref:B},{children:c.map((function(t,e){return(0,l.jsxs)("div",a({className:"skillbar","data-testid":"skillbar/container",style:{height:"".concat(s.getHeight(k)),lineHeight:"".concat(s.getHeight(k)),background:b}},{children:[(0,l.jsx)("div",a({className:"skillbar-title","data-testid":"skillbar/title",style:{color:"".concat(z(t,e,"text")),background:"".concat(z(t,e,"background"))}},{children:(0,l.jsx)("span",{children:t.type})})),(0,l.jsx)("div",{"data-testid":"skillbar/bar",className:"skillbar-bar ".concat(_?"collapsed":""),style:{background:"".concat(T(t,e)),width:"calc((100% - 110px) * (".concat(t.level," * 0.01))"),transition:"width ".concat(x,"ms ease-in-out")}}),(0,l.jsxs)("div",a({className:"skillbar-percent","data-testid":"skillbar/percent"},{children:[t.level,g]}))]}),t.type)}))}))};var u=t=>{const{skills:e,colors:n}=t;return r.createElement("div",{className:"container__list"},r.createElement(c,{skills:e,colors:n,animationDelay:0,animationDuration:1500}))};const d=[{type:"HTML",level:100},{type:"CSS",level:80},{type:"Bootstrap",level:80},{type:"BEM",level:75},{type:"React JS",level:70},{type:"SASS",level:70},{type:"JavaScript",level:60},{type:"Gatsby",level:50},{type:"Contentful",level:50},{type:"Redux",level:40}],b={bar:"#3498db",title:{text:"#fff",background:"#3498db"}},p=[{type:"MYSQL",level:70}],f={bar:"#8a63e0",title:{text:"#fff",background:"#8a63e0"}},m=[{type:"Git",level:70}],k={bar:"#00d476",title:{text:"#fff",background:"#00d476"}},h=[{type:"Windows",level:90}],g={bar:"#ef9263",title:{text:"#fff",background:"#ef9263"}};var v=n(5094);var x=()=>r.createElement(i.Z,{menuColor:"#005db3"},r.createElement(v.Z,{title:"Conocimientos"}),r.createElement(o.Z,{className:"container__skills"},r.createElement("section",{className:"container__skills-block"},r.createElement("h2",null,"Frontend"),r.createElement(u,{skills:d,colors:b})),r.createElement("section",{className:"container__skills-block"},r.createElement("h2",null,"Backend"),r.createElement(u,{skills:p,colors:f})),r.createElement("section",{className:"container__skills-block"},r.createElement("h2",null,"Control de versiones"),r.createElement(u,{skills:m,colors:k})),r.createElement("section",{className:"container__skills-block"},r.createElement("h2",null,"Sistemas operativos"),r.createElement(u,{skills:h,colors:g}))))}}]);
//# sourceMappingURL=component---src-pages-skills-js-6cdcf94f5baa3b1c97ba.js.map