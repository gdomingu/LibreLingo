(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{120:function(t,n,e){"use strict";var r=u("start"),i=u("end");function o(t){return{start:r(t),end:i(t)}}function u(t){return n.displayName=t,n;function n(n){var e=n&&n.position&&n.position[t]||{};return{line:e.line||null,column:e.column||null,offset:isNaN(e.offset)?null:e.offset}}}t.exports=o,o.start=r,o.end=i},121:function(t,n,e){"use strict";t.exports=function(t,n,e){var r=n&&n.type,i=o.call(t.handlers,r)?t.handlers[r]:t.unknownHandler;if(!r)throw new Error("Expected node, got `"+n+"`");return("function"==typeof i?i:u)(t,n,e)};var r=e(42),i=e(38),o={}.hasOwnProperty;function u(t,n){return function(t){var n=t.data||{};if(o.call(n,"hName")||o.call(n,"hProperties")||o.call(n,"hChildren"))return!1;return"value"in t}(n)?t.augment(n,r("text",n.value)):t(n,"div",i(t,n))}},122:function(t,n,e){"use strict";t.exports=function(t,n){return t(n,"hr")}},123:function(t,n,e){"use strict";t.exports=function(t,n){var e,o,u={},c=n.ordered?"ol":"ul",s=-1;"number"==typeof n.start&&1!==n.start&&(u.start=n.start);e=i(t,n),o=e.length;for(;++s<o;)if(e[s].properties.className&&-1!==e[s].properties.className.indexOf("task-list-item")){u.className=["contains-task-list"];break}return t(n,c,u,r(e,!0))};var r=e(51),i=e(38)},124:function(t,n,e){"use strict";t.exports=function(t,n){var e=t.footnoteOrder,i=String(n.identifier);-1===e.indexOf(i)&&e.push(i);return t(n.position,"sup",{id:"fnref-"+i},[t(n,"a",{href:"#fn-"+i,className:["footnote-ref"]},[r("text",n.label||i)])])};var r=e(42)},125:function(t,n,e){"use strict";t.exports=function(t,n){var e,o,u,c=n.referenceType,s="]";"collapsed"===c?s+="[]":"full"===c&&(s+="["+(n.label||n.identifier)+"]");if("imageReference"===n.type)return r("text","!["+n.alt+s);e=i(t,n),(o=e[0])&&"text"===o.type?o.value="["+o.value:e.unshift(r("text","["));(u=e[e.length-1])&&"text"===u.type?u.value+=s:e.push(r("text",s));return e};var r=e(42),i=e(38)},280:function(t,n,e){"use strict";var r=e(281);t.exports=function(t,n){t&&!t.process&&(n=t,t=null);return t?function(t,n){return function(e,i,o){t.run(r(e,n),i,(function(t){o(t)}))}}(t,n):function(t){return function(n){return r(n,t)}}(n)}},281:function(t,n,e){"use strict";t.exports=e(282)},282:function(t,n,e){"use strict";t.exports=function(t,n){var e=function(t,n){var e=n||{},r=e.allowDangerousHTML,s={};return p.dangerous=r,p.definition=c(t,e),p.footnoteById=s,p.footnoteOrder=[],p.augment=a,p.handlers=Object.assign({},l,e.handlers),p.unknownHandler=e.unknownHandler,i(t,"footnoteDefinition",(function(t){var n=String(t.identifier).toUpperCase();f.call(s,n)||(s[n]=t)})),p;function a(t,n){var e,r;return t&&"data"in t&&(e=t.data,"element"===n.type&&e.hName&&(n.tagName=e.hName),"element"===n.type&&e.hProperties&&(n.properties=Object.assign({},n.properties,e.hProperties)),n.children&&e.hChildren&&(n.children=e.hChildren)),r=t&&t.position?t:{position:t},u(r)||(n.position={start:o.start(r),end:o.end(r)}),n}function p(t,n,e,r){return null==r&&"object"==typeof e&&"length"in e&&(r=e,e={}),a(t,{type:"element",tagName:n,properties:e||{},children:r||[]})}}(t,n),p=s(e,t),d=a(e);d&&(p.children=p.children.concat(r("text","\n"),d));return p};var r=e(42),i=e(283),o=e(120),u=e(284),c=e(285),s=e(121),a=e(287),l=e(288),f={}.hasOwnProperty},283:function(t,n,e){"use strict";t.exports=c;var r=e(54),i=r.CONTINUE,o=r.SKIP,u=r.EXIT;function c(t,n,e,i){"function"==typeof n&&"function"!=typeof e&&(i=e,e=n,n=null),r(t,n,(function(t,n){var r=n[n.length-1],i=r?r.children.indexOf(t):null;return e(t,i,r)}),i)}c.CONTINUE=i,c.SKIP=o,c.EXIT=u},284:function(t,n,e){"use strict";function r(t){return t&&"object"==typeof t?t:{}}t.exports=function(t){var n=r(r(t).position),e=r(n.start),i=r(n.end);return!(e.line&&e.column&&i.line&&i.column)}},285:function(t,n,e){"use strict";var r=e(286);t.exports=function(t,n){return function(t){return function(n){var e=n&&o(n);return e&&i.call(t,e)?t[e]:null}}(function(t,n){var e={};if(!t||!t.type)throw new Error("mdast-util-definitions expected node");return r(t,"definition",n&&n.commonmark?function(t){var n=o(t.identifier);i.call(e,n)||(e[n]=t)}:function(t){e[o(t.identifier)]=t}),e}(t,n))};var i={}.hasOwnProperty;function o(t){return t.toUpperCase()}},286:function(t,n,e){"use strict";t.exports=c;var r=e(54),i=r.CONTINUE,o=r.SKIP,u=r.EXIT;function c(t,n,e,i){"function"==typeof n&&"function"!=typeof e&&(i=e,e=n,n=null),r(t,n,(function(t,n){var r=n[n.length-1],i=r?r.children.indexOf(t):null;return e(t,i,r)}),i)}c.CONTINUE=i,c.SKIP=o,c.EXIT=u},287:function(t,n,e){"use strict";t.exports=function(t){var n,e,u,c,s=t.footnoteById,a=t.footnoteOrder,l=a.length,f=-1,p=[];for(;++f<l;)(n=s[a[f].toUpperCase()])&&(u=n.children.concat(),c=u[u.length-1],e={type:"link",url:"#fnref-"+n.identifier,data:{hProperties:{className:["footnote-backref"]}},children:[{type:"text",value:"↩"}]},c&&"paragraph"===c.type||(c={type:"paragraph",children:[]},u.push(c)),c.children.push(e),p.push({type:"listItem",data:{hProperties:{id:"fn-"+n.identifier}},children:u,position:n.position}));if(0===p.length)return null;return t(null,"div",{className:["footnotes"]},o([r(t),i(t,{type:"list",ordered:!0,children:p})],!0))};var r=e(122),i=e(123),o=e(51)},288:function(t,n,e){"use strict";function r(){return null}t.exports={blockquote:e(289),break:e(290),code:e(291),delete:e(293),emphasis:e(294),footnoteReference:e(124),footnote:e(295),heading:e(296),html:e(297),imageReference:e(298),image:e(299),inlineCode:e(300),linkReference:e(301),link:e(302),listItem:e(303),list:e(123),paragraph:e(304),root:e(305),strong:e(306),table:e(307),text:e(308),thematicBreak:e(122),toml:r,yaml:r,definition:r,footnoteDefinition:r}},289:function(t,n,e){"use strict";t.exports=function(t,n){return t(n,"blockquote",r(i(t,n),!0))};var r=e(51),i=e(38)},290:function(t,n,e){"use strict";t.exports=function(t,n){return[t(n,"br"),r("text","\n")]};var r=e(42)},291:function(t,n,e){"use strict";t.exports=function(t,n){var e=n.value?r(n.value+"\n"):"",o=n.lang&&n.lang.match(/^[^ \t]+(?=[ \t]|$)/),u={};o&&(u.className=["language-"+o]);return t(n.position,"pre",[t(n,"code",u,[i("text",e)])])};var r=e(292),i=e(42)},292:function(t,n,e){"use strict";t.exports=function(t,n){var e,i,o="string"==typeof t,u=o&&t.length,c=0,s=-1,a=-1,l=n||4,f=[];if(!o)throw new Error("detab expected string");for(;++s<u;)9===(e=t.charCodeAt(s))?(a+=i=l-(a+1)%l,f.push(t.slice(c,s)+r(" ",i)),c=s+1):10===e||13===e?a=-1:a++;return f.push(t.slice(c)),f.join("")};var r=e(40)},293:function(t,n,e){"use strict";t.exports=function(t,n){return t(n,"del",r(t,n))};var r=e(38)},294:function(t,n,e){"use strict";t.exports=function(t,n){return t(n,"em",r(t,n))};var r=e(38)},295:function(t,n,e){"use strict";t.exports=function(t,n){var e=t.footnoteById,i=t.footnoteOrder,o=1;for(;o in e;)o++;return o=String(o),i.push(o),e[o]={type:"footnoteDefinition",identifier:o,children:[{type:"paragraph",children:n.children}],position:n.position},r(t,{type:"footnoteReference",identifier:o,position:n.position})};var r=e(124)},296:function(t,n,e){"use strict";t.exports=function(t,n){return t(n,"h"+n.depth,r(t,n))};var r=e(38)},297:function(t,n,e){"use strict";t.exports=function(t,n){return t.dangerous?t.augment(n,r("raw",n.value)):null};var r=e(42)},298:function(t,n,e){"use strict";t.exports=function(t,n){var e,o=t.definition(n.identifier);if(!o)return i(t,n);e={src:r(o.url||""),alt:n.alt},null!==o.title&&void 0!==o.title&&(e.title=o.title);return t(n,"img",e)};var r=e(56),i=e(125)},299:function(t,n,e){"use strict";var r=e(56);t.exports=function(t,n){var e={src:r(n.url),alt:n.alt};null!==n.title&&void 0!==n.title&&(e.title=n.title);return t(n,"img",e)}},300:function(t,n,e){"use strict";t.exports=function(t,n){return t(n,"code",[i("text",r(n.value))])};var r=e(62),i=e(42)},301:function(t,n,e){"use strict";t.exports=function(t,n){var e,u=t.definition(n.identifier);if(!u)return i(t,n);e={href:r(u.url||"")},null!==u.title&&void 0!==u.title&&(e.title=u.title);return t(n,"a",e,o(t,n))};var r=e(56),i=e(125),o=e(38)},302:function(t,n,e){"use strict";var r=e(56),i=e(38);t.exports=function(t,n){var e={href:r(n.url)};null!==n.title&&void 0!==n.title&&(e.title=n.title);return t(n,"a",e,i(t,n))}},303:function(t,n,e){"use strict";t.exports=function(t,n,e){var c,s,a,l,f,p=n.children[0],d=o(t,n),h=e?function(t){var n=t.spread,e=t.children,r=e.length,i=-1;for(;!n&&++i<r;)n=u(e[i]);return n}(e):u(n),v={};if(h)c=d;else for(c=[],l=d.length,a=-1;++a<l;)"p"===(f=d[a]).tagName?c=c.concat(f.children):c.push(f);"boolean"==typeof n.checked&&(!h||p&&"paragraph"===p.type||c.unshift(t(null,"p",[])),0!==(s=h?c[0].children:c).length&&s.unshift(r("text"," ")),s.unshift(t(null,"input",{type:"checkbox",checked:n.checked,disabled:!0})),v.className=["task-list-item"]);h&&0!==c.length&&(c=i(c,!0));return t(n,"li",v,c)};var r=e(42),i=e(51),o=e(38);function u(t){var n=t.spread;return null==n?t.children.length>1:n}},304:function(t,n,e){"use strict";t.exports=function(t,n){return t(n,"p",r(t,n))};var r=e(38)},305:function(t,n,e){"use strict";t.exports=function(t,n){return t.augment(n,r("root",i(o(t,n))))};var r=e(42),i=e(51),o=e(38)},306:function(t,n,e){"use strict";t.exports=function(t,n){return t(n,"strong",r(t,n))};var r=e(38)},307:function(t,n,e){"use strict";t.exports=function(t,n){var e,u,c,s,a,l=n.children,f=l.length,p=n.align,d=p.length,h=[];for(;f--;){for(u=l[f].children,s=0===f?"th":"td",e=d,c=[];e--;)a=u[e],c[e]=t(a,s,{align:p[e]},a?o(t,a):[]);h[f]=t(l[f],"tr",i(c,!0))}return t(n,"table",i([t(h[0].position,"thead",i([h[0]],!0)),t({start:r.start(h[1]),end:r.end(h[h.length-1])},"tbody",i(h.slice(1),!0))],!0))};var r=e(120),i=e(51),o=e(38)},308:function(t,n,e){"use strict";t.exports=function(t,n){return t.augment(n,r("text",i(n.value)))};var r=e(42),i=e(309)},309:function(t,n,e){"use strict";t.exports=function(t){return String(t).replace(r,"\n")};var r=/[ \t]*\n+[ \t]*/g},38:function(t,n,e){"use strict";t.exports=function(t,n){var e,i,o=n.children||[],u=o.length,c=[],s=-1;for(;++s<u;)(e=r(t,o[s],n))&&(s&&"break"===o[s-1].type&&(e.value&&(e.value=e.value.replace(/^\s+/,"")),(i=e.children&&e.children[0])&&i.value&&(i.value=i.value.replace(/^\s+/,""))),c=c.concat(e));return c};var r=e(121)},42:function(t,n,e){"use strict";t.exports=function(t,n,e){var r;null!=e||"object"==typeof n&&!Array.isArray(n)||(e=n,n={});r=Object.assign({type:String(t)},n),Array.isArray(e)?r.children=e:null!=e&&(r.value=String(e));return r}},51:function(t,n,e){"use strict";t.exports=function(t,n){var e=[],i=-1,o=t.length;n&&e.push(r("text","\n"));for(;++i<o;)i&&e.push(r("text","\n")),e.push(t[i]);n&&0!==t.length&&e.push(r("text","\n"));return e};var r=e(42)},54:function(t,n,e){"use strict";t.exports=i;var r=e(55);function i(t,n,e,i){var u;function c(t,r,s){var a,l=[];return(n&&!u(t,r,s[s.length-1]||null)||!1!==(l=o(e(t,s)))[0])&&t.children&&"skip"!==l[0]&&!1===(a=o(function(t,n){var e,r=i?-1:1,o=(i?t.length:-1)+r;for(;o>-1&&o<t.length;){if(!1===(e=c(t[o],o,n))[0])return e;o="number"==typeof e[1]?e[1]:o+r}}(t.children,s.concat(t))))[0]?a:l}"function"==typeof n&&"function"!=typeof e&&(i=e,e=n,n=null),u=r(n),c(t,null,[])}function o(t){return null!==t&&"object"==typeof t&&"length"in t?t:"number"==typeof t?[!0,t]:[t]}i.CONTINUE=!0,i.SKIP="skip",i.EXIT=!1},55:function(t,n,e){"use strict";function r(t){if("string"==typeof t)return function(t){return function(n){return Boolean(n&&n.type===t)}}(t);if(null==t)return u;if("object"==typeof t)return("length"in t?o:i)(t);if("function"==typeof t)return t;throw new Error("Expected function, string, or object as test")}function i(t){return function(n){var e;for(e in t)if(n[e]!==t[e])return!1;return!0}}function o(t){var n=function(t){for(var n=[],e=t.length,i=-1;++i<e;)n[i]=r(t[i]);return n}(t),e=n.length;return function(){var t=-1;for(;++t<e;)if(n[t].apply(this,arguments))return!0;return!1}}function u(){return!0}t.exports=r},56:function(t,n,e){"use strict";var r={};function i(t,n,e){var o,u,c,s,a,l="";for("string"!=typeof n&&(e=n,n=i.defaultChars),void 0===e&&(e=!0),a=function(t){var n,e,i=r[t];if(i)return i;for(i=r[t]=[],n=0;n<128;n++)e=String.fromCharCode(n),/^[0-9a-z]$/i.test(e)?i.push(e):i.push("%"+("0"+n.toString(16).toUpperCase()).slice(-2));for(n=0;n<t.length;n++)i[t.charCodeAt(n)]=t[n];return i}(n),o=0,u=t.length;o<u;o++)if(c=t.charCodeAt(o),e&&37===c&&o+2<u&&/^[0-9a-f]{2}$/i.test(t.slice(o+1,o+3)))l+=t.slice(o,o+3),o+=2;else if(c<128)l+=a[c];else if(c>=55296&&c<=57343){if(c>=55296&&c<=56319&&o+1<u&&(s=t.charCodeAt(o+1))>=56320&&s<=57343){l+=encodeURIComponent(t[o]+t[o+1]),o++;continue}l+="%EF%BF%BD"}else l+=encodeURIComponent(t[o]);return l}i.defaultChars=";/?:@&=+$,-_.!~*'()#",i.componentChars="-_.!~*'()",t.exports=i}}]);