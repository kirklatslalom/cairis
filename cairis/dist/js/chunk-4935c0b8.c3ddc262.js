(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4935c0b8","chunk-5d9ab32a"],{1864:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-form-select",{ref:"dimensionSelect",attrs:{id:"dimensionSelect",disabled:e.is_disabled,size:e.display_size,options:e.filteredItems},on:{change:function(t){return e.onChange(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})},o=[],s=(i("6762"),i("2fdb"),i("cadf"),i("551c"),i("f751"),i("097d"),i("bc3a")),r=i.n(s),a=i("61da"),l={name:"dimension-select",props:{dimension:{type:String},dimensionUrl:{type:String,default:function(){return""}},existing:{type:Array,default:function(){return[]}},environment:{type:String,default:function(){return""}},includeall:{type:Boolean,default:function(){return!1}},initial:{type:String,default:function(){return""}},display_size:{type:String,default:function(){return"md"}},is_disabled:{type:Boolean,default:function(){return!1}}},data:function(){return{items:[],selected:this.initial}},computed:{filteredItems:function(){var e=this;return this.items.length>0?this.items.filter(function(t){if(!e.existing.includes(t))return t}):[]}},watch:{dimension:"updateSelector",dimensionUrl:"updateSelector",existing:"updateSelector",environment:"updateSelector",initial:"updateSelector"},methods:{onChange:function(e){this.$emit("dimension-select-change",e)},updateSelector:function(){var e=this;if((void 0!=this.dimension||""!=this.dimensionUrl)&&""!=this.$store.state.session){var t=this.dimensionUrl;0==this.dimensionUrl.length&&(t="/api/dimensions/table/"+this.dimension,""!=this.environment&&(t+="/environment/"+this.environment));var i=this;r.a.get(t,{baseURL:this.$store.state.url,params:{session_id:this.$store.state.session}}).then(function(t){i.items=t.data,i.items=i.items.length>0?i.items.filter(function(e){if(!i.existing.includes(e))return e}):[],1==i.items.length&&i.$emit("dimension-select-change",i.items[0]),i.includeall&&("dfd_filter"==i.dimension?i.items.unshift("None"):"persona_characteristic"==i.dimension?i.items.unshift("All"):i.items.unshift("all")),e.selected=e.initial}).catch(function(e){a["a"].$emit("operation-failure","Error updating selector:"+e)})}}},mounted:function(){void 0==this.dimension&&""==this.dimensionUrl||this.updateSelector()}},c=l,u=i("2877"),d=Object(u["a"])(c,n,o,!1,null,null,null);t["default"]=d.exports},"2fdb":function(e,t,i){"use strict";var n=i("5ca1"),o=i("d2c8"),s="includes";n(n.P+n.F*i("5147")(s),"String",{includes:function(e){return!!~o(this,e,s).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},5147:function(e,t,i){var n=i("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(i){try{return t[n]=!1,!"/./"[e](t)}catch(o){}}return!0}},6762:function(e,t,i){"use strict";var n=i("5ca1"),o=i("c366")(!0);n(n.P,"Array",{includes:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),i("9c6c")("includes")},c7fc:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-modal",{ref:"excDialog",attrs:{title:this.dialogTitle},on:{ok:e.onOk}},[e.errors.length?i("p",[i("b",[e._v("Please correct the following error(s):")]),i("ul",e._l(e.errors,function(t){return i("li",{key:t},[e._v(e._s(t))])}),0)]):e._e(),i("b-container",{attrs:{fluid:""}},[i("b-row",[i("b-col",{attrs:{md:"12"}},[i("b-form-group",{attrs:{label:"Name","label-class":"font-weight-bold text-md-left","label-cols":"3","label-for":"theExcNameInput"}},[i("b-form-input",{attrs:{id:"theExcNameInput",type:"text",required:""},model:{value:e.objt.theName,callback:function(t){e.$set(e.objt,"theName",t)},expression:"objt.theName"}})],1)],1)],1),i("b-row",[i("b-col",{attrs:{md:"6"}},[i("b-form-group",{attrs:{label:"Type","label-class":"font-weight-bold text-sm-left","label-cols":"4","label-for":"theDimensionTypeRadio"}},[i("b-form-radio-group",{attrs:{id:"theDimensionTypeRadio",stacked:""},model:{value:e.objt.theDimensionType,callback:function(t){e.$set(e.objt,"theDimensionType",t)},expression:"objt.theDimensionType"}},[i("b-form-radio",{attrs:{value:"none"}},[e._v("None")]),i("b-form-radio",{attrs:{value:"goal"}},[e._v("Goal")]),i("b-form-radio",{attrs:{value:"requirement"}},[e._v("Requirement")])],1)],1)],1),i("b-col",{attrs:{md:"6"}},["none"!=e.objt.theDimensionType?i("dimension-select",{ref:"dimensionSelect",attrs:{id:"theDimensionSelect",environment:e.environment,dimensionUrl:e.objtUrl,initial:e.objt.theDimensionValue},on:{"dimension-select-change":e.dimensionSelected}}):e._e()],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("b-form-group",{attrs:{label:"Category","label-class":"font-weight-bold text-sm-left","label-cols":"4","label-for":"theCategorySelect"}},[i("b-form-select",{staticClass:"mb-3",attrs:{id:"theCategoryName",options:e.categoryTypes,required:""},model:{value:e.objt.theCategoryName,callback:function(t){e.$set(e.objt,"theCategoryName",t)},expression:"objt.theCategoryName"}})],1)],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("b-form-group",{attrs:{label:"Description","label-class":"font-weight-bold text-sm-left","label-cols":"4","label-for":"theExceptionDescription"}},[i("b-form-textarea",{attrs:{id:"theExceptionDescription",type:"text",rows:2,"max-rows":4,required:""},model:{value:e.objt.theDescription,callback:function(t){e.$set(e.objt,"theDescription",t)},expression:"objt.theDescription"}})],1)],1)],1)],1)],1)},o=[],s=i("1864"),r={name:"exception-modal",props:{stepException:Object,environment:String,usecase:String},watch:{stepException:{handler:function(){this.objt=this.stepException.exception},deep:!0}},data:function(){return{objt:this.stepException.exception,errors:[],categoryTypes:["Confidentiality Threat","Integrity Threat","Availability Threat","Accountability Threat","Anonymity Threat","Pseudonymity Threat","Unlinkability Threat","Unobservability Threat","Threat","Vulnerability","Duration","Frequency","Demands","Goal Support"]}},components:{DimensionSelect:s["default"]},computed:{dialogTitle:function(){return(this.stepException.update?"Update":"Add")+" Exception"},objtUrl:function(){return"goal"==this.objt.theDimensionType?"/api/usecases/name/"+this.usecase+"/environment/"+this.environment+"/goals":"/api/usecases/name/"+this.usecase+"/requirements"}},methods:{checkForm:function(){return this.errors=[],0==this.objt.theName.length&&this.errors.push("Name is required"),0==this.objt.theDimensionType.length&&this.errors.push("Dimension Type is required"),"none"!=this.objt.theDimensionType&&0==this.objt.theDimensionValue.length&&this.errors.push("Dimension Value is required"),0==this.objt.theCategoryName.length&&this.errors.push("Category Name is required"),0==this.objt.theDescription.length&&this.errors.push("Description is required"),!this.errors.length},show:function(){this.$refs.excDialog.show()},onOk:function(e){this.checkForm()?(this.$emit("exception-update",{exception:this.objt,update:this.stepException.update,index:this.stepException.update?this.stepException.index:-1}),this.$refs.excDialog.hide()):e.preventDefault()},dimensionSelected:function(e){void 0!=e&&(this.objt.theDimensionValue=e)}}},a=r,l=i("2877"),c=Object(l["a"])(a,n,o,!1,null,null,null);t["default"]=c.exports},d2c8:function(e,t,i){var n=i("aae3"),o=i("be13");e.exports=function(e,t,i){if(n(t))throw TypeError("String#"+i+" doesn't accept regex!");return String(o(e))}}}]);
//# sourceMappingURL=chunk-4935c0b8.c3ddc262.js.map