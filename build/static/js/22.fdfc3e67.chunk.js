(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{241:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return s});var r=n(78),a=n(11),o=n(10),c=n.n(o),i=function(e,t,n,o,i){return function(s){c.a.post(a.cb,{token:e,user_id:t,delivery_lat:n,delivery_long:o,heading:i}).then(function(e){var t=e.data;return s({type:r.b,payload:t})}).catch(function(e){console.log(e)})}},s=function(e,t){return function(n){c.a.post(a.p,{token:e,order_id:t}).then(function(e){var t=e.data;return n({type:r.a,payload:t})}).catch(function(e){console.log(e)})}}},257:function(e,t,n){"use strict";var r=n(4),a=n(5),o=n(7),c=n(6),i=n(8),s=n(0),l=n.n(s),u=n(17),d=n(241),p=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={gpsAccessError:!1,lat:null,lng:null},n.__sendGpsLocation=function(e){n.props.sendDeliveryGuyGpsLocation(n.props.delivery_user.data.auth_token,n.props.delivery_user.data.id,e.coords.latitude,e.coords.longitude,e.coords.heading)},n}return Object(i.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=navigator&&navigator.geolocation;t&&(this.refreshSetInterval=setInterval(function(){t.getCurrentPosition(function(t){e.__sendGpsLocation(t)},function(t){console.log("Inside error"),console.log(t),e.setState({gpsAccessError:!0})},{enableHighAccuracy:!0})},15e3))}},{key:"componentWillUnmount",value:function(){clearInterval(this.refreshSetInterval),console.log("Cleared API CALL")}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"pt-50"},this.state.gpsAccessError&&l.a.createElement("div",{className:"auth-error location-error",style:{bottom:"5rem"}},l.a.createElement("div",{className:"error-shake"},localStorage.getItem("allowLocationAccessMessage")))))}}]),t}(s.Component);t.a=Object(u.b)(function(e){return{delivery_user:e.delivery_user.delivery_user}},{sendDeliveryGuyGpsLocation:d.b})(p)},351:function(e,t,n){"use strict";n.r(t);var r=n(33),a=n.n(r),o=n(50),c=n(4),i=n(5),s=n(7),l=n(6),u=n(8),d=n(34),p=n(0),m=n.n(p),g=n(41),f=n(217),v=n(359),y=n(17),h=n(82),b=n(112),w=n(257),O=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"content-center text-center text-muted font-w600"},m.a.createElement("div",null,m.a.createElement("i",{className:"si si-screen-smartphone mb-2",style:{fontSize:"4rem",opacity:"0.5"}})),m.a.createElement("div",null,localStorage.getItem("deliveryUsePhoneToAccessMsg"))))}}]),t}(p.Component),j=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(a.a.mark(function e(){var t,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:document.querySelector("#mainManifest")&&document.querySelector("#mainManifest").setAttribute("href","/delivery-manifest.json"),document.getElementsByTagName("body")&&document.getElementsByTagName("body")[0].classList.add("bg-grey"),(t=this.props.delivery_user).success&&d.messaging.isSupported()&&(n=this.props.saveNotificationToken,h.a.requestPermission().then(Object(o.a)(a.a.mark(function e(){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.getToken();case 2:r=e.sent,n(r,t.data.id,t.data.auth_token);case 4:case"end":return e.stop()}},e,this)}))).catch(function(e){console.log("Unable to get permission to notify.",e)}));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return window.innerWidth>768?m.a.createElement(O,null):this.props.delivery_user.success?m.a.createElement(m.a.Fragment,null,m.a.createElement(g.a,{seotitle:"Delivery Orders",seodescription:localStorage.getItem("seoMetaDescription"),ogtype:"website",ogtitle:localStorage.getItem("seoOgTitle"),ogdescription:localStorage.getItem("seoOgDescription"),ogurl:window.location.href,twittertitle:localStorage.getItem("seoTwitterTitle"),twitterdescription:localStorage.getItem("seoTwitterDescription")}),m.a.createElement(f.default,null),m.a.createElement(w.a,null)):m.a.createElement(v.a,{to:"/delivery/login"})}}]),t}(p.Component);t.default=Object(y.b)(function(e){return{delivery_user:e.delivery_user.delivery_user}},{saveNotificationToken:b.a})(j)}}]);