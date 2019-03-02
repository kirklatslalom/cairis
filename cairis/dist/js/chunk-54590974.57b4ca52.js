(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54590974","chunk-5d9ab32a"],{"0d49":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"objects"},[i("b-breadcrumb",{attrs:{items:e.bcItems}}),i("object-dependency-modal",{ref:"depDialog",attrs:{dependencies:e.objectDependencies},on:{"object-dependency-ok":e.deleteDependencies}}),i("b-card",{attrs:{"no-body":""}},["requirement"==e.dimension?i("b-container",{attrs:{fluid:""}},[i("b-row",[i("b-col",[i("b-form-group",{attrs:{label:"Asset","label-for":"reqAsset","label-cols":5}},[i("dimension-select",{ref:"assetFilter",attrs:{id:"assetEnvironment",dimension:"asset"},on:{"dimension-select-change":e.assetSelected}})],1)],1),i("b-col",[i("b-form-group",{attrs:{label:"Environment","label-for":"reqEnvironment","label-cols":5}},[i("dimension-select",{ref:"envFilter",attrs:{id:"reqEnvironment",dimension:"environment"},on:{"dimension-select-change":e.environmentSelected}})],1)],1)],1)],1):e._e(),i("b-table",{attrs:{"b-table":"",striped:"",small:"",hover:"",fields:e.objectsFields,items:e.items},on:{"row-clicked":e.objectClicked},scopedSlots:e._u([{key:"HEAD_objectsactions",fn:function(t){return[i("font-awesome-icon",{style:{color:"green"},attrs:{icon:"plus"},on:{click:function(t){return t.stopPropagation(),e.addObject(t)}}})]}},{key:"objectsactions",fn:function(t){return[i("font-awesome-icon",{style:{color:"red"},attrs:{icon:"minus"},on:{click:function(i){return i.stopPropagation(),e.deleteObject(t.index)}}})]}},{key:"pretaction",fn:function(t){return[i("font-awesome-icon",{style:{color:"green"},attrs:{icon:"arrow-left"},on:{click:function(i){return i.stopPropagation(),e.addPreTraceabilityLink(t.index)}}})]}},{key:"generategoalaction",fn:function(t){return[i("font-awesome-icon",{style:{color:"green"},attrs:{icon:"angle-down"},on:{click:function(i){return i.stopPropagation(),e.generateGoal(t.index)}}})]}},{key:"postaction",fn:function(t){return[i("font-awesome-icon",{style:{color:"green"},attrs:{icon:"arrow-right"},on:{click:function(i){return i.stopPropagation(),e.addPostTraceabilityLink(t.index)}}})]}}])})],1)],1)},s=[],a=i("f499"),o=i.n(a),r=i("bc3a"),c=i.n(r),d=i("61da"),m=i("1864"),l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-modal",{ref:"objectDependencyDialog",attrs:{title:"Confirm object deletion"},on:{ok:e.onOk}},[i("b-card",[i("p",[i("b",[e._v("Removing this object will also remove the following objects.")])]),i("b-table",{attrs:{striped:"",bordered:"",small:"",items:e.dependencies,fields:e.odTableFields}}),i("p",[i("b",[e._v("Do you want to continue?")])])],1)],1)},h=[],u={name:"object-dependency-modal",props:{dependencies:Array},data:function(){return{odTableFields:{theDimensionName:{label:"Dimension"},theObjectName:{label:"Name"}}}},methods:{show:function(){this.$refs.objectDependencyDialog.show()},onOk:function(){this.$emit("object-dependency-ok"),this.$refs.objectDependencyDialog.hide()}}},p=u,f=i("2877"),b=Object(f["a"])(p,l,h,!1,null,null,null),N=b.exports,v={props:{breadCrumbItems:Array,fieldList:Object,getUrl:String,delUrl:String,dimName:String},components:{DimensionSelect:m["default"],ObjectDependencyModal:N},data:function(){return{bcItems:this.breadCrumbItems,dimension:this.dimName,items:[],theGetUrl:this.getUrl,objectsFields:this.fieldList,objectDependencies:[],selectedObject:"",selectedIndex:-1}},watch:{theGetUrl:"loadObjects"},methods:{objectClicked:function(e){"requirement"==this.dimName?this.$router.push({name:this.dimName,params:{objectName:e.theName,domain:this.$refs.assetFilter.selected.length>0?{type:"asset",name:this.$refs.assetFilter.selected}:{type:"environment",name:this.$refs.envFilter.selected}}}):"vulnerability"==this.dimName?this.$router.push({name:this.dimName,params:{objectName:e.theVulnerabilityName}}):"personacharacteristic"==this.dimName?this.$router.push({name:this.dimName,params:{objectName:e.theCharacteristic}}):"kaosassociation"==this.dimName?this.$router.push({name:this.dimName,params:{envName:e.theEnvironmentName,goalName:e.theGoal,subGoalName:e.theSubGoal}}):"assetassociation"==this.dimName?this.$router.push({name:this.dimName,params:{envName:e.theEnvironmentName,headName:e.theHeadAsset,tailName:e.theTailAsset}}):"dependency"==this.dimName?this.$router.push({name:this.dimName,params:{envName:e.theEnvironmentName,depName:e.theDepender,deeName:e.theDependee,dpyName:e.theDependency}}):"dataflow"==this.dimName?this.$router.push({name:this.dimName,params:{objectName:e.theName,envName:e.theEnvironmentName}}):this.$router.push({name:this.dimName,params:{objectName:e.theName}})},addObject:function(){"kaosassociation"==this.dimension?this.$router.push({name:this.dimName,params:{envName:"To set",goalName:"To set",subGoalName:"To set"}}):"assetassociation"==this.dimension?this.$router.push({name:this.dimName,params:{envName:"To set",headName:"To set",tailName:"To set"}}):"dependency"==this.dimension?this.$router.push({name:this.dimName,params:{envName:"To set",depName:"To set",deeName:"To set",dpyName:"To set"}}):"dataflow"==this.dimension?this.$router.push({name:this.dimName,params:{objectName:"New "+this.dimName,envName:"To set"}}):this.$router.push({name:this.dimName,params:{objectName:"New "+this.dimName,domain:{type:"asset",name:""}}})},deleteObject:function(e){"vulnerability"==this.dimName?this.selectedObject=this.items[e].theVulnerabilityName:"kaosassociation"==this.dimName?this.selectedObject={envName:this.items[e].theEnvironmentName,goal:this.items[e].theGoal,subGoal:this.items[e].theSubGoal}:"assetassociation"==this.dimName?this.selectedObject={envName:this.items[e].theEnvironmentName,headName:this.items[e].theHeadAsset,tailName:this.items[e].theTailAsset}:"dependency"==this.dimName?this.selectedObject={envName:this.items[e].theEnvironmentName,theDepender:this.items[e].theDepender,theDependee:this.items[e].theDependee,theDependency:this.items[e].theDependency}:"personacharacteristic"==this.dimName?this.selectedObject=this.items[e].theCharacteristic:this.selectedObject=this.items[e].theName,this.selectedIndex=e;var t=this;if("kaosassociation"!=this.dimension&&"assetassociation"!=this.dimension&&"dependency"!=this.dimension&&"dataflow"!=this.dimension){var i=this.dimension;"personacharacteristic"==i&&(i="persona_characteristic");var n="/api/object_dependency/dimension/"+i+"/object/"+this.selectedObject;c.a.get(n,{baseURL:this.$store.state.url,params:{session_id:this.$store.state.session}}).then(function(e){e.data.theDependencies.length>0?(t.objectDependencies=e.data.theDependencies,t.$refs.depDialog.show()):t.commitDelete()}).catch(function(e){d["a"].$emit("operation-failure",e)})}else this.commitDelete()},commitDelete:function(){var e=this,t=this.delUrl;"kaosassociation"==this.dimension&&(t+=this.selectedObject.envName+"/goal/"+this.selectedObject.goal+"/subgoal/"+this.selectedObject.subGoal),"assetassociation"==this.dimension?t+=this.selectedObject.envName+"/head/"+this.selectedObject.headName+"/tail/"+this.selectedObject.tailName:"dependency"==this.dimension?t+=this.selectedObject.envName+"/depender/"+this.selectedObject.theDepender+"/dependee/"+this.selectedObject.theDependee+"/dependency/"+this.selectedObject.theDependency:"dataflow"==this.dimension?t+=this.selectedObject.objectName+"/environment/"+this.selectedObject.envName:t+=JSON.parse(o()(this.selectedObject)),c.a.delete(t,{baseURL:this.$store.state.url,params:{session_id:this.$store.state.session}}).then(function(t){e.items.splice(e.selectedIndex,1),d["a"].$emit("operation-success",t.data.message)}).catch(function(e){d["a"].$emit("operation-failure",e)})},deleteDependencies:function(){var e="/api/object_dependency/dimension/"+this.dimension+"/object/"+this.selectedObject,t=this;c.a.delete(e,{baseURL:this.$store.state.url,params:{session_id:this.$store.state.session}}).then(function(){t.commitDelete()}).catch(function(e){d["a"].$emit("operation-failure",e)})},loadObjects:function(){var e=this;""!=this.theGetUrl&&c.a.get(this.theGetUrl,{baseURL:this.$store.state.url,params:{session_id:this.$store.state.session}}).then(function(t){e.items=t.data}).catch(function(e){d["a"].$emit("operation-failure",e)})},assetSelected:function(e){null!=e&&(this.theGetUrl="/api/requirements/asset/"+e,this.$refs.envFilter.selected="")},environmentSelected:function(e){null!=e&&(this.theGetUrl="/api/requirements/environment/"+e,this.$refs.assetFilter.selected="")},generateGoal:function(e){var t=this.$store.state.url+"/api/responses/name/"+this.items[e].theName+"/generate_goal";c.a.post(t,{session_id:this.$store.state.session,object:this.objt}).then(function(e){d["a"].$emit("operation-success",e.data.message)}).catch(function(e){d["a"].$emit("operation-failure",e)})},addPreTraceabilityLink:function(e){console.log(e)},addPostTraceabilityLink:function(e){console.log(e)}},mounted:function(){this.loadObjects(),"externaldocument"==this.dimName?this.dimension="external_document":"documentreference"==this.dimName?this.dimension="document_reference":"conceptreference"==this.dimName?this.dimension="concept_reference":"trustboundary"==this.dimName?this.dimension="trust_boundary":"securitypattern"==this.dimName&&(this.dimension="security_pattern")}},g=v,j=Object(f["a"])(g,n,s,!1,null,null,null);t["a"]=j.exports},1864:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-form-select",{ref:"dimensionSelect",attrs:{id:"dimensionSelect",disabled:e.is_disabled,size:e.display_size,options:e.filteredItems},on:{change:function(t){return e.onChange(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})},s=[],a=(i("6762"),i("2fdb"),i("cadf"),i("551c"),i("f751"),i("097d"),i("bc3a")),o=i.n(a),r=i("61da"),c={name:"dimension-select",props:{dimension:{type:String},dimensionUrl:{type:String,default:function(){return""}},existing:{type:Array,default:function(){return[]}},environment:{type:String,default:function(){return""}},includeall:{type:Boolean,default:function(){return!1}},initial:{type:String,default:function(){return""}},display_size:{type:String,default:function(){return"md"}},is_disabled:{type:Boolean,default:function(){return!1}}},data:function(){return{items:[],selected:this.initial}},computed:{filteredItems:function(){var e=this;return this.items.length>0?this.items.filter(function(t){if(!e.existing.includes(t))return t}):[]}},watch:{dimension:"updateSelector",dimensionUrl:"updateSelector",existing:"updateSelector",environment:"updateSelector",initial:"updateSelector"},methods:{onChange:function(e){this.$emit("dimension-select-change",e)},updateSelector:function(){var e=this;if((void 0!=this.dimension||""!=this.dimensionUrl)&&""!=this.$store.state.session){var t=this.dimensionUrl;0==this.dimensionUrl.length&&(t="/api/dimensions/table/"+this.dimension,""!=this.environment&&(t+="/environment/"+this.environment));var i=this;o.a.get(t,{baseURL:this.$store.state.url,params:{session_id:this.$store.state.session}}).then(function(t){i.items=t.data,i.items=i.items.length>0?i.items.filter(function(e){if(!i.existing.includes(e))return e}):[],1==i.items.length&&i.$emit("dimension-select-change",i.items[0]),i.includeall&&("dfd_filter"==i.dimension?i.items.unshift("None"):"persona_characteristic"==i.dimension?i.items.unshift("All"):i.items.unshift("all")),e.selected=e.initial}).catch(function(e){r["a"].$emit("operation-failure","Error updating selector:"+e)})}}},mounted:function(){void 0==this.dimension&&""==this.dimensionUrl||this.updateSelector()}},d=c,m=i("2877"),l=Object(m["a"])(d,n,s,!1,null,null,null);t["default"]=l.exports},"2fdb":function(e,t,i){"use strict";var n=i("5ca1"),s=i("d2c8"),a="includes";n(n.P+n.F*i("5147")(a),"String",{includes:function(e){return!!~s(this,e,a).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},"492f":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"environments"},[i("objects",{attrs:{breadCrumbItems:e.bcItems,fieldList:e.objectsFields,getUrl:e.theGetUrl,delUrl:e.theDelUrl,dimName:e.dimension}})],1)},s=[],a=i("0d49"),o={components:{Objects:a["a"]},data:function(){return{bcItems:[{text:"Home",to:{name:"home"}},{text:"Environments",to:{name:"environments"}}],items:[],objectsFields:{objectsactions:{label:""},theName:{label:"Name",sortable:!0},theDescription:{label:"Description"}},theGetUrl:"/api/environments",theDelUrl:"/api/environments/name/",dimension:"environment"}}},r=o,c=i("2877"),d=Object(c["a"])(r,n,s,!1,null,null,null);t["default"]=d.exports},5147:function(e,t,i){var n=i("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(i){try{return t[n]=!1,!"/./"[e](t)}catch(s){}}return!0}},"584a":function(e,t){var i=e.exports={version:"2.6.1"};"number"==typeof __e&&(__e=i)},6762:function(e,t,i){"use strict";var n=i("5ca1"),s=i("c366")(!0);n(n.P,"Array",{includes:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),i("9c6c")("includes")},a21f:function(e,t,i){var n=i("584a"),s=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return s.stringify.apply(s,arguments)}},aae3:function(e,t,i){var n=i("d3f4"),s=i("2d95"),a=i("2b4c")("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==s(e))}},d2c8:function(e,t,i){var n=i("aae3"),s=i("be13");e.exports=function(e,t,i){if(n(t))throw TypeError("String#"+i+" doesn't accept regex!");return String(s(e))}},f499:function(e,t,i){e.exports=i("a21f")}}]);
//# sourceMappingURL=chunk-54590974.57b4ca52.js.map