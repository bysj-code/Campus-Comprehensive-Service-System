(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yonghu/add-or-update"],{"1e0c":function(e,n,t){"use strict";t.r(n);var i=t("2c9c"),r=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);n["default"]=r.a},"2c9c":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,i,r,a,u){try{var o=e[a](u),s=o.value}catch(c){return void t(c)}o.done?n(s):Promise.resolve(s).then(i,r)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(i,r){var u=e.apply(n,t);function o(e){a(u,i,r,o,s,"next",e)}function s(e){a(u,i,r,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("919f"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{ruleForm:{gerenzhanghao:"",mima:"",xingming:"",xingbie:"",nianling:"",shenfenzhenghaoma:"",shoujihaoma:"",xiangpian:"",dizhi:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{gerenzhanghao:!1,mima:!1,xingming:!1,xingbie:!1,nianling:!1,shenfenzhenghaoma:!1,shoujihaoma:!1,xiangpian:!1,dizhi:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var n=u(i.default.mark((function n(t){var r,a,u,o;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.getStorageSync("nowTable"),n.next=3,this.$api.session(r);case 3:if(a=n.sent,this.user=a.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!t.id){n.next=14;break}return this.ruleForm.id=t.id,n.next=12,this.$api.info("yonghu",this.ruleForm.id);case 12:a=n.sent,this.ruleForm=a.data;case 14:if(!t.cross){n.next=57;break}u=e.getStorageSync("crossObj"),n.t0=i.default.keys(u);case 17:if((n.t1=n.t0()).done){n.next=57;break}if(o=n.t1.value,"gerenzhanghao"!=o){n.next=23;break}return this.ruleForm.gerenzhanghao=u[o],this.ro.gerenzhanghao=!0,n.abrupt("continue",17);case 23:if("mima"!=o){n.next=27;break}return this.ruleForm.mima=u[o],this.ro.mima=!0,n.abrupt("continue",17);case 27:if("xingming"!=o){n.next=31;break}return this.ruleForm.xingming=u[o],this.ro.xingming=!0,n.abrupt("continue",17);case 31:if("xingbie"!=o){n.next=35;break}return this.ruleForm.xingbie=u[o],this.ro.xingbie=!0,n.abrupt("continue",17);case 35:if("nianling"!=o){n.next=39;break}return this.ruleForm.nianling=u[o],this.ro.nianling=!0,n.abrupt("continue",17);case 39:if("shenfenzhenghaoma"!=o){n.next=43;break}return this.ruleForm.shenfenzhenghaoma=u[o],this.ro.shenfenzhenghaoma=!0,n.abrupt("continue",17);case 43:if("shoujihaoma"!=o){n.next=47;break}return this.ruleForm.shoujihaoma=u[o],this.ro.shoujihaoma=!0,n.abrupt("continue",17);case 47:if("xiangpian"!=o){n.next=51;break}return this.ruleForm.xiangpian=u[o],this.ro.xiangpian=!0,n.abrupt("continue",17);case 51:if("dizhi"!=o){n.next=55;break}return this.ruleForm.dizhi=u[o],this.ro.dizhi=!0,n.abrupt("continue",17);case 55:n.next=17;break;case 57:this.styleChange();case 58:case"end":return n.stop()}}),n,this)})));function t(e){return n.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},xiangpianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.xiangpian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=u(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.gerenzhanghao){e.next=3;break}return this.$utils.msg("个人账号不能为空"),e.abrupt("return");case 3:if(this.ruleForm.mima){e.next=6;break}return this.$utils.msg("密码不能为空"),e.abrupt("return");case 6:if(this.ruleForm.xingming){e.next=9;break}return this.$utils.msg("姓名不能为空"),e.abrupt("return");case 9:if(!this.ruleForm.nianling||this.$validate.isIntNumer(this.ruleForm.nianling)){e.next=12;break}return this.$utils.msg("年龄应输入整数"),e.abrupt("return");case 12:if(!this.ruleForm.shenfenzhenghaoma||this.$validate.checkIdCard(this.ruleForm.shenfenzhenghaoma)){e.next=15;break}return this.$utils.msg("身份证号码应输入身份证格式"),e.abrupt("return");case 15:if(!this.ruleForm.shoujihaoma||this.$validate.isMobile(this.ruleForm.shoujihaoma)){e.next=18;break}return this.$utils.msg("手机号码应输入手机格式"),e.abrupt("return");case 18:if(!this.ruleForm.id){e.next=23;break}return e.next=21,this.$api.update("yonghu",this.ruleForm);case 21:e.next=25;break;case 23:return e.next=25,this.$api.add("yonghu",this.ruleForm);case 25:this.$utils.msgBack("提交成功");case 26:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),i=n.getMonth()+1,r=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(t,"-").concat(i,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,t("543d")["default"])},"50cf":function(e,n,t){"use strict";var i,r=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return i}))},"52bf":function(e,n,t){"use strict";var i=t("7e34"),r=t.n(i);r.a},"7dec":function(e,n,t){"use strict";t.r(n);var i=t("50cf"),r=t("1e0c");for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);t("52bf");var u,o=t("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"37853ac0",null,!1,i["a"],u);n["default"]=s.exports},"7e34":function(e,n,t){},acd0:function(e,n,t){"use strict";(function(e){t("f791"),t("921b");i(t("66fd"));var n=i(t("7dec"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])}},[["acd0","common/runtime","common/vendor"]]]);