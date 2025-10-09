var vm=Object.defineProperty;var wm=(e,t,n)=>t in e?vm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var st=(e,t,n)=>(wm(e,typeof t!="symbol"?t+"":t,n),n);function bm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function nt(e){return nt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},nt(e)}function xt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function km(e,t){if(nt(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(nt(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function bd(e){var t=km(e,"string");return nt(t)==="symbol"?t:String(t)}function su(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,bd(r.key),r)}}function St(e,t,n){return t&&su(e.prototype,t),n&&su(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Wt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ba(e,t){return Ba=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Ba(e,t)}function Ti(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ba(e,t)}function ro(e,t){if(t&&(nt(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Wt(e)}function bt(e){return bt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},bt(e)}function rn(e,t,n){return t=bd(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xm(e){if(Array.isArray(e))return e}function Sm(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function uu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Cm(e,t){if(e){if(typeof e=="string")return uu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return uu(e,t)}}function Em(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pm(e){return xm(e)||Sm(e)||Cm(e)||Em()}function cu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function du(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?cu(Object(n),!0).forEach(function(r){rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Lm={type:"logger",log:function(t){this.output("log",t)},warn:function(t){this.output("warn",t)},error:function(t){this.output("error",t)},output:function(t,n){console&&console[t]&&console[t].apply(console,n)}},Tm=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};xt(this,e),this.init(t,n)}return St(e,[{key:"init",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=r.prefix||"i18next:",this.logger=n||Lm,this.options=r,this.debug=r.debug}},{key:"setDebug",value:function(n){this.debug=n}},{key:"log",value:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return this.forward(r,"log","",!0)}},{key:"warn",value:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return this.forward(r,"warn","",!0)}},{key:"error",value:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return this.forward(r,"error","")}},{key:"deprecate",value:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return this.forward(r,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(n,r,o,i){return i&&!this.debug?null:(typeof n[0]=="string"&&(n[0]="".concat(o).concat(this.prefix," ").concat(n[0])),this.logger[r](n))}},{key:"create",value:function(n){return new e(this.logger,du(du({},{prefix:"".concat(this.prefix,":").concat(n,":")}),this.options))}},{key:"clone",value:function(n){return n=n||this.options,n.prefix=n.prefix||this.prefix,new e(this.logger,n)}}]),e}(),ht=new Tm,en=function(){function e(){xt(this,e),this.observers={}}return St(e,[{key:"on",value:function(n,r){var o=this;return n.split(" ").forEach(function(i){o.observers[i]=o.observers[i]||[],o.observers[i].push(r)}),this}},{key:"off",value:function(n,r){if(this.observers[n]){if(!r){delete this.observers[n];return}this.observers[n]=this.observers[n].filter(function(o){return o!==r})}}},{key:"emit",value:function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];if(this.observers[n]){var a=[].concat(this.observers[n]);a.forEach(function(s){s.apply(void 0,o)})}if(this.observers["*"]){var l=[].concat(this.observers["*"]);l.forEach(function(s){s.apply(s,[n].concat(o))})}}}]),e}();function fr(){var e,t,n=new Promise(function(r,o){e=r,t=o});return n.resolve=e,n.reject=t,n}function fu(e){return e==null?"":""+e}function Om(e,t,n){e.forEach(function(r){t[r]&&(n[r]=t[r])})}function Yl(e,t,n){function r(l){return l&&l.indexOf("###")>-1?l.replace(/###/g,"."):l}function o(){return!e||typeof e=="string"}for(var i=typeof t!="string"?[].concat(t):t.split(".");i.length>1;){if(o())return{};var a=r(i.shift());!e[a]&&n&&(e[a]=new n),Object.prototype.hasOwnProperty.call(e,a)?e=e[a]:e={}}return o()?{}:{obj:e,k:r(i.shift())}}function pu(e,t,n){var r=Yl(e,t,Object),o=r.obj,i=r.k;o[i]=n}function zm(e,t,n,r){var o=Yl(e,t,Object),i=o.obj,a=o.k;i[a]=i[a]||[],r&&(i[a]=i[a].concat(n)),r||i[a].push(n)}function Xo(e,t){var n=Yl(e,t),r=n.obj,o=n.k;if(r)return r[o]}function mu(e,t,n){var r=Xo(e,n);return r!==void 0?r:Xo(t,n)}function kd(e,t,n){for(var r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof t[r]=="string"||t[r]instanceof String?n&&(e[r]=t[r]):kd(e[r],t[r],n):e[r]=t[r]);return e}function Tn(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var _m={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function Rm(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,function(t){return _m[t]}):e}var Oi=typeof window<"u"&&window.navigator&&typeof window.navigator.userAgentData>"u"&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1,$m=[" ",",","?","!",";"];function Nm(e,t,n){t=t||"",n=n||"";var r=$m.filter(function(l){return t.indexOf(l)<0&&n.indexOf(l)<0});if(r.length===0)return!0;var o=new RegExp("(".concat(r.map(function(l){return l==="?"?"\\?":l}).join("|"),")")),i=!o.test(e);if(!i){var a=e.indexOf(n);a>0&&!o.test(e.substring(0,a))&&(i=!0)}return i}function gu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function go(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gu(Object(n),!0).forEach(function(r){rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Fm(e){var t=Im();return function(){var r=bt(e),o;if(t){var i=bt(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return ro(this,o)}}function Im(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function xd(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(e){if(e[t])return e[t];for(var r=t.split(n),o=e,i=0;i<r.length;++i){if(!o||typeof o[r[i]]=="string"&&i+1<r.length)return;if(o[r[i]]===void 0){for(var a=2,l=r.slice(i,i+a).join(n),s=o[l];s===void 0&&r.length>i+a;)a++,l=r.slice(i,i+a).join(n),s=o[l];if(s===void 0)return;if(s===null)return null;if(t.endsWith(l)){if(typeof s=="string")return s;if(l&&typeof s[l]=="string")return s[l]}var c=r.slice(i+a).join(n);return c?xd(s,c,n):void 0}o=o[r[i]]}return o}}var Am=function(e){Ti(n,e);var t=Fm(n);function n(r){var o,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};return xt(this,n),o=t.call(this),Oi&&en.call(Wt(o)),o.data=r||{},o.options=i,o.options.keySeparator===void 0&&(o.options.keySeparator="."),o.options.ignoreJSONStructure===void 0&&(o.options.ignoreJSONStructure=!0),o}return St(n,[{key:"addNamespaces",value:function(o){this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}},{key:"removeNamespaces",value:function(o){var i=this.options.ns.indexOf(o);i>-1&&this.options.ns.splice(i,1)}},{key:"getResource",value:function(o,i,a){var l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},s=l.keySeparator!==void 0?l.keySeparator:this.options.keySeparator,c=l.ignoreJSONStructure!==void 0?l.ignoreJSONStructure:this.options.ignoreJSONStructure,m=[o,i];a&&typeof a!="string"&&(m=m.concat(a)),a&&typeof a=="string"&&(m=m.concat(s?a.split(s):a)),o.indexOf(".")>-1&&(m=o.split("."));var f=Xo(this.data,m);return f||!c||typeof a!="string"?f:xd(this.data&&this.data[o]&&this.data[o][i],a,s)}},{key:"addResource",value:function(o,i,a,l){var s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1},c=this.options.keySeparator;c===void 0&&(c=".");var m=[o,i];a&&(m=m.concat(c?a.split(c):a)),o.indexOf(".")>-1&&(m=o.split("."),l=i,i=m[1]),this.addNamespaces(i),pu(this.data,m,l),s.silent||this.emit("added",o,i,a,l)}},{key:"addResources",value:function(o,i,a){var l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(var s in a)(typeof a[s]=="string"||Object.prototype.toString.apply(a[s])==="[object Array]")&&this.addResource(o,i,s,a[s],{silent:!0});l.silent||this.emit("added",o,i,a)}},{key:"addResourceBundle",value:function(o,i,a,l,s){var c=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},m=[o,i];o.indexOf(".")>-1&&(m=o.split("."),l=a,a=i,i=m[1]),this.addNamespaces(i);var f=Xo(this.data,m)||{};l?kd(f,a,s):f=go(go({},f),a),pu(this.data,m,f),c.silent||this.emit("added",o,i,a)}},{key:"removeResourceBundle",value:function(o,i){this.hasResourceBundle(o,i)&&delete this.data[o][i],this.removeNamespaces(i),this.emit("removed",o,i)}},{key:"hasResourceBundle",value:function(o,i){return this.getResource(o,i)!==void 0}},{key:"getResourceBundle",value:function(o,i){return i||(i=this.options.defaultNS),this.options.compatibilityAPI==="v1"?go(go({},{}),this.getResource(o,i)):this.getResource(o,i)}},{key:"getDataByLanguage",value:function(o){return this.data[o]}},{key:"hasLanguageSomeTranslations",value:function(o){var i=this.getDataByLanguage(o),a=i&&Object.keys(i)||[];return!!a.find(function(l){return i[l]&&Object.keys(i[l]).length>0})}},{key:"toJSON",value:function(){return this.data}}]),n}(en),Sd={processors:{},addPostProcessor:function(t){this.processors[t.name]=t},handle:function(t,n,r,o,i){var a=this;return t.forEach(function(l){a.processors[l]&&(n=a.processors[l].process(n,r,o,i))}),n}};function hu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function ke(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?hu(Object(n),!0).forEach(function(r){rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function jm(e){var t=Mm();return function(){var r=bt(e),o;if(t){var i=bt(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return ro(this,o)}}function Mm(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var yu={},vu=function(e){Ti(n,e);var t=jm(n);function n(r){var o,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return xt(this,n),o=t.call(this),Oi&&en.call(Wt(o)),Om(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],r,Wt(o)),o.options=i,o.options.keySeparator===void 0&&(o.options.keySeparator="."),o.logger=ht.create("translator"),o}return St(n,[{key:"changeLanguage",value:function(o){o&&(this.language=o)}},{key:"exists",value:function(o){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(o==null)return!1;var a=this.resolve(o,i);return a&&a.res!==void 0}},{key:"extractFromKey",value:function(o,i){var a=i.nsSeparator!==void 0?i.nsSeparator:this.options.nsSeparator;a===void 0&&(a=":");var l=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,s=i.ns||this.options.defaultNS||[],c=a&&o.indexOf(a)>-1,m=!this.options.userDefinedKeySeparator&&!i.keySeparator&&!this.options.userDefinedNsSeparator&&!i.nsSeparator&&!Nm(o,a,l);if(c&&!m){var f=o.match(this.interpolator.nestingRegexp);if(f&&f.length>0)return{key:o,namespaces:s};var g=o.split(a);(a!==l||a===l&&this.options.ns.indexOf(g[0])>-1)&&(s=g.shift()),o=g.join(l)}return typeof s=="string"&&(s=[s]),{key:o,namespaces:s}}},{key:"translate",value:function(o,i,a){var l=this;if(nt(i)!=="object"&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),i||(i={}),o==null)return"";Array.isArray(o)||(o=[String(o)]);var s=i.returnDetails!==void 0?i.returnDetails:this.options.returnDetails,c=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,m=this.extractFromKey(o[o.length-1],i),f=m.key,g=m.namespaces,v=g[g.length-1],b=i.lng||this.language,w=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(b&&b.toLowerCase()==="cimode"){if(w){var x=i.nsSeparator||this.options.nsSeparator;return s?{res:"".concat(v).concat(x).concat(f),usedKey:f,exactUsedKey:f,usedLng:b,usedNS:v}:"".concat(v).concat(x).concat(f)}return s?{res:f,usedKey:f,exactUsedKey:f,usedLng:b,usedNS:v}:f}var p=this.resolve(o,i),u=p&&p.res,d=p&&p.usedKey||f,y=p&&p.exactUsedKey||f,k=Object.prototype.toString.apply(u),S=["[object Number]","[object Function]","[object RegExp]"],E=i.joinArrays!==void 0?i.joinArrays:this.options.joinArrays,L=!this.i18nFormat||this.i18nFormat.handleAsObject,T=typeof u!="string"&&typeof u!="boolean"&&typeof u!="number";if(L&&u&&T&&S.indexOf(k)<0&&!(typeof E=="string"&&k==="[object Array]")){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");var _=this.options.returnedObjectHandler?this.options.returnedObjectHandler(d,u,ke(ke({},i),{},{ns:g})):"key '".concat(f," (").concat(this.language,")' returned an object instead of string.");return s?(p.res=_,p):_}if(c){var A=k==="[object Array]",re=A?[]:{},at=A?y:d;for(var Be in u)if(Object.prototype.hasOwnProperty.call(u,Be)){var Pn="".concat(at).concat(c).concat(Be);re[Be]=this.translate(Pn,ke(ke({},i),{joinArrays:!1,ns:g})),re[Be]===Pn&&(re[Be]=u[Be])}u=re}}else if(L&&typeof E=="string"&&k==="[object Array]")u=u.join(E),u&&(u=this.extendTranslation(u,o,i,a));else{var lt=!1,He=!1,z=i.count!==void 0&&typeof i.count!="string",$=n.hasDefaultValue(i),N=z?this.pluralResolver.getSuffix(b,i.count,i):"",M=i["defaultValue".concat(N)]||i.defaultValue;!this.isValidLookup(u)&&$&&(lt=!0,u=M),this.isValidLookup(u)||(He=!0,u=f);var D=i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey,Ft=D&&He?void 0:u,J=$&&M!==u&&this.options.updateMissing;if(He||lt||J){if(this.logger.log(J?"updateKey":"missingKey",b,v,f,J?M:u),c){var Ue=this.resolve(f,ke(ke({},i),{},{keySeparator:!1}));Ue&&Ue.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}var le=[],Pe=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo==="fallback"&&Pe&&Pe[0])for(var un=0;un<Pe.length;un++)le.push(Pe[un]);else this.options.saveMissingTo==="all"?le=this.languageUtils.toResolveHierarchy(i.lng||this.language):le.push(i.lng||this.language);var cr=function(Ze,dr,Ln){var lu=$&&Ln!==u?Ln:Ft;l.options.missingKeyHandler?l.options.missingKeyHandler(Ze,v,dr,lu,J,i):l.backendConnector&&l.backendConnector.saveMissing&&l.backendConnector.saveMissing(Ze,v,dr,lu,J,i),l.emit("missingKey",Ze,v,dr,u)};this.options.saveMissing&&(this.options.saveMissingPlurals&&z?le.forEach(function(cn){l.pluralResolver.getSuffixes(cn,i).forEach(function(Ze){cr([cn],f+Ze,i["defaultValue".concat(Ze)]||M)})}):cr(le,f,M))}u=this.extendTranslation(u,o,i,p,a),He&&u===f&&this.options.appendNamespaceToMissingKey&&(u="".concat(v,":").concat(f)),(He||lt)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?u=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?"".concat(v,":").concat(f):f,lt?u:void 0):u=this.options.parseMissingKeyHandler(u))}return s?(p.res=u,p):u}},{key:"extendTranslation",value:function(o,i,a,l,s){var c=this;if(this.i18nFormat&&this.i18nFormat.parse)o=this.i18nFormat.parse(o,ke(ke({},this.options.interpolation.defaultVariables),a),l.usedLng,l.usedNS,l.usedKey,{resolved:l});else if(!a.skipInterpolation){a.interpolation&&this.interpolator.init(ke(ke({},a),{interpolation:ke(ke({},this.options.interpolation),a.interpolation)}));var m=typeof o=="string"&&(a&&a.interpolation&&a.interpolation.skipOnVariables!==void 0?a.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables),f;if(m){var g=o.match(this.interpolator.nestingRegexp);f=g&&g.length}var v=a.replace&&typeof a.replace!="string"?a.replace:a;if(this.options.interpolation.defaultVariables&&(v=ke(ke({},this.options.interpolation.defaultVariables),v)),o=this.interpolator.interpolate(o,v,a.lng||this.language,a),m){var b=o.match(this.interpolator.nestingRegexp),w=b&&b.length;f<w&&(a.nest=!1)}a.nest!==!1&&(o=this.interpolator.nest(o,function(){for(var u=arguments.length,d=new Array(u),y=0;y<u;y++)d[y]=arguments[y];return s&&s[0]===d[0]&&!a.context?(c.logger.warn("It seems you are nesting recursively key: ".concat(d[0]," in key: ").concat(i[0])),null):c.translate.apply(c,d.concat([i]))},a)),a.interpolation&&this.interpolator.reset()}var x=a.postProcess||this.options.postProcess,p=typeof x=="string"?[x]:x;return o!=null&&p&&p.length&&a.applyPostProcessor!==!1&&(o=Sd.handle(p,o,i,this.options&&this.options.postProcessPassResolved?ke({i18nResolved:l},a):a,this)),o}},{key:"resolve",value:function(o){var i=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l,s,c,m,f;return typeof o=="string"&&(o=[o]),o.forEach(function(g){if(!i.isValidLookup(l)){var v=i.extractFromKey(g,a),b=v.key;s=b;var w=v.namespaces;i.options.fallbackNS&&(w=w.concat(i.options.fallbackNS));var x=a.count!==void 0&&typeof a.count!="string",p=x&&!a.ordinal&&a.count===0&&i.pluralResolver.shouldUseIntlApi(),u=a.context!==void 0&&(typeof a.context=="string"||typeof a.context=="number")&&a.context!=="",d=a.lngs?a.lngs:i.languageUtils.toResolveHierarchy(a.lng||i.language,a.fallbackLng);w.forEach(function(y){i.isValidLookup(l)||(f=y,!yu["".concat(d[0],"-").concat(y)]&&i.utils&&i.utils.hasLoadedNamespace&&!i.utils.hasLoadedNamespace(f)&&(yu["".concat(d[0],"-").concat(y)]=!0,i.logger.warn('key "'.concat(s,'" for languages "').concat(d.join(", "),`" won't get resolved as namespace "`).concat(f,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),d.forEach(function(k){if(!i.isValidLookup(l)){m=k;var S=[b];if(i.i18nFormat&&i.i18nFormat.addLookupKeys)i.i18nFormat.addLookupKeys(S,b,k,y,a);else{var E;x&&(E=i.pluralResolver.getSuffix(k,a.count,a));var L="".concat(i.options.pluralSeparator,"zero");if(x&&(S.push(b+E),p&&S.push(b+L)),u){var T="".concat(b).concat(i.options.contextSeparator).concat(a.context);S.push(T),x&&(S.push(T+E),p&&S.push(T+L))}}for(var _;_=S.pop();)i.isValidLookup(l)||(c=_,l=i.getResource(k,y,_,a))}}))})}}),{res:l,usedKey:s,exactUsedKey:c,usedLng:m,usedNS:f}}},{key:"isValidLookup",value:function(o){return o!==void 0&&!(!this.options.returnNull&&o===null)&&!(!this.options.returnEmptyString&&o==="")}},{key:"getResource",value:function(o,i,a){var l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(o,i,a,l):this.resourceStore.getResource(o,i,a,l)}}],[{key:"hasDefaultValue",value:function(o){var i="defaultValue";for(var a in o)if(Object.prototype.hasOwnProperty.call(o,a)&&i===a.substring(0,i.length)&&o[a]!==void 0)return!0;return!1}}]),n}(en);function sa(e){return e.charAt(0).toUpperCase()+e.slice(1)}var wu=function(){function e(t){xt(this,e),this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=ht.create("languageUtils")}return St(e,[{key:"getScriptPartFromCode",value:function(n){if(!n||n.indexOf("-")<0)return null;var r=n.split("-");return r.length===2||(r.pop(),r[r.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(r.join("-"))}},{key:"getLanguagePartFromCode",value:function(n){if(!n||n.indexOf("-")<0)return n;var r=n.split("-");return this.formatLanguageCode(r[0])}},{key:"formatLanguageCode",value:function(n){if(typeof n=="string"&&n.indexOf("-")>-1){var r=["hans","hant","latn","cyrl","cans","mong","arab"],o=n.split("-");return this.options.lowerCaseLng?o=o.map(function(i){return i.toLowerCase()}):o.length===2?(o[0]=o[0].toLowerCase(),o[1]=o[1].toUpperCase(),r.indexOf(o[1].toLowerCase())>-1&&(o[1]=sa(o[1].toLowerCase()))):o.length===3&&(o[0]=o[0].toLowerCase(),o[1].length===2&&(o[1]=o[1].toUpperCase()),o[0]!=="sgn"&&o[2].length===2&&(o[2]=o[2].toUpperCase()),r.indexOf(o[1].toLowerCase())>-1&&(o[1]=sa(o[1].toLowerCase())),r.indexOf(o[2].toLowerCase())>-1&&(o[2]=sa(o[2].toLowerCase()))),o.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?n.toLowerCase():n}},{key:"isSupportedCode",value:function(n){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(n=this.getLanguagePartFromCode(n)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(n)>-1}},{key:"getBestMatchFromCodes",value:function(n){var r=this;if(!n)return null;var o;return n.forEach(function(i){if(!o){var a=r.formatLanguageCode(i);(!r.options.supportedLngs||r.isSupportedCode(a))&&(o=a)}}),!o&&this.options.supportedLngs&&n.forEach(function(i){if(!o){var a=r.getLanguagePartFromCode(i);if(r.isSupportedCode(a))return o=a;o=r.options.supportedLngs.find(function(l){if(l.indexOf(a)===0)return l})}}),o||(o=this.getFallbackCodes(this.options.fallbackLng)[0]),o}},{key:"getFallbackCodes",value:function(n,r){if(!n)return[];if(typeof n=="function"&&(n=n(r)),typeof n=="string"&&(n=[n]),Object.prototype.toString.apply(n)==="[object Array]")return n;if(!r)return n.default||[];var o=n[r];return o||(o=n[this.getScriptPartFromCode(r)]),o||(o=n[this.formatLanguageCode(r)]),o||(o=n[this.getLanguagePartFromCode(r)]),o||(o=n.default),o||[]}},{key:"toResolveHierarchy",value:function(n,r){var o=this,i=this.getFallbackCodes(r||this.options.fallbackLng||[],n),a=[],l=function(c){c&&(o.isSupportedCode(c)?a.push(c):o.logger.warn("rejecting language code not found in supportedLngs: ".concat(c)))};return typeof n=="string"&&n.indexOf("-")>-1?(this.options.load!=="languageOnly"&&l(this.formatLanguageCode(n)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&l(this.getScriptPartFromCode(n)),this.options.load!=="currentOnly"&&l(this.getLanguagePartFromCode(n))):typeof n=="string"&&l(this.formatLanguageCode(n)),i.forEach(function(s){a.indexOf(s)<0&&l(o.formatLanguageCode(s))}),a}}]),e}(),Dm=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],Bm={1:function(t){return Number(t>1)},2:function(t){return Number(t!=1)},3:function(t){return 0},4:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},5:function(t){return Number(t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5)},6:function(t){return Number(t==1?0:t>=2&&t<=4?1:2)},7:function(t){return Number(t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},8:function(t){return Number(t==1?0:t==2?1:t!=8&&t!=11?2:3)},9:function(t){return Number(t>=2)},10:function(t){return Number(t==1?0:t==2?1:t<7?2:t<11?3:4)},11:function(t){return Number(t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3)},12:function(t){return Number(t%10!=1||t%100==11)},13:function(t){return Number(t!==0)},14:function(t){return Number(t==1?0:t==2?1:t==3?2:3)},15:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2)},16:function(t){return Number(t%10==1&&t%100!=11?0:t!==0?1:2)},17:function(t){return Number(t==1||t%10==1&&t%100!=11?0:1)},18:function(t){return Number(t==0?0:t==1?1:2)},19:function(t){return Number(t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3)},20:function(t){return Number(t==1?0:t==0||t%100>0&&t%100<20?1:2)},21:function(t){return Number(t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0)},22:function(t){return Number(t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3)}},Hm=["v1","v2","v3"],bu={zero:0,one:1,two:2,few:3,many:4,other:5};function Um(){var e={};return Dm.forEach(function(t){t.lngs.forEach(function(n){e[n]={numbers:t.nr,plurals:Bm[t.fc]}})}),e}var Wm=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};xt(this,e),this.languageUtils=t,this.options=n,this.logger=ht.create("pluralResolver"),(!this.options.compatibilityJSON||this.options.compatibilityJSON==="v4")&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=Um()}return St(e,[{key:"addRule",value:function(n,r){this.rules[n]=r}},{key:"getRule",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(n,{type:r.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[n]||this.rules[this.languageUtils.getLanguagePartFromCode(n)]}},{key:"needsPlural",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=this.getRule(n,r);return this.shouldUseIntlApi()?o&&o.resolvedOptions().pluralCategories.length>1:o&&o.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(n,r){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(n,o).map(function(i){return"".concat(r).concat(i)})}},{key:"getSuffixes",value:function(n){var r=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(n,o);return i?this.shouldUseIntlApi()?i.resolvedOptions().pluralCategories.sort(function(a,l){return bu[a]-bu[l]}).map(function(a){return"".concat(r.options.prepend).concat(a)}):i.numbers.map(function(a){return r.getSuffix(n,a,o)}):[]}},{key:"getSuffix",value:function(n,r){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=this.getRule(n,o);return i?this.shouldUseIntlApi()?"".concat(this.options.prepend).concat(i.select(r)):this.getSuffixRetroCompatible(i,r):(this.logger.warn("no plural rule found for: ".concat(n)),"")}},{key:"getSuffixRetroCompatible",value:function(n,r){var o=this,i=n.noAbs?n.plurals(r):n.plurals(Math.abs(r)),a=n.numbers[i];this.options.simplifyPluralSuffix&&n.numbers.length===2&&n.numbers[0]===1&&(a===2?a="plural":a===1&&(a=""));var l=function(){return o.options.prepend&&a.toString()?o.options.prepend+a.toString():a.toString()};return this.options.compatibilityJSON==="v1"?a===1?"":typeof a=="number"?"_plural_".concat(a.toString()):l():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&n.numbers.length===2&&n.numbers[0]===1?l():this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString()}},{key:"shouldUseIntlApi",value:function(){return!Hm.includes(this.options.compatibilityJSON)}}]),e}();function ku(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Xe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ku(Object(n),!0).forEach(function(r){rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ku(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Vm=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};xt(this,e),this.logger=ht.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||function(n){return n},this.init(t)}return St(e,[{key:"init",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};n.interpolation||(n.interpolation={escapeValue:!0});var r=n.interpolation;this.escape=r.escape!==void 0?r.escape:Rm,this.escapeValue=r.escapeValue!==void 0?r.escapeValue:!0,this.useRawValueToEscape=r.useRawValueToEscape!==void 0?r.useRawValueToEscape:!1,this.prefix=r.prefix?Tn(r.prefix):r.prefixEscaped||"{{",this.suffix=r.suffix?Tn(r.suffix):r.suffixEscaped||"}}",this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||",",this.unescapePrefix=r.unescapeSuffix?"":r.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":r.unescapeSuffix||"",this.nestingPrefix=r.nestingPrefix?Tn(r.nestingPrefix):r.nestingPrefixEscaped||Tn("$t("),this.nestingSuffix=r.nestingSuffix?Tn(r.nestingSuffix):r.nestingSuffixEscaped||Tn(")"),this.nestingOptionsSeparator=r.nestingOptionsSeparator?r.nestingOptionsSeparator:r.nestingOptionsSeparator||",",this.maxReplaces=r.maxReplaces?r.maxReplaces:1e3,this.alwaysFormat=r.alwaysFormat!==void 0?r.alwaysFormat:!1,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var n="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(n,"g");var r="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(r,"g");var o="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(o,"g")}},{key:"interpolate",value:function(n,r,o,i){var a=this,l,s,c,m=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function f(x){return x.replace(/\$/g,"$$$$")}var g=function(p){if(p.indexOf(a.formatSeparator)<0){var u=mu(r,m,p);return a.alwaysFormat?a.format(u,void 0,o,Xe(Xe(Xe({},i),r),{},{interpolationkey:p})):u}var d=p.split(a.formatSeparator),y=d.shift().trim(),k=d.join(a.formatSeparator).trim();return a.format(mu(r,m,y),k,o,Xe(Xe(Xe({},i),r),{},{interpolationkey:y}))};this.resetRegExp();var v=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,b=i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables,w=[{regex:this.regexpUnescape,safeValue:function(p){return f(p)}},{regex:this.regexp,safeValue:function(p){return a.escapeValue?f(a.escape(p)):f(p)}}];return w.forEach(function(x){for(c=0;l=x.regex.exec(n);){var p=l[1].trim();if(s=g(p),s===void 0)if(typeof v=="function"){var u=v(n,l,i);s=typeof u=="string"?u:""}else if(i&&Object.prototype.hasOwnProperty.call(i,p))s="";else if(b){s=l[0];continue}else a.logger.warn("missed to pass in variable ".concat(p," for interpolating ").concat(n)),s="";else typeof s!="string"&&!a.useRawValueToEscape&&(s=fu(s));var d=x.safeValue(s);if(n=n.replace(l[0],d),b?(x.regex.lastIndex+=s.length,x.regex.lastIndex-=l[0].length):x.regex.lastIndex=0,c++,c>=a.maxReplaces)break}}),n}},{key:"nest",value:function(n,r){var o=this,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a,l,s;function c(v,b){var w=this.nestingOptionsSeparator;if(v.indexOf(w)<0)return v;var x=v.split(new RegExp("".concat(w,"[ ]*{"))),p="{".concat(x[1]);v=x[0],p=this.interpolate(p,s);var u=p.match(/'/g),d=p.match(/"/g);(u&&u.length%2===0&&!d||d.length%2!==0)&&(p=p.replace(/'/g,'"'));try{s=JSON.parse(p),b&&(s=Xe(Xe({},b),s))}catch(y){return this.logger.warn("failed parsing options string in nesting for key ".concat(v),y),"".concat(v).concat(w).concat(p)}return delete s.defaultValue,v}for(;a=this.nestingRegexp.exec(n);){var m=[];s=Xe({},i),s=s.replace&&typeof s.replace!="string"?s.replace:s,s.applyPostProcessor=!1,delete s.defaultValue;var f=!1;if(a[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(a[1])){var g=a[1].split(this.formatSeparator).map(function(v){return v.trim()});a[1]=g.shift(),m=g,f=!0}if(l=r(c.call(this,a[1].trim(),s),s),l&&a[0]===n&&typeof l!="string")return l;typeof l!="string"&&(l=fu(l)),l||(this.logger.warn("missed to resolve ".concat(a[1]," for nesting ").concat(n)),l=""),f&&(l=m.reduce(function(v,b){return o.format(v,b,i.lng,Xe(Xe({},i),{},{interpolationkey:a[1].trim()}))},l.trim())),n=n.replace(a[0],l),this.regexp.lastIndex=0}return n}}]),e}();function xu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Ct(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?xu(Object(n),!0).forEach(function(r){rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Km(e){var t=e.toLowerCase().trim(),n={};if(e.indexOf("(")>-1){var r=e.split("(");t=r[0].toLowerCase().trim();var o=r[1].substring(0,r[1].length-1);if(t==="currency"&&o.indexOf(":")<0)n.currency||(n.currency=o.trim());else if(t==="relativetime"&&o.indexOf(":")<0)n.range||(n.range=o.trim());else{var i=o.split(";");i.forEach(function(a){if(a){var l=a.split(":"),s=Pm(l),c=s[0],m=s.slice(1),f=m.join(":").trim().replace(/^'+|'+$/g,"");n[c.trim()]||(n[c.trim()]=f),f==="false"&&(n[c.trim()]=!1),f==="true"&&(n[c.trim()]=!0),isNaN(f)||(n[c.trim()]=parseInt(f,10))}})}}return{formatName:t,formatOptions:n}}function On(e){var t={};return function(r,o,i){var a=o+JSON.stringify(i),l=t[a];return l||(l=e(o,i),t[a]=l),l(r)}}var Ym=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};xt(this,e),this.logger=ht.create("formatter"),this.options=t,this.formats={number:On(function(n,r){var o=new Intl.NumberFormat(n,Ct({},r));return function(i){return o.format(i)}}),currency:On(function(n,r){var o=new Intl.NumberFormat(n,Ct(Ct({},r),{},{style:"currency"}));return function(i){return o.format(i)}}),datetime:On(function(n,r){var o=new Intl.DateTimeFormat(n,Ct({},r));return function(i){return o.format(i)}}),relativetime:On(function(n,r){var o=new Intl.RelativeTimeFormat(n,Ct({},r));return function(i){return o.format(i,r.range||"day")}}),list:On(function(n,r){var o=new Intl.ListFormat(n,Ct({},r));return function(i){return o.format(i)}})},this.init(t)}return St(e,[{key:"init",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}},o=r.interpolation;this.formatSeparator=o.formatSeparator?o.formatSeparator:o.formatSeparator||","}},{key:"add",value:function(n,r){this.formats[n.toLowerCase().trim()]=r}},{key:"addCached",value:function(n,r){this.formats[n.toLowerCase().trim()]=On(r)}},{key:"format",value:function(n,r,o){var i=this,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},l=r.split(this.formatSeparator),s=l.reduce(function(c,m){var f=Km(m),g=f.formatName,v=f.formatOptions;if(i.formats[g]){var b=c;try{var w=a&&a.formatParams&&a.formatParams[a.interpolationkey]||{},x=w.locale||w.lng||a.locale||a.lng||o;b=i.formats[g](c,x,Ct(Ct(Ct({},v),a),w))}catch(p){i.logger.warn(p)}return b}else i.logger.warn("there was no format function for ".concat(g));return c},n);return s}}]),e}();function Su(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Cu(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Su(Object(n),!0).forEach(function(r){rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Su(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Qm(e){var t=Gm();return function(){var r=bt(e),o;if(t){var i=bt(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return ro(this,o)}}function Gm(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Zm(e,t){e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)}var Xm=function(e){Ti(n,e);var t=Qm(n);function n(r,o,i){var a,l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return xt(this,n),a=t.call(this),Oi&&en.call(Wt(a)),a.backend=r,a.store=o,a.services=i,a.languageUtils=i.languageUtils,a.options=l,a.logger=ht.create("backendConnector"),a.waitingReads=[],a.maxParallelReads=l.maxParallelReads||10,a.readingCalls=0,a.maxRetries=l.maxRetries>=0?l.maxRetries:5,a.retryTimeout=l.retryTimeout>=1?l.retryTimeout:350,a.state={},a.queue=[],a.backend&&a.backend.init&&a.backend.init(i,l.backend,l),a}return St(n,[{key:"queueLoad",value:function(o,i,a,l){var s=this,c={},m={},f={},g={};return o.forEach(function(v){var b=!0;i.forEach(function(w){var x="".concat(v,"|").concat(w);!a.reload&&s.store.hasResourceBundle(v,w)?s.state[x]=2:s.state[x]<0||(s.state[x]===1?m[x]===void 0&&(m[x]=!0):(s.state[x]=1,b=!1,m[x]===void 0&&(m[x]=!0),c[x]===void 0&&(c[x]=!0),g[w]===void 0&&(g[w]=!0)))}),b||(f[v]=!0)}),(Object.keys(c).length||Object.keys(m).length)&&this.queue.push({pending:m,pendingCount:Object.keys(m).length,loaded:{},errors:[],callback:l}),{toLoad:Object.keys(c),pending:Object.keys(m),toLoadLanguages:Object.keys(f),toLoadNamespaces:Object.keys(g)}}},{key:"loaded",value:function(o,i,a){var l=o.split("|"),s=l[0],c=l[1];i&&this.emit("failedLoading",s,c,i),a&&this.store.addResourceBundle(s,c,a),this.state[o]=i?-1:2;var m={};this.queue.forEach(function(f){zm(f.loaded,[s],c),Zm(f,o),i&&f.errors.push(i),f.pendingCount===0&&!f.done&&(Object.keys(f.loaded).forEach(function(g){m[g]||(m[g]={});var v=f.loaded[g];v.length&&v.forEach(function(b){m[g][b]===void 0&&(m[g][b]=!0)})}),f.done=!0,f.errors.length?f.callback(f.errors):f.callback())}),this.emit("loaded",m),this.queue=this.queue.filter(function(f){return!f.done})}},{key:"read",value:function(o,i,a){var l=this,s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,c=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,m=arguments.length>5?arguments[5]:void 0;if(!o.length)return m(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:o,ns:i,fcName:a,tried:s,wait:c,callback:m});return}this.readingCalls++;var f=function(w,x){if(l.readingCalls--,l.waitingReads.length>0){var p=l.waitingReads.shift();l.read(p.lng,p.ns,p.fcName,p.tried,p.wait,p.callback)}if(w&&x&&s<l.maxRetries){setTimeout(function(){l.read.call(l,o,i,a,s+1,c*2,m)},c);return}m(w,x)},g=this.backend[a].bind(this.backend);if(g.length===2){try{var v=g(o,i);v&&typeof v.then=="function"?v.then(function(b){return f(null,b)}).catch(f):f(null,v)}catch(b){f(b)}return}return g(o,i,f)}},{key:"prepareLoading",value:function(o,i){var a=this,l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),s&&s();typeof o=="string"&&(o=this.languageUtils.toResolveHierarchy(o)),typeof i=="string"&&(i=[i]);var c=this.queueLoad(o,i,l,s);if(!c.toLoad.length)return c.pending.length||s(),null;c.toLoad.forEach(function(m){a.loadOne(m)})}},{key:"load",value:function(o,i,a){this.prepareLoading(o,i,{},a)}},{key:"reload",value:function(o,i,a){this.prepareLoading(o,i,{reload:!0},a)}},{key:"loadOne",value:function(o){var i=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",l=o.split("|"),s=l[0],c=l[1];this.read(s,c,"read",void 0,void 0,function(m,f){m&&i.logger.warn("".concat(a,"loading namespace ").concat(c," for language ").concat(s," failed"),m),!m&&f&&i.logger.log("".concat(a,"loaded namespace ").concat(c," for language ").concat(s),f),i.loaded(o,m,f)})}},{key:"saveMissing",value:function(o,i,a,l,s){var c=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},m=arguments.length>6&&arguments[6]!==void 0?arguments[6]:function(){};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(i)){this.logger.warn('did not save key "'.concat(a,'" as the namespace "').concat(i,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(a==null||a==="")){if(this.backend&&this.backend.create){var f=Cu(Cu({},c),{},{isUpdate:s}),g=this.backend.create.bind(this.backend);if(g.length<6)try{var v;g.length===5?v=g(o,i,a,l,f):v=g(o,i,a,l),v&&typeof v.then=="function"?v.then(function(b){return m(null,b)}).catch(m):m(null,v)}catch(b){m(b)}else g(o,i,a,l,m,f)}!o||!o[0]||this.store.addResource(o[0],i,a,l)}}}]),n}(en);function Eu(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){var n={};if(nt(t[1])==="object"&&(n=t[1]),typeof t[1]=="string"&&(n.defaultValue=t[1]),typeof t[2]=="string"&&(n.tDescription=t[2]),nt(t[2])==="object"||nt(t[3])==="object"){var r=t[3]||t[2];Object.keys(r).forEach(function(o){n[o]=r[o]})}return n},interpolation:{escapeValue:!0,format:function(t,n,r,o){return t},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function Pu(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function Lu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function ut(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Lu(Object(n),!0).forEach(function(r){rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Jm(e){var t=qm();return function(){var r=bt(e),o;if(t){var i=bt(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return ro(this,o)}}function qm(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ho(){}function eg(e){var t=Object.getOwnPropertyNames(Object.getPrototypeOf(e));t.forEach(function(n){typeof e[n]=="function"&&(e[n]=e[n].bind(e))})}var Jo=function(e){Ti(n,e);var t=Jm(n);function n(){var r,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(xt(this,n),r=t.call(this),Oi&&en.call(Wt(r)),r.options=Pu(o),r.services={},r.logger=ht,r.modules={external:[]},eg(Wt(r)),i&&!r.isInitialized&&!o.isClone){if(!r.options.initImmediate)return r.init(o,i),ro(r,Wt(r));setTimeout(function(){r.init(o,i)},0)}return r}return St(n,[{key:"init",value:function(){var o=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;typeof i=="function"&&(a=i,i={}),!i.defaultNS&&i.defaultNS!==!1&&i.ns&&(typeof i.ns=="string"?i.defaultNS=i.ns:i.ns.indexOf("translation")<0&&(i.defaultNS=i.ns[0]));var l=Eu();this.options=ut(ut(ut({},l),this.options),Pu(i)),this.options.compatibilityAPI!=="v1"&&(this.options.interpolation=ut(ut({},l.interpolation),this.options.interpolation)),i.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=i.keySeparator),i.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=i.nsSeparator);function s(p){return p?typeof p=="function"?new p:p:null}if(!this.options.isClone){this.modules.logger?ht.init(s(this.modules.logger),this.options):ht.init(null,this.options);var c;this.modules.formatter?c=this.modules.formatter:typeof Intl<"u"&&(c=Ym);var m=new wu(this.options);this.store=new Am(this.options.resources,this.options);var f=this.services;f.logger=ht,f.resourceStore=this.store,f.languageUtils=m,f.pluralResolver=new Wm(m,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),c&&(!this.options.interpolation.format||this.options.interpolation.format===l.interpolation.format)&&(f.formatter=s(c),f.formatter.init(f,this.options),this.options.interpolation.format=f.formatter.format.bind(f.formatter)),f.interpolator=new Vm(this.options),f.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},f.backendConnector=new Xm(s(this.modules.backend),f.resourceStore,f,this.options),f.backendConnector.on("*",function(p){for(var u=arguments.length,d=new Array(u>1?u-1:0),y=1;y<u;y++)d[y-1]=arguments[y];o.emit.apply(o,[p].concat(d))}),this.modules.languageDetector&&(f.languageDetector=s(this.modules.languageDetector),f.languageDetector.init&&f.languageDetector.init(f,this.options.detection,this.options)),this.modules.i18nFormat&&(f.i18nFormat=s(this.modules.i18nFormat),f.i18nFormat.init&&f.i18nFormat.init(this)),this.translator=new vu(this.services,this.options),this.translator.on("*",function(p){for(var u=arguments.length,d=new Array(u>1?u-1:0),y=1;y<u;y++)d[y-1]=arguments[y];o.emit.apply(o,[p].concat(d))}),this.modules.external.forEach(function(p){p.init&&p.init(o)})}if(this.format=this.options.interpolation.format,a||(a=ho),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){var g=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);g.length>0&&g[0]!=="dev"&&(this.options.lng=g[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined");var v=["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"];v.forEach(function(p){o[p]=function(){var u;return(u=o.store)[p].apply(u,arguments)}});var b=["addResource","addResources","addResourceBundle","removeResourceBundle"];b.forEach(function(p){o[p]=function(){var u;return(u=o.store)[p].apply(u,arguments),o}});var w=fr(),x=function(){var u=function(y,k){o.isInitialized&&!o.initializedStoreOnce&&o.logger.warn("init: i18next is already initialized. You should call init just once!"),o.isInitialized=!0,o.options.isClone||o.logger.log("initialized",o.options),o.emit("initialized",o.options),w.resolve(k),a(y,k)};if(o.languages&&o.options.compatibilityAPI!=="v1"&&!o.isInitialized)return u(null,o.t.bind(o));o.changeLanguage(o.options.lng,u)};return this.options.resources||!this.options.initImmediate?x():setTimeout(x,0),w}},{key:"loadResources",value:function(o){var i=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ho,l=a,s=typeof o=="string"?o:this.language;if(typeof o=="function"&&(l=o),!this.options.resources||this.options.partialBundledLanguages){if(s&&s.toLowerCase()==="cimode")return l();var c=[],m=function(v){if(v){var b=i.services.languageUtils.toResolveHierarchy(v);b.forEach(function(w){c.indexOf(w)<0&&c.push(w)})}};if(s)m(s);else{var f=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);f.forEach(function(g){return m(g)})}this.options.preload&&this.options.preload.forEach(function(g){return m(g)}),this.services.backendConnector.load(c,this.options.ns,function(g){!g&&!i.resolvedLanguage&&i.language&&i.setResolvedLanguage(i.language),l(g)})}else l(null)}},{key:"reloadResources",value:function(o,i,a){var l=fr();return o||(o=this.languages),i||(i=this.options.ns),a||(a=ho),this.services.backendConnector.reload(o,i,function(s){l.resolve(),a(s)}),l}},{key:"use",value:function(o){if(!o)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!o.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return o.type==="backend"&&(this.modules.backend=o),(o.type==="logger"||o.log&&o.warn&&o.error)&&(this.modules.logger=o),o.type==="languageDetector"&&(this.modules.languageDetector=o),o.type==="i18nFormat"&&(this.modules.i18nFormat=o),o.type==="postProcessor"&&Sd.addPostProcessor(o),o.type==="formatter"&&(this.modules.formatter=o),o.type==="3rdParty"&&this.modules.external.push(o),this}},{key:"setResolvedLanguage",value:function(o){if(!(!o||!this.languages)&&!(["cimode","dev"].indexOf(o)>-1))for(var i=0;i<this.languages.length;i++){var a=this.languages[i];if(!(["cimode","dev"].indexOf(a)>-1)&&this.store.hasLanguageSomeTranslations(a)){this.resolvedLanguage=a;break}}}},{key:"changeLanguage",value:function(o,i){var a=this;this.isLanguageChangingTo=o;var l=fr();this.emit("languageChanging",o);var s=function(g){a.language=g,a.languages=a.services.languageUtils.toResolveHierarchy(g),a.resolvedLanguage=void 0,a.setResolvedLanguage(g)},c=function(g,v){v?(s(v),a.translator.changeLanguage(v),a.isLanguageChangingTo=void 0,a.emit("languageChanged",v),a.logger.log("languageChanged",v)):a.isLanguageChangingTo=void 0,l.resolve(function(){return a.t.apply(a,arguments)}),i&&i(g,function(){return a.t.apply(a,arguments)})},m=function(g){!o&&!g&&a.services.languageDetector&&(g=[]);var v=typeof g=="string"?g:a.services.languageUtils.getBestMatchFromCodes(g);v&&(a.language||s(v),a.translator.language||a.translator.changeLanguage(v),a.services.languageDetector&&a.services.languageDetector.cacheUserLanguage&&a.services.languageDetector.cacheUserLanguage(v)),a.loadResources(v,function(b){c(b,v)})};return!o&&this.services.languageDetector&&!this.services.languageDetector.async?m(this.services.languageDetector.detect()):!o&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(m):this.services.languageDetector.detect(m):m(o),l}},{key:"getFixedT",value:function(o,i,a){var l=this,s=function c(m,f){var g;if(nt(f)!=="object"){for(var v=arguments.length,b=new Array(v>2?v-2:0),w=2;w<v;w++)b[w-2]=arguments[w];g=l.options.overloadTranslationOptionHandler([m,f].concat(b))}else g=ut({},f);g.lng=g.lng||c.lng,g.lngs=g.lngs||c.lngs,g.ns=g.ns||c.ns,g.keyPrefix=g.keyPrefix||a||c.keyPrefix;var x=l.options.keySeparator||".",p;return g.keyPrefix&&Array.isArray(m)?p=m.map(function(u){return"".concat(g.keyPrefix).concat(x).concat(u)}):p=g.keyPrefix?"".concat(g.keyPrefix).concat(x).concat(m):m,l.t(p,g)};return typeof o=="string"?s.lng=o:s.lngs=o,s.ns=i,s.keyPrefix=a,s}},{key:"t",value:function(){var o;return this.translator&&(o=this.translator).translate.apply(o,arguments)}},{key:"exists",value:function(){var o;return this.translator&&(o=this.translator).exists.apply(o,arguments)}},{key:"setDefaultNamespace",value:function(o){this.options.defaultNS=o}},{key:"hasLoadedNamespace",value:function(o){var i=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var l=this.resolvedLanguage||this.languages[0],s=this.options?this.options.fallbackLng:!1,c=this.languages[this.languages.length-1];if(l.toLowerCase()==="cimode")return!0;var m=function(v,b){var w=i.services.backendConnector.state["".concat(v,"|").concat(b)];return w===-1||w===2};if(a.precheck){var f=a.precheck(this,m);if(f!==void 0)return f}return!!(this.hasResourceBundle(l,o)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||m(l,o)&&(!s||m(c,o)))}},{key:"loadNamespaces",value:function(o,i){var a=this,l=fr();return this.options.ns?(typeof o=="string"&&(o=[o]),o.forEach(function(s){a.options.ns.indexOf(s)<0&&a.options.ns.push(s)}),this.loadResources(function(s){l.resolve(),i&&i(s)}),l):(i&&i(),Promise.resolve())}},{key:"loadLanguages",value:function(o,i){var a=fr();typeof o=="string"&&(o=[o]);var l=this.options.preload||[],s=o.filter(function(c){return l.indexOf(c)<0});return s.length?(this.options.preload=l.concat(s),this.loadResources(function(c){a.resolve(),i&&i(c)}),a):(i&&i(),Promise.resolve())}},{key:"dir",value:function(o){if(o||(o=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!o)return"rtl";var i=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],a=this.services&&this.services.languageUtils||new wu(Eu());return i.indexOf(a.getLanguagePartFromCode(o))>-1||o.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}},{key:"cloneInstance",value:function(){var o=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ho,l=ut(ut(ut({},this.options),i),{isClone:!0}),s=new n(l);(i.debug!==void 0||i.prefix!==void 0)&&(s.logger=s.logger.clone(i));var c=["store","services","language"];return c.forEach(function(m){s[m]=o[m]}),s.services=ut({},this.services),s.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},s.translator=new vu(s.services,s.options),s.translator.on("*",function(m){for(var f=arguments.length,g=new Array(f>1?f-1:0),v=1;v<f;v++)g[v-1]=arguments[v];s.emit.apply(s,[m].concat(g))}),s.init(l,a),s.translator.options=s.options,s.translator.backendConnector.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},s}},{key:"toJSON",value:function(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}]),n}(en);rn(Jo,"createInstance",function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new Jo(e,t)});var be=Jo.createInstance();be.createInstance=Jo.createInstance;be.createInstance;be.dir;be.init;be.loadResources;be.reloadResources;be.use;be.changeLanguage;be.getFixedT;be.t;be.exists;be.setDefaultNamespace;be.hasLoadedNamespace;be.loadNamespaces;be.loadLanguages;function Zn(e){return Zn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Zn(e)}function tg(e,t){if(Zn(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Zn(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Cd(e){var t=tg(e,"string");return Zn(t)==="symbol"?t:String(t)}function Ed(e,t,n){return t=Cd(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Tu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ng(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var P={},rg={get exports(){return P},set exports(e){P=e}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oo=Symbol.for("react.element"),og=Symbol.for("react.portal"),ig=Symbol.for("react.fragment"),ag=Symbol.for("react.strict_mode"),lg=Symbol.for("react.profiler"),sg=Symbol.for("react.provider"),ug=Symbol.for("react.context"),cg=Symbol.for("react.forward_ref"),dg=Symbol.for("react.suspense"),fg=Symbol.for("react.memo"),pg=Symbol.for("react.lazy"),Ou=Symbol.iterator;function mg(e){return e===null||typeof e!="object"?null:(e=Ou&&e[Ou]||e["@@iterator"],typeof e=="function"?e:null)}var Pd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ld=Object.assign,Td={};function ir(e,t,n){this.props=e,this.context=t,this.refs=Td,this.updater=n||Pd}ir.prototype.isReactComponent={};ir.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Od(){}Od.prototype=ir.prototype;function Ql(e,t,n){this.props=e,this.context=t,this.refs=Td,this.updater=n||Pd}var Gl=Ql.prototype=new Od;Gl.constructor=Ql;Ld(Gl,ir.prototype);Gl.isPureReactComponent=!0;var zu=Array.isArray,zd=Object.prototype.hasOwnProperty,Zl={current:null},_d={key:!0,ref:!0,__self:!0,__source:!0};function Rd(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)zd.call(t,r)&&!_d.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:oo,type:e,key:i,ref:a,props:o,_owner:Zl.current}}function gg(e,t){return{$$typeof:oo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Xl(e){return typeof e=="object"&&e!==null&&e.$$typeof===oo}function hg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var _u=/\/+/g;function ua(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hg(""+e.key):t.toString(36)}function Io(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case oo:case og:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+ua(a,0):r,zu(o)?(n="",e!=null&&(n=e.replace(_u,"$&/")+"/"),Io(o,t,n,"",function(c){return c})):o!=null&&(Xl(o)&&(o=gg(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(_u,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",zu(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+ua(i,l);a+=Io(i,t,n,s,o)}else if(s=mg(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+ua(i,l++),a+=Io(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function yo(e,t,n){if(e==null)return e;var r=[],o=0;return Io(e,r,"","",function(i){return t.call(n,i,o++)}),r}function yg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},Ao={transition:null},vg={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:Ao,ReactCurrentOwner:Zl};I.Children={map:yo,forEach:function(e,t,n){yo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return yo(e,function(){t++}),t},toArray:function(e){return yo(e,function(t){return t})||[]},only:function(e){if(!Xl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=ir;I.Fragment=ig;I.Profiler=lg;I.PureComponent=Ql;I.StrictMode=ag;I.Suspense=dg;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vg;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ld({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Zl.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)zd.call(t,s)&&!_d.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:oo,type:e.type,key:o,ref:i,props:r,_owner:a}};I.createContext=function(e){return e={$$typeof:ug,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:sg,_context:e},e.Consumer=e};I.createElement=Rd;I.createFactory=function(e){var t=Rd.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:cg,render:e}};I.isValidElement=Xl;I.lazy=function(e){return{$$typeof:pg,_payload:{_status:-1,_result:e},_init:yg}};I.memo=function(e,t){return{$$typeof:fg,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=Ao.transition;Ao.transition={};try{e()}finally{Ao.transition=t}};I.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};I.useCallback=function(e,t){return Ce.current.useCallback(e,t)};I.useContext=function(e){return Ce.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};I.useEffect=function(e,t){return Ce.current.useEffect(e,t)};I.useId=function(){return Ce.current.useId()};I.useImperativeHandle=function(e,t,n){return Ce.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return Ce.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return Ce.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return Ce.current.useMemo(e,t)};I.useReducer=function(e,t,n){return Ce.current.useReducer(e,t,n)};I.useRef=function(e){return Ce.current.useRef(e)};I.useState=function(e){return Ce.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return Ce.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return Ce.current.useTransition()};I.version="18.2.0";(function(e){e.exports=I})(rg);const io=ng(P),Fr=bm({__proto__:null,default:io},[P]);function wg(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];typeof n[0]=="string"&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var Ru={};function Ha(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&Ru[t[0]]||(typeof t[0]=="string"&&(Ru[t[0]]=new Date),wg.apply(void 0,t))}function $u(e,t,n){e.loadNamespaces(t,function(){if(e.isInitialized)n();else{var r=function o(){setTimeout(function(){e.off("initialized",o)},0),n()};e.on("initialized",r)}})}function bg(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=t.languages[0],o=t.options?t.options.fallbackLng:!1,i=t.languages[t.languages.length-1];if(r.toLowerCase()==="cimode")return!0;var a=function(s,c){var m=t.services.backendConnector.state["".concat(s,"|").concat(c)];return m===-1||m===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||a(r,e)&&(!o||a(i,e)))}function kg(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!t.languages||!t.languages.length)return Ha("i18n.languages were undefined or empty",t.languages),!0;var r=t.options.ignoreJSONStructure!==void 0;return r?t.hasLoadedNamespace(e,{precheck:function(i,a){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!a(i.isLanguageChangingTo,e))return!1}}):bg(e,t,n)}var xg=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,Sg={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},Cg=function(t){return Sg[t]},Eg=function(t){return t.replace(xg,Cg)};function Nu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Fu(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Nu(Object(n),!0).forEach(function(r){Ed(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Nu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Ua={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:Eg};function Pg(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ua=Fu(Fu({},Ua),e)}function Lg(){return Ua}var $d;function Tg(e){$d=e}function Og(){return $d}function zg(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Iu(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Cd(r.key),r)}}function _g(e,t,n){return t&&Iu(e.prototype,t),n&&Iu(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var Rg={type:"3rdParty",init:function(t){Pg(t.options.react),Tg(t)}},$g=P.createContext(),Ng=function(){function e(){zg(this,e),this.usedNamespaces={}}return _g(e,[{key:"addUsedNamespaces",value:function(n){var r=this;n.forEach(function(o){r.usedNamespaces[o]||(r.usedNamespaces[o]=!0)})}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function Fg(e){if(Array.isArray(e))return e}function Ig(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,i,a,l=[],s=!0,c=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(m){c=!0,o=m}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}function Au(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ag(e,t){if(e){if(typeof e=="string")return Au(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Au(e,t)}}function jg(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mg(e,t){return Fg(e)||Ig(e,t)||Ag(e,t)||jg()}function ju(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function ca(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ju(Object(n),!0).forEach(function(r){Ed(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ju(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Dg=function(t,n){var r=P.useRef();return P.useEffect(function(){r.current=n?r.current:t},[t,n]),r.current};function Jl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.i18n,r=P.useContext($g)||{},o=r.i18n,i=r.defaultNS,a=n||o||Og();if(a&&!a.reportNamespaces&&(a.reportNamespaces=new Ng),!a){Ha("You will need to pass in an i18next instance by using initReactI18next");var l=function(T,_){return typeof _=="string"?_:_&&Zn(_)==="object"&&typeof _.defaultValue=="string"?_.defaultValue:Array.isArray(T)?T[T.length-1]:T},s=[l,{},!1];return s.t=l,s.i18n={},s.ready=!1,s}a.options.react&&a.options.react.wait!==void 0&&Ha("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var c=ca(ca(ca({},Lg()),a.options.react),t),m=c.useSuspense,f=c.keyPrefix,g=e||i||a.options&&a.options.defaultNS;g=typeof g=="string"?[g]:g||["translation"],a.reportNamespaces.addUsedNamespaces&&a.reportNamespaces.addUsedNamespaces(g);var v=(a.isInitialized||a.initializedStoreOnce)&&g.every(function(L){return kg(L,a,c)});function b(){return a.getFixedT(null,c.nsMode==="fallback"?g:g[0],f)}var w=P.useState(b),x=Mg(w,2),p=x[0],u=x[1],d=g.join(),y=Dg(d),k=P.useRef(!0);P.useEffect(function(){var L=c.bindI18n,T=c.bindI18nStore;k.current=!0,!v&&!m&&$u(a,g,function(){k.current&&u(b)}),v&&y&&y!==d&&k.current&&u(b);function _(){k.current&&u(b)}return L&&a&&a.on(L,_),T&&a&&a.store.on(T,_),function(){k.current=!1,L&&a&&L.split(" ").forEach(function(A){return a.off(A,_)}),T&&a&&T.split(" ").forEach(function(A){return a.store.off(A,_)})}},[a,d]);var S=P.useRef(!0);P.useEffect(function(){k.current&&!S.current&&u(b),S.current=!1},[a,f]);var E=[p,a,v];if(E.t=p,E.i18n=a,E.ready=v,v||!v&&!m)return E;throw new Promise(function(L){$u(a,g,function(){L()})})}const Bg={EA:"EA",indicator:"Indicator",projects:"Projects"},Hg={title:"👋 Hi! I'm Agus Pujianto",description:"Founder of Dagangduit.com — creating smart trading systems, expert advisors, and AI-powered financial tools to help traders grow consistently.",link:"Explore Projects"},Ug="MMM dd, yyyy",Wg={title:"Comments",btn:"Click to Comment",owner:"Author"},Vg={title:"Projects"},Kg={tab:Bg,intro:Hg,dateFormat:Ug,comment:Wg,projects:Vg},Yg={translation:Kg},Qg="translation",Gg={en:Yg},Zg="en",Xg=localStorage.getItem("language");be.use(Rg).init({resources:Gg,defaultNS:Qg,lng:Xg||Zg});var Wa={},Jg={get exports(){return Wa},set exports(e){Wa=e}},je={},Va={},qg={get exports(){return Va},set exports(e){Va=e}},Nd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,$){var N=z.length;z.push($);e:for(;0<N;){var M=N-1>>>1,D=z[M];if(0<o(D,$))z[M]=$,z[N]=D,N=M;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var $=z[0],N=z.pop();if(N!==$){z[0]=N;e:for(var M=0,D=z.length,Ft=D>>>1;M<Ft;){var J=2*(M+1)-1,Ue=z[J],le=J+1,Pe=z[le];if(0>o(Ue,N))le<D&&0>o(Pe,Ue)?(z[M]=Pe,z[le]=N,M=le):(z[M]=Ue,z[J]=N,M=J);else if(le<D&&0>o(Pe,N))z[M]=Pe,z[le]=N,M=le;else break e}}return $}function o(z,$){var N=z.sortIndex-$.sortIndex;return N!==0?N:z.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],c=[],m=1,f=null,g=3,v=!1,b=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(z){for(var $=n(c);$!==null;){if($.callback===null)r(c);else if($.startTime<=z)r(c),$.sortIndex=$.expirationTime,t(s,$);else break;$=n(c)}}function y(z){if(w=!1,d(z),!b)if(n(s)!==null)b=!0,lt(k);else{var $=n(c);$!==null&&He(y,$.startTime-z)}}function k(z,$){b=!1,w&&(w=!1,p(L),L=-1),v=!0;var N=g;try{for(d($),f=n(s);f!==null&&(!(f.expirationTime>$)||z&&!A());){var M=f.callback;if(typeof M=="function"){f.callback=null,g=f.priorityLevel;var D=M(f.expirationTime<=$);$=e.unstable_now(),typeof D=="function"?f.callback=D:f===n(s)&&r(s),d($)}else r(s);f=n(s)}if(f!==null)var Ft=!0;else{var J=n(c);J!==null&&He(y,J.startTime-$),Ft=!1}return Ft}finally{f=null,g=N,v=!1}}var S=!1,E=null,L=-1,T=5,_=-1;function A(){return!(e.unstable_now()-_<T)}function re(){if(E!==null){var z=e.unstable_now();_=z;var $=!0;try{$=E(!0,z)}finally{$?at():(S=!1,E=null)}}else S=!1}var at;if(typeof u=="function")at=function(){u(re)};else if(typeof MessageChannel<"u"){var Be=new MessageChannel,Pn=Be.port2;Be.port1.onmessage=re,at=function(){Pn.postMessage(null)}}else at=function(){x(re,0)};function lt(z){E=z,S||(S=!0,at())}function He(z,$){L=x(function(){z(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){b||v||(b=!0,lt(k))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(z){switch(g){case 1:case 2:case 3:var $=3;break;default:$=g}var N=g;g=$;try{return z()}finally{g=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,$){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var N=g;g=z;try{return $()}finally{g=N}},e.unstable_scheduleCallback=function(z,$,N){var M=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?M+N:M):N=M,z){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=N+D,z={id:m++,callback:$,priorityLevel:z,startTime:N,expirationTime:D,sortIndex:-1},N>M?(z.sortIndex=N,t(c,z),n(s)===null&&z===n(c)&&(w?(p(L),L=-1):w=!0,He(y,N-M))):(z.sortIndex=D,t(s,z),b||v||(b=!0,lt(k))),z},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(z){var $=g;return function(){var N=g;g=$;try{return z.apply(this,arguments)}finally{g=N}}}})(Nd);(function(e){e.exports=Nd})(qg);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fd=P,Ae=Va;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Id=new Set,Ir={};function Sn(e,t){Xn(e,t),Xn(e+"Capture",t)}function Xn(e,t){for(Ir[e]=t,e=0;e<t.length;e++)Id.add(t[e])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ka=Object.prototype.hasOwnProperty,eh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mu={},Du={};function th(e){return Ka.call(Du,e)?!0:Ka.call(Mu,e)?!1:eh.test(e)?Du[e]=!0:(Mu[e]=!0,!1)}function nh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function rh(e,t,n,r){if(t===null||typeof t>"u"||nh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ee(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new Ee(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new Ee(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new Ee(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new Ee(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new Ee(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new Ee(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var ql=/[\-:]([a-z])/g;function es(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ql,es);me[t]=new Ee(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ql,es);me[t]=new Ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ql,es);me[t]=new Ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function ts(e,t,n,r){var o=me.hasOwnProperty(t)?me[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(rh(t,n,o,r)&&(n=null),r||o===null?th(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Nt=Fd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vo=Symbol.for("react.element"),_n=Symbol.for("react.portal"),Rn=Symbol.for("react.fragment"),ns=Symbol.for("react.strict_mode"),Ya=Symbol.for("react.profiler"),Ad=Symbol.for("react.provider"),jd=Symbol.for("react.context"),rs=Symbol.for("react.forward_ref"),Qa=Symbol.for("react.suspense"),Ga=Symbol.for("react.suspense_list"),os=Symbol.for("react.memo"),At=Symbol.for("react.lazy"),Md=Symbol.for("react.offscreen"),Bu=Symbol.iterator;function pr(e){return e===null||typeof e!="object"?null:(e=Bu&&e[Bu]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,da;function xr(e){if(da===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);da=t&&t[1]||""}return`
`+da+e}var fa=!1;function pa(e,t){if(!e||fa)return"";fa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{fa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xr(e):""}function oh(e){switch(e.tag){case 5:return xr(e.type);case 16:return xr("Lazy");case 13:return xr("Suspense");case 19:return xr("SuspenseList");case 0:case 2:case 15:return e=pa(e.type,!1),e;case 11:return e=pa(e.type.render,!1),e;case 1:return e=pa(e.type,!0),e;default:return""}}function Za(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rn:return"Fragment";case _n:return"Portal";case Ya:return"Profiler";case ns:return"StrictMode";case Qa:return"Suspense";case Ga:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case jd:return(e.displayName||"Context")+".Consumer";case Ad:return(e._context.displayName||"Context")+".Provider";case rs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case os:return t=e.displayName||null,t!==null?t:Za(e.type)||"Memo";case At:t=e._payload,e=e._init;try{return Za(e(t))}catch{}}return null}function ih(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Za(t);case 8:return t===ns?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function tn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Dd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ah(e){var t=Dd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wo(e){e._valueTracker||(e._valueTracker=ah(e))}function Bd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Dd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function qo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xa(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Hu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=tn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Hd(e,t){t=t.checked,t!=null&&ts(e,"checked",t,!1)}function Ja(e,t){Hd(e,t);var n=tn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?qa(e,t.type,n):t.hasOwnProperty("defaultValue")&&qa(e,t.type,tn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Uu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function qa(e,t,n){(t!=="number"||qo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Sr=Array.isArray;function Un(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+tn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function el(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(O(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(O(92));if(Sr(n)){if(1<n.length)throw Error(O(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:tn(n)}}function Ud(e,t){var n=tn(t.value),r=tn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Vu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Wd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var bo,Vd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(bo=bo||document.createElement("div"),bo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=bo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ar(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lh=["Webkit","ms","Moz","O"];Object.keys(Pr).forEach(function(e){lh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Pr[t]=Pr[e]})});function Kd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Pr.hasOwnProperty(e)&&Pr[e]?(""+t).trim():t+"px"}function Yd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Kd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var sh=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nl(e,t){if(t){if(sh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(O(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(O(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(O(61))}if(t.style!=null&&typeof t.style!="object")throw Error(O(62))}}function rl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ol=null;function is(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var il=null,Wn=null,Vn=null;function Ku(e){if(e=so(e)){if(typeof il!="function")throw Error(O(280));var t=e.stateNode;t&&(t=Ni(t),il(e.stateNode,e.type,t))}}function Qd(e){Wn?Vn?Vn.push(e):Vn=[e]:Wn=e}function Gd(){if(Wn){var e=Wn,t=Vn;if(Vn=Wn=null,Ku(e),t)for(e=0;e<t.length;e++)Ku(t[e])}}function Zd(e,t){return e(t)}function Xd(){}var ma=!1;function Jd(e,t,n){if(ma)return e(t,n);ma=!0;try{return Zd(e,t,n)}finally{ma=!1,(Wn!==null||Vn!==null)&&(Xd(),Gd())}}function jr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ni(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(O(231,t,typeof n));return n}var al=!1;if(zt)try{var mr={};Object.defineProperty(mr,"passive",{get:function(){al=!0}}),window.addEventListener("test",mr,mr),window.removeEventListener("test",mr,mr)}catch{al=!1}function uh(e,t,n,r,o,i,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var Lr=!1,ei=null,ti=!1,ll=null,ch={onError:function(e){Lr=!0,ei=e}};function dh(e,t,n,r,o,i,a,l,s){Lr=!1,ei=null,uh.apply(ch,arguments)}function fh(e,t,n,r,o,i,a,l,s){if(dh.apply(this,arguments),Lr){if(Lr){var c=ei;Lr=!1,ei=null}else throw Error(O(198));ti||(ti=!0,ll=c)}}function Cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Yu(e){if(Cn(e)!==e)throw Error(O(188))}function ph(e){var t=e.alternate;if(!t){if(t=Cn(e),t===null)throw Error(O(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Yu(o),e;if(i===r)return Yu(o),t;i=i.sibling}throw Error(O(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?e:t}function ef(e){return e=ph(e),e!==null?tf(e):null}function tf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=tf(e);if(t!==null)return t;e=e.sibling}return null}var nf=Ae.unstable_scheduleCallback,Qu=Ae.unstable_cancelCallback,mh=Ae.unstable_shouldYield,gh=Ae.unstable_requestPaint,ee=Ae.unstable_now,hh=Ae.unstable_getCurrentPriorityLevel,as=Ae.unstable_ImmediatePriority,rf=Ae.unstable_UserBlockingPriority,ni=Ae.unstable_NormalPriority,yh=Ae.unstable_LowPriority,of=Ae.unstable_IdlePriority,zi=null,yt=null;function vh(e){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(zi,e,void 0,(e.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:kh,wh=Math.log,bh=Math.LN2;function kh(e){return e>>>=0,e===0?32:31-(wh(e)/bh|0)|0}var ko=64,xo=4194304;function Cr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ri(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=Cr(l):(i&=a,i!==0&&(r=Cr(i)))}else a=n&~o,a!==0?r=Cr(a):i!==0&&(r=Cr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-rt(t),o=1<<n,r|=e[n],t&=~o;return r}function xh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-rt(i),l=1<<a,s=o[a];s===-1?(!(l&n)||l&r)&&(o[a]=xh(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function sl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function af(){var e=ko;return ko<<=1,!(ko&4194240)&&(ko=64),e}function ga(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ao(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-rt(t),e[t]=n}function Ch(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-rt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ls(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-rt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var U=0;function lf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var sf,ss,uf,cf,df,ul=!1,So=[],Vt=null,Kt=null,Yt=null,Mr=new Map,Dr=new Map,Mt=[],Eh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gu(e,t){switch(e){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":Yt=null;break;case"pointerover":case"pointerout":Mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dr.delete(t.pointerId)}}function gr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=so(t),t!==null&&ss(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Ph(e,t,n,r,o){switch(t){case"focusin":return Vt=gr(Vt,e,t,n,r,o),!0;case"dragenter":return Kt=gr(Kt,e,t,n,r,o),!0;case"mouseover":return Yt=gr(Yt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Mr.set(i,gr(Mr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Dr.set(i,gr(Dr.get(i)||null,e,t,n,r,o)),!0}return!1}function ff(e){var t=pn(e.target);if(t!==null){var n=Cn(t);if(n!==null){if(t=n.tag,t===13){if(t=qd(n),t!==null){e.blockedOn=t,df(e.priority,function(){uf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=cl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ol=r,n.target.dispatchEvent(r),ol=null}else return t=so(n),t!==null&&ss(t),e.blockedOn=n,!1;t.shift()}return!0}function Zu(e,t,n){jo(e)&&n.delete(t)}function Lh(){ul=!1,Vt!==null&&jo(Vt)&&(Vt=null),Kt!==null&&jo(Kt)&&(Kt=null),Yt!==null&&jo(Yt)&&(Yt=null),Mr.forEach(Zu),Dr.forEach(Zu)}function hr(e,t){e.blockedOn===t&&(e.blockedOn=null,ul||(ul=!0,Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority,Lh)))}function Br(e){function t(o){return hr(o,e)}if(0<So.length){hr(So[0],e);for(var n=1;n<So.length;n++){var r=So[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Vt!==null&&hr(Vt,e),Kt!==null&&hr(Kt,e),Yt!==null&&hr(Yt,e),Mr.forEach(t),Dr.forEach(t),n=0;n<Mt.length;n++)r=Mt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Mt.length&&(n=Mt[0],n.blockedOn===null);)ff(n),n.blockedOn===null&&Mt.shift()}var Kn=Nt.ReactCurrentBatchConfig,oi=!0;function Th(e,t,n,r){var o=U,i=Kn.transition;Kn.transition=null;try{U=1,us(e,t,n,r)}finally{U=o,Kn.transition=i}}function Oh(e,t,n,r){var o=U,i=Kn.transition;Kn.transition=null;try{U=4,us(e,t,n,r)}finally{U=o,Kn.transition=i}}function us(e,t,n,r){if(oi){var o=cl(e,t,n,r);if(o===null)Ea(e,t,r,ii,n),Gu(e,r);else if(Ph(o,e,t,n,r))r.stopPropagation();else if(Gu(e,r),t&4&&-1<Eh.indexOf(e)){for(;o!==null;){var i=so(o);if(i!==null&&sf(i),i=cl(e,t,n,r),i===null&&Ea(e,t,r,ii,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ea(e,t,r,null,n)}}var ii=null;function cl(e,t,n,r){if(ii=null,e=is(r),e=pn(e),e!==null)if(t=Cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=qd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ii=e,null}function pf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hh()){case as:return 1;case rf:return 4;case ni:case yh:return 16;case of:return 536870912;default:return 16}default:return 16}}var Bt=null,cs=null,Mo=null;function mf(){if(Mo)return Mo;var e,t=cs,n=t.length,r,o="value"in Bt?Bt.value:Bt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Mo=o.slice(e,1<r?1-r:void 0)}function Do(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Co(){return!0}function Xu(){return!1}function Me(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Co:Xu,this.isPropagationStopped=Xu,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Co)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Co)},persist:function(){},isPersistent:Co}),t}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ds=Me(ar),lo=X({},ar,{view:0,detail:0}),zh=Me(lo),ha,ya,yr,_i=X({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yr&&(yr&&e.type==="mousemove"?(ha=e.screenX-yr.screenX,ya=e.screenY-yr.screenY):ya=ha=0,yr=e),ha)},movementY:function(e){return"movementY"in e?e.movementY:ya}}),Ju=Me(_i),_h=X({},_i,{dataTransfer:0}),Rh=Me(_h),$h=X({},lo,{relatedTarget:0}),va=Me($h),Nh=X({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),Fh=Me(Nh),Ih=X({},ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ah=Me(Ih),jh=X({},ar,{data:0}),qu=Me(jh),Mh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Bh[e])?!!t[e]:!1}function fs(){return Hh}var Uh=X({},lo,{key:function(e){if(e.key){var t=Mh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Do(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fs,charCode:function(e){return e.type==="keypress"?Do(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Do(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wh=Me(Uh),Vh=X({},_i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ec=Me(Vh),Kh=X({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fs}),Yh=Me(Kh),Qh=X({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gh=Me(Qh),Zh=X({},_i,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xh=Me(Zh),Jh=[9,13,27,32],ps=zt&&"CompositionEvent"in window,Tr=null;zt&&"documentMode"in document&&(Tr=document.documentMode);var qh=zt&&"TextEvent"in window&&!Tr,gf=zt&&(!ps||Tr&&8<Tr&&11>=Tr),tc=String.fromCharCode(32),nc=!1;function hf(e,t){switch(e){case"keyup":return Jh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function e0(e,t){switch(e){case"compositionend":return yf(t);case"keypress":return t.which!==32?null:(nc=!0,tc);case"textInput":return e=t.data,e===tc&&nc?null:e;default:return null}}function t0(e,t){if($n)return e==="compositionend"||!ps&&hf(e,t)?(e=mf(),Mo=cs=Bt=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gf&&t.locale!=="ko"?null:t.data;default:return null}}var n0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!n0[e.type]:t==="textarea"}function vf(e,t,n,r){Qd(r),t=ai(t,"onChange"),0<t.length&&(n=new ds("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Or=null,Hr=null;function r0(e){Of(e,0)}function Ri(e){var t=In(e);if(Bd(t))return e}function o0(e,t){if(e==="change")return t}var wf=!1;if(zt){var wa;if(zt){var ba="oninput"in document;if(!ba){var oc=document.createElement("div");oc.setAttribute("oninput","return;"),ba=typeof oc.oninput=="function"}wa=ba}else wa=!1;wf=wa&&(!document.documentMode||9<document.documentMode)}function ic(){Or&&(Or.detachEvent("onpropertychange",bf),Hr=Or=null)}function bf(e){if(e.propertyName==="value"&&Ri(Hr)){var t=[];vf(t,Hr,e,is(e)),Jd(r0,t)}}function i0(e,t,n){e==="focusin"?(ic(),Or=t,Hr=n,Or.attachEvent("onpropertychange",bf)):e==="focusout"&&ic()}function a0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ri(Hr)}function l0(e,t){if(e==="click")return Ri(t)}function s0(e,t){if(e==="input"||e==="change")return Ri(t)}function u0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var it=typeof Object.is=="function"?Object.is:u0;function Ur(e,t){if(it(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ka.call(t,o)||!it(e[o],t[o]))return!1}return!0}function ac(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lc(e,t){var n=ac(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ac(n)}}function kf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xf(){for(var e=window,t=qo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=qo(e.document)}return t}function ms(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function c0(e){var t=xf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&kf(n.ownerDocument.documentElement,n)){if(r!==null&&ms(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=lc(n,i);var a=lc(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var d0=zt&&"documentMode"in document&&11>=document.documentMode,Nn=null,dl=null,zr=null,fl=!1;function sc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fl||Nn==null||Nn!==qo(r)||(r=Nn,"selectionStart"in r&&ms(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&Ur(zr,r)||(zr=r,r=ai(dl,"onSelect"),0<r.length&&(t=new ds("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Nn)))}function Eo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Fn={animationend:Eo("Animation","AnimationEnd"),animationiteration:Eo("Animation","AnimationIteration"),animationstart:Eo("Animation","AnimationStart"),transitionend:Eo("Transition","TransitionEnd")},ka={},Sf={};zt&&(Sf=document.createElement("div").style,"AnimationEvent"in window||(delete Fn.animationend.animation,delete Fn.animationiteration.animation,delete Fn.animationstart.animation),"TransitionEvent"in window||delete Fn.transitionend.transition);function $i(e){if(ka[e])return ka[e];if(!Fn[e])return e;var t=Fn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Sf)return ka[e]=t[n];return e}var Cf=$i("animationend"),Ef=$i("animationiteration"),Pf=$i("animationstart"),Lf=$i("transitionend"),Tf=new Map,uc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function on(e,t){Tf.set(e,t),Sn(t,[e])}for(var xa=0;xa<uc.length;xa++){var Sa=uc[xa],f0=Sa.toLowerCase(),p0=Sa[0].toUpperCase()+Sa.slice(1);on(f0,"on"+p0)}on(Cf,"onAnimationEnd");on(Ef,"onAnimationIteration");on(Pf,"onAnimationStart");on("dblclick","onDoubleClick");on("focusin","onFocus");on("focusout","onBlur");on(Lf,"onTransitionEnd");Xn("onMouseEnter",["mouseout","mouseover"]);Xn("onMouseLeave",["mouseout","mouseover"]);Xn("onPointerEnter",["pointerout","pointerover"]);Xn("onPointerLeave",["pointerout","pointerover"]);Sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),m0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));function cc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,fh(r,t,void 0,e),e.currentTarget=null}function Of(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;cc(o,l,c),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,c=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;cc(o,l,c),i=s}}}if(ti)throw e=ll,ti=!1,ll=null,e}function K(e,t){var n=t[yl];n===void 0&&(n=t[yl]=new Set);var r=e+"__bubble";n.has(r)||(zf(t,e,2,!1),n.add(r))}function Ca(e,t,n){var r=0;t&&(r|=4),zf(n,e,r,t)}var Po="_reactListening"+Math.random().toString(36).slice(2);function Wr(e){if(!e[Po]){e[Po]=!0,Id.forEach(function(n){n!=="selectionchange"&&(m0.has(n)||Ca(n,!1,e),Ca(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Po]||(t[Po]=!0,Ca("selectionchange",!1,t))}}function zf(e,t,n,r){switch(pf(t)){case 1:var o=Th;break;case 4:o=Oh;break;default:o=us}n=o.bind(null,t,n,e),o=void 0,!al||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ea(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=pn(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}Jd(function(){var c=i,m=is(n),f=[];e:{var g=Tf.get(e);if(g!==void 0){var v=ds,b=e;switch(e){case"keypress":if(Do(n)===0)break e;case"keydown":case"keyup":v=Wh;break;case"focusin":b="focus",v=va;break;case"focusout":b="blur",v=va;break;case"beforeblur":case"afterblur":v=va;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ju;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Rh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Yh;break;case Cf:case Ef:case Pf:v=Fh;break;case Lf:v=Gh;break;case"scroll":v=zh;break;case"wheel":v=Xh;break;case"copy":case"cut":case"paste":v=Ah;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ec}var w=(t&4)!==0,x=!w&&e==="scroll",p=w?g!==null?g+"Capture":null:g;w=[];for(var u=c,d;u!==null;){d=u;var y=d.stateNode;if(d.tag===5&&y!==null&&(d=y,p!==null&&(y=jr(u,p),y!=null&&w.push(Vr(u,y,d)))),x)break;u=u.return}0<w.length&&(g=new v(g,b,null,n,m),f.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==ol&&(b=n.relatedTarget||n.fromElement)&&(pn(b)||b[_t]))break e;if((v||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,v?(b=n.relatedTarget||n.toElement,v=c,b=b?pn(b):null,b!==null&&(x=Cn(b),b!==x||b.tag!==5&&b.tag!==6)&&(b=null)):(v=null,b=c),v!==b)){if(w=Ju,y="onMouseLeave",p="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(w=ec,y="onPointerLeave",p="onPointerEnter",u="pointer"),x=v==null?g:In(v),d=b==null?g:In(b),g=new w(y,u+"leave",v,n,m),g.target=x,g.relatedTarget=d,y=null,pn(m)===c&&(w=new w(p,u+"enter",b,n,m),w.target=d,w.relatedTarget=x,y=w),x=y,v&&b)t:{for(w=v,p=b,u=0,d=w;d;d=zn(d))u++;for(d=0,y=p;y;y=zn(y))d++;for(;0<u-d;)w=zn(w),u--;for(;0<d-u;)p=zn(p),d--;for(;u--;){if(w===p||p!==null&&w===p.alternate)break t;w=zn(w),p=zn(p)}w=null}else w=null;v!==null&&dc(f,g,v,w,!1),b!==null&&x!==null&&dc(f,x,b,w,!0)}}e:{if(g=c?In(c):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var k=o0;else if(rc(g))if(wf)k=s0;else{k=a0;var S=i0}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=l0);if(k&&(k=k(e,c))){vf(f,k,n,m);break e}S&&S(e,g,c),e==="focusout"&&(S=g._wrapperState)&&S.controlled&&g.type==="number"&&qa(g,"number",g.value)}switch(S=c?In(c):window,e){case"focusin":(rc(S)||S.contentEditable==="true")&&(Nn=S,dl=c,zr=null);break;case"focusout":zr=dl=Nn=null;break;case"mousedown":fl=!0;break;case"contextmenu":case"mouseup":case"dragend":fl=!1,sc(f,n,m);break;case"selectionchange":if(d0)break;case"keydown":case"keyup":sc(f,n,m)}var E;if(ps)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else $n?hf(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(gf&&n.locale!=="ko"&&($n||L!=="onCompositionStart"?L==="onCompositionEnd"&&$n&&(E=mf()):(Bt=m,cs="value"in Bt?Bt.value:Bt.textContent,$n=!0)),S=ai(c,L),0<S.length&&(L=new qu(L,e,null,n,m),f.push({event:L,listeners:S}),E?L.data=E:(E=yf(n),E!==null&&(L.data=E)))),(E=qh?e0(e,n):t0(e,n))&&(c=ai(c,"onBeforeInput"),0<c.length&&(m=new qu("onBeforeInput","beforeinput",null,n,m),f.push({event:m,listeners:c}),m.data=E))}Of(f,t)})}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ai(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=jr(e,n),i!=null&&r.unshift(Vr(e,i,o)),i=jr(e,t),i!=null&&r.push(Vr(e,i,o))),e=e.return}return r}function zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function dc(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&c!==null&&(l=c,o?(s=jr(n,i),s!=null&&a.unshift(Vr(n,s,l))):o||(s=jr(n,i),s!=null&&a.push(Vr(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var g0=/\r\n?/g,h0=/\u0000|\uFFFD/g;function fc(e){return(typeof e=="string"?e:""+e).replace(g0,`
`).replace(h0,"")}function Lo(e,t,n){if(t=fc(t),fc(e)!==t&&n)throw Error(O(425))}function li(){}var pl=null,ml=null;function gl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var hl=typeof setTimeout=="function"?setTimeout:void 0,y0=typeof clearTimeout=="function"?clearTimeout:void 0,pc=typeof Promise=="function"?Promise:void 0,v0=typeof queueMicrotask=="function"?queueMicrotask:typeof pc<"u"?function(e){return pc.resolve(null).then(e).catch(w0)}:hl;function w0(e){setTimeout(function(){throw e})}function Pa(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Br(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Br(t)}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function mc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var lr=Math.random().toString(36).slice(2),gt="__reactFiber$"+lr,Kr="__reactProps$"+lr,_t="__reactContainer$"+lr,yl="__reactEvents$"+lr,b0="__reactListeners$"+lr,k0="__reactHandles$"+lr;function pn(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=mc(e);e!==null;){if(n=e[gt])return n;e=mc(e)}return t}e=n,n=e.parentNode}return null}function so(e){return e=e[gt]||e[_t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function In(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(O(33))}function Ni(e){return e[Kr]||null}var vl=[],An=-1;function an(e){return{current:e}}function Y(e){0>An||(e.current=vl[An],vl[An]=null,An--)}function V(e,t){An++,vl[An]=e.current,e.current=t}var nn={},we=an(nn),Oe=an(!1),vn=nn;function Jn(e,t){var n=e.type.contextTypes;if(!n)return nn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ze(e){return e=e.childContextTypes,e!=null}function si(){Y(Oe),Y(we)}function gc(e,t,n){if(we.current!==nn)throw Error(O(168));V(we,t),V(Oe,n)}function _f(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(O(108,ih(e)||"Unknown",o));return X({},n,r)}function ui(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||nn,vn=we.current,V(we,e),V(Oe,Oe.current),!0}function hc(e,t,n){var r=e.stateNode;if(!r)throw Error(O(169));n?(e=_f(e,t,vn),r.__reactInternalMemoizedMergedChildContext=e,Y(Oe),Y(we),V(we,e)):Y(Oe),V(Oe,n)}var Pt=null,Fi=!1,La=!1;function Rf(e){Pt===null?Pt=[e]:Pt.push(e)}function x0(e){Fi=!0,Rf(e)}function ln(){if(!La&&Pt!==null){La=!0;var e=0,t=U;try{var n=Pt;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Pt=null,Fi=!1}catch(o){throw Pt!==null&&(Pt=Pt.slice(e+1)),nf(as,ln),o}finally{U=t,La=!1}}return null}var jn=[],Mn=0,ci=null,di=0,We=[],Ve=0,wn=null,Lt=1,Tt="";function dn(e,t){jn[Mn++]=di,jn[Mn++]=ci,ci=e,di=t}function $f(e,t,n){We[Ve++]=Lt,We[Ve++]=Tt,We[Ve++]=wn,wn=e;var r=Lt;e=Tt;var o=32-rt(r)-1;r&=~(1<<o),n+=1;var i=32-rt(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Lt=1<<32-rt(t)+o|n<<o|r,Tt=i+e}else Lt=1<<i|n<<o|r,Tt=e}function gs(e){e.return!==null&&(dn(e,1),$f(e,1,0))}function hs(e){for(;e===ci;)ci=jn[--Mn],jn[Mn]=null,di=jn[--Mn],jn[Mn]=null;for(;e===wn;)wn=We[--Ve],We[Ve]=null,Tt=We[--Ve],We[Ve]=null,Lt=We[--Ve],We[Ve]=null}var Fe=null,Ne=null,Q=!1,tt=null;function Nf(e,t){var n=Ke(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function yc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Fe=e,Ne=Qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Fe=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=wn!==null?{id:Lt,overflow:Tt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ke(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Fe=e,Ne=null,!0):!1;default:return!1}}function wl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bl(e){if(Q){var t=Ne;if(t){var n=t;if(!yc(e,t)){if(wl(e))throw Error(O(418));t=Qt(n.nextSibling);var r=Fe;t&&yc(e,t)?Nf(r,n):(e.flags=e.flags&-4097|2,Q=!1,Fe=e)}}else{if(wl(e))throw Error(O(418));e.flags=e.flags&-4097|2,Q=!1,Fe=e}}}function vc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Fe=e}function To(e){if(e!==Fe)return!1;if(!Q)return vc(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gl(e.type,e.memoizedProps)),t&&(t=Ne)){if(wl(e))throw Ff(),Error(O(418));for(;t;)Nf(e,t),t=Qt(t.nextSibling)}if(vc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ne=Qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=Fe?Qt(e.stateNode.nextSibling):null;return!0}function Ff(){for(var e=Ne;e;)e=Qt(e.nextSibling)}function qn(){Ne=Fe=null,Q=!1}function ys(e){tt===null?tt=[e]:tt.push(e)}var S0=Nt.ReactCurrentBatchConfig;function qe(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var fi=an(null),pi=null,Dn=null,vs=null;function ws(){vs=Dn=pi=null}function bs(e){var t=fi.current;Y(fi),e._currentValue=t}function kl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Yn(e,t){pi=e,vs=Dn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Te=!0),e.firstContext=null)}function Qe(e){var t=e._currentValue;if(vs!==e)if(e={context:e,memoizedValue:t,next:null},Dn===null){if(pi===null)throw Error(O(308));Dn=e,pi.dependencies={lanes:0,firstContext:e}}else Dn=Dn.next=e;return t}var mn=null;function ks(e){mn===null?mn=[e]:mn.push(e)}function If(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ks(t)):(n.next=o.next,o.next=n),t.interleaved=n,Rt(e,r)}function Rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var jt=!1;function xs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Af(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Rt(e,n)}return o=r.interleaved,o===null?(t.next=t,ks(r)):(t.next=o.next,o.next=t),r.interleaved=t,Rt(e,n)}function Bo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ls(e,n)}}function wc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function mi(e,t,n,r){var o=e.updateQueue;jt=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,c=s.next;s.next=null,a===null?i=c:a.next=c,a=s;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==a&&(l===null?m.firstBaseUpdate=c:l.next=c,m.lastBaseUpdate=s))}if(i!==null){var f=o.baseState;a=0,m=c=s=null,l=i;do{var g=l.lane,v=l.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var b=e,w=l;switch(g=t,v=n,w.tag){case 1:if(b=w.payload,typeof b=="function"){f=b.call(v,f,g);break e}f=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=w.payload,g=typeof b=="function"?b.call(v,f,g):b,g==null)break e;f=X({},f,g);break e;case 2:jt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[l]:g.push(l))}else v={eventTime:v,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(c=m=v,s=f):m=m.next=v,a|=g;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;g=l,l=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(1);if(m===null&&(s=f),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);kn|=a,e.lanes=a,e.memoizedState=f}}function bc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(O(191,o));o.call(r)}}}var jf=new Fd.Component().refs;function xl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ii={isMounted:function(e){return(e=e._reactInternals)?Cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Se(),o=Xt(e),i=Ot(r,o);i.payload=t,n!=null&&(i.callback=n),t=Gt(e,i,o),t!==null&&(ot(t,e,o,r),Bo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Se(),o=Xt(e),i=Ot(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Gt(e,i,o),t!==null&&(ot(t,e,o,r),Bo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Se(),r=Xt(e),o=Ot(n,r);o.tag=2,t!=null&&(o.callback=t),t=Gt(e,o,r),t!==null&&(ot(t,e,r,n),Bo(t,e,r))}};function kc(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Ur(n,r)||!Ur(o,i):!0}function Mf(e,t,n){var r=!1,o=nn,i=t.contextType;return typeof i=="object"&&i!==null?i=Qe(i):(o=ze(t)?vn:we.current,r=t.contextTypes,i=(r=r!=null)?Jn(e,o):nn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ii,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function xc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ii.enqueueReplaceState(t,t.state,null)}function Sl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=jf,xs(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Qe(i):(i=ze(t)?vn:we.current,o.context=Jn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(xl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ii.enqueueReplaceState(o,o.state,null),mi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function vr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=o.refs;l===jf&&(l=o.refs={}),a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,e))}return e}function Oo(e,t){throw e=Object.prototype.toString.call(t),Error(O(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Sc(e){var t=e._init;return t(e._payload)}function Df(e){function t(p,u){if(e){var d=p.deletions;d===null?(p.deletions=[u],p.flags|=16):d.push(u)}}function n(p,u){if(!e)return null;for(;u!==null;)t(p,u),u=u.sibling;return null}function r(p,u){for(p=new Map;u!==null;)u.key!==null?p.set(u.key,u):p.set(u.index,u),u=u.sibling;return p}function o(p,u){return p=Jt(p,u),p.index=0,p.sibling=null,p}function i(p,u,d){return p.index=d,e?(d=p.alternate,d!==null?(d=d.index,d<u?(p.flags|=2,u):d):(p.flags|=2,u)):(p.flags|=1048576,u)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,u,d,y){return u===null||u.tag!==6?(u=Na(d,p.mode,y),u.return=p,u):(u=o(u,d),u.return=p,u)}function s(p,u,d,y){var k=d.type;return k===Rn?m(p,u,d.props.children,y,d.key):u!==null&&(u.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===At&&Sc(k)===u.type)?(y=o(u,d.props),y.ref=vr(p,u,d),y.return=p,y):(y=Yo(d.type,d.key,d.props,null,p.mode,y),y.ref=vr(p,u,d),y.return=p,y)}function c(p,u,d,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=Fa(d,p.mode,y),u.return=p,u):(u=o(u,d.children||[]),u.return=p,u)}function m(p,u,d,y,k){return u===null||u.tag!==7?(u=yn(d,p.mode,y,k),u.return=p,u):(u=o(u,d),u.return=p,u)}function f(p,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Na(""+u,p.mode,d),u.return=p,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case vo:return d=Yo(u.type,u.key,u.props,null,p.mode,d),d.ref=vr(p,null,u),d.return=p,d;case _n:return u=Fa(u,p.mode,d),u.return=p,u;case At:var y=u._init;return f(p,y(u._payload),d)}if(Sr(u)||pr(u))return u=yn(u,p.mode,d,null),u.return=p,u;Oo(p,u)}return null}function g(p,u,d,y){var k=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return k!==null?null:l(p,u,""+d,y);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case vo:return d.key===k?s(p,u,d,y):null;case _n:return d.key===k?c(p,u,d,y):null;case At:return k=d._init,g(p,u,k(d._payload),y)}if(Sr(d)||pr(d))return k!==null?null:m(p,u,d,y,null);Oo(p,d)}return null}function v(p,u,d,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(d)||null,l(u,p,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case vo:return p=p.get(y.key===null?d:y.key)||null,s(u,p,y,k);case _n:return p=p.get(y.key===null?d:y.key)||null,c(u,p,y,k);case At:var S=y._init;return v(p,u,d,S(y._payload),k)}if(Sr(y)||pr(y))return p=p.get(d)||null,m(u,p,y,k,null);Oo(u,y)}return null}function b(p,u,d,y){for(var k=null,S=null,E=u,L=u=0,T=null;E!==null&&L<d.length;L++){E.index>L?(T=E,E=null):T=E.sibling;var _=g(p,E,d[L],y);if(_===null){E===null&&(E=T);break}e&&E&&_.alternate===null&&t(p,E),u=i(_,u,L),S===null?k=_:S.sibling=_,S=_,E=T}if(L===d.length)return n(p,E),Q&&dn(p,L),k;if(E===null){for(;L<d.length;L++)E=f(p,d[L],y),E!==null&&(u=i(E,u,L),S===null?k=E:S.sibling=E,S=E);return Q&&dn(p,L),k}for(E=r(p,E);L<d.length;L++)T=v(E,p,L,d[L],y),T!==null&&(e&&T.alternate!==null&&E.delete(T.key===null?L:T.key),u=i(T,u,L),S===null?k=T:S.sibling=T,S=T);return e&&E.forEach(function(A){return t(p,A)}),Q&&dn(p,L),k}function w(p,u,d,y){var k=pr(d);if(typeof k!="function")throw Error(O(150));if(d=k.call(d),d==null)throw Error(O(151));for(var S=k=null,E=u,L=u=0,T=null,_=d.next();E!==null&&!_.done;L++,_=d.next()){E.index>L?(T=E,E=null):T=E.sibling;var A=g(p,E,_.value,y);if(A===null){E===null&&(E=T);break}e&&E&&A.alternate===null&&t(p,E),u=i(A,u,L),S===null?k=A:S.sibling=A,S=A,E=T}if(_.done)return n(p,E),Q&&dn(p,L),k;if(E===null){for(;!_.done;L++,_=d.next())_=f(p,_.value,y),_!==null&&(u=i(_,u,L),S===null?k=_:S.sibling=_,S=_);return Q&&dn(p,L),k}for(E=r(p,E);!_.done;L++,_=d.next())_=v(E,p,L,_.value,y),_!==null&&(e&&_.alternate!==null&&E.delete(_.key===null?L:_.key),u=i(_,u,L),S===null?k=_:S.sibling=_,S=_);return e&&E.forEach(function(re){return t(p,re)}),Q&&dn(p,L),k}function x(p,u,d,y){if(typeof d=="object"&&d!==null&&d.type===Rn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case vo:e:{for(var k=d.key,S=u;S!==null;){if(S.key===k){if(k=d.type,k===Rn){if(S.tag===7){n(p,S.sibling),u=o(S,d.props.children),u.return=p,p=u;break e}}else if(S.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===At&&Sc(k)===S.type){n(p,S.sibling),u=o(S,d.props),u.ref=vr(p,S,d),u.return=p,p=u;break e}n(p,S);break}else t(p,S);S=S.sibling}d.type===Rn?(u=yn(d.props.children,p.mode,y,d.key),u.return=p,p=u):(y=Yo(d.type,d.key,d.props,null,p.mode,y),y.ref=vr(p,u,d),y.return=p,p=y)}return a(p);case _n:e:{for(S=d.key;u!==null;){if(u.key===S)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){n(p,u.sibling),u=o(u,d.children||[]),u.return=p,p=u;break e}else{n(p,u);break}else t(p,u);u=u.sibling}u=Fa(d,p.mode,y),u.return=p,p=u}return a(p);case At:return S=d._init,x(p,u,S(d._payload),y)}if(Sr(d))return b(p,u,d,y);if(pr(d))return w(p,u,d,y);Oo(p,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(n(p,u.sibling),u=o(u,d),u.return=p,p=u):(n(p,u),u=Na(d,p.mode,y),u.return=p,p=u),a(p)):n(p,u)}return x}var er=Df(!0),Bf=Df(!1),uo={},vt=an(uo),Yr=an(uo),Qr=an(uo);function gn(e){if(e===uo)throw Error(O(174));return e}function Ss(e,t){switch(V(Qr,t),V(Yr,e),V(vt,uo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:tl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=tl(t,e)}Y(vt),V(vt,t)}function tr(){Y(vt),Y(Yr),Y(Qr)}function Hf(e){gn(Qr.current);var t=gn(vt.current),n=tl(t,e.type);t!==n&&(V(Yr,e),V(vt,n))}function Cs(e){Yr.current===e&&(Y(vt),Y(Yr))}var G=an(0);function gi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ta=[];function Es(){for(var e=0;e<Ta.length;e++)Ta[e]._workInProgressVersionPrimary=null;Ta.length=0}var Ho=Nt.ReactCurrentDispatcher,Oa=Nt.ReactCurrentBatchConfig,bn=0,Z=null,oe=null,se=null,hi=!1,_r=!1,Gr=0,C0=0;function ge(){throw Error(O(321))}function Ps(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!it(e[n],t[n]))return!1;return!0}function Ls(e,t,n,r,o,i){if(bn=i,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ho.current=e===null||e.memoizedState===null?T0:O0,e=n(r,o),_r){i=0;do{if(_r=!1,Gr=0,25<=i)throw Error(O(301));i+=1,se=oe=null,t.updateQueue=null,Ho.current=z0,e=n(r,o)}while(_r)}if(Ho.current=yi,t=oe!==null&&oe.next!==null,bn=0,se=oe=Z=null,hi=!1,t)throw Error(O(300));return e}function Ts(){var e=Gr!==0;return Gr=0,e}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?Z.memoizedState=se=e:se=se.next=e,se}function Ge(){if(oe===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=se===null?Z.memoizedState:se.next;if(t!==null)se=t,oe=e;else{if(e===null)throw Error(O(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},se===null?Z.memoizedState=se=e:se=se.next=e}return se}function Zr(e,t){return typeof t=="function"?t(e):t}function za(e){var t=Ge(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=oe,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,c=i;do{var m=c.lane;if((bn&m)===m)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=f,a=r):s=s.next=f,Z.lanes|=m,kn|=m}c=c.next}while(c!==null&&c!==i);s===null?a=r:s.next=l,it(r,t.memoizedState)||(Te=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Z.lanes|=i,kn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function _a(e){var t=Ge(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);it(i,t.memoizedState)||(Te=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Uf(){}function Wf(e,t){var n=Z,r=Ge(),o=t(),i=!it(r.memoizedState,o);if(i&&(r.memoizedState=o,Te=!0),r=r.queue,Os(Yf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||se!==null&&se.memoizedState.tag&1){if(n.flags|=2048,Xr(9,Kf.bind(null,n,r,o,t),void 0,null),ue===null)throw Error(O(349));bn&30||Vf(n,t,o)}return o}function Vf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Kf(e,t,n,r){t.value=n,t.getSnapshot=r,Qf(t)&&Gf(e)}function Yf(e,t,n){return n(function(){Qf(t)&&Gf(e)})}function Qf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!it(e,n)}catch{return!0}}function Gf(e){var t=Rt(e,1);t!==null&&ot(t,e,1,-1)}function Cc(e){var t=ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zr,lastRenderedState:e},t.queue=e,e=e.dispatch=L0.bind(null,Z,e),[t.memoizedState,e]}function Xr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Zf(){return Ge().memoizedState}function Uo(e,t,n,r){var o=ft();Z.flags|=e,o.memoizedState=Xr(1|t,n,void 0,r===void 0?null:r)}function Ai(e,t,n,r){var o=Ge();r=r===void 0?null:r;var i=void 0;if(oe!==null){var a=oe.memoizedState;if(i=a.destroy,r!==null&&Ps(r,a.deps)){o.memoizedState=Xr(t,n,i,r);return}}Z.flags|=e,o.memoizedState=Xr(1|t,n,i,r)}function Ec(e,t){return Uo(8390656,8,e,t)}function Os(e,t){return Ai(2048,8,e,t)}function Xf(e,t){return Ai(4,2,e,t)}function Jf(e,t){return Ai(4,4,e,t)}function qf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ep(e,t,n){return n=n!=null?n.concat([e]):null,Ai(4,4,qf.bind(null,t,e),n)}function zs(){}function tp(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ps(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function np(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ps(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function rp(e,t,n){return bn&21?(it(n,t)||(n=af(),Z.lanes|=n,kn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Te=!0),e.memoizedState=n)}function E0(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=Oa.transition;Oa.transition={};try{e(!1),t()}finally{U=n,Oa.transition=r}}function op(){return Ge().memoizedState}function P0(e,t,n){var r=Xt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ip(e))ap(t,n);else if(n=If(e,t,n,r),n!==null){var o=Se();ot(n,e,r,o),lp(n,t,r)}}function L0(e,t,n){var r=Xt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ip(e))ap(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,it(l,a)){var s=t.interleaved;s===null?(o.next=o,ks(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=If(e,t,o,r),n!==null&&(o=Se(),ot(n,e,r,o),lp(n,t,r))}}function ip(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function ap(e,t){_r=hi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function lp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ls(e,n)}}var yi={readContext:Qe,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},T0={readContext:Qe,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:Qe,useEffect:Ec,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Uo(4194308,4,qf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Uo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Uo(4,2,e,t)},useMemo:function(e,t){var n=ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=P0.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:Cc,useDebugValue:zs,useDeferredValue:function(e){return ft().memoizedState=e},useTransition:function(){var e=Cc(!1),t=e[0];return e=E0.bind(null,e[1]),ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,o=ft();if(Q){if(n===void 0)throw Error(O(407));n=n()}else{if(n=t(),ue===null)throw Error(O(349));bn&30||Vf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Ec(Yf.bind(null,r,i,e),[e]),r.flags|=2048,Xr(9,Kf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ft(),t=ue.identifierPrefix;if(Q){var n=Tt,r=Lt;n=(r&~(1<<32-rt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Gr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=C0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},O0={readContext:Qe,useCallback:tp,useContext:Qe,useEffect:Os,useImperativeHandle:ep,useInsertionEffect:Xf,useLayoutEffect:Jf,useMemo:np,useReducer:za,useRef:Zf,useState:function(){return za(Zr)},useDebugValue:zs,useDeferredValue:function(e){var t=Ge();return rp(t,oe.memoizedState,e)},useTransition:function(){var e=za(Zr)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:Uf,useSyncExternalStore:Wf,useId:op,unstable_isNewReconciler:!1},z0={readContext:Qe,useCallback:tp,useContext:Qe,useEffect:Os,useImperativeHandle:ep,useInsertionEffect:Xf,useLayoutEffect:Jf,useMemo:np,useReducer:_a,useRef:Zf,useState:function(){return _a(Zr)},useDebugValue:zs,useDeferredValue:function(e){var t=Ge();return oe===null?t.memoizedState=e:rp(t,oe.memoizedState,e)},useTransition:function(){var e=_a(Zr)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:Uf,useSyncExternalStore:Wf,useId:op,unstable_isNewReconciler:!1};function nr(e,t){try{var n="",r=t;do n+=oh(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ra(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Cl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _0=typeof WeakMap=="function"?WeakMap:Map;function sp(e,t,n){n=Ot(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){wi||(wi=!0,Nl=r),Cl(e,t)},n}function up(e,t,n){n=Ot(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Cl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Cl(e,t),typeof r!="function"&&(Zt===null?Zt=new Set([this]):Zt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Pc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _0;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=V0.bind(null,e,t,n),t.then(e,e))}function Lc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Tc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ot(-1,1),t.tag=2,Gt(n,t,1))),n.lanes|=1),e)}var R0=Nt.ReactCurrentOwner,Te=!1;function xe(e,t,n,r){t.child=e===null?Bf(t,null,n,r):er(t,e.child,n,r)}function Oc(e,t,n,r,o){n=n.render;var i=t.ref;return Yn(t,o),r=Ls(e,t,n,r,i,o),n=Ts(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,$t(e,t,o)):(Q&&n&&gs(t),t.flags|=1,xe(e,t,r,o),t.child)}function zc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!js(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,cp(e,t,i,r,o)):(e=Yo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ur,n(a,r)&&e.ref===t.ref)return $t(e,t,o)}return t.flags|=1,e=Jt(i,r),e.ref=t.ref,e.return=t,t.child=e}function cp(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Ur(i,r)&&e.ref===t.ref)if(Te=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Te=!0);else return t.lanes=e.lanes,$t(e,t,o)}return El(e,t,n,r,o)}function dp(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(Hn,$e),$e|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(Hn,$e),$e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,V(Hn,$e),$e|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,V(Hn,$e),$e|=r;return xe(e,t,o,n),t.child}function fp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function El(e,t,n,r,o){var i=ze(n)?vn:we.current;return i=Jn(t,i),Yn(t,o),n=Ls(e,t,n,r,i,o),r=Ts(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,$t(e,t,o)):(Q&&r&&gs(t),t.flags|=1,xe(e,t,n,o),t.child)}function _c(e,t,n,r,o){if(ze(n)){var i=!0;ui(t)}else i=!1;if(Yn(t,o),t.stateNode===null)Wo(e,t),Mf(t,n,r),Sl(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Qe(c):(c=ze(n)?vn:we.current,c=Jn(t,c));var m=n.getDerivedStateFromProps,f=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==c)&&xc(t,a,r,c),jt=!1;var g=t.memoizedState;a.state=g,mi(t,r,a,o),s=t.memoizedState,l!==r||g!==s||Oe.current||jt?(typeof m=="function"&&(xl(t,n,m,r),s=t.memoizedState),(l=jt||kc(t,n,l,r,g,s,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=c,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Af(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:qe(t.type,l),a.props=c,f=t.pendingProps,g=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Qe(s):(s=ze(n)?vn:we.current,s=Jn(t,s));var v=n.getDerivedStateFromProps;(m=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||g!==s)&&xc(t,a,r,s),jt=!1,g=t.memoizedState,a.state=g,mi(t,r,a,o);var b=t.memoizedState;l!==f||g!==b||Oe.current||jt?(typeof v=="function"&&(xl(t,n,v,r),b=t.memoizedState),(c=jt||kc(t,n,c,r,g,b,s)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,b,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,b,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),a.props=r,a.state=b,a.context=s,r=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Pl(e,t,n,r,i,o)}function Pl(e,t,n,r,o,i){fp(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&hc(t,n,!1),$t(e,t,i);r=t.stateNode,R0.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=er(t,e.child,null,i),t.child=er(t,null,l,i)):xe(e,t,l,i),t.memoizedState=r.state,o&&hc(t,n,!0),t.child}function pp(e){var t=e.stateNode;t.pendingContext?gc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&gc(e,t.context,!1),Ss(e,t.containerInfo)}function Rc(e,t,n,r,o){return qn(),ys(o),t.flags|=256,xe(e,t,n,r),t.child}var Ll={dehydrated:null,treeContext:null,retryLane:0};function Tl(e){return{baseLanes:e,cachePool:null,transitions:null}}function mp(e,t,n){var r=t.pendingProps,o=G.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),V(G,o&1),e===null)return bl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Di(a,r,0,null),e=yn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Tl(n),t.memoizedState=Ll,e):_s(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return $0(e,t,a,r,l,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Jt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=Jt(l,i):(i=yn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Tl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Ll,r}return i=e.child,e=i.sibling,r=Jt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function _s(e,t){return t=Di({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zo(e,t,n,r){return r!==null&&ys(r),er(t,e.child,null,n),e=_s(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $0(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Ra(Error(O(422))),zo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Di({mode:"visible",children:r.children},o,0,null),i=yn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&er(t,e.child,null,a),t.child.memoizedState=Tl(a),t.memoizedState=Ll,i);if(!(t.mode&1))return zo(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(O(419)),r=Ra(i,r,void 0),zo(e,t,a,r)}if(l=(a&e.childLanes)!==0,Te||l){if(r=ue,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Rt(e,o),ot(r,e,o,-1))}return As(),r=Ra(Error(O(421))),zo(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=K0.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ne=Qt(o.nextSibling),Fe=t,Q=!0,tt=null,e!==null&&(We[Ve++]=Lt,We[Ve++]=Tt,We[Ve++]=wn,Lt=e.id,Tt=e.overflow,wn=t),t=_s(t,r.children),t.flags|=4096,t)}function $c(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),kl(e.return,t,n)}function $a(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function gp(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(xe(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$c(e,n,t);else if(e.tag===19)$c(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(G,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&gi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),$a(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&gi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}$a(t,!0,n,null,i);break;case"together":$a(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function $t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),kn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(O(153));if(t.child!==null){for(e=t.child,n=Jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function N0(e,t,n){switch(t.tag){case 3:pp(t),qn();break;case 5:Hf(t);break;case 1:ze(t.type)&&ui(t);break;case 4:Ss(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;V(fi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?mp(e,t,n):(V(G,G.current&1),e=$t(e,t,n),e!==null?e.sibling:null);V(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return gp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),V(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,dp(e,t,n)}return $t(e,t,n)}var hp,Ol,yp,vp;hp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ol=function(){};yp=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,gn(vt.current);var i=null;switch(n){case"input":o=Xa(e,o),r=Xa(e,r),i=[];break;case"select":o=X({},o,{value:void 0}),r=X({},r,{value:void 0}),i=[];break;case"textarea":o=el(e,o),r=el(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=li)}nl(n,r);var a;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var l=o[c];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ir.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(l=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(i||(i=[]),i.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ir.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&K("scroll",e),i||l===s||(i=[])):(i=i||[]).push(c,s))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};vp=function(e,t,n,r){n!==r&&(t.flags|=4)};function wr(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function F0(e,t,n){var r=t.pendingProps;switch(hs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return ze(t.type)&&si(),he(t),null;case 3:return r=t.stateNode,tr(),Y(Oe),Y(we),Es(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(To(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,tt!==null&&(Al(tt),tt=null))),Ol(e,t),he(t),null;case 5:Cs(t);var o=gn(Qr.current);if(n=t.type,e!==null&&t.stateNode!=null)yp(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(O(166));return he(t),null}if(e=gn(vt.current),To(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[gt]=t,r[Kr]=i,e=(t.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(o=0;o<Er.length;o++)K(Er[o],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":Hu(r,i),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},K("invalid",r);break;case"textarea":Wu(r,i),K("invalid",r)}nl(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Lo(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Lo(r.textContent,l,e),o=["children",""+l]):Ir.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&K("scroll",r)}switch(n){case"input":wo(r),Uu(r,i,!0);break;case"textarea":wo(r),Vu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=li)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[gt]=t,e[Kr]=r,hp(e,t,!1,!1),t.stateNode=e;e:{switch(a=rl(n,r),n){case"dialog":K("cancel",e),K("close",e),o=r;break;case"iframe":case"object":case"embed":K("load",e),o=r;break;case"video":case"audio":for(o=0;o<Er.length;o++)K(Er[o],e);o=r;break;case"source":K("error",e),o=r;break;case"img":case"image":case"link":K("error",e),K("load",e),o=r;break;case"details":K("toggle",e),o=r;break;case"input":Hu(e,r),o=Xa(e,r),K("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=X({},r,{value:void 0}),K("invalid",e);break;case"textarea":Wu(e,r),o=el(e,r),K("invalid",e);break;default:o=r}nl(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?Yd(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Vd(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Ar(e,s):typeof s=="number"&&Ar(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ir.hasOwnProperty(i)?s!=null&&i==="onScroll"&&K("scroll",e):s!=null&&ts(e,i,s,a))}switch(n){case"input":wo(e),Uu(e,r,!1);break;case"textarea":wo(e),Vu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+tn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Un(e,!!r.multiple,i,!1):r.defaultValue!=null&&Un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=li)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)vp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(O(166));if(n=gn(Qr.current),gn(vt.current),To(t)){if(r=t.stateNode,n=t.memoizedProps,r[gt]=t,(i=r.nodeValue!==n)&&(e=Fe,e!==null))switch(e.tag){case 3:Lo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Lo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gt]=t,t.stateNode=r}return he(t),null;case 13:if(Y(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&Ne!==null&&t.mode&1&&!(t.flags&128))Ff(),qn(),t.flags|=98560,i=!1;else if(i=To(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(O(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(O(317));i[gt]=t}else qn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),i=!1}else tt!==null&&(Al(tt),tt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?ie===0&&(ie=3):As())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return tr(),Ol(e,t),e===null&&Wr(t.stateNode.containerInfo),he(t),null;case 10:return bs(t.type._context),he(t),null;case 17:return ze(t.type)&&si(),he(t),null;case 19:if(Y(G),i=t.memoizedState,i===null)return he(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)wr(i,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=gi(e),a!==null){for(t.flags|=128,wr(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(G,G.current&1|2),t.child}e=e.sibling}i.tail!==null&&ee()>rr&&(t.flags|=128,r=!0,wr(i,!1),t.lanes=4194304)}else{if(!r)if(e=gi(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),wr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Q)return he(t),null}else 2*ee()-i.renderingStartTime>rr&&n!==1073741824&&(t.flags|=128,r=!0,wr(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ee(),t.sibling=null,n=G.current,V(G,r?n&1|2:n&1),t):(he(t),null);case 22:case 23:return Is(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?$e&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(O(156,t.tag))}function I0(e,t){switch(hs(t),t.tag){case 1:return ze(t.type)&&si(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tr(),Y(Oe),Y(we),Es(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Cs(t),null;case 13:if(Y(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(O(340));qn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(G),null;case 4:return tr(),null;case 10:return bs(t.type._context),null;case 22:case 23:return Is(),null;case 24:return null;default:return null}}var _o=!1,ve=!1,A0=typeof WeakSet=="function"?WeakSet:Set,R=null;function Bn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function zl(e,t,n){try{n()}catch(r){q(e,t,r)}}var Nc=!1;function j0(e,t){if(pl=oi,e=xf(),ms(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,c=0,m=0,f=e,g=null;t:for(;;){for(var v;f!==n||o!==0&&f.nodeType!==3||(l=a+o),f!==i||r!==0&&f.nodeType!==3||(s=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(v=f.firstChild)!==null;)g=f,f=v;for(;;){if(f===e)break t;if(g===n&&++c===o&&(l=a),g===i&&++m===r&&(s=a),(v=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=v}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ml={focusedElem:e,selectionRange:n},oi=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var w=b.memoizedProps,x=b.memoizedState,p=t.stateNode,u=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:qe(t.type,w),x);p.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(y){q(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return b=Nc,Nc=!1,b}function Rr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&zl(t,n,i)}o=o.next}while(o!==r)}}function ji(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function _l(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function wp(e){var t=e.alternate;t!==null&&(e.alternate=null,wp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[gt],delete t[Kr],delete t[yl],delete t[b0],delete t[k0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bp(e){return e.tag===5||e.tag===3||e.tag===4}function Fc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=li));else if(r!==4&&(e=e.child,e!==null))for(Rl(e,t,n),e=e.sibling;e!==null;)Rl(e,t,n),e=e.sibling}function $l(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($l(e,t,n),e=e.sibling;e!==null;)$l(e,t,n),e=e.sibling}var de=null,et=!1;function It(e,t,n){for(n=n.child;n!==null;)kp(e,t,n),n=n.sibling}function kp(e,t,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(zi,n)}catch{}switch(n.tag){case 5:ve||Bn(n,t);case 6:var r=de,o=et;de=null,It(e,t,n),de=r,et=o,de!==null&&(et?(e=de,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(et?(e=de,n=n.stateNode,e.nodeType===8?Pa(e.parentNode,n):e.nodeType===1&&Pa(e,n),Br(e)):Pa(de,n.stateNode));break;case 4:r=de,o=et,de=n.stateNode.containerInfo,et=!0,It(e,t,n),de=r,et=o;break;case 0:case 11:case 14:case 15:if(!ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&zl(n,t,a),o=o.next}while(o!==r)}It(e,t,n);break;case 1:if(!ve&&(Bn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){q(n,t,l)}It(e,t,n);break;case 21:It(e,t,n);break;case 22:n.mode&1?(ve=(r=ve)||n.memoizedState!==null,It(e,t,n),ve=r):It(e,t,n);break;default:It(e,t,n)}}function Ic(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new A0),t.forEach(function(r){var o=Y0.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Je(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:de=l.stateNode,et=!1;break e;case 3:de=l.stateNode.containerInfo,et=!0;break e;case 4:de=l.stateNode.containerInfo,et=!0;break e}l=l.return}if(de===null)throw Error(O(160));kp(i,a,o),de=null,et=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){q(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xp(t,e),t=t.sibling}function xp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Je(t,e),ct(e),r&4){try{Rr(3,e,e.return),ji(3,e)}catch(w){q(e,e.return,w)}try{Rr(5,e,e.return)}catch(w){q(e,e.return,w)}}break;case 1:Je(t,e),ct(e),r&512&&n!==null&&Bn(n,n.return);break;case 5:if(Je(t,e),ct(e),r&512&&n!==null&&Bn(n,n.return),e.flags&32){var o=e.stateNode;try{Ar(o,"")}catch(w){q(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Hd(o,i),rl(l,a);var c=rl(l,i);for(a=0;a<s.length;a+=2){var m=s[a],f=s[a+1];m==="style"?Yd(o,f):m==="dangerouslySetInnerHTML"?Vd(o,f):m==="children"?Ar(o,f):ts(o,m,f,c)}switch(l){case"input":Ja(o,i);break;case"textarea":Ud(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Un(o,!!i.multiple,v,!1):g!==!!i.multiple&&(i.defaultValue!=null?Un(o,!!i.multiple,i.defaultValue,!0):Un(o,!!i.multiple,i.multiple?[]:"",!1))}o[Kr]=i}catch(w){q(e,e.return,w)}}break;case 6:if(Je(t,e),ct(e),r&4){if(e.stateNode===null)throw Error(O(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){q(e,e.return,w)}}break;case 3:if(Je(t,e),ct(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Br(t.containerInfo)}catch(w){q(e,e.return,w)}break;case 4:Je(t,e),ct(e);break;case 13:Je(t,e),ct(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ns=ee())),r&4&&Ic(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ve=(c=ve)||m,Je(t,e),ve=c):Je(t,e),ct(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(R=e,m=e.child;m!==null;){for(f=R=m;R!==null;){switch(g=R,v=g.child,g.tag){case 0:case 11:case 14:case 15:Rr(4,g,g.return);break;case 1:Bn(g,g.return);var b=g.stateNode;if(typeof b.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(w){q(r,n,w)}}break;case 5:Bn(g,g.return);break;case 22:if(g.memoizedState!==null){jc(f);continue}}v!==null?(v.return=g,R=v):jc(f)}m=m.sibling}e:for(m=null,f=e;;){if(f.tag===5){if(m===null){m=f;try{o=f.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=f.stateNode,s=f.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Kd("display",a))}catch(w){q(e,e.return,w)}}}else if(f.tag===6){if(m===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(w){q(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;m===f&&(m=null),f=f.return}m===f&&(m=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Je(t,e),ct(e),r&4&&Ic(e);break;case 21:break;default:Je(t,e),ct(e)}}function ct(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(bp(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Ar(o,""),r.flags&=-33);var i=Fc(e);$l(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Fc(e);Rl(e,l,a);break;default:throw Error(O(161))}}catch(s){q(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function M0(e,t,n){R=e,Sp(e)}function Sp(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var o=R,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||_o;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||ve;l=_o;var c=ve;if(_o=a,(ve=s)&&!c)for(R=o;R!==null;)a=R,s=a.child,a.tag===22&&a.memoizedState!==null?Mc(o):s!==null?(s.return=a,R=s):Mc(o);for(;i!==null;)R=i,Sp(i),i=i.sibling;R=o,_o=l,ve=c}Ac(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,R=i):Ac(e)}}function Ac(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ve||ji(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ve)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:qe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&bc(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}bc(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var f=m.dehydrated;f!==null&&Br(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}ve||t.flags&512&&_l(t)}catch(g){q(t,t.return,g)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function jc(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Mc(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ji(4,t)}catch(s){q(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){q(t,o,s)}}var i=t.return;try{_l(t)}catch(s){q(t,i,s)}break;case 5:var a=t.return;try{_l(t)}catch(s){q(t,a,s)}}}catch(s){q(t,t.return,s)}if(t===e){R=null;break}var l=t.sibling;if(l!==null){l.return=t.return,R=l;break}R=t.return}}var D0=Math.ceil,vi=Nt.ReactCurrentDispatcher,Rs=Nt.ReactCurrentOwner,Ye=Nt.ReactCurrentBatchConfig,j=0,ue=null,ne=null,pe=0,$e=0,Hn=an(0),ie=0,Jr=null,kn=0,Mi=0,$s=0,$r=null,Le=null,Ns=0,rr=1/0,Et=null,wi=!1,Nl=null,Zt=null,Ro=!1,Ht=null,bi=0,Nr=0,Fl=null,Vo=-1,Ko=0;function Se(){return j&6?ee():Vo!==-1?Vo:Vo=ee()}function Xt(e){return e.mode&1?j&2&&pe!==0?pe&-pe:S0.transition!==null?(Ko===0&&(Ko=af()),Ko):(e=U,e!==0||(e=window.event,e=e===void 0?16:pf(e.type)),e):1}function ot(e,t,n,r){if(50<Nr)throw Nr=0,Fl=null,Error(O(185));ao(e,n,r),(!(j&2)||e!==ue)&&(e===ue&&(!(j&2)&&(Mi|=n),ie===4&&Dt(e,pe)),_e(e,r),n===1&&j===0&&!(t.mode&1)&&(rr=ee()+500,Fi&&ln()))}function _e(e,t){var n=e.callbackNode;Sh(e,t);var r=ri(e,e===ue?pe:0);if(r===0)n!==null&&Qu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Qu(n),t===1)e.tag===0?x0(Dc.bind(null,e)):Rf(Dc.bind(null,e)),v0(function(){!(j&6)&&ln()}),n=null;else{switch(lf(r)){case 1:n=as;break;case 4:n=rf;break;case 16:n=ni;break;case 536870912:n=of;break;default:n=ni}n=_p(n,Cp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Cp(e,t){if(Vo=-1,Ko=0,j&6)throw Error(O(327));var n=e.callbackNode;if(Qn()&&e.callbackNode!==n)return null;var r=ri(e,e===ue?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ki(e,r);else{t=r;var o=j;j|=2;var i=Pp();(ue!==e||pe!==t)&&(Et=null,rr=ee()+500,hn(e,t));do try{U0();break}catch(l){Ep(e,l)}while(1);ws(),vi.current=i,j=o,ne!==null?t=0:(ue=null,pe=0,t=ie)}if(t!==0){if(t===2&&(o=sl(e),o!==0&&(r=o,t=Il(e,o))),t===1)throw n=Jr,hn(e,0),Dt(e,r),_e(e,ee()),n;if(t===6)Dt(e,r);else{if(o=e.current.alternate,!(r&30)&&!B0(o)&&(t=ki(e,r),t===2&&(i=sl(e),i!==0&&(r=i,t=Il(e,i))),t===1))throw n=Jr,hn(e,0),Dt(e,r),_e(e,ee()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(O(345));case 2:fn(e,Le,Et);break;case 3:if(Dt(e,r),(r&130023424)===r&&(t=Ns+500-ee(),10<t)){if(ri(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Se(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=hl(fn.bind(null,e,Le,Et),t);break}fn(e,Le,Et);break;case 4:if(Dt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-rt(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*D0(r/1960))-r,10<r){e.timeoutHandle=hl(fn.bind(null,e,Le,Et),r);break}fn(e,Le,Et);break;case 5:fn(e,Le,Et);break;default:throw Error(O(329))}}}return _e(e,ee()),e.callbackNode===n?Cp.bind(null,e):null}function Il(e,t){var n=$r;return e.current.memoizedState.isDehydrated&&(hn(e,t).flags|=256),e=ki(e,t),e!==2&&(t=Le,Le=n,t!==null&&Al(t)),e}function Al(e){Le===null?Le=e:Le.push.apply(Le,e)}function B0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!it(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dt(e,t){for(t&=~$s,t&=~Mi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-rt(t),r=1<<n;e[n]=-1,t&=~r}}function Dc(e){if(j&6)throw Error(O(327));Qn();var t=ri(e,0);if(!(t&1))return _e(e,ee()),null;var n=ki(e,t);if(e.tag!==0&&n===2){var r=sl(e);r!==0&&(t=r,n=Il(e,r))}if(n===1)throw n=Jr,hn(e,0),Dt(e,t),_e(e,ee()),n;if(n===6)throw Error(O(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,fn(e,Le,Et),_e(e,ee()),null}function Fs(e,t){var n=j;j|=1;try{return e(t)}finally{j=n,j===0&&(rr=ee()+500,Fi&&ln())}}function xn(e){Ht!==null&&Ht.tag===0&&!(j&6)&&Qn();var t=j;j|=1;var n=Ye.transition,r=U;try{if(Ye.transition=null,U=1,e)return e()}finally{U=r,Ye.transition=n,j=t,!(j&6)&&ln()}}function Is(){$e=Hn.current,Y(Hn)}function hn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,y0(n)),ne!==null)for(n=ne.return;n!==null;){var r=n;switch(hs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&si();break;case 3:tr(),Y(Oe),Y(we),Es();break;case 5:Cs(r);break;case 4:tr();break;case 13:Y(G);break;case 19:Y(G);break;case 10:bs(r.type._context);break;case 22:case 23:Is()}n=n.return}if(ue=e,ne=e=Jt(e.current,null),pe=$e=t,ie=0,Jr=null,$s=Mi=kn=0,Le=$r=null,mn!==null){for(t=0;t<mn.length;t++)if(n=mn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}mn=null}return e}function Ep(e,t){do{var n=ne;try{if(ws(),Ho.current=yi,hi){for(var r=Z.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}hi=!1}if(bn=0,se=oe=Z=null,_r=!1,Gr=0,Rs.current=null,n===null||n.return===null){ie=1,Jr=t,ne=null;break}e:{var i=e,a=n.return,l=n,s=t;if(t=pe,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,m=l,f=m.tag;if(!(m.mode&1)&&(f===0||f===11||f===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var v=Lc(a);if(v!==null){v.flags&=-257,Tc(v,a,l,i,t),v.mode&1&&Pc(i,c,t),t=v,s=c;var b=t.updateQueue;if(b===null){var w=new Set;w.add(s),t.updateQueue=w}else b.add(s);break e}else{if(!(t&1)){Pc(i,c,t),As();break e}s=Error(O(426))}}else if(Q&&l.mode&1){var x=Lc(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Tc(x,a,l,i,t),ys(nr(s,l));break e}}i=s=nr(s,l),ie!==4&&(ie=2),$r===null?$r=[i]:$r.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=sp(i,s,t);wc(i,p);break e;case 1:l=s;var u=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Zt===null||!Zt.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=up(i,l,t);wc(i,y);break e}}i=i.return}while(i!==null)}Tp(n)}catch(k){t=k,ne===n&&n!==null&&(ne=n=n.return);continue}break}while(1)}function Pp(){var e=vi.current;return vi.current=yi,e===null?yi:e}function As(){(ie===0||ie===3||ie===2)&&(ie=4),ue===null||!(kn&268435455)&&!(Mi&268435455)||Dt(ue,pe)}function ki(e,t){var n=j;j|=2;var r=Pp();(ue!==e||pe!==t)&&(Et=null,hn(e,t));do try{H0();break}catch(o){Ep(e,o)}while(1);if(ws(),j=n,vi.current=r,ne!==null)throw Error(O(261));return ue=null,pe=0,ie}function H0(){for(;ne!==null;)Lp(ne)}function U0(){for(;ne!==null&&!mh();)Lp(ne)}function Lp(e){var t=zp(e.alternate,e,$e);e.memoizedProps=e.pendingProps,t===null?Tp(e):ne=t,Rs.current=null}function Tp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=I0(n,t),n!==null){n.flags&=32767,ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,ne=null;return}}else if(n=F0(n,t,$e),n!==null){ne=n;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);ie===0&&(ie=5)}function fn(e,t,n){var r=U,o=Ye.transition;try{Ye.transition=null,U=1,W0(e,t,n,r)}finally{Ye.transition=o,U=r}return null}function W0(e,t,n,r){do Qn();while(Ht!==null);if(j&6)throw Error(O(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(O(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Ch(e,i),e===ue&&(ne=ue=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ro||(Ro=!0,_p(ni,function(){return Qn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ye.transition,Ye.transition=null;var a=U;U=1;var l=j;j|=4,Rs.current=null,j0(e,n),xp(n,e),c0(ml),oi=!!pl,ml=pl=null,e.current=n,M0(n),gh(),j=l,U=a,Ye.transition=i}else e.current=n;if(Ro&&(Ro=!1,Ht=e,bi=o),i=e.pendingLanes,i===0&&(Zt=null),vh(n.stateNode),_e(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(wi)throw wi=!1,e=Nl,Nl=null,e;return bi&1&&e.tag!==0&&Qn(),i=e.pendingLanes,i&1?e===Fl?Nr++:(Nr=0,Fl=e):Nr=0,ln(),null}function Qn(){if(Ht!==null){var e=lf(bi),t=Ye.transition,n=U;try{if(Ye.transition=null,U=16>e?16:e,Ht===null)var r=!1;else{if(e=Ht,Ht=null,bi=0,j&6)throw Error(O(331));var o=j;for(j|=4,R=e.current;R!==null;){var i=R,a=i.child;if(R.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(R=c;R!==null;){var m=R;switch(m.tag){case 0:case 11:case 15:Rr(8,m,i)}var f=m.child;if(f!==null)f.return=m,R=f;else for(;R!==null;){m=R;var g=m.sibling,v=m.return;if(wp(m),m===c){R=null;break}if(g!==null){g.return=v,R=g;break}R=v}}}var b=i.alternate;if(b!==null){var w=b.child;if(w!==null){b.child=null;do{var x=w.sibling;w.sibling=null,w=x}while(w!==null)}}R=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,R=a;else e:for(;R!==null;){if(i=R,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Rr(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,R=p;break e}R=i.return}}var u=e.current;for(R=u;R!==null;){a=R;var d=a.child;if(a.subtreeFlags&2064&&d!==null)d.return=a,R=d;else e:for(a=u;R!==null;){if(l=R,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ji(9,l)}}catch(k){q(l,l.return,k)}if(l===a){R=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,R=y;break e}R=l.return}}if(j=o,ln(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(zi,e)}catch{}r=!0}return r}finally{U=n,Ye.transition=t}}return!1}function Bc(e,t,n){t=nr(n,t),t=sp(e,t,1),e=Gt(e,t,1),t=Se(),e!==null&&(ao(e,1,t),_e(e,t))}function q(e,t,n){if(e.tag===3)Bc(e,e,n);else for(;t!==null;){if(t.tag===3){Bc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zt===null||!Zt.has(r))){e=nr(n,e),e=up(t,e,1),t=Gt(t,e,1),e=Se(),t!==null&&(ao(t,1,e),_e(t,e));break}}t=t.return}}function V0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Se(),e.pingedLanes|=e.suspendedLanes&n,ue===e&&(pe&n)===n&&(ie===4||ie===3&&(pe&130023424)===pe&&500>ee()-Ns?hn(e,0):$s|=n),_e(e,t)}function Op(e,t){t===0&&(e.mode&1?(t=xo,xo<<=1,!(xo&130023424)&&(xo=4194304)):t=1);var n=Se();e=Rt(e,t),e!==null&&(ao(e,t,n),_e(e,n))}function K0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Op(e,n)}function Y0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(t),Op(e,n)}var zp;zp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Oe.current)Te=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Te=!1,N0(e,t,n);Te=!!(e.flags&131072)}else Te=!1,Q&&t.flags&1048576&&$f(t,di,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wo(e,t),e=t.pendingProps;var o=Jn(t,we.current);Yn(t,n),o=Ls(null,t,r,e,o,n);var i=Ts();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ze(r)?(i=!0,ui(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,xs(t),o.updater=Ii,t.stateNode=o,o._reactInternals=t,Sl(t,r,e,n),t=Pl(null,t,r,!0,i,n)):(t.tag=0,Q&&i&&gs(t),xe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=G0(r),e=qe(r,e),o){case 0:t=El(null,t,r,e,n);break e;case 1:t=_c(null,t,r,e,n);break e;case 11:t=Oc(null,t,r,e,n);break e;case 14:t=zc(null,t,r,qe(r.type,e),n);break e}throw Error(O(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qe(r,o),El(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qe(r,o),_c(e,t,r,o,n);case 3:e:{if(pp(t),e===null)throw Error(O(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Af(e,t),mi(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=nr(Error(O(423)),t),t=Rc(e,t,r,n,o);break e}else if(r!==o){o=nr(Error(O(424)),t),t=Rc(e,t,r,n,o);break e}else for(Ne=Qt(t.stateNode.containerInfo.firstChild),Fe=t,Q=!0,tt=null,n=Bf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qn(),r===o){t=$t(e,t,n);break e}xe(e,t,r,n)}t=t.child}return t;case 5:return Hf(t),e===null&&bl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,gl(r,o)?a=null:i!==null&&gl(r,i)&&(t.flags|=32),fp(e,t),xe(e,t,a,n),t.child;case 6:return e===null&&bl(t),null;case 13:return mp(e,t,n);case 4:return Ss(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=er(t,null,r,n):xe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qe(r,o),Oc(e,t,r,o,n);case 7:return xe(e,t,t.pendingProps,n),t.child;case 8:return xe(e,t,t.pendingProps.children,n),t.child;case 12:return xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,V(fi,r._currentValue),r._currentValue=a,i!==null)if(it(i.value,a)){if(i.children===o.children&&!Oe.current){t=$t(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Ot(-1,n&-n),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?s.next=s:(s.next=m.next,m.next=s),c.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),kl(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(O(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),kl(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}xe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Yn(t,n),o=Qe(o),r=r(o),t.flags|=1,xe(e,t,r,n),t.child;case 14:return r=t.type,o=qe(r,t.pendingProps),o=qe(r.type,o),zc(e,t,r,o,n);case 15:return cp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qe(r,o),Wo(e,t),t.tag=1,ze(r)?(e=!0,ui(t)):e=!1,Yn(t,n),Mf(t,r,o),Sl(t,r,o,n),Pl(null,t,r,!0,e,n);case 19:return gp(e,t,n);case 22:return dp(e,t,n)}throw Error(O(156,t.tag))};function _p(e,t){return nf(e,t)}function Q0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(e,t,n,r){return new Q0(e,t,n,r)}function js(e){return e=e.prototype,!(!e||!e.isReactComponent)}function G0(e){if(typeof e=="function")return js(e)?1:0;if(e!=null){if(e=e.$$typeof,e===rs)return 11;if(e===os)return 14}return 2}function Jt(e,t){var n=e.alternate;return n===null?(n=Ke(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Yo(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")js(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Rn:return yn(n.children,o,i,t);case ns:a=8,o|=8;break;case Ya:return e=Ke(12,n,t,o|2),e.elementType=Ya,e.lanes=i,e;case Qa:return e=Ke(13,n,t,o),e.elementType=Qa,e.lanes=i,e;case Ga:return e=Ke(19,n,t,o),e.elementType=Ga,e.lanes=i,e;case Md:return Di(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ad:a=10;break e;case jd:a=9;break e;case rs:a=11;break e;case os:a=14;break e;case At:a=16,r=null;break e}throw Error(O(130,e==null?e:typeof e,""))}return t=Ke(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function yn(e,t,n,r){return e=Ke(7,e,r,t),e.lanes=n,e}function Di(e,t,n,r){return e=Ke(22,e,r,t),e.elementType=Md,e.lanes=n,e.stateNode={isHidden:!1},e}function Na(e,t,n){return e=Ke(6,e,null,t),e.lanes=n,e}function Fa(e,t,n){return t=Ke(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Z0(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ga(0),this.expirationTimes=ga(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ga(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ms(e,t,n,r,o,i,a,l,s){return e=new Z0(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ke(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xs(i),e}function X0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_n,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Rp(e){if(!e)return nn;e=e._reactInternals;e:{if(Cn(e)!==e||e.tag!==1)throw Error(O(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(O(171))}if(e.tag===1){var n=e.type;if(ze(n))return _f(e,n,t)}return t}function $p(e,t,n,r,o,i,a,l,s){return e=Ms(n,r,!0,e,o,i,a,l,s),e.context=Rp(null),n=e.current,r=Se(),o=Xt(n),i=Ot(r,o),i.callback=t??null,Gt(n,i,o),e.current.lanes=o,ao(e,o,r),_e(e,r),e}function Bi(e,t,n,r){var o=t.current,i=Se(),a=Xt(o);return n=Rp(n),t.context===null?t.context=n:t.pendingContext=n,t=Ot(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Gt(o,t,a),e!==null&&(ot(e,o,a,i),Bo(e,o,a)),a}function xi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Hc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ds(e,t){Hc(e,t),(e=e.alternate)&&Hc(e,t)}function J0(){return null}var Np=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bs(e){this._internalRoot=e}Hi.prototype.render=Bs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(O(409));Bi(e,t,null,null)};Hi.prototype.unmount=Bs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xn(function(){Bi(null,e,null,null)}),t[_t]=null}};function Hi(e){this._internalRoot=e}Hi.prototype.unstable_scheduleHydration=function(e){if(e){var t=cf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mt.length&&t!==0&&t<Mt[n].priority;n++);Mt.splice(n,0,e),n===0&&ff(e)}};function Hs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ui(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Uc(){}function q0(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=xi(a);i.call(c)}}var a=$p(t,r,e,0,null,!1,!1,"",Uc);return e._reactRootContainer=a,e[_t]=a.current,Wr(e.nodeType===8?e.parentNode:e),xn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var c=xi(s);l.call(c)}}var s=Ms(e,0,!1,null,null,!1,!1,"",Uc);return e._reactRootContainer=s,e[_t]=s.current,Wr(e.nodeType===8?e.parentNode:e),xn(function(){Bi(t,s,n,r)}),s}function Wi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=xi(a);l.call(s)}}Bi(t,a,e,o)}else a=q0(n,t,e,o,r);return xi(a)}sf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Cr(t.pendingLanes);n!==0&&(ls(t,n|1),_e(t,ee()),!(j&6)&&(rr=ee()+500,ln()))}break;case 13:xn(function(){var r=Rt(e,1);if(r!==null){var o=Se();ot(r,e,1,o)}}),Ds(e,1)}};ss=function(e){if(e.tag===13){var t=Rt(e,134217728);if(t!==null){var n=Se();ot(t,e,134217728,n)}Ds(e,134217728)}};uf=function(e){if(e.tag===13){var t=Xt(e),n=Rt(e,t);if(n!==null){var r=Se();ot(n,e,t,r)}Ds(e,t)}};cf=function(){return U};df=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};il=function(e,t,n){switch(t){case"input":if(Ja(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ni(r);if(!o)throw Error(O(90));Bd(r),Ja(r,o)}}}break;case"textarea":Ud(e,n);break;case"select":t=n.value,t!=null&&Un(e,!!n.multiple,t,!1)}};Zd=Fs;Xd=xn;var e1={usingClientEntryPoint:!1,Events:[so,In,Ni,Qd,Gd,Fs]},br={findFiberByHostInstance:pn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},t1={bundleType:br.bundleType,version:br.version,rendererPackageName:br.rendererPackageName,rendererConfig:br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ef(e),e===null?null:e.stateNode},findFiberByHostInstance:br.findFiberByHostInstance||J0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$o.isDisabled&&$o.supportsFiber)try{zi=$o.inject(t1),yt=$o}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e1;je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hs(t))throw Error(O(200));return X0(e,t,null,n)};je.createRoot=function(e,t){if(!Hs(e))throw Error(O(299));var n=!1,r="",o=Np;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ms(e,1,!1,null,null,n,!1,r,o),e[_t]=t.current,Wr(e.nodeType===8?e.parentNode:e),new Bs(t)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(O(188)):(e=Object.keys(e).join(","),Error(O(268,e)));return e=ef(t),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return xn(e)};je.hydrate=function(e,t,n){if(!Ui(t))throw Error(O(200));return Wi(null,e,t,!0,n)};je.hydrateRoot=function(e,t,n){if(!Hs(e))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=Np;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=$p(t,null,e,1,n??null,o,!1,i,a),e[_t]=t.current,Wr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Hi(t)};je.render=function(e,t,n){if(!Ui(t))throw Error(O(200));return Wi(null,e,t,!1,n)};je.unmountComponentAtNode=function(e){if(!Ui(e))throw Error(O(40));return e._reactRootContainer?(xn(function(){Wi(null,null,e,!1,function(){e._reactRootContainer=null,e[_t]=null})}),!0):!1};je.unstable_batchedUpdates=Fs;je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ui(n))throw Error(O(200));if(e==null||e._reactInternals===void 0)throw Error(O(38));return Wi(e,t,n,!1,r)};je.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=je})(Jg);var Fp,Wc=Wa;Fp=Wc.createRoot,Wc.hydrateRoot;/**
 * @remix-run/router v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qr(){return qr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qr.apply(this,arguments)}var Ut;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ut||(Ut={}));const Vc="popstate";function n1(e){e===void 0&&(e={});function t(o,i){let{pathname:a="/",search:l="",hash:s=""}=En(o.location.hash.substr(1));return jl("",{pathname:a,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let a=o.document.querySelector("base"),l="";if(a&&a.getAttribute("href")){let s=o.location.href,c=s.indexOf("#");l=c===-1?s:s.slice(0,c)}return l+"#"+(typeof i=="string"?i:Si(i))}function r(o,i){r1(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return i1(t,n,r,e)}function ae(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function r1(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function o1(){return Math.random().toString(36).substr(2,8)}function Kc(e,t){return{usr:e.state,key:e.key,idx:t}}function jl(e,t,n,r){return n===void 0&&(n=null),qr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?En(t):t,{state:n,key:t&&t.key||r||o1()})}function Si(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function En(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function i1(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l=Ut.Pop,s=null,c=m();c==null&&(c=0,a.replaceState(qr({},a.state,{idx:c}),""));function m(){return(a.state||{idx:null}).idx}function f(){l=Ut.Pop;let x=m(),p=x==null?null:x-c;c=x,s&&s({action:l,location:w.location,delta:p})}function g(x,p){l=Ut.Push;let u=jl(w.location,x,p);n&&n(u,x),c=m()+1;let d=Kc(u,c),y=w.createHref(u);try{a.pushState(d,"",y)}catch{o.location.assign(y)}i&&s&&s({action:l,location:w.location,delta:1})}function v(x,p){l=Ut.Replace;let u=jl(w.location,x,p);n&&n(u,x),c=m();let d=Kc(u,c),y=w.createHref(u);a.replaceState(d,"",y),i&&s&&s({action:l,location:w.location,delta:0})}function b(x){let p=o.location.origin!=="null"?o.location.origin:o.location.href,u=typeof x=="string"?x:Si(x);return ae(p,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,p)}let w={get action(){return l},get location(){return e(o,a)},listen(x){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Vc,f),s=x,()=>{o.removeEventListener(Vc,f),s=null}},createHref(x){return t(o,x)},createURL:b,encodeLocation(x){let p=b(x);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:v,go(x){return a.go(x)}};return w}var Yc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Yc||(Yc={}));function a1(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?En(t):t,o=Us(r.pathname||"/",n);if(o==null)return null;let i=Ip(e);l1(i);let a=null;for(let l=0;a==null&&l<i.length;++l)a=h1(i[l],w1(o));return a}function Ip(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};s.relativePath.startsWith("/")&&(ae(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=qt([r,s.relativePath]),m=n.concat(s);i.children&&i.children.length>0&&(ae(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Ip(i.children,t,m,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:m1(c,i.index),routesMeta:m})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,a);else for(let s of Ap(i.path))o(i,a,s)}),t}function Ap(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=Ap(r.join("/")),l=[];return l.push(...a.map(s=>s===""?i:[i,s].join("/"))),o&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function l1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:g1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const s1=/^:\w+$/,u1=3,c1=2,d1=1,f1=10,p1=-2,Qc=e=>e==="*";function m1(e,t){let n=e.split("/"),r=n.length;return n.some(Qc)&&(r+=p1),t&&(r+=c1),n.filter(o=>!Qc(o)).reduce((o,i)=>o+(s1.test(i)?u1:i===""?d1:f1),r)}function g1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function h1(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,c=o==="/"?t:t.slice(o.length)||"/",m=y1({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},c);if(!m)return null;Object.assign(r,m.params);let f=l.route;i.push({params:r,pathname:qt([o,m.pathname]),pathnameBase:S1(qt([o,m.pathnameBase])),route:f}),m.pathnameBase!=="/"&&(o=qt([o,m.pathnameBase]))}return i}function y1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=v1(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((c,m,f)=>{if(m==="*"){let g=l[f]||"";a=i.slice(0,i.length-g.length).replace(/(.)\/+$/,"$1")}return c[m]=b1(l[f]||"",m),c},{}),pathname:i,pathnameBase:a,pattern:e}}function v1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ws(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function w1(e){try{return decodeURI(e)}catch(t){return Ws(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function b1(e,t){try{return decodeURIComponent(e)}catch(n){return Ws(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Us(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ws(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function k1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?En(e):e;return{pathname:n?n.startsWith("/")?n:x1(n,t):t,search:C1(r),hash:E1(o)}}function x1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Ia(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function jp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Mp(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=En(e):(o=qr({},e),ae(!o.pathname||!o.pathname.includes("?"),Ia("?","pathname","search",o)),ae(!o.pathname||!o.pathname.includes("#"),Ia("#","pathname","hash",o)),ae(!o.search||!o.search.includes("#"),Ia("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(r||a==null)l=n;else{let f=t.length-1;if(a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),f-=1;o.pathname=g.join("/")}l=f>=0?t[f]:"/"}let s=k1(o,l),c=a&&a!=="/"&&a.endsWith("/"),m=(i||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||m)&&(s.pathname+="/"),s}const qt=e=>e.join("/").replace(/\/\/+/g,"/"),S1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),C1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,E1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function P1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const L1=["post","put","patch","delete"];[...L1];/**
 * React Router v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ml(){return Ml=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ml.apply(this,arguments)}function T1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const O1=typeof Object.is=="function"?Object.is:T1,{useState:z1,useEffect:_1,useLayoutEffect:R1,useDebugValue:$1}=Fr;function N1(e,t,n){const r=t(),[{inst:o},i]=z1({inst:{value:r,getSnapshot:t}});return R1(()=>{o.value=r,o.getSnapshot=t,Aa(o)&&i({inst:o})},[e,r,t]),_1(()=>(Aa(o)&&i({inst:o}),e(()=>{Aa(o)&&i({inst:o})})),[e]),$1(r),r}function Aa(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!O1(n,r)}catch{return!0}}function F1(e,t,n){return t()}const I1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",A1=!I1,j1=A1?F1:N1;"useSyncExternalStore"in Fr&&(e=>e.useSyncExternalStore)(Fr);const Dp=P.createContext(null),Vs=P.createContext(null),sr=P.createContext(null),Vi=P.createContext(null),sn=P.createContext({outlet:null,matches:[]}),Bp=P.createContext(null);function M1(e,t){let{relative:n}=t===void 0?{}:t;co()||ae(!1);let{basename:r,navigator:o}=P.useContext(sr),{hash:i,pathname:a,search:l}=Ks(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:qt([r,a])),o.createHref({pathname:s,search:l,hash:i})}function co(){return P.useContext(Vi)!=null}function fo(){return co()||ae(!1),P.useContext(Vi).location}function po(){co()||ae(!1);let{basename:e,navigator:t}=P.useContext(sr),{matches:n}=P.useContext(sn),{pathname:r}=fo(),o=JSON.stringify(jp(n).map(l=>l.pathnameBase)),i=P.useRef(!1);return P.useEffect(()=>{i.current=!0}),P.useCallback(function(l,s){if(s===void 0&&(s={}),!i.current)return;if(typeof l=="number"){t.go(l);return}let c=Mp(l,JSON.parse(o),r,s.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:qt([e,c.pathname])),(s.replace?t.replace:t.push)(c,s.state,s)},[e,t,o,r])}const D1=P.createContext(null);function B1(e){let t=P.useContext(sn).outlet;return t&&P.createElement(D1.Provider,{value:e},t)}function Hp(){let{matches:e}=P.useContext(sn),t=e[e.length-1];return t?t.params:{}}function Ks(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=P.useContext(sn),{pathname:o}=fo(),i=JSON.stringify(jp(r).map(a=>a.pathnameBase));return P.useMemo(()=>Mp(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}function H1(e,t){co()||ae(!1);let{navigator:n}=P.useContext(sr),r=P.useContext(Vs),{matches:o}=P.useContext(sn),i=o[o.length-1],a=i?i.params:{};i&&i.pathname;let l=i?i.pathnameBase:"/";i&&i.route;let s=fo(),c;if(t){var m;let w=typeof t=="string"?En(t):t;l==="/"||(m=w.pathname)!=null&&m.startsWith(l)||ae(!1),c=w}else c=s;let f=c.pathname||"/",g=l==="/"?f:f.slice(l.length)||"/",v=a1(e,{pathname:g}),b=K1(v&&v.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:qt([l,n.encodeLocation?n.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:qt([l,n.encodeLocation?n.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),o,r||void 0);return t&&b?P.createElement(Vi.Provider,{value:{location:Ml({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Ut.Pop}},b):b}function U1(){let e=Z1(),t=P1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},t),n?P.createElement("pre",{style:o},n):null,i)}class W1 extends P.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?P.createElement(sn.Provider,{value:this.props.routeContext},P.createElement(Bp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function V1(e){let{routeContext:t,match:n,children:r}=e,o=P.useContext(Dp);return o&&o.static&&o.staticContext&&n.route.errorElement&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(sn.Provider,{value:t},r)}function K1(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,o=n==null?void 0:n.errors;if(o!=null){let i=r.findIndex(a=>a.route.id&&(o==null?void 0:o[a.route.id]));i>=0||ae(!1),r=r.slice(0,Math.min(r.length,i+1))}return r.reduceRight((i,a,l)=>{let s=a.route.id?o==null?void 0:o[a.route.id]:null,c=n?a.route.errorElement||P.createElement(U1,null):null,m=t.concat(r.slice(0,l+1)),f=()=>P.createElement(V1,{match:a,routeContext:{outlet:i,matches:m}},s?c:a.route.element!==void 0?a.route.element:i);return n&&(a.route.errorElement||l===0)?P.createElement(W1,{location:n.location,component:c,error:s,children:f(),routeContext:{outlet:null,matches:m}}):f()},null)}var Gc;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Gc||(Gc={}));var Ci;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Ci||(Ci={}));function Y1(e){let t=P.useContext(Vs);return t||ae(!1),t}function Q1(e){let t=P.useContext(sn);return t||ae(!1),t}function G1(e){let t=Q1(),n=t.matches[t.matches.length-1];return n.route.id||ae(!1),n.route.id}function Z1(){var e;let t=P.useContext(Bp),n=Y1(Ci.UseRouteError),r=G1(Ci.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Dl(e){return B1(e.context)}function dt(e){ae(!1)}function X1(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Ut.Pop,navigator:i,static:a=!1}=e;co()&&ae(!1);let l=t.replace(/^\/*/,"/"),s=P.useMemo(()=>({basename:l,navigator:i,static:a}),[l,i,a]);typeof r=="string"&&(r=En(r));let{pathname:c="/",search:m="",hash:f="",state:g=null,key:v="default"}=r,b=P.useMemo(()=>{let w=Us(c,l);return w==null?null:{pathname:w,search:m,hash:f,state:g,key:v}},[l,c,m,f,g,v]);return b==null?null:P.createElement(sr.Provider,{value:s},P.createElement(Vi.Provider,{children:n,value:{location:b,navigationType:o}}))}function J1(e){let{children:t,location:n}=e,r=P.useContext(Dp),o=r&&!t?r.router.routes:Bl(t);return H1(o,n)}var Zc;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Zc||(Zc={}));new Promise(()=>{});function Bl(e,t){t===void 0&&(t=[]);let n=[];return P.Children.forEach(e,(r,o)=>{if(!P.isValidElement(r))return;if(r.type===P.Fragment){n.push.apply(n,Bl(r.props.children,t));return}r.type!==dt&&ae(!1),!r.props.index||!r.props.children||ae(!1);let i=[...t,o],a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(a.children=Bl(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ei(){return Ei=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ei.apply(this,arguments)}function Up(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function q1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ey(e,t){return e.button===0&&(!t||t==="_self")&&!q1(e)}const ty=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],ny=["aria-current","caseSensitive","className","end","style","to","children"];function ry(e){let{basename:t,children:n,window:r}=e,o=P.useRef();o.current==null&&(o.current=n1({window:r,v5Compat:!0}));let i=o.current,[a,l]=P.useState({action:i.action,location:i.location});return P.useLayoutEffect(()=>i.listen(l),[i]),P.createElement(X1,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:i})}const oy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",iy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ys=P.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:l,target:s,to:c,preventScrollReset:m}=t,f=Up(t,ty),{basename:g}=P.useContext(sr),v,b=!1;if(typeof c=="string"&&iy.test(c)&&(v=c,oy)){let u=new URL(window.location.href),d=c.startsWith("//")?new URL(u.protocol+c):new URL(c),y=Us(d.pathname,g);d.origin===u.origin&&y!=null?c=y+d.search+d.hash:b=!0}let w=M1(c,{relative:o}),x=ly(c,{replace:a,state:l,target:s,preventScrollReset:m,relative:o});function p(u){r&&r(u),u.defaultPrevented||x(u)}return P.createElement("a",Ei({},f,{href:v||w,onClick:b||i?r:p,ref:n,target:s}))}),ay=P.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:a=!1,style:l,to:s,children:c}=t,m=Up(t,ny),f=Ks(s,{relative:m.relative}),g=fo(),v=P.useContext(Vs),{navigator:b}=P.useContext(sr),w=b.encodeLocation?b.encodeLocation(f).pathname:f.pathname,x=g.pathname,p=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;o||(x=x.toLowerCase(),p=p?p.toLowerCase():null,w=w.toLowerCase());let u=x===w||!a&&x.startsWith(w)&&x.charAt(w.length)==="/",d=p!=null&&(p===w||!a&&p.startsWith(w)&&p.charAt(w.length)==="/"),y=u?r:void 0,k;typeof i=="function"?k=i({isActive:u,isPending:d}):k=[i,u?"active":null,d?"pending":null].filter(Boolean).join(" ");let S=typeof l=="function"?l({isActive:u,isPending:d}):l;return P.createElement(Ys,Ei({},m,{"aria-current":y,className:k,ref:n,style:S,to:s}),typeof c=="function"?c({isActive:u,isPending:d}):c)});var Xc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Xc||(Xc={}));var Jc;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Jc||(Jc={}));function ly(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a}=t===void 0?{}:t,l=po(),s=fo(),c=Ks(e,{relative:a});return P.useCallback(m=>{if(ey(m,n)){m.preventDefault();let f=r!==void 0?r:Si(s)===Si(c);l(e,{replace:f,state:o,preventScrollReset:i,relative:a})}},[s,l,c,r,o,n,e,i,a])}function Hl(){return Hl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hl.apply(this,arguments)}function Wp(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var sy=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,uy=Wp(function(e){return sy.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function cy(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function dy(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var fy=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(dy(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=cy(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),ye="-ms-",Pi="-moz-",B="-webkit-",Vp="comm",Qs="rule",Gs="decl",py="@import",Kp="@keyframes",my=Math.abs,Ki=String.fromCharCode,gy=Object.assign;function hy(e,t){return fe(e,0)^45?(((t<<2^fe(e,0))<<2^fe(e,1))<<2^fe(e,2))<<2^fe(e,3):0}function Yp(e){return e.trim()}function yy(e,t){return(e=t.exec(e))?e[0]:e}function H(e,t,n){return e.replace(t,n)}function Ul(e,t){return e.indexOf(t)}function fe(e,t){return e.charCodeAt(t)|0}function eo(e,t,n){return e.slice(t,n)}function pt(e){return e.length}function Zs(e){return e.length}function No(e,t){return t.push(e),e}function vy(e,t){return e.map(t).join("")}var Yi=1,or=1,Qp=0,Re=0,te=0,ur="";function Qi(e,t,n,r,o,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Yi,column:or,length:a,return:""}}function kr(e,t){return gy(Qi("",null,null,"",null,null,0),e,{length:-e.length},t)}function wy(){return te}function by(){return te=Re>0?fe(ur,--Re):0,or--,te===10&&(or=1,Yi--),te}function Ie(){return te=Re<Qp?fe(ur,Re++):0,or++,te===10&&(or=1,Yi++),te}function wt(){return fe(ur,Re)}function Qo(){return Re}function mo(e,t){return eo(ur,e,t)}function to(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Gp(e){return Yi=or=1,Qp=pt(ur=e),Re=0,[]}function Zp(e){return ur="",e}function Go(e){return Yp(mo(Re-1,Wl(e===91?e+2:e===40?e+1:e)))}function ky(e){for(;(te=wt())&&te<33;)Ie();return to(e)>2||to(te)>3?"":" "}function xy(e,t){for(;--t&&Ie()&&!(te<48||te>102||te>57&&te<65||te>70&&te<97););return mo(e,Qo()+(t<6&&wt()==32&&Ie()==32))}function Wl(e){for(;Ie();)switch(te){case e:return Re;case 34:case 39:e!==34&&e!==39&&Wl(te);break;case 40:e===41&&Wl(e);break;case 92:Ie();break}return Re}function Sy(e,t){for(;Ie()&&e+te!==47+10;)if(e+te===42+42&&wt()===47)break;return"/*"+mo(t,Re-1)+"*"+Ki(e===47?e:Ie())}function Cy(e){for(;!to(wt());)Ie();return mo(e,Re)}function Ey(e){return Zp(Zo("",null,null,null,[""],e=Gp(e),0,[0],e))}function Zo(e,t,n,r,o,i,a,l,s){for(var c=0,m=0,f=a,g=0,v=0,b=0,w=1,x=1,p=1,u=0,d="",y=o,k=i,S=r,E=d;x;)switch(b=u,u=Ie()){case 40:if(b!=108&&fe(E,f-1)==58){Ul(E+=H(Go(u),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:E+=Go(u);break;case 9:case 10:case 13:case 32:E+=ky(b);break;case 92:E+=xy(Qo()-1,7);continue;case 47:switch(wt()){case 42:case 47:No(Py(Sy(Ie(),Qo()),t,n),s);break;default:E+="/"}break;case 123*w:l[c++]=pt(E)*p;case 125*w:case 59:case 0:switch(u){case 0:case 125:x=0;case 59+m:v>0&&pt(E)-f&&No(v>32?ed(E+";",r,n,f-1):ed(H(E," ","")+";",r,n,f-2),s);break;case 59:E+=";";default:if(No(S=qc(E,t,n,c,m,o,l,d,y=[],k=[],f),i),u===123)if(m===0)Zo(E,t,S,S,y,i,f,l,k);else switch(g===99&&fe(E,3)===110?100:g){case 100:case 109:case 115:Zo(e,S,S,r&&No(qc(e,S,S,0,0,o,l,d,o,y=[],f),k),o,k,f,l,r?y:k);break;default:Zo(E,S,S,S,[""],k,0,l,k)}}c=m=v=0,w=p=1,d=E="",f=a;break;case 58:f=1+pt(E),v=b;default:if(w<1){if(u==123)--w;else if(u==125&&w++==0&&by()==125)continue}switch(E+=Ki(u),u*w){case 38:p=m>0?1:(E+="\f",-1);break;case 44:l[c++]=(pt(E)-1)*p,p=1;break;case 64:wt()===45&&(E+=Go(Ie())),g=wt(),m=f=pt(d=E+=Cy(Qo())),u++;break;case 45:b===45&&pt(E)==2&&(w=0)}}return i}function qc(e,t,n,r,o,i,a,l,s,c,m){for(var f=o-1,g=o===0?i:[""],v=Zs(g),b=0,w=0,x=0;b<r;++b)for(var p=0,u=eo(e,f+1,f=my(w=a[b])),d=e;p<v;++p)(d=Yp(w>0?g[p]+" "+u:H(u,/&\f/g,g[p])))&&(s[x++]=d);return Qi(e,t,n,o===0?Qs:l,s,c,m)}function Py(e,t,n){return Qi(e,t,n,Vp,Ki(wy()),eo(e,2,-2),0)}function ed(e,t,n,r){return Qi(e,t,n,Gs,eo(e,0,r),eo(e,r+1,-1),r)}function Gn(e,t){for(var n="",r=Zs(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function Ly(e,t,n,r){switch(e.type){case py:case Gs:return e.return=e.return||e.value;case Vp:return"";case Kp:return e.return=e.value+"{"+Gn(e.children,r)+"}";case Qs:e.value=e.props.join(",")}return pt(n=Gn(e.children,r))?e.return=e.value+"{"+n+"}":""}function Ty(e){var t=Zs(e);return function(n,r,o,i){for(var a="",l=0;l<t;l++)a+=e[l](n,r,o,i)||"";return a}}function Oy(e){return function(t){t.root||(t=t.return)&&e(t)}}var zy=function(t,n,r){for(var o=0,i=0;o=i,i=wt(),o===38&&i===12&&(n[r]=1),!to(i);)Ie();return mo(t,Re)},_y=function(t,n){var r=-1,o=44;do switch(to(o)){case 0:o===38&&wt()===12&&(n[r]=1),t[r]+=zy(Re-1,n,r);break;case 2:t[r]+=Go(o);break;case 4:if(o===44){t[++r]=wt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Ki(o)}while(o=Ie());return t},Ry=function(t,n){return Zp(_y(Gp(t),n))},td=new WeakMap,$y=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!td.get(r))&&!o){td.set(t,!0);for(var i=[],a=Ry(n,i),l=r.props,s=0,c=0;s<a.length;s++)for(var m=0;m<l.length;m++,c++)t.props[c]=i[s]?a[s].replace(/&\f/g,l[m]):l[m]+" "+a[s]}}},Ny=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Xp(e,t){switch(hy(e,t)){case 5103:return B+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return B+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return B+e+Pi+e+ye+e+e;case 6828:case 4268:return B+e+ye+e+e;case 6165:return B+e+ye+"flex-"+e+e;case 5187:return B+e+H(e,/(\w+).+(:[^]+)/,B+"box-$1$2"+ye+"flex-$1$2")+e;case 5443:return B+e+ye+"flex-item-"+H(e,/flex-|-self/,"")+e;case 4675:return B+e+ye+"flex-line-pack"+H(e,/align-content|flex-|-self/,"")+e;case 5548:return B+e+ye+H(e,"shrink","negative")+e;case 5292:return B+e+ye+H(e,"basis","preferred-size")+e;case 6060:return B+"box-"+H(e,"-grow","")+B+e+ye+H(e,"grow","positive")+e;case 4554:return B+H(e,/([^-])(transform)/g,"$1"+B+"$2")+e;case 6187:return H(H(H(e,/(zoom-|grab)/,B+"$1"),/(image-set)/,B+"$1"),e,"")+e;case 5495:case 3959:return H(e,/(image-set\([^]*)/,B+"$1$`$1");case 4968:return H(H(e,/(.+:)(flex-)?(.*)/,B+"box-pack:$3"+ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+B+e+e;case 4095:case 3583:case 4068:case 2532:return H(e,/(.+)-inline(.+)/,B+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pt(e)-1-t>6)switch(fe(e,t+1)){case 109:if(fe(e,t+4)!==45)break;case 102:return H(e,/(.+:)(.+)-([^]+)/,"$1"+B+"$2-$3$1"+Pi+(fe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ul(e,"stretch")?Xp(H(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(fe(e,t+1)!==115)break;case 6444:switch(fe(e,pt(e)-3-(~Ul(e,"!important")&&10))){case 107:return H(e,":",":"+B)+e;case 101:return H(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+B+(fe(e,14)===45?"inline-":"")+"box$3$1"+B+"$2$3$1"+ye+"$2box$3")+e}break;case 5936:switch(fe(e,t+11)){case 114:return B+e+ye+H(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return B+e+ye+H(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return B+e+ye+H(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return B+e+ye+e+e}return e}var Fy=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case Gs:t.return=Xp(t.value,t.length);break;case Kp:return Gn([kr(t,{value:H(t.value,"@","@"+B)})],o);case Qs:if(t.length)return vy(t.props,function(i){switch(yy(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Gn([kr(t,{props:[H(i,/:(read-\w+)/,":"+Pi+"$1")]})],o);case"::placeholder":return Gn([kr(t,{props:[H(i,/:(plac\w+)/,":"+B+"input-$1")]}),kr(t,{props:[H(i,/:(plac\w+)/,":"+Pi+"$1")]}),kr(t,{props:[H(i,/:(plac\w+)/,ye+"input-$1")]})],o)}return""})}},Iy=[Fy],Ay=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(w){var x=w.getAttribute("data-emotion");x.indexOf(" ")!==-1&&(document.head.appendChild(w),w.setAttribute("data-s",""))})}var o=t.stylisPlugins||Iy,i={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(w){for(var x=w.getAttribute("data-emotion").split(" "),p=1;p<x.length;p++)i[x[p]]=!0;l.push(w)});var s,c=[$y,Ny];{var m,f=[Ly,Oy(function(w){m.insert(w)})],g=Ty(c.concat(o,f)),v=function(x){return Gn(Ey(x),g)};s=function(x,p,u,d){m=u,v(x?x+"{"+p.styles+"}":p.styles),d&&(b.inserted[p.name]=!0)}}var b={key:n,sheet:new fy({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:s};return b.sheet.hydrate(l),b},Vl={},jy={get exports(){return Vl},set exports(e){Vl=e}},W={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ce=typeof Symbol=="function"&&Symbol.for,Xs=ce?Symbol.for("react.element"):60103,Js=ce?Symbol.for("react.portal"):60106,Gi=ce?Symbol.for("react.fragment"):60107,Zi=ce?Symbol.for("react.strict_mode"):60108,Xi=ce?Symbol.for("react.profiler"):60114,Ji=ce?Symbol.for("react.provider"):60109,qi=ce?Symbol.for("react.context"):60110,qs=ce?Symbol.for("react.async_mode"):60111,ea=ce?Symbol.for("react.concurrent_mode"):60111,ta=ce?Symbol.for("react.forward_ref"):60112,na=ce?Symbol.for("react.suspense"):60113,My=ce?Symbol.for("react.suspense_list"):60120,ra=ce?Symbol.for("react.memo"):60115,oa=ce?Symbol.for("react.lazy"):60116,Dy=ce?Symbol.for("react.block"):60121,By=ce?Symbol.for("react.fundamental"):60117,Hy=ce?Symbol.for("react.responder"):60118,Uy=ce?Symbol.for("react.scope"):60119;function De(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Xs:switch(e=e.type,e){case qs:case ea:case Gi:case Xi:case Zi:case na:return e;default:switch(e=e&&e.$$typeof,e){case qi:case ta:case oa:case ra:case Ji:return e;default:return t}}case Js:return t}}}function Jp(e){return De(e)===ea}W.AsyncMode=qs;W.ConcurrentMode=ea;W.ContextConsumer=qi;W.ContextProvider=Ji;W.Element=Xs;W.ForwardRef=ta;W.Fragment=Gi;W.Lazy=oa;W.Memo=ra;W.Portal=Js;W.Profiler=Xi;W.StrictMode=Zi;W.Suspense=na;W.isAsyncMode=function(e){return Jp(e)||De(e)===qs};W.isConcurrentMode=Jp;W.isContextConsumer=function(e){return De(e)===qi};W.isContextProvider=function(e){return De(e)===Ji};W.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xs};W.isForwardRef=function(e){return De(e)===ta};W.isFragment=function(e){return De(e)===Gi};W.isLazy=function(e){return De(e)===oa};W.isMemo=function(e){return De(e)===ra};W.isPortal=function(e){return De(e)===Js};W.isProfiler=function(e){return De(e)===Xi};W.isStrictMode=function(e){return De(e)===Zi};W.isSuspense=function(e){return De(e)===na};W.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Gi||e===ea||e===Xi||e===Zi||e===na||e===My||typeof e=="object"&&e!==null&&(e.$$typeof===oa||e.$$typeof===ra||e.$$typeof===Ji||e.$$typeof===qi||e.$$typeof===ta||e.$$typeof===By||e.$$typeof===Hy||e.$$typeof===Uy||e.$$typeof===Dy)};W.typeOf=De;(function(e){e.exports=W})(jy);var qp=Vl,Wy={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Vy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},em={};em[qp.ForwardRef]=Wy;em[qp.Memo]=Vy;var Ky=!0;function tm(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var eu=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||Ky===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},tu=function(t,n,r){eu(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function Yy(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Qy={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Gy=/[A-Z]|^ms/g,Zy=/_EMO_([^_]+?)_([^]*?)_EMO_/g,nm=function(t){return t.charCodeAt(1)===45},nd=function(t){return t!=null&&typeof t!="boolean"},ja=Wp(function(e){return nm(e)?e:e.replace(Gy,"-$&").toLowerCase()}),rd=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Zy,function(r,o,i){return mt={name:o,styles:i,next:mt},o})}return Qy[t]!==1&&!nm(t)&&typeof n=="number"&&n!==0?n+"px":n};function no(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return mt={name:n.name,styles:n.styles,next:mt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)mt={name:r.name,styles:r.styles,next:mt},r=r.next;var o=n.styles+";";return o}return Xy(e,t,n)}case"function":{if(e!==void 0){var i=mt,a=n(e);return mt=i,no(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function Xy(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=no(e,t,n[o])+";";else for(var i in n){var a=n[i];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=i+"{"+t[a]+"}":nd(a)&&(r+=ja(i)+":"+rd(i,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)nd(a[l])&&(r+=ja(i)+":"+rd(i,a[l])+";");else{var s=no(e,t,a);switch(i){case"animation":case"animationName":{r+=ja(i)+":"+s+";";break}default:r+=i+"{"+s+"}"}}}return r}var od=/label:\s*([^\s;\n{]+)\s*(;|$)/g,mt,ia=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";mt=void 0;var a=t[0];a==null||a.raw===void 0?(o=!1,i+=no(r,n,a)):i+=a[0];for(var l=1;l<t.length;l++)i+=no(r,n,t[l]),o&&(i+=a[l]);od.lastIndex=0;for(var s="",c;(c=od.exec(i))!==null;)s+="-"+c[1];var m=Yy(i)+s;return{name:m,styles:i,next:mt}},Jy=function(t){return t()},rm=Fr["useInsertionEffect"]?Fr["useInsertionEffect"]:!1,om=rm||Jy,id=rm||P.useLayoutEffect,nu={}.hasOwnProperty,im=P.createContext(typeof HTMLElement<"u"?Ay({key:"css"}):null);im.Provider;var ru=function(t){return P.forwardRef(function(n,r){var o=P.useContext(im);return t(n,o,r)})},ou=P.createContext({}),Kl="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",qy=function(t,n){var r={};for(var o in n)nu.call(n,o)&&(r[o]=n[o]);return r[Kl]=t,r},ev=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return eu(n,r,o),om(function(){return tu(n,r,o)}),null},tv=ru(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[Kl],i=[r],a="";typeof e.className=="string"?a=tm(t.registered,i,e.className):e.className!=null&&(a=e.className+" ");var l=ia(i,void 0,P.useContext(ou));a+=t.key+"-"+l.name;var s={};for(var c in e)nu.call(e,c)&&c!=="css"&&c!==Kl&&(s[c]=e[c]);return s.ref=n,s.className=a,P.createElement(P.Fragment,null,P.createElement(ev,{cache:t,serialized:l,isStringTag:typeof o=="string"}),P.createElement(o,s))}),h=function(t,n){var r=arguments;if(n==null||!nu.call(n,"css"))return P.createElement.apply(void 0,r);var o=r.length,i=new Array(o);i[0]=tv,i[1]=qy(t,n);for(var a=2;a<o;a++)i[a]=r[a];return P.createElement.apply(null,i)},am=ru(function(e,t){var n=e.styles,r=ia([n],void 0,P.useContext(ou)),o=P.useRef();return id(function(){var i=t.key+"-global",a=new t.sheet.constructor({key:i,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),l=!1,s=document.querySelector('style[data-emotion="'+i+" "+r.name+'"]');return t.sheet.tags.length&&(a.before=t.sheet.tags[0]),s!==null&&(l=!0,s.setAttribute("data-emotion",i),a.hydrate([s])),o.current=[a,l],function(){a.flush()}},[t]),id(function(){var i=o.current,a=i[0],l=i[1];if(l){i[1]=!1;return}if(r.next!==void 0&&tu(t,r.next,!0),a.tags.length){var s=a.tags[a.tags.length-1].nextElementSibling;a.before=s,a.flush()}t.insert("",r,a,!1)},[t,r.name]),null});function lm(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return ia(t)}var nv=uy,rv=function(t){return t!=="theme"},ad=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?nv:rv},ld=function(t,n,r){var o;if(n){var i=n.shouldForwardProp;o=t.__emotion_forwardProp&&i?function(a){return t.__emotion_forwardProp(a)&&i(a)}:i}return typeof o!="function"&&r&&(o=t.__emotion_forwardProp),o},ov=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return eu(n,r,o),om(function(){return tu(n,r,o)}),null},iv=function e(t,n){var r=t.__emotion_real===t,o=r&&t.__emotion_base||t,i,a;n!==void 0&&(i=n.label,a=n.target);var l=ld(t,n,r),s=l||ad(o),c=!s("as");return function(){var m=arguments,f=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(i!==void 0&&f.push("label:"+i+";"),m[0]==null||m[0].raw===void 0)f.push.apply(f,m);else{f.push(m[0][0]);for(var g=m.length,v=1;v<g;v++)f.push(m[v],m[0][v])}var b=ru(function(w,x,p){var u=c&&w.as||o,d="",y=[],k=w;if(w.theme==null){k={};for(var S in w)k[S]=w[S];k.theme=P.useContext(ou)}typeof w.className=="string"?d=tm(x.registered,y,w.className):w.className!=null&&(d=w.className+" ");var E=ia(f.concat(y),x.registered,k);d+=x.key+"-"+E.name,a!==void 0&&(d+=" "+a);var L=c&&l===void 0?ad(u):s,T={};for(var _ in w)c&&_==="as"||L(_)&&(T[_]=w[_]);return T.className=d,T.ref=p,P.createElement(P.Fragment,null,P.createElement(ov,{cache:x,serialized:E,isStringTag:typeof u=="string"}),P.createElement(u,T))});return b.displayName=i!==void 0?i:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",b.defaultProps=t.defaultProps,b.__emotion_real=b,b.__emotion_base=o,b.__emotion_styles=f,b.__emotion_forwardProp=l,Object.defineProperty(b,"toString",{value:function(){return"."+a}}),b.withComponent=function(w,x){return e(w,Hl({},n,x,{shouldForwardProp:ld(b,x,!0)})).apply(void 0,f)},b}},av=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],C=iv.bind();av.forEach(function(e){C[e]=C(e)});const sm=[{id:1,title:"Grid Spider EA [MT5]",description:"Trading is not about luck — it's about consistency and discipline. This EA is designed as a professional automated assistant to help traders manage market opportunities with precision, speed, and without emotions.",price:1e3,image:"/images/ea/grid_spider/grid_spider_ea.png",images:["/images/ea/grid_spider/grid_spider_ea.png","/images/ea/grid_spider/grid_spider_ea_1.png","/images/ea/grid_spider/grid_spider_ea_2.png","/images/ea/grid_spider/grid_spider_ea_3.png","/images/ea/grid_spider/grid_spider_ea_4.png"],category:"Expert Advisor",rentalOptions:[{months:1,price:47},{months:3,price:130},{months:6,price:240},{months:12,price:450}],features:["24/7 Discipline","Accurate Execution","Smart Risk Management","Multi-pair & Multi-timeframe","Auto lot sizing","Lot Customization","Stable & Proven"]},{id:2,title:"Dagangduit Auto SLTP [MT5]",description:"The Dagangduit EA Auto_SLTP is an Expert Advisor developed for MetaTrader 5 to provide automated management of SL and TP levels, plus advanced trading features.",price:450,image:"/images/ea/sltp/automatic_sltp.png",images:["/images/ea/sltp/automatic_sltp.png","/images/ea/sltp/automatic_sltp_1.png","/images/ea/sltp/automatic_sltp_2.png","/images/ea/sltp/automatic_sltp_3.png","/images/ea/sltp/automatic_sltp_4.png"],category:"Utilities",rentalOptions:[{months:3,price:27},{months:6,price:47}],features:["Automated SL and TP Management","Flexible SL and TP Settings","Hidden SL and TP Option","Profit Locking","Auto lot sizing","Chart Symbol Selection","Alerts","Strategy Tester Compatibility"]},{id:3,title:"Scalpix Max [MT4]",description:"This MT4 robot is a cutting-edge trading solution exclusively for MetaTrader 4, suitable for both novice and experienced traders.",price:300,image:"/images/ea/scalpix/scalpix_max.png",images:["/images/ea/scalpix/scalpix_max.png","/images/ea/scalpix/scalpix_max_1.png","/images/ea/scalpix/scalpix_max_2.png","/images/ea/scalpix/scalpix_max_3.png","/images/ea/scalpix/scalpix_max_4.png"],category:"Expert Advisor",rentalOptions:[],features:["Lot Customization","Customizable Martingale","Smart Risk Management","In-Depth Trend Analysis","Candlestick-Based Signals","Magic Number Recognition"]},{id:4,title:"Auto SLTP Risk Assistant [MT4]",description:"Auto SLTP Risk Assistant is an automatic trading tool for MetaTrader 5 designed to help traders set Stop Loss (SL) and Take Profit (TP) accurately based on fixed risk per trade. With a simple and interactive interface, just drag the SL line on your chart and the EA will automatically calculate lot size and TP based on the chosen Risk:Reward ratio, then execute a BUY or SELL order instantly.",price:450,image:"/images/ea/sltp_assist/auto_sltp_risk_assistant.png",images:["/images/ea/sltp_assist/auto_sltp_risk_assistant.png","/images/ea/sltp_assist/auto_sltp_risk_assistant_1.png","/images/ea/sltp_assist/auto_sltp_risk_assistant_2.png","/images/ea/sltp_assist/auto_sltp_risk_assistant_3.png","/images/ea/sltp_assist/auto_sltp_risk_assistant_4.png"],category:"Utilities",rentalOptions:[{months:3,price:27},{months:6,price:50}],features:["Auto Lot Calculation","Flexible SL Line","In-chart input","Quick Action Buttons","Clean and responsive interface","Locking (Manual Hedging)","Compatible with Cent and Standard accounts"]},{id:6,title:"Auto SLTP Risk Assistant [MT5]",description:"Auto SLTP Risk Assistant is an automatic trading tool for MetaTrader 5 designed to help traders set Stop Loss (SL) and Take Profit (TP) accurately based on fixed risk per trade. With a simple and interactive interface, just drag the SL line on your chart and the EA will automatically calculate lot size and TP based on the chosen Risk:Reward ratio, then execute a BUY or SELL order instantly.",price:450,image:"/images/ea/sltp_assist/auto_sltp_risk_assistant.png",images:["/images/ea/sltp_assist/auto_sltp_risk_assistant.png","/images/ea/sltp_assist/auto_sltp_risk_assistant_1.png","/images/ea/sltp_assist/auto_sltp_risk_assistant_2.png","/images/ea/sltp_assist/auto_sltp_risk_assistant_3.png","/images/ea/sltp_assist/auto_sltp_risk_assistant_4.png"],category:"Utilities",rentalOptions:[{months:3,price:27},{months:6,price:50}],features:["Auto Lot Calculation","Flexible SL Line","In-chart input","Quick Action Buttons","Clean and responsive interface","Locking (Manual Hedging)","Compatible with Cent and Standard accounts"]},{id:6,title:"Dagangduit Auto SLTP [MT4]",description:"The Dagangduit EA Auto_SLTP is an Expert Advisor developed for MetaTrader 5 to provide automated management of Stop Loss (SL) and Take Profit (TP) levels for your trades, as well as other advanced features to enhance your trading experience.",price:450,image:"/images/ea/sltp/automatic_sltp.png",images:["/images/ea/sltp/automatic_sltp.png","/images/ea/sltp/automatic_sltp_1.png","/images/ea/sltp/automatic_sltp_2.png","/images/ea/sltp/automatic_sltp_3.png","/images/ea/sltp/automatic_sltp_4.png"],category:"Utilities",rentalOptions:[{months:3,price:27},{months:6,price:47}],features:["Automated SL and TP Management","Flexible SL and TP Settings","Hidden SL and TP Option","Profit Locking","Auto lot sizing","Chart Symbol Selection","Alerts","Strategy Tester Compatibility"]}];function lv(e){const t=new Path2D;return e.forEach((n,r)=>{r===0?t.moveTo(n.x,n.y):t.lineTo(n.x,n.y)}),t}class um{constructor(t,n,r,o){st(this,"x");st(this,"y");st(this,"size");st(this,"color");st(this,"angle",2*Math.PI*Math.random());st(this,"rotate",Math.random()*Math.PI);st(this,"speed",.2+Math.random()*1.5);this.x=t,this.y=n,this.size=r,this.color=o}move(){this.x+=this.speed,this.rotate-=this.speed*.006}createGradient(t){const n=this.size*1.5,r=this.angle+Math.PI,o=this.x+this.size*Math.sin(this.angle+this.rotate),i=this.y+this.size*Math.cos(this.angle+this.rotate),a=this.x+n*Math.sin(r+this.rotate),l=this.y+n*Math.cos(r+this.rotate),s=t.createLinearGradient(o,i,a,l);return s.addColorStop(0,this.color),s.addColorStop(.3,this.color),s.addColorStop(.85,"#ffffff"),s}}class cm extends um{constructor(n,r,o,i,a){super(n,r,o,i);st(this,"sides");this.sides=a}draw(n){const r=this.size/2,o=Math.PI*2/this.sides,i=[];Array.from({length:this.sides}).forEach((l,s)=>{i.push({x:this.x+r*Math.sin(o*s+this.rotate),y:this.y+r*Math.cos(o*s+this.rotate)})});const a=lv(i);n.fillStyle=this.createGradient(n),n.fill(a)}}class sv extends cm{constructor(t,n,r,o){super(t,n,r,o,3)}}class uv extends cm{constructor(t,n,r,o){super(t,n,r,o,4)}}class cv extends um{draw(t){const n=this.size/2,r=new Path2D;r.moveTo(0,0),r.arc(this.x,this.y,n,0,2*Math.PI),t.fillStyle=this.createGradient(t),t.fill(r)}}const dv=C.canvas({height:"100%",width:"100%",opacity:"0",transitionProperty:"opacity",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms"}),fv={opacity:"1"},sd=[sv,uv,cv],ud=["#f97316","#f59e0b","#eab308","#84cc16","#22c55e","#10b981","#14b8a6","#06b6d4","#0ea5e9","#3b82f6","#6366f1","#8b5cf6","#a855f7","#d946ef","#ec4899","#f43f5e"];function kt(e){const{count:t,sizes:n}=e,[r,o]=P.useState(!1),i=P.useRef(null),a=P.useRef([]),l=P.useCallback(()=>{if(!i.current)return;const f=i.current.getBoundingClientRect();i.current.width=f.width,i.current.height=f.height},[]),s=P.useCallback(()=>{if(!i.current)return;const f=i.current.width,g=i.current.height,v=a.current.length===0;for(;a.current.length<t;){const b=sd[Math.floor(Math.random()*sd.length)],w=ud[Math.floor(Math.random()*ud.length)],x=n[0]+Math.random()*(n[1]-n[0]),p=v?Math.random()*f:-x,u=Math.random()*g;a.current.push(new b(p,u,x,w))}},[]),c=P.useCallback(()=>{if(!i.current)return;const f=i.current.getContext("2d"),g=i.current.width,v=i.current.height;f.clearRect(0,0,g,v),a.current.forEach(b=>{b.move(),b.draw(f)}),a.current=a.current.filter(b=>b.x-b.size<g)},[]),m=P.useCallback(()=>{s(),c(),requestAnimationFrame(m)},[]);return P.useEffect(()=>(l(),m(),o(!0),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)}),[]),h(dv,{ref:i,css:[r&&fv]})}const pv=C.div`
  ${{position:"relative",minHeight:"100%",width:"100%",overflow:"hidden",paddingTop:"2.5rem",paddingBottom:"2.5rem",paddingLeft:"2rem",paddingRight:"2rem",transitionProperty:"color, background-color, border-color, text-decoration-color, fill, stroke",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms"}}
`,mv=C.div({pointerEvents:"none",position:"absolute",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:"-20",height:"100%",width:"100%",opacity:"0.5","--tw-blur":"blur(4px)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)",userSelect:"none"}),gv=C.div({pointerEvents:"none",position:"absolute",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:"-10",height:"100%",width:"100%",userSelect:"none"}),hv=C.div({marginLeft:"auto",marginRight:"auto",marginBottom:"2rem",maxWidth:"56rem",paddingLeft:"1rem",paddingRight:"1rem",textAlign:"center","@media (min-width: 640px)":{marginBottom:"3rem"}}),yv=C.h1({marginBottom:"1rem",fontSize:"1.5rem",lineHeight:"2rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(243 244 246 / var(--tw-text-opacity))"},"@media (min-width: 640px)":{fontSize:"1.875rem",lineHeight:"2.25rem"},"@media (min-width: 1024px)":{fontSize:"2.25rem",lineHeight:"2.5rem"}}),vv=C.p({fontSize:"1rem",lineHeight:"1.625","--tw-text-opacity":"1",color:"rgb(75 85 99 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(156 163 175 / var(--tw-text-opacity))"},"@media (min-width: 640px)":{fontSize:"1.125rem",lineHeight:"1.75rem"}}),wv=C.div({marginLeft:"auto",marginRight:"auto",marginTop:"2rem",marginBottom:"1rem",maxWidth:"36rem"}),bv=C.input`
  ${{width:"100%",borderRadius:"9999px",borderWidth:"2px",paddingLeft:"1.5rem",paddingRight:"1.5rem",paddingTop:"0.75rem",paddingBottom:"0.75rem",outline:"2px solid transparent",outlineOffset:"2px",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms"}}
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgb(71, 85, 105);
  
  .dark & {
    background: rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgb(148, 163, 184);
  }
  
  &::placeholder {
    color: rgb(100, 116, 139);
    opacity: 0.7;
  }
  
  .dark &::placeholder {
    color: rgb(148, 163, 184);
    opacity: 0.6;
  }
  
  &:focus {
    border: 1px solid rgba(59, 130, 246, 0.5);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    background: rgba(255, 255, 255, 0.25);
    
    .dark & {
      background: rgba(0, 0, 0, 0.35);
    }
  }
`,kv=C.div`
  ${{paddingTop:"5rem",paddingBottom:"5rem",textAlign:"center",fontSize:"1.125rem",lineHeight:"1.75rem"}}
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgb(100, 116, 139);
  
  .dark & {
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: rgb(148, 163, 184);
  }
`,xv=C.div({marginLeft:"auto",marginRight:"auto",display:"grid",maxWidth:"72rem",gridTemplateColumns:"repeat(1, minmax(0, 1fr))",gap:"2rem",padding:"2rem","@media (min-width: 640px)":{gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},"@media (min-width: 1024px)":{gridTemplateColumns:"repeat(3, minmax(0, 1fr))"}}),Sv=C.div`
  ${{position:"relative",height:"100%",cursor:"pointer",overflow:"hidden",borderRadius:"1rem",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms"}}
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgb(71, 85, 105);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  .dark & {
    background: rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgb(148, 163, 184);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.15);
  }

  &:hover {
    transform: translateY(-6px);
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);

    .dark & {
      background: rgba(0, 0, 0, 0.35);
      box-shadow: 0 0 25px rgba(255, 255, 255, 0.25);
    }
  }
`,Cv=C.div`
  ${{position:"relative",aspectRatio:"16/10",width:"100%",overflow:"hidden"}}
  .dark & img {
    filter: brightness(0.8) contrast(1.1);
  }
`,Ev=C.img({height:"100%",width:"100%",objectFit:"cover",objectPosition:"center",transitionProperty:"transform",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms",":hover":{"--tw-scale-x":"1.05","--tw-scale-y":"1.05",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"}}),Pv=C.div`
  ${{flexGrow:"1",padding:"1.25rem"}}
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);

  .dark & {
    background: rgba(0, 0, 0, 0.2);
  }
`,Lv=C.p({fontSize:"0.875rem",lineHeight:"1.25rem",fontWeight:"500",textTransform:"uppercase",letterSpacing:"0.025em","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(96 165 250 / var(--tw-text-opacity))"}}),Tv=C.h3({marginTop:"0.5rem",marginBottom:"0.25rem",fontSize:"1.125rem",lineHeight:"1.75rem",fontWeight:"600"}),Ov=C.p({marginBottom:"0.75rem",flexGrow:"1",fontSize:"0.875rem",lineHeight:"1.375",opacity:"0.8"}),zv=C.div`
  ${{marginTop:"auto",display:"flex",alignItems:"center",justifyContent:"space-between",paddingLeft:"1.25rem",paddingRight:"1.25rem",paddingBottom:"0.75rem"}}
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);

  .dark & {
    background: rgba(0, 0, 0, 0.2);
  }
`,_v=C.span({fontSize:"1rem",lineHeight:"1.5rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(22 163 74 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(74 222 128 / var(--tw-text-opacity))"}});function Rv(){const e=po(),[t,n]=P.useState(""),r=i=>{e(`/EA/${i}`)},o=sm.filter(i=>{const a=t.toLowerCase();return i.title.toLowerCase().includes(a)||i.category.toLowerCase().includes(a)||i.description.toLowerCase().includes(a)});return console.log("📋 CURRENT EA PRODUCTS BEING RENDERED:"),o.forEach((i,a)=>{console.log(`${a+1}. ${i.title}: ${i.image}`)}),h(pv,null,h(mv,null,h(kt,{count:12,sizes:[30,60]})),h(gv,null,h(kt,{count:12,sizes:[40,80]})),h(hv,null,h(yv,null,"Expert Advisors Collection"),h(vv,null,"Find the best Expert Advisors for your automated trading. Each EA is designed with proven strategies to deliver optimal results in various market conditions."),h(wv,null,h(bv,{type:"text",placeholder:"🔍 Search EA by name, category, or description...",value:t,onChange:i=>n(i.target.value)}))),o.length>0?h(xv,null,o.map(i=>h(Sv,{key:i.id,onClick:()=>r(i.id)},h(Cv,null,h(Ev,{src:i.image,alt:i.title,onLoad:()=>console.log("✅ Image loaded:",i.title,i.image),onError:a=>console.error("❌ Image failed:",i.title,i.image,a)})),h(Pv,null,h(Lv,null,i.category),h(Tv,null,i.title),h(Ov,null,i.description)),h(zv,null,h(_v,null,"$",i.price),h("span",{css:{fontSize:"0.875rem",lineHeight:"1.25rem",fontWeight:"500","--tw-text-opacity":"1",color:"rgb(34 197 94 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(74 222 128 / var(--tw-text-opacity))"}}},"Free Demo"))))):h(kv,null,'No products found for "',t,'". Try a different search term.'))}const cd=C.div`
  ${{position:"relative",minHeight:"100vh",width:"100%",overflow:"hidden",paddingTop:"1rem",paddingBottom:"1rem",paddingLeft:"0.75rem",paddingRight:"0.75rem",transitionProperty:"color, background-color, border-color, text-decoration-color, fill, stroke",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms","@media (min-width: 640px)":{paddingTop:"1.5rem",paddingBottom:"1.5rem",paddingLeft:"1rem",paddingRight:"1rem"},"@media (min-width: 1024px)":{paddingTop:"2.5rem",paddingBottom:"2.5rem",paddingLeft:"2rem",paddingRight:"2rem"}}}
`,$v=C.div({pointerEvents:"none",position:"absolute",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:"-20",height:"100%",width:"100%",opacity:"0.5","--tw-blur":"blur(4px)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)",userSelect:"none"}),Nv=C.div({pointerEvents:"none",position:"absolute",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:"-10",height:"100%",width:"100%",userSelect:"none"}),dd=C.div({position:"relative",zIndex:"10",marginLeft:"auto",marginRight:"auto",maxWidth:"72rem"}),Fv=C.div({marginBottom:"0.75rem",fontSize:"0.75rem",lineHeight:"1rem","--tw-text-opacity":"1",color:"rgb(75 85 99 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(156 163 175 / var(--tw-text-opacity))"},"@media (min-width: 640px)":{marginBottom:"1.5rem",fontSize:"0.875rem",lineHeight:"1.25rem"}}),fd=C.button({transitionProperty:"color, background-color, border-color, text-decoration-color, fill, stroke",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms",":hover":{"--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))"}}),Iv=C.div({marginBottom:"1rem",display:"grid",gridTemplateColumns:"repeat(1, minmax(0, 1fr))",gap:"1rem","@media (min-width: 640px)":{marginBottom:"1.5rem",gap:"1.5rem"},"@media (min-width: 1024px)":{marginBottom:"2rem",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"2rem"}}),Av=C.div({"> :not([hidden]) ~ :not([hidden])":{"--tw-space-y-reverse":"0",marginTop:"calc(1rem * calc(1 - var(--tw-space-y-reverse)))",marginBottom:"calc(1rem * var(--tw-space-y-reverse))"}}),jv=C.div`
  ${{position:"relative",width:"100%"}}
  perspective: 1500px;
`,Mv=C.div`
  ${{display:"flex",gap:"0.5rem",overflowX:"auto",paddingLeft:"0.25rem",paddingRight:"0.25rem",paddingBottom:"1rem","@media (min-width: 640px)":{gap:"1rem"}}}
  scroll-behavior: smooth;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    ${{borderRadius:"9999px","--tw-bg-opacity":"1",backgroundColor:"rgb(229 231 235 / var(--tw-bg-opacity))",".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(31 41 55 / var(--tw-bg-opacity))"}}}
  }

  &::-webkit-scrollbar-thumb {
    ${{borderRadius:"9999px","--tw-bg-opacity":"1",backgroundColor:"rgb(59 130 246 / var(--tw-bg-opacity))"}}
  }
`,Dv=C.div`
  ${{position:"relative",marginBottom:"1rem",aspectRatio:"16/10",width:"100%",cursor:"pointer",overflow:"hidden",borderRadius:"1rem","@media (min-width: 640px)":{aspectRatio:"16/9"},"@media (min-width: 1024px)":{aspectRatio:"16/10"}}}
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
`,Bv=C.img({height:"100%",width:"100%",objectFit:"cover",objectPosition:"center",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms"}),Hv=C.div`
  ${{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:"50",display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem"}}
  background: rgba(0, 0, 0, 0.9);
  opacity: ${({isOpen:e})=>e?1:0};
  visibility: ${({isOpen:e})=>e?"visible":"hidden"};
  transition: all 0.3s ease;
`,Uv=C.img({maxHeight:"100%",maxWidth:"100%",borderRadius:"0.5rem",objectFit:"contain"}),Wv=C.button`
  ${{position:"absolute",top:"1rem",right:"1rem",fontSize:"1.5rem",lineHeight:"2rem","--tw-text-opacity":"1",color:"rgb(255 255 255 / var(--tw-text-opacity))",transitionProperty:"color, background-color, border-color, text-decoration-color, fill, stroke",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms",":hover":{"--tw-text-opacity":"1",color:"rgb(209 213 219 / var(--tw-text-opacity))"}}}
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Vv=C.div`
  ${{position:"relative",height:"5rem",minWidth:"100px",flexShrink:"0",cursor:"pointer",overflow:"hidden",borderRadius:"0.5rem","@media (min-width: 640px)":{height:"6rem",minWidth:"120px"}}}
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
`,Kv=C.img({height:"100%",width:"100%",objectFit:"cover"}),Yv=C.div`
  ${{borderRadius:"1rem",padding:"1rem",transitionProperty:"color, background-color, border-color, text-decoration-color, fill, stroke",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms","@media (min-width: 640px)":{padding:"1.5rem"},"@media (min-width: 1024px)":{padding:"2rem"}}}
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);

  .dark & {
    background: rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(255, 255, 255, 0.1);
  }
`,Qv=C.span({marginBottom:"0.75rem",display:"inline-block",borderRadius:"9999px","--tw-bg-opacity":"1",backgroundColor:"rgb(239 246 255 / var(--tw-bg-opacity))",paddingLeft:"0.75rem",paddingRight:"0.75rem",paddingTop:"0.25rem",paddingBottom:"0.25rem",fontSize:"0.75rem",lineHeight:"1rem",fontWeight:"600",textTransform:"uppercase","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))",".dark &":{backgroundColor:"rgb(30 58 138 / 0.3)"},"@media (min-width: 640px)":{marginBottom:"1rem"}}),Gv=C.h1({marginBottom:"0.75rem",fontSize:"1.5rem",lineHeight:"1.25",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(243 244 246 / var(--tw-text-opacity))"},"@media (min-width: 640px)":{marginBottom:"1rem",fontSize:"1.875rem",lineHeight:"2.25rem"},"@media (min-width: 1024px)":{fontSize:"2.25rem",lineHeight:"2.5rem"}}),Zv=C.div({marginBottom:"1rem",display:"flex",alignItems:"baseline",gap:"0.5rem",borderBottomWidth:"1px","--tw-border-opacity":"1",borderColor:"rgb(229 231 235 / var(--tw-border-opacity))",paddingBottom:"1rem",".dark &":{"--tw-border-opacity":"1",borderColor:"rgb(55 65 81 / var(--tw-border-opacity))"},"@media (min-width: 640px)":{marginBottom:"1.5rem",gap:"0.75rem",paddingBottom:"1.5rem"}}),Xv=C.div({fontSize:"1.5rem",lineHeight:"2rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(22 163 74 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(74 222 128 / var(--tw-text-opacity))"},"@media (min-width: 640px)":{fontSize:"1.875rem",lineHeight:"2.25rem"},"@media (min-width: 1024px)":{fontSize:"2.25rem",lineHeight:"2.5rem"}}),Jv=C.span({fontSize:"0.75rem",lineHeight:"1rem","--tw-text-opacity":"1",color:"rgb(107 114 128 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(156 163 175 / var(--tw-text-opacity))"},"@media (min-width: 640px)":{fontSize:"0.875rem",lineHeight:"1.25rem"}}),qv=C.p({marginBottom:"1rem",overflowWrap:"break-word",fontSize:"0.875rem",lineHeight:"1.625","--tw-text-opacity":"1",color:"rgb(55 65 81 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(209 213 219 / var(--tw-text-opacity))"},"@media (min-width: 640px)":{marginBottom:"1.5rem",fontSize:"1rem",lineHeight:"1.5rem"}}),ew=C.h3({marginBottom:"0.75rem",fontSize:"1.125rem",lineHeight:"1.75rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(243 244 246 / var(--tw-text-opacity))"},"@media (min-width: 640px)":{marginBottom:"1rem",fontSize:"1.25rem",lineHeight:"1.75rem"}}),tw=C.ul({marginBottom:"1.5rem","> :not([hidden]) ~ :not([hidden])":{"--tw-space-y-reverse":"0",marginTop:"calc(0.5rem * calc(1 - var(--tw-space-y-reverse)))",marginBottom:"calc(0.5rem * var(--tw-space-y-reverse))"},"@media (min-width: 640px)":{marginBottom:"2rem","> :not([hidden]) ~ :not([hidden])":{"--tw-space-y-reverse":"0",marginTop:"calc(0.75rem * calc(1 - var(--tw-space-y-reverse)))",marginBottom:"calc(0.75rem * var(--tw-space-y-reverse))"}}}),nw=C.li({display:"flex",alignItems:"flex-start",gap:"0.5rem",fontSize:"0.875rem",lineHeight:"1.25rem","--tw-text-opacity":"1",color:"rgb(55 65 81 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(209 213 219 / var(--tw-text-opacity))"},"@media (min-width: 640px)":{gap:"0.75rem",fontSize:"1rem",lineHeight:"1.5rem"}}),rw=C.span({marginTop:"0.125rem",flexShrink:"0",fontSize:"1.125rem",lineHeight:"1.75rem","--tw-text-opacity":"1",color:"rgb(34 197 94 / var(--tw-text-opacity))","@media (min-width: 640px)":{fontSize:"1.25rem",lineHeight:"1.75rem"}}),ow=C.div({marginTop:"1.5rem",display:"flex",flexDirection:"column",gap:"0.75rem","@media (min-width: 640px)":{marginTop:"2rem",flexDirection:"row",gap:"1rem"}}),iu=C.button`
  ${{display:"flex",alignItems:"center",gap:"0.5rem",borderRadius:"0.75rem",paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"0.75rem",paddingBottom:"0.75rem",fontWeight:"600",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms"}}
  
  &:hover {
    transform: translateY(-2px);
  }
`,iw=C(iu)`
  background: rgba(59, 130, 246, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: white;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);

  &:hover {
    background: rgba(37, 99, 235, 0.95);
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
  }
`;C(iu)`
  background: rgba(16, 185, 129, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: white;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);

  &:hover {
    background: rgba(5, 150, 105, 0.95);
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
  }
`;const aw=C.button`
  ${{borderRadius:"0.5rem",paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",fontSize:"0.875rem",lineHeight:"1.25rem",fontWeight:"500",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms"}}
  background: ${({isSelected:e})=>e?"rgba(59, 130, 246, 0.9)":"rgba(255, 255, 255, 0.15)"};
  backdrop-filter: blur(10px);
  border: 1px solid ${({isSelected:e})=>e?"rgba(59, 130, 246, 0.3)":"rgba(255, 255, 255, 0.2)"};
  color: ${({isSelected:e})=>e?"white":"rgb(71, 85, 105)"};
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);

  .dark & {
    background: ${({isSelected:e})=>e?"rgba(59, 130, 246, 0.9)":"rgba(0, 0, 0, 0.25)"};
    border: 1px solid ${({isSelected:e})=>e?"rgba(59, 130, 246, 0.3)":"rgba(255, 255, 255, 0.1)"};
    color: ${({isSelected:e})=>e?"white":"rgb(148, 163, 184)"};
  }

  &:hover {
    transform: translateY(-2px);
    background: ${({isSelected:e})=>e?"rgba(37, 99, 235, 0.95)":"rgba(255, 255, 255, 0.25)"};

    .dark & {
      background: ${({isSelected:e})=>e?"rgba(37, 99, 235, 0.95)":"rgba(0, 0, 0, 0.35)"};
    }
  }
`,lw=C.div({marginBottom:"1rem",display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"0.5rem","@media (min-width: 640px)":{justifyContent:"flex-start",gap:"0.75rem"}}),sw=C(iu)`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 0, 0, 0.2);
  color: rgb(71, 85, 105);
  
  
  .dark & {
    background: rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgb(148, 163, 184);
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-4px);
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
    
    .dark & {
      background: rgba(0, 0, 0, 0.35);
      box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
    }
  }
`,uw=C.div({paddingTop:"5rem",paddingBottom:"5rem",textAlign:"center"}),cw=C.p({marginBottom:"1rem",fontSize:"1.25rem",lineHeight:"1.75rem","--tw-text-opacity":"1",color:"rgb(75 85 99 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(156 163 175 / var(--tw-text-opacity))"}}),dw=C.button({fontWeight:"600","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))",textDecorationLine:"underline",":hover":{"--tw-text-opacity":"1",color:"rgb(37 99 235 / var(--tw-text-opacity))"}});function fw(){const{id:e}=Hp(),t=po(),n=sm.find(u=>u.id===Number(e)),[r,o]=P.useState(0),[i,a]=P.useState(!1),[l,s]=P.useState(!1),[c,m]=P.useState(null),f=(n==null?void 0:n.images)||[(n==null?void 0:n.image)||""],g=u=>{u!==r&&(s(!0),setTimeout(()=>{o(u),s(!1)},300))},v=()=>{a(!0)},b=()=>{a(!1)},w=u=>{u.target===u.currentTarget&&a(!1)},x=()=>{if(c){const u=`Hello, I'd like to rent ${n==null?void 0:n.title} for ${c.months} months at a price of $${c.price}.`;return`https://wa.me/6285161853108?text=${encodeURIComponent(u)}`}else{const u=`Hello, I'm interested in ${n==null?void 0:n.title} for $${n==null?void 0:n.price}. Could you provide more information?`;return`https://wa.me/+6285161853108?text=${encodeURIComponent(u)}`}},p=u=>{m(u)};return n?h(cd,null,h($v,null,h(kt,{count:12,sizes:[30,60]})),h(Nv,null,h(kt,{count:12,sizes:[40,80]})),h(dd,null,h(Fv,null,h(fd,{onClick:()=>t("/")},"Home"),h("span",{css:{marginLeft:"0.5rem",marginRight:"0.5rem"}},"/"),h(fd,{onClick:()=>t("/EA")},"EAs"),h("span",{css:{marginLeft:"0.5rem",marginRight:"0.5rem"}},"/"),h("span",{css:{fontWeight:"600","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(243 244 246 / var(--tw-text-opacity))"}}},n.title)),h(Iv,null,h(Av,null,h(jv,null,h(Dv,{onClick:v,isActive:l},h(Bv,{src:f[r],alt:n.title})),f.length>1&&h(Mv,null,f.map((u,d)=>h(Vv,{key:d,isActive:d===r,onClick:()=>g(d)},h(Kv,{src:u,alt:`${n.title} - ${d+1}`}))))),h(Hv,{isOpen:i,onClick:w},h(Wv,{onClick:b},"×"),h(Uv,{src:f[r],alt:n.title}))),h(Yv,null,h(Qv,null,n.category),h(Gv,null,n.title),h(Zv,null,h(Xv,null,"$",n.price),h(Jv,null,"One-time payment")),h(qv,null,n.description),h(ew,null,"Key Features"),h(tw,null,n.features.map((u,d)=>h(nw,{key:d},h(rw,null,"✓"),h("span",null,u)))),n.rentalOptions.length>0&&h(io.Fragment,null,h("div",{css:{marginBottom:"1rem"}},h("h4",{css:{marginBottom:"0.75rem",fontSize:"1.125rem",lineHeight:"1.75rem",fontWeight:"600","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(243 244 246 / var(--tw-text-opacity))"}}},"Rental Options"),h(lw,null,n.rentalOptions.map((u,d)=>h(aw,{key:d,isSelected:(c==null?void 0:c.months)===u.months,onClick:()=>p(u)},u.months," Month / $",u.price))))),h(ow,null,h("a",{href:x(),target:"_blank",rel:"noopener noreferrer",css:{display:"inline-block"}},h(iw,null,h("span",null),h("span",null,c?"Rent":"Buy"))),h(sw,{onClick:()=>t("/EA")},h("span",null,"←"),h("span",null,"Back"))))))):h(cd,null,h(dd,null,h(uw,null,h(cw,null,"Product not found. ID: ",e),h(dw,{onClick:()=>t("/EA")},"← Back to EA list"))))}const dm=[{id:1,title:"Dagangduit Daily Drawdown [MT5]",description:"Take Control of Your Daily Risk — Trade Smarter, Trade SaferEvery professional trader knows that risk management is the key to long-term success. Dagangduit Daily Drawdown MT5 empowers you to monitor your daily drawdown in real time, helping you maintain discipline, protect your capital, and make data-driven trading decisions with confidence.",price:27,image:"/images/indicator/1.png",images:["/images/indicator/1.png","/images/indicator/1.png","/images/indicator/1.png","/images/indicator/1.png"],category:"Indicator",rentalOptions:[],features:["Real-Time Daily Monitoring","Advanced Risk Control","Instant Performance Feedback","Simple & Effective Interface"]},{id:2,title:"Alligator Custom [MT5]",description:'The "Alligator" indicator is a powerful technical analysis tool designed to assist traders on the MetaTrader 5 (MT5) platform in identifying market trends and potential price reversal points. This indicator is based on a concept developed by Bill Williams, a renowned technical analyst in the world of trading.',price:27,image:"/images/indicator/1.png",images:["/images/indicator/1.png","/images/indicator/1.png","/images/indicator/1.png","/images/indicator/1.png"],category:"Indicator",rentalOptions:[],features:["Strong Trend","Weak Trend or Consolidation","Reversal Signals","Visual Appearance","Period Settings"]},{id:3,title:"Trendlines Automatic [MT5]",description:"The Trendline Automatic indicator is an advanced technical analysis tool specifically designed to assist traders in identifying critical levels in the financial markets through the automatic drawing of support and resistance trendlines on price charts. With its automatic capabilities, this indicator saves traders time and effort in analyzing price movements, allowing them to focus on making better trading decisions.",price:27,image:"/images/indicator/1.png",images:["/images/indicator/1.png","/images/indicator/1.png","/images/indicator/1.png","/images/indicator/1.png"],category:"Indicator",rentalOptions:[],features:["Automatic Drawing of Trendlines","Two Types of Trendlines","Extremum Side Configuration","Offset from the Current Bar","Consideration of Bars Before Extremum","Width and Color Settings"]},{id:4,title:"Wallpaper [MT5]",description:"DD_Wallpaper – Custom Fullscreen & Centered Background for MT5 Charts Transform your MetaTrader 5 (MT5) charts into a more professional, personalized, and inspiring workspace with DD_Wallpaper.This unique indicator allows you to add custom wallpapers or background images in fullscreen or centered mode directly on your MT5 chart. Perfect for traders who want to improve their trading environment with motivation, aesthetics, or even branding.",price:150,image:"/images/indicator/1.png",images:["/images/indicator/1.png","/images/indicator/1.png","/images/indicator/1.png","/images/indicator/1.png"],category:"Indicator",rentalOptions:[{months:6,price:45},{months:12,price:60}],features:["Custom Chart Wallpaper","Fullscreen & Center Mode","Auto Resize","Chart Size Display","Expiration Lock System","Lightweight & Efficient"]},{id:5,title:"Dagangduit PL Running [MT5]",description:"The DD_PL Running MT5 indicator is a trading tool developed by the Dagangduit Core Team. This indicator is designed to display real-time running profit and loss (P/L), providing essential information about your trading account performance.",price:27,image:"/images/indicator/1.png",images:["/images/indicator/1.png","/images/indicator/1.png","/images/indicator/1.png","/images/indicator/1.png"],category:"Indicator",rentalOptions:[],features:["Real-Time P/L Monitoring","Visual Indicator","Advanced Risk Control","Instant Performance Feedback","Simple & Effective Interface"]},{id:6,title:"Dagangduit ATR [MT5]",description:"The DD_ATR MT5 indicator is a trading tool developed by the Dagangduit Core Team. This indicator is designed to calculate and display the Average True Range (ATR) in real-time, providing traders with essential volatility information to aid in their trading decisions.",price:27,image:"/images/indicator/1.png",images:["/images/indicator/1.png","/images/indicator/1.png","/images/indicator/1.png","/images/indicator/1.png"],category:"Indicator",rentalOptions:[],features:["ATR Calculation","Multiple Timeframes","Customizable Appearance","Instant Performance Feedback","Simple & Effective Interface"]},{id:7,title:"Dagangduit Monitor [MT5]",description:"The DD_Profit_Monitor MT5 indicator, developed by the Dagangduit Core Team, is a powerful trading tool designed to give you instant insight into your trading performance. Monitor your profits in real-time and make smarter trading decisions with confidence.",price:27,image:"/images/indicator/1.png",images:["/images/indicator/1.png","/images/indicator/1.png","/images/indicator/1.png","/images/indicator/1.png"],category:"Indicator",rentalOptions:[],features:["All Time Profit","Daily Profit","Customizable Appearance","Instant Performance Feedback","Simple & Effective Interface"]},{id:8,title:"Dagangduit Spread Indicator [MT4]",description:'The "Dagangduit Spread Indicator" is a versatile tool designed to provide traders with essential information about the current spread in the chart window. This indicator offers customizable features, including font parameters, display location on the chart, spread normalization, and alerts to enhance your trading experience.',price:27,image:"/images/indicator/1.png",images:["/images/indicator/1.png","/images/indicator/1.png","/images/indicator/1.png","/images/indicator/1.png"],category:"Indicator",rentalOptions:[],features:["Real-time Spread Display","Customizable Font","Flexible Placement","Spread Normalization"]},{id:9,title:"Dagangduit Spread Indicator [MT5]",description:'The "Dagangduit Spread Indicator" is a versatile tool designed to provide traders with essential information about the current spread in the chart window. This indicator offers customizable features, including font parameters, display location on the chart, spread normalization, and alerts to enhance your trading experience.',price:27,image:"/images/indicator/1.png",images:["/images/indicator/1.png","/images/indicator/1.png","/images/indicator/1.png","/images/indicator/1.png"],category:"Indicator",rentalOptions:[],features:["Real-time Spread Display","Customizable Font","Flexible Placement","Spread Normalization"]},{id:10,title:"Dagangduit Candle Timer [MT5]",description:"The Candle Time Indicator for MetaTrader 5 (MT5), helps users know how much time on a candlestick is remaining. This is a simple but incredibly powerful and useful tool. To download the Dagangduit CandleTimer.ex5 indicator, check the bottom of this post. It’s one of the best forex time indicators in its category.The function of the indicator will not change, even if you change the name of the indicator. The candlestick countdown timer will tell you how much time is left on the candlestick until the next candle is formed. It will be broken in minutes and seconds. It works with all time frames.",price:27,image:"/images/indicator/1.png",images:["/images/indicator/1.png","/images/indicator/1.png","/images/indicator/1.png","/images/indicator/1.png"],category:"Indicator",rentalOptions:[],features:["Candlestick Countdown Timer","Customizable Display","Supports All Trading Styles","Easy Setup & Installation"]},{id:11,title:"Dagangduit Candle Timer [MT4]",description:"The Candle Time Indicator for MetaTrader 5 (MT5), helps users know how much time on a candlestick is remaining. This is a simple but incredibly powerful and useful tool. To download the Dagangduit CandleTimer.ex5 indicator, check the bottom of this post. It’s one of the best forex time indicators in its category.The function of the indicator will not change, even if you change the name of the indicator. The candlestick countdown timer will tell you how much time is left on the candlestick until the next candle is formed. It will be broken in minutes and seconds. It works with all time frames.",price:27,image:"/images/indicator/1.png",images:["/images/indicator/1.png","/images/indicator/1.png","/images/indicator/1.png","/images/indicator/1.png"],category:"Indicator",rentalOptions:[],features:["Candlestick Countdown Timer","Customizable Display","Supports All Trading Styles","Easy Setup & Installation"]},{id:12,title:"Dagangduit Daily Drawdown [MT4]",description:"Take Control of Your Daily Risk — Trade Smarter, Trade SaferEvery professional trader knows that risk management is the key to long-term success. Dagangduit Daily Drawdown MT5 empowers you to monitor your daily drawdown in real time, helping you maintain discipline, protect your capital, and make data-driven trading decisions with confidence.",price:27,image:"/images/indicator/1.png",images:["/images/indicator/1.png","/images/indicator/1.png","/images/indicator/1.png","/images/indicator/1.png"],category:"Indicator",rentalOptions:[],features:["Real-Time Daily Monitoring","Advanced Risk Control","Instant Performance Feedback","Simple & Effective Interface"]}],pw=C.div`
  ${{position:"relative",minHeight:"100%",width:"100%",overflow:"hidden",paddingTop:"1.5rem",paddingBottom:"1.5rem",paddingLeft:"1rem",paddingRight:"1rem",transitionProperty:"color, background-color, border-color, text-decoration-color, fill, stroke",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms","@media (min-width: 640px)":{paddingTop:"2rem",paddingBottom:"2rem",paddingLeft:"1.5rem",paddingRight:"1.5rem"},"@media (min-width: 1024px)":{paddingTop:"2.5rem",paddingBottom:"2.5rem",paddingLeft:"2rem",paddingRight:"2rem"}}}
`,mw=C.div({pointerEvents:"none",position:"absolute",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:"-20",height:"100%",width:"100%",opacity:"0.5","--tw-blur":"blur(4px)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)",userSelect:"none"}),gw=C.div({pointerEvents:"none",position:"absolute",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:"-10",height:"100%",width:"100%",userSelect:"none"}),hw=C.div({marginLeft:"auto",marginRight:"auto",marginBottom:"1.5rem",maxWidth:"56rem",paddingLeft:"0.5rem",paddingRight:"0.5rem",textAlign:"center","@media (min-width: 640px)":{marginBottom:"2rem",paddingLeft:"1rem",paddingRight:"1rem"},"@media (min-width: 1024px)":{marginBottom:"3rem"}}),yw=C.h1({marginBottom:"1rem",fontSize:"1.5rem",lineHeight:"2rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(243 244 246 / var(--tw-text-opacity))"},"@media (min-width: 640px)":{fontSize:"1.875rem",lineHeight:"2.25rem"},"@media (min-width: 1024px)":{fontSize:"2.25rem",lineHeight:"2.5rem"}}),vw=C.p({fontSize:"1rem",lineHeight:"1.625","--tw-text-opacity":"1",color:"rgb(75 85 99 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(156 163 175 / var(--tw-text-opacity))"},"@media (min-width: 640px)":{fontSize:"1.125rem",lineHeight:"1.75rem"}}),ww=C.div({marginLeft:"auto",marginRight:"auto",marginTop:"1.5rem",marginBottom:"1rem",maxWidth:"36rem",paddingLeft:"1rem",paddingRight:"1rem","@media (min-width: 640px)":{marginTop:"2rem"}}),bw=C.input`
  ${{width:"100%",borderRadius:"9999px",borderWidth:"2px",paddingLeft:"1.5rem",paddingRight:"1.5rem",paddingTop:"0.75rem",paddingBottom:"0.75rem",outline:"2px solid transparent",outlineOffset:"2px",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms"}}
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgb(71, 85, 105);
  
  .dark & {
    background: rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgb(148, 163, 184);
  }
  
  &::placeholder {
    color: rgb(100, 116, 139);
    opacity: 0.7;
  }
  
  .dark &::placeholder {
    color: rgb(148, 163, 184);
    opacity: 0.6;
  }
  
  &:focus {
    border: 1px solid rgba(59, 130, 246, 0.5);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    background: rgba(255, 255, 255, 0.25);
    
    .dark & {
      background: rgba(0, 0, 0, 0.35);
    }
  }
`,kw=C.div`
  ${{paddingTop:"3rem",paddingBottom:"3rem",paddingLeft:"1rem",paddingRight:"1rem",textAlign:"center",fontSize:"1rem",lineHeight:"1.5rem","@media (min-width: 640px)":{paddingTop:"4rem",paddingBottom:"4rem",fontSize:"1.125rem",lineHeight:"1.75rem"},"@media (min-width: 1024px)":{paddingTop:"5rem",paddingBottom:"5rem"}}}
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgb(100, 116, 139);
  margin: 0 1rem;

  .dark & {
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: rgb(148, 163, 184);
  }
`,xw=C.div({marginLeft:"auto",marginRight:"auto",display:"grid",maxWidth:"72rem",gridTemplateColumns:"repeat(1, minmax(0, 1fr))",gap:"1rem",paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"1.5rem",paddingBottom:"1.5rem","@media (min-width: 640px)":{gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"1.5rem",paddingLeft:"1.5rem",paddingRight:"1.5rem",paddingTop:"2rem",paddingBottom:"2rem"},"@media (min-width: 1024px)":{gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:"2rem",paddingLeft:"2rem",paddingRight:"2rem"}}),Sw=C.div`
  ${{position:"relative",height:"100%",cursor:"pointer",overflow:"hidden",borderRadius:"1rem",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms"}}
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgb(71, 85, 105);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  .dark & {
    background: rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgb(148, 163, 184);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.15);
  }

  &:hover {
    transform: translateY(-6px);
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);

    .dark & {
      background: rgba(0, 0, 0, 0.35);
      box-shadow: 0 0 25px rgba(255, 255, 255, 0.25);
    }
  }
`,Cw=C.div`
  ${{position:"relative",aspectRatio:"16/10",width:"100%",overflow:"hidden"}}
  .dark & img {
    filter: brightness(0.8) contrast(1.1);
  }
`,Ew=C.img({height:"100%",width:"100%",objectFit:"cover",objectPosition:"center",transitionProperty:"transform",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms",":hover":{"--tw-scale-x":"1.05","--tw-scale-y":"1.05",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"}}),Pw=C.div`
  ${{flexGrow:"1",padding:"1rem","@media (min-width: 640px)":{padding:"1.25rem"}}}
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);

  .dark & {
    background: rgba(0, 0, 0, 0.2);
  }
`,Lw=C.p({fontSize:"0.875rem",lineHeight:"1.25rem",fontWeight:"500",textTransform:"uppercase",letterSpacing:"0.025em","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(96 165 250 / var(--tw-text-opacity))"}}),Tw=C.h3({marginTop:"0.5rem",marginBottom:"0.25rem",fontSize:"1.125rem",lineHeight:"1.75rem",fontWeight:"600"}),Ow=C.p({marginBottom:"0.75rem",flexGrow:"1",fontSize:"0.875rem",lineHeight:"1.375",opacity:"0.8"}),zw=C.div`
  ${{marginTop:"auto",display:"flex",alignItems:"center",justifyContent:"space-between",paddingLeft:"1rem",paddingRight:"1rem",paddingBottom:"0.75rem","@media (min-width: 640px)":{paddingLeft:"1.25rem",paddingRight:"1.25rem"}}}
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);

  .dark & {
    background: rgba(0, 0, 0, 0.2);
  }
`,_w=C.span({fontSize:"1rem",lineHeight:"1.5rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(22 163 74 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(74 222 128 / var(--tw-text-opacity))"}});function Rw(){const e=po(),[t,n]=P.useState(""),r=i=>{e(`/indicator/${i}`)},o=dm.filter(i=>{const a=t.toLowerCase();return i.title.toLowerCase().includes(a)||i.category.toLowerCase().includes(a)||i.description.toLowerCase().includes(a)});return h(pw,null,h(mw,null,h(kt,{count:12,sizes:[30,60]})),h(gw,null,h(kt,{count:12,sizes:[40,80]})),h(hw,null,h(yw,null,"Indicator Collection"),h(vw,null,"Premium indicator collection to enhance your technical analysis. Equipped with advanced technology to help you identify trading opportunities more accurately."),h(ww,null,h(bw,{type:"text",placeholder:"🔍 Search indicator by name, category, or description...",value:t,onChange:i=>n(i.target.value)}))),o.length>0?h(xw,null,o.map(i=>h(Sw,{key:i.id,onClick:()=>r(i.id)},h(Cw,null,h(Ew,{src:i.image,alt:i.title,onLoad:()=>console.log("✅ Indicator image loaded:",i.title,i.image),onError:a=>console.error("❌ Indicator image failed:",i.title,i.image,a)})),h(Pw,null,h(Lw,null,i.category),h(Tw,null,i.title),h(Ow,null,i.description)),h(zw,null,h(_w,null,"Price: ",i.price," USD"),h("span",{css:{fontSize:"0.875rem",lineHeight:"1.25rem",fontWeight:"500","--tw-text-opacity":"1",color:"rgb(34 197 94 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(74 222 128 / var(--tw-text-opacity))"}}},"Free Trial"))))):h(kw,null,'No products found for "',t,'". Try a different search term.'))}const pd=C.div`
  ${{position:"relative",minHeight:"100vh",width:"100%",overflow:"hidden",paddingTop:"1.5rem",paddingBottom:"1.5rem",paddingLeft:"1rem",paddingRight:"1rem",transitionProperty:"color, background-color, border-color, text-decoration-color, fill, stroke",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms","@media (min-width: 640px)":{paddingTop:"2.5rem",paddingBottom:"2.5rem",paddingLeft:"2rem",paddingRight:"2rem"}}}
`,$w=C.div({pointerEvents:"none",position:"absolute",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:"-20",height:"100%",width:"100%",opacity:"0.5","--tw-blur":"blur(4px)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)",userSelect:"none"}),Nw=C.div({pointerEvents:"none",position:"absolute",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:"-10",height:"100%",width:"100%",userSelect:"none"}),md=C.div({position:"relative",zIndex:"10",marginLeft:"auto",marginRight:"auto",maxWidth:"72rem"}),Fw=C.div({marginBottom:"0.75rem",fontSize:"0.75rem",lineHeight:"1rem","--tw-text-opacity":"1",color:"rgb(75 85 99 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(156 163 175 / var(--tw-text-opacity))"},"@media (min-width: 640px)":{marginBottom:"1.5rem",fontSize:"0.875rem",lineHeight:"1.25rem"}}),gd=C.button({transitionProperty:"color, background-color, border-color, text-decoration-color, fill, stroke",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms",":hover":{"--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))"}}),Iw=C.div({marginBottom:"1.5rem",display:"grid",gridTemplateColumns:"repeat(1, minmax(0, 1fr))",gap:"1.5rem","@media (min-width: 1024px)":{marginBottom:"2rem",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"2rem"}}),Aw=C.div({"> :not([hidden]) ~ :not([hidden])":{"--tw-space-y-reverse":"0",marginTop:"calc(1rem * calc(1 - var(--tw-space-y-reverse)))",marginBottom:"calc(1rem * var(--tw-space-y-reverse))"}}),jw=C.div`
  ${{position:"relative",width:"100%"}}
  perspective: 1500px;
`,Mw=C.div`
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
`,Dw=C.div`
  ${{position:"relative",marginBottom:"1rem",aspectRatio:"16/10",width:"100%",cursor:"pointer",overflow:"hidden",borderRadius:"1rem","@media (min-width: 640px)":{aspectRatio:"16/9"},"@media (min-width: 1024px)":{aspectRatio:"16/10"}}}
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
`,Bw=C.img({height:"100%",width:"100%",objectFit:"cover",objectPosition:"center",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms"}),Hw=C.div`
  ${{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:"50",display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem"}}
  background: rgba(0, 0, 0, 0.9);
  opacity: ${({isOpen:e})=>e?1:0};
  visibility: ${({isOpen:e})=>e?"visible":"hidden"};
  transition: all 0.3s ease;
`,Uw=C.img({maxHeight:"100%",maxWidth:"100%",borderRadius:"0.5rem",objectFit:"contain"}),Ww=C.button`
  ${{position:"absolute",top:"1rem",right:"1rem",fontSize:"1.5rem",lineHeight:"2rem","--tw-text-opacity":"1",color:"rgb(255 255 255 / var(--tw-text-opacity))",transitionProperty:"color, background-color, border-color, text-decoration-color, fill, stroke",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms",":hover":{"--tw-text-opacity":"1",color:"rgb(209 213 219 / var(--tw-text-opacity))"}}}
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Vw=C.div`
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
`,Kw=C.img({height:"100%",width:"100%",objectFit:"cover"}),Yw=C.div`
  ${{borderRadius:"1rem",padding:"1rem",transitionProperty:"color, background-color, border-color, text-decoration-color, fill, stroke",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms","@media (min-width: 640px)":{padding:"1.5rem"},"@media (min-width: 1024px)":{padding:"2rem"}}}
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);

  .dark & {
    background: rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(255, 255, 255, 0.1);
  }
`,Qw=C.span({marginBottom:"0.75rem",display:"inline-block",borderRadius:"9999px","--tw-bg-opacity":"1",backgroundColor:"rgb(239 246 255 / var(--tw-bg-opacity))",paddingLeft:"0.75rem",paddingRight:"0.75rem",paddingTop:"0.25rem",paddingBottom:"0.25rem",fontSize:"0.75rem",lineHeight:"1rem",fontWeight:"600",textTransform:"uppercase","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))",".dark &":{backgroundColor:"rgb(30 58 138 / 0.3)"},"@media (min-width: 640px)":{marginBottom:"1rem"}}),Gw=C.h1({marginBottom:"0.75rem",fontSize:"1.5rem",lineHeight:"1.25",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(243 244 246 / var(--tw-text-opacity))"},"@media (min-width: 640px)":{marginBottom:"1rem",fontSize:"1.875rem",lineHeight:"2.25rem"},"@media (min-width: 1024px)":{fontSize:"2.25rem",lineHeight:"2.5rem"}}),Zw=C.div({marginBottom:"1rem",display:"flex",alignItems:"baseline",gap:"0.5rem",borderBottomWidth:"1px","--tw-border-opacity":"1",borderColor:"rgb(229 231 235 / var(--tw-border-opacity))",paddingBottom:"1rem",".dark &":{"--tw-border-opacity":"1",borderColor:"rgb(55 65 81 / var(--tw-border-opacity))"},"@media (min-width: 640px)":{marginBottom:"1.5rem",gap:"0.75rem",paddingBottom:"1.5rem"}}),Xw=C.div({fontSize:"1.5rem",lineHeight:"2rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(22 163 74 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(74 222 128 / var(--tw-text-opacity))"},"@media (min-width: 640px)":{fontSize:"1.875rem",lineHeight:"2.25rem"},"@media (min-width: 1024px)":{fontSize:"2.25rem",lineHeight:"2.5rem"}}),Jw=C.span({fontSize:"0.75rem",lineHeight:"1rem","--tw-text-opacity":"1",color:"rgb(107 114 128 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(156 163 175 / var(--tw-text-opacity))"},"@media (min-width: 640px)":{fontSize:"0.875rem",lineHeight:"1.25rem"}}),qw=C.p({marginBottom:"1rem",overflowWrap:"break-word",fontSize:"0.875rem",lineHeight:"1.625","--tw-text-opacity":"1",color:"rgb(55 65 81 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(209 213 219 / var(--tw-text-opacity))"},"@media (min-width: 640px)":{marginBottom:"1.5rem",fontSize:"1rem",lineHeight:"1.5rem"}}),eb=C.h3({marginBottom:"0.75rem",fontSize:"1.125rem",lineHeight:"1.75rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(243 244 246 / var(--tw-text-opacity))"},"@media (min-width: 640px)":{marginBottom:"1rem",fontSize:"1.25rem",lineHeight:"1.75rem"}}),tb=C.ul({marginBottom:"1.5rem","> :not([hidden]) ~ :not([hidden])":{"--tw-space-y-reverse":"0",marginTop:"calc(0.5rem * calc(1 - var(--tw-space-y-reverse)))",marginBottom:"calc(0.5rem * var(--tw-space-y-reverse))"},"@media (min-width: 640px)":{marginBottom:"2rem","> :not([hidden]) ~ :not([hidden])":{"--tw-space-y-reverse":"0",marginTop:"calc(0.75rem * calc(1 - var(--tw-space-y-reverse)))",marginBottom:"calc(0.75rem * var(--tw-space-y-reverse))"}}}),nb=C.li({display:"flex",alignItems:"flex-start",gap:"0.5rem",fontSize:"0.875rem",lineHeight:"1.25rem","--tw-text-opacity":"1",color:"rgb(55 65 81 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(209 213 219 / var(--tw-text-opacity))"},"@media (min-width: 640px)":{gap:"0.75rem",fontSize:"1rem",lineHeight:"1.5rem"}}),rb=C.span({marginTop:"0.125rem",flexShrink:"0",fontSize:"1.125rem",lineHeight:"1.75rem","--tw-text-opacity":"1",color:"rgb(34 197 94 / var(--tw-text-opacity))","@media (min-width: 640px)":{fontSize:"1.25rem",lineHeight:"1.75rem"}}),ob=C.div({display:"flex",flexDirection:"column",gap:"0.75rem","@media (min-width: 640px)":{flexDirection:"row",gap:"1rem"}}),fm=C.button`
  ${{display:"flex",alignItems:"center",gap:"0.5rem",borderRadius:"0.75rem",paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"0.75rem",paddingBottom:"0.75rem",fontWeight:"600",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms"}}
  
  &:hover {
    transform: translateY(-2px);
  }
`,ib=C(fm)`
  background: rgba(59, 130, 246, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: white;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  
  &:hover {
    background: rgba(37, 99, 235, 0.95);
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
  }
`,ab=C(fm)`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 0, 0, 0.2);
  color: rgb(71, 85, 105);


  .dark & {
    background: rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgb(148, 163, 184);
  }

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-4px);
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);

    .dark & {
      background: rgba(0, 0, 0, 0.35);
      box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
    }
  }
`,lb=C.button`
  ${{borderRadius:"0.5rem",paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",fontSize:"0.875rem",lineHeight:"1.25rem",fontWeight:"500",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms"}}
  background: ${({isSelected:e})=>e?"rgba(59, 130, 246, 0.9)":"rgba(255, 255, 255, 0.15)"};
  backdrop-filter: blur(10px);
  border: 1px solid ${({isSelected:e})=>e?"rgba(59, 130, 246, 0.3)":"rgba(255, 255, 255, 0.2)"};
  color: ${({isSelected:e})=>e?"white":"rgb(71, 85, 105)"};
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);

  .dark & {
    background: ${({isSelected:e})=>e?"rgba(59, 130, 246, 0.9)":"rgba(0, 0, 0, 0.25)"};
    border: 1px solid ${({isSelected:e})=>e?"rgba(59, 130, 246, 0.3)":"rgba(255, 255, 255, 0.1)"};
    color: ${({isSelected:e})=>e?"white":"rgb(148, 163, 184)"};
  }

  &:hover {
    transform: translateY(-2px);
    background: ${({isSelected:e})=>e?"rgba(37, 99, 235, 0.95)":"rgba(255, 255, 255, 0.25)"};

    .dark & {
      background: ${({isSelected:e})=>e?"rgba(37, 99, 235, 0.95)":"rgba(0, 0, 0, 0.35)"};
    }
  }
`,sb=C.div({marginBottom:"1rem",display:"flex",flexWrap:"wrap",gap:"0.5rem"}),ub=C.div({paddingTop:"5rem",paddingBottom:"5rem",textAlign:"center"}),cb=C.p({marginBottom:"1rem",fontSize:"1.25rem",lineHeight:"1.75rem","--tw-text-opacity":"1",color:"rgb(75 85 99 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(156 163 175 / var(--tw-text-opacity))"}}),db=C.button({fontWeight:"600","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))",textDecorationLine:"underline",":hover":{"--tw-text-opacity":"1",color:"rgb(37 99 235 / var(--tw-text-opacity))"}});function fb(){const{id:e}=Hp(),t=po(),n=dm.find(u=>u.id===Number(e)),[r,o]=P.useState(0),[i,a]=P.useState(!1),[l,s]=P.useState(!1),[c,m]=P.useState(null),f=(n==null?void 0:n.images)||[(n==null?void 0:n.image)||""],g=u=>{u!==r&&(s(!0),setTimeout(()=>{o(u),s(!1)},300))},v=()=>{a(!0)},b=()=>{a(!1)},w=u=>{u.target===u.currentTarget&&a(!1)},x=()=>{if(c){const u=`Hello, I'd like to rent ${n==null?void 0:n.title} for ${c.months} months at a price of $${c.price}.`;return`https://wa.me/6285161853108?text=${encodeURIComponent(u)}`}else{const u=`Hello, I'm interested in ${n==null?void 0:n.title} for $${n==null?void 0:n.price}. Could you provide more information?`;return`https://wa.me/+6285161853108?text=${encodeURIComponent(u)}`}},p=u=>{m(u)};return n?h(pd,null,h($w,null,h(kt,{count:12,sizes:[30,60]})),h(Nw,null,h(kt,{count:12,sizes:[40,80]})),h(md,null,h(Fw,null,h(gd,{onClick:()=>t("/")},"Home"),h("span",{css:{marginLeft:"0.5rem",marginRight:"0.5rem"}},"/"),h(gd,{onClick:()=>t("/indicator")},"Indicators"),h("span",{css:{marginLeft:"0.5rem",marginRight:"0.5rem"}},"/"),h("span",{css:{fontWeight:"600","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(243 244 246 / var(--tw-text-opacity))"}}},n.title)),h(Iw,null,h(Aw,null,h(jw,null,h(Dw,{onClick:v,isActive:l},h(Bw,{src:f[r],alt:n.title})),f.length>1&&h(Mw,null,f.map((u,d)=>h(Vw,{key:d,isActive:d===r,onClick:()=>g(d)},h(Kw,{src:u,alt:`${n.title} - ${d+1}`}))))),h(Hw,{isOpen:i,onClick:w},h(Ww,{onClick:b},"×"),h(Uw,{src:f[r],alt:n.title}))),h(Yw,null,h(Qw,null,n.category),h(Gw,null,n.title),h(Zw,null,h(Xw,null,"$",n.price),h(Jw,null,"One-time payment")),h(qw,null,n.description),h(eb,null,"Key Features"),h(tb,null,n.features.map((u,d)=>h(nb,{key:d},h(rb,null,"✓"),h("span",null,u)))),n.rentalOptions.length>0&&h(io.Fragment,null,h("div",{css:{marginBottom:"1rem"}},h("h4",{css:{marginBottom:"0.75rem",fontSize:"1.125rem",lineHeight:"1.75rem",fontWeight:"600","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(243 244 246 / var(--tw-text-opacity))"}}},"Rental Options"),h(sb,null,n.rentalOptions.map((u,d)=>h(lb,{key:d,isSelected:(c==null?void 0:c.months)===u.months,onClick:()=>p(u)},u.months," Month / $",u.price))))),h(ob,null,h("a",{href:x(),target:"_blank",rel:"noopener noreferrer",css:{display:"inline-block"}},h(ib,null,h("span",null),h("span",null,c?"Rent":"Buy"))),h(ab,{onClick:()=>t("/indicator")},h("span",null,"←"),h("span",null,"Back"))))))):h(pd,null,h(md,null,h(ub,null,h(cb,null,"Product not found. ID: ",e),h(db,{onClick:()=>t("/indicator")},"← Back to Indicator list"))))}var Li={},pb={get exports(){return Li},set exports(e){Li=e}},aa={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mb=P,gb=Symbol.for("react.element"),hb=Symbol.for("react.fragment"),yb=Object.prototype.hasOwnProperty,vb=mb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wb={key:!0,ref:!0,__self:!0,__source:!0};function pm(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)yb.call(t,r)&&!wb.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:gb,type:e,key:i,ref:a,props:o,_owner:vb.current}}aa.Fragment=hb;aa.jsx=pm;aa.jsxs=pm;(function(e){e.exports=aa})(pb);const F=Li.jsx,bb=Li.jsxs,kb=e=>F("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:F("path",{fill:"currentColor",d:"m16.172 11l-5.364-5.364l1.414-1.414L20 12l-7.778 7.778l-1.414-1.414L16.172 13H4v-2z"})}),xb=C.div({pointerEvents:"none",position:"absolute",top:"0px",left:"0px",height:"100%",width:"100%",opacity:"0.5","--tw-blur":"blur(4px)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)",zIndex:"0",userSelect:"none"}),Sb=C.div({pointerEvents:"none",position:"absolute",top:"0px",left:"0px",height:"100%",width:"100%",userSelect:"none",zIndex:"2"}),Cb=C.main({display:"flex",width:"100%",flex:"1 1 0%",flexDirection:"column",justifyContent:"center",paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"5rem",paddingBottom:"5rem"}),Eb=C.div({position:"relative",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px",textAlign:"center",zIndex:"1"}),Pb=C.h2`
  ${{marginTop:"1.5rem",fontSize:"1.875rem",lineHeight:"1.25",fontWeight:"700","@media (min-width: 640px)":{fontSize:"2.25rem",lineHeight:"2.5rem"},"@media (min-width: 1024px)":{fontSize:"3rem",lineHeight:"1"}}}
  color: rgb(71, 85, 105);

  .dark & {
    color: rgb(148, 163, 184);
  }
`,Lb=C.p`
  ${{marginTop:"1.5rem",fontSize:"1.125rem",lineHeight:"1.625","@media (min-width: 640px)":{fontSize:"1.25rem",lineHeight:"1.75rem"},"@media (min-width: 1024px)":{fontSize:"1.875rem",lineHeight:"2.25rem"}}}
  color: rgb(100, 116, 139);

  .dark & {
    color: rgb(148, 163, 184);
  }
`,Tb=C.button`
  ${{marginTop:"3rem",display:"inline-flex",alignItems:"center",gap:"1rem",borderRadius:"9999px",paddingTop:"0.75rem",paddingBottom:"0.75rem",paddingLeft:"1.5rem",paddingRight:"1.5rem",textAlign:"center",outline:"2px solid transparent",outlineOffset:"2px",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms",":hover":{gap:"2rem"}}}
  background: rgba(59, 130, 246, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: white;
  
  &:hover {
    background: rgba(37, 99, 235, 0.95);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
  }
  
  &:active {
    background: rgba(29, 78, 216, 1);
    transform: translateY(0);
  }
`;function Ob(){const{t:e}=Jl();return h(Cb,null,h(xb,null,h(kt,{count:12,sizes:[30,60]})),h(Sb,null,h(kt,{count:12,sizes:[40,80]})),h(Eb,null,h(Pb,null,e("intro.title")),h(Lb,null,e("intro.description")),h(Ys,{to:"/EA"},h(Tb,null,h("span",null,e("intro.link")),h(kb,null)))))}const zb=`.markdown-body {
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
`,_b=`.markdown-body {
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
`,Rb=`/**
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
`,$b=`pre[class*="language-"],
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
`,Nb=e=>F("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:F("path",{fill:"currentColor",d:"M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM7 6h4v4H7V6zm0 6h10v2H7v-2zm0 4h10v2H7v-2zm6-9h4v2h-4V7z"})}),Fb=e=>F("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:F("path",{fill:"currentColor",d:"M3 3h8v8H3V3zm0 10h8v8H3v-8zM13 3h8v8h-8V3zm0 10h8v8h-8v-8zm2-8v4h4V5h-4zm0 10v4h4v-4h-4zM5 5v4h4V5H5zm0 10v4h4v-4H5z"})}),Ib=e=>F("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:F("path",{fill:"currentColor",d:"M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588c-.094-.117.34.427.433.539c.19.227.33.365.44.438c.204.137.587.196 1.15.14c.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292c-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047c.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308c1.477-.933 2.613-1.226 3.422-1.096c.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19c.691.936 1.058 2.045 1.058 3.293c0 3.757-1.674 5.665-4.642 6.392c.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716a1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446l.005-.705c.005-.708.007-1.338.007-1.998c0-.697-.183-1.152-.425-1.36c-.661-.57-.326-1.655.54-1.752c2.967-.333 4.337-1.482 4.337-4.66c0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947c-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66c.865.097 1.201 1.177.544 1.748c-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z"})}),Ab=e=>F("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:F("path",{fill:"currentColor",d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333A8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248A15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z"})}),jb=e=>F("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:F("path",{fill:"currentColor",d:"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"})}),Mb=e=>F("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:F("path",{fill:"currentColor",d:"M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938A7.999 7.999 0 0 0 4 12z"})}),Db=e=>F("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:F("path",{fill:"currentColor",d:"m21 15l-6 5.996L4.002 21A.998.998 0 0 1 3 20.007V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.456.993 1.002V15zM19 5H5v14h8v-5a1 1 0 0 1 .883-.993L14 13l5-.001V5zm-.829 9.999L15 15v3.169l3.171-3.17z"})}),Bb=e=>F("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:F("path",{fill:"currentColor",d:"M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8a4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05L3.515 4.93zM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414l-2.121-2.121zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414l2.121-2.121zM5.636 16.95l1.414 1.414l-2.121 2.121l-1.414-1.414l2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"})}),Hb=P.createContext(!1);function Ub(){const[e,t]=P.useState(()=>{const n=localStorage.getItem("dark-mode-enabled");return n?JSON.parse(n):!0});return P.useEffect(()=>{localStorage.setItem("dark-mode-enabled",JSON.stringify(e)),e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[e]),[e,t]}var hd={},Wb={get exports(){return hd},set exports(e){hd=e}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var o=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,a={},l={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function u(d){return d instanceof s?new s(d.type,u(d.content),d.alias):Array.isArray(d)?d.map(u):d.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(u){return Object.prototype.toString.call(u).slice(8,-1)},objId:function(u){return u.__id||Object.defineProperty(u,"__id",{value:++i}),u.__id},clone:function u(d,y){y=y||{};var k,S;switch(l.util.type(d)){case"Object":if(S=l.util.objId(d),y[S])return y[S];k={},y[S]=k;for(var E in d)d.hasOwnProperty(E)&&(k[E]=u(d[E],y));return k;case"Array":return S=l.util.objId(d),y[S]?y[S]:(k=[],y[S]=k,d.forEach(function(L,T){k[T]=u(L,y)}),k);default:return d}},getLanguage:function(u){for(;u;){var d=o.exec(u.className);if(d)return d[1].toLowerCase();u=u.parentElement}return"none"},setLanguage:function(u,d){u.className=u.className.replace(RegExp(o,"gi"),""),u.classList.add("language-"+d)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(k){var u=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(k.stack)||[])[1];if(u){var d=document.getElementsByTagName("script");for(var y in d)if(d[y].src==u)return d[y]}return null}},isActive:function(u,d,y){for(var k="no-"+d;u;){var S=u.classList;if(S.contains(d))return!0;if(S.contains(k))return!1;u=u.parentElement}return!!y}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(u,d){var y=l.util.clone(l.languages[u]);for(var k in d)y[k]=d[k];return y},insertBefore:function(u,d,y,k){k=k||l.languages;var S=k[u],E={};for(var L in S)if(S.hasOwnProperty(L)){if(L==d)for(var T in y)y.hasOwnProperty(T)&&(E[T]=y[T]);y.hasOwnProperty(L)||(E[L]=S[L])}var _=k[u];return k[u]=E,l.languages.DFS(l.languages,function(A,re){re===_&&A!=u&&(this[A]=E)}),E},DFS:function u(d,y,k,S){S=S||{};var E=l.util.objId;for(var L in d)if(d.hasOwnProperty(L)){y.call(d,L,d[L],k||L);var T=d[L],_=l.util.type(T);_==="Object"&&!S[E(T)]?(S[E(T)]=!0,u(T,y,null,S)):_==="Array"&&!S[E(T)]&&(S[E(T)]=!0,u(T,y,L,S))}}},plugins:{},highlightAll:function(u,d){l.highlightAllUnder(document,u,d)},highlightAllUnder:function(u,d,y){var k={callback:y,container:u,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};l.hooks.run("before-highlightall",k),k.elements=Array.prototype.slice.apply(k.container.querySelectorAll(k.selector)),l.hooks.run("before-all-elements-highlight",k);for(var S=0,E;E=k.elements[S++];)l.highlightElement(E,d===!0,k.callback)},highlightElement:function(u,d,y){var k=l.util.getLanguage(u),S=l.languages[k];l.util.setLanguage(u,k);var E=u.parentElement;E&&E.nodeName.toLowerCase()==="pre"&&l.util.setLanguage(E,k);var L=u.textContent,T={element:u,language:k,grammar:S,code:L};function _(re){T.highlightedCode=re,l.hooks.run("before-insert",T),T.element.innerHTML=T.highlightedCode,l.hooks.run("after-highlight",T),l.hooks.run("complete",T),y&&y.call(T.element)}if(l.hooks.run("before-sanity-check",T),E=T.element.parentElement,E&&E.nodeName.toLowerCase()==="pre"&&!E.hasAttribute("tabindex")&&E.setAttribute("tabindex","0"),!T.code){l.hooks.run("complete",T),y&&y.call(T.element);return}if(l.hooks.run("before-highlight",T),!T.grammar){_(l.util.encode(T.code));return}if(d&&r.Worker){var A=new Worker(l.filename);A.onmessage=function(re){_(re.data)},A.postMessage(JSON.stringify({language:T.language,code:T.code,immediateClose:!0}))}else _(l.highlight(T.code,T.grammar,T.language))},highlight:function(u,d,y){var k={code:u,grammar:d,language:y};if(l.hooks.run("before-tokenize",k),!k.grammar)throw new Error('The language "'+k.language+'" has no grammar.');return k.tokens=l.tokenize(k.code,k.grammar),l.hooks.run("after-tokenize",k),s.stringify(l.util.encode(k.tokens),k.language)},tokenize:function(u,d){var y=d.rest;if(y){for(var k in y)d[k]=y[k];delete d.rest}var S=new f;return g(S,S.head,u),m(u,S,d,S.head,0),b(S)},hooks:{all:{},add:function(u,d){var y=l.hooks.all;y[u]=y[u]||[],y[u].push(d)},run:function(u,d){var y=l.hooks.all[u];if(!(!y||!y.length))for(var k=0,S;S=y[k++];)S(d)}},Token:s};r.Prism=l;function s(u,d,y,k){this.type=u,this.content=d,this.alias=y,this.length=(k||"").length|0}s.stringify=function u(d,y){if(typeof d=="string")return d;if(Array.isArray(d)){var k="";return d.forEach(function(_){k+=u(_,y)}),k}var S={type:d.type,content:u(d.content,y),tag:"span",classes:["token",d.type],attributes:{},language:y},E=d.alias;E&&(Array.isArray(E)?Array.prototype.push.apply(S.classes,E):S.classes.push(E)),l.hooks.run("wrap",S);var L="";for(var T in S.attributes)L+=" "+T+'="'+(S.attributes[T]||"").replace(/"/g,"&quot;")+'"';return"<"+S.tag+' class="'+S.classes.join(" ")+'"'+L+">"+S.content+"</"+S.tag+">"};function c(u,d,y,k){u.lastIndex=d;var S=u.exec(y);if(S&&k&&S[1]){var E=S[1].length;S.index+=E,S[0]=S[0].slice(E)}return S}function m(u,d,y,k,S,E){for(var L in y)if(!(!y.hasOwnProperty(L)||!y[L])){var T=y[L];T=Array.isArray(T)?T:[T];for(var _=0;_<T.length;++_){if(E&&E.cause==L+","+_)return;var A=T[_],re=A.inside,at=!!A.lookbehind,Be=!!A.greedy,Pn=A.alias;if(Be&&!A.pattern.global){var lt=A.pattern.toString().match(/[imsuy]*$/)[0];A.pattern=RegExp(A.pattern.source,lt+"g")}for(var He=A.pattern||A,z=k.next,$=S;z!==d.tail&&!(E&&$>=E.reach);$+=z.value.length,z=z.next){var N=z.value;if(d.length>u.length)return;if(!(N instanceof s)){var M=1,D;if(Be){if(D=c(He,$,u,at),!D||D.index>=u.length)break;var le=D.index,Ft=D.index+D[0].length,J=$;for(J+=z.value.length;le>=J;)z=z.next,J+=z.value.length;if(J-=z.value.length,$=J,z.value instanceof s)continue;for(var Ue=z;Ue!==d.tail&&(J<Ft||typeof Ue.value=="string");Ue=Ue.next)M++,J+=Ue.value.length;M--,N=u.slice($,J),D.index-=$}else if(D=c(He,0,N,at),!D)continue;var le=D.index,Pe=D[0],un=N.slice(0,le),cr=N.slice(le+Pe.length),cn=$+N.length;E&&cn>E.reach&&(E.reach=cn);var Ze=z.prev;un&&(Ze=g(d,Ze,un),$+=un.length),v(d,Ze,M);var dr=new s(L,re?l.tokenize(Pe,re):Pe,Pn,Pe);if(z=g(d,Ze,dr),cr&&g(d,z,cr),M>1){var Ln={cause:L+","+_,reach:cn};m(u,d,y,z.prev,$,Ln),E&&Ln.reach>E.reach&&(E.reach=Ln.reach)}}}}}}function f(){var u={value:null,prev:null,next:null},d={value:null,prev:u,next:null};u.next=d,this.head=u,this.tail=d,this.length=0}function g(u,d,y){var k=d.next,S={value:y,prev:d,next:k};return d.next=S,k.prev=S,u.length++,S}function v(u,d,y){for(var k=d.next,S=0;S<y&&k!==u.tail;S++)k=k.next;d.next=k,k.prev=d,u.length-=S}function b(u){for(var d=[],y=u.head.next;y!==u.tail;)d.push(y.value),y=y.next;return d}if(!r.document)return r.addEventListener&&(l.disableWorkerMessageHandler||r.addEventListener("message",function(u){var d=JSON.parse(u.data),y=d.language,k=d.code,S=d.immediateClose;r.postMessage(l.highlight(k,l.languages[y],y)),S&&r.close()},!1)),l;var w=l.util.currentScript();w&&(l.filename=w.src,w.hasAttribute("data-manual")&&(l.manual=!0));function x(){l.manual||l.highlightAll()}if(!l.manual){var p=document.readyState;p==="loading"||p==="interactive"&&w&&w.defer?document.addEventListener("DOMContentLoaded",x):window.requestAnimationFrame?window.requestAnimationFrame(x):window.setTimeout(x,16)}return l}(t);e.exports&&(e.exports=n),typeof Tu<"u"&&(Tu.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(o,i){var a={};a["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[i]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var l={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};l["language-"+i]={pattern:/[\s\S]+/,inside:n.languages[i]};var s={};s[o]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return o}),"i"),lookbehind:!0,greedy:!0,inside:l},n.languages.insertBefore("markup","cdata",s)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(r,o){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[o,"language-"+o],inside:n.languages[o]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(r){var o=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+o.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+o.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+o.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+o.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:o,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var i=r.languages.markup;i&&(i.tag.addInlined("style","css"),i.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",o=function(w,x){return"✖ Error "+w+" while fetching file: "+x},i="✖ Error: File does not exist or is empty",a={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},l="data-src-status",s="loading",c="loaded",m="failed",f="pre[data-src]:not(["+l+'="'+c+'"]):not(['+l+'="'+s+'"])';function g(w,x,p){var u=new XMLHttpRequest;u.open("GET",w,!0),u.onreadystatechange=function(){u.readyState==4&&(u.status<400&&u.responseText?x(u.responseText):u.status>=400?p(o(u.status,u.statusText)):p(i))},u.send(null)}function v(w){var x=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(w||"");if(x){var p=Number(x[1]),u=x[2],d=x[3];return u?d?[p,Number(d)]:[p,void 0]:[p,p]}}n.hooks.add("before-highlightall",function(w){w.selector+=", "+f}),n.hooks.add("before-sanity-check",function(w){var x=w.element;if(x.matches(f)){w.code="",x.setAttribute(l,s);var p=x.appendChild(document.createElement("CODE"));p.textContent=r;var u=x.getAttribute("data-src"),d=w.language;if(d==="none"){var y=(/\.(\w+)$/.exec(u)||[,"none"])[1];d=a[y]||y}n.util.setLanguage(p,d),n.util.setLanguage(x,d);var k=n.plugins.autoloader;k&&k.loadLanguages(d),g(u,function(S){x.setAttribute(l,c);var E=v(x.getAttribute("data-range"));if(E){var L=S.split(/\r\n?|\n/g),T=E[0],_=E[1]==null?L.length:E[1];T<0&&(T+=L.length),T=Math.max(0,Math.min(T-1,L.length)),_<0&&(_+=L.length),_=Math.max(0,Math.min(_,L.length)),S=L.slice(T,_).join(`
`),x.hasAttribute("data-start")||x.setAttribute("data-start",String(T+1))}p.textContent=S,n.highlightElement(p)},function(S){x.setAttribute(l,m),p.textContent=S})}}),n.plugins.fileHighlight={highlight:function(x){for(var p=(x||document).querySelectorAll(f),u=0,d;d=p[u++];)n.highlightElement(d)}};var b=!1;n.fileHighlight=function(){b||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),b=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Wb);async function yd(e,t){const n=document.getElementById(e);n&&n.remove();const r=document.createElement("style");r.setAttribute("id",e),r.textContent=t,document.head.appendChild(r)}const Vb="Agus Pujianto",Kb="aguspujiantoo@gmail.com",Yb="aguspujianto.github.io",Qb=C.div`
  ${{position:"relative",display:"flex",minHeight:"100vh",flexDirection:"column",paddingBottom:"4rem"}}
`,Gb=C.header({height:"5rem",width:"100%"}),Zb=C.div({marginLeft:"auto",marginRight:"auto",display:"flex",height:"100%",maxWidth:"1024px",alignItems:"center",paddingLeft:"1rem",paddingRight:"1rem",fontWeight:"600","--tw-text-opacity":"1",color:"rgb(148 163 184 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(203 213 225 / var(--tw-text-opacity))"},"@media (min-width: 640px)":{paddingLeft:"2rem",paddingRight:"2rem"}}),Xb=C(Ys)`
  ${{fontSize:"1rem",lineHeight:"1.5rem","--tw-text-opacity":"1",color:"rgb(37 99 235 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(96 165 250 / var(--tw-text-opacity))"},"@media (min-width: 640px)":{fontSize:"1.125rem",lineHeight:"1.75rem"}}}
`,Jb=C.span({marginLeft:"0.125rem",marginRight:"0.125rem","--tw-text-opacity":"1",color:"rgb(37 99 235 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(96 165 250 / var(--tw-text-opacity))"}}),qb=C.nav({marginLeft:"auto",display:"grid",gridAutoFlow:"column",gap:"0.5rem",lineHeight:"1.25rem","@media (min-width: 640px)":{gap:"0.75rem"},"@media (min-width: 1024px)":{gap:"1.5rem"}}),mm={cursor:"pointer",opacity:"0.8",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"200ms",":hover":{"--tw-scale-x":"1.05","--tw-scale-y":"1.05",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))",opacity:"1"}},Fo=C.a`
  ${mm}
  color: rgb(71, 85, 105);
  
  .dark & {
    color: rgb(148, 163, 184);
  }
`,Ma=C(ay)`
  ${mm}
  color: rgb(71, 85, 105);
  
  .dark & {
    color: rgb(148, 163, 184);
  }

  &.active {
    ${{"--tw-scale-x":"1.05","--tw-scale-y":"1.05",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))",opacity:"1"}}
  }
`,e2=C.div({height:"100%",width:"1px","--tw-bg-opacity":"1",backgroundColor:"rgb(209 213 219 / var(--tw-bg-opacity))",opacity:"0.5",".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(75 85 99 / var(--tw-bg-opacity))"}}),t2=C.footer`
  ${{position:"absolute",bottom:"1rem",left:"0px",width:"100%",userSelect:"none","> :not([hidden]) ~ :not([hidden])":{"--tw-space-x-reverse":"0",marginRight:"calc(0.5rem * var(--tw-space-x-reverse))",marginLeft:"calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))"},textAlign:"center",fontSize:"0.875rem",lineHeight:"1.25rem"}}
  color: rgb(100, 116, 139);
  
  .dark & {
    color: rgb(148, 163, 184);
  }
`,n2=C.div({marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"});function r2(){const{t:e}=Jl(),[t,n]=Ub();P.useEffect(()=>{yd("prism-theme",t?$b:Rb),yd("markdown-theme",t?zb:_b)},[t]);const r=P.useCallback(()=>{n(!t)},[t]),o=P.useCallback(()=>{window.open("https://dagangduit.com/","_blank")},[]);return h(Hb.Provider,{value:t},h(Qb,null,h(Gb,null,h(Zb,null,h(Xb,{to:"/"},h("span",null),h(Jb,null,Vb)),h(qb,null,h(Ma,{to:"/EA"},h(Nb,{css:{display:"inline","@media (min-width: 1024px)":{display:"none"}}}),h("span",{css:{display:"none","@media (min-width: 1024px)":{display:"inline"}}},e("tab.EA"))),h(Ma,{to:"/indicator"},h(Db,{css:{display:"inline","@media (min-width: 1024px)":{display:"none"}}}),h("span",{css:{display:"none","@media (min-width: 1024px)":{display:"inline"}}},e("tab.indicator"))),h(Ma,{to:"/projects"},h(Fb,{css:{display:"inline","@media (min-width: 1024px)":{display:"none"}}}),h("span",{css:{display:"none","@media (min-width: 1024px)":{display:"inline"}}},e("tab.projects"))),h(e2,null),h(Fo,{href:`mailto:${Kb}`},h(jb,null)),h(Fo,{href:Yb,target:"_blank"},h(Ib,null)),h(Fo,{onClick:o},h(Ab,null)),h(Fo,{onClick:r},h(t?Bb:Mb,null))))),h(Dl,null),h(t2,null,h(n2,null,h("span",{css:{marginLeft:"0.5rem"}},"2025-present © Agus Pujianto")))))}const o2=e=>bb("svg",{viewBox:"0 0 16 16",width:"1.2em",height:"1.2em",...e,children:[F("path",{fill:"currentColor",d:"M8 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Z"}),F("path",{fill:"currentColor",d:"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0a6.5 6.5 0 0 0-13 0Z"})]}),i2=e=>F("svg",{viewBox:"0 0 16 16",width:"1.2em",height:"1.2em",...e,children:F("path",{fill:"currentColor",d:"M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0Z"})}),a2=e=>F("svg",{viewBox:"0 0 16 16",width:"1.2em",height:"1.2em",...e,children:F("path",{fill:"currentColor",d:"M8 .25a.75.75 0 0 1 .673.418l1.882 3.815l4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97l.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45l2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084l2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456l-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183l-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"})}),l2=e=>F("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:F("path",{fill:"currentColor",d:"m24 12l-5.657 5.657l-1.414-1.414L21.172 12l-4.243-4.243l1.414-1.414L24 12zM2.828 12l4.243 4.243l-1.414 1.414L0 12l5.657-5.657L7.07 7.757L2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"})}),s2=e=>F("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:F("path",{fill:"currentColor",d:"M2.8 14h2.04l-.545 2.725l5.744 2.154l7.227-2.41L18.36 11H3.4l.4-2h14.96l.8-4H4.6L5 3h17l-3 15l-9 3l-8-3z"})}),u2=e=>F("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:F("path",{fill:"currentColor",d:"m12 18.178l-4.62-1.256l-.328-3.544h2.27l.158 1.844l2.52.667l2.52-.667l.26-2.866H6.96l-.635-6.678h11.35l-.227 2.21H8.822l.204 2.256h8.217l-.624 6.778L12 18.178zM3 2h18l-1.623 18L12 22l-7.377-2L3 2zm2.188 2L6.49 18.434L12 19.928l5.51-1.494L18.812 4H5.188z"})}),c2=e=>F("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:F("path",{fill:"currentColor",d:"M3.316 3L12 18l8.684-15H23L12 22L1 3h2.316zm4.342 0L12 10.5L16.342 3h2.316L12 14.5L5.342 3h2.316z"})}),d2=e=>F("svg",{viewBox:"0 0 15 15",width:"1.2em",height:"1.2em",...e,children:F("path",{fill:"none",stroke:"currentColor",d:"M12.5 8v-.167c0-.736-.597-1.333-1.333-1.333H10a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 0 1 0 3h-1A1.5 1.5 0 0 1 8.5 11m-2-5v5a1.5 1.5 0 0 1-3 0M.5.5h14v14H.5V.5Z"})}),f2=e=>F("svg",{viewBox:"0 0 15 15",width:"1.2em",height:"1.2em",...e,children:F("path",{fill:"none",stroke:"currentColor",d:"M12.5 8v-.167c0-.736-.597-1.333-1.333-1.333H10a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 0 1 0 3h-1A1.5 1.5 0 0 1 8.5 11M8 6.5H3m2.5 0V13M.5.5h14v14H.5V.5Z"})}),p2=e=>F("svg",{viewBox:"0 0 32 32",width:"1.2em",height:"1.2em",...e,children:F("path",{fill:"#368832",d:"M19.792 7.071h2.553v2.553H24.9V7.071h2.552v2.553H30v2.552h-2.55v2.551H30v2.553h-2.551v2.552H24.9v-2.55h-2.55v2.552h-2.557v-2.55H17.24v-2.559h2.553v-2.546H17.24V9.622h2.554Zm2.553 7.658H24.9v-2.553h-2.555Zm-7.656 9.284a10.2 10.2 0 0 1-4.653.915a7.6 7.6 0 0 1-5.89-2.336A8.839 8.839 0 0 1 2 16.367a9.436 9.436 0 0 1 2.412-6.719a8.181 8.181 0 0 1 6.259-2.577a11.1 11.1 0 0 1 4.018.638v3.745a6.81 6.81 0 0 0-3.723-1.036a4.793 4.793 0 0 0-3.7 1.529a5.879 5.879 0 0 0-1.407 4.142a5.774 5.774 0 0 0 1.328 3.992a4.551 4.551 0 0 0 3.575 1.487a7.288 7.288 0 0 0 3.927-1.108Z"})}),m2=C.div({position:"relative",borderRadius:"0.375rem","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))",padding:"0.75rem",paddingLeft:"3.5rem","--tw-shadow":"0 1px 2px 0 rgb(0 0 0 / 0.05)","--tw-shadow-colored":"0 1px 2px 0 var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)","--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)","--tw-ring-color":"rgb(71 85 105 / 0.05)",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms",":hover":{"--tw-shadow":"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)","--tw-shadow-colored":"0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"},".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(17 24 39 / var(--tw-bg-opacity))"}}),g2=C.div`
  ${{position:"absolute",top:"0.75rem",left:"0.75rem",display:"flex",height:"2.25rem",width:"2.25rem",alignItems:"center",justifyContent:"center",overflow:"hidden",borderRadius:"0.375rem",fontWeight:"700"}}

  &::before {
    ${{position:"absolute",top:"0px",left:"0px",display:"block",height:"100%",width:"100%",opacity:"0.2",content:"''"}}
    background-color: currentColor;
  }
`,h2=C.a({display:"block",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))"}),y2=C.div`
  ${{marginTop:"0.5rem",overflow:"hidden",fontSize:"0.875rem",lineHeight:"1.25rem","--tw-text-opacity":"1",color:"rgb(148 163 184 / var(--tw-text-opacity))"}}

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,v2=C.ul({marginTop:"0.5rem",display:"flex",minWidth:"0px","> :not([hidden]) ~ :not([hidden])":{"--tw-space-x-reverse":"0",marginRight:"calc(0.75rem * var(--tw-space-x-reverse))",marginLeft:"calc(0.75rem * calc(1 - var(--tw-space-x-reverse)))"},fontSize:"0.875rem",lineHeight:"1.25rem","--tw-text-opacity":"1",color:"rgb(148 163 184 / var(--tw-text-opacity))"}),Da=C.li({display:"flex",alignItems:"center"}),vd={default:{component:l2,color:""},TypeScript:{component:f2,color:"#3178C6"},JavaScript:{component:d2,color:"#FCD002"},HTML:{component:u2,color:"#FF3C41"},CSS:{component:s2,color:"#10BDFF"},Vue:{component:c2,color:"#41B883"},"C#":{component:p2,color:"#368833"}};function w2(e){const{project:t}=e,n=vd[e.project.language]??vd.default;return h(m2,null,h(g2,{style:{color:n.color}},h(n.component,null)),h(h2,{href:t.htmlUrl},t.fullName),h(y2,null,t.description),h(v2,null,h(Da,null,h(a2,null),h("span",{css:{marginLeft:"0.5rem"}},t.stargazersCount)),h(Da,null,h(i2,null),h("span",{css:{marginLeft:"0.5rem"}},t.forksCount)),h(Da,null,h(o2,null),h("span",{css:{marginLeft:"0.5rem"}},t.openIssuesCount))))}const b2=C.div({height:"1.5rem","@keyframes pulse":{"50%":{opacity:".5"}},animation:"pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",borderRadius:"0.25rem","--tw-bg-opacity":"1",backgroundColor:"rgb(229 231 235 / var(--tw-bg-opacity))",".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(31 41 55 / var(--tw-bg-opacity))"}});function la(e){return e.children??h(b2,e)}const k2=C.div({position:"relative",borderRadius:"0.375rem","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))",padding:"0.75rem",paddingLeft:"3.5rem","--tw-shadow":"0 1px 2px 0 rgb(0 0 0 / 0.05)","--tw-shadow-colored":"0 1px 2px 0 var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)","--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)","--tw-ring-color":"rgb(71 85 105 / 0.05)",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms",":hover":{"--tw-shadow":"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)","--tw-shadow-colored":"0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"},".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(17 24 39 / var(--tw-bg-opacity))"}}),x2=C(la)({position:"absolute",top:"0.75rem",left:"0.75rem",height:"2.25rem",width:"2.25rem",borderRadius:"0.375rem"}),S2=C(la)({height:"1.25rem",width:"50%","--tw-text-opacity":"1",color:"rgb(191 219 254 / var(--tw-text-opacity))"}),C2=C(la)({marginTop:"0.5rem",width:"66.666667%"}),E2=C.div({marginTop:"0.5rem",display:"flex"}),P2=C(la)({marginRight:"1rem",height:"1.25rem",width:"2.5rem"});function L2(){return h(k2,null,h(x2,null),h(S2,null),h(C2,null),h(E2,null,Array.from({length:3}).map((e,t)=>h(P2,{key:t}))))}function T2(e,t=!1){const[n,r]=P.useState(t);return[n,async(...i)=>{r(!0);try{return await e(...i)}finally{r(!1)}}]}class au{constructor(t,n,r,o,i,a,l,s,c,m,f,g,v,b,w){this.id=t,this.owner=n,this.fullName=r,this.name=o,this.htmlUrl=i,this.description=a,this.language=l,this.forksCount=s,this.stargazersCount=c,this.openIssuesCount=m,this.archived=f,this.disabled=g,this.pushedAt=v,this.createdAt=b,this.updatedAt=w}static from(t){return new au(t.id,t.owner,t.full_name,t.name,t.html_url,t.description,t.language,t.forks_count,t.stargazers_count,t.open_issues_count,t.archived,t.disabled,t.pushed_at,t.created_at,t.updated_at)}}var gm=(e=>(e.Asc="asc",e.Desc="desc",e))(gm||{}),hm=(e=>(e.Created="created",e.Updated="updated",e.Pushed="pushed",e.FullName="full_name",e))(hm||{}),ym=(e=>(e.All="all",e.Owner="owner",e.Member="member",e))(ym||{});function O2(e){const t=new URLSearchParams;return Object.keys(e).forEach(n=>{e[n]&&t.append(n,String(e[n]))}),`?${t.toString()}`}function z2(e){return["POST","PUT","PATCH"].includes(e)}class _2{constructor(t,n,r){st(this,"apiBase","https://api.github.com");this.token=t,this.owner=n,this.repo=r}async request(t,n,r){let o="",i=r;return r&&!z2(t)&&(o=O2(r),i=void 0),(await fetch([this.apiBase,n,o].join(""),{method:t,headers:{"Content-Type":"application/json;charset=UTF-8",Accept:"application/vnd.github.v3+json",Authorization:`token ${this.token}`},body:i?JSON.stringify(i):void 0})).json()}async listMilestones(t={}){const{state:n,sort:r,direction:o,page:i,pageSize:a}=t,l={state:n,sort:r,direction:o,page:i,per_page:a};return this.request("GET",`/repos/${this.owner}/${this.repo}/milestones`,l)}async listIssues(t){const{milestone:n,labels:r,state:o,sort:i,direction:a,page:l,pageSize:s}=t,c={milestone:n,labels:r,state:o,sort:i,direction:a,page:l,per_page:s,creator:this.owner};return this.request("GET",`/repos/${this.owner}/${this.repo}/issues`,c)}getIssue(t){return this.request("GET",`/repos/${this.owner}/${this.repo}/issues/${t}`)}listComments(t){const{issue:n,sort:r,direction:o,page:i,pageSize:a}=t,l={sort:r,direction:o,page:i,per_page:a};return this.request("GET",`/repos/${this.owner}/${this.repo}/issues/${n}/comments`,l)}listRepositories(t){const{type:n,sort:r,direction:o,page:i,pageSize:a}=t,l={type:n,sort:r,direction:o,page:i,per_page:a};return this.request("GET",`/users/${this.owner}/repos`,l)}}const R2=new _2("FAKE_TOKEN_PART1FAKE_TOKEN_PART2","FAKE_USER","FAKE_REPO"),$2=C.main({marginLeft:"auto",marginRight:"auto",width:"100%",maxWidth:"1024px",paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"3rem",paddingBottom:"3rem"}),N2=C.h2({fontSize:"1.5rem",lineHeight:"2rem","--tw-text-opacity":"1",color:"rgb(51 65 85 / var(--tw-text-opacity))"}),wd=C.div({marginTop:"2rem",display:"grid",gridTemplateColumns:"repeat(1, minmax(0, 1fr))",gap:"0.5rem","@media (min-width: 1024px)":{gridTemplateColumns:"repeat(2, minmax(0, 1fr))"}});function F2(){const{t:e}=Jl(),[t,n]=P.useState([]),[r,o]=T2(P.useCallback(async()=>{const i=await R2.listRepositories({type:ym.All,sort:hm.Pushed,direction:gm.Desc,page:1,pageSize:50});n(i.map(au.from).filter(a=>a.stargazersCount>0&&!a.archived&&!a.disabled).sort((a,l)=>l.stargazersCount-a.stargazersCount))},[]),!0);return P.useEffect(()=>{o()},[]),h($2,null,h(N2,null,e("projects.title")),r&&h(wd,null,Array.from({length:10}).map((i,a)=>h(L2,{key:a}))),!!t.length&&h(wd,null,t.map(i=>h(w2,{key:i.id,project:i}))))}function I2(){return h(ry,null,h(J1,null,h(dt,{path:"/",element:h(r2,null)},h(dt,{path:"",element:h(Ob,null)}),h(dt,{path:"EA",element:h(Dl,null)},h(dt,{path:"",element:h(Rv,null)}),h(dt,{path:":id",element:h(fw,null)})),h(dt,{path:"indicator",element:h(Dl,null)},h(dt,{path:"",element:h(Rw,null)}),h(dt,{path:":id",element:h(fb,null)})),h(dt,{path:"projects",element:h(F2,null)}))))}const A2=()=>h(am,{styles:lm`*, ::before, ::after {
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
}`}),j2=lm`
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
`;function M2(){return h(io.Fragment,null,h(A2,null),h(am,{styles:j2}))}document.title="Agus Pujianto";const D2=document.getElementById("root"),B2=Fp(D2);B2.render(h(io.Fragment,null,h(M2,null),h(I2,null)));
