(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-af26e284","chunk-61f8c9da","chunk-41bf07d3","chunk-5d9ab32a","chunk-2d2102e7"],{"02f4":function(e,t,n){var r=n("4588"),i=n("be13");e.exports=function(e){return function(t,n){var o,s,a=String(i(t)),l=r(n),c=a.length;return l<0||l>=c?e?"":void 0:(o=a.charCodeAt(l),o<55296||o>56319||l+1===c||(s=a.charCodeAt(l+1))<56320||s>57343?e?a.charAt(l):o:e?a.slice(l,l+2):s-56320+(o-55296<<10)+65536)}}},"0390":function(e,t,n){"use strict";var r=n("02f4")(!0);e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"0bfb":function(e,t,n){"use strict";var r=n("cb7c");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},1864:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-form-select",{ref:"dimensionSelect",attrs:{id:"dimensionSelect",disabled:e.is_disabled,size:e.display_size,options:e.filteredItems},on:{change:function(t){return e.onChange(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})},i=[],o=(n("6762"),n("2fdb"),n("bc3a")),s=n.n(o),a=n("61da"),l={name:"dimension-select",props:{dimension:{type:String},dimensionUrl:{type:String,default:function(){return""}},existing:{type:Array,default:function(){return[]}},environment:{type:String,default:function(){return""}},includeall:{type:Boolean,default:function(){return!1}},initial:{type:String,default:function(){return""}},display_size:{type:String,default:function(){return"md"}},is_disabled:{type:Boolean,default:function(){return!1}}},data:function(){return{items:[],selected:this.initial}},computed:{filteredItems:function(){var e=this;return this.items.length>0?this.items.filter(function(t){if(!e.existing.includes(t))return t}):[]}},watch:{dimension:"updateSelector",dimensionUrl:"updateSelector",existing:"updateSelector",environment:"updateSelector",initial:"updateSelector"},methods:{onChange:function(e){this.$emit("dimension-select-change",e)},updateSelector:function(){var e=this;if(void 0!=this.dimension||""!=this.dimensionUrl){var t=this.dimensionUrl;0==this.dimensionUrl.length&&(t="/api/dimensions/table/"+this.dimension,""!=this.environment&&(t+="/environment/"+this.environment));var n=this;s.a.get(t,{baseURL:this.$store.state.url,params:{session_id:this.$store.state.session}}).then(function(t){n.items=t.data,n.items=n.items.length>0?n.items.filter(function(e){if(!n.existing.includes(e))return e}):[],1==n.items.length&&n.$emit("dimension-select-change",n.items[0]),n.includeall&&("dfd_filter"==n.dimension?n.items.unshift("None"):"persona_characteristic"==n.dimension?n.items.unshift("All"):n.items.unshift("all")),e.selected=e.initial}).catch(function(e){a["a"].$emit("operation-failure","Error updating selector:"+e)})}}},mounted:function(){void 0==this.dimension&&""==this.dimensionUrl||this.updateSelector()}},c=l,u=n("2877"),h=Object(u["a"])(c,r,i,!1,null,null,null);t["default"]=h.exports},"18e9":function(e,t,n){"use strict";t["a"]={computed:{environmentNames:function(){return this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.map(function(e){return e.theEnvironmentName}):[]},environmentName:function(){return this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties[this.envPropIndex].theEnvironmentName:""}},methods:{addEnvironmentProperty:function(e){this.objt.theEnvironmentProperties.push(e),this.envPropIndex=this.objt.theEnvironmentProperties.length-1},deleteEnvironment:function(e){this.objt.theEnvironmentProperties=this.objt.theEnvironmentProperties.filter(function(t){return t.theEnvironmentName!=e})},addEnvironment:function(e){e.preventDefault(),this.$refs.environmentDialog.show()}}}},"1e3b":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{ref:"dimensionDialog",attrs:{title:this.dialogTitle},on:{ok:e.onOk}},[n("b-card",[""==e.environment?n("dimension-select",{attrs:{dimensionUrl:this.dimensionUrl,dimension:this.dimension,existing:this.existing,initial:this.initial},on:{"dimension-select-change":e.dimensionSelected}}):e._e(),""!=e.environment?n("dimension-select",{attrs:{dimensionUrl:this.dimensionUrl,environment:this.environment,dimension:this.dimension,existing:this.existing,initial:this.initial},on:{"dimension-select-change":e.dimensionSelected}}):e._e()],1)],1)},i=[],o=n("1864"),s={name:"dimension-modal",props:{dimension:String,existing:{type:Array,default:function(){return[]}},initial:{type:String,default:function(){return""}},environment:{type:String,default:function(){return""}},dimensionUrl:{type:String,default:function(){return""}},label:{type:String,default:function(){return""}}},data:function(){return{selected:""}},components:{DimensionSelect:o["default"]},computed:{dialogTitle:function(){return"Select "+(this.label.length>0?this.label:void 0!=this.dimension?this.dimension:"Object")}},methods:{show:function(){this.$refs.dimensionDialog.show()},dimensionSelected:function(e){this.selected=e},onOk:function(e){0==this.selected.length?(e.preventDefault(),alert("Please select a value")):(this.$emit("dimension-modal-update",this.selected),this.$refs.dimensionDialog.hide())}}},a=s,l=n("2877"),c=Object(l["a"])(a,r,i,!1,null,null,null);t["default"]=c.exports},2084:function(e,t,n){"use strict";var r=n("f499"),i=n.n(r);n("7f7f");t["a"]={data:function(){return{propTableFields:{propactions:{label:""},name:{label:"Property"},value:{label:"Value"},rationale:{label:"Rationale"}},selectedProperty:{}}},computed:{notNone:function(){return this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties[this.envPropIndex].theProperties.filter(function(e){return"None"!=e.value}):[]}},methods:{defaultProperties:function(){return[{name:"Confidentiality",value:"None",rationale:"None"},{name:"Integrity",value:"None",rationale:"None"},{name:"Availability",value:"None",rationale:"None"},{name:"Accountability",value:"None",rationale:"None"},{name:"Anonymity",value:"None",rationale:"None"},{name:"Pseudonymity",value:"None",rationale:"None"},{name:"Unlinkability",value:"None",rationale:"None"},{name:"Unobservability",value:"None",rationale:"None"}]},updateProperty:function(e){this.objt.theEnvironmentProperties[this.envPropIndex].theProperties.map(function(t){t.name==e.name&&(t.value=e.value,t.rationale=e.rationale)})},clearProperty:function(e){this.objt.theEnvironmentProperties[this.envPropIndex].theProperties.map(function(t){t.name==e.name&&(t.value="None",t.rationale="None")})},viewProperty:function(e){this.selectedProperty=JSON.parse(i()(e)),this.selectedProperty["update"]=!0,this.$refs.propertyDialog.show()},addProperty:function(){this.selectedProperty={name:"",value:"",rationale:""},this.selectedProperty["update"]=!1,this.selectedProperty["propertyNames"]=this.objt.theEnvironmentProperties[this.envPropIndex].theProperties.filter(function(e){return"None"==e.value}).map(function(e){return e.name}),this.$refs.propertyDialog.show()}}}},"214f":function(e,t,n){"use strict";n("b0c5");var r=n("2aba"),i=n("32e9"),o=n("79e5"),s=n("be13"),a=n("2b4c"),l=n("520a"),c=a("species"),u=!o(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),h=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();e.exports=function(e,t,n){var p=a(e),d=!o(function(){var t={};return t[p]=function(){return 7},7!=""[e](t)}),m=d?!o(function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(n.constructor={},n.constructor[c]=function(){return n}),n[p](""),!t}):void 0;if(!d||!m||"replace"===e&&!u||"split"===e&&!h){var f=/./[p],b=n(s,p,""[e],function(e,t,n,r,i){return t.exec===l?d&&!i?{done:!0,value:f.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),v=b[0],y=b[1];r(String.prototype,e,v),i(RegExp.prototype,p,2==t?function(e,t){return y.call(e,this,t)}:function(e){return y.call(e,this)})}}},"28a5":function(e,t,n){"use strict";var r=n("aae3"),i=n("cb7c"),o=n("ebd6"),s=n("0390"),a=n("9def"),l=n("5f1b"),c=n("520a"),u=Math.min,h=[].push,p="split",d="length",m="lastIndex",f=!!function(){try{return new RegExp("x","y")}catch(e){}}();n("214f")("split",2,function(e,t,n,b){var v;return v="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[d]||2!="ab"[p](/(?:ab)*/)[d]||4!="."[p](/(.?)(.?)/)[d]||"."[p](/()()/)[d]>1||""[p](/.?/)[d]?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!r(e))return n.call(i,e,t);var o,s,a,l=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,f=void 0===t?4294967295:t>>>0,b=new RegExp(e.source,u+"g");while(o=c.call(b,i)){if(s=b[m],s>p&&(l.push(i.slice(p,o.index)),o[d]>1&&o.index<i[d]&&h.apply(l,o.slice(1)),a=o[0][d],p=s,l[d]>=f))break;b[m]===o.index&&b[m]++}return p===i[d]?!a&&b.test("")||l.push(""):l.push(i.slice(p)),l[d]>f?l.slice(0,f):l}:"0"[p](void 0,0)[d]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,r){var i=e(this),o=void 0==n?void 0:n[t];return void 0!==o?o.call(n,i,r):v.call(String(i),n,r)},function(e,t){var r=b(v,e,this,t,v!==n);if(r.done)return r.value;var c=i(e),h=String(this),p=o(c,RegExp),d=c.unicode,m=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(f?"y":"g"),y=new p(f?c:"^(?:"+c.source+")",m),g=void 0===t?4294967295:t>>>0;if(0===g)return[];if(0===h.length)return null===l(y,h)?[h]:[];var P=0,x=0,j=[];while(x<h.length){y.lastIndex=f?x:0;var k,E=l(y,f?h:h.slice(x));if(null===E||(k=u(a(y.lastIndex+(f?0:x)),h.length))===P)x=s(h,x,d);else{if(j.push(h.slice(P,x)),j.length===g)return j;for(var N=1;N<=E.length-1;N++)if(j.push(E[N]),j.length===g)return j;x=P=k}}return j.push(h.slice(P)),j}]})},"2fdb":function(e,t,n){"use strict";var r=n("5ca1"),i=n("d2c8"),o="includes";r(r.P+r.F*n("5147")(o),"String",{includes:function(e){return!!~i(this,e,o).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},"3f53":function(e,t,n){"use strict";var r=n("bc3a"),i=n.n(r),o=n("61da");t["a"]={methods:{commitObject:function(e,t,n,r){var s=this;"undefined"==typeof r&&(r={post:{},put:{}}),"Update"==this.commitLabel?i.a.put(e,{session_id:this.$store.state.session,object:this.objt}).then(function(e){o["a"].$emit("operation-success",e.data.message),s.$router.push({name:n})}).catch(function(e){o["a"].$emit("operation-failure",e)}):i.a.post(t,{session_id:this.$store.state.session,object:this.objt},{params:r["post"]}).then(function(e){o["a"].$emit("operation-success",e.data.message),s.$router.push({name:n})}).catch(function(e){o["a"].$emit("operation-failure",e)})}},postImage:function(e){var t="/api/upload/image?session_id="+this.$store.state.session;i.a.post(t,e).then(function(e){o["a"].$emit("operation-success",e.data.message)}).catch(function(e){o["a"].$emit("operation-failure",e)})}}},5147:function(e,t,n){var r=n("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(i){}}return!0}},"520a":function(e,t,n){"use strict";var r=n("0bfb"),i=RegExp.prototype.exec,o=String.prototype.replace,s=i,a="lastIndex",l=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e[a]||0!==t[a]}(),c=void 0!==/()??/.exec("")[1],u=l||c;u&&(s=function(e){var t,n,s,u,h=this;return c&&(n=new RegExp("^"+h.source+"$(?!\\s)",r.call(h))),l&&(t=h[a]),s=i.call(h,e),l&&s&&(h[a]=h.global?s.index+s[0].length:t),c&&s&&s.length>1&&o.call(s[0],n,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(s[u]=void 0)}),s}),e.exports=s},"584a":function(e,t){var n=e.exports={version:"2.6.1"};"number"==typeof __e&&(__e=n)},"5f1b":function(e,t,n){"use strict";var r=n("23c6"),i=RegExp.prototype.exec;e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var o=n.call(e,t);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(e))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},6762:function(e,t,n){"use strict";var r=n("5ca1"),i=n("c366")(!0);r(r.P,"Array",{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"7f7f":function(e,t,n){var r=n("86cc").f,i=Function.prototype,o=/^\s*function ([^ (]*)/,s="name";s in i||n("9e1e")&&r(i,s,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},"94cc":function(e,t,n){"use strict";var r=n("bc3a"),i=n.n(r),o=n("61da");t["a"]={methods:{commitObject:function(e,t,n){var r=this;"Update"==this.commitLabel?i.a.put(e,{session_id:this.$store.state.session,object:this.objt}).then(function(e){o["a"].$emit("operation-success",e.data.message),r.$router.push({name:n})}).catch(function(e){o["a"].$emit("operation-failure",e)}):i.a.post(t,{session_id:this.$store.state.session,object:this.objt}).then(function(e){o["a"].$emit("operation-success",e.data.message),r.$router.push({name:n})}).catch(function(e){o["a"].$emit("operation-failure",e)})}}}},a21f:function(e,t,n){var r=n("584a"),i=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return i.stringify.apply(i,arguments)}},aae3:function(e,t,n){var r=n("d3f4"),i=n("2d95"),o=n("2b4c")("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==i(e))}},b0c5:function(e,t,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},b795:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{ref:"propertyDialog",attrs:{title:this.dialogTitle},on:{ok:e.onOk}},[n("b-card",[1==e.securityProperty.update?n("div",[n("b-form-group",{attrs:{label:"Property","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"thePropertyInput"}},[n("b-form-input",{attrs:{readonly:"",id:"thePropertyInput"},model:{value:e.securityProperty.name,callback:function(t){e.$set(e.securityProperty,"name",t)},expression:"securityProperty.name"}})],1)],1):e._e(),0==e.securityProperty.update?n("div",[n("b-form-group",{attrs:{label:"Property","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"thePropertyInput"}},[n("b-form-select",{attrs:{id:"theValueInput",options:e.securityProperty.propertyNames,required:""},model:{value:e.securityProperty.name,callback:function(t){e.$set(e.securityProperty,"name",t)},expression:"securityProperty.name"}})],1)],1):e._e(),n("b-form-group",{attrs:{label:"Value","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theValueInput"}},[n("b-form-select",{attrs:{id:"theValueInput",options:e.propertyValues,required:""},model:{value:e.securityProperty.value,callback:function(t){e.$set(e.securityProperty,"value",t)},expression:"securityProperty.value"}})],1),e.valueNotNone?n("b-form-group",{attrs:{label:"Rationale","label-class":"font-weight-bold text-sm-left","label-for":"theRationaleInput"}},[n("b-form-textarea",{attrs:{id:"theRationaleInput",type:"text",rows:2,"max-rows":4,required:""},model:{value:e.securityProperty.rationale,callback:function(t){e.$set(e.securityProperty,"rationale",t)},expression:"securityProperty.rationale"}})],1):e._e()],1)],1)},i=[],o=(n("7f7f"),{name:"property-modal",props:{securityProperty:Object},computed:{valueNotNone:function(){return"None"!=this.securityProperty.value},dialogTitle:function(){return(this.securityProperty.update?"Update":"Add")+" Security Property"}},data:function(){return{propertyValues:["None","Low","Medium","High"],updateProperty:{name:"Undefined",value:"Undefined",rationale:"Undefined"}}},methods:{show:function(){this.$refs.propertyDialog.show()},onOk:function(e){this.securityProperty.rationale.length||"None"==this.securityProperty.name?(this.updateProperty.name=this.securityProperty.name,this.updateProperty.value=this.securityProperty.value,"None"==this.securityProperty.value?this.updateProperty.rationale="None":this.updateProperty.rationale=this.securityProperty.rationale,this.$emit("property-update",this.updateProperty),this.$refs.propertyDialog.hide()):(e.preventDefault(),alert("Please enter rationale"))}}}),s=o,a=n("2877"),l=Object(a["a"])(s,r,i,!1,null,null,null);t["default"]=l.exports},d2c8:function(e,t,n){var r=n("aae3"),i=n("be13");e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(e))}},f499:function(e,t,n){e.exports=n("a21f")},fb57:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"threatview"},[n("b-breadcrumb",{attrs:{items:e.bcItems}}),n("threat",{attrs:{object:this.objt,label:this.commitLabel},on:{"threat-commit":e.commitThreat}})],1)},i=[],o=n("bc3a"),s=n.n(o),a=n("3f53"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"threat"},[n("dimension-modal",{ref:"environmentDialog",attrs:{dimension:"environment",existing:e.environmentNames},on:{"dimension-modal-update":e.addThreatEnvironmentProperty}}),n("dimension-modal",{ref:"assetDialog",attrs:{dimension:"asset",environment:e.environmentName,existing:e.assetNames},on:{"dimension-modal-update":e.addThreatAsset}}),n("dimension-modal",{ref:"attackerDialog",attrs:{dimension:"attacker",environment:e.environmentName,existing:e.attackerNames},on:{"dimension-modal-update":e.addThreatAttacker}}),n("property-modal",{ref:"propertyDialog",attrs:{securityProperty:e.selectedProperty},on:{"property-update":e.updateProperty}}),e.errors.length?n("p",[n("b",[e._v("Please correct the following error(s):")]),n("ul",e._l(e.errors,function(t){return n("li",{key:t},[e._v(e._s(t))])}),0)]):e._e(),n("b-form",[n("b-container",{attrs:{fluid:""}},[n("b-card",{attrs:{"bg-variant":"light"}},[n("b-row",[n("b-col",{attrs:{md:"6"}},[n("b-form-group",{attrs:{label:"Threat","label-class":"font-weight-bold text-md-left","label-cols":"2","label-for":"theThreatInput"}},[n("b-form-input",{attrs:{id:"theThreatInput",type:"text",required:""},model:{value:e.objt.theThreatName,callback:function(t){e.$set(e.objt,"theThreatName",t)},expression:"objt.theThreatName"}})],1)],1),n("b-col",{attrs:{md:"6"}},[n("b-form-group",{attrs:{label:"Type","label-class":"font-weight-bold text-md-left","label-cols":"2","label-for":"theThreatType"}},[n("dimension-select",{attrs:{id:"theThreatType",dimension:"threat_type",initial:this.objt.theType},on:{"dimension-select-change":e.threatTypeSelected}})],1)],1)],1),n("b-form-group",{attrs:{label:"Method","label-class":"font-weight-bold text-md-left","label-for":"theMethodInput"}},[n("b-form-textarea",{attrs:{id:"theMethodInput",type:"text",rows:2,"max-rows":4,required:""},model:{value:e.objt.theMethod,callback:function(t){e.$set(e.objt,"theMethod",t)},expression:"objt.theMethod"}})],1),n("b-form-group",{attrs:{label:"Tags","label-class":"font-weight-bold text-md-left","label-cols":"1","label-for":"theTagsInput"}},[n("b-form-input",{attrs:{id:"theTagsInput",type:"text"},model:{value:e.objt.theTags,callback:function(t){e.$set(e.objt,"theTags",t)},expression:"objt.theTags"}})],1)],1)],1),n("b-container",{attrs:{fluid:""}},[n("b-card",{staticClass:"text-left",attrs:{header:"Environments"}},[n("template",{slot:"header"},[n("font-awesome-icon",{style:{color:"green"},attrs:{icon:"plus"},on:{click:function(t){return t.stopPropagation(),e.addEnvironment(t)}}}),e._v(" Environment\n          ")],1),n("b-row",[n("b-col",{attrs:{sm:"12"}},[n("b-tabs",{attrs:{pills:""},model:{value:e.envPropIndex,callback:function(t){e.envPropIndex=t},expression:"envPropIndex"}},e._l(this.objt.theEnvironmentProperties,function(t){return n("b-tab",{key:t.theEnvironmentName,attrs:{title:t.theName}},[n("template",{slot:"title"},[n("font-awesome-icon",{style:{color:"red"},attrs:{icon:"minus"},on:{click:function(n){return e.deleteEnvironment(t.theEnvironmentName)}}}),e._v("  "+e._s(t.theEnvironmentName)+"\n                  ")],1)],2)}),1)],1)],1),this.objt.theEnvironmentProperties.length?n("b-row",[n("b-col",{attrs:{sm:"12"}},[n("b-form-group",{attrs:{label:"Type","label-class":"font-weight-bold text-md-left","label-cols":"1","label-for":"theLikelihood"}},[n("b-form-select",{staticClass:"mb-3",attrs:{id:"theLikelihood",options:e.likelihoodTypes,required:""},model:{value:e.objt.theEnvironmentProperties[e.envPropIndex].theLikelihood,callback:function(t){e.$set(e.objt.theEnvironmentProperties[e.envPropIndex],"theLikelihood",t)},expression:"objt.theEnvironmentProperties[envPropIndex].theLikelihood"}})],1)],1)],1):e._e(),this.objt.theEnvironmentProperties.length?n("b-row",[n("b-col",{attrs:{sm:"4"}},[n("b-table",{attrs:{striped:"",bordered:"",small:"",fields:e.attackerTableFields,items:e.environmentAttackers},scopedSlots:e._u([{key:"HEAD_attackeractions",fn:function(t){return[n("font-awesome-icon",{style:{color:"green"},attrs:{icon:"plus"},on:{click:function(t){return t.stopPropagation(),e.addAttacker(t)}}})]}},{key:"attackeractions",fn:function(t){return[n("font-awesome-icon",{style:{color:"red"},attrs:{icon:"minus"},on:{click:function(n){return n.stopPropagation(),e.deleteAttacker(t.index)}}})]}}],null,!1,3195203824)})],1),n("b-col",{attrs:{sm:"4"}},[n("b-table",{attrs:{striped:"",bordered:"",small:"",fields:e.assetTableFields,items:e.environmentAssets},scopedSlots:e._u([{key:"HEAD_assetactions",fn:function(t){return[n("font-awesome-icon",{style:{color:"green"},attrs:{icon:"plus"},on:{click:function(t){return t.stopPropagation(),e.addAsset(t)}}})]}},{key:"assetactions",fn:function(t){return[n("font-awesome-icon",{style:{color:"red"},attrs:{icon:"minus"},on:{click:function(n){return n.stopPropagation(),e.deleteAsset(t.index)}}})]}}],null,!1,4070375440)})],1),n("b-col",{attrs:{sm:"4"}},[n("b-table",{attrs:{striped:"",bordered:"",small:"",hover:"",items:e.notNone,fields:e.propTableFields},on:{"row-clicked":e.viewProperty},scopedSlots:e._u([{key:"HEAD_propactions",fn:function(t){return[n("font-awesome-icon",{style:{color:"green"},attrs:{icon:"plus"},on:{click:function(t){return t.stopPropagation(),e.addProperty(t)}}})]}},{key:"propactions",fn:function(t){return[n("font-awesome-icon",{style:{color:"red"},attrs:{icon:"minus"},on:{click:function(n){return n.stopPropagation(),e.clearProperty(t.item)}}})]}}],null,!1,2996087067)})],1)],1):e._e()],2)],1),n("b-container",{attrs:{fluid:""}},[n("b-form-row",[n("b-col",{attrs:{md:"4","offset-md":"5"}},[n("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:e.onCommit}},[e._v(e._s(e.commitLabel))]),n("b-button",{attrs:{type:"submit",variant:"secondary"},on:{click:e.onCancel}},[e._v("Cancel")])],1)],1)],1)],1)],1)},c=[],u=(n("28a5"),n("94cc")),h=n("2084"),p=n("18e9"),d=n("1e3b"),m=n("b795"),f=n("1864"),b={props:{object:Object,label:String},watch:{object:"setObject"},mixins:[u["a"],p["a"],h["a"]],computed:{assetNames:function(){return this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties[this.envPropIndex].theAssets:[]},attackerNames:function(){return this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties[this.envPropIndex].theAttackers:[]},environmentAssets:function(){return this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties[this.envPropIndex].theAssets.map(function(e){return{name:e}}):[]},environmentAttackers:function(){return this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties[this.envPropIndex].theAttackers.map(function(e){return{name:e}}):[]}},components:{DimensionModal:d["default"],DimensionSelect:f["default"],PropertyModal:m["default"]},data:function(){return{objt:this.object,commitLabel:this.label,envPropIndex:0,errors:[],likelihoodTypes:["Incredible","Improbable","Remote","Occasional","Probable","Frequent"],envFields:{envactions:{label:""},theName:{label:"Environment"}},assetTableFields:{assetactions:{label:""},name:{label:"Asset"}},attackerTableFields:{attackeractions:{label:""},name:{label:"Attacker"}}}},methods:{checkForm:function(){return this.errors=[],0==this.objt.theThreatName.length&&this.errors.push("Name is required"),0==this.objt.theType.length&&this.errors.push("Type is required"),0==this.objt.theMethod.length&&this.errors.push("Method is required"),0==this.objt.theEnvironmentProperties.length&&this.errors.push("No environment properties have been defined"),!this.errors.length},setObject:function(){this.objt=this.object,this.commitLabel=this.label},onCommit:function(e){e.preventDefault(),this.checkForm()&&(""!=this.objt.theTags&&(this.objt.theTags=this.objt.theTags.split(",").map(function(e){return e.trim()})),this.$emit("threat-commit",this.objt))},onCancel:function(e){e.preventDefault(),this.$router.push({name:"threats"})},deleteAsset:function(e){this.objt.theEnvironmentProperties[this.envPropIndex].theAssets.splice(e,1)},deleteAttacker:function(e){this.objt.theEnvironmentProperties[this.envPropIndex].theAttackers.splice(e,1)},addEnvironment:function(e){e.preventDefault(),this.$refs.environmentDialog.show()},addAsset:function(e){e.preventDefault(),this.$refs.assetDialog.show()},addAttacker:function(e){e.preventDefault(),this.$refs.attackerDialog.show()},addThreatEnvironmentProperty:function(e){this.addEnvironmentProperty({theEnvironmentName:e,theAssets:[],theLikelihood:"",theAttackers:[],theProperties:this.defaultProperties()})},addThreatAsset:function(e){this.objt.theEnvironmentProperties[this.envPropIndex].theAssets.push(e)},addThreatAttacker:function(e){this.objt.theEnvironmentProperties[this.envPropIndex].theAttackers.push(e)},threatTypeSelected:function(e){this.objt.theType=e}}},v=b,y=n("2877"),g=Object(y["a"])(v,l,c,!1,null,null,null),P=g.exports,x=n("4360"),j=n("61da"),k={props:{objectName:String},mixins:[a["a"]],computed:{bcItems:function(){return[{text:"Home",to:{name:"home"}},{text:"Threats",to:{name:"threats"}},{text:this.objt.theThreatName,to:{name:"threat"}}]}},components:{Threat:P},data:function(){return{objt:{theThreatName:"",theType:"",theMethod:"",theTags:"",theEnvironmentProperties:[]},commitLabel:"Create"}},beforeRouteEnter:function(e,t,n){if("New threat"==e.params.objectName)n();else{var r="/api/threats/name/"+e.params.objectName;s.a.get(r,{baseURL:x["a"].state.url,params:{session_id:x["a"].state.session}}).then(function(e){n(function(t){t.commitLabel="Update",t.objt=e.data,t.objt.theTags=e.data.theTags.join(", ")})}).catch(function(e){j["a"].$emit("operation-failure",e)})}},methods:{commitThreat:function(e){this.objt=e;var t=this.$store.state.url+"/api/threats/name/"+this.objectName+"?session_id="+this.$store.state.session,n=this.$store.state.url+"/api/threats";this.commitObject(t,n,"threats")}}},E=k,N=Object(y["a"])(E,r,i,!1,null,null,null);t["default"]=N.exports}}]);
//# sourceMappingURL=chunk-af26e284.148f0545.js.map