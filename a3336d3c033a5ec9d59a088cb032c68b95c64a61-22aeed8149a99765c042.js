(self.webpackChunkdian_egor=self.webpackChunkdian_egor||[]).push([[452],{7111:function(e,t,n){"use strict";n.d(t,{kL:function(){return sn},bD:function(){return an},Xd:function(){return Qt},z:function(){return Kt},Ej:function(){return on},q3:function(){return nn},or:function(){return en},bC:function(){return un},f:function(){return rn},Nh:function(){return pn},oe:function(){return hn},$F:function(){return dn},Nl:function(){return gn},rd:function(){return mn},Hr:function(){return fn},e4:function(){return Jt},IX:function(){return cn}});var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};Object.create;function o(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"==typeof SuppressedError&&SuppressedError;var i=n(7294),a=n(6774),s=n.n(a),c="-ms-",u="-moz-",l="-webkit-",p="comm",f="rule",h="decl",d="@import",g="@keyframes",m="@layer",v=Math.abs,y=String.fromCharCode,b=Object.assign;function x(e){return e.trim()}function S(e,t){return(e=t.exec(e))?e[0]:e}function w(e,t,n){return e.replace(t,n)}function $(e,t){return e.indexOf(t)}function C(e,t){return 0|e.charCodeAt(t)}function I(e,t,n){return e.slice(t,n)}function k(e){return e.length}function P(e){return e.length}function A(e,t){return t.push(e),e}function E(e,t){return e.filter((function(e){return!S(e,t)}))}var O=1,R=1,_=0,z=0,j=0,N="";function D(e,t,n,r,o,i,a,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:O,column:R,length:a,return:"",siblings:s}}function T(e,t){return b(D("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function F(e){for(;e.root;)e=T(e.root,{children:[e]});A(e,e.siblings)}function L(){return j=z>0?C(N,--z):0,R--,10===j&&(R=1,O--),j}function G(){return j=z<_?C(N,z++):0,R++,10===j&&(R=1,O++),j}function B(){return C(N,z)}function M(){return z}function W(e,t){return I(N,e,t)}function Y(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function H(e){return O=R=1,_=k(N=e),z=0,[]}function q(e){return N="",e}function Z(e){return x(W(z-1,X(91===e?e+2:40===e?e+1:e)))}function U(e){for(;(j=B())&&j<33;)G();return Y(e)>2||Y(j)>3?"":" "}function V(e,t){for(;--t&&G()&&!(j<48||j>102||j>57&&j<65||j>70&&j<97););return W(e,M()+(t<6&&32==B()&&32==G()))}function X(e){for(;G();)switch(j){case e:return z;case 34:case 39:34!==e&&39!==e&&X(j);break;case 40:41===e&&X(e);break;case 92:G()}return z}function J(e,t){for(;G()&&e+j!==57&&(e+j!==84||47!==B()););return"/*"+W(t,z-1)+"*"+y(47===e?e:G())}function K(e){for(;!Y(B());)G();return W(e,z)}function Q(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function ee(e,t,n,r){switch(e.type){case m:if(e.children.length)break;case d:case h:return e.return=e.return||e.value;case p:return"";case g:return e.return=e.value+"{"+Q(e.children,r)+"}";case f:if(!k(e.value=e.props.join(",")))return""}return k(n=Q(e.children,r))?e.return=e.value+"{"+n+"}":""}function te(e,t,n){switch(function(e,t){return 45^C(e,0)?(((t<<2^C(e,0))<<2^C(e,1))<<2^C(e,2))<<2^C(e,3):0}(e,t)){case 5103:return l+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return l+e+e;case 4789:return u+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return l+e+u+e+c+e+e;case 5936:switch(C(e,t+11)){case 114:return l+e+c+w(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return l+e+c+w(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return l+e+c+w(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return l+e+c+e+e;case 6165:return l+e+c+"flex-"+e+e;case 5187:return l+e+w(e,/(\w+).+(:[^]+)/,l+"box-$1$2"+c+"flex-$1$2")+e;case 5443:return l+e+c+"flex-item-"+w(e,/flex-|-self/g,"")+(S(e,/flex-|baseline/)?"":c+"grid-row-"+w(e,/flex-|-self/g,""))+e;case 4675:return l+e+c+"flex-line-pack"+w(e,/align-content|flex-|-self/g,"")+e;case 5548:return l+e+c+w(e,"shrink","negative")+e;case 5292:return l+e+c+w(e,"basis","preferred-size")+e;case 6060:return l+"box-"+w(e,"-grow","")+l+e+c+w(e,"grow","positive")+e;case 4554:return l+w(e,/([^-])(transform)/g,"$1"+l+"$2")+e;case 6187:return w(w(w(e,/(zoom-|grab)/,l+"$1"),/(image-set)/,l+"$1"),e,"")+e;case 5495:case 3959:return w(e,/(image-set\([^]*)/,l+"$1$`$1");case 4968:return w(w(e,/(.+:)(flex-)?(.*)/,l+"box-pack:$3"+c+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+l+e+e;case 4200:if(!S(e,/flex-|baseline/))return c+"grid-column-align"+I(e,t)+e;break;case 2592:case 3360:return c+w(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,S(e.props,/grid-\w+-end/)}))?~$(e+(n=n[t].value),"span")?e:c+w(e,"-start","")+e+c+"grid-row-span:"+(~$(n,"span")?S(n,/\d+/):+S(n,/\d+/)-+S(e,/\d+/))+";":c+w(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return S(e.props,/grid-\w+-start/)}))?e:c+w(w(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return w(e,/(.+)-inline(.+)/,l+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(k(e)-1-t>6)switch(C(e,t+1)){case 109:if(45!==C(e,t+4))break;case 102:return w(e,/(.+:)(.+)-([^]+)/,"$1"+l+"$2-$3$1"+u+(108==C(e,t+3)?"$3":"$2-$3"))+e;case 115:return~$(e,"stretch")?te(w(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return w(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,o,i,a,s){return c+n+":"+r+s+(o?c+n+"-span:"+(i?a:+a-+r)+s:"")+e}));case 4949:if(121===C(e,t+6))return w(e,":",":"+l)+e;break;case 6444:switch(C(e,45===C(e,14)?18:11)){case 120:return w(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+l+(45===C(e,14)?"inline-":"")+"box$3$1"+l+"$2$3$1"+c+"$2box$3")+e;case 100:return w(e,":",":"+c)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return w(e,"scroll-","scroll-snap-")+e}return e}function ne(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case h:return void(e.return=te(e.value,e.length,n));case g:return Q([T(e,{value:w(e.value,"@","@"+l)})],r);case f:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(S(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":F(T(e,{props:[w(t,/:(read-\w+)/,":"+u+"$1")]})),F(T(e,{props:[t]})),b(e,{props:E(n,r)});break;case"::placeholder":F(T(e,{props:[w(t,/:(plac\w+)/,":"+l+"input-$1")]})),F(T(e,{props:[w(t,/:(plac\w+)/,":"+u+"$1")]})),F(T(e,{props:[w(t,/:(plac\w+)/,c+"input-$1")]})),F(T(e,{props:[t]})),b(e,{props:E(n,r)})}return""}))}}function re(e){return q(oe("",null,null,null,[""],e=H(e),0,[0],e))}function oe(e,t,n,r,o,i,a,s,c){for(var u=0,l=0,p=a,f=0,h=0,d=0,g=1,m=1,v=1,b=0,x="",S=o,I=i,P=r,E=x;m;)switch(d=b,b=G()){case 40:if(108!=d&&58==C(E,p-1)){-1!=$(E+=w(Z(b),"&","&\f"),"&\f")&&(v=-1);break}case 34:case 39:case 91:E+=Z(b);break;case 9:case 10:case 13:case 32:E+=U(d);break;case 92:E+=V(M()-1,7);continue;case 47:switch(B()){case 42:case 47:A(ae(J(G(),M()),t,n,c),c);break;default:E+="/"}break;case 123*g:s[u++]=k(E)*v;case 125*g:case 59:case 0:switch(b){case 0:case 125:m=0;case 59+l:-1==v&&(E=w(E,/\f/g,"")),h>0&&k(E)-p&&A(h>32?se(E+";",r,n,p-1,c):se(w(E," ","")+";",r,n,p-2,c),c);break;case 59:E+=";";default:if(A(P=ie(E,t,n,u,l,o,s,x,S=[],I=[],p,i),i),123===b)if(0===l)oe(E,t,P,P,S,i,p,s,I);else switch(99===f&&110===C(E,3)?100:f){case 100:case 108:case 109:case 115:oe(e,P,P,r&&A(ie(e,P,P,0,0,o,s,x,o,S=[],p,I),I),o,I,p,s,r?S:I);break;default:oe(E,P,P,P,[""],I,0,s,I)}}u=l=h=0,g=v=1,x=E="",p=a;break;case 58:p=1+k(E),h=d;default:if(g<1)if(123==b)--g;else if(125==b&&0==g++&&125==L())continue;switch(E+=y(b),b*g){case 38:v=l>0?1:(E+="\f",-1);break;case 44:s[u++]=(k(E)-1)*v,v=1;break;case 64:45===B()&&(E+=Z(G())),f=B(),l=p=k(x=E+=K(M())),b++;break;case 45:45===d&&2==k(E)&&(g=0)}}return i}function ie(e,t,n,r,o,i,a,s,c,u,l,p){for(var h=o-1,d=0===o?i:[""],g=P(d),m=0,y=0,b=0;m<r;++m)for(var S=0,$=I(e,h+1,h=v(y=a[m])),C=e;S<g;++S)(C=x(y>0?d[S]+" "+$:w($,/&\f/g,d[S])))&&(c[b++]=C);return D(e,t,n,0===o?f:s,c,u,l,p)}function ae(e,t,n,r){return D(e,t,n,p,y(j),I(e,2,-2),0,r)}function se(e,t,n,r,o){return D(e,t,n,h,I(e,0,r),I(e,r+1,-1),r,o)}var ce={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ue="undefined"!=typeof process&&void 0!=={}&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",le="undefined"!=typeof window&&"HTMLElement"in window,pe=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={}&&void 0!=={}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={}.REACT_APP_SC_DISABLE_SPEEDY&&{}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={}&&void 0!=={}.SC_DISABLE_SPEEDY&&""!=={}.SC_DISABLE_SPEEDY&&("false"!=={}.SC_DISABLE_SPEEDY&&{}.SC_DISABLE_SPEEDY)),fe=(new Set,Object.freeze([])),he=Object.freeze({});function de(e,t,n){return void 0===n&&(n=he),e.theme!==n.theme&&e.theme||t||n.theme}var ge=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),me=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ve=/(^-|-$)/g;function ye(e){return e.replace(me,"-").replace(ve,"")}var be=/(a)(d)/gi,xe=function(e){return String.fromCharCode(e+(e>25?39:97))};function Se(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=xe(t%52)+n;return(xe(t%52)+n).replace(be,"$1-$2")}var we,$e=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ce=function(e){return $e(5381,e)};function Ie(e){return Se(Ce(e)>>>0)}function ke(e){return"string"==typeof e&&!0}var Pe="function"==typeof Symbol&&Symbol.for,Ae=Pe?Symbol.for("react.memo"):60115,Ee=Pe?Symbol.for("react.forward_ref"):60112,Oe={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Re={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_e={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ze=((we={})[Ee]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},we[Ae]=_e,we);function je(e){return("type"in(t=e)&&t.type.$$typeof)===Ae?_e:"$$typeof"in e?ze[e.$$typeof]:Oe;var t}var Ne=Object.defineProperty,De=Object.getOwnPropertyNames,Te=Object.getOwnPropertySymbols,Fe=Object.getOwnPropertyDescriptor,Le=Object.getPrototypeOf,Ge=Object.prototype;function Be(e,t,n){if("string"!=typeof t){if(Ge){var r=Le(t);r&&r!==Ge&&Be(e,r,n)}var o=De(t);Te&&(o=o.concat(Te(t)));for(var i=je(e),a=je(t),s=0;s<o.length;++s){var c=o[s];if(!(c in Re||n&&n[c]||a&&c in a||i&&c in i)){var u=Fe(t,c);try{Ne(e,c,u)}catch(e){}}}}return e}function Me(e){return"function"==typeof e}function We(e){return"object"==typeof e&&"styledComponentId"in e}function Ye(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function He(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function qe(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ze(e,t,n){if(void 0===n&&(n=!1),!n&&!qe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ze(e[r],t[r]);else if(qe(t))for(var r in t)e[r]=Ze(e[r],t[r]);return e}function Ue(e,t){Object.defineProperty(e,"toString",{value:t})}function Ve(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Xe=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw Ve(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),s=(i=0,t.length);i<s;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+="".concat(this.tag.getRule(i)).concat("/*!sc*/\n");return t},e}(),Je=new Map,Ke=new Map,Qe=1,et=function(e){if(Je.has(e))return Je.get(e);for(;Ke.has(Qe);)Qe++;var t=Qe++;return Je.set(e,t),Ke.set(t,e),t},tt=function(e,t){Je.set(e,t),Ke.set(t,e)},nt="style[".concat(ue,"][").concat("data-styled-version",'="').concat("6.0.8",'"]'),rt=new RegExp("^".concat(ue,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ot=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},it=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split("/*!sc*/\n"),o=[],i=0,a=r.length;i<a;i++){var s=r[i].trim();if(s){var c=s.match(rt);if(c){var u=0|parseInt(c[1],10),l=c[2];0!==u&&(tt(l,u),ot(e,l,c[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(s)}}};function at(){return n.nc}var st=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(ue,"]")));return t[t.length-1]}(n),i=void 0!==o?o.nextSibling:null;r.setAttribute(ue,"active"),r.setAttribute("data-styled-version","6.0.8");var a=at();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},ct=function(){function e(e){this.element=st(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw Ve(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),ut=function(){function e(e){this.element=st(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),lt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),pt=le,ft={isServer:!le,useCSSOMInjection:!pe},ht=function(){function e(e,t,n){void 0===e&&(e=he),void 0===t&&(t={});var o=this;this.options=r(r({},ft),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&le&&pt&&(pt=!1,function(e){for(var t=document.querySelectorAll(nt),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(ue)&&(it(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this)),Ue(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return Ke.get(e)}(n);if(void 0===o)return"continue";var i=e.names.get(o),a=t.getGroup(n);if(void 0===i||0===a.length)return"continue";var s="".concat(ue,".g").concat(n,'[id="').concat(o,'"]'),c="";void 0!==i&&i.forEach((function(e){e.length>0&&(c+="".concat(e,","))})),r+="".concat(a).concat(s,'{content:"').concat(c,'"}').concat("/*!sc*/\n")},i=0;i<n;i++)o(i);return r}(o)}))}return e.registerId=function(e){return et(e)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(r(r({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new lt(n):t?new ct(n):new ut(n)}(this.options),new Xe(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(et(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(et(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(et(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),dt=/&/g,gt=/^\s*\/\/.*$/gm;function mt(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=mt(e.children,t)),e}))}function vt(e){var t,n,r,o=void 0===e?he:e,i=o.options,a=void 0===i?he:i,s=o.plugins,c=void 0===s?fe:s,u=function(e,r,o){return o===n||o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},l=c.slice();l.push((function(e){e.type===f&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(dt,n).replace(r,u))})),a.prefix&&l.push(ne),l.push(ee);var p=function(e,o,i,s){void 0===o&&(o=""),void 0===i&&(i=""),void 0===s&&(s="&"),t=s,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var c=e.replace(gt,""),u=re(i||o?"".concat(i," ").concat(o," { ").concat(c," }"):c);a.namespace&&(u=mt(u,a.namespace));var p,f,h,d=[];return Q(u,(p=l.concat((h=function(e){return d.push(e)},function(e){e.root||(e=e.return)&&h(e)})),f=P(p),function(e,t,n,r){for(var o="",i=0;i<f;i++)o+=p[i](e,t,n,r)||"";return o})),d};return p.hash=c.length?c.reduce((function(e,t){return t.name||Ve(15),$e(e,t.name)}),5381).toString():"",p}var yt=new ht,bt=vt(),xt=i.createContext({shouldForwardProp:void 0,styleSheet:yt,stylis:bt}),St=(xt.Consumer,i.createContext(void 0));function wt(){return(0,i.useContext)(xt)}function $t(e){var t=(0,i.useState)(e.stylisPlugins),n=t[0],r=t[1],o=wt().styleSheet,a=(0,i.useMemo)((function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,o]),c=(0,i.useMemo)((function(){return vt({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})}),[e.enableVendorPrefixes,e.namespace,n]);(0,i.useEffect)((function(){s()(n,e.stylisPlugins)||r(e.stylisPlugins)}),[e.stylisPlugins]);var u=(0,i.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:c}}),[e.shouldForwardProp,a,c]);return i.createElement(xt.Provider,{value:u},i.createElement(St.Provider,{value:c},e.children))}var Ct=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=bt);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Ue(this,(function(){throw Ve(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=bt),this.name+e.hash},e}(),It=function(e){return e>="A"&&e<="Z"};function kt(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;It(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Pt=function(e){return null==e||!1===e||""===e},At=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!Pt(a)&&(Array.isArray(a)&&a.isCss||Me(a)?r.push("".concat(kt(i),":"),a,";"):qe(a)?r.push.apply(r,o(o(["".concat(i," {")],At(a),!1),["}"],!1)):r.push("".concat(kt(i),": ").concat((t=i,null==(n=a)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in ce||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Et(e,t,n,r){return Pt(e)?[]:We(e)?[".".concat(e.styledComponentId)]:Me(e)?!Me(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:Et(e(t),t,n,r):e instanceof Ct?n?(e.inject(n,r),[e.getName(r)]):[e]:qe(e)?At(e):Array.isArray(e)?Array.prototype.concat.apply(fe,e.map((function(e){return Et(e,t,n,r)}))):[e.toString()];var o}function Ot(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Me(n)&&!We(n))return!1}return!0}var Rt=Ce("6.0.8"),_t=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Ot(e),this.componentId=t,this.baseHash=$e(Rt,t),this.baseStyle=n,ht.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Ye(r,this.staticRulesId);else{var o=He(Et(this.rules,e,t,n)),i=Se($e(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=n(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}r=Ye(r,i),this.staticRulesId=i}else{for(var s=$e(this.baseHash,n.hash),c="",u=0;u<this.rules.length;u++){var l=this.rules[u];if("string"==typeof l)c+=l;else if(l){var p=He(Et(l,e,t,n));s=$e(s,p+u),c+=p}}if(c){var f=Se(s>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(c,".".concat(f),void 0,this.componentId)),r=Ye(r,f)}}return r},e}(),zt=i.createContext(void 0);zt.Consumer;var jt={};new Set;function Nt(e,t,n){var o=We(e),a=e,s=!ke(e),c=t.attrs,u=void 0===c?fe:c,l=t.componentId,p=void 0===l?function(e,t){var n="string"!=typeof e?"sc":ye(e);jt[n]=(jt[n]||0)+1;var r="".concat(n,"-").concat(Ie("6.0.8"+n+jt[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):l,f=t.displayName,h=(void 0===f&&function(e){ke(e)?"styled.".concat(e):"Styled(".concat(function(e){return e.displayName||e.name||"Component"}(e),")")}(e),t.displayName&&t.componentId?"".concat(ye(t.displayName),"-").concat(t.componentId):t.componentId||p),d=o&&a.attrs?a.attrs.concat(u).filter(Boolean):u,g=t.shouldForwardProp;if(o&&a.shouldForwardProp){var m=a.shouldForwardProp;if(t.shouldForwardProp){var v=t.shouldForwardProp;g=function(e,t){return m(e,t)&&v(e,t)}}else g=m}var y=new _t(n,h,o?a.componentStyle:void 0);var b=i.forwardRef((function(e,t){return function(e,t,n){var o=e.attrs,a=e.componentStyle,s=e.defaultProps,c=e.foldedComponentIds,u=e.styledComponentId,l=e.target,p=i.useContext(zt),f=wt(),h=e.shouldForwardProp||f.shouldForwardProp,d=function(e,t,n){for(var o,i=r(r({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var s=Me(o=e[a])?o(i):o;for(var c in s)i[c]="className"===c?Ye(i[c],s[c]):"style"===c?r(r({},i[c]),s[c]):s[c]}return t.className&&(i.className=Ye(i.className,t.className)),i}(o,t,de(t,p,s)||he),g=d.as||l,m={};for(var v in d)void 0===d[v]||"$"===v[0]||"as"===v||"theme"===v||("forwardedAs"===v?m.as=d.forwardedAs:h&&!h(v,g)||(m[v]=d[v]));var y=function(e,t){var n=wt();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(a,d),b=Ye(c,u);return y&&(b+=" "+y),d.className&&(b+=" "+d.className),m[ke(g)&&!ge.has(g)?"class":"className"]=b,m.ref=n,(0,i.createElement)(g,m)}(b,e,t)}));return b.attrs=d,b.componentStyle=y,b.shouldForwardProp=g,b.foldedComponentIds=o?Ye(a.foldedComponentIds,a.styledComponentId):"",b.styledComponentId=h,b.target=o?a.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)Ze(e,o[r],!0);return e}({},a.defaultProps,e):e}}),Ue(b,(function(){return".".concat(b.styledComponentId)})),s&&Be(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function Dt(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Tt=function(e){return Object.assign(e,{isCss:!0})};function Ft(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Me(e)||qe(e))return Tt(Et(Dt(fe,o([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Et(r):Tt(Et(Dt(r,t)))}function Lt(e,t,n){if(void 0===n&&(n=he),!t)throw Ve(1,t);var i=function(r){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,Ft.apply(void 0,o([r],i,!1)))};return i.attrs=function(o){return Lt(e,t,r(r({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},i.withConfig=function(o){return Lt(e,t,r(r({},n),o))},i}var Gt=function(e){return Lt(Nt,e)},Bt=Gt;ge.forEach((function(e){Bt[e]=Gt(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Ot(e),ht.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var o=r(He(Et(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&ht.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=at(),r=He([n&&'nonce="'.concat(n,'"'),"".concat(ue,'="true"'),"".concat("data-styled-version",'="').concat("6.0.8",'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Ve(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw Ve(2);var n=((t={})[ue]="",t["data-styled-version"]="6.0.8",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=at();return o&&(n.nonce=o),[i.createElement("style",r({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new ht({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Ve(2);return i.createElement($t,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Ve(3)}})(),"__sc-".concat(ue,"__");const Mt="rgba(255, 250, 244, 1)",Wt="#37474E",Yt="rgba(92, 111, 106, 1)",Ht=n(5556).Z,qt=n(6009).Z,Zt=`(min-width: ${"360px"})`,Ut=`(min-width: ${"612px"})`,Vt=`(min-width: ${"880px"})`,Xt=`(min-width: ${"1480px"})`,Jt=Bt.p`
    font-size: 30px;
    @media ${Zt} {
        font-size: 36px;
    }
    @media ${Ut} {
        font-size: 40px;
    }
    margin-top: 36px;
    text-align: center;
    letter-spacing: 6px;
    font-weight: 300;
    opacity: 85%;
    color: ${Yt};
`,Kt=Bt.div`
    text-align: center;
    margin-top: 200px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 100px;
    color: ${Yt};
    font-family: Lato;
    font-size: 40px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    opacity: 85%;
    letter-spacing: 6px;
`,Qt=(Bt.div`
`,Bt.div`
    content: "";
    background-image: url(${qt});
    background-repeat: no-repeat;
    background-size: auto;
    background-attachment: fixed;
    background-position: top right;        
    opacity: ${e=>e.$imageOpacity};
    position: relative;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: -1;
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: ${Mt};

    @media ${Vt} {
        background-image: url(${Ht});   
    }
`),en=Bt.div`
    position: relative;
    font-family: Lato;
    color: ${Wt};
    flex-direction: column;
    overflow: auto;
    width: 100%;
    margin: 0;
    z-index: 1;
    background-color: ${Mt};
    `,tn=(Bt.ul`
`,`font-size: 16px;\nfont-family: Lato;\nletter-spacing: 2.8px;\nline-height: 30px;\n\n@media ${Ut} {\n    font-size: 18px;\n    line-height: 32px;\n    \n}\n@media ${Xt} {\n    font-size: 20px;\n    line-height: 36px;\n    \n}`),nn=Bt.p`
    ${tn}
    margin-top: 52px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 200px;
    font-weight: 400;
    max-width: 300px;
    
    @media ${Ut} {
        max-width: 466px;
    }
    @media ${Xt} {
        margin-top: 68px;
        max-width: 512px;  
    }
`,rn=Bt.p`
    font-size: 16px;
    @media ${Zt} {
        font-size: 20px;
    }
    @media ${Ut} {
        font-size: 24px;
    }
    
    color: ${Yt};
    letter-spacing: 3.6px;
    font-weight: 400;
    margin-top: 215px;
`,on=Bt.h1`
    font-size: 74px;
    margin: 48px auto;
    letter-spacing: 11.1px;
    padding: 0px 40px;
    @media ${Ut} {
        font-size: 110px;
        letter-spacing: 16.5px;
        margin: 45px auto;
        padding: 0px 80px;
    }
    @media ${Xt} {
        font-size: 150px;
        letter-spacing: 21px;
        margin: 0.6empx auto;
        padding: 0px 80px;
    }
    
    color: ${Wt};
    font-family: 'Poiret One';
    font-style: normal;
    font-weight: 400;
    -webkit-text-stroke: 1px ${Wt};
    
`,an=Bt.a`
    font-family: Lato;
    color: ${Wt};
    display: block;
    font-weight: 700;
    // line-height: normal;
    text-decoration:none;
    cursor: pointer;

    font-size: 16px;
    letter-spacing: 3px;
    margin-bottom: 12px;
    
    @media ${Ut} {
        font-size: 20px;
        margin-bottom: 16px;
    }
    
`,sn=Bt.a`
    font-family: Lato;
    display: block;
    color: ${"#FF6B4A"};
    font-weight: 400;
    text-decoration:none;
    cursor: pointer;

    font-size: 16px;
    letter-spacing: 3px;
    margin-bottom: 12px;
    
    @media ${Ut} {
        font-size: 20px;
        margin-bottom: 16px;
    }
`,cn=Bt.div`
    text-align: center;
    letter-spacing: 3px;
`,un=Bt.div`
    margin: 88px 12px 66px 66px;
`,ln="rgba(92, 111, 106, 0.8)",pn=Bt.div`
    margin-bottom: 200px;
`,fn=Bt.p`
    font-family: Poiret One;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 7.2px;
    margin-bottom: 20px;
`,hn=Bt.p`
    color: ${Wt};
    font-family: Lato;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 3.6px;
    margin-bottom: 16px;
`,dn=Bt.p`
    ${tn}
    color: ${Wt};
    // font-family: Lato;
    // font-size: 20px;
    // font-style: normal;
    // font-weight: 400;
    // line-height: 36px; /* 180% */
    // letter-spacing: 3px;
`,gn=Bt.hr`
    width: 100%;
    color: ${ln};
    opacity: 35%;
    border: none;
    height: 1px;
    background-color: ${ln};
`,mn=Bt.div`
    margin: 88px 3%
`},6774:function(e){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var u=i[c];if(!s(u))return!1;var l=e[u],p=t[u];if(!1===(o=n?n.call(r,l,p,u):void 0)||void 0===o&&l!==p)return!1}return!0}},5556:function(e,t,n){"use strict";t.Z=n.p+"static/background-3ba6fd3cc08b99b9f829c4a8b6f1a412.svg"},6009:function(e,t,n){"use strict";t.Z=n.p+"static/smallbackground-2b7c39bb2f886fff4dd96a33cb493dfb.svg"}}]);
//# sourceMappingURL=a3336d3c033a5ec9d59a088cb032c68b95c64a61-22aeed8149a99765c042.js.map