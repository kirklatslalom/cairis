(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a0b8fde2","chunk-61f8c9da","chunk-41bf07d3","chunk-5d9ab32a"],{"02f4":function(e,t,n){var i=n("4588"),r=n("be13");e.exports=function(e){return function(t,n){var o,s,a=String(r(t)),l=i(n),c=a.length;return l<0||l>=c?e?"":void 0:(o=a.charCodeAt(l),o<55296||o>56319||l+1===c||(s=a.charCodeAt(l+1))<56320||s>57343?e?a.charAt(l):o:e?a.slice(l,l+2):s-56320+(o-55296<<10)+65536)}}},"0390":function(e,t,n){"use strict";var i=n("02f4")(!0);e.exports=function(e,t,n){return t+(n?i(e,t).length:1)}},"0bfb":function(e,t,n){"use strict";var i=n("cb7c");e.exports=function(){var e=i(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},1864:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-form-select",{ref:"dimensionSelect",attrs:{id:"dimensionSelect",disabled:e.is_disabled,size:e.display_size,options:e.filteredItems},on:{change:function(t){return e.onChange(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})},r=[],o=(n("6762"),n("2fdb"),n("cadf"),n("551c"),n("f751"),n("097d"),n("bc3a")),s=n.n(o),a=n("61da"),l={name:"dimension-select",props:{dimension:{type:String},dimensionUrl:{type:String,default:function(){return""}},existing:{type:Array,default:function(){return[]}},environment:{type:String,default:function(){return""}},includeall:{type:Boolean,default:function(){return!1}},initial:{type:String,default:function(){return""}},display_size:{type:String,default:function(){return"md"}},is_disabled:{type:Boolean,default:function(){return!1}}},data:function(){return{items:[],selected:this.initial}},computed:{filteredItems:function(){var e=this;return this.items.length>0?this.items.filter(function(t){if(!e.existing.includes(t))return t}):[]}},watch:{dimension:"updateSelector",dimensionUrl:"updateSelector",existing:"updateSelector",environment:"updateSelector",initial:"updateSelector"},methods:{onChange:function(e){this.$emit("dimension-select-change",e)},updateSelector:function(){var e=this;if((void 0!=this.dimension||""!=this.dimensionUrl)&&""!=this.$store.state.session){var t=this.dimensionUrl;0==this.dimensionUrl.length&&(t="/api/dimensions/table/"+this.dimension,""!=this.environment&&(t+="/environment/"+this.environment));var n=this;s.a.get(t,{baseURL:this.$store.state.url,params:{session_id:this.$store.state.session}}).then(function(t){n.items=t.data,n.items=n.items.length>0?n.items.filter(function(e){if(!n.existing.includes(e))return e}):[],1==n.items.length&&n.$emit("dimension-select-change",n.items[0]),n.includeall&&("dfd_filter"==n.dimension?n.items.unshift("None"):"persona_characteristic"==n.dimension?n.items.unshift("All"):n.items.unshift("all")),e.selected=e.initial}).catch(function(e){a["a"].$emit("operation-failure","Error updating selector:"+e)})}}},mounted:function(){void 0==this.dimension&&""==this.dimensionUrl||this.updateSelector()}},c=l,u=n("2877"),h=Object(u["a"])(c,i,r,!1,null,null,null);t["default"]=h.exports},"18e9":function(e,t,n){"use strict";t["a"]={computed:{environmentNames:function(){return this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.map(function(e){return e.theEnvironmentName}):[]},environmentName:function(){return this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties[this.envPropIndex].theEnvironmentName:""}},methods:{addEnvironmentProperty:function(e){this.objt.theEnvironmentProperties.push(e),this.envPropIndex=this.objt.theEnvironmentProperties.length-1},deleteEnvironment:function(e){this.objt.theEnvironmentProperties=this.objt.theEnvironmentProperties.filter(function(t){return t.theEnvironmentName!=e})},addEnvironment:function(e){e.preventDefault(),this.$refs.environmentDialog.show()}}}},"1e3b":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{ref:"dimensionDialog",attrs:{title:this.dialogTitle},on:{ok:e.onOk}},[n("b-card",[""==e.environment?n("dimension-select",{attrs:{dimensionUrl:this.dimensionUrl,dimension:this.dimension,existing:this.existing,initial:this.initial},on:{"dimension-select-change":e.dimensionSelected}}):e._e(),""!=e.environment?n("dimension-select",{attrs:{dimensionUrl:this.dimensionUrl,environment:this.environment,dimension:this.dimension,existing:this.existing,initial:this.initial},on:{"dimension-select-change":e.dimensionSelected}}):e._e()],1)],1)},r=[],o=n("1864"),s={name:"dimension-modal",props:{dimension:String,existing:{type:Array,default:function(){return[]}},initial:{type:String,default:function(){return""}},environment:{type:String,default:function(){return""}},dimensionUrl:{type:String,default:function(){return""}},label:{type:String,default:function(){return""}}},data:function(){return{selected:""}},components:{DimensionSelect:o["default"]},computed:{dialogTitle:function(){return"Select "+(this.label.length>0?this.label:void 0!=this.dimension?this.dimension:"Object")}},methods:{show:function(){this.$refs.dimensionDialog.show()},dimensionSelected:function(e){this.selected=e},onOk:function(e){0==this.selected.length?(e.preventDefault(),alert("Please select a value")):(this.$emit("dimension-modal-update",this.selected),this.$refs.dimensionDialog.hide())}}},a=s,l=n("2877"),c=Object(l["a"])(a,i,r,!1,null,null,null);t["default"]=c.exports},"214f":function(e,t,n){"use strict";n("b0c5");var i=n("2aba"),r=n("32e9"),o=n("79e5"),s=n("be13"),a=n("2b4c"),l=n("520a"),c=a("species"),u=!o(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),h=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();e.exports=function(e,t,n){var m=a(e),d=!o(function(){var t={};return t[m]=function(){return 7},7!=""[e](t)}),f=d?!o(function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(n.constructor={},n.constructor[c]=function(){return n}),n[m](""),!t}):void 0;if(!d||!f||"replace"===e&&!u||"split"===e&&!h){var p=/./[m],b=n(s,m,""[e],function(e,t,n,i,r){return t.exec===l?d&&!r?{done:!0,value:p.call(t,n,i)}:{done:!0,value:e.call(n,t,i)}:{done:!1}}),v=b[0],g=b[1];i(String.prototype,e,v),r(RegExp.prototype,m,2==t?function(e,t){return g.call(e,this,t)}:function(e){return g.call(e,this)})}}},"28a5":function(e,t,n){"use strict";var i=n("aae3"),r=n("cb7c"),o=n("ebd6"),s=n("0390"),a=n("9def"),l=n("5f1b"),c=n("520a"),u=Math.min,h=[].push,m="split",d="length",f="lastIndex",p=!!function(){try{return new RegExp("x","y")}catch(e){}}();n("214f")("split",2,function(e,t,n,b){var v;return v="c"=="abbc"[m](/(b)*/)[1]||4!="test"[m](/(?:)/,-1)[d]||2!="ab"[m](/(?:ab)*/)[d]||4!="."[m](/(.?)(.?)/)[d]||"."[m](/()()/)[d]>1||""[m](/.?/)[d]?function(e,t){var r=String(this);if(void 0===e&&0===t)return[];if(!i(e))return n.call(r,e,t);var o,s,a,l=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,p=void 0===t?4294967295:t>>>0,b=new RegExp(e.source,u+"g");while(o=c.call(b,r)){if(s=b[f],s>m&&(l.push(r.slice(m,o.index)),o[d]>1&&o.index<r[d]&&h.apply(l,o.slice(1)),a=o[0][d],m=s,l[d]>=p))break;b[f]===o.index&&b[f]++}return m===r[d]?!a&&b.test("")||l.push(""):l.push(r.slice(m)),l[d]>p?l.slice(0,p):l}:"0"[m](void 0,0)[d]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,i){var r=e(this),o=void 0==n?void 0:n[t];return void 0!==o?o.call(n,r,i):v.call(String(r),n,i)},function(e,t){var i=b(v,e,this,t,v!==n);if(i.done)return i.value;var c=r(e),h=String(this),m=o(c,RegExp),d=c.unicode,f=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(p?"y":"g"),g=new m(p?c:"^(?:"+c.source+")",f),y=void 0===t?4294967295:t>>>0;if(0===y)return[];if(0===h.length)return null===l(g,h)?[h]:[];var x=0,j=0,E=[];while(j<h.length){g.lastIndex=p?j:0;var $,P=l(g,p?h:h.slice(j));if(null===P||($=u(a(g.lastIndex+(p?0:j)),h.length))===x)j=s(h,j,d);else{if(E.push(h.slice(x,j)),E.length===y)return E;for(var S=1;S<=P.length-1;S++)if(E.push(P[S]),E.length===y)return E;j=x=$}}return E.push(h.slice(x)),E}]})},"2fdb":function(e,t,n){"use strict";var i=n("5ca1"),r=n("d2c8"),o="includes";i(i.P+i.F*n("5147")(o),"String",{includes:function(e){return!!~r(this,e,o).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},"3f53":function(e,t,n){"use strict";var i=n("bc3a"),r=n.n(i),o=n("61da");t["a"]={methods:{commitObject:function(e,t,n,i){var s=this;"undefined"==typeof i&&(i={post:{},put:{}}),"Update"==this.commitLabel?r.a.put(e,{session_id:this.$store.state.session,object:this.objt}).then(function(e){o["a"].$emit("operation-success",e.data.message),s.$router.push({name:n})}).catch(function(e){o["a"].$emit("operation-failure",e)}):r.a.post(t,{session_id:this.$store.state.session,object:this.objt},{params:i["post"]}).then(function(e){o["a"].$emit("operation-success",e.data.message),s.$router.push({name:n})}).catch(function(e){o["a"].$emit("operation-failure",e)})}},postImage:function(e){var t="/api/upload/image?session_id="+this.$store.state.session;r.a.post(t,e).then(function(e){o["a"].$emit("operation-success",e.data.message)}).catch(function(e){o["a"].$emit("operation-failure",e)})}}},5147:function(e,t,n){var i=n("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[i]=!1,!"/./"[e](t)}catch(r){}}return!0}},"520a":function(e,t,n){"use strict";var i=n("0bfb"),r=RegExp.prototype.exec,o=String.prototype.replace,s=r,a="lastIndex",l=function(){var e=/a/,t=/b*/g;return r.call(e,"a"),r.call(t,"a"),0!==e[a]||0!==t[a]}(),c=void 0!==/()??/.exec("")[1],u=l||c;u&&(s=function(e){var t,n,s,u,h=this;return c&&(n=new RegExp("^"+h.source+"$(?!\\s)",i.call(h))),l&&(t=h[a]),s=r.call(h,e),l&&s&&(h[a]=h.global?s.index+s[0].length:t),c&&s&&s.length>1&&o.call(s[0],n,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(s[u]=void 0)}),s}),e.exports=s},"5f1b":function(e,t,n){"use strict";var i=n("23c6"),r=RegExp.prototype.exec;e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var o=n.call(e,t);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==i(e))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},6762:function(e,t,n){"use strict";var i=n("5ca1"),r=n("c366")(!0);i(i.P,"Array",{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"6ba3":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vulnerabilityview"},[n("b-breadcrumb",{attrs:{items:e.bcItems}}),n("vulnerability",{attrs:{object:this.objt,label:this.commitLabel},on:{"vulnerability-commit":e.commitVulnerability}})],1)},r=[],o=n("bc3a"),s=n.n(o),a=n("3f53"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vulnerability"},[n("dimension-modal",{ref:"environmentDialog",attrs:{dimension:"environment",existing:e.environmentNames},on:{"dimension-modal-update":e.addVulnerabilityEnvironmentProperty}}),n("dimension-modal",{ref:"assetDialog",attrs:{dimension:"asset",environment:e.environmentName,existing:e.assetNames},on:{"dimension-modal-update":e.addVulnerabilityAsset}}),e.errors.length?n("p",[n("b",[e._v("Please correct the following error(s):")]),n("ul",e._l(e.errors,function(t){return n("li",{key:t},[e._v(e._s(t))])}),0)]):e._e(),n("b-form",[n("b-container",{attrs:{fluid:""}},[n("b-card",{attrs:{"bg-variant":"light"}},[n("b-row",[n("b-col",{attrs:{md:"6"}},[n("b-form-group",{attrs:{label:"Vulnerability","label-class":"font-weight-bold text-md-left","label-cols":"3","label-for":"theVulnerabilityInput"}},[n("b-form-input",{attrs:{id:"theVulnerabilityInput",type:"text",required:""},model:{value:e.objt.theVulnerabilityName,callback:function(t){e.$set(e.objt,"theVulnerabilityName",t)},expression:"objt.theVulnerabilityName"}})],1)],1),n("b-col",{attrs:{md:"6"}},[n("b-form-group",{attrs:{label:"Type","label-class":"font-weight-bold text-md-left","label-cols":"1","label-for":"theVulnerabilityType"}},[n("dimension-select",{attrs:{id:"theVulnerabilityType",dimension:"vulnerability_type",initial:this.objt.theVulnerabilityType},on:{"dimension-select-change":e.vulnerabilityTypeSelected}})],1)],1)],1),n("b-form-group",{attrs:{label:"Description","label-class":"font-weight-bold text-md-left","label-for":"theDescriptionInput"}},[n("b-form-textarea",{attrs:{id:"theDescriptionInput",type:"text",rows:2,"max-rows":4,required:""},model:{value:e.objt.theVulnerabilityDescription,callback:function(t){e.$set(e.objt,"theVulnerabilityDescription",t)},expression:"objt.theVulnerabilityDescription"}})],1),n("b-form-group",{attrs:{label:"Tags","label-class":"font-weight-bold text-md-left","label-cols":"1","label-for":"theTagsInput"}},[n("b-form-input",{attrs:{id:"theTagsInput",type:"text"},model:{value:e.objt.theTags,callback:function(t){e.$set(e.objt,"theTags",t)},expression:"objt.theTags"}})],1)],1)],1),n("b-container",{attrs:{fluid:""}},[n("b-card",{staticClass:"text-left",attrs:{header:"Environments"}},[n("template",{slot:"header"},[n("font-awesome-icon",{style:{color:"green"},attrs:{icon:"plus"},on:{click:function(t){return t.stopPropagation(),e.addEnvironment(t)}}}),e._v(" Environment\n          ")],1),n("b-row",[n("b-col",{attrs:{sm:"12"}},[n("b-tabs",{attrs:{pills:""},model:{value:e.envPropIndex,callback:function(t){e.envPropIndex=t},expression:"envPropIndex"}},e._l(this.objt.theEnvironmentProperties,function(t){return n("b-tab",{key:t.theEnvironmentName,attrs:{title:t.theName}},[n("template",{slot:"title"},[n("font-awesome-icon",{style:{color:"red"},attrs:{icon:"minus"},on:{click:function(n){return e.deleteEnvironment(t.theEnvironmentName)}}}),e._v("  "+e._s(t.theEnvironmentName)+"\n                  ")],1)],2)}),1)],1)],1),this.objt.theEnvironmentProperties.length?n("b-row",[n("b-col",{attrs:{sm:"12"}},[n("b-form-group",{attrs:{label:"Type","label-class":"font-weight-bold text-md-left","label-cols":"1","label-for":"theSeverity"}},[n("b-form-select",{staticClass:"mb-3",attrs:{id:"theSeverity",options:e.severityTypes,required:""},model:{value:e.objt.theEnvironmentProperties[e.envPropIndex].theSeverity,callback:function(t){e.$set(e.objt.theEnvironmentProperties[e.envPropIndex],"theSeverity",t)},expression:"objt.theEnvironmentProperties[envPropIndex].theSeverity"}})],1),n("b-table",{attrs:{striped:"",bordered:"",small:"",fields:e.assetTableFields,items:e.environmentAssets},scopedSlots:e._u([{key:"HEAD_assetactions",fn:function(t){return[n("font-awesome-icon",{style:{color:"green"},attrs:{icon:"plus"},on:{click:function(t){return t.stopPropagation(),e.addAsset(t)}}})]}},{key:"assetactions",fn:function(t){return[n("font-awesome-icon",{style:{color:"red"},attrs:{icon:"minus"},on:{click:function(n){return n.stopPropagation(),e.deleteAsset(t.index)}}})]}}],null,!1,4070375440)})],1)],1):e._e()],2)],1),n("b-container",{attrs:{fluid:""}},[n("b-form-row",[n("b-col",{attrs:{md:"4","offset-md":"5"}},[n("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:e.onCommit}},[e._v(e._s(e.commitLabel))]),n("b-button",{attrs:{type:"submit",variant:"secondary"},on:{click:e.onCancel}},[e._v("Cancel")])],1)],1)],1)],1)],1)},c=[],u=(n("28a5"),n("94cc")),h=n("18e9"),m=n("1e3b"),d=n("1864"),f={props:{object:Object,label:String},watch:{object:"setObject"},mixins:[u["a"],h["a"]],computed:{assetNames:function(){return this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties[this.envPropIndex].theAssets:[]},environmentAssets:function(){return this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties[this.envPropIndex].theAssets.map(function(e){return{name:e}}):[]}},components:{DimensionModal:m["default"],DimensionSelect:d["default"]},data:function(){return{objt:this.object,commitLabel:this.label,envPropIndex:0,errors:[],severityTypes:["Negligible","Marginal","Critical","Catastrophic"],envFields:{envactions:{label:""},theName:{label:"Environment"}},assetTableFields:{assetactions:{label:""},name:{label:"Asset"}}}},methods:{checkForm:function(){return this.errors=[],0==this.objt.theVulnerabilityName.length&&this.errors.push("Name is required"),0==this.objt.theVulnerabilityType.length&&this.errors.push("Type is required"),0==this.objt.theVulnerabilityDescription.length&&this.errors.push("Description is required"),0==this.objt.theEnvironmentProperties.length&&this.errors.push("No environment properties have been defined"),!this.errors.length},setObject:function(){this.objt=this.object,this.commitLabel=this.label},onCommit:function(e){e.preventDefault(),this.checkForm()&&(""!=this.objt.theTags&&(this.objt.theTags=this.objt.theTags.split(",").map(function(e){return e.trim()})),this.$emit("vulnerability-commit",this.objt))},onCancel:function(e){e.preventDefault(),this.$router.push({name:"vulnerabilities"})},deleteAsset:function(e){this.objt.theEnvironmentProperties[this.envPropIndex].theAssets.splice(e,1)},addEnvironment:function(e){e.preventDefault(),this.$refs.environmentDialog.show()},addAsset:function(e){e.preventDefault(),this.$refs.assetDialog.show()},addVulnerabilityEnvironmentProperty:function(e){this.addEnvironmentProperty({theEnvironmentName:e,theSeverity:"",theAssets:[]})},addVulnerabilityAsset:function(e){this.objt.theEnvironmentProperties[this.envPropIndex].theAssets.push(e)},vulnerabilityTypeSelected:function(e){this.objt.theVulnerabilityType=e}}},p=f,b=n("2877"),v=Object(b["a"])(p,l,c,!1,null,null,null),g=v.exports,y=n("4360"),x=n("61da"),j={props:{objectName:String},mixins:[a["a"]],computed:{bcItems:function(){return[{text:"Home",to:{name:"home"}},{text:"Vulnerabilities",to:{name:"vulnerabilities"}},{text:this.objt.theVulnerabilityName,to:{name:"vulnerability"}}]}},components:{Vulnerability:g},data:function(){return{objt:{theVulnerabilityName:"",theVulnerabilityType:"",theVulnerabilityDescription:"",theTags:"",theEnvironmentProperties:[]},commitLabel:"Create"}},beforeRouteEnter:function(e,t,n){if("New vulnerability"==e.params.objectName)n();else{var i="/api/vulnerabilities/name/"+e.params.objectName;s.a.get(i,{baseURL:y["a"].state.url,params:{session_id:y["a"].state.session}}).then(function(e){n(function(t){t.commitLabel="Update",t.objt=e.data,t.objt.theTags=e.data.theTags.join(", ")})}).catch(function(e){x["a"].$emit("operation-failure",e)})}},methods:{commitVulnerability:function(e){this.objt=e;var t=this.$store.state.url+"/api/vulnerabilities/name/"+this.objectName+"?session_id="+this.$store.state.session,n=this.$store.state.url+"/api/vulnerabilities";this.commitObject(t,n,"vulnerabilities")}}},E=j,$=Object(b["a"])(E,i,r,!1,null,null,null);t["default"]=$.exports},"94cc":function(e,t,n){"use strict";var i=n("bc3a"),r=n.n(i),o=n("61da");t["a"]={methods:{commitObject:function(e,t,n){var i=this;"Update"==this.commitLabel?r.a.put(e,{session_id:this.$store.state.session,object:this.objt}).then(function(e){o["a"].$emit("operation-success",e.data.message),i.$router.push({name:n})}).catch(function(e){o["a"].$emit("operation-failure",e)}):r.a.post(t,{session_id:this.$store.state.session,object:this.objt}).then(function(e){o["a"].$emit("operation-success",e.data.message),i.$router.push({name:n})}).catch(function(e){o["a"].$emit("operation-failure",e)})}}}},aae3:function(e,t,n){var i=n("d3f4"),r=n("2d95"),o=n("2b4c")("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==r(e))}},b0c5:function(e,t,n){"use strict";var i=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},d2c8:function(e,t,n){var i=n("aae3"),r=n("be13");e.exports=function(e,t,n){if(i(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(e))}}}]);
//# sourceMappingURL=chunk-a0b8fde2.b396ea4b.js.map