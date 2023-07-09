import{a as c,m as p}from"./vuex.esm.8fdeb4b6.js";import{A as u}from"./WpTable.320da53b.js";import"./default-i18n.3a91e0e5.js";import"./constants.0d8c074c.js";import{n as i}from"./_plugin-vue2_normalizer.61652a7c.js";import"./index.ec9852b3.js";import"./SaveChanges.e40a9083.js";import{A as _,T as d}from"./TitleDescription.79d5e4f5.js";import{B as o}from"./RadioToggle.e6e54396.js";import{C as m}from"./Card.db2ec99d.js";import{C as h}from"./Tabs.a309f2c7.js";import{C as g}from"./ProBadge.66f48bdc.js";import{C as l}from"./SettingsRow.edbb3005.js";import{C as $,S as f}from"./Schema.ccd096a0.js";import{B as b}from"./Checkbox.60ba2f56.js";import{C as v}from"./Blur.f36c594d.js";import{C as S}from"./HtmlTagsEditor.70d3cf0a.js";import{G as y,a as T}from"./Row.830f6397.js";import{R as A}from"./RequiredPlans.3ea0b33e.js";import{C}from"./Index.21aaf27c.js";import"./helpers.de7566d0.js";import"./postContent.616e0b04.js";import"./Caret.d93b302e.js";import"./cleanForSlug.51ef7354.js";import"./isArrayLikeObject.9b4b678d.js";import"./html.14f2a8b9.js";import"./Index.5f7ddb17.js";import"./JsonValues.870a4901.js";import"./MaxCounts.12b45bab.js";import"./RobotsMeta.5a1b6c31.js";import"./index.4b67d3e2.js";import"./_commonjsHelpers.f84db168.js";import"./GoogleSearchPreview.853cda22.js";import"./Tooltip.68a8a92b.js";import"./Slide.15a07930.js";import"./TruSeoScore.339d22e1.js";import"./Information.93f80cbf.js";import"./Textarea.ce149d81.js";import"./Checkmark.f26f6201.js";import"./Editor.3e312d73.js";import"./UnfilteredHtml.7bdb1712.js";const x={};var k=function(){var t=this,e=t._self._c;return e("div")},w=[],U=i(x,k,w,!1,null,null,null,null);const O=U.exports,P={components:{BaseCheckbox:b,BaseRadioToggle:o,CoreBlur:v,CoreHtmlTagsEditor:S,CoreSettingsRow:l,GridColumn:y,GridRow:T},data(){return{stripPunctuationSettings:[{value:"dashes",label:this.$t.__("Dashes (-)",this.$td)},{value:"underscores",label:this.$t.__("Underscores (_)",this.$td)},{value:"numbers",label:this.$t.__("Numbers (0-9)",this.$td)},{value:"plus",label:this.$t.__("Plus (+)",this.$td)},{value:"apostrophe",label:this.$t.__("Apostrophe (')",this.$td)},{value:"pound",label:this.$t.__("Pound (#)",this.$td)},{value:"ampersand",label:this.$t.__("Ampersand (&)",this.$td)}],strings:{attributeFormat:this.$t.sprintf(this.$t.__("%1$s Format",this.$td),this.$t.__("Title",this.$td)),clickToAddTags:this.$t.sprintf(this.$t.__("Click on the tags below to insert variables into your %1$s attribute.",this.$td),this.$t.__("Title",this.$td).toLowerCase()),stripPunctuation:this.$t.__("Strip Punctuation",this.$td),punctuationCharactersToKeep:this.$t.__("Punctuation Characters to Keep:",this.$td),casing:this.$t.__("Casing",this.$td),casingDescription:this.$t.__("Choose which casing should be applied to the attribute.",this.$td),wordsToStrip:this.$t.__("Words to Strip",this.$td),autogenerate:this.$t.sprintf(this.$t.__("Autogenerate %1$s on Upload",this.$td),this.$t.__("Title",this.$td))},tags:{title:{context:"imageSeoTitle",default:["image_title","separator_sa","site_title"]},altTag:{context:"imageSeoAlt",default:["alt_tag","separator_sa","site_title"]},caption:{context:"imageSeoCaption",default:["attachment_caption","separator_sa","site_title"]},description:{context:"imageSeoDescription",default:["attachment_description","separator_sa","site_title"]}},casings:{lowerCase:{label:this.$t.__("Lower Case",this.$td),description:this.$t.__("All letters are converted to lower case (small) letters.",this.$td)},titleCase:{label:this.$t.__("Title Case",this.$td),description:this.$t.__("Major words are capitalized and minor words remain in their original casing.",this.$td)},sentenceCase:{label:this.$t.__("Sentence Case",this.$td),description:this.$t.__("The first word of each sentence starts with a capital.",this.$td)}}}},props:{activeTab:Object}};var L=function(){var t=this,e=t._self._c;return e("core-blur",[e("div",{staticClass:"aioseo-sa-image-seo"},[["caption","description"].includes("title")?e("core-settings-row",{attrs:{name:t.strings.autogenerate,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"autogenerate",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.enabled,value:!0}]}})]},proxy:!0}],null,!1,3097604449)}):t._e(),e("core-settings-row",{attrs:{name:t.strings.attributeFormat},scopedSlots:t._u([{key:"content",fn:function(){return[e("core-html-tags-editor",{attrs:{"line-numbers":!1,single:"","tags-context":t.tags.title.context,"default-tags":t.tags.title.default},scopedSlots:t._u([{key:"tags-description",fn:function(){return[t._v(" "+t._s(t.strings.clickToAddTags)+" ")]},proxy:!0}])})]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.strings.stripPunctuation,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"stripPunctuation",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.enabled,value:!0}]}}),e("div",{staticClass:"global-robots-settings aioseo-description"},[e("strong",[t._v(t._s(t.strings.punctuationCharactersToKeep))]),e("grid-row",{staticClass:"settings"},t._l(t.stripPunctuationSettings,function(a,n){return e("grid-column",{key:n,attrs:{xl:"3",md:"4",sm:"6"}},[e("base-checkbox",{attrs:{size:"medium"}},[t._v(" "+t._s(a.label)+" ")])],1)}),1)],1)]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.strings.casing,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"casing",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:"",activeClass:"dark"},{label:t.casings.lowerCase.label,value:"lower"},{label:t.casings.titleCase.label,value:"title"},{label:t.casings.sentenceCase.label,value:"sentence"}]}}),e("div",{staticClass:"aioseo-description"},[e("span",[t._v(t._s(t.strings.casingDescription))]),e("br"),e("ul",{staticClass:"casing-options"},t._l(t.casings,function(a,n){return e("li",{key:n},[e("span",[t._v(t._s(a.label))]),e("span",[t._v(t._s(a.description))])])}),0)])]},proxy:!0}])})],1)])},R=[],B=i(P,L,R,!1,null,null,null,null);const D=B.exports;const G={components:{Blur:D,RequiredPlans:A,Cta:C},data(){return{strings:{titleAttributeFormat:this.$t.__("Title Attribute Format",this.$td),ctaDescription:this.$t.__("The Image SEO module is a premium feature that enables you to globally control the title, alt tag, caption, description and filename of the images on your site.",this.$tdPro),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Image SEO",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Image SEO is only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro")},features:[this.$t.__("Autogenerate image attributes",this.$td),this.$t.__("Clean uploaded image filenames",this.$td),this.$t.__("Strip punctuation from image attributes",this.$td),this.$t.__("Convert casing of image attributes",this.$td)]}}};var I=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aioseo-sa-image-seo"},[e("blur"),e("cta",{attrs:{"cta-link":t.$links.getPricingUrl("image-seo","image-seo-upsell"),"button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("image-seo",null,"home"),"feature-list":t.features},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.ctaHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[e("required-plans",{attrs:{addon:"aioseo-image-seo"}}),t._v(" "+t._s(t.strings.ctaDescription)+" ")]},proxy:!0}])})],1)},F=[],E=i(G,I,F,!1,null,"b11a6280",null,null);const r=E.exports,M={};var N=function(){var t=this,e=t._self._c;return e("div")},K=[],j=i(M,N,K,!1,null,null,null,null);const z=j.exports;const H={mixins:[u],components:{Activate:O,Advanced:_,BaseRadioToggle:o,CoreCard:m,CoreMainTabs:h,CoreProBadge:g,CoreSettingsRow:l,CustomFields:$,ImageSeo:r,Lite:r,Schema:f,TitleDescription:d,Update:z},data(){return{imageSeoKey:0,addonSlug:"aioseo-image-seo",internalDebounce:!1,imageSeoActiveTab:{slug:"title",name:this.$t.__("Title",this.$td),pro:!0},strings:{redirectAttachmentUrls:this.$t.__("Redirect Attachment URLs",this.$td),attachment:this.$t.__("Attachment",this.$td),attachmentParent:this.$t.__("Attachment Parent",this.$td),attachmentUrlsDescription:this.$t.__("We recommended redirecting attachment URLs back to the attachment since the default WordPress attachment pages have little SEO value.",this.$td),imageSeo:this.$t.__("Image SEO",this.$td),advancedSettings:this.$t.__("Advanced Settings",this.$tdPro)},tabs:{attachments:[{slug:"title-description",name:this.$t.__("Title & Description",this.$td),access:"aioseo_search_appearance_settings",pro:!1},{slug:"Schema",name:this.$t.__("Schema Markup",this.$td),access:"aioseo_search_appearance_settings",pro:!0},{slug:"advanced",name:this.$t.__("Advanced",this.$td),access:"aioseo_search_appearance_settings",pro:!1}],imageSeo:[{slug:"title",name:this.$t.__("Title",this.$td),pro:!0},{slug:"altTag",name:this.$t.__("Alt Tag",this.$td),pro:!0},{slug:"caption",name:this.$t.__("Caption",this.$td),pro:!0},{slug:"description",name:this.$t.__("Description",this.$td),pro:!0},{slug:"filename",name:this.$t.__("Filename",this.$td),pro:!0}]}}},computed:{...c(["options","dynamicOptions","settings"]),postType(){return this.$aioseo.postData.postTypes.filter(s=>s.name==="attachment")[0]}},methods:{...p(["changeTab"]),processChangeTab(s,t){this.internalDebounce||(this.internalDebounce=!0,this.changeTab({slug:`${s}SA`,value:t}),setTimeout(()=>{this.internalDebounce=!1},50))},setImageSeoActiveTab(s){this.imageSeoActiveTab=this.tabs.imageSeo.find(t=>t.slug===s),this.imageSeoKey++}}};var W=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aioseo-search-appearance-content-types"},[e("core-card",{attrs:{slug:`${t.postType.name}SA`},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"icon dashicons",class:`${t.postType.icon||"dashicons-admin-post"}`}),e("div",[t._v(t._s(t.postType.label))])]},proxy:!0},{key:"before-tabs",fn:function(){return[e("core-settings-row",{attrs:{name:t.strings.redirectAttachmentUrls,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"redirectAttachmentUrls",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:"disabled",activeClass:"dark"},{label:t.strings.attachment,value:"attachment"},{label:t.strings.attachmentParent,value:"attachment_parent"}]},model:{value:t.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls,callback:function(a){t.$set(t.dynamicOptions.searchAppearance.postTypes.attachment,"redirectAttachmentUrls",a)},expression:"dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls"}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.attachmentUrlsDescription)+" ")])]},proxy:!0}])})]},proxy:!0},t.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls==="disabled"?{key:"tabs",fn:function(){return[e("core-main-tabs",{attrs:{tabs:t.tabs.attachments,showSaveButton:!1,active:t.settings.internalTabs[`${t.postType.name}SA`],internal:""},on:{changed:a=>t.processChangeTab(t.postType.name,a)}})]},proxy:!0}:null],null,!0)},[t.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls==="disabled"?e("transition",{attrs:{name:"route-fade",mode:"out-in"}},[e(t.settings.internalTabs[`${t.postType.name}SA`],{tag:"component",attrs:{object:t.postType,separator:t.options.searchAppearance.global.separator,options:t.dynamicOptions.searchAppearance.postTypes[t.postType.name],type:"postTypes"}})],1):t._e()],1),e("core-card",{attrs:{slug:"imageSeo",noSlide:!t.shouldShowMain},scopedSlots:t._u([{key:"header",fn:function(){return[e("span",[t._v(t._s(t.strings.imageSeo))]),e("core-pro-badge")]},proxy:!0},{key:"tabs",fn:function(){return[e("core-main-tabs",{attrs:{tabs:t.tabs.imageSeo,showSaveButton:!1,active:t.imageSeoActiveTab.slug,internal:""},on:{changed:a=>t.setImageSeoActiveTab(a)}})]},proxy:!0}])},[t.shouldShowMain?e("image-seo",{key:t.imageSeoKey,attrs:{activeTab:t.imageSeoActiveTab}}):t._e(),t.shouldShowActivate?e("activate"):t._e(),t.shouldShowUpdate?e("update"):t._e(),t.shouldShowLite?e("lite"):t._e()],1)],1)},q=[],J=i(H,W,q,!1,null,null,null,null);const Gt=J.exports;export{Gt as default};
