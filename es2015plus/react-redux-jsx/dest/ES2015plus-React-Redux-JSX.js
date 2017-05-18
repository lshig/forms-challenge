!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var a=t();for(var n in a)("object"==typeof exports?exports:e)[n]=a[n]}}(this,function(){return webpackJsonp([0],{100:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.checkboxOptions,a=e.className,n=e.id,i=e.onCheckboxClick,r=e.onAutofillClick,u=e.onNextClick;return l.default.createElement("div",{id:n,className:a},l.default.createElement("div",{className:"form--content"},t.map(function(e,t){return l.default.createElement("div",{className:"row",key:t},l.default.createElement("div",{className:"center"},l.default.createElement(f.default,{className:"input--checkbox",label:e,name:"weekday",onClick:i,type:"checkbox",value:e})))})),l.default.createElement("div",{className:"row"},l.default.createElement(s.default,{className:"autofill",id:"autofillButton",onClick:r,text:"Autofill"}),l.default.createElement(s.default,{className:"next",onClick:u,text:"Next"})))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var r=a(5),l=n(r),u=a(9),o=n(u),c=a(20),s=n(c),d=a(56),f=n(d);i.propTypes={checkboxOptions:o.default.array.isRequired,className:o.default.string.isRequired,id:o.default.string.isRequired,onAutofillClick:o.default.func.isRequired,onCheckboxClick:o.default.func.isRequired,onNextClick:o.default.func.isRequired}},101:function(e,t,a){"use strict";function n(){return r.default.createElement("section",{id:"introduction"},r.default.createElement("div",{className:"row"},r.default.createElement("h1",{className:"project-title"},"JavaScript ES2015+ Forms: ",r.default.createElement("br",null),"React, Redux, & JSX"),r.default.createElement("a",{href:"https://lshig.github.io",target:"_blank"},r.default.createElement("span",{className:"author"},"Liz Shigetoshi"))))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var i=a(5),r=function(e){return e&&e.__esModule?e:{default:e}}(i)},102:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.id,a=e.className,n=e.onRadioClick,i=e.onPreviousClick,l=e.onNextClick,o=e.radioOptions;return u.default.createElement("div",{id:t,className:a},u.default.createElement("div",{className:"form--content"},o.map(function(e,t){return u.default.createElement("div",{className:"row",key:t},u.default.createElement("div",{className:"center"},u.default.createElement(m.default,r({},e,{className:"input--radio",name:"timeOfDay",onClick:n,type:"radio"}))))})),u.default.createElement("div",{className:"row"},u.default.createElement(d.default,{className:"previous",onClick:i,text:"Previous"}),u.default.createElement(d.default,{className:"next",onClick:l,text:"Next"})))}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};t.default=i;var l=a(5),u=n(l),o=a(9),c=n(o),s=a(20),d=n(s),f=a(56),m=n(f);i.propTypes={className:c.default.string.isRequired,id:c.default.string.isRequired,onNextClick:c.default.func.isRequired,onPreviousClick:c.default.func.isRequired,onRadioClick:c.default.func.isRequired,radioOptions:c.default.array.isRequired}},103:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.name,a=e.label,n=e.onChange,i=e.options;return l.default.createElement("div",{className:"select"},l.default.createElement("select",{id:t,name:t,onChange:n},l.default.createElement("option",{key:a,value:""},a),i.map(function(e,t){return l.default.createElement("option",{key:t,value:e},e)})),l.default.createElement("div",{className:"select__arrow"}))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var r=a(5),l=n(r),u=a(9),o=n(u);i.propTypes={label:o.default.string.isRequired,name:o.default.string.isRequired,onChange:o.default.func.isRequired,options:o.default.array.isRequired}},104:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.className,a=e.selectOptions,n=e.id,i=e.onSelectChange,l=e.onPreviousClick,o=e.onNextClick;return u.default.createElement("div",{id:n,className:t},u.default.createElement("div",{className:"form--content"},a.map(function(e,t){return u.default.createElement("div",{className:"row",key:t},u.default.createElement("div",{className:"center"},u.default.createElement(m.default,r({},e,{onChange:i}))))})),u.default.createElement("div",{className:"row"},u.default.createElement(d.default,{className:"previous",onClick:l,text:"Previous"}),u.default.createElement(d.default,{className:"next",onClick:o,text:"Next"})))}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};t.default=i;var l=a(5),u=n(l),o=a(9),c=n(o),s=a(20),d=n(s),f=a(103),m=n(f);i.propTypes={className:c.default.string.isRequired,id:c.default.string.isRequired,selectOptions:c.default.array.isRequired,onNextClick:c.default.func.isRequired,onPreviousClick:c.default.func.isRequired,onSelectChange:c.default.func.isRequired}},105:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.name,a=e.label,n=e.className,i=e.onChange,r=e.placeholder;return l.default.createElement("label",{htmlFor:t},a,l.default.createElement("textarea",{className:n,id:t,name:t,onChange:i,placeholder:r,type:"text"}))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var r=a(5),l=n(r),u=a(9),o=n(u);i.propTypes={className:o.default.string.isRequired,label:o.default.string.isRequired,name:o.default.string.isRequired,onChange:o.default.func.isRequired,placeholder:o.default.string.isRequired}},106:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.id,a=e.className,n=e.onTextareaChange,i=e.onPreviousClick,l=e.onSubmitClick,o=e.textareaOptions;return u.default.createElement("div",{id:t,className:a},u.default.createElement("div",{className:"form--content"},o.map(function(e,t){return u.default.createElement("div",{className:"row",key:t},u.default.createElement(m.default,r({},e,{onChange:n})))})),u.default.createElement("div",{className:"row"},u.default.createElement(d.default,{className:"previous",onClick:i,text:"Previous"}),u.default.createElement(d.default,{className:"submit",id:"submitButton",onClick:l,text:"Submit"})))}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};t.default=i;var l=a(5),u=n(l),o=a(9),c=n(o),s=a(20),d=n(s),f=a(105),m=n(f);i.propTypes={className:c.default.string.isRequired,id:c.default.string.isRequired,onPreviousClick:c.default.func.isRequired,onSubmitClick:c.default.func.isRequired,onTextareaChange:c.default.func.isRequired,textareaOptions:c.default.array.isRequired}},107:function(e,t,a){"use strict";function n(){return{type:u.AUTOFILL_FORM}}function i(e,t){return{type:u.INPUT_VALUE,name:e,value:t}}function r(){return{type:u.RESET_FORM}}function l(){return{type:u.SUBMIT_FORM}}Object.defineProperty(t,"__esModule",{value:!0}),t.autofillForm=n,t.inputValue=i,t.resetForm=r,t.submitForm=l;var u=a(57)},108:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(31),i=a(57),r={comments:"",dateTime:"",day:"",firstName:"",lastName:"",month:"",timeOfDay:"",weekday:[],year:""},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments[1];switch(t.type){case i.AUTOFILL_FORM:var a={comments:"Hello, World!",firstName:"Jane",lastName:"Doe",day:"14",month:"3",timeOfDay:"Late Night",weekday:["Sunday","Thursday","Friday","Saturday"],year:"2015"};return(0,n.setView)(a),a;case i.INPUT_VALUE:var l={};return l[t.name]=t.value,Object.assign({},e,l);case i.RESET_FORM:var u={comments:"",dateTime:"",day:"",firstName:"",lastName:"",month:"",timeOfDay:"",weekday:[],year:""};return(0,n.setView)(u),u;case i.SUBMIT_FORM:default:return e}};t.default=l},109:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){var t=e.navigation,a=t.activeTabId,n=t.activeContentId,i=e.timer,r=i.activeTime,l=i.dateTime,u=i.sessionDuration,o=i.intervalId,c=i.timeCounter,s=i.timerStatus,d=e.form;return{activeTabId:a,activeContentId:n,activeTime:r,intervalId:o,timeCounter:c,sessionDuration:u,dateTime:l,timerStatus:s,comments:d.comments,firstName:d.firstName,lastName:d.lastName,day:d.day,month:d.month,timeOfDay:d.timeOfDay,weekday:d.weekday,year:d.year}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(5),s=n(c),d=a(55),f=a(107),m=a(110),v=a(112),p=a(31),h=a(20),T=n(h),E=a(100),b=n(E),_=a(104),C=n(_),y=a(102),N=n(y),k=a(106),I=n(k),R=function(e){function t(e){i(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleAutofillClick=a.handleAutofillClick.bind(a),a.handleCheckboxClick=a.handleCheckboxClick.bind(a),a.handleDirectionClick=a.handleDirectionClick.bind(a),a.handleInputEvent=a.handleInputEvent.bind(a),a.handleRepeatClick=a.handleRepeatClick.bind(a),a.handleSubmitClick=a.handleSubmitClick.bind(a),a.handleTabClick=a.handleTabClick.bind(a),a}return l(t,e),o(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e((0,v.startTimer)(this.handleTimer.bind(this))),e((0,f.resetForm)()),e((0,m.resetNavigation)())}},{key:"handleAutofillClick",value:function(){(0,this.props.dispatch)((0,f.autofillForm)())}},{key:"handleCheckboxClick",value:function(e){for(var t=this.props.dispatch,a=document.getElementsByName(e.target.name),n=[],i=0;i<a.length;i++)a[i].checked&&n.push(a[i].value);t((0,f.inputValue)(e.target.name,n))}},{key:"handleDirectionClick",value:function(e,t){(0,this.props.dispatch)((0,m.showDirectedContent)(e.target.parentNode.parentNode.id,t))}},{key:"handleInputEvent",value:function(e){(0,this.props.dispatch)((0,f.inputValue)(e.target.name,e.target.value))}},{key:"handleRepeatClick",value:function(){var e=this.props.dispatch;e((0,v.resetTimer)(this.handleTimer.bind(this))),e((0,f.resetForm)()),e((0,m.resetNavigation)())}},{key:"handleSubmitClick",value:function(){var e=this.props,t=e.dispatch,a=e.timeCounter,n=e.intervalId;t((0,v.earlyStopTimer)(a,n)),t((0,f.submitForm)())}},{key:"handleTabClick",value:function(e){(0,this.props.dispatch)((0,m.showTabContent)(e.target.id))}},{key:"handleTimer",value:function(){var e=this.props,t=e.dispatch,a=e.timeCounter,n=e.intervalId;t(a<0?(0,v.stopTimer)(n):(0,v.proceedTimer)(a))}},{key:"render",value:function(){var e=this,t=function(e,t){for(var a=[],n=e;n<=t;n++)a.push(n);return a},a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],n=[{label:"Month",name:"month",options:t(1,12)},{label:"Day",name:"day",options:t(1,31)},{label:"Year",name:"year",options:t(2e3,2018)}],i=[{label:"5AM - 11:59AM",value:"Morning"},{label:"12PM - 12:59PM",value:"Noon"},{label:"1PM - 4:59PM",value:"Afternoon"},{label:"5PM - 7:59AM",value:"Evening"},{label:"8PM - 11:59AM",value:"Night"},{label:"12AM - 12:59AM",value:"Midnight"},{label:"1AM - 4:59AM",value:"Late Night"}],r=[{className:"textarea__small",label:"First Name",name:"firstName",placeholder:"Jane"},{className:"textarea__small",label:"Last Name",name:"lastName",placeholder:"Doe"},{className:"textarea__large",label:"Comments",name:"comments",placeholder:"Hello, World!"}],l=this.props,u=l.activeTime,o=l.activeTabId,c=l.activeContentId,d=l.timerStatus,f=u?"content__hide":"",m=u?"":"content__hide",v=function(e){return c===e?"":"content__hide"},h=function(e){return o===e?" nav--tab__selected":""};return s.default.createElement("div",null,s.default.createElement("section",{id:"time-display"},s.default.createElement("div",{className:"row"},s.default.createElement("h1",{id:"timer"},d))),s.default.createElement("section",{id:"interaction",className:m},s.default.createElement("nav",null,p.tabContentMap.map(function(t){return s.default.createElement(T.default,{key:t.tabId,className:"nav--tab "+h(t.tabId),id:t.tabId,onClick:e.handleTabClick,text:t.tabText})})),s.default.createElement("form",null,s.default.createElement(b.default,{checkboxOptions:a,className:v("checkboxContent"),id:"checkboxContent",onCheckboxClick:this.handleCheckboxClick,onAutofillClick:this.handleAutofillClick,onNextClick:function(t){e.handleDirectionClick(t,!1)}}),s.default.createElement(C.default,{className:v("selectContent"),id:"selectContent",onSelectChange:this.handleInputEvent,onNextClick:function(t){e.handleDirectionClick(t,!1)},onPreviousClick:function(t){e.handleDirectionClick(t,!0)},selectOptions:n}),s.default.createElement(N.default,{className:v("radioContent"),id:"radioContent",onRadioClick:this.handleInputEvent,onNextClick:function(t){e.handleDirectionClick(t,!1)},onPreviousClick:function(t){e.handleDirectionClick(t,!0)},radioOptions:i}),s.default.createElement(I.default,{className:v("textareaContent"),id:"textareaContent",onTextareaChange:this.handleInputEvent,onPreviousClick:function(t){e.handleDirectionClick(t,!0)},onSubmitClick:this.handleSubmitClick,textareaOptions:r}))),s.default.createElement("section",{id:"results",className:f},s.default.createElement("div",{className:"row"},s.default.createElement("h3",{className:"user-summary"},"JSON Results"),s.default.createElement("pre",{id:"userSummary"},JSON.stringify((0,p.transformData)(this.props)))),s.default.createElement("div",{className:"row"},s.default.createElement(T.default,{className:"repeat",onClick:this.handleRepeatClick,id:"repeatButton",text:"Repeat"}))))}}]),t}(c.Component);t.default=(0,d.connect)(u)(R)},110:function(e,t,a){"use strict";function n(){return{type:l.RESET_NAVIGATION}}function i(e,t){return{type:l.SHOW_DIRECTED_CONTENT,tabId:e,previousFlag:t}}function r(e){return{type:l.SHOW_TAB_CONTENT,tabId:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.resetNavigation=n,t.showDirectedContent=i,t.showTabContent=r;var l=a(58)},111:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(31),i=a(58),r={activeTabId:"checkboxTab",activeContentId:"checkboxContent"},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments[1];switch(t.type){case i.RESET_NAVIGATION:return{activeTabId:"checkboxTab",activeContentId:"checkboxContent"};case i.SHOW_DIRECTED_CONTENT:var a=(0,n.matchContentToTab)(t.tabId,t.previousFlag);return{activeTabId:a.tabId,activeContentId:a.contentId};case i.SHOW_TAB_CONTENT:return{activeTabId:t.tabId,activeContentId:(0,n.getContentId)(t.tabId)};default:return e}};t.default=l},112:function(e,t,a){"use strict";function n(e,t){return{type:o.EARLY_STOP_TIMER,timeCounter:e,intervalId:t}}function i(e){return{type:o.PROCEED_TIMER,timeCounter:e}}function r(e){return{type:o.RESET_TIMER,timeHandler:e}}function l(e){return{type:o.START_TIMER,timeHandler:e}}function u(e){return{type:o.STOP_TIMER,intervalId:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.earlyStopTimer=n,t.proceedTimer=i,t.resetTimer=r,t.startTimer=l,t.stopTimer=u;var o=a(59)},113:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(59),i={activeTime:!0,dateTime:"",intervalId:"",sessionDuration:"0",timeCounter:n.TIMER_DURATION,timerStatus:"Begin!"},r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1];switch(t.type){case n.EARLY_STOP_TIMER:return Object.assign({},e,{activeTime:!1,dateTime:(new Date).toISOString(),intervalId:clearInterval(t.intervalId),sessionDuration:(n.TIMER_DURATION-t.timeCounter-1).toString(),timerStatus:"Thanks for your submission!"});case n.PROCEED_TIMER:var a=parseInt(t.timeCounter/60,10),r=parseInt(t.timeCounter%60,10);return a=a<10?"0"+a:a,r=r<10?"0"+r:r,Object.assign({},e,{timerStatus:a+":"+r,timeCounter:t.timeCounter-1});case n.RESET_TIMER:return{activeTime:!0,dateTime:"",intervalId:setInterval(t.timeHandler,1e3),sessionDuration:"0",timeCounter:n.TIMER_DURATION,timerStatus:"Another One!"};case n.START_TIMER:return{activeTime:!0,dateTime:"",intervalId:setInterval(t.timeHandler,1e3),sessionDuration:"0",timeCounter:n.TIMER_DURATION,timerStatus:"Begin!"};case n.STOP_TIMER:return Object.assign({},e,{activeTime:!1,dateTime:(new Date).toISOString(),intervalId:clearInterval(t.intervalId),sessionDuration:n.TIMER_DURATION.toString(),timerStatus:"Time's up!"});default:return e}};t.default=r},114:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(53),r=a(108),l=n(r),u=a(111),o=n(u),c=a(113),s=n(c),d=(0,i.combineReducers)({form:l.default,navigation:o.default,timer:s.default});t.default=d},115:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i=a(5),r=n(i),l=a(99),u=a(55),o=a(98),c=n(o),s=a(97),d=n(s),f=(0,c.default)();(0,l.render)(r.default.createElement(u.Provider,{store:f},r.default.createElement(d.default,null)),document.getElementById("app"))},20:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.id,a=e.className,n=e.onClick,i=e.text;return l.default.createElement("button",{id:t,className:a,onClick:n,type:"button"},i)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var r=a(5),l=n(r),u=a(9),o=n(u);i.propTypes={className:o.default.string.isRequired,id:o.default.string.isRequired,onClick:o.default.func.isRequired,text:o.default.string.isRequired}},31:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.tabContentMap=[{tabId:"checkboxTab",contentId:"checkboxContent",tabText:"Checkboxes"},{tabId:"selectTab",contentId:"selectContent",tabText:"Selects"},{tabId:"radioTab",contentId:"radioContent",tabText:"Radios"},{tabId:"textareaTab",contentId:"textareaContent",tabText:"Textareas"}],i=(t.getContentId=function(e){return n.filter(function(t){return t.tabId===e})[0].contentId},t.matchContentToTab=function(e,t){for(var a=0;a<n.length;a++)if(n[a].contentId===e){if(t&&a>0)return n[a-1];if(!t&&a<n.length-1)return n[a+1]}return{}},t.setAttributeFromModel=function(e,t,a){if(Array.isArray(a))for(var n=0;n<e.length;n++)a.indexOf(e[n].value)>-1?e[n][t]=!0:e[n][t]=!1;else if("string"==typeof a)if("selected"===t)for(var i=0;i<e.options.length;i++)e.options[i].value===a?e.options[i][t]=!0:e.options[i][t]=!1;else if("checked"===t)for(var r=0;r<e.length;r++)e[r].value===a?e[r][t]=!0:e[r][t]=!1;else e[t]=a});t.setView=function(e){var t=document.getElementById("comments"),a=document.getElementById("day"),n=document.getElementById("firstName"),r=document.getElementById("lastName"),l=document.getElementById("month"),u=document.getElementsByName("timeOfDay"),o=document.getElementsByName("weekday"),c=document.getElementById("year");i(n,"value",e.firstName),i(r,"value",e.lastName),i(t,"value",e.comments),i(o,"checked",e.weekday),i(u,"checked",e.timeOfDay),i(l,"selected",e.month),i(a,"selected",e.day),i(c,"selected",e.year)},t.transformData=function(e){var t={};for(var a in e)"activeTabId"!==a&&"activeContentId"!==a&&"activeTime"!==a&&"timerStatus"!==a&&"timeCounter"!==a&&"intervalId"!==a&&(t[a]=e[a]);return t}},56:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.className,a=e.label,n=e.name,i=e.onClick,r=e.type,u=e.value;return l.default.createElement("label",{className:"input "+t},a,l.default.createElement("input",{name:n,onClick:i,type:r,value:u}),l.default.createElement("div",{className:"input__choice"}))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var r=a(5),l=n(r),u=a(9),o=n(u);i.propTypes={className:o.default.string.isRequired,label:o.default.string.isRequired,name:o.default.string.isRequired,onClick:o.default.func.isRequired,type:o.default.string.isRequired,value:o.default.string.isRequired}},57:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.AUTOFILL_FORM="AUTOFILL_FORM",t.INPUT_VALUE="INPUT_VALUE",t.RESET_FORM="RESET_FORM",t.SUBMIT_FORM="SUBMIT_FORM"},58:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.RESET_NAVIGATION="RESET_NAVIGATION",t.SHOW_DIRECTED_CONTENT="SHOW_DIRECTED_CONTENT",t.SHOW_TAB_CONTENT="SHOW_TAB_CONTENT"},59:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.EARLY_STOP_TIMER="EARLY_STOP_TIMER",t.PROCEED_TIMER="PROCEED_TIMER",t.STOP_TIMER="STOP_TIMER",t.RESET_TIMER="RESET_TIMER",t.START_TIMER="START_TIMER",t.TIMER_DURATION=20},97:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(){return l.default.createElement("div",null,l.default.createElement(o.default,null),l.default.createElement(s.default,null))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var r=a(5),l=n(r),u=a(101),o=n(u),c=a(109),s=n(c)},98:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e){return(0,r.createStore)(s.default,e,(0,r.applyMiddleware)(u.default,d))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var r=a(53),l=a(232),u=n(l),o=a(231),c=a(114),s=n(c),d=(0,o.createLogger)()}},[115])});
//# sourceMappingURL=ES2015plus-React-Redux-JSX.js.map