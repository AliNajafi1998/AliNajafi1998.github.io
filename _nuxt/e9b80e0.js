(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3],{288:function(t,e,r){var content=r(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(46).default)("687d1388",content,!0,{sourceMap:!1})},298:function(t,e,r){var content=r(313);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(46).default)("32e2a8ec",content,!0,{sourceMap:!1})},299:function(t,e,r){"use strict";r(288)},300:function(t,e,r){var n=r(45)((function(i){return i[1]}));n.push([t.i,":root{--prm:#1d72b3;--red:#eb3b5a;--green:#26de81;--yellow:#f79f1f;--b1:#f6f6f6;--b2:#fff;--c1:#121212;--c2:#1e1e1e;--b2-hover:#f2f2f2;--radius:6px;--radius-2:14px;--rgb-b1:246,246,246;--rgb-b2:255,255,255;--rgb-c1:18,18,18;--rgb-c2:30,30,30;--active-text:#000;--deactive-text:gray;--shadow:0px 0px 6px 0px hsla(0,0%,39%,.2)}.dark{--b1:#121212;--b2:#1f1f1f;--c1:#f6f6f6;--c2:#fff;--b2-hover:#2f2f2f;--rgb-b1:18,18,18;--rgb-b2:30,30,30;--rgb-c1:246,246,246;--rgb-c2:255,255,255;--prm-light:rgba(0,151,230,.2);--btn-hover:rgba(0,151,230,.3);--active-text:#fff;--deactive-text:gray}.flexCenter{align-items:center;display:flex;justify-content:center}.expand-enter-active,.expand-leave-active{overflow:hidden;transition:height .2s ease-in-out}.expand-enter,.expand-leave-to{height:0}",""]),n.locals={},t.exports=n},306:function(t,e,r){"use strict";r.r(e);var n={name:"TransitionExpand",methods:{enter:function(element){var t=getComputedStyle(element).width;element.style.width=t,element.style.position="absolute",element.style.visibility="hidden",element.style.height="auto";var e=getComputedStyle(element).height;element.style.width=null,element.style.position=null,element.style.visibility=null,element.style.height=0,getComputedStyle(element).height,requestAnimationFrame((function(){element.style.height=e}))},afterEnter:function(element){element.style.height="auto"},leave:function(element){var t=getComputedStyle(element).height;element.style.height=t,getComputedStyle(element).height,requestAnimationFrame((function(){element.style.height=0}))}}},o=(r(299),r(30)),component=Object(o.a)(n,(function(){var t=this;return(0,t._self._c)("transition",{attrs:{name:"expand"},on:{enter:t.enter,"after-enter":t.afterEnter,leave:t.leave}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},307:function(t,e,r){"use strict";var n=r(2),o=r(82).findIndex,c=r(139),f="findIndex",d=!0;f in[]&&Array(1)[f]((function(){d=!1})),n({target:"Array",proto:!0,forced:d},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(f)},308:function(t,e,r){"use strict";var n=r(2),o=r(4),c=r(31),f=r(24),d=r(36),l=r(200),v=r(10),x=r(3),h=r(201),y=r(140),m=r(309),_=r(310),w=r(81),C=r(311),k=[],A=o(k.sort),E=o(k.push),j=x((function(){k.sort(void 0)})),I=x((function(){k.sort(null)})),S=y("sort"),T=!x((function(){if(w)return w<70;if(!(m&&m>3)){if(_)return!0;if(C)return C<603;var code,t,e,r,n="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)k.push({k:t+r,v:e})}for(k.sort((function(a,b){return b.v-a.v})),r=0;r<k.length;r++)t=k[r].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:j||!I||!S||!T},{sort:function(t){void 0!==t&&c(t);var e=f(this);if(T)return void 0===t?A(e):A(e,t);var r,n,o=[],x=d(e);for(n=0;n<x;n++)n in e&&E(o,e[n]);for(h(o,function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:v(e)>v(r)?1:-1}}(t)),r=d(o),n=0;n<r;)e[n]=o[n++];for(;n<x;)l(e,n++);return e}})},309:function(t,e,r){"use strict";var n=r(47).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},310:function(t,e,r){"use strict";var n=r(47);t.exports=/MSIE|Trident/.test(n)},311:function(t,e,r){"use strict";var n=r(47).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},312:function(t,e,r){"use strict";r(298)},313:function(t,e,r){var n=r(45)((function(i){return i[1]}));n.push([t.i,"[data-v-260f4428]:root{--prm:#1d72b3;--red:#eb3b5a;--green:#26de81;--yellow:#f79f1f;--b1:#f6f6f6;--b2:#fff;--c1:#121212;--c2:#1e1e1e;--b2-hover:#f2f2f2;--radius:6px;--radius-2:14px;--rgb-b1:246,246,246;--rgb-b2:255,255,255;--rgb-c1:18,18,18;--rgb-c2:30,30,30;--active-text:#000;--deactive-text:gray;--shadow:0px 0px 6px 0px hsla(0,0%,39%,.2)}.dark[data-v-260f4428]{--b1:#121212;--b2:#1f1f1f;--c1:#f6f6f6;--c2:#fff;--b2-hover:#2f2f2f;--rgb-b1:18,18,18;--rgb-b2:30,30,30;--rgb-c1:246,246,246;--rgb-c2:255,255,255;--prm-light:rgba(0,151,230,.2);--btn-hover:rgba(0,151,230,.3);--active-text:#fff;--deactive-text:gray}.flexCenter[data-v-260f4428]{align-items:center;display:flex;justify-content:center}.publication-item[data-v-260f4428]{border-radius:12px;display:flex;gap:18px;transition:all .2s}.publication-item img[data-v-260f4428]{border-radius:10px;-o-object-fit:contain;object-fit:contain;width:160px}.content[data-v-260f4428]{display:flex;flex:1;flex-direction:column;gap:8px}.description[data-v-260f4428]{font-size:.9rem;font-style:italic;opacity:.8}.title[data-v-260f4428]{font-weight:700}.title[data-v-260f4428]:hover{-webkit-text-decoration:underline;text-decoration:underline}.tags-container[data-v-260f4428]{display:flex;flex-wrap:wrap;gap:4px;padding-top:4px}.tag[data-v-260f4428]{border-radius:20px;font-size:.86rem;padding:4px 8px}.tag.type[data-v-260f4428]{background:#3498db;color:#fff}.tag.year[data-v-260f4428]{background:#27ae60;color:#fff}.tag.topic[data-v-260f4428]{background:#747d8c;color:#fff}.abstract-container[data-v-260f4428]{align-items:flex-start;display:flex;flex-direction:column;gap:8px}.abstract-button[data-v-260f4428]{border:none;border-radius:6px;box-shadow:0 0 0 1px rgba(0,0,0,.4);color:#000;cursor:pointer;font-family:inherit;padding:3px 8px}.abstract-button.active[data-v-260f4428]{background:#3498db;box-shadow:0 0 0 1px #3498db;color:#fff}.abstract-content[data-v-260f4428]{border-left:2px solid #3498db}.abstract-content p[data-v-260f4428]{font-size:.9rem;padding:4px 8px}@media only screen and (max-width:640px){.publication-item[data-v-260f4428]{flex-direction:column}.publication-item img[data-v-260f4428]{width:100%}}",""]),n.locals={},t.exports=n},335:function(t,e,r){"use strict";r.r(e);r(37),r(64);var n=r(132);var o=r(141),c=r(98);function f(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||Object(o.a)(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r(307),r(308);var d={props:["publication"],data:function(){return{abstractExpanded:!1}},computed:{sortedTags:function(){var t=["topic","type","year"];return f(this.publication.tags).sort((function(a,b){return(t.findIndex((function(p){return p===a.type}))||0)-(t.findIndex((function(p){return p===b.type}))||0)}))}}},l=(r(312),r(30)),component=Object(l.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"publication-item"},[t.publication.image?e("img",{attrs:{src:t.publication.image,alt:t.publication.title}}):t._e(),t._v(" "),e("div",{staticClass:"content"},[e("a",{staticClass:"title",attrs:{href:t.publication.url,target:"_blank"}},[t._v(t._s(t.publication.title))]),t._v(" "),t.publication.members?e("div",{staticClass:"members"},[t._v("\n      "+t._s(t.publication.members)+"\n    ")]):t._e(),t._v(" "),t.publication.description?e("div",{staticClass:"description"},[t._v("\n      "+t._s(t.publication.description)+"\n    ")]):t._e(),t._v(" "),t.sortedTags&&t.sortedTags?e("div",{staticClass:"tags-container"},t._l(t.sortedTags,(function(r,i){return e("span",{key:i,class:["tag",r.type]},[t._v(t._s(r.title))])})),0):t._e(),t._v(" "),t.publication.abstract?e("div",{staticClass:"abstract-container"},[e("button",{class:["abstract-button",{active:t.abstractExpanded}],on:{click:function(e){t.abstractExpanded=!t.abstractExpanded}}},[t._v("\n        ABS\n      ")]),t._v(" "),e("HeightTransition",[t.abstractExpanded?e("div",{staticClass:"abstract-content"},[e("p",[t._v(t._s(t.publication.abstract))])]):t._e()])],1):t._e()])])}),[],!1,null,"260f4428",null);e.default=component.exports;installComponents(component,{HeightTransition:r(306).default})}}]);