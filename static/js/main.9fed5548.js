(()=>{"use strict";var e={3956:(e,t,r)=>{r.r(t),r.d(t,{default:()=>j});var n=r(5861),i=r(885),l=r(3292),a=r(9526),o=r(2550),s=r(9233),d=r(1133),c=r(9876),u=r(6337),f=r(6032),h=r(9851),y=r(9508),p=r(7557),g=u.default.get("window").width,m="3108b3986e2950cfc86062f3e9cd4022",w={Clouds:"cloudy",Clear:"day-sunny",Rain:"rains",Thunderstorm:"lightning",Drizzle:"rain",Snow:"snow"},x=["\uc77c","\uc6d4","\ud654","\uc218","\ubaa9","\uae08","\ud1a0"];function j(){var e=(0,a.useState)("...loading"),t=(0,i.default)(e,2),r=t[0],o=t[1],u=(0,a.useState)([]),g=(0,i.default)(u,2),j=g[0],b=g[1],S=(0,a.useState)(!0),O=(0,i.default)(S,2),z=(O[0],O[1]),D=(0,a.useState)(0),C=(0,i.default)(D,2),F=C[0],T=C[1],k=(0,a.useState)(0),P=(0,i.default)(k,2),_=P[0],I=P[1],M=(0,a.useState)(0),A=(0,i.default)(M,2),E=A[0],N=A[1],R=new Date,q=function(){var e=(0,n.default)((function*(){(yield h.requestForegroundPermissionsAsync()).granted||z(!1);var e=(yield h.getCurrentPositionAsync({accuracy:5})).coords,t=e.latitude,r=e.longitude,n=yield h.reverseGeocodeAsync({latitude:t,longitude:r});o(n[0].city);var i=yield fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+t+"&lon="+r+"&exclude=alerts&appid="+m+"&units=metric"),l=yield i.json();b(l.daily)}));return function(){return e.apply(this,arguments)}}();return(0,a.useEffect)((function(){q(),T(R.getDate()),I(R.getDay()),N(R.getMonth())}),[]),(0,p.jsxs)(d.default,{style:v.container,children:[(0,p.jsx)(d.default,{style:v.city,children:(0,p.jsx)(s.default,{style:v.cityName,children:r})}),(0,p.jsx)(c.default,{horizontal:!0,pagingEnabled:!0,showsHorizontalScrollIndicator:!1,contentContainerStyle:v.weather,children:0===j.length?(0,p.jsx)(d.default,{style:v.day,children:(0,p.jsx)(f.default,{size:"large",color:"white"})}):j.map((function(e,t){return(0,p.jsxs)(d.default,{style:v.day,children:[(0,p.jsx)(d.default,{style:{alignItems:"center",marginTop:-20,marginBottom:80},children:(0,p.jsxs)(s.default,{style:{fontSize:40,color:"white"},children:[E+1,"/",F+t," ",_+t<7?x[_+t]:x[(_+t)%7]]})}),(0,p.jsxs)(d.default,{style:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[(0,p.jsxs)(d.default,{children:[(0,p.jsxs)(s.default,{style:v.temp,children:[parseFloat(e.temp.day).toFixed(1),"\xb0"]}),(0,p.jsxs)(d.default,{style:{flexDirection:"row"},children:[(0,p.jsxs)(s.default,{style:v.tempDetail,children:["\ucd5c\uc800:",parseFloat(e.temp.min).toFixed(1),"\xb0"]}),(0,p.jsxs)(s.default,{style:v.tempDetail,children:["\ucd5c\uace0:",parseFloat(e.temp.max).toFixed(1),"\xb0"]})]})]}),(0,p.jsx)(y.default,{name:w[e.weather[0].main],size:70,color:"white"})]}),(0,p.jsx)(s.default,{style:v.description,children:e.weather[0].main}),(0,p.jsx)(s.default,{style:v.descriptionDeatil,children:e.weather[0].description})]},t)}))}),(0,p.jsx)(l.default,{style:"light"})]})}var v=o.default.create({container:{flex:1,backgroundColor:"#8c83b4"},city:{flex:.5,justifyContent:"flex-end",alignItems:"center"},cityName:{fontSize:52,fontWeight:"400",color:"white"},day:{width:g,padding:30},temp:{fontSize:100,marginTop:50,color:"white"},tempDetail:{color:"white",fontSize:16,marginRight:5},description:{fontSize:48,color:"white",marginTop:10},descriptionDeatil:{fontSize:18,color:"white"}})}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var l=t[n]={exports:{}};return e[n].call(l.exports,l,l.exports,r),l.exports}r.m=e,(()=>{var e=[];r.O=(t,n,i,l)=>{if(!n){var a=1/0;for(c=0;c<e.length;c++){for(var[n,i,l]=e[c],o=!0,s=0;s<n.length;s++)(!1&l||a>=l)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(o=!1,l<a&&(a=l));if(o){e.splice(c--,1);var d=i();void 0!==d&&(t=d)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[n,i,l]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/weather_app/",(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var i,l,[a,o,s]=n,d=0;if(a.some((t=>0!==e[t]))){for(i in o)r.o(o,i)&&(r.m[i]=o[i]);if(s)var c=s(r)}for(t&&t(n);d<a.length;d++)l=a[d],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(c)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[536],(()=>r(9484)));n=r.O(n)})();
//# sourceMappingURL=main.9fed5548.js.map