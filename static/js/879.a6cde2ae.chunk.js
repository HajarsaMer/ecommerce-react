"use strict";(self.webpackChunkecommerce=self.webpackChunkecommerce||[]).push([[879],{8879:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var n=s(4165),r=s(5861),c=s(9439),a=s(2791),o=s(799),u=s(7689),i=s(1087),l=s(3926),d=s(3402),p=s(184);function m(){var e=(0,u.s0)(),t=(0,a.useContext)(l.A).addToCart,s=(0,a.useState)(1),m=(0,c.Z)(s,2),f=m[0],x=(m[1],(0,o.Z)("https://ecommerce.routemisr.com/api/v1/products?page=".concat(f)).products);function h(){return(h=(0,r.Z)((0,n.Z)().mark((function s(r){var c;return(0,n.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(!localStorage.getItem("token")){s.next=7;break}return s.next=3,t(r);case 3:"success"==(c=s.sent).status?d.Am.success("your product added successful"):d.Am.error(c.message),s.next=8;break;case 7:e("/login");case 8:case"end":return s.stop()}}),s)})))).apply(this,arguments)}return(0,p.jsx)("div",{className:"row py-5 g-4",id:"products",children:x.length>0?x.map((function(e){return(0,p.jsx)("div",{style:{cursor:"pointer"},className:"col-md-3",children:(0,p.jsxs)("div",{className:"productItem p-3 shadow-sm text-center",style:{backgroundColor:"#F8F9FA"},children:[(0,p.jsx)(i.rU,{to:e._id,style:{textDecoration:"none",color:"unset"},children:(0,p.jsx)("img",{src:e.imageCover,className:"w-50",alt:""})}),(0,p.jsx)("p",{style:{color:"#1CB21C"},className:"my-2",children:e.title.split(" ").slice(0,2).join(" ")}),(0,p.jsxs)("span",{children:[e.ratingsAverage," ",(0,p.jsx)("i",{className:"fa-solid fa-star text-warning"})]}),(0,p.jsx)("button",{className:"btn btn-outline-success d-block mx-auto my-2 opacity-1 ",onClick:function(){!function(e){h.apply(this,arguments)}(e._id)},children:"Add to cart"})]})},e._id)})):"loading"})}},799:function(e,t,s){s.d(t,{Z:function(){return u}});var n=s(4165),r=s(5861),c=s(9439),a=s(1243),o=s(2791);function u(e){var t=(0,o.useState)([]),s=(0,c.Z)(t,2),u=s[0],i=s[1],l=(0,o.useState)([]),d=(0,c.Z)(l,2),p=d[0],m=d[1];function f(){return(f=(0,r.Z)((0,n.Z)().mark((function t(){var s,r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.Z.get(e);case 3:s=t.sent,r=s.data,i(r.data),m(r.data),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}return(0,o.useEffect)((function(){!function(){f.apply(this,arguments)}()}),[]),{products:u,categories:p}}}}]);
//# sourceMappingURL=879.a6cde2ae.chunk.js.map