var e,t;e={},function(){var t,o,r,n,a,l,i,c={frameRate:150,animationTime:400,stepSize:100,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:!0,arrowScroll:50,fixedBackground:!0,excluded:""},s=!1,u={x:0,y:0},d=!1,m=document.documentElement,f=[],h=/^Mac/.test(navigator.platform),w={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},p={37:1,38:1,39:1,40:1};function v(){if(!d&&document.body){d=!0;var e=document.body,t=document.documentElement,o=window.innerHeight,l=e.scrollHeight;if(m=document.compatMode.indexOf("CSS")>=0?t:e,r=e,c.keyboardSupport&&N("keydown",k),top!=self)s=!0;else if(G&&l>o&&(e.offsetHeight<=o||t.offsetHeight<=o)){var i,u=document.createElement("div");if(u.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+m.scrollHeight+"px",document.body.appendChild(u),setTimeout(a=function(){i||(i=setTimeout(function(){u.style.height="0",u.style.height=m.scrollHeight+"px",i=null},500))},10),N("resize",a),(n=new R(a)).observe(e,{attributes:!0,childList:!0,characterData:!1}),m.offsetHeight<=o){var f=document.createElement("div");f.style.clear="both",e.appendChild(f)}}c.fixedBackground||(e.style.backgroundAttachment="scroll",t.style.backgroundAttachment="scroll")}}var y=[],b=!1,g=Date.now();function S(e,t,o){var r,n;if(r=(r=t)>0?1:-1,n=(n=o)>0?1:-1,(u.x!==r||u.y!==n)&&(u.x=r,u.y=n,y=[],g=0),1!=c.accelerationMax){var a=Date.now()-g;if(a<c.accelerationDelta){var l=(1+50/a)/2;l>1&&(l=Math.min(l,c.accelerationMax),t*=l,o*=l)}g=Date.now()}if(y.push({x:t,y:o,lastX:t<0?.99:-.99,lastY:o<0?.99:-.99,start:Date.now()}),!b){var i=e===j()||e===document.body;null==e.$scrollBehavior&&function(e){var t=M(e);if(null==B[t]){var o=getComputedStyle(e,"")["scroll-behavior"];B[t]="smooth"==o}return B[t]}(e)&&(e.$scrollBehavior=e.style.scrollBehavior,e.style.scrollBehavior="auto");var s=function(r){for(var n=Date.now(),a=0,l=0,u=0;u<y.length;u++){var d,m=y[u],f=n-m.start,h=f>=c.animationTime,w=h?1:f/c.animationTime;c.pulseAlgorithm&&(w=(d=w)>=1?1:d<=0?0:(1==c.pulseNormalize&&(c.pulseNormalize/=q(1)),q(d)));var p=m.x*w-m.lastX>>0,v=m.y*w-m.lastY>>0;a+=p,l+=v,m.lastX+=p,m.lastY+=v,h&&(y.splice(u,1),u--)}i?window.scrollBy(a,l):(a&&(e.scrollLeft+=a),l&&(e.scrollTop+=l)),t||o||(y=[]),y.length?$(s,e,1e3/c.frameRate+1):(b=!1,null!=e.$scrollBehavior&&(e.style.scrollBehavior=e.$scrollBehavior,e.$scrollBehavior=null))};$(s,e,0),b=!0}}function x(e){d||v();var t=e.target;if(e.defaultPrevented||e.ctrlKey||Y(r,"embed")||Y(t,"embed")&&/\.pdf/i.test(t.src)||Y(r,"object")||t.shadowRoot)return!0;var o=-e.wheelDeltaX||e.deltaX||0,n=-e.wheelDeltaY||e.deltaY||0;h&&(e.wheelDeltaX&&K(e.wheelDeltaX,120)&&(o=-(e.wheelDeltaX/Math.abs(e.wheelDeltaX)*120)),e.wheelDeltaY&&K(e.wheelDeltaY,120)&&(n=-(e.wheelDeltaY/Math.abs(e.wheelDeltaY)*120))),o||n||(n=-e.wheelDelta||0),1===e.deltaMode&&(o*=40,n*=40);var a=H(t);return a?!!function(e){if(e){f.length||(f=[e,e,e]),e=Math.abs(e),f.push(e),f.shift(),clearTimeout(l),l=setTimeout(function(){try{localStorage.SS_deltaBuffer=f.join(",")}catch(e){}},1e3);var t=e>120&&P(e),o=!P(120)&&!P(100)&&!t;return e<50||o}}(n)||void(Math.abs(o)>1.2&&(o*=c.stepSize/120),Math.abs(n)>1.2&&(n*=c.stepSize/120),S(a,o,n),e.preventDefault(),C()):!s||!F||(Object.defineProperty(e,"target",{value:window.frameElement}),parent.wheel(e))}function k(e){var t=e.target,o=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==w.spacebar;document.body.contains(r)||(r=document.activeElement);var n=/^(button|submit|radio|checkbox|file|color|image)$/i;if(e.defaultPrevented||/^(textarea|select|embed|object)$/i.test(t.nodeName)||Y(t,"input")&&!n.test(t.type)||Y(r,"video")||function(e){var t=e.target,o=!1;if(-1!=document.URL.indexOf("www.youtube.com/watch"))do if(o=t.classList&&t.classList.contains("html5-video-controls"))break;while(t=t.parentNode)return o}(e)||t.isContentEditable||o||(Y(t,"button")||Y(t,"input")&&n.test(t.type))&&e.keyCode===w.spacebar||Y(t,"input")&&"radio"==t.type&&p[e.keyCode])return!0;var a=0,l=0,i=H(r);if(!i)return!s||!F||parent.keydown(e);var u=i.clientHeight;switch(i==document.body&&(u=window.innerHeight),e.keyCode){case w.up:l=-c.arrowScroll;break;case w.down:l=c.arrowScroll;break;case w.spacebar:l=-(e.shiftKey?1:-1)*u*.9;break;case w.pageup:l=-(.9*u);break;case w.pagedown:l=.9*u;break;case w.home:i==document.body&&document.scrollingElement&&(i=document.scrollingElement),l=-i.scrollTop;break;case w.end:var d=i.scrollHeight-i.scrollTop-u;l=d>0?d+10:0;break;case w.left:a=-c.arrowScroll;break;case w.right:a=c.arrowScroll;break;default:return!0}S(i,a,l),e.preventDefault(),C()}function D(e){r=e.target}var M=(t=0,function(e){return e.uniqueID||(e.uniqueID=t++)}),E={},T={},B={};function C(){clearTimeout(i),i=setInterval(function(){E=T=B={}},1e3)}function z(e,t,o){for(var r=o?E:T,n=e.length;n--;)r[M(e[n])]=t;return t}function H(e){var t=[],o=document.body,r=m.scrollHeight;do{var n=T[M(e)];if(n)return z(t,n);if(t.push(e),r===e.scrollHeight){var a=O(m)&&O(o)||A(m);if(s&&L(m)||!s&&a)return z(t,j())}else if(L(e)&&A(e))return z(t,e)}while(e=e.parentElement)}function L(e){return e.clientHeight+10<e.scrollHeight}function O(e){return"hidden"!==getComputedStyle(e,"").getPropertyValue("overflow-y")}function A(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return"scroll"===t||"auto"===t}function N(e,t,o){window.addEventListener(e,t,o||!1)}function X(e,t,o){window.removeEventListener(e,t,o||!1)}function Y(e,t){return e&&(e.nodeName||"").toLowerCase()===t.toLowerCase()}if(window.localStorage&&localStorage.SS_deltaBuffer)try{f=localStorage.SS_deltaBuffer.split(",")}catch(e){}function K(e,t){return Math.floor(e/t)==e/t}function P(e){return K(f[0],e)&&K(f[1],e)&&K(f[2],e)}var $=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e,t,o){window.setTimeout(e,o||1e3/60)},R=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,j=(o=document.scrollingElement,function(){if(!o){var e=document.createElement("div");e.style.cssText="height:10000px;width:1px;",document.body.appendChild(e);var t=document.body.scrollTop;document.documentElement.scrollTop,window.scrollBy(0,3),document.body.scrollTop!=t?o=document.body:o=document.documentElement,window.scrollBy(0,-3),document.body.removeChild(e)}return o});function q(e){var t,o;return(e*=c.pulseScale)<1?t=e-(1-Math.exp(-e)):(e-=1,t=(o=Math.exp(-1))+(1-Math.exp(-e))*(1-o)),t*c.pulseNormalize}var _=window.navigator.userAgent,V=/Edge/.test(_),F=/chrome/i.test(_)&&!V,I=/safari/i.test(_)&&!V,W=/mobile/i.test(_),U=/Windows NT 6.1/i.test(_)&&/rv:11/i.test(_),G=I&&(/Version\/8/i.test(_)||/Version\/9/i.test(_)),J=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){J=!0}}))}catch(e){}var Q=!!J&&{passive:!1},Z="onwheel"in document.createElement("div")?"wheel":"mousewheel";function ee(e){for(var t in e)c.hasOwnProperty(t)&&(c[t]=e[t])}Z&&(F||I||U)&&!W&&(N(Z,x,Q),N("mousedown",D),N("load",v)),ee.destroy=function(){n&&n.disconnect(),X(Z,x),X("mousedown",D),X("keydown",k),X("resize",a),X("load",v)},window.SmoothScrollOptions&&ee(window.SmoothScrollOptions),"function"==typeof define&&define.amd?define(function(){return ee}):e=ee}(),((t=e)&&t.__esModule?t.default:t)({animationTime:1e3,stepSize:150,accelerationDelta:50,accelerationMax:3,keyboardSupport:!0,arrowScroll:50,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,touchpadSupport:!1,fixedBackground:!0,excluded:""});
//# sourceMappingURL=index.fb45a4a0.js.map
