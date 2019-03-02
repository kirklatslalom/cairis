(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2614f40f"],{1854:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-modal",{ref:"ucDialog",attrs:{"ok-only":"",title:e.dialogTitle}},[void 0!=e.objt?o("b-container",[o("b-form-group",{attrs:{label:"Name","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theName"}},[o("b-form-input",{attrs:{readonly:"",id:"theName"},model:{value:e.objt.theName,callback:function(t){e.$set(e.objt,"theName",t)},expression:"objt.theName"}})],1),o("b-form-group",{attrs:{label:"Description","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theDescription"}},[o("b-form-textarea",{attrs:{id:"theDescription",type:"text",rows:2,"max-rows":4,readonly:""},model:{value:e.objt.theDescription,callback:function(t){e.$set(e.objt,"theDescription",t)},expression:"objt.theDescription"}})],1),o("b-table",{attrs:{bordered:"",small:"",items:e.actors,fields:e.actorTableFields}}),o("b-form-group",{attrs:{label:"Preconditions","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"thePreconditions"}},[o("b-form-textarea",{attrs:{id:"thePreconditions",type:"text",rows:2,"max-rows":4,readonly:""},model:{value:e.preconditions,callback:function(t){e.preconditions=t},expression:"preconditions"}})],1),o("b-table",{attrs:{bordered:"",small:"",items:e.steps,fields:e.stepTableFields}}),o("b-form-group",{attrs:{label:"Postconditions","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"thePostconditions"}},[o("b-form-textarea",{attrs:{id:"thePostconditions",type:"text",rows:2,"max-rows":4,readonly:""},model:{value:e.postconditions,callback:function(t){e.postconditions=t},expression:"postconditions"}})],1)],1):e._e()],1)},a=[],i={name:"use-case-modal",props:{environment:String,usecase:Object},data:function(){return{theEnvironmentName:this.environment,objt:this.usecase,actorTableFields:{actor:{label:"Actor"}},stepTableFields:{no:{label:"No"},step:{label:"Step"}}}},watch:{usecase:"updateData"},computed:{dialogTitle:function(){return(void 0!=this.objt?this.objt.theName:"")+" Use Case"},actors:function(){return void 0!=this.objt?this.objt.theActors.map(function(e){return{actor:e}}):[]},preconditions:function(){var e=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(t){return t.theEnvironmentName==e.theEnvironmentName})[0].thePreCond:""},postconditions:function(){var e=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(t){return t.theEnvironmentName==e.theEnvironmentName})[0].thePostCond:""},steps:function(){var e=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(t){return t.theEnvironmentName==e.theEnvironmentName})[0].theSteps.map(function(e,t){return{no:t+1,step:e.theStepText}}):[]}},methods:{show:function(){this.$refs.ucDialog.show()},updateData:function(){this.objt=this.usecase,this.theEnvironmentName=this.environment}}},s=i,r=o("2877"),l=Object(r["a"])(s,n,a,!1,null,null,null);t["a"]=l.exports},"1a8a":function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-modal",{ref:"attackerDialog",attrs:{"ok-only":"",title:e.dialogTitle}},[void 0!=e.objt?o("b-container",[o("b-form-group",{attrs:{label:"Description","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theDescription"}},[o("b-form-textarea",{attrs:{id:"theDescription",type:"text",rows:4,"max-rows":6,readonly:""},model:{value:e.objt.theDescription,callback:function(t){e.$set(e.objt,"theDescription",t)},expression:"objt.theDescription"}})],1),o("b-table",{attrs:{bordered:"",small:"",items:e.roles,fields:e.roleTableFields}}),o("b-table",{attrs:{bordered:"",small:"",items:e.motives,fields:e.motiveTableFields}}),o("b-table",{attrs:{bordered:"",small:"",items:e.capabilities,fields:e.capabilityTableFields}})],1):e._e()],1)},a=[],i={name:"attacker-modal",props:{environment:String,attacker:Object},data:function(){return{theEnvironmentName:this.environment,objt:this.attacker,roleTableFields:{name:{label:"Role"}},motiveTableFields:{name:{label:"Motivation"}},capabilityTableFields:{name:{label:"Capability"},value:{label:"Value"}}}},watch:{attacker:"updateData"},computed:{dialogTitle:function(){return(void 0!=this.objt?this.objt.theName:"")+" Attacker"},roles:function(){var e=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(t){return t.theEnvironmentName==e.theEnvironmentName})[0].theRoles.map(function(e){return{name:e}}):[]},motives:function(){var e=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(t){return t.theEnvironmentName==e.theEnvironmentName})[0].theMotives.map(function(e){return{name:e}}):[]},capabilities:function(){var e=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(t){return t.theEnvironmentName==e.theEnvironmentName})[0].theCapabilities:[]}},methods:{show:function(){this.$refs.attackerDialog.show()},updateData:function(){this.objt=this.attacker,this.theEnvironmentName=this.environment}}},s=i,r=o("2877"),l=Object(r["a"])(s,n,a,!1,null,null,null);t["a"]=l.exports},"1ccb":function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-modal",{ref:"assetDialog",attrs:{"ok-only":"",title:e.dialogTitle}},[void 0!=e.objt?o("b-container",[o("b-form-group",{attrs:{label:"Type","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theType"}},[o("b-form-input",{attrs:{readonly:"",id:"theType"},model:{value:e.objt.theType,callback:function(t){e.$set(e.objt,"theType",t)},expression:"objt.theType"}})],1),o("b-form-group",{attrs:{label:"Description","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theDescription"}},[o("b-form-textarea",{attrs:{id:"theDescription",type:"text",rows:2,"max-rows":4,readonly:""},model:{value:e.objt.theDescription,callback:function(t){e.$set(e.objt,"theDescription",t)},expression:"objt.theDescription"}})],1),o("b-form-group",{attrs:{label:"Significance","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theSignificance"}},[o("b-form-textarea",{attrs:{id:"theSignificance",type:"text",rows:2,"max-rows":4,readonly:""},model:{value:e.objt.theSignificance,callback:function(t){e.$set(e.objt,"theSignificance",t)},expression:"objt.theSignificance"}})],1),o("b-table",{attrs:{bordered:"",small:"",items:e.notNone,fields:e.propTableFields}})],1):e._e()],1)},a=[],i={name:"asset-modal",props:{environment:String,asset:Object},data:function(){return{theEnvironmentName:this.environment,objt:this.asset,propTableFields:{name:{label:"Property"},value:{label:"Value"},rationale:{label:"Rationale"}}}},watch:{asset:"updateData"},computed:{dialogTitle:function(){return(void 0!=this.objt?this.objt.theName:"")+" Asset"},notNone:function(){var e=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(t){return t.theEnvironmentName==e.theEnvironmentName})[0].theProperties.filter(function(e){return"None"!=e.value}):[]}},methods:{show:function(){this.$refs.assetDialog.show()},updateData:function(){this.objt=this.asset,this.theEnvironmentName=this.environment}}},s=i,r=o("2877"),l=Object(r["a"])(s,n,a,!1,null,null,null);t["a"]=l.exports},"2ff8":function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-modal",{ref:"mcDialog",attrs:{"ok-only":"",title:e.dialogTitle}},[void 0!=e.objt?o("b-container",[o("b-form-textarea",{attrs:{id:"theNarrative",type:"text",rows:10,"max-rows":14,readonly:""},model:{value:e.objt.theDescription,callback:function(t){e.$set(e.objt,"theDescription",t)},expression:"objt.theDescription"}})],1):e._e()],1)},a=[],i={name:"misuse-case-modal",props:{environment:String,misusecase:Object},data:function(){return{theEnvironmentName:this.environment,objt:this.misusecase}},watch:{misusecase:"updateData"},computed:{dialogTitle:function(){return(void 0!=this.objt?this.objt.theName:"")+" Misuse Case"}},methods:{show:function(){this.$refs.mcDialog.show()},updateData:function(){this.objt=this.misusecase,this.theEnvironmentName=this.environment}}},s=i,r=o("2877"),l=Object(r["a"])(s,n,a,!1,null,null,null);t["a"]=l.exports},"4f11":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"taskmodelview"},[o("b-breadcrumb",{attrs:{items:e.bcItems}}),o("task-model")],1)},a=[],i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"taskmodel"},[""!=e.theEnvironmentName?o("asset-modal",{ref:"assetDialog",attrs:{environment:this.theEnvironmentName,asset:this.theSelectedObject}}):e._e(),""!=e.theEnvironmentName?o("attacker-modal",{ref:"attackerDialog",attrs:{environment:this.theEnvironmentName,attacker:this.theSelectedObject}}):e._e(),""!=e.theEnvironmentName?o("misuse-case-modal",{ref:"mcDialog",attrs:{environment:this.theEnvironmentName,misusecase:this.theSelectedObject}}):e._e(),""!=e.theEnvironmentName?o("persona-modal",{ref:"personaDialog",attrs:{environment:this.theEnvironmentName,persona:this.theSelectedObject}}):e._e(),e.theEnvironmentName?o("role-modal",{ref:"roleDialog",attrs:{environment:this.theEnvironmentName,role:this.theSelectedObject}}):e._e(),e.theEnvironmentName?o("task-modal",{ref:"taskDialog",attrs:{environment:this.theEnvironmentName,task:this.theSelectedObject}}):e._e(),e.theEnvironmentName?o("use-case-modal",{ref:"ucDialog",attrs:{environment:this.theEnvironmentName,usecase:this.theSelectedObject}}):e._e(),o("b-card",{attrs:{"no-body":""}},[o("b-container",{attrs:{fluid:""}},[o("b-row",[o("b-col",[o("b-form-group",{attrs:{label:"Environment","label-for":"taskModelEnvironment","label-cols":4}},[o("dimension-select",{ref:"taskModelEnvironment",attrs:{id:"taskModelEnvironment",dimension:"environment"},on:{"dimension-select-change":e.environmentSelected}})],1)],1),""!=e.theEnvironmentName?o("b-col",[o("b-form-group",{attrs:{label:"Task","label-for":"taskModelTask","label-cols":2}},[o("dimension-select",{ref:"taskModelTask",attrs:{id:"taskModelTask",dimension:"task",environment:e.theEnvironmentName,initial:"all",includeall:""},on:{"dimension-select-change":e.taskSelected}})],1)],1):e._e(),o("b-col",{directives:[{name:"show",rawName:"v-show",value:""!=e.theEnvironmentName,expression:"theEnvironmentName != ''"}]},[o("b-form-group",{attrs:{label:"Misuse Case","label-form":"taskModelMisuseCase","label-cols":4}},[o("dimension-select",{ref:"taskModelMisuseCase",attrs:{id:"taskModelMisuseCase",dimension:"misusecase",environment:e.theEnvironmentName,initial:"all",includeall:""},on:{"dimension-select-change":e.misuseCaseSelected}})],1)],1)],1)],1)],1),""!=e.theEnvironmentName?o("graphical-model",{attrs:{api:e.taskModelURI},on:{"graphical-model-url":e.nodeClicked}}):e._e()],1)},s=[],r=o("bc3a"),l=o.n(r),c=o("e342"),h=o("1864"),m=o("1ccb"),b=o("1a8a"),u=o("2ff8"),d=o("f992"),f=o("a395"),p=o("8ff2"),v=o("1854"),j=o("61da"),g={computed:{taskModelURI:function(){return"/api/tasks/model/environment/"+this.theEnvironmentName+"/task/"+this.theTaskName+"/misusecase/"+this.theMisuseCaseName}},data:function(){return{theEnvironmentName:"",theTaskName:"all",theMisuseCaseName:"all",theSelectedObject:null}},components:{DimensionSelect:h["default"],GraphicalModel:c["a"],AssetModal:m["a"],AttackerModal:b["a"],MisuseCaseModal:u["a"],PersonaModal:d["a"],RoleModal:f["a"],TaskModal:p["a"],UseCaseModal:v["a"]},methods:{nodeClicked:function(e){var t=this,o=e.slice(5).substring(0,e.slice(5).indexOf("/"));-1!=["assets","attackers","misusecases","personas","roles","tasks","usecases"].indexOf(o)&&l.a.get(e,{baseURL:this.$store.state.url,params:{session_id:this.$store.state.session}}).then(function(e){t.theSelectedObject=e.data,"assets"==o?t.$refs.assetDialog.show():"attackers"==o?t.$refs.attackerDialog.show():"misusecases"==o?t.$refs.mcDialog.show():"personas"==o?t.$refs.personaDialog.show():"roles"==o?t.$refs.roleDialog.show():"tasks"==o?t.$refs.taskDialog.show():"usecases"==o&&t.$refs.ucDialog.show()}).catch(function(e){j["a"].$emit("operation-failure",e)})},environmentSelected:function(e){this.theEnvironmentName=e,void 0!=this.$refs.taskModelTask&&(this.theTaskName="all",this.theMisuseCaseName="all",this.$refs.taskModelTask.selected=this.theTaskName,this.$refs.taskModelMisuseCase.selected=this.theMisuseCaseName)},taskSelected:function(e){this.theTaskName=e},misuseCaseSelected:function(e){this.theMisuseCaseName=e}}},k=g,N=o("2877"),x=Object(N["a"])(k,i,s,!1,null,null,null),E=x.exports,w={computed:{bcItems:function(){return[{text:"Home",to:{name:"home"}},{text:"Task Model",to:{name:"taskmodel"}}]}},components:{TaskModel:E}},D=w,y=Object(N["a"])(D,n,a,!1,null,null,null);t["default"]=y.exports},"8ff2":function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-modal",{ref:"taskDialog",attrs:{"ok-only":"",title:e.dialogTitle}},[void 0!=e.objt?o("b-container",[o("b-form-group",{attrs:{label:"Name","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theName"}},[o("b-form-input",{attrs:{readonly:"",id:"theName"},model:{value:e.objt.theName,callback:function(t){e.$set(e.objt,"theName",t)},expression:"objt.theName"}})],1),o("b-tabs",[o("b-tab",{attrs:{title:"Summary",active:""}},[o("b-form-group",{attrs:{label:"Author","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theAuthor"}},[o("b-form-input",{attrs:{readonly:"",id:"theAuthor"},model:{value:e.objt.theAuthor,callback:function(t){e.$set(e.objt,"theAuthor",t)},expression:"objt.theAuthor"}})],1),o("b-form-group",{attrs:{label:"Objective","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theObjective"}},[o("b-form-textarea",{attrs:{id:"theObjective",type:"text",rows:2,"max-rows":4,readonly:""},model:{value:e.objt.theObjective,callback:function(t){e.$set(e.objt,"theObjective",t)},expression:"objt.theObjective"}})],1),o("b-form-group",{attrs:{label:"Dependencies","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theDependencies"}},[o("b-form-textarea",{attrs:{id:"theDependencies",type:"text",rows:2,"max-rows":4,readonly:""},model:{value:e.dependencies,callback:function(t){e.dependencies=t},expression:"dependencies"}})],1)],1),o("b-tab",{attrs:{title:"Narrative"}},[o("b-form-textarea",{attrs:{id:"theNarrative",type:"text",rows:4,"max-rows":6,readonly:""},model:{value:e.narrative,callback:function(t){e.narrative=t},expression:"narrative"}})],1),o("b-tab",{attrs:{title:"Concerns"}},[o("b-table",{attrs:{bordered:"",small:"",items:e.concerns,fields:e.concernTableFields}})],1),o("b-tab",{attrs:{title:"Participants"}},[o("b-table",{attrs:{bordered:"",small:"",items:e.participants,fields:e.participantTableFields}})],1)],1)],1):e._e()],1)},a=[],i={name:"task-modal",props:{environment:String,task:Object},data:function(){return{theEnvironmentName:this.environment,objt:this.task,concernTableFields:{concern:{label:"Asset"}},participantTableFields:{thePersona:{label:"Persona"},theDuration:{label:"Duration"},theFrequency:{label:"Frequency"},theDemands:{label:"Demands"},theGoalConflict:{label:"Goal Conflict"}},durationLookup:{Low:"Seconds",Medium:"Minutes",High:"Hours or Longer"},frequencyLookup:{Low:"Hours or more",Medium:"Daily - Weekly",High:"Monthly or less"}}},watch:{task:"updateData"},computed:{dialogTitle:function(){return(void 0!=this.objt?this.objt.theName:"")+" Task"},dependencies:function(){var e=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(t){return t.theEnvironmentName==e.theEnvironmentName})[0].theDependencies:""},narrative:function(){var e=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(t){return t.theEnvironmentName==e.theEnvironmentName})[0].theNarrative:""},concerns:function(){var e=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(t){return t.theEnvironmentName==e.theEnvironmentName})[0].theAssets.map(function(e){return{concern:e}}):[]},participants:function(){var e=this;return void 0!=this.objt&&this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.filter(function(t){return t.theEnvironmentName==e.theEnvironmentName})[0].thePersonas.map(function(t){return{thePersona:t.thePersona,theDuration:e.durationLookup[t.theDuration],theFrequency:e.frequencyLookup[t.theFrequency],theDemands:t.theDemands,theGoalConflict:t.theGoalConflict}}):[]}},methods:{show:function(){this.$refs.taskDialog.show()},updateData:function(){this.objt=this.task,this.theEnvironmentName=this.environment}}},s=i,r=o("2877"),l=Object(r["a"])(s,n,a,!1,null,null,null);t["a"]=l.exports},a395:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-modal",{ref:"roleDialog",attrs:{"ok-only":"",title:e.dialogTitle}},[void 0!=e.objt?o("b-container",[o("b-form-group",{attrs:{label:"Name","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theName"}},[o("b-form-input",{attrs:{readonly:"",id:"theName"},model:{value:e.objt.theName,callback:function(t){e.$set(e.objt,"theName",t)},expression:"objt.theName"}})],1),o("b-form-group",{attrs:{label:"Type","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theType"}},[o("b-form-input",{attrs:{readonly:"",id:"theType"},model:{value:e.objt.theType,callback:function(t){e.$set(e.objt,"theType",t)},expression:"objt.theType"}})],1),o("b-form-group",{attrs:{label:"Short Code","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theShortCode"}},[o("b-form-input",{attrs:{readonly:"",id:"theShortCode"},model:{value:e.objt.theShortCode,callback:function(t){e.$set(e.objt,"theShortCode",t)},expression:"objt.theShortCode"}})],1),o("b-form-group",{attrs:{label:"Description","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theDescription"}},[o("b-form-textarea",{attrs:{id:"theDescription",type:"text",rows:2,"max-rows":4,readonly:""},model:{value:e.objt.theDescription,callback:function(t){e.$set(e.objt,"theDescription",t)},expression:"objt.theDescription"}})],1)],1):e._e()],1)},a=[],i={name:"role-modal",props:{environment:String,role:Object},data:function(){return{theEnvironmentName:this.environment,objt:this.role}},watch:{role:"updateData"},computed:{dialogTitle:function(){return(void 0!=this.objt?this.objt.theName:"")+" Role"}},methods:{show:function(){this.$refs.roleDialog.show()},updateData:function(){this.objt=this.role,this.theEnvironmentName=this.environment}}},s=i,r=o("2877"),l=Object(r["a"])(s,n,a,!1,null,null,null);t["a"]=l.exports},f992:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-modal",{ref:"personaDialog",attrs:{"ok-only":"",title:e.dialogTitle}},[void 0!=e.objt?o("b-container",[o("b-tabs",[o("b-tab",{attrs:{title:"Activities",active:""}},[o("b-form-textarea",{attrs:{type:"text",rows:4,"max-rows":8,required:""},model:{value:e.objt.theActivities,callback:function(t){e.$set(e.objt,"theActivities",t)},expression:"objt.theActivities"}})],1),o("b-tab",{attrs:{title:"Attitudes"}},[o("b-form-textarea",{attrs:{type:"text",rows:4,"max-rows":8,required:""},model:{value:e.objt.theAttitudes,callback:function(t){e.$set(e.objt,"theAttitudes",t)},expression:"objt.theAttitudes"}})],1),o("b-tab",{attrs:{title:"Aptitudes"}},[o("b-form-textarea",{attrs:{type:"text",rows:4,"max-rows":8,required:""},model:{value:e.objt.theAptitudes,callback:function(t){e.$set(e.objt,"theAptitudes",t)},expression:"objt.theAptitudes"}})],1),o("b-tab",{attrs:{title:"Motivations"}},[o("b-form-textarea",{attrs:{type:"text",rows:4,"max-rows":8,required:""},model:{value:e.objt.theMotivations,callback:function(t){e.$set(e.objt,"theMotivations",t)},expression:"objt.theMotivations"}})],1),o("b-tab",{attrs:{title:"Skills"}},[o("b-form-textarea",{attrs:{type:"text",rows:4,"max-rows":8,required:""},model:{value:e.objt.theSkills,callback:function(t){e.$set(e.objt,"theSkills",t)},expression:"objt.theSkills"}})],1),o("b-tab",{attrs:{title:"Narrative"}},[o("b-form-textarea",{attrs:{type:"text",rows:4,"max-rows":8,required:""},model:{value:e.narrative,callback:function(t){e.narrative=t},expression:"narrative"}})],1)],1)],1):e._e()],1)},a=[],i={name:"persona-modal",props:{environment:String,persona:Object},data:function(){return{theEnvironmentName:this.environment,objt:this.persona}},watch:{persona:"updateData"},computed:{dialogTitle:function(){return(void 0!=this.objt?this.objt.theName:"")+" Persona"},narrative:function(){var e=this;return void 0!=this.objt?this.objt.theEnvironmentProperties.filter(function(t){return t.theEnvironmentName==e.theEnvironmentName})[0].theNarrative:""}},methods:{show:function(){this.$refs.personaDialog.show()},updateData:function(){this.objt=this.persona,this.theEnvironmentName=this.environment}}},s=i,r=o("2877"),l=Object(r["a"])(s,n,a,!1,null,null,null);t["a"]=l.exports}}]);
//# sourceMappingURL=chunk-2614f40f.3c673378.js.map