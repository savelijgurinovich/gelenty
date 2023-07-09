"use strict";(self["webpackChunkoptinmonster_wordpress_plugin_vue_app"]=self["webpackChunkoptinmonster_wordpress_plugin_vue_app"]||[]).push([[900],{12225:function(t,e,i){i.r(e),i.d(e,{default:function(){return l}});var a=function(){var t=this,e=t._self._c;return t.routeId?e("core-page",{staticClass:"omapi-campaign-settings"},[e("router-link",{staticClass:"omapi-link-arrow-before omapi-button__link",attrs:{to:{name:"campaigns"}}},[t._v("Return to Campaigns List")]),t.isLoading?e("core-loading",[e("h1",[t._v("Loading...")])]):e("form",{on:{submit:function(e){return e.preventDefault(),t.save.apply(null,arguments)}}},[e("h1",[e("span",[t._v(t._s(t.title))])]),e("common-alerts",{attrs:{id:"om-notification-campaign",alerts:t.alerts}}),e("div",{staticClass:"omapi-card__flex omapi-campaign-settings-sections",class:{disabled:t.isDisabled}},[e("common-card",{staticClass:"omapi-campaign-settings__wrapper",attrs:{size:"two-thirds",title:"WordPress Output Settings","content-class":"omapi-card__border","footer-class":"omapi-card__child"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("WordPress Output Settings")]},proxy:!0},{key:"footer",fn:function(){return[t.hasError?t._e():e("campaigns-advanced-settings",{attrs:{campaign:t.campaign}},[e("core-save-button",{attrs:{color:"green",disabled:!t.changed,saving:t.saving}})],1),!t.hasError&&t.isWooActive?e("campaigns-woo-settings",{attrs:{campaign:t.campaign}},[e("core-save-button",{attrs:{color:"green",disabled:!t.changed,saving:t.saving}})],1):t._e(),!t.hasError&&t.isEddActive?e("campaigns-edd-settings",{attrs:{campaign:t.campaign}},[e("core-save-button",{attrs:{color:"green",disabled:!t.changed,saving:t.saving}})],1):t._e(),!t.hasError&&t.memberpress.isActive?e("campaigns-member-press-settings",{attrs:{campaign:t.campaign}},[e("core-save-button",{attrs:{color:"green",disabled:!t.changed,saving:t.saving}})],1):t._e()]},proxy:!0}],null,!1,3830435280)},[t.hasError?e("p",{staticClass:"text-setting"},[t._v("An error was encountered.")]):[e("p",{staticClass:"text-setting"},[t._v(" Control when and where your campaigns are displayed once the targeting conditions are met. ")]),"Inline"===t.campaignType?e("campaigns-inline-settings",{attrs:{campaign:t.campaign}}):t._e(),t.hasMailPoet?e("campaigns-mailpoet-settings",{attrs:{campaign:t.campaign}}):t._e()]],2),e("campaigns-right-column",{attrs:{"campaign-id":t.id,changed:t.changed,saving:t.saving,"new-status":t.newStatus,"status-text":t.statusText},on:{updateStatus:t.onChangeStatus}})],1)],1)],1):t._e()},n=[],s=i(86080),r=(i(41539),i(38862),i(27361)),o=i.n(r),c=i(20629),g=i(64074),h=i(87475),u={mixins:[g.Y],beforeRouteLeave:function(t,e,i){if(!this.changed||confirm("You have unsaved changes. Are you sure you want to lose these changes?"))return this.resetCampaign(),i()},data:function(){return{changed:!1,orig:!1,origMeta:{},newStatus:"",saving:!1}},computed:(0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)({},(0,c.rn)(["alerts"])),(0,c.rn)("campaigns",["campaigns"])),(0,c.Se)("campaigns",["getCampaign","hasError"])),(0,c.Se)("wp",["hasMailPoet","isWooActive","isEddActive","memberpress"])),(0,c.Se)(["isFetched","isFetching"])),{},{routeId:function(){return this.$get("$route.params.campaignId","")},campaign:function(){return this.getCampaign(this.routeId)},fetchedCampaign:function(){return this.isFetched(this.routeId)},fetchingCampaign:function(){return this.isFetching(this.routeId)},shouldFetch:function(){return!this.fetchingCampaign&&!this.fetchedCampaign},isLoading:function(){return!this.showAlerts&&(!this.fetchedCampaign||this.$store.getters.isLoading(["campaigns","me"]))},isDisabled:function(){return!this.hasError&&(this.isLoading||!this.isFetched("wpResources"))},showAlerts:function(){return Boolean(this.alerts.length)},title:function(){return this.$get("campaign.name","No Campaign Found")},statusText:function(){var t="active"!==this.newStatus;return this.isSplit?t?"Published":"Draft":t?this.settingEnabled?"Pending":"Draft":this.settingEnabled?"Published":"Pending"}}),watch:{isLoading:function(t){t||this.fetch()},title:function(){this.updateTitle()},campaign:function(t,e){if(this.fetchedCampaign&&o()(e,"wp"))if(this.orig||(this.orig=this.getMetaString(e)),this.newStatus===this.campaignStatus){t=this.getMetaString(t);var i=(0,h.r3)(t,this.orig);this.changed=-1!==i}else this.changed=!0},newStatus:function(){this.changed||(this.changed=this.newStatus!==this.campaignStatus)}},mounted:function(){this.routeId&&(this.fetch(),this.updateTitle(),window.addEventListener("beforeunload",this.maybePreventExit))},beforeDestroy:function(){window.removeEventListener("beforeunload",this.maybePreventExit)},methods:(0,s.Z)((0,s.Z)((0,s.Z)({},(0,c.nv)("campaigns",["fetchCampaign","fetchWpDataForCampaign","saveWordPress"])),(0,c.OI)(["fetching","fetched"])),{},{fetch:function(){var t=this;this.fetchingCampaign||(this.fetchedCampaign||this.fetching(this.routeId),this.fetchCampaign({campaignId:this.routeId}).then((function(){return t.fetchWpData()}))["catch"]((function(){})))},fetchWpData:function(){var t=this,e=this.fetchedCampaign?Promise.resolve():this.fetchWpDataForCampaign({campaignId:this.routeId});return e.then((function(){return t.fetched(t.routeId)})).then((function(){return t.afterFetched()}))["catch"]((function(){}))},save:function(){var t=this;this.$store.commit("clearAlerts"),this.saving=!0,this.setStatus({campaigns:[this.id],status:this.newStatus}),this.saveWordPress({campaignId:this.id,settings:this.getSettings()}).then((function(){t.fetchWpData()}))},afterFetched:function(){this.orig=this.getMetaString(this.campaign),this.origMeta=this.$get("campaign.wp.post_meta",{}),this.newStatus=this.campaignStatus,this.changed=!1,this.saving=!1},updateTitle:function(){var t=this.$get("campaign.name",this.id);t&&(this.$store.dispatch("setTitle",{title:"Output Settings: ".concat(t),setBannerTitle:!1}),this.$store.commit("setBannerTitle","Campaign Output Settings"))},getMetaString:function(t){var e=this.getSettings(o()(t,"wp.post_meta",{}));return JSON.stringify(e)+this.newStatus},maybePreventExit:function(t){if(this.changed)return t.preventDefault(),t.returnValue="You have unsaved changes. Are you sure you want to lose these changes?",t.returnValue},resetCampaign:function(){this.newStatus=this.campaignStatus,this.updateCampaignMeta({campaignId:this.id,meta:this.origMeta})},onChangeStatus:function(t){switch(t){case"Pending":this.toggleEmbed("active"!==this.newStatus);break;case"Published":this.newStatus="active",this.toggleEmbed(!0);break;case"Draft":this.newStatus="paused",this.toggleEmbed(!1);break;default:break}},toggleEmbed:function(t){t!==this.settingEnabled&&(this.settingEnabled=t)}})},p=u,d=i(1001),m=(0,d.Z)(p,a,n,!1,null,null,null),l=m.exports}}]);
//# sourceMappingURL=campaign-edit-legacy.397583d7.js.map