/*! For license information please see chunk.e0c06751f864a6afa96f.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{265:function(t,s,i){"use strict";i.d(s,"a",(function(){return e})),i.d(s,"b",(function(){return a}));var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",{staticClass:"product"},[i("a-alert",{attrs:{"can-show":t.hasLoadError,variant:"danger"}},[t._v(" "+t._s(t.i19loadProductErrorMsg)+" "),i("a",{staticClass:"alert-link",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.fetchProduct(s)}}},[t._v(" "+t._s(t.i19retry)+" ")])]),i("transition",{attrs:{"enter-active-class":"animated fadeIn slower"}},[t.body._id?i("div",{staticClass:"row"},[t._t("gallery-col",[i("div",{staticClass:"col-12 col-md-6"},[i(t.isSSR?"portal":"div",{tag:"component",attrs:{selector:"#product-gallery"}},[i("product-gallery",{attrs:{product:t.body,"current-slide":t.currentGalleyImg,"is-s-s-r":t.isSSR},on:{"update:currentSlide":function(s){t.currentGalleyImg=s},"update:current-slide":function(s){t.currentGalleyImg=s}}},[t._t("first-picture")],2),t._t("gallery-footer")],2)],1)]),i("div",{staticClass:"col"},[t.isSSR?t._e():t._t("heading",[i(t.headingTag,{tag:"component",staticClass:"product__name"},[t._v(" "+t._s(t.name)+" ")])]),i(t.isSSR?"portal":"div",{tag:"component",attrs:{selector:"#product-actions"}},[t._t("rating",[t._m(0)]),t.body.available?t.isInStock?[t._t("prices",[i("p",{staticClass:"product__prices"},[i("a-prices",{attrs:{product:Object.assign({},t.body,t.selectedVariation),"is-literal":!0,"is-big":!0},on:{"fix-price":function(s){return t.fixedPrice=s}}}),t._t("discount-tag",[t.discount>0?i("span",{staticClass:"product__discount"},[t._v(" "+t._s(t.i19discountOf)+" "),i("strong",[t._v(t._s(t.discount)+"%")])]):t._e()],null,{discount:t.discount})],2)]),t.hasVariations?t._t("variations",[i("product-variations",{attrs:{product:t.body,selectedId:t.selectedVariationId},on:{"update:selectedId":function(s){t.selectedVariationId=s},"update:selected-id":function(s){t.selectedVariationId=s}}}),i("a-alert",{attrs:{"can-show":t.hasClickedBuy&&!t.selectedVariationId}},[t._v(" "+t._s(t.i19selectVariationMsg)+" ")]),t._t("variations-info")]):t._e(),t.body.customizations?t._t("customizations",t._l(t.body.customizations,(function(s){return s.custom_value?i("div",{key:s._id,staticClass:"product__customization form-group",class:s.grid_id?"product__customization--"+s.grid_id:null},[i("label",{attrs:{for:"c-"+s._id}},[t._v(" "+t._s(s.label)+" "),s.add_to_price?i("span",{staticClass:"badge badge-secondary"},[t._v(" "+t._s(t.formatAdditionalPrice(s.add_to_price))+" ")]):t._e()]),i("input",{staticClass:"form-control",attrs:{type:"text",id:"c-"+s._id},on:{change:function(i){return t.setCustomizationOption(s,i.target.value)}}})]):t._e()}))):t._e(),t.isKit?i("div",{staticClass:"product__kit"},[i("label",{staticClass:"kit__title"},[t._v("Selecione os itens do kit")]),t._t("kit",[i("transition",{attrs:{"enter-active-class":"animated fadeInUp"}},[t.kitItems.length?i("quantity-selector",{attrs:{items:t.kitItems,min:t.body.min_quantity,max:t.body.quantity,slug:t.body.slug,"kit-product-id":t.body._id,"kit-name":t.name,"kit-price":t.fixedPrice},scopedSlots:t._u([{key:"buy-button-content",fn:function(){return[t._t("buy-button-content")]},proxy:!0}],null,!0)}):t._e()],1),t.kitItems.length?t._e():i("span",{staticClass:"product__kit-loading spinner-border",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[t._v("Loading...")])])],null,{kitItems:t.kitItems})],2):[i("div",{staticClass:"product__buy"},[i("span",{on:{click:t.buy}},[t._t("buy",[i("button",{staticClass:"btn btn-lg btn-primary",attrs:{type:"button",disabled:t.hasClickedBuy&&!t.isOnCart}},[t._t("buy-button-content",[t._v(" "+t._s(t.strBuy)+" ")])],2)],null,{hasClickedBuy:t.hasClickedBuy,isOnCart:t.isOnCart})],2)]),t.isLowQuantity?i("p",{staticClass:"product__short-stock"},[i("i",{staticClass:"fas fa-forward mr-1"}),t._v(" "+t._s(t.i19only)+" "),i("strong",[t._v(t._s(t.productQuantity))]),t._v(" "+t._s(t.i19unitsInStock)+" ")]):t._e()],t.body.production_time&&t.body.production_time.days?i("p",{staticClass:"product__production"},[i("i",{staticClass:"fas fa-info-circle mr-1"}),t._v(" "+t._s(t.i19productionDeadline)+": "),i("strong",[t._v(" "+t._s(t.body.production_time.days)+" "+t._s(t.body.production_time.working_days?t.i19workingDays:t.i19days)+" "),t.body.production_time.cumulative?[t._v(" "+t._s(t.i19perUnit)+" ")]:t._e()],2)]):t._e(),t.isQuickview?t._e():t._t("shipping",[i("shipping-calculator",{attrs:{shippedItems:[Object.assign({},t.body,{product_id:t.body._id,quantity:t.body.min_quantity||1})]},scopedSlots:t._u([{key:"free-from-value",fn:function(s){var e=s.amountSubtotal,a=s.freeFromValue;return[i("div",{staticClass:"product__free-shipping-from"},[t._v(" "+t._s(t.i19freeShippingFrom)+" "),i("strong",[t._v(" "+t._s(Math.ceil(a/e))+" "+t._s(t.i19units)+" ")])])]}}],null,!1,3999804120)})]),t._t("track-price",[t._m(1)])]:t._t("out-of-stock",[i("p",{staticClass:"product__out-of-stock"},[t._v(" "+t._s(t.i19outOfStock)+" ")])]):t._t("unavailable",[i("p",{staticClass:"product__unavailable"},[t._v(" "+t._s(t.i19unavailable)+" ")])])],2),!t.isSSR&&t.body.short_description?t._t("short-description",[i("p",{staticClass:"product__info lead"},[t._v(" "+t._s(t.body.short_description)+" ")])]):t._e()],2)],2):t._e()]),t.body._id?t._e():t._t("default")],2)},a=[function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",{staticClass:"product__rating",attrs:{"data-sku":t.body.sku}})},function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",{staticClass:"product__track-price",attrs:{"data-sku":t.body.sku}})}]},359:function(t,s,i){"use strict";i.r(s);var e=i(31),a=i.n(e),o=i(81),n=i(259);s.default=(t={},s="product")=>{const i=document.getElementById(s);if(i){const e=document.getElementById("".concat(s,"-dock")),r=Boolean(e),{storefront:c}=window;let d,u;c&&(d=c.getScopedSlots,u=c.context&&c.context.body);const l={render:a=>a(n.a,{attrs:{id:e?null:s},props:{...t.props,product:r&&u&&u.available&&Object(o.a)(u)?u:null,buyText:t.buyText,isSSR:r},scopedSlots:Object.assign({buy:t.buy?function(){return a("span",{domProps:{innerHTML:t.buy}})}:void 0},"function"==typeof d?d(i,a,!e):{})})},_=()=>{const t=document.getElementById("product-loading");t&&t.remove(),delete i.dataset.toRender};r?l.mounted=_:l.render.on={"update:product":_},new a.a(l).$mount(e||i)}}}}]);
//# sourceMappingURL=chunk.e0c06751f864a6afa96f.js.map