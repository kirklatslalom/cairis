(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ac3c5fa","chunk-5d9ab32a"],{1864:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-form-select",{ref:"dimensionSelect",attrs:{id:"dimensionSelect",disabled:e.is_disabled,size:e.display_size,options:e.filteredItems},on:{change:function(t){return e.onChange(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})},o=[],s=(n("6762"),n("2fdb"),n("cadf"),n("551c"),n("f751"),n("097d"),n("bc3a")),r=n.n(s),a=n("61da"),c={name:"dimension-select",props:{dimension:{type:String},dimensionUrl:{type:String,default:function(){return""}},existing:{type:Array,default:function(){return[]}},environment:{type:String,default:function(){return""}},includeall:{type:Boolean,default:function(){return!1}},initial:{type:String,default:function(){return""}},display_size:{type:String,default:function(){return"md"}},is_disabled:{type:Boolean,default:function(){return!1}}},data:function(){return{items:[],selected:this.initial}},computed:{filteredItems:function(){var e=this;return this.items.length>0?this.items.filter(function(t){if(!e.existing.includes(t))return t}):[]}},watch:{dimension:"updateSelector",dimensionUrl:"updateSelector",existing:"updateSelector",environment:"updateSelector",initial:"updateSelector"},methods:{onChange:function(e){this.$emit("dimension-select-change",e)},updateSelector:function(){var e=this;if((void 0!=this.dimension||""!=this.dimensionUrl)&&""!=this.$store.state.session){var t=this.dimensionUrl;0==this.dimensionUrl.length&&(t="/api/dimensions/table/"+this.dimension,""!=this.environment&&(t+="/environment/"+this.environment));var n=this;r.a.get(t,{baseURL:this.$store.state.url,params:{session_id:this.$store.state.session}}).then(function(t){n.items=t.data,n.items=n.items.length>0?n.items.filter(function(e){if(!n.existing.includes(e))return e}):[],1==n.items.length&&n.$emit("dimension-select-change",n.items[0]),n.includeall&&("dfd_filter"==n.dimension?n.items.unshift("None"):"persona_characteristic"==n.dimension?n.items.unshift("All"):n.items.unshift("all")),e.selected=e.initial}).catch(function(e){a["a"].$emit("operation-failure","Error updating selector:"+e)})}}},mounted:function(){void 0==this.dimension&&""==this.dimensionUrl||this.updateSelector()}},u=c,l=n("2877"),m=Object(l["a"])(u,i,o,!1,null,null,null);t["default"]=m.exports},"2fdb":function(e,t,n){"use strict";var i=n("5ca1"),o=n("d2c8"),s="includes";i(i.P+i.F*n("5147")(s),"String",{includes:function(e){return!!~o(this,e,s).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},"3f53":function(e,t,n){"use strict";var i=n("bc3a"),o=n.n(i),s=n("61da");t["a"]={methods:{commitObject:function(e,t,n,i){var r=this;"undefined"==typeof i&&(i={post:{},put:{}}),"Update"==this.commitLabel?o.a.put(e,{session_id:this.$store.state.session,object:this.objt}).then(function(e){s["a"].$emit("operation-success",e.data.message),r.$router.push({name:n})}).catch(function(e){s["a"].$emit("operation-failure",e)}):o.a.post(t,{session_id:this.$store.state.session,object:this.objt},{params:i["post"]}).then(function(e){s["a"].$emit("operation-success",e.data.message),r.$router.push({name:n})}).catch(function(e){s["a"].$emit("operation-failure",e)})}},postImage:function(e){var t="/api/upload/image?session_id="+this.$store.state.session;o.a.post(t,e).then(function(e){s["a"].$emit("operation-success",e.data.message)}).catch(function(e){s["a"].$emit("operation-failure",e)})}}},5147:function(e,t,n){var i=n("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[i]=!1,!"/./"[e](t)}catch(o){}}return!0}},6762:function(e,t,n){"use strict";var i=n("5ca1"),o=n("c366")(!0);i(i.P,"Array",{includes:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"94cc":function(e,t,n){"use strict";var i=n("bc3a"),o=n.n(i),s=n("61da");t["a"]={methods:{commitObject:function(e,t,n){var i=this;"Update"==this.commitLabel?o.a.put(e,{session_id:this.$store.state.session,object:this.objt}).then(function(e){s["a"].$emit("operation-success",e.data.message),i.$router.push({name:n})}).catch(function(e){s["a"].$emit("operation-failure",e)}):o.a.post(t,{session_id:this.$store.state.session,object:this.objt}).then(function(e){s["a"].$emit("operation-success",e.data.message),i.$router.push({name:n})}).catch(function(e){s["a"].$emit("operation-failure",e)})}}}},aae3:function(e,t,n){var i=n("d3f4"),o=n("2d95"),s=n("2b4c")("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==o(e))}},af08:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"documentreferenceview"},[n("b-breadcrumb",{attrs:{items:e.bcItems}}),n("document-reference",{attrs:{object:this.objt,label:this.commitLabel},on:{"documentreference-commit":e.commitDocumentReference}})],1)},o=[],s=n("bc3a"),r=n.n(s),a=n("3f53"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"documentreference"},[e.errors.length?n("p",[n("b",[e._v("Please correct the following error(s):")]),n("ul",e._l(e.errors,function(t){return n("li",{key:t},[e._v(e._s(t))])}),0)]):e._e(),n("b-form",[n("b-container",{attrs:{fluid:""}},[n("b-card",{attrs:{"bg-variant":"light",no:"",body:""}},[n("b-row",[n("b-col",{attrs:{md:"12"}},[n("b-container",{attrs:{fluid:""}},[n("b-form-group",{attrs:{label:"Name","label-class":"font-weight-bold text-md-left","label-for":"theNameInput"}},[n("b-form-input",{attrs:{id:"theNameInput",type:"text",required:""},model:{value:e.objt.theName,callback:function(t){e.$set(e.objt,"theName",t)},expression:"objt.theName"}})],1),n("b-form-group",{attrs:{label:"External Document","label-class":"font-weigh-bold text-md-left","label-for":"theDocumentSelect"}},[n("dimension-select",{attrs:{id:"theDocumentSelect",dimension:"external_document",initial:this.objt.theDocName},on:{"dimension-select-change":e.docNameSelected}})],1),n("b-form-group",{attrs:{label:"Contributor","label-class":"font-weight-bold text-md-left","label-for":"theContributorInput"}},[n("b-form-input",{attrs:{id:"theContributorInput",type:"text",required:""},model:{value:e.objt.theContributor,callback:function(t){e.$set(e.objt,"theContributor",t)},expression:"objt.theContributor"}})],1),n("b-form-group",{attrs:{label:"Excerpt","label-class":"font-weight-bold text-md-left","label-for":"theExcerptInput"}},[n("b-form-textarea",{attrs:{id:"theExcerptInput",type:"text",rows:4,"max-rows":6,required:""},model:{value:e.objt.theExcerpt,callback:function(t){e.$set(e.objt,"theExcerpt",t)},expression:"objt.theExcerpt"}})],1)],1)],1)],1)],1)],1),n("b-container",{attrs:{fluid:""}},[n("b-form-row",[n("b-col",{attrs:{md:"4","offset-md":"5"}},[n("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:e.onCommit}},[e._v(e._s(e.commitLabel))]),n("b-button",{attrs:{type:"submit",variant:"secondary"},on:{click:e.onCancel}},[e._v("Cancel")])],1)],1)],1)],1)],1)},u=[],l=n("94cc"),m=n("1864"),d={name:"document-reference",props:{object:Object,label:String},watch:{object:"setObject"},mixins:[l["a"]],components:{DimensionSelect:m["default"]},data:function(){return{errors:[],objt:this.object,commitLabel:"Create"}},methods:{setObject:function(){this.objt=this.object,this.commitLabel=this.label},onCommit:function(e){e.preventDefault(),this.checkForm()&&this.$emit("documentreference-commit",this.objt)},onCancel:function(e){e.preventDefault(),this.$router.push({name:"documentreferences"})},checkForm:function(){return this.errors=[],0==this.objt.theName.length&&this.errors.push("Document Reference name is required"),0==this.objt.theDocName.length&&this.errors.push("External Document is required"),0==this.objt.theContributor.length&&this.errors.push("Contributor is required"),0==this.objt.theExcerpt.length&&this.errors.push("Excerpt is required"),!this.errors.length},docNameSelected:function(e){this.objt.theDocName=e}}},h=d,f=n("2877"),b=Object(f["a"])(h,c,u,!1,null,null,null),p=b.exports,g=n("4360"),j=n("61da"),v={props:{objectName:String},mixins:[a["a"]],computed:{bcItems:function(){return[{text:"Home",to:{name:"home"}},{text:"Document References",to:{name:"documentreferences"}},{text:this.objt.theName,to:{name:"documentreference"}}]}},components:{DocumentReference:p},data:function(){return{objt:{theName:"",theDocName:"",theContributor:"",theExcerpt:""},commitLabel:"Create"}},beforeRouteEnter:function(e,t,n){if("New documentreference"==e.params.objectName)n();else{var i="/api/document_references/name/"+e.params.objectName;r.a.get(i,{baseURL:g["a"].state.url,params:{session_id:g["a"].state.session}}).then(function(e){n(function(t){t.commitLabel="Update",t.objt=e.data})}).catch(function(e){j["a"].$emit("operation-failure",e)})}},methods:{commitDocumentReference:function(e){this.objt=e;var t=this.$store.state.url+"/api/document_references/name/"+this.objectName+"?session_id="+this.$store.state.session,n=this.$store.state.url+"/api/document_references";this.commitObject(t,n,"documentreferences")}}},x=v,$=Object(f["a"])(x,i,o,!1,null,null,null);t["default"]=$.exports},d2c8:function(e,t,n){var i=n("aae3"),o=n("be13");e.exports=function(e,t,n){if(i(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(e))}}}]);
//# sourceMappingURL=chunk-2ac3c5fa.871256b0.js.map