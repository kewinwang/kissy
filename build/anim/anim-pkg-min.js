/*
Copyright 2010, KISSY UI Library v1.0.8
MIT Licensed
build: 882 Jul 20 10:37
*/
KISSY.add("anim-easing",function(c){var n=Math,j=n.PI,l=n.pow,k=n.sin,i=1.70158,p={easeNone:function(a){return a},easeIn:function(a){return a*a},easeOut:function(a){return(2-a)*a},easeBoth:function(a){return(a*=2)<1?0.5*a*a:0.5*(1- --a*(a-2))},easeInStrong:function(a){return a*a*a*a},easeOutStrong:function(a){return 1- --a*a*a*a},easeBothStrong:function(a){return(a*=2)<1?0.5*a*a*a*a:0.5*(2-(a-=2)*a*a*a)},elasticIn:function(a){if(a===0||a===1)return a;return-(l(2,10*(a-=1))*k((a-0.075)*2*j/0.3))},
elasticOut:function(a){if(a===0||a===1)return a;return l(2,-10*a)*k((a-0.075)*2*j/0.3)+1},elasticBoth:function(a){if(a===0||(a*=2)===2)return a;if(a<1)return-0.5*l(2,10*(a-=1))*k((a-0.1125)*2*j/0.45);return l(2,-10*(a-=1))*k((a-0.1125)*2*j/0.45)*0.5+1},backIn:function(a){if(a===1)a-=0.0010;return a*a*((i+1)*a-i)},backOut:function(a){return(a-=1)*a*((i+1)*a+i)+1},backBoth:function(a){if((a*=2)<1)return 0.5*a*a*(((i*=1.525)+1)*a-i);return 0.5*((a-=2)*a*(((i*=1.525)+1)*a+i)+2)},bounceIn:function(a){return 1-
p.bounceOut(1-a)},bounceOut:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+0.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375},bounceBoth:function(a){if(a<0.5)return p.bounceIn(a*2)*0.5;return p.bounceOut(a*2-1)*0.5+0.5}};c.Easing=p});
KISSY.add("anim",function(c,n){function j(b,d,g,f,h){if(b=c.get(b)){if(!(this instanceof j))return new j(b,d,g,f,h);var e=c.isPlainObject(g);d=d;this.domEl=b;if(c.isPlainObject(d))d=c.param(d,";").replace(/=/g,":");this.props=l(d);if(e)b=c.merge(w,g);else{b=c.clone(w);g&&(b.duration=x(g,10)||1);c.isString(f)&&(f=y[f]);c.isFunction(f)&&(b.easing=f);c.isFunction(h)&&(b.complete=h)}this.config=b;c.isFunction(h)&&this.on(z,h)}}function l(b){var d={},g=t.length,f;A.innerHTML='<div style="'+b+'"></div>';
for(b=A.childNodes[0].style;g--;)if(f=b[t[g]])d[t[g]]=k(f);return d}function k(b){var d=x(b);b=(b+"").replace(/^[-\d\.]+/,"");return isNaN(d)?{v:b,u:"",f:p}:{v:d,u:b,f:i}}function i(b,d,g){return(b+(d-b)*g).toFixed(3)}function p(b,d,g){for(var f=2,h,e,m=[],q=[];h=3,e=arguments[f-1],f--;)if(a(e,0,4)==="rgb(")for(e=e.match(/\d+/g);h--;)m.push(~~e[h]);else if(a(e,0)==="#"){if(e.length===4)e="#"+a(e,1)+a(e,1)+a(e,2)+a(e,2)+a(e,3)+a(e,3);for(;h--;)m.push(parseInt(a(e,1+h*2,2),16))}else return d;for(;h--;){f=
~~(m[h+3]+(m[h]-m[h+3])*g);q.push(f<0?0:f>255?255:f)}return"rgb("+q.join(",")+")"}function a(b,d,g){return b.substr(d,g||1)}var u=c.DOM,y=c.Easing,x=parseFloat,A=u.create("<div>"),t="backgroundColor borderBottomColor borderBottomWidth borderBottomStyle borderLeftColor borderLeftWidth borderLeftStyle borderRightColor borderRightWidth borderRightStyle borderSpacing borderTopColor borderTopWidth borderTopStyle bottom color font fontFamily fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex".split(" "),
z="complete",w={duration:1,easing:y.easeNone};c.augment(j,c.EventTarget,{run:function(){var b=this,d=b.config,g=b.domEl,f=d.duration*1E3,h=d.easing,e=c.now(),m=e+f,q=b.props,B={},o;for(o in q)B[o]=k(u.css(g,o));if(b.fire("start")!==false){b.stop();b.timer=c.later(d=function(){var v=c.now(),C=v>m?1:(v-e)/f,s,r;for(o in q){s=B[o];r=q[o];if(s.u!==r.u)s.v=0;u.css(g,o,r.f(s.v,r.v,h(C))+r.u)}if(b.fire("step")===false||v>m){b.stop();b.fire(z)}},13,true);d();return b}},stop:function(){if(this.timer){this.timer.cancel();
this.timer=n}return this}});c.Anim=j});KISSY.add("anim-node-plugin",function(c,n){var j=c.Anim;c.each([c.Node.prototype,c.NodeList.prototype],function(l){l.animate=function(){var k=c.makeArray(arguments);c.each(this,function(i){j.apply(n,[i].concat(k)).run()});return this}})});
