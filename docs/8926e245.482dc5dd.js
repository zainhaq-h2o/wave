(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{193:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(313)),c=n(315),i={title:"Plot / Events",keywords:["events","plot"]},s={unversionedId:"examples/plot-events",id:"examples/plot-events",isDocsHomePage:!1,title:"Plot / Events",description:"Handle events on a plot card.",source:"@site/docs/examples/plot-events.md",slug:"/examples/plot-events",permalink:"/wave/docs/examples/plot-events",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/plot-events.md",version:"current",sidebar:"someSidebar",previous:{title:"Plot / App",permalink:"/wave/docs/examples/plot-app"},next:{title:"Plot / Pandas",permalink:"/wave/docs/examples/plot-pandas"}},l=[],p={rightToc:l};function u(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Handle events on a plot card."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+n(426).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"from h2o_wave import main, app, Q, ui, data\n\n\n@app('/demo')\nasync def serve(q: Q):\n    if not q.client.initialized:\n        q.client.initialized = True\n        q.page['pricing'] = ui.plot_card(\n            box='1 1 4 5',\n            title='Interval',\n            data=data(fields='product price', rows=[\n                ['spam', 1.49],\n                ['eggs', 2.49],\n                ['ham', 1.99],\n            ], pack=True),\n            plot=ui.plot([ui.mark(type='interval', x='=product', y='=price', y_min=0)]),\n            events=['select_marks']\n        )\n        q.page['details'] = ui.markdown_card(\n            box='1 6 4 2',\n            title='Selected Product',\n            content='Nothing selected.',\n        )\n    else:\n        if q.events.pricing:\n            q.page['details'].content = f'You selected {q.events.pricing.select_marks}'\n\n    await q.page.save()\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(o.b)("a",{href:Object(c.a)("docs/examples/tags#events")},"events")," \u2002",Object(o.b)("a",{href:Object(c.a)("docs/examples/tags#plot")},"plot")))}u.isMDXComponent=!0},313:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,b=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return n?a.a.createElement(b,i(i({ref:t},l),{},{components:n})):a.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},314:function(e,t,n){"use strict";var r=n(0),a=n(19);t.a=function(){const e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},315:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(314),a=n(316);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.a)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const c=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+c:c}(t,e,n,r)}}function c(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},316:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},426:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/plot-events-7a596aca65a061f4db659a1baa2e2c89.png"}}]);