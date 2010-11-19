/*
Copyright 2010, KISSY UI Library v1.1.5
MIT Licensed
build time: Nov 19 15:43
*/
KISSY.add("anim-easing",function(d){var q=Math,m=q.PI,j=q.pow,s=q.sin,l=1.70158,n={easeNone:function(a){return a},easeIn:function(a){return a*a},easeOut:function(a){return(2-a)*a},easeBoth:function(a){return(a*=2)<1?0.5*a*a:0.5*(1- --a*(a-2))},easeInStrong:function(a){return a*a*a*a},easeOutStrong:function(a){return 1- --a*a*a*a},easeBothStrong:function(a){return(a*=2)<1?0.5*a*a*a*a:0.5*(2-(a-=2)*a*a*a)},elasticIn:function(a){if(a===0||a===1)return a;return-(j(2,10*(a-=1))*s((a-0.075)*2*m/0.3))},
elasticOut:function(a){if(a===0||a===1)return a;return j(2,-10*a)*s((a-0.075)*2*m/0.3)+1},elasticBoth:function(a){if(a===0||(a*=2)===2)return a;if(a<1)return-0.5*j(2,10*(a-=1))*s((a-0.1125)*2*m/0.45);return j(2,-10*(a-=1))*s((a-0.1125)*2*m/0.45)*0.5+1},backIn:function(a){if(a===1)a-=0.0010;return a*a*((l+1)*a-l)},backOut:function(a){return(a-=1)*a*((l+1)*a+l)+1},backBoth:function(a){if((a*=2)<1)return 0.5*a*a*(((l*=1.525)+1)*a-l);return 0.5*((a-=2)*a*(((l*=1.525)+1)*a+l)+2)},bounceIn:function(a){return 1-
n.bounceOut(1-a)},bounceOut:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+0.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375},bounceBoth:function(a){if(a<0.5)return n.bounceIn(a*2)*0.5;return n.bounceOut(a*2-1)*0.5+0.5}};n.NativeTimeFunction={easeNone:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeBoth:"ease-in-out",easeInStrong:"cubic-bezier(0.9, 0.0, 0.9, 0.5)",easeOutStrong:"cubic-bezier(0.1, 0.5, 0.1, 1.0)",easeBothStrong:"cubic-bezier(0.9, 0.0, 0.1, 1.0)"};
d.Easing=n});
KISSY.add("anim",function(d,q){function m(b,c,f,g,e,h){if(b=d.get(b)){if(!(this instanceof m))return new m(b,c,f,g,e,h);var i=d.isPlainObject(f);c=c;this.domEl=b;if(d.isPlainObject(c))c=d.param(c,";").replace(/=/g,":").replace(/%23/g,"#").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();var t={},z=x.length,r;u.innerHTML='<div style="'+c+'"></div>';for(b=u.firstChild.style;z--;)if(r=b[x[z]])t[x[z]]=l(r);this.props=t;this.targetStyle=c;if(i)i=d.merge(o,f);else{i=d.clone(o);if(f)i.duration=v(f)||1;if(d.isString(g)||
d.isFunction(g))i.easing=g;if(d.isFunction(e))i.complete=e;if(h!==q)i.nativeSupport=h}this.config=i;if(i.nativeSupport&&j()&&d.isString(g=i.easing))if(/cubic-bezier\([\s\d.,]+\)/.test(g)||(g=w.NativeTimeFunction[g])){i.easing=g;this.transitionName=j()}d.isFunction(e)&&this.on(k,e)}}function j(){var b="transition",c;if(u.style[b]!==q)c=b;else d.each(["Webkit","Moz","O"],function(f){if(u.style[b=f+"Transition"]!==q){c=b;return false}});j=function(){return c};return c}function s(b,c,f){d.UA.ie&&f.indexOf(A)>
-1&&p.css(b,A,c[A].v);b.style.cssText+=";"+f}function l(b){var c=v(b);b=(b+"").replace(/^[-\d.]+/,"");return isNaN(c)?{v:b,u:"",f:a}:{v:c,u:b,f:n}}function n(b,c,f){return(b+(c-b)*f).toFixed(3)}function a(b,c,f){for(var g=2,e,h,i=[],t=[];e=3,h=arguments[g-1],g--;)if(h.substr(0,4)==="rgb(")for(h=h.match(/\d+/g);e--;)i.push(~~h[e]);else if(h.substr(0,1)==="#"){if(h.length===4)h="#"+h.substr(1,1)+h.substr(1,1)+h.substr(2,1)+h.substr(2,1)+h.substr(3,1)+h.substr(3,1);for(;e--;)i.push(parseInt(h.substr(1+
e*2,2),16))}else return c;for(;e--;){g=~~(i[e+3]+(i[e]-i[e+3])*f);t.push(g<0?0:g>255?255:g)}return"rgb("+t.join(",")+")"}var p=d.DOM,w=d.Easing,v=parseFloat,u=p.create("<div>"),x="backgroundColor borderBottomColor borderBottomWidth borderBottomStyle borderLeftColor borderLeftWidth borderLeftStyle borderRightColor borderRightWidth borderRightStyle borderSpacing borderTopColor borderTopWidth borderTopStyle bottom color font fontFamily fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex".split(" "),
A="opacity",k="complete",o={duration:1,easing:"easeNone",nativeSupport:true};d.augment(m,d.EventTarget,{run:function(){var b=this,c=b.config,f=b.domEl,g,e,h,i,t=b.props,z={},r;for(r in t)z[r]=l(p.css(f,r));if(b.fire("start")!==false){b.stop();if(b.transitionName)b._nativeRun();else{g=c.duration*1E3;h=d.now();i=h+g;e=c.easing;if(d.isString(e))e=w[e]||w.easeNone;b.timer=d.later(c=function(){var C=d.now(),E=C>i?1:(C-h)/g,B,y,D;for(r in t){B=z[r];y=t[r];if(y.v==0)y.u=B.u;if(B.u!==y.u)B.v=0;p.css(f,r,
y.f(B.v,y.v,e(E))+y.u)}if(b.fire("step")===false||(D=C>i)){b.stop();D&&b.fire(k)}},13,true);c()}return b}},_nativeRun:function(){var b=this,c=b.config,f=b.domEl,g=b.props,e=c.duration*1E3;c=c.easing;var h=b.transitionName,i={};i[h+"Property"]="all";i[h+"Duration"]=e+"ms";i[h+"TimingFunction"]=c;p.css(f,i);d.later(function(){s(f,g,b.targetStyle)},0);d.later(function(){b.stop(true)},e)},stop:function(b){if(this.transitionName)this._nativeStop(b);else{if(this.timer){this.timer.cancel();this.timer=q}if(b){s(this.domEl,
this.props,this.targetStyle);this.fire(k)}}return this},_nativeStop:function(b){var c=this.domEl,f=this.transitionName,g=this.props,e;if(b){p.css(c,f+"Property","none");this.fire(k)}else{for(e in g)p.css(c,e,p._getComputedStyle(c,e));p.css(c,f+"Property","none")}}});m.supportTransition=function(){return!!j()};d.Anim=m});
KISSY.add("anim-node-plugin",function(d,q){function m(k,o,b,c,f){if(o==="toggle"){f=j.css(k,l)===n?1:0;o="show"}if(f)j.css(k,l,j.data(k,l)||"");var g={};d.each(A[o],function(e){if(e===a)j.css(k,a,p);else if(e===w){g.opacity=f?1:0;f&&j.css(k,w,0)}else if(e===v){g.height=f?j.css(k,v)||k.naturalHeight:0;f&&j.css(k,v,0)}else if(e===u){g.width=f?j.css(k,u)||k.naturalWidth:0;f&&j.css(k,u,0)}});(new d.Anim(k,g,b,"easeOut",function(){if(!f){var e=k.style,h=e[l];if(h!==n){h&&j.data(k,l,h);e[l]=n}j.css(k,{height:x,
width:x,overflow:x,opacity:1})}c&&d.isFunction(c)&&c()})).run()}var j=d.DOM,s=d.Anim,l="display",n="none",a="overflow",p="hidden",w="opacity",v="height",u="width",x="auto",A={show:[a,w,v,u],fade:[w],slide:[a,v]};d.each([d.Node.prototype,d.NodeList.prototype],function(k){k.animate=function(){var o=d.makeArray(arguments);d.each(this,function(b){s.apply(q,[b].concat(o)).run()});return this};d.each({show:["show",1],hide:["show",0],toggle:["toggle"],fadeIn:["fade",1],fadeOut:["fade",0],slideDown:["slide",
1],slideUp:["slide",0]},function(o,b){k[b]=function(c,f){j[b]&&arguments.length===0?j[b](this):d.each(this,function(g){m(g,o[0],c,f,o[1])});return this}})})});
