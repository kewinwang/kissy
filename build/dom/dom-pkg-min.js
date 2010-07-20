/*
Copyright 2010, KISSY UI Library v1.0.8
MIT Licensed
build: 882 Jul 20 10:46
*/
KISSY.add("dom",function(c){c.DOM={_isElementNode:function(r){return r&&r.nodeType===1}}});
KISSY.add("selector",function(c,r){function p(b,g){var f,d=[],j,n;g=q(g);if(c.isString(b)){b=c.trim(b);if(s.test(b)){if(b=u(b.slice(1)))d=[b]}else if(f=y.exec(b)){j=f[1];n=f[2];f=f[3];if(g=j?u(j):g)if(f)if(!j||b.indexOf(l)!==-1)d=i(f,n,g);else{if((b=u(j))&&w.hasClass(b,f))d=[b]}else if(n)d=t(g,n)}else if(c.ExternalSelector)return c.ExternalSelector(b,g);else h(b)}else if(b&&b.nodeType)d=[b];else if(b&&(c.isArray(b)||b.item||b.getDOMNode))d=b;if(d.item)d=c.makeArray(d);return d}function q(b){if(b===
r)b=k;else if(c.isString(b)&&s.test(b))b=u(b.slice(1));else if(b&&b.nodeType!==1&&b.nodeType!==9)b=null;return b}function u(b){return k.getElementById(b)}function t(b,g){return b.getElementsByTagName(g)}function i(b,g,f){f=b=f.getElementsByClassName(b);var d=0,j=0,n=b.length,x;if(g&&g!==m){f=[];for(g=g.toUpperCase();d<n;++d){x=b[d];if(x.tagName===g)f[j++]=x}}return f}function h(b){c.error("Unsupported selector: "+b)}var k=document,w=c.DOM,l=" ",m="*",s=/^#[\w-]+$/,y=/^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/;
(function(){var b=k.createElement("div");b.appendChild(k.createComment(""));if(b.getElementsByTagName(m).length>0)t=function(g,f){g=g.getElementsByTagName(f);if(f===m){f=[];for(var d=0,j=0,n;n=g[d++];)if(n.nodeType===1)f[j++]=n;g=f}return g}})();k.getElementsByClassName||(i=k.querySelectorAll?function(b,g,f){return f.querySelectorAll((g?g:"")+"."+b)}:function(b,g,f){g=f.getElementsByTagName(g||m);f=[];var d=0,j=0,n=g.length,x,a;for(b=l+b+l;d<n;++d){x=g[d];if((a=x.className)&&(l+a+l).indexOf(b)>-1)f[j++]=
x}return f});c.query=p;c.get=function(b,g){return p(b,g)[0]||null};c.mix(w,{query:p,get:c.get,filter:function(b,g){var f=p(b),d,j,n,x=[];if(c.isString(g)&&(d=y.exec(g))&&!d[1]){j=d[2];n=d[3];g=function(a){return!(j&&a.tagName!==j.toUpperCase()||n&&!w.hasClass(a,n))}}if(c.isFunction(g))x=c.filter(f,g);else if(g&&c.ExternalSelector)x=c.ExternalSelector._filter(b,g);else h(g);return x},test:function(b,g){b=p(b);return w.filter(b,g).length===b.length}})});
KISSY.add("dom-class",function(c,r){function p(i,h,k,w){if(!(h=c.trim(h)))return w?false:r;i=c.query(i);var l=0,m=i.length;h=h.split(u);for(var s;l<m;l++){s=i[l];if(q._isElementNode(s)){s=k(s,h,h.length);if(s!==r)return s}}if(w)return false}var q=c.DOM,u=/[\.\s]\s*\.?/,t=/[\n\t]/g;c.mix(q,{hasClass:function(i,h){return p(i,h,function(k,w,l){if(k=k.className){k=" "+k+" ";for(var m=0,s=true;m<l;m++)if(k.indexOf(" "+w[m]+" ")<0){s=false;break}if(s)return true}},true)},addClass:function(i,h){p(i,h,function(k,
w,l){var m=k.className;if(m){var s=" "+m+" ";m=m;for(var y=0;y<l;y++)if(s.indexOf(" "+w[y]+" ")<0)m+=" "+w[y];k.className=c.trim(m)}else k.className=h})},removeClass:function(i,h){p(i,h,function(k,w,l){var m=k.className;if(m)if(l){m=(" "+m+" ").replace(t," ");for(var s=0,y;s<l;s++)for(y=" "+w[s]+" ";m.indexOf(y)>=0;)m=m.replace(y," ");k.className=c.trim(m)}else k.className=""})},replaceClass:function(i,h,k){q.removeClass(i,h);q.addClass(i,k)},toggleClass:function(i,h,k){var w=c.isBoolean(k),l;p(i,
h,function(m,s,y){for(var b=0,g;b<y;b++){g=s[b];l=w?!k:q.hasClass(m,g);q[l?"removeClass":"addClass"](m,g)}})}})});
KISSY.add("dom-attr",function(c,r){function p(b,g){return g&&g.nodeName.toUpperCase()===b.toUpperCase()}var q=c.UA,u=q.ie,t=u&&u<8,i=document.documentElement.textContent!==r?"textContent":"innerText",h=c.DOM,k=h._isElementNode,w=/href|src|style/,l=/href|src|colspan|rowspan/,m=/\r/g,s=/radio|checkbox/,y={readonly:"readOnly"};t&&c.mix(y,{"for":"htmlFor","class":"className"});c.mix(h,{attr:function(b,g,f){if(g=c.trim(g)){g=g.toLowerCase();g=y[g]||g;if(f===r){b=c.get(b);if(!k(b))return r;var d;w.test(g)||
(d=b[g]);if(d===r)d=b.getAttribute(g);if(t)if(l.test(g))d=b.getAttribute(g,2);else if(g==="style")d=b.style.cssText;return d===null?r:d}c.each(c.query(b),function(j){if(k(j))if(t&&g==="style")j.style.cssText=f;else j.setAttribute(g,""+f)})}},removeAttr:function(b,g){c.each(c.query(b),function(f){k(f)&&f.removeAttribute(g)})},val:function(b,g){if(g===r){var f=c.get(b);if(!k(f))return r;if(p("option",f))return(f.attributes.value||{}).specified?f.value:f.text;if(p("select",f)){var d=f.selectedIndex;
b=f.options;if(d<0)return null;else if(f.type==="select-one")return h.val(b[d]);f=[];for(var j=0,n=b.length;j<n;++j)b[j].selected&&f.push(h.val(b[j]));return f}if(q.webkit&&s.test(f.type))return f.getAttribute("value")===null?"on":f.value;return(f.value||"").replace(m,"")}c.each(c.query(b),function(x){if(p("select",x)){if(c.isNumber(g))g+="";var a=c.makeArray(g),e=x.options,o;j=0;for(n=e.length;j<n;++j){o=e[j];o.selected=c.inArray(h.val(o),a)}if(!a.length)x.selectedIndex=-1}else if(k(x))x.value=g})},
text:function(b,g){if(g===r){b=c.get(b);if(k(b))return b[i]||""}else c.each(c.query(b),function(f){if(k(f))f[i]=g})}})});
KISSY.add("dom-style",function(c,r){function p(f,d){var j=c.get(f),n=d===k?j.offsetWidth:j.offsetHeight;c.each(d===k?["Left","Right"]:["Top","Bottom"],function(x){n-=parseFloat(u._getComputedStyle(j,"padding"+x))||0;n-=parseFloat(u._getComputedStyle(j,"border"+x+"Width"))||0});return n}function q(f,d,j){var n=j;if(j===w&&m.test(d)){n=0;if(u.css(f,"position")==="absolute"){j=f[d==="left"?"offsetLeft":"offsetTop"];if(t.ie===8||t.opera)j-=l(u.css(f.offsetParent,"border-"+d+"-width"))||0;n=j-(l(u.css(f,
"margin-"+d))||0)}}return n}var u=c.DOM,t=c.UA,i=document,h=i.documentElement,k="width",w="auto",l=parseInt,m=/^left|top$/,s=/width|height|top|left|right|bottom|margin|padding/i,y=/-([a-z])/ig,b=function(f,d){return d.toUpperCase()},g={};c.mix(u,{_CUSTOM_STYLES:g,_getComputedStyle:function(f,d){var j="",n=f.ownerDocument;if(f.style)j=n.defaultView.getComputedStyle(f,null)[d];return j},css:function(f,d,j){if(c.isPlainObject(d))for(var n in d)u.css(f,n,d[n]);else{if(d.indexOf("-")>0)d=d.replace(y,b);
d=g[d]||d;if(j===r){f=c.get(f);n="";if(f&&f.style){n=d.get?d.get(f):f.style[d];if(n===""&&!d.get)n=q(f,d,u._getComputedStyle(f,d))}return n===r?"":n}else{if(j===null||j==="")j="";else if(!isNaN(new Number(j))&&s.test(d))j+="px";(d===k||d==="height")&&parseFloat(j)<0||c.each(c.query(f),function(x){if(x&&x.style)d.set?d.set(x,j):(x.style[d]=j)})}}},width:function(f,d){if(d===r)return p(f,k);else u.css(f,k,d)},height:function(f,d){if(d===r)return p(f,"height");else u.css(f,"height",d)},addStyleSheet:function(f,
d){var j;if(d)j=c.get(d);j||(j=u.create("<style>",{id:d}));c.get("head").appendChild(j);if(j.styleSheet)j.styleSheet.cssText=f;else j.appendChild(i.createTextNode(f))}});if(h.style.cssFloat!==r)g["float"]="cssFloat";else if(h.style.styleFloat!==r)g["float"]="styleFloat"});
KISSY.add("dom-style-ie",function(c,r){if(c.UA.ie){var p=c.DOM,q=document,u=q.documentElement,t=p._CUSTOM_STYLES,i=/^-?\d+(?:px)?$/i,h=/^-?\d/,k=/^width|height$/;try{if(u.style.opacity===r&&u.filters)t.opacity={get:function(l){var m=100;try{m=l.filters["DXImageTransform.Microsoft.Alpha"].opacity}catch(s){try{m=l.filters("alpha").opacity}catch(y){}}return m/100+""},set:function(l,m){l=l.style;l.zoom=1;l.filter="alpha(opacity="+m*100+")"}}}catch(w){c.log("IE filters ActiveX is disabled. ex = "+w)}if(!(q.defaultView||
{}).getComputedStyle&&u.currentStyle)p._getComputedStyle=function(l,m){var s=l.style,y=l.currentStyle[m];if(k.test(m))y=p[m](l)+"px";else if(!i.test(y)&&h.test(y)){var b=s.left,g=l.runtimeStyle.left;l.runtimeStyle.left=l.currentStyle.left;s.left=m==="fontSize"?"1em":y||0;y=s.pixelLeft+"px";s.left=b;l.runtimeStyle.left=g}return y}}});
KISSY.add("dom-offset",function(c,r){function p(a){var e=0,o=0,v=u(a[g]);if(a[x]){a=a[x]();e=a[f]+t[j](v);o=a[d]+t[n](v)}return{left:e,top:o}}function q(a,e){if(t.css(a,s)==="static")a.style[s]=y;var o=p(a),v={},z,B;for(B in e){z=m(t.css(a,B),10)||0;v[B]=z+e[B]-o[B]}t.css(a,v)}function u(a){return a&&"scrollTo"in a&&a[b]?a:a&&a.nodeType===9?a.defaultView||a.parentWindow:false}var t=c.DOM,i=window,h=document,k=t._isElementNode,w=h.compatMode==="CSS1Compat",l=Math.max,m=parseInt,s="position",y="relative",
b="document",g="ownerDocument",f="left",d="top",j="scrollLeft",n="scrollTop",x="getBoundingClientRect";c.mix(t,{offset:function(a,e){if(!(a=c.get(a))||!a[g])return null;if(e===r)return p(a);q(a,e)},scrollIntoView:function(a,e,o,v){if((a=c.get(a))&&a[g]){e=c.get(e);v=v===r?true:!!v;o=o===r?true:!!o;if(!k(e))return a.scrollIntoView(o);var z=t.offset(a),B=t.offset(e),A={left:z[f]-B[f],top:z[d]-B[d]};z=e.clientHeight;B=e.clientWidth;var C=t[j](e),D=t[n](e),F=C+B,G=D+z,E=a.offsetHeight;a=a.offsetWidth;
var H=A.left+C-(m(t.css(e,"borderLeftWidth"))||0);A=A.top+D-(m(t.css(e,"borderTopWidth"))||0);var I=H+a,J=A+E;if(E>z||A<D||o)e[n]=A;else if(J>G)e[n]=J-z;if(v)if(a>B||H<C||o)e[j]=H;else if(I>F)e[j]=I-B}}});c.each(["Left","Top"],function(a,e){var o="scroll"+a;t[o]=function(v){var z=0,B=v===r?i:u(v),A;if(B&&(A=B[b]))z=B[e?"pageYOffset":"pageXOffset"]||A.documentElement[o]||A.body[o];else if(k(v=c.get(v)))z=v[o];return z}});c.each(["Width","Height"],function(a){t["doc"+a]=function(e){e=e||h;return l(w?
e.documentElement["scroll"+a]:e.body["scroll"+a],t["viewport"+a](e))};t["viewport"+a]=function(e){var o="inner"+a;e=u(e)||i;var v=e[b];return o in e?e[o]:w?v.documentElement["client"+a]:v.body["client"+a]}})});
KISSY.add("dom-traversal",function(c,r){function p(i,h,k,w){if(!(i=c.get(i)))return null;if(h===r)h=1;var l=null,m,s;if(c.isNumber(h)&&h>=0){if(h===0)return i;m=0;s=h;h=function(){return++m===s}}for(;i=i[k];)if(t(i)&&(!h||u.test(i,h))&&(!w||w(i))){l=i;break}return l}function q(i,h,k){var w=[];var l=i=c.get(i);if(i&&k)l=i.parentNode;if(l){k=0;for(l=l.firstChild;l;l=l.nextSibling)if(t(l)&&l!==i&&(!h||u.test(l,h)))w[k++]=l}return w}var u=c.DOM,t=u._isElementNode;c.mix(u,{parent:function(i,h){return p(i,
h,"parentNode",function(k){return k.nodeType!=11})},next:function(i,h){return p(i,h,"nextSibling")},prev:function(i,h){return p(i,h,"previousSibling")},siblings:function(i,h){return q(i,h,true)},children:function(i,h){return q(i,h)},contains:function(i,h){var k=false;if((i=c.get(i))&&(h=c.get(h)))if(i.contains)return i.contains(h);else if(i.compareDocumentPosition)return!!(i.compareDocumentPosition(h)&16);else for(;!k&&(h=h.parentNode);)k=h==i;return k}})});
KISSY.add("dom-create",function(c,r){function p(a,e){if(l(a)&&e)for(var o in e)h.attr(a,o,e[o]);return a}function q(a,e){var o=null,v;if(a&&(a.push||a.item)&&a[0]){e=e||a[0].ownerDocument;o=e.createDocumentFragment();if(a.item)a=c.makeArray(a);e=0;for(v=a.length;e<v;e++)o.appendChild(a[e])}else c.log("Unable to convert "+a+" to fragment.");return o}function u(a,e,o,v){if(o){var z=c.guid("ks-tmp-");e+='<span id="'+z+'"></span>';c.available(z,function(){var B=c.get("head"),A,C,D,F,G,E;for(b.lastIndex=
0;A=b.exec(e);)if((D=(C=A[1])?C.match(g):false)&&D[2]){A=i.createElement("script");A.src=D[2];if((F=C.match(f))&&F[2])A.charset=F[2];A.async=true;B.appendChild(A)}else if((E=A[2])&&E.length>0)c.globalEval(E);(G=i.getElementById(z))&&h.remove(G);c.isFunction(v)&&v()});t(a,e)}else{t(a,e);c.isFunction(v)&&v()}}function t(a,e){e=e.replace(b,"");try{a.innerHTML=e}catch(o){for(;a.firstChild;)a.removeChild(a.firstChild);e&&a.appendChild(h.create(e))}}var i=document,h=c.DOM,k=c.UA,w=k.ie,l=h._isElementNode,
m=i.createElement("div"),s=/<(\w+)/,y=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,b=/<script([^>]*)>([\s\S]*?)<\/script>/ig,g=/\ssrc=(['"])(.*?)\1/i,f=/\scharset=(['"])(.*?)\1/i;c.mix(h,{create:function(a,e,o){if(l(a))return a;if(!(a=c.trim(a)))return null;var v=null;v=h._creators;var z,B="div",A;if(z=y.exec(a))v=(o||i).createElement(z[1]);else{if((z=s.exec(a))&&(A=z[1])&&c.isFunction(v[A=A.toLowerCase()]))B=A;a=v[B](a,o).childNodes;v=a.length===1?a[0].parentNode.removeChild(a[0]):q(a,o||i)}return p(v,e)},_creators:{div:function(a,
e){e=e?e.createElement("div"):m;e.innerHTML=a;return e}},html:function(a,e,o,v){if(e===r){a=c.get(a);if(l(a))return a.innerHTML}else c.each(c.query(a),function(z){l(z)&&u(z,e,o,v)})},remove:function(a){c.each(c.query(a),function(e){l(e)&&e.parentNode&&e.parentNode.removeChild(e)})}});if(k.gecko||w){var d=h._creators,j=h.create,n=/(?:\/(?:thead|tfoot|caption|col|colgroup)>)+\s*<tbody/;k={option:"select",td:"tr",tr:"tbody",tbody:"table",col:"colgroup",legend:"fieldset"};for(var x in k)(function(a){d[x]=
function(e,o){return j("<"+a+">"+e+"</"+a+">",null,o)}})(k[x]);if(w){d.script=function(a,e){e=e?e.createElement("div"):m;e.innerHTML="-"+a;e.removeChild(e.firstChild);return e};if(w<8)d.tbody=function(a,e){e=j("<table>"+a+"</table>",null,e);var o=e.children.tags("tbody")[0];e.children.length>1&&o&&!n.test(a)&&o.parentNode.removeChild(o);return e}}c.mix(d,{optgroup:d.option,th:d.td,thead:d.tbody,tfoot:d.tbody,caption:d.tbody,colgroup:d.tbody})}});
KISSY.add("dom-insertion",function(c){var r=c.DOM;c.mix(r,{insertBefore:function(p,q){p=r.create(p);q=c.get(q);p&&q&&q.parentNode&&q.parentNode.insertBefore(p,q);return p},insertAfter:function(p,q){p=r.create(p);q=c.get(q);if(p&&q&&q.parentNode)q.nextSibling?q.parentNode.insertBefore(p,q.nextSibling):q.parentNode.appendChild(p);return p}})});
