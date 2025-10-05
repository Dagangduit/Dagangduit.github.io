function jg(r,o){for(var a=0;a<o.length;a++){const l=o[a];if(typeof l!="string"&&!Array.isArray(l)){for(const s in l)if(s!=="default"&&!(s in r)){const c=Object.getOwnPropertyDescriptor(l,s);c&&Object.defineProperty(r,s,c.get?c:{enumerable:!0,get:()=>l[s]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function a(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(s){if(s.ep)return;s.ep=!0;const c=a(s);fetch(s.href,c)}})();function xn(r){"@babel/helpers - typeof";return xn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},xn(r)}function Nn(r,o){if(!(r instanceof o))throw new TypeError("Cannot call a class as a function")}function Tg(r,o){if(xn(r)!="object"||!r)return r;var a=r[Symbol.toPrimitive];if(a!==void 0){var l=a.call(r,o);if(xn(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(r)}function Gf(r){var o=Tg(r,"string");return xn(o)=="symbol"?o:o+""}function Ud(r,o){for(var a=0;a<o.length;a++){var l=o[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(r,Gf(l.key),l)}}function jn(r,o,a){return o&&Ud(r.prototype,o),a&&Ud(r,a),Object.defineProperty(r,"prototype",{writable:!1}),r}function Ct(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Zl(r,o){return Zl=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,l){return a.__proto__=l,a},Zl(r,o)}function Da(r,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(o&&o.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),o&&Zl(r,o)}function po(r,o){if(o&&(xn(o)=="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ct(r)}function Vn(r){return Vn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},Vn(r)}function Kn(r,o,a){return(o=Gf(o))in r?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,r}function Yf(r){if(Array.isArray(r))return r}function Fg(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function Bd(r,o){(o==null||o>r.length)&&(o=r.length);for(var a=0,l=Array(o);a<o;a++)l[a]=r[a];return l}function qf(r,o){if(r){if(typeof r=="string")return Bd(r,o);var a={}.toString.call(r).slice(8,-1);return a==="Object"&&r.constructor&&(a=r.constructor.name),a==="Map"||a==="Set"?Array.from(r):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Bd(r,o):void 0}}function Jf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ag(r){return Yf(r)||Fg(r)||qf(r)||Jf()}function Hd(r,o){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);o&&(l=l.filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable})),a.push.apply(a,l)}return a}function Wd(r){for(var o=1;o<arguments.length;o++){var a=arguments[o]!=null?arguments[o]:{};o%2?Hd(Object(a),!0).forEach(function(l){Kn(r,l,a[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):Hd(Object(a)).forEach(function(l){Object.defineProperty(r,l,Object.getOwnPropertyDescriptor(a,l))})}return r}var Ig={type:"logger",log:function(o){this.output("log",o)},warn:function(o){this.output("warn",o)},error:function(o){this.output("error",o)},output:function(o,a){console&&console[o]&&console[o].apply(console,a)}},Mg=(function(){function r(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Nn(this,r),this.init(o,a)}return jn(r,[{key:"init",value:function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=l.prefix||"i18next:",this.logger=a||Ig,this.options=l,this.debug=l.debug}},{key:"setDebug",value:function(a){this.debug=a}},{key:"log",value:function(){for(var a=arguments.length,l=new Array(a),s=0;s<a;s++)l[s]=arguments[s];return this.forward(l,"log","",!0)}},{key:"warn",value:function(){for(var a=arguments.length,l=new Array(a),s=0;s<a;s++)l[s]=arguments[s];return this.forward(l,"warn","",!0)}},{key:"error",value:function(){for(var a=arguments.length,l=new Array(a),s=0;s<a;s++)l[s]=arguments[s];return this.forward(l,"error","")}},{key:"deprecate",value:function(){for(var a=arguments.length,l=new Array(a),s=0;s<a;s++)l[s]=arguments[s];return this.forward(l,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(a,l,s,c){return c&&!this.debug?null:(typeof a[0]=="string"&&(a[0]="".concat(s).concat(this.prefix," ").concat(a[0])),this.logger[l](a))}},{key:"create",value:function(a){return new r(this.logger,Wd(Wd({},{prefix:"".concat(this.prefix,":").concat(a,":")}),this.options))}},{key:"clone",value:function(a){return a=a||this.options,a.prefix=a.prefix||this.prefix,new r(this.logger,a)}}]),r})(),Hn=new Mg,Pt=(function(){function r(){Nn(this,r),this.observers={}}return jn(r,[{key:"on",value:function(a,l){var s=this;return a.split(" ").forEach(function(c){s.observers[c]=s.observers[c]||[],s.observers[c].push(l)}),this}},{key:"off",value:function(a,l){if(this.observers[a]){if(!l){delete this.observers[a];return}this.observers[a]=this.observers[a].filter(function(s){return s!==l})}}},{key:"emit",value:function(a){for(var l=arguments.length,s=new Array(l>1?l-1:0),c=1;c<l;c++)s[c-1]=arguments[c];if(this.observers[a]){var f=[].concat(this.observers[a]);f.forEach(function(g){g.apply(void 0,s)})}if(this.observers["*"]){var p=[].concat(this.observers["*"]);p.forEach(function(g){g.apply(g,[a].concat(s))})}}}]),r})();function io(){var r,o,a=new Promise(function(l,s){r=l,o=s});return a.resolve=r,a.reject=o,a}function Vd(r){return r==null?"":""+r}function $g(r,o,a){r.forEach(function(l){o[l]&&(a[l]=o[l])})}function Rs(r,o,a){function l(p){return p&&p.indexOf("###")>-1?p.replace(/###/g,"."):p}function s(){return!r||typeof r=="string"}for(var c=typeof o!="string"?[].concat(o):o.split(".");c.length>1;){if(s())return{};var f=l(c.shift());!r[f]&&a&&(r[f]=new a),Object.prototype.hasOwnProperty.call(r,f)?r=r[f]:r={}}return s()?{}:{obj:r,k:l(c.shift())}}function Kd(r,o,a){var l=Rs(r,o,Object),s=l.obj,c=l.k;s[c]=a}function Dg(r,o,a,l){var s=Rs(r,o,Object),c=s.obj,f=s.k;c[f]=c[f]||[],c[f].push(a)}function Ta(r,o){var a=Rs(r,o),l=a.obj,s=a.k;if(l)return l[s]}function Qd(r,o,a){var l=Ta(r,a);return l!==void 0?l:Ta(o,a)}function Xf(r,o,a){for(var l in o)l!=="__proto__"&&l!=="constructor"&&(l in r?typeof r[l]=="string"||r[l]instanceof String||typeof o[l]=="string"||o[l]instanceof String?a&&(r[l]=o[l]):Xf(r[l],o[l],a):r[l]=o[l]);return r}function mr(r){return r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var Ug={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function Bg(r){return typeof r=="string"?r.replace(/[&<>"'\/]/g,function(o){return Ug[o]}):r}var Ua=typeof window<"u"&&window.navigator&&typeof window.navigator.userAgentData>"u"&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1,Hg=[" ",",","?","!",";"];function Wg(r,o,a){o=o||"",a=a||"";var l=Hg.filter(function(p){return o.indexOf(p)<0&&a.indexOf(p)<0});if(l.length===0)return!0;var s=new RegExp("(".concat(l.map(function(p){return p==="?"?"\\?":p}).join("|"),")")),c=!s.test(r);if(!c){var f=r.indexOf(a);f>0&&!s.test(r.substring(0,f))&&(c=!0)}return c}function Gd(r,o){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);o&&(l=l.filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable})),a.push.apply(a,l)}return a}function Pa(r){for(var o=1;o<arguments.length;o++){var a=arguments[o]!=null?arguments[o]:{};o%2?Gd(Object(a),!0).forEach(function(l){Kn(r,l,a[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):Gd(Object(a)).forEach(function(l){Object.defineProperty(r,l,Object.getOwnPropertyDescriptor(a,l))})}return r}function Vg(r){var o=Kg();return function(){var l=Vn(r),s;if(o){var c=Vn(this).constructor;s=Reflect.construct(l,arguments,c)}else s=l.apply(this,arguments);return po(this,s)}}function Kg(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Zf(r,o){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(r){if(r[o])return r[o];for(var l=o.split(a),s=r,c=0;c<l.length;++c){if(!s||typeof s[l[c]]=="string"&&c+1<l.length)return;if(s[l[c]]===void 0){for(var f=2,p=l.slice(c,c+f).join(a),g=s[p];g===void 0&&l.length>c+f;)f++,p=l.slice(c,c+f).join(a),g=s[p];if(g===void 0)return;if(g===null)return null;if(o.endsWith(p)){if(typeof g=="string")return g;if(p&&typeof g[p]=="string")return g[p]}var w=l.slice(c+f).join(a);return w?Zf(g,w,a):void 0}s=s[l[c]]}return s}}var Qg=(function(r){Da(a,r);var o=Vg(a);function a(l){var s,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};return Nn(this,a),s=o.call(this),Ua&&Pt.call(Ct(s)),s.data=l||{},s.options=c,s.options.keySeparator===void 0&&(s.options.keySeparator="."),s.options.ignoreJSONStructure===void 0&&(s.options.ignoreJSONStructure=!0),s}return jn(a,[{key:"addNamespaces",value:function(s){this.options.ns.indexOf(s)<0&&this.options.ns.push(s)}},{key:"removeNamespaces",value:function(s){var c=this.options.ns.indexOf(s);c>-1&&this.options.ns.splice(c,1)}},{key:"getResource",value:function(s,c,f){var p=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},g=p.keySeparator!==void 0?p.keySeparator:this.options.keySeparator,w=p.ignoreJSONStructure!==void 0?p.ignoreJSONStructure:this.options.ignoreJSONStructure,S=[s,c];f&&typeof f!="string"&&(S=S.concat(f)),f&&typeof f=="string"&&(S=S.concat(g?f.split(g):f)),s.indexOf(".")>-1&&(S=s.split("."));var v=Ta(this.data,S);return v||!w||typeof f!="string"?v:Zf(this.data&&this.data[s]&&this.data[s][c],f,g)}},{key:"addResource",value:function(s,c,f,p){var g=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1},w=this.options.keySeparator;w===void 0&&(w=".");var S=[s,c];f&&(S=S.concat(w?f.split(w):f)),s.indexOf(".")>-1&&(S=s.split("."),p=c,c=S[1]),this.addNamespaces(c),Kd(this.data,S,p),g.silent||this.emit("added",s,c,f,p)}},{key:"addResources",value:function(s,c,f){var p=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(var g in f)(typeof f[g]=="string"||Object.prototype.toString.apply(f[g])==="[object Array]")&&this.addResource(s,c,g,f[g],{silent:!0});p.silent||this.emit("added",s,c,f)}},{key:"addResourceBundle",value:function(s,c,f,p,g){var w=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},S=[s,c];s.indexOf(".")>-1&&(S=s.split("."),p=f,f=c,c=S[1]),this.addNamespaces(c);var v=Ta(this.data,S)||{};p?Xf(v,f,g):v=Pa(Pa({},v),f),Kd(this.data,S,v),w.silent||this.emit("added",s,c,f)}},{key:"removeResourceBundle",value:function(s,c){this.hasResourceBundle(s,c)&&delete this.data[s][c],this.removeNamespaces(c),this.emit("removed",s,c)}},{key:"hasResourceBundle",value:function(s,c){return this.getResource(s,c)!==void 0}},{key:"getResourceBundle",value:function(s,c){return c||(c=this.options.defaultNS),this.options.compatibilityAPI==="v1"?Pa(Pa({},{}),this.getResource(s,c)):this.getResource(s,c)}},{key:"getDataByLanguage",value:function(s){return this.data[s]}},{key:"hasLanguageSomeTranslations",value:function(s){var c=this.getDataByLanguage(s),f=c&&Object.keys(c)||[];return!!f.find(function(p){return c[p]&&Object.keys(c[p]).length>0})}},{key:"toJSON",value:function(){return this.data}}]),a})(Pt),ep={processors:{},addPostProcessor:function(o){this.processors[o.name]=o},handle:function(o,a,l,s,c){var f=this;return o.forEach(function(p){f.processors[p]&&(a=f.processors[p].process(a,l,s,c))}),a}};function Yd(r,o){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);o&&(l=l.filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable})),a.push.apply(a,l)}return a}function tn(r){for(var o=1;o<arguments.length;o++){var a=arguments[o]!=null?arguments[o]:{};o%2?Yd(Object(a),!0).forEach(function(l){Kn(r,l,a[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):Yd(Object(a)).forEach(function(l){Object.defineProperty(r,l,Object.getOwnPropertyDescriptor(a,l))})}return r}function Gg(r){var o=Yg();return function(){var l=Vn(r),s;if(o){var c=Vn(this).constructor;s=Reflect.construct(l,arguments,c)}else s=l.apply(this,arguments);return po(this,s)}}function Yg(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var qd={},Jd=(function(r){Da(a,r);var o=Gg(a);function a(l){var s,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Nn(this,a),s=o.call(this),Ua&&Pt.call(Ct(s)),$g(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],l,Ct(s)),s.options=c,s.options.keySeparator===void 0&&(s.options.keySeparator="."),s.logger=Hn.create("translator"),s}return jn(a,[{key:"changeLanguage",value:function(s){s&&(this.language=s)}},{key:"exists",value:function(s){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(s==null)return!1;var f=this.resolve(s,c);return f&&f.res!==void 0}},{key:"extractFromKey",value:function(s,c){var f=c.nsSeparator!==void 0?c.nsSeparator:this.options.nsSeparator;f===void 0&&(f=":");var p=c.keySeparator!==void 0?c.keySeparator:this.options.keySeparator,g=c.ns||this.options.defaultNS||[],w=f&&s.indexOf(f)>-1,S=!this.options.userDefinedKeySeparator&&!c.keySeparator&&!this.options.userDefinedNsSeparator&&!c.nsSeparator&&!Wg(s,f,p);if(w&&!S){var v=s.match(this.interpolator.nestingRegexp);if(v&&v.length>0)return{key:s,namespaces:g};var L=s.split(f);(f!==p||f===p&&this.options.ns.indexOf(L[0])>-1)&&(g=L.shift()),s=L.join(p)}return typeof g=="string"&&(g=[g]),{key:s,namespaces:g}}},{key:"translate",value:function(s,c,f){var p=this;if(xn(c)!=="object"&&this.options.overloadTranslationOptionHandler&&(c=this.options.overloadTranslationOptionHandler(arguments)),c||(c={}),s==null)return"";Array.isArray(s)||(s=[String(s)]);var g=c.returnDetails!==void 0?c.returnDetails:this.options.returnDetails,w=c.keySeparator!==void 0?c.keySeparator:this.options.keySeparator,S=this.extractFromKey(s[s.length-1],c),v=S.key,L=S.namespaces,T=L[L.length-1],A=c.lng||this.language,O=c.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(A&&A.toLowerCase()==="cimode"){if(O){var R=c.nsSeparator||this.options.nsSeparator;return g?{res:"".concat(T).concat(R).concat(v),usedKey:v,exactUsedKey:v,usedLng:A,usedNS:T}:"".concat(T).concat(R).concat(v)}return g?{res:v,usedKey:v,exactUsedKey:v,usedLng:A,usedNS:T}:v}var _=this.resolve(s,c),y=_&&_.res,x=_&&_.usedKey||v,j=_&&_.exactUsedKey||v,P=Object.prototype.toString.apply(y),I=["[object Number]","[object Function]","[object RegExp]"],D=c.joinArrays!==void 0?c.joinArrays:this.options.joinArrays,J=!this.i18nFormat||this.i18nFormat.handleAsObject,Q=typeof y!="string"&&typeof y!="boolean"&&typeof y!="number";if(J&&y&&Q&&I.indexOf(P)<0&&!(typeof D=="string"&&P==="[object Array]")){if(!c.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");var te=this.options.returnedObjectHandler?this.options.returnedObjectHandler(x,y,tn(tn({},c),{},{ns:L})):"key '".concat(v," (").concat(this.language,")' returned an object instead of string.");return g?(_.res=te,_):te}if(w){var ge=P==="[object Array]",Ce=ge?[]:{},$e=ge?j:x;for(var Re in y)if(Object.prototype.hasOwnProperty.call(y,Re)){var Ze="".concat($e).concat(w).concat(Re);Ce[Re]=this.translate(Ze,tn(tn({},c),{joinArrays:!1,ns:L})),Ce[Re]===Ze&&(Ce[Re]=y[Re])}y=Ce}}else if(J&&typeof D=="string"&&P==="[object Array]")y=y.join(D),y&&(y=this.extendTranslation(y,s,c,f));else{var ze=!1,he=!1,W=c.count!==void 0&&typeof c.count!="string",X=a.hasDefaultValue(c),k=W?this.pluralResolver.getSuffix(A,c.count,c):"",M=c["defaultValue".concat(k)]||c.defaultValue;!this.isValidLookup(y)&&X&&(ze=!0,y=M),this.isValidLookup(y)||(he=!0,y=v);var Y=c.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey,se=Y&&he?void 0:y,re=X&&M!==y&&this.options.updateMissing;if(he||ze||re){if(this.logger.log(re?"updateKey":"missingKey",A,T,v,re?M:y),w){var fe=this.resolve(v,tn(tn({},c),{},{keySeparator:!1}));fe&&fe.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}var le=[],ce=this.languageUtils.getFallbackCodes(this.options.fallbackLng,c.lng||this.language);if(this.options.saveMissingTo==="fallback"&&ce&&ce[0])for(var ue=0;ue<ce.length;ue++)le.push(ce[ue]);else this.options.saveMissingTo==="all"?le=this.languageUtils.toResolveHierarchy(c.lng||this.language):le.push(c.lng||this.language);var je=function(Ke,rt,Sn){var Bt=X&&Sn!==y?Sn:se;p.options.missingKeyHandler?p.options.missingKeyHandler(Ke,T,rt,Bt,re,c):p.backendConnector&&p.backendConnector.saveMissing&&p.backendConnector.saveMissing(Ke,T,rt,Bt,re,c),p.emit("missingKey",Ke,T,rt,y)};this.options.saveMissing&&(this.options.saveMissingPlurals&&W?le.forEach(function(Qn){p.pluralResolver.getSuffixes(Qn,c).forEach(function(Ke){je([Qn],v+Ke,c["defaultValue".concat(Ke)]||M)})}):je(le,v,M))}y=this.extendTranslation(y,s,c,_,f),he&&y===v&&this.options.appendNamespaceToMissingKey&&(y="".concat(T,":").concat(v)),(he||ze)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?y=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?"".concat(T,":").concat(v):v,ze?y:void 0):y=this.options.parseMissingKeyHandler(y))}return g?(_.res=y,_):y}},{key:"extendTranslation",value:function(s,c,f,p,g){var w=this;if(this.i18nFormat&&this.i18nFormat.parse)s=this.i18nFormat.parse(s,tn(tn({},this.options.interpolation.defaultVariables),f),p.usedLng,p.usedNS,p.usedKey,{resolved:p});else if(!f.skipInterpolation){f.interpolation&&this.interpolator.init(tn(tn({},f),{interpolation:tn(tn({},this.options.interpolation),f.interpolation)}));var S=typeof s=="string"&&(f&&f.interpolation&&f.interpolation.skipOnVariables!==void 0?f.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables),v;if(S){var L=s.match(this.interpolator.nestingRegexp);v=L&&L.length}var T=f.replace&&typeof f.replace!="string"?f.replace:f;if(this.options.interpolation.defaultVariables&&(T=tn(tn({},this.options.interpolation.defaultVariables),T)),s=this.interpolator.interpolate(s,T,f.lng||this.language,f),S){var A=s.match(this.interpolator.nestingRegexp),O=A&&A.length;v<O&&(f.nest=!1)}f.nest!==!1&&(s=this.interpolator.nest(s,function(){for(var y=arguments.length,x=new Array(y),j=0;j<y;j++)x[j]=arguments[j];return g&&g[0]===x[0]&&!f.context?(w.logger.warn("It seems you are nesting recursively key: ".concat(x[0]," in key: ").concat(c[0])),null):w.translate.apply(w,x.concat([c]))},f)),f.interpolation&&this.interpolator.reset()}var R=f.postProcess||this.options.postProcess,_=typeof R=="string"?[R]:R;return s!=null&&_&&_.length&&f.applyPostProcessor!==!1&&(s=ep.handle(_,s,c,this.options&&this.options.postProcessPassResolved?tn({i18nResolved:p},f):f,this)),s}},{key:"resolve",value:function(s){var c=this,f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},p,g,w,S,v;return typeof s=="string"&&(s=[s]),s.forEach(function(L){if(!c.isValidLookup(p)){var T=c.extractFromKey(L,f),A=T.key;g=A;var O=T.namespaces;c.options.fallbackNS&&(O=O.concat(c.options.fallbackNS));var R=f.count!==void 0&&typeof f.count!="string",_=R&&!f.ordinal&&f.count===0&&c.pluralResolver.shouldUseIntlApi(),y=f.context!==void 0&&(typeof f.context=="string"||typeof f.context=="number")&&f.context!=="",x=f.lngs?f.lngs:c.languageUtils.toResolveHierarchy(f.lng||c.language,f.fallbackLng);O.forEach(function(j){c.isValidLookup(p)||(v=j,!qd["".concat(x[0],"-").concat(j)]&&c.utils&&c.utils.hasLoadedNamespace&&!c.utils.hasLoadedNamespace(v)&&(qd["".concat(x[0],"-").concat(j)]=!0,c.logger.warn('key "'.concat(g,'" for languages "').concat(x.join(", "),`" won't get resolved as namespace "`).concat(v,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),x.forEach(function(P){if(!c.isValidLookup(p)){S=P;var I=[A];if(c.i18nFormat&&c.i18nFormat.addLookupKeys)c.i18nFormat.addLookupKeys(I,A,P,j,f);else{var D;R&&(D=c.pluralResolver.getSuffix(P,f.count,f));var J="".concat(c.options.pluralSeparator,"zero");if(R&&(I.push(A+D),_&&I.push(A+J)),y){var Q="".concat(A).concat(c.options.contextSeparator).concat(f.context);I.push(Q),R&&(I.push(Q+D),_&&I.push(Q+J))}}for(var te;te=I.pop();)c.isValidLookup(p)||(w=te,p=c.getResource(P,j,te,f))}}))})}}),{res:p,usedKey:g,exactUsedKey:w,usedLng:S,usedNS:v}}},{key:"isValidLookup",value:function(s){return s!==void 0&&!(!this.options.returnNull&&s===null)&&!(!this.options.returnEmptyString&&s==="")}},{key:"getResource",value:function(s,c,f){var p=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(s,c,f,p):this.resourceStore.getResource(s,c,f,p)}}],[{key:"hasDefaultValue",value:function(s){var c="defaultValue";for(var f in s)if(Object.prototype.hasOwnProperty.call(s,f)&&c===f.substring(0,c.length)&&s[f]!==void 0)return!0;return!1}}]),a})(Pt);function Dl(r){return r.charAt(0).toUpperCase()+r.slice(1)}var Xd=(function(){function r(o){Nn(this,r),this.options=o,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Hn.create("languageUtils")}return jn(r,[{key:"getScriptPartFromCode",value:function(a){if(!a||a.indexOf("-")<0)return null;var l=a.split("-");return l.length===2||(l.pop(),l[l.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(l.join("-"))}},{key:"getLanguagePartFromCode",value:function(a){if(!a||a.indexOf("-")<0)return a;var l=a.split("-");return this.formatLanguageCode(l[0])}},{key:"formatLanguageCode",value:function(a){if(typeof a=="string"&&a.indexOf("-")>-1){var l=["hans","hant","latn","cyrl","cans","mong","arab"],s=a.split("-");return this.options.lowerCaseLng?s=s.map(function(c){return c.toLowerCase()}):s.length===2?(s[0]=s[0].toLowerCase(),s[1]=s[1].toUpperCase(),l.indexOf(s[1].toLowerCase())>-1&&(s[1]=Dl(s[1].toLowerCase()))):s.length===3&&(s[0]=s[0].toLowerCase(),s[1].length===2&&(s[1]=s[1].toUpperCase()),s[0]!=="sgn"&&s[2].length===2&&(s[2]=s[2].toUpperCase()),l.indexOf(s[1].toLowerCase())>-1&&(s[1]=Dl(s[1].toLowerCase())),l.indexOf(s[2].toLowerCase())>-1&&(s[2]=Dl(s[2].toLowerCase()))),s.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?a.toLowerCase():a}},{key:"isSupportedCode",value:function(a){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(a=this.getLanguagePartFromCode(a)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(a)>-1}},{key:"getBestMatchFromCodes",value:function(a){var l=this;if(!a)return null;var s;return a.forEach(function(c){if(!s){var f=l.formatLanguageCode(c);(!l.options.supportedLngs||l.isSupportedCode(f))&&(s=f)}}),!s&&this.options.supportedLngs&&a.forEach(function(c){if(!s){var f=l.getLanguagePartFromCode(c);if(l.isSupportedCode(f))return s=f;s=l.options.supportedLngs.find(function(p){if(p.indexOf(f)===0)return p})}}),s||(s=this.getFallbackCodes(this.options.fallbackLng)[0]),s}},{key:"getFallbackCodes",value:function(a,l){if(!a)return[];if(typeof a=="function"&&(a=a(l)),typeof a=="string"&&(a=[a]),Object.prototype.toString.apply(a)==="[object Array]")return a;if(!l)return a.default||[];var s=a[l];return s||(s=a[this.getScriptPartFromCode(l)]),s||(s=a[this.formatLanguageCode(l)]),s||(s=a[this.getLanguagePartFromCode(l)]),s||(s=a.default),s||[]}},{key:"toResolveHierarchy",value:function(a,l){var s=this,c=this.getFallbackCodes(l||this.options.fallbackLng||[],a),f=[],p=function(w){w&&(s.isSupportedCode(w)?f.push(w):s.logger.warn("rejecting language code not found in supportedLngs: ".concat(w)))};return typeof a=="string"&&a.indexOf("-")>-1?(this.options.load!=="languageOnly"&&p(this.formatLanguageCode(a)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&p(this.getScriptPartFromCode(a)),this.options.load!=="currentOnly"&&p(this.getLanguagePartFromCode(a))):typeof a=="string"&&p(this.formatLanguageCode(a)),c.forEach(function(g){f.indexOf(g)<0&&p(s.formatLanguageCode(g))}),f}}]),r})(),qg=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],Jg={1:function(o){return+(o>1)},2:function(o){return+(o!=1)},3:function(o){return 0},4:function(o){return o%10==1&&o%100!=11?0:o%10>=2&&o%10<=4&&(o%100<10||o%100>=20)?1:2},5:function(o){return o==0?0:o==1?1:o==2?2:o%100>=3&&o%100<=10?3:o%100>=11?4:5},6:function(o){return o==1?0:o>=2&&o<=4?1:2},7:function(o){return o==1?0:o%10>=2&&o%10<=4&&(o%100<10||o%100>=20)?1:2},8:function(o){return o==1?0:o==2?1:o!=8&&o!=11?2:3},9:function(o){return+(o>=2)},10:function(o){return o==1?0:o==2?1:o<7?2:o<11?3:4},11:function(o){return o==1||o==11?0:o==2||o==12?1:o>2&&o<20?2:3},12:function(o){return+(o%10!=1||o%100==11)},13:function(o){return+(o!==0)},14:function(o){return o==1?0:o==2?1:o==3?2:3},15:function(o){return o%10==1&&o%100!=11?0:o%10>=2&&(o%100<10||o%100>=20)?1:2},16:function(o){return o%10==1&&o%100!=11?0:o!==0?1:2},17:function(o){return o==1||o%10==1&&o%100!=11?0:1},18:function(o){return o==0?0:o==1?1:2},19:function(o){return o==1?0:o==0||o%100>1&&o%100<11?1:o%100>10&&o%100<20?2:3},20:function(o){return o==1?0:o==0||o%100>0&&o%100<20?1:2},21:function(o){return o%100==1?1:o%100==2?2:o%100==3||o%100==4?3:0},22:function(o){return o==1?0:o==2?1:(o<0||o>10)&&o%10==0?2:3}},Xg=["v1","v2","v3"],Zd={zero:0,one:1,two:2,few:3,many:4,other:5};function Zg(){var r={};return qg.forEach(function(o){o.lngs.forEach(function(a){r[a]={numbers:o.nr,plurals:Jg[o.fc]}})}),r}var eh=(function(){function r(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Nn(this,r),this.languageUtils=o,this.options=a,this.logger=Hn.create("pluralResolver"),(!this.options.compatibilityJSON||this.options.compatibilityJSON==="v4")&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=Zg()}return jn(r,[{key:"addRule",value:function(a,l){this.rules[a]=l}},{key:"getRule",value:function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(a,{type:l.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[a]||this.rules[this.languageUtils.getLanguagePartFromCode(a)]}},{key:"needsPlural",value:function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=this.getRule(a,l);return this.shouldUseIntlApi()?s&&s.resolvedOptions().pluralCategories.length>1:s&&s.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(a,l){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(a,s).map(function(c){return"".concat(l).concat(c)})}},{key:"getSuffixes",value:function(a){var l=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=this.getRule(a,s);return c?this.shouldUseIntlApi()?c.resolvedOptions().pluralCategories.sort(function(f,p){return Zd[f]-Zd[p]}).map(function(f){return"".concat(l.options.prepend).concat(f)}):c.numbers.map(function(f){return l.getSuffix(a,f,s)}):[]}},{key:"getSuffix",value:function(a,l){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},c=this.getRule(a,s);return c?this.shouldUseIntlApi()?"".concat(this.options.prepend).concat(c.select(l)):this.getSuffixRetroCompatible(c,l):(this.logger.warn("no plural rule found for: ".concat(a)),"")}},{key:"getSuffixRetroCompatible",value:function(a,l){var s=this,c=a.noAbs?a.plurals(l):a.plurals(Math.abs(l)),f=a.numbers[c];this.options.simplifyPluralSuffix&&a.numbers.length===2&&a.numbers[0]===1&&(f===2?f="plural":f===1&&(f=""));var p=function(){return s.options.prepend&&f.toString()?s.options.prepend+f.toString():f.toString()};return this.options.compatibilityJSON==="v1"?f===1?"":typeof f=="number"?"_plural_".concat(f.toString()):p():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&a.numbers.length===2&&a.numbers[0]===1?p():this.options.prepend&&c.toString()?this.options.prepend+c.toString():c.toString()}},{key:"shouldUseIntlApi",value:function(){return!Xg.includes(this.options.compatibilityJSON)}}]),r})();function ef(r,o){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);o&&(l=l.filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable})),a.push.apply(a,l)}return a}function _n(r){for(var o=1;o<arguments.length;o++){var a=arguments[o]!=null?arguments[o]:{};o%2?ef(Object(a),!0).forEach(function(l){Kn(r,l,a[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):ef(Object(a)).forEach(function(l){Object.defineProperty(r,l,Object.getOwnPropertyDescriptor(a,l))})}return r}var nh=(function(){function r(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Nn(this,r),this.logger=Hn.create("interpolator"),this.options=o,this.format=o.interpolation&&o.interpolation.format||function(a){return a},this.init(o)}return jn(r,[{key:"init",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};a.interpolation||(a.interpolation={escapeValue:!0});var l=a.interpolation;this.escape=l.escape!==void 0?l.escape:Bg,this.escapeValue=l.escapeValue!==void 0?l.escapeValue:!0,this.useRawValueToEscape=l.useRawValueToEscape!==void 0?l.useRawValueToEscape:!1,this.prefix=l.prefix?mr(l.prefix):l.prefixEscaped||"{{",this.suffix=l.suffix?mr(l.suffix):l.suffixEscaped||"}}",this.formatSeparator=l.formatSeparator?l.formatSeparator:l.formatSeparator||",",this.unescapePrefix=l.unescapeSuffix?"":l.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":l.unescapeSuffix||"",this.nestingPrefix=l.nestingPrefix?mr(l.nestingPrefix):l.nestingPrefixEscaped||mr("$t("),this.nestingSuffix=l.nestingSuffix?mr(l.nestingSuffix):l.nestingSuffixEscaped||mr(")"),this.nestingOptionsSeparator=l.nestingOptionsSeparator?l.nestingOptionsSeparator:l.nestingOptionsSeparator||",",this.maxReplaces=l.maxReplaces?l.maxReplaces:1e3,this.alwaysFormat=l.alwaysFormat!==void 0?l.alwaysFormat:!1,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var a="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(a,"g");var l="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(l,"g");var s="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(s,"g")}},{key:"interpolate",value:function(a,l,s,c){var f=this,p,g,w,S=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function v(R){return R.replace(/\$/g,"$$$$")}var L=function(_){if(_.indexOf(f.formatSeparator)<0){var y=Qd(l,S,_);return f.alwaysFormat?f.format(y,void 0,s,_n(_n(_n({},c),l),{},{interpolationkey:_})):y}var x=_.split(f.formatSeparator),j=x.shift().trim(),P=x.join(f.formatSeparator).trim();return f.format(Qd(l,S,j),P,s,_n(_n(_n({},c),l),{},{interpolationkey:j}))};this.resetRegExp();var T=c&&c.missingInterpolationHandler||this.options.missingInterpolationHandler,A=c&&c.interpolation&&c.interpolation.skipOnVariables!==void 0?c.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables,O=[{regex:this.regexpUnescape,safeValue:function(_){return v(_)}},{regex:this.regexp,safeValue:function(_){return f.escapeValue?v(f.escape(_)):v(_)}}];return O.forEach(function(R){for(w=0;p=R.regex.exec(a);){var _=p[1].trim();if(g=L(_),g===void 0)if(typeof T=="function"){var y=T(a,p,c);g=typeof y=="string"?y:""}else if(c&&Object.prototype.hasOwnProperty.call(c,_))g="";else if(A){g=p[0];continue}else f.logger.warn("missed to pass in variable ".concat(_," for interpolating ").concat(a)),g="";else typeof g!="string"&&!f.useRawValueToEscape&&(g=Vd(g));var x=R.safeValue(g);if(a=a.replace(p[0],x),A?(R.regex.lastIndex+=g.length,R.regex.lastIndex-=p[0].length):R.regex.lastIndex=0,w++,w>=f.maxReplaces)break}}),a}},{key:"nest",value:function(a,l){var s=this,c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},f,p,g;function w(T,A){var O=this.nestingOptionsSeparator;if(T.indexOf(O)<0)return T;var R=T.split(new RegExp("".concat(O,"[ ]*{"))),_="{".concat(R[1]);T=R[0],_=this.interpolate(_,g);var y=_.match(/'/g),x=_.match(/"/g);(y&&y.length%2===0&&!x||x.length%2!==0)&&(_=_.replace(/'/g,'"'));try{g=JSON.parse(_),A&&(g=_n(_n({},A),g))}catch(j){return this.logger.warn("failed parsing options string in nesting for key ".concat(T),j),"".concat(T).concat(O).concat(_)}return delete g.defaultValue,T}for(;f=this.nestingRegexp.exec(a);){var S=[];g=_n({},c),g=g.replace&&typeof g.replace!="string"?g.replace:g,g.applyPostProcessor=!1,delete g.defaultValue;var v=!1;if(f[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(f[1])){var L=f[1].split(this.formatSeparator).map(function(T){return T.trim()});f[1]=L.shift(),S=L,v=!0}if(p=l(w.call(this,f[1].trim(),g),g),p&&f[0]===a&&typeof p!="string")return p;typeof p!="string"&&(p=Vd(p)),p||(this.logger.warn("missed to resolve ".concat(f[1]," for nesting ").concat(a)),p=""),v&&(p=S.reduce(function(T,A){return s.format(T,A,c.lng,_n(_n({},c),{},{interpolationkey:f[1].trim()}))},p.trim())),a=a.replace(f[0],p),this.regexp.lastIndex=0}return a}}]),r})();function nf(r,o){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);o&&(l=l.filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable})),a.push.apply(a,l)}return a}function tt(r){for(var o=1;o<arguments.length;o++){var a=arguments[o]!=null?arguments[o]:{};o%2?nf(Object(a),!0).forEach(function(l){Kn(r,l,a[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):nf(Object(a)).forEach(function(l){Object.defineProperty(r,l,Object.getOwnPropertyDescriptor(a,l))})}return r}function th(r){var o=r.toLowerCase().trim(),a={};if(r.indexOf("(")>-1){var l=r.split("(");o=l[0].toLowerCase().trim();var s=l[1].substring(0,l[1].length-1);if(o==="currency"&&s.indexOf(":")<0)a.currency||(a.currency=s.trim());else if(o==="relativetime"&&s.indexOf(":")<0)a.range||(a.range=s.trim());else{var c=s.split(";");c.forEach(function(f){if(f){var p=f.split(":"),g=Ag(p),w=g[0],S=g.slice(1),v=S.join(":").trim().replace(/^'+|'+$/g,"");a[w.trim()]||(a[w.trim()]=v),v==="false"&&(a[w.trim()]=!1),v==="true"&&(a[w.trim()]=!0),isNaN(v)||(a[w.trim()]=parseInt(v,10))}})}}return{formatName:o,formatOptions:a}}function gr(r){var o={};return function(l,s,c){var f=s+JSON.stringify(c),p=o[f];return p||(p=r(s,c),o[f]=p),p(l)}}var rh=(function(){function r(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Nn(this,r),this.logger=Hn.create("formatter"),this.options=o,this.formats={number:gr(function(a,l){var s=new Intl.NumberFormat(a,tt({},l));return function(c){return s.format(c)}}),currency:gr(function(a,l){var s=new Intl.NumberFormat(a,tt(tt({},l),{},{style:"currency"}));return function(c){return s.format(c)}}),datetime:gr(function(a,l){var s=new Intl.DateTimeFormat(a,tt({},l));return function(c){return s.format(c)}}),relativetime:gr(function(a,l){var s=new Intl.RelativeTimeFormat(a,tt({},l));return function(c){return s.format(c,l.range||"day")}}),list:gr(function(a,l){var s=new Intl.ListFormat(a,tt({},l));return function(c){return s.format(c)}})},this.init(o)}return jn(r,[{key:"init",value:function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}},s=l.interpolation;this.formatSeparator=s.formatSeparator?s.formatSeparator:s.formatSeparator||","}},{key:"add",value:function(a,l){this.formats[a.toLowerCase().trim()]=l}},{key:"addCached",value:function(a,l){this.formats[a.toLowerCase().trim()]=gr(l)}},{key:"format",value:function(a,l,s){var c=this,f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},p=l.split(this.formatSeparator),g=p.reduce(function(w,S){var v=th(S),L=v.formatName,T=v.formatOptions;if(c.formats[L]){var A=w;try{var O=f&&f.formatParams&&f.formatParams[f.interpolationkey]||{},R=O.locale||O.lng||f.locale||f.lng||s;A=c.formats[L](w,R,tt(tt(tt({},T),f),O))}catch(_){c.logger.warn(_)}return A}else c.logger.warn("there was no format function for ".concat(L));return w},a);return g}}]),r})();function tf(r,o){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);o&&(l=l.filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable})),a.push.apply(a,l)}return a}function rf(r){for(var o=1;o<arguments.length;o++){var a=arguments[o]!=null?arguments[o]:{};o%2?tf(Object(a),!0).forEach(function(l){Kn(r,l,a[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):tf(Object(a)).forEach(function(l){Object.defineProperty(r,l,Object.getOwnPropertyDescriptor(a,l))})}return r}function oh(r){var o=ah();return function(){var l=Vn(r),s;if(o){var c=Vn(this).constructor;s=Reflect.construct(l,arguments,c)}else s=l.apply(this,arguments);return po(this,s)}}function ah(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ih(r,o){r.pending[o]!==void 0&&(delete r.pending[o],r.pendingCount--)}var lh=(function(r){Da(a,r);var o=oh(a);function a(l,s,c){var f,p=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return Nn(this,a),f=o.call(this),Ua&&Pt.call(Ct(f)),f.backend=l,f.store=s,f.services=c,f.languageUtils=c.languageUtils,f.options=p,f.logger=Hn.create("backendConnector"),f.waitingReads=[],f.maxParallelReads=p.maxParallelReads||10,f.readingCalls=0,f.maxRetries=p.maxRetries>=0?p.maxRetries:5,f.retryTimeout=p.retryTimeout>=1?p.retryTimeout:350,f.state={},f.queue=[],f.backend&&f.backend.init&&f.backend.init(c,p.backend,p),f}return jn(a,[{key:"queueLoad",value:function(s,c,f,p){var g=this,w={},S={},v={},L={};return s.forEach(function(T){var A=!0;c.forEach(function(O){var R="".concat(T,"|").concat(O);!f.reload&&g.store.hasResourceBundle(T,O)?g.state[R]=2:g.state[R]<0||(g.state[R]===1?S[R]===void 0&&(S[R]=!0):(g.state[R]=1,A=!1,S[R]===void 0&&(S[R]=!0),w[R]===void 0&&(w[R]=!0),L[O]===void 0&&(L[O]=!0)))}),A||(v[T]=!0)}),(Object.keys(w).length||Object.keys(S).length)&&this.queue.push({pending:S,pendingCount:Object.keys(S).length,loaded:{},errors:[],callback:p}),{toLoad:Object.keys(w),pending:Object.keys(S),toLoadLanguages:Object.keys(v),toLoadNamespaces:Object.keys(L)}}},{key:"loaded",value:function(s,c,f){var p=s.split("|"),g=p[0],w=p[1];c&&this.emit("failedLoading",g,w,c),f&&this.store.addResourceBundle(g,w,f),this.state[s]=c?-1:2;var S={};this.queue.forEach(function(v){Dg(v.loaded,[g],w),ih(v,s),c&&v.errors.push(c),v.pendingCount===0&&!v.done&&(Object.keys(v.loaded).forEach(function(L){S[L]||(S[L]={});var T=v.loaded[L];T.length&&T.forEach(function(A){S[L][A]===void 0&&(S[L][A]=!0)})}),v.done=!0,v.errors.length?v.callback(v.errors):v.callback())}),this.emit("loaded",S),this.queue=this.queue.filter(function(v){return!v.done})}},{key:"read",value:function(s,c,f){var p=this,g=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,w=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,S=arguments.length>5?arguments[5]:void 0;if(!s.length)return S(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:s,ns:c,fcName:f,tried:g,wait:w,callback:S});return}this.readingCalls++;var v=function(O,R){if(p.readingCalls--,p.waitingReads.length>0){var _=p.waitingReads.shift();p.read(_.lng,_.ns,_.fcName,_.tried,_.wait,_.callback)}if(O&&R&&g<p.maxRetries){setTimeout(function(){p.read.call(p,s,c,f,g+1,w*2,S)},w);return}S(O,R)},L=this.backend[f].bind(this.backend);if(L.length===2){try{var T=L(s,c);T&&typeof T.then=="function"?T.then(function(A){return v(null,A)}).catch(v):v(null,T)}catch(A){v(A)}return}return L(s,c,v)}},{key:"prepareLoading",value:function(s,c){var f=this,p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},g=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),g&&g();typeof s=="string"&&(s=this.languageUtils.toResolveHierarchy(s)),typeof c=="string"&&(c=[c]);var w=this.queueLoad(s,c,p,g);if(!w.toLoad.length)return w.pending.length||g(),null;w.toLoad.forEach(function(S){f.loadOne(S)})}},{key:"load",value:function(s,c,f){this.prepareLoading(s,c,{},f)}},{key:"reload",value:function(s,c,f){this.prepareLoading(s,c,{reload:!0},f)}},{key:"loadOne",value:function(s){var c=this,f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",p=s.split("|"),g=p[0],w=p[1];this.read(g,w,"read",void 0,void 0,function(S,v){S&&c.logger.warn("".concat(f,"loading namespace ").concat(w," for language ").concat(g," failed"),S),!S&&v&&c.logger.log("".concat(f,"loaded namespace ").concat(w," for language ").concat(g),v),c.loaded(s,S,v)})}},{key:"saveMissing",value:function(s,c,f,p,g){var w=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},S=arguments.length>6&&arguments[6]!==void 0?arguments[6]:function(){};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(c)){this.logger.warn('did not save key "'.concat(f,'" as the namespace "').concat(c,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(f==null||f==="")){if(this.backend&&this.backend.create){var v=rf(rf({},w),{},{isUpdate:g}),L=this.backend.create.bind(this.backend);if(L.length<6)try{var T;L.length===5?T=L(s,c,f,p,v):T=L(s,c,f,p),T&&typeof T.then=="function"?T.then(function(A){return S(null,A)}).catch(S):S(null,T)}catch(A){S(A)}else L(s,c,f,p,S,v)}!s||!s[0]||this.store.addResource(s[0],c,f,p)}}}]),a})(Pt);function of(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(o){var a={};if(xn(o[1])==="object"&&(a=o[1]),typeof o[1]=="string"&&(a.defaultValue=o[1]),typeof o[2]=="string"&&(a.tDescription=o[2]),xn(o[2])==="object"||xn(o[3])==="object"){var l=o[3]||o[2];Object.keys(l).forEach(function(s){a[s]=l[s]})}return a},interpolation:{escapeValue:!0,format:function(o,a,l,s){return o},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function af(r){return typeof r.ns=="string"&&(r.ns=[r.ns]),typeof r.fallbackLng=="string"&&(r.fallbackLng=[r.fallbackLng]),typeof r.fallbackNS=="string"&&(r.fallbackNS=[r.fallbackNS]),r.supportedLngs&&r.supportedLngs.indexOf("cimode")<0&&(r.supportedLngs=r.supportedLngs.concat(["cimode"])),r}function lf(r,o){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);o&&(l=l.filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable})),a.push.apply(a,l)}return a}function $n(r){for(var o=1;o<arguments.length;o++){var a=arguments[o]!=null?arguments[o]:{};o%2?lf(Object(a),!0).forEach(function(l){Kn(r,l,a[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):lf(Object(a)).forEach(function(l){Object.defineProperty(r,l,Object.getOwnPropertyDescriptor(a,l))})}return r}function sh(r){var o=uh();return function(){var l=Vn(r),s;if(o){var c=Vn(this).constructor;s=Reflect.construct(l,arguments,c)}else s=l.apply(this,arguments);return po(this,s)}}function uh(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Oa(){}function ch(r){var o=Object.getOwnPropertyNames(Object.getPrototypeOf(r));o.forEach(function(a){typeof r[a]=="function"&&(r[a]=r[a].bind(r))})}var Fa=(function(r){Da(a,r);var o=sh(a);function a(){var l,s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=arguments.length>1?arguments[1]:void 0;if(Nn(this,a),l=o.call(this),Ua&&Pt.call(Ct(l)),l.options=af(s),l.services={},l.logger=Hn,l.modules={external:[]},ch(Ct(l)),c&&!l.isInitialized&&!s.isClone){if(!l.options.initImmediate)return l.init(s,c),po(l,Ct(l));setTimeout(function(){l.init(s,c)},0)}return l}return jn(a,[{key:"init",value:function(){var s=this,c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},f=arguments.length>1?arguments[1]:void 0;typeof c=="function"&&(f=c,c={}),!c.defaultNS&&c.defaultNS!==!1&&c.ns&&(typeof c.ns=="string"?c.defaultNS=c.ns:c.ns.indexOf("translation")<0&&(c.defaultNS=c.ns[0]));var p=of();this.options=$n($n($n({},p),this.options),af(c)),this.options.compatibilityAPI!=="v1"&&(this.options.interpolation=$n($n({},p.interpolation),this.options.interpolation)),c.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=c.keySeparator),c.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=c.nsSeparator);function g(_){return _?typeof _=="function"?new _:_:null}if(!this.options.isClone){this.modules.logger?Hn.init(g(this.modules.logger),this.options):Hn.init(null,this.options);var w;this.modules.formatter?w=this.modules.formatter:typeof Intl<"u"&&(w=rh);var S=new Xd(this.options);this.store=new Qg(this.options.resources,this.options);var v=this.services;v.logger=Hn,v.resourceStore=this.store,v.languageUtils=S,v.pluralResolver=new eh(S,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),w&&(!this.options.interpolation.format||this.options.interpolation.format===p.interpolation.format)&&(v.formatter=g(w),v.formatter.init(v,this.options),this.options.interpolation.format=v.formatter.format.bind(v.formatter)),v.interpolator=new nh(this.options),v.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},v.backendConnector=new lh(g(this.modules.backend),v.resourceStore,v,this.options),v.backendConnector.on("*",function(_){for(var y=arguments.length,x=new Array(y>1?y-1:0),j=1;j<y;j++)x[j-1]=arguments[j];s.emit.apply(s,[_].concat(x))}),this.modules.languageDetector&&(v.languageDetector=g(this.modules.languageDetector),v.languageDetector.init&&v.languageDetector.init(v,this.options.detection,this.options)),this.modules.i18nFormat&&(v.i18nFormat=g(this.modules.i18nFormat),v.i18nFormat.init&&v.i18nFormat.init(this)),this.translator=new Jd(this.services,this.options),this.translator.on("*",function(_){for(var y=arguments.length,x=new Array(y>1?y-1:0),j=1;j<y;j++)x[j-1]=arguments[j];s.emit.apply(s,[_].concat(x))}),this.modules.external.forEach(function(_){_.init&&_.init(s)})}if(this.format=this.options.interpolation.format,f||(f=Oa),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){var L=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);L.length>0&&L[0]!=="dev"&&(this.options.lng=L[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined");var T=["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"];T.forEach(function(_){s[_]=function(){var y;return(y=s.store)[_].apply(y,arguments)}});var A=["addResource","addResources","addResourceBundle","removeResourceBundle"];A.forEach(function(_){s[_]=function(){var y;return(y=s.store)[_].apply(y,arguments),s}});var O=io(),R=function(){var y=function(j,P){s.isInitialized&&!s.initializedStoreOnce&&s.logger.warn("init: i18next is already initialized. You should call init just once!"),s.isInitialized=!0,s.options.isClone||s.logger.log("initialized",s.options),s.emit("initialized",s.options),O.resolve(P),f(j,P)};if(s.languages&&s.options.compatibilityAPI!=="v1"&&!s.isInitialized)return y(null,s.t.bind(s));s.changeLanguage(s.options.lng,y)};return this.options.resources||!this.options.initImmediate?R():setTimeout(R,0),O}},{key:"loadResources",value:function(s){var c=this,f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Oa,p=f,g=typeof s=="string"?s:this.language;if(typeof s=="function"&&(p=s),!this.options.resources||this.options.partialBundledLanguages){if(g&&g.toLowerCase()==="cimode")return p();var w=[],S=function(T){if(T){var A=c.services.languageUtils.toResolveHierarchy(T);A.forEach(function(O){w.indexOf(O)<0&&w.push(O)})}};if(g)S(g);else{var v=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);v.forEach(function(L){return S(L)})}this.options.preload&&this.options.preload.forEach(function(L){return S(L)}),this.services.backendConnector.load(w,this.options.ns,function(L){!L&&!c.resolvedLanguage&&c.language&&c.setResolvedLanguage(c.language),p(L)})}else p(null)}},{key:"reloadResources",value:function(s,c,f){var p=io();return s||(s=this.languages),c||(c=this.options.ns),f||(f=Oa),this.services.backendConnector.reload(s,c,function(g){p.resolve(),f(g)}),p}},{key:"use",value:function(s){if(!s)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!s.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return s.type==="backend"&&(this.modules.backend=s),(s.type==="logger"||s.log&&s.warn&&s.error)&&(this.modules.logger=s),s.type==="languageDetector"&&(this.modules.languageDetector=s),s.type==="i18nFormat"&&(this.modules.i18nFormat=s),s.type==="postProcessor"&&ep.addPostProcessor(s),s.type==="formatter"&&(this.modules.formatter=s),s.type==="3rdParty"&&this.modules.external.push(s),this}},{key:"setResolvedLanguage",value:function(s){if(!(!s||!this.languages)&&!(["cimode","dev"].indexOf(s)>-1))for(var c=0;c<this.languages.length;c++){var f=this.languages[c];if(!(["cimode","dev"].indexOf(f)>-1)&&this.store.hasLanguageSomeTranslations(f)){this.resolvedLanguage=f;break}}}},{key:"changeLanguage",value:function(s,c){var f=this;this.isLanguageChangingTo=s;var p=io();this.emit("languageChanging",s);var g=function(L){f.language=L,f.languages=f.services.languageUtils.toResolveHierarchy(L),f.resolvedLanguage=void 0,f.setResolvedLanguage(L)},w=function(L,T){T?(g(T),f.translator.changeLanguage(T),f.isLanguageChangingTo=void 0,f.emit("languageChanged",T),f.logger.log("languageChanged",T)):f.isLanguageChangingTo=void 0,p.resolve(function(){return f.t.apply(f,arguments)}),c&&c(L,function(){return f.t.apply(f,arguments)})},S=function(L){!s&&!L&&f.services.languageDetector&&(L=[]);var T=typeof L=="string"?L:f.services.languageUtils.getBestMatchFromCodes(L);T&&(f.language||g(T),f.translator.language||f.translator.changeLanguage(T),f.services.languageDetector&&f.services.languageDetector.cacheUserLanguage&&f.services.languageDetector.cacheUserLanguage(T)),f.loadResources(T,function(A){w(A,T)})};return!s&&this.services.languageDetector&&!this.services.languageDetector.async?S(this.services.languageDetector.detect()):!s&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(S):this.services.languageDetector.detect(S):S(s),p}},{key:"getFixedT",value:function(s,c,f){var p=this,g=function w(S,v){var L;if(xn(v)!=="object"){for(var T=arguments.length,A=new Array(T>2?T-2:0),O=2;O<T;O++)A[O-2]=arguments[O];L=p.options.overloadTranslationOptionHandler([S,v].concat(A))}else L=$n({},v);L.lng=L.lng||w.lng,L.lngs=L.lngs||w.lngs,L.ns=L.ns||w.ns,L.keyPrefix=L.keyPrefix||f||w.keyPrefix;var R=p.options.keySeparator||".",_;return L.keyPrefix&&Array.isArray(S)?_=S.map(function(y){return"".concat(L.keyPrefix).concat(R).concat(y)}):_=L.keyPrefix?"".concat(L.keyPrefix).concat(R).concat(S):S,p.t(_,L)};return typeof s=="string"?g.lng=s:g.lngs=s,g.ns=c,g.keyPrefix=f,g}},{key:"t",value:function(){var s;return this.translator&&(s=this.translator).translate.apply(s,arguments)}},{key:"exists",value:function(){var s;return this.translator&&(s=this.translator).exists.apply(s,arguments)}},{key:"setDefaultNamespace",value:function(s){this.options.defaultNS=s}},{key:"hasLoadedNamespace",value:function(s){var c=this,f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var p=this.resolvedLanguage||this.languages[0],g=this.options?this.options.fallbackLng:!1,w=this.languages[this.languages.length-1];if(p.toLowerCase()==="cimode")return!0;var S=function(T,A){var O=c.services.backendConnector.state["".concat(T,"|").concat(A)];return O===-1||O===2};if(f.precheck){var v=f.precheck(this,S);if(v!==void 0)return v}return!!(this.hasResourceBundle(p,s)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||S(p,s)&&(!g||S(w,s)))}},{key:"loadNamespaces",value:function(s,c){var f=this,p=io();return this.options.ns?(typeof s=="string"&&(s=[s]),s.forEach(function(g){f.options.ns.indexOf(g)<0&&f.options.ns.push(g)}),this.loadResources(function(g){p.resolve(),c&&c(g)}),p):(c&&c(),Promise.resolve())}},{key:"loadLanguages",value:function(s,c){var f=io();typeof s=="string"&&(s=[s]);var p=this.options.preload||[],g=s.filter(function(w){return p.indexOf(w)<0});return g.length?(this.options.preload=p.concat(g),this.loadResources(function(w){f.resolve(),c&&c(w)}),f):(c&&c(),Promise.resolve())}},{key:"dir",value:function(s){if(s||(s=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!s)return"rtl";var c=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],f=this.services&&this.services.languageUtils||new Xd(of());return c.indexOf(f.getLanguagePartFromCode(s))>-1||s.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}},{key:"cloneInstance",value:function(){var s=this,c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Oa,p=$n($n($n({},this.options),c),{isClone:!0}),g=new a(p);(c.debug!==void 0||c.prefix!==void 0)&&(g.logger=g.logger.clone(c));var w=["store","services","language"];return w.forEach(function(S){g[S]=s[S]}),g.services=$n({},this.services),g.services.utils={hasLoadedNamespace:g.hasLoadedNamespace.bind(g)},g.translator=new Jd(g.services,g.options),g.translator.on("*",function(S){for(var v=arguments.length,L=new Array(v>1?v-1:0),T=1;T<v;T++)L[T-1]=arguments[T];g.emit.apply(g,[S].concat(L))}),g.init(p,f),g.translator.options=g.options,g.translator.backendConnector.services.utils={hasLoadedNamespace:g.hasLoadedNamespace.bind(g)},g}},{key:"toJSON",value:function(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}]),a})(Pt);Kn(Fa,"createInstance",function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;return new Fa(r,o)});var Xe=Fa.createInstance();Xe.createInstance=Fa.createInstance;Xe.createInstance;Xe.dir;Xe.init;Xe.loadResources;Xe.reloadResources;Xe.use;Xe.changeLanguage;Xe.getFixedT;Xe.t;Xe.exists;Xe.setDefaultNamespace;Xe.hasLoadedNamespace;Xe.loadNamespaces;Xe.loadLanguages;var sf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function dh(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ul={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uf;function fh(){if(uf)return de;uf=1;var r=Symbol.for("react.element"),o=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),v=Symbol.iterator;function L(k){return k===null||typeof k!="object"?null:(k=v&&k[v]||k["@@iterator"],typeof k=="function"?k:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,O={};function R(k,M,Y){this.props=k,this.context=M,this.refs=O,this.updater=Y||T}R.prototype.isReactComponent={},R.prototype.setState=function(k,M){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,M,"setState")},R.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function _(){}_.prototype=R.prototype;function y(k,M,Y){this.props=k,this.context=M,this.refs=O,this.updater=Y||T}var x=y.prototype=new _;x.constructor=y,A(x,R.prototype),x.isPureReactComponent=!0;var j=Array.isArray,P=Object.prototype.hasOwnProperty,I={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function J(k,M,Y){var se,re={},fe=null,le=null;if(M!=null)for(se in M.ref!==void 0&&(le=M.ref),M.key!==void 0&&(fe=""+M.key),M)P.call(M,se)&&!D.hasOwnProperty(se)&&(re[se]=M[se]);var ce=arguments.length-2;if(ce===1)re.children=Y;else if(1<ce){for(var ue=Array(ce),je=0;je<ce;je++)ue[je]=arguments[je+2];re.children=ue}if(k&&k.defaultProps)for(se in ce=k.defaultProps,ce)re[se]===void 0&&(re[se]=ce[se]);return{$$typeof:r,type:k,key:fe,ref:le,props:re,_owner:I.current}}function Q(k,M){return{$$typeof:r,type:k.type,key:M,ref:k.ref,props:k.props,_owner:k._owner}}function te(k){return typeof k=="object"&&k!==null&&k.$$typeof===r}function ge(k){var M={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Y){return M[Y]})}var Ce=/\/+/g;function $e(k,M){return typeof k=="object"&&k!==null&&k.key!=null?ge(""+k.key):M.toString(36)}function Re(k,M,Y,se,re){var fe=typeof k;(fe==="undefined"||fe==="boolean")&&(k=null);var le=!1;if(k===null)le=!0;else switch(fe){case"string":case"number":le=!0;break;case"object":switch(k.$$typeof){case r:case o:le=!0}}if(le)return le=k,re=re(le),k=se===""?"."+$e(le,0):se,j(re)?(Y="",k!=null&&(Y=k.replace(Ce,"$&/")+"/"),Re(re,M,Y,"",function(je){return je})):re!=null&&(te(re)&&(re=Q(re,Y+(!re.key||le&&le.key===re.key?"":(""+re.key).replace(Ce,"$&/")+"/")+k)),M.push(re)),1;if(le=0,se=se===""?".":se+":",j(k))for(var ce=0;ce<k.length;ce++){fe=k[ce];var ue=se+$e(fe,ce);le+=Re(fe,M,Y,ue,re)}else if(ue=L(k),typeof ue=="function")for(k=ue.call(k),ce=0;!(fe=k.next()).done;)fe=fe.value,ue=se+$e(fe,ce++),le+=Re(fe,M,Y,ue,re);else if(fe==="object")throw M=String(k),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.");return le}function Ze(k,M,Y){if(k==null)return k;var se=[],re=0;return Re(k,se,"","",function(fe){return M.call(Y,fe,re++)}),se}function ze(k){if(k._status===-1){var M=k._result;M=M(),M.then(function(Y){(k._status===0||k._status===-1)&&(k._status=1,k._result=Y)},function(Y){(k._status===0||k._status===-1)&&(k._status=2,k._result=Y)}),k._status===-1&&(k._status=0,k._result=M)}if(k._status===1)return k._result.default;throw k._result}var he={current:null},W={transition:null},X={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:W,ReactCurrentOwner:I};return de.Children={map:Ze,forEach:function(k,M,Y){Ze(k,function(){M.apply(this,arguments)},Y)},count:function(k){var M=0;return Ze(k,function(){M++}),M},toArray:function(k){return Ze(k,function(M){return M})||[]},only:function(k){if(!te(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},de.Component=R,de.Fragment=a,de.Profiler=s,de.PureComponent=y,de.StrictMode=l,de.Suspense=g,de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,de.cloneElement=function(k,M,Y){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var se=A({},k.props),re=k.key,fe=k.ref,le=k._owner;if(M!=null){if(M.ref!==void 0&&(fe=M.ref,le=I.current),M.key!==void 0&&(re=""+M.key),k.type&&k.type.defaultProps)var ce=k.type.defaultProps;for(ue in M)P.call(M,ue)&&!D.hasOwnProperty(ue)&&(se[ue]=M[ue]===void 0&&ce!==void 0?ce[ue]:M[ue])}var ue=arguments.length-2;if(ue===1)se.children=Y;else if(1<ue){ce=Array(ue);for(var je=0;je<ue;je++)ce[je]=arguments[je+2];se.children=ce}return{$$typeof:r,type:k.type,key:re,ref:fe,props:se,_owner:le}},de.createContext=function(k){return k={$$typeof:f,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:c,_context:k},k.Consumer=k},de.createElement=J,de.createFactory=function(k){var M=J.bind(null,k);return M.type=k,M},de.createRef=function(){return{current:null}},de.forwardRef=function(k){return{$$typeof:p,render:k}},de.isValidElement=te,de.lazy=function(k){return{$$typeof:S,_payload:{_status:-1,_result:k},_init:ze}},de.memo=function(k,M){return{$$typeof:w,type:k,compare:M===void 0?null:M}},de.startTransition=function(k){var M=W.transition;W.transition={};try{k()}finally{W.transition=M}},de.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},de.useCallback=function(k,M){return he.current.useCallback(k,M)},de.useContext=function(k){return he.current.useContext(k)},de.useDebugValue=function(){},de.useDeferredValue=function(k){return he.current.useDeferredValue(k)},de.useEffect=function(k,M){return he.current.useEffect(k,M)},de.useId=function(){return he.current.useId()},de.useImperativeHandle=function(k,M,Y){return he.current.useImperativeHandle(k,M,Y)},de.useInsertionEffect=function(k,M){return he.current.useInsertionEffect(k,M)},de.useLayoutEffect=function(k,M){return he.current.useLayoutEffect(k,M)},de.useMemo=function(k,M){return he.current.useMemo(k,M)},de.useReducer=function(k,M,Y){return he.current.useReducer(k,M,Y)},de.useRef=function(k){return he.current.useRef(k)},de.useState=function(k){return he.current.useState(k)},de.useSyncExternalStore=function(k,M,Y){return he.current.useSyncExternalStore(k,M,Y)},de.useTransition=function(){return he.current.useTransition()},de.version="18.2.0",de}var cf;function np(){return cf||(cf=1,Ul.exports=fh()),Ul.exports}var $=np();const zs=dh($),df=jg({__proto__:null,default:zs},[$]);function ph(){if(console&&console.warn){for(var r,o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];typeof a[0]=="string"&&(a[0]="react-i18next:: ".concat(a[0])),(r=console).warn.apply(r,a)}}var ff={};function es(){for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];typeof o[0]=="string"&&ff[o[0]]||(typeof o[0]=="string"&&(ff[o[0]]=new Date),ph.apply(void 0,o))}function pf(r,o,a){r.loadNamespaces(o,function(){if(r.isInitialized)a();else{var l=function s(){setTimeout(function(){r.off("initialized",s)},0),a()};r.on("initialized",l)}})}function mh(r,o){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l=o.languages[0],s=o.options?o.options.fallbackLng:!1,c=o.languages[o.languages.length-1];if(l.toLowerCase()==="cimode")return!0;var f=function(g,w){var S=o.services.backendConnector.state["".concat(g,"|").concat(w)];return S===-1||S===2};return a.bindI18n&&a.bindI18n.indexOf("languageChanging")>-1&&o.services.backendConnector.backend&&o.isLanguageChangingTo&&!f(o.isLanguageChangingTo,r)?!1:!!(o.hasResourceBundle(l,r)||!o.services.backendConnector.backend||o.options.resources&&!o.options.partialBundledLanguages||f(l,r)&&(!s||f(c,r)))}function gh(r,o){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!o.languages||!o.languages.length)return es("i18n.languages were undefined or empty",o.languages),!0;var l=o.options.ignoreJSONStructure!==void 0;return l?o.hasLoadedNamespace(r,{precheck:function(c,f){if(a.bindI18n&&a.bindI18n.indexOf("languageChanging")>-1&&c.services.backendConnector.backend&&c.isLanguageChangingTo&&!f(c.isLanguageChangingTo,r))return!1}}):mh(r,o,a)}var hh=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,yh={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},vh=function(o){return yh[o]},wh=function(o){return o.replace(hh,vh)};function mf(r,o){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);o&&(l=l.filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable})),a.push.apply(a,l)}return a}function gf(r){for(var o=1;o<arguments.length;o++){var a=arguments[o]!=null?arguments[o]:{};o%2?mf(Object(a),!0).forEach(function(l){Kn(r,l,a[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):mf(Object(a)).forEach(function(l){Object.defineProperty(r,l,Object.getOwnPropertyDescriptor(a,l))})}return r}var ns={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:wh};function kh(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};ns=gf(gf({},ns),r)}function bh(){return ns}var tp;function xh(r){tp=r}function Sh(){return tp}var Ch={type:"3rdParty",init:function(o){kh(o.options.react),xh(o)}},Eh=$.createContext(),Ph=(function(){function r(){Nn(this,r),this.usedNamespaces={}}return jn(r,[{key:"addUsedNamespaces",value:function(a){var l=this;a.forEach(function(s){l.usedNamespaces[s]||(l.usedNamespaces[s]=!0)})}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),r})();function Oh(r,o){var a=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(a!=null){var l,s,c,f,p=[],g=!0,w=!1;try{if(c=(a=a.call(r)).next,o!==0)for(;!(g=(l=c.call(a)).done)&&(p.push(l.value),p.length!==o);g=!0);}catch(S){w=!0,s=S}finally{try{if(!g&&a.return!=null&&(f=a.return(),Object(f)!==f))return}finally{if(w)throw s}}return p}}function Lh(r,o){return Yf(r)||Oh(r,o)||qf(r,o)||Jf()}function hf(r,o){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);o&&(l=l.filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable})),a.push.apply(a,l)}return a}function Bl(r){for(var o=1;o<arguments.length;o++){var a=arguments[o]!=null?arguments[o]:{};o%2?hf(Object(a),!0).forEach(function(l){Kn(r,l,a[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):hf(Object(a)).forEach(function(l){Object.defineProperty(r,l,Object.getOwnPropertyDescriptor(a,l))})}return r}var Rh=function(o,a){var l=$.useRef();return $.useEffect(function(){l.current=o},[o,a]),l.current};function _s(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=o.i18n,l=$.useContext(Eh)||{},s=l.i18n,c=l.defaultNS,f=a||s||Sh();if(f&&!f.reportNamespaces&&(f.reportNamespaces=new Ph),!f){es("You will need to pass in an i18next instance by using initReactI18next");var p=function(Q,te){return typeof te=="string"?te:te&&xn(te)==="object"&&typeof te.defaultValue=="string"?te.defaultValue:Array.isArray(Q)?Q[Q.length-1]:Q},g=[p,{},!1];return g.t=p,g.i18n={},g.ready=!1,g}f.options.react&&f.options.react.wait!==void 0&&es("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var w=Bl(Bl(Bl({},bh()),f.options.react),o),S=w.useSuspense,v=w.keyPrefix,L=c||f.options&&f.options.defaultNS;L=typeof L=="string"?[L]:L||["translation"],f.reportNamespaces.addUsedNamespaces&&f.reportNamespaces.addUsedNamespaces(L);var T=(f.isInitialized||f.initializedStoreOnce)&&L.every(function(J){return gh(J,f,w)});function A(){return f.getFixedT(null,w.nsMode==="fallback"?L:L[0],v)}var O=$.useState(A),R=Lh(O,2),_=R[0],y=R[1],x=L.join(),j=Rh(x),P=$.useRef(!0);$.useEffect(function(){var J=w.bindI18n,Q=w.bindI18nStore;P.current=!0,!T&&!S&&pf(f,L,function(){P.current&&y(A)}),T&&j&&j!==x&&P.current&&y(A);function te(){P.current&&y(A)}return J&&f&&f.on(J,te),Q&&f&&f.store.on(Q,te),function(){P.current=!1,J&&f&&J.split(" ").forEach(function(ge){return f.off(ge,te)}),Q&&f&&Q.split(" ").forEach(function(ge){return f.store.off(ge,te)})}},[f,x]);var I=$.useRef(!0);$.useEffect(function(){P.current&&!I.current&&y(A),I.current=!1},[f,v]);var D=[_,f,T];if(D.t=_,D.i18n=f,D.ready=T,T||!T&&!S)return D;throw new Promise(function(J){pf(f,L,function(){J()})})}const zh={EA:"文章",indicator:"代码片段",projects:"项目"},_h={title:"👋 你好，我是Harrie",description:"一个全栈的Web开发者，主要专注于Node.js、Vue、React等技术",link:"开始阅读"},Nh="yyyy / MM / dd",jh={title:"评论",btn:"评论",owner:"作者"},Th={title:"项目"},Fh={tab:zh,intro:_h,dateFormat:Nh,comment:jh,projects:Th},Ah={translation:Fh},Ih={EA:"EA",indicator:"Indicator",projects:"Projects"},Mh={title:"👋 Hi! I'm Agus Pujianto",description:"Founder of Dagangduit.com — creating smart trading systems, expert advisors, and AI-powered financial tools to help traders grow consistently.",link:"Explore Projects"},$h="MMM dd, yyyy",Dh={title:"Comments",btn:"Click to Comment",owner:"Author"},Uh={title:"Projects"},Bh={tab:Ih,intro:Mh,dateFormat:$h,comment:Dh,projects:Uh},Hh={translation:Bh},Wh="translation",Vh={cn:Ah,en:Hh},Kh=navigator.language==="zh-CN"?"cn":"en",Qh=localStorage.getItem("language");Xe.use(Ch).init({resources:Vh,defaultNS:Wh,lng:Qh||Kh});var La={},Hl={exports:{}},un={},Wl={exports:{}},Vl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yf;function Gh(){return yf||(yf=1,(function(r){function o(W,X){var k=W.length;W.push(X);e:for(;0<k;){var M=k-1>>>1,Y=W[M];if(0<s(Y,X))W[M]=X,W[k]=Y,k=M;else break e}}function a(W){return W.length===0?null:W[0]}function l(W){if(W.length===0)return null;var X=W[0],k=W.pop();if(k!==X){W[0]=k;e:for(var M=0,Y=W.length,se=Y>>>1;M<se;){var re=2*(M+1)-1,fe=W[re],le=re+1,ce=W[le];if(0>s(fe,k))le<Y&&0>s(ce,fe)?(W[M]=ce,W[le]=k,M=le):(W[M]=fe,W[re]=k,M=re);else if(le<Y&&0>s(ce,k))W[M]=ce,W[le]=k,M=le;else break e}}return X}function s(W,X){var k=W.sortIndex-X.sortIndex;return k!==0?k:W.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var g=[],w=[],S=1,v=null,L=3,T=!1,A=!1,O=!1,R=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(W){for(var X=a(w);X!==null;){if(X.callback===null)l(w);else if(X.startTime<=W)l(w),X.sortIndex=X.expirationTime,o(g,X);else break;X=a(w)}}function j(W){if(O=!1,x(W),!A)if(a(g)!==null)A=!0,ze(P);else{var X=a(w);X!==null&&he(j,X.startTime-W)}}function P(W,X){A=!1,O&&(O=!1,_(J),J=-1),T=!0;var k=L;try{for(x(X),v=a(g);v!==null&&(!(v.expirationTime>X)||W&&!ge());){var M=v.callback;if(typeof M=="function"){v.callback=null,L=v.priorityLevel;var Y=M(v.expirationTime<=X);X=r.unstable_now(),typeof Y=="function"?v.callback=Y:v===a(g)&&l(g),x(X)}else l(g);v=a(g)}if(v!==null)var se=!0;else{var re=a(w);re!==null&&he(j,re.startTime-X),se=!1}return se}finally{v=null,L=k,T=!1}}var I=!1,D=null,J=-1,Q=5,te=-1;function ge(){return!(r.unstable_now()-te<Q)}function Ce(){if(D!==null){var W=r.unstable_now();te=W;var X=!0;try{X=D(!0,W)}finally{X?$e():(I=!1,D=null)}}else I=!1}var $e;if(typeof y=="function")$e=function(){y(Ce)};else if(typeof MessageChannel<"u"){var Re=new MessageChannel,Ze=Re.port2;Re.port1.onmessage=Ce,$e=function(){Ze.postMessage(null)}}else $e=function(){R(Ce,0)};function ze(W){D=W,I||(I=!0,$e())}function he(W,X){J=R(function(){W(r.unstable_now())},X)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(W){W.callback=null},r.unstable_continueExecution=function(){A||T||(A=!0,ze(P))},r.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<W?Math.floor(1e3/W):5},r.unstable_getCurrentPriorityLevel=function(){return L},r.unstable_getFirstCallbackNode=function(){return a(g)},r.unstable_next=function(W){switch(L){case 1:case 2:case 3:var X=3;break;default:X=L}var k=L;L=X;try{return W()}finally{L=k}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(W,X){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var k=L;L=W;try{return X()}finally{L=k}},r.unstable_scheduleCallback=function(W,X,k){var M=r.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?M+k:M):k=M,W){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=k+Y,W={id:S++,callback:X,priorityLevel:W,startTime:k,expirationTime:Y,sortIndex:-1},k>M?(W.sortIndex=k,o(w,W),a(g)===null&&W===a(w)&&(O?(_(J),J=-1):O=!0,he(j,k-M))):(W.sortIndex=Y,o(g,W),A||T||(A=!0,ze(P))),W},r.unstable_shouldYield=ge,r.unstable_wrapCallback=function(W){var X=L;return function(){var k=L;L=X;try{return W.apply(this,arguments)}finally{L=k}}}})(Vl)),Vl}var vf;function Yh(){return vf||(vf=1,Wl.exports=Gh()),Wl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wf;function qh(){if(wf)return un;wf=1;var r=np(),o=Yh();function a(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,s={};function c(e,n){f(e,n),f(e+"Capture",n)}function f(e,n){for(s[e]=n,e=0;e<n.length;e++)l.add(n[e])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,S={},v={};function L(e){return g.call(v,e)?!0:g.call(S,e)?!1:w.test(e)?v[e]=!0:(S[e]=!0,!1)}function T(e,n,t,i){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function A(e,n,t,i){if(n===null||typeof n>"u"||T(e,n,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function O(e,n,t,i,u,d,m){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=i,this.attributeNamespace=u,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=d,this.removeEmptyString=m}var R={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){R[e]=new O(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];R[n]=new O(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){R[e]=new O(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){R[e]=new O(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){R[e]=new O(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){R[e]=new O(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){R[e]=new O(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){R[e]=new O(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){R[e]=new O(e,5,!1,e.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(_,y);R[n]=new O(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(_,y);R[n]=new O(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(_,y);R[n]=new O(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){R[e]=new O(e,1,!1,e.toLowerCase(),null,!1,!1)}),R.xlinkHref=new O("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){R[e]=new O(e,1,!1,e.toLowerCase(),null,!0,!0)});function x(e,n,t,i){var u=R.hasOwnProperty(n)?R[n]:null;(u!==null?u.type!==0:i||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(A(n,t,u,i)&&(t=null),i||u===null?L(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):u.mustUseProperty?e[u.propertyName]=t===null?u.type===3?!1:"":t:(n=u.attributeName,i=u.attributeNamespace,t===null?e.removeAttribute(n):(u=u.type,t=u===3||u===4&&t===!0?"":""+t,i?e.setAttributeNS(i,n,t):e.setAttribute(n,t))))}var j=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),I=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),te=Symbol.for("react.provider"),ge=Symbol.for("react.context"),Ce=Symbol.for("react.forward_ref"),$e=Symbol.for("react.suspense"),Re=Symbol.for("react.suspense_list"),Ze=Symbol.for("react.memo"),ze=Symbol.for("react.lazy"),he=Symbol.for("react.offscreen"),W=Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=W&&e[W]||e["@@iterator"],typeof e=="function"?e:null)}var k=Object.assign,M;function Y(e){if(M===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);M=n&&n[1]||""}return`
`+M+e}var se=!1;function re(e,n){if(!e||se)return"";se=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(F){var i=F}Reflect.construct(e,[],n)}else{try{n.call()}catch(F){i=F}e.call(n.prototype)}else{try{throw Error()}catch(F){i=F}e()}}catch(F){if(F&&i&&typeof F.stack=="string"){for(var u=F.stack.split(`
`),d=i.stack.split(`
`),m=u.length-1,h=d.length-1;1<=m&&0<=h&&u[m]!==d[h];)h--;for(;1<=m&&0<=h;m--,h--)if(u[m]!==d[h]){if(m!==1||h!==1)do if(m--,h--,0>h||u[m]!==d[h]){var b=`
`+u[m].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),b}while(1<=m&&0<=h);break}}}finally{se=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Y(e):""}function fe(e){switch(e.tag){case 5:return Y(e.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return e=re(e.type,!1),e;case 11:return e=re(e.type.render,!1),e;case 1:return e=re(e.type,!0),e;default:return""}}function le(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case I:return"Portal";case Q:return"Profiler";case J:return"StrictMode";case $e:return"Suspense";case Re:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ge:return(e.displayName||"Context")+".Consumer";case te:return(e._context.displayName||"Context")+".Provider";case Ce:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ze:return n=e.displayName||null,n!==null?n:le(e.type)||"Memo";case ze:n=e._payload,e=e._init;try{return le(e(n))}catch{}}return null}function ce(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(n);case 8:return n===J?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ue(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function je(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qn(e){var n=je(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),i=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var u=t.get,d=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(m){i=""+m,d.call(this,m)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(m){i=""+m},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ke(e){e._valueTracker||(e._valueTracker=Qn(e))}function rt(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),i="";return e&&(i=je(e)?e.checked?"true":"false":e.value),e=i,e!==t?(n.setValue(e),!0):!1}function Sn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Bt(e,n){var t=n.checked;return k({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Qs(e,n){var t=n.defaultValue==null?"":n.defaultValue,i=n.checked!=null?n.checked:n.defaultChecked;t=ue(n.value!=null?n.value:t),e._wrapperState={initialChecked:i,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Gs(e,n){n=n.checked,n!=null&&x(e,"checked",n,!1)}function Ga(e,n){Gs(e,n);var t=ue(n.value),i=n.type;if(t!=null)i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ya(e,n.type,t):n.hasOwnProperty("defaultValue")&&Ya(e,n.type,ue(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ys(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var i=n.type;if(!(i!=="submit"&&i!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Ya(e,n,t){(n!=="number"||Sn(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var br=Array.isArray;function Ht(e,n,t,i){if(e=e.options,n){n={};for(var u=0;u<t.length;u++)n["$"+t[u]]=!0;for(t=0;t<e.length;t++)u=n.hasOwnProperty("$"+e[t].value),e[t].selected!==u&&(e[t].selected=u),u&&i&&(e[t].defaultSelected=!0)}else{for(t=""+ue(t),n=null,u=0;u<e.length;u++){if(e[u].value===t){e[u].selected=!0,i&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function qa(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(a(91));return k({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function qs(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(a(92));if(br(t)){if(1<t.length)throw Error(a(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:ue(t)}}function Js(e,n){var t=ue(n.value),i=ue(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),i!=null&&(e.defaultValue=""+i)}function Xs(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Zs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ja(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Zs(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vo,eu=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,i,u){MSApp.execUnsafeLocalFunction(function(){return e(n,t,i,u)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(vo=vo||document.createElement("div"),vo.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=vo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function xr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ip=["Webkit","ms","Moz","O"];Object.keys(Sr).forEach(function(e){Ip.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Sr[n]=Sr[e]})});function nu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Sr.hasOwnProperty(e)&&Sr[e]?(""+n).trim():n+"px"}function tu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var i=t.indexOf("--")===0,u=nu(t,n[t],i);t==="float"&&(t="cssFloat"),i?e.setProperty(t,u):e[t]=u}}var Mp=k({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xa(e,n){if(n){if(Mp[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(a(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(a(61))}if(n.style!=null&&typeof n.style!="object")throw Error(a(62))}}function Za(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ei=null;function ni(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ti=null,Wt=null,Vt=null;function ru(e){if(e=Vr(e)){if(typeof ti!="function")throw Error(a(280));var n=e.stateNode;n&&(n=Uo(n),ti(e.stateNode,e.type,n))}}function ou(e){Wt?Vt?Vt.push(e):Vt=[e]:Wt=e}function au(){if(Wt){var e=Wt,n=Vt;if(Vt=Wt=null,ru(e),n)for(e=0;e<n.length;e++)ru(n[e])}}function iu(e,n){return e(n)}function lu(){}var ri=!1;function su(e,n,t){if(ri)return e(n,t);ri=!0;try{return iu(e,n,t)}finally{ri=!1,(Wt!==null||Vt!==null)&&(lu(),au())}}function Cr(e,n){var t=e.stateNode;if(t===null)return null;var i=Uo(t);if(i===null)return null;t=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(a(231,n,typeof t));return t}var oi=!1;if(p)try{var Er={};Object.defineProperty(Er,"passive",{get:function(){oi=!0}}),window.addEventListener("test",Er,Er),window.removeEventListener("test",Er,Er)}catch{oi=!1}function $p(e,n,t,i,u,d,m,h,b){var F=Array.prototype.slice.call(arguments,3);try{n.apply(t,F)}catch(B){this.onError(B)}}var Pr=!1,wo=null,ko=!1,ai=null,Dp={onError:function(e){Pr=!0,wo=e}};function Up(e,n,t,i,u,d,m,h,b){Pr=!1,wo=null,$p.apply(Dp,arguments)}function Bp(e,n,t,i,u,d,m,h,b){if(Up.apply(this,arguments),Pr){if(Pr){var F=wo;Pr=!1,wo=null}else throw Error(a(198));ko||(ko=!0,ai=F)}}function Lt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function uu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function cu(e){if(Lt(e)!==e)throw Error(a(188))}function Hp(e){var n=e.alternate;if(!n){if(n=Lt(e),n===null)throw Error(a(188));return n!==e?null:e}for(var t=e,i=n;;){var u=t.return;if(u===null)break;var d=u.alternate;if(d===null){if(i=u.return,i!==null){t=i;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===t)return cu(u),e;if(d===i)return cu(u),n;d=d.sibling}throw Error(a(188))}if(t.return!==i.return)t=u,i=d;else{for(var m=!1,h=u.child;h;){if(h===t){m=!0,t=u,i=d;break}if(h===i){m=!0,i=u,t=d;break}h=h.sibling}if(!m){for(h=d.child;h;){if(h===t){m=!0,t=d,i=u;break}if(h===i){m=!0,i=d,t=u;break}h=h.sibling}if(!m)throw Error(a(189))}}if(t.alternate!==i)throw Error(a(190))}if(t.tag!==3)throw Error(a(188));return t.stateNode.current===t?e:n}function du(e){return e=Hp(e),e!==null?fu(e):null}function fu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=fu(e);if(n!==null)return n;e=e.sibling}return null}var pu=o.unstable_scheduleCallback,mu=o.unstable_cancelCallback,Wp=o.unstable_shouldYield,Vp=o.unstable_requestPaint,_e=o.unstable_now,Kp=o.unstable_getCurrentPriorityLevel,ii=o.unstable_ImmediatePriority,gu=o.unstable_UserBlockingPriority,bo=o.unstable_NormalPriority,Qp=o.unstable_LowPriority,hu=o.unstable_IdlePriority,xo=null,Tn=null;function Gp(e){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(xo,e,void 0,(e.current.flags&128)===128)}catch{}}var Cn=Math.clz32?Math.clz32:Jp,Yp=Math.log,qp=Math.LN2;function Jp(e){return e>>>=0,e===0?32:31-(Yp(e)/qp|0)|0}var So=64,Co=4194304;function Or(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Eo(e,n){var t=e.pendingLanes;if(t===0)return 0;var i=0,u=e.suspendedLanes,d=e.pingedLanes,m=t&268435455;if(m!==0){var h=m&~u;h!==0?i=Or(h):(d&=m,d!==0&&(i=Or(d)))}else m=t&~u,m!==0?i=Or(m):d!==0&&(i=Or(d));if(i===0)return 0;if(n!==0&&n!==i&&(n&u)===0&&(u=i&-i,d=n&-n,u>=d||u===16&&(d&4194240)!==0))return n;if((i&4)!==0&&(i|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=i;0<n;)t=31-Cn(n),u=1<<t,i|=e[t],n&=~u;return i}function Xp(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zp(e,n){for(var t=e.suspendedLanes,i=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes;0<d;){var m=31-Cn(d),h=1<<m,b=u[m];b===-1?((h&t)===0||(h&i)!==0)&&(u[m]=Xp(h,n)):b<=n&&(e.expiredLanes|=h),d&=~h}}function li(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function yu(){var e=So;return So<<=1,(So&4194240)===0&&(So=64),e}function si(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Lr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Cn(n),e[n]=t}function em(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<t;){var u=31-Cn(t),d=1<<u;n[u]=0,i[u]=-1,e[u]=-1,t&=~d}}function ui(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var i=31-Cn(t),u=1<<i;u&n|e[i]&n&&(e[i]|=n),t&=~u}}var ke=0;function vu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var wu,ci,ku,bu,xu,di=!1,Po=[],ot=null,at=null,it=null,Rr=new Map,zr=new Map,lt=[],nm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Su(e,n){switch(e){case"focusin":case"focusout":ot=null;break;case"dragenter":case"dragleave":at=null;break;case"mouseover":case"mouseout":it=null;break;case"pointerover":case"pointerout":Rr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":zr.delete(n.pointerId)}}function _r(e,n,t,i,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:t,eventSystemFlags:i,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Vr(n),n!==null&&ci(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function tm(e,n,t,i,u){switch(n){case"focusin":return ot=_r(ot,e,n,t,i,u),!0;case"dragenter":return at=_r(at,e,n,t,i,u),!0;case"mouseover":return it=_r(it,e,n,t,i,u),!0;case"pointerover":var d=u.pointerId;return Rr.set(d,_r(Rr.get(d)||null,e,n,t,i,u)),!0;case"gotpointercapture":return d=u.pointerId,zr.set(d,_r(zr.get(d)||null,e,n,t,i,u)),!0}return!1}function Cu(e){var n=Rt(e.target);if(n!==null){var t=Lt(n);if(t!==null){if(n=t.tag,n===13){if(n=uu(t),n!==null){e.blockedOn=n,xu(e.priority,function(){ku(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=pi(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var i=new t.constructor(t.type,t);ei=i,t.target.dispatchEvent(i),ei=null}else return n=Vr(t),n!==null&&ci(n),e.blockedOn=t,!1;n.shift()}return!0}function Eu(e,n,t){Oo(e)&&t.delete(n)}function rm(){di=!1,ot!==null&&Oo(ot)&&(ot=null),at!==null&&Oo(at)&&(at=null),it!==null&&Oo(it)&&(it=null),Rr.forEach(Eu),zr.forEach(Eu)}function Nr(e,n){e.blockedOn===n&&(e.blockedOn=null,di||(di=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,rm)))}function jr(e){function n(u){return Nr(u,e)}if(0<Po.length){Nr(Po[0],e);for(var t=1;t<Po.length;t++){var i=Po[t];i.blockedOn===e&&(i.blockedOn=null)}}for(ot!==null&&Nr(ot,e),at!==null&&Nr(at,e),it!==null&&Nr(it,e),Rr.forEach(n),zr.forEach(n),t=0;t<lt.length;t++)i=lt[t],i.blockedOn===e&&(i.blockedOn=null);for(;0<lt.length&&(t=lt[0],t.blockedOn===null);)Cu(t),t.blockedOn===null&&lt.shift()}var Kt=j.ReactCurrentBatchConfig,Lo=!0;function om(e,n,t,i){var u=ke,d=Kt.transition;Kt.transition=null;try{ke=1,fi(e,n,t,i)}finally{ke=u,Kt.transition=d}}function am(e,n,t,i){var u=ke,d=Kt.transition;Kt.transition=null;try{ke=4,fi(e,n,t,i)}finally{ke=u,Kt.transition=d}}function fi(e,n,t,i){if(Lo){var u=pi(e,n,t,i);if(u===null)zi(e,n,i,Ro,t),Su(e,i);else if(tm(u,e,n,t,i))i.stopPropagation();else if(Su(e,i),n&4&&-1<nm.indexOf(e)){for(;u!==null;){var d=Vr(u);if(d!==null&&wu(d),d=pi(e,n,t,i),d===null&&zi(e,n,i,Ro,t),d===u)break;u=d}u!==null&&i.stopPropagation()}else zi(e,n,i,null,t)}}var Ro=null;function pi(e,n,t,i){if(Ro=null,e=ni(i),e=Rt(e),e!==null)if(n=Lt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=uu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ro=e,null}function Pu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kp()){case ii:return 1;case gu:return 4;case bo:case Qp:return 16;case hu:return 536870912;default:return 16}default:return 16}}var st=null,mi=null,zo=null;function Ou(){if(zo)return zo;var e,n=mi,t=n.length,i,u="value"in st?st.value:st.textContent,d=u.length;for(e=0;e<t&&n[e]===u[e];e++);var m=t-e;for(i=1;i<=m&&n[t-i]===u[d-i];i++);return zo=u.slice(e,1<i?1-i:void 0)}function _o(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function No(){return!0}function Lu(){return!1}function dn(e){function n(t,i,u,d,m){this._reactName=t,this._targetInst=u,this.type=i,this.nativeEvent=d,this.target=m,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(t=e[h],this[h]=t?t(d):d[h]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?No:Lu,this.isPropagationStopped=Lu,this}return k(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=No)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=No)},persist:function(){},isPersistent:No}),n}var Qt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gi=dn(Qt),Tr=k({},Qt,{view:0,detail:0}),im=dn(Tr),hi,yi,Fr,jo=k({},Tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fr&&(Fr&&e.type==="mousemove"?(hi=e.screenX-Fr.screenX,yi=e.screenY-Fr.screenY):yi=hi=0,Fr=e),hi)},movementY:function(e){return"movementY"in e?e.movementY:yi}}),Ru=dn(jo),lm=k({},jo,{dataTransfer:0}),sm=dn(lm),um=k({},Tr,{relatedTarget:0}),vi=dn(um),cm=k({},Qt,{animationName:0,elapsedTime:0,pseudoElement:0}),dm=dn(cm),fm=k({},Qt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pm=dn(fm),mm=k({},Qt,{data:0}),zu=dn(mm),gm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ym={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vm(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ym[e])?!!n[e]:!1}function wi(){return vm}var wm=k({},Tr,{key:function(e){if(e.key){var n=gm[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=_o(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wi,charCode:function(e){return e.type==="keypress"?_o(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_o(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),km=dn(wm),bm=k({},jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_u=dn(bm),xm=k({},Tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wi}),Sm=dn(xm),Cm=k({},Qt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Em=dn(Cm),Pm=k({},jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Om=dn(Pm),Lm=[9,13,27,32],ki=p&&"CompositionEvent"in window,Ar=null;p&&"documentMode"in document&&(Ar=document.documentMode);var Rm=p&&"TextEvent"in window&&!Ar,Nu=p&&(!ki||Ar&&8<Ar&&11>=Ar),ju=" ",Tu=!1;function Fu(e,n){switch(e){case"keyup":return Lm.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Au(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gt=!1;function zm(e,n){switch(e){case"compositionend":return Au(n);case"keypress":return n.which!==32?null:(Tu=!0,ju);case"textInput":return e=n.data,e===ju&&Tu?null:e;default:return null}}function _m(e,n){if(Gt)return e==="compositionend"||!ki&&Fu(e,n)?(e=Ou(),zo=mi=st=null,Gt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Nu&&n.locale!=="ko"?null:n.data;default:return null}}var Nm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Iu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Nm[e.type]:n==="textarea"}function Mu(e,n,t,i){ou(i),n=Mo(n,"onChange"),0<n.length&&(t=new gi("onChange","change",null,t,i),e.push({event:t,listeners:n}))}var Ir=null,Mr=null;function jm(e){tc(e,0)}function To(e){var n=Zt(e);if(rt(n))return e}function Tm(e,n){if(e==="change")return n}var $u=!1;if(p){var bi;if(p){var xi="oninput"in document;if(!xi){var Du=document.createElement("div");Du.setAttribute("oninput","return;"),xi=typeof Du.oninput=="function"}bi=xi}else bi=!1;$u=bi&&(!document.documentMode||9<document.documentMode)}function Uu(){Ir&&(Ir.detachEvent("onpropertychange",Bu),Mr=Ir=null)}function Bu(e){if(e.propertyName==="value"&&To(Mr)){var n=[];Mu(n,Mr,e,ni(e)),su(jm,n)}}function Fm(e,n,t){e==="focusin"?(Uu(),Ir=n,Mr=t,Ir.attachEvent("onpropertychange",Bu)):e==="focusout"&&Uu()}function Am(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return To(Mr)}function Im(e,n){if(e==="click")return To(n)}function Mm(e,n){if(e==="input"||e==="change")return To(n)}function $m(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var En=typeof Object.is=="function"?Object.is:$m;function $r(e,n){if(En(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),i=Object.keys(n);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var u=t[i];if(!g.call(n,u)||!En(e[u],n[u]))return!1}return!0}function Hu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wu(e,n){var t=Hu(e);e=0;for(var i;t;){if(t.nodeType===3){if(i=e+t.textContent.length,e<=n&&i>=n)return{node:t,offset:n-e};e=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Hu(t)}}function Vu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Vu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ku(){for(var e=window,n=Sn();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Sn(e.document)}return n}function Si(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Dm(e){var n=Ku(),t=e.focusedElem,i=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Vu(t.ownerDocument.documentElement,t)){if(i!==null&&Si(t)){if(n=i.start,e=i.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var u=t.textContent.length,d=Math.min(i.start,u);i=i.end===void 0?d:Math.min(i.end,u),!e.extend&&d>i&&(u=i,i=d,d=u),u=Wu(t,d);var m=Wu(t,i);u&&m&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==m.node||e.focusOffset!==m.offset)&&(n=n.createRange(),n.setStart(u.node,u.offset),e.removeAllRanges(),d>i?(e.addRange(n),e.extend(m.node,m.offset)):(n.setEnd(m.node,m.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Um=p&&"documentMode"in document&&11>=document.documentMode,Yt=null,Ci=null,Dr=null,Ei=!1;function Qu(e,n,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ei||Yt==null||Yt!==Sn(i)||(i=Yt,"selectionStart"in i&&Si(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Dr&&$r(Dr,i)||(Dr=i,i=Mo(Ci,"onSelect"),0<i.length&&(n=new gi("onSelect","select",null,n,t),e.push({event:n,listeners:i}),n.target=Yt)))}function Fo(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var qt={animationend:Fo("Animation","AnimationEnd"),animationiteration:Fo("Animation","AnimationIteration"),animationstart:Fo("Animation","AnimationStart"),transitionend:Fo("Transition","TransitionEnd")},Pi={},Gu={};p&&(Gu=document.createElement("div").style,"AnimationEvent"in window||(delete qt.animationend.animation,delete qt.animationiteration.animation,delete qt.animationstart.animation),"TransitionEvent"in window||delete qt.transitionend.transition);function Ao(e){if(Pi[e])return Pi[e];if(!qt[e])return e;var n=qt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Gu)return Pi[e]=n[t];return e}var Yu=Ao("animationend"),qu=Ao("animationiteration"),Ju=Ao("animationstart"),Xu=Ao("transitionend"),Zu=new Map,ec="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ut(e,n){Zu.set(e,n),c(n,[e])}for(var Oi=0;Oi<ec.length;Oi++){var Li=ec[Oi],Bm=Li.toLowerCase(),Hm=Li[0].toUpperCase()+Li.slice(1);ut(Bm,"on"+Hm)}ut(Yu,"onAnimationEnd"),ut(qu,"onAnimationIteration"),ut(Ju,"onAnimationStart"),ut("dblclick","onDoubleClick"),ut("focusin","onFocus"),ut("focusout","onBlur"),ut(Xu,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ur));function nc(e,n,t){var i=e.type||"unknown-event";e.currentTarget=t,Bp(i,n,void 0,e),e.currentTarget=null}function tc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var i=e[t],u=i.event;i=i.listeners;e:{var d=void 0;if(n)for(var m=i.length-1;0<=m;m--){var h=i[m],b=h.instance,F=h.currentTarget;if(h=h.listener,b!==d&&u.isPropagationStopped())break e;nc(u,h,F),d=b}else for(m=0;m<i.length;m++){if(h=i[m],b=h.instance,F=h.currentTarget,h=h.listener,b!==d&&u.isPropagationStopped())break e;nc(u,h,F),d=b}}}if(ko)throw e=ai,ko=!1,ai=null,e}function xe(e,n){var t=n[Ai];t===void 0&&(t=n[Ai]=new Set);var i=e+"__bubble";t.has(i)||(rc(n,e,2,!1),t.add(i))}function Ri(e,n,t){var i=0;n&&(i|=4),rc(t,e,i,n)}var Io="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[Io]){e[Io]=!0,l.forEach(function(t){t!=="selectionchange"&&(Wm.has(t)||Ri(t,!1,e),Ri(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Io]||(n[Io]=!0,Ri("selectionchange",!1,n))}}function rc(e,n,t,i){switch(Pu(n)){case 1:var u=om;break;case 4:u=am;break;default:u=fi}t=u.bind(null,n,t,e),u=void 0,!oi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),i?u!==void 0?e.addEventListener(n,t,{capture:!0,passive:u}):e.addEventListener(n,t,!0):u!==void 0?e.addEventListener(n,t,{passive:u}):e.addEventListener(n,t,!1)}function zi(e,n,t,i,u){var d=i;if((n&1)===0&&(n&2)===0&&i!==null)e:for(;;){if(i===null)return;var m=i.tag;if(m===3||m===4){var h=i.stateNode.containerInfo;if(h===u||h.nodeType===8&&h.parentNode===u)break;if(m===4)for(m=i.return;m!==null;){var b=m.tag;if((b===3||b===4)&&(b=m.stateNode.containerInfo,b===u||b.nodeType===8&&b.parentNode===u))return;m=m.return}for(;h!==null;){if(m=Rt(h),m===null)return;if(b=m.tag,b===5||b===6){i=d=m;continue e}h=h.parentNode}}i=i.return}su(function(){var F=d,B=ni(t),H=[];e:{var U=Zu.get(e);if(U!==void 0){var G=gi,Z=e;switch(e){case"keypress":if(_o(t)===0)break e;case"keydown":case"keyup":G=km;break;case"focusin":Z="focus",G=vi;break;case"focusout":Z="blur",G=vi;break;case"beforeblur":case"afterblur":G=vi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=Ru;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=sm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=Sm;break;case Yu:case qu:case Ju:G=dm;break;case Xu:G=Em;break;case"scroll":G=im;break;case"wheel":G=Om;break;case"copy":case"cut":case"paste":G=pm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=_u}var ee=(n&4)!==0,Ne=!ee&&e==="scroll",z=ee?U!==null?U+"Capture":null:U;ee=[];for(var C=F,N;C!==null;){N=C;var V=N.stateNode;if(N.tag===5&&V!==null&&(N=V,z!==null&&(V=Cr(C,z),V!=null&&ee.push(Hr(C,V,N)))),Ne)break;C=C.return}0<ee.length&&(U=new G(U,Z,null,t,B),H.push({event:U,listeners:ee}))}}if((n&7)===0){e:{if(U=e==="mouseover"||e==="pointerover",G=e==="mouseout"||e==="pointerout",U&&t!==ei&&(Z=t.relatedTarget||t.fromElement)&&(Rt(Z)||Z[Gn]))break e;if((G||U)&&(U=B.window===B?B:(U=B.ownerDocument)?U.defaultView||U.parentWindow:window,G?(Z=t.relatedTarget||t.toElement,G=F,Z=Z?Rt(Z):null,Z!==null&&(Ne=Lt(Z),Z!==Ne||Z.tag!==5&&Z.tag!==6)&&(Z=null)):(G=null,Z=F),G!==Z)){if(ee=Ru,V="onMouseLeave",z="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(ee=_u,V="onPointerLeave",z="onPointerEnter",C="pointer"),Ne=G==null?U:Zt(G),N=Z==null?U:Zt(Z),U=new ee(V,C+"leave",G,t,B),U.target=Ne,U.relatedTarget=N,V=null,Rt(B)===F&&(ee=new ee(z,C+"enter",Z,t,B),ee.target=N,ee.relatedTarget=Ne,V=ee),Ne=V,G&&Z)n:{for(ee=G,z=Z,C=0,N=ee;N;N=Jt(N))C++;for(N=0,V=z;V;V=Jt(V))N++;for(;0<C-N;)ee=Jt(ee),C--;for(;0<N-C;)z=Jt(z),N--;for(;C--;){if(ee===z||z!==null&&ee===z.alternate)break n;ee=Jt(ee),z=Jt(z)}ee=null}else ee=null;G!==null&&oc(H,U,G,ee,!1),Z!==null&&Ne!==null&&oc(H,Ne,Z,ee,!0)}}e:{if(U=F?Zt(F):window,G=U.nodeName&&U.nodeName.toLowerCase(),G==="select"||G==="input"&&U.type==="file")var ne=Tm;else if(Iu(U))if($u)ne=Mm;else{ne=Am;var oe=Fm}else(G=U.nodeName)&&G.toLowerCase()==="input"&&(U.type==="checkbox"||U.type==="radio")&&(ne=Im);if(ne&&(ne=ne(e,F))){Mu(H,ne,t,B);break e}oe&&oe(e,U,F),e==="focusout"&&(oe=U._wrapperState)&&oe.controlled&&U.type==="number"&&Ya(U,"number",U.value)}switch(oe=F?Zt(F):window,e){case"focusin":(Iu(oe)||oe.contentEditable==="true")&&(Yt=oe,Ci=F,Dr=null);break;case"focusout":Dr=Ci=Yt=null;break;case"mousedown":Ei=!0;break;case"contextmenu":case"mouseup":case"dragend":Ei=!1,Qu(H,t,B);break;case"selectionchange":if(Um)break;case"keydown":case"keyup":Qu(H,t,B)}var ae;if(ki)e:{switch(e){case"compositionstart":var ie="onCompositionStart";break e;case"compositionend":ie="onCompositionEnd";break e;case"compositionupdate":ie="onCompositionUpdate";break e}ie=void 0}else Gt?Fu(e,t)&&(ie="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(ie="onCompositionStart");ie&&(Nu&&t.locale!=="ko"&&(Gt||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&Gt&&(ae=Ou()):(st=B,mi="value"in st?st.value:st.textContent,Gt=!0)),oe=Mo(F,ie),0<oe.length&&(ie=new zu(ie,e,null,t,B),H.push({event:ie,listeners:oe}),ae?ie.data=ae:(ae=Au(t),ae!==null&&(ie.data=ae)))),(ae=Rm?zm(e,t):_m(e,t))&&(F=Mo(F,"onBeforeInput"),0<F.length&&(B=new zu("onBeforeInput","beforeinput",null,t,B),H.push({event:B,listeners:F}),B.data=ae))}tc(H,n)})}function Hr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Mo(e,n){for(var t=n+"Capture",i=[];e!==null;){var u=e,d=u.stateNode;u.tag===5&&d!==null&&(u=d,d=Cr(e,t),d!=null&&i.unshift(Hr(e,d,u)),d=Cr(e,n),d!=null&&i.push(Hr(e,d,u))),e=e.return}return i}function Jt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function oc(e,n,t,i,u){for(var d=n._reactName,m=[];t!==null&&t!==i;){var h=t,b=h.alternate,F=h.stateNode;if(b!==null&&b===i)break;h.tag===5&&F!==null&&(h=F,u?(b=Cr(t,d),b!=null&&m.unshift(Hr(t,b,h))):u||(b=Cr(t,d),b!=null&&m.push(Hr(t,b,h)))),t=t.return}m.length!==0&&e.push({event:n,listeners:m})}var Vm=/\r\n?/g,Km=/\u0000|\uFFFD/g;function ac(e){return(typeof e=="string"?e:""+e).replace(Vm,`
`).replace(Km,"")}function $o(e,n,t){if(n=ac(n),ac(e)!==n&&t)throw Error(a(425))}function Do(){}var _i=null,Ni=null;function ji(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ti=typeof setTimeout=="function"?setTimeout:void 0,Qm=typeof clearTimeout=="function"?clearTimeout:void 0,ic=typeof Promise=="function"?Promise:void 0,Gm=typeof queueMicrotask=="function"?queueMicrotask:typeof ic<"u"?function(e){return ic.resolve(null).then(e).catch(Ym)}:Ti;function Ym(e){setTimeout(function(){throw e})}function Fi(e,n){var t=n,i=0;do{var u=t.nextSibling;if(e.removeChild(t),u&&u.nodeType===8)if(t=u.data,t==="/$"){if(i===0){e.removeChild(u),jr(n);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=u}while(t);jr(n)}function ct(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function lc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Xt=Math.random().toString(36).slice(2),Fn="__reactFiber$"+Xt,Wr="__reactProps$"+Xt,Gn="__reactContainer$"+Xt,Ai="__reactEvents$"+Xt,qm="__reactListeners$"+Xt,Jm="__reactHandles$"+Xt;function Rt(e){var n=e[Fn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Gn]||t[Fn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=lc(e);e!==null;){if(t=e[Fn])return t;e=lc(e)}return n}e=t,t=e.parentNode}return null}function Vr(e){return e=e[Fn]||e[Gn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function Uo(e){return e[Wr]||null}var Ii=[],er=-1;function dt(e){return{current:e}}function Se(e){0>er||(e.current=Ii[er],Ii[er]=null,er--)}function be(e,n){er++,Ii[er]=e.current,e.current=n}var ft={},Qe=dt(ft),rn=dt(!1),zt=ft;function nr(e,n){var t=e.type.contextTypes;if(!t)return ft;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===n)return i.__reactInternalMemoizedMaskedChildContext;var u={},d;for(d in t)u[d]=n[d];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=u),u}function on(e){return e=e.childContextTypes,e!=null}function Bo(){Se(rn),Se(Qe)}function sc(e,n,t){if(Qe.current!==ft)throw Error(a(168));be(Qe,n),be(rn,t)}function uc(e,n,t){var i=e.stateNode;if(n=n.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var u in i)if(!(u in n))throw Error(a(108,ce(e)||"Unknown",u));return k({},t,i)}function Ho(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ft,zt=Qe.current,be(Qe,e),be(rn,rn.current),!0}function cc(e,n,t){var i=e.stateNode;if(!i)throw Error(a(169));t?(e=uc(e,n,zt),i.__reactInternalMemoizedMergedChildContext=e,Se(rn),Se(Qe),be(Qe,e)):Se(rn),be(rn,t)}var Yn=null,Wo=!1,Mi=!1;function dc(e){Yn===null?Yn=[e]:Yn.push(e)}function Xm(e){Wo=!0,dc(e)}function pt(){if(!Mi&&Yn!==null){Mi=!0;var e=0,n=ke;try{var t=Yn;for(ke=1;e<t.length;e++){var i=t[e];do i=i(!0);while(i!==null)}Yn=null,Wo=!1}catch(u){throw Yn!==null&&(Yn=Yn.slice(e+1)),pu(ii,pt),u}finally{ke=n,Mi=!1}}return null}var tr=[],rr=0,Vo=null,Ko=0,hn=[],yn=0,_t=null,qn=1,Jn="";function Nt(e,n){tr[rr++]=Ko,tr[rr++]=Vo,Vo=e,Ko=n}function fc(e,n,t){hn[yn++]=qn,hn[yn++]=Jn,hn[yn++]=_t,_t=e;var i=qn;e=Jn;var u=32-Cn(i)-1;i&=~(1<<u),t+=1;var d=32-Cn(n)+u;if(30<d){var m=u-u%5;d=(i&(1<<m)-1).toString(32),i>>=m,u-=m,qn=1<<32-Cn(n)+u|t<<u|i,Jn=d+e}else qn=1<<d|t<<u|i,Jn=e}function $i(e){e.return!==null&&(Nt(e,1),fc(e,1,0))}function Di(e){for(;e===Vo;)Vo=tr[--rr],tr[rr]=null,Ko=tr[--rr],tr[rr]=null;for(;e===_t;)_t=hn[--yn],hn[yn]=null,Jn=hn[--yn],hn[yn]=null,qn=hn[--yn],hn[yn]=null}var fn=null,pn=null,Ee=!1,Pn=null;function pc(e,n){var t=bn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function mc(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,fn=e,pn=ct(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,fn=e,pn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=_t!==null?{id:qn,overflow:Jn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=bn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,fn=e,pn=null,!0):!1;default:return!1}}function Ui(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bi(e){if(Ee){var n=pn;if(n){var t=n;if(!mc(e,n)){if(Ui(e))throw Error(a(418));n=ct(t.nextSibling);var i=fn;n&&mc(e,n)?pc(i,t):(e.flags=e.flags&-4097|2,Ee=!1,fn=e)}}else{if(Ui(e))throw Error(a(418));e.flags=e.flags&-4097|2,Ee=!1,fn=e}}}function gc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;fn=e}function Qo(e){if(e!==fn)return!1;if(!Ee)return gc(e),Ee=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ji(e.type,e.memoizedProps)),n&&(n=pn)){if(Ui(e))throw hc(),Error(a(418));for(;n;)pc(e,n),n=ct(n.nextSibling)}if(gc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){pn=ct(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}pn=null}}else pn=fn?ct(e.stateNode.nextSibling):null;return!0}function hc(){for(var e=pn;e;)e=ct(e.nextSibling)}function or(){pn=fn=null,Ee=!1}function Hi(e){Pn===null?Pn=[e]:Pn.push(e)}var Zm=j.ReactCurrentBatchConfig;function On(e,n){if(e&&e.defaultProps){n=k({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var Go=dt(null),Yo=null,ar=null,Wi=null;function Vi(){Wi=ar=Yo=null}function Ki(e){var n=Go.current;Se(Go),e._currentValue=n}function Qi(e,n,t){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===t)break;e=e.return}}function ir(e,n){Yo=e,Wi=ar=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(an=!0),e.firstContext=null)}function vn(e){var n=e._currentValue;if(Wi!==e)if(e={context:e,memoizedValue:n,next:null},ar===null){if(Yo===null)throw Error(a(308));ar=e,Yo.dependencies={lanes:0,firstContext:e}}else ar=ar.next=e;return n}var jt=null;function Gi(e){jt===null?jt=[e]:jt.push(e)}function yc(e,n,t,i){var u=n.interleaved;return u===null?(t.next=t,Gi(n)):(t.next=u.next,u.next=t),n.interleaved=t,Xn(e,i)}function Xn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var mt=!1;function Yi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Zn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function gt(e,n,t){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(pe&2)!==0){var u=i.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),i.pending=n,Xn(e,t)}return u=i.interleaved,u===null?(n.next=n,Gi(i)):(n.next=u.next,u.next=n),i.interleaved=n,Xn(e,t)}function qo(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,ui(e,t)}}function wc(e,n){var t=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var u=null,d=null;if(t=t.firstBaseUpdate,t!==null){do{var m={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};d===null?u=d=m:d=d.next=m,t=t.next}while(t!==null);d===null?u=d=n:d=d.next=n}else u=d=n;t={baseState:i.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:i.shared,effects:i.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Jo(e,n,t,i){var u=e.updateQueue;mt=!1;var d=u.firstBaseUpdate,m=u.lastBaseUpdate,h=u.shared.pending;if(h!==null){u.shared.pending=null;var b=h,F=b.next;b.next=null,m===null?d=F:m.next=F,m=b;var B=e.alternate;B!==null&&(B=B.updateQueue,h=B.lastBaseUpdate,h!==m&&(h===null?B.firstBaseUpdate=F:h.next=F,B.lastBaseUpdate=b))}if(d!==null){var H=u.baseState;m=0,B=F=b=null,h=d;do{var U=h.lane,G=h.eventTime;if((i&U)===U){B!==null&&(B=B.next={eventTime:G,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var Z=e,ee=h;switch(U=n,G=t,ee.tag){case 1:if(Z=ee.payload,typeof Z=="function"){H=Z.call(G,H,U);break e}H=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=ee.payload,U=typeof Z=="function"?Z.call(G,H,U):Z,U==null)break e;H=k({},H,U);break e;case 2:mt=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,U=u.effects,U===null?u.effects=[h]:U.push(h))}else G={eventTime:G,lane:U,tag:h.tag,payload:h.payload,callback:h.callback,next:null},B===null?(F=B=G,b=H):B=B.next=G,m|=U;if(h=h.next,h===null){if(h=u.shared.pending,h===null)break;U=h,h=U.next,U.next=null,u.lastBaseUpdate=U,u.shared.pending=null}}while(!0);if(B===null&&(b=H),u.baseState=b,u.firstBaseUpdate=F,u.lastBaseUpdate=B,n=u.shared.interleaved,n!==null){u=n;do m|=u.lane,u=u.next;while(u!==n)}else d===null&&(u.shared.lanes=0);At|=m,e.lanes=m,e.memoizedState=H}}function kc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var i=e[n],u=i.callback;if(u!==null){if(i.callback=null,i=t,typeof u!="function")throw Error(a(191,u));u.call(i)}}}var bc=new r.Component().refs;function qi(e,n,t,i){n=e.memoizedState,t=t(i,n),t=t==null?n:k({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Xo={isMounted:function(e){return(e=e._reactInternals)?Lt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var i=nn(),u=wt(e),d=Zn(i,u);d.payload=n,t!=null&&(d.callback=t),n=gt(e,d,u),n!==null&&(zn(n,e,u,i),qo(n,e,u))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var i=nn(),u=wt(e),d=Zn(i,u);d.tag=1,d.payload=n,t!=null&&(d.callback=t),n=gt(e,d,u),n!==null&&(zn(n,e,u,i),qo(n,e,u))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=nn(),i=wt(e),u=Zn(t,i);u.tag=2,n!=null&&(u.callback=n),n=gt(e,u,i),n!==null&&(zn(n,e,i,t),qo(n,e,i))}};function xc(e,n,t,i,u,d,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,d,m):n.prototype&&n.prototype.isPureReactComponent?!$r(t,i)||!$r(u,d):!0}function Sc(e,n,t){var i=!1,u=ft,d=n.contextType;return typeof d=="object"&&d!==null?d=vn(d):(u=on(n)?zt:Qe.current,i=n.contextTypes,d=(i=i!=null)?nr(e,u):ft),n=new n(t,d),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Xo,e.stateNode=n,n._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=d),n}function Cc(e,n,t,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,i),n.state!==e&&Xo.enqueueReplaceState(n,n.state,null)}function Ji(e,n,t,i){var u=e.stateNode;u.props=t,u.state=e.memoizedState,u.refs=bc,Yi(e);var d=n.contextType;typeof d=="object"&&d!==null?u.context=vn(d):(d=on(n)?zt:Qe.current,u.context=nr(e,d)),u.state=e.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(qi(e,n,d,t),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(n=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),n!==u.state&&Xo.enqueueReplaceState(u,u.state,null),Jo(e,t,u,i),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function Kr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(a(309));var i=t.stateNode}if(!i)throw Error(a(147,e));var u=i,d=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===d?n.ref:(n=function(m){var h=u.refs;h===bc&&(h=u.refs={}),m===null?delete h[d]:h[d]=m},n._stringRef=d,n)}if(typeof e!="string")throw Error(a(284));if(!t._owner)throw Error(a(290,e))}return e}function Zo(e,n){throw e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ec(e){var n=e._init;return n(e._payload)}function Pc(e){function n(z,C){if(e){var N=z.deletions;N===null?(z.deletions=[C],z.flags|=16):N.push(C)}}function t(z,C){if(!e)return null;for(;C!==null;)n(z,C),C=C.sibling;return null}function i(z,C){for(z=new Map;C!==null;)C.key!==null?z.set(C.key,C):z.set(C.index,C),C=C.sibling;return z}function u(z,C){return z=bt(z,C),z.index=0,z.sibling=null,z}function d(z,C,N){return z.index=N,e?(N=z.alternate,N!==null?(N=N.index,N<C?(z.flags|=2,C):N):(z.flags|=2,C)):(z.flags|=1048576,C)}function m(z){return e&&z.alternate===null&&(z.flags|=2),z}function h(z,C,N,V){return C===null||C.tag!==6?(C=Tl(N,z.mode,V),C.return=z,C):(C=u(C,N),C.return=z,C)}function b(z,C,N,V){var ne=N.type;return ne===D?B(z,C,N.props.children,V,N.key):C!==null&&(C.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===ze&&Ec(ne)===C.type)?(V=u(C,N.props),V.ref=Kr(z,C,N),V.return=z,V):(V=va(N.type,N.key,N.props,null,z.mode,V),V.ref=Kr(z,C,N),V.return=z,V)}function F(z,C,N,V){return C===null||C.tag!==4||C.stateNode.containerInfo!==N.containerInfo||C.stateNode.implementation!==N.implementation?(C=Fl(N,z.mode,V),C.return=z,C):(C=u(C,N.children||[]),C.return=z,C)}function B(z,C,N,V,ne){return C===null||C.tag!==7?(C=Dt(N,z.mode,V,ne),C.return=z,C):(C=u(C,N),C.return=z,C)}function H(z,C,N){if(typeof C=="string"&&C!==""||typeof C=="number")return C=Tl(""+C,z.mode,N),C.return=z,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case P:return N=va(C.type,C.key,C.props,null,z.mode,N),N.ref=Kr(z,null,C),N.return=z,N;case I:return C=Fl(C,z.mode,N),C.return=z,C;case ze:var V=C._init;return H(z,V(C._payload),N)}if(br(C)||X(C))return C=Dt(C,z.mode,N,null),C.return=z,C;Zo(z,C)}return null}function U(z,C,N,V){var ne=C!==null?C.key:null;if(typeof N=="string"&&N!==""||typeof N=="number")return ne!==null?null:h(z,C,""+N,V);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case P:return N.key===ne?b(z,C,N,V):null;case I:return N.key===ne?F(z,C,N,V):null;case ze:return ne=N._init,U(z,C,ne(N._payload),V)}if(br(N)||X(N))return ne!==null?null:B(z,C,N,V,null);Zo(z,N)}return null}function G(z,C,N,V,ne){if(typeof V=="string"&&V!==""||typeof V=="number")return z=z.get(N)||null,h(C,z,""+V,ne);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case P:return z=z.get(V.key===null?N:V.key)||null,b(C,z,V,ne);case I:return z=z.get(V.key===null?N:V.key)||null,F(C,z,V,ne);case ze:var oe=V._init;return G(z,C,N,oe(V._payload),ne)}if(br(V)||X(V))return z=z.get(N)||null,B(C,z,V,ne,null);Zo(C,V)}return null}function Z(z,C,N,V){for(var ne=null,oe=null,ae=C,ie=C=0,Be=null;ae!==null&&ie<N.length;ie++){ae.index>ie?(Be=ae,ae=null):Be=ae.sibling;var me=U(z,ae,N[ie],V);if(me===null){ae===null&&(ae=Be);break}e&&ae&&me.alternate===null&&n(z,ae),C=d(me,C,ie),oe===null?ne=me:oe.sibling=me,oe=me,ae=Be}if(ie===N.length)return t(z,ae),Ee&&Nt(z,ie),ne;if(ae===null){for(;ie<N.length;ie++)ae=H(z,N[ie],V),ae!==null&&(C=d(ae,C,ie),oe===null?ne=ae:oe.sibling=ae,oe=ae);return Ee&&Nt(z,ie),ne}for(ae=i(z,ae);ie<N.length;ie++)Be=G(ae,z,ie,N[ie],V),Be!==null&&(e&&Be.alternate!==null&&ae.delete(Be.key===null?ie:Be.key),C=d(Be,C,ie),oe===null?ne=Be:oe.sibling=Be,oe=Be);return e&&ae.forEach(function(xt){return n(z,xt)}),Ee&&Nt(z,ie),ne}function ee(z,C,N,V){var ne=X(N);if(typeof ne!="function")throw Error(a(150));if(N=ne.call(N),N==null)throw Error(a(151));for(var oe=ne=null,ae=C,ie=C=0,Be=null,me=N.next();ae!==null&&!me.done;ie++,me=N.next()){ae.index>ie?(Be=ae,ae=null):Be=ae.sibling;var xt=U(z,ae,me.value,V);if(xt===null){ae===null&&(ae=Be);break}e&&ae&&xt.alternate===null&&n(z,ae),C=d(xt,C,ie),oe===null?ne=xt:oe.sibling=xt,oe=xt,ae=Be}if(me.done)return t(z,ae),Ee&&Nt(z,ie),ne;if(ae===null){for(;!me.done;ie++,me=N.next())me=H(z,me.value,V),me!==null&&(C=d(me,C,ie),oe===null?ne=me:oe.sibling=me,oe=me);return Ee&&Nt(z,ie),ne}for(ae=i(z,ae);!me.done;ie++,me=N.next())me=G(ae,z,ie,me.value,V),me!==null&&(e&&me.alternate!==null&&ae.delete(me.key===null?ie:me.key),C=d(me,C,ie),oe===null?ne=me:oe.sibling=me,oe=me);return e&&ae.forEach(function(Ng){return n(z,Ng)}),Ee&&Nt(z,ie),ne}function Ne(z,C,N,V){if(typeof N=="object"&&N!==null&&N.type===D&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case P:e:{for(var ne=N.key,oe=C;oe!==null;){if(oe.key===ne){if(ne=N.type,ne===D){if(oe.tag===7){t(z,oe.sibling),C=u(oe,N.props.children),C.return=z,z=C;break e}}else if(oe.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===ze&&Ec(ne)===oe.type){t(z,oe.sibling),C=u(oe,N.props),C.ref=Kr(z,oe,N),C.return=z,z=C;break e}t(z,oe);break}else n(z,oe);oe=oe.sibling}N.type===D?(C=Dt(N.props.children,z.mode,V,N.key),C.return=z,z=C):(V=va(N.type,N.key,N.props,null,z.mode,V),V.ref=Kr(z,C,N),V.return=z,z=V)}return m(z);case I:e:{for(oe=N.key;C!==null;){if(C.key===oe)if(C.tag===4&&C.stateNode.containerInfo===N.containerInfo&&C.stateNode.implementation===N.implementation){t(z,C.sibling),C=u(C,N.children||[]),C.return=z,z=C;break e}else{t(z,C);break}else n(z,C);C=C.sibling}C=Fl(N,z.mode,V),C.return=z,z=C}return m(z);case ze:return oe=N._init,Ne(z,C,oe(N._payload),V)}if(br(N))return Z(z,C,N,V);if(X(N))return ee(z,C,N,V);Zo(z,N)}return typeof N=="string"&&N!==""||typeof N=="number"?(N=""+N,C!==null&&C.tag===6?(t(z,C.sibling),C=u(C,N),C.return=z,z=C):(t(z,C),C=Tl(N,z.mode,V),C.return=z,z=C),m(z)):t(z,C)}return Ne}var lr=Pc(!0),Oc=Pc(!1),Qr={},An=dt(Qr),Gr=dt(Qr),Yr=dt(Qr);function Tt(e){if(e===Qr)throw Error(a(174));return e}function Xi(e,n){switch(be(Yr,n),be(Gr,e),be(An,Qr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ja(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ja(n,e)}Se(An),be(An,n)}function sr(){Se(An),Se(Gr),Se(Yr)}function Lc(e){Tt(Yr.current);var n=Tt(An.current),t=Ja(n,e.type);n!==t&&(be(Gr,e),be(An,t))}function Zi(e){Gr.current===e&&(Se(An),Se(Gr))}var Pe=dt(0);function ea(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var el=[];function nl(){for(var e=0;e<el.length;e++)el[e]._workInProgressVersionPrimary=null;el.length=0}var na=j.ReactCurrentDispatcher,tl=j.ReactCurrentBatchConfig,Ft=0,Oe=null,Ae=null,De=null,ta=!1,qr=!1,Jr=0,eg=0;function Ge(){throw Error(a(321))}function rl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!En(e[t],n[t]))return!1;return!0}function ol(e,n,t,i,u,d){if(Ft=d,Oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,na.current=e===null||e.memoizedState===null?og:ag,e=t(i,u),qr){d=0;do{if(qr=!1,Jr=0,25<=d)throw Error(a(301));d+=1,De=Ae=null,n.updateQueue=null,na.current=ig,e=t(i,u)}while(qr)}if(na.current=aa,n=Ae!==null&&Ae.next!==null,Ft=0,De=Ae=Oe=null,ta=!1,n)throw Error(a(300));return e}function al(){var e=Jr!==0;return Jr=0,e}function In(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?Oe.memoizedState=De=e:De=De.next=e,De}function wn(){if(Ae===null){var e=Oe.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var n=De===null?Oe.memoizedState:De.next;if(n!==null)De=n,Ae=e;else{if(e===null)throw Error(a(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},De===null?Oe.memoizedState=De=e:De=De.next=e}return De}function Xr(e,n){return typeof n=="function"?n(e):n}function il(e){var n=wn(),t=n.queue;if(t===null)throw Error(a(311));t.lastRenderedReducer=e;var i=Ae,u=i.baseQueue,d=t.pending;if(d!==null){if(u!==null){var m=u.next;u.next=d.next,d.next=m}i.baseQueue=u=d,t.pending=null}if(u!==null){d=u.next,i=i.baseState;var h=m=null,b=null,F=d;do{var B=F.lane;if((Ft&B)===B)b!==null&&(b=b.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),i=F.hasEagerState?F.eagerState:e(i,F.action);else{var H={lane:B,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};b===null?(h=b=H,m=i):b=b.next=H,Oe.lanes|=B,At|=B}F=F.next}while(F!==null&&F!==d);b===null?m=i:b.next=h,En(i,n.memoizedState)||(an=!0),n.memoizedState=i,n.baseState=m,n.baseQueue=b,t.lastRenderedState=i}if(e=t.interleaved,e!==null){u=e;do d=u.lane,Oe.lanes|=d,At|=d,u=u.next;while(u!==e)}else u===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function ll(e){var n=wn(),t=n.queue;if(t===null)throw Error(a(311));t.lastRenderedReducer=e;var i=t.dispatch,u=t.pending,d=n.memoizedState;if(u!==null){t.pending=null;var m=u=u.next;do d=e(d,m.action),m=m.next;while(m!==u);En(d,n.memoizedState)||(an=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),t.lastRenderedState=d}return[d,i]}function Rc(){}function zc(e,n){var t=Oe,i=wn(),u=n(),d=!En(i.memoizedState,u);if(d&&(i.memoizedState=u,an=!0),i=i.queue,sl(jc.bind(null,t,i,e),[e]),i.getSnapshot!==n||d||De!==null&&De.memoizedState.tag&1){if(t.flags|=2048,Zr(9,Nc.bind(null,t,i,u,n),void 0,null),Ue===null)throw Error(a(349));(Ft&30)!==0||_c(t,n,u)}return u}function _c(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Oe.updateQueue,n===null?(n={lastEffect:null,stores:null},Oe.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Nc(e,n,t,i){n.value=t,n.getSnapshot=i,Tc(n)&&Fc(e)}function jc(e,n,t){return t(function(){Tc(n)&&Fc(e)})}function Tc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!En(e,t)}catch{return!0}}function Fc(e){var n=Xn(e,1);n!==null&&zn(n,e,1,-1)}function Ac(e){var n=In();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xr,lastRenderedState:e},n.queue=e,e=e.dispatch=rg.bind(null,Oe,e),[n.memoizedState,e]}function Zr(e,n,t,i){return e={tag:e,create:n,destroy:t,deps:i,next:null},n=Oe.updateQueue,n===null?(n={lastEffect:null,stores:null},Oe.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(i=t.next,t.next=e,e.next=i,n.lastEffect=e)),e}function Ic(){return wn().memoizedState}function ra(e,n,t,i){var u=In();Oe.flags|=e,u.memoizedState=Zr(1|n,t,void 0,i===void 0?null:i)}function oa(e,n,t,i){var u=wn();i=i===void 0?null:i;var d=void 0;if(Ae!==null){var m=Ae.memoizedState;if(d=m.destroy,i!==null&&rl(i,m.deps)){u.memoizedState=Zr(n,t,d,i);return}}Oe.flags|=e,u.memoizedState=Zr(1|n,t,d,i)}function Mc(e,n){return ra(8390656,8,e,n)}function sl(e,n){return oa(2048,8,e,n)}function $c(e,n){return oa(4,2,e,n)}function Dc(e,n){return oa(4,4,e,n)}function Uc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Bc(e,n,t){return t=t!=null?t.concat([e]):null,oa(4,4,Uc.bind(null,n,e),t)}function ul(){}function Hc(e,n){var t=wn();n=n===void 0?null:n;var i=t.memoizedState;return i!==null&&n!==null&&rl(n,i[1])?i[0]:(t.memoizedState=[e,n],e)}function Wc(e,n){var t=wn();n=n===void 0?null:n;var i=t.memoizedState;return i!==null&&n!==null&&rl(n,i[1])?i[0]:(e=e(),t.memoizedState=[e,n],e)}function Vc(e,n,t){return(Ft&21)===0?(e.baseState&&(e.baseState=!1,an=!0),e.memoizedState=t):(En(t,n)||(t=yu(),Oe.lanes|=t,At|=t,e.baseState=!0),n)}function ng(e,n){var t=ke;ke=t!==0&&4>t?t:4,e(!0);var i=tl.transition;tl.transition={};try{e(!1),n()}finally{ke=t,tl.transition=i}}function Kc(){return wn().memoizedState}function tg(e,n,t){var i=wt(e);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Qc(e))Gc(n,t);else if(t=yc(e,n,t,i),t!==null){var u=nn();zn(t,e,i,u),Yc(t,n,i)}}function rg(e,n,t){var i=wt(e),u={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Qc(e))Gc(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var m=n.lastRenderedState,h=d(m,t);if(u.hasEagerState=!0,u.eagerState=h,En(h,m)){var b=n.interleaved;b===null?(u.next=u,Gi(n)):(u.next=b.next,b.next=u),n.interleaved=u;return}}catch{}finally{}t=yc(e,n,u,i),t!==null&&(u=nn(),zn(t,e,i,u),Yc(t,n,i))}}function Qc(e){var n=e.alternate;return e===Oe||n!==null&&n===Oe}function Gc(e,n){qr=ta=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Yc(e,n,t){if((t&4194240)!==0){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,ui(e,t)}}var aa={readContext:vn,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},og={readContext:vn,useCallback:function(e,n){return In().memoizedState=[e,n===void 0?null:n],e},useContext:vn,useEffect:Mc,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,ra(4194308,4,Uc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return ra(4194308,4,e,n)},useInsertionEffect:function(e,n){return ra(4,2,e,n)},useMemo:function(e,n){var t=In();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var i=In();return n=t!==void 0?t(n):n,i.memoizedState=i.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},i.queue=e,e=e.dispatch=tg.bind(null,Oe,e),[i.memoizedState,e]},useRef:function(e){var n=In();return e={current:e},n.memoizedState=e},useState:Ac,useDebugValue:ul,useDeferredValue:function(e){return In().memoizedState=e},useTransition:function(){var e=Ac(!1),n=e[0];return e=ng.bind(null,e[1]),In().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var i=Oe,u=In();if(Ee){if(t===void 0)throw Error(a(407));t=t()}else{if(t=n(),Ue===null)throw Error(a(349));(Ft&30)!==0||_c(i,n,t)}u.memoizedState=t;var d={value:t,getSnapshot:n};return u.queue=d,Mc(jc.bind(null,i,d,e),[e]),i.flags|=2048,Zr(9,Nc.bind(null,i,d,t,n),void 0,null),t},useId:function(){var e=In(),n=Ue.identifierPrefix;if(Ee){var t=Jn,i=qn;t=(i&~(1<<32-Cn(i)-1)).toString(32)+t,n=":"+n+"R"+t,t=Jr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=eg++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},ag={readContext:vn,useCallback:Hc,useContext:vn,useEffect:sl,useImperativeHandle:Bc,useInsertionEffect:$c,useLayoutEffect:Dc,useMemo:Wc,useReducer:il,useRef:Ic,useState:function(){return il(Xr)},useDebugValue:ul,useDeferredValue:function(e){var n=wn();return Vc(n,Ae.memoizedState,e)},useTransition:function(){var e=il(Xr)[0],n=wn().memoizedState;return[e,n]},useMutableSource:Rc,useSyncExternalStore:zc,useId:Kc,unstable_isNewReconciler:!1},ig={readContext:vn,useCallback:Hc,useContext:vn,useEffect:sl,useImperativeHandle:Bc,useInsertionEffect:$c,useLayoutEffect:Dc,useMemo:Wc,useReducer:ll,useRef:Ic,useState:function(){return ll(Xr)},useDebugValue:ul,useDeferredValue:function(e){var n=wn();return Ae===null?n.memoizedState=e:Vc(n,Ae.memoizedState,e)},useTransition:function(){var e=ll(Xr)[0],n=wn().memoizedState;return[e,n]},useMutableSource:Rc,useSyncExternalStore:zc,useId:Kc,unstable_isNewReconciler:!1};function ur(e,n){try{var t="",i=n;do t+=fe(i),i=i.return;while(i);var u=t}catch(d){u=`
Error generating stack: `+d.message+`
`+d.stack}return{value:e,source:n,stack:u,digest:null}}function cl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function dl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var lg=typeof WeakMap=="function"?WeakMap:Map;function qc(e,n,t){t=Zn(-1,t),t.tag=3,t.payload={element:null};var i=n.value;return t.callback=function(){fa||(fa=!0,Pl=i),dl(e,n)},t}function Jc(e,n,t){t=Zn(-1,t),t.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var u=n.value;t.payload=function(){return i(u)},t.callback=function(){dl(e,n)}}var d=e.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(t.callback=function(){dl(e,n),typeof i!="function"&&(yt===null?yt=new Set([this]):yt.add(this));var m=n.stack;this.componentDidCatch(n.value,{componentStack:m!==null?m:""})}),t}function Xc(e,n,t){var i=e.pingCache;if(i===null){i=e.pingCache=new lg;var u=new Set;i.set(n,u)}else u=i.get(n),u===void 0&&(u=new Set,i.set(n,u));u.has(t)||(u.add(t),e=bg.bind(null,e,n,t),n.then(e,e))}function Zc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function ed(e,n,t,i,u){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Zn(-1,1),n.tag=2,gt(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=u,e)}var sg=j.ReactCurrentOwner,an=!1;function en(e,n,t,i){n.child=e===null?Oc(n,null,t,i):lr(n,e.child,t,i)}function nd(e,n,t,i,u){t=t.render;var d=n.ref;return ir(n,u),i=ol(e,n,t,i,d,u),t=al(),e!==null&&!an?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~u,et(e,n,u)):(Ee&&t&&$i(n),n.flags|=1,en(e,n,i,u),n.child)}function td(e,n,t,i,u){if(e===null){var d=t.type;return typeof d=="function"&&!jl(d)&&d.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=d,rd(e,n,d,i,u)):(e=va(t.type,null,i,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,(e.lanes&u)===0){var m=d.memoizedProps;if(t=t.compare,t=t!==null?t:$r,t(m,i)&&e.ref===n.ref)return et(e,n,u)}return n.flags|=1,e=bt(d,i),e.ref=n.ref,e.return=n,n.child=e}function rd(e,n,t,i,u){if(e!==null){var d=e.memoizedProps;if($r(d,i)&&e.ref===n.ref)if(an=!1,n.pendingProps=i=d,(e.lanes&u)!==0)(e.flags&131072)!==0&&(an=!0);else return n.lanes=e.lanes,et(e,n,u)}return fl(e,n,t,i,u)}function od(e,n,t){var i=n.pendingProps,u=i.children,d=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(dr,mn),mn|=t;else{if((t&1073741824)===0)return e=d!==null?d.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,be(dr,mn),mn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=d!==null?d.baseLanes:t,be(dr,mn),mn|=i}else d!==null?(i=d.baseLanes|t,n.memoizedState=null):i=t,be(dr,mn),mn|=i;return en(e,n,u,t),n.child}function ad(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function fl(e,n,t,i,u){var d=on(t)?zt:Qe.current;return d=nr(n,d),ir(n,u),t=ol(e,n,t,i,d,u),i=al(),e!==null&&!an?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~u,et(e,n,u)):(Ee&&i&&$i(n),n.flags|=1,en(e,n,t,u),n.child)}function id(e,n,t,i,u){if(on(t)){var d=!0;Ho(n)}else d=!1;if(ir(n,u),n.stateNode===null)la(e,n),Sc(n,t,i),Ji(n,t,i,u),i=!0;else if(e===null){var m=n.stateNode,h=n.memoizedProps;m.props=h;var b=m.context,F=t.contextType;typeof F=="object"&&F!==null?F=vn(F):(F=on(t)?zt:Qe.current,F=nr(n,F));var B=t.getDerivedStateFromProps,H=typeof B=="function"||typeof m.getSnapshotBeforeUpdate=="function";H||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(h!==i||b!==F)&&Cc(n,m,i,F),mt=!1;var U=n.memoizedState;m.state=U,Jo(n,i,m,u),b=n.memoizedState,h!==i||U!==b||rn.current||mt?(typeof B=="function"&&(qi(n,t,B,i),b=n.memoizedState),(h=mt||xc(n,t,h,i,U,b,F))?(H||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(n.flags|=4194308)):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=b),m.props=i,m.state=b,m.context=F,i=h):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{m=n.stateNode,vc(e,n),h=n.memoizedProps,F=n.type===n.elementType?h:On(n.type,h),m.props=F,H=n.pendingProps,U=m.context,b=t.contextType,typeof b=="object"&&b!==null?b=vn(b):(b=on(t)?zt:Qe.current,b=nr(n,b));var G=t.getDerivedStateFromProps;(B=typeof G=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(h!==H||U!==b)&&Cc(n,m,i,b),mt=!1,U=n.memoizedState,m.state=U,Jo(n,i,m,u);var Z=n.memoizedState;h!==H||U!==Z||rn.current||mt?(typeof G=="function"&&(qi(n,t,G,i),Z=n.memoizedState),(F=mt||xc(n,t,F,i,U,Z,b)||!1)?(B||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(i,Z,b),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(i,Z,b)),typeof m.componentDidUpdate=="function"&&(n.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof m.componentDidUpdate!="function"||h===e.memoizedProps&&U===e.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&U===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=Z),m.props=i,m.state=Z,m.context=b,i=F):(typeof m.componentDidUpdate!="function"||h===e.memoizedProps&&U===e.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&U===e.memoizedState||(n.flags|=1024),i=!1)}return pl(e,n,t,i,d,u)}function pl(e,n,t,i,u,d){ad(e,n);var m=(n.flags&128)!==0;if(!i&&!m)return u&&cc(n,t,!1),et(e,n,d);i=n.stateNode,sg.current=n;var h=m&&typeof t.getDerivedStateFromError!="function"?null:i.render();return n.flags|=1,e!==null&&m?(n.child=lr(n,e.child,null,d),n.child=lr(n,null,h,d)):en(e,n,h,d),n.memoizedState=i.state,u&&cc(n,t,!0),n.child}function ld(e){var n=e.stateNode;n.pendingContext?sc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&sc(e,n.context,!1),Xi(e,n.containerInfo)}function sd(e,n,t,i,u){return or(),Hi(u),n.flags|=256,en(e,n,t,i),n.child}var ml={dehydrated:null,treeContext:null,retryLane:0};function gl(e){return{baseLanes:e,cachePool:null,transitions:null}}function ud(e,n,t){var i=n.pendingProps,u=Pe.current,d=!1,m=(n.flags&128)!==0,h;if((h=m)||(h=e!==null&&e.memoizedState===null?!1:(u&2)!==0),h?(d=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),be(Pe,u&1),e===null)return Bi(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(m=i.children,e=i.fallback,d?(i=n.mode,d=n.child,m={mode:"hidden",children:m},(i&1)===0&&d!==null?(d.childLanes=0,d.pendingProps=m):d=wa(m,i,0,null),e=Dt(e,i,t,null),d.return=n,e.return=n,d.sibling=e,n.child=d,n.child.memoizedState=gl(t),n.memoizedState=ml,e):hl(n,m));if(u=e.memoizedState,u!==null&&(h=u.dehydrated,h!==null))return ug(e,n,m,i,h,u,t);if(d){d=i.fallback,m=n.mode,u=e.child,h=u.sibling;var b={mode:"hidden",children:i.children};return(m&1)===0&&n.child!==u?(i=n.child,i.childLanes=0,i.pendingProps=b,n.deletions=null):(i=bt(u,b),i.subtreeFlags=u.subtreeFlags&14680064),h!==null?d=bt(h,d):(d=Dt(d,m,t,null),d.flags|=2),d.return=n,i.return=n,i.sibling=d,n.child=i,i=d,d=n.child,m=e.child.memoizedState,m=m===null?gl(t):{baseLanes:m.baseLanes|t,cachePool:null,transitions:m.transitions},d.memoizedState=m,d.childLanes=e.childLanes&~t,n.memoizedState=ml,i}return d=e.child,e=d.sibling,i=bt(d,{mode:"visible",children:i.children}),(n.mode&1)===0&&(i.lanes=t),i.return=n,i.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=i,n.memoizedState=null,i}function hl(e,n){return n=wa({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ia(e,n,t,i){return i!==null&&Hi(i),lr(n,e.child,null,t),e=hl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ug(e,n,t,i,u,d,m){if(t)return n.flags&256?(n.flags&=-257,i=cl(Error(a(422))),ia(e,n,m,i)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(d=i.fallback,u=n.mode,i=wa({mode:"visible",children:i.children},u,0,null),d=Dt(d,u,m,null),d.flags|=2,i.return=n,d.return=n,i.sibling=d,n.child=i,(n.mode&1)!==0&&lr(n,e.child,null,m),n.child.memoizedState=gl(m),n.memoizedState=ml,d);if((n.mode&1)===0)return ia(e,n,m,null);if(u.data==="$!"){if(i=u.nextSibling&&u.nextSibling.dataset,i)var h=i.dgst;return i=h,d=Error(a(419)),i=cl(d,i,void 0),ia(e,n,m,i)}if(h=(m&e.childLanes)!==0,an||h){if(i=Ue,i!==null){switch(m&-m){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(i.suspendedLanes|m))!==0?0:u,u!==0&&u!==d.retryLane&&(d.retryLane=u,Xn(e,u),zn(i,e,u,-1))}return Nl(),i=cl(Error(a(421))),ia(e,n,m,i)}return u.data==="$?"?(n.flags|=128,n.child=e.child,n=xg.bind(null,e),u._reactRetry=n,null):(e=d.treeContext,pn=ct(u.nextSibling),fn=n,Ee=!0,Pn=null,e!==null&&(hn[yn++]=qn,hn[yn++]=Jn,hn[yn++]=_t,qn=e.id,Jn=e.overflow,_t=n),n=hl(n,i.children),n.flags|=4096,n)}function cd(e,n,t){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),Qi(e.return,n,t)}function yl(e,n,t,i,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:u}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=i,d.tail=t,d.tailMode=u)}function dd(e,n,t){var i=n.pendingProps,u=i.revealOrder,d=i.tail;if(en(e,n,i.children,t),i=Pe.current,(i&2)!==0)i=i&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cd(e,t,n);else if(e.tag===19)cd(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(be(Pe,i),(n.mode&1)===0)n.memoizedState=null;else switch(u){case"forwards":for(t=n.child,u=null;t!==null;)e=t.alternate,e!==null&&ea(e)===null&&(u=t),t=t.sibling;t=u,t===null?(u=n.child,n.child=null):(u=t.sibling,t.sibling=null),yl(n,!1,u,t,d);break;case"backwards":for(t=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&ea(e)===null){n.child=u;break}e=u.sibling,u.sibling=t,t=u,u=e}yl(n,!0,t,null,d);break;case"together":yl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function la(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function et(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),At|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,t=bt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=bt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function cg(e,n,t){switch(n.tag){case 3:ld(n),or();break;case 5:Lc(n);break;case 1:on(n.type)&&Ho(n);break;case 4:Xi(n,n.stateNode.containerInfo);break;case 10:var i=n.type._context,u=n.memoizedProps.value;be(Go,i._currentValue),i._currentValue=u;break;case 13:if(i=n.memoizedState,i!==null)return i.dehydrated!==null?(be(Pe,Pe.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?ud(e,n,t):(be(Pe,Pe.current&1),e=et(e,n,t),e!==null?e.sibling:null);be(Pe,Pe.current&1);break;case 19:if(i=(t&n.childLanes)!==0,(e.flags&128)!==0){if(i)return dd(e,n,t);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),be(Pe,Pe.current),i)break;return null;case 22:case 23:return n.lanes=0,od(e,n,t)}return et(e,n,t)}var fd,vl,pd,md;fd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},vl=function(){},pd=function(e,n,t,i){var u=e.memoizedProps;if(u!==i){e=n.stateNode,Tt(An.current);var d=null;switch(t){case"input":u=Bt(e,u),i=Bt(e,i),d=[];break;case"select":u=k({},u,{value:void 0}),i=k({},i,{value:void 0}),d=[];break;case"textarea":u=qa(e,u),i=qa(e,i),d=[];break;default:typeof u.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Do)}Xa(t,i);var m;t=null;for(F in u)if(!i.hasOwnProperty(F)&&u.hasOwnProperty(F)&&u[F]!=null)if(F==="style"){var h=u[F];for(m in h)h.hasOwnProperty(m)&&(t||(t={}),t[m]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(s.hasOwnProperty(F)?d||(d=[]):(d=d||[]).push(F,null));for(F in i){var b=i[F];if(h=u?.[F],i.hasOwnProperty(F)&&b!==h&&(b!=null||h!=null))if(F==="style")if(h){for(m in h)!h.hasOwnProperty(m)||b&&b.hasOwnProperty(m)||(t||(t={}),t[m]="");for(m in b)b.hasOwnProperty(m)&&h[m]!==b[m]&&(t||(t={}),t[m]=b[m])}else t||(d||(d=[]),d.push(F,t)),t=b;else F==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,h=h?h.__html:void 0,b!=null&&h!==b&&(d=d||[]).push(F,b)):F==="children"?typeof b!="string"&&typeof b!="number"||(d=d||[]).push(F,""+b):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(s.hasOwnProperty(F)?(b!=null&&F==="onScroll"&&xe("scroll",e),d||h===b||(d=[])):(d=d||[]).push(F,b))}t&&(d=d||[]).push("style",t);var F=d;(n.updateQueue=F)&&(n.flags|=4)}},md=function(e,n,t,i){t!==i&&(n.flags|=4)};function eo(e,n){if(!Ee)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ye(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,i=0;if(n)for(var u=e.child;u!==null;)t|=u.lanes|u.childLanes,i|=u.subtreeFlags&14680064,i|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)t|=u.lanes|u.childLanes,i|=u.subtreeFlags,i|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=i,e.childLanes=t,n}function dg(e,n,t){var i=n.pendingProps;switch(Di(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(n),null;case 1:return on(n.type)&&Bo(),Ye(n),null;case 3:return i=n.stateNode,sr(),Se(rn),Se(Qe),nl(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Qo(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Pn!==null&&(Rl(Pn),Pn=null))),vl(e,n),Ye(n),null;case 5:Zi(n);var u=Tt(Yr.current);if(t=n.type,e!==null&&n.stateNode!=null)pd(e,n,t,i,u),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!i){if(n.stateNode===null)throw Error(a(166));return Ye(n),null}if(e=Tt(An.current),Qo(n)){i=n.stateNode,t=n.type;var d=n.memoizedProps;switch(i[Fn]=n,i[Wr]=d,e=(n.mode&1)!==0,t){case"dialog":xe("cancel",i),xe("close",i);break;case"iframe":case"object":case"embed":xe("load",i);break;case"video":case"audio":for(u=0;u<Ur.length;u++)xe(Ur[u],i);break;case"source":xe("error",i);break;case"img":case"image":case"link":xe("error",i),xe("load",i);break;case"details":xe("toggle",i);break;case"input":Qs(i,d),xe("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!d.multiple},xe("invalid",i);break;case"textarea":qs(i,d),xe("invalid",i)}Xa(t,d),u=null;for(var m in d)if(d.hasOwnProperty(m)){var h=d[m];m==="children"?typeof h=="string"?i.textContent!==h&&(d.suppressHydrationWarning!==!0&&$o(i.textContent,h,e),u=["children",h]):typeof h=="number"&&i.textContent!==""+h&&(d.suppressHydrationWarning!==!0&&$o(i.textContent,h,e),u=["children",""+h]):s.hasOwnProperty(m)&&h!=null&&m==="onScroll"&&xe("scroll",i)}switch(t){case"input":Ke(i),Ys(i,d,!0);break;case"textarea":Ke(i),Xs(i);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(i.onclick=Do)}i=u,n.updateQueue=i,i!==null&&(n.flags|=4)}else{m=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zs(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=m.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=m.createElement(t,{is:i.is}):(e=m.createElement(t),t==="select"&&(m=e,i.multiple?m.multiple=!0:i.size&&(m.size=i.size))):e=m.createElementNS(e,t),e[Fn]=n,e[Wr]=i,fd(e,n,!1,!1),n.stateNode=e;e:{switch(m=Za(t,i),t){case"dialog":xe("cancel",e),xe("close",e),u=i;break;case"iframe":case"object":case"embed":xe("load",e),u=i;break;case"video":case"audio":for(u=0;u<Ur.length;u++)xe(Ur[u],e);u=i;break;case"source":xe("error",e),u=i;break;case"img":case"image":case"link":xe("error",e),xe("load",e),u=i;break;case"details":xe("toggle",e),u=i;break;case"input":Qs(e,i),u=Bt(e,i),xe("invalid",e);break;case"option":u=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},u=k({},i,{value:void 0}),xe("invalid",e);break;case"textarea":qs(e,i),u=qa(e,i),xe("invalid",e);break;default:u=i}Xa(t,u),h=u;for(d in h)if(h.hasOwnProperty(d)){var b=h[d];d==="style"?tu(e,b):d==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,b!=null&&eu(e,b)):d==="children"?typeof b=="string"?(t!=="textarea"||b!=="")&&xr(e,b):typeof b=="number"&&xr(e,""+b):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(s.hasOwnProperty(d)?b!=null&&d==="onScroll"&&xe("scroll",e):b!=null&&x(e,d,b,m))}switch(t){case"input":Ke(e),Ys(e,i,!1);break;case"textarea":Ke(e),Xs(e);break;case"option":i.value!=null&&e.setAttribute("value",""+ue(i.value));break;case"select":e.multiple=!!i.multiple,d=i.value,d!=null?Ht(e,!!i.multiple,d,!1):i.defaultValue!=null&&Ht(e,!!i.multiple,i.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=Do)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ye(n),null;case 6:if(e&&n.stateNode!=null)md(e,n,e.memoizedProps,i);else{if(typeof i!="string"&&n.stateNode===null)throw Error(a(166));if(t=Tt(Yr.current),Tt(An.current),Qo(n)){if(i=n.stateNode,t=n.memoizedProps,i[Fn]=n,(d=i.nodeValue!==t)&&(e=fn,e!==null))switch(e.tag){case 3:$o(i.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$o(i.nodeValue,t,(e.mode&1)!==0)}d&&(n.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Fn]=n,n.stateNode=i}return Ye(n),null;case 13:if(Se(Pe),i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ee&&pn!==null&&(n.mode&1)!==0&&(n.flags&128)===0)hc(),or(),n.flags|=98560,d=!1;else if(d=Qo(n),i!==null&&i.dehydrated!==null){if(e===null){if(!d)throw Error(a(318));if(d=n.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(a(317));d[Fn]=n}else or(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),d=!1}else Pn!==null&&(Rl(Pn),Pn=null),d=!0;if(!d)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(Pe.current&1)!==0?Ie===0&&(Ie=3):Nl())),n.updateQueue!==null&&(n.flags|=4),Ye(n),null);case 4:return sr(),vl(e,n),e===null&&Br(n.stateNode.containerInfo),Ye(n),null;case 10:return Ki(n.type._context),Ye(n),null;case 17:return on(n.type)&&Bo(),Ye(n),null;case 19:if(Se(Pe),d=n.memoizedState,d===null)return Ye(n),null;if(i=(n.flags&128)!==0,m=d.rendering,m===null)if(i)eo(d,!1);else{if(Ie!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(m=ea(e),m!==null){for(n.flags|=128,eo(d,!1),i=m.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),n.subtreeFlags=0,i=t,t=n.child;t!==null;)d=t,e=i,d.flags&=14680066,m=d.alternate,m===null?(d.childLanes=0,d.lanes=e,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=m.childLanes,d.lanes=m.lanes,d.child=m.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=m.memoizedProps,d.memoizedState=m.memoizedState,d.updateQueue=m.updateQueue,d.type=m.type,e=m.dependencies,d.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return be(Pe,Pe.current&1|2),n.child}e=e.sibling}d.tail!==null&&_e()>fr&&(n.flags|=128,i=!0,eo(d,!1),n.lanes=4194304)}else{if(!i)if(e=ea(m),e!==null){if(n.flags|=128,i=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),eo(d,!0),d.tail===null&&d.tailMode==="hidden"&&!m.alternate&&!Ee)return Ye(n),null}else 2*_e()-d.renderingStartTime>fr&&t!==1073741824&&(n.flags|=128,i=!0,eo(d,!1),n.lanes=4194304);d.isBackwards?(m.sibling=n.child,n.child=m):(t=d.last,t!==null?t.sibling=m:n.child=m,d.last=m)}return d.tail!==null?(n=d.tail,d.rendering=n,d.tail=n.sibling,d.renderingStartTime=_e(),n.sibling=null,t=Pe.current,be(Pe,i?t&1|2:t&1),n):(Ye(n),null);case 22:case 23:return _l(),i=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(n.flags|=8192),i&&(n.mode&1)!==0?(mn&1073741824)!==0&&(Ye(n),n.subtreeFlags&6&&(n.flags|=8192)):Ye(n),null;case 24:return null;case 25:return null}throw Error(a(156,n.tag))}function fg(e,n){switch(Di(n),n.tag){case 1:return on(n.type)&&Bo(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return sr(),Se(rn),Se(Qe),nl(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return Zi(n),null;case 13:if(Se(Pe),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));or()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Se(Pe),null;case 4:return sr(),null;case 10:return Ki(n.type._context),null;case 22:case 23:return _l(),null;case 24:return null;default:return null}}var sa=!1,qe=!1,pg=typeof WeakSet=="function"?WeakSet:Set,q=null;function cr(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Le(e,n,i)}else t.current=null}function wl(e,n,t){try{t()}catch(i){Le(e,n,i)}}var gd=!1;function mg(e,n){if(_i=Lo,e=Ku(),Si(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var u=i.anchorOffset,d=i.focusNode;i=i.focusOffset;try{t.nodeType,d.nodeType}catch{t=null;break e}var m=0,h=-1,b=-1,F=0,B=0,H=e,U=null;n:for(;;){for(var G;H!==t||u!==0&&H.nodeType!==3||(h=m+u),H!==d||i!==0&&H.nodeType!==3||(b=m+i),H.nodeType===3&&(m+=H.nodeValue.length),(G=H.firstChild)!==null;)U=H,H=G;for(;;){if(H===e)break n;if(U===t&&++F===u&&(h=m),U===d&&++B===i&&(b=m),(G=H.nextSibling)!==null)break;H=U,U=H.parentNode}H=G}t=h===-1||b===-1?null:{start:h,end:b}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ni={focusedElem:e,selectionRange:t},Lo=!1,q=n;q!==null;)if(n=q,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,q=e;else for(;q!==null;){n=q;try{var Z=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(Z!==null){var ee=Z.memoizedProps,Ne=Z.memoizedState,z=n.stateNode,C=z.getSnapshotBeforeUpdate(n.elementType===n.type?ee:On(n.type,ee),Ne);z.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var N=n.stateNode.containerInfo;N.nodeType===1?N.textContent="":N.nodeType===9&&N.documentElement&&N.removeChild(N.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(V){Le(n,n.return,V)}if(e=n.sibling,e!==null){e.return=n.return,q=e;break}q=n.return}return Z=gd,gd=!1,Z}function no(e,n,t){var i=n.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var u=i=i.next;do{if((u.tag&e)===e){var d=u.destroy;u.destroy=void 0,d!==void 0&&wl(n,t,d)}u=u.next}while(u!==i)}}function ua(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var i=t.create;t.destroy=i()}t=t.next}while(t!==n)}}function kl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function hd(e){var n=e.alternate;n!==null&&(e.alternate=null,hd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Fn],delete n[Wr],delete n[Ai],delete n[qm],delete n[Jm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yd(e){return e.tag===5||e.tag===3||e.tag===4}function vd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bl(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Do));else if(i!==4&&(e=e.child,e!==null))for(bl(e,n,t),e=e.sibling;e!==null;)bl(e,n,t),e=e.sibling}function xl(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(xl(e,n,t),e=e.sibling;e!==null;)xl(e,n,t),e=e.sibling}var He=null,Ln=!1;function ht(e,n,t){for(t=t.child;t!==null;)wd(e,n,t),t=t.sibling}function wd(e,n,t){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(xo,t)}catch{}switch(t.tag){case 5:qe||cr(t,n);case 6:var i=He,u=Ln;He=null,ht(e,n,t),He=i,Ln=u,He!==null&&(Ln?(e=He,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):He.removeChild(t.stateNode));break;case 18:He!==null&&(Ln?(e=He,t=t.stateNode,e.nodeType===8?Fi(e.parentNode,t):e.nodeType===1&&Fi(e,t),jr(e)):Fi(He,t.stateNode));break;case 4:i=He,u=Ln,He=t.stateNode.containerInfo,Ln=!0,ht(e,n,t),He=i,Ln=u;break;case 0:case 11:case 14:case 15:if(!qe&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){u=i=i.next;do{var d=u,m=d.destroy;d=d.tag,m!==void 0&&((d&2)!==0||(d&4)!==0)&&wl(t,n,m),u=u.next}while(u!==i)}ht(e,n,t);break;case 1:if(!qe&&(cr(t,n),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(h){Le(t,n,h)}ht(e,n,t);break;case 21:ht(e,n,t);break;case 22:t.mode&1?(qe=(i=qe)||t.memoizedState!==null,ht(e,n,t),qe=i):ht(e,n,t);break;default:ht(e,n,t)}}function kd(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new pg),n.forEach(function(i){var u=Sg.bind(null,e,i);t.has(i)||(t.add(i),i.then(u,u))})}}function Rn(e,n){var t=n.deletions;if(t!==null)for(var i=0;i<t.length;i++){var u=t[i];try{var d=e,m=n,h=m;e:for(;h!==null;){switch(h.tag){case 5:He=h.stateNode,Ln=!1;break e;case 3:He=h.stateNode.containerInfo,Ln=!0;break e;case 4:He=h.stateNode.containerInfo,Ln=!0;break e}h=h.return}if(He===null)throw Error(a(160));wd(d,m,u),He=null,Ln=!1;var b=u.alternate;b!==null&&(b.return=null),u.return=null}catch(F){Le(u,n,F)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)bd(n,e),n=n.sibling}function bd(e,n){var t=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Rn(n,e),Mn(e),i&4){try{no(3,e,e.return),ua(3,e)}catch(ee){Le(e,e.return,ee)}try{no(5,e,e.return)}catch(ee){Le(e,e.return,ee)}}break;case 1:Rn(n,e),Mn(e),i&512&&t!==null&&cr(t,t.return);break;case 5:if(Rn(n,e),Mn(e),i&512&&t!==null&&cr(t,t.return),e.flags&32){var u=e.stateNode;try{xr(u,"")}catch(ee){Le(e,e.return,ee)}}if(i&4&&(u=e.stateNode,u!=null)){var d=e.memoizedProps,m=t!==null?t.memoizedProps:d,h=e.type,b=e.updateQueue;if(e.updateQueue=null,b!==null)try{h==="input"&&d.type==="radio"&&d.name!=null&&Gs(u,d),Za(h,m);var F=Za(h,d);for(m=0;m<b.length;m+=2){var B=b[m],H=b[m+1];B==="style"?tu(u,H):B==="dangerouslySetInnerHTML"?eu(u,H):B==="children"?xr(u,H):x(u,B,H,F)}switch(h){case"input":Ga(u,d);break;case"textarea":Js(u,d);break;case"select":var U=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!d.multiple;var G=d.value;G!=null?Ht(u,!!d.multiple,G,!1):U!==!!d.multiple&&(d.defaultValue!=null?Ht(u,!!d.multiple,d.defaultValue,!0):Ht(u,!!d.multiple,d.multiple?[]:"",!1))}u[Wr]=d}catch(ee){Le(e,e.return,ee)}}break;case 6:if(Rn(n,e),Mn(e),i&4){if(e.stateNode===null)throw Error(a(162));u=e.stateNode,d=e.memoizedProps;try{u.nodeValue=d}catch(ee){Le(e,e.return,ee)}}break;case 3:if(Rn(n,e),Mn(e),i&4&&t!==null&&t.memoizedState.isDehydrated)try{jr(n.containerInfo)}catch(ee){Le(e,e.return,ee)}break;case 4:Rn(n,e),Mn(e);break;case 13:Rn(n,e),Mn(e),u=e.child,u.flags&8192&&(d=u.memoizedState!==null,u.stateNode.isHidden=d,!d||u.alternate!==null&&u.alternate.memoizedState!==null||(El=_e())),i&4&&kd(e);break;case 22:if(B=t!==null&&t.memoizedState!==null,e.mode&1?(qe=(F=qe)||B,Rn(n,e),qe=F):Rn(n,e),Mn(e),i&8192){if(F=e.memoizedState!==null,(e.stateNode.isHidden=F)&&!B&&(e.mode&1)!==0)for(q=e,B=e.child;B!==null;){for(H=q=B;q!==null;){switch(U=q,G=U.child,U.tag){case 0:case 11:case 14:case 15:no(4,U,U.return);break;case 1:cr(U,U.return);var Z=U.stateNode;if(typeof Z.componentWillUnmount=="function"){i=U,t=U.return;try{n=i,Z.props=n.memoizedProps,Z.state=n.memoizedState,Z.componentWillUnmount()}catch(ee){Le(i,t,ee)}}break;case 5:cr(U,U.return);break;case 22:if(U.memoizedState!==null){Cd(H);continue}}G!==null?(G.return=U,q=G):Cd(H)}B=B.sibling}e:for(B=null,H=e;;){if(H.tag===5){if(B===null){B=H;try{u=H.stateNode,F?(d=u.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(h=H.stateNode,b=H.memoizedProps.style,m=b!=null&&b.hasOwnProperty("display")?b.display:null,h.style.display=nu("display",m))}catch(ee){Le(e,e.return,ee)}}}else if(H.tag===6){if(B===null)try{H.stateNode.nodeValue=F?"":H.memoizedProps}catch(ee){Le(e,e.return,ee)}}else if((H.tag!==22&&H.tag!==23||H.memoizedState===null||H===e)&&H.child!==null){H.child.return=H,H=H.child;continue}if(H===e)break e;for(;H.sibling===null;){if(H.return===null||H.return===e)break e;B===H&&(B=null),H=H.return}B===H&&(B=null),H.sibling.return=H.return,H=H.sibling}}break;case 19:Rn(n,e),Mn(e),i&4&&kd(e);break;case 21:break;default:Rn(n,e),Mn(e)}}function Mn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(yd(t)){var i=t;break e}t=t.return}throw Error(a(160))}switch(i.tag){case 5:var u=i.stateNode;i.flags&32&&(xr(u,""),i.flags&=-33);var d=vd(e);xl(e,d,u);break;case 3:case 4:var m=i.stateNode.containerInfo,h=vd(e);bl(e,h,m);break;default:throw Error(a(161))}}catch(b){Le(e,e.return,b)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function gg(e,n,t){q=e,xd(e)}function xd(e,n,t){for(var i=(e.mode&1)!==0;q!==null;){var u=q,d=u.child;if(u.tag===22&&i){var m=u.memoizedState!==null||sa;if(!m){var h=u.alternate,b=h!==null&&h.memoizedState!==null||qe;h=sa;var F=qe;if(sa=m,(qe=b)&&!F)for(q=u;q!==null;)m=q,b=m.child,m.tag===22&&m.memoizedState!==null?Ed(u):b!==null?(b.return=m,q=b):Ed(u);for(;d!==null;)q=d,xd(d),d=d.sibling;q=u,sa=h,qe=F}Sd(e)}else(u.subtreeFlags&8772)!==0&&d!==null?(d.return=u,q=d):Sd(e)}}function Sd(e){for(;q!==null;){var n=q;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:qe||ua(5,n);break;case 1:var i=n.stateNode;if(n.flags&4&&!qe)if(t===null)i.componentDidMount();else{var u=n.elementType===n.type?t.memoizedProps:On(n.type,t.memoizedProps);i.componentDidUpdate(u,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var d=n.updateQueue;d!==null&&kc(n,d,i);break;case 3:var m=n.updateQueue;if(m!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}kc(n,m,t)}break;case 5:var h=n.stateNode;if(t===null&&n.flags&4){t=h;var b=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":b.autoFocus&&t.focus();break;case"img":b.src&&(t.src=b.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var F=n.alternate;if(F!==null){var B=F.memoizedState;if(B!==null){var H=B.dehydrated;H!==null&&jr(H)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}qe||n.flags&512&&kl(n)}catch(U){Le(n,n.return,U)}}if(n===e){q=null;break}if(t=n.sibling,t!==null){t.return=n.return,q=t;break}q=n.return}}function Cd(e){for(;q!==null;){var n=q;if(n===e){q=null;break}var t=n.sibling;if(t!==null){t.return=n.return,q=t;break}q=n.return}}function Ed(e){for(;q!==null;){var n=q;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{ua(4,n)}catch(b){Le(n,t,b)}break;case 1:var i=n.stateNode;if(typeof i.componentDidMount=="function"){var u=n.return;try{i.componentDidMount()}catch(b){Le(n,u,b)}}var d=n.return;try{kl(n)}catch(b){Le(n,d,b)}break;case 5:var m=n.return;try{kl(n)}catch(b){Le(n,m,b)}}}catch(b){Le(n,n.return,b)}if(n===e){q=null;break}var h=n.sibling;if(h!==null){h.return=n.return,q=h;break}q=n.return}}var hg=Math.ceil,ca=j.ReactCurrentDispatcher,Sl=j.ReactCurrentOwner,kn=j.ReactCurrentBatchConfig,pe=0,Ue=null,Te=null,We=0,mn=0,dr=dt(0),Ie=0,to=null,At=0,da=0,Cl=0,ro=null,ln=null,El=0,fr=1/0,nt=null,fa=!1,Pl=null,yt=null,pa=!1,vt=null,ma=0,oo=0,Ol=null,ga=-1,ha=0;function nn(){return(pe&6)!==0?_e():ga!==-1?ga:ga=_e()}function wt(e){return(e.mode&1)===0?1:(pe&2)!==0&&We!==0?We&-We:Zm.transition!==null?(ha===0&&(ha=yu()),ha):(e=ke,e!==0||(e=window.event,e=e===void 0?16:Pu(e.type)),e)}function zn(e,n,t,i){if(50<oo)throw oo=0,Ol=null,Error(a(185));Lr(e,t,i),((pe&2)===0||e!==Ue)&&(e===Ue&&((pe&2)===0&&(da|=t),Ie===4&&kt(e,We)),sn(e,i),t===1&&pe===0&&(n.mode&1)===0&&(fr=_e()+500,Wo&&pt()))}function sn(e,n){var t=e.callbackNode;Zp(e,n);var i=Eo(e,e===Ue?We:0);if(i===0)t!==null&&mu(t),e.callbackNode=null,e.callbackPriority=0;else if(n=i&-i,e.callbackPriority!==n){if(t!=null&&mu(t),n===1)e.tag===0?Xm(Od.bind(null,e)):dc(Od.bind(null,e)),Gm(function(){(pe&6)===0&&pt()}),t=null;else{switch(vu(i)){case 1:t=ii;break;case 4:t=gu;break;case 16:t=bo;break;case 536870912:t=hu;break;default:t=bo}t=Fd(t,Pd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Pd(e,n){if(ga=-1,ha=0,(pe&6)!==0)throw Error(a(327));var t=e.callbackNode;if(pr()&&e.callbackNode!==t)return null;var i=Eo(e,e===Ue?We:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||n)n=ya(e,i);else{n=i;var u=pe;pe|=2;var d=Rd();(Ue!==e||We!==n)&&(nt=null,fr=_e()+500,Mt(e,n));do try{wg();break}catch(h){Ld(e,h)}while(!0);Vi(),ca.current=d,pe=u,Te!==null?n=0:(Ue=null,We=0,n=Ie)}if(n!==0){if(n===2&&(u=li(e),u!==0&&(i=u,n=Ll(e,u))),n===1)throw t=to,Mt(e,0),kt(e,i),sn(e,_e()),t;if(n===6)kt(e,i);else{if(u=e.current.alternate,(i&30)===0&&!yg(u)&&(n=ya(e,i),n===2&&(d=li(e),d!==0&&(i=d,n=Ll(e,d))),n===1))throw t=to,Mt(e,0),kt(e,i),sn(e,_e()),t;switch(e.finishedWork=u,e.finishedLanes=i,n){case 0:case 1:throw Error(a(345));case 2:$t(e,ln,nt);break;case 3:if(kt(e,i),(i&130023424)===i&&(n=El+500-_e(),10<n)){if(Eo(e,0)!==0)break;if(u=e.suspendedLanes,(u&i)!==i){nn(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=Ti($t.bind(null,e,ln,nt),n);break}$t(e,ln,nt);break;case 4:if(kt(e,i),(i&4194240)===i)break;for(n=e.eventTimes,u=-1;0<i;){var m=31-Cn(i);d=1<<m,m=n[m],m>u&&(u=m),i&=~d}if(i=u,i=_e()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*hg(i/1960))-i,10<i){e.timeoutHandle=Ti($t.bind(null,e,ln,nt),i);break}$t(e,ln,nt);break;case 5:$t(e,ln,nt);break;default:throw Error(a(329))}}}return sn(e,_e()),e.callbackNode===t?Pd.bind(null,e):null}function Ll(e,n){var t=ro;return e.current.memoizedState.isDehydrated&&(Mt(e,n).flags|=256),e=ya(e,n),e!==2&&(n=ln,ln=t,n!==null&&Rl(n)),e}function Rl(e){ln===null?ln=e:ln.push.apply(ln,e)}function yg(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var u=t[i],d=u.getSnapshot;u=u.value;try{if(!En(d(),u))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function kt(e,n){for(n&=~Cl,n&=~da,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Cn(n),i=1<<t;e[t]=-1,n&=~i}}function Od(e){if((pe&6)!==0)throw Error(a(327));pr();var n=Eo(e,0);if((n&1)===0)return sn(e,_e()),null;var t=ya(e,n);if(e.tag!==0&&t===2){var i=li(e);i!==0&&(n=i,t=Ll(e,i))}if(t===1)throw t=to,Mt(e,0),kt(e,n),sn(e,_e()),t;if(t===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,$t(e,ln,nt),sn(e,_e()),null}function zl(e,n){var t=pe;pe|=1;try{return e(n)}finally{pe=t,pe===0&&(fr=_e()+500,Wo&&pt())}}function It(e){vt!==null&&vt.tag===0&&(pe&6)===0&&pr();var n=pe;pe|=1;var t=kn.transition,i=ke;try{if(kn.transition=null,ke=1,e)return e()}finally{ke=i,kn.transition=t,pe=n,(pe&6)===0&&pt()}}function _l(){mn=dr.current,Se(dr)}function Mt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Qm(t)),Te!==null)for(t=Te.return;t!==null;){var i=t;switch(Di(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Bo();break;case 3:sr(),Se(rn),Se(Qe),nl();break;case 5:Zi(i);break;case 4:sr();break;case 13:Se(Pe);break;case 19:Se(Pe);break;case 10:Ki(i.type._context);break;case 22:case 23:_l()}t=t.return}if(Ue=e,Te=e=bt(e.current,null),We=mn=n,Ie=0,to=null,Cl=da=At=0,ln=ro=null,jt!==null){for(n=0;n<jt.length;n++)if(t=jt[n],i=t.interleaved,i!==null){t.interleaved=null;var u=i.next,d=t.pending;if(d!==null){var m=d.next;d.next=u,i.next=m}t.pending=i}jt=null}return e}function Ld(e,n){do{var t=Te;try{if(Vi(),na.current=aa,ta){for(var i=Oe.memoizedState;i!==null;){var u=i.queue;u!==null&&(u.pending=null),i=i.next}ta=!1}if(Ft=0,De=Ae=Oe=null,qr=!1,Jr=0,Sl.current=null,t===null||t.return===null){Ie=1,to=n,Te=null;break}e:{var d=e,m=t.return,h=t,b=n;if(n=We,h.flags|=32768,b!==null&&typeof b=="object"&&typeof b.then=="function"){var F=b,B=h,H=B.tag;if((B.mode&1)===0&&(H===0||H===11||H===15)){var U=B.alternate;U?(B.updateQueue=U.updateQueue,B.memoizedState=U.memoizedState,B.lanes=U.lanes):(B.updateQueue=null,B.memoizedState=null)}var G=Zc(m);if(G!==null){G.flags&=-257,ed(G,m,h,d,n),G.mode&1&&Xc(d,F,n),n=G,b=F;var Z=n.updateQueue;if(Z===null){var ee=new Set;ee.add(b),n.updateQueue=ee}else Z.add(b);break e}else{if((n&1)===0){Xc(d,F,n),Nl();break e}b=Error(a(426))}}else if(Ee&&h.mode&1){var Ne=Zc(m);if(Ne!==null){(Ne.flags&65536)===0&&(Ne.flags|=256),ed(Ne,m,h,d,n),Hi(ur(b,h));break e}}d=b=ur(b,h),Ie!==4&&(Ie=2),ro===null?ro=[d]:ro.push(d),d=m;do{switch(d.tag){case 3:d.flags|=65536,n&=-n,d.lanes|=n;var z=qc(d,b,n);wc(d,z);break e;case 1:h=b;var C=d.type,N=d.stateNode;if((d.flags&128)===0&&(typeof C.getDerivedStateFromError=="function"||N!==null&&typeof N.componentDidCatch=="function"&&(yt===null||!yt.has(N)))){d.flags|=65536,n&=-n,d.lanes|=n;var V=Jc(d,h,n);wc(d,V);break e}}d=d.return}while(d!==null)}_d(t)}catch(ne){n=ne,Te===t&&t!==null&&(Te=t=t.return);continue}break}while(!0)}function Rd(){var e=ca.current;return ca.current=aa,e===null?aa:e}function Nl(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Ue===null||(At&268435455)===0&&(da&268435455)===0||kt(Ue,We)}function ya(e,n){var t=pe;pe|=2;var i=Rd();(Ue!==e||We!==n)&&(nt=null,Mt(e,n));do try{vg();break}catch(u){Ld(e,u)}while(!0);if(Vi(),pe=t,ca.current=i,Te!==null)throw Error(a(261));return Ue=null,We=0,Ie}function vg(){for(;Te!==null;)zd(Te)}function wg(){for(;Te!==null&&!Wp();)zd(Te)}function zd(e){var n=Td(e.alternate,e,mn);e.memoizedProps=e.pendingProps,n===null?_d(e):Te=n,Sl.current=null}function _d(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=dg(t,n,mn),t!==null){Te=t;return}}else{if(t=fg(t,n),t!==null){t.flags&=32767,Te=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,Te=null;return}}if(n=n.sibling,n!==null){Te=n;return}Te=n=e}while(n!==null);Ie===0&&(Ie=5)}function $t(e,n,t){var i=ke,u=kn.transition;try{kn.transition=null,ke=1,kg(e,n,t,i)}finally{kn.transition=u,ke=i}return null}function kg(e,n,t,i){do pr();while(vt!==null);if((pe&6)!==0)throw Error(a(327));t=e.finishedWork;var u=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var d=t.lanes|t.childLanes;if(em(e,d),e===Ue&&(Te=Ue=null,We=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||pa||(pa=!0,Fd(bo,function(){return pr(),null})),d=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||d){d=kn.transition,kn.transition=null;var m=ke;ke=1;var h=pe;pe|=4,Sl.current=null,mg(e,t),bd(t,e),Dm(Ni),Lo=!!_i,Ni=_i=null,e.current=t,gg(t),Vp(),pe=h,ke=m,kn.transition=d}else e.current=t;if(pa&&(pa=!1,vt=e,ma=u),d=e.pendingLanes,d===0&&(yt=null),Gp(t.stateNode),sn(e,_e()),n!==null)for(i=e.onRecoverableError,t=0;t<n.length;t++)u=n[t],i(u.value,{componentStack:u.stack,digest:u.digest});if(fa)throw fa=!1,e=Pl,Pl=null,e;return(ma&1)!==0&&e.tag!==0&&pr(),d=e.pendingLanes,(d&1)!==0?e===Ol?oo++:(oo=0,Ol=e):oo=0,pt(),null}function pr(){if(vt!==null){var e=vu(ma),n=kn.transition,t=ke;try{if(kn.transition=null,ke=16>e?16:e,vt===null)var i=!1;else{if(e=vt,vt=null,ma=0,(pe&6)!==0)throw Error(a(331));var u=pe;for(pe|=4,q=e.current;q!==null;){var d=q,m=d.child;if((q.flags&16)!==0){var h=d.deletions;if(h!==null){for(var b=0;b<h.length;b++){var F=h[b];for(q=F;q!==null;){var B=q;switch(B.tag){case 0:case 11:case 15:no(8,B,d)}var H=B.child;if(H!==null)H.return=B,q=H;else for(;q!==null;){B=q;var U=B.sibling,G=B.return;if(hd(B),B===F){q=null;break}if(U!==null){U.return=G,q=U;break}q=G}}}var Z=d.alternate;if(Z!==null){var ee=Z.child;if(ee!==null){Z.child=null;do{var Ne=ee.sibling;ee.sibling=null,ee=Ne}while(ee!==null)}}q=d}}if((d.subtreeFlags&2064)!==0&&m!==null)m.return=d,q=m;else e:for(;q!==null;){if(d=q,(d.flags&2048)!==0)switch(d.tag){case 0:case 11:case 15:no(9,d,d.return)}var z=d.sibling;if(z!==null){z.return=d.return,q=z;break e}q=d.return}}var C=e.current;for(q=C;q!==null;){m=q;var N=m.child;if((m.subtreeFlags&2064)!==0&&N!==null)N.return=m,q=N;else e:for(m=C;q!==null;){if(h=q,(h.flags&2048)!==0)try{switch(h.tag){case 0:case 11:case 15:ua(9,h)}}catch(ne){Le(h,h.return,ne)}if(h===m){q=null;break e}var V=h.sibling;if(V!==null){V.return=h.return,q=V;break e}q=h.return}}if(pe=u,pt(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(xo,e)}catch{}i=!0}return i}finally{ke=t,kn.transition=n}}return!1}function Nd(e,n,t){n=ur(t,n),n=qc(e,n,1),e=gt(e,n,1),n=nn(),e!==null&&(Lr(e,1,n),sn(e,n))}function Le(e,n,t){if(e.tag===3)Nd(e,e,t);else for(;n!==null;){if(n.tag===3){Nd(n,e,t);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(yt===null||!yt.has(i))){e=ur(t,e),e=Jc(n,e,1),n=gt(n,e,1),e=nn(),n!==null&&(Lr(n,1,e),sn(n,e));break}}n=n.return}}function bg(e,n,t){var i=e.pingCache;i!==null&&i.delete(n),n=nn(),e.pingedLanes|=e.suspendedLanes&t,Ue===e&&(We&t)===t&&(Ie===4||Ie===3&&(We&130023424)===We&&500>_e()-El?Mt(e,0):Cl|=t),sn(e,n)}function jd(e,n){n===0&&((e.mode&1)===0?n=1:(n=Co,Co<<=1,(Co&130023424)===0&&(Co=4194304)));var t=nn();e=Xn(e,n),e!==null&&(Lr(e,n,t),sn(e,t))}function xg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),jd(e,t)}function Sg(e,n){var t=0;switch(e.tag){case 13:var i=e.stateNode,u=e.memoizedState;u!==null&&(t=u.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(a(314))}i!==null&&i.delete(n),jd(e,t)}var Td;Td=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||rn.current)an=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return an=!1,cg(e,n,t);an=(e.flags&131072)!==0}else an=!1,Ee&&(n.flags&1048576)!==0&&fc(n,Ko,n.index);switch(n.lanes=0,n.tag){case 2:var i=n.type;la(e,n),e=n.pendingProps;var u=nr(n,Qe.current);ir(n,t),u=ol(null,n,i,e,u,t);var d=al();return n.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,on(i)?(d=!0,Ho(n)):d=!1,n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Yi(n),u.updater=Xo,n.stateNode=u,u._reactInternals=n,Ji(n,i,e,t),n=pl(null,n,i,!0,d,t)):(n.tag=0,Ee&&d&&$i(n),en(null,n,u,t),n=n.child),n;case 16:i=n.elementType;e:{switch(la(e,n),e=n.pendingProps,u=i._init,i=u(i._payload),n.type=i,u=n.tag=Eg(i),e=On(i,e),u){case 0:n=fl(null,n,i,e,t);break e;case 1:n=id(null,n,i,e,t);break e;case 11:n=nd(null,n,i,e,t);break e;case 14:n=td(null,n,i,On(i.type,e),t);break e}throw Error(a(306,i,""))}return n;case 0:return i=n.type,u=n.pendingProps,u=n.elementType===i?u:On(i,u),fl(e,n,i,u,t);case 1:return i=n.type,u=n.pendingProps,u=n.elementType===i?u:On(i,u),id(e,n,i,u,t);case 3:e:{if(ld(n),e===null)throw Error(a(387));i=n.pendingProps,d=n.memoizedState,u=d.element,vc(e,n),Jo(n,i,null,t);var m=n.memoizedState;if(i=m.element,d.isDehydrated)if(d={element:i,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){u=ur(Error(a(423)),n),n=sd(e,n,i,t,u);break e}else if(i!==u){u=ur(Error(a(424)),n),n=sd(e,n,i,t,u);break e}else for(pn=ct(n.stateNode.containerInfo.firstChild),fn=n,Ee=!0,Pn=null,t=Oc(n,null,i,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(or(),i===u){n=et(e,n,t);break e}en(e,n,i,t)}n=n.child}return n;case 5:return Lc(n),e===null&&Bi(n),i=n.type,u=n.pendingProps,d=e!==null?e.memoizedProps:null,m=u.children,ji(i,u)?m=null:d!==null&&ji(i,d)&&(n.flags|=32),ad(e,n),en(e,n,m,t),n.child;case 6:return e===null&&Bi(n),null;case 13:return ud(e,n,t);case 4:return Xi(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=lr(n,null,i,t):en(e,n,i,t),n.child;case 11:return i=n.type,u=n.pendingProps,u=n.elementType===i?u:On(i,u),nd(e,n,i,u,t);case 7:return en(e,n,n.pendingProps,t),n.child;case 8:return en(e,n,n.pendingProps.children,t),n.child;case 12:return en(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(i=n.type._context,u=n.pendingProps,d=n.memoizedProps,m=u.value,be(Go,i._currentValue),i._currentValue=m,d!==null)if(En(d.value,m)){if(d.children===u.children&&!rn.current){n=et(e,n,t);break e}}else for(d=n.child,d!==null&&(d.return=n);d!==null;){var h=d.dependencies;if(h!==null){m=d.child;for(var b=h.firstContext;b!==null;){if(b.context===i){if(d.tag===1){b=Zn(-1,t&-t),b.tag=2;var F=d.updateQueue;if(F!==null){F=F.shared;var B=F.pending;B===null?b.next=b:(b.next=B.next,B.next=b),F.pending=b}}d.lanes|=t,b=d.alternate,b!==null&&(b.lanes|=t),Qi(d.return,t,n),h.lanes|=t;break}b=b.next}}else if(d.tag===10)m=d.type===n.type?null:d.child;else if(d.tag===18){if(m=d.return,m===null)throw Error(a(341));m.lanes|=t,h=m.alternate,h!==null&&(h.lanes|=t),Qi(m,t,n),m=d.sibling}else m=d.child;if(m!==null)m.return=d;else for(m=d;m!==null;){if(m===n){m=null;break}if(d=m.sibling,d!==null){d.return=m.return,m=d;break}m=m.return}d=m}en(e,n,u.children,t),n=n.child}return n;case 9:return u=n.type,i=n.pendingProps.children,ir(n,t),u=vn(u),i=i(u),n.flags|=1,en(e,n,i,t),n.child;case 14:return i=n.type,u=On(i,n.pendingProps),u=On(i.type,u),td(e,n,i,u,t);case 15:return rd(e,n,n.type,n.pendingProps,t);case 17:return i=n.type,u=n.pendingProps,u=n.elementType===i?u:On(i,u),la(e,n),n.tag=1,on(i)?(e=!0,Ho(n)):e=!1,ir(n,t),Sc(n,i,u),Ji(n,i,u,t),pl(null,n,i,!0,e,t);case 19:return dd(e,n,t);case 22:return od(e,n,t)}throw Error(a(156,n.tag))};function Fd(e,n){return pu(e,n)}function Cg(e,n,t,i){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(e,n,t,i){return new Cg(e,n,t,i)}function jl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Eg(e){if(typeof e=="function")return jl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ce)return 11;if(e===Ze)return 14}return 2}function bt(e,n){var t=e.alternate;return t===null?(t=bn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function va(e,n,t,i,u,d){var m=2;if(i=e,typeof e=="function")jl(e)&&(m=1);else if(typeof e=="string")m=5;else e:switch(e){case D:return Dt(t.children,u,d,n);case J:m=8,u|=8;break;case Q:return e=bn(12,t,n,u|2),e.elementType=Q,e.lanes=d,e;case $e:return e=bn(13,t,n,u),e.elementType=$e,e.lanes=d,e;case Re:return e=bn(19,t,n,u),e.elementType=Re,e.lanes=d,e;case he:return wa(t,u,d,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case te:m=10;break e;case ge:m=9;break e;case Ce:m=11;break e;case Ze:m=14;break e;case ze:m=16,i=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return n=bn(m,t,n,u),n.elementType=e,n.type=i,n.lanes=d,n}function Dt(e,n,t,i){return e=bn(7,e,i,n),e.lanes=t,e}function wa(e,n,t,i){return e=bn(22,e,i,n),e.elementType=he,e.lanes=t,e.stateNode={isHidden:!1},e}function Tl(e,n,t){return e=bn(6,e,null,n),e.lanes=t,e}function Fl(e,n,t){return n=bn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Pg(e,n,t,i,u){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=si(0),this.expirationTimes=si(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=si(0),this.identifierPrefix=i,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function Al(e,n,t,i,u,d,m,h,b){return e=new Pg(e,n,t,h,b),n===1?(n=1,d===!0&&(n|=8)):n=0,d=bn(3,null,null,n),e.current=d,d.stateNode=e,d.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yi(d),e}function Og(e,n,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:i==null?null:""+i,children:e,containerInfo:n,implementation:t}}function Ad(e){if(!e)return ft;e=e._reactInternals;e:{if(Lt(e)!==e||e.tag!==1)throw Error(a(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(on(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(a(171))}if(e.tag===1){var t=e.type;if(on(t))return uc(e,t,n)}return n}function Id(e,n,t,i,u,d,m,h,b){return e=Al(t,i,!0,e,u,d,m,h,b),e.context=Ad(null),t=e.current,i=nn(),u=wt(t),d=Zn(i,u),d.callback=n??null,gt(t,d,u),e.current.lanes=u,Lr(e,u,i),sn(e,i),e}function ka(e,n,t,i){var u=n.current,d=nn(),m=wt(u);return t=Ad(t),n.context===null?n.context=t:n.pendingContext=t,n=Zn(d,m),n.payload={element:e},i=i===void 0?null:i,i!==null&&(n.callback=i),e=gt(u,n,m),e!==null&&(zn(e,u,m,d),qo(e,u,m)),m}function ba(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Md(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Il(e,n){Md(e,n),(e=e.alternate)&&Md(e,n)}function Lg(){return null}var $d=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ml(e){this._internalRoot=e}xa.prototype.render=Ml.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));ka(e,n,null,null)},xa.prototype.unmount=Ml.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;It(function(){ka(null,e,null,null)}),n[Gn]=null}};function xa(e){this._internalRoot=e}xa.prototype.unstable_scheduleHydration=function(e){if(e){var n=bu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<lt.length&&n!==0&&n<lt[t].priority;t++);lt.splice(t,0,e),t===0&&Cu(e)}};function $l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Sa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Dd(){}function Rg(e,n,t,i,u){if(u){if(typeof i=="function"){var d=i;i=function(){var F=ba(m);d.call(F)}}var m=Id(n,i,e,0,null,!1,!1,"",Dd);return e._reactRootContainer=m,e[Gn]=m.current,Br(e.nodeType===8?e.parentNode:e),It(),m}for(;u=e.lastChild;)e.removeChild(u);if(typeof i=="function"){var h=i;i=function(){var F=ba(b);h.call(F)}}var b=Al(e,0,!1,null,null,!1,!1,"",Dd);return e._reactRootContainer=b,e[Gn]=b.current,Br(e.nodeType===8?e.parentNode:e),It(function(){ka(n,b,t,i)}),b}function Ca(e,n,t,i,u){var d=t._reactRootContainer;if(d){var m=d;if(typeof u=="function"){var h=u;u=function(){var b=ba(m);h.call(b)}}ka(n,m,e,u)}else m=Rg(t,n,e,u,i);return ba(m)}wu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Or(n.pendingLanes);t!==0&&(ui(n,t|1),sn(n,_e()),(pe&6)===0&&(fr=_e()+500,pt()))}break;case 13:It(function(){var i=Xn(e,1);if(i!==null){var u=nn();zn(i,e,1,u)}}),Il(e,1)}},ci=function(e){if(e.tag===13){var n=Xn(e,134217728);if(n!==null){var t=nn();zn(n,e,134217728,t)}Il(e,134217728)}},ku=function(e){if(e.tag===13){var n=wt(e),t=Xn(e,n);if(t!==null){var i=nn();zn(t,e,n,i)}Il(e,n)}},bu=function(){return ke},xu=function(e,n){var t=ke;try{return ke=e,n()}finally{ke=t}},ti=function(e,n,t){switch(n){case"input":if(Ga(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var i=t[n];if(i!==e&&i.form===e.form){var u=Uo(i);if(!u)throw Error(a(90));rt(i),Ga(i,u)}}}break;case"textarea":Js(e,t);break;case"select":n=t.value,n!=null&&Ht(e,!!t.multiple,n,!1)}},iu=zl,lu=It;var zg={usingClientEntryPoint:!1,Events:[Vr,Zt,Uo,ou,au,zl]},ao={findFiberByHostInstance:Rt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},_g={bundleType:ao.bundleType,version:ao.version,rendererPackageName:ao.rendererPackageName,rendererConfig:ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:j.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=du(e),e===null?null:e.stateNode},findFiberByHostInstance:ao.findFiberByHostInstance||Lg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ea.isDisabled&&Ea.supportsFiber)try{xo=Ea.inject(_g),Tn=Ea}catch{}}return un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zg,un.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$l(n))throw Error(a(200));return Og(e,n,null,t)},un.createRoot=function(e,n){if(!$l(e))throw Error(a(299));var t=!1,i="",u=$d;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),n=Al(e,1,!1,null,null,t,!1,i,u),e[Gn]=n.current,Br(e.nodeType===8?e.parentNode:e),new Ml(n)},un.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=du(n),e=e===null?null:e.stateNode,e},un.flushSync=function(e){return It(e)},un.hydrate=function(e,n,t){if(!Sa(n))throw Error(a(200));return Ca(null,e,n,!0,t)},un.hydrateRoot=function(e,n,t){if(!$l(e))throw Error(a(405));var i=t!=null&&t.hydratedSources||null,u=!1,d="",m=$d;if(t!=null&&(t.unstable_strictMode===!0&&(u=!0),t.identifierPrefix!==void 0&&(d=t.identifierPrefix),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),n=Id(n,null,e,1,t??null,u,!1,d,m),e[Gn]=n.current,Br(e),i)for(e=0;e<i.length;e++)t=i[e],u=t._getVersion,u=u(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,u]:n.mutableSourceEagerHydrationData.push(t,u);return new xa(n)},un.render=function(e,n,t){if(!Sa(n))throw Error(a(200));return Ca(null,e,n,!1,t)},un.unmountComponentAtNode=function(e){if(!Sa(e))throw Error(a(40));return e._reactRootContainer?(It(function(){Ca(null,null,e,!1,function(){e._reactRootContainer=null,e[Gn]=null})}),!0):!1},un.unstable_batchedUpdates=zl,un.unstable_renderSubtreeIntoContainer=function(e,n,t,i){if(!Sa(t))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return Ca(e,n,t,!1,i)},un.version="18.2.0-next-9e3b772b8-20220608",un}var kf;function Jh(){if(kf)return Hl.exports;kf=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),Hl.exports=qh(),Hl.exports}var bf;function Xh(){if(bf)return La;bf=1;var r=Jh();return La.createRoot=r.createRoot,La.hydrateRoot=r.hydrateRoot,La}var Zh=Xh();/**
 * @remix-run/router v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function so(){return so=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(r[l]=a[l])}return r},so.apply(this,arguments)}var St;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(St||(St={}));const xf="popstate";function ey(r){r===void 0&&(r={});function o(s,c){let{pathname:f="/",search:p="",hash:g=""}=Ut(s.location.hash.substr(1));return ts("",{pathname:f,search:p,hash:g},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function a(s,c){let f=s.document.querySelector("base"),p="";if(f&&f.getAttribute("href")){let g=s.location.href,w=g.indexOf("#");p=w===-1?g:g.slice(0,w)}return p+"#"+(typeof c=="string"?c:Aa(c))}function l(s,c){ny(s.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(c)+")")}return ry(o,a,l,r)}function Me(r,o){if(r===!1||r===null||typeof r>"u")throw new Error(o)}function ny(r,o){if(!r){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function ty(){return Math.random().toString(36).substr(2,8)}function Sf(r,o){return{usr:r.state,key:r.key,idx:o}}function ts(r,o,a,l){return a===void 0&&(a=null),so({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof o=="string"?Ut(o):o,{state:a,key:o&&o.key||l||ty()})}function Aa(r){let{pathname:o="/",search:a="",hash:l=""}=r;return a&&a!=="?"&&(o+=a.charAt(0)==="?"?a:"?"+a),l&&l!=="#"&&(o+=l.charAt(0)==="#"?l:"#"+l),o}function Ut(r){let o={};if(r){let a=r.indexOf("#");a>=0&&(o.hash=r.substr(a),r=r.substr(0,a));let l=r.indexOf("?");l>=0&&(o.search=r.substr(l),r=r.substr(0,l)),r&&(o.pathname=r)}return o}function ry(r,o,a,l){l===void 0&&(l={});let{window:s=document.defaultView,v5Compat:c=!1}=l,f=s.history,p=St.Pop,g=null,w=S();w==null&&(w=0,f.replaceState(so({},f.state,{idx:w}),""));function S(){return(f.state||{idx:null}).idx}function v(){p=St.Pop;let R=S(),_=R==null?null:R-w;w=R,g&&g({action:p,location:O.location,delta:_})}function L(R,_){p=St.Push;let y=ts(O.location,R,_);a&&a(y,R),w=S()+1;let x=Sf(y,w),j=O.createHref(y);try{f.pushState(x,"",j)}catch{s.location.assign(j)}c&&g&&g({action:p,location:O.location,delta:1})}function T(R,_){p=St.Replace;let y=ts(O.location,R,_);a&&a(y,R),w=S();let x=Sf(y,w),j=O.createHref(y);f.replaceState(x,"",j),c&&g&&g({action:p,location:O.location,delta:0})}function A(R){let _=s.location.origin!=="null"?s.location.origin:s.location.href,y=typeof R=="string"?R:Aa(R);return Me(_,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,_)}let O={get action(){return p},get location(){return r(s,f)},listen(R){if(g)throw new Error("A history only accepts one active listener");return s.addEventListener(xf,v),g=R,()=>{s.removeEventListener(xf,v),g=null}},createHref(R){return o(s,R)},createURL:A,encodeLocation(R){let _=A(R);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:L,replace:T,go(R){return f.go(R)}};return O}var Cf;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(Cf||(Cf={}));function oy(r,o,a){a===void 0&&(a="/");let l=typeof o=="string"?Ut(o):o,s=Ns(l.pathname||"/",a);if(s==null)return null;let c=rp(r);ay(c);let f=null;for(let p=0;f==null&&p<c.length;++p)f=my(c[p],yy(s));return f}function rp(r,o,a,l){o===void 0&&(o=[]),a===void 0&&(a=[]),l===void 0&&(l="");let s=(c,f,p)=>{let g={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};g.relativePath.startsWith("/")&&(Me(g.relativePath.startsWith(l),'Absolute route path "'+g.relativePath+'" nested under path '+('"'+l+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),g.relativePath=g.relativePath.slice(l.length));let w=Et([l,g.relativePath]),S=a.concat(g);c.children&&c.children.length>0&&(Me(c.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+w+'".')),rp(c.children,o,S,w)),!(c.path==null&&!c.index)&&o.push({path:w,score:fy(w,c.index),routesMeta:S})};return r.forEach((c,f)=>{var p;if(c.path===""||!((p=c.path)!=null&&p.includes("?")))s(c,f);else for(let g of op(c.path))s(c,f,g)}),o}function op(r){let o=r.split("/");if(o.length===0)return[];let[a,...l]=o,s=a.endsWith("?"),c=a.replace(/\?$/,"");if(l.length===0)return s?[c,""]:[c];let f=op(l.join("/")),p=[];return p.push(...f.map(g=>g===""?c:[c,g].join("/"))),s&&p.push(...f),p.map(g=>r.startsWith("/")&&g===""?"/":g)}function ay(r){r.sort((o,a)=>o.score!==a.score?a.score-o.score:py(o.routesMeta.map(l=>l.childrenIndex),a.routesMeta.map(l=>l.childrenIndex)))}const iy=/^:\w+$/,ly=3,sy=2,uy=1,cy=10,dy=-2,Ef=r=>r==="*";function fy(r,o){let a=r.split("/"),l=a.length;return a.some(Ef)&&(l+=dy),o&&(l+=sy),a.filter(s=>!Ef(s)).reduce((s,c)=>s+(iy.test(c)?ly:c===""?uy:cy),l)}function py(r,o){return r.length===o.length&&r.slice(0,-1).every((l,s)=>l===o[s])?r[r.length-1]-o[o.length-1]:0}function my(r,o){let{routesMeta:a}=r,l={},s="/",c=[];for(let f=0;f<a.length;++f){let p=a[f],g=f===a.length-1,w=s==="/"?o:o.slice(s.length)||"/",S=gy({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},w);if(!S)return null;Object.assign(l,S.params);let v=p.route;c.push({params:l,pathname:Et([s,S.pathname]),pathnameBase:by(Et([s,S.pathnameBase])),route:v}),S.pathnameBase!=="/"&&(s=Et([s,S.pathnameBase]))}return c}function gy(r,o){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[a,l]=hy(r.path,r.caseSensitive,r.end),s=o.match(a);if(!s)return null;let c=s[0],f=c.replace(/(.)\/+$/,"$1"),p=s.slice(1);return{params:l.reduce((w,S,v)=>{if(S==="*"){let L=p[v]||"";f=c.slice(0,c.length-L.length).replace(/(.)\/+$/,"$1")}return w[S]=vy(p[v]||"",S),w},{}),pathname:c,pathnameBase:f,pattern:r}}function hy(r,o,a){o===void 0&&(o=!1),a===void 0&&(a=!0),js(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let l=[],s="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(f,p)=>(l.push(p),"/([^\\/]+)"));return r.endsWith("*")?(l.push("*"),s+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?s+="\\/*$":r!==""&&r!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,o?void 0:"i"),l]}function yy(r){try{return decodeURI(r)}catch(o){return js(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+o+").")),r}}function vy(r,o){try{return decodeURIComponent(r)}catch(a){return js(!1,'The value for the URL param "'+o+'" will not be decoded because'+(' the string "'+r+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+a+").")),r}}function Ns(r,o){if(o==="/")return r;if(!r.toLowerCase().startsWith(o.toLowerCase()))return null;let a=o.endsWith("/")?o.length-1:o.length,l=r.charAt(a);return l&&l!=="/"?null:r.slice(a)||"/"}function js(r,o){if(!r){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function wy(r,o){o===void 0&&(o="/");let{pathname:a,search:l="",hash:s=""}=typeof r=="string"?Ut(r):r;return{pathname:a?a.startsWith("/")?a:ky(a,o):o,search:xy(l),hash:Sy(s)}}function ky(r,o){let a=o.replace(/\/+$/,"").split("/");return r.split("/").forEach(s=>{s===".."?a.length>1&&a.pop():s!=="."&&a.push(s)}),a.length>1?a.join("/"):"/"}function Kl(r,o,a,l){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+o+"` field ["+JSON.stringify(l)+"].  Please separate it out to the ")+("`to."+a+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ap(r){return r.filter((o,a)=>a===0||o.route.path&&o.route.path.length>0)}function ip(r,o,a,l){l===void 0&&(l=!1);let s;typeof r=="string"?s=Ut(r):(s=so({},r),Me(!s.pathname||!s.pathname.includes("?"),Kl("?","pathname","search",s)),Me(!s.pathname||!s.pathname.includes("#"),Kl("#","pathname","hash",s)),Me(!s.search||!s.search.includes("#"),Kl("#","search","hash",s)));let c=r===""||s.pathname==="",f=c?"/":s.pathname,p;if(l||f==null)p=a;else{let v=o.length-1;if(f.startsWith("..")){let L=f.split("/");for(;L[0]==="..";)L.shift(),v-=1;s.pathname=L.join("/")}p=v>=0?o[v]:"/"}let g=wy(s,p),w=f&&f!=="/"&&f.endsWith("/"),S=(c||f===".")&&a.endsWith("/");return!g.pathname.endsWith("/")&&(w||S)&&(g.pathname+="/"),g}const Et=r=>r.join("/").replace(/\/\/+/g,"/"),by=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),xy=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Sy=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Cy(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const lp=["post","put","patch","delete"];new Set(lp);const Ey=["get",...lp];new Set(Ey);/**
 * React Router v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rs(){return rs=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(r[l]=a[l])}return r},rs.apply(this,arguments)}const sp=$.createContext(null),Ts=$.createContext(null),wr=$.createContext(null),Ba=$.createContext(null),Ot=$.createContext({outlet:null,matches:[]}),up=$.createContext(null);function Py(r,o){let{relative:a}=o===void 0?{}:o;mo()||Me(!1);let{basename:l,navigator:s}=$.useContext(wr),{hash:c,pathname:f,search:p}=Fs(r,{relative:a}),g=f;return l!=="/"&&(g=f==="/"?l:Et([l,f])),s.createHref({pathname:g,search:p,hash:c})}function mo(){return $.useContext(Ba)!=null}function go(){return mo()||Me(!1),$.useContext(Ba).location}function ho(){mo()||Me(!1);let{basename:r,navigator:o}=$.useContext(wr),{matches:a}=$.useContext(Ot),{pathname:l}=go(),s=JSON.stringify(ap(a).map(p=>p.pathnameBase)),c=$.useRef(!1);return $.useEffect(()=>{c.current=!0}),$.useCallback(function(p,g){if(g===void 0&&(g={}),!c.current)return;if(typeof p=="number"){o.go(p);return}let w=ip(p,JSON.parse(s),l,g.relative==="path");r!=="/"&&(w.pathname=w.pathname==="/"?r:Et([r,w.pathname])),(g.replace?o.replace:o.push)(w,g.state,g)},[r,o,s,l])}const Oy=$.createContext(null);function Ly(r){let o=$.useContext(Ot).outlet;return o&&$.createElement(Oy.Provider,{value:r},o)}function cp(){let{matches:r}=$.useContext(Ot),o=r[r.length-1];return o?o.params:{}}function Fs(r,o){let{relative:a}=o===void 0?{}:o,{matches:l}=$.useContext(Ot),{pathname:s}=go(),c=JSON.stringify(ap(l).map(f=>f.pathnameBase));return $.useMemo(()=>ip(r,JSON.parse(c),s,a==="path"),[r,c,s,a])}function Ry(r,o){mo()||Me(!1);let{navigator:a}=$.useContext(wr),l=$.useContext(Ts),{matches:s}=$.useContext(Ot),c=s[s.length-1],f=c?c.params:{};c&&c.pathname;let p=c?c.pathnameBase:"/";c&&c.route;let g=go(),w;if(o){var S;let O=typeof o=="string"?Ut(o):o;p==="/"||(S=O.pathname)!=null&&S.startsWith(p)||Me(!1),w=O}else w=g;let v=w.pathname||"/",L=p==="/"?v:v.slice(p.length)||"/",T=oy(r,{pathname:L}),A=jy(T&&T.map(O=>Object.assign({},O,{params:Object.assign({},f,O.params),pathname:Et([p,a.encodeLocation?a.encodeLocation(O.pathname).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?p:Et([p,a.encodeLocation?a.encodeLocation(O.pathnameBase).pathname:O.pathnameBase])})),s,l||void 0);return o&&A?$.createElement(Ba.Provider,{value:{location:rs({pathname:"/",search:"",hash:"",state:null,key:"default"},w),navigationType:St.Pop}},A):A}function zy(){let r=Iy(),o=Cy(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),a=r instanceof Error?r.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return $.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},o),a?$.createElement("pre",{style:s},a):null,null)}class _y extends $.Component{constructor(o){super(o),this.state={location:o.location,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,a){return a.location!==o.location?{error:o.error,location:o.location}:{error:o.error||a.error,location:a.location}}componentDidCatch(o,a){console.error("React Router caught the following error during render",o,a)}render(){return this.state.error?$.createElement(Ot.Provider,{value:this.props.routeContext},$.createElement(up.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ny(r){let{routeContext:o,match:a,children:l}=r,s=$.useContext(sp);return s&&s.static&&s.staticContext&&a.route.errorElement&&(s.staticContext._deepestRenderedBoundaryId=a.route.id),$.createElement(Ot.Provider,{value:o},l)}function jy(r,o,a){if(o===void 0&&(o=[]),r==null)if(a!=null&&a.errors)r=a.matches;else return null;let l=r,s=a?.errors;if(s!=null){let c=l.findIndex(f=>f.route.id&&s?.[f.route.id]);c>=0||Me(!1),l=l.slice(0,Math.min(l.length,c+1))}return l.reduceRight((c,f,p)=>{let g=f.route.id?s?.[f.route.id]:null,w=a?f.route.errorElement||$.createElement(zy,null):null,S=o.concat(l.slice(0,p+1)),v=()=>$.createElement(Ny,{match:f,routeContext:{outlet:c,matches:S}},g?w:f.route.element!==void 0?f.route.element:c);return a&&(f.route.errorElement||p===0)?$.createElement(_y,{location:a.location,component:w,error:g,children:v(),routeContext:{outlet:null,matches:S}}):v()},null)}var Pf;(function(r){r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator"})(Pf||(Pf={}));var Ia;(function(r){r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator"})(Ia||(Ia={}));function Ty(r){let o=$.useContext(Ts);return o||Me(!1),o}function Fy(r){let o=$.useContext(Ot);return o||Me(!1),o}function Ay(r){let o=Fy(),a=o.matches[o.matches.length-1];return a.route.id||Me(!1),a.route.id}function Iy(){var r;let o=$.useContext(up),a=Ty(Ia.UseRouteError),l=Ay(Ia.UseRouteError);return o||((r=a.errors)==null?void 0:r[l])}function os(r){return Ly(r.context)}function Dn(r){Me(!1)}function My(r){let{basename:o="/",children:a=null,location:l,navigationType:s=St.Pop,navigator:c,static:f=!1}=r;mo()&&Me(!1);let p=o.replace(/^\/*/,"/"),g=$.useMemo(()=>({basename:p,navigator:c,static:f}),[p,c,f]);typeof l=="string"&&(l=Ut(l));let{pathname:w="/",search:S="",hash:v="",state:L=null,key:T="default"}=l,A=$.useMemo(()=>{let O=Ns(w,p);return O==null?null:{pathname:O,search:S,hash:v,state:L,key:T}},[p,w,S,v,L,T]);return A==null?null:$.createElement(wr.Provider,{value:g},$.createElement(Ba.Provider,{children:a,value:{location:A,navigationType:s}}))}function $y(r){let{children:o,location:a}=r,l=$.useContext(sp),s=l&&!o?l.router.routes:as(o);return Ry(s,a)}var Of;(function(r){r[r.pending=0]="pending",r[r.success=1]="success",r[r.error=2]="error"})(Of||(Of={}));new Promise(()=>{});function as(r,o){o===void 0&&(o=[]);let a=[];return $.Children.forEach(r,(l,s)=>{if(!$.isValidElement(l))return;if(l.type===$.Fragment){a.push.apply(a,as(l.props.children,o));return}l.type!==Dn&&Me(!1),!l.props.index||!l.props.children||Me(!1);let c=[...o,s],f={id:l.props.id||c.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,errorElement:l.props.errorElement,hasErrorBoundary:l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle};l.props.children&&(f.children=as(l.props.children,c)),a.push(f)}),a}/**
 * React Router DOM v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ma(){return Ma=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(r[l]=a[l])}return r},Ma.apply(this,arguments)}function dp(r,o){if(r==null)return{};var a={},l=Object.keys(r),s,c;for(c=0;c<l.length;c++)s=l[c],!(o.indexOf(s)>=0)&&(a[s]=r[s]);return a}function Dy(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Uy(r,o){return r.button===0&&(!o||o==="_self")&&!Dy(r)}const By=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Hy=["aria-current","caseSensitive","className","end","style","to","children"];function Wy(r){let{basename:o,children:a,window:l}=r,s=$.useRef();s.current==null&&(s.current=ey({window:l,v5Compat:!0}));let c=s.current,[f,p]=$.useState({action:c.action,location:c.location});return $.useLayoutEffect(()=>c.listen(p),[c]),$.createElement(My,{basename:o,children:a,location:f.location,navigationType:f.action,navigator:c})}const Vy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ky=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,As=$.forwardRef(function(o,a){let{onClick:l,relative:s,reloadDocument:c,replace:f,state:p,target:g,to:w,preventScrollReset:S}=o,v=dp(o,By),{basename:L}=$.useContext(wr),T,A=!1;if(typeof w=="string"&&Ky.test(w)&&(T=w,Vy)){let y=new URL(window.location.href),x=w.startsWith("//")?new URL(y.protocol+w):new URL(w),j=Ns(x.pathname,L);x.origin===y.origin&&j!=null?w=j+x.search+x.hash:A=!0}let O=Py(w,{relative:s}),R=Gy(w,{replace:f,state:p,target:g,preventScrollReset:S,relative:s});function _(y){l&&l(y),y.defaultPrevented||R(y)}return $.createElement("a",Ma({},v,{href:T||O,onClick:A||c?l:_,ref:a,target:g}))}),Qy=$.forwardRef(function(o,a){let{"aria-current":l="page",caseSensitive:s=!1,className:c="",end:f=!1,style:p,to:g,children:w}=o,S=dp(o,Hy),v=Fs(g,{relative:S.relative}),L=go(),T=$.useContext(Ts),{navigator:A}=$.useContext(wr),O=A.encodeLocation?A.encodeLocation(v).pathname:v.pathname,R=L.pathname,_=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;s||(R=R.toLowerCase(),_=_?_.toLowerCase():null,O=O.toLowerCase());let y=R===O||!f&&R.startsWith(O)&&R.charAt(O.length)==="/",x=_!=null&&(_===O||!f&&_.startsWith(O)&&_.charAt(O.length)==="/"),j=y?l:void 0,P;typeof c=="function"?P=c({isActive:y,isPending:x}):P=[c,y?"active":null,x?"pending":null].filter(Boolean).join(" ");let I=typeof p=="function"?p({isActive:y,isPending:x}):p;return $.createElement(As,Ma({},S,{"aria-current":j,className:P,ref:a,style:I,to:g}),typeof w=="function"?w({isActive:y,isPending:x}):w)});var Lf;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmitImpl="useSubmitImpl",r.UseFetcher="useFetcher"})(Lf||(Lf={}));var Rf;(function(r){r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(Rf||(Rf={}));function Gy(r,o){let{target:a,replace:l,state:s,preventScrollReset:c,relative:f}=o===void 0?{}:o,p=ho(),g=go(),w=Fs(r,{relative:f});return $.useCallback(S=>{if(Uy(S,a)){S.preventDefault();let v=l!==void 0?l:Aa(g)===Aa(w);p(r,{replace:v,state:s,preventScrollReset:c,relative:f})}},[g,p,w,l,s,a,r,c,f])}function is(){return is=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var l in a)({}).hasOwnProperty.call(a,l)&&(r[l]=a[l])}return r},is.apply(null,arguments)}function fp(r){var o=Object.create(null);return function(a){return o[a]===void 0&&(o[a]=r(a)),o[a]}}var Yy=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,qy=fp(function(r){return Yy.test(r)||r.charCodeAt(0)===111&&r.charCodeAt(1)===110&&r.charCodeAt(2)<91});function Jy(r){if(r.sheet)return r.sheet;for(var o=0;o<document.styleSheets.length;o++)if(document.styleSheets[o].ownerNode===r)return document.styleSheets[o]}function Xy(r){var o=document.createElement("style");return o.setAttribute("data-emotion",r.key),r.nonce!==void 0&&o.setAttribute("nonce",r.nonce),o.appendChild(document.createTextNode("")),o.setAttribute("data-s",""),o}var Zy=(function(){function r(a){var l=this;this._insertTag=function(s){var c;l.tags.length===0?l.insertionPoint?c=l.insertionPoint.nextSibling:l.prepend?c=l.container.firstChild:c=l.before:c=l.tags[l.tags.length-1].nextSibling,l.container.insertBefore(s,c),l.tags.push(s)},this.isSpeedy=a.speedy===void 0?!0:a.speedy,this.tags=[],this.ctr=0,this.nonce=a.nonce,this.key=a.key,this.container=a.container,this.prepend=a.prepend,this.insertionPoint=a.insertionPoint,this.before=null}var o=r.prototype;return o.hydrate=function(l){l.forEach(this._insertTag)},o.insert=function(l){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Xy(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var c=Jy(s);try{c.insertRule(l,c.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(l));this.ctr++},o.flush=function(){this.tags.forEach(function(l){return l.parentNode&&l.parentNode.removeChild(l)}),this.tags=[],this.ctr=0},r})(),Je="-ms-",$a="-moz-",ye="-webkit-",pp="comm",Is="rule",Ms="decl",e0="@import",mp="@keyframes",n0=Math.abs,Ha=String.fromCharCode,t0=Object.assign;function r0(r,o){return Ve(r,0)^45?(((o<<2^Ve(r,0))<<2^Ve(r,1))<<2^Ve(r,2))<<2^Ve(r,3):0}function gp(r){return r.trim()}function o0(r,o){return(r=o.exec(r))?r[0]:r}function we(r,o,a){return r.replace(o,a)}function ls(r,o){return r.indexOf(o)}function Ve(r,o){return r.charCodeAt(o)|0}function uo(r,o,a){return r.slice(o,a)}function Un(r){return r.length}function $s(r){return r.length}function Ra(r,o){return o.push(r),r}function a0(r,o){return r.map(o).join("")}var Wa=1,yr=1,hp=0,cn=0,Fe=0,kr="";function Va(r,o,a,l,s,c,f){return{value:r,root:o,parent:a,type:l,props:s,children:c,line:Wa,column:yr,length:f,return:""}}function lo(r,o){return t0(Va("",null,null,"",null,null,0),r,{length:-r.length},o)}function i0(){return Fe}function l0(){return Fe=cn>0?Ve(kr,--cn):0,yr--,Fe===10&&(yr=1,Wa--),Fe}function gn(){return Fe=cn<hp?Ve(kr,cn++):0,yr++,Fe===10&&(yr=1,Wa++),Fe}function Wn(){return Ve(kr,cn)}function _a(){return cn}function yo(r,o){return uo(kr,r,o)}function co(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function yp(r){return Wa=yr=1,hp=Un(kr=r),cn=0,[]}function vp(r){return kr="",r}function Na(r){return gp(yo(cn-1,ss(r===91?r+2:r===40?r+1:r)))}function s0(r){for(;(Fe=Wn())&&Fe<33;)gn();return co(r)>2||co(Fe)>3?"":" "}function u0(r,o){for(;--o&&gn()&&!(Fe<48||Fe>102||Fe>57&&Fe<65||Fe>70&&Fe<97););return yo(r,_a()+(o<6&&Wn()==32&&gn()==32))}function ss(r){for(;gn();)switch(Fe){case r:return cn;case 34:case 39:r!==34&&r!==39&&ss(Fe);break;case 40:r===41&&ss(r);break;case 92:gn();break}return cn}function c0(r,o){for(;gn()&&r+Fe!==57;)if(r+Fe===84&&Wn()===47)break;return"/*"+yo(o,cn-1)+"*"+Ha(r===47?r:gn())}function d0(r){for(;!co(Wn());)gn();return yo(r,cn)}function f0(r){return vp(ja("",null,null,null,[""],r=yp(r),0,[0],r))}function ja(r,o,a,l,s,c,f,p,g){for(var w=0,S=0,v=f,L=0,T=0,A=0,O=1,R=1,_=1,y=0,x="",j=s,P=c,I=l,D=x;R;)switch(A=y,y=gn()){case 40:if(A!=108&&Ve(D,v-1)==58){ls(D+=we(Na(y),"&","&\f"),"&\f")!=-1&&(_=-1);break}case 34:case 39:case 91:D+=Na(y);break;case 9:case 10:case 13:case 32:D+=s0(A);break;case 92:D+=u0(_a()-1,7);continue;case 47:switch(Wn()){case 42:case 47:Ra(p0(c0(gn(),_a()),o,a),g);break;default:D+="/"}break;case 123*O:p[w++]=Un(D)*_;case 125*O:case 59:case 0:switch(y){case 0:case 125:R=0;case 59+S:T>0&&Un(D)-v&&Ra(T>32?_f(D+";",l,a,v-1):_f(we(D," ","")+";",l,a,v-2),g);break;case 59:D+=";";default:if(Ra(I=zf(D,o,a,w,S,s,p,x,j=[],P=[],v),c),y===123)if(S===0)ja(D,o,I,I,j,c,v,p,P);else switch(L===99&&Ve(D,3)===110?100:L){case 100:case 109:case 115:ja(r,I,I,l&&Ra(zf(r,I,I,0,0,s,p,x,s,j=[],v),P),s,P,v,p,l?j:P);break;default:ja(D,I,I,I,[""],P,0,p,P)}}w=S=T=0,O=_=1,x=D="",v=f;break;case 58:v=1+Un(D),T=A;default:if(O<1){if(y==123)--O;else if(y==125&&O++==0&&l0()==125)continue}switch(D+=Ha(y),y*O){case 38:_=S>0?1:(D+="\f",-1);break;case 44:p[w++]=(Un(D)-1)*_,_=1;break;case 64:Wn()===45&&(D+=Na(gn())),L=Wn(),S=v=Un(x=D+=d0(_a())),y++;break;case 45:A===45&&Un(D)==2&&(O=0)}}return c}function zf(r,o,a,l,s,c,f,p,g,w,S){for(var v=s-1,L=s===0?c:[""],T=$s(L),A=0,O=0,R=0;A<l;++A)for(var _=0,y=uo(r,v+1,v=n0(O=f[A])),x=r;_<T;++_)(x=gp(O>0?L[_]+" "+y:we(y,/&\f/g,L[_])))&&(g[R++]=x);return Va(r,o,a,s===0?Is:p,g,w,S)}function p0(r,o,a){return Va(r,o,a,pp,Ha(i0()),uo(r,2,-2),0)}function _f(r,o,a,l){return Va(r,o,a,Ms,uo(r,0,l),uo(r,l+1,-1),l)}function hr(r,o){for(var a="",l=$s(r),s=0;s<l;s++)a+=o(r[s],s,r,o)||"";return a}function m0(r,o,a,l){switch(r.type){case e0:case Ms:return r.return=r.return||r.value;case pp:return"";case mp:return r.return=r.value+"{"+hr(r.children,l)+"}";case Is:r.value=r.props.join(",")}return Un(a=hr(r.children,l))?r.return=r.value+"{"+a+"}":""}function g0(r){var o=$s(r);return function(a,l,s,c){for(var f="",p=0;p<o;p++)f+=r[p](a,l,s,c)||"";return f}}function h0(r){return function(o){o.root||(o=o.return)&&r(o)}}var y0=function(o,a,l){for(var s=0,c=0;s=c,c=Wn(),s===38&&c===12&&(a[l]=1),!co(c);)gn();return yo(o,cn)},v0=function(o,a){var l=-1,s=44;do switch(co(s)){case 0:s===38&&Wn()===12&&(a[l]=1),o[l]+=y0(cn-1,a,l);break;case 2:o[l]+=Na(s);break;case 4:if(s===44){o[++l]=Wn()===58?"&\f":"",a[l]=o[l].length;break}default:o[l]+=Ha(s)}while(s=gn());return o},w0=function(o,a){return vp(v0(yp(o),a))},Nf=new WeakMap,k0=function(o){if(!(o.type!=="rule"||!o.parent||o.length<1)){for(var a=o.value,l=o.parent,s=o.column===l.column&&o.line===l.line;l.type!=="rule";)if(l=l.parent,!l)return;if(!(o.props.length===1&&a.charCodeAt(0)!==58&&!Nf.get(l))&&!s){Nf.set(o,!0);for(var c=[],f=w0(a,c),p=l.props,g=0,w=0;g<f.length;g++)for(var S=0;S<p.length;S++,w++)o.props[w]=c[g]?f[g].replace(/&\f/g,p[S]):p[S]+" "+f[g]}}},b0=function(o){if(o.type==="decl"){var a=o.value;a.charCodeAt(0)===108&&a.charCodeAt(2)===98&&(o.return="",o.value="")}};function wp(r,o){switch(r0(r,o)){case 5103:return ye+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ye+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return ye+r+$a+r+Je+r+r;case 6828:case 4268:return ye+r+Je+r+r;case 6165:return ye+r+Je+"flex-"+r+r;case 5187:return ye+r+we(r,/(\w+).+(:[^]+)/,ye+"box-$1$2"+Je+"flex-$1$2")+r;case 5443:return ye+r+Je+"flex-item-"+we(r,/flex-|-self/,"")+r;case 4675:return ye+r+Je+"flex-line-pack"+we(r,/align-content|flex-|-self/,"")+r;case 5548:return ye+r+Je+we(r,"shrink","negative")+r;case 5292:return ye+r+Je+we(r,"basis","preferred-size")+r;case 6060:return ye+"box-"+we(r,"-grow","")+ye+r+Je+we(r,"grow","positive")+r;case 4554:return ye+we(r,/([^-])(transform)/g,"$1"+ye+"$2")+r;case 6187:return we(we(we(r,/(zoom-|grab)/,ye+"$1"),/(image-set)/,ye+"$1"),r,"")+r;case 5495:case 3959:return we(r,/(image-set\([^]*)/,ye+"$1$`$1");case 4968:return we(we(r,/(.+:)(flex-)?(.*)/,ye+"box-pack:$3"+Je+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ye+r+r;case 4095:case 3583:case 4068:case 2532:return we(r,/(.+)-inline(.+)/,ye+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Un(r)-1-o>6)switch(Ve(r,o+1)){case 109:if(Ve(r,o+4)!==45)break;case 102:return we(r,/(.+:)(.+)-([^]+)/,"$1"+ye+"$2-$3$1"+$a+(Ve(r,o+3)==108?"$3":"$2-$3"))+r;case 115:return~ls(r,"stretch")?wp(we(r,"stretch","fill-available"),o)+r:r}break;case 4949:if(Ve(r,o+1)!==115)break;case 6444:switch(Ve(r,Un(r)-3-(~ls(r,"!important")&&10))){case 107:return we(r,":",":"+ye)+r;case 101:return we(r,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ye+(Ve(r,14)===45?"inline-":"")+"box$3$1"+ye+"$2$3$1"+Je+"$2box$3")+r}break;case 5936:switch(Ve(r,o+11)){case 114:return ye+r+Je+we(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return ye+r+Je+we(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return ye+r+Je+we(r,/[svh]\w+-[tblr]{2}/,"lr")+r}return ye+r+Je+r+r}return r}var x0=function(o,a,l,s){if(o.length>-1&&!o.return)switch(o.type){case Ms:o.return=wp(o.value,o.length);break;case mp:return hr([lo(o,{value:we(o.value,"@","@"+ye)})],s);case Is:if(o.length)return a0(o.props,function(c){switch(o0(c,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return hr([lo(o,{props:[we(c,/:(read-\w+)/,":"+$a+"$1")]})],s);case"::placeholder":return hr([lo(o,{props:[we(c,/:(plac\w+)/,":"+ye+"input-$1")]}),lo(o,{props:[we(c,/:(plac\w+)/,":"+$a+"$1")]}),lo(o,{props:[we(c,/:(plac\w+)/,Je+"input-$1")]})],s)}return""})}},S0=[x0],C0=function(o){var a=o.key;if(a==="css"){var l=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(l,function(O){var R=O.getAttribute("data-emotion");R.indexOf(" ")!==-1&&(document.head.appendChild(O),O.setAttribute("data-s",""))})}var s=o.stylisPlugins||S0,c={},f,p=[];f=o.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+a+' "]'),function(O){for(var R=O.getAttribute("data-emotion").split(" "),_=1;_<R.length;_++)c[R[_]]=!0;p.push(O)});var g,w=[k0,b0];{var S,v=[m0,h0(function(O){S.insert(O)})],L=g0(w.concat(s,v)),T=function(R){return hr(f0(R),L)};g=function(R,_,y,x){S=y,T(R?R+"{"+_.styles+"}":_.styles),x&&(A.inserted[_.name]=!0)}}var A={key:a,sheet:new Zy({key:a,container:f,nonce:o.nonce,speedy:o.speedy,prepend:o.prepend,insertionPoint:o.insertionPoint}),nonce:o.nonce,inserted:c,registered:{},insert:g};return A.sheet.hydrate(p),A},Ql={exports:{}},ve={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jf;function E0(){if(jf)return ve;jf=1;var r=typeof Symbol=="function"&&Symbol.for,o=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,l=r?Symbol.for("react.fragment"):60107,s=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,f=r?Symbol.for("react.provider"):60109,p=r?Symbol.for("react.context"):60110,g=r?Symbol.for("react.async_mode"):60111,w=r?Symbol.for("react.concurrent_mode"):60111,S=r?Symbol.for("react.forward_ref"):60112,v=r?Symbol.for("react.suspense"):60113,L=r?Symbol.for("react.suspense_list"):60120,T=r?Symbol.for("react.memo"):60115,A=r?Symbol.for("react.lazy"):60116,O=r?Symbol.for("react.block"):60121,R=r?Symbol.for("react.fundamental"):60117,_=r?Symbol.for("react.responder"):60118,y=r?Symbol.for("react.scope"):60119;function x(P){if(typeof P=="object"&&P!==null){var I=P.$$typeof;switch(I){case o:switch(P=P.type,P){case g:case w:case l:case c:case s:case v:return P;default:switch(P=P&&P.$$typeof,P){case p:case S:case A:case T:case f:return P;default:return I}}case a:return I}}}function j(P){return x(P)===w}return ve.AsyncMode=g,ve.ConcurrentMode=w,ve.ContextConsumer=p,ve.ContextProvider=f,ve.Element=o,ve.ForwardRef=S,ve.Fragment=l,ve.Lazy=A,ve.Memo=T,ve.Portal=a,ve.Profiler=c,ve.StrictMode=s,ve.Suspense=v,ve.isAsyncMode=function(P){return j(P)||x(P)===g},ve.isConcurrentMode=j,ve.isContextConsumer=function(P){return x(P)===p},ve.isContextProvider=function(P){return x(P)===f},ve.isElement=function(P){return typeof P=="object"&&P!==null&&P.$$typeof===o},ve.isForwardRef=function(P){return x(P)===S},ve.isFragment=function(P){return x(P)===l},ve.isLazy=function(P){return x(P)===A},ve.isMemo=function(P){return x(P)===T},ve.isPortal=function(P){return x(P)===a},ve.isProfiler=function(P){return x(P)===c},ve.isStrictMode=function(P){return x(P)===s},ve.isSuspense=function(P){return x(P)===v},ve.isValidElementType=function(P){return typeof P=="string"||typeof P=="function"||P===l||P===w||P===c||P===s||P===v||P===L||typeof P=="object"&&P!==null&&(P.$$typeof===A||P.$$typeof===T||P.$$typeof===f||P.$$typeof===p||P.$$typeof===S||P.$$typeof===R||P.$$typeof===_||P.$$typeof===y||P.$$typeof===O)},ve.typeOf=x,ve}var Tf;function P0(){return Tf||(Tf=1,Ql.exports=E0()),Ql.exports}var Gl,Ff;function O0(){if(Ff)return Gl;Ff=1;var r=P0(),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};c[r.ForwardRef]=l,c[r.Memo]=s;function f(A){return r.isMemo(A)?s:c[A.$$typeof]||o}var p=Object.defineProperty,g=Object.getOwnPropertyNames,w=Object.getOwnPropertySymbols,S=Object.getOwnPropertyDescriptor,v=Object.getPrototypeOf,L=Object.prototype;function T(A,O,R){if(typeof O!="string"){if(L){var _=v(O);_&&_!==L&&T(A,_,R)}var y=g(O);w&&(y=y.concat(w(O)));for(var x=f(A),j=f(O),P=0;P<y.length;++P){var I=y[P];if(!a[I]&&!(R&&R[I])&&!(j&&j[I])&&!(x&&x[I])){var D=S(O,I);try{p(A,I,D)}catch{}}}}return A}return Gl=T,Gl}O0();var L0=!0;function kp(r,o,a){var l="";return a.split(" ").forEach(function(s){r[s]!==void 0?o.push(r[s]+";"):l+=s+" "}),l}var Ds=function(o,a,l){var s=o.key+"-"+a.name;(l===!1||L0===!1)&&o.registered[s]===void 0&&(o.registered[s]=a.styles)},Us=function(o,a,l){Ds(o,a,l);var s=o.key+"-"+a.name;if(o.inserted[a.name]===void 0){var c=a;do o.insert(a===c?"."+s:"",c,o.sheet,!0),c=c.next;while(c!==void 0)}};function R0(r){for(var o=0,a,l=0,s=r.length;s>=4;++l,s-=4)a=r.charCodeAt(l)&255|(r.charCodeAt(++l)&255)<<8|(r.charCodeAt(++l)&255)<<16|(r.charCodeAt(++l)&255)<<24,a=(a&65535)*1540483477+((a>>>16)*59797<<16),a^=a>>>24,o=(a&65535)*1540483477+((a>>>16)*59797<<16)^(o&65535)*1540483477+((o>>>16)*59797<<16);switch(s){case 3:o^=(r.charCodeAt(l+2)&255)<<16;case 2:o^=(r.charCodeAt(l+1)&255)<<8;case 1:o^=r.charCodeAt(l)&255,o=(o&65535)*1540483477+((o>>>16)*59797<<16)}return o^=o>>>13,o=(o&65535)*1540483477+((o>>>16)*59797<<16),((o^o>>>15)>>>0).toString(36)}var z0={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},_0=/[A-Z]|^ms/g,N0=/_EMO_([^_]+?)_([^]*?)_EMO_/g,bp=function(o){return o.charCodeAt(1)===45},Af=function(o){return o!=null&&typeof o!="boolean"},Yl=fp(function(r){return bp(r)?r:r.replace(_0,"-$&").toLowerCase()}),If=function(o,a){switch(o){case"animation":case"animationName":if(typeof a=="string")return a.replace(N0,function(l,s,c){return Bn={name:s,styles:c,next:Bn},s})}return z0[o]!==1&&!bp(o)&&typeof a=="number"&&a!==0?a+"px":a};function fo(r,o,a){if(a==null)return"";if(a.__emotion_styles!==void 0)return a;switch(typeof a){case"boolean":return"";case"object":{if(a.anim===1)return Bn={name:a.name,styles:a.styles,next:Bn},a.name;if(a.styles!==void 0){var l=a.next;if(l!==void 0)for(;l!==void 0;)Bn={name:l.name,styles:l.styles,next:Bn},l=l.next;var s=a.styles+";";return s}return j0(r,o,a)}case"function":{if(r!==void 0){var c=Bn,f=a(r);return Bn=c,fo(r,o,f)}break}}if(o==null)return a;var p=o[a];return p!==void 0?p:a}function j0(r,o,a){var l="";if(Array.isArray(a))for(var s=0;s<a.length;s++)l+=fo(r,o,a[s])+";";else for(var c in a){var f=a[c];if(typeof f!="object")o!=null&&o[f]!==void 0?l+=c+"{"+o[f]+"}":Af(f)&&(l+=Yl(c)+":"+If(c,f)+";");else if(Array.isArray(f)&&typeof f[0]=="string"&&(o==null||o[f[0]]===void 0))for(var p=0;p<f.length;p++)Af(f[p])&&(l+=Yl(c)+":"+If(c,f[p])+";");else{var g=fo(r,o,f);switch(c){case"animation":case"animationName":{l+=Yl(c)+":"+g+";";break}default:l+=c+"{"+g+"}"}}}return l}var Mf=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Bn,Ka=function(o,a,l){if(o.length===1&&typeof o[0]=="object"&&o[0]!==null&&o[0].styles!==void 0)return o[0];var s=!0,c="";Bn=void 0;var f=o[0];f==null||f.raw===void 0?(s=!1,c+=fo(l,a,f)):c+=f[0];for(var p=1;p<o.length;p++)c+=fo(l,a,o[p]),s&&(c+=f[p]);Mf.lastIndex=0;for(var g="",w;(w=Mf.exec(c))!==null;)g+="-"+w[1];var S=R0(c)+g;return{name:S,styles:c,next:Bn}},T0=function(o){return o()},xp=df.useInsertionEffect?df.useInsertionEffect:!1,Sp=xp||T0,$f=xp||$.useLayoutEffect,Bs={}.hasOwnProperty,Cp=$.createContext(typeof HTMLElement<"u"?C0({key:"css"}):null);Cp.Provider;var Hs=function(o){return $.forwardRef(function(a,l){var s=$.useContext(Cp);return o(a,s,l)})},Ws=$.createContext({}),us="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",F0=function(o,a){var l={};for(var s in a)Bs.call(a,s)&&(l[s]=a[s]);return l[us]=o,l},A0=function(o){var a=o.cache,l=o.serialized,s=o.isStringTag;return Ds(a,l,s),Sp(function(){return Us(a,l,s)}),null},I0=Hs(function(r,o,a){var l=r.css;typeof l=="string"&&o.registered[l]!==void 0&&(l=o.registered[l]);var s=r[us],c=[l],f="";typeof r.className=="string"?f=kp(o.registered,c,r.className):r.className!=null&&(f=r.className+" ");var p=Ka(c,void 0,$.useContext(Ws));f+=o.key+"-"+p.name;var g={};for(var w in r)Bs.call(r,w)&&w!=="css"&&w!==us&&(g[w]=r[w]);return g.ref=a,g.className=f,$.createElement($.Fragment,null,$.createElement(A0,{cache:o,serialized:p,isStringTag:typeof s=="string"}),$.createElement(s,g))}),E=function(o,a){var l=arguments;if(a==null||!Bs.call(a,"css"))return $.createElement.apply(void 0,l);var s=l.length,c=new Array(s);c[0]=I0,c[1]=F0(o,a);for(var f=2;f<s;f++)c[f]=l[f];return $.createElement.apply(null,c)},Ep=Hs(function(r,o){var a=r.styles,l=Ka([a],void 0,$.useContext(Ws)),s=$.useRef();return $f(function(){var c=o.key+"-global",f=new o.sheet.constructor({key:c,nonce:o.sheet.nonce,container:o.sheet.container,speedy:o.sheet.isSpeedy}),p=!1,g=document.querySelector('style[data-emotion="'+c+" "+l.name+'"]');return o.sheet.tags.length&&(f.before=o.sheet.tags[0]),g!==null&&(p=!0,g.setAttribute("data-emotion",c),f.hydrate([g])),s.current=[f,p],function(){f.flush()}},[o]),$f(function(){var c=s.current,f=c[0],p=c[1];if(p){c[1]=!1;return}if(l.next!==void 0&&Us(o,l.next,!0),f.tags.length){var g=f.tags[f.tags.length-1].nextElementSibling;f.before=g,f.flush()}o.insert("",l,f,!1)},[o,l.name]),null});function Pp(){for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return Ka(o)}var M0=qy,$0=function(o){return o!=="theme"},Df=function(o){return typeof o=="string"&&o.charCodeAt(0)>96?M0:$0},Uf=function(o,a,l){var s;if(a){var c=a.shouldForwardProp;s=o.__emotion_forwardProp&&c?function(f){return o.__emotion_forwardProp(f)&&c(f)}:c}return typeof s!="function"&&l&&(s=o.__emotion_forwardProp),s},D0=function(o){var a=o.cache,l=o.serialized,s=o.isStringTag;return Ds(a,l,s),Sp(function(){return Us(a,l,s)}),null},U0=function r(o,a){var l=o.__emotion_real===o,s=l&&o.__emotion_base||o,c,f;a!==void 0&&(c=a.label,f=a.target);var p=Uf(o,a,l),g=p||Df(s),w=!g("as");return function(){var S=arguments,v=l&&o.__emotion_styles!==void 0?o.__emotion_styles.slice(0):[];if(c!==void 0&&v.push("label:"+c+";"),S[0]==null||S[0].raw===void 0)v.push.apply(v,S);else{v.push(S[0][0]);for(var L=S.length,T=1;T<L;T++)v.push(S[T],S[0][T])}var A=Hs(function(O,R,_){var y=w&&O.as||s,x="",j=[],P=O;if(O.theme==null){P={};for(var I in O)P[I]=O[I];P.theme=$.useContext(Ws)}typeof O.className=="string"?x=kp(R.registered,j,O.className):O.className!=null&&(x=O.className+" ");var D=Ka(v.concat(j),R.registered,P);x+=R.key+"-"+D.name,f!==void 0&&(x+=" "+f);var J=w&&p===void 0?Df(y):g,Q={};for(var te in O)w&&te==="as"||J(te)&&(Q[te]=O[te]);return Q.className=x,Q.ref=_,$.createElement($.Fragment,null,$.createElement(D0,{cache:R,serialized:D,isStringTag:typeof y=="string"}),$.createElement(y,Q))});return A.displayName=c!==void 0?c:"Styled("+(typeof s=="string"?s:s.displayName||s.name||"Component")+")",A.defaultProps=o.defaultProps,A.__emotion_real=A,A.__emotion_base=s,A.__emotion_styles=v,A.__emotion_forwardProp=p,Object.defineProperty(A,"toString",{value:function(){return"."+f}}),A.withComponent=function(O,R){return r(O,is({},a,R,{shouldForwardProp:Uf(A,R,!0)})).apply(void 0,v)},A}},B0=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],K=U0.bind();B0.forEach(function(r){K[r]=K(r)});const Op=[{id:1,title:"SuperTrader EA",description:"Expert Advisor yang dirancang untuk trading aman dan stabil, cocok untuk semua pair major.",price:59,image:"/images/ea/1.png",category:"Scalping"},{id:2,title:"ScalperPro EA",description:"EA terbaik untuk scalping cepat di timeframe kecil, dengan sistem risk management adaptif.",price:79,image:"/images/ea/1.png",category:"Scalper"},{id:3,title:"SmartBot EA",description:"AI-powered Expert Advisor dengan analisa multi-timeframe dan sinyal auto-adaptif.",price:99,image:"/images/ea/1.png",category:"AI Trading"}];function H0(r){const o=new Path2D;return r.forEach((a,l)=>{l===0?o.moveTo(a.x,a.y):o.lineTo(a.x,a.y)}),o}class Lp{x;y;size;color;angle=2*Math.PI*Math.random();rotate=Math.random()*Math.PI;speed=.2+Math.random()*1.5;constructor(o,a,l,s){this.x=o,this.y=a,this.size=l,this.color=s}move(){this.x+=this.speed,this.rotate-=this.speed*.006}createGradient(o){const a=this.size*1.5,l=this.angle+Math.PI,s=this.x+this.size*Math.sin(this.angle+this.rotate),c=this.y+this.size*Math.cos(this.angle+this.rotate),f=this.x+a*Math.sin(l+this.rotate),p=this.y+a*Math.cos(l+this.rotate),g=o.createLinearGradient(s,c,f,p);return g.addColorStop(0,this.color),g.addColorStop(.3,this.color),g.addColorStop(.85,"#ffffff"),g}}class Rp extends Lp{sides;constructor(o,a,l,s,c){super(o,a,l,s),this.sides=c}draw(o){const a=this.size/2,l=Math.PI*2/this.sides,s=[];Array.from({length:this.sides}).forEach((f,p)=>{s.push({x:this.x+a*Math.sin(l*p+this.rotate),y:this.y+a*Math.cos(l*p+this.rotate)})});const c=H0(s);o.fillStyle=this.createGradient(o),o.fill(c)}}class W0 extends Rp{constructor(o,a,l,s){super(o,a,l,s,3)}}class V0 extends Rp{constructor(o,a,l,s){super(o,a,l,s,4)}}class K0 extends Lp{draw(o){const a=this.size/2,l=new Path2D;l.moveTo(0,0),l.arc(this.x,this.y,a,0,2*Math.PI),o.fillStyle=this.createGradient(o),o.fill(l)}}const Q0=K.canvas({height:"100%",width:"100%",opacity:"0",transitionProperty:"opacity",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms"}),G0={opacity:"1"},Bf=[W0,V0,K0],Hf=["#f97316","#f59e0b","#eab308","#84cc16","#22c55e","#10b981","#14b8a6","#06b6d4","#0ea5e9","#3b82f6","#6366f1","#8b5cf6","#a855f7","#d946ef","#ec4899","#f43f5e"];function vr(r){const{count:o,sizes:a}=r,[l,s]=$.useState(!1),c=$.useRef(null),f=$.useRef([]),p=$.useCallback(()=>{if(!c.current)return;const v=c.current.getBoundingClientRect();c.current.width=v.width,c.current.height=v.height},[]),g=$.useCallback(()=>{if(!c.current)return;const v=c.current.width,L=c.current.height,T=f.current.length===0;for(;f.current.length<o;){const A=Bf[Math.floor(Math.random()*Bf.length)],O=Hf[Math.floor(Math.random()*Hf.length)],R=a[0]+Math.random()*(a[1]-a[0]),_=T?Math.random()*v:-R,y=Math.random()*L;f.current.push(new A(_,y,R,O))}},[]),w=$.useCallback(()=>{if(!c.current)return;const v=c.current.getContext("2d"),L=c.current.width,T=c.current.height;v.clearRect(0,0,L,T),f.current.forEach(A=>{A.move(),A.draw(v)}),f.current=f.current.filter(A=>A.x-A.size<L)},[]),S=$.useCallback(()=>{g(),w(),requestAnimationFrame(S)},[]);return $.useEffect(()=>(p(),S(),s(!0),window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)}),[]),E(Q0,{ref:c,css:[l&&G0]})}const Y0=K.div`
  ${{position:"relative",minHeight:"100vh",overflow:"hidden",paddingTop:"2.5rem",paddingBottom:"2.5rem",transitionProperty:"color, background-color, border-color, text-decoration-color, fill, stroke",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms"}}
`,q0=K.div({pointerEvents:"none",position:"absolute",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:"-20",opacity:"0.4",".dark &":{opacity:"0.3"}}),J0=K.div({pointerEvents:"none",position:"absolute",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:"-10",opacity:"0.6",".dark &":{opacity:"0.4"}}),X0=K.h1({marginBottom:"2.5rem",textAlign:"center",fontSize:"1.875rem",lineHeight:"2.25rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(243 244 246 / var(--tw-text-opacity))"}}),Z0=K.div({marginLeft:"auto",marginRight:"auto",display:"grid",maxWidth:"72rem",gridTemplateColumns:"repeat(1, minmax(0, 1fr))",gap:"2rem",padding:"2rem","@media (min-width: 640px)":{gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},"@media (min-width: 1024px)":{gridTemplateColumns:"repeat(3, minmax(0, 1fr))"}}),ev=K.div`
  ${{position:"relative",cursor:"pointer",overflow:"hidden",borderRadius:"1rem","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms",".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(17 24 39 / var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgb(243 244 246 / var(--tw-text-opacity))"}}}

  /* Bayangan adaptif */
  /* box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);*/

  /* Mode gelap: bayangan putih tebal */
  .dark & {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.25);
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);

    .dark & {
      box-shadow: 0 0 25px rgba(255, 255, 255, 0.35);
    }
  }
`,nv=K.div({position:"relative",height:"14rem",width:"100%",overflow:"hidden"}),tv=K.img({height:"100%",width:"100%",objectFit:"cover",transitionProperty:"transform",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms",":hover":{"--tw-scale-x":"1.1","--tw-scale-y":"1.1",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"}}),rv=K.div({padding:"1.25rem"}),ov=K.p({fontSize:"0.875rem",lineHeight:"1.25rem",fontWeight:"500",textTransform:"uppercase",letterSpacing:"0.025em","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))"}),av=K.h3({marginTop:"0.5rem",marginBottom:"0.25rem",fontSize:"1.125rem",lineHeight:"1.75rem",fontWeight:"600"}),iv=K.p({marginBottom:"0.75rem",fontSize:"0.875rem",lineHeight:"1.375",opacity:"0.8"}),lv=K.span({fontSize:"1rem",lineHeight:"1.5rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(22 163 74 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(74 222 128 / var(--tw-text-opacity))"}});function sv(){const r=ho(),o=a=>{r(`/EA/${a}`)};return E(Y0,null,E(q0,null,E(vr,{count:12,sizes:[30,60]})),E(J0,null,E(vr,{count:12,sizes:[40,80]})),E(X0,null,"Expert Advisors Collection"),E(Z0,null,Op.map(a=>E(ev,{key:a.id,onClick:()=>o(a.id)},E(nv,null,E(tv,{src:a.image,alt:a.title})),E(rv,null,E(ov,null,a.category),E(av,null,a.title),E(iv,null,a.description),E(lv,null,"$",a.price))))))}const uv=K.div({marginLeft:"auto",marginRight:"auto",marginTop:"2.5rem",maxWidth:"56rem",borderRadius:"1.5rem","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))",padding:"2rem","--tw-shadow":"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)","--tw-shadow-colored":"0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"}),cv=K.img({marginBottom:"1.5rem",height:"20rem",width:"100%",borderRadius:"1rem",objectFit:"cover"}),dv=K.h2({marginBottom:"1rem",fontSize:"1.875rem",lineHeight:"2.25rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))"}),fv=K.span({fontSize:"0.875rem",lineHeight:"1.25rem",fontWeight:"600",textTransform:"uppercase","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))"}),pv=K.p({marginBottom:"1.5rem",lineHeight:"1.625","--tw-text-opacity":"1",color:"rgb(75 85 99 / var(--tw-text-opacity))"}),mv=K.div({marginBottom:"1.5rem",fontSize:"1.25rem",lineHeight:"1.75rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(22 163 74 / var(--tw-text-opacity))"}),gv=K.div({display:"flex",gap:"1rem"}),zp=K.button({borderRadius:"0.5rem",paddingLeft:"1.25rem",paddingRight:"1.25rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",fontWeight:"600","--tw-text-opacity":"1",color:"rgb(255 255 255 / var(--tw-text-opacity))",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms"}),hv=K(zp)({"--tw-bg-opacity":"1",backgroundColor:"rgb(59 130 246 / var(--tw-bg-opacity))",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgb(37 99 235 / var(--tw-bg-opacity))"}}),yv=K(zp)({"--tw-bg-opacity":"1",backgroundColor:"rgb(107 114 128 / var(--tw-bg-opacity))",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgb(75 85 99 / var(--tw-bg-opacity))"}});function vv(){const{id:r}=cp(),o=ho(),a=Op.find(l=>l.id===Number(r));return a?E("div",{css:{minHeight:"100vh","--tw-bg-opacity":"1",backgroundColor:"rgb(243 244 246 / var(--tw-bg-opacity))",paddingTop:"2.5rem",paddingBottom:"2.5rem"}},E(uv,null,E(cv,{src:a.image,alt:a.title}),E(fv,null,a.category),E(dv,null,a.title),E(pv,null,a.description),E(mv,null,"$",a.price),E(gv,null,E(hv,null,"Buy Now"),E(yv,{onClick:()=>o("/EA")},"Back")))):E("div",{css:{marginTop:"5rem",textAlign:"center","--tw-text-opacity":"1",color:"rgb(75 85 99 / var(--tw-text-opacity))"}},"Product not found.",E("button",{css:{marginLeft:"0.75rem","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))",textDecorationLine:"underline"},onClick:()=>o("/EA")},"Back to list"))}const _p=[{id:1,title:"SuperTrader EA",description:"Expert Advisor yang dirancang untuk trading aman dan stabil, cocok untuk semua pair major.",price:59,image:"/images/ea/update.png",category:"Scalping"},{id:2,title:"ScalperPro EA",description:"EA terbaik untuk scalping cepat di timeframe kecil, dengan sistem risk management adaptif.",price:79,image:"/images/ea/update.png",category:"Scalper"},{id:3,title:"SmartBot EA",description:"AI-powered Expert Advisor dengan analisa multi-timeframe dan sinyal auto-adaptif.",price:99,image:"/images/ea/update.png",category:"AI Trading"}],wv=K.div`
  ${{position:"relative",minHeight:"100vh",overflow:"hidden",paddingTop:"2.5rem",paddingBottom:"2.5rem",transitionProperty:"color, background-color, border-color, text-decoration-color, fill, stroke",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms"}}
`,kv=K.div({pointerEvents:"none",position:"absolute",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:"-20",opacity:"0.4",".dark &":{opacity:"0.3"}}),bv=K.div({pointerEvents:"none",position:"absolute",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:"-10",opacity:"0.6",".dark &":{opacity:"0.4"}}),xv=K.h1({marginBottom:"2.5rem",textAlign:"center",fontSize:"1.875rem",lineHeight:"2.25rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(243 244 246 / var(--tw-text-opacity))"}}),Sv=K.div({marginLeft:"auto",marginRight:"auto",display:"grid",maxWidth:"72rem",gridTemplateColumns:"repeat(1, minmax(0, 1fr))",gap:"2rem",padding:"2rem","@media (min-width: 640px)":{gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},"@media (min-width: 1024px)":{gridTemplateColumns:"repeat(3, minmax(0, 1fr))"}}),Cv=K.div`
  ${{position:"relative",cursor:"pointer",overflow:"hidden",borderRadius:"1rem","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms",".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(17 24 39 / var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgb(243 244 246 / var(--tw-text-opacity))"}}}

  /* Bayangan adaptif */
  /* box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);*/

  /* Mode gelap: bayangan putih tebal */
  .dark & {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.25);
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);

    .dark & {
      box-shadow: 0 0 25px rgba(255, 255, 255, 0.35);
    }
  }
`,Ev=K.div({position:"relative",height:"14rem",width:"100%",overflow:"hidden"}),Pv=K.img({height:"100%",width:"100%",objectFit:"cover",transitionProperty:"transform",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms",":hover":{"--tw-scale-x":"1.1","--tw-scale-y":"1.1",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"}}),Ov=K.div({padding:"1.25rem"}),Lv=K.p({fontSize:"0.875rem",lineHeight:"1.25rem",fontWeight:"500",textTransform:"uppercase",letterSpacing:"0.025em","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))"}),Rv=K.h3({marginTop:"0.5rem",marginBottom:"0.25rem",fontSize:"1.125rem",lineHeight:"1.75rem",fontWeight:"600"}),zv=K.p({marginBottom:"0.75rem",fontSize:"0.875rem",lineHeight:"1.375",opacity:"0.8"}),_v=K.span({fontSize:"1rem",lineHeight:"1.5rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(22 163 74 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(74 222 128 / var(--tw-text-opacity))"}});function Nv(){const r=ho(),o=a=>{r(`/Indicator/${a}`)};return E(wv,null,E(kv,null,E(vr,{count:12,sizes:[30,60]})),E(bv,null,E(vr,{count:12,sizes:[40,80]})),E(xv,null,"Indicator Collection"),E(Sv,null,_p.map(a=>E(Cv,{key:a.id,onClick:()=>o(a.id)},E(Ev,null,E(Pv,{src:a.image,alt:a.title})),E(Ov,null,E(Lv,null,a.category),E(Rv,null,a.title),E(zv,null,a.description),E(_v,null,"$",a.price))))))}const jv=K.div({marginLeft:"auto",marginRight:"auto",marginTop:"2.5rem",maxWidth:"56rem",borderRadius:"1.5rem","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))",padding:"2rem","--tw-shadow":"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)","--tw-shadow-colored":"0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"}),Tv=K.img({marginBottom:"1.5rem",height:"20rem",width:"100%",borderRadius:"1rem",objectFit:"cover"}),Fv=K.h2({marginBottom:"1rem",fontSize:"1.875rem",lineHeight:"2.25rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))"}),Av=K.span({fontSize:"0.875rem",lineHeight:"1.25rem",fontWeight:"600",textTransform:"uppercase","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))"}),Iv=K.p({marginBottom:"1.5rem",lineHeight:"1.625","--tw-text-opacity":"1",color:"rgb(75 85 99 / var(--tw-text-opacity))"}),Mv=K.div({marginBottom:"1.5rem",fontSize:"1.25rem",lineHeight:"1.75rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(22 163 74 / var(--tw-text-opacity))"}),$v=K.div({display:"flex",gap:"1rem"}),Np=K.button({borderRadius:"0.5rem",paddingLeft:"1.25rem",paddingRight:"1.25rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",fontWeight:"600","--tw-text-opacity":"1",color:"rgb(255 255 255 / var(--tw-text-opacity))",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms"}),Dv=K(Np)({"--tw-bg-opacity":"1",backgroundColor:"rgb(59 130 246 / var(--tw-bg-opacity))",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgb(37 99 235 / var(--tw-bg-opacity))"}}),Uv=K(Np)({"--tw-bg-opacity":"1",backgroundColor:"rgb(107 114 128 / var(--tw-bg-opacity))",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgb(75 85 99 / var(--tw-bg-opacity))"}});function Bv(){const{id:r}=cp(),o=ho(),a=_p.find(l=>l.id===Number(r));return a?E("div",{css:{minHeight:"100vh","--tw-bg-opacity":"1",backgroundColor:"rgb(243 244 246 / var(--tw-bg-opacity))",paddingTop:"2.5rem",paddingBottom:"2.5rem"}},E(jv,null,E(Tv,{src:a.image,alt:a.title}),E(Av,null,a.category),E(Fv,null,a.title),E(Iv,null,a.description),E(Mv,null,"$",a.price),E($v,null,E(Dv,null,"Buy Now"),E(Uv,{onClick:()=>o("/INDICATOR")},"Back")))):E("div",{css:{marginTop:"5rem",textAlign:"center","--tw-text-opacity":"1",color:"rgb(75 85 99 / var(--tw-text-opacity))"}},"Product not found.",E("button",{css:{marginLeft:"0.75rem","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))",textDecorationLine:"underline"},onClick:()=>o("/EA")},"Back to list"))}function cs(){return cs=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var l in a)({}).hasOwnProperty.call(a,l)&&(r[l]=a[l])}return r},cs.apply(null,arguments)}const Hv=r=>E("svg",cs({viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},r),E("path",{fill:"currentColor",d:"m16.172 11l-5.364-5.364l1.414-1.414L20 12l-7.778 7.778l-1.414-1.414L16.172 13H4v-2z"})),Wv=K.div({pointerEvents:"none",position:"absolute",top:"0px",left:"0px",height:"100%",width:"100%",opacity:"0.5","--tw-blur":"blur(4px)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)",zIndex:"0",userSelect:"none"}),Vv=K.div({pointerEvents:"none",position:"absolute",top:"0px",left:"0px",height:"100%",width:"100%",userSelect:"none",zIndex:"2"}),Kv=K.main({display:"flex",width:"100%",flex:"1 1 0%",flexDirection:"column",justifyContent:"center",paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"5rem",paddingBottom:"5rem"}),Qv=K.div({position:"relative",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px",textAlign:"center",zIndex:"1"}),Gv=K.h2({fontSize:"3rem",lineHeight:"2.5rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(71 85 105 / var(--tw-text-opacity))"}),Yv=K.p({marginTop:"1.5rem",fontSize:"1.875rem",lineHeight:"2.25rem","--tw-text-opacity":"1",color:"rgb(148 163 184 / var(--tw-text-opacity))"}),qv=K.button({marginTop:"3rem",display:"inline-flex",alignItems:"center",gap:"1rem",borderRadius:"9999px","--tw-bg-opacity":"1",backgroundColor:"rgb(59 130 246 / var(--tw-bg-opacity))",paddingTop:"0.75rem",paddingBottom:"0.75rem",paddingLeft:"1.5rem",paddingRight:"1.5rem",textAlign:"center","--tw-text-opacity":"1",color:"rgb(239 246 255 / var(--tw-text-opacity))",outline:"2px solid transparent",outlineOffset:"2px",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms",":hover":{gap:"2rem"},":active":{"--tw-bg-opacity":"1",backgroundColor:"rgb(37 99 235 / var(--tw-bg-opacity))"}});function Jv(){const{t:r}=_s();return E(Kv,null,E(Wv,null,E(vr,{count:12,sizes:[30,60]})),E(Vv,null,E(vr,{count:12,sizes:[40,80]})),E(Qv,null,E(Gv,null,r("intro.title")),E(Yv,null,r("intro.description")),E(As,{to:"/EA"},E(qv,null,E("span",null,r("intro.link")),E(Hv,null)))))}const Xv=`.markdown-body {
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
`,Zv=`.markdown-body {
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
`,e1=`/**
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
`,n1=`pre[class*="language-"],
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
`;function ds(){return ds=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var l in a)({}).hasOwnProperty.call(a,l)&&(r[l]=a[l])}return r},ds.apply(null,arguments)}const t1=r=>E("svg",ds({viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},r),E("path",{fill:"currentColor",d:"M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM7 6h4v4H7V6zm0 6h10v2H7v-2zm0 4h10v2H7v-2zm6-9h4v2h-4V7z"}));function fs(){return fs=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var l in a)({}).hasOwnProperty.call(a,l)&&(r[l]=a[l])}return r},fs.apply(null,arguments)}const r1=r=>E("svg",fs({viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},r),E("path",{fill:"currentColor",d:"M3 3h8v8H3V3zm0 10h8v8H3v-8zM13 3h8v8h-8V3zm0 10h8v8h-8v-8zm2-8v4h4V5h-4zm0 10v4h4v-4h-4zM5 5v4h4V5H5zm0 10v4h4v-4H5z"}));function ps(){return ps=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var l in a)({}).hasOwnProperty.call(a,l)&&(r[l]=a[l])}return r},ps.apply(null,arguments)}const o1=r=>E("svg",ps({viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},r),E("path",{fill:"currentColor",d:"M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588c-.094-.117.34.427.433.539c.19.227.33.365.44.438c.204.137.587.196 1.15.14c.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292c-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047c.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308c1.477-.933 2.613-1.226 3.422-1.096c.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19c.691.936 1.058 2.045 1.058 3.293c0 3.757-1.674 5.665-4.642 6.392c.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716a1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446l.005-.705c.005-.708.007-1.338.007-1.998c0-.697-.183-1.152-.425-1.36c-.661-.57-.326-1.655.54-1.752c2.967-.333 4.337-1.482 4.337-4.66c0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947c-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66c.865.097 1.201 1.177.544 1.748c-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z"}));function ms(){return ms=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var l in a)({}).hasOwnProperty.call(a,l)&&(r[l]=a[l])}return r},ms.apply(null,arguments)}const a1=r=>E("svg",ms({viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},r),E("path",{fill:"currentColor",d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333A8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248A15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z"}));function gs(){return gs=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var l in a)({}).hasOwnProperty.call(a,l)&&(r[l]=a[l])}return r},gs.apply(null,arguments)}const i1=r=>E("svg",gs({viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},r),E("path",{fill:"currentColor",d:"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"}));function hs(){return hs=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var l in a)({}).hasOwnProperty.call(a,l)&&(r[l]=a[l])}return r},hs.apply(null,arguments)}const l1=r=>E("svg",hs({viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},r),E("path",{fill:"currentColor",d:"M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938A7.999 7.999 0 0 0 4 12z"}));function ys(){return ys=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var l in a)({}).hasOwnProperty.call(a,l)&&(r[l]=a[l])}return r},ys.apply(null,arguments)}const s1=r=>E("svg",ys({viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},r),E("path",{fill:"currentColor",d:"m21 15l-6 5.996L4.002 21A.998.998 0 0 1 3 20.007V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.456.993 1.002V15zM19 5H5v14h8v-5a1 1 0 0 1 .883-.993L14 13l5-.001V5zm-.829 9.999L15 15v3.169l3.171-3.17z"}));function vs(){return vs=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var l in a)({}).hasOwnProperty.call(a,l)&&(r[l]=a[l])}return r},vs.apply(null,arguments)}const u1=r=>E("svg",vs({viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},r),E("path",{fill:"currentColor",d:"M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8a4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05L3.515 4.93zM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414l-2.121-2.121zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414l2.121-2.121zM5.636 16.95l1.414 1.414l-2.121 2.121l-1.414-1.414l2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"}));function c1(r,o){const[a,l]=$.useState(()=>{try{const c=window.localStorage.getItem(r);return c?JSON.parse(c):o}catch{return o}}),s=$.useCallback(c=>{l(c),window.localStorage.setItem(r,JSON.stringify(c))},[]);return[a,s]}const d1=$.createContext(!1);function f1(){const[r,o]=c1("dark-mode-enabled"),a=window.matchMedia("(prefers-color-scheme: dark)").matches,l=r??a;return $.useEffect(()=>{l?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[l]),[l,o]}var ql={exports:{}},Wf;function p1(){return Wf||(Wf=1,(function(r){var o=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var a=(function(l){var s=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,c=0,f={},p={manual:l.Prism&&l.Prism.manual,disableWorkerMessageHandler:l.Prism&&l.Prism.disableWorkerMessageHandler,util:{encode:function y(x){return x instanceof g?new g(x.type,y(x.content),x.alias):Array.isArray(x)?x.map(y):x.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(y){return Object.prototype.toString.call(y).slice(8,-1)},objId:function(y){return y.__id||Object.defineProperty(y,"__id",{value:++c}),y.__id},clone:function y(x,j){j=j||{};var P,I;switch(p.util.type(x)){case"Object":if(I=p.util.objId(x),j[I])return j[I];P={},j[I]=P;for(var D in x)x.hasOwnProperty(D)&&(P[D]=y(x[D],j));return P;case"Array":return I=p.util.objId(x),j[I]?j[I]:(P=[],j[I]=P,x.forEach(function(J,Q){P[Q]=y(J,j)}),P);default:return x}},getLanguage:function(y){for(;y;){var x=s.exec(y.className);if(x)return x[1].toLowerCase();y=y.parentElement}return"none"},setLanguage:function(y,x){y.className=y.className.replace(RegExp(s,"gi"),""),y.classList.add("language-"+x)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(P){var y=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(P.stack)||[])[1];if(y){var x=document.getElementsByTagName("script");for(var j in x)if(x[j].src==y)return x[j]}return null}},isActive:function(y,x,j){for(var P="no-"+x;y;){var I=y.classList;if(I.contains(x))return!0;if(I.contains(P))return!1;y=y.parentElement}return!!j}},languages:{plain:f,plaintext:f,text:f,txt:f,extend:function(y,x){var j=p.util.clone(p.languages[y]);for(var P in x)j[P]=x[P];return j},insertBefore:function(y,x,j,P){P=P||p.languages;var I=P[y],D={};for(var J in I)if(I.hasOwnProperty(J)){if(J==x)for(var Q in j)j.hasOwnProperty(Q)&&(D[Q]=j[Q]);j.hasOwnProperty(J)||(D[J]=I[J])}var te=P[y];return P[y]=D,p.languages.DFS(p.languages,function(ge,Ce){Ce===te&&ge!=y&&(this[ge]=D)}),D},DFS:function y(x,j,P,I){I=I||{};var D=p.util.objId;for(var J in x)if(x.hasOwnProperty(J)){j.call(x,J,x[J],P||J);var Q=x[J],te=p.util.type(Q);te==="Object"&&!I[D(Q)]?(I[D(Q)]=!0,y(Q,j,null,I)):te==="Array"&&!I[D(Q)]&&(I[D(Q)]=!0,y(Q,j,J,I))}}},plugins:{},highlightAll:function(y,x){p.highlightAllUnder(document,y,x)},highlightAllUnder:function(y,x,j){var P={callback:j,container:y,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};p.hooks.run("before-highlightall",P),P.elements=Array.prototype.slice.apply(P.container.querySelectorAll(P.selector)),p.hooks.run("before-all-elements-highlight",P);for(var I=0,D;D=P.elements[I++];)p.highlightElement(D,x===!0,P.callback)},highlightElement:function(y,x,j){var P=p.util.getLanguage(y),I=p.languages[P];p.util.setLanguage(y,P);var D=y.parentElement;D&&D.nodeName.toLowerCase()==="pre"&&p.util.setLanguage(D,P);var J=y.textContent,Q={element:y,language:P,grammar:I,code:J};function te(Ce){Q.highlightedCode=Ce,p.hooks.run("before-insert",Q),Q.element.innerHTML=Q.highlightedCode,p.hooks.run("after-highlight",Q),p.hooks.run("complete",Q),j&&j.call(Q.element)}if(p.hooks.run("before-sanity-check",Q),D=Q.element.parentElement,D&&D.nodeName.toLowerCase()==="pre"&&!D.hasAttribute("tabindex")&&D.setAttribute("tabindex","0"),!Q.code){p.hooks.run("complete",Q),j&&j.call(Q.element);return}if(p.hooks.run("before-highlight",Q),!Q.grammar){te(p.util.encode(Q.code));return}if(x&&l.Worker){var ge=new Worker(p.filename);ge.onmessage=function(Ce){te(Ce.data)},ge.postMessage(JSON.stringify({language:Q.language,code:Q.code,immediateClose:!0}))}else te(p.highlight(Q.code,Q.grammar,Q.language))},highlight:function(y,x,j){var P={code:y,grammar:x,language:j};if(p.hooks.run("before-tokenize",P),!P.grammar)throw new Error('The language "'+P.language+'" has no grammar.');return P.tokens=p.tokenize(P.code,P.grammar),p.hooks.run("after-tokenize",P),g.stringify(p.util.encode(P.tokens),P.language)},tokenize:function(y,x){var j=x.rest;if(j){for(var P in j)x[P]=j[P];delete x.rest}var I=new v;return L(I,I.head,y),S(y,I,x,I.head,0),A(I)},hooks:{all:{},add:function(y,x){var j=p.hooks.all;j[y]=j[y]||[],j[y].push(x)},run:function(y,x){var j=p.hooks.all[y];if(!(!j||!j.length))for(var P=0,I;I=j[P++];)I(x)}},Token:g};l.Prism=p;function g(y,x,j,P){this.type=y,this.content=x,this.alias=j,this.length=(P||"").length|0}g.stringify=function y(x,j){if(typeof x=="string")return x;if(Array.isArray(x)){var P="";return x.forEach(function(te){P+=y(te,j)}),P}var I={type:x.type,content:y(x.content,j),tag:"span",classes:["token",x.type],attributes:{},language:j},D=x.alias;D&&(Array.isArray(D)?Array.prototype.push.apply(I.classes,D):I.classes.push(D)),p.hooks.run("wrap",I);var J="";for(var Q in I.attributes)J+=" "+Q+'="'+(I.attributes[Q]||"").replace(/"/g,"&quot;")+'"';return"<"+I.tag+' class="'+I.classes.join(" ")+'"'+J+">"+I.content+"</"+I.tag+">"};function w(y,x,j,P){y.lastIndex=x;var I=y.exec(j);if(I&&P&&I[1]){var D=I[1].length;I.index+=D,I[0]=I[0].slice(D)}return I}function S(y,x,j,P,I,D){for(var J in j)if(!(!j.hasOwnProperty(J)||!j[J])){var Q=j[J];Q=Array.isArray(Q)?Q:[Q];for(var te=0;te<Q.length;++te){if(D&&D.cause==J+","+te)return;var ge=Q[te],Ce=ge.inside,$e=!!ge.lookbehind,Re=!!ge.greedy,Ze=ge.alias;if(Re&&!ge.pattern.global){var ze=ge.pattern.toString().match(/[imsuy]*$/)[0];ge.pattern=RegExp(ge.pattern.source,ze+"g")}for(var he=ge.pattern||ge,W=P.next,X=I;W!==x.tail&&!(D&&X>=D.reach);X+=W.value.length,W=W.next){var k=W.value;if(x.length>y.length)return;if(!(k instanceof g)){var M=1,Y;if(Re){if(Y=w(he,X,y,$e),!Y||Y.index>=y.length)break;var le=Y.index,se=Y.index+Y[0].length,re=X;for(re+=W.value.length;le>=re;)W=W.next,re+=W.value.length;if(re-=W.value.length,X=re,W.value instanceof g)continue;for(var fe=W;fe!==x.tail&&(re<se||typeof fe.value=="string");fe=fe.next)M++,re+=fe.value.length;M--,k=y.slice(X,re),Y.index-=X}else if(Y=w(he,0,k,$e),!Y)continue;var le=Y.index,ce=Y[0],ue=k.slice(0,le),je=k.slice(le+ce.length),Qn=X+k.length;D&&Qn>D.reach&&(D.reach=Qn);var Ke=W.prev;ue&&(Ke=L(x,Ke,ue),X+=ue.length),T(x,Ke,M);var rt=new g(J,Ce?p.tokenize(ce,Ce):ce,Ze,ce);if(W=L(x,Ke,rt),je&&L(x,W,je),M>1){var Sn={cause:J+","+te,reach:Qn};S(y,x,j,W.prev,X,Sn),D&&Sn.reach>D.reach&&(D.reach=Sn.reach)}}}}}}function v(){var y={value:null,prev:null,next:null},x={value:null,prev:y,next:null};y.next=x,this.head=y,this.tail=x,this.length=0}function L(y,x,j){var P=x.next,I={value:j,prev:x,next:P};return x.next=I,P.prev=I,y.length++,I}function T(y,x,j){for(var P=x.next,I=0;I<j&&P!==y.tail;I++)P=P.next;x.next=P,P.prev=x,y.length-=I}function A(y){for(var x=[],j=y.head.next;j!==y.tail;)x.push(j.value),j=j.next;return x}if(!l.document)return l.addEventListener&&(p.disableWorkerMessageHandler||l.addEventListener("message",function(y){var x=JSON.parse(y.data),j=x.language,P=x.code,I=x.immediateClose;l.postMessage(p.highlight(P,p.languages[j],j)),I&&l.close()},!1)),p;var O=p.util.currentScript();O&&(p.filename=O.src,O.hasAttribute("data-manual")&&(p.manual=!0));function R(){p.manual||p.highlightAll()}if(!p.manual){var _=document.readyState;_==="loading"||_==="interactive"&&O&&O.defer?document.addEventListener("DOMContentLoaded",R):window.requestAnimationFrame?window.requestAnimationFrame(R):window.setTimeout(R,16)}return p})(o);r.exports&&(r.exports=a),typeof sf<"u"&&(sf.Prism=a),a.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.languages.markup.doctype.inside["internal-subset"].inside=a.languages.markup,a.hooks.add("wrap",function(l){l.type==="entity"&&(l.attributes.title=l.content.replace(/&amp;/,"&"))}),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(s,c){var f={};f["language-"+c]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[c]},f.cdata=/^<!\[CDATA\[|\]\]>$/i;var p={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:f}};p["language-"+c]={pattern:/[\s\S]+/,inside:a.languages[c]};var g={};g[s]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return s}),"i"),lookbehind:!0,greedy:!0,inside:p},a.languages.insertBefore("markup","cdata",g)}}),Object.defineProperty(a.languages.markup.tag,"addAttribute",{value:function(l,s){a.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+l+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[s,"language-"+s],inside:a.languages[s]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.xml=a.languages.extend("markup",{}),a.languages.ssml=a.languages.xml,a.languages.atom=a.languages.xml,a.languages.rss=a.languages.xml,(function(l){var s=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;l.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+s.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+s.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+s.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+s.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:s,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},l.languages.css.atrule.inside.rest=l.languages.css;var c=l.languages.markup;c&&(c.tag.addInlined("style","css"),c.tag.addAttribute("style","css"))})(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:a.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),a.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),a.languages.markup&&(a.languages.markup.tag.addInlined("script","javascript"),a.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),a.languages.js=a.languages.javascript,(function(){if(typeof a>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var l="Loading…",s=function(O,R){return"✖ Error "+O+" while fetching file: "+R},c="✖ Error: File does not exist or is empty",f={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},p="data-src-status",g="loading",w="loaded",S="failed",v="pre[data-src]:not(["+p+'="'+w+'"]):not(['+p+'="'+g+'"])';function L(O,R,_){var y=new XMLHttpRequest;y.open("GET",O,!0),y.onreadystatechange=function(){y.readyState==4&&(y.status<400&&y.responseText?R(y.responseText):y.status>=400?_(s(y.status,y.statusText)):_(c))},y.send(null)}function T(O){var R=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(O||"");if(R){var _=Number(R[1]),y=R[2],x=R[3];return y?x?[_,Number(x)]:[_,void 0]:[_,_]}}a.hooks.add("before-highlightall",function(O){O.selector+=", "+v}),a.hooks.add("before-sanity-check",function(O){var R=O.element;if(R.matches(v)){O.code="",R.setAttribute(p,g);var _=R.appendChild(document.createElement("CODE"));_.textContent=l;var y=R.getAttribute("data-src"),x=O.language;if(x==="none"){var j=(/\.(\w+)$/.exec(y)||[,"none"])[1];x=f[j]||j}a.util.setLanguage(_,x),a.util.setLanguage(R,x);var P=a.plugins.autoloader;P&&P.loadLanguages(x),L(y,function(I){R.setAttribute(p,w);var D=T(R.getAttribute("data-range"));if(D){var J=I.split(/\r\n?|\n/g),Q=D[0],te=D[1]==null?J.length:D[1];Q<0&&(Q+=J.length),Q=Math.max(0,Math.min(Q-1,J.length)),te<0&&(te+=J.length),te=Math.max(0,Math.min(te,J.length)),I=J.slice(Q,te).join(`
`),R.hasAttribute("data-start")||R.setAttribute("data-start",String(Q+1))}_.textContent=I,a.highlightElement(_)},function(I){R.setAttribute(p,S),_.textContent=I})}}),a.plugins.fileHighlight={highlight:function(R){for(var _=(R||document).querySelectorAll(v),y=0,x;x=_[y++];)a.highlightElement(x)}};var A=!1;a.fileHighlight=function(){A||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),A=!0),a.plugins.fileHighlight.highlight.apply(this,arguments)}})()})(ql)),ql.exports}p1();async function Vf(r,o){const a=document.getElementById(r);a&&a.remove();const l=document.createElement("style");l.setAttribute("id",r),l.textContent=o,document.head.appendChild(l)}const m1="Agus Pujianto",g1="aguspujiantoo@gmail.com",h1="dagangduit.github.io",y1=K.div`
  ${{position:"relative",display:"flex",minHeight:"100vh",flexDirection:"column",paddingBottom:"4rem"}}
`,v1=K.header({height:"5rem",width:"100%"}),w1=K.div({marginLeft:"auto",marginRight:"auto",display:"flex",height:"100%",maxWidth:"1024px",alignItems:"center",paddingLeft:"2rem",paddingRight:"2rem",fontWeight:"600","--tw-text-opacity":"1",color:"rgb(100 116 139 / var(--tw-text-opacity))"}),k1=K(As)`
  ${{fontSize:"1.125rem",lineHeight:"1.75rem"}}
`,b1=K.span({marginLeft:"0.125rem",marginRight:"0.125rem","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))"}),x1=K.nav({marginLeft:"auto",display:"grid",gridAutoFlow:"column",gap:"0.75rem",lineHeight:"1.25rem","@media (min-width: 1024px)":{gap:"1.5rem"}}),jp={cursor:"pointer",opacity:"0.6",":hover":{"--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))",opacity:"1"}},za=K.a`
  ${jp}
`,Jl=K(Qy)`
  ${jp}

  &.active {
    ${{"--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))",opacity:"1"}}
  }
`,S1=K.div({height:"100%",width:"1px","--tw-bg-opacity":"1",backgroundColor:"rgb(229 231 235 / var(--tw-bg-opacity))",".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(31 41 55 / var(--tw-bg-opacity))"}}),C1=K.footer({position:"absolute",bottom:"1rem",left:"0px",width:"100%",userSelect:"none","> :not([hidden]) ~ :not([hidden])":{"--tw-space-x-reverse":"0",marginRight:"calc(0.5rem * var(--tw-space-x-reverse))",marginLeft:"calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))"},textAlign:"center",fontSize:"0.875rem",lineHeight:"1.25rem","--tw-text-opacity":"1",color:"rgb(203 213 225 / var(--tw-text-opacity))"}),E1=K.div({marginLeft:"auto",marginRight:"auto",maxWidth:"1024px",".dark &":{"--tw-text-opacity":"1",color:"rgb(30 41 59 / var(--tw-text-opacity))"}});function P1(){const{t:r}=_s(),[o,a]=f1();$.useEffect(()=>{Vf("prism-theme",o?n1:Zv),Vf("markdown-theme",o?Xv:e1)},[o]);const l=$.useCallback(()=>{a(!o)},[o]),s=$.useCallback(()=>{window.open("https://dagangduit.com/","_blank")},[]);return E(d1.Provider,{value:o},E(y1,null,E(v1,null,E(w1,null,E(k1,{to:"/"},E("span",null),E(b1,null,m1)),E(x1,null,E(Jl,{to:"/EA"},E(t1,{css:{display:"inline","@media (min-width: 1024px)":{display:"none"}}}),E("span",{css:{display:"none","@media (min-width: 1024px)":{display:"inline"}}},r("tab.EA"))),E(Jl,{to:"/indicator"},E(s1,{css:{display:"inline","@media (min-width: 1024px)":{display:"none"}}}),E("span",{css:{display:"none","@media (min-width: 1024px)":{display:"inline"}}},r("tab.indicator"))),E(Jl,{to:"/projects"},E(r1,{css:{display:"inline","@media (min-width: 1024px)":{display:"none"}}}),E("span",{css:{display:"none","@media (min-width: 1024px)":{display:"inline"}}},r("tab.projects"))),E(S1,null),E(za,{href:`mailto:${g1}`},E(i1,null)),E(za,{href:h1,target:"_blank"},E(o1,null)),E(za,{onClick:s},E(a1,null)),E(za,{onClick:l},E(o?u1:l1,null))))),E(os,null),E(C1,null,E(E1,null,E("a",{css:{":hover":{"--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))"}},href:"https://creativecommons.org/licenses/by-nc-sa/4.0/"},"CC BY-NC-SA 4.0"),E("span",{css:{marginLeft:"0.5rem"}},"2016-present © varHarrie")))))}function ws(){return ws=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var l in a)({}).hasOwnProperty.call(a,l)&&(r[l]=a[l])}return r},ws.apply(null,arguments)}const O1=r=>E("svg",ws({viewBox:"0 0 16 16",width:"1.2em",height:"1.2em"},r),E("path",{fill:"currentColor",d:"M8 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Z"}),E("path",{fill:"currentColor",d:"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0a6.5 6.5 0 0 0-13 0Z"}));function ks(){return ks=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var l in a)({}).hasOwnProperty.call(a,l)&&(r[l]=a[l])}return r},ks.apply(null,arguments)}const L1=r=>E("svg",ks({viewBox:"0 0 16 16",width:"1.2em",height:"1.2em"},r),E("path",{fill:"currentColor",d:"M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0Z"}));function bs(){return bs=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var l in a)({}).hasOwnProperty.call(a,l)&&(r[l]=a[l])}return r},bs.apply(null,arguments)}const R1=r=>E("svg",bs({viewBox:"0 0 16 16",width:"1.2em",height:"1.2em"},r),E("path",{fill:"currentColor",d:"M8 .25a.75.75 0 0 1 .673.418l1.882 3.815l4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97l.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45l2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084l2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456l-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183l-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"}));function xs(){return xs=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var l in a)({}).hasOwnProperty.call(a,l)&&(r[l]=a[l])}return r},xs.apply(null,arguments)}const z1=r=>E("svg",xs({viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},r),E("path",{fill:"currentColor",d:"m24 12l-5.657 5.657l-1.414-1.414L21.172 12l-4.243-4.243l1.414-1.414L24 12zM2.828 12l4.243 4.243l-1.414 1.414L0 12l5.657-5.657L7.07 7.757L2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"}));function Ss(){return Ss=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var l in a)({}).hasOwnProperty.call(a,l)&&(r[l]=a[l])}return r},Ss.apply(null,arguments)}const _1=r=>E("svg",Ss({viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},r),E("path",{fill:"currentColor",d:"M2.8 14h2.04l-.545 2.725l5.744 2.154l7.227-2.41L18.36 11H3.4l.4-2h14.96l.8-4H4.6L5 3h17l-3 15l-9 3l-8-3z"}));function Cs(){return Cs=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var l in a)({}).hasOwnProperty.call(a,l)&&(r[l]=a[l])}return r},Cs.apply(null,arguments)}const N1=r=>E("svg",Cs({viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},r),E("path",{fill:"currentColor",d:"m12 18.178l-4.62-1.256l-.328-3.544h2.27l.158 1.844l2.52.667l2.52-.667l.26-2.866H6.96l-.635-6.678h11.35l-.227 2.21H8.822l.204 2.256h8.217l-.624 6.778L12 18.178zM3 2h18l-1.623 18L12 22l-7.377-2L3 2zm2.188 2L6.49 18.434L12 19.928l5.51-1.494L18.812 4H5.188z"}));function Es(){return Es=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var l in a)({}).hasOwnProperty.call(a,l)&&(r[l]=a[l])}return r},Es.apply(null,arguments)}const j1=r=>E("svg",Es({viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},r),E("path",{fill:"currentColor",d:"M3.316 3L12 18l8.684-15H23L12 22L1 3h2.316zm4.342 0L12 10.5L16.342 3h2.316L12 14.5L5.342 3h2.316z"}));function Ps(){return Ps=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var l in a)({}).hasOwnProperty.call(a,l)&&(r[l]=a[l])}return r},Ps.apply(null,arguments)}const T1=r=>E("svg",Ps({viewBox:"0 0 15 15",width:"1.2em",height:"1.2em"},r),E("path",{fill:"none",stroke:"currentColor",d:"M12.5 8v-.167c0-.736-.597-1.333-1.333-1.333H10a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 0 1 0 3h-1A1.5 1.5 0 0 1 8.5 11m-2-5v5a1.5 1.5 0 0 1-3 0M.5.5h14v14H.5V.5Z"}));function Os(){return Os=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var l in a)({}).hasOwnProperty.call(a,l)&&(r[l]=a[l])}return r},Os.apply(null,arguments)}const F1=r=>E("svg",Os({viewBox:"0 0 15 15",width:"1.2em",height:"1.2em"},r),E("path",{fill:"none",stroke:"currentColor",d:"M12.5 8v-.167c0-.736-.597-1.333-1.333-1.333H10a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 0 1 0 3h-1A1.5 1.5 0 0 1 8.5 11M8 6.5H3m2.5 0V13M.5.5h14v14H.5V.5Z"}));function Ls(){return Ls=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var l in a)({}).hasOwnProperty.call(a,l)&&(r[l]=a[l])}return r},Ls.apply(null,arguments)}const A1=r=>E("svg",Ls({viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},r),E("path",{fill:"#368832",d:"M19.792 7.071h2.553v2.553H24.9V7.071h2.552v2.553H30v2.552h-2.55v2.551H30v2.553h-2.551v2.552H24.9v-2.55h-2.55v2.552h-2.557v-2.55H17.24v-2.559h2.553v-2.546H17.24V9.622h2.554Zm2.553 7.658H24.9v-2.553h-2.555Zm-7.656 9.284a10.2 10.2 0 0 1-4.653.915a7.6 7.6 0 0 1-5.89-2.336A8.839 8.839 0 0 1 2 16.367a9.436 9.436 0 0 1 2.412-6.719a8.181 8.181 0 0 1 6.259-2.577a11.1 11.1 0 0 1 4.018.638v3.745a6.81 6.81 0 0 0-3.723-1.036a4.793 4.793 0 0 0-3.7 1.529a5.879 5.879 0 0 0-1.407 4.142a5.774 5.774 0 0 0 1.328 3.992a4.551 4.551 0 0 0 3.575 1.487a7.288 7.288 0 0 0 3.927-1.108Z"})),I1=K.div({position:"relative",borderRadius:"0.375rem","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))",padding:"0.75rem",paddingLeft:"3.5rem","--tw-shadow":"0 1px 2px 0 rgb(0 0 0 / 0.05)","--tw-shadow-colored":"0 1px 2px 0 var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)","--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)","--tw-ring-color":"rgb(71 85 105 / 0.05)",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms",":hover":{"--tw-shadow":"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)","--tw-shadow-colored":"0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"},".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(17 24 39 / var(--tw-bg-opacity))"}}),M1=K.div`
  ${{position:"absolute",top:"0.75rem",left:"0.75rem",display:"flex",height:"2.25rem",width:"2.25rem",alignItems:"center",justifyContent:"center",overflow:"hidden",borderRadius:"0.375rem",fontWeight:"700"}}

  &::before {
    ${{position:"absolute",top:"0px",left:"0px",display:"block",height:"100%",width:"100%",opacity:"0.2",content:"''"}}
    background-color: currentColor;
  }
`,$1=K.a({display:"block",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))"}),D1=K.div`
  ${{marginTop:"0.5rem",overflow:"hidden",fontSize:"0.875rem",lineHeight:"1.25rem","--tw-text-opacity":"1",color:"rgb(148 163 184 / var(--tw-text-opacity))"}}

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,U1=K.ul({marginTop:"0.5rem",display:"flex",minWidth:"0px","> :not([hidden]) ~ :not([hidden])":{"--tw-space-x-reverse":"0",marginRight:"calc(0.75rem * var(--tw-space-x-reverse))",marginLeft:"calc(0.75rem * calc(1 - var(--tw-space-x-reverse)))"},fontSize:"0.875rem",lineHeight:"1.25rem","--tw-text-opacity":"1",color:"rgb(148 163 184 / var(--tw-text-opacity))"}),Xl=K.li({display:"flex",alignItems:"center"}),Kf={default:{component:z1,color:""},TypeScript:{component:F1,color:"#3178C6"},JavaScript:{component:T1,color:"#FCD002"},HTML:{component:N1,color:"#FF3C41"},CSS:{component:_1,color:"#10BDFF"},Vue:{component:j1,color:"#41B883"},"C#":{component:A1,color:"#368833"}};function B1(r){const{project:o}=r,a=Kf[r.project.language]??Kf.default;return E(I1,null,E(M1,{style:{color:a.color}},E(a.component,null)),E($1,{href:o.htmlUrl},o.fullName),E(D1,null,o.description),E(U1,null,E(Xl,null,E(R1,null),E("span",{css:{marginLeft:"0.5rem"}},o.stargazersCount)),E(Xl,null,E(L1,null),E("span",{css:{marginLeft:"0.5rem"}},o.forksCount)),E(Xl,null,E(O1,null),E("span",{css:{marginLeft:"0.5rem"}},o.openIssuesCount))))}const H1=K.div({height:"1.5rem","@keyframes pulse":{"50%":{opacity:".5"}},animation:"pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",borderRadius:"0.25rem","--tw-bg-opacity":"1",backgroundColor:"rgb(229 231 235 / var(--tw-bg-opacity))",".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(31 41 55 / var(--tw-bg-opacity))"}});function Qa(r){return r.children??E(H1,r)}const W1=K.div({position:"relative",borderRadius:"0.375rem","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))",padding:"0.75rem",paddingLeft:"3.5rem","--tw-shadow":"0 1px 2px 0 rgb(0 0 0 / 0.05)","--tw-shadow-colored":"0 1px 2px 0 var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)","--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)","--tw-ring-color":"rgb(71 85 105 / 0.05)",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms",":hover":{"--tw-shadow":"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)","--tw-shadow-colored":"0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"},".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(17 24 39 / var(--tw-bg-opacity))"}}),V1=K(Qa)({position:"absolute",top:"0.75rem",left:"0.75rem",height:"2.25rem",width:"2.25rem",borderRadius:"0.375rem"}),K1=K(Qa)({height:"1.25rem",width:"50%","--tw-text-opacity":"1",color:"rgb(191 219 254 / var(--tw-text-opacity))"}),Q1=K(Qa)({marginTop:"0.5rem",width:"66.666667%"}),G1=K.div({marginTop:"0.5rem",display:"flex"}),Y1=K(Qa)({marginRight:"1rem",height:"1.25rem",width:"2.5rem"});function q1(){return E(W1,null,E(V1,null),E(K1,null),E(Q1,null),E(G1,null,Array.from({length:3}).map((r,o)=>E(Y1,{key:o}))))}function J1(r,o=!1){const[a,l]=$.useState(o);return[a,async(...c)=>{l(!0);try{return await r(...c)}finally{l(!1)}}]}class Vs{constructor(o,a,l,s){this.id=o,this.login=a,this.avatarUrl=l,this.htmlUrl=s}static from(o){return new Vs(o.id,o.login,o.avatar_url,o.html_url)}}class Ks{constructor(o,a,l,s,c,f,p,g,w,S,v,L,T,A,O){this.id=o,this.owner=a,this.fullName=l,this.name=s,this.htmlUrl=c,this.description=f,this.language=p,this.forksCount=g,this.stargazersCount=w,this.openIssuesCount=S,this.archived=v,this.disabled=L,this.pushedAt=T,this.createdAt=A,this.updatedAt=O}static from(o){return new Ks(o.id,Vs.from(o.owner),o.full_name,o.name,o.html_url,o.description,o.language,o.forks_count,o.stargazers_count,o.open_issues_count,o.archived,o.disabled,o.pushed_at,o.created_at,o.updated_at)}}var Tp=(r=>(r.Asc="asc",r.Desc="desc",r))(Tp||{}),Fp=(r=>(r.Created="created",r.Updated="updated",r.Pushed="pushed",r.FullName="full_name",r))(Fp||{}),Ap=(r=>(r.All="all",r.Owner="owner",r.Member="member",r))(Ap||{});function X1(r){const o=new URLSearchParams;return Object.keys(r).forEach(a=>{r[a]&&o.append(a,String(r[a]))}),`?${o.toString()}`}function Z1(r){return["POST","PUT","PATCH"].includes(r)}class ew{constructor(o,a,l){this.token=o,this.owner=a,this.repo=l}apiBase="https://api.github.com";async request(o,a,l){let s="",c=l;return l&&!Z1(o)&&(s=X1(l),c=void 0),(await fetch([this.apiBase,a,s].join(""),{method:o,headers:{"Content-Type":"application/json;charset=UTF-8",Accept:"application/vnd.github.v3+json",Authorization:`token ${this.token}`},body:c?JSON.stringify(c):void 0})).json()}async listMilestones(o={}){const{state:a,sort:l,direction:s,page:c,pageSize:f}=o,p={state:a,sort:l,direction:s,page:c,per_page:f};return this.request("GET",`/repos/${this.owner}/${this.repo}/milestones`,p)}async listIssues(o){const{milestone:a,labels:l,state:s,sort:c,direction:f,page:p,pageSize:g}=o,w={milestone:a,labels:l,state:s,sort:c,direction:f,page:p,per_page:g,creator:this.owner};return this.request("GET",`/repos/${this.owner}/${this.repo}/issues`,w)}getIssue(o){return this.request("GET",`/repos/${this.owner}/${this.repo}/issues/${o}`)}listComments(o){const{issue:a,sort:l,direction:s,page:c,pageSize:f}=o,p={sort:l,direction:s,page:c,per_page:f};return this.request("GET",`/repos/${this.owner}/${this.repo}/issues/${a}/comments`,p)}listRepositories(o){const{type:a,sort:l,direction:s,page:c,pageSize:f}=o,p={type:a,sort:l,direction:s,page:c,per_page:f};return this.request("GET",`/users/${this.owner}/repos`,p)}}const nw=new ew("FAKE_TOKEN_PART1FAKE_TOKEN_PART2","FAKE_USER","FAKE_REPO"),tw=K.main({marginLeft:"auto",marginRight:"auto",width:"100%",maxWidth:"1024px",paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"3rem",paddingBottom:"3rem"}),rw=K.h2({fontSize:"1.5rem",lineHeight:"2rem","--tw-text-opacity":"1",color:"rgb(51 65 85 / var(--tw-text-opacity))"}),Qf=K.div({marginTop:"2rem",display:"grid",gridTemplateColumns:"repeat(1, minmax(0, 1fr))",gap:"0.5rem","@media (min-width: 1024px)":{gridTemplateColumns:"repeat(2, minmax(0, 1fr))"}});function ow(){const{t:r}=_s(),[o,a]=$.useState([]),[l,s]=J1($.useCallback(async()=>{const c=await nw.listRepositories({type:Ap.All,sort:Fp.Pushed,direction:Tp.Desc,page:1,pageSize:50});a(c.map(Ks.from).filter(f=>f.stargazersCount>0&&!f.archived&&!f.disabled).sort((f,p)=>p.stargazersCount-f.stargazersCount))},[]),!0);return $.useEffect(()=>{s()},[]),E(tw,null,E(rw,null,r("projects.title")),l&&E(Qf,null,Array.from({length:10}).map((c,f)=>E(q1,{key:f}))),!!o.length&&E(Qf,null,o.map(c=>E(B1,{key:c.id,project:c}))))}function aw(){return E(Wy,null,E($y,null,E(Dn,{path:"/",element:E(P1,null)},E(Dn,{path:"",element:E(Jv,null)}),E(Dn,{path:"EA",element:E(os,null)},E(Dn,{path:"",element:E(sv,null)}),E(Dn,{path:":id",element:E(vv,null)})),E(Dn,{path:"indicator",element:E(os,null)},E(Dn,{path:"",element:E(Nv,null)}),E(Dn,{path:":id",element:E(Bv,null)})),E(Dn,{path:"projects",element:E(ow,null)}))))}const iw=()=>E(Ep,{styles:Pp`*, ::before, ::after {
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
}`}),lw=Pp`
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
`;function sw(){return E(zs.Fragment,null,E(iw,null),E(Ep,{styles:lw}))}document.title="Agus Pujianto";const uw=document.getElementById("root"),cw=Zh.createRoot(uw);cw.render(E(zs.Fragment,null,E(sw,null),E(aw,null)));
