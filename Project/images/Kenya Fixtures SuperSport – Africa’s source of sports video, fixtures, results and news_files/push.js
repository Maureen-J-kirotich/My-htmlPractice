webpackJsonpppg__name_([0],{115:function(n,e,t){"use strict";function r(){return m.h("img.ppg__fab-icon.ppg__fab-icon--default",{src:t(207)})}function o(){return m.h("img.ppg__arrow",{src:t(209)})}function i(){return t(208)}function a(n){if(!n.showPopup)return null;if(n.options.subscriptionForm){return new _.FormBuilder(n).buildForm()}}function p(n){var e=n.options.subscribeToggle;return n.isOK()&&e?d(n):null}function s(n){var e=n.options.sidebar;return n.isNativeBlocked?[m.h("div",{innerHTML:n.getTranslation("disabledNotifications")})]:n.isActive?[m.h("div",{innerHTML:e.enabledText}),m.h("a.ppg__link.ppg__link--light.ppg__link--underlined",{href:"#",onclick:n.handleUnsubscribeClick},e.disableButtonText)]:[m.h("div.ppg__fab-title",e.title),m.h("div.ppg__fab-text",{innerHTML:e.disabledText}),m.h("a.ppg__btn",{href:"#",onclick:n.handleFabSubscribeClick},e.enableButtonText)]}function d(n){var e=n.options.sidebar;return m.h("div.ppg__fab",m.h("div.ppg__fab-bubble",{classes:{"ppg__fab-bubble--opened":n.isBubbleOpen}},[m.h("div.ppg__fab-bubble-inner",s(n)),m.h("span.ppg__icon.ppg__close.ppg__close--small",{onclick:n.handleCloseBuble})]),[m.h("div.ppg__fab-circle",{onclick:n.handleToggleBubble,classes:{"ppg__fab-circle--shake":n.shouldShake}},e.fabIcon?m.h("img.ppg__fab-icon",{src:e.fabIcon}):[m.h("span.ppg__fab-light-dot"),r()])])}function c(n){var e=n.toast;if(e&&!0===e.visible)return m.h("div.ppg__toast",[m.h("div.ppg__icon.ppg__close.ppg__close--small",{onclick:n.hideToast}),m.h("img.ppg__toast-logo",{src:n.options.logo}),m.h("div.ppg__toast-text",[m.h("div.ppg__toast-title",{innerHTML:e.title}),m.h("div.ppg__toast-body",{innerHTML:e.body})])])}function l(n){var e=n.options.confirmWindow;if(n.nativeConfirm)return m.h("div",[m.h("div.ppg__backdrop"),m.h("div.ppg__native-confirm",[o(),m.h("div.ppg__native-confirm-bubble",{innerHTML:e})])])}function u(n){if(n.isUserIntestMode())return n.isActive?m.h("div.ppg__test-mode",[m.h("div",{key:"subscriberInfo"},[m.h("b","Subscriber info:"),m.h("p",{key:"subscriberStaus",innerHTML:"You are subscribed"}),n.subscriberId&&m.h("p",{key:"subscriberId",innerHTML:"Subscriber ID: "+n.subscriberId})]),m.h("div",{key:"subscriberActions"},[m.h("b","Actions:"),m.h("div.m10t",[m.h("p.m10b",{innerHTML:"Start or end session and trigger automations which are in test mode:"}),m.h("a.ppg__btn.test__mode.m10r.m10b",{innerHTML:"Start Session",onclick:n.startSession}),m.h("a.ppg__btn.test__mode.m10r.m10b",{innerHTML:"End session",onclick:n.endSession}),m.h("p.m10b.m10t",{innerHTML:"Other actions:"}),m.h("a.ppg__btn.test__mode",{innerHTML:"Clear settings",onclick:n.clearAllSettings})])]),m.h("div",{key:"subscriberTagForm"},[m.h("b","Add test tag:"),m.h("p.m10t",[m.h("input",{type:"text",value:n.newTestTag,oninput:n.onNewTagInput,placeholder:"sample"}),m.h("a.ppg__btn.test__mode.m10l",{innerHTML:"Save",onclick:n.addTestTag})]),m.h("br"),m.h("p",{key:"subscriberTags"},["Test tags: ",n.testTags.length>0?n.testTags.join(", "):"You have no test tags"])]),m.h("a.ppg__test-mode-exit-button",{innerHTML:"Leave",onclick:n.leaveTestMode})]):m.h("div.ppg__test-mode",[m.h("div",{key:"subscriberInfo"},[m.h("b","Subscriber info:"),m.h("p",n.isNoDeclined()?"You are not subscribed":"You have rejected subscription")]),m.h("div",{key:"subscriberActions"},[m.h("span.ppg__btn.test__mode",{innerHTML:"Show subscribe popup",onclick:n.showSubscribeForm})]),m.h("a.ppg__test-mode-exit-button",{innerHTML:"Leave",onclick:n.leaveTestMode})])}function f(n,e){return g(this,void 0,void 0,function(){var t;return h(this,function(r){try{x.configureScope(function(n){n.setExtra("debug",!1),n.setTag("plugin","push"),n.setTag("version",e.version),n.setTag("project",e.projectId)}),t=m.createProjector(),t.append(document.head,function(){return m.h("style",{},[".ppg__btn,\n     .ppg__fab-circle {\n       background-color: "+n.options.primaryColor+";\n      }\n     .ppg__icon,\n     .ppg__checkbox input:checked + span { background-image: url("+i()+"); }\n     "+e.customCss])}),t.append(document.body,function(){return m.h("div#pushpushgo-container.ppg__container",{classes:{"ppg__container--mobile":n.isMobile()}},[a(n),p(n),c(n),u(n),l(n)])}),n.sub(function(){return t.renderNow()}),n.autoStart()}catch(n){x.captureException(n)}return[2]})})}var g=this&&this.__awaiter||function(n,e,t,r){return new(t||(t=Promise))(function(o,i){function a(n){try{s(r.next(n))}catch(n){i(n)}}function p(n){try{s(r.throw(n))}catch(n){i(n)}}function s(n){n.done?o(n.value):new t(function(e){e(n.value)}).then(a,p)}s((r=r.apply(n,e||[])).next())})},h=this&&this.__generator||function(n,e){function t(n){return function(e){return r([n,e])}}function r(t){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,i&&(a=i[2&t[0]?"return":t[0]?"throw":"next"])&&!(a=a.call(i,t[1])).done)return a;switch(i=0,a&&(t=[0,a.value]),t[0]){case 0:case 1:a=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,i=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(a=s.trys,!(a=a.length>0&&a[a.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){s.label=t[1];break}if(6===t[0]&&s.label<a[1]){s.label=a[1],a=t;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(t);break}a[2]&&s.ops.pop(),s.trys.pop();continue}t=e.call(n,s)}catch(n){t=[6,n],i=0}finally{o=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}var o,i,a,p,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return p={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(p[Symbol.iterator]=function(){return this}),p};Object.defineProperty(e,"__esModule",{value:!0}),t(117);var b=t(3),m=t(204),v=t(53),_=t(214),x=new v.Hub(new v.BrowserClient(b.getSentryOptions()));e.run=f},117:function(n,e,t){var r=t(154);"string"==typeof r&&(r=[[n.i,r,""]]);t(156)(r,{});r.locals&&(n.exports=r.locals)},154:function(n,e,t){e=n.exports=t(155)(),e.push([n.i,".flex-mixin {\n  display: flex;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n}\n.ppg__container {\n  font-size: 14px;\n  color: #3a3a3a;\n  line-height: 1.5;\n}\n.ppg__btn {\n  color: white;\n  font-size: 11px;\n  font-weight: bold;\n  background: #16a085;\n  height: 34px;\n  line-height: 34px;\n  border-radius: 4px;\n  display: inline-block;\n  text-transform: uppercase;\n  padding: 0 20px;\n  text-decoration: none;\n}\n.ppg__btn:hover {\n  color: #fff;\n}\n.ppg__link {\n  font-size: 13px;\n  text-decoration: none;\n  color: #3a3a3a;\n}\n.ppg__link--light {\n  color: #969696;\n}\n.ppg__link--underlined {\n  text-decoration: underline;\n}\n.ppg__backdrop {\n  width: 100%;\n  height: 100%;\n  background: rgba(99, 99, 99, 0.75);\n  z-index: 100000;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n.ppg__icon {\n  background-repeat: no-repeat;\n}\n.ppg__close {\n  width: 20px;\n  height: 20px;\n  display: block;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background-repeat: no-repeat;\n  cursor: pointer;\n}\n.ppg__close--small {\n  background-position: -30px 0px;\n}\n.ppg__signin-title {\n  font-size: 20px;\n  line-height: 1.3;\n  margin: 0 0 20px 0;\n  font-weight: bold;\n}\n.ppg__signin-text {\n  font-size: 14px;\n  line-height: 1.5;\n}\n.ppg__signin-pic {\n  background-size: cover;\n  background-position: center;\n  position: absolute;\n}\n.ppg__input {\n  border: 1px solid #dedede;\n  color: #000;\n  padding: 12px 10px;\n  width: 100%;\n  box-sizing: border-box;\n  margin-top: 10px;\n  outline: 0;\n}\n.ppg__input--error {\n  border-color: #e44f44;\n}\n.ppg__form-error {\n  color: #e44f44;\n  margin: 5px 0;\n  font-size: 12px;\n}\n.ppg__toast {\n  position: fixed;\n  background: #fff;\n  padding: 20px;\n  top: 20px;\n  right: 20px;\n  z-index: 100000;\n  width: 300px;\n  text-align: left;\n  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.2);\n  align-items: center;\n  font-size: 13px;\n  display: flex;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n}\n.ppg__toast-logo {\n  width: 70px;\n  margin-right: 20px;\n}\n.ppg__toast-title {\n  font-size: 20px;\n  margin-bottom: 5px;\n}\n.ppg__toast-body {\n  color: #6d6d6d;\n}\n.ppg__test-mode {\n  position: fixed;\n  bottom: 0px;\n  left: 0px;\n  background: rgba(22, 160, 133, 0.96);\n  color: #fff;\n  display: flex;\n  padding: 8px;\n  padding: 20px;\n  width: 100%;\n  z-index: 100000;\n  font-size: 14px;\n}\n.ppg__test-mode > div {\n  width: 100%;\n}\n.ppg__test-mode .ppg__btn {\n  border: 2px solid #fff;\n  line-height: 30px;\n  cursor: pointer;\n  background: none;\n  text-decoration: none;\n}\n.ppg__test-mode .ppg__btn.test__mode:active {\n  transform: translateY(1px);\n}\n.ppg__test-mode .ppg__btn.test__mode:hover {\n  background-color: rgba(23, 139, 111, 0.96);\n  text-decoration: none;\n}\n.ppg__test-mode input {\n  height: 40px;\n  border: 0px;\n  min-width: 200px;\n  border-radius: 4px;\n  color: #000;\n  padding: 0 10px;\n}\n.ppg__test-mode .m10t {\n  margin-top: 10px;\n}\n.ppg__test-mode .m10r {\n  margin-right: 10px;\n}\n.ppg__test-mode .m10b {\n  margin-bottom: 10px;\n}\n.ppg__test-mode .m10l {\n  margin-left: 10px;\n}\n.ppg__test-mode-exit-button {\n  position: absolute;\n  top: -30px;\n  right: 20px;\n  background: #fff;\n  height: 32px;\n  line-height: 32px;\n  padding: 0 20px;\n  border-radius: 4px 4px 0 0;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-size: 12px;\n  color: rgba(22, 160, 133, 0.96);\n  font-weight: 600;\n  cursor: pointer;\n  border: 2px solid rgba(22, 160, 133, 0.96);\n}\n.ppg__test-mode-exit-button:hover {\n  text-decoration: none;\n}\n@media (max-width: 1000px) {\n  .ppg__test-mode {\n    display: block;\n  }\n  .ppg__test-mode > div {\n    margin: 10px 0;\n  }\n}\n.ppg__checkbox {\n  display: inline-block;\n  vertical-align: middle;\n  width: 22px;\n  height: 22px;\n  position: relative;\n  margin-right: 10px;\n}\n.ppg__checkbox input {\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.ppg__checkbox span {\n  border: 1px solid #dedede;\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n  box-sizing: border-box;\n  transition: border 0.05s;\n}\n.ppg__checkbox input:checked + span {\n  border-color: #000;\n  background-position: -59px 1px;\n  background-repeat: no-repeat;\n}\n.ppg__popup-tags {\n  margin-bottom: 20px;\n}\n.ppg__popup-tag-item {\n  margin: 10px;\n}\n.ppg__fab {\n  position: fixed;\n  bottom: 0px;\n  left: 0px;\n  padding: 25px;\n  z-index: 10000;\n}\n.ppg__fab-circle {\n  width: 60px;\n  height: 60px;\n  cursor: pointer;\n  background: #16a085;\n  border-radius: 100%;\n  z-index: 10000;\n  padding: 0px;\n  line-height: 52px;\n  box-sizing: border-box;\n  text-align: center;\n  box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.2);\n  color: #fff;\n  border: 3px solid #fff;\n  position: relative;\n}\n.ppg__fab-circle--shake .ppg__fab-light-dot {\n  -webkit-animation: light-that-ppg 7s;\n  -moz-animation: light-that-ppg 7s;\n  animation: light-that-ppg 7s;\n  -webkit-animation-iteration-count: infinite;\n  -moz-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n.ppg__fab-circle--shake .ppg__fab-icon {\n  -webkit-animation: shake-that-ppg 7s;\n  -moz-animation: shake-that-ppg 7s;\n  animation: shake-that-ppg 7s;\n  -webkit-animation-iteration-count: infinite;\n  -moz-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n  -moz-animation-timing-function: linear;\n  animation-timing-function: linear;\n}\n.ppg__fab-light-dot {\n  opacity: 0;\n  width: 8px;\n  height: 8px;\n  background: #fff;\n  position: absolute;\n  top: 22px;\n  left: 21px;\n  box-shadow: 0px 0px 14px 7px rgba(255, 255, 255, 0.35);\n  border-radius: 50%;\n  transition: opacity 1s;\n  z-index: 0;\n}\n.ppg__fab-icon {\n  max-width: 30px;\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  z-index: 1;\n  margin: 0;\n  padding: 0;\n}\n.ppg__fab-icon--default {\n  width: 20px;\n  margin: 12px;\n}\n.ppg__fab-title {\n  font-size: 22px;\n  margin-bottom: 5px;\n}\n.ppg__fab-bubble {\n  display: none;\n  padding-bottom: 10px;\n  position: relative;\n}\n.ppg__fab-bubble-inner {\n  transition: all 0.5s;\n  padding: 20px;\n  border-radius: 4px;\n  text-align: left;\n  background: #fff;\n  border: 1px solid #e8e8e8;\n  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);\n  max-width: 220px;\n}\n.ppg__fab-bubble .ppg__btn {\n  margin-top: 20px;\n}\n.ppg__fab-bubble--opened {\n  display: block;\n}\n@media (max-width: 500px) {\n  .ppg__fab {\n    padding: 10px;\n  }\n}\n@-moz-keyframes shake-that-ppg {\n  0% {\n    transform: rotate(0);\n  }\n  1% {\n    transform: rotate(-20deg);\n  }\n  3% {\n    transform: rotate(20deg);\n  }\n  5% {\n    transform: rotate(-20deg);\n  }\n  7% {\n    transform: rotate(20deg);\n  }\n  9% {\n    transform: rotate(-20deg);\n  }\n  11% {\n    transform: rotate(20deg);\n  }\n  13% {\n    transform: rotate(-20deg);\n  }\n  15% {\n    transform: rotate(20deg);\n  }\n  17% {\n    transform: rotate(-20deg);\n  }\n  18% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(0);\n  }\n}\n@-webkit-keyframes shake-that-ppg {\n  0% {\n    transform: rotate(0);\n  }\n  1% {\n    transform: rotate(-20deg);\n  }\n  3% {\n    transform: rotate(20deg);\n  }\n  5% {\n    transform: rotate(-20deg);\n  }\n  7% {\n    transform: rotate(20deg);\n  }\n  9% {\n    transform: rotate(-20deg);\n  }\n  11% {\n    transform: rotate(20deg);\n  }\n  13% {\n    transform: rotate(-20deg);\n  }\n  15% {\n    transform: rotate(20deg);\n  }\n  17% {\n    transform: rotate(-20deg);\n  }\n  18% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(0);\n  }\n}\n@keyframes shake-that-ppg {\n  0% {\n    transform: rotate(0);\n  }\n  1% {\n    transform: rotate(-20deg);\n  }\n  3% {\n    transform: rotate(20deg);\n  }\n  5% {\n    transform: rotate(-20deg);\n  }\n  7% {\n    transform: rotate(20deg);\n  }\n  9% {\n    transform: rotate(-20deg);\n  }\n  11% {\n    transform: rotate(20deg);\n  }\n  13% {\n    transform: rotate(-20deg);\n  }\n  15% {\n    transform: rotate(20deg);\n  }\n  17% {\n    transform: rotate(-20deg);\n  }\n  18% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(0);\n  }\n}\n@-webkit-keyframes light-that-ppg {\n  0% {\n    opacity: 0;\n  }\n  10% {\n    opacity: 1;\n  }\n  20% {\n    opacity: 1;\n  }\n  30% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@-moz-keyframes light-that-ppg {\n  0% {\n    opacity: 0;\n  }\n  10% {\n    opacity: 1;\n  }\n  20% {\n    opacity: 1;\n  }\n  30% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes light-that-ppg {\n  0% {\n    opacity: 0;\n  }\n  10% {\n    opacity: 1;\n  }\n  20% {\n    opacity: 1;\n  }\n  30% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n",""])},155:function(n,e){n.exports=function(){var n=[];return n.toString=function(){for(var n=[],e=0;e<this.length;e++){var t=this[e];t[2]?n.push("@media "+t[2]+"{"+t[1]+"}"):n.push(t[1])}return n.join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},156:function(n,e){function t(n,e){for(var t=0;t<n.length;t++){var r=n[t],o=u[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(s(r.parts[i],e))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(s(r.parts[i],e));u[r.id]={id:r.id,refs:1,parts:a}}}}function r(n){for(var e=[],t={},r=0;r<n.length;r++){var o=n[r],i=o[0],a=o[1],p=o[2],s=o[3],d={css:a,media:p,sourceMap:s};t[i]?t[i].parts.push(d):e.push(t[i]={id:i,parts:[d]})}return e}function o(n,e){var t=h(),r=v[v.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),v.push(e);else{if("bottom"!==n.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(e)}}function i(n){n.parentNode.removeChild(n);var e=v.indexOf(n);e>=0&&v.splice(e,1)}function a(n){var e=document.createElement("style");return e.type="text/css",o(n,e),e}function p(n){var e=document.createElement("link");return e.rel="stylesheet",o(n,e),e}function s(n,e){var t,r,o;if(e.singleton){var s=m++;t=b||(b=a(e)),r=d.bind(null,t,s,!1),o=d.bind(null,t,s,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=p(e),r=l.bind(null,t),o=function(){i(t),t.href&&URL.revokeObjectURL(t.href)}):(t=a(e),r=c.bind(null,t),o=function(){i(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}function d(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=_(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function c(n,e){var t=e.css,r=e.media;if(r&&n.setAttribute("media",r),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function l(n,e){var t=e.css,r=e.sourceMap;r&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([t],{type:"text/css"}),i=n.href;n.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var u={},f=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}},g=f(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),h=f(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,m=0,v=[];n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},void 0===e.singleton&&(e.singleton=g()),void 0===e.insertAt&&(e.insertAt="bottom");var o=r(n);return t(o,e),function(n){for(var i=[],a=0;a<o.length;a++){var p=o[a],s=u[p.id];s.refs--,i.push(s)}if(n){t(r(n),e)}for(var a=0;a<i.length;a++){var s=i[a];if(0===s.refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete u[s.id]}}}};var _=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},204:function(n,e,t){var r,o,i;!function(t,a){o=[e],r=a,void 0!==(i="function"==typeof r?r.apply(e,o):r)&&(n.exports=i)}(0,function(n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e,t,r="http://www.w3.org/2000/svg",o=[],i=function(n,e){var t={};return Object.keys(n).forEach(function(e){t[e]=n[e]}),e&&Object.keys(e).forEach(function(n){t[n]=e[n]}),t},a=function(n,e){return n.vnodeSelector===e.vnodeSelector&&(n.properties&&e.properties?n.properties.key===e.properties.key&&n.properties.bind===e.properties.bind:!n.properties&&!e.properties)},p=function(n){return{vnodeSelector:"",properties:void 0,children:void 0,text:n.toString(),domNode:null}},s=function(n,e,t){for(var r=0,o=e.length;r<o;r++){var i=e[r];Array.isArray(i)?s(n,i,t):null!==i&&void 0!==i&&(i.hasOwnProperty("vnodeSelector")||(i=p(i)),t.push(i))}},d=function(){throw new Error("Provide a transitions object to the projectionOptions to do animations")},c={namespace:void 0,eventHandlerInterceptor:void 0,styleApplyer:function(n,e,t){n.style[e]=t},transitions:{enter:d,exit:d}},l=function(n){return i(c,n)},u=function(n){if("string"!=typeof n)throw new Error("Style values must be strings")},f=function(n,e,t){if(e)for(var o=t.eventHandlerInterceptor,i=Object.keys(e),a=i.length,p=0;p<a;p++)!function(a){var p=i[a],s=e[p];if("className"===p)throw new Error('Property "className" is not supported, use "class".');if("class"===p)s.split(/\s+/).forEach(function(e){return n.classList.add(e)});else if("classes"===p)for(var d=Object.keys(s),c=d.length,l=0;l<c;l++){var f=d[l];s[f]&&n.classList.add(f)}else if("styles"===p)for(var g=Object.keys(s),h=g.length,l=0;l<h;l++){var b=g[l],m=s[b];m&&(u(m),t.styleApplyer(n,b,m))}else if("key"!==p&&null!==s&&void 0!==s){var v=typeof s;"function"===v?0===p.lastIndexOf("on",0)&&(o&&(s=o(p,s,n,e)),"oninput"===p&&function(){var n=s;s=function(e){n.apply(this,[e]),e.target["oninput-value"]=e.target.value}}(),n[p]=s):"string"===v&&"value"!==p&&"innerHTML"!==p?t.namespace===r&&"href"===p?n.setAttributeNS("http://www.w3.org/1999/xlink",p,s):n.setAttribute(p,s):n[p]=s}}(p)},g=function(n,e,t,o){if(t){for(var i=!1,a=Object.keys(t),p=a.length,s=0;s<p;s++){var d=a[s],c=t[d],l=e[d];if("class"===d){if(l!==c)throw new Error('"class" property may not be updated. Use the "classes" property for conditional css classes.')}else if("classes"===d)for(var f=n.classList,g=Object.keys(c),h=g.length,b=0;b<h;b++){var m=g[b],v=!!c[m],_=!!l[m];v!==_&&(i=!0,v?f.add(m):f.remove(m))}else if("styles"===d)for(var x=Object.keys(c),y=x.length,b=0;b<y;b++){var k=x[b],w=c[k],S=l[k];w!==S&&(i=!0,w?(u(w),o.styleApplyer(n,k,w)):o.styleApplyer(n,k,""))}else if(c||"string"!=typeof l||(c=""),"value"===d){var T=n[d];T!==c&&(n["oninput-value"]?T===n["oninput-value"]:c!==l)&&(n[d]=c,n["oninput-value"]=void 0),c!==l&&(i=!0)}else if(c!==l){var N=typeof c;if("function"===N)throw new Error("Functions may not be updated on subsequent renders (property: "+d+"). Hint: declare event handler functions outside the render() function.");"string"===N&&"innerHTML"!==d?o.namespace===r&&"href"===d?n.setAttributeNS("http://www.w3.org/1999/xlink",d,c):"role"===d&&""===c?n.removeAttribute(d):n.setAttribute(d,c):n[d]!==c&&(n[d]=c),i=!0}}return i}},h=function(n,e,t){if(""!==e.vnodeSelector)for(var r=t;r<n.length;r++)if(a(n[r],e))return r;return-1},b=function(n,e){if(n.properties){var t=n.properties.enterAnimation;t&&("function"==typeof t?t(n.domNode,n.properties):e.enter(n.domNode,n.properties,t))}},m=function(n,e){var t=n.domNode;if(n.properties){var r=n.properties.exitAnimation;if(r){t.style.pointerEvents="none";var o=function(){t.parentNode&&t.parentNode.removeChild(t)};return"function"==typeof r?void r(t,o,n.properties):void e.exit(n.domNode,n.properties,r,o)}}t.parentNode&&t.parentNode.removeChild(t)},v=function(n,e,t,r){var o=n[e];if(""!==o.vnodeSelector){var i=o.properties;if(!(i?void 0===i.key?i.bind:i.key:void 0))for(var p=0;p<n.length;p++)if(p!==e){var s=n[p];if(a(s,o))throw"added"===r?new Error(t.vnodeSelector+" had a "+o.vnodeSelector+" child added, but there is now more than one. You must add unique key properties to make them distinguishable."):new Error(t.vnodeSelector+" had a "+o.vnodeSelector+" child removed, but there were more than one. You must add unique key properties to make them distinguishable.")}}},_=function(n,r,i,p,s){if(i===p)return!1;i=i||o,p=p||o;for(var d,c=i.length,l=p.length,u=s.transitions,f=0,g=0,_=!1;g<l;){var x=f<c?i[f]:void 0,y=p[g];if(void 0!==x&&a(x,y))_=t(x,y,s)||_,f++;else{var k=h(i,y,f+1);if(k>=0){for(d=f;d<k;d++)m(i[d],u),v(i,d,n,"removed");_=t(i[k],y,s)||_,f=k+1}else e(y,r,f<c?i[f].domNode:void 0,s),b(y,u),v(p,g,n,"added")}g++}if(c>f)for(d=f;d<c;d++)m(i[d],u),v(i,d,n,"removed");return _},x=function(n,t,r){if(t)for(var o=0;o<t.length;o++)e(t[o],n,void 0,r)},y=function(n,e,t){x(n,e.children,t),e.text&&(n.textContent=e.text),f(n,e.properties,t),e.properties&&e.properties.afterCreate&&e.properties.afterCreate.apply(e.properties.bind||e.properties,[n,t,e.vnodeSelector,e.properties,e.children])};e=function(n,e,t,o){var a,p,s,d,c,l=0,u=n.vnodeSelector,f=e.ownerDocument;if(""===u)a=n.domNode=f.createTextNode(n.text),void 0!==t?e.insertBefore(a,t):e.appendChild(a);else{for(p=0;p<=u.length;++p)s=u.charAt(p),p!==u.length&&"."!==s&&"#"!==s||(d=u.charAt(l-1),c=u.slice(l,p),"."===d?a.classList.add(c):"#"===d?a.id=c:("svg"===c&&(o=i(o,{namespace:r})),void 0!==o.namespace?a=n.domNode=f.createElementNS(o.namespace,c):(a=n.domNode=n.domNode||f.createElement(c),"input"===c&&n.properties&&void 0!==n.properties.type&&a.setAttribute("type",n.properties.type)),void 0!==t?e.insertBefore(a,t):a.parentNode!==e&&e.appendChild(a)),l=p+1);y(a,n,o)}},t=function(n,e,t){var o=n.domNode,a=!1;if(n===e)return!1;var p=!1;if(""===e.vnodeSelector){if(e.text!==n.text){var s=o.ownerDocument.createTextNode(e.text);return o.parentNode.replaceChild(s,o),e.domNode=s,a=!0}}else 0===e.vnodeSelector.lastIndexOf("svg",0)&&(t=i(t,{namespace:r})),n.text!==e.text&&(p=!0,void 0===e.text?o.removeChild(o.firstChild):o.textContent=e.text),p=_(e,o,n.children,e.children,t)||p,p=g(o,n.properties,e.properties,t)||p,e.properties&&e.properties.afterUpdate&&e.properties.afterUpdate.apply(e.properties.bind||e.properties,[o,t,e.vnodeSelector,e.properties,e.children]);return p&&e.properties&&e.properties.updateAnimation&&e.properties.updateAnimation(o,e.properties,n.properties),e.domNode=n.domNode,a};var k=function(n,e){return{update:function(r){if(n.vnodeSelector!==r.vnodeSelector)throw new Error("The selector for the root VNode may not be changed. (consider using dom.merge and add one extra level to the virtual DOM)");t(n,r,e),n=r},domNode:n.domNode}};n.h=function(n){var e=arguments[1];if("string"!=typeof n)throw new Error;var t=1;!e||e.hasOwnProperty("vnodeSelector")||Array.isArray(e)||"object"!=typeof e?e=void 0:t=2;var r,o,i=arguments.length;if(i===t+1){var a=arguments[t];"string"==typeof a?r=a:void 0!==a&&null!==a&&1===a.length&&"string"==typeof a[0]&&(r=a[0])}if(void 0===r)for(o=[];t<i;t++){var d=arguments[t];null===d||void 0===d||(Array.isArray(d)?s(n,d,o):d.hasOwnProperty("vnodeSelector")?o.push(d):o.push(p(d)))}return{vnodeSelector:n,properties:e,children:o,text:""===r?void 0:r,domNode:null}},n.dom={create:function(n,t){return t=l(t),e(n,document.createElement("div"),void 0,t),k(n,t)},append:function(n,t,r){return r=l(r),e(t,n,void 0,r),k(t,r)},insertBefore:function(n,t,r){return r=l(r),e(t,n.parentNode,n,r),k(t,r)},merge:function(n,e,t){return t=l(t),e.domNode=n,y(n,e,t),k(e,t)},replace:function(n,t,r){return r=l(r),e(t,n.parentNode,n,r),n.parentNode.removeChild(n),k(t,r)}},n.createCache=function(){var n,e;return{invalidate:function(){e=void 0,n=void 0},result:function(t,r){if(n)for(var o=0;o<t.length;o++)n[o]!==t[o]&&(e=void 0);return e||(e=r(),n=t),e}}},n.createMapping=function(n,e,t){var r=[],o=[];return{results:o,map:function(i){for(var a=i.map(n),p=o.slice(),s=0,d=0;d<i.length;d++){var c=i[d],l=a[d];if(l===r[s])o[d]=p[s],t(c,p[s],d),s++;else{for(var u=!1,f=1;f<r.length+1;f++){var g=(s+f)%r.length;if(r[g]===l){o[d]=p[g],t(i[d],p[g],d),s=g+1,u=!0;break}}u||(o[d]=e(c,d))}}o.length=i.length,r=a}}},n.createProjector=function(e){var t,r=l(e);r.eventHandlerInterceptor=function(n,e,r,o){return function(){return t.scheduleRender(),e.apply(o.bind||this,arguments)}};var o,i=!0,a=!1,p=[],s=[],d=function(){if(o=void 0,i){i=!1;for(var n=0;n<p.length;n++){var e=s[n]();p[n].update(e)}i=!0}};return t={renderNow:d,scheduleRender:function(){o||a||(o=requestAnimationFrame(d))},stop:function(){o&&(cancelAnimationFrame(o),o=void 0),a=!0},resume:function(){a=!1,i=!0,t.scheduleRender()},append:function(e,t){p.push(n.dom.append(e,t(),r)),s.push(t)},insertBefore:function(e,t){p.push(n.dom.insertBefore(e,t(),r)),s.push(t)},merge:function(e,t){p.push(n.dom.merge(e,t(),r)),s.push(t)},replace:function(e,t){p.push(n.dom.replace(e,t(),r)),s.push(t)},detach:function(n){for(var e=0;e<s.length;e++)if(s[e]===n)return s.splice(e,1),p.splice(e,1)[0];throw new Error("renderMaquetteFunction was not found")}}}})},207:function(n,e,t){n.exports=t.p+"assets/bell-icon-white.png"},208:function(n,e,t){n.exports=t.p+"assets/icons.png"},209:function(n,e,t){n.exports=t.p+"assets/ppg-arrow.png"},214:function(n,e,t){"use strict";var r=this&&this.__assign||Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n};Object.defineProperty(e,"__esModule",{value:!0});var o=t(204),i=function(){function n(n){this.store=n}return n.prototype.getProperties=function(n){switch(n.id){case"allow":return{onclick:this.store.handleFormSubscribeClick};case"deny":case"backdrop":case"close":return{onclick:this.store.onDialogDeny}}},n.prototype.createElement=function(n){var e,t=this;n.child&&(e=n.child.map(function(n){return t.createElement(n)}));var i=r({},n.properties,this.getProperties(n));return n.uuid&&(i.class=n.uuid),o.h(n.type,i,n.text?[n.text]:e)},n.createStyleElement=function(){var n=window.document.createElement("style");return n.setAttribute("type","text/css"),n.setAttribute("ppg-form",""),n},n.appendStyles=function(e){var t=window.document.querySelector("style[ppg-form]");t||(t=n.createStyleElement()),t.innerHTML=e,window.document.head.appendChild(t)},n.prototype.buildForm=function(){var e=this,t=JSON.parse(this.store.options.subscriptionForm.template),r=t.map(function(n){return e.createElement(n)});return n.appendStyles(this.store.options.subscriptionForm.styles),o.h("div",r)},n}();e.FormBuilder=i}});
//# sourceMappingURL=push.js.map