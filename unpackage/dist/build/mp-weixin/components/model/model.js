(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/model/model"],{"1bb6":function(t,e,n){},"2f95":function(t,e,n){"use strict";var u;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return u}));var a=function(){var t=this,e=t.$createElement;t._self._c},o=[]},"3f9a":function(t,e,n){"use strict";n.r(e);var u=n("ba7c"),a=n.n(u);for(var o in u)"default"!==o&&function(t){n.d(e,t,(function(){return u[t]}))}(o);e["default"]=a.a},4248:function(t,e,n){"use strict";var u=n("1bb6"),a=n.n(u);a.a},ba7c:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"model",props:{title:{type:String,default:"为了更好的浏览体验，快去授权登录吧"},authorize:{type:Boolean,default:!0},ad:{type:Boolean,default:!1},btnText:{type:String,default:"授权登录"},closeText:{type:String,default:"暂时不用"}},data:function(){return{}},methods:{save:function(){this.$emit("save")},close:function(){this.$emit("close")},getUserProfile:function(t){this.$emit("getUserInfo")}}};e.default=u},bbcd:function(t,e,n){"use strict";n.r(e);var u=n("2f95"),a=n("3f9a");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("4248");var r,f=n("f0c5"),i=Object(f["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);e["default"]=i.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/model/model-create-component',
    {
        'components/model/model-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("bbcd"))
        })
    },
    [['components/model/model-create-component']]
]);
