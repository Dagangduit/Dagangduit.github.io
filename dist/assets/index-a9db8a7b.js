var Eg=Object.defineProperty;var Pg=(e,t,n)=>t in e?Eg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ut=(e,t,n)=>(Pg(e,typeof t!="symbol"?t+"":t,n),n);function Og(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function rt(e){return rt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},rt(e)}function xt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Lg(e,t){if(rt(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(rt(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Pd(e){var t=Lg(e,"string");return rt(t)==="symbol"?t:String(t)}function fu(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Pd(r.key),r)}}function St(e,t,n){return t&&fu(e.prototype,t),n&&fu(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Wt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Wa(e,t){return Wa=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Wa(e,t)}function Ti(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Wa(e,t)}function lo(e,t){if(t&&(rt(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Wt(e)}function kt(e){return kt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},kt(e)}function rn(e,t,n){return t=Pd(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function zg(e){if(Array.isArray(e))return e}function Rg(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function pu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Tg(e,t){if(e){if(typeof e=="string")return pu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return pu(e,t)}}function Ng(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _g(e){return zg(e)||Rg(e)||Tg(e)||Ng()}function gu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function mu(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gu(Object(n),!0).forEach(function(r){rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Fg={type:"logger",log:function(t){this.output("log",t)},warn:function(t){this.output("warn",t)},error:function(t){this.output("error",t)},output:function(t,n){console&&console[t]&&console[t].apply(console,n)}},$g=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};xt(this,e),this.init(t,n)}return St(e,[{key:"init",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=r.prefix||"i18next:",this.logger=n||Fg,this.options=r,this.debug=r.debug}},{key:"setDebug",value:function(n){this.debug=n}},{key:"log",value:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return this.forward(r,"log","",!0)}},{key:"warn",value:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return this.forward(r,"warn","",!0)}},{key:"error",value:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return this.forward(r,"error","")}},{key:"deprecate",value:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return this.forward(r,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(n,r,o,i){return i&&!this.debug?null:(typeof n[0]=="string"&&(n[0]="".concat(o).concat(this.prefix," ").concat(n[0])),this.logger[r](n))}},{key:"create",value:function(n){return new e(this.logger,mu(mu({},{prefix:"".concat(this.prefix,":").concat(n,":")}),this.options))}},{key:"clone",value:function(n){return n=n||this.options,n.prefix=n.prefix||this.prefix,new e(this.logger,n)}}]),e}(),yt=new $g,en=function(){function e(){xt(this,e),this.observers={}}return St(e,[{key:"on",value:function(n,r){var o=this;return n.split(" ").forEach(function(i){o.observers[i]=o.observers[i]||[],o.observers[i].push(r)}),this}},{key:"off",value:function(n,r){if(this.observers[n]){if(!r){delete this.observers[n];return}this.observers[n]=this.observers[n].filter(function(o){return o!==r})}}},{key:"emit",value:function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];if(this.observers[n]){var a=[].concat(this.observers[n]);a.forEach(function(s){s.apply(void 0,o)})}if(this.observers["*"]){var l=[].concat(this.observers["*"]);l.forEach(function(s){s.apply(s,[n].concat(o))})}}}]),e}();function hr(){var e,t,n=new Promise(function(r,o){e=r,t=o});return n.resolve=e,n.reject=t,n}function hu(e){return e==null?"":""+e}function Ag(e,t,n){e.forEach(function(r){t[r]&&(n[r]=t[r])})}function Jl(e,t,n){function r(l){return l&&l.indexOf("###")>-1?l.replace(/###/g,"."):l}function o(){return!e||typeof e=="string"}for(var i=typeof t!="string"?[].concat(t):t.split(".");i.length>1;){if(o())return{};var a=r(i.shift());!e[a]&&n&&(e[a]=new n),Object.prototype.hasOwnProperty.call(e,a)?e=e[a]:e={}}return o()?{}:{obj:e,k:r(i.shift())}}function yu(e,t,n){var r=Jl(e,t,Object),o=r.obj,i=r.k;o[i]=n}function jg(e,t,n,r){var o=Jl(e,t,Object),i=o.obj,a=o.k;i[a]=i[a]||[],r&&(i[a]=i[a].concat(n)),r||i[a].push(n)}function ei(e,t){var n=Jl(e,t),r=n.obj,o=n.k;if(r)return r[o]}function vu(e,t,n){var r=ei(e,n);return r!==void 0?r:ei(t,n)}function Od(e,t,n){for(var r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof t[r]=="string"||t[r]instanceof String?n&&(e[r]=t[r]):Od(e[r],t[r],n):e[r]=t[r]);return e}function Ln(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var Ig={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function Mg(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,function(t){return Ig[t]}):e}var Ni=typeof window<"u"&&window.navigator&&typeof window.navigator.userAgentData>"u"&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1,Dg=[" ",",","?","!",";"];function Bg(e,t,n){t=t||"",n=n||"";var r=Dg.filter(function(l){return t.indexOf(l)<0&&n.indexOf(l)<0});if(r.length===0)return!0;var o=new RegExp("(".concat(r.map(function(l){return l==="?"?"\\?":l}).join("|"),")")),i=!o.test(e);if(!i){var a=e.indexOf(n);a>0&&!o.test(e.substring(0,a))&&(i=!0)}return i}function wu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function vo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?wu(Object(n),!0).forEach(function(r){rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ug(e){var t=Hg();return function(){var r=kt(e),o;if(t){var i=kt(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return lo(this,o)}}function Hg(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ld(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(e){if(e[t])return e[t];for(var r=t.split(n),o=e,i=0;i<r.length;++i){if(!o||typeof o[r[i]]=="string"&&i+1<r.length)return;if(o[r[i]]===void 0){for(var a=2,l=r.slice(i,i+a).join(n),s=o[l];s===void 0&&r.length>i+a;)a++,l=r.slice(i,i+a).join(n),s=o[l];if(s===void 0)return;if(s===null)return null;if(t.endsWith(l)){if(typeof s=="string")return s;if(l&&typeof s[l]=="string")return s[l]}var c=r.slice(i+a).join(n);return c?Ld(s,c,n):void 0}o=o[r[i]]}return o}}var Wg=function(e){Ti(n,e);var t=Ug(n);function n(r){var o,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};return xt(this,n),o=t.call(this),Ni&&en.call(Wt(o)),o.data=r||{},o.options=i,o.options.keySeparator===void 0&&(o.options.keySeparator="."),o.options.ignoreJSONStructure===void 0&&(o.options.ignoreJSONStructure=!0),o}return St(n,[{key:"addNamespaces",value:function(o){this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}},{key:"removeNamespaces",value:function(o){var i=this.options.ns.indexOf(o);i>-1&&this.options.ns.splice(i,1)}},{key:"getResource",value:function(o,i,a){var l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},s=l.keySeparator!==void 0?l.keySeparator:this.options.keySeparator,c=l.ignoreJSONStructure!==void 0?l.ignoreJSONStructure:this.options.ignoreJSONStructure,g=[o,i];a&&typeof a!="string"&&(g=g.concat(a)),a&&typeof a=="string"&&(g=g.concat(s?a.split(s):a)),o.indexOf(".")>-1&&(g=o.split("."));var p=ei(this.data,g);return p||!c||typeof a!="string"?p:Ld(this.data&&this.data[o]&&this.data[o][i],a,s)}},{key:"addResource",value:function(o,i,a,l){var s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1},c=this.options.keySeparator;c===void 0&&(c=".");var g=[o,i];a&&(g=g.concat(c?a.split(c):a)),o.indexOf(".")>-1&&(g=o.split("."),l=i,i=g[1]),this.addNamespaces(i),yu(this.data,g,l),s.silent||this.emit("added",o,i,a,l)}},{key:"addResources",value:function(o,i,a){var l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(var s in a)(typeof a[s]=="string"||Object.prototype.toString.apply(a[s])==="[object Array]")&&this.addResource(o,i,s,a[s],{silent:!0});l.silent||this.emit("added",o,i,a)}},{key:"addResourceBundle",value:function(o,i,a,l,s){var c=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},g=[o,i];o.indexOf(".")>-1&&(g=o.split("."),l=a,a=i,i=g[1]),this.addNamespaces(i);var p=ei(this.data,g)||{};l?Od(p,a,s):p=vo(vo({},p),a),yu(this.data,g,p),c.silent||this.emit("added",o,i,a)}},{key:"removeResourceBundle",value:function(o,i){this.hasResourceBundle(o,i)&&delete this.data[o][i],this.removeNamespaces(i),this.emit("removed",o,i)}},{key:"hasResourceBundle",value:function(o,i){return this.getResource(o,i)!==void 0}},{key:"getResourceBundle",value:function(o,i){return i||(i=this.options.defaultNS),this.options.compatibilityAPI==="v1"?vo(vo({},{}),this.getResource(o,i)):this.getResource(o,i)}},{key:"getDataByLanguage",value:function(o){return this.data[o]}},{key:"hasLanguageSomeTranslations",value:function(o){var i=this.getDataByLanguage(o),a=i&&Object.keys(i)||[];return!!a.find(function(l){return i[l]&&Object.keys(i[l]).length>0})}},{key:"toJSON",value:function(){return this.data}}]),n}(en),zd={processors:{},addPostProcessor:function(t){this.processors[t.name]=t},handle:function(t,n,r,o,i){var a=this;return t.forEach(function(l){a.processors[l]&&(n=a.processors[l].process(n,r,o,i))}),n}};function bu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function ke(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bu(Object(n),!0).forEach(function(r){rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Vg(e){var t=Kg();return function(){var r=kt(e),o;if(t){var i=kt(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return lo(this,o)}}function Kg(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var ku={},xu=function(e){Ti(n,e);var t=Vg(n);function n(r){var o,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return xt(this,n),o=t.call(this),Ni&&en.call(Wt(o)),Ag(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],r,Wt(o)),o.options=i,o.options.keySeparator===void 0&&(o.options.keySeparator="."),o.logger=yt.create("translator"),o}return St(n,[{key:"changeLanguage",value:function(o){o&&(this.language=o)}},{key:"exists",value:function(o){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(o==null)return!1;var a=this.resolve(o,i);return a&&a.res!==void 0}},{key:"extractFromKey",value:function(o,i){var a=i.nsSeparator!==void 0?i.nsSeparator:this.options.nsSeparator;a===void 0&&(a=":");var l=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,s=i.ns||this.options.defaultNS||[],c=a&&o.indexOf(a)>-1,g=!this.options.userDefinedKeySeparator&&!i.keySeparator&&!this.options.userDefinedNsSeparator&&!i.nsSeparator&&!Bg(o,a,l);if(c&&!g){var p=o.match(this.interpolator.nestingRegexp);if(p&&p.length>0)return{key:o,namespaces:s};var h=o.split(a);(a!==l||a===l&&this.options.ns.indexOf(h[0])>-1)&&(s=h.shift()),o=h.join(l)}return typeof s=="string"&&(s=[s]),{key:o,namespaces:s}}},{key:"translate",value:function(o,i,a){var l=this;if(rt(i)!=="object"&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),i||(i={}),o==null)return"";Array.isArray(o)||(o=[String(o)]);var s=i.returnDetails!==void 0?i.returnDetails:this.options.returnDetails,c=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,g=this.extractFromKey(o[o.length-1],i),p=g.key,h=g.namespaces,v=h[h.length-1],b=i.lng||this.language,w=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(b&&b.toLowerCase()==="cimode"){if(w){var S=i.nsSeparator||this.options.nsSeparator;return s?{res:"".concat(v).concat(S).concat(p),usedKey:p,exactUsedKey:p,usedLng:b,usedNS:v}:"".concat(v).concat(S).concat(p)}return s?{res:p,usedKey:p,exactUsedKey:p,usedLng:b,usedNS:v}:p}var f=this.resolve(o,i),u=f&&f.res,d=f&&f.usedKey||p,y=f&&f.exactUsedKey||p,k=Object.prototype.toString.apply(u),x=["[object Number]","[object Function]","[object RegExp]"],C=i.joinArrays!==void 0?i.joinArrays:this.options.joinArrays,O=!this.i18nFormat||this.i18nFormat.handleAsObject,L=typeof u!="string"&&typeof u!="boolean"&&typeof u!="number";if(O&&u&&L&&x.indexOf(k)<0&&!(typeof C=="string"&&k==="[object Array]")){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");var T=this.options.returnedObjectHandler?this.options.returnedObjectHandler(d,u,ke(ke({},i),{},{ns:h})):"key '".concat(p," (").concat(this.language,")' returned an object instead of string.");return s?(f.res=T,f):T}if(c){var j=k==="[object Array]",re=j?[]:{},lt=j?y:d;for(var Ue in u)if(Object.prototype.hasOwnProperty.call(u,Ue)){var Pn="".concat(lt).concat(c).concat(Ue);re[Ue]=this.translate(Pn,ke(ke({},i),{joinArrays:!1,ns:h})),re[Ue]===Pn&&(re[Ue]=u[Ue])}u=re}}else if(O&&typeof C=="string"&&k==="[object Array]")u=u.join(C),u&&(u=this.extendTranslation(u,o,i,a));else{var st=!1,He=!1,R=i.count!==void 0&&typeof i.count!="string",_=n.hasDefaultValue(i),F=R?this.pluralResolver.getSuffix(b,i.count,i):"",M=i["defaultValue".concat(F)]||i.defaultValue;!this.isValidLookup(u)&&_&&(st=!0,u=M),this.isValidLookup(u)||(He=!0,u=p);var D=i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey,$t=D&&He?void 0:u,Z=_&&M!==u&&this.options.updateMissing;if(He||st||Z){if(this.logger.log(Z?"updateKey":"missingKey",b,v,p,Z?M:u),c){var We=this.resolve(p,ke(ke({},i),{},{keySeparator:!1}));We&&We.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}var le=[],Pe=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo==="fallback"&&Pe&&Pe[0])for(var un=0;un<Pe.length;un++)le.push(Pe[un]);else this.options.saveMissingTo==="all"?le=this.languageUtils.toResolveHierarchy(i.lng||this.language):le.push(i.lng||this.language);var gr=function(Xe,mr,On){var du=_&&On!==u?On:$t;l.options.missingKeyHandler?l.options.missingKeyHandler(Xe,v,mr,du,Z,i):l.backendConnector&&l.backendConnector.saveMissing&&l.backendConnector.saveMissing(Xe,v,mr,du,Z,i),l.emit("missingKey",Xe,v,mr,u)};this.options.saveMissing&&(this.options.saveMissingPlurals&&R?le.forEach(function(cn){l.pluralResolver.getSuffixes(cn,i).forEach(function(Xe){gr([cn],p+Xe,i["defaultValue".concat(Xe)]||M)})}):gr(le,p,M))}u=this.extendTranslation(u,o,i,f,a),He&&u===p&&this.options.appendNamespaceToMissingKey&&(u="".concat(v,":").concat(p)),(He||st)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?u=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?"".concat(v,":").concat(p):p,st?u:void 0):u=this.options.parseMissingKeyHandler(u))}return s?(f.res=u,f):u}},{key:"extendTranslation",value:function(o,i,a,l,s){var c=this;if(this.i18nFormat&&this.i18nFormat.parse)o=this.i18nFormat.parse(o,ke(ke({},this.options.interpolation.defaultVariables),a),l.usedLng,l.usedNS,l.usedKey,{resolved:l});else if(!a.skipInterpolation){a.interpolation&&this.interpolator.init(ke(ke({},a),{interpolation:ke(ke({},this.options.interpolation),a.interpolation)}));var g=typeof o=="string"&&(a&&a.interpolation&&a.interpolation.skipOnVariables!==void 0?a.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables),p;if(g){var h=o.match(this.interpolator.nestingRegexp);p=h&&h.length}var v=a.replace&&typeof a.replace!="string"?a.replace:a;if(this.options.interpolation.defaultVariables&&(v=ke(ke({},this.options.interpolation.defaultVariables),v)),o=this.interpolator.interpolate(o,v,a.lng||this.language,a),g){var b=o.match(this.interpolator.nestingRegexp),w=b&&b.length;p<w&&(a.nest=!1)}a.nest!==!1&&(o=this.interpolator.nest(o,function(){for(var u=arguments.length,d=new Array(u),y=0;y<u;y++)d[y]=arguments[y];return s&&s[0]===d[0]&&!a.context?(c.logger.warn("It seems you are nesting recursively key: ".concat(d[0]," in key: ").concat(i[0])),null):c.translate.apply(c,d.concat([i]))},a)),a.interpolation&&this.interpolator.reset()}var S=a.postProcess||this.options.postProcess,f=typeof S=="string"?[S]:S;return o!=null&&f&&f.length&&a.applyPostProcessor!==!1&&(o=zd.handle(f,o,i,this.options&&this.options.postProcessPassResolved?ke({i18nResolved:l},a):a,this)),o}},{key:"resolve",value:function(o){var i=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l,s,c,g,p;return typeof o=="string"&&(o=[o]),o.forEach(function(h){if(!i.isValidLookup(l)){var v=i.extractFromKey(h,a),b=v.key;s=b;var w=v.namespaces;i.options.fallbackNS&&(w=w.concat(i.options.fallbackNS));var S=a.count!==void 0&&typeof a.count!="string",f=S&&!a.ordinal&&a.count===0&&i.pluralResolver.shouldUseIntlApi(),u=a.context!==void 0&&(typeof a.context=="string"||typeof a.context=="number")&&a.context!=="",d=a.lngs?a.lngs:i.languageUtils.toResolveHierarchy(a.lng||i.language,a.fallbackLng);w.forEach(function(y){i.isValidLookup(l)||(p=y,!ku["".concat(d[0],"-").concat(y)]&&i.utils&&i.utils.hasLoadedNamespace&&!i.utils.hasLoadedNamespace(p)&&(ku["".concat(d[0],"-").concat(y)]=!0,i.logger.warn('key "'.concat(s,'" for languages "').concat(d.join(", "),`" won't get resolved as namespace "`).concat(p,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),d.forEach(function(k){if(!i.isValidLookup(l)){g=k;var x=[b];if(i.i18nFormat&&i.i18nFormat.addLookupKeys)i.i18nFormat.addLookupKeys(x,b,k,y,a);else{var C;S&&(C=i.pluralResolver.getSuffix(k,a.count,a));var O="".concat(i.options.pluralSeparator,"zero");if(S&&(x.push(b+C),f&&x.push(b+O)),u){var L="".concat(b).concat(i.options.contextSeparator).concat(a.context);x.push(L),S&&(x.push(L+C),f&&x.push(L+O))}}for(var T;T=x.pop();)i.isValidLookup(l)||(c=T,l=i.getResource(k,y,T,a))}}))})}}),{res:l,usedKey:s,exactUsedKey:c,usedLng:g,usedNS:p}}},{key:"isValidLookup",value:function(o){return o!==void 0&&!(!this.options.returnNull&&o===null)&&!(!this.options.returnEmptyString&&o==="")}},{key:"getResource",value:function(o,i,a){var l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(o,i,a,l):this.resourceStore.getResource(o,i,a,l)}}],[{key:"hasDefaultValue",value:function(o){var i="defaultValue";for(var a in o)if(Object.prototype.hasOwnProperty.call(o,a)&&i===a.substring(0,i.length)&&o[a]!==void 0)return!0;return!1}}]),n}(en);function da(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Su=function(){function e(t){xt(this,e),this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=yt.create("languageUtils")}return St(e,[{key:"getScriptPartFromCode",value:function(n){if(!n||n.indexOf("-")<0)return null;var r=n.split("-");return r.length===2||(r.pop(),r[r.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(r.join("-"))}},{key:"getLanguagePartFromCode",value:function(n){if(!n||n.indexOf("-")<0)return n;var r=n.split("-");return this.formatLanguageCode(r[0])}},{key:"formatLanguageCode",value:function(n){if(typeof n=="string"&&n.indexOf("-")>-1){var r=["hans","hant","latn","cyrl","cans","mong","arab"],o=n.split("-");return this.options.lowerCaseLng?o=o.map(function(i){return i.toLowerCase()}):o.length===2?(o[0]=o[0].toLowerCase(),o[1]=o[1].toUpperCase(),r.indexOf(o[1].toLowerCase())>-1&&(o[1]=da(o[1].toLowerCase()))):o.length===3&&(o[0]=o[0].toLowerCase(),o[1].length===2&&(o[1]=o[1].toUpperCase()),o[0]!=="sgn"&&o[2].length===2&&(o[2]=o[2].toUpperCase()),r.indexOf(o[1].toLowerCase())>-1&&(o[1]=da(o[1].toLowerCase())),r.indexOf(o[2].toLowerCase())>-1&&(o[2]=da(o[2].toLowerCase()))),o.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?n.toLowerCase():n}},{key:"isSupportedCode",value:function(n){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(n=this.getLanguagePartFromCode(n)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(n)>-1}},{key:"getBestMatchFromCodes",value:function(n){var r=this;if(!n)return null;var o;return n.forEach(function(i){if(!o){var a=r.formatLanguageCode(i);(!r.options.supportedLngs||r.isSupportedCode(a))&&(o=a)}}),!o&&this.options.supportedLngs&&n.forEach(function(i){if(!o){var a=r.getLanguagePartFromCode(i);if(r.isSupportedCode(a))return o=a;o=r.options.supportedLngs.find(function(l){if(l.indexOf(a)===0)return l})}}),o||(o=this.getFallbackCodes(this.options.fallbackLng)[0]),o}},{key:"getFallbackCodes",value:function(n,r){if(!n)return[];if(typeof n=="function"&&(n=n(r)),typeof n=="string"&&(n=[n]),Object.prototype.toString.apply(n)==="[object Array]")return n;if(!r)return n.default||[];var o=n[r];return o||(o=n[this.getScriptPartFromCode(r)]),o||(o=n[this.formatLanguageCode(r)]),o||(o=n[this.getLanguagePartFromCode(r)]),o||(o=n.default),o||[]}},{key:"toResolveHierarchy",value:function(n,r){var o=this,i=this.getFallbackCodes(r||this.options.fallbackLng||[],n),a=[],l=function(c){c&&(o.isSupportedCode(c)?a.push(c):o.logger.warn("rejecting language code not found in supportedLngs: ".concat(c)))};return typeof n=="string"&&n.indexOf("-")>-1?(this.options.load!=="languageOnly"&&l(this.formatLanguageCode(n)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&l(this.getScriptPartFromCode(n)),this.options.load!=="currentOnly"&&l(this.getLanguagePartFromCode(n))):typeof n=="string"&&l(this.formatLanguageCode(n)),i.forEach(function(s){a.indexOf(s)<0&&l(o.formatLanguageCode(s))}),a}}]),e}(),Qg=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],Yg={1:function(t){return Number(t>1)},2:function(t){return Number(t!=1)},3:function(t){return 0},4:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},5:function(t){return Number(t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5)},6:function(t){return Number(t==1?0:t>=2&&t<=4?1:2)},7:function(t){return Number(t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},8:function(t){return Number(t==1?0:t==2?1:t!=8&&t!=11?2:3)},9:function(t){return Number(t>=2)},10:function(t){return Number(t==1?0:t==2?1:t<7?2:t<11?3:4)},11:function(t){return Number(t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3)},12:function(t){return Number(t%10!=1||t%100==11)},13:function(t){return Number(t!==0)},14:function(t){return Number(t==1?0:t==2?1:t==3?2:3)},15:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2)},16:function(t){return Number(t%10==1&&t%100!=11?0:t!==0?1:2)},17:function(t){return Number(t==1||t%10==1&&t%100!=11?0:1)},18:function(t){return Number(t==0?0:t==1?1:2)},19:function(t){return Number(t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3)},20:function(t){return Number(t==1?0:t==0||t%100>0&&t%100<20?1:2)},21:function(t){return Number(t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0)},22:function(t){return Number(t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3)}},Gg=["v1","v2","v3"],Cu={zero:0,one:1,two:2,few:3,many:4,other:5};function Jg(){var e={};return Qg.forEach(function(t){t.lngs.forEach(function(n){e[n]={numbers:t.nr,plurals:Yg[t.fc]}})}),e}var Xg=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};xt(this,e),this.languageUtils=t,this.options=n,this.logger=yt.create("pluralResolver"),(!this.options.compatibilityJSON||this.options.compatibilityJSON==="v4")&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=Jg()}return St(e,[{key:"addRule",value:function(n,r){this.rules[n]=r}},{key:"getRule",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(n,{type:r.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[n]||this.rules[this.languageUtils.getLanguagePartFromCode(n)]}},{key:"needsPlural",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=this.getRule(n,r);return this.shouldUseIntlApi()?o&&o.resolvedOptions().pluralCategories.length>1:o&&o.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(n,r){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(n,o).map(function(i){return"".concat(r).concat(i)})}},{key:"getSuffixes",value:function(n){var r=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(n,o);return i?this.shouldUseIntlApi()?i.resolvedOptions().pluralCategories.sort(function(a,l){return Cu[a]-Cu[l]}).map(function(a){return"".concat(r.options.prepend).concat(a)}):i.numbers.map(function(a){return r.getSuffix(n,a,o)}):[]}},{key:"getSuffix",value:function(n,r){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=this.getRule(n,o);return i?this.shouldUseIntlApi()?"".concat(this.options.prepend).concat(i.select(r)):this.getSuffixRetroCompatible(i,r):(this.logger.warn("no plural rule found for: ".concat(n)),"")}},{key:"getSuffixRetroCompatible",value:function(n,r){var o=this,i=n.noAbs?n.plurals(r):n.plurals(Math.abs(r)),a=n.numbers[i];this.options.simplifyPluralSuffix&&n.numbers.length===2&&n.numbers[0]===1&&(a===2?a="plural":a===1&&(a=""));var l=function(){return o.options.prepend&&a.toString()?o.options.prepend+a.toString():a.toString()};return this.options.compatibilityJSON==="v1"?a===1?"":typeof a=="number"?"_plural_".concat(a.toString()):l():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&n.numbers.length===2&&n.numbers[0]===1?l():this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString()}},{key:"shouldUseIntlApi",value:function(){return!Gg.includes(this.options.compatibilityJSON)}}]),e}();function Eu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Ze(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Eu(Object(n),!0).forEach(function(r){rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Eu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Zg=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};xt(this,e),this.logger=yt.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||function(n){return n},this.init(t)}return St(e,[{key:"init",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};n.interpolation||(n.interpolation={escapeValue:!0});var r=n.interpolation;this.escape=r.escape!==void 0?r.escape:Mg,this.escapeValue=r.escapeValue!==void 0?r.escapeValue:!0,this.useRawValueToEscape=r.useRawValueToEscape!==void 0?r.useRawValueToEscape:!1,this.prefix=r.prefix?Ln(r.prefix):r.prefixEscaped||"{{",this.suffix=r.suffix?Ln(r.suffix):r.suffixEscaped||"}}",this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||",",this.unescapePrefix=r.unescapeSuffix?"":r.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":r.unescapeSuffix||"",this.nestingPrefix=r.nestingPrefix?Ln(r.nestingPrefix):r.nestingPrefixEscaped||Ln("$t("),this.nestingSuffix=r.nestingSuffix?Ln(r.nestingSuffix):r.nestingSuffixEscaped||Ln(")"),this.nestingOptionsSeparator=r.nestingOptionsSeparator?r.nestingOptionsSeparator:r.nestingOptionsSeparator||",",this.maxReplaces=r.maxReplaces?r.maxReplaces:1e3,this.alwaysFormat=r.alwaysFormat!==void 0?r.alwaysFormat:!1,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var n="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(n,"g");var r="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(r,"g");var o="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(o,"g")}},{key:"interpolate",value:function(n,r,o,i){var a=this,l,s,c,g=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function p(S){return S.replace(/\$/g,"$$$$")}var h=function(f){if(f.indexOf(a.formatSeparator)<0){var u=vu(r,g,f);return a.alwaysFormat?a.format(u,void 0,o,Ze(Ze(Ze({},i),r),{},{interpolationkey:f})):u}var d=f.split(a.formatSeparator),y=d.shift().trim(),k=d.join(a.formatSeparator).trim();return a.format(vu(r,g,y),k,o,Ze(Ze(Ze({},i),r),{},{interpolationkey:y}))};this.resetRegExp();var v=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,b=i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables,w=[{regex:this.regexpUnescape,safeValue:function(f){return p(f)}},{regex:this.regexp,safeValue:function(f){return a.escapeValue?p(a.escape(f)):p(f)}}];return w.forEach(function(S){for(c=0;l=S.regex.exec(n);){var f=l[1].trim();if(s=h(f),s===void 0)if(typeof v=="function"){var u=v(n,l,i);s=typeof u=="string"?u:""}else if(i&&Object.prototype.hasOwnProperty.call(i,f))s="";else if(b){s=l[0];continue}else a.logger.warn("missed to pass in variable ".concat(f," for interpolating ").concat(n)),s="";else typeof s!="string"&&!a.useRawValueToEscape&&(s=hu(s));var d=S.safeValue(s);if(n=n.replace(l[0],d),b?(S.regex.lastIndex+=s.length,S.regex.lastIndex-=l[0].length):S.regex.lastIndex=0,c++,c>=a.maxReplaces)break}}),n}},{key:"nest",value:function(n,r){var o=this,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a,l,s;function c(v,b){var w=this.nestingOptionsSeparator;if(v.indexOf(w)<0)return v;var S=v.split(new RegExp("".concat(w,"[ ]*{"))),f="{".concat(S[1]);v=S[0],f=this.interpolate(f,s);var u=f.match(/'/g),d=f.match(/"/g);(u&&u.length%2===0&&!d||d.length%2!==0)&&(f=f.replace(/'/g,'"'));try{s=JSON.parse(f),b&&(s=Ze(Ze({},b),s))}catch(y){return this.logger.warn("failed parsing options string in nesting for key ".concat(v),y),"".concat(v).concat(w).concat(f)}return delete s.defaultValue,v}for(;a=this.nestingRegexp.exec(n);){var g=[];s=Ze({},i),s=s.replace&&typeof s.replace!="string"?s.replace:s,s.applyPostProcessor=!1,delete s.defaultValue;var p=!1;if(a[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(a[1])){var h=a[1].split(this.formatSeparator).map(function(v){return v.trim()});a[1]=h.shift(),g=h,p=!0}if(l=r(c.call(this,a[1].trim(),s),s),l&&a[0]===n&&typeof l!="string")return l;typeof l!="string"&&(l=hu(l)),l||(this.logger.warn("missed to resolve ".concat(a[1]," for nesting ").concat(n)),l=""),p&&(l=g.reduce(function(v,b){return o.format(v,b,i.lng,Ze(Ze({},i),{},{interpolationkey:a[1].trim()}))},l.trim())),n=n.replace(a[0],l),this.regexp.lastIndex=0}return n}}]),e}();function Pu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Ct(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pu(Object(n),!0).forEach(function(r){rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function qg(e){var t=e.toLowerCase().trim(),n={};if(e.indexOf("(")>-1){var r=e.split("(");t=r[0].toLowerCase().trim();var o=r[1].substring(0,r[1].length-1);if(t==="currency"&&o.indexOf(":")<0)n.currency||(n.currency=o.trim());else if(t==="relativetime"&&o.indexOf(":")<0)n.range||(n.range=o.trim());else{var i=o.split(";");i.forEach(function(a){if(a){var l=a.split(":"),s=_g(l),c=s[0],g=s.slice(1),p=g.join(":").trim().replace(/^'+|'+$/g,"");n[c.trim()]||(n[c.trim()]=p),p==="false"&&(n[c.trim()]=!1),p==="true"&&(n[c.trim()]=!0),isNaN(p)||(n[c.trim()]=parseInt(p,10))}})}}return{formatName:t,formatOptions:n}}function zn(e){var t={};return function(r,o,i){var a=o+JSON.stringify(i),l=t[a];return l||(l=e(o,i),t[a]=l),l(r)}}var em=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};xt(this,e),this.logger=yt.create("formatter"),this.options=t,this.formats={number:zn(function(n,r){var o=new Intl.NumberFormat(n,Ct({},r));return function(i){return o.format(i)}}),currency:zn(function(n,r){var o=new Intl.NumberFormat(n,Ct(Ct({},r),{},{style:"currency"}));return function(i){return o.format(i)}}),datetime:zn(function(n,r){var o=new Intl.DateTimeFormat(n,Ct({},r));return function(i){return o.format(i)}}),relativetime:zn(function(n,r){var o=new Intl.RelativeTimeFormat(n,Ct({},r));return function(i){return o.format(i,r.range||"day")}}),list:zn(function(n,r){var o=new Intl.ListFormat(n,Ct({},r));return function(i){return o.format(i)}})},this.init(t)}return St(e,[{key:"init",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}},o=r.interpolation;this.formatSeparator=o.formatSeparator?o.formatSeparator:o.formatSeparator||","}},{key:"add",value:function(n,r){this.formats[n.toLowerCase().trim()]=r}},{key:"addCached",value:function(n,r){this.formats[n.toLowerCase().trim()]=zn(r)}},{key:"format",value:function(n,r,o){var i=this,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},l=r.split(this.formatSeparator),s=l.reduce(function(c,g){var p=qg(g),h=p.formatName,v=p.formatOptions;if(i.formats[h]){var b=c;try{var w=a&&a.formatParams&&a.formatParams[a.interpolationkey]||{},S=w.locale||w.lng||a.locale||a.lng||o;b=i.formats[h](c,S,Ct(Ct(Ct({},v),a),w))}catch(f){i.logger.warn(f)}return b}else i.logger.warn("there was no format function for ".concat(h));return c},n);return s}}]),e}();function Ou(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Lu(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ou(Object(n),!0).forEach(function(r){rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ou(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function tm(e){var t=nm();return function(){var r=kt(e),o;if(t){var i=kt(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return lo(this,o)}}function nm(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function rm(e,t){e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)}var om=function(e){Ti(n,e);var t=tm(n);function n(r,o,i){var a,l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return xt(this,n),a=t.call(this),Ni&&en.call(Wt(a)),a.backend=r,a.store=o,a.services=i,a.languageUtils=i.languageUtils,a.options=l,a.logger=yt.create("backendConnector"),a.waitingReads=[],a.maxParallelReads=l.maxParallelReads||10,a.readingCalls=0,a.maxRetries=l.maxRetries>=0?l.maxRetries:5,a.retryTimeout=l.retryTimeout>=1?l.retryTimeout:350,a.state={},a.queue=[],a.backend&&a.backend.init&&a.backend.init(i,l.backend,l),a}return St(n,[{key:"queueLoad",value:function(o,i,a,l){var s=this,c={},g={},p={},h={};return o.forEach(function(v){var b=!0;i.forEach(function(w){var S="".concat(v,"|").concat(w);!a.reload&&s.store.hasResourceBundle(v,w)?s.state[S]=2:s.state[S]<0||(s.state[S]===1?g[S]===void 0&&(g[S]=!0):(s.state[S]=1,b=!1,g[S]===void 0&&(g[S]=!0),c[S]===void 0&&(c[S]=!0),h[w]===void 0&&(h[w]=!0)))}),b||(p[v]=!0)}),(Object.keys(c).length||Object.keys(g).length)&&this.queue.push({pending:g,pendingCount:Object.keys(g).length,loaded:{},errors:[],callback:l}),{toLoad:Object.keys(c),pending:Object.keys(g),toLoadLanguages:Object.keys(p),toLoadNamespaces:Object.keys(h)}}},{key:"loaded",value:function(o,i,a){var l=o.split("|"),s=l[0],c=l[1];i&&this.emit("failedLoading",s,c,i),a&&this.store.addResourceBundle(s,c,a),this.state[o]=i?-1:2;var g={};this.queue.forEach(function(p){jg(p.loaded,[s],c),rm(p,o),i&&p.errors.push(i),p.pendingCount===0&&!p.done&&(Object.keys(p.loaded).forEach(function(h){g[h]||(g[h]={});var v=p.loaded[h];v.length&&v.forEach(function(b){g[h][b]===void 0&&(g[h][b]=!0)})}),p.done=!0,p.errors.length?p.callback(p.errors):p.callback())}),this.emit("loaded",g),this.queue=this.queue.filter(function(p){return!p.done})}},{key:"read",value:function(o,i,a){var l=this,s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,c=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,g=arguments.length>5?arguments[5]:void 0;if(!o.length)return g(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:o,ns:i,fcName:a,tried:s,wait:c,callback:g});return}this.readingCalls++;var p=function(w,S){if(l.readingCalls--,l.waitingReads.length>0){var f=l.waitingReads.shift();l.read(f.lng,f.ns,f.fcName,f.tried,f.wait,f.callback)}if(w&&S&&s<l.maxRetries){setTimeout(function(){l.read.call(l,o,i,a,s+1,c*2,g)},c);return}g(w,S)},h=this.backend[a].bind(this.backend);if(h.length===2){try{var v=h(o,i);v&&typeof v.then=="function"?v.then(function(b){return p(null,b)}).catch(p):p(null,v)}catch(b){p(b)}return}return h(o,i,p)}},{key:"prepareLoading",value:function(o,i){var a=this,l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),s&&s();typeof o=="string"&&(o=this.languageUtils.toResolveHierarchy(o)),typeof i=="string"&&(i=[i]);var c=this.queueLoad(o,i,l,s);if(!c.toLoad.length)return c.pending.length||s(),null;c.toLoad.forEach(function(g){a.loadOne(g)})}},{key:"load",value:function(o,i,a){this.prepareLoading(o,i,{},a)}},{key:"reload",value:function(o,i,a){this.prepareLoading(o,i,{reload:!0},a)}},{key:"loadOne",value:function(o){var i=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",l=o.split("|"),s=l[0],c=l[1];this.read(s,c,"read",void 0,void 0,function(g,p){g&&i.logger.warn("".concat(a,"loading namespace ").concat(c," for language ").concat(s," failed"),g),!g&&p&&i.logger.log("".concat(a,"loaded namespace ").concat(c," for language ").concat(s),p),i.loaded(o,g,p)})}},{key:"saveMissing",value:function(o,i,a,l,s){var c=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},g=arguments.length>6&&arguments[6]!==void 0?arguments[6]:function(){};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(i)){this.logger.warn('did not save key "'.concat(a,'" as the namespace "').concat(i,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(a==null||a==="")){if(this.backend&&this.backend.create){var p=Lu(Lu({},c),{},{isUpdate:s}),h=this.backend.create.bind(this.backend);if(h.length<6)try{var v;h.length===5?v=h(o,i,a,l,p):v=h(o,i,a,l),v&&typeof v.then=="function"?v.then(function(b){return g(null,b)}).catch(g):g(null,v)}catch(b){g(b)}else h(o,i,a,l,g,p)}!o||!o[0]||this.store.addResource(o[0],i,a,l)}}}]),n}(en);function zu(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){var n={};if(rt(t[1])==="object"&&(n=t[1]),typeof t[1]=="string"&&(n.defaultValue=t[1]),typeof t[2]=="string"&&(n.tDescription=t[2]),rt(t[2])==="object"||rt(t[3])==="object"){var r=t[3]||t[2];Object.keys(r).forEach(function(o){n[o]=r[o]})}return n},interpolation:{escapeValue:!0,format:function(t,n,r,o){return t},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function Ru(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function Tu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function ct(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Tu(Object(n),!0).forEach(function(r){rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function im(e){var t=am();return function(){var r=kt(e),o;if(t){var i=kt(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return lo(this,o)}}function am(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function wo(){}function lm(e){var t=Object.getOwnPropertyNames(Object.getPrototypeOf(e));t.forEach(function(n){typeof e[n]=="function"&&(e[n]=e[n].bind(e))})}var ti=function(e){Ti(n,e);var t=im(n);function n(){var r,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(xt(this,n),r=t.call(this),Ni&&en.call(Wt(r)),r.options=Ru(o),r.services={},r.logger=yt,r.modules={external:[]},lm(Wt(r)),i&&!r.isInitialized&&!o.isClone){if(!r.options.initImmediate)return r.init(o,i),lo(r,Wt(r));setTimeout(function(){r.init(o,i)},0)}return r}return St(n,[{key:"init",value:function(){var o=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;typeof i=="function"&&(a=i,i={}),!i.defaultNS&&i.defaultNS!==!1&&i.ns&&(typeof i.ns=="string"?i.defaultNS=i.ns:i.ns.indexOf("translation")<0&&(i.defaultNS=i.ns[0]));var l=zu();this.options=ct(ct(ct({},l),this.options),Ru(i)),this.options.compatibilityAPI!=="v1"&&(this.options.interpolation=ct(ct({},l.interpolation),this.options.interpolation)),i.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=i.keySeparator),i.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=i.nsSeparator);function s(f){return f?typeof f=="function"?new f:f:null}if(!this.options.isClone){this.modules.logger?yt.init(s(this.modules.logger),this.options):yt.init(null,this.options);var c;this.modules.formatter?c=this.modules.formatter:typeof Intl<"u"&&(c=em);var g=new Su(this.options);this.store=new Wg(this.options.resources,this.options);var p=this.services;p.logger=yt,p.resourceStore=this.store,p.languageUtils=g,p.pluralResolver=new Xg(g,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),c&&(!this.options.interpolation.format||this.options.interpolation.format===l.interpolation.format)&&(p.formatter=s(c),p.formatter.init(p,this.options),this.options.interpolation.format=p.formatter.format.bind(p.formatter)),p.interpolator=new Zg(this.options),p.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},p.backendConnector=new om(s(this.modules.backend),p.resourceStore,p,this.options),p.backendConnector.on("*",function(f){for(var u=arguments.length,d=new Array(u>1?u-1:0),y=1;y<u;y++)d[y-1]=arguments[y];o.emit.apply(o,[f].concat(d))}),this.modules.languageDetector&&(p.languageDetector=s(this.modules.languageDetector),p.languageDetector.init&&p.languageDetector.init(p,this.options.detection,this.options)),this.modules.i18nFormat&&(p.i18nFormat=s(this.modules.i18nFormat),p.i18nFormat.init&&p.i18nFormat.init(this)),this.translator=new xu(this.services,this.options),this.translator.on("*",function(f){for(var u=arguments.length,d=new Array(u>1?u-1:0),y=1;y<u;y++)d[y-1]=arguments[y];o.emit.apply(o,[f].concat(d))}),this.modules.external.forEach(function(f){f.init&&f.init(o)})}if(this.format=this.options.interpolation.format,a||(a=wo),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){var h=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);h.length>0&&h[0]!=="dev"&&(this.options.lng=h[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined");var v=["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"];v.forEach(function(f){o[f]=function(){var u;return(u=o.store)[f].apply(u,arguments)}});var b=["addResource","addResources","addResourceBundle","removeResourceBundle"];b.forEach(function(f){o[f]=function(){var u;return(u=o.store)[f].apply(u,arguments),o}});var w=hr(),S=function(){var u=function(y,k){o.isInitialized&&!o.initializedStoreOnce&&o.logger.warn("init: i18next is already initialized. You should call init just once!"),o.isInitialized=!0,o.options.isClone||o.logger.log("initialized",o.options),o.emit("initialized",o.options),w.resolve(k),a(y,k)};if(o.languages&&o.options.compatibilityAPI!=="v1"&&!o.isInitialized)return u(null,o.t.bind(o));o.changeLanguage(o.options.lng,u)};return this.options.resources||!this.options.initImmediate?S():setTimeout(S,0),w}},{key:"loadResources",value:function(o){var i=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:wo,l=a,s=typeof o=="string"?o:this.language;if(typeof o=="function"&&(l=o),!this.options.resources||this.options.partialBundledLanguages){if(s&&s.toLowerCase()==="cimode")return l();var c=[],g=function(v){if(v){var b=i.services.languageUtils.toResolveHierarchy(v);b.forEach(function(w){c.indexOf(w)<0&&c.push(w)})}};if(s)g(s);else{var p=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);p.forEach(function(h){return g(h)})}this.options.preload&&this.options.preload.forEach(function(h){return g(h)}),this.services.backendConnector.load(c,this.options.ns,function(h){!h&&!i.resolvedLanguage&&i.language&&i.setResolvedLanguage(i.language),l(h)})}else l(null)}},{key:"reloadResources",value:function(o,i,a){var l=hr();return o||(o=this.languages),i||(i=this.options.ns),a||(a=wo),this.services.backendConnector.reload(o,i,function(s){l.resolve(),a(s)}),l}},{key:"use",value:function(o){if(!o)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!o.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return o.type==="backend"&&(this.modules.backend=o),(o.type==="logger"||o.log&&o.warn&&o.error)&&(this.modules.logger=o),o.type==="languageDetector"&&(this.modules.languageDetector=o),o.type==="i18nFormat"&&(this.modules.i18nFormat=o),o.type==="postProcessor"&&zd.addPostProcessor(o),o.type==="formatter"&&(this.modules.formatter=o),o.type==="3rdParty"&&this.modules.external.push(o),this}},{key:"setResolvedLanguage",value:function(o){if(!(!o||!this.languages)&&!(["cimode","dev"].indexOf(o)>-1))for(var i=0;i<this.languages.length;i++){var a=this.languages[i];if(!(["cimode","dev"].indexOf(a)>-1)&&this.store.hasLanguageSomeTranslations(a)){this.resolvedLanguage=a;break}}}},{key:"changeLanguage",value:function(o,i){var a=this;this.isLanguageChangingTo=o;var l=hr();this.emit("languageChanging",o);var s=function(h){a.language=h,a.languages=a.services.languageUtils.toResolveHierarchy(h),a.resolvedLanguage=void 0,a.setResolvedLanguage(h)},c=function(h,v){v?(s(v),a.translator.changeLanguage(v),a.isLanguageChangingTo=void 0,a.emit("languageChanged",v),a.logger.log("languageChanged",v)):a.isLanguageChangingTo=void 0,l.resolve(function(){return a.t.apply(a,arguments)}),i&&i(h,function(){return a.t.apply(a,arguments)})},g=function(h){!o&&!h&&a.services.languageDetector&&(h=[]);var v=typeof h=="string"?h:a.services.languageUtils.getBestMatchFromCodes(h);v&&(a.language||s(v),a.translator.language||a.translator.changeLanguage(v),a.services.languageDetector&&a.services.languageDetector.cacheUserLanguage&&a.services.languageDetector.cacheUserLanguage(v)),a.loadResources(v,function(b){c(b,v)})};return!o&&this.services.languageDetector&&!this.services.languageDetector.async?g(this.services.languageDetector.detect()):!o&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(g):this.services.languageDetector.detect(g):g(o),l}},{key:"getFixedT",value:function(o,i,a){var l=this,s=function c(g,p){var h;if(rt(p)!=="object"){for(var v=arguments.length,b=new Array(v>2?v-2:0),w=2;w<v;w++)b[w-2]=arguments[w];h=l.options.overloadTranslationOptionHandler([g,p].concat(b))}else h=ct({},p);h.lng=h.lng||c.lng,h.lngs=h.lngs||c.lngs,h.ns=h.ns||c.ns,h.keyPrefix=h.keyPrefix||a||c.keyPrefix;var S=l.options.keySeparator||".",f;return h.keyPrefix&&Array.isArray(g)?f=g.map(function(u){return"".concat(h.keyPrefix).concat(S).concat(u)}):f=h.keyPrefix?"".concat(h.keyPrefix).concat(S).concat(g):g,l.t(f,h)};return typeof o=="string"?s.lng=o:s.lngs=o,s.ns=i,s.keyPrefix=a,s}},{key:"t",value:function(){var o;return this.translator&&(o=this.translator).translate.apply(o,arguments)}},{key:"exists",value:function(){var o;return this.translator&&(o=this.translator).exists.apply(o,arguments)}},{key:"setDefaultNamespace",value:function(o){this.options.defaultNS=o}},{key:"hasLoadedNamespace",value:function(o){var i=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var l=this.resolvedLanguage||this.languages[0],s=this.options?this.options.fallbackLng:!1,c=this.languages[this.languages.length-1];if(l.toLowerCase()==="cimode")return!0;var g=function(v,b){var w=i.services.backendConnector.state["".concat(v,"|").concat(b)];return w===-1||w===2};if(a.precheck){var p=a.precheck(this,g);if(p!==void 0)return p}return!!(this.hasResourceBundle(l,o)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||g(l,o)&&(!s||g(c,o)))}},{key:"loadNamespaces",value:function(o,i){var a=this,l=hr();return this.options.ns?(typeof o=="string"&&(o=[o]),o.forEach(function(s){a.options.ns.indexOf(s)<0&&a.options.ns.push(s)}),this.loadResources(function(s){l.resolve(),i&&i(s)}),l):(i&&i(),Promise.resolve())}},{key:"loadLanguages",value:function(o,i){var a=hr();typeof o=="string"&&(o=[o]);var l=this.options.preload||[],s=o.filter(function(c){return l.indexOf(c)<0});return s.length?(this.options.preload=l.concat(s),this.loadResources(function(c){a.resolve(),i&&i(c)}),a):(i&&i(),Promise.resolve())}},{key:"dir",value:function(o){if(o||(o=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!o)return"rtl";var i=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],a=this.services&&this.services.languageUtils||new Su(zu());return i.indexOf(a.getLanguagePartFromCode(o))>-1||o.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}},{key:"cloneInstance",value:function(){var o=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:wo,l=ct(ct(ct({},this.options),i),{isClone:!0}),s=new n(l);(i.debug!==void 0||i.prefix!==void 0)&&(s.logger=s.logger.clone(i));var c=["store","services","language"];return c.forEach(function(g){s[g]=o[g]}),s.services=ct({},this.services),s.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},s.translator=new xu(s.services,s.options),s.translator.on("*",function(g){for(var p=arguments.length,h=new Array(p>1?p-1:0),v=1;v<p;v++)h[v-1]=arguments[v];s.emit.apply(s,[g].concat(h))}),s.init(l,a),s.translator.options=s.options,s.translator.backendConnector.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},s}},{key:"toJSON",value:function(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}]),n}(en);rn(ti,"createInstance",function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new ti(e,t)});var be=ti.createInstance();be.createInstance=ti.createInstance;be.createInstance;be.dir;be.init;be.loadResources;be.reloadResources;be.use;be.changeLanguage;be.getFixedT;be.t;be.exists;be.setDefaultNamespace;be.hasLoadedNamespace;be.loadNamespaces;be.loadLanguages;function er(e){return er=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},er(e)}function sm(e,t){if(er(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(er(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Rd(e){var t=sm(e,"string");return er(t)==="symbol"?t:String(t)}function Td(e,t,n){return t=Rd(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Nu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function um(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var P={},cm={get exports(){return P},set exports(e){P=e}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var so=Symbol.for("react.element"),dm=Symbol.for("react.portal"),fm=Symbol.for("react.fragment"),pm=Symbol.for("react.strict_mode"),gm=Symbol.for("react.profiler"),mm=Symbol.for("react.provider"),hm=Symbol.for("react.context"),ym=Symbol.for("react.forward_ref"),vm=Symbol.for("react.suspense"),wm=Symbol.for("react.memo"),bm=Symbol.for("react.lazy"),_u=Symbol.iterator;function km(e){return e===null||typeof e!="object"?null:(e=_u&&e[_u]||e["@@iterator"],typeof e=="function"?e:null)}var Nd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_d=Object.assign,Fd={};function ur(e,t,n){this.props=e,this.context=t,this.refs=Fd,this.updater=n||Nd}ur.prototype.isReactComponent={};ur.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ur.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $d(){}$d.prototype=ur.prototype;function Xl(e,t,n){this.props=e,this.context=t,this.refs=Fd,this.updater=n||Nd}var Zl=Xl.prototype=new $d;Zl.constructor=Xl;_d(Zl,ur.prototype);Zl.isPureReactComponent=!0;var Fu=Array.isArray,Ad=Object.prototype.hasOwnProperty,ql={current:null},jd={key:!0,ref:!0,__self:!0,__source:!0};function Id(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)Ad.call(t,r)&&!jd.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:so,type:e,key:i,ref:a,props:o,_owner:ql.current}}function xm(e,t){return{$$typeof:so,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function es(e){return typeof e=="object"&&e!==null&&e.$$typeof===so}function Sm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var $u=/\/+/g;function fa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sm(""+e.key):t.toString(36)}function Mo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case so:case dm:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+fa(a,0):r,Fu(o)?(n="",e!=null&&(n=e.replace($u,"$&/")+"/"),Mo(o,t,n,"",function(c){return c})):o!=null&&(es(o)&&(o=xm(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace($u,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",Fu(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+fa(i,l);a+=Mo(i,t,n,s,o)}else if(s=km(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+fa(i,l++),a+=Mo(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function bo(e,t,n){if(e==null)return e;var r=[],o=0;return Mo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Cm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},Do={transition:null},Em={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:Do,ReactCurrentOwner:ql};A.Children={map:bo,forEach:function(e,t,n){bo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return bo(e,function(){t++}),t},toArray:function(e){return bo(e,function(t){return t})||[]},only:function(e){if(!es(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=ur;A.Fragment=fm;A.Profiler=gm;A.PureComponent=Xl;A.StrictMode=pm;A.Suspense=vm;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Em;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=_d({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=ql.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Ad.call(t,s)&&!jd.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:so,type:e.type,key:o,ref:i,props:r,_owner:a}};A.createContext=function(e){return e={$$typeof:hm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mm,_context:e},e.Consumer=e};A.createElement=Id;A.createFactory=function(e){var t=Id.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:ym,render:e}};A.isValidElement=es;A.lazy=function(e){return{$$typeof:bm,_payload:{_status:-1,_result:e},_init:Cm}};A.memo=function(e,t){return{$$typeof:wm,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=Do.transition;Do.transition={};try{e()}finally{Do.transition=t}};A.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};A.useCallback=function(e,t){return Ce.current.useCallback(e,t)};A.useContext=function(e){return Ce.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};A.useEffect=function(e,t){return Ce.current.useEffect(e,t)};A.useId=function(){return Ce.current.useId()};A.useImperativeHandle=function(e,t,n){return Ce.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return Ce.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return Ce.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return Ce.current.useMemo(e,t)};A.useReducer=function(e,t,n){return Ce.current.useReducer(e,t,n)};A.useRef=function(e){return Ce.current.useRef(e)};A.useState=function(e){return Ce.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return Ce.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return Ce.current.useTransition()};A.version="18.2.0";(function(e){e.exports=A})(cm);const ts=um(P),Mr=Og({__proto__:null,default:ts},[P]);function Pm(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];typeof n[0]=="string"&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var Au={};function Va(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&Au[t[0]]||(typeof t[0]=="string"&&(Au[t[0]]=new Date),Pm.apply(void 0,t))}function ju(e,t,n){e.loadNamespaces(t,function(){if(e.isInitialized)n();else{var r=function o(){setTimeout(function(){e.off("initialized",o)},0),n()};e.on("initialized",r)}})}function Om(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=t.languages[0],o=t.options?t.options.fallbackLng:!1,i=t.languages[t.languages.length-1];if(r.toLowerCase()==="cimode")return!0;var a=function(s,c){var g=t.services.backendConnector.state["".concat(s,"|").concat(c)];return g===-1||g===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||a(r,e)&&(!o||a(i,e)))}function Lm(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!t.languages||!t.languages.length)return Va("i18n.languages were undefined or empty",t.languages),!0;var r=t.options.ignoreJSONStructure!==void 0;return r?t.hasLoadedNamespace(e,{precheck:function(i,a){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!a(i.isLanguageChangingTo,e))return!1}}):Om(e,t,n)}var zm=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,Rm={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},Tm=function(t){return Rm[t]},Nm=function(t){return t.replace(zm,Tm)};function Iu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Mu(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Iu(Object(n),!0).forEach(function(r){Td(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Iu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Ka={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:Nm};function _m(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ka=Mu(Mu({},Ka),e)}function Fm(){return Ka}var Md;function $m(e){Md=e}function Am(){return Md}function jm(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Du(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Rd(r.key),r)}}function Im(e,t,n){return t&&Du(e.prototype,t),n&&Du(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var Mm={type:"3rdParty",init:function(t){_m(t.options.react),$m(t)}},Dm=P.createContext(),Bm=function(){function e(){jm(this,e),this.usedNamespaces={}}return Im(e,[{key:"addUsedNamespaces",value:function(n){var r=this;n.forEach(function(o){r.usedNamespaces[o]||(r.usedNamespaces[o]=!0)})}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function Um(e){if(Array.isArray(e))return e}function Hm(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,i,a,l=[],s=!0,c=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(g){c=!0,o=g}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}function Bu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Wm(e,t){if(e){if(typeof e=="string")return Bu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bu(e,t)}}function Vm(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Km(e,t){return Um(e)||Hm(e,t)||Wm(e,t)||Vm()}function Uu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function pa(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Uu(Object(n),!0).forEach(function(r){Td(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Uu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Qm=function(t,n){var r=P.useRef();return P.useEffect(function(){r.current=n?r.current:t},[t,n]),r.current};function ns(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.i18n,r=P.useContext(Dm)||{},o=r.i18n,i=r.defaultNS,a=n||o||Am();if(a&&!a.reportNamespaces&&(a.reportNamespaces=new Bm),!a){Va("You will need to pass in an i18next instance by using initReactI18next");var l=function(L,T){return typeof T=="string"?T:T&&er(T)==="object"&&typeof T.defaultValue=="string"?T.defaultValue:Array.isArray(L)?L[L.length-1]:L},s=[l,{},!1];return s.t=l,s.i18n={},s.ready=!1,s}a.options.react&&a.options.react.wait!==void 0&&Va("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var c=pa(pa(pa({},Fm()),a.options.react),t),g=c.useSuspense,p=c.keyPrefix,h=e||i||a.options&&a.options.defaultNS;h=typeof h=="string"?[h]:h||["translation"],a.reportNamespaces.addUsedNamespaces&&a.reportNamespaces.addUsedNamespaces(h);var v=(a.isInitialized||a.initializedStoreOnce)&&h.every(function(O){return Lm(O,a,c)});function b(){return a.getFixedT(null,c.nsMode==="fallback"?h:h[0],p)}var w=P.useState(b),S=Km(w,2),f=S[0],u=S[1],d=h.join(),y=Qm(d),k=P.useRef(!0);P.useEffect(function(){var O=c.bindI18n,L=c.bindI18nStore;k.current=!0,!v&&!g&&ju(a,h,function(){k.current&&u(b)}),v&&y&&y!==d&&k.current&&u(b);function T(){k.current&&u(b)}return O&&a&&a.on(O,T),L&&a&&a.store.on(L,T),function(){k.current=!1,O&&a&&O.split(" ").forEach(function(j){return a.off(j,T)}),L&&a&&L.split(" ").forEach(function(j){return a.store.off(j,T)})}},[a,d]);var x=P.useRef(!0);P.useEffect(function(){k.current&&!x.current&&u(b),x.current=!1},[a,p]);var C=[f,a,v];if(C.t=f,C.i18n=a,C.ready=v,v||!v&&!g)return C;throw new Promise(function(O){ju(a,h,function(){O()})})}const Ym={EA:"文章",indicator:"代码片段",projects:"项目"},Gm={title:"👋 你好，我是Harrie",description:"一个全栈的Web开发者，主要专注于Node.js、Vue、React等技术",link:"开始阅读"},Jm="yyyy / MM / dd",Xm={title:"评论",btn:"评论",owner:"作者"},Zm={title:"项目"},qm={tab:Ym,intro:Gm,dateFormat:Jm,comment:Xm,projects:Zm},eh={translation:qm},th={EA:"EA",indicator:"Indicator",projects:"Projects"},nh={title:"👋 Hi! I'm Agus Pujianto",description:"Founder of Dagangduit.com — creating smart trading systems, expert advisors, and AI-powered financial tools to help traders grow consistently.",link:"Explore Projects"},rh="MMM dd, yyyy",oh={title:"Comments",btn:"Click to Comment",owner:"Author"},ih={title:"Projects"},ah={tab:th,intro:nh,dateFormat:rh,comment:oh,projects:ih},lh={translation:ah},sh="translation",uh={cn:eh,en:lh},ch=navigator.language==="zh-CN"?"cn":"en",dh=localStorage.getItem("language");be.use(Mm).init({resources:uh,defaultNS:sh,lng:dh||ch});var Qa={},fh={get exports(){return Qa},set exports(e){Qa=e}},Me={},Ya={},ph={get exports(){return Ya},set exports(e){Ya=e}},Dd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,_){var F=R.length;R.push(_);e:for(;0<F;){var M=F-1>>>1,D=R[M];if(0<o(D,_))R[M]=_,R[F]=D,F=M;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var _=R[0],F=R.pop();if(F!==_){R[0]=F;e:for(var M=0,D=R.length,$t=D>>>1;M<$t;){var Z=2*(M+1)-1,We=R[Z],le=Z+1,Pe=R[le];if(0>o(We,F))le<D&&0>o(Pe,We)?(R[M]=Pe,R[le]=F,M=le):(R[M]=We,R[Z]=F,M=Z);else if(le<D&&0>o(Pe,F))R[M]=Pe,R[le]=F,M=le;else break e}}return _}function o(R,_){var F=R.sortIndex-_.sortIndex;return F!==0?F:R.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],c=[],g=1,p=null,h=3,v=!1,b=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(R){for(var _=n(c);_!==null;){if(_.callback===null)r(c);else if(_.startTime<=R)r(c),_.sortIndex=_.expirationTime,t(s,_);else break;_=n(c)}}function y(R){if(w=!1,d(R),!b)if(n(s)!==null)b=!0,st(k);else{var _=n(c);_!==null&&He(y,_.startTime-R)}}function k(R,_){b=!1,w&&(w=!1,f(O),O=-1),v=!0;var F=h;try{for(d(_),p=n(s);p!==null&&(!(p.expirationTime>_)||R&&!j());){var M=p.callback;if(typeof M=="function"){p.callback=null,h=p.priorityLevel;var D=M(p.expirationTime<=_);_=e.unstable_now(),typeof D=="function"?p.callback=D:p===n(s)&&r(s),d(_)}else r(s);p=n(s)}if(p!==null)var $t=!0;else{var Z=n(c);Z!==null&&He(y,Z.startTime-_),$t=!1}return $t}finally{p=null,h=F,v=!1}}var x=!1,C=null,O=-1,L=5,T=-1;function j(){return!(e.unstable_now()-T<L)}function re(){if(C!==null){var R=e.unstable_now();T=R;var _=!0;try{_=C(!0,R)}finally{_?lt():(x=!1,C=null)}}else x=!1}var lt;if(typeof u=="function")lt=function(){u(re)};else if(typeof MessageChannel<"u"){var Ue=new MessageChannel,Pn=Ue.port2;Ue.port1.onmessage=re,lt=function(){Pn.postMessage(null)}}else lt=function(){S(re,0)};function st(R){C=R,x||(x=!0,lt())}function He(R,_){O=S(function(){R(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){b||v||(b=!0,st(k))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(R){switch(h){case 1:case 2:case 3:var _=3;break;default:_=h}var F=h;h=_;try{return R()}finally{h=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,_){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var F=h;h=R;try{return _()}finally{h=F}},e.unstable_scheduleCallback=function(R,_,F){var M=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?M+F:M):F=M,R){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=F+D,R={id:g++,callback:_,priorityLevel:R,startTime:F,expirationTime:D,sortIndex:-1},F>M?(R.sortIndex=F,t(c,R),n(s)===null&&R===n(c)&&(w?(f(O),O=-1):w=!0,He(y,F-M))):(R.sortIndex=D,t(s,R),b||v||(b=!0,st(k))),R},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(R){var _=h;return function(){var F=h;h=_;try{return R.apply(this,arguments)}finally{h=F}}}})(Dd);(function(e){e.exports=Dd})(ph);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bd=P,Ie=Ya;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ud=new Set,Dr={};function Sn(e,t){tr(e,t),tr(e+"Capture",t)}function tr(e,t){for(Dr[e]=t,e=0;e<t.length;e++)Ud.add(t[e])}var Rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ga=Object.prototype.hasOwnProperty,gh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hu={},Wu={};function mh(e){return Ga.call(Wu,e)?!0:Ga.call(Hu,e)?!1:gh.test(e)?Wu[e]=!0:(Hu[e]=!0,!1)}function hh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function yh(e,t,n,r){if(t===null||typeof t>"u"||hh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ee(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ge[e]=new Ee(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ge[t]=new Ee(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ge[e]=new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ge[e]=new Ee(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ge[e]=new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ge[e]=new Ee(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ge[e]=new Ee(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ge[e]=new Ee(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ge[e]=new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var rs=/[\-:]([a-z])/g;function os(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(rs,os);ge[t]=new Ee(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(rs,os);ge[t]=new Ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(rs,os);ge[t]=new Ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ge[e]=new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)});ge.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ge[e]=new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function is(e,t,n,r){var o=ge.hasOwnProperty(t)?ge[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(yh(t,n,o,r)&&(n=null),r||o===null?mh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ft=Bd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ko=Symbol.for("react.element"),$n=Symbol.for("react.portal"),An=Symbol.for("react.fragment"),as=Symbol.for("react.strict_mode"),Ja=Symbol.for("react.profiler"),Hd=Symbol.for("react.provider"),Wd=Symbol.for("react.context"),ls=Symbol.for("react.forward_ref"),Xa=Symbol.for("react.suspense"),Za=Symbol.for("react.suspense_list"),ss=Symbol.for("react.memo"),jt=Symbol.for("react.lazy"),Vd=Symbol.for("react.offscreen"),Vu=Symbol.iterator;function yr(e){return e===null||typeof e!="object"?null:(e=Vu&&e[Vu]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,ga;function Pr(e){if(ga===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ga=t&&t[1]||""}return`
`+ga+e}var ma=!1;function ha(e,t){if(!e||ma)return"";ma=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{ma=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Pr(e):""}function vh(e){switch(e.tag){case 5:return Pr(e.type);case 16:return Pr("Lazy");case 13:return Pr("Suspense");case 19:return Pr("SuspenseList");case 0:case 2:case 15:return e=ha(e.type,!1),e;case 11:return e=ha(e.type.render,!1),e;case 1:return e=ha(e.type,!0),e;default:return""}}function qa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case An:return"Fragment";case $n:return"Portal";case Ja:return"Profiler";case as:return"StrictMode";case Xa:return"Suspense";case Za:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Wd:return(e.displayName||"Context")+".Consumer";case Hd:return(e._context.displayName||"Context")+".Provider";case ls:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ss:return t=e.displayName||null,t!==null?t:qa(e.type)||"Memo";case jt:t=e._payload,e=e._init;try{return qa(e(t))}catch{}}return null}function wh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qa(t);case 8:return t===as?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function tn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function bh(e){var t=Kd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xo(e){e._valueTracker||(e._valueTracker=bh(e))}function Qd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Kd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ni(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function el(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ku(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=tn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Yd(e,t){t=t.checked,t!=null&&is(e,"checked",t,!1)}function tl(e,t){Yd(e,t);var n=tn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?nl(e,t.type,n):t.hasOwnProperty("defaultValue")&&nl(e,t.type,tn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function nl(e,t,n){(t!=="number"||ni(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Or=Array.isArray;function Qn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+tn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function rl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(Or(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:tn(n)}}function Gd(e,t){var n=tn(t.value),r=tn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Gu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Jd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ol(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Jd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var So,Xd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(So=So||document.createElement("div"),So.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=So.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Br(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Rr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kh=["Webkit","ms","Moz","O"];Object.keys(Rr).forEach(function(e){kh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rr[t]=Rr[e]})});function Zd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Rr.hasOwnProperty(e)&&Rr[e]?(""+t).trim():t+"px"}function qd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Zd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var xh=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function il(e,t){if(t){if(xh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function al(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ll=null;function us(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sl=null,Yn=null,Gn=null;function Ju(e){if(e=fo(e)){if(typeof sl!="function")throw Error(z(280));var t=e.stateNode;t&&(t=ji(t),sl(e.stateNode,e.type,t))}}function ef(e){Yn?Gn?Gn.push(e):Gn=[e]:Yn=e}function tf(){if(Yn){var e=Yn,t=Gn;if(Gn=Yn=null,Ju(e),t)for(e=0;e<t.length;e++)Ju(t[e])}}function nf(e,t){return e(t)}function rf(){}var ya=!1;function of(e,t,n){if(ya)return e(t,n);ya=!0;try{return nf(e,t,n)}finally{ya=!1,(Yn!==null||Gn!==null)&&(rf(),tf())}}function Ur(e,t){var n=e.stateNode;if(n===null)return null;var r=ji(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var ul=!1;if(Rt)try{var vr={};Object.defineProperty(vr,"passive",{get:function(){ul=!0}}),window.addEventListener("test",vr,vr),window.removeEventListener("test",vr,vr)}catch{ul=!1}function Sh(e,t,n,r,o,i,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var Tr=!1,ri=null,oi=!1,cl=null,Ch={onError:function(e){Tr=!0,ri=e}};function Eh(e,t,n,r,o,i,a,l,s){Tr=!1,ri=null,Sh.apply(Ch,arguments)}function Ph(e,t,n,r,o,i,a,l,s){if(Eh.apply(this,arguments),Tr){if(Tr){var c=ri;Tr=!1,ri=null}else throw Error(z(198));oi||(oi=!0,cl=c)}}function Cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function af(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xu(e){if(Cn(e)!==e)throw Error(z(188))}function Oh(e){var t=e.alternate;if(!t){if(t=Cn(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Xu(o),e;if(i===r)return Xu(o),t;i=i.sibling}throw Error(z(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function lf(e){return e=Oh(e),e!==null?sf(e):null}function sf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=sf(e);if(t!==null)return t;e=e.sibling}return null}var uf=Ie.unstable_scheduleCallback,Zu=Ie.unstable_cancelCallback,Lh=Ie.unstable_shouldYield,zh=Ie.unstable_requestPaint,ee=Ie.unstable_now,Rh=Ie.unstable_getCurrentPriorityLevel,cs=Ie.unstable_ImmediatePriority,cf=Ie.unstable_UserBlockingPriority,ii=Ie.unstable_NormalPriority,Th=Ie.unstable_LowPriority,df=Ie.unstable_IdlePriority,_i=null,vt=null;function Nh(e){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(_i,e,void 0,(e.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:$h,_h=Math.log,Fh=Math.LN2;function $h(e){return e>>>=0,e===0?32:31-(_h(e)/Fh|0)|0}var Co=64,Eo=4194304;function Lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ai(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=Lr(l):(i&=a,i!==0&&(r=Lr(i)))}else a=n&~o,a!==0?r=Lr(a):i!==0&&(r=Lr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ot(t),o=1<<n,r|=e[n],t&=~o;return r}function Ah(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-ot(i),l=1<<a,s=o[a];s===-1?(!(l&n)||l&r)&&(o[a]=Ah(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function dl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ff(){var e=Co;return Co<<=1,!(Co&4194240)&&(Co=64),e}function va(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function uo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ot(t),e[t]=n}function Ih(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ot(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ds(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var H=0;function pf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var gf,fs,mf,hf,yf,fl=!1,Po=[],Vt=null,Kt=null,Qt=null,Hr=new Map,Wr=new Map,Mt=[],Mh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qu(e,t){switch(e){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":Qt=null;break;case"pointerover":case"pointerout":Hr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wr.delete(t.pointerId)}}function wr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=fo(t),t!==null&&fs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Dh(e,t,n,r,o){switch(t){case"focusin":return Vt=wr(Vt,e,t,n,r,o),!0;case"dragenter":return Kt=wr(Kt,e,t,n,r,o),!0;case"mouseover":return Qt=wr(Qt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Hr.set(i,wr(Hr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Wr.set(i,wr(Wr.get(i)||null,e,t,n,r,o)),!0}return!1}function vf(e){var t=pn(e.target);if(t!==null){var n=Cn(t);if(n!==null){if(t=n.tag,t===13){if(t=af(n),t!==null){e.blockedOn=t,yf(e.priority,function(){mf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ll=r,n.target.dispatchEvent(r),ll=null}else return t=fo(n),t!==null&&fs(t),e.blockedOn=n,!1;t.shift()}return!0}function ec(e,t,n){Bo(e)&&n.delete(t)}function Bh(){fl=!1,Vt!==null&&Bo(Vt)&&(Vt=null),Kt!==null&&Bo(Kt)&&(Kt=null),Qt!==null&&Bo(Qt)&&(Qt=null),Hr.forEach(ec),Wr.forEach(ec)}function br(e,t){e.blockedOn===t&&(e.blockedOn=null,fl||(fl=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,Bh)))}function Vr(e){function t(o){return br(o,e)}if(0<Po.length){br(Po[0],e);for(var n=1;n<Po.length;n++){var r=Po[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Vt!==null&&br(Vt,e),Kt!==null&&br(Kt,e),Qt!==null&&br(Qt,e),Hr.forEach(t),Wr.forEach(t),n=0;n<Mt.length;n++)r=Mt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Mt.length&&(n=Mt[0],n.blockedOn===null);)vf(n),n.blockedOn===null&&Mt.shift()}var Jn=Ft.ReactCurrentBatchConfig,li=!0;function Uh(e,t,n,r){var o=H,i=Jn.transition;Jn.transition=null;try{H=1,ps(e,t,n,r)}finally{H=o,Jn.transition=i}}function Hh(e,t,n,r){var o=H,i=Jn.transition;Jn.transition=null;try{H=4,ps(e,t,n,r)}finally{H=o,Jn.transition=i}}function ps(e,t,n,r){if(li){var o=pl(e,t,n,r);if(o===null)La(e,t,r,si,n),qu(e,r);else if(Dh(o,e,t,n,r))r.stopPropagation();else if(qu(e,r),t&4&&-1<Mh.indexOf(e)){for(;o!==null;){var i=fo(o);if(i!==null&&gf(i),i=pl(e,t,n,r),i===null&&La(e,t,r,si,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else La(e,t,r,null,n)}}var si=null;function pl(e,t,n,r){if(si=null,e=us(r),e=pn(e),e!==null)if(t=Cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=af(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return si=e,null}function wf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rh()){case cs:return 1;case cf:return 4;case ii:case Th:return 16;case df:return 536870912;default:return 16}default:return 16}}var Bt=null,gs=null,Uo=null;function bf(){if(Uo)return Uo;var e,t=gs,n=t.length,r,o="value"in Bt?Bt.value:Bt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Uo=o.slice(e,1<r?1-r:void 0)}function Ho(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Oo(){return!0}function tc(){return!1}function De(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Oo:tc,this.isPropagationStopped=tc,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oo)},persist:function(){},isPersistent:Oo}),t}var cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ms=De(cr),co=X({},cr,{view:0,detail:0}),Wh=De(co),wa,ba,kr,Fi=X({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kr&&(kr&&e.type==="mousemove"?(wa=e.screenX-kr.screenX,ba=e.screenY-kr.screenY):ba=wa=0,kr=e),wa)},movementY:function(e){return"movementY"in e?e.movementY:ba}}),nc=De(Fi),Vh=X({},Fi,{dataTransfer:0}),Kh=De(Vh),Qh=X({},co,{relatedTarget:0}),ka=De(Qh),Yh=X({},cr,{animationName:0,elapsedTime:0,pseudoElement:0}),Gh=De(Yh),Jh=X({},cr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xh=De(Jh),Zh=X({},cr,{data:0}),rc=De(Zh),qh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},e0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},t0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function n0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=t0[e])?!!t[e]:!1}function hs(){return n0}var r0=X({},co,{key:function(e){if(e.key){var t=qh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ho(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?e0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hs,charCode:function(e){return e.type==="keypress"?Ho(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ho(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),o0=De(r0),i0=X({},Fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oc=De(i0),a0=X({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hs}),l0=De(a0),s0=X({},cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),u0=De(s0),c0=X({},Fi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),d0=De(c0),f0=[9,13,27,32],ys=Rt&&"CompositionEvent"in window,Nr=null;Rt&&"documentMode"in document&&(Nr=document.documentMode);var p0=Rt&&"TextEvent"in window&&!Nr,kf=Rt&&(!ys||Nr&&8<Nr&&11>=Nr),ic=String.fromCharCode(32),ac=!1;function xf(e,t){switch(e){case"keyup":return f0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jn=!1;function g0(e,t){switch(e){case"compositionend":return Sf(t);case"keypress":return t.which!==32?null:(ac=!0,ic);case"textInput":return e=t.data,e===ic&&ac?null:e;default:return null}}function m0(e,t){if(jn)return e==="compositionend"||!ys&&xf(e,t)?(e=bf(),Uo=gs=Bt=null,jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kf&&t.locale!=="ko"?null:t.data;default:return null}}var h0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!h0[e.type]:t==="textarea"}function Cf(e,t,n,r){ef(r),t=ui(t,"onChange"),0<t.length&&(n=new ms("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _r=null,Kr=null;function y0(e){$f(e,0)}function $i(e){var t=Dn(e);if(Qd(t))return e}function v0(e,t){if(e==="change")return t}var Ef=!1;if(Rt){var xa;if(Rt){var Sa="oninput"in document;if(!Sa){var sc=document.createElement("div");sc.setAttribute("oninput","return;"),Sa=typeof sc.oninput=="function"}xa=Sa}else xa=!1;Ef=xa&&(!document.documentMode||9<document.documentMode)}function uc(){_r&&(_r.detachEvent("onpropertychange",Pf),Kr=_r=null)}function Pf(e){if(e.propertyName==="value"&&$i(Kr)){var t=[];Cf(t,Kr,e,us(e)),of(y0,t)}}function w0(e,t,n){e==="focusin"?(uc(),_r=t,Kr=n,_r.attachEvent("onpropertychange",Pf)):e==="focusout"&&uc()}function b0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $i(Kr)}function k0(e,t){if(e==="click")return $i(t)}function x0(e,t){if(e==="input"||e==="change")return $i(t)}function S0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var at=typeof Object.is=="function"?Object.is:S0;function Qr(e,t){if(at(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ga.call(t,o)||!at(e[o],t[o]))return!1}return!0}function cc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dc(e,t){var n=cc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cc(n)}}function Of(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Of(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Lf(){for(var e=window,t=ni();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ni(e.document)}return t}function vs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function C0(e){var t=Lf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Of(n.ownerDocument.documentElement,n)){if(r!==null&&vs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=dc(n,i);var a=dc(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var E0=Rt&&"documentMode"in document&&11>=document.documentMode,In=null,gl=null,Fr=null,ml=!1;function fc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ml||In==null||In!==ni(r)||(r=In,"selectionStart"in r&&vs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fr&&Qr(Fr,r)||(Fr=r,r=ui(gl,"onSelect"),0<r.length&&(t=new ms("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=In)))}function Lo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mn={animationend:Lo("Animation","AnimationEnd"),animationiteration:Lo("Animation","AnimationIteration"),animationstart:Lo("Animation","AnimationStart"),transitionend:Lo("Transition","TransitionEnd")},Ca={},zf={};Rt&&(zf=document.createElement("div").style,"AnimationEvent"in window||(delete Mn.animationend.animation,delete Mn.animationiteration.animation,delete Mn.animationstart.animation),"TransitionEvent"in window||delete Mn.transitionend.transition);function Ai(e){if(Ca[e])return Ca[e];if(!Mn[e])return e;var t=Mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zf)return Ca[e]=t[n];return e}var Rf=Ai("animationend"),Tf=Ai("animationiteration"),Nf=Ai("animationstart"),_f=Ai("transitionend"),Ff=new Map,pc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function on(e,t){Ff.set(e,t),Sn(t,[e])}for(var Ea=0;Ea<pc.length;Ea++){var Pa=pc[Ea],P0=Pa.toLowerCase(),O0=Pa[0].toUpperCase()+Pa.slice(1);on(P0,"on"+O0)}on(Rf,"onAnimationEnd");on(Tf,"onAnimationIteration");on(Nf,"onAnimationStart");on("dblclick","onDoubleClick");on("focusin","onFocus");on("focusout","onBlur");on(_f,"onTransitionEnd");tr("onMouseEnter",["mouseout","mouseover"]);tr("onMouseLeave",["mouseout","mouseover"]);tr("onPointerEnter",["pointerout","pointerover"]);tr("onPointerLeave",["pointerout","pointerover"]);Sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),L0=new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));function gc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ph(r,t,void 0,e),e.currentTarget=null}function $f(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;gc(o,l,c),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,c=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;gc(o,l,c),i=s}}}if(oi)throw e=cl,oi=!1,cl=null,e}function K(e,t){var n=t[bl];n===void 0&&(n=t[bl]=new Set);var r=e+"__bubble";n.has(r)||(Af(t,e,2,!1),n.add(r))}function Oa(e,t,n){var r=0;t&&(r|=4),Af(n,e,r,t)}var zo="_reactListening"+Math.random().toString(36).slice(2);function Yr(e){if(!e[zo]){e[zo]=!0,Ud.forEach(function(n){n!=="selectionchange"&&(L0.has(n)||Oa(n,!1,e),Oa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zo]||(t[zo]=!0,Oa("selectionchange",!1,t))}}function Af(e,t,n,r){switch(wf(t)){case 1:var o=Uh;break;case 4:o=Hh;break;default:o=ps}n=o.bind(null,t,n,e),o=void 0,!ul||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function La(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=pn(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}of(function(){var c=i,g=us(n),p=[];e:{var h=Ff.get(e);if(h!==void 0){var v=ms,b=e;switch(e){case"keypress":if(Ho(n)===0)break e;case"keydown":case"keyup":v=o0;break;case"focusin":b="focus",v=ka;break;case"focusout":b="blur",v=ka;break;case"beforeblur":case"afterblur":v=ka;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=nc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Kh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=l0;break;case Rf:case Tf:case Nf:v=Gh;break;case _f:v=u0;break;case"scroll":v=Wh;break;case"wheel":v=d0;break;case"copy":case"cut":case"paste":v=Xh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=oc}var w=(t&4)!==0,S=!w&&e==="scroll",f=w?h!==null?h+"Capture":null:h;w=[];for(var u=c,d;u!==null;){d=u;var y=d.stateNode;if(d.tag===5&&y!==null&&(d=y,f!==null&&(y=Ur(u,f),y!=null&&w.push(Gr(u,y,d)))),S)break;u=u.return}0<w.length&&(h=new v(h,b,null,n,g),p.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==ll&&(b=n.relatedTarget||n.fromElement)&&(pn(b)||b[Tt]))break e;if((v||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,v?(b=n.relatedTarget||n.toElement,v=c,b=b?pn(b):null,b!==null&&(S=Cn(b),b!==S||b.tag!==5&&b.tag!==6)&&(b=null)):(v=null,b=c),v!==b)){if(w=nc,y="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(w=oc,y="onPointerLeave",f="onPointerEnter",u="pointer"),S=v==null?h:Dn(v),d=b==null?h:Dn(b),h=new w(y,u+"leave",v,n,g),h.target=S,h.relatedTarget=d,y=null,pn(g)===c&&(w=new w(f,u+"enter",b,n,g),w.target=d,w.relatedTarget=S,y=w),S=y,v&&b)t:{for(w=v,f=b,u=0,d=w;d;d=Rn(d))u++;for(d=0,y=f;y;y=Rn(y))d++;for(;0<u-d;)w=Rn(w),u--;for(;0<d-u;)f=Rn(f),d--;for(;u--;){if(w===f||f!==null&&w===f.alternate)break t;w=Rn(w),f=Rn(f)}w=null}else w=null;v!==null&&mc(p,h,v,w,!1),b!==null&&S!==null&&mc(p,S,b,w,!0)}}e:{if(h=c?Dn(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var k=v0;else if(lc(h))if(Ef)k=x0;else{k=b0;var x=w0}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=k0);if(k&&(k=k(e,c))){Cf(p,k,n,g);break e}x&&x(e,h,c),e==="focusout"&&(x=h._wrapperState)&&x.controlled&&h.type==="number"&&nl(h,"number",h.value)}switch(x=c?Dn(c):window,e){case"focusin":(lc(x)||x.contentEditable==="true")&&(In=x,gl=c,Fr=null);break;case"focusout":Fr=gl=In=null;break;case"mousedown":ml=!0;break;case"contextmenu":case"mouseup":case"dragend":ml=!1,fc(p,n,g);break;case"selectionchange":if(E0)break;case"keydown":case"keyup":fc(p,n,g)}var C;if(ys)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else jn?xf(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(kf&&n.locale!=="ko"&&(jn||O!=="onCompositionStart"?O==="onCompositionEnd"&&jn&&(C=bf()):(Bt=g,gs="value"in Bt?Bt.value:Bt.textContent,jn=!0)),x=ui(c,O),0<x.length&&(O=new rc(O,e,null,n,g),p.push({event:O,listeners:x}),C?O.data=C:(C=Sf(n),C!==null&&(O.data=C)))),(C=p0?g0(e,n):m0(e,n))&&(c=ui(c,"onBeforeInput"),0<c.length&&(g=new rc("onBeforeInput","beforeinput",null,n,g),p.push({event:g,listeners:c}),g.data=C))}$f(p,t)})}function Gr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ui(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Ur(e,n),i!=null&&r.unshift(Gr(e,i,o)),i=Ur(e,t),i!=null&&r.push(Gr(e,i,o))),e=e.return}return r}function Rn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function mc(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&c!==null&&(l=c,o?(s=Ur(n,i),s!=null&&a.unshift(Gr(n,s,l))):o||(s=Ur(n,i),s!=null&&a.push(Gr(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var z0=/\r\n?/g,R0=/\u0000|\uFFFD/g;function hc(e){return(typeof e=="string"?e:""+e).replace(z0,`
`).replace(R0,"")}function Ro(e,t,n){if(t=hc(t),hc(e)!==t&&n)throw Error(z(425))}function ci(){}var hl=null,yl=null;function vl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wl=typeof setTimeout=="function"?setTimeout:void 0,T0=typeof clearTimeout=="function"?clearTimeout:void 0,yc=typeof Promise=="function"?Promise:void 0,N0=typeof queueMicrotask=="function"?queueMicrotask:typeof yc<"u"?function(e){return yc.resolve(null).then(e).catch(_0)}:wl;function _0(e){setTimeout(function(){throw e})}function za(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Vr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Vr(t)}function Yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function vc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var dr=Math.random().toString(36).slice(2),ht="__reactFiber$"+dr,Jr="__reactProps$"+dr,Tt="__reactContainer$"+dr,bl="__reactEvents$"+dr,F0="__reactListeners$"+dr,$0="__reactHandles$"+dr;function pn(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Tt]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=vc(e);e!==null;){if(n=e[ht])return n;e=vc(e)}return t}e=n,n=e.parentNode}return null}function fo(e){return e=e[ht]||e[Tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Dn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function ji(e){return e[Jr]||null}var kl=[],Bn=-1;function an(e){return{current:e}}function Q(e){0>Bn||(e.current=kl[Bn],kl[Bn]=null,Bn--)}function V(e,t){Bn++,kl[Bn]=e.current,e.current=t}var nn={},we=an(nn),Re=an(!1),vn=nn;function nr(e,t){var n=e.type.contextTypes;if(!n)return nn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Te(e){return e=e.childContextTypes,e!=null}function di(){Q(Re),Q(we)}function wc(e,t,n){if(we.current!==nn)throw Error(z(168));V(we,t),V(Re,n)}function jf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(z(108,wh(e)||"Unknown",o));return X({},n,r)}function fi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||nn,vn=we.current,V(we,e),V(Re,Re.current),!0}function bc(e,t,n){var r=e.stateNode;if(!r)throw Error(z(169));n?(e=jf(e,t,vn),r.__reactInternalMemoizedMergedChildContext=e,Q(Re),Q(we),V(we,e)):Q(Re),V(Re,n)}var Pt=null,Ii=!1,Ra=!1;function If(e){Pt===null?Pt=[e]:Pt.push(e)}function A0(e){Ii=!0,If(e)}function ln(){if(!Ra&&Pt!==null){Ra=!0;var e=0,t=H;try{var n=Pt;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Pt=null,Ii=!1}catch(o){throw Pt!==null&&(Pt=Pt.slice(e+1)),uf(cs,ln),o}finally{H=t,Ra=!1}}return null}var Un=[],Hn=0,pi=null,gi=0,Ve=[],Ke=0,wn=null,Ot=1,Lt="";function dn(e,t){Un[Hn++]=gi,Un[Hn++]=pi,pi=e,gi=t}function Mf(e,t,n){Ve[Ke++]=Ot,Ve[Ke++]=Lt,Ve[Ke++]=wn,wn=e;var r=Ot;e=Lt;var o=32-ot(r)-1;r&=~(1<<o),n+=1;var i=32-ot(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Ot=1<<32-ot(t)+o|n<<o|r,Lt=i+e}else Ot=1<<i|n<<o|r,Lt=e}function ws(e){e.return!==null&&(dn(e,1),Mf(e,1,0))}function bs(e){for(;e===pi;)pi=Un[--Hn],Un[Hn]=null,gi=Un[--Hn],Un[Hn]=null;for(;e===wn;)wn=Ve[--Ke],Ve[Ke]=null,Lt=Ve[--Ke],Ve[Ke]=null,Ot=Ve[--Ke],Ve[Ke]=null}var Ae=null,$e=null,Y=!1,nt=null;function Df(e,t){var n=Qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function kc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ae=e,$e=Yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ae=e,$e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=wn!==null?{id:Ot,overflow:Lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ae=e,$e=null,!0):!1;default:return!1}}function xl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Sl(e){if(Y){var t=$e;if(t){var n=t;if(!kc(e,t)){if(xl(e))throw Error(z(418));t=Yt(n.nextSibling);var r=Ae;t&&kc(e,t)?Df(r,n):(e.flags=e.flags&-4097|2,Y=!1,Ae=e)}}else{if(xl(e))throw Error(z(418));e.flags=e.flags&-4097|2,Y=!1,Ae=e}}}function xc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ae=e}function To(e){if(e!==Ae)return!1;if(!Y)return xc(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vl(e.type,e.memoizedProps)),t&&(t=$e)){if(xl(e))throw Bf(),Error(z(418));for(;t;)Df(e,t),t=Yt(t.nextSibling)}if(xc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){$e=Yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}$e=null}}else $e=Ae?Yt(e.stateNode.nextSibling):null;return!0}function Bf(){for(var e=$e;e;)e=Yt(e.nextSibling)}function rr(){$e=Ae=null,Y=!1}function ks(e){nt===null?nt=[e]:nt.push(e)}var j0=Ft.ReactCurrentBatchConfig;function et(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var mi=an(null),hi=null,Wn=null,xs=null;function Ss(){xs=Wn=hi=null}function Cs(e){var t=mi.current;Q(mi),e._currentValue=t}function Cl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xn(e,t){hi=e,xs=Wn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Le=!0),e.firstContext=null)}function Ge(e){var t=e._currentValue;if(xs!==e)if(e={context:e,memoizedValue:t,next:null},Wn===null){if(hi===null)throw Error(z(308));Wn=e,hi.dependencies={lanes:0,firstContext:e}}else Wn=Wn.next=e;return t}var gn=null;function Es(e){gn===null?gn=[e]:gn.push(e)}function Uf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Es(t)):(n.next=o.next,o.next=n),t.interleaved=n,Nt(e,r)}function Nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var It=!1;function Ps(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Nt(e,n)}return o=r.interleaved,o===null?(t.next=t,Es(r)):(t.next=o.next,o.next=t),r.interleaved=t,Nt(e,n)}function Wo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ds(e,n)}}function Sc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function yi(e,t,n,r){var o=e.updateQueue;It=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,c=s.next;s.next=null,a===null?i=c:a.next=c,a=s;var g=e.alternate;g!==null&&(g=g.updateQueue,l=g.lastBaseUpdate,l!==a&&(l===null?g.firstBaseUpdate=c:l.next=c,g.lastBaseUpdate=s))}if(i!==null){var p=o.baseState;a=0,g=c=s=null,l=i;do{var h=l.lane,v=l.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var b=e,w=l;switch(h=t,v=n,w.tag){case 1:if(b=w.payload,typeof b=="function"){p=b.call(v,p,h);break e}p=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=w.payload,h=typeof b=="function"?b.call(v,p,h):b,h==null)break e;p=X({},p,h);break e;case 2:It=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[l]:h.push(l))}else v={eventTime:v,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},g===null?(c=g=v,s=p):g=g.next=v,a|=h;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;h=l,l=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(1);if(g===null&&(s=p),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=g,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);kn|=a,e.lanes=a,e.memoizedState=p}}function Cc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(z(191,o));o.call(r)}}}var Wf=new Bd.Component().refs;function El(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Mi={isMounted:function(e){return(e=e._reactInternals)?Cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Se(),o=Xt(e),i=zt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Gt(e,i,o),t!==null&&(it(t,e,o,r),Wo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Se(),o=Xt(e),i=zt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Gt(e,i,o),t!==null&&(it(t,e,o,r),Wo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Se(),r=Xt(e),o=zt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Gt(e,o,r),t!==null&&(it(t,e,r,n),Wo(t,e,r))}};function Ec(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Qr(n,r)||!Qr(o,i):!0}function Vf(e,t,n){var r=!1,o=nn,i=t.contextType;return typeof i=="object"&&i!==null?i=Ge(i):(o=Te(t)?vn:we.current,r=t.contextTypes,i=(r=r!=null)?nr(e,o):nn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Mi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Pc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Mi.enqueueReplaceState(t,t.state,null)}function Pl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Wf,Ps(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ge(i):(i=Te(t)?vn:we.current,o.context=nr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(El(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Mi.enqueueReplaceState(o,o.state,null),yi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function xr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=o.refs;l===Wf&&(l=o.refs={}),a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function No(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Oc(e){var t=e._init;return t(e._payload)}function Kf(e){function t(f,u){if(e){var d=f.deletions;d===null?(f.deletions=[u],f.flags|=16):d.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function o(f,u){return f=Zt(f,u),f.index=0,f.sibling=null,f}function i(f,u,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<u?(f.flags|=2,u):d):(f.flags|=2,u)):(f.flags|=1048576,u)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,u,d,y){return u===null||u.tag!==6?(u=ja(d,f.mode,y),u.return=f,u):(u=o(u,d),u.return=f,u)}function s(f,u,d,y){var k=d.type;return k===An?g(f,u,d.props.children,y,d.key):u!==null&&(u.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===jt&&Oc(k)===u.type)?(y=o(u,d.props),y.ref=xr(f,u,d),y.return=f,y):(y=Jo(d.type,d.key,d.props,null,f.mode,y),y.ref=xr(f,u,d),y.return=f,y)}function c(f,u,d,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=Ia(d,f.mode,y),u.return=f,u):(u=o(u,d.children||[]),u.return=f,u)}function g(f,u,d,y,k){return u===null||u.tag!==7?(u=yn(d,f.mode,y,k),u.return=f,u):(u=o(u,d),u.return=f,u)}function p(f,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=ja(""+u,f.mode,d),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case ko:return d=Jo(u.type,u.key,u.props,null,f.mode,d),d.ref=xr(f,null,u),d.return=f,d;case $n:return u=Ia(u,f.mode,d),u.return=f,u;case jt:var y=u._init;return p(f,y(u._payload),d)}if(Or(u)||yr(u))return u=yn(u,f.mode,d,null),u.return=f,u;No(f,u)}return null}function h(f,u,d,y){var k=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return k!==null?null:l(f,u,""+d,y);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ko:return d.key===k?s(f,u,d,y):null;case $n:return d.key===k?c(f,u,d,y):null;case jt:return k=d._init,h(f,u,k(d._payload),y)}if(Or(d)||yr(d))return k!==null?null:g(f,u,d,y,null);No(f,d)}return null}function v(f,u,d,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(d)||null,l(u,f,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ko:return f=f.get(y.key===null?d:y.key)||null,s(u,f,y,k);case $n:return f=f.get(y.key===null?d:y.key)||null,c(u,f,y,k);case jt:var x=y._init;return v(f,u,d,x(y._payload),k)}if(Or(y)||yr(y))return f=f.get(d)||null,g(u,f,y,k,null);No(u,y)}return null}function b(f,u,d,y){for(var k=null,x=null,C=u,O=u=0,L=null;C!==null&&O<d.length;O++){C.index>O?(L=C,C=null):L=C.sibling;var T=h(f,C,d[O],y);if(T===null){C===null&&(C=L);break}e&&C&&T.alternate===null&&t(f,C),u=i(T,u,O),x===null?k=T:x.sibling=T,x=T,C=L}if(O===d.length)return n(f,C),Y&&dn(f,O),k;if(C===null){for(;O<d.length;O++)C=p(f,d[O],y),C!==null&&(u=i(C,u,O),x===null?k=C:x.sibling=C,x=C);return Y&&dn(f,O),k}for(C=r(f,C);O<d.length;O++)L=v(C,f,O,d[O],y),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?O:L.key),u=i(L,u,O),x===null?k=L:x.sibling=L,x=L);return e&&C.forEach(function(j){return t(f,j)}),Y&&dn(f,O),k}function w(f,u,d,y){var k=yr(d);if(typeof k!="function")throw Error(z(150));if(d=k.call(d),d==null)throw Error(z(151));for(var x=k=null,C=u,O=u=0,L=null,T=d.next();C!==null&&!T.done;O++,T=d.next()){C.index>O?(L=C,C=null):L=C.sibling;var j=h(f,C,T.value,y);if(j===null){C===null&&(C=L);break}e&&C&&j.alternate===null&&t(f,C),u=i(j,u,O),x===null?k=j:x.sibling=j,x=j,C=L}if(T.done)return n(f,C),Y&&dn(f,O),k;if(C===null){for(;!T.done;O++,T=d.next())T=p(f,T.value,y),T!==null&&(u=i(T,u,O),x===null?k=T:x.sibling=T,x=T);return Y&&dn(f,O),k}for(C=r(f,C);!T.done;O++,T=d.next())T=v(C,f,O,T.value,y),T!==null&&(e&&T.alternate!==null&&C.delete(T.key===null?O:T.key),u=i(T,u,O),x===null?k=T:x.sibling=T,x=T);return e&&C.forEach(function(re){return t(f,re)}),Y&&dn(f,O),k}function S(f,u,d,y){if(typeof d=="object"&&d!==null&&d.type===An&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case ko:e:{for(var k=d.key,x=u;x!==null;){if(x.key===k){if(k=d.type,k===An){if(x.tag===7){n(f,x.sibling),u=o(x,d.props.children),u.return=f,f=u;break e}}else if(x.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===jt&&Oc(k)===x.type){n(f,x.sibling),u=o(x,d.props),u.ref=xr(f,x,d),u.return=f,f=u;break e}n(f,x);break}else t(f,x);x=x.sibling}d.type===An?(u=yn(d.props.children,f.mode,y,d.key),u.return=f,f=u):(y=Jo(d.type,d.key,d.props,null,f.mode,y),y.ref=xr(f,u,d),y.return=f,f=y)}return a(f);case $n:e:{for(x=d.key;u!==null;){if(u.key===x)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){n(f,u.sibling),u=o(u,d.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=Ia(d,f.mode,y),u.return=f,f=u}return a(f);case jt:return x=d._init,S(f,u,x(d._payload),y)}if(Or(d))return b(f,u,d,y);if(yr(d))return w(f,u,d,y);No(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(n(f,u.sibling),u=o(u,d),u.return=f,f=u):(n(f,u),u=ja(d,f.mode,y),u.return=f,f=u),a(f)):n(f,u)}return S}var or=Kf(!0),Qf=Kf(!1),po={},wt=an(po),Xr=an(po),Zr=an(po);function mn(e){if(e===po)throw Error(z(174));return e}function Os(e,t){switch(V(Zr,t),V(Xr,e),V(wt,po),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ol(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ol(t,e)}Q(wt),V(wt,t)}function ir(){Q(wt),Q(Xr),Q(Zr)}function Yf(e){mn(Zr.current);var t=mn(wt.current),n=ol(t,e.type);t!==n&&(V(Xr,e),V(wt,n))}function Ls(e){Xr.current===e&&(Q(wt),Q(Xr))}var G=an(0);function vi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ta=[];function zs(){for(var e=0;e<Ta.length;e++)Ta[e]._workInProgressVersionPrimary=null;Ta.length=0}var Vo=Ft.ReactCurrentDispatcher,Na=Ft.ReactCurrentBatchConfig,bn=0,J=null,oe=null,se=null,wi=!1,$r=!1,qr=0,I0=0;function me(){throw Error(z(321))}function Rs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!at(e[n],t[n]))return!1;return!0}function Ts(e,t,n,r,o,i){if(bn=i,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vo.current=e===null||e.memoizedState===null?U0:H0,e=n(r,o),$r){i=0;do{if($r=!1,qr=0,25<=i)throw Error(z(301));i+=1,se=oe=null,t.updateQueue=null,Vo.current=W0,e=n(r,o)}while($r)}if(Vo.current=bi,t=oe!==null&&oe.next!==null,bn=0,se=oe=J=null,wi=!1,t)throw Error(z(300));return e}function Ns(){var e=qr!==0;return qr=0,e}function pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?J.memoizedState=se=e:se=se.next=e,se}function Je(){if(oe===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=se===null?J.memoizedState:se.next;if(t!==null)se=t,oe=e;else{if(e===null)throw Error(z(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},se===null?J.memoizedState=se=e:se=se.next=e}return se}function eo(e,t){return typeof t=="function"?t(e):t}function _a(e){var t=Je(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=oe,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,c=i;do{var g=c.lane;if((bn&g)===g)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=p,a=r):s=s.next=p,J.lanes|=g,kn|=g}c=c.next}while(c!==null&&c!==i);s===null?a=r:s.next=l,at(r,t.memoizedState)||(Le=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,J.lanes|=i,kn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Fa(e){var t=Je(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);at(i,t.memoizedState)||(Le=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Gf(){}function Jf(e,t){var n=J,r=Je(),o=t(),i=!at(r.memoizedState,o);if(i&&(r.memoizedState=o,Le=!0),r=r.queue,_s(qf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||se!==null&&se.memoizedState.tag&1){if(n.flags|=2048,to(9,Zf.bind(null,n,r,o,t),void 0,null),ue===null)throw Error(z(349));bn&30||Xf(n,t,o)}return o}function Xf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zf(e,t,n,r){t.value=n,t.getSnapshot=r,ep(t)&&tp(e)}function qf(e,t,n){return n(function(){ep(t)&&tp(e)})}function ep(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!at(e,n)}catch{return!0}}function tp(e){var t=Nt(e,1);t!==null&&it(t,e,1,-1)}function Lc(e){var t=pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:eo,lastRenderedState:e},t.queue=e,e=e.dispatch=B0.bind(null,J,e),[t.memoizedState,e]}function to(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function np(){return Je().memoizedState}function Ko(e,t,n,r){var o=pt();J.flags|=e,o.memoizedState=to(1|t,n,void 0,r===void 0?null:r)}function Di(e,t,n,r){var o=Je();r=r===void 0?null:r;var i=void 0;if(oe!==null){var a=oe.memoizedState;if(i=a.destroy,r!==null&&Rs(r,a.deps)){o.memoizedState=to(t,n,i,r);return}}J.flags|=e,o.memoizedState=to(1|t,n,i,r)}function zc(e,t){return Ko(8390656,8,e,t)}function _s(e,t){return Di(2048,8,e,t)}function rp(e,t){return Di(4,2,e,t)}function op(e,t){return Di(4,4,e,t)}function ip(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ap(e,t,n){return n=n!=null?n.concat([e]):null,Di(4,4,ip.bind(null,t,e),n)}function Fs(){}function lp(e,t){var n=Je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Rs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function sp(e,t){var n=Je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Rs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function up(e,t,n){return bn&21?(at(n,t)||(n=ff(),J.lanes|=n,kn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Le=!0),e.memoizedState=n)}function M0(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=Na.transition;Na.transition={};try{e(!1),t()}finally{H=n,Na.transition=r}}function cp(){return Je().memoizedState}function D0(e,t,n){var r=Xt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},dp(e))fp(t,n);else if(n=Uf(e,t,n,r),n!==null){var o=Se();it(n,e,r,o),pp(n,t,r)}}function B0(e,t,n){var r=Xt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(dp(e))fp(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,at(l,a)){var s=t.interleaved;s===null?(o.next=o,Es(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Uf(e,t,o,r),n!==null&&(o=Se(),it(n,e,r,o),pp(n,t,r))}}function dp(e){var t=e.alternate;return e===J||t!==null&&t===J}function fp(e,t){$r=wi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ds(e,n)}}var bi={readContext:Ge,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},U0={readContext:Ge,useCallback:function(e,t){return pt().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:zc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ko(4194308,4,ip.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ko(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ko(4,2,e,t)},useMemo:function(e,t){var n=pt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=pt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=D0.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=pt();return e={current:e},t.memoizedState=e},useState:Lc,useDebugValue:Fs,useDeferredValue:function(e){return pt().memoizedState=e},useTransition:function(){var e=Lc(!1),t=e[0];return e=M0.bind(null,e[1]),pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,o=pt();if(Y){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),ue===null)throw Error(z(349));bn&30||Xf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,zc(qf.bind(null,r,i,e),[e]),r.flags|=2048,to(9,Zf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=pt(),t=ue.identifierPrefix;if(Y){var n=Lt,r=Ot;n=(r&~(1<<32-ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=qr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=I0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},H0={readContext:Ge,useCallback:lp,useContext:Ge,useEffect:_s,useImperativeHandle:ap,useInsertionEffect:rp,useLayoutEffect:op,useMemo:sp,useReducer:_a,useRef:np,useState:function(){return _a(eo)},useDebugValue:Fs,useDeferredValue:function(e){var t=Je();return up(t,oe.memoizedState,e)},useTransition:function(){var e=_a(eo)[0],t=Je().memoizedState;return[e,t]},useMutableSource:Gf,useSyncExternalStore:Jf,useId:cp,unstable_isNewReconciler:!1},W0={readContext:Ge,useCallback:lp,useContext:Ge,useEffect:_s,useImperativeHandle:ap,useInsertionEffect:rp,useLayoutEffect:op,useMemo:sp,useReducer:Fa,useRef:np,useState:function(){return Fa(eo)},useDebugValue:Fs,useDeferredValue:function(e){var t=Je();return oe===null?t.memoizedState=e:up(t,oe.memoizedState,e)},useTransition:function(){var e=Fa(eo)[0],t=Je().memoizedState;return[e,t]},useMutableSource:Gf,useSyncExternalStore:Jf,useId:cp,unstable_isNewReconciler:!1};function ar(e,t){try{var n="",r=t;do n+=vh(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function $a(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ol(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var V0=typeof WeakMap=="function"?WeakMap:Map;function gp(e,t,n){n=zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){xi||(xi=!0,jl=r),Ol(e,t)},n}function mp(e,t,n){n=zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ol(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ol(e,t),typeof r!="function"&&(Jt===null?Jt=new Set([this]):Jt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Rc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new V0;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=i1.bind(null,e,t,n),t.then(e,e))}function Tc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Nc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=zt(-1,1),t.tag=2,Gt(n,t,1))),n.lanes|=1),e)}var K0=Ft.ReactCurrentOwner,Le=!1;function xe(e,t,n,r){t.child=e===null?Qf(t,null,n,r):or(t,e.child,n,r)}function _c(e,t,n,r,o){n=n.render;var i=t.ref;return Xn(t,o),r=Ts(e,t,n,r,i,o),n=Ns(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,_t(e,t,o)):(Y&&n&&ws(t),t.flags|=1,xe(e,t,r,o),t.child)}function Fc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Us(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,hp(e,t,i,r,o)):(e=Jo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Qr,n(a,r)&&e.ref===t.ref)return _t(e,t,o)}return t.flags|=1,e=Zt(i,r),e.ref=t.ref,e.return=t,t.child=e}function hp(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Qr(i,r)&&e.ref===t.ref)if(Le=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Le=!0);else return t.lanes=e.lanes,_t(e,t,o)}return Ll(e,t,n,r,o)}function yp(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(Kn,Fe),Fe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(Kn,Fe),Fe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,V(Kn,Fe),Fe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,V(Kn,Fe),Fe|=r;return xe(e,t,o,n),t.child}function vp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ll(e,t,n,r,o){var i=Te(n)?vn:we.current;return i=nr(t,i),Xn(t,o),n=Ts(e,t,n,r,i,o),r=Ns(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,_t(e,t,o)):(Y&&r&&ws(t),t.flags|=1,xe(e,t,n,o),t.child)}function $c(e,t,n,r,o){if(Te(n)){var i=!0;fi(t)}else i=!1;if(Xn(t,o),t.stateNode===null)Qo(e,t),Vf(t,n,r),Pl(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ge(c):(c=Te(n)?vn:we.current,c=nr(t,c));var g=n.getDerivedStateFromProps,p=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==c)&&Pc(t,a,r,c),It=!1;var h=t.memoizedState;a.state=h,yi(t,r,a,o),s=t.memoizedState,l!==r||h!==s||Re.current||It?(typeof g=="function"&&(El(t,n,g,r),s=t.memoizedState),(l=It||Ec(t,n,l,r,h,s,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=c,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Hf(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:et(t.type,l),a.props=c,p=t.pendingProps,h=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ge(s):(s=Te(n)?vn:we.current,s=nr(t,s));var v=n.getDerivedStateFromProps;(g=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||h!==s)&&Pc(t,a,r,s),It=!1,h=t.memoizedState,a.state=h,yi(t,r,a,o);var b=t.memoizedState;l!==p||h!==b||Re.current||It?(typeof v=="function"&&(El(t,n,v,r),b=t.memoizedState),(c=It||Ec(t,n,c,r,h,b,s)||!1)?(g||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,b,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,b,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),a.props=r,a.state=b,a.context=s,r=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return zl(e,t,n,r,i,o)}function zl(e,t,n,r,o,i){vp(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&bc(t,n,!1),_t(e,t,i);r=t.stateNode,K0.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=or(t,e.child,null,i),t.child=or(t,null,l,i)):xe(e,t,l,i),t.memoizedState=r.state,o&&bc(t,n,!0),t.child}function wp(e){var t=e.stateNode;t.pendingContext?wc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&wc(e,t.context,!1),Os(e,t.containerInfo)}function Ac(e,t,n,r,o){return rr(),ks(o),t.flags|=256,xe(e,t,n,r),t.child}var Rl={dehydrated:null,treeContext:null,retryLane:0};function Tl(e){return{baseLanes:e,cachePool:null,transitions:null}}function bp(e,t,n){var r=t.pendingProps,o=G.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),V(G,o&1),e===null)return Sl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Hi(a,r,0,null),e=yn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Tl(n),t.memoizedState=Rl,e):$s(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return Q0(e,t,a,r,l,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Zt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=Zt(l,i):(i=yn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Tl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Rl,r}return i=e.child,e=i.sibling,r=Zt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function $s(e,t){return t=Hi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _o(e,t,n,r){return r!==null&&ks(r),or(t,e.child,null,n),e=$s(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Q0(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=$a(Error(z(422))),_o(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Hi({mode:"visible",children:r.children},o,0,null),i=yn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&or(t,e.child,null,a),t.child.memoizedState=Tl(a),t.memoizedState=Rl,i);if(!(t.mode&1))return _o(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(z(419)),r=$a(i,r,void 0),_o(e,t,a,r)}if(l=(a&e.childLanes)!==0,Le||l){if(r=ue,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Nt(e,o),it(r,e,o,-1))}return Bs(),r=$a(Error(z(421))),_o(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=a1.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,$e=Yt(o.nextSibling),Ae=t,Y=!0,nt=null,e!==null&&(Ve[Ke++]=Ot,Ve[Ke++]=Lt,Ve[Ke++]=wn,Ot=e.id,Lt=e.overflow,wn=t),t=$s(t,r.children),t.flags|=4096,t)}function jc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Cl(e.return,t,n)}function Aa(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function kp(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(xe(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jc(e,n,t);else if(e.tag===19)jc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(G,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&vi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Aa(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&vi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Aa(t,!0,n,null,i);break;case"together":Aa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function _t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),kn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=Zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Y0(e,t,n){switch(t.tag){case 3:wp(t),rr();break;case 5:Yf(t);break;case 1:Te(t.type)&&fi(t);break;case 4:Os(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;V(mi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?bp(e,t,n):(V(G,G.current&1),e=_t(e,t,n),e!==null?e.sibling:null);V(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return kp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),V(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,yp(e,t,n)}return _t(e,t,n)}var xp,Nl,Sp,Cp;xp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Nl=function(){};Sp=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,mn(wt.current);var i=null;switch(n){case"input":o=el(e,o),r=el(e,r),i=[];break;case"select":o=X({},o,{value:void 0}),r=X({},r,{value:void 0}),i=[];break;case"textarea":o=rl(e,o),r=rl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ci)}il(n,r);var a;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var l=o[c];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Dr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(l=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(i||(i=[]),i.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Dr.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&K("scroll",e),i||l===s||(i=[])):(i=i||[]).push(c,s))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Cp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Sr(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function G0(e,t,n){var r=t.pendingProps;switch(bs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return Te(t.type)&&di(),he(t),null;case 3:return r=t.stateNode,ir(),Q(Re),Q(we),zs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(To(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,nt!==null&&(Dl(nt),nt=null))),Nl(e,t),he(t),null;case 5:Ls(t);var o=mn(Zr.current);if(n=t.type,e!==null&&t.stateNode!=null)Sp(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(z(166));return he(t),null}if(e=mn(wt.current),To(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[ht]=t,r[Jr]=i,e=(t.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(o=0;o<zr.length;o++)K(zr[o],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":Ku(r,i),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},K("invalid",r);break;case"textarea":Yu(r,i),K("invalid",r)}il(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Ro(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Ro(r.textContent,l,e),o=["children",""+l]):Dr.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&K("scroll",r)}switch(n){case"input":xo(r),Qu(r,i,!0);break;case"textarea":xo(r),Gu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ci)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Jd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[ht]=t,e[Jr]=r,xp(e,t,!1,!1),t.stateNode=e;e:{switch(a=al(n,r),n){case"dialog":K("cancel",e),K("close",e),o=r;break;case"iframe":case"object":case"embed":K("load",e),o=r;break;case"video":case"audio":for(o=0;o<zr.length;o++)K(zr[o],e);o=r;break;case"source":K("error",e),o=r;break;case"img":case"image":case"link":K("error",e),K("load",e),o=r;break;case"details":K("toggle",e),o=r;break;case"input":Ku(e,r),o=el(e,r),K("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=X({},r,{value:void 0}),K("invalid",e);break;case"textarea":Yu(e,r),o=rl(e,r),K("invalid",e);break;default:o=r}il(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?qd(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Xd(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Br(e,s):typeof s=="number"&&Br(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Dr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&K("scroll",e):s!=null&&is(e,i,s,a))}switch(n){case"input":xo(e),Qu(e,r,!1);break;case"textarea":xo(e),Gu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+tn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Qn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ci)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)Cp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(z(166));if(n=mn(Zr.current),mn(wt.current),To(t)){if(r=t.stateNode,n=t.memoizedProps,r[ht]=t,(i=r.nodeValue!==n)&&(e=Ae,e!==null))switch(e.tag){case 3:Ro(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ro(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ht]=t,t.stateNode=r}return he(t),null;case 13:if(Q(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&$e!==null&&t.mode&1&&!(t.flags&128))Bf(),rr(),t.flags|=98560,i=!1;else if(i=To(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(z(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(z(317));i[ht]=t}else rr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),i=!1}else nt!==null&&(Dl(nt),nt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?ie===0&&(ie=3):Bs())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return ir(),Nl(e,t),e===null&&Yr(t.stateNode.containerInfo),he(t),null;case 10:return Cs(t.type._context),he(t),null;case 17:return Te(t.type)&&di(),he(t),null;case 19:if(Q(G),i=t.memoizedState,i===null)return he(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Sr(i,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=vi(e),a!==null){for(t.flags|=128,Sr(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(G,G.current&1|2),t.child}e=e.sibling}i.tail!==null&&ee()>lr&&(t.flags|=128,r=!0,Sr(i,!1),t.lanes=4194304)}else{if(!r)if(e=vi(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Sr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Y)return he(t),null}else 2*ee()-i.renderingStartTime>lr&&n!==1073741824&&(t.flags|=128,r=!0,Sr(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ee(),t.sibling=null,n=G.current,V(G,r?n&1|2:n&1),t):(he(t),null);case 22:case 23:return Ds(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Fe&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function J0(e,t){switch(bs(t),t.tag){case 1:return Te(t.type)&&di(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ir(),Q(Re),Q(we),zs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ls(t),null;case 13:if(Q(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(G),null;case 4:return ir(),null;case 10:return Cs(t.type._context),null;case 22:case 23:return Ds(),null;case 24:return null;default:return null}}var Fo=!1,ve=!1,X0=typeof WeakSet=="function"?WeakSet:Set,N=null;function Vn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function _l(e,t,n){try{n()}catch(r){q(e,t,r)}}var Ic=!1;function Z0(e,t){if(hl=li,e=Lf(),vs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,c=0,g=0,p=e,h=null;t:for(;;){for(var v;p!==n||o!==0&&p.nodeType!==3||(l=a+o),p!==i||r!==0&&p.nodeType!==3||(s=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(v=p.firstChild)!==null;)h=p,p=v;for(;;){if(p===e)break t;if(h===n&&++c===o&&(l=a),h===i&&++g===r&&(s=a),(v=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=v}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(yl={focusedElem:e,selectionRange:n},li=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var w=b.memoizedProps,S=b.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:et(t.type,w),S);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(y){q(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return b=Ic,Ic=!1,b}function Ar(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&_l(t,n,i)}o=o.next}while(o!==r)}}function Bi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Fl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ep(e){var t=e.alternate;t!==null&&(e.alternate=null,Ep(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ht],delete t[Jr],delete t[bl],delete t[F0],delete t[$0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Pp(e){return e.tag===5||e.tag===3||e.tag===4}function Mc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $l(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ci));else if(r!==4&&(e=e.child,e!==null))for($l(e,t,n),e=e.sibling;e!==null;)$l(e,t,n),e=e.sibling}function Al(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Al(e,t,n),e=e.sibling;e!==null;)Al(e,t,n),e=e.sibling}var de=null,tt=!1;function At(e,t,n){for(n=n.child;n!==null;)Op(e,t,n),n=n.sibling}function Op(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(_i,n)}catch{}switch(n.tag){case 5:ve||Vn(n,t);case 6:var r=de,o=tt;de=null,At(e,t,n),de=r,tt=o,de!==null&&(tt?(e=de,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(tt?(e=de,n=n.stateNode,e.nodeType===8?za(e.parentNode,n):e.nodeType===1&&za(e,n),Vr(e)):za(de,n.stateNode));break;case 4:r=de,o=tt,de=n.stateNode.containerInfo,tt=!0,At(e,t,n),de=r,tt=o;break;case 0:case 11:case 14:case 15:if(!ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&_l(n,t,a),o=o.next}while(o!==r)}At(e,t,n);break;case 1:if(!ve&&(Vn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){q(n,t,l)}At(e,t,n);break;case 21:At(e,t,n);break;case 22:n.mode&1?(ve=(r=ve)||n.memoizedState!==null,At(e,t,n),ve=r):At(e,t,n);break;default:At(e,t,n)}}function Dc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new X0),t.forEach(function(r){var o=l1.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:de=l.stateNode,tt=!1;break e;case 3:de=l.stateNode.containerInfo,tt=!0;break e;case 4:de=l.stateNode.containerInfo,tt=!0;break e}l=l.return}if(de===null)throw Error(z(160));Op(i,a,o),de=null,tt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){q(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Lp(t,e),t=t.sibling}function Lp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qe(t,e),dt(e),r&4){try{Ar(3,e,e.return),Bi(3,e)}catch(w){q(e,e.return,w)}try{Ar(5,e,e.return)}catch(w){q(e,e.return,w)}}break;case 1:qe(t,e),dt(e),r&512&&n!==null&&Vn(n,n.return);break;case 5:if(qe(t,e),dt(e),r&512&&n!==null&&Vn(n,n.return),e.flags&32){var o=e.stateNode;try{Br(o,"")}catch(w){q(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Yd(o,i),al(l,a);var c=al(l,i);for(a=0;a<s.length;a+=2){var g=s[a],p=s[a+1];g==="style"?qd(o,p):g==="dangerouslySetInnerHTML"?Xd(o,p):g==="children"?Br(o,p):is(o,g,p,c)}switch(l){case"input":tl(o,i);break;case"textarea":Gd(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Qn(o,!!i.multiple,v,!1):h!==!!i.multiple&&(i.defaultValue!=null?Qn(o,!!i.multiple,i.defaultValue,!0):Qn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Jr]=i}catch(w){q(e,e.return,w)}}break;case 6:if(qe(t,e),dt(e),r&4){if(e.stateNode===null)throw Error(z(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){q(e,e.return,w)}}break;case 3:if(qe(t,e),dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vr(t.containerInfo)}catch(w){q(e,e.return,w)}break;case 4:qe(t,e),dt(e);break;case 13:qe(t,e),dt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Is=ee())),r&4&&Dc(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ve=(c=ve)||g,qe(t,e),ve=c):qe(t,e),dt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(N=e,g=e.child;g!==null;){for(p=N=g;N!==null;){switch(h=N,v=h.child,h.tag){case 0:case 11:case 14:case 15:Ar(4,h,h.return);break;case 1:Vn(h,h.return);var b=h.stateNode;if(typeof b.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(w){q(r,n,w)}}break;case 5:Vn(h,h.return);break;case 22:if(h.memoizedState!==null){Uc(p);continue}}v!==null?(v.return=h,N=v):Uc(p)}g=g.sibling}e:for(g=null,p=e;;){if(p.tag===5){if(g===null){g=p;try{o=p.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,s=p.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Zd("display",a))}catch(w){q(e,e.return,w)}}}else if(p.tag===6){if(g===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(w){q(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;g===p&&(g=null),p=p.return}g===p&&(g=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:qe(t,e),dt(e),r&4&&Dc(e);break;case 21:break;default:qe(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Pp(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Br(o,""),r.flags&=-33);var i=Mc(e);Al(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Mc(e);$l(e,l,a);break;default:throw Error(z(161))}}catch(s){q(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function q0(e,t,n){N=e,zp(e)}function zp(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var o=N,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Fo;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||ve;l=Fo;var c=ve;if(Fo=a,(ve=s)&&!c)for(N=o;N!==null;)a=N,s=a.child,a.tag===22&&a.memoizedState!==null?Hc(o):s!==null?(s.return=a,N=s):Hc(o);for(;i!==null;)N=i,zp(i),i=i.sibling;N=o,Fo=l,ve=c}Bc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,N=i):Bc(e)}}function Bc(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ve||Bi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ve)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:et(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Cc(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Cc(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var p=g.dehydrated;p!==null&&Vr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}ve||t.flags&512&&Fl(t)}catch(h){q(t,t.return,h)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function Uc(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function Hc(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Bi(4,t)}catch(s){q(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){q(t,o,s)}}var i=t.return;try{Fl(t)}catch(s){q(t,i,s)}break;case 5:var a=t.return;try{Fl(t)}catch(s){q(t,a,s)}}}catch(s){q(t,t.return,s)}if(t===e){N=null;break}var l=t.sibling;if(l!==null){l.return=t.return,N=l;break}N=t.return}}var e1=Math.ceil,ki=Ft.ReactCurrentDispatcher,As=Ft.ReactCurrentOwner,Ye=Ft.ReactCurrentBatchConfig,I=0,ue=null,ne=null,pe=0,Fe=0,Kn=an(0),ie=0,no=null,kn=0,Ui=0,js=0,jr=null,Oe=null,Is=0,lr=1/0,Et=null,xi=!1,jl=null,Jt=null,$o=!1,Ut=null,Si=0,Ir=0,Il=null,Yo=-1,Go=0;function Se(){return I&6?ee():Yo!==-1?Yo:Yo=ee()}function Xt(e){return e.mode&1?I&2&&pe!==0?pe&-pe:j0.transition!==null?(Go===0&&(Go=ff()),Go):(e=H,e!==0||(e=window.event,e=e===void 0?16:wf(e.type)),e):1}function it(e,t,n,r){if(50<Ir)throw Ir=0,Il=null,Error(z(185));uo(e,n,r),(!(I&2)||e!==ue)&&(e===ue&&(!(I&2)&&(Ui|=n),ie===4&&Dt(e,pe)),Ne(e,r),n===1&&I===0&&!(t.mode&1)&&(lr=ee()+500,Ii&&ln()))}function Ne(e,t){var n=e.callbackNode;jh(e,t);var r=ai(e,e===ue?pe:0);if(r===0)n!==null&&Zu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Zu(n),t===1)e.tag===0?A0(Wc.bind(null,e)):If(Wc.bind(null,e)),N0(function(){!(I&6)&&ln()}),n=null;else{switch(pf(r)){case 1:n=cs;break;case 4:n=cf;break;case 16:n=ii;break;case 536870912:n=df;break;default:n=ii}n=jp(n,Rp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Rp(e,t){if(Yo=-1,Go=0,I&6)throw Error(z(327));var n=e.callbackNode;if(Zn()&&e.callbackNode!==n)return null;var r=ai(e,e===ue?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ci(e,r);else{t=r;var o=I;I|=2;var i=Np();(ue!==e||pe!==t)&&(Et=null,lr=ee()+500,hn(e,t));do try{r1();break}catch(l){Tp(e,l)}while(1);Ss(),ki.current=i,I=o,ne!==null?t=0:(ue=null,pe=0,t=ie)}if(t!==0){if(t===2&&(o=dl(e),o!==0&&(r=o,t=Ml(e,o))),t===1)throw n=no,hn(e,0),Dt(e,r),Ne(e,ee()),n;if(t===6)Dt(e,r);else{if(o=e.current.alternate,!(r&30)&&!t1(o)&&(t=Ci(e,r),t===2&&(i=dl(e),i!==0&&(r=i,t=Ml(e,i))),t===1))throw n=no,hn(e,0),Dt(e,r),Ne(e,ee()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(z(345));case 2:fn(e,Oe,Et);break;case 3:if(Dt(e,r),(r&130023424)===r&&(t=Is+500-ee(),10<t)){if(ai(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Se(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=wl(fn.bind(null,e,Oe,Et),t);break}fn(e,Oe,Et);break;case 4:if(Dt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-ot(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*e1(r/1960))-r,10<r){e.timeoutHandle=wl(fn.bind(null,e,Oe,Et),r);break}fn(e,Oe,Et);break;case 5:fn(e,Oe,Et);break;default:throw Error(z(329))}}}return Ne(e,ee()),e.callbackNode===n?Rp.bind(null,e):null}function Ml(e,t){var n=jr;return e.current.memoizedState.isDehydrated&&(hn(e,t).flags|=256),e=Ci(e,t),e!==2&&(t=Oe,Oe=n,t!==null&&Dl(t)),e}function Dl(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function t1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!at(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dt(e,t){for(t&=~js,t&=~Ui,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function Wc(e){if(I&6)throw Error(z(327));Zn();var t=ai(e,0);if(!(t&1))return Ne(e,ee()),null;var n=Ci(e,t);if(e.tag!==0&&n===2){var r=dl(e);r!==0&&(t=r,n=Ml(e,r))}if(n===1)throw n=no,hn(e,0),Dt(e,t),Ne(e,ee()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,fn(e,Oe,Et),Ne(e,ee()),null}function Ms(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(lr=ee()+500,Ii&&ln())}}function xn(e){Ut!==null&&Ut.tag===0&&!(I&6)&&Zn();var t=I;I|=1;var n=Ye.transition,r=H;try{if(Ye.transition=null,H=1,e)return e()}finally{H=r,Ye.transition=n,I=t,!(I&6)&&ln()}}function Ds(){Fe=Kn.current,Q(Kn)}function hn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,T0(n)),ne!==null)for(n=ne.return;n!==null;){var r=n;switch(bs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&di();break;case 3:ir(),Q(Re),Q(we),zs();break;case 5:Ls(r);break;case 4:ir();break;case 13:Q(G);break;case 19:Q(G);break;case 10:Cs(r.type._context);break;case 22:case 23:Ds()}n=n.return}if(ue=e,ne=e=Zt(e.current,null),pe=Fe=t,ie=0,no=null,js=Ui=kn=0,Oe=jr=null,gn!==null){for(t=0;t<gn.length;t++)if(n=gn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}gn=null}return e}function Tp(e,t){do{var n=ne;try{if(Ss(),Vo.current=bi,wi){for(var r=J.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}wi=!1}if(bn=0,se=oe=J=null,$r=!1,qr=0,As.current=null,n===null||n.return===null){ie=1,no=t,ne=null;break}e:{var i=e,a=n.return,l=n,s=t;if(t=pe,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,g=l,p=g.tag;if(!(g.mode&1)&&(p===0||p===11||p===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var v=Tc(a);if(v!==null){v.flags&=-257,Nc(v,a,l,i,t),v.mode&1&&Rc(i,c,t),t=v,s=c;var b=t.updateQueue;if(b===null){var w=new Set;w.add(s),t.updateQueue=w}else b.add(s);break e}else{if(!(t&1)){Rc(i,c,t),Bs();break e}s=Error(z(426))}}else if(Y&&l.mode&1){var S=Tc(a);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Nc(S,a,l,i,t),ks(ar(s,l));break e}}i=s=ar(s,l),ie!==4&&(ie=2),jr===null?jr=[i]:jr.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=gp(i,s,t);Sc(i,f);break e;case 1:l=s;var u=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Jt===null||!Jt.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=mp(i,l,t);Sc(i,y);break e}}i=i.return}while(i!==null)}Fp(n)}catch(k){t=k,ne===n&&n!==null&&(ne=n=n.return);continue}break}while(1)}function Np(){var e=ki.current;return ki.current=bi,e===null?bi:e}function Bs(){(ie===0||ie===3||ie===2)&&(ie=4),ue===null||!(kn&268435455)&&!(Ui&268435455)||Dt(ue,pe)}function Ci(e,t){var n=I;I|=2;var r=Np();(ue!==e||pe!==t)&&(Et=null,hn(e,t));do try{n1();break}catch(o){Tp(e,o)}while(1);if(Ss(),I=n,ki.current=r,ne!==null)throw Error(z(261));return ue=null,pe=0,ie}function n1(){for(;ne!==null;)_p(ne)}function r1(){for(;ne!==null&&!Lh();)_p(ne)}function _p(e){var t=Ap(e.alternate,e,Fe);e.memoizedProps=e.pendingProps,t===null?Fp(e):ne=t,As.current=null}function Fp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=J0(n,t),n!==null){n.flags&=32767,ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,ne=null;return}}else if(n=G0(n,t,Fe),n!==null){ne=n;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);ie===0&&(ie=5)}function fn(e,t,n){var r=H,o=Ye.transition;try{Ye.transition=null,H=1,o1(e,t,n,r)}finally{Ye.transition=o,H=r}return null}function o1(e,t,n,r){do Zn();while(Ut!==null);if(I&6)throw Error(z(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Ih(e,i),e===ue&&(ne=ue=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$o||($o=!0,jp(ii,function(){return Zn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ye.transition,Ye.transition=null;var a=H;H=1;var l=I;I|=4,As.current=null,Z0(e,n),Lp(n,e),C0(yl),li=!!hl,yl=hl=null,e.current=n,q0(n),zh(),I=l,H=a,Ye.transition=i}else e.current=n;if($o&&($o=!1,Ut=e,Si=o),i=e.pendingLanes,i===0&&(Jt=null),Nh(n.stateNode),Ne(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(xi)throw xi=!1,e=jl,jl=null,e;return Si&1&&e.tag!==0&&Zn(),i=e.pendingLanes,i&1?e===Il?Ir++:(Ir=0,Il=e):Ir=0,ln(),null}function Zn(){if(Ut!==null){var e=pf(Si),t=Ye.transition,n=H;try{if(Ye.transition=null,H=16>e?16:e,Ut===null)var r=!1;else{if(e=Ut,Ut=null,Si=0,I&6)throw Error(z(331));var o=I;for(I|=4,N=e.current;N!==null;){var i=N,a=i.child;if(N.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(N=c;N!==null;){var g=N;switch(g.tag){case 0:case 11:case 15:Ar(8,g,i)}var p=g.child;if(p!==null)p.return=g,N=p;else for(;N!==null;){g=N;var h=g.sibling,v=g.return;if(Ep(g),g===c){N=null;break}if(h!==null){h.return=v,N=h;break}N=v}}}var b=i.alternate;if(b!==null){var w=b.child;if(w!==null){b.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}N=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,N=a;else e:for(;N!==null;){if(i=N,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ar(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,N=f;break e}N=i.return}}var u=e.current;for(N=u;N!==null;){a=N;var d=a.child;if(a.subtreeFlags&2064&&d!==null)d.return=a,N=d;else e:for(a=u;N!==null;){if(l=N,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Bi(9,l)}}catch(k){q(l,l.return,k)}if(l===a){N=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,N=y;break e}N=l.return}}if(I=o,ln(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(_i,e)}catch{}r=!0}return r}finally{H=n,Ye.transition=t}}return!1}function Vc(e,t,n){t=ar(n,t),t=gp(e,t,1),e=Gt(e,t,1),t=Se(),e!==null&&(uo(e,1,t),Ne(e,t))}function q(e,t,n){if(e.tag===3)Vc(e,e,n);else for(;t!==null;){if(t.tag===3){Vc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jt===null||!Jt.has(r))){e=ar(n,e),e=mp(t,e,1),t=Gt(t,e,1),e=Se(),t!==null&&(uo(t,1,e),Ne(t,e));break}}t=t.return}}function i1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Se(),e.pingedLanes|=e.suspendedLanes&n,ue===e&&(pe&n)===n&&(ie===4||ie===3&&(pe&130023424)===pe&&500>ee()-Is?hn(e,0):js|=n),Ne(e,t)}function $p(e,t){t===0&&(e.mode&1?(t=Eo,Eo<<=1,!(Eo&130023424)&&(Eo=4194304)):t=1);var n=Se();e=Nt(e,t),e!==null&&(uo(e,t,n),Ne(e,n))}function a1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$p(e,n)}function l1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(t),$p(e,n)}var Ap;Ap=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Re.current)Le=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Le=!1,Y0(e,t,n);Le=!!(e.flags&131072)}else Le=!1,Y&&t.flags&1048576&&Mf(t,gi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Qo(e,t),e=t.pendingProps;var o=nr(t,we.current);Xn(t,n),o=Ts(null,t,r,e,o,n);var i=Ns();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Te(r)?(i=!0,fi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ps(t),o.updater=Mi,t.stateNode=o,o._reactInternals=t,Pl(t,r,e,n),t=zl(null,t,r,!0,i,n)):(t.tag=0,Y&&i&&ws(t),xe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Qo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=u1(r),e=et(r,e),o){case 0:t=Ll(null,t,r,e,n);break e;case 1:t=$c(null,t,r,e,n);break e;case 11:t=_c(null,t,r,e,n);break e;case 14:t=Fc(null,t,r,et(r.type,e),n);break e}throw Error(z(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:et(r,o),Ll(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:et(r,o),$c(e,t,r,o,n);case 3:e:{if(wp(t),e===null)throw Error(z(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Hf(e,t),yi(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=ar(Error(z(423)),t),t=Ac(e,t,r,n,o);break e}else if(r!==o){o=ar(Error(z(424)),t),t=Ac(e,t,r,n,o);break e}else for($e=Yt(t.stateNode.containerInfo.firstChild),Ae=t,Y=!0,nt=null,n=Qf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rr(),r===o){t=_t(e,t,n);break e}xe(e,t,r,n)}t=t.child}return t;case 5:return Yf(t),e===null&&Sl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,vl(r,o)?a=null:i!==null&&vl(r,i)&&(t.flags|=32),vp(e,t),xe(e,t,a,n),t.child;case 6:return e===null&&Sl(t),null;case 13:return bp(e,t,n);case 4:return Os(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=or(t,null,r,n):xe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:et(r,o),_c(e,t,r,o,n);case 7:return xe(e,t,t.pendingProps,n),t.child;case 8:return xe(e,t,t.pendingProps.children,n),t.child;case 12:return xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,V(mi,r._currentValue),r._currentValue=a,i!==null)if(at(i.value,a)){if(i.children===o.children&&!Re.current){t=_t(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=zt(-1,n&-n),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?s.next=s:(s.next=g.next,g.next=s),c.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Cl(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(z(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Cl(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}xe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Xn(t,n),o=Ge(o),r=r(o),t.flags|=1,xe(e,t,r,n),t.child;case 14:return r=t.type,o=et(r,t.pendingProps),o=et(r.type,o),Fc(e,t,r,o,n);case 15:return hp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:et(r,o),Qo(e,t),t.tag=1,Te(r)?(e=!0,fi(t)):e=!1,Xn(t,n),Vf(t,r,o),Pl(t,r,o,n),zl(null,t,r,!0,e,n);case 19:return kp(e,t,n);case 22:return yp(e,t,n)}throw Error(z(156,t.tag))};function jp(e,t){return uf(e,t)}function s1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(e,t,n,r){return new s1(e,t,n,r)}function Us(e){return e=e.prototype,!(!e||!e.isReactComponent)}function u1(e){if(typeof e=="function")return Us(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ls)return 11;if(e===ss)return 14}return 2}function Zt(e,t){var n=e.alternate;return n===null?(n=Qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Jo(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Us(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case An:return yn(n.children,o,i,t);case as:a=8,o|=8;break;case Ja:return e=Qe(12,n,t,o|2),e.elementType=Ja,e.lanes=i,e;case Xa:return e=Qe(13,n,t,o),e.elementType=Xa,e.lanes=i,e;case Za:return e=Qe(19,n,t,o),e.elementType=Za,e.lanes=i,e;case Vd:return Hi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hd:a=10;break e;case Wd:a=9;break e;case ls:a=11;break e;case ss:a=14;break e;case jt:a=16,r=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=Qe(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function yn(e,t,n,r){return e=Qe(7,e,r,t),e.lanes=n,e}function Hi(e,t,n,r){return e=Qe(22,e,r,t),e.elementType=Vd,e.lanes=n,e.stateNode={isHidden:!1},e}function ja(e,t,n){return e=Qe(6,e,null,t),e.lanes=n,e}function Ia(e,t,n){return t=Qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function c1(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=va(0),this.expirationTimes=va(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=va(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Hs(e,t,n,r,o,i,a,l,s){return e=new c1(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Qe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ps(i),e}function d1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$n,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ip(e){if(!e)return nn;e=e._reactInternals;e:{if(Cn(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Te(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(Te(n))return jf(e,n,t)}return t}function Mp(e,t,n,r,o,i,a,l,s){return e=Hs(n,r,!0,e,o,i,a,l,s),e.context=Ip(null),n=e.current,r=Se(),o=Xt(n),i=zt(r,o),i.callback=t??null,Gt(n,i,o),e.current.lanes=o,uo(e,o,r),Ne(e,r),e}function Wi(e,t,n,r){var o=t.current,i=Se(),a=Xt(o);return n=Ip(n),t.context===null?t.context=n:t.pendingContext=n,t=zt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Gt(o,t,a),e!==null&&(it(e,o,a,i),Wo(e,o,a)),a}function Ei(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Kc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ws(e,t){Kc(e,t),(e=e.alternate)&&Kc(e,t)}function f1(){return null}var Dp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vs(e){this._internalRoot=e}Vi.prototype.render=Vs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));Wi(e,t,null,null)};Vi.prototype.unmount=Vs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xn(function(){Wi(null,e,null,null)}),t[Tt]=null}};function Vi(e){this._internalRoot=e}Vi.prototype.unstable_scheduleHydration=function(e){if(e){var t=hf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mt.length&&t!==0&&t<Mt[n].priority;n++);Mt.splice(n,0,e),n===0&&vf(e)}};function Ks(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ki(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qc(){}function p1(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Ei(a);i.call(c)}}var a=Mp(t,r,e,0,null,!1,!1,"",Qc);return e._reactRootContainer=a,e[Tt]=a.current,Yr(e.nodeType===8?e.parentNode:e),xn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var c=Ei(s);l.call(c)}}var s=Hs(e,0,!1,null,null,!1,!1,"",Qc);return e._reactRootContainer=s,e[Tt]=s.current,Yr(e.nodeType===8?e.parentNode:e),xn(function(){Wi(t,s,n,r)}),s}function Qi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=Ei(a);l.call(s)}}Wi(t,a,e,o)}else a=p1(n,t,e,o,r);return Ei(a)}gf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Lr(t.pendingLanes);n!==0&&(ds(t,n|1),Ne(t,ee()),!(I&6)&&(lr=ee()+500,ln()))}break;case 13:xn(function(){var r=Nt(e,1);if(r!==null){var o=Se();it(r,e,1,o)}}),Ws(e,1)}};fs=function(e){if(e.tag===13){var t=Nt(e,134217728);if(t!==null){var n=Se();it(t,e,134217728,n)}Ws(e,134217728)}};mf=function(e){if(e.tag===13){var t=Xt(e),n=Nt(e,t);if(n!==null){var r=Se();it(n,e,t,r)}Ws(e,t)}};hf=function(){return H};yf=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};sl=function(e,t,n){switch(t){case"input":if(tl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ji(r);if(!o)throw Error(z(90));Qd(r),tl(r,o)}}}break;case"textarea":Gd(e,n);break;case"select":t=n.value,t!=null&&Qn(e,!!n.multiple,t,!1)}};nf=Ms;rf=xn;var g1={usingClientEntryPoint:!1,Events:[fo,Dn,ji,ef,tf,Ms]},Cr={findFiberByHostInstance:pn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},m1={bundleType:Cr.bundleType,version:Cr.version,rendererPackageName:Cr.rendererPackageName,rendererConfig:Cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lf(e),e===null?null:e.stateNode},findFiberByHostInstance:Cr.findFiberByHostInstance||f1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ao.isDisabled&&Ao.supportsFiber)try{_i=Ao.inject(m1),vt=Ao}catch{}}Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=g1;Me.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ks(t))throw Error(z(200));return d1(e,t,null,n)};Me.createRoot=function(e,t){if(!Ks(e))throw Error(z(299));var n=!1,r="",o=Dp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Hs(e,1,!1,null,null,n,!1,r,o),e[Tt]=t.current,Yr(e.nodeType===8?e.parentNode:e),new Vs(t)};Me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=lf(t),e=e===null?null:e.stateNode,e};Me.flushSync=function(e){return xn(e)};Me.hydrate=function(e,t,n){if(!Ki(t))throw Error(z(200));return Qi(null,e,t,!0,n)};Me.hydrateRoot=function(e,t,n){if(!Ks(e))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=Dp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Mp(t,null,e,1,n??null,o,!1,i,a),e[Tt]=t.current,Yr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Vi(t)};Me.render=function(e,t,n){if(!Ki(t))throw Error(z(200));return Qi(null,e,t,!1,n)};Me.unmountComponentAtNode=function(e){if(!Ki(e))throw Error(z(40));return e._reactRootContainer?(xn(function(){Qi(null,null,e,!1,function(){e._reactRootContainer=null,e[Tt]=null})}),!0):!1};Me.unstable_batchedUpdates=Ms;Me.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ki(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return Qi(e,t,n,!1,r)};Me.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Me})(fh);var Bp,Yc=Qa;Bp=Yc.createRoot,Yc.hydrateRoot;/**
 * @remix-run/router v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ro(){return ro=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ro.apply(this,arguments)}var Ht;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ht||(Ht={}));const Gc="popstate";function h1(e){e===void 0&&(e={});function t(o,i){let{pathname:a="/",search:l="",hash:s=""}=En(o.location.hash.substr(1));return Bl("",{pathname:a,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let a=o.document.querySelector("base"),l="";if(a&&a.getAttribute("href")){let s=o.location.href,c=s.indexOf("#");l=c===-1?s:s.slice(0,c)}return l+"#"+(typeof i=="string"?i:Pi(i))}function r(o,i){y1(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return w1(t,n,r,e)}function ae(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function y1(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function v1(){return Math.random().toString(36).substr(2,8)}function Jc(e,t){return{usr:e.state,key:e.key,idx:t}}function Bl(e,t,n,r){return n===void 0&&(n=null),ro({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?En(t):t,{state:n,key:t&&t.key||r||v1()})}function Pi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function En(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function w1(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l=Ht.Pop,s=null,c=g();c==null&&(c=0,a.replaceState(ro({},a.state,{idx:c}),""));function g(){return(a.state||{idx:null}).idx}function p(){l=Ht.Pop;let S=g(),f=S==null?null:S-c;c=S,s&&s({action:l,location:w.location,delta:f})}function h(S,f){l=Ht.Push;let u=Bl(w.location,S,f);n&&n(u,S),c=g()+1;let d=Jc(u,c),y=w.createHref(u);try{a.pushState(d,"",y)}catch{o.location.assign(y)}i&&s&&s({action:l,location:w.location,delta:1})}function v(S,f){l=Ht.Replace;let u=Bl(w.location,S,f);n&&n(u,S),c=g();let d=Jc(u,c),y=w.createHref(u);a.replaceState(d,"",y),i&&s&&s({action:l,location:w.location,delta:0})}function b(S){let f=o.location.origin!=="null"?o.location.origin:o.location.href,u=typeof S=="string"?S:Pi(S);return ae(f,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,f)}let w={get action(){return l},get location(){return e(o,a)},listen(S){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Gc,p),s=S,()=>{o.removeEventListener(Gc,p),s=null}},createHref(S){return t(o,S)},createURL:b,encodeLocation(S){let f=b(S);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:v,go(S){return a.go(S)}};return w}var Xc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Xc||(Xc={}));function b1(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?En(t):t,o=Qs(r.pathname||"/",n);if(o==null)return null;let i=Up(e);k1(i);let a=null;for(let l=0;a==null&&l<i.length;++l)a=R1(i[l],_1(o));return a}function Up(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};s.relativePath.startsWith("/")&&(ae(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=qt([r,s.relativePath]),g=n.concat(s);i.children&&i.children.length>0&&(ae(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Up(i.children,t,g,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:L1(c,i.index),routesMeta:g})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,a);else for(let s of Hp(i.path))o(i,a,s)}),t}function Hp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=Hp(r.join("/")),l=[];return l.push(...a.map(s=>s===""?i:[i,s].join("/"))),o&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function k1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:z1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const x1=/^:\w+$/,S1=3,C1=2,E1=1,P1=10,O1=-2,Zc=e=>e==="*";function L1(e,t){let n=e.split("/"),r=n.length;return n.some(Zc)&&(r+=O1),t&&(r+=C1),n.filter(o=>!Zc(o)).reduce((o,i)=>o+(x1.test(i)?S1:i===""?E1:P1),r)}function z1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function R1(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,c=o==="/"?t:t.slice(o.length)||"/",g=T1({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},c);if(!g)return null;Object.assign(r,g.params);let p=l.route;i.push({params:r,pathname:qt([o,g.pathname]),pathnameBase:j1(qt([o,g.pathnameBase])),route:p}),g.pathnameBase!=="/"&&(o=qt([o,g.pathnameBase]))}return i}function T1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=N1(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((c,g,p)=>{if(g==="*"){let h=l[p]||"";a=i.slice(0,i.length-h.length).replace(/(.)\/+$/,"$1")}return c[g]=F1(l[p]||"",g),c},{}),pathname:i,pathnameBase:a,pattern:e}}function N1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ys(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function _1(e){try{return decodeURI(e)}catch(t){return Ys(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function F1(e,t){try{return decodeURIComponent(e)}catch(n){return Ys(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Qs(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ys(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function $1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?En(e):e;return{pathname:n?n.startsWith("/")?n:A1(n,t):t,search:I1(r),hash:M1(o)}}function A1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Ma(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Wp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Vp(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=En(e):(o=ro({},e),ae(!o.pathname||!o.pathname.includes("?"),Ma("?","pathname","search",o)),ae(!o.pathname||!o.pathname.includes("#"),Ma("#","pathname","hash",o)),ae(!o.search||!o.search.includes("#"),Ma("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(r||a==null)l=n;else{let p=t.length-1;if(a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),p-=1;o.pathname=h.join("/")}l=p>=0?t[p]:"/"}let s=$1(o,l),c=a&&a!=="/"&&a.endsWith("/"),g=(i||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||g)&&(s.pathname+="/"),s}const qt=e=>e.join("/").replace(/\/\/+/g,"/"),j1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),I1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,M1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function D1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const B1=["post","put","patch","delete"];[...B1];/**
 * React Router v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ul(){return Ul=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ul.apply(this,arguments)}function U1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const H1=typeof Object.is=="function"?Object.is:U1,{useState:W1,useEffect:V1,useLayoutEffect:K1,useDebugValue:Q1}=Mr;function Y1(e,t,n){const r=t(),[{inst:o},i]=W1({inst:{value:r,getSnapshot:t}});return K1(()=>{o.value=r,o.getSnapshot=t,Da(o)&&i({inst:o})},[e,r,t]),V1(()=>(Da(o)&&i({inst:o}),e(()=>{Da(o)&&i({inst:o})})),[e]),Q1(r),r}function Da(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!H1(n,r)}catch{return!0}}function G1(e,t,n){return t()}const J1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",X1=!J1,Z1=X1?G1:Y1;"useSyncExternalStore"in Mr&&(e=>e.useSyncExternalStore)(Mr);const Kp=P.createContext(null),Gs=P.createContext(null),fr=P.createContext(null),Yi=P.createContext(null),sn=P.createContext({outlet:null,matches:[]}),Qp=P.createContext(null);function q1(e,t){let{relative:n}=t===void 0?{}:t;go()||ae(!1);let{basename:r,navigator:o}=P.useContext(fr),{hash:i,pathname:a,search:l}=Js(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:qt([r,a])),o.createHref({pathname:s,search:l,hash:i})}function go(){return P.useContext(Yi)!=null}function mo(){return go()||ae(!1),P.useContext(Yi).location}function ho(){go()||ae(!1);let{basename:e,navigator:t}=P.useContext(fr),{matches:n}=P.useContext(sn),{pathname:r}=mo(),o=JSON.stringify(Wp(n).map(l=>l.pathnameBase)),i=P.useRef(!1);return P.useEffect(()=>{i.current=!0}),P.useCallback(function(l,s){if(s===void 0&&(s={}),!i.current)return;if(typeof l=="number"){t.go(l);return}let c=Vp(l,JSON.parse(o),r,s.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:qt([e,c.pathname])),(s.replace?t.replace:t.push)(c,s.state,s)},[e,t,o,r])}const ey=P.createContext(null);function ty(e){let t=P.useContext(sn).outlet;return t&&P.createElement(ey.Provider,{value:e},t)}function Yp(){let{matches:e}=P.useContext(sn),t=e[e.length-1];return t?t.params:{}}function Js(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=P.useContext(sn),{pathname:o}=mo(),i=JSON.stringify(Wp(r).map(a=>a.pathnameBase));return P.useMemo(()=>Vp(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}function ny(e,t){go()||ae(!1);let{navigator:n}=P.useContext(fr),r=P.useContext(Gs),{matches:o}=P.useContext(sn),i=o[o.length-1],a=i?i.params:{};i&&i.pathname;let l=i?i.pathnameBase:"/";i&&i.route;let s=mo(),c;if(t){var g;let w=typeof t=="string"?En(t):t;l==="/"||(g=w.pathname)!=null&&g.startsWith(l)||ae(!1),c=w}else c=s;let p=c.pathname||"/",h=l==="/"?p:p.slice(l.length)||"/",v=b1(e,{pathname:h}),b=ay(v&&v.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:qt([l,n.encodeLocation?n.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:qt([l,n.encodeLocation?n.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),o,r||void 0);return t&&b?P.createElement(Yi.Provider,{value:{location:Ul({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Ht.Pop}},b):b}function ry(){let e=cy(),t=D1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},t),n?P.createElement("pre",{style:o},n):null,i)}class oy extends P.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?P.createElement(sn.Provider,{value:this.props.routeContext},P.createElement(Qp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function iy(e){let{routeContext:t,match:n,children:r}=e,o=P.useContext(Kp);return o&&o.static&&o.staticContext&&n.route.errorElement&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(sn.Provider,{value:t},r)}function ay(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,o=n==null?void 0:n.errors;if(o!=null){let i=r.findIndex(a=>a.route.id&&(o==null?void 0:o[a.route.id]));i>=0||ae(!1),r=r.slice(0,Math.min(r.length,i+1))}return r.reduceRight((i,a,l)=>{let s=a.route.id?o==null?void 0:o[a.route.id]:null,c=n?a.route.errorElement||P.createElement(ry,null):null,g=t.concat(r.slice(0,l+1)),p=()=>P.createElement(iy,{match:a,routeContext:{outlet:i,matches:g}},s?c:a.route.element!==void 0?a.route.element:i);return n&&(a.route.errorElement||l===0)?P.createElement(oy,{location:n.location,component:c,error:s,children:p(),routeContext:{outlet:null,matches:g}}):p()},null)}var qc;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(qc||(qc={}));var Oi;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Oi||(Oi={}));function ly(e){let t=P.useContext(Gs);return t||ae(!1),t}function sy(e){let t=P.useContext(sn);return t||ae(!1),t}function uy(e){let t=sy(),n=t.matches[t.matches.length-1];return n.route.id||ae(!1),n.route.id}function cy(){var e;let t=P.useContext(Qp),n=ly(Oi.UseRouteError),r=uy(Oi.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Hl(e){return ty(e.context)}function ft(e){ae(!1)}function dy(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Ht.Pop,navigator:i,static:a=!1}=e;go()&&ae(!1);let l=t.replace(/^\/*/,"/"),s=P.useMemo(()=>({basename:l,navigator:i,static:a}),[l,i,a]);typeof r=="string"&&(r=En(r));let{pathname:c="/",search:g="",hash:p="",state:h=null,key:v="default"}=r,b=P.useMemo(()=>{let w=Qs(c,l);return w==null?null:{pathname:w,search:g,hash:p,state:h,key:v}},[l,c,g,p,h,v]);return b==null?null:P.createElement(fr.Provider,{value:s},P.createElement(Yi.Provider,{children:n,value:{location:b,navigationType:o}}))}function fy(e){let{children:t,location:n}=e,r=P.useContext(Kp),o=r&&!t?r.router.routes:Wl(t);return ny(o,n)}var ed;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(ed||(ed={}));new Promise(()=>{});function Wl(e,t){t===void 0&&(t=[]);let n=[];return P.Children.forEach(e,(r,o)=>{if(!P.isValidElement(r))return;if(r.type===P.Fragment){n.push.apply(n,Wl(r.props.children,t));return}r.type!==ft&&ae(!1),!r.props.index||!r.props.children||ae(!1);let i=[...t,o],a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(a.children=Wl(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Li(){return Li=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Li.apply(this,arguments)}function Gp(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function py(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function gy(e,t){return e.button===0&&(!t||t==="_self")&&!py(e)}const my=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],hy=["aria-current","caseSensitive","className","end","style","to","children"];function yy(e){let{basename:t,children:n,window:r}=e,o=P.useRef();o.current==null&&(o.current=h1({window:r,v5Compat:!0}));let i=o.current,[a,l]=P.useState({action:i.action,location:i.location});return P.useLayoutEffect(()=>i.listen(l),[i]),P.createElement(dy,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:i})}const vy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xs=P.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:l,target:s,to:c,preventScrollReset:g}=t,p=Gp(t,my),{basename:h}=P.useContext(fr),v,b=!1;if(typeof c=="string"&&wy.test(c)&&(v=c,vy)){let u=new URL(window.location.href),d=c.startsWith("//")?new URL(u.protocol+c):new URL(c),y=Qs(d.pathname,h);d.origin===u.origin&&y!=null?c=y+d.search+d.hash:b=!0}let w=q1(c,{relative:o}),S=ky(c,{replace:a,state:l,target:s,preventScrollReset:g,relative:o});function f(u){r&&r(u),u.defaultPrevented||S(u)}return P.createElement("a",Li({},p,{href:v||w,onClick:b||i?r:f,ref:n,target:s}))}),by=P.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:a=!1,style:l,to:s,children:c}=t,g=Gp(t,hy),p=Js(s,{relative:g.relative}),h=mo(),v=P.useContext(Gs),{navigator:b}=P.useContext(fr),w=b.encodeLocation?b.encodeLocation(p).pathname:p.pathname,S=h.pathname,f=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;o||(S=S.toLowerCase(),f=f?f.toLowerCase():null,w=w.toLowerCase());let u=S===w||!a&&S.startsWith(w)&&S.charAt(w.length)==="/",d=f!=null&&(f===w||!a&&f.startsWith(w)&&f.charAt(w.length)==="/"),y=u?r:void 0,k;typeof i=="function"?k=i({isActive:u,isPending:d}):k=[i,u?"active":null,d?"pending":null].filter(Boolean).join(" ");let x=typeof l=="function"?l({isActive:u,isPending:d}):l;return P.createElement(Xs,Li({},g,{"aria-current":y,className:k,ref:n,style:x,to:s}),typeof c=="function"?c({isActive:u,isPending:d}):c)});var td;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(td||(td={}));var nd;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(nd||(nd={}));function ky(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a}=t===void 0?{}:t,l=ho(),s=mo(),c=Js(e,{relative:a});return P.useCallback(g=>{if(gy(g,n)){g.preventDefault();let p=r!==void 0?r:Pi(s)===Pi(c);l(e,{replace:p,state:o,preventScrollReset:i,relative:a})}},[s,l,c,r,o,n,e,i,a])}function Vl(){return Vl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vl.apply(this,arguments)}function Jp(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var xy=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Sy=Jp(function(e){return xy.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function Cy(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Ey(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Py=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Ey(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=Cy(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),ye="-ms-",zi="-moz-",B="-webkit-",Xp="comm",Zs="rule",qs="decl",Oy="@import",Zp="@keyframes",Ly=Math.abs,Gi=String.fromCharCode,zy=Object.assign;function Ry(e,t){return fe(e,0)^45?(((t<<2^fe(e,0))<<2^fe(e,1))<<2^fe(e,2))<<2^fe(e,3):0}function qp(e){return e.trim()}function Ty(e,t){return(e=t.exec(e))?e[0]:e}function U(e,t,n){return e.replace(t,n)}function Kl(e,t){return e.indexOf(t)}function fe(e,t){return e.charCodeAt(t)|0}function oo(e,t,n){return e.slice(t,n)}function gt(e){return e.length}function eu(e){return e.length}function jo(e,t){return t.push(e),e}function Ny(e,t){return e.map(t).join("")}var Ji=1,sr=1,eg=0,_e=0,te=0,pr="";function Xi(e,t,n,r,o,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Ji,column:sr,length:a,return:""}}function Er(e,t){return zy(Xi("",null,null,"",null,null,0),e,{length:-e.length},t)}function _y(){return te}function Fy(){return te=_e>0?fe(pr,--_e):0,sr--,te===10&&(sr=1,Ji--),te}function je(){return te=_e<eg?fe(pr,_e++):0,sr++,te===10&&(sr=1,Ji++),te}function bt(){return fe(pr,_e)}function Xo(){return _e}function yo(e,t){return oo(pr,e,t)}function io(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function tg(e){return Ji=sr=1,eg=gt(pr=e),_e=0,[]}function ng(e){return pr="",e}function Zo(e){return qp(yo(_e-1,Ql(e===91?e+2:e===40?e+1:e)))}function $y(e){for(;(te=bt())&&te<33;)je();return io(e)>2||io(te)>3?"":" "}function Ay(e,t){for(;--t&&je()&&!(te<48||te>102||te>57&&te<65||te>70&&te<97););return yo(e,Xo()+(t<6&&bt()==32&&je()==32))}function Ql(e){for(;je();)switch(te){case e:return _e;case 34:case 39:e!==34&&e!==39&&Ql(te);break;case 40:e===41&&Ql(e);break;case 92:je();break}return _e}function jy(e,t){for(;je()&&e+te!==47+10;)if(e+te===42+42&&bt()===47)break;return"/*"+yo(t,_e-1)+"*"+Gi(e===47?e:je())}function Iy(e){for(;!io(bt());)je();return yo(e,_e)}function My(e){return ng(qo("",null,null,null,[""],e=tg(e),0,[0],e))}function qo(e,t,n,r,o,i,a,l,s){for(var c=0,g=0,p=a,h=0,v=0,b=0,w=1,S=1,f=1,u=0,d="",y=o,k=i,x=r,C=d;S;)switch(b=u,u=je()){case 40:if(b!=108&&fe(C,p-1)==58){Kl(C+=U(Zo(u),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:C+=Zo(u);break;case 9:case 10:case 13:case 32:C+=$y(b);break;case 92:C+=Ay(Xo()-1,7);continue;case 47:switch(bt()){case 42:case 47:jo(Dy(jy(je(),Xo()),t,n),s);break;default:C+="/"}break;case 123*w:l[c++]=gt(C)*f;case 125*w:case 59:case 0:switch(u){case 0:case 125:S=0;case 59+g:v>0&&gt(C)-p&&jo(v>32?od(C+";",r,n,p-1):od(U(C," ","")+";",r,n,p-2),s);break;case 59:C+=";";default:if(jo(x=rd(C,t,n,c,g,o,l,d,y=[],k=[],p),i),u===123)if(g===0)qo(C,t,x,x,y,i,p,l,k);else switch(h===99&&fe(C,3)===110?100:h){case 100:case 109:case 115:qo(e,x,x,r&&jo(rd(e,x,x,0,0,o,l,d,o,y=[],p),k),o,k,p,l,r?y:k);break;default:qo(C,x,x,x,[""],k,0,l,k)}}c=g=v=0,w=f=1,d=C="",p=a;break;case 58:p=1+gt(C),v=b;default:if(w<1){if(u==123)--w;else if(u==125&&w++==0&&Fy()==125)continue}switch(C+=Gi(u),u*w){case 38:f=g>0?1:(C+="\f",-1);break;case 44:l[c++]=(gt(C)-1)*f,f=1;break;case 64:bt()===45&&(C+=Zo(je())),h=bt(),g=p=gt(d=C+=Iy(Xo())),u++;break;case 45:b===45&&gt(C)==2&&(w=0)}}return i}function rd(e,t,n,r,o,i,a,l,s,c,g){for(var p=o-1,h=o===0?i:[""],v=eu(h),b=0,w=0,S=0;b<r;++b)for(var f=0,u=oo(e,p+1,p=Ly(w=a[b])),d=e;f<v;++f)(d=qp(w>0?h[f]+" "+u:U(u,/&\f/g,h[f])))&&(s[S++]=d);return Xi(e,t,n,o===0?Zs:l,s,c,g)}function Dy(e,t,n){return Xi(e,t,n,Xp,Gi(_y()),oo(e,2,-2),0)}function od(e,t,n,r){return Xi(e,t,n,qs,oo(e,0,r),oo(e,r+1,-1),r)}function qn(e,t){for(var n="",r=eu(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function By(e,t,n,r){switch(e.type){case Oy:case qs:return e.return=e.return||e.value;case Xp:return"";case Zp:return e.return=e.value+"{"+qn(e.children,r)+"}";case Zs:e.value=e.props.join(",")}return gt(n=qn(e.children,r))?e.return=e.value+"{"+n+"}":""}function Uy(e){var t=eu(e);return function(n,r,o,i){for(var a="",l=0;l<t;l++)a+=e[l](n,r,o,i)||"";return a}}function Hy(e){return function(t){t.root||(t=t.return)&&e(t)}}var Wy=function(t,n,r){for(var o=0,i=0;o=i,i=bt(),o===38&&i===12&&(n[r]=1),!io(i);)je();return yo(t,_e)},Vy=function(t,n){var r=-1,o=44;do switch(io(o)){case 0:o===38&&bt()===12&&(n[r]=1),t[r]+=Wy(_e-1,n,r);break;case 2:t[r]+=Zo(o);break;case 4:if(o===44){t[++r]=bt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Gi(o)}while(o=je());return t},Ky=function(t,n){return ng(Vy(tg(t),n))},id=new WeakMap,Qy=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!id.get(r))&&!o){id.set(t,!0);for(var i=[],a=Ky(n,i),l=r.props,s=0,c=0;s<a.length;s++)for(var g=0;g<l.length;g++,c++)t.props[c]=i[s]?a[s].replace(/&\f/g,l[g]):l[g]+" "+a[s]}}},Yy=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function rg(e,t){switch(Ry(e,t)){case 5103:return B+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return B+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return B+e+zi+e+ye+e+e;case 6828:case 4268:return B+e+ye+e+e;case 6165:return B+e+ye+"flex-"+e+e;case 5187:return B+e+U(e,/(\w+).+(:[^]+)/,B+"box-$1$2"+ye+"flex-$1$2")+e;case 5443:return B+e+ye+"flex-item-"+U(e,/flex-|-self/,"")+e;case 4675:return B+e+ye+"flex-line-pack"+U(e,/align-content|flex-|-self/,"")+e;case 5548:return B+e+ye+U(e,"shrink","negative")+e;case 5292:return B+e+ye+U(e,"basis","preferred-size")+e;case 6060:return B+"box-"+U(e,"-grow","")+B+e+ye+U(e,"grow","positive")+e;case 4554:return B+U(e,/([^-])(transform)/g,"$1"+B+"$2")+e;case 6187:return U(U(U(e,/(zoom-|grab)/,B+"$1"),/(image-set)/,B+"$1"),e,"")+e;case 5495:case 3959:return U(e,/(image-set\([^]*)/,B+"$1$`$1");case 4968:return U(U(e,/(.+:)(flex-)?(.*)/,B+"box-pack:$3"+ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+B+e+e;case 4095:case 3583:case 4068:case 2532:return U(e,/(.+)-inline(.+)/,B+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(gt(e)-1-t>6)switch(fe(e,t+1)){case 109:if(fe(e,t+4)!==45)break;case 102:return U(e,/(.+:)(.+)-([^]+)/,"$1"+B+"$2-$3$1"+zi+(fe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Kl(e,"stretch")?rg(U(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(fe(e,t+1)!==115)break;case 6444:switch(fe(e,gt(e)-3-(~Kl(e,"!important")&&10))){case 107:return U(e,":",":"+B)+e;case 101:return U(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+B+(fe(e,14)===45?"inline-":"")+"box$3$1"+B+"$2$3$1"+ye+"$2box$3")+e}break;case 5936:switch(fe(e,t+11)){case 114:return B+e+ye+U(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return B+e+ye+U(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return B+e+ye+U(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return B+e+ye+e+e}return e}var Gy=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case qs:t.return=rg(t.value,t.length);break;case Zp:return qn([Er(t,{value:U(t.value,"@","@"+B)})],o);case Zs:if(t.length)return Ny(t.props,function(i){switch(Ty(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return qn([Er(t,{props:[U(i,/:(read-\w+)/,":"+zi+"$1")]})],o);case"::placeholder":return qn([Er(t,{props:[U(i,/:(plac\w+)/,":"+B+"input-$1")]}),Er(t,{props:[U(i,/:(plac\w+)/,":"+zi+"$1")]}),Er(t,{props:[U(i,/:(plac\w+)/,ye+"input-$1")]})],o)}return""})}},Jy=[Gy],Xy=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(w){var S=w.getAttribute("data-emotion");S.indexOf(" ")!==-1&&(document.head.appendChild(w),w.setAttribute("data-s",""))})}var o=t.stylisPlugins||Jy,i={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(w){for(var S=w.getAttribute("data-emotion").split(" "),f=1;f<S.length;f++)i[S[f]]=!0;l.push(w)});var s,c=[Qy,Yy];{var g,p=[By,Hy(function(w){g.insert(w)})],h=Uy(c.concat(o,p)),v=function(S){return qn(My(S),h)};s=function(S,f,u,d){g=u,v(S?S+"{"+f.styles+"}":f.styles),d&&(b.inserted[f.name]=!0)}}var b={key:n,sheet:new Py({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:s};return b.sheet.hydrate(l),b},Yl={},Zy={get exports(){return Yl},set exports(e){Yl=e}},W={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ce=typeof Symbol=="function"&&Symbol.for,tu=ce?Symbol.for("react.element"):60103,nu=ce?Symbol.for("react.portal"):60106,Zi=ce?Symbol.for("react.fragment"):60107,qi=ce?Symbol.for("react.strict_mode"):60108,ea=ce?Symbol.for("react.profiler"):60114,ta=ce?Symbol.for("react.provider"):60109,na=ce?Symbol.for("react.context"):60110,ru=ce?Symbol.for("react.async_mode"):60111,ra=ce?Symbol.for("react.concurrent_mode"):60111,oa=ce?Symbol.for("react.forward_ref"):60112,ia=ce?Symbol.for("react.suspense"):60113,qy=ce?Symbol.for("react.suspense_list"):60120,aa=ce?Symbol.for("react.memo"):60115,la=ce?Symbol.for("react.lazy"):60116,ev=ce?Symbol.for("react.block"):60121,tv=ce?Symbol.for("react.fundamental"):60117,nv=ce?Symbol.for("react.responder"):60118,rv=ce?Symbol.for("react.scope"):60119;function Be(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case tu:switch(e=e.type,e){case ru:case ra:case Zi:case ea:case qi:case ia:return e;default:switch(e=e&&e.$$typeof,e){case na:case oa:case la:case aa:case ta:return e;default:return t}}case nu:return t}}}function og(e){return Be(e)===ra}W.AsyncMode=ru;W.ConcurrentMode=ra;W.ContextConsumer=na;W.ContextProvider=ta;W.Element=tu;W.ForwardRef=oa;W.Fragment=Zi;W.Lazy=la;W.Memo=aa;W.Portal=nu;W.Profiler=ea;W.StrictMode=qi;W.Suspense=ia;W.isAsyncMode=function(e){return og(e)||Be(e)===ru};W.isConcurrentMode=og;W.isContextConsumer=function(e){return Be(e)===na};W.isContextProvider=function(e){return Be(e)===ta};W.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===tu};W.isForwardRef=function(e){return Be(e)===oa};W.isFragment=function(e){return Be(e)===Zi};W.isLazy=function(e){return Be(e)===la};W.isMemo=function(e){return Be(e)===aa};W.isPortal=function(e){return Be(e)===nu};W.isProfiler=function(e){return Be(e)===ea};W.isStrictMode=function(e){return Be(e)===qi};W.isSuspense=function(e){return Be(e)===ia};W.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Zi||e===ra||e===ea||e===qi||e===ia||e===qy||typeof e=="object"&&e!==null&&(e.$$typeof===la||e.$$typeof===aa||e.$$typeof===ta||e.$$typeof===na||e.$$typeof===oa||e.$$typeof===tv||e.$$typeof===nv||e.$$typeof===rv||e.$$typeof===ev)};W.typeOf=Be;(function(e){e.exports=W})(Zy);var ig=Yl,ov={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},iv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ag={};ag[ig.ForwardRef]=ov;ag[ig.Memo]=iv;var av=!0;function lg(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var ou=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||av===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},iu=function(t,n,r){ou(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function lv(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var sv={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},uv=/[A-Z]|^ms/g,cv=/_EMO_([^_]+?)_([^]*?)_EMO_/g,sg=function(t){return t.charCodeAt(1)===45},ad=function(t){return t!=null&&typeof t!="boolean"},Ba=Jp(function(e){return sg(e)?e:e.replace(uv,"-$&").toLowerCase()}),ld=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(cv,function(r,o,i){return mt={name:o,styles:i,next:mt},o})}return sv[t]!==1&&!sg(t)&&typeof n=="number"&&n!==0?n+"px":n};function ao(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return mt={name:n.name,styles:n.styles,next:mt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)mt={name:r.name,styles:r.styles,next:mt},r=r.next;var o=n.styles+";";return o}return dv(e,t,n)}case"function":{if(e!==void 0){var i=mt,a=n(e);return mt=i,ao(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function dv(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=ao(e,t,n[o])+";";else for(var i in n){var a=n[i];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=i+"{"+t[a]+"}":ad(a)&&(r+=Ba(i)+":"+ld(i,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)ad(a[l])&&(r+=Ba(i)+":"+ld(i,a[l])+";");else{var s=ao(e,t,a);switch(i){case"animation":case"animationName":{r+=Ba(i)+":"+s+";";break}default:r+=i+"{"+s+"}"}}}return r}var sd=/label:\s*([^\s;\n{]+)\s*(;|$)/g,mt,sa=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";mt=void 0;var a=t[0];a==null||a.raw===void 0?(o=!1,i+=ao(r,n,a)):i+=a[0];for(var l=1;l<t.length;l++)i+=ao(r,n,t[l]),o&&(i+=a[l]);sd.lastIndex=0;for(var s="",c;(c=sd.exec(i))!==null;)s+="-"+c[1];var g=lv(i)+s;return{name:g,styles:i,next:mt}},fv=function(t){return t()},ug=Mr["useInsertionEffect"]?Mr["useInsertionEffect"]:!1,cg=ug||fv,ud=ug||P.useLayoutEffect,au={}.hasOwnProperty,dg=P.createContext(typeof HTMLElement<"u"?Xy({key:"css"}):null);dg.Provider;var lu=function(t){return P.forwardRef(function(n,r){var o=P.useContext(dg);return t(n,o,r)})},su=P.createContext({}),Gl="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",pv=function(t,n){var r={};for(var o in n)au.call(n,o)&&(r[o]=n[o]);return r[Gl]=t,r},gv=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return ou(n,r,o),cg(function(){return iu(n,r,o)}),null},mv=lu(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[Gl],i=[r],a="";typeof e.className=="string"?a=lg(t.registered,i,e.className):e.className!=null&&(a=e.className+" ");var l=sa(i,void 0,P.useContext(su));a+=t.key+"-"+l.name;var s={};for(var c in e)au.call(e,c)&&c!=="css"&&c!==Gl&&(s[c]=e[c]);return s.ref=n,s.className=a,P.createElement(P.Fragment,null,P.createElement(gv,{cache:t,serialized:l,isStringTag:typeof o=="string"}),P.createElement(o,s))}),m=function(t,n){var r=arguments;if(n==null||!au.call(n,"css"))return P.createElement.apply(void 0,r);var o=r.length,i=new Array(o);i[0]=mv,i[1]=pv(t,n);for(var a=2;a<o;a++)i[a]=r[a];return P.createElement.apply(null,i)},fg=lu(function(e,t){var n=e.styles,r=sa([n],void 0,P.useContext(su)),o=P.useRef();return ud(function(){var i=t.key+"-global",a=new t.sheet.constructor({key:i,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),l=!1,s=document.querySelector('style[data-emotion="'+i+" "+r.name+'"]');return t.sheet.tags.length&&(a.before=t.sheet.tags[0]),s!==null&&(l=!0,s.setAttribute("data-emotion",i),a.hydrate([s])),o.current=[a,l],function(){a.flush()}},[t]),ud(function(){var i=o.current,a=i[0],l=i[1];if(l){i[1]=!1;return}if(r.next!==void 0&&iu(t,r.next,!0),a.tags.length){var s=a.tags[a.tags.length-1].nextElementSibling;a.before=s,a.flush()}t.insert("",r,a,!1)},[t,r.name]),null});function pg(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return sa(t)}var hv=Sy,yv=function(t){return t!=="theme"},cd=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?hv:yv},dd=function(t,n,r){var o;if(n){var i=n.shouldForwardProp;o=t.__emotion_forwardProp&&i?function(a){return t.__emotion_forwardProp(a)&&i(a)}:i}return typeof o!="function"&&r&&(o=t.__emotion_forwardProp),o},vv=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return ou(n,r,o),cg(function(){return iu(n,r,o)}),null},wv=function e(t,n){var r=t.__emotion_real===t,o=r&&t.__emotion_base||t,i,a;n!==void 0&&(i=n.label,a=n.target);var l=dd(t,n,r),s=l||cd(o),c=!s("as");return function(){var g=arguments,p=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(i!==void 0&&p.push("label:"+i+";"),g[0]==null||g[0].raw===void 0)p.push.apply(p,g);else{p.push(g[0][0]);for(var h=g.length,v=1;v<h;v++)p.push(g[v],g[0][v])}var b=lu(function(w,S,f){var u=c&&w.as||o,d="",y=[],k=w;if(w.theme==null){k={};for(var x in w)k[x]=w[x];k.theme=P.useContext(su)}typeof w.className=="string"?d=lg(S.registered,y,w.className):w.className!=null&&(d=w.className+" ");var C=sa(p.concat(y),S.registered,k);d+=S.key+"-"+C.name,a!==void 0&&(d+=" "+a);var O=c&&l===void 0?cd(u):s,L={};for(var T in w)c&&T==="as"||O(T)&&(L[T]=w[T]);return L.className=d,L.ref=f,P.createElement(P.Fragment,null,P.createElement(vv,{cache:S,serialized:C,isStringTag:typeof u=="string"}),P.createElement(u,L))});return b.displayName=i!==void 0?i:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",b.defaultProps=t.defaultProps,b.__emotion_real=b,b.__emotion_base=o,b.__emotion_styles=p,b.__emotion_forwardProp=l,Object.defineProperty(b,"toString",{value:function(){return"."+a}}),b.withComponent=function(w,S){return e(w,Vl({},n,S,{shouldForwardProp:dd(b,S,!0)})).apply(void 0,p)},b}},bv=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],E=wv.bind();bv.forEach(function(e){E[e]=E(e)});const gg=[{id:1,title:"SuperTrader EA",description:"Expert Advisor yang dirancang untuk trading aman dan stabil, cocok untuk semua pair major.",price:59,image:"/images/ea/1.png",images:["/images/ea/1.png","/images/ea/1.png","/images/ea/1.png"],category:"Scalping"},{id:2,title:"ScalperPro EA",description:"EA terbaik untuk scalping cepat di timeframe kecil, dengan sistem risk management adaptif.",price:79,image:"/images/ea/1.png",images:["/images/ea/1.png","/images/ea/1.png","/images/ea/1.png"],category:"Scalper"},{id:3,title:"SmartBot EA",description:"AI-powered Expert Advisor dengan analisa multi-timeframe dan sinyal auto-adaptif.",price:99,image:"/images/ea/1.png",images:["/images/ea/1.png","/images/ea/1.png","/images/ea/1.png"],category:"AI Trading"},{id:4,title:"TrendMaster EA",description:"EA khusus untuk mengikuti trend jangka panjang dengan akurasi tinggi dan drawdown minimal.",price:89,image:"/images/ea/1.png",images:["/images/ea/1.png","/images/ea/1.png","/images/ea/1.png"],category:"Trend Following"},{id:5,title:"GridTrader Pro",description:"Expert Advisor dengan strategi grid trading yang telah dioptimasi untuk profit konsisten.",price:119,image:"/images/ea/1.png",images:["/images/ea/1.png","/images/ea/1.png","/images/ea/1.png"],category:"Grid Trading"},{id:6,title:"NewsTrader EA",description:"EA yang dirancang khusus untuk trading saat high impact news dengan filter volatilitas.",price:149,image:"/images/ea/1.png",images:["/images/ea/1.png","/images/ea/1.png","/images/ea/1.png"],category:"News Trading"}];function kv(e){const t=new Path2D;return e.forEach((n,r)=>{r===0?t.moveTo(n.x,n.y):t.lineTo(n.x,n.y)}),t}class mg{constructor(t,n,r,o){ut(this,"x");ut(this,"y");ut(this,"size");ut(this,"color");ut(this,"angle",2*Math.PI*Math.random());ut(this,"rotate",Math.random()*Math.PI);ut(this,"speed",.2+Math.random()*1.5);this.x=t,this.y=n,this.size=r,this.color=o}move(){this.x+=this.speed,this.rotate-=this.speed*.006}createGradient(t){const n=this.size*1.5,r=this.angle+Math.PI,o=this.x+this.size*Math.sin(this.angle+this.rotate),i=this.y+this.size*Math.cos(this.angle+this.rotate),a=this.x+n*Math.sin(r+this.rotate),l=this.y+n*Math.cos(r+this.rotate),s=t.createLinearGradient(o,i,a,l);return s.addColorStop(0,this.color),s.addColorStop(.3,this.color),s.addColorStop(.85,"#ffffff"),s}}class hg extends mg{constructor(n,r,o,i,a){super(n,r,o,i);ut(this,"sides");this.sides=a}draw(n){const r=this.size/2,o=Math.PI*2/this.sides,i=[];Array.from({length:this.sides}).forEach((l,s)=>{i.push({x:this.x+r*Math.sin(o*s+this.rotate),y:this.y+r*Math.cos(o*s+this.rotate)})});const a=kv(i);n.fillStyle=this.createGradient(n),n.fill(a)}}class xv extends hg{constructor(t,n,r,o){super(t,n,r,o,3)}}class Sv extends hg{constructor(t,n,r,o){super(t,n,r,o,4)}}class Cv extends mg{draw(t){const n=this.size/2,r=new Path2D;r.moveTo(0,0),r.arc(this.x,this.y,n,0,2*Math.PI),t.fillStyle=this.createGradient(t),t.fill(r)}}const Ev=E.canvas({height:"100%",width:"100%",opacity:"0",transitionProperty:"opacity",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms"}),Pv={opacity:"1"},fd=[xv,Sv,Cv],pd=["#f97316","#f59e0b","#eab308","#84cc16","#22c55e","#10b981","#14b8a6","#06b6d4","#0ea5e9","#3b82f6","#6366f1","#8b5cf6","#a855f7","#d946ef","#ec4899","#f43f5e"];function ze(e){const{count:t,sizes:n}=e,[r,o]=P.useState(!1),i=P.useRef(null),a=P.useRef([]),l=P.useCallback(()=>{if(!i.current)return;const p=i.current.getBoundingClientRect();i.current.width=p.width,i.current.height=p.height},[]),s=P.useCallback(()=>{if(!i.current)return;const p=i.current.width,h=i.current.height,v=a.current.length===0;for(;a.current.length<t;){const b=fd[Math.floor(Math.random()*fd.length)],w=pd[Math.floor(Math.random()*pd.length)],S=n[0]+Math.random()*(n[1]-n[0]),f=v?Math.random()*p:-S,u=Math.random()*h;a.current.push(new b(f,u,S,w))}},[]),c=P.useCallback(()=>{if(!i.current)return;const p=i.current.getContext("2d"),h=i.current.width,v=i.current.height;p.clearRect(0,0,h,v),a.current.forEach(b=>{b.move(),b.draw(p)}),a.current=a.current.filter(b=>b.x-b.size<h)},[]),g=P.useCallback(()=>{s(),c(),requestAnimationFrame(g)},[]);return P.useEffect(()=>(l(),g(),o(!0),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)}),[]),m(Ev,{ref:i,css:[r&&Pv]})}const Ov=E.div`
  ${{position:"relative",minHeight:"100%",width:"100%",overflow:"hidden",paddingTop:"2.5rem",paddingBottom:"2.5rem",paddingLeft:"2rem",paddingRight:"2rem",transitionProperty:"color, background-color, border-color, text-decoration-color, fill, stroke",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms"}}
`,Lv=E.div({pointerEvents:"none",position:"absolute",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:"-20",height:"100%",width:"100%",opacity:"0.5","--tw-blur":"blur(4px)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)",userSelect:"none"}),zv=E.div({pointerEvents:"none",position:"absolute",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:"-10",height:"100%",width:"100%",userSelect:"none"}),Rv=E.div({marginLeft:"auto",marginRight:"auto",marginBottom:"3rem",maxWidth:"48rem",textAlign:"center"}),Tv=E.h1({marginBottom:"1rem",fontSize:"2.25rem",lineHeight:"2.5rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(243 244 246 / var(--tw-text-opacity))"}}),Nv=E.p({fontSize:"1.125rem",lineHeight:"1.625","--tw-text-opacity":"1",color:"rgb(75 85 99 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(156 163 175 / var(--tw-text-opacity))"}}),_v=E.div({marginLeft:"auto",marginRight:"auto",marginTop:"2rem",marginBottom:"1rem",maxWidth:"36rem"}),Fv=E.input`
  ${{width:"100%",borderRadius:"9999px",borderWidth:"2px","--tw-border-opacity":"1",borderColor:"rgb(209 213 219 / var(--tw-border-opacity))","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))",paddingLeft:"1.5rem",paddingRight:"1.5rem",paddingTop:"0.75rem",paddingBottom:"0.75rem","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))","::placeholder":{"--tw-placeholder-opacity":"1",color:"rgb(156 163 175 / var(--tw-placeholder-opacity))"},outline:"2px solid transparent",outlineOffset:"2px",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms",".dark &":{"--tw-border-opacity":"1",borderColor:"rgb(55 65 81 / var(--tw-border-opacity))","--tw-bg-opacity":"1",backgroundColor:"rgb(31 41 55 / var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgb(243 244 246 / var(--tw-text-opacity))"},".dark &::placeholder":{"--tw-placeholder-opacity":"1",color:"rgb(107 114 128 / var(--tw-placeholder-opacity))"}}}
  
  &:focus {
    ${{"--tw-border-opacity":"1",borderColor:"rgb(59 130 246 / var(--tw-border-opacity))",".dark &":{"--tw-border-opacity":"1",borderColor:"rgb(96 165 250 / var(--tw-border-opacity))"}}}
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`,$v=E.div({paddingTop:"5rem",paddingBottom:"5rem",textAlign:"center",fontSize:"1.125rem",lineHeight:"1.75rem","--tw-text-opacity":"1",color:"rgb(107 114 128 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(156 163 175 / var(--tw-text-opacity))"}}),Av=E.div({marginLeft:"auto",marginRight:"auto",display:"grid",maxWidth:"72rem",gridTemplateColumns:"repeat(1, minmax(0, 1fr))",gap:"2rem",padding:"2rem","@media (min-width: 640px)":{gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},"@media (min-width: 1024px)":{gridTemplateColumns:"repeat(3, minmax(0, 1fr))"}}),jv=E.div`
  ${{position:"relative",cursor:"pointer",overflow:"hidden",borderRadius:"1rem","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms",".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(17 24 39 / var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgb(243 244 246 / var(--tw-text-opacity))"}}}

  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  .dark & {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.15);
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);

    .dark & {
      box-shadow: 0 0 25px rgba(255, 255, 255, 0.25);
    }
  }
`,Iv=E.div({position:"relative",height:"14rem",width:"100%",overflow:"hidden"}),Mv=E.img({height:"100%",width:"100%",objectFit:"cover",transitionProperty:"transform",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms",":hover":{"--tw-scale-x":"1.1","--tw-scale-y":"1.1",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"}}),Dv=E.div({padding:"1.25rem"}),Bv=E.p({fontSize:"0.875rem",lineHeight:"1.25rem",fontWeight:"500",textTransform:"uppercase",letterSpacing:"0.025em","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))"}),Uv=E.h3({marginTop:"0.5rem",marginBottom:"0.25rem",fontSize:"1.125rem",lineHeight:"1.75rem",fontWeight:"600"}),Hv=E.p({marginBottom:"0.75rem",fontSize:"0.875rem",lineHeight:"1.375",opacity:"0.8"}),Wv=E.span({fontSize:"1rem",lineHeight:"1.5rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(22 163 74 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(74 222 128 / var(--tw-text-opacity))"}});function Vv(){const e=ho(),[t,n]=P.useState(""),r=i=>{e(`/EA/${i}`)},o=gg.filter(i=>{const a=t.toLowerCase();return i.title.toLowerCase().includes(a)||i.category.toLowerCase().includes(a)||i.description.toLowerCase().includes(a)});return m(Ov,null,m(Lv,null,m(ze,{count:12,sizes:[30,60]})),m(zv,null,m(ze,{count:12,sizes:[40,80]})),m(Rv,null,m(Tv,null,"Expert Advisors Collection"),m(Nv,null,"Temukan Expert Advisor terbaik untuk trading otomatis Anda. Setiap EA dirancang dengan strategi yang telah teruji untuk memberikan hasil optimal di berbagai kondisi pasar."),m(_v,null,m(Fv,{type:"text",placeholder:"🔍 Search EA by name, category, or description...",value:t,onChange:i=>n(i.target.value)}))),o.length>0?m(Av,null,o.map(i=>m(jv,{key:i.id,onClick:()=>r(i.id)},m(Iv,null,m(Mv,{src:i.image,alt:i.title})),m(Dv,null,m(Bv,null,i.category),m(Uv,null,i.title),m(Hv,null,i.description),m(Wv,null,"$",i.price))))):m($v,null,'No products found for "',t,'". Try a different search term.'))}const gd=E.div`
  ${{position:"relative",minHeight:"100vh",width:"100%",overflow:"hidden",paddingTop:"2.5rem",paddingBottom:"2.5rem",paddingLeft:"2rem",paddingRight:"2rem",transitionProperty:"color, background-color, border-color, text-decoration-color, fill, stroke",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms"}}
`,md=E.div({pointerEvents:"none",position:"absolute",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:"-20",height:"100%",width:"100%",opacity:"0.5","--tw-blur":"blur(4px)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)",userSelect:"none"}),hd=E.div({pointerEvents:"none",position:"absolute",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:"-10",height:"100%",width:"100%",userSelect:"none"}),Kv=E.div({position:"relative",zIndex:"10",marginLeft:"auto",marginRight:"auto",maxWidth:"72rem"}),Qv=E.div({marginBottom:"1.5rem",fontSize:"0.875rem",lineHeight:"1.25rem","--tw-text-opacity":"1",color:"rgb(75 85 99 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(156 163 175 / var(--tw-text-opacity))"}}),yd=E.button({transitionProperty:"color, background-color, border-color, text-decoration-color, fill, stroke",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms",":hover":{"--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))"}}),Yv=E.div({marginBottom:"2rem",display:"grid",gap:"2rem","@media (min-width: 1024px)":{gridTemplateColumns:"repeat(2, minmax(0, 1fr))"}}),Gv=E.div({"> :not([hidden]) ~ :not([hidden])":{"--tw-space-y-reverse":"0",marginTop:"calc(1rem * calc(1 - var(--tw-space-y-reverse)))",marginBottom:"calc(1rem * var(--tw-space-y-reverse))"}}),Jv=E.div`
  ${{position:"relative",width:"100%"}}
  perspective: 1500px;
`,Xv=E.div`
  ${{display:"flex",gap:"1rem",overflowX:"auto",paddingBottom:"1rem"}}
  scroll-behavior: smooth;
  scrollbar-width: thin;
  
  &::-webkit-scrollbar {
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    ${{borderRadius:"9999px","--tw-bg-opacity":"1",backgroundColor:"rgb(229 231 235 / var(--tw-bg-opacity))",".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(31 41 55 / var(--tw-bg-opacity))"}}}
  }
  
  &::-webkit-scrollbar-thumb {
    ${{borderRadius:"9999px","--tw-bg-opacity":"1",backgroundColor:"rgb(59 130 246 / var(--tw-bg-opacity))"}}
  }
`,Zv=E.div`
  ${{position:"relative",marginBottom:"1rem",height:"24rem",width:"100%",cursor:"pointer",overflow:"hidden",borderRadius:"1rem"}}
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  
  .dark & {
    box-shadow: 0 0 40px rgba(255, 255, 255, 0.1);
  }
  
  ${({isActive:e})=>e&&`
    transform: rotateY(-15deg) scale(1.02);
  `}
  
  &:hover {
    transform: rotateY(-8deg) scale(1.05);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(0,0,0,0.1) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.6s;
    z-index: 1;
    pointer-events: none;
  }
  
  &:hover::before {
    opacity: 1;
  }
`,qv=E.img({height:"100%",width:"100%",objectFit:"cover",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms"}),ew=E.div`
  ${{position:"relative",height:"6rem",minWidth:"120px",flexShrink:"0",cursor:"pointer",overflow:"hidden",borderRadius:"0.5rem"}}
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  
  ${({isActive:e})=>e&&`
    transform: scale(1.1) translateY(-4px);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
    border: 2px solid rgb(59, 130, 246);
  `}
  
  &:hover {
    transform: scale(1.05) translateY(-2px) rotateY(-5deg);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
  
  .dark & {
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
  }
`,tw=E.img({height:"100%",width:"100%",objectFit:"cover"}),nw=E.div`
  ${{borderRadius:"1rem","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))",padding:"2rem",transitionProperty:"color, background-color, border-color, text-decoration-color, fill, stroke",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms",".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(17 24 39 / var(--tw-bg-opacity))"}}}
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  
  .dark & {
    box-shadow: 0 0 40px rgba(255, 255, 255, 0.1);
  }
`,rw=E.span({marginBottom:"1rem",display:"inline-block",borderRadius:"9999px","--tw-bg-opacity":"1",backgroundColor:"rgb(239 246 255 / var(--tw-bg-opacity))",paddingLeft:"0.75rem",paddingRight:"0.75rem",paddingTop:"0.25rem",paddingBottom:"0.25rem",fontSize:"0.75rem",lineHeight:"1rem",fontWeight:"600",textTransform:"uppercase","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))",".dark &":{backgroundColor:"rgb(30 58 138 / 0.3)"}}),ow=E.h1({marginBottom:"1rem",fontSize:"2.25rem",lineHeight:"2.5rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(243 244 246 / var(--tw-text-opacity))"}}),iw=E.div({marginBottom:"1.5rem",display:"flex",alignItems:"baseline",gap:"0.75rem",borderBottomWidth:"1px","--tw-border-opacity":"1",borderColor:"rgb(229 231 235 / var(--tw-border-opacity))",paddingBottom:"1.5rem",".dark &":{"--tw-border-opacity":"1",borderColor:"rgb(55 65 81 / var(--tw-border-opacity))"}}),aw=E.div({fontSize:"2.25rem",lineHeight:"2.5rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(22 163 74 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(74 222 128 / var(--tw-text-opacity))"}}),lw=E.span({fontSize:"0.875rem",lineHeight:"1.25rem","--tw-text-opacity":"1",color:"rgb(107 114 128 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(156 163 175 / var(--tw-text-opacity))"}}),sw=E.p({marginBottom:"1.5rem",fontSize:"1rem",lineHeight:"1.625","--tw-text-opacity":"1",color:"rgb(55 65 81 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(209 213 219 / var(--tw-text-opacity))"}}),uw=E.h3({marginBottom:"1rem",fontSize:"1.25rem",lineHeight:"1.75rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(243 244 246 / var(--tw-text-opacity))"}}),cw=E.ul({marginBottom:"2rem","> :not([hidden]) ~ :not([hidden])":{"--tw-space-y-reverse":"0",marginTop:"calc(0.75rem * calc(1 - var(--tw-space-y-reverse)))",marginBottom:"calc(0.75rem * var(--tw-space-y-reverse))"}}),Tn=E.li({display:"flex",alignItems:"flex-start",gap:"0.75rem","--tw-text-opacity":"1",color:"rgb(55 65 81 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(209 213 219 / var(--tw-text-opacity))"}}),Nn=E.span({marginTop:"0.125rem",fontSize:"1.25rem",lineHeight:"1.75rem","--tw-text-opacity":"1",color:"rgb(34 197 94 / var(--tw-text-opacity))"}),dw=E.div({display:"flex",flexWrap:"wrap",gap:"1rem"}),yg=E.button`
  ${{display:"flex",alignItems:"center",gap:"0.5rem",borderRadius:"0.75rem",paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"0.75rem",paddingBottom:"0.75rem",fontWeight:"600",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms"}}
  
  &:hover {
    transform: translateY(-2px);
  }
`,fw=E(yg)`
  ${{backgroundImage:"linear-gradient(to right, var(--tw-gradient-stops))","--tw-gradient-from":"#3b82f6","--tw-gradient-to":"#2563eb","--tw-gradient-stops":"var(--tw-gradient-from), var(--tw-gradient-to)","--tw-text-opacity":"1",color:"rgb(255 255 255 / var(--tw-text-opacity))","--tw-shadow":"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)","--tw-shadow-colored":"0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",":hover":{"--tw-gradient-from":"#2563eb","--tw-gradient-to":"#1d4ed8","--tw-gradient-stops":"var(--tw-gradient-from), var(--tw-gradient-to)"}}}
`,pw=E(yg)`
  ${{"--tw-bg-opacity":"1",backgroundColor:"rgb(229 231 235 / var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgb(209 213 219 / var(--tw-bg-opacity))"},".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(55 65 81 / var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgb(243 244 246 / var(--tw-text-opacity))"},".dark &:hover":{"--tw-bg-opacity":"1",backgroundColor:"rgb(75 85 99 / var(--tw-bg-opacity))"}}}
`,gw=E.div({paddingTop:"5rem",paddingBottom:"5rem",textAlign:"center"}),mw=E.p({marginBottom:"1rem",fontSize:"1.25rem",lineHeight:"1.75rem","--tw-text-opacity":"1",color:"rgb(75 85 99 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(156 163 175 / var(--tw-text-opacity))"}}),hw=E.button({fontWeight:"600","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))",textDecorationLine:"underline",":hover":{"--tw-text-opacity":"1",color:"rgb(37 99 235 / var(--tw-text-opacity))"}});function yw(){const{id:e}=Yp(),t=ho(),n=gg.find(c=>c.id===Number(e)),[r,o]=P.useState(0),[i,a]=P.useState(!1),l=(n==null?void 0:n.images)||[(n==null?void 0:n.image)||""],s=c=>{c!==r&&(a(!0),setTimeout(()=>{o(c),a(!1)},300))};return n?m(gd,null,m(md,null,m(ze,{count:12,sizes:[30,60]})),m(hd,null,m(ze,{count:12,sizes:[40,80]})),m(Kv,null,m(Qv,null,m(yd,{onClick:()=>t("/")},"Home"),m("span",{css:{marginLeft:"0.5rem",marginRight:"0.5rem"}},"/"),m(yd,{onClick:()=>t("/EA")},"Expert Advisors"),m("span",{css:{marginLeft:"0.5rem",marginRight:"0.5rem"}},"/"),m("span",{css:{fontWeight:"600","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(243 244 246 / var(--tw-text-opacity))"}}},n.title)),m(Yv,null,m(Gv,null,m(Jv,null,m(Zv,{isActive:i},m(qv,{src:l[r],alt:n.title})),l.length>1&&m(Xv,null,l.map((c,g)=>m(ew,{key:g,isActive:g===r,onClick:()=>s(g)},m(tw,{src:c,alt:`${n.title} - ${g+1}`})))))),m(nw,null,m(rw,null,n.category),m(ow,null,n.title),m(iw,null,m(aw,null,"$",n.price),m(lw,null,"One-time payment")),m(sw,null,n.description),m(uw,null,"Key Features"),m(cw,null,m(Tn,null,m(Nn,null,"✓"),m("span",null,"Advanced trading algorithm with proven results")),m(Tn,null,m(Nn,null,"✓"),m("span",null,"Built-in risk management system")),m(Tn,null,m(Nn,null,"✓"),m("span",null,"Compatible with MT4 and MT5 platforms")),m(Tn,null,m(Nn,null,"✓"),m("span",null,"24/7 customer support")),m(Tn,null,m(Nn,null,"✓"),m("span",null,"Lifetime updates included")),m(Tn,null,m(Nn,null,"✓"),m("span",null,"Money-back guarantee (30 days)"))),m(dw,null,m(fw,null,m("span",null,"🛒"),m("span",null,"Buy Now")),m(pw,{onClick:()=>t("/EA")},m("span",null,"←"),m("span",null,"Back"))))))):m(gd,null,m(md,null,m(ze,{count:12,sizes:[30,60]})),m(hd,null,m(ze,{count:12,sizes:[40,80]})),m(gw,null,m(mw,null,"Product not found."),m(hw,{onClick:()=>t("/EA")},"← Back to EA list")))}const vg=[{id:1,title:"TrendLine Pro",description:"Indikator untuk mendeteksi trendline otomatis dengan akurasi tinggi dan alert real-time.",price:39,image:"/images/ea/update.png",images:["/images/ea/update.png","/images/ea/update.png","/images/ea/update.png"],category:"Trend Analysis"},{id:2,title:"Support Resistance Master",description:"Indikator yang menampilkan level support dan resistance kunci dengan high probability zones.",price:49,image:"/images/ea/update.png",images:["/images/ea/update.png","/images/ea/update.png","/images/ea/update.png"],category:"Price Action"},{id:3,title:"Smart Volume Analyzer",description:"Analisa volume trading dengan teknologi AI untuk prediksi pergerakan harga yang akurat.",price:69,image:"/images/ea/update.png",images:["/images/ea/update.png","/images/ea/update.png","/images/ea/update.png"],category:"Volume Analysis"},{id:4,title:"Divergence Detector",description:"Indikator canggih untuk mendeteksi divergence regular dan hidden pada semua timeframe.",price:59,image:"/images/ea/update.png",images:["/images/ea/update.png","/images/ea/update.png","/images/ea/update.png"],category:"Divergence"},{id:5,title:"Multi-Timeframe Scanner",description:"Scanner powerful yang menganalisa multiple timeframe sekaligus untuk entry point terbaik.",price:79,image:"/images/ea/update.png",images:["/images/ea/update.png","/images/ea/update.png","/images/ea/update.png"],category:"Scanner"},{id:6,title:"Pattern Recognition Pro",description:"Indikator yang mengenali chart patterns seperti Head & Shoulders, Double Top/Bottom otomatis.",price:89,image:"/images/ea/update.png",images:["/images/ea/update.png","/images/ea/update.png","/images/ea/update.png"],category:"Pattern Recognition"}],vw=E.div`
  ${{position:"relative",minHeight:"100%",width:"100%",overflow:"hidden",paddingTop:"2.5rem",paddingBottom:"2.5rem",paddingLeft:"2rem",paddingRight:"2rem",transitionProperty:"color, background-color, border-color, text-decoration-color, fill, stroke",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms"}}
`,ww=E.div({pointerEvents:"none",position:"absolute",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:"-20",height:"100%",width:"100%",opacity:"0.5","--tw-blur":"blur(4px)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)",userSelect:"none"}),bw=E.div({pointerEvents:"none",position:"absolute",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:"-10",height:"100%",width:"100%",userSelect:"none"}),kw=E.div({marginLeft:"auto",marginRight:"auto",marginBottom:"3rem",maxWidth:"48rem",textAlign:"center"}),xw=E.h1({marginBottom:"1rem",fontSize:"2.25rem",lineHeight:"2.5rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(243 244 246 / var(--tw-text-opacity))"}}),Sw=E.p({fontSize:"1.125rem",lineHeight:"1.625","--tw-text-opacity":"1",color:"rgb(75 85 99 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(156 163 175 / var(--tw-text-opacity))"}}),Cw=E.div({marginLeft:"auto",marginRight:"auto",marginTop:"2rem",marginBottom:"1rem",maxWidth:"36rem"}),Ew=E.input`
  ${{width:"100%",borderRadius:"9999px",borderWidth:"2px","--tw-border-opacity":"1",borderColor:"rgb(209 213 219 / var(--tw-border-opacity))","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))",paddingLeft:"1.5rem",paddingRight:"1.5rem",paddingTop:"0.75rem",paddingBottom:"0.75rem","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))","::placeholder":{"--tw-placeholder-opacity":"1",color:"rgb(156 163 175 / var(--tw-placeholder-opacity))"},outline:"2px solid transparent",outlineOffset:"2px",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms",".dark &":{"--tw-border-opacity":"1",borderColor:"rgb(55 65 81 / var(--tw-border-opacity))","--tw-bg-opacity":"1",backgroundColor:"rgb(31 41 55 / var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgb(243 244 246 / var(--tw-text-opacity))"},".dark &::placeholder":{"--tw-placeholder-opacity":"1",color:"rgb(107 114 128 / var(--tw-placeholder-opacity))"}}}
  
  &:focus {
    ${{"--tw-border-opacity":"1",borderColor:"rgb(59 130 246 / var(--tw-border-opacity))",".dark &":{"--tw-border-opacity":"1",borderColor:"rgb(96 165 250 / var(--tw-border-opacity))"}}}
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`,Pw=E.div({paddingTop:"5rem",paddingBottom:"5rem",textAlign:"center",fontSize:"1.125rem",lineHeight:"1.75rem","--tw-text-opacity":"1",color:"rgb(107 114 128 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(156 163 175 / var(--tw-text-opacity))"}}),Ow=E.div({marginLeft:"auto",marginRight:"auto",display:"grid",maxWidth:"72rem",gridTemplateColumns:"repeat(1, minmax(0, 1fr))",gap:"2rem",padding:"2rem","@media (min-width: 640px)":{gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},"@media (min-width: 1024px)":{gridTemplateColumns:"repeat(3, minmax(0, 1fr))"}}),Lw=E.div`
  ${{position:"relative",cursor:"pointer",overflow:"hidden",borderRadius:"1rem","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms",".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(17 24 39 / var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgb(243 244 246 / var(--tw-text-opacity))"}}}

  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  .dark & {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.15);
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);

    .dark & {
      box-shadow: 0 0 25px rgba(255, 255, 255, 0.25);
    }
  }
`,zw=E.div({position:"relative",height:"14rem",width:"100%",overflow:"hidden"}),Rw=E.img({height:"100%",width:"100%",objectFit:"cover",transitionProperty:"transform",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms",":hover":{"--tw-scale-x":"1.1","--tw-scale-y":"1.1",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"}}),Tw=E.div({padding:"1.25rem"}),Nw=E.p({fontSize:"0.875rem",lineHeight:"1.25rem",fontWeight:"500",textTransform:"uppercase",letterSpacing:"0.025em","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))"}),_w=E.h3({marginTop:"0.5rem",marginBottom:"0.25rem",fontSize:"1.125rem",lineHeight:"1.75rem",fontWeight:"600"}),Fw=E.p({marginBottom:"0.75rem",fontSize:"0.875rem",lineHeight:"1.375",opacity:"0.8"}),$w=E.span({fontSize:"1rem",lineHeight:"1.5rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(22 163 74 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(74 222 128 / var(--tw-text-opacity))"}});function Aw(){const e=ho(),[t,n]=P.useState(""),r=i=>{e(`/indicator/${i}`)},o=vg.filter(i=>{const a=t.toLowerCase();return i.title.toLowerCase().includes(a)||i.category.toLowerCase().includes(a)||i.description.toLowerCase().includes(a)});return m(vw,null,m(ww,null,m(ze,{count:12,sizes:[30,60]})),m(bw,null,m(ze,{count:12,sizes:[40,80]})),m(kw,null,m(xw,null,"Indicator Collection"),m(Sw,null,"Koleksi indikator premium untuk meningkatkan analisis teknikal Anda. Dilengkapi dengan teknologi canggih untuk membantu Anda mengidentifikasi peluang trading dengan lebih akurat."),m(Cw,null,m(Ew,{type:"text",placeholder:"🔍 Search indicator by name, category, or description...",value:t,onChange:i=>n(i.target.value)}))),o.length>0?m(Ow,null,o.map(i=>m(Lw,{key:i.id,onClick:()=>r(i.id)},m(zw,null,m(Rw,{src:i.image,alt:i.title})),m(Tw,null,m(Nw,null,i.category),m(_w,null,i.title),m(Fw,null,i.description),m($w,null,"$",i.price))))):m(Pw,null,'No products found for "',t,'". Try a different search term.'))}const vd=E.div`
  ${{position:"relative",minHeight:"100vh",width:"100%",overflow:"hidden",paddingTop:"2.5rem",paddingBottom:"2.5rem",paddingLeft:"2rem",paddingRight:"2rem",transitionProperty:"color, background-color, border-color, text-decoration-color, fill, stroke",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms"}}
`,wd=E.div({pointerEvents:"none",position:"absolute",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:"-20",height:"100%",width:"100%",opacity:"0.5","--tw-blur":"blur(4px)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)",userSelect:"none"}),bd=E.div({pointerEvents:"none",position:"absolute",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:"-10",height:"100%",width:"100%",userSelect:"none"}),jw=E.div({position:"relative",zIndex:"10",marginLeft:"auto",marginRight:"auto",maxWidth:"72rem"}),Iw=E.div({marginBottom:"1.5rem",fontSize:"0.875rem",lineHeight:"1.25rem","--tw-text-opacity":"1",color:"rgb(75 85 99 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(156 163 175 / var(--tw-text-opacity))"}}),kd=E.button({transitionProperty:"color, background-color, border-color, text-decoration-color, fill, stroke",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms",":hover":{"--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))"}}),Mw=E.div({marginBottom:"2rem",display:"grid",gap:"2rem","@media (min-width: 1024px)":{gridTemplateColumns:"repeat(2, minmax(0, 1fr))"}}),Dw=E.div({"> :not([hidden]) ~ :not([hidden])":{"--tw-space-y-reverse":"0",marginTop:"calc(1rem * calc(1 - var(--tw-space-y-reverse)))",marginBottom:"calc(1rem * var(--tw-space-y-reverse))"}}),Bw=E.div`
  ${{position:"relative",width:"100%"}}
  perspective: 1500px;
`,Uw=E.div`
  ${{display:"flex",gap:"1rem",overflowX:"auto",paddingBottom:"1rem"}}
  scroll-behavior: smooth;
  scrollbar-width: thin;
  
  &::-webkit-scrollbar {
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    ${{borderRadius:"9999px","--tw-bg-opacity":"1",backgroundColor:"rgb(229 231 235 / var(--tw-bg-opacity))",".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(31 41 55 / var(--tw-bg-opacity))"}}}
  }
  
  &::-webkit-scrollbar-thumb {
    ${{borderRadius:"9999px","--tw-bg-opacity":"1",backgroundColor:"rgb(59 130 246 / var(--tw-bg-opacity))"}}
  }
`,Hw=E.div`
  ${{position:"relative",marginBottom:"1rem",height:"24rem",width:"100%",cursor:"pointer",overflow:"hidden",borderRadius:"1rem"}}
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  
  .dark & {
    box-shadow: 0 0 40px rgba(255, 255, 255, 0.1);
  }
  
  ${({isActive:e})=>e&&`
    transform: rotateY(-15deg) scale(1.02);
  `}
  
  &:hover {
    transform: rotateY(-8deg) scale(1.05);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(0,0,0,0.1) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.6s;
    z-index: 1;
    pointer-events: none;
  }
  
  &:hover::before {
    opacity: 1;
  }
`,Ww=E.img({height:"100%",width:"100%",objectFit:"cover",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms"}),Vw=E.div`
  ${{position:"relative",height:"6rem",minWidth:"120px",flexShrink:"0",cursor:"pointer",overflow:"hidden",borderRadius:"0.5rem"}}
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  
  ${({isActive:e})=>e&&`
    transform: scale(1.1) translateY(-4px);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
    border: 2px solid rgb(59, 130, 246);
  `}
  
  &:hover {
    transform: scale(1.05) translateY(-2px) rotateY(-5deg);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
  
  .dark & {
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
  }
`,Kw=E.img({height:"100%",width:"100%",objectFit:"cover"}),Qw=E.div`
  ${{borderRadius:"1rem","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))",padding:"2rem",transitionProperty:"color, background-color, border-color, text-decoration-color, fill, stroke",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms",".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(17 24 39 / var(--tw-bg-opacity))"}}}
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  
  .dark & {
    box-shadow: 0 0 40px rgba(255, 255, 255, 0.1);
  }
`,Yw=E.span({marginBottom:"1rem",display:"inline-block",borderRadius:"9999px","--tw-bg-opacity":"1",backgroundColor:"rgb(239 246 255 / var(--tw-bg-opacity))",paddingLeft:"0.75rem",paddingRight:"0.75rem",paddingTop:"0.25rem",paddingBottom:"0.25rem",fontSize:"0.75rem",lineHeight:"1rem",fontWeight:"600",textTransform:"uppercase","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))",".dark &":{backgroundColor:"rgb(30 58 138 / 0.3)"}}),Gw=E.h1({marginBottom:"1rem",fontSize:"2.25rem",lineHeight:"2.5rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(243 244 246 / var(--tw-text-opacity))"}}),Jw=E.div({marginBottom:"1.5rem",display:"flex",alignItems:"baseline",gap:"0.75rem",borderBottomWidth:"1px","--tw-border-opacity":"1",borderColor:"rgb(229 231 235 / var(--tw-border-opacity))",paddingBottom:"1.5rem",".dark &":{"--tw-border-opacity":"1",borderColor:"rgb(55 65 81 / var(--tw-border-opacity))"}}),Xw=E.div({fontSize:"2.25rem",lineHeight:"2.5rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(22 163 74 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(74 222 128 / var(--tw-text-opacity))"}}),Zw=E.span({fontSize:"0.875rem",lineHeight:"1.25rem","--tw-text-opacity":"1",color:"rgb(107 114 128 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(156 163 175 / var(--tw-text-opacity))"}}),qw=E.p({marginBottom:"1.5rem",fontSize:"1rem",lineHeight:"1.625","--tw-text-opacity":"1",color:"rgb(55 65 81 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(209 213 219 / var(--tw-text-opacity))"}}),eb=E.h3({marginBottom:"1rem",fontSize:"1.25rem",lineHeight:"1.75rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(243 244 246 / var(--tw-text-opacity))"}}),tb=E.ul({marginBottom:"2rem","> :not([hidden]) ~ :not([hidden])":{"--tw-space-y-reverse":"0",marginTop:"calc(0.75rem * calc(1 - var(--tw-space-y-reverse)))",marginBottom:"calc(0.75rem * var(--tw-space-y-reverse))"}}),_n=E.li({display:"flex",alignItems:"flex-start",gap:"0.75rem","--tw-text-opacity":"1",color:"rgb(55 65 81 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(209 213 219 / var(--tw-text-opacity))"}}),Fn=E.span({marginTop:"0.125rem",fontSize:"1.25rem",lineHeight:"1.75rem","--tw-text-opacity":"1",color:"rgb(34 197 94 / var(--tw-text-opacity))"}),nb=E.div({display:"flex",flexWrap:"wrap",gap:"1rem"}),wg=E.button`
  ${{display:"flex",alignItems:"center",gap:"0.5rem",borderRadius:"0.75rem",paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"0.75rem",paddingBottom:"0.75rem",fontWeight:"600",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms"}}
  
  &:hover {
    transform: translateY(-2px);
  }
`,rb=E(wg)`
  ${{backgroundImage:"linear-gradient(to right, var(--tw-gradient-stops))","--tw-gradient-from":"#3b82f6","--tw-gradient-to":"#2563eb","--tw-gradient-stops":"var(--tw-gradient-from), var(--tw-gradient-to)","--tw-text-opacity":"1",color:"rgb(255 255 255 / var(--tw-text-opacity))","--tw-shadow":"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)","--tw-shadow-colored":"0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",":hover":{"--tw-gradient-from":"#2563eb","--tw-gradient-to":"#1d4ed8","--tw-gradient-stops":"var(--tw-gradient-from), var(--tw-gradient-to)"}}}
`,ob=E(wg)`
  ${{"--tw-bg-opacity":"1",backgroundColor:"rgb(229 231 235 / var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgb(209 213 219 / var(--tw-bg-opacity))"},".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(55 65 81 / var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgb(243 244 246 / var(--tw-text-opacity))"},".dark &:hover":{"--tw-bg-opacity":"1",backgroundColor:"rgb(75 85 99 / var(--tw-bg-opacity))"}}}
`,ib=E.div({paddingTop:"5rem",paddingBottom:"5rem",textAlign:"center"}),ab=E.p({marginBottom:"1rem",fontSize:"1.25rem",lineHeight:"1.75rem","--tw-text-opacity":"1",color:"rgb(75 85 99 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(156 163 175 / var(--tw-text-opacity))"}}),lb=E.button({fontWeight:"600","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))",textDecorationLine:"underline",":hover":{"--tw-text-opacity":"1",color:"rgb(37 99 235 / var(--tw-text-opacity))"}});function sb(){const{id:e}=Yp(),t=ho(),n=vg.find(c=>c.id===Number(e)),[r,o]=P.useState(0),[i,a]=P.useState(!1),l=(n==null?void 0:n.images)||[(n==null?void 0:n.image)||""],s=c=>{c!==r&&(a(!0),setTimeout(()=>{o(c),a(!1)},300))};return n?m(vd,null,m(wd,null,m(ze,{count:12,sizes:[30,60]})),m(bd,null,m(ze,{count:12,sizes:[40,80]})),m(jw,null,m(Iw,null,m(kd,{onClick:()=>t("/")},"Home"),m("span",{css:{marginLeft:"0.5rem",marginRight:"0.5rem"}},"/"),m(kd,{onClick:()=>t("/indicator")},"Indicators"),m("span",{css:{marginLeft:"0.5rem",marginRight:"0.5rem"}},"/"),m("span",{css:{fontWeight:"600","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(243 244 246 / var(--tw-text-opacity))"}}},n.title)),m(Mw,null,m(Dw,null,m(Bw,null,m(Hw,{isActive:i},m(Ww,{src:l[r],alt:n.title})),l.length>1&&m(Uw,null,l.map((c,g)=>m(Vw,{key:g,isActive:g===r,onClick:()=>s(g)},m(Kw,{src:c,alt:`${n.title} - ${g+1}`})))))),m(Qw,null,m(Yw,null,n.category),m(Gw,null,n.title),m(Jw,null,m(Xw,null,"$",n.price),m(Zw,null,"One-time payment")),m(qw,null,n.description),m(eb,null,"Key Features"),m(tb,null,m(_n,null,m(Fn,null,"✓"),m("span",null,"Accurate signal detection with minimal lag")),m(_n,null,m(Fn,null,"✓"),m("span",null,"Customizable parameters for all trading styles")),m(_n,null,m(Fn,null,"✓"),m("span",null,"Visual and audio alerts included")),m(_n,null,m(Fn,null,"✓"),m("span",null,"Works on all timeframes and pairs")),m(_n,null,m(Fn,null,"✓"),m("span",null,"Lifetime updates and support")),m(_n,null,m(Fn,null,"✓"),m("span",null,"30-day money-back guarantee"))),m(nb,null,m(rb,null,m("span",null,"🛒"),m("span",null,"Buy Now")),m(ob,{onClick:()=>t("/indicator")},m("span",null,"←"),m("span",null,"Back"))))))):m(vd,null,m(wd,null,m(ze,{count:12,sizes:[30,60]})),m(bd,null,m(ze,{count:12,sizes:[40,80]})),m(ib,null,m(ab,null,"Product not found."),m(lb,{onClick:()=>t("/indicator")},"← Back to Indicator list")))}var Ri={},ub={get exports(){return Ri},set exports(e){Ri=e}},ua={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cb=P,db=Symbol.for("react.element"),fb=Symbol.for("react.fragment"),pb=Object.prototype.hasOwnProperty,gb=cb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mb={key:!0,ref:!0,__self:!0,__source:!0};function bg(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)pb.call(t,r)&&!mb.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:db,type:e,key:i,ref:a,props:o,_owner:gb.current}}ua.Fragment=fb;ua.jsx=bg;ua.jsxs=bg;(function(e){e.exports=ua})(ub);const $=Ri.jsx,hb=Ri.jsxs,yb=e=>$("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:$("path",{fill:"currentColor",d:"m16.172 11l-5.364-5.364l1.414-1.414L20 12l-7.778 7.778l-1.414-1.414L16.172 13H4v-2z"})}),vb=E.div({pointerEvents:"none",position:"absolute",top:"0px",left:"0px",height:"100%",width:"100%",opacity:"0.5","--tw-blur":"blur(4px)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)",zIndex:"0",userSelect:"none"}),wb=E.div({pointerEvents:"none",position:"absolute",top:"0px",left:"0px",height:"100%",width:"100%",userSelect:"none",zIndex:"2"}),bb=E.main({display:"flex",width:"100%",flex:"1 1 0%",flexDirection:"column",justifyContent:"center",paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"5rem",paddingBottom:"5rem"}),kb=E.div({position:"relative",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px",textAlign:"center",zIndex:"1"}),xb=E.h2({fontSize:"3rem",lineHeight:"2.5rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(71 85 105 / var(--tw-text-opacity))"}),Sb=E.p({marginTop:"1.5rem",fontSize:"1.875rem",lineHeight:"2.25rem","--tw-text-opacity":"1",color:"rgb(148 163 184 / var(--tw-text-opacity))"}),Cb=E.button({marginTop:"3rem",display:"inline-flex",alignItems:"center",gap:"1rem",borderRadius:"9999px","--tw-bg-opacity":"1",backgroundColor:"rgb(59 130 246 / var(--tw-bg-opacity))",paddingTop:"0.75rem",paddingBottom:"0.75rem",paddingLeft:"1.5rem",paddingRight:"1.5rem",textAlign:"center","--tw-text-opacity":"1",color:"rgb(239 246 255 / var(--tw-text-opacity))",outline:"2px solid transparent",outlineOffset:"2px",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms",":hover":{gap:"2rem"},":active":{"--tw-bg-opacity":"1",backgroundColor:"rgb(37 99 235 / var(--tw-bg-opacity))"}});function Eb(){const{t:e}=ns();return m(bb,null,m(vb,null,m(ze,{count:12,sizes:[30,60]})),m(wb,null,m(ze,{count:12,sizes:[40,80]})),m(kb,null,m(xb,null,e("intro.title")),m(Sb,null,e("intro.description")),m(Xs,{to:"/EA"},m(Cb,null,m("span",null,e("intro.link")),m(yb,null)))))}const Pb=`.markdown-body {
  color-scheme: dark;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  margin: 0;
  color: #c9d1d9;
  background-color: #0d1117;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
}

.markdown-body .octicon {
  display: inline-block;
  fill: currentColor;
  vertical-align: text-bottom;
}

.markdown-body h1:hover .anchor .octicon-link:before,
.markdown-body h2:hover .anchor .octicon-link:before,
.markdown-body h3:hover .anchor .octicon-link:before,
.markdown-body h4:hover .anchor .octicon-link:before,
.markdown-body h5:hover .anchor .octicon-link:before,
.markdown-body h6:hover .anchor .octicon-link:before {
  width: 16px;
  height: 16px;
  content: ' ';
  display: inline-block;
  background-color: currentColor;
  -webkit-mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
  mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
}

.markdown-body details,
.markdown-body figcaption,
.markdown-body figure {
  display: block;
}

.markdown-body summary {
  display: list-item;
}

.markdown-body [hidden] {
  display: none !important;
}

.markdown-body a {
  background-color: transparent;
  color: #58a6ff;
  text-decoration: none;
}

.markdown-body abbr[title] {
  border-bottom: none;
  text-decoration: underline dotted;
}

.markdown-body b,
.markdown-body strong {
  font-weight: 600;
}

.markdown-body dfn {
  font-style: italic;
}

.markdown-body h1 {
  margin: .67em 0;
  font-weight: 600;
  padding-bottom: .3em;
  font-size: 2em;
  border-bottom: 1px solid #21262d;
}

.markdown-body mark {
  background-color: rgba(187,128,9,0.15);
  color: #c9d1d9;
}

.markdown-body small {
  font-size: 90%;
}

.markdown-body sub,
.markdown-body sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

.markdown-body sub {
  bottom: -0.25em;
}

.markdown-body sup {
  top: -0.5em;
}

.markdown-body img {
  border-style: none;
  max-width: 100%;
  box-sizing: content-box;
  background-color: #0d1117;
}

.markdown-body code,
.markdown-body kbd,
.markdown-body pre,
.markdown-body samp {
  font-family: monospace;
  font-size: 1em;
}

.markdown-body figure {
  margin: 1em 40px;
}

.markdown-body hr {
  box-sizing: content-box;
  overflow: hidden;
  background: transparent;
  border-bottom: 1px solid #21262d;
  height: .25em;
  padding: 0;
  margin: 24px 0;
  background-color: #30363d;
  border: 0;
}

.markdown-body input {
  font: inherit;
  margin: 0;
  overflow: visible;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

.markdown-body [type=button],
.markdown-body [type=reset],
.markdown-body [type=submit] {
  -webkit-appearance: button;
}

.markdown-body [type=checkbox],
.markdown-body [type=radio] {
  box-sizing: border-box;
  padding: 0;
}

.markdown-body [type=number]::-webkit-inner-spin-button,
.markdown-body [type=number]::-webkit-outer-spin-button {
  height: auto;
}

.markdown-body [type=search]::-webkit-search-cancel-button,
.markdown-body [type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

.markdown-body ::-webkit-input-placeholder {
  color: inherit;
  opacity: .54;
}

.markdown-body ::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

.markdown-body a:hover {
  text-decoration: underline;
}

.markdown-body ::placeholder {
  color: #6e7681;
  opacity: 1;
}

.markdown-body hr::before {
  display: table;
  content: "";
}

.markdown-body hr::after {
  display: table;
  clear: both;
  content: "";
}

.markdown-body table {
  border-spacing: 0;
  border-collapse: collapse;
  display: block;
  width: max-content;
  max-width: 100%;
  overflow: auto;
}

.markdown-body td,
.markdown-body th {
  padding: 0;
}

.markdown-body details summary {
  cursor: pointer;
}

.markdown-body details:not([open])>*:not(summary) {
  display: none !important;
}

.markdown-body a:focus,
.markdown-body [role=button]:focus,
.markdown-body input[type=radio]:focus,
.markdown-body input[type=checkbox]:focus {
  outline: 2px solid #58a6ff;
  outline-offset: -2px;
  box-shadow: none;
}

.markdown-body a:focus:not(:focus-visible),
.markdown-body [role=button]:focus:not(:focus-visible),
.markdown-body input[type=radio]:focus:not(:focus-visible),
.markdown-body input[type=checkbox]:focus:not(:focus-visible) {
  outline: solid 1px transparent;
}

.markdown-body a:focus-visible,
.markdown-body [role=button]:focus-visible,
.markdown-body input[type=radio]:focus-visible,
.markdown-body input[type=checkbox]:focus-visible {
  outline: 2px solid #58a6ff;
  outline-offset: -2px;
  box-shadow: none;
}

.markdown-body a:not([class]):focus,
.markdown-body a:not([class]):focus-visible,
.markdown-body input[type=radio]:focus,
.markdown-body input[type=radio]:focus-visible,
.markdown-body input[type=checkbox]:focus,
.markdown-body input[type=checkbox]:focus-visible {
  outline-offset: 0;
}

.markdown-body kbd {
  display: inline-block;
  padding: 3px 5px;
  font: 11px ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
  line-height: 10px;
  color: #c9d1d9;
  vertical-align: middle;
  background-color: #161b22;
  border: solid 1px rgba(110,118,129,0.4);
  border-bottom-color: rgba(110,118,129,0.4);
  border-radius: 6px;
  box-shadow: inset 0 -1px 0 rgba(110,118,129,0.4);
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5,
.markdown-body h6 {
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 1.25;
}

.markdown-body h2 {
  font-weight: 600;
  padding-bottom: .3em;
  font-size: 1.5em;
  border-bottom: 1px solid #21262d;
}

.markdown-body h3 {
  font-weight: 600;
  font-size: 1.25em;
}

.markdown-body h4 {
  font-weight: 600;
  font-size: 1em;
}

.markdown-body h5 {
  font-weight: 600;
  font-size: .875em;
}

.markdown-body h6 {
  font-weight: 600;
  font-size: .85em;
  color: #8b949e;
}

.markdown-body p {
  margin-top: 0;
  margin-bottom: 10px;
}

.markdown-body blockquote {
  margin: 0;
  padding: 0 1em;
  color: #8b949e;
  border-left: .25em solid #30363d;
}

.markdown-body ul,
.markdown-body ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 2em;
}

.markdown-body ol ol,
.markdown-body ul ol {
  list-style-type: lower-roman;
}

.markdown-body ul ul ol,
.markdown-body ul ol ol,
.markdown-body ol ul ol,
.markdown-body ol ol ol {
  list-style-type: lower-alpha;
}

.markdown-body dd {
  margin-left: 0;
}

.markdown-body tt,
.markdown-body code,
.markdown-body samp {
  font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
  font-size: 12px;
}

.markdown-body pre {
  margin-top: 0;
  margin-bottom: 0;
  font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
  font-size: 12px;
  word-wrap: normal;
}

.markdown-body .octicon {
  display: inline-block;
  overflow: visible !important;
  vertical-align: text-bottom;
  fill: currentColor;
}

.markdown-body input::-webkit-outer-spin-button,
.markdown-body input::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
  appearance: none;
}

.markdown-body::before {
  display: table;
  content: "";
}

.markdown-body::after {
  display: table;
  clear: both;
  content: "";
}

.markdown-body>*:first-child {
  margin-top: 0 !important;
}

.markdown-body>*:last-child {
  margin-bottom: 0 !important;
}

.markdown-body a:not([href]) {
  color: inherit;
  text-decoration: none;
}

.markdown-body .absent {
  color: #f85149;
}

.markdown-body .anchor {
  float: left;
  padding-right: 4px;
  margin-left: -20px;
  line-height: 1;
}

.markdown-body .anchor:focus {
  outline: none;
}

.markdown-body p,
.markdown-body blockquote,
.markdown-body ul,
.markdown-body ol,
.markdown-body dl,
.markdown-body table,
.markdown-body pre,
.markdown-body details {
  margin-top: 0;
  margin-bottom: 16px;
}

.markdown-body blockquote>:first-child {
  margin-top: 0;
}

.markdown-body blockquote>:last-child {
  margin-bottom: 0;
}

.markdown-body h1 .octicon-link,
.markdown-body h2 .octicon-link,
.markdown-body h3 .octicon-link,
.markdown-body h4 .octicon-link,
.markdown-body h5 .octicon-link,
.markdown-body h6 .octicon-link {
  color: #c9d1d9;
  vertical-align: middle;
  visibility: hidden;
}

.markdown-body h1:hover .anchor,
.markdown-body h2:hover .anchor,
.markdown-body h3:hover .anchor,
.markdown-body h4:hover .anchor,
.markdown-body h5:hover .anchor,
.markdown-body h6:hover .anchor {
  text-decoration: none;
}

.markdown-body h1:hover .anchor .octicon-link,
.markdown-body h2:hover .anchor .octicon-link,
.markdown-body h3:hover .anchor .octicon-link,
.markdown-body h4:hover .anchor .octicon-link,
.markdown-body h5:hover .anchor .octicon-link,
.markdown-body h6:hover .anchor .octicon-link {
  visibility: visible;
}

.markdown-body h1 tt,
.markdown-body h1 code,
.markdown-body h2 tt,
.markdown-body h2 code,
.markdown-body h3 tt,
.markdown-body h3 code,
.markdown-body h4 tt,
.markdown-body h4 code,
.markdown-body h5 tt,
.markdown-body h5 code,
.markdown-body h6 tt,
.markdown-body h6 code {
  padding: 0 .2em;
  font-size: inherit;
}

.markdown-body summary h1,
.markdown-body summary h2,
.markdown-body summary h3,
.markdown-body summary h4,
.markdown-body summary h5,
.markdown-body summary h6 {
  display: inline-block;
}

.markdown-body summary h1 .anchor,
.markdown-body summary h2 .anchor,
.markdown-body summary h3 .anchor,
.markdown-body summary h4 .anchor,
.markdown-body summary h5 .anchor,
.markdown-body summary h6 .anchor {
  margin-left: -40px;
}

.markdown-body summary h1,
.markdown-body summary h2 {
  padding-bottom: 0;
  border-bottom: 0;
}

.markdown-body ul.no-list,
.markdown-body ol.no-list {
  padding: 0;
  list-style-type: none;
}

.markdown-body ol[type=a] {
  list-style-type: lower-alpha;
}

.markdown-body ol[type=A] {
  list-style-type: upper-alpha;
}

.markdown-body ol[type=i] {
  list-style-type: lower-roman;
}

.markdown-body ol[type=I] {
  list-style-type: upper-roman;
}

.markdown-body ol[type="1"] {
  list-style-type: decimal;
}

.markdown-body div>ol:not([type]) {
  list-style-type: decimal;
}

.markdown-body ul ul,
.markdown-body ul ol,
.markdown-body ol ol,
.markdown-body ol ul {
  margin-top: 0;
  margin-bottom: 0;
}

.markdown-body li>p {
  margin-top: 16px;
}

.markdown-body li+li {
  margin-top: .25em;
}

.markdown-body dl {
  padding: 0;
}

.markdown-body dl dt {
  padding: 0;
  margin-top: 16px;
  font-size: 1em;
  font-style: italic;
  font-weight: 600;
}

.markdown-body dl dd {
  padding: 0 16px;
  margin-bottom: 16px;
}

.markdown-body table th {
  font-weight: 600;
}

.markdown-body table th,
.markdown-body table td {
  padding: 6px 13px;
  border: 1px solid #30363d;
}

.markdown-body table tr {
  background-color: #0d1117;
  border-top: 1px solid #21262d;
}

.markdown-body table tr:nth-child(2n) {
  background-color: #161b22;
}

.markdown-body table img {
  background-color: transparent;
}

.markdown-body img[align=right] {
  padding-left: 20px;
}

.markdown-body img[align=left] {
  padding-right: 20px;
}

.markdown-body .emoji {
  max-width: none;
  vertical-align: text-top;
  background-color: transparent;
}

.markdown-body span.frame {
  display: block;
  overflow: hidden;
}

.markdown-body span.frame>span {
  display: block;
  float: left;
  width: auto;
  padding: 7px;
  margin: 13px 0 0;
  overflow: hidden;
  border: 1px solid #30363d;
}

.markdown-body span.frame span img {
  display: block;
  float: left;
}

.markdown-body span.frame span span {
  display: block;
  padding: 5px 0 0;
  clear: both;
  color: #c9d1d9;
}

.markdown-body span.align-center {
  display: block;
  overflow: hidden;
  clear: both;
}

.markdown-body span.align-center>span {
  display: block;
  margin: 13px auto 0;
  overflow: hidden;
  text-align: center;
}

.markdown-body span.align-center span img {
  margin: 0 auto;
  text-align: center;
}

.markdown-body span.align-right {
  display: block;
  overflow: hidden;
  clear: both;
}

.markdown-body span.align-right>span {
  display: block;
  margin: 13px 0 0;
  overflow: hidden;
  text-align: right;
}

.markdown-body span.align-right span img {
  margin: 0;
  text-align: right;
}

.markdown-body span.float-left {
  display: block;
  float: left;
  margin-right: 13px;
  overflow: hidden;
}

.markdown-body span.float-left span {
  margin: 13px 0 0;
}

.markdown-body span.float-right {
  display: block;
  float: right;
  margin-left: 13px;
  overflow: hidden;
}

.markdown-body span.float-right>span {
  display: block;
  margin: 13px auto 0;
  overflow: hidden;
  text-align: right;
}

.markdown-body code,
.markdown-body tt {
  padding: .2em .4em;
  margin: 0;
  font-size: 85%;
  white-space: break-spaces;
  background-color: rgba(110,118,129,0.4);
  border-radius: 6px;
}

.markdown-body code br,
.markdown-body tt br {
  display: none;
}

.markdown-body del code {
  text-decoration: inherit;
}

.markdown-body samp {
  font-size: 85%;
}

.markdown-body pre code {
  font-size: 100%;
}

.markdown-body pre>code {
  padding: 0;
  margin: 0;
  word-break: normal;
  white-space: pre;
  background: transparent;
  border: 0;
}

.markdown-body .highlight {
  margin-bottom: 16px;
}

.markdown-body .highlight pre {
  margin-bottom: 0;
  word-break: normal;
}

.markdown-body .highlight pre,
.markdown-body pre {
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  background-color: #161b22;
  border-radius: 6px;
}

.markdown-body pre code,
.markdown-body pre tt {
  display: inline;
  max-width: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  line-height: inherit;
  word-wrap: normal;
  background-color: transparent;
  border: 0;
}

.markdown-body .csv-data td,
.markdown-body .csv-data th {
  padding: 5px;
  overflow: hidden;
  font-size: 12px;
  line-height: 1;
  text-align: left;
  white-space: nowrap;
}

.markdown-body .csv-data .blob-num {
  padding: 10px 8px 9px;
  text-align: right;
  background: #0d1117;
  border: 0;
}

.markdown-body .csv-data tr {
  border-top: 0;
}

.markdown-body .csv-data th {
  font-weight: 600;
  background: #161b22;
  border-top: 0;
}

.markdown-body [data-footnote-ref]::before {
  content: "[";
}

.markdown-body [data-footnote-ref]::after {
  content: "]";
}

.markdown-body .footnotes {
  font-size: 12px;
  color: #8b949e;
  border-top: 1px solid #30363d;
}

.markdown-body .footnotes ol {
  padding-left: 16px;
}

.markdown-body .footnotes ol ul {
  display: inline-block;
  padding-left: 16px;
  margin-top: 16px;
}

.markdown-body .footnotes li {
  position: relative;
}

.markdown-body .footnotes li:target::before {
  position: absolute;
  top: -8px;
  right: -8px;
  bottom: -8px;
  left: -24px;
  pointer-events: none;
  content: "";
  border: 2px solid #1f6feb;
  border-radius: 6px;
}

.markdown-body .footnotes li:target {
  color: #c9d1d9;
}

.markdown-body .footnotes .data-footnote-backref g-emoji {
  font-family: monospace;
}

.markdown-body .pl-c {
  color: #8b949e;
}

.markdown-body .pl-c1,
.markdown-body .pl-s .pl-v {
  color: #79c0ff;
}

.markdown-body .pl-e,
.markdown-body .pl-en {
  color: #d2a8ff;
}

.markdown-body .pl-smi,
.markdown-body .pl-s .pl-s1 {
  color: #c9d1d9;
}

.markdown-body .pl-ent {
  color: #7ee787;
}

.markdown-body .pl-k {
  color: #ff7b72;
}

.markdown-body .pl-s,
.markdown-body .pl-pds,
.markdown-body .pl-s .pl-pse .pl-s1,
.markdown-body .pl-sr,
.markdown-body .pl-sr .pl-cce,
.markdown-body .pl-sr .pl-sre,
.markdown-body .pl-sr .pl-sra {
  color: #a5d6ff;
}

.markdown-body .pl-v,
.markdown-body .pl-smw {
  color: #ffa657;
}

.markdown-body .pl-bu {
  color: #f85149;
}

.markdown-body .pl-ii {
  color: #f0f6fc;
  background-color: #8e1519;
}

.markdown-body .pl-c2 {
  color: #f0f6fc;
  background-color: #b62324;
}

.markdown-body .pl-sr .pl-cce {
  font-weight: bold;
  color: #7ee787;
}

.markdown-body .pl-ml {
  color: #f2cc60;
}

.markdown-body .pl-mh,
.markdown-body .pl-mh .pl-en,
.markdown-body .pl-ms {
  font-weight: bold;
  color: #1f6feb;
}

.markdown-body .pl-mi {
  font-style: italic;
  color: #c9d1d9;
}

.markdown-body .pl-mb {
  font-weight: bold;
  color: #c9d1d9;
}

.markdown-body .pl-md {
  color: #ffdcd7;
  background-color: #67060c;
}

.markdown-body .pl-mi1 {
  color: #aff5b4;
  background-color: #033a16;
}

.markdown-body .pl-mc {
  color: #ffdfb6;
  background-color: #5a1e02;
}

.markdown-body .pl-mi2 {
  color: #c9d1d9;
  background-color: #1158c7;
}

.markdown-body .pl-mdr {
  font-weight: bold;
  color: #d2a8ff;
}

.markdown-body .pl-ba {
  color: #8b949e;
}

.markdown-body .pl-sg {
  color: #484f58;
}

.markdown-body .pl-corl {
  text-decoration: underline;
  color: #a5d6ff;
}

.markdown-body g-emoji {
  display: inline-block;
  min-width: 1ch;
  font-family: "Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 1em;
  font-style: normal !important;
  font-weight: 400;
  line-height: 1;
  vertical-align: -0.075em;
}

.markdown-body g-emoji img {
  width: 1em;
  height: 1em;
}

.markdown-body .task-list-item {
  list-style-type: none;
}

.markdown-body .task-list-item label {
  font-weight: 400;
}

.markdown-body .task-list-item.enabled label {
  cursor: pointer;
}

.markdown-body .task-list-item+.task-list-item {
  margin-top: 4px;
}

.markdown-body .task-list-item .handle {
  display: none;
}

.markdown-body .task-list-item-checkbox {
  margin: 0 .2em .25em -1.4em;
  vertical-align: middle;
}

.markdown-body .contains-task-list:dir(rtl) .task-list-item-checkbox {
  margin: 0 -1.6em .25em .2em;
}

.markdown-body .contains-task-list {
  position: relative;
}

.markdown-body .contains-task-list:hover .task-list-item-convert-container,
.markdown-body .contains-task-list:focus-within .task-list-item-convert-container {
  display: block;
  width: auto;
  height: 24px;
  overflow: visible;
  clip: auto;
}

.markdown-body ::-webkit-calendar-picker-indicator {
  filter: invert(50%);
}
`,Ob=`.markdown-body {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  margin: 0;
  color: #24292f;
  background-color: #ffffff;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
}

.markdown-body .octicon {
  display: inline-block;
  fill: currentColor;
  vertical-align: text-bottom;
}

.markdown-body h1:hover .anchor .octicon-link:before,
.markdown-body h2:hover .anchor .octicon-link:before,
.markdown-body h3:hover .anchor .octicon-link:before,
.markdown-body h4:hover .anchor .octicon-link:before,
.markdown-body h5:hover .anchor .octicon-link:before,
.markdown-body h6:hover .anchor .octicon-link:before {
  width: 16px;
  height: 16px;
  content: ' ';
  display: inline-block;
  background-color: currentColor;
  -webkit-mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
  mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
}

.markdown-body details,
.markdown-body figcaption,
.markdown-body figure {
  display: block;
}

.markdown-body summary {
  display: list-item;
}

.markdown-body [hidden] {
  display: none !important;
}

.markdown-body a {
  background-color: transparent;
  color: #0969da;
  text-decoration: none;
}

.markdown-body abbr[title] {
  border-bottom: none;
  text-decoration: underline dotted;
}

.markdown-body b,
.markdown-body strong {
  font-weight: 600;
}

.markdown-body dfn {
  font-style: italic;
}

.markdown-body h1 {
  margin: .67em 0;
  font-weight: 600;
  padding-bottom: .3em;
  font-size: 2em;
  border-bottom: 1px solid hsla(210,18%,87%,1);
}

.markdown-body mark {
  background-color: #fff8c5;
  color: #24292f;
}

.markdown-body small {
  font-size: 90%;
}

.markdown-body sub,
.markdown-body sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

.markdown-body sub {
  bottom: -0.25em;
}

.markdown-body sup {
  top: -0.5em;
}

.markdown-body img {
  border-style: none;
  max-width: 100%;
  box-sizing: content-box;
  background-color: #ffffff;
}

.markdown-body code,
.markdown-body kbd,
.markdown-body pre,
.markdown-body samp {
  font-family: monospace;
  font-size: 1em;
}

.markdown-body figure {
  margin: 1em 40px;
}

.markdown-body hr {
  box-sizing: content-box;
  overflow: hidden;
  background: transparent;
  border-bottom: 1px solid hsla(210,18%,87%,1);
  height: .25em;
  padding: 0;
  margin: 24px 0;
  background-color: #d0d7de;
  border: 0;
}

.markdown-body input {
  font: inherit;
  margin: 0;
  overflow: visible;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

.markdown-body [type=button],
.markdown-body [type=reset],
.markdown-body [type=submit] {
  -webkit-appearance: button;
}

.markdown-body [type=checkbox],
.markdown-body [type=radio] {
  box-sizing: border-box;
  padding: 0;
}

.markdown-body [type=number]::-webkit-inner-spin-button,
.markdown-body [type=number]::-webkit-outer-spin-button {
  height: auto;
}

.markdown-body [type=search]::-webkit-search-cancel-button,
.markdown-body [type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

.markdown-body ::-webkit-input-placeholder {
  color: inherit;
  opacity: .54;
}

.markdown-body ::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

.markdown-body a:hover {
  text-decoration: underline;
}

.markdown-body ::placeholder {
  color: #6e7781;
  opacity: 1;
}

.markdown-body hr::before {
  display: table;
  content: "";
}

.markdown-body hr::after {
  display: table;
  clear: both;
  content: "";
}

.markdown-body table {
  border-spacing: 0;
  border-collapse: collapse;
  display: block;
  width: max-content;
  max-width: 100%;
  overflow: auto;
}

.markdown-body td,
.markdown-body th {
  padding: 0;
}

.markdown-body details summary {
  cursor: pointer;
}

.markdown-body details:not([open])>*:not(summary) {
  display: none !important;
}

.markdown-body a:focus,
.markdown-body [role=button]:focus,
.markdown-body input[type=radio]:focus,
.markdown-body input[type=checkbox]:focus {
  outline: 2px solid #0969da;
  outline-offset: -2px;
  box-shadow: none;
}

.markdown-body a:focus:not(:focus-visible),
.markdown-body [role=button]:focus:not(:focus-visible),
.markdown-body input[type=radio]:focus:not(:focus-visible),
.markdown-body input[type=checkbox]:focus:not(:focus-visible) {
  outline: solid 1px transparent;
}

.markdown-body a:focus-visible,
.markdown-body [role=button]:focus-visible,
.markdown-body input[type=radio]:focus-visible,
.markdown-body input[type=checkbox]:focus-visible {
  outline: 2px solid #0969da;
  outline-offset: -2px;
  box-shadow: none;
}

.markdown-body a:not([class]):focus,
.markdown-body a:not([class]):focus-visible,
.markdown-body input[type=radio]:focus,
.markdown-body input[type=radio]:focus-visible,
.markdown-body input[type=checkbox]:focus,
.markdown-body input[type=checkbox]:focus-visible {
  outline-offset: 0;
}

.markdown-body kbd {
  display: inline-block;
  padding: 3px 5px;
  font: 11px ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
  line-height: 10px;
  color: #24292f;
  vertical-align: middle;
  background-color: #f6f8fa;
  border: solid 1px rgba(175,184,193,0.2);
  border-bottom-color: rgba(175,184,193,0.2);
  border-radius: 6px;
  box-shadow: inset 0 -1px 0 rgba(175,184,193,0.2);
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5,
.markdown-body h6 {
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 1.25;
}

.markdown-body h2 {
  font-weight: 600;
  padding-bottom: .3em;
  font-size: 1.5em;
  border-bottom: 1px solid hsla(210,18%,87%,1);
}

.markdown-body h3 {
  font-weight: 600;
  font-size: 1.25em;
}

.markdown-body h4 {
  font-weight: 600;
  font-size: 1em;
}

.markdown-body h5 {
  font-weight: 600;
  font-size: .875em;
}

.markdown-body h6 {
  font-weight: 600;
  font-size: .85em;
  color: #57606a;
}

.markdown-body p {
  margin-top: 0;
  margin-bottom: 10px;
}

.markdown-body blockquote {
  margin: 0;
  padding: 0 1em;
  color: #57606a;
  border-left: .25em solid #d0d7de;
}

.markdown-body ul,
.markdown-body ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 2em;
}

.markdown-body ol ol,
.markdown-body ul ol {
  list-style-type: lower-roman;
}

.markdown-body ul ul ol,
.markdown-body ul ol ol,
.markdown-body ol ul ol,
.markdown-body ol ol ol {
  list-style-type: lower-alpha;
}

.markdown-body dd {
  margin-left: 0;
}

.markdown-body tt,
.markdown-body code,
.markdown-body samp {
  font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
  font-size: 12px;
}

.markdown-body pre {
  margin-top: 0;
  margin-bottom: 0;
  font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
  font-size: 12px;
  word-wrap: normal;
}

.markdown-body .octicon {
  display: inline-block;
  overflow: visible !important;
  vertical-align: text-bottom;
  fill: currentColor;
}

.markdown-body input::-webkit-outer-spin-button,
.markdown-body input::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
  appearance: none;
}

.markdown-body::before {
  display: table;
  content: "";
}

.markdown-body::after {
  display: table;
  clear: both;
  content: "";
}

.markdown-body>*:first-child {
  margin-top: 0 !important;
}

.markdown-body>*:last-child {
  margin-bottom: 0 !important;
}

.markdown-body a:not([href]) {
  color: inherit;
  text-decoration: none;
}

.markdown-body .absent {
  color: #cf222e;
}

.markdown-body .anchor {
  float: left;
  padding-right: 4px;
  margin-left: -20px;
  line-height: 1;
}

.markdown-body .anchor:focus {
  outline: none;
}

.markdown-body p,
.markdown-body blockquote,
.markdown-body ul,
.markdown-body ol,
.markdown-body dl,
.markdown-body table,
.markdown-body pre,
.markdown-body details {
  margin-top: 0;
  margin-bottom: 16px;
}

.markdown-body blockquote>:first-child {
  margin-top: 0;
}

.markdown-body blockquote>:last-child {
  margin-bottom: 0;
}

.markdown-body h1 .octicon-link,
.markdown-body h2 .octicon-link,
.markdown-body h3 .octicon-link,
.markdown-body h4 .octicon-link,
.markdown-body h5 .octicon-link,
.markdown-body h6 .octicon-link {
  color: #24292f;
  vertical-align: middle;
  visibility: hidden;
}

.markdown-body h1:hover .anchor,
.markdown-body h2:hover .anchor,
.markdown-body h3:hover .anchor,
.markdown-body h4:hover .anchor,
.markdown-body h5:hover .anchor,
.markdown-body h6:hover .anchor {
  text-decoration: none;
}

.markdown-body h1:hover .anchor .octicon-link,
.markdown-body h2:hover .anchor .octicon-link,
.markdown-body h3:hover .anchor .octicon-link,
.markdown-body h4:hover .anchor .octicon-link,
.markdown-body h5:hover .anchor .octicon-link,
.markdown-body h6:hover .anchor .octicon-link {
  visibility: visible;
}

.markdown-body h1 tt,
.markdown-body h1 code,
.markdown-body h2 tt,
.markdown-body h2 code,
.markdown-body h3 tt,
.markdown-body h3 code,
.markdown-body h4 tt,
.markdown-body h4 code,
.markdown-body h5 tt,
.markdown-body h5 code,
.markdown-body h6 tt,
.markdown-body h6 code {
  padding: 0 .2em;
  font-size: inherit;
}

.markdown-body summary h1,
.markdown-body summary h2,
.markdown-body summary h3,
.markdown-body summary h4,
.markdown-body summary h5,
.markdown-body summary h6 {
  display: inline-block;
}

.markdown-body summary h1 .anchor,
.markdown-body summary h2 .anchor,
.markdown-body summary h3 .anchor,
.markdown-body summary h4 .anchor,
.markdown-body summary h5 .anchor,
.markdown-body summary h6 .anchor {
  margin-left: -40px;
}

.markdown-body summary h1,
.markdown-body summary h2 {
  padding-bottom: 0;
  border-bottom: 0;
}

.markdown-body ul.no-list,
.markdown-body ol.no-list {
  padding: 0;
  list-style-type: none;
}

.markdown-body ol[type=a] {
  list-style-type: lower-alpha;
}

.markdown-body ol[type=A] {
  list-style-type: upper-alpha;
}

.markdown-body ol[type=i] {
  list-style-type: lower-roman;
}

.markdown-body ol[type=I] {
  list-style-type: upper-roman;
}

.markdown-body ol[type="1"] {
  list-style-type: decimal;
}

.markdown-body div>ol:not([type]) {
  list-style-type: decimal;
}

.markdown-body ul ul,
.markdown-body ul ol,
.markdown-body ol ol,
.markdown-body ol ul {
  margin-top: 0;
  margin-bottom: 0;
}

.markdown-body li>p {
  margin-top: 16px;
}

.markdown-body li+li {
  margin-top: .25em;
}

.markdown-body dl {
  padding: 0;
}

.markdown-body dl dt {
  padding: 0;
  margin-top: 16px;
  font-size: 1em;
  font-style: italic;
  font-weight: 600;
}

.markdown-body dl dd {
  padding: 0 16px;
  margin-bottom: 16px;
}

.markdown-body table th {
  font-weight: 600;
}

.markdown-body table th,
.markdown-body table td {
  padding: 6px 13px;
  border: 1px solid #d0d7de;
}

.markdown-body table tr {
  background-color: #ffffff;
  border-top: 1px solid hsla(210,18%,87%,1);
}

.markdown-body table tr:nth-child(2n) {
  background-color: #f6f8fa;
}

.markdown-body table img {
  background-color: transparent;
}

.markdown-body img[align=right] {
  padding-left: 20px;
}

.markdown-body img[align=left] {
  padding-right: 20px;
}

.markdown-body .emoji {
  max-width: none;
  vertical-align: text-top;
  background-color: transparent;
}

.markdown-body span.frame {
  display: block;
  overflow: hidden;
}

.markdown-body span.frame>span {
  display: block;
  float: left;
  width: auto;
  padding: 7px;
  margin: 13px 0 0;
  overflow: hidden;
  border: 1px solid #d0d7de;
}

.markdown-body span.frame span img {
  display: block;
  float: left;
}

.markdown-body span.frame span span {
  display: block;
  padding: 5px 0 0;
  clear: both;
  color: #24292f;
}

.markdown-body span.align-center {
  display: block;
  overflow: hidden;
  clear: both;
}

.markdown-body span.align-center>span {
  display: block;
  margin: 13px auto 0;
  overflow: hidden;
  text-align: center;
}

.markdown-body span.align-center span img {
  margin: 0 auto;
  text-align: center;
}

.markdown-body span.align-right {
  display: block;
  overflow: hidden;
  clear: both;
}

.markdown-body span.align-right>span {
  display: block;
  margin: 13px 0 0;
  overflow: hidden;
  text-align: right;
}

.markdown-body span.align-right span img {
  margin: 0;
  text-align: right;
}

.markdown-body span.float-left {
  display: block;
  float: left;
  margin-right: 13px;
  overflow: hidden;
}

.markdown-body span.float-left span {
  margin: 13px 0 0;
}

.markdown-body span.float-right {
  display: block;
  float: right;
  margin-left: 13px;
  overflow: hidden;
}

.markdown-body span.float-right>span {
  display: block;
  margin: 13px auto 0;
  overflow: hidden;
  text-align: right;
}

.markdown-body code,
.markdown-body tt {
  padding: .2em .4em;
  margin: 0;
  font-size: 85%;
  white-space: break-spaces;
  background-color: rgba(175,184,193,0.2);
  border-radius: 6px;
}

.markdown-body code br,
.markdown-body tt br {
  display: none;
}

.markdown-body del code {
  text-decoration: inherit;
}

.markdown-body samp {
  font-size: 85%;
}

.markdown-body pre code {
  font-size: 100%;
}

.markdown-body pre>code {
  padding: 0;
  margin: 0;
  word-break: normal;
  white-space: pre;
  background: transparent;
  border: 0;
}

.markdown-body .highlight {
  margin-bottom: 16px;
}

.markdown-body .highlight pre {
  margin-bottom: 0;
  word-break: normal;
}

.markdown-body .highlight pre,
.markdown-body pre {
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  background-color: #f6f8fa;
  border-radius: 6px;
}

.markdown-body pre code,
.markdown-body pre tt {
  display: inline;
  max-width: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  line-height: inherit;
  word-wrap: normal;
  background-color: transparent;
  border: 0;
}

.markdown-body .csv-data td,
.markdown-body .csv-data th {
  padding: 5px;
  overflow: hidden;
  font-size: 12px;
  line-height: 1;
  text-align: left;
  white-space: nowrap;
}

.markdown-body .csv-data .blob-num {
  padding: 10px 8px 9px;
  text-align: right;
  background: #ffffff;
  border: 0;
}

.markdown-body .csv-data tr {
  border-top: 0;
}

.markdown-body .csv-data th {
  font-weight: 600;
  background: #f6f8fa;
  border-top: 0;
}

.markdown-body [data-footnote-ref]::before {
  content: "[";
}

.markdown-body [data-footnote-ref]::after {
  content: "]";
}

.markdown-body .footnotes {
  font-size: 12px;
  color: #57606a;
  border-top: 1px solid #d0d7de;
}

.markdown-body .footnotes ol {
  padding-left: 16px;
}

.markdown-body .footnotes ol ul {
  display: inline-block;
  padding-left: 16px;
  margin-top: 16px;
}

.markdown-body .footnotes li {
  position: relative;
}

.markdown-body .footnotes li:target::before {
  position: absolute;
  top: -8px;
  right: -8px;
  bottom: -8px;
  left: -24px;
  pointer-events: none;
  content: "";
  border: 2px solid #0969da;
  border-radius: 6px;
}

.markdown-body .footnotes li:target {
  color: #24292f;
}

.markdown-body .footnotes .data-footnote-backref g-emoji {
  font-family: monospace;
}

.markdown-body .pl-c {
  color: #6e7781;
}

.markdown-body .pl-c1,
.markdown-body .pl-s .pl-v {
  color: #0550ae;
}

.markdown-body .pl-e,
.markdown-body .pl-en {
  color: #8250df;
}

.markdown-body .pl-smi,
.markdown-body .pl-s .pl-s1 {
  color: #24292f;
}

.markdown-body .pl-ent {
  color: #116329;
}

.markdown-body .pl-k {
  color: #cf222e;
}

.markdown-body .pl-s,
.markdown-body .pl-pds,
.markdown-body .pl-s .pl-pse .pl-s1,
.markdown-body .pl-sr,
.markdown-body .pl-sr .pl-cce,
.markdown-body .pl-sr .pl-sre,
.markdown-body .pl-sr .pl-sra {
  color: #0a3069;
}

.markdown-body .pl-v,
.markdown-body .pl-smw {
  color: #953800;
}

.markdown-body .pl-bu {
  color: #82071e;
}

.markdown-body .pl-ii {
  color: #f6f8fa;
  background-color: #82071e;
}

.markdown-body .pl-c2 {
  color: #f6f8fa;
  background-color: #cf222e;
}

.markdown-body .pl-sr .pl-cce {
  font-weight: bold;
  color: #116329;
}

.markdown-body .pl-ml {
  color: #3b2300;
}

.markdown-body .pl-mh,
.markdown-body .pl-mh .pl-en,
.markdown-body .pl-ms {
  font-weight: bold;
  color: #0550ae;
}

.markdown-body .pl-mi {
  font-style: italic;
  color: #24292f;
}

.markdown-body .pl-mb {
  font-weight: bold;
  color: #24292f;
}

.markdown-body .pl-md {
  color: #82071e;
  background-color: #ffebe9;
}

.markdown-body .pl-mi1 {
  color: #116329;
  background-color: #dafbe1;
}

.markdown-body .pl-mc {
  color: #953800;
  background-color: #ffd8b5;
}

.markdown-body .pl-mi2 {
  color: #eaeef2;
  background-color: #0550ae;
}

.markdown-body .pl-mdr {
  font-weight: bold;
  color: #8250df;
}

.markdown-body .pl-ba {
  color: #57606a;
}

.markdown-body .pl-sg {
  color: #8c959f;
}

.markdown-body .pl-corl {
  text-decoration: underline;
  color: #0a3069;
}

.markdown-body g-emoji {
  display: inline-block;
  min-width: 1ch;
  font-family: "Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 1em;
  font-style: normal !important;
  font-weight: 400;
  line-height: 1;
  vertical-align: -0.075em;
}

.markdown-body g-emoji img {
  width: 1em;
  height: 1em;
}

.markdown-body .task-list-item {
  list-style-type: none;
}

.markdown-body .task-list-item label {
  font-weight: 400;
}

.markdown-body .task-list-item.enabled label {
  cursor: pointer;
}

.markdown-body .task-list-item+.task-list-item {
  margin-top: 4px;
}

.markdown-body .task-list-item .handle {
  display: none;
}

.markdown-body .task-list-item-checkbox {
  margin: 0 .2em .25em -1.4em;
  vertical-align: middle;
}

.markdown-body .contains-task-list:dir(rtl) .task-list-item-checkbox {
  margin: 0 -1.6em .25em .2em;
}

.markdown-body .contains-task-list {
  position: relative;
}

.markdown-body .contains-task-list:hover .task-list-item-convert-container,
.markdown-body .contains-task-list:focus-within .task-list-item-convert-container {
  display: block;
  width: auto;
  height: 24px;
  overflow: visible;
  clip: auto;
}

.markdown-body ::-webkit-calendar-picker-indicator {
  filter: invert(50%);
}
`,Lb=`/**
 * VS theme by Andrew Lock (https://andrewlock.net)
 * Inspired by Visual Studio syntax coloring
 */

code[class*="language-"],
pre[class*="language-"] {
	color: #393A34;
	font-family: "Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace;
	direction: ltr;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	font-size: .9em;
	line-height: 1.2em;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

pre > code[class*="language-"] {
	font-size: 1em;
}

pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
	background: #C1DEF1;
}

pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
code[class*="language-"]::selection, code[class*="language-"] ::selection {
	background: #C1DEF1;
}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
	margin: .5em 0;
	overflow: auto;
	border: 1px solid #dddddd;
	background-color: white;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .2em;
	padding-top: 1px;
	padding-bottom: 1px;
	background: #f8f8f8;
	border: 1px solid #dddddd;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: #008000;
	font-style: italic;
}

.token.namespace {
	opacity: .7;
}

.token.string {
	color: #A31515;
}

.token.punctuation,
.token.operator {
	color: #393A34; /* no highlight */
}

.token.url,
.token.symbol,
.token.number,
.token.boolean,
.token.variable,
.token.constant,
.token.inserted {
	color: #36acaa;
}

.token.atrule,
.token.keyword,
.token.attr-value,
.language-autohotkey .token.selector,
.language-json .token.boolean,
.language-json .token.number,
code[class*="language-css"] {
	color: #0000ff;
}

.token.function {
	color: #393A34;
}

.token.deleted,
.language-autohotkey .token.tag {
	color: #9a050f;
}

.token.selector,
.language-autohotkey .token.keyword {
	color: #00009f;
}

.token.important {
	color: #e90;
}

.token.important,
.token.bold {
	font-weight: bold;
}

.token.italic {
	font-style: italic;
}

.token.class-name,
.language-json .token.property {
	color: #2B91AF;
}

.token.tag,
.token.selector {
	color: #800000;
}

.token.attr-name,
.token.property,
.token.regex,
.token.entity {
	color: #ff0000;
}

.token.directive.tag .tag {
	background: #ffff00;
	color: #393A34;
}

/* overrides color-values for the Line Numbers plugin
 * http://prismjs.com/plugins/line-numbers/
 */
.line-numbers.line-numbers .line-numbers-rows {
	border-right-color: #a5a5a5;
}

.line-numbers .line-numbers-rows > span:before {
	color: #2B91AF;
}

/* overrides color-values for the Line Highlight plugin
* http://prismjs.com/plugins/line-highlight/
*/
.line-highlight.line-highlight {
	background: rgba(193, 222, 241, 0.2);
	background: -webkit-linear-gradient(left, rgba(193, 222, 241, 0.2) 70%, rgba(221, 222, 241, 0));
	background: linear-gradient(to right, rgba(193, 222, 241, 0.2) 70%, rgba(221, 222, 241, 0));
}
`,zb=`pre[class*="language-"],
code[class*="language-"] {
	color: #d4d4d4;
	font-size: 13px;
	text-shadow: none;
	font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace;
	direction: ltr;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	line-height: 1.5;
	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;
	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

pre[class*="language-"]::selection,
code[class*="language-"]::selection,
pre[class*="language-"] *::selection,
code[class*="language-"] *::selection {
	text-shadow: none;
	background: #264F78;
}

@media print {
	pre[class*="language-"],
	code[class*="language-"] {
		text-shadow: none;
	}
}

pre[class*="language-"] {
	padding: 1em;
	margin: .5em 0;
	overflow: auto;
	background: #1e1e1e;
}

:not(pre) > code[class*="language-"] {
	padding: .1em .3em;
	border-radius: .3em;
	color: #db4c69;
	background: #1e1e1e;
}
/*********************************************************
* Tokens
*/
.namespace {
	opacity: .7;
}

.token.doctype .token.doctype-tag {
	color: #569CD6;
}

.token.doctype .token.name {
	color: #9cdcfe;
}

.token.comment,
.token.prolog {
	color: #6a9955;
}

.token.punctuation,
.language-html .language-css .token.punctuation,
.language-html .language-javascript .token.punctuation {
	color: #d4d4d4;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.inserted,
.token.unit {
	color: #b5cea8;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.deleted {
	color: #ce9178;
}

.language-css .token.string.url {
	text-decoration: underline;
}

.token.operator,
.token.entity {
	color: #d4d4d4;
}

.token.operator.arrow {
	color: #569CD6;
}

.token.atrule {
	color: #ce9178;
}

.token.atrule .token.rule {
	color: #c586c0;
}

.token.atrule .token.url {
	color: #9cdcfe;
}

.token.atrule .token.url .token.function {
	color: #dcdcaa;
}

.token.atrule .token.url .token.punctuation {
	color: #d4d4d4;
}

.token.keyword {
	color: #569CD6;
}

.token.keyword.module,
.token.keyword.control-flow {
	color: #c586c0;
}

.token.function,
.token.function .token.maybe-class-name {
	color: #dcdcaa;
}

.token.regex {
	color: #d16969;
}

.token.important {
	color: #569cd6;
}

.token.italic {
	font-style: italic;
}

.token.constant {
	color: #9cdcfe;
}

.token.class-name,
.token.maybe-class-name {
	color: #4ec9b0;
}

.token.console {
	color: #9cdcfe;
}

.token.parameter {
	color: #9cdcfe;
}

.token.interpolation {
	color: #9cdcfe;
}

.token.punctuation.interpolation-punctuation {
	color: #569cd6;
}

.token.boolean {
	color: #569cd6;
}

.token.property,
.token.variable,
.token.imports .token.maybe-class-name,
.token.exports .token.maybe-class-name {
	color: #9cdcfe;
}

.token.selector {
	color: #d7ba7d;
}

.token.escape {
	color: #d7ba7d;
}

.token.tag {
	color: #569cd6;
}

.token.tag .token.punctuation {
	color: #808080;
}

.token.cdata {
	color: #808080;
}

.token.attr-name {
	color: #9cdcfe;
}

.token.attr-value,
.token.attr-value .token.punctuation {
	color: #ce9178;
}

.token.attr-value .token.punctuation.attr-equals {
	color: #d4d4d4;
}

.token.entity {
	color: #569cd6;
}

.token.namespace {
	color: #4ec9b0;
}
/*********************************************************
* Language Specific
*/

pre[class*="language-javascript"],
code[class*="language-javascript"],
pre[class*="language-jsx"],
code[class*="language-jsx"],
pre[class*="language-typescript"],
code[class*="language-typescript"],
pre[class*="language-tsx"],
code[class*="language-tsx"] {
	color: #9cdcfe;
}

pre[class*="language-css"],
code[class*="language-css"] {
	color: #ce9178;
}

pre[class*="language-html"],
code[class*="language-html"] {
	color: #d4d4d4;
}

.language-regex .token.anchor {
	color: #dcdcaa;
}

.language-html .token.punctuation {
	color: #808080;
}
/*********************************************************
* Line highlighting
*/
pre[class*="language-"] > code[class*="language-"] {
	position: relative;
	z-index: 1;
}

.line-highlight.line-highlight {
	background: #f7ebc6;
	box-shadow: inset 5px 0 0 #f7d87c;
	z-index: 0;
}
`,Rb=e=>$("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:$("path",{fill:"currentColor",d:"M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM7 6h4v4H7V6zm0 6h10v2H7v-2zm0 4h10v2H7v-2zm6-9h4v2h-4V7z"})}),Tb=e=>$("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:$("path",{fill:"currentColor",d:"M3 3h8v8H3V3zm0 10h8v8H3v-8zM13 3h8v8h-8V3zm0 10h8v8h-8v-8zm2-8v4h4V5h-4zm0 10v4h4v-4h-4zM5 5v4h4V5H5zm0 10v4h4v-4H5z"})}),Nb=e=>$("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:$("path",{fill:"currentColor",d:"M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588c-.094-.117.34.427.433.539c.19.227.33.365.44.438c.204.137.587.196 1.15.14c.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292c-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047c.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308c1.477-.933 2.613-1.226 3.422-1.096c.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19c.691.936 1.058 2.045 1.058 3.293c0 3.757-1.674 5.665-4.642 6.392c.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716a1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446l.005-.705c.005-.708.007-1.338.007-1.998c0-.697-.183-1.152-.425-1.36c-.661-.57-.326-1.655.54-1.752c2.967-.333 4.337-1.482 4.337-4.66c0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947c-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66c.865.097 1.201 1.177.544 1.748c-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z"})}),_b=e=>$("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:$("path",{fill:"currentColor",d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333A8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248A15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z"})}),Fb=e=>$("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:$("path",{fill:"currentColor",d:"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"})}),$b=e=>$("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:$("path",{fill:"currentColor",d:"M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938A7.999 7.999 0 0 0 4 12z"})}),Ab=e=>$("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:$("path",{fill:"currentColor",d:"m21 15l-6 5.996L4.002 21A.998.998 0 0 1 3 20.007V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.456.993 1.002V15zM19 5H5v14h8v-5a1 1 0 0 1 .883-.993L14 13l5-.001V5zm-.829 9.999L15 15v3.169l3.171-3.17z"})}),jb=e=>$("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:$("path",{fill:"currentColor",d:"M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8a4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05L3.515 4.93zM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414l-2.121-2.121zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414l2.121-2.121zM5.636 16.95l1.414 1.414l-2.121 2.121l-1.414-1.414l2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"})});function Ib(e,t){const[n,r]=P.useState(()=>{try{const i=window.localStorage.getItem(e);return i?JSON.parse(i):t}catch{return t}}),o=P.useCallback(i=>{r(i),window.localStorage.setItem(e,JSON.stringify(i))},[]);return[n,o]}const Mb=P.createContext(!1);function Db(){const[e,t]=Ib("dark-mode-enabled"),n=window.matchMedia("(prefers-color-scheme: dark)").matches,r=e??n;return P.useEffect(()=>{r?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[r]),[r,t]}var xd={},Bb={get exports(){return xd},set exports(e){xd=e}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var o=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,a={},l={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function u(d){return d instanceof s?new s(d.type,u(d.content),d.alias):Array.isArray(d)?d.map(u):d.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(u){return Object.prototype.toString.call(u).slice(8,-1)},objId:function(u){return u.__id||Object.defineProperty(u,"__id",{value:++i}),u.__id},clone:function u(d,y){y=y||{};var k,x;switch(l.util.type(d)){case"Object":if(x=l.util.objId(d),y[x])return y[x];k={},y[x]=k;for(var C in d)d.hasOwnProperty(C)&&(k[C]=u(d[C],y));return k;case"Array":return x=l.util.objId(d),y[x]?y[x]:(k=[],y[x]=k,d.forEach(function(O,L){k[L]=u(O,y)}),k);default:return d}},getLanguage:function(u){for(;u;){var d=o.exec(u.className);if(d)return d[1].toLowerCase();u=u.parentElement}return"none"},setLanguage:function(u,d){u.className=u.className.replace(RegExp(o,"gi"),""),u.classList.add("language-"+d)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(k){var u=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(k.stack)||[])[1];if(u){var d=document.getElementsByTagName("script");for(var y in d)if(d[y].src==u)return d[y]}return null}},isActive:function(u,d,y){for(var k="no-"+d;u;){var x=u.classList;if(x.contains(d))return!0;if(x.contains(k))return!1;u=u.parentElement}return!!y}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(u,d){var y=l.util.clone(l.languages[u]);for(var k in d)y[k]=d[k];return y},insertBefore:function(u,d,y,k){k=k||l.languages;var x=k[u],C={};for(var O in x)if(x.hasOwnProperty(O)){if(O==d)for(var L in y)y.hasOwnProperty(L)&&(C[L]=y[L]);y.hasOwnProperty(O)||(C[O]=x[O])}var T=k[u];return k[u]=C,l.languages.DFS(l.languages,function(j,re){re===T&&j!=u&&(this[j]=C)}),C},DFS:function u(d,y,k,x){x=x||{};var C=l.util.objId;for(var O in d)if(d.hasOwnProperty(O)){y.call(d,O,d[O],k||O);var L=d[O],T=l.util.type(L);T==="Object"&&!x[C(L)]?(x[C(L)]=!0,u(L,y,null,x)):T==="Array"&&!x[C(L)]&&(x[C(L)]=!0,u(L,y,O,x))}}},plugins:{},highlightAll:function(u,d){l.highlightAllUnder(document,u,d)},highlightAllUnder:function(u,d,y){var k={callback:y,container:u,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};l.hooks.run("before-highlightall",k),k.elements=Array.prototype.slice.apply(k.container.querySelectorAll(k.selector)),l.hooks.run("before-all-elements-highlight",k);for(var x=0,C;C=k.elements[x++];)l.highlightElement(C,d===!0,k.callback)},highlightElement:function(u,d,y){var k=l.util.getLanguage(u),x=l.languages[k];l.util.setLanguage(u,k);var C=u.parentElement;C&&C.nodeName.toLowerCase()==="pre"&&l.util.setLanguage(C,k);var O=u.textContent,L={element:u,language:k,grammar:x,code:O};function T(re){L.highlightedCode=re,l.hooks.run("before-insert",L),L.element.innerHTML=L.highlightedCode,l.hooks.run("after-highlight",L),l.hooks.run("complete",L),y&&y.call(L.element)}if(l.hooks.run("before-sanity-check",L),C=L.element.parentElement,C&&C.nodeName.toLowerCase()==="pre"&&!C.hasAttribute("tabindex")&&C.setAttribute("tabindex","0"),!L.code){l.hooks.run("complete",L),y&&y.call(L.element);return}if(l.hooks.run("before-highlight",L),!L.grammar){T(l.util.encode(L.code));return}if(d&&r.Worker){var j=new Worker(l.filename);j.onmessage=function(re){T(re.data)},j.postMessage(JSON.stringify({language:L.language,code:L.code,immediateClose:!0}))}else T(l.highlight(L.code,L.grammar,L.language))},highlight:function(u,d,y){var k={code:u,grammar:d,language:y};if(l.hooks.run("before-tokenize",k),!k.grammar)throw new Error('The language "'+k.language+'" has no grammar.');return k.tokens=l.tokenize(k.code,k.grammar),l.hooks.run("after-tokenize",k),s.stringify(l.util.encode(k.tokens),k.language)},tokenize:function(u,d){var y=d.rest;if(y){for(var k in y)d[k]=y[k];delete d.rest}var x=new p;return h(x,x.head,u),g(u,x,d,x.head,0),b(x)},hooks:{all:{},add:function(u,d){var y=l.hooks.all;y[u]=y[u]||[],y[u].push(d)},run:function(u,d){var y=l.hooks.all[u];if(!(!y||!y.length))for(var k=0,x;x=y[k++];)x(d)}},Token:s};r.Prism=l;function s(u,d,y,k){this.type=u,this.content=d,this.alias=y,this.length=(k||"").length|0}s.stringify=function u(d,y){if(typeof d=="string")return d;if(Array.isArray(d)){var k="";return d.forEach(function(T){k+=u(T,y)}),k}var x={type:d.type,content:u(d.content,y),tag:"span",classes:["token",d.type],attributes:{},language:y},C=d.alias;C&&(Array.isArray(C)?Array.prototype.push.apply(x.classes,C):x.classes.push(C)),l.hooks.run("wrap",x);var O="";for(var L in x.attributes)O+=" "+L+'="'+(x.attributes[L]||"").replace(/"/g,"&quot;")+'"';return"<"+x.tag+' class="'+x.classes.join(" ")+'"'+O+">"+x.content+"</"+x.tag+">"};function c(u,d,y,k){u.lastIndex=d;var x=u.exec(y);if(x&&k&&x[1]){var C=x[1].length;x.index+=C,x[0]=x[0].slice(C)}return x}function g(u,d,y,k,x,C){for(var O in y)if(!(!y.hasOwnProperty(O)||!y[O])){var L=y[O];L=Array.isArray(L)?L:[L];for(var T=0;T<L.length;++T){if(C&&C.cause==O+","+T)return;var j=L[T],re=j.inside,lt=!!j.lookbehind,Ue=!!j.greedy,Pn=j.alias;if(Ue&&!j.pattern.global){var st=j.pattern.toString().match(/[imsuy]*$/)[0];j.pattern=RegExp(j.pattern.source,st+"g")}for(var He=j.pattern||j,R=k.next,_=x;R!==d.tail&&!(C&&_>=C.reach);_+=R.value.length,R=R.next){var F=R.value;if(d.length>u.length)return;if(!(F instanceof s)){var M=1,D;if(Ue){if(D=c(He,_,u,lt),!D||D.index>=u.length)break;var le=D.index,$t=D.index+D[0].length,Z=_;for(Z+=R.value.length;le>=Z;)R=R.next,Z+=R.value.length;if(Z-=R.value.length,_=Z,R.value instanceof s)continue;for(var We=R;We!==d.tail&&(Z<$t||typeof We.value=="string");We=We.next)M++,Z+=We.value.length;M--,F=u.slice(_,Z),D.index-=_}else if(D=c(He,0,F,lt),!D)continue;var le=D.index,Pe=D[0],un=F.slice(0,le),gr=F.slice(le+Pe.length),cn=_+F.length;C&&cn>C.reach&&(C.reach=cn);var Xe=R.prev;un&&(Xe=h(d,Xe,un),_+=un.length),v(d,Xe,M);var mr=new s(O,re?l.tokenize(Pe,re):Pe,Pn,Pe);if(R=h(d,Xe,mr),gr&&h(d,R,gr),M>1){var On={cause:O+","+T,reach:cn};g(u,d,y,R.prev,_,On),C&&On.reach>C.reach&&(C.reach=On.reach)}}}}}}function p(){var u={value:null,prev:null,next:null},d={value:null,prev:u,next:null};u.next=d,this.head=u,this.tail=d,this.length=0}function h(u,d,y){var k=d.next,x={value:y,prev:d,next:k};return d.next=x,k.prev=x,u.length++,x}function v(u,d,y){for(var k=d.next,x=0;x<y&&k!==u.tail;x++)k=k.next;d.next=k,k.prev=d,u.length-=x}function b(u){for(var d=[],y=u.head.next;y!==u.tail;)d.push(y.value),y=y.next;return d}if(!r.document)return r.addEventListener&&(l.disableWorkerMessageHandler||r.addEventListener("message",function(u){var d=JSON.parse(u.data),y=d.language,k=d.code,x=d.immediateClose;r.postMessage(l.highlight(k,l.languages[y],y)),x&&r.close()},!1)),l;var w=l.util.currentScript();w&&(l.filename=w.src,w.hasAttribute("data-manual")&&(l.manual=!0));function S(){l.manual||l.highlightAll()}if(!l.manual){var f=document.readyState;f==="loading"||f==="interactive"&&w&&w.defer?document.addEventListener("DOMContentLoaded",S):window.requestAnimationFrame?window.requestAnimationFrame(S):window.setTimeout(S,16)}return l}(t);e.exports&&(e.exports=n),typeof Nu<"u"&&(Nu.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(o,i){var a={};a["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[i]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var l={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};l["language-"+i]={pattern:/[\s\S]+/,inside:n.languages[i]};var s={};s[o]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return o}),"i"),lookbehind:!0,greedy:!0,inside:l},n.languages.insertBefore("markup","cdata",s)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(r,o){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[o,"language-"+o],inside:n.languages[o]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(r){var o=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+o.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+o.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+o.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+o.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:o,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var i=r.languages.markup;i&&(i.tag.addInlined("style","css"),i.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",o=function(w,S){return"✖ Error "+w+" while fetching file: "+S},i="✖ Error: File does not exist or is empty",a={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},l="data-src-status",s="loading",c="loaded",g="failed",p="pre[data-src]:not(["+l+'="'+c+'"]):not(['+l+'="'+s+'"])';function h(w,S,f){var u=new XMLHttpRequest;u.open("GET",w,!0),u.onreadystatechange=function(){u.readyState==4&&(u.status<400&&u.responseText?S(u.responseText):u.status>=400?f(o(u.status,u.statusText)):f(i))},u.send(null)}function v(w){var S=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(w||"");if(S){var f=Number(S[1]),u=S[2],d=S[3];return u?d?[f,Number(d)]:[f,void 0]:[f,f]}}n.hooks.add("before-highlightall",function(w){w.selector+=", "+p}),n.hooks.add("before-sanity-check",function(w){var S=w.element;if(S.matches(p)){w.code="",S.setAttribute(l,s);var f=S.appendChild(document.createElement("CODE"));f.textContent=r;var u=S.getAttribute("data-src"),d=w.language;if(d==="none"){var y=(/\.(\w+)$/.exec(u)||[,"none"])[1];d=a[y]||y}n.util.setLanguage(f,d),n.util.setLanguage(S,d);var k=n.plugins.autoloader;k&&k.loadLanguages(d),h(u,function(x){S.setAttribute(l,c);var C=v(S.getAttribute("data-range"));if(C){var O=x.split(/\r\n?|\n/g),L=C[0],T=C[1]==null?O.length:C[1];L<0&&(L+=O.length),L=Math.max(0,Math.min(L-1,O.length)),T<0&&(T+=O.length),T=Math.max(0,Math.min(T,O.length)),x=O.slice(L,T).join(`
`),S.hasAttribute("data-start")||S.setAttribute("data-start",String(L+1))}f.textContent=x,n.highlightElement(f)},function(x){S.setAttribute(l,g),f.textContent=x})}}),n.plugins.fileHighlight={highlight:function(S){for(var f=(S||document).querySelectorAll(p),u=0,d;d=f[u++];)n.highlightElement(d)}};var b=!1;n.fileHighlight=function(){b||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),b=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Bb);async function Sd(e,t){const n=document.getElementById(e);n&&n.remove();const r=document.createElement("style");r.setAttribute("id",e),r.textContent=t,document.head.appendChild(r)}const Ub="Agus Pujianto",Hb="aguspujiantoo@gmail.com",Wb="dagangduit.github.io",Vb=E.div`
  ${{position:"relative",display:"flex",minHeight:"100vh",flexDirection:"column",paddingBottom:"4rem"}}
`,Kb=E.header({height:"5rem",width:"100%"}),Qb=E.div({marginLeft:"auto",marginRight:"auto",display:"flex",height:"100%",maxWidth:"1024px",alignItems:"center",paddingLeft:"2rem",paddingRight:"2rem",fontWeight:"600","--tw-text-opacity":"1",color:"rgb(100 116 139 / var(--tw-text-opacity))"}),Yb=E(Xs)`
  ${{fontSize:"1.125rem",lineHeight:"1.75rem"}}
`,Gb=E.span({marginLeft:"0.125rem",marginRight:"0.125rem","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))"}),Jb=E.nav({marginLeft:"auto",display:"grid",gridAutoFlow:"column",gap:"0.75rem",lineHeight:"1.25rem","@media (min-width: 1024px)":{gap:"1.5rem"}}),kg={cursor:"pointer",opacity:"0.6",":hover":{"--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))",opacity:"1"}},Io=E.a`
  ${kg}
`,Ua=E(by)`
  ${kg}

  &.active {
    ${{"--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))",opacity:"1"}}
  }
`,Xb=E.div({height:"100%",width:"1px","--tw-bg-opacity":"1",backgroundColor:"rgb(229 231 235 / var(--tw-bg-opacity))",".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(31 41 55 / var(--tw-bg-opacity))"}}),Zb=E.footer({position:"absolute",bottom:"1rem",left:"0px",width:"100%",userSelect:"none","> :not([hidden]) ~ :not([hidden])":{"--tw-space-x-reverse":"0",marginRight:"calc(0.5rem * var(--tw-space-x-reverse))",marginLeft:"calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))"},textAlign:"center",fontSize:"0.875rem",lineHeight:"1.25rem","--tw-text-opacity":"1",color:"rgb(203 213 225 / var(--tw-text-opacity))"}),qb=E.div({marginLeft:"auto",marginRight:"auto",maxWidth:"1024px",".dark &":{"--tw-text-opacity":"1",color:"rgb(30 41 59 / var(--tw-text-opacity))"}});function ek(){const{t:e}=ns(),[t,n]=Db();P.useEffect(()=>{Sd("prism-theme",t?zb:Lb),Sd("markdown-theme",t?Pb:Ob)},[t]);const r=P.useCallback(()=>{n(!t)},[t]),o=P.useCallback(()=>{window.open("https://dagangduit.com/","_blank")},[]);return m(Mb.Provider,{value:t},m(Vb,null,m(Kb,null,m(Qb,null,m(Yb,{to:"/"},m("span",null),m(Gb,null,Ub)),m(Jb,null,m(Ua,{to:"/EA"},m(Rb,{css:{display:"inline","@media (min-width: 1024px)":{display:"none"}}}),m("span",{css:{display:"none","@media (min-width: 1024px)":{display:"inline"}}},e("tab.EA"))),m(Ua,{to:"/indicator"},m(Ab,{css:{display:"inline","@media (min-width: 1024px)":{display:"none"}}}),m("span",{css:{display:"none","@media (min-width: 1024px)":{display:"inline"}}},e("tab.indicator"))),m(Ua,{to:"/projects"},m(Tb,{css:{display:"inline","@media (min-width: 1024px)":{display:"none"}}}),m("span",{css:{display:"none","@media (min-width: 1024px)":{display:"inline"}}},e("tab.projects"))),m(Xb,null),m(Io,{href:`mailto:${Hb}`},m(Fb,null)),m(Io,{href:Wb,target:"_blank"},m(Nb,null)),m(Io,{onClick:o},m(_b,null)),m(Io,{onClick:r},m(t?jb:$b,null))))),m(Hl,null),m(Zb,null,m(qb,null,m("a",{css:{":hover":{"--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))"}},href:"https://creativecommons.org/licenses/by-nc-sa/4.0/"},"CC BY-NC-SA 4.0"),m("span",{css:{marginLeft:"0.5rem"}},"2016-present © varHarrie")))))}const tk=e=>hb("svg",{viewBox:"0 0 16 16",width:"1.2em",height:"1.2em",...e,children:[$("path",{fill:"currentColor",d:"M8 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Z"}),$("path",{fill:"currentColor",d:"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0a6.5 6.5 0 0 0-13 0Z"})]}),nk=e=>$("svg",{viewBox:"0 0 16 16",width:"1.2em",height:"1.2em",...e,children:$("path",{fill:"currentColor",d:"M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0Z"})}),rk=e=>$("svg",{viewBox:"0 0 16 16",width:"1.2em",height:"1.2em",...e,children:$("path",{fill:"currentColor",d:"M8 .25a.75.75 0 0 1 .673.418l1.882 3.815l4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97l.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45l2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084l2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456l-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183l-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"})}),ok=e=>$("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:$("path",{fill:"currentColor",d:"m24 12l-5.657 5.657l-1.414-1.414L21.172 12l-4.243-4.243l1.414-1.414L24 12zM2.828 12l4.243 4.243l-1.414 1.414L0 12l5.657-5.657L7.07 7.757L2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"})}),ik=e=>$("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:$("path",{fill:"currentColor",d:"M2.8 14h2.04l-.545 2.725l5.744 2.154l7.227-2.41L18.36 11H3.4l.4-2h14.96l.8-4H4.6L5 3h17l-3 15l-9 3l-8-3z"})}),ak=e=>$("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:$("path",{fill:"currentColor",d:"m12 18.178l-4.62-1.256l-.328-3.544h2.27l.158 1.844l2.52.667l2.52-.667l.26-2.866H6.96l-.635-6.678h11.35l-.227 2.21H8.822l.204 2.256h8.217l-.624 6.778L12 18.178zM3 2h18l-1.623 18L12 22l-7.377-2L3 2zm2.188 2L6.49 18.434L12 19.928l5.51-1.494L18.812 4H5.188z"})}),lk=e=>$("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:$("path",{fill:"currentColor",d:"M3.316 3L12 18l8.684-15H23L12 22L1 3h2.316zm4.342 0L12 10.5L16.342 3h2.316L12 14.5L5.342 3h2.316z"})}),sk=e=>$("svg",{viewBox:"0 0 15 15",width:"1.2em",height:"1.2em",...e,children:$("path",{fill:"none",stroke:"currentColor",d:"M12.5 8v-.167c0-.736-.597-1.333-1.333-1.333H10a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 0 1 0 3h-1A1.5 1.5 0 0 1 8.5 11m-2-5v5a1.5 1.5 0 0 1-3 0M.5.5h14v14H.5V.5Z"})}),uk=e=>$("svg",{viewBox:"0 0 15 15",width:"1.2em",height:"1.2em",...e,children:$("path",{fill:"none",stroke:"currentColor",d:"M12.5 8v-.167c0-.736-.597-1.333-1.333-1.333H10a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 0 1 0 3h-1A1.5 1.5 0 0 1 8.5 11M8 6.5H3m2.5 0V13M.5.5h14v14H.5V.5Z"})}),ck=e=>$("svg",{viewBox:"0 0 32 32",width:"1.2em",height:"1.2em",...e,children:$("path",{fill:"#368832",d:"M19.792 7.071h2.553v2.553H24.9V7.071h2.552v2.553H30v2.552h-2.55v2.551H30v2.553h-2.551v2.552H24.9v-2.55h-2.55v2.552h-2.557v-2.55H17.24v-2.559h2.553v-2.546H17.24V9.622h2.554Zm2.553 7.658H24.9v-2.553h-2.555Zm-7.656 9.284a10.2 10.2 0 0 1-4.653.915a7.6 7.6 0 0 1-5.89-2.336A8.839 8.839 0 0 1 2 16.367a9.436 9.436 0 0 1 2.412-6.719a8.181 8.181 0 0 1 6.259-2.577a11.1 11.1 0 0 1 4.018.638v3.745a6.81 6.81 0 0 0-3.723-1.036a4.793 4.793 0 0 0-3.7 1.529a5.879 5.879 0 0 0-1.407 4.142a5.774 5.774 0 0 0 1.328 3.992a4.551 4.551 0 0 0 3.575 1.487a7.288 7.288 0 0 0 3.927-1.108Z"})}),dk=E.div({position:"relative",borderRadius:"0.375rem","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))",padding:"0.75rem",paddingLeft:"3.5rem","--tw-shadow":"0 1px 2px 0 rgb(0 0 0 / 0.05)","--tw-shadow-colored":"0 1px 2px 0 var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)","--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)","--tw-ring-color":"rgb(71 85 105 / 0.05)",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms",":hover":{"--tw-shadow":"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)","--tw-shadow-colored":"0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"},".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(17 24 39 / var(--tw-bg-opacity))"}}),fk=E.div`
  ${{position:"absolute",top:"0.75rem",left:"0.75rem",display:"flex",height:"2.25rem",width:"2.25rem",alignItems:"center",justifyContent:"center",overflow:"hidden",borderRadius:"0.375rem",fontWeight:"700"}}

  &::before {
    ${{position:"absolute",top:"0px",left:"0px",display:"block",height:"100%",width:"100%",opacity:"0.2",content:"''"}}
    background-color: currentColor;
  }
`,pk=E.a({display:"block",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))"}),gk=E.div`
  ${{marginTop:"0.5rem",overflow:"hidden",fontSize:"0.875rem",lineHeight:"1.25rem","--tw-text-opacity":"1",color:"rgb(148 163 184 / var(--tw-text-opacity))"}}

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,mk=E.ul({marginTop:"0.5rem",display:"flex",minWidth:"0px","> :not([hidden]) ~ :not([hidden])":{"--tw-space-x-reverse":"0",marginRight:"calc(0.75rem * var(--tw-space-x-reverse))",marginLeft:"calc(0.75rem * calc(1 - var(--tw-space-x-reverse)))"},fontSize:"0.875rem",lineHeight:"1.25rem","--tw-text-opacity":"1",color:"rgb(148 163 184 / var(--tw-text-opacity))"}),Ha=E.li({display:"flex",alignItems:"center"}),Cd={default:{component:ok,color:""},TypeScript:{component:uk,color:"#3178C6"},JavaScript:{component:sk,color:"#FCD002"},HTML:{component:ak,color:"#FF3C41"},CSS:{component:ik,color:"#10BDFF"},Vue:{component:lk,color:"#41B883"},"C#":{component:ck,color:"#368833"}};function hk(e){const{project:t}=e,n=Cd[e.project.language]??Cd.default;return m(dk,null,m(fk,{style:{color:n.color}},m(n.component,null)),m(pk,{href:t.htmlUrl},t.fullName),m(gk,null,t.description),m(mk,null,m(Ha,null,m(rk,null),m("span",{css:{marginLeft:"0.5rem"}},t.stargazersCount)),m(Ha,null,m(nk,null),m("span",{css:{marginLeft:"0.5rem"}},t.forksCount)),m(Ha,null,m(tk,null),m("span",{css:{marginLeft:"0.5rem"}},t.openIssuesCount))))}const yk=E.div({height:"1.5rem","@keyframes pulse":{"50%":{opacity:".5"}},animation:"pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",borderRadius:"0.25rem","--tw-bg-opacity":"1",backgroundColor:"rgb(229 231 235 / var(--tw-bg-opacity))",".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(31 41 55 / var(--tw-bg-opacity))"}});function ca(e){return e.children??m(yk,e)}const vk=E.div({position:"relative",borderRadius:"0.375rem","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))",padding:"0.75rem",paddingLeft:"3.5rem","--tw-shadow":"0 1px 2px 0 rgb(0 0 0 / 0.05)","--tw-shadow-colored":"0 1px 2px 0 var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)","--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)","--tw-ring-color":"rgb(71 85 105 / 0.05)",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms",":hover":{"--tw-shadow":"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)","--tw-shadow-colored":"0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"},".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(17 24 39 / var(--tw-bg-opacity))"}}),wk=E(ca)({position:"absolute",top:"0.75rem",left:"0.75rem",height:"2.25rem",width:"2.25rem",borderRadius:"0.375rem"}),bk=E(ca)({height:"1.25rem",width:"50%","--tw-text-opacity":"1",color:"rgb(191 219 254 / var(--tw-text-opacity))"}),kk=E(ca)({marginTop:"0.5rem",width:"66.666667%"}),xk=E.div({marginTop:"0.5rem",display:"flex"}),Sk=E(ca)({marginRight:"1rem",height:"1.25rem",width:"2.5rem"});function Ck(){return m(vk,null,m(wk,null),m(bk,null),m(kk,null),m(xk,null,Array.from({length:3}).map((e,t)=>m(Sk,{key:t}))))}function Ek(e,t=!1){const[n,r]=P.useState(t);return[n,async(...i)=>{r(!0);try{return await e(...i)}finally{r(!1)}}]}class uu{constructor(t,n,r,o){this.id=t,this.login=n,this.avatarUrl=r,this.htmlUrl=o}static from(t){return new uu(t.id,t.login,t.avatar_url,t.html_url)}}class cu{constructor(t,n,r,o,i,a,l,s,c,g,p,h,v,b,w){this.id=t,this.owner=n,this.fullName=r,this.name=o,this.htmlUrl=i,this.description=a,this.language=l,this.forksCount=s,this.stargazersCount=c,this.openIssuesCount=g,this.archived=p,this.disabled=h,this.pushedAt=v,this.createdAt=b,this.updatedAt=w}static from(t){return new cu(t.id,uu.from(t.owner),t.full_name,t.name,t.html_url,t.description,t.language,t.forks_count,t.stargazers_count,t.open_issues_count,t.archived,t.disabled,t.pushed_at,t.created_at,t.updated_at)}}var xg=(e=>(e.Asc="asc",e.Desc="desc",e))(xg||{}),Sg=(e=>(e.Created="created",e.Updated="updated",e.Pushed="pushed",e.FullName="full_name",e))(Sg||{}),Cg=(e=>(e.All="all",e.Owner="owner",e.Member="member",e))(Cg||{});function Pk(e){const t=new URLSearchParams;return Object.keys(e).forEach(n=>{e[n]&&t.append(n,String(e[n]))}),`?${t.toString()}`}function Ok(e){return["POST","PUT","PATCH"].includes(e)}class Lk{constructor(t,n,r){ut(this,"apiBase","https://api.github.com");this.token=t,this.owner=n,this.repo=r}async request(t,n,r){let o="",i=r;return r&&!Ok(t)&&(o=Pk(r),i=void 0),(await fetch([this.apiBase,n,o].join(""),{method:t,headers:{"Content-Type":"application/json;charset=UTF-8",Accept:"application/vnd.github.v3+json",Authorization:`token ${this.token}`},body:i?JSON.stringify(i):void 0})).json()}async listMilestones(t={}){const{state:n,sort:r,direction:o,page:i,pageSize:a}=t,l={state:n,sort:r,direction:o,page:i,per_page:a};return this.request("GET",`/repos/${this.owner}/${this.repo}/milestones`,l)}async listIssues(t){const{milestone:n,labels:r,state:o,sort:i,direction:a,page:l,pageSize:s}=t,c={milestone:n,labels:r,state:o,sort:i,direction:a,page:l,per_page:s,creator:this.owner};return this.request("GET",`/repos/${this.owner}/${this.repo}/issues`,c)}getIssue(t){return this.request("GET",`/repos/${this.owner}/${this.repo}/issues/${t}`)}listComments(t){const{issue:n,sort:r,direction:o,page:i,pageSize:a}=t,l={sort:r,direction:o,page:i,per_page:a};return this.request("GET",`/repos/${this.owner}/${this.repo}/issues/${n}/comments`,l)}listRepositories(t){const{type:n,sort:r,direction:o,page:i,pageSize:a}=t,l={type:n,sort:r,direction:o,page:i,per_page:a};return this.request("GET",`/users/${this.owner}/repos`,l)}}const zk=new Lk("FAKE_TOKEN_PART1FAKE_TOKEN_PART2","FAKE_USER","FAKE_REPO"),Rk=E.main({marginLeft:"auto",marginRight:"auto",width:"100%",maxWidth:"1024px",paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"3rem",paddingBottom:"3rem"}),Tk=E.h2({fontSize:"1.5rem",lineHeight:"2rem","--tw-text-opacity":"1",color:"rgb(51 65 85 / var(--tw-text-opacity))"}),Ed=E.div({marginTop:"2rem",display:"grid",gridTemplateColumns:"repeat(1, minmax(0, 1fr))",gap:"0.5rem","@media (min-width: 1024px)":{gridTemplateColumns:"repeat(2, minmax(0, 1fr))"}});function Nk(){const{t:e}=ns(),[t,n]=P.useState([]),[r,o]=Ek(P.useCallback(async()=>{const i=await zk.listRepositories({type:Cg.All,sort:Sg.Pushed,direction:xg.Desc,page:1,pageSize:50});n(i.map(cu.from).filter(a=>a.stargazersCount>0&&!a.archived&&!a.disabled).sort((a,l)=>l.stargazersCount-a.stargazersCount))},[]),!0);return P.useEffect(()=>{o()},[]),m(Rk,null,m(Tk,null,e("projects.title")),r&&m(Ed,null,Array.from({length:10}).map((i,a)=>m(Ck,{key:a}))),!!t.length&&m(Ed,null,t.map(i=>m(hk,{key:i.id,project:i}))))}function _k(){return m(yy,null,m(fy,null,m(ft,{path:"/",element:m(ek,null)},m(ft,{path:"",element:m(Eb,null)}),m(ft,{path:"EA",element:m(Hl,null)},m(ft,{path:"",element:m(Vv,null)}),m(ft,{path:":id",element:m(yw,null)})),m(ft,{path:"indicator",element:m(Hl,null)},m(ft,{path:"",element:m(Aw,null)}),m(ft,{path:":id",element:m(sb,null)})),m(ft,{path:"projects",element:m(Nk,null)}))))}const Fk=()=>m(fg,{styles:pg`*, ::before, ::after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb;
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x: var(--tw-empty,/*!*/ /*!*/);
  --tw-pan-y: var(--tw-empty,/*!*/ /*!*/);
  --tw-pinch-zoom: var(--tw-empty,/*!*/ /*!*/);
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal: var(--tw-empty,/*!*/ /*!*/);
  --tw-slashed-zero: var(--tw-empty,/*!*/ /*!*/);
  --tw-numeric-figure: var(--tw-empty,/*!*/ /*!*/);
  --tw-numeric-spacing: var(--tw-empty,/*!*/ /*!*/);
  --tw-numeric-fraction: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-blur: var(--tw-empty,/*!*/ /*!*/);
  --tw-brightness: var(--tw-empty,/*!*/ /*!*/);
  --tw-contrast: var(--tw-empty,/*!*/ /*!*/);
  --tw-grayscale: var(--tw-empty,/*!*/ /*!*/);
  --tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);
  --tw-invert: var(--tw-empty,/*!*/ /*!*/);
  --tw-saturate: var(--tw-empty,/*!*/ /*!*/);
  --tw-sepia: var(--tw-empty,/*!*/ /*!*/);
  --tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-blur: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-brightness: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-contrast: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-grayscale: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-hue-rotate: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-invert: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-opacity: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-saturate: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-sepia: var(--tw-empty,/*!*/ /*!*/);
}
::before, ::after {
  --tw-content: '';
}
html {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  tab-size: 4;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-feature-settings:  normal;
}
body {
  margin: 0;
  line-height: inherit;
}
hr {
  height: 0;
  color: inherit;
  border-top-width: 1px;
}
abbr:where([title]) {
  text-decoration: underline dotted;
}
h1, h2, h3, h4, h5, h6 {
  font-size: inherit;
  font-weight: inherit;
}
a {
  color: inherit;
  text-decoration: inherit;
}
b, strong {
  font-weight: bolder;
}
code, kbd, samp, pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 1em;
}
small {
  font-size: 80%;
}
sub, sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
table {
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
}
button, input, optgroup, select, textarea {
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
}
button, select {
  text-transform: none;
}
button, [type='button'], [type='reset'], [type='submit'] {
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
}
:-moz-focusring {
  outline: auto;
}
:-moz-ui-invalid {
  box-shadow: none;
}
progress {
  vertical-align: baseline;
}
::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
  height: auto;
}
[type='search'] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
summary {
  display: list-item;
}
blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
  margin: 0;
}
fieldset {
  margin: 0;
  padding: 0;
}
legend {
  padding: 0;
}
ol, ul, menu {
  list-style: none;
  margin: 0;
  padding: 0;
}
textarea {
  resize: vertical;
}
input::placeholder, textarea::placeholder {
  opacity: 1;
  color: #9ca3af;
}
button, [role="button"] {
  cursor: pointer;
}
:disabled {
  cursor: default;
}
img, svg, video, canvas, audio, iframe, embed, object {
  display: block;
  vertical-align: middle;
}
img, video {
  max-width: 100%;
  height: auto;
}
[hidden] {
  display: none;
}
::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x: var(--tw-empty,/*!*/ /*!*/);
  --tw-pan-y: var(--tw-empty,/*!*/ /*!*/);
  --tw-pinch-zoom: var(--tw-empty,/*!*/ /*!*/);
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal: var(--tw-empty,/*!*/ /*!*/);
  --tw-slashed-zero: var(--tw-empty,/*!*/ /*!*/);
  --tw-numeric-figure: var(--tw-empty,/*!*/ /*!*/);
  --tw-numeric-spacing: var(--tw-empty,/*!*/ /*!*/);
  --tw-numeric-fraction: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-blur: var(--tw-empty,/*!*/ /*!*/);
  --tw-brightness: var(--tw-empty,/*!*/ /*!*/);
  --tw-contrast: var(--tw-empty,/*!*/ /*!*/);
  --tw-grayscale: var(--tw-empty,/*!*/ /*!*/);
  --tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);
  --tw-invert: var(--tw-empty,/*!*/ /*!*/);
  --tw-saturate: var(--tw-empty,/*!*/ /*!*/);
  --tw-sepia: var(--tw-empty,/*!*/ /*!*/);
  --tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-blur: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-brightness: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-contrast: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-grayscale: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-hue-rotate: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-invert: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-opacity: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-saturate: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-sepia: var(--tw-empty,/*!*/ /*!*/);
}`}),$k=pg`
  @import url(https://cdn.jsdelivr.net/gh/tonsky/FiraCode@5.2/distr/fira_code.css);

  body {
    font-family: 'Fira Code VF', 'Segoe UI', 'Consolas', 'monospace', 'Microsoft YaHei';
    font-variant-ligatures: normal;
    background-size: 32px 32px;
    background-image: radial-gradient(rgba(59, 130, 246, 0.2) 1px, rgba(59, 130, 246, 0) 0px);
    ${{overflowY:"scroll",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}}
    ${{"--tw-bg-opacity":"1",backgroundColor:"rgb(248 250 252 / var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgb(15 23 42 / var(--tw-text-opacity))"}}
    ${{".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(0 0 0 / var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgb(148 163 184 / var(--tw-text-opacity))"}}}
  }

  *::-webkit-scrollbar {
    ${{height:"0.5rem",width:"0.5rem"}}
  }

  *::-webkit-scrollbar-thumb {
    ${{"--tw-bg-opacity":"1",backgroundColor:"rgb(226 232 240 / var(--tw-bg-opacity))",".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(51 65 85 / var(--tw-bg-opacity))"}}}
  }
`;function Ak(){return m(ts.Fragment,null,m(Fk,null),m(fg,{styles:$k}))}document.title="Agus Pujianto";const jk=document.getElementById("root"),Ik=Bp(jk);Ik.render(m(ts.Fragment,null,m(Ak,null),m(_k,null)));
