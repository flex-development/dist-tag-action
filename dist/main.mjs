import ue from"os";import Ae from"fs";import Pe from"path";import Te from"http";import Ue from"https";import"net";import et from"tls";import tt from"events";import"assert";import rt from"util";var w=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function nt(e){var r=e.default;if(typeof r=="function"){var t=function(){return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach(function(n){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:function(){return e[n]}})}),t}var me={},re={},z={};Object.defineProperty(z,"__esModule",{value:!0}),z.toCommandProperties=z.toCommandValue=void 0;function ot(e){return e==null?"":typeof e=="string"||e instanceof String?e:JSON.stringify(e)}z.toCommandValue=ot;function it(e){return Object.keys(e).length?{title:e.title,file:e.file,line:e.startLine,endLine:e.endLine,col:e.startColumn,endColumn:e.endColumn}:{}}z.toCommandProperties=it;var st=w&&w.__createBinding||(Object.create?function(e,r,t,n){n===void 0&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return r[t]}})}:function(e,r,t,n){n===void 0&&(n=t),e[n]=r[t]}),at=w&&w.__setModuleDefault||(Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r}),ut=w&&w.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)t!=="default"&&Object.hasOwnProperty.call(e,t)&&st(r,e,t);return at(r,e),r};Object.defineProperty(re,"__esModule",{value:!0}),re.issue=re.issueCommand=void 0;const ct=ut(ue),Ce=z;function $e(e,r,t){const n=new lt(e,r,t);process.stdout.write(n.toString()+ct.EOL)}re.issueCommand=$e;function ft(e,r=""){$e(e,{},r)}re.issue=ft;const qe="::";class lt{constructor(r,t,n){r||(r="missing.command"),this.command=r,this.properties=t,this.message=n}toString(){let r=qe+this.command;if(this.properties&&Object.keys(this.properties).length>0){r+=" ";let t=!0;for(const n in this.properties)if(this.properties.hasOwnProperty(n)){const o=this.properties[n];o&&(t?t=!1:r+=",",r+=`${n}=${ht(o)}`)}}return r+=`${qe}${dt(this.message)}`,r}}function dt(e){return Ce.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function ht(e){return Ce.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}var ce={},pt=w&&w.__createBinding||(Object.create?function(e,r,t,n){n===void 0&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return r[t]}})}:function(e,r,t,n){n===void 0&&(n=t),e[n]=r[t]}),vt=w&&w.__setModuleDefault||(Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r}),Me=w&&w.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)t!=="default"&&Object.hasOwnProperty.call(e,t)&&pt(r,e,t);return vt(r,e),r};Object.defineProperty(ce,"__esModule",{value:!0}),ce.issueCommand=void 0;const De=Me(Ae),mt=Me(ue),gt=z;function _t(e,r){const t=process.env[`GITHUB_${e}`];if(!t)throw new Error(`Unable to find environment variable for file command ${e}`);if(!De.existsSync(t))throw new Error(`Missing file at path: ${t}`);De.appendFileSync(t,`${gt.toCommandValue(r)}${mt.EOL}`,{encoding:"utf8"})}ce.issueCommand=_t;var fe,wt=new Uint8Array(16);function Ie(){if(!fe&&(fe=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!fe))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return fe(wt)}const yt=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function le(e){return typeof e=="string"&&yt.test(e)}for(var j=[],ge=0;ge<256;++ge)j.push((ge+256).toString(16).substr(1));function de(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=(j[e[r+0]]+j[e[r+1]]+j[e[r+2]]+j[e[r+3]]+"-"+j[e[r+4]]+j[e[r+5]]+"-"+j[e[r+6]]+j[e[r+7]]+"-"+j[e[r+8]]+j[e[r+9]]+"-"+j[e[r+10]]+j[e[r+11]]+j[e[r+12]]+j[e[r+13]]+j[e[r+14]]+j[e[r+15]]).toLowerCase();if(!le(t))throw TypeError("Stringified UUID is invalid");return t}var je,_e,we=0,ye=0;function Ot(e,r,t){var n=r&&t||0,o=r||new Array(16);e=e||{};var i=e.node||je,s=e.clockseq!==void 0?e.clockseq:_e;if(i==null||s==null){var c=e.random||(e.rng||Ie)();i==null&&(i=je=[c[0]|1,c[1],c[2],c[3],c[4],c[5]]),s==null&&(s=_e=(c[6]<<8|c[7])&16383)}var h=e.msecs!==void 0?e.msecs:Date.now(),m=e.nsecs!==void 0?e.nsecs:ye+1,a=h-we+(m-ye)/1e4;if(a<0&&e.clockseq===void 0&&(s=s+1&16383),(a<0||h>we)&&e.nsecs===void 0&&(m=0),m>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");we=h,ye=m,_e=s,h+=122192928e5;var p=((h&268435455)*1e4+m)%4294967296;o[n++]=p>>>24&255,o[n++]=p>>>16&255,o[n++]=p>>>8&255,o[n++]=p&255;var g=h/4294967296*1e4&268435455;o[n++]=g>>>8&255,o[n++]=g&255,o[n++]=g>>>24&15|16,o[n++]=g>>>16&255,o[n++]=s>>>8|128,o[n++]=s&255;for(var O=0;O<6;++O)o[n+O]=i[O];return r||de(o)}function Ne(e){if(!le(e))throw TypeError("Invalid UUID");var r,t=new Uint8Array(16);return t[0]=(r=parseInt(e.slice(0,8),16))>>>24,t[1]=r>>>16&255,t[2]=r>>>8&255,t[3]=r&255,t[4]=(r=parseInt(e.slice(9,13),16))>>>8,t[5]=r&255,t[6]=(r=parseInt(e.slice(14,18),16))>>>8,t[7]=r&255,t[8]=(r=parseInt(e.slice(19,23),16))>>>8,t[9]=r&255,t[10]=(r=parseInt(e.slice(24,36),16))/1099511627776&255,t[11]=r/4294967296&255,t[12]=r>>>24&255,t[13]=r>>>16&255,t[14]=r>>>8&255,t[15]=r&255,t}function Rt(e){e=unescape(encodeURIComponent(e));for(var r=[],t=0;t<e.length;++t)r.push(e.charCodeAt(t));return r}var bt="6ba7b810-9dad-11d1-80b4-00c04fd430c8",Et="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function ke(e,r,t){function n(o,i,s,c){if(typeof o=="string"&&(o=Rt(o)),typeof i=="string"&&(i=Ne(i)),i.length!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var h=new Uint8Array(16+o.length);if(h.set(i),h.set(o,i.length),h=t(h),h[6]=h[6]&15|r,h[8]=h[8]&63|128,s){c=c||0;for(var m=0;m<16;++m)s[c+m]=h[m];return s}return de(h)}try{n.name=e}catch{}return n.DNS=bt,n.URL=Et,n}function St(e){if(typeof e=="string"){var r=unescape(encodeURIComponent(e));e=new Uint8Array(r.length);for(var t=0;t<r.length;++t)e[t]=r.charCodeAt(t)}return At(Pt(Tt(e),e.length*8))}function At(e){for(var r=[],t=e.length*32,n="0123456789abcdef",o=0;o<t;o+=8){var i=e[o>>5]>>>o%32&255,s=parseInt(n.charAt(i>>>4&15)+n.charAt(i&15),16);r.push(s)}return r}function Le(e){return(e+64>>>9<<4)+14+1}function Pt(e,r){e[r>>5]|=128<<r%32,e[Le(r)-1]=r;for(var t=1732584193,n=-271733879,o=-1732584194,i=271733878,s=0;s<e.length;s+=16){var c=t,h=n,m=o,a=i;t=N(t,n,o,i,e[s],7,-680876936),i=N(i,t,n,o,e[s+1],12,-389564586),o=N(o,i,t,n,e[s+2],17,606105819),n=N(n,o,i,t,e[s+3],22,-1044525330),t=N(t,n,o,i,e[s+4],7,-176418897),i=N(i,t,n,o,e[s+5],12,1200080426),o=N(o,i,t,n,e[s+6],17,-1473231341),n=N(n,o,i,t,e[s+7],22,-45705983),t=N(t,n,o,i,e[s+8],7,1770035416),i=N(i,t,n,o,e[s+9],12,-1958414417),o=N(o,i,t,n,e[s+10],17,-42063),n=N(n,o,i,t,e[s+11],22,-1990404162),t=N(t,n,o,i,e[s+12],7,1804603682),i=N(i,t,n,o,e[s+13],12,-40341101),o=N(o,i,t,n,e[s+14],17,-1502002290),n=N(n,o,i,t,e[s+15],22,1236535329),t=k(t,n,o,i,e[s+1],5,-165796510),i=k(i,t,n,o,e[s+6],9,-1069501632),o=k(o,i,t,n,e[s+11],14,643717713),n=k(n,o,i,t,e[s],20,-373897302),t=k(t,n,o,i,e[s+5],5,-701558691),i=k(i,t,n,o,e[s+10],9,38016083),o=k(o,i,t,n,e[s+15],14,-660478335),n=k(n,o,i,t,e[s+4],20,-405537848),t=k(t,n,o,i,e[s+9],5,568446438),i=k(i,t,n,o,e[s+14],9,-1019803690),o=k(o,i,t,n,e[s+3],14,-187363961),n=k(n,o,i,t,e[s+8],20,1163531501),t=k(t,n,o,i,e[s+13],5,-1444681467),i=k(i,t,n,o,e[s+2],9,-51403784),o=k(o,i,t,n,e[s+7],14,1735328473),n=k(n,o,i,t,e[s+12],20,-1926607734),t=L(t,n,o,i,e[s+5],4,-378558),i=L(i,t,n,o,e[s+8],11,-2022574463),o=L(o,i,t,n,e[s+11],16,1839030562),n=L(n,o,i,t,e[s+14],23,-35309556),t=L(t,n,o,i,e[s+1],4,-1530992060),i=L(i,t,n,o,e[s+4],11,1272893353),o=L(o,i,t,n,e[s+7],16,-155497632),n=L(n,o,i,t,e[s+10],23,-1094730640),t=L(t,n,o,i,e[s+13],4,681279174),i=L(i,t,n,o,e[s],11,-358537222),o=L(o,i,t,n,e[s+3],16,-722521979),n=L(n,o,i,t,e[s+6],23,76029189),t=L(t,n,o,i,e[s+9],4,-640364487),i=L(i,t,n,o,e[s+12],11,-421815835),o=L(o,i,t,n,e[s+15],16,530742520),n=L(n,o,i,t,e[s+2],23,-995338651),t=B(t,n,o,i,e[s],6,-198630844),i=B(i,t,n,o,e[s+7],10,1126891415),o=B(o,i,t,n,e[s+14],15,-1416354905),n=B(n,o,i,t,e[s+5],21,-57434055),t=B(t,n,o,i,e[s+12],6,1700485571),i=B(i,t,n,o,e[s+3],10,-1894986606),o=B(o,i,t,n,e[s+10],15,-1051523),n=B(n,o,i,t,e[s+1],21,-2054922799),t=B(t,n,o,i,e[s+8],6,1873313359),i=B(i,t,n,o,e[s+15],10,-30611744),o=B(o,i,t,n,e[s+6],15,-1560198380),n=B(n,o,i,t,e[s+13],21,1309151649),t=B(t,n,o,i,e[s+4],6,-145523070),i=B(i,t,n,o,e[s+11],10,-1120210379),o=B(o,i,t,n,e[s+2],15,718787259),n=B(n,o,i,t,e[s+9],21,-343485551),t=Q(t,c),n=Q(n,h),o=Q(o,m),i=Q(i,a)}return[t,n,o,i]}function Tt(e){if(e.length===0)return[];for(var r=e.length*8,t=new Uint32Array(Le(r)),n=0;n<r;n+=8)t[n>>5]|=(e[n/8]&255)<<n%32;return t}function Q(e,r){var t=(e&65535)+(r&65535),n=(e>>16)+(r>>16)+(t>>16);return n<<16|t&65535}function Ut(e,r){return e<<r|e>>>32-r}function he(e,r,t,n,o,i){return Q(Ut(Q(Q(r,e),Q(n,i)),o),t)}function N(e,r,t,n,o,i,s){return he(r&t|~r&n,e,r,o,i,s)}function k(e,r,t,n,o,i,s){return he(r&n|t&~n,e,r,o,i,s)}function L(e,r,t,n,o,i,s){return he(r^t^n,e,r,o,i,s)}function B(e,r,t,n,o,i,s){return he(t^(r|~n),e,r,o,i,s)}var Ct=ke("v3",48,St);const $t=Ct;function qt(e,r,t){e=e||{};var n=e.random||(e.rng||Ie)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,r){t=t||0;for(var o=0;o<16;++o)r[t+o]=n[o];return r}return de(n)}function Mt(e,r,t,n){switch(e){case 0:return r&t^~r&n;case 1:return r^t^n;case 2:return r&t^r&n^t&n;case 3:return r^t^n}}function Oe(e,r){return e<<r|e>>>32-r}function Dt(e){var r=[1518500249,1859775393,2400959708,3395469782],t=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof e=="string"){var n=unescape(encodeURIComponent(e));e=[];for(var o=0;o<n.length;++o)e.push(n.charCodeAt(o))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);for(var i=e.length/4+2,s=Math.ceil(i/16),c=new Array(s),h=0;h<s;++h){for(var m=new Uint32Array(16),a=0;a<16;++a)m[a]=e[h*64+a*4]<<24|e[h*64+a*4+1]<<16|e[h*64+a*4+2]<<8|e[h*64+a*4+3];c[h]=m}c[s-1][14]=(e.length-1)*8/Math.pow(2,32),c[s-1][14]=Math.floor(c[s-1][14]),c[s-1][15]=(e.length-1)*8&4294967295;for(var p=0;p<s;++p){for(var g=new Uint32Array(80),O=0;O<16;++O)g[O]=c[p][O];for(var R=16;R<80;++R)g[R]=Oe(g[R-3]^g[R-8]^g[R-14]^g[R-16],1);for(var A=t[0],C=t[1],V=t[2],D=t[3],$=t[4],x=0;x<80;++x){var K=Math.floor(x/20),Y=Oe(A,5)+Mt(K,C,V,D)+$+r[K]+g[x]>>>0;$=D,D=V,V=Oe(C,30)>>>0,C=A,A=Y}t[0]=t[0]+A>>>0,t[1]=t[1]+C>>>0,t[2]=t[2]+V>>>0,t[3]=t[3]+D>>>0,t[4]=t[4]+$>>>0}return[t[0]>>24&255,t[0]>>16&255,t[0]>>8&255,t[0]&255,t[1]>>24&255,t[1]>>16&255,t[1]>>8&255,t[1]&255,t[2]>>24&255,t[2]>>16&255,t[2]>>8&255,t[2]&255,t[3]>>24&255,t[3]>>16&255,t[3]>>8&255,t[3]&255,t[4]>>24&255,t[4]>>16&255,t[4]>>8&255,t[4]&255]}var It=ke("v5",80,Dt);const jt=It,Nt="00000000-0000-0000-0000-000000000000";function kt(e){if(!le(e))throw TypeError("Invalid UUID");return parseInt(e.substr(14,1),16)}const Lt={__proto__:null,v1:Ot,v3:$t,v4:qt,v5:jt,NIL:Nt,version:kt,validate:le,stringify:de,parse:Ne},Bt=nt(Lt);var ie={},Be={},ne={};Object.defineProperty(ne,"__esModule",{value:!0}),ne.checkBypass=ne.getProxyUrl=void 0;function xt(e){const r=e.protocol==="https:";if(xe(e))return;const t=(()=>r?process.env.https_proxy||process.env.HTTPS_PROXY:process.env.http_proxy||process.env.HTTP_PROXY)();if(t)return new URL(t)}ne.getProxyUrl=xt;function xe(e){if(!e.hostname)return!1;const r=process.env.no_proxy||process.env.NO_PROXY||"";if(!r)return!1;let t;e.port?t=Number(e.port):e.protocol==="http:"?t=80:e.protocol==="https:"&&(t=443);const n=[e.hostname.toUpperCase()];typeof t=="number"&&n.push(`${n[0]}:${t}`);for(const o of r.split(",").map(i=>i.trim().toUpperCase()).filter(i=>i))if(n.some(i=>i===o))return!0;return!1}ne.checkBypass=xe;var Ve={exports:{}},oe={},Vt=et,Re=Te,Fe=Ue,Ft=tt,Gt=rt;oe.httpOverHttp=Ht,oe.httpsOverHttp=Jt,oe.httpOverHttps=Kt,oe.httpsOverHttps=Yt;function Ht(e){var r=new H(e);return r.request=Re.request,r}function Jt(e){var r=new H(e);return r.request=Re.request,r.createSocket=Ge,r.defaultPort=443,r}function Kt(e){var r=new H(e);return r.request=Fe.request,r}function Yt(e){var r=new H(e);return r.request=Fe.request,r.createSocket=Ge,r.defaultPort=443,r}function H(e){var r=this;r.options=e||{},r.proxyOptions=r.options.proxy||{},r.maxSockets=r.options.maxSockets||Re.Agent.defaultMaxSockets,r.requests=[],r.sockets=[],r.on("free",function(n,o,i,s){for(var c=He(o,i,s),h=0,m=r.requests.length;h<m;++h){var a=r.requests[h];if(a.host===c.host&&a.port===c.port){r.requests.splice(h,1),a.request.onSocket(n);return}}n.destroy(),r.removeSocket(n)})}Gt.inherits(H,Ft.EventEmitter),H.prototype.addRequest=function(r,t,n,o){var i=this,s=be({request:r},i.options,He(t,n,o));if(i.sockets.length>=this.maxSockets){i.requests.push(s);return}i.createSocket(s,function(c){c.on("free",h),c.on("close",m),c.on("agentRemove",m),r.onSocket(c);function h(){i.emit("free",c,s)}function m(a){i.removeSocket(c),c.removeListener("free",h),c.removeListener("close",m),c.removeListener("agentRemove",m)}})},H.prototype.createSocket=function(r,t){var n=this,o={};n.sockets.push(o);var i=be({},n.proxyOptions,{method:"CONNECT",path:r.host+":"+r.port,agent:!1,headers:{host:r.host+":"+r.port}});r.localAddress&&(i.localAddress=r.localAddress),i.proxyAuth&&(i.headers=i.headers||{},i.headers["Proxy-Authorization"]="Basic "+new Buffer(i.proxyAuth).toString("base64")),W("making CONNECT request");var s=n.request(i);s.useChunkedEncodingByDefault=!1,s.once("response",c),s.once("upgrade",h),s.once("connect",m),s.once("error",a),s.end();function c(p){p.upgrade=!0}function h(p,g,O){process.nextTick(function(){m(p,g,O)})}function m(p,g,O){if(s.removeAllListeners(),g.removeAllListeners(),p.statusCode!==200){W("tunneling socket could not be established, statusCode=%d",p.statusCode),g.destroy();var R=new Error("tunneling socket could not be established, statusCode="+p.statusCode);R.code="ECONNRESET",r.request.emit("error",R),n.removeSocket(o);return}if(O.length>0){W("got illegal response body from proxy"),g.destroy();var R=new Error("got illegal response body from proxy");R.code="ECONNRESET",r.request.emit("error",R),n.removeSocket(o);return}return W("tunneling connection has established"),n.sockets[n.sockets.indexOf(o)]=g,t(g)}function a(p){s.removeAllListeners(),W(`tunneling socket could not be established, cause=%s
`,p.message,p.stack);var g=new Error("tunneling socket could not be established, cause="+p.message);g.code="ECONNRESET",r.request.emit("error",g),n.removeSocket(o)}},H.prototype.removeSocket=function(r){var t=this.sockets.indexOf(r);if(t!==-1){this.sockets.splice(t,1);var n=this.requests.shift();n&&this.createSocket(n,function(o){n.request.onSocket(o)})}};function Ge(e,r){var t=this;H.prototype.createSocket.call(t,e,function(n){var o=e.request.getHeader("host"),i=be({},t.options,{socket:n,servername:o?o.replace(/:.*$/,""):e.host}),s=Vt.connect(0,i);t.sockets[t.sockets.indexOf(n)]=s,r(s)})}function He(e,r,t){return typeof e=="string"?{host:e,port:r,localAddress:t}:e}function be(e){for(var r=1,t=arguments.length;r<t;++r){var n=arguments[r];if(typeof n=="object")for(var o=Object.keys(n),i=0,s=o.length;i<s;++i){var c=o[i];n[c]!==void 0&&(e[c]=n[c])}}return e}var W;process.env.NODE_DEBUG&&/\btunnel\b/.test(process.env.NODE_DEBUG)?W=function(){var e=Array.prototype.slice.call(arguments);typeof e[0]=="string"?e[0]="TUNNEL: "+e[0]:e.unshift("TUNNEL:"),console.error.apply(console,e)}:W=function(){},oe.debug=W,function(e){e.exports=oe}(Ve),function(e){var r=w&&w.__createBinding||(Object.create?function(l,d,u,f){f===void 0&&(f=u),Object.defineProperty(l,f,{enumerable:!0,get:function(){return d[u]}})}:function(l,d,u,f){f===void 0&&(f=u),l[f]=d[u]}),t=w&&w.__setModuleDefault||(Object.create?function(l,d){Object.defineProperty(l,"default",{enumerable:!0,value:d})}:function(l,d){l.default=d}),n=w&&w.__importStar||function(l){if(l&&l.__esModule)return l;var d={};if(l!=null)for(var u in l)u!=="default"&&Object.hasOwnProperty.call(l,u)&&r(d,l,u);return t(d,l),d},o=w&&w.__awaiter||function(l,d,u,f){function _(y){return y instanceof u?y:new u(function(S){S(y)})}return new(u||(u=Promise))(function(y,S){function U(q){try{b(f.next(q))}catch(M){S(M)}}function T(q){try{b(f.throw(q))}catch(M){S(M)}}function b(q){q.done?y(q.value):_(q.value).then(U,T)}b((f=f.apply(l,d||[])).next())})};Object.defineProperty(e,"__esModule",{value:!0}),e.HttpClient=e.isHttps=e.HttpClientResponse=e.HttpClientError=e.getProxyUrl=e.MediaTypes=e.Headers=e.HttpCodes=void 0;const i=n(Te),s=n(Ue),c=n(ne),h=n(Ve.exports);var m;(function(l){l[l.OK=200]="OK",l[l.MultipleChoices=300]="MultipleChoices",l[l.MovedPermanently=301]="MovedPermanently",l[l.ResourceMoved=302]="ResourceMoved",l[l.SeeOther=303]="SeeOther",l[l.NotModified=304]="NotModified",l[l.UseProxy=305]="UseProxy",l[l.SwitchProxy=306]="SwitchProxy",l[l.TemporaryRedirect=307]="TemporaryRedirect",l[l.PermanentRedirect=308]="PermanentRedirect",l[l.BadRequest=400]="BadRequest",l[l.Unauthorized=401]="Unauthorized",l[l.PaymentRequired=402]="PaymentRequired",l[l.Forbidden=403]="Forbidden",l[l.NotFound=404]="NotFound",l[l.MethodNotAllowed=405]="MethodNotAllowed",l[l.NotAcceptable=406]="NotAcceptable",l[l.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",l[l.RequestTimeout=408]="RequestTimeout",l[l.Conflict=409]="Conflict",l[l.Gone=410]="Gone",l[l.TooManyRequests=429]="TooManyRequests",l[l.InternalServerError=500]="InternalServerError",l[l.NotImplemented=501]="NotImplemented",l[l.BadGateway=502]="BadGateway",l[l.ServiceUnavailable=503]="ServiceUnavailable",l[l.GatewayTimeout=504]="GatewayTimeout"})(m=e.HttpCodes||(e.HttpCodes={}));var a;(function(l){l.Accept="accept",l.ContentType="content-type"})(a=e.Headers||(e.Headers={}));var p;(function(l){l.ApplicationJson="application/json"})(p=e.MediaTypes||(e.MediaTypes={}));function g(l){const d=c.getProxyUrl(new URL(l));return d?d.href:""}e.getProxyUrl=g;const O=[m.MovedPermanently,m.ResourceMoved,m.SeeOther,m.TemporaryRedirect,m.PermanentRedirect],R=[m.BadGateway,m.ServiceUnavailable,m.GatewayTimeout],A=["OPTIONS","GET","DELETE","HEAD"],C=10,V=5;class D extends Error{constructor(d,u){super(d),this.name="HttpClientError",this.statusCode=u,Object.setPrototypeOf(this,D.prototype)}}e.HttpClientError=D;class ${constructor(d){this.message=d}readBody(){return o(this,void 0,void 0,function*(){return new Promise(d=>o(this,void 0,void 0,function*(){let u=Buffer.alloc(0);this.message.on("data",f=>{u=Buffer.concat([u,f])}),this.message.on("end",()=>{d(u.toString())})}))})}}e.HttpClientResponse=$;function x(l){return new URL(l).protocol==="https:"}e.isHttps=x;class K{constructor(d,u,f){this._ignoreSslError=!1,this._allowRedirects=!0,this._allowRedirectDowngrade=!1,this._maxRedirects=50,this._allowRetries=!1,this._maxRetries=1,this._keepAlive=!1,this._disposed=!1,this.userAgent=d,this.handlers=u||[],this.requestOptions=f,f&&(f.ignoreSslError!=null&&(this._ignoreSslError=f.ignoreSslError),this._socketTimeout=f.socketTimeout,f.allowRedirects!=null&&(this._allowRedirects=f.allowRedirects),f.allowRedirectDowngrade!=null&&(this._allowRedirectDowngrade=f.allowRedirectDowngrade),f.maxRedirects!=null&&(this._maxRedirects=Math.max(f.maxRedirects,0)),f.keepAlive!=null&&(this._keepAlive=f.keepAlive),f.allowRetries!=null&&(this._allowRetries=f.allowRetries),f.maxRetries!=null&&(this._maxRetries=f.maxRetries))}options(d,u){return o(this,void 0,void 0,function*(){return this.request("OPTIONS",d,null,u||{})})}get(d,u){return o(this,void 0,void 0,function*(){return this.request("GET",d,null,u||{})})}del(d,u){return o(this,void 0,void 0,function*(){return this.request("DELETE",d,null,u||{})})}post(d,u,f){return o(this,void 0,void 0,function*(){return this.request("POST",d,u,f||{})})}patch(d,u,f){return o(this,void 0,void 0,function*(){return this.request("PATCH",d,u,f||{})})}put(d,u,f){return o(this,void 0,void 0,function*(){return this.request("PUT",d,u,f||{})})}head(d,u){return o(this,void 0,void 0,function*(){return this.request("HEAD",d,null,u||{})})}sendStream(d,u,f,_){return o(this,void 0,void 0,function*(){return this.request(d,u,f,_)})}getJson(d,u={}){return o(this,void 0,void 0,function*(){u[a.Accept]=this._getExistingOrDefaultHeader(u,a.Accept,p.ApplicationJson);const f=yield this.get(d,u);return this._processResponse(f,this.requestOptions)})}postJson(d,u,f={}){return o(this,void 0,void 0,function*(){const _=JSON.stringify(u,null,2);f[a.Accept]=this._getExistingOrDefaultHeader(f,a.Accept,p.ApplicationJson),f[a.ContentType]=this._getExistingOrDefaultHeader(f,a.ContentType,p.ApplicationJson);const y=yield this.post(d,_,f);return this._processResponse(y,this.requestOptions)})}putJson(d,u,f={}){return o(this,void 0,void 0,function*(){const _=JSON.stringify(u,null,2);f[a.Accept]=this._getExistingOrDefaultHeader(f,a.Accept,p.ApplicationJson),f[a.ContentType]=this._getExistingOrDefaultHeader(f,a.ContentType,p.ApplicationJson);const y=yield this.put(d,_,f);return this._processResponse(y,this.requestOptions)})}patchJson(d,u,f={}){return o(this,void 0,void 0,function*(){const _=JSON.stringify(u,null,2);f[a.Accept]=this._getExistingOrDefaultHeader(f,a.Accept,p.ApplicationJson),f[a.ContentType]=this._getExistingOrDefaultHeader(f,a.ContentType,p.ApplicationJson);const y=yield this.patch(d,_,f);return this._processResponse(y,this.requestOptions)})}request(d,u,f,_){return o(this,void 0,void 0,function*(){if(this._disposed)throw new Error("Client has already been disposed.");const y=new URL(u);let S=this._prepareRequest(d,y,_);const U=this._allowRetries&&A.includes(d)?this._maxRetries+1:1;let T=0,b;do{if(b=yield this.requestRaw(S,f),b&&b.message&&b.message.statusCode===m.Unauthorized){let M;for(const F of this.handlers)if(F.canHandleAuthentication(b)){M=F;break}return M?M.handleAuthentication(this,S,f):b}let q=this._maxRedirects;for(;b.message.statusCode&&O.includes(b.message.statusCode)&&this._allowRedirects&&q>0;){const M=b.message.headers.location;if(!M)break;const F=new URL(M);if(y.protocol==="https:"&&y.protocol!==F.protocol&&!this._allowRedirectDowngrade)throw new Error("Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.");if(yield b.readBody(),F.hostname!==y.hostname)for(const te in _)te.toLowerCase()==="authorization"&&delete _[te];S=this._prepareRequest(d,F,_),b=yield this.requestRaw(S,f),q--}if(!b.message.statusCode||!R.includes(b.message.statusCode))return b;T+=1,T<U&&(yield b.readBody(),yield this._performExponentialBackoff(T))}while(T<U);return b})}dispose(){this._agent&&this._agent.destroy(),this._disposed=!0}requestRaw(d,u){return o(this,void 0,void 0,function*(){return new Promise((f,_)=>{function y(S,U){S?_(S):U?f(U):_(new Error("Unknown error"))}this.requestRawWithCallback(d,u,y)})})}requestRawWithCallback(d,u,f){typeof u=="string"&&(d.options.headers||(d.options.headers={}),d.options.headers["Content-Length"]=Buffer.byteLength(u,"utf8"));let _=!1;function y(T,b){_||(_=!0,f(T,b))}const S=d.httpModule.request(d.options,T=>{const b=new $(T);y(void 0,b)});let U;S.on("socket",T=>{U=T}),S.setTimeout(this._socketTimeout||3*6e4,()=>{U&&U.end(),y(new Error(`Request timeout: ${d.options.path}`))}),S.on("error",function(T){y(T)}),u&&typeof u=="string"&&S.write(u,"utf8"),u&&typeof u!="string"?(u.on("close",function(){S.end()}),u.pipe(S)):S.end()}getAgent(d){const u=new URL(d);return this._getAgent(u)}_prepareRequest(d,u,f){const _={};_.parsedUrl=u;const y=_.parsedUrl.protocol==="https:";_.httpModule=y?s:i;const S=y?443:80;if(_.options={},_.options.host=_.parsedUrl.hostname,_.options.port=_.parsedUrl.port?parseInt(_.parsedUrl.port):S,_.options.path=(_.parsedUrl.pathname||"")+(_.parsedUrl.search||""),_.options.method=d,_.options.headers=this._mergeHeaders(f),this.userAgent!=null&&(_.options.headers["user-agent"]=this.userAgent),_.options.agent=this._getAgent(_.parsedUrl),this.handlers)for(const U of this.handlers)U.prepareRequest(_.options);return _}_mergeHeaders(d){return this.requestOptions&&this.requestOptions.headers?Object.assign({},Y(this.requestOptions.headers),Y(d||{})):Y(d||{})}_getExistingOrDefaultHeader(d,u,f){let _;return this.requestOptions&&this.requestOptions.headers&&(_=Y(this.requestOptions.headers)[u]),d[u]||_||f}_getAgent(d){let u;const f=c.getProxyUrl(d),_=f&&f.hostname;if(this._keepAlive&&_&&(u=this._proxyAgent),this._keepAlive&&!_&&(u=this._agent),u)return u;const y=d.protocol==="https:";let S=100;if(this.requestOptions&&(S=this.requestOptions.maxSockets||i.globalAgent.maxSockets),f&&f.hostname){const U={maxSockets:S,keepAlive:this._keepAlive,proxy:Object.assign(Object.assign({},(f.username||f.password)&&{proxyAuth:`${f.username}:${f.password}`}),{host:f.hostname,port:f.port})};let T;const b=f.protocol==="https:";y?T=b?h.httpsOverHttps:h.httpsOverHttp:T=b?h.httpOverHttps:h.httpOverHttp,u=T(U),this._proxyAgent=u}if(this._keepAlive&&!u){const U={keepAlive:this._keepAlive,maxSockets:S};u=y?new s.Agent(U):new i.Agent(U),this._agent=u}return u||(u=y?s.globalAgent:i.globalAgent),y&&this._ignoreSslError&&(u.options=Object.assign(u.options||{},{rejectUnauthorized:!1})),u}_performExponentialBackoff(d){return o(this,void 0,void 0,function*(){d=Math.min(C,d);const u=V*Math.pow(2,d);return new Promise(f=>setTimeout(()=>f(),u))})}_processResponse(d,u){return o(this,void 0,void 0,function*(){return new Promise((f,_)=>o(this,void 0,void 0,function*(){const y=d.message.statusCode||0,S={statusCode:y,result:null,headers:{}};y===m.NotFound&&f(S);function U(q,M){if(typeof M=="string"){const F=new Date(M);if(!isNaN(F.valueOf()))return F}return M}let T,b;try{b=yield d.readBody(),b&&b.length>0&&(u&&u.deserializeDates?T=JSON.parse(b,U):T=JSON.parse(b),S.result=T),S.headers=d.message.headers}catch{}if(y>299){let q;T&&T.message?q=T.message:b&&b.length>0?q=b:q=`Failed request: (${y})`;const M=new D(q,y);M.result=S.result,_(M)}else f(S)}))})}}e.HttpClient=K;const Y=l=>Object.keys(l).reduce((d,u)=>(d[u.toLowerCase()]=l[u],d),{})}(Be);var X={},Ee=w&&w.__awaiter||function(e,r,t,n){function o(i){return i instanceof t?i:new t(function(s){s(i)})}return new(t||(t=Promise))(function(i,s){function c(a){try{m(n.next(a))}catch(p){s(p)}}function h(a){try{m(n.throw(a))}catch(p){s(p)}}function m(a){a.done?i(a.value):o(a.value).then(c,h)}m((n=n.apply(e,r||[])).next())})};Object.defineProperty(X,"__esModule",{value:!0}),X.PersonalAccessTokenCredentialHandler=X.BearerCredentialHandler=X.BasicCredentialHandler=void 0;class zt{constructor(r,t){this.username=r,this.password=t}prepareRequest(r){if(!r.headers)throw Error("The request has no headers");r.headers.Authorization=`Basic ${Buffer.from(`${this.username}:${this.password}`).toString("base64")}`}canHandleAuthentication(){return!1}handleAuthentication(){return Ee(this,void 0,void 0,function*(){throw new Error("not implemented")})}}X.BasicCredentialHandler=zt;class Qt{constructor(r){this.token=r}prepareRequest(r){if(!r.headers)throw Error("The request has no headers");r.headers.Authorization=`Bearer ${this.token}`}canHandleAuthentication(){return!1}handleAuthentication(){return Ee(this,void 0,void 0,function*(){throw new Error("not implemented")})}}X.BearerCredentialHandler=Qt;class Wt{constructor(r){this.token=r}prepareRequest(r){if(!r.headers)throw Error("The request has no headers");r.headers.Authorization=`Basic ${Buffer.from(`PAT:${this.token}`).toString("base64")}`}canHandleAuthentication(){return!1}handleAuthentication(){return Ee(this,void 0,void 0,function*(){throw new Error("not implemented")})}}X.PersonalAccessTokenCredentialHandler=Wt;var Je;function Xt(){if(Je)return ie;Je=1;var e=w&&w.__awaiter||function(i,s,c,h){function m(a){return a instanceof c?a:new c(function(p){p(a)})}return new(c||(c=Promise))(function(a,p){function g(A){try{R(h.next(A))}catch(C){p(C)}}function O(A){try{R(h.throw(A))}catch(C){p(C)}}function R(A){A.done?a(A.value):m(A.value).then(g,O)}R((h=h.apply(i,s||[])).next())})};Object.defineProperty(ie,"__esModule",{value:!0}),ie.OidcClient=void 0;const r=Be,t=X,n=We();class o{static createHttpClient(s=!0,c=10){const h={allowRetries:s,maxRetries:c};return new r.HttpClient("actions/oidc-client",[new t.BearerCredentialHandler(o.getRequestToken())],h)}static getRequestToken(){const s=process.env.ACTIONS_ID_TOKEN_REQUEST_TOKEN;if(!s)throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable");return s}static getIDTokenUrl(){const s=process.env.ACTIONS_ID_TOKEN_REQUEST_URL;if(!s)throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable");return s}static getCall(s){var c;return e(this,void 0,void 0,function*(){const a=(c=(yield o.createHttpClient().getJson(s).catch(p=>{throw new Error(`Failed to get ID Token. 
 
        Error Code : ${p.statusCode}
 
        Error Message: ${p.result.message}`)})).result)===null||c===void 0?void 0:c.value;if(!a)throw new Error("Response json body do not have ID Token field");return a})}static getIDToken(s){return e(this,void 0,void 0,function*(){try{let c=o.getIDTokenUrl();if(s){const m=encodeURIComponent(s);c=`${c}&audience=${m}`}n.debug(`ID token url is ${c}`);const h=yield o.getCall(c);return n.setSecret(h),h}catch(c){throw new Error(`Error message: ${c.message}`)}})}}return ie.OidcClient=o,ie}var Se={},Ke;function Ye(){return Ke||(Ke=1,function(e){var r=w&&w.__awaiter||function(m,a,p,g){function O(R){return R instanceof p?R:new p(function(A){A(R)})}return new(p||(p=Promise))(function(R,A){function C($){try{D(g.next($))}catch(x){A(x)}}function V($){try{D(g.throw($))}catch(x){A(x)}}function D($){$.done?R($.value):O($.value).then(C,V)}D((g=g.apply(m,a||[])).next())})};Object.defineProperty(e,"__esModule",{value:!0}),e.summary=e.markdownSummary=e.SUMMARY_DOCS_URL=e.SUMMARY_ENV_VAR=void 0;const t=ue,n=Ae,{access:o,appendFile:i,writeFile:s}=n.promises;e.SUMMARY_ENV_VAR="GITHUB_STEP_SUMMARY",e.SUMMARY_DOCS_URL="https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary";class c{constructor(){this._buffer=""}filePath(){return r(this,void 0,void 0,function*(){if(this._filePath)return this._filePath;const a=process.env[e.SUMMARY_ENV_VAR];if(!a)throw new Error(`Unable to find environment variable for $${e.SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`);try{yield o(a,n.constants.R_OK|n.constants.W_OK)}catch{throw new Error(`Unable to access summary file: '${a}'. Check if the file has correct read/write permissions.`)}return this._filePath=a,this._filePath})}wrap(a,p,g={}){const O=Object.entries(g).map(([R,A])=>` ${R}="${A}"`).join("");return p?`<${a}${O}>${p}</${a}>`:`<${a}${O}>`}write(a){return r(this,void 0,void 0,function*(){const p=!!a?.overwrite,g=yield this.filePath();return yield(p?s:i)(g,this._buffer,{encoding:"utf8"}),this.emptyBuffer()})}clear(){return r(this,void 0,void 0,function*(){return this.emptyBuffer().write({overwrite:!0})})}stringify(){return this._buffer}isEmptyBuffer(){return this._buffer.length===0}emptyBuffer(){return this._buffer="",this}addRaw(a,p=!1){return this._buffer+=a,p?this.addEOL():this}addEOL(){return this.addRaw(t.EOL)}addCodeBlock(a,p){const g=Object.assign({},p&&{lang:p}),O=this.wrap("pre",this.wrap("code",a),g);return this.addRaw(O).addEOL()}addList(a,p=!1){const g=p?"ol":"ul",O=a.map(A=>this.wrap("li",A)).join(""),R=this.wrap(g,O);return this.addRaw(R).addEOL()}addTable(a){const p=a.map(O=>{const R=O.map(A=>{if(typeof A=="string")return this.wrap("td",A);const{header:C,data:V,colspan:D,rowspan:$}=A,x=C?"th":"td",K=Object.assign(Object.assign({},D&&{colspan:D}),$&&{rowspan:$});return this.wrap(x,V,K)}).join("");return this.wrap("tr",R)}).join(""),g=this.wrap("table",p);return this.addRaw(g).addEOL()}addDetails(a,p){const g=this.wrap("details",this.wrap("summary",a)+p);return this.addRaw(g).addEOL()}addImage(a,p,g){const{width:O,height:R}=g||{},A=Object.assign(Object.assign({},O&&{width:O}),R&&{height:R}),C=this.wrap("img",null,Object.assign({src:a,alt:p},A));return this.addRaw(C).addEOL()}addHeading(a,p){const g=`h${p}`,O=["h1","h2","h3","h4","h5","h6"].includes(g)?g:"h1",R=this.wrap(O,a);return this.addRaw(R).addEOL()}addSeparator(){const a=this.wrap("hr",null);return this.addRaw(a).addEOL()}addBreak(){const a=this.wrap("br",null);return this.addRaw(a).addEOL()}addQuote(a,p){const g=Object.assign({},p&&{cite:p}),O=this.wrap("blockquote",a,g);return this.addRaw(O).addEOL()}addLink(a,p){const g=this.wrap("a",a,{href:p});return this.addRaw(g).addEOL()}}const h=new c;e.markdownSummary=h,e.summary=h}(Se)),Se}var J={},ze;function Zt(){if(ze)return J;ze=1;var e=w&&w.__createBinding||(Object.create?function(c,h,m,a){a===void 0&&(a=m),Object.defineProperty(c,a,{enumerable:!0,get:function(){return h[m]}})}:function(c,h,m,a){a===void 0&&(a=m),c[a]=h[m]}),r=w&&w.__setModuleDefault||(Object.create?function(c,h){Object.defineProperty(c,"default",{enumerable:!0,value:h})}:function(c,h){c.default=h}),t=w&&w.__importStar||function(c){if(c&&c.__esModule)return c;var h={};if(c!=null)for(var m in c)m!=="default"&&Object.hasOwnProperty.call(c,m)&&e(h,c,m);return r(h,c),h};Object.defineProperty(J,"__esModule",{value:!0}),J.toPlatformPath=J.toWin32Path=J.toPosixPath=void 0;const n=t(Pe);function o(c){return c.replace(/[\\]/g,"/")}J.toPosixPath=o;function i(c){return c.replace(/[/]/g,"\\")}J.toWin32Path=i;function s(c){return c.replace(/[/\\]/g,n.sep)}return J.toPlatformPath=s,J}var Qe;function We(){return Qe||(Qe=1,function(e){var r=w&&w.__createBinding||(Object.create?function(v,E,P,I){I===void 0&&(I=P),Object.defineProperty(v,I,{enumerable:!0,get:function(){return E[P]}})}:function(v,E,P,I){I===void 0&&(I=P),v[I]=E[P]}),t=w&&w.__setModuleDefault||(Object.create?function(v,E){Object.defineProperty(v,"default",{enumerable:!0,value:E})}:function(v,E){v.default=E}),n=w&&w.__importStar||function(v){if(v&&v.__esModule)return v;var E={};if(v!=null)for(var P in v)P!=="default"&&Object.hasOwnProperty.call(v,P)&&r(E,v,P);return t(E,v),E},o=w&&w.__awaiter||function(v,E,P,I){function G(Z){return Z instanceof P?Z:new P(function(ae){ae(Z)})}return new(P||(P=Promise))(function(Z,ae){function Xe(ee){try{pe(I.next(ee))}catch(ve){ae(ve)}}function Ze(ee){try{pe(I.throw(ee))}catch(ve){ae(ve)}}function pe(ee){ee.done?Z(ee.value):G(ee.value).then(Xe,Ze)}pe((I=I.apply(v,E||[])).next())})};Object.defineProperty(e,"__esModule",{value:!0}),e.getIDToken=e.getState=e.saveState=e.group=e.endGroup=e.startGroup=e.info=e.notice=e.warning=e.error=e.debug=e.isDebug=e.setFailed=e.setCommandEcho=e.setOutput=e.getBooleanInput=e.getMultilineInput=e.getInput=e.addPath=e.setSecret=e.exportVariable=e.ExitCode=void 0;const i=re,s=ce,c=z,h=n(ue),m=n(Pe),a=Bt,p=Xt();var g;(function(v){v[v.Success=0]="Success",v[v.Failure=1]="Failure"})(g=e.ExitCode||(e.ExitCode={}));function O(v,E){const P=c.toCommandValue(E);if(process.env[v]=P,process.env.GITHUB_ENV||""){const G=`ghadelimiter_${a.v4()}`;if(v.includes(G))throw new Error(`Unexpected input: name should not contain the delimiter "${G}"`);if(P.includes(G))throw new Error(`Unexpected input: value should not contain the delimiter "${G}"`);const Z=`${v}<<${G}${h.EOL}${P}${h.EOL}${G}`;s.issueCommand("ENV",Z)}else i.issueCommand("set-env",{name:v},P)}e.exportVariable=O;function R(v){i.issueCommand("add-mask",{},v)}e.setSecret=R;function A(v){process.env.GITHUB_PATH||""?s.issueCommand("PATH",v):i.issueCommand("add-path",{},v),process.env.PATH=`${v}${m.delimiter}${process.env.PATH}`}e.addPath=A;function C(v,E){const P=process.env[`INPUT_${v.replace(/ /g,"_").toUpperCase()}`]||"";if(E&&E.required&&!P)throw new Error(`Input required and not supplied: ${v}`);return E&&E.trimWhitespace===!1?P:P.trim()}e.getInput=C;function V(v,E){return C(v,E).split(`
`).filter(I=>I!=="")}e.getMultilineInput=V;function D(v,E){const P=["true","True","TRUE"],I=["false","False","FALSE"],G=C(v,E);if(P.includes(G))return!0;if(I.includes(G))return!1;throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${v}
Support boolean input list: \`true | True | TRUE | false | False | FALSE\``)}e.getBooleanInput=D;function $(v,E){process.stdout.write(h.EOL),i.issueCommand("set-output",{name:v},E)}e.setOutput=$;function x(v){i.issue("echo",v?"on":"off")}e.setCommandEcho=x;function K(v){process.exitCode=g.Failure,d(v)}e.setFailed=K;function Y(){return process.env.RUNNER_DEBUG==="1"}e.isDebug=Y;function l(v){i.issueCommand("debug",{},v)}e.debug=l;function d(v,E={}){i.issueCommand("error",c.toCommandProperties(E),v instanceof Error?v.toString():v)}e.error=d;function u(v,E={}){i.issueCommand("warning",c.toCommandProperties(E),v instanceof Error?v.toString():v)}e.warning=u;function f(v,E={}){i.issueCommand("notice",c.toCommandProperties(E),v instanceof Error?v.toString():v)}e.notice=f;function _(v){process.stdout.write(v+h.EOL)}e.info=_;function y(v){i.issue("group",v)}e.startGroup=y;function S(){i.issue("endgroup")}e.endGroup=S;function U(v,E){return o(this,void 0,void 0,function*(){y(v);let P;try{P=yield E()}finally{S()}return P})}e.group=U;function T(v,E){i.issueCommand("save-state",{name:v},E)}e.saveState=T;function b(v){return process.env[`STATE_${v}`]||""}e.getState=b;function q(v){return o(this,void 0,void 0,function*(){return yield p.OidcClient.getIDToken(v)})}e.getIDToken=q;var M=Ye();Object.defineProperty(e,"summary",{enumerable:!0,get:function(){return M.summary}});var F=Ye();Object.defineProperty(e,"markdownSummary",{enumerable:!0,get:function(){return F.markdownSummary}});var te=Zt();Object.defineProperty(e,"toPosixPath",{enumerable:!0,get:function(){return te.toPosixPath}}),Object.defineProperty(e,"toWin32Path",{enumerable:!0,get:function(){return te.toWin32Path}}),Object.defineProperty(e,"toPlatformPath",{enumerable:!0,get:function(){return te.toPlatformPath}})}(me)),me}var se=We();const er=({delimiter:e,target:r}={})=>r===void 0||!r.trim()?"":(e!==void 0&&(r=r.split(e).pop()),r?/([a-z]+)/.exec(r)?.[0].trim()??"":"");function tr(){try{const e=se.getInput("delimiter")||void 0,r=se.getInput("target"),t=er({delimiter:e,target:r});se.setOutput("flag",t&&["--tag",t].join(" ").trim()),se.setOutput("tag",t)}catch(e){se.setFailed(e)}}tr();
