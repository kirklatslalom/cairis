(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28d76a41"],{"584a":function(t,e){var o=t.exports={version:"2.6.1"};"number"==typeof __e&&(__e=o)},"7f7f":function(t,e,o){var i=o("86cc").f,n=Function.prototype,r=/^\s*function ([^ (]*)/,s="name";s in n||o("9e1e")&&i(n,s,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(t){return""}}})},a21f:function(t,e,o){var i=o("584a"),n=i.JSON||(i.JSON={stringify:JSON.stringify});t.exports=function(t){return n.stringify.apply(n,arguments)}},b603:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"propertiesview"},[o("properties-model",{attrs:{object:this.objt},on:{"properties-commit":t.commitProperties}})],1)},n=[],r=o("bc3a"),s=o.n(r),a=o("61da"),c=o("4360"),l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"propertiesmodel"},[t.errors.length?o("p",[o("b",[t._v("Please correct the following error(s):")]),o("ul",t._l(t.errors,function(e){return o("li",{key:e},[t._v(t._s(e))])}),0)]):t._e(),o("revision-modal",{ref:"revisionDialog",on:{"revision-update":t.updateRevision}}),o("contributor-modal",{ref:"contributorDialog",attrs:{contributor:t.selectedContributor},on:{"contributor-update":t.updateContributor}}),o("naming-convention-modal",{ref:"ncDialog",attrs:{definition:t.selectedDefinition},on:{"naming-convention-update":t.updateDefinition}}),o("b-form",[o("b-card",{attrs:{"no-body":""}},[o("b-tabs",{attrs:{card:""}},[o("b-tab",{attrs:{title:"Background",active:""}},[o("b-container",{attrs:{fluid:""}},[o("b-row",[o("b-col",{attrs:{md:"12"}},[o("b-form-group",{attrs:{label:"Project","label-class":"font-weight-bold text-md-left","label-cols":"1","label-for":"theProjectInput"}},[o("b-form-input",{attrs:{id:"theProjectInput",type:"text",required:""},model:{value:t.objt.projectName,callback:function(e){t.$set(t.objt,"projectName",e)},expression:"objt.projectName"}})],1)],1)],1),o("b-row",[o("b-col",{attrs:{md:"12"}},[o("b-form-group",{attrs:{label:"Background","label-class":"font-weight-bold text-md-left","label-for":"theBackgroundInput"}},[o("b-form-textarea",{attrs:{id:"theBackgroundInput",type:"text",rows:10,"max-rows":12,required:""},model:{value:t.objt.projectBackground,callback:function(e){t.$set(t.objt,"projectBackground",e)},expression:"objt.projectBackground"}})],1)],1)],1)],1)],1),o("b-tab",{attrs:{title:"Goals"}},[o("b-container",{attrs:{fluid:""}},[o("b-form-textarea",{attrs:{id:"theProjectGoalsInput",type:"text",rows:10,"max-rows":12,required:""},model:{value:t.objt.projectGoals,callback:function(e){t.$set(t.objt,"projectGoals",e)},expression:"objt.projectGoals"}})],1)],1),o("b-tab",{attrs:{title:"Scope"}},[o("b-container",{attrs:{fluid:""}},[o("b-form-textarea",{attrs:{id:"theProjectScopeInput",type:"text",rows:10,"max-rows":12,required:""},model:{value:t.objt.projectScope,callback:function(e){t.$set(t.objt,"projectScope",e)},expression:"objt.projectScope"}})],1)],1),o("b-tab",{attrs:{title:"Rich Picture"}},[o("b-container",{attrs:{fluid:""}},[o("b-img",{attrs:{src:t.richPictureImage,rounded:"",center:"","fluid-grow":""},on:{click:t.imageClicked}}),o("p",[o("input",{ref:"richpictureupload",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:t.imageSelected}})])],1)],1),o("b-tab",{attrs:{title:"Naming Conventions"}},[o("b-container",{attrs:{fluid:""}},[o("b-table",{attrs:{striped:"",small:"",bordered:"",fields:t.conventionTableFields,items:t.objt.definitions},on:{"row-clicked":t.viewDefinition},scopedSlots:t._u([{key:"HEAD_conventionactions",fn:function(e){return[o("font-awesome-icon",{style:{color:"green"},attrs:{icon:"plus"},on:{click:function(e){return e.stopPropagation(),t.addDefinition(e)}}})]}},{key:"conventionactions",fn:function(e){return[o("font-awesome-icon",{style:{color:"red"},attrs:{icon:"minus"},on:{click:function(o){return o.stopPropagation(),t.deleteDefinition(e.item)}}})]}}])})],1)],1),o("b-tab",{attrs:{title:"Contributors"}},[o("b-container",{attrs:{fluid:""}},[o("b-table",{attrs:{striped:"",small:"",bordered:"",fields:t.contributorTableFields,items:t.objt.contributions},on:{"row-clicked":t.viewContributor},scopedSlots:t._u([{key:"HEAD_contributionactions",fn:function(e){return[o("font-awesome-icon",{style:{color:"green"},attrs:{icon:"plus"},on:{click:function(e){return e.stopPropagation(),t.addContributor(e)}}})]}},{key:"contributionactions",fn:function(e){return[o("font-awesome-icon",{style:{color:"red"},attrs:{icon:"minus"},on:{click:function(o){return o.stopPropagation(),t.deleteContributor(e.item)}}})]}}])})],1)],1),o("b-tab",{attrs:{title:"Revisions"}},[o("b-container",{attrs:{fluid:""}},[o("b-table",{attrs:{striped:"",small:"",bordered:"",fields:t.revisionTableFields,items:t.objt.revisions},scopedSlots:t._u([{key:"HEAD_revisionactions",fn:function(e){return[o("font-awesome-icon",{style:{color:"green"},attrs:{icon:"plus"},on:{click:function(e){return e.stopPropagation(),t.addRevision(e)}}})]}}])})],1)],1)],1)],1),o("b-container",{attrs:{fluid:""}},[o("b-form-row",[o("b-col",{attrs:{md:"4","offset-md":"5"}},[o("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:t.onCommit}},[t._v(t._s(t.commitLabel))]),o("b-button",{attrs:{type:"submit",variant:"secondary"},on:{click:t.onCancel}},[t._v("Cancel")])],1)],1)],1)],1)],1)},u=[],b=(o("7f7f"),o("f499")),d=o.n(b),f={props:{object:Object},watch:{object:"setObject"},computed:{richPictureImage:function(){return""!=this.objt.richPicture?this.$store.state.url+"/images/"+this.objt.richPicture:this.$store.state.url+"/assets/default-avatar.png"}},components:{RevisionModal:function(){return o.e("chunk-2d0dacd5").then(o.bind(null,"6cc5"))},ContributorModal:function(){return o.e("chunk-2d0aba10").then(o.bind(null,"15a7"))},NamingConventionModal:function(){return o.e("chunk-2d0daac7").then(o.bind(null,"6d36"))}},data:function(){return{errors:[],objt:this.object,commitLabel:"Update",conventionTableFields:{conventionactions:{label:""},name:{label:"Name",sortable:!0},value:{label:"Definition"}},contributorTableFields:{contributionactions:{label:""},firstName:{label:"Firstname",sortable:!0},surname:{label:"Surname",sortable:!0},affiliation:{label:"Affiliation",sortable:!0},role:{label:"Role",sortable:!0}},revisionTableFields:{revisionactions:{label:""},id:{label:"Version",sortable:!0},date:{label:"Date"},description:{label:"Description"}},selectedDefinition:{update:!1,definition:{name:"",value:""}},selectedContributor:{update:!1,contributor:{firstName:"",surname:"",affiliation:"",role:""}}}},methods:{setObject:function(){this.objt=this.object},onCommit:function(t){t.preventDefault(),this.checkForm()&&this.$emit("properties-commit",this.objt)},onCancel:function(t){t.preventDefault(),this.$router.push({name:"home"})},addDefinition:function(){this.selectedDefinition["definition"]={name:"",value:""},this.selectedDefinition["update"]=!1,this.$refs.ncDialog.show()},viewDefinition:function(t,e){this.selectedDefinition["index"]=e,this.selectedDefinition["definition"]=JSON.parse(d()(t)),this.selectedDefinition["update"]=!0,this.$refs.ncDialog.show()},updateDefinition:function(t){t.update?this.$set(this.objt.definitions,t.index,t.definition):this.objt.definitions.push(t.definition)},deleteDefinition:function(t){this.objt.definitions=this.objt.definitions.filter(function(e){return e.name!=t.name&&e.value!=t.value})},addContributor:function(){this.selectedContributor["contributor"]={firstName:"",surname:"",affiliation:"",role:"Participant"},this.selectedContributor["update"]=!1,this.$refs.contributorDialog.show()},viewContributor:function(t,e){this.selectedContributor["index"]=e,this.selectedContributor["contributor"]=JSON.parse(d()(t)),this.selectedContributor["update"]=!0,this.$refs.contributorDialog.show()},deleteContributor:function(t){this.objt.contributions=this.objt.contributions.filter(function(e){return e.firstName!=t.firstName&&e.surname!=t.surname})},updateContributor:function(t){t.update?this.$set(this.objt.contributions,t.index,t.contributor):this.objt.contributions.push(t.contributor)},addRevision:function(){this.$refs.revisionDialog.show()},updateRevision:function(t){var e=0==this.objt.revisions.length?1:this.objt.revisions.length+1,o=(new Date).toISOString();this.objt.revisions.push({id:e,date:o,description:t})},imageClicked:function(){this.$refs.richpictureupload.click()},imageSelected:function(t){var e=this;t.preventDefault();var o=new FormData;o.append("file",this.$refs.richpictureimageupload.files[0]);var i=this.$store.state.url+"/api/upload/image?session_id="+this.$store.state.session;s.a.post(i,o).then(function(t){e.objt.theImage=t.data.filename,a["a"].$emit("operation-success",t.data.message)}).catch(function(t){a["a"].$emit("operation-failure",t),console.log(t)})},checkForm:function(){return this.errors=[],0==this.objt.projectName.length&&this.errors.push("Project name is required"),!this.errors.length}}},p=f,m=o("2877"),h=Object(m["a"])(p,l,u,!1,null,null,null),j=h.exports,v={computed:{bcItems:function(){return[{text:"Home",to:{name:"home"}},{text:"Properties",to:{name:"propertiesmodel"}}]}},components:{PropertiesModel:j},data:function(){return{objt:{projectName:"New project",richPicture:"",projectScope:"",definitions:[],projectGoals:"",contributions:[],projectBackground:"",revisions:[]}}},beforeRouteEnter:function(t,e,o){var i="/api/settings";s.a.get(i,{baseURL:c["a"].state.url,params:{session_id:c["a"].state.session}}).then(function(t){o(function(e){e.objt=t.data})}).catch(function(t){a["a"].$emit("operation-failure",t)})},methods:{commitProperties:function(t){var e=this,o=this.$store.state.url+"/api/settings?session_id="+this.$store.state.session;s.a.put(o,{session_id:this.$store.state.session,object:t}).then(function(t){a["a"].$emit("operation-success",t.data.message),e.$router.push({name:"home"})}).catch(function(t){a["a"].$emit("operation-failure",t)})}}},g=v,w=Object(m["a"])(g,i,n,!1,null,null,null);e["default"]=w.exports},f499:function(t,e,o){t.exports=o("a21f")}}]);
//# sourceMappingURL=chunk-28d76a41.85c482b3.js.map