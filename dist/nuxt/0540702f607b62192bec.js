(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{186:function(t,e,n){"use strict";e.a={IS_RELEASE:!0,BASE_URL:"//elm-api.caibowen.net",IMG_URL:"https://easytuan.gitee.io/node-elm-api/public/",HEADERS:{"Content-Type":"application/json;charset=UTF-8"},TIMEOUT:12e3}},187:function(t,e,n){"use strict";n(51);var r=n(3),a=n.n(r),i=n(70),s=n.n(i),o=n(186),c=n(69);s.a.defaults.baseURL=o.a.BASE_URL,s.a.defaults.timeout=o.a.TIMEOUT,s.a.defaults.headers=o.a.HEADERS,s.a.interceptors.request.use(function(t){return o.a.IS_RELEASE||console.log("".concat((new Date).toLocaleString(),"【 M=").concat(t.url," 】P="),t.params||t.data),t},function(t){return Promise.reject(t)}),e.a=a()(regeneratorRuntime.mark(function t(){var e,n,r,a=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:{method:"GET"},n=!0,"POST"!==e.method.toUpperCase()&&"PUT"!==e.method.toUpperCase()&&"PATCH"!==e.method.toUpperCase()&&(n=!1),t.next=5,s()({method:e.method,url:e.url,data:n?e.data:null,params:n?null:e.data});case 5:if(!((r=t.sent).status>=200&&r.status<300)){t.next=12;break}return o.a.IS_RELEASE||console.log("".concat((new Date).toLocaleString(),"【接口响应：】"),r.data),"undefined"!=typeof window&&0!==r.data.code&&Object(c.Toast)(r.data.msg),t.abrupt("return",r.data);case 12:"undefined"!=typeof window&&0!==r.data.code&&Object(c.Toast)("请求错误");case 13:case"end":return t.stop()}},t,this)}))},189:function(t,e,n){var r=n(202);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(18).default)("53dad9a6",r,!0,{sourceMap:!1})},196:function(t,e,n){"use strict";n.d(e,"c",function(){return i}),n.d(e,"d",function(){return s}),n.d(e,"a",function(){return o}),n.d(e,"b",function(){return c});var r=n(187),a="/shopping",i=function(t){return Object(r.a)({url:"".concat(a,"/restaurants"),method:"GET",data:t})},s=function(t){return Object(r.a)({url:"".concat(a,"/seller"),method:"GET",data:t})},o=function(t){return Object(r.a)({url:"".concat(a,"/goods"),method:"GET",data:t})},c=function(t){return Object(r.a)({url:"".concat(a,"/ratings"),method:"GET",data:t})}},201:function(t,e,n){"use strict";var r=n(189);n.n(r).a},202:function(t,e,n){(t.exports=n(17)(!1)).push([t.i,"\n.rating_container[data-v-5bf05df5]{position:relative;top:.1rem;width:2rem;height:.4rem\n}\n.rating_container .star_overflow[data-v-5bf05df5]{overflow:hidden;position:relative;height:100%\n}\n.rating_container .star_container[data-v-5bf05df5]{position:absolute;display:flex;width:2rem;height:.4rem;top:-.02rem;left:-.02rem\n}\n.rating_container .star_container .grey_fill[data-v-5bf05df5]{fill:#d1d1d1\n}\n.rating_container .star_container .orange_fill[data-v-5bf05df5]{fill:#f8ce46\n}",""])},205:function(t,e,n){var r=n(362);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(18).default)("5743b3de",r,!0,{sourceMap:!1})},207:function(t,e,n){"use strict";var r={props:["rating"]},a=(n(201),n(13)),i=Object(a.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rating_container"},[e("section",{staticClass:"star_container"},this._l(5,function(t){return e("svg",{key:t,staticClass:"grey_fill"},[e("svg",{attrs:{id:"star",viewBox:"0 0 32 32",width:"100%",height:"100%"}},[e("path",{staticClass:"path1",attrs:{d:"M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"}})])])})),this._v(" "),e("div",{staticClass:"star_overflow",style:"width:"+2*this.rating/5+"rem"},[e("section",{staticClass:"star_container"},this._l(5,function(t){return e("svg",{key:t,staticClass:"orange_fill"},[e("svg",{attrs:{id:"star",viewBox:"0 0 32 32",width:"100%",height:"100%"}},[e("path",{staticClass:"path1",attrs:{d:"M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"}})])])}))])])},[],!1,null,"5bf05df5",null);i.options.__file="ratingStar.vue";e.a=i.exports},357:function(t,e,n){var r=n(358),a=n(359),i=n(360);t.exports=function(t){return r(t)||a(t)||i()}},358:function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},359:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},360:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},361:function(t,e,n){"use strict";var r=n(205);n.n(r).a},362:function(t,e,n){(t.exports=n(17)(!1)).push([t.i,'\n@charset "UTF-8";\n.shoplist_container[data-v-2c527275]{background-color:#fff\n}\n.shop_li[data-v-2c527275]{display:flex;border-bottom:.025rem solid #f1f1f1;padding:.7rem .4rem\n}\n.shop_img[data-v-2c527275]{width:2.7rem;height:2.7rem;display:block;margin-right:.4rem\n}\n.list_back_li[data-v-2c527275]{height:4.85rem\n}\n.list_back_li .list_back_svg[data-v-2c527275]{width:100%;height:100%\n}\n.shop_right[data-v-2c527275]{flex:auto\n}\n.shop_right .shop_detail_header[data-v-2c527275]{display:flex;justify-content:space-between;align-items:center\n}\n.shop_right .shop_detail_header .shop_title[data-v-2c527275]{width:8.5rem;color:#333;padding-top:.01rem;font:.65rem/.65rem PingFangSC-Regular;font-weight:700\n}\n.shop_right .shop_detail_header .premium[data-v-2c527275]:before{content:"\\54C1\\724C";display:inline-block;font-size:.5rem;line-height:.6rem;color:#333;background-color:#ffd930;padding:0 .1rem;border-radius:.1rem;margin-right:.2rem\n}\n.shop_right .shop_detail_header .shop_detail_ul[data-v-2c527275]{display:flex;-webkit-transform:scale(.8);transform:scale(.8);margin-right:-.3rem\n}\n.shop_right .shop_detail_header .shop_detail_ul .supports[data-v-2c527275]{font-size:.5rem;color:#999;border:.025rem solid #f1f1f1;padding:0 .04rem;border-radius:.08rem;margin-left:.05rem\n}\n.shop_right .rating_order_num[data-v-2c527275]{display:flex;justify-content:space-between;height:.6rem;margin-top:.52rem\n}\n.shop_right .rating_order_num .rating_order_num_left[data-v-2c527275]{display:flex;justify-content:flex-start\n}\n.shop_right .rating_order_num .rating_order_num_left .rating_section[data-v-2c527275]{display:flex\n}\n.shop_right .rating_order_num .rating_order_num_left .rating_section .rating_num[data-v-2c527275]{font-size:.4rem;color:#ff6000;margin:0 .2rem\n}\n.shop_right .rating_order_num .rating_order_num_left .order_section[data-v-2c527275]{-webkit-transform:scale(.8);transform:scale(.8);margin-left:-.2rem;font-size:.4rem;color:#666\n}\n.shop_right .rating_order_num .rating_order_num_right[data-v-2c527275]{display:flex;align-items:center;-webkit-transform:scale(.7);transform:scale(.7);min-width:5rem;justify-content:flex-end;margin-right:-.8rem\n}\n.shop_right .rating_order_num .rating_order_num_right .delivery_style[data-v-2c527275]{font-size:.4rem;padding:.04rem .08rem 0;border-radius:.08rem;margin-left:.08rem;border:1px\n}\n.shop_right .rating_order_num .rating_order_num_right .delivery_left[data-v-2c527275]{color:#fff;background-color:#1070ff;border:.025rem solid #1070ff\n}\n.shop_right .rating_order_num .rating_order_num_right .delivery_right[data-v-2c527275]{color:#1070ff;border:.025rem solid #1070ff\n}\n.shop_right .fee_distance[data-v-2c527275]{margin-top:.52rem;display:flex;justify-content:space-between;font-size:.5rem;color:#333\n}\n.shop_right .fee_distance .fee[data-v-2c527275]{font-size:.5rem;color:#666\n}\n.shop_right .fee_distance .distance_time[data-v-2c527275],.shop_right .fee_distance .fee[data-v-2c527275]{-webkit-transform:scale(.9);transform:scale(.9)\n}\n.shop_right .fee_distance .distance_time span[data-v-2c527275]{color:#999\n}\n.shop_right .fee_distance .distance_time .order_time[data-v-2c527275]{color:#1070ff\n}\n.shop_right .fee_distance .distance_time .segmentation[data-v-2c527275]{color:#ccc\n}\n.loader_more[data-v-2c527275]{font:.6rem/3 Microsoft YaHei;text-align:center;color:#999\n}\n.empty_data[data-v-2c527275]{font-size:.5rem;color:#666;text-align:center;line-height:2rem\n}\n.return_top[data-v-2c527275]{position:fixed;bottom:3rem;right:1rem\n}\n.return_top .back_top_svg[data-v-2c527275]{width:2rem;height:2rem\n}\n.loading-enter-active[data-v-2c527275],.loading-leave-active[data-v-2c527275]{transition:opacity 1s\n}\n.loading-enter[data-v-2c527275],.loading-leave-active[data-v-2c527275]{opacity:0\n}',""])},363:function(t,e,n){var r=n(391);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(18).default)("9a963678",r,!0,{sourceMap:!1})},374:function(t,e,n){"use strict";n(21);var r,a,i,s=n(357),o=n.n(s),c=(n(51),n(3)),l=n.n(c),d=n(207),u=n(186),_=n(196),h={components:{ratingStar:d.a},props:["restaurantCategoryId","restaurantCategoryIds","sortByType","deliveryMode","supportIds","confirmSelect","geohash"],data:function(){return{offset:0,shopListArr:[],preventRepeatReuqest:!1,showBackStatus:!1,touchend:!1}},watch:{restaurantCategoryIds:function(t){this.listenPropChange()},sortByType:function(t){this.listenPropChange()},confirmSelect:function(t){this.listenPropChange()}},mounted:function(){this.initData()},methods:{initData:(i=l()(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(_.c)();case 2:(e=t.sent).data.map(function(t){t.image_path=u.a.IMG_URL+t.image_path}),this.shopListArr=o()(e.data),e.data.length<20&&(this.touchend=!0);case 6:case"end":return t.stop()}},t,this)})),function(){return i.apply(this,arguments)}),loaderMore:(a=l()(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.touchend){t.next=2;break}return t.abrupt("return");case 2:if(!this.preventRepeatReuqest){t.next=4;break}return t.abrupt("return");case 4:return this.preventRepeatReuqest=!0,this.offset+=20,t.next=8,shopList(this.latitude,this.longitude,this.offset,this.restaurantCategoryId);case 8:if(e=t.sent,this.shopListArr=o()(this.shopListArr).concat(o()(e)),!(e.length<20)){t.next=13;break}return this.touchend=!0,t.abrupt("return");case 13:this.preventRepeatReuqest=!1;case 14:case"end":return t.stop()}},t,this)})),function(){return a.apply(this,arguments)}),backTop:function(){animate(document.body,{scrollTop:"0"},400,"ease-out")},listenPropChange:(r=l()(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.offset=0,t.next=3,shopList(this.latitude,this.longitude,this.offset,"",this.restaurantCategoryIds,this.sortByType,this.deliveryMode,this.supportIds);case 3:e=t.sent,this.hideLoading(),this.shopListArr=o()(e);case 6:case"end":return t.stop()}},t,this)})),function(){return r.apply(this,arguments)}),zhunshi:function(t){var e;return t instanceof Array&&t.length?t.forEach(function(t){"准"===t.icon_name&&(e=!0)}):e=!1,e}}},p=(n(361),n(13)),f=Object(p.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shoplist_container"},[t.shopListArr.length?n("ul",{attrs:{type:"1"}},t._l(t.shopListArr,function(e){return n("router-link",{key:e.id,staticClass:"shop_li",attrs:{to:{path:"shop",query:{geohash:t.geohash,id:e.id}}}},[n("section",[n("img",{staticClass:"shop_img",attrs:{src:e.image_path}})]),t._v(" "),n("hgroup",{staticClass:"shop_right"},[n("header",{staticClass:"shop_detail_header"},[n("h4",{staticClass:"shop_title ellipsis",class:e.is_premium?"premium":""},[t._v(t._s(e.name))]),t._v(" "),n("ul",{staticClass:"shop_detail_ul"},t._l(e.supports,function(e){return n("li",{key:e.id,staticClass:"supports"},[t._v(t._s(e.icon_name))])}))]),t._v(" "),n("h5",{staticClass:"rating_order_num"},[n("section",{staticClass:"rating_order_num_left"},[n("section",{staticClass:"rating_section"},[n("rating-star",{attrs:{rating:e.rating}}),t._v(" "),n("span",{staticClass:"rating_num"},[t._v(t._s(e.rating))])],1),t._v(" "),n("section",{staticClass:"order_section"},[t._v("\n              月售"+t._s(e.recent_order_num)+"单\n            ")])]),t._v(" "),n("section",{staticClass:"rating_order_num_right"},[e.delivery_mode?n("span",{staticClass:"delivery_style delivery_left"},[t._v(t._s(e.delivery_mode.text))]):t._e(),t._v(" "),t.zhunshi(e.supports)?n("span",{staticClass:"delivery_style delivery_right"},[t._v("准时达")]):t._e()])]),t._v(" "),n("h5",{staticClass:"fee_distance"},[n("p",{staticClass:"fee"},[t._v("\n            ¥"+t._s(e.float_minimum_order_amount)+"起送\n            "),n("span",{staticClass:"segmentation"},[t._v("/")]),t._v("\n            "+t._s(e.piecewise_agent_fee&&e.piecewise_agent_fee.tips)+"\n          ")]),t._v(" "),n("p",{staticClass:"distance_time"},[Number(e.distance)?n("span",[t._v(t._s(e.distance>1e3?(e.distance/1e3).toFixed(2)+"km":e.distance+"m")+"\n              "),n("span",{staticClass:"segmentation"},[t._v("/")])]):n("span",[t._v(t._s(e.distance))]),t._v(" "),n("span",{staticClass:"segmentation"},[t._v("/")]),t._v(" "),n("span",{staticClass:"order_time"},[t._v(t._s(e.order_lead_time))])])])])])})):t._e(),t._v(" "),t.touchend?n("p",{staticClass:"empty_data"},[t._v("没有更多了")]):t._e(),t._v(" "),t.showBackStatus?n("aside",{staticClass:"return_top",on:{click:t.backTop}},[n("svg",{staticClass:"back_top_svg"},[n("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#backtop"}})])]):t._e(),t._v(" "),n("div",{ref:"abc",staticStyle:{"background-color":"red"}})])},[],!1,null,"2c527275",null);f.options.__file="shopList.vue";e.a=f.exports},390:function(t,e,n){"use strict";var r=n(363);n.n(r).a},391:function(t,e,n){(t.exports=n(17)(!1)).push([t.i,"\n.newretail-page{padding:1.87733rem 0 0\n}",""])},428:function(t,e,n){"use strict";n.r(e);var r={components:{ShopList:n(374).a}},a=(n(390),n(13)),i=Object(a.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"newretail-page"},[n("mt-header",{attrs:{title:t.$route.query.title,fixed:""}},[n("div",{attrs:{slot:"left"},on:{click:function(e){t.$router.go(-1)}},slot:"left"},[n("mt-button",{attrs:{icon:"back"}})],1)]),t._v(" "),n("ShopList")],1)},[],!1,null,null,null);i.options.__file="newretail.vue";e.default=i.exports}}]);