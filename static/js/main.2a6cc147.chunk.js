(this.webpackJsonpexamps=this.webpackJsonpexamps||[]).push([[0],[,,function(e,t,a){},,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),u=a(4),c=a.n(u),l=(a(10),a(1));a(2);var o=function(e){return r.a.createElement("div",{className:"tablo-number"},r.a.createElement("span",{className:e.maxCounterValue===e.counter?"limit":""},e.startCounterValue<0||e.startCounterValue>=e.maxCounterValue?"Error":e.counter))};var s=function(e){return r.a.createElement("div",null,r.a.createElement("button",{className:"buttonInc",onClick:e.addCounter,disabled:e.maxCounterValue===e.counter},"inc"),r.a.createElement("button",{className:"buttonIReset",onClick:e.reset,disabled:0===e.counter},"reset"))},m=function(e){var t=Object(n.useState)(0),a=Object(l.a)(t,2),u=a[0],c=a[1],o=Object(n.useState)(5),s=Object(l.a)(o,2),m=s[0],i=s[1],b=m<0||u>=m?"error":"",d=u<0||u>=m?"error":"",p=u<0||u>=m;return r.a.createElement("div",{className:"App-counter"},r.a.createElement("div",{className:"tablo"},r.a.createElement("div",{className:"tablo-items"},r.a.createElement("span",{className:"tablo-name"},"max value:"),r.a.createElement("input",{className:b,type:"number",value:e.maxCounterValue,onChange:function(t){i(Number(t.currentTarget.value)),e.getMaxValue(Number(t.currentTarget.value)),e.setCounterText()}})),r.a.createElement("div",{className:"tablo-items"},r.a.createElement("span",{className:"tablo-name"},"start value:"),r.a.createElement("input",{className:d,type:"number",value:e.startCounterValue,onChange:function(t){c(Number(t.currentTarget.value)),e.getStartValue(Number(t.currentTarget.value)),e.setCounterText()}}))),r.a.createElement("div",{className:"button-wrapper"},r.a.createElement("button",{disabled:p,className:"buttonInc",onClick:e.setCountValue},"SET")))};var i=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],u=t[1],c=Object(n.useState)(5),i=Object(l.a)(c,2),b=i[0],d=i[1],p=Object(n.useState)(0),v=Object(l.a)(p,2),E=v[0],C=v[1];return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-wrapper"},r.a.createElement(m,{getStartValue:function(e){C(e)},getMaxValue:function(e){d(e)},setCountValue:function(){u(E)},maxCounterValue:b,startCounterValue:E,setCounterText:function(){u(r.a.createElement("span",{className:"error2"},"Enter values and press 'set'"))}}),r.a.createElement("div",{className:"App-counter"},r.a.createElement("div",{className:"tablo"},r.a.createElement(o,{counter:a,maxCounterValue:b,startCounterValue:E})),r.a.createElement("div",{className:"button-wrapper"},r.a.createElement(s,{addCounter:function(){a<b&&u(a+1)},reset:function(){u(0)},maxCounterValue:b,counter:a})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.2a6cc147.chunk.js.map