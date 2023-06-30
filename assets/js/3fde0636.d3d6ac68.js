"use strict";(self.webpackChunkreact_map_gl_website=self.webpackChunkreact_map_gl_website||[]).push([[1568],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(r),b=a,f=p["".concat(u,".").concat(b)]||p[b]||m[b]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,r=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(7462),a=r(7294),o=r(6010),l=r(2466),i=r(6550),u=r(1980),s=r(7392),c=r(12);function p(e){return function(e){var t,r;return null!=(t=null==(r=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(r);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function b(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId,o=(0,i.k6)(),l=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,u._X)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function d(e){var t,r,n,o,l=e.defaultValue,i=e.queryString,u=void 0!==i&&i,s=e.groupId,p=m(e),d=(0,a.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!b({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:p})})),v=d[0],h=d[1],g=f({queryString:u,groupId:s}),y=g[0],k=g[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),r=(0,c.Nk)(t),n=r[0],o=r[1],[n,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),C=w[0],x=w[1],N=function(){var e=null!=y?y:C;return b({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){N&&h(N)}),[N]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!b({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);h(e),k(e),x(e)}),[k,x,p]),tabValues:p}}var v=r(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var t=e.className,r=e.block,i=e.selectedValue,u=e.selectValue,s=e.tabValues,c=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,r=c.indexOf(t),n=s[r].value;n!==i&&(p(t),u(n))},b=function(e){var t,r=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var n,a=c.indexOf(e.currentTarget)+1;r=null!=(n=c[a])?n:c[0];break;case"ArrowLeft":var o,l=c.indexOf(e.currentTarget)-1;r=null!=(o=c[l])?o:c[c.length-1]}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},s.map((function(e){var t=e.value,r=e.label,l=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return c.push(e)},onKeyDown:b,onClick:m},l,{className:(0,o.Z)("tabs__item",h.tabItem,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=r?r:t)})))}function y(e){var t=e.lazy,r=e.children,n=e.selectedValue,o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var l=o.find((function(e){return e.props.value===n}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function k(e){var t=d(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},a.createElement(g,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function w(e){var t=(0,v.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},3999:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>v,frontMatter:()=>s,metadata:()=>p,toc:()=>b});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=r(4866),i=r(5162),u=["components"],s={},c="AttributionControl",p={unversionedId:"api-reference/attribution-control",id:"api-reference/attribution-control",title:"AttributionControl",description:"React component that wraps the base library's AttributionControl class (Mapbox | Maplibre).",source:"@site/../docs/api-reference/attribution-control.md",sourceDirName:"api-reference",slug:"/api-reference/attribution-control",permalink:"/react-map-gl/docs/api-reference/attribution-control",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/attribution-control.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"default (Map)",permalink:"/react-map-gl/docs/api-reference/map"},next:{title:"FullscreenControl",permalink:"/react-map-gl/docs/api-reference/fullscreen-control"}},m={},b=[{value:"Properties",id:"properties",level:2},{value:"Reactive Properties",id:"reactive-properties",level:3},{value:"<code>style</code>: CSSProperties",id:"style",level:4},{value:"Other Properties",id:"other-properties",level:3},{value:"<code>position</code>: &#39;top-right&#39; | &#39;top-left&#39; | &#39;bottom-right&#39; | &#39;bottom-left&#39;",id:"position",level:4},{value:"Source",id:"source",level:2}],f={toc:b},d="wrapper";function v(e){var t=e.components,r=(0,a.Z)(e,u);return(0,o.kt)(d,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"attributioncontrol"},"AttributionControl"),(0,o.kt)("p",null,"React component that wraps the base library's ",(0,o.kt)("inlineCode",{parentName:"p"},"AttributionControl")," class (",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/api/markers/#attributioncontrol"},"Mapbox")," | ",(0,o.kt)("a",{parentName:"p",href:"https://maplibre.org/maplibre-gl-js-docs/api/markers/#attributioncontrol"},"Maplibre"),")."),(0,o.kt)(l.Z,{groupId:"map-library",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"mapbox",label:"Mapbox",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import * as React from \'react\';\nimport Map, {AttributionControl} from \'react-map-gl\';\n\nfunction App() {\n  return <Map\n    mapboxAccessToken="<Mapbox access token>"\n    initialViewState={{\n      longitude: -100,\n      latitude: 40,\n      zoom: 3.5\n    }}\n    mapStyle="mapbox://styles/mapbox/streets-v9"\n    // disable the default attribution\n    attributionControl={false}\n  >\n    <AttributionControl customAttribution="Map design by me" />\n  </Map>;\n}\n'))),(0,o.kt)(i.Z,{value:"maplibre",label:"Maplibre",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport Map, {AttributionControl} from 'react-map-gl/maplibre';\n\nfunction App() {\n  return <Map\n    initialViewState={{\n      longitude: -100,\n      latitude: 40,\n      zoom: 3.5\n    }}\n    mapStyle=\"https://api.maptiler.com/maps/streets/style.json?key=get_your_own_key\"\n    // disable the default attribution\n    attributionControl={false}\n  >\n    <AttributionControl customAttribution=\"Map design by me\" />\n  </Map>;\n}\n")))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"reactive-properties"},"Reactive Properties"),(0,o.kt)("h4",{id:"style"},(0,o.kt)("inlineCode",{parentName:"h4"},"style"),": CSSProperties"),(0,o.kt)("p",null,"CSS style override that applies to the control's container."),(0,o.kt)("h3",{id:"other-properties"},"Other Properties"),(0,o.kt)("p",null,"The properties in this section are not reactive. They are only used when the component first mounts."),(0,o.kt)("p",null,"Any options supported by the ",(0,o.kt)("inlineCode",{parentName:"p"},"AttributionControl")," class (",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/api/markers/#attributioncontrol"},"Mapbox")," | ",(0,o.kt)("a",{parentName:"p",href:"https://maplibre.org/maplibre-gl-js-docs/api/markers/#attributioncontrol"},"Maplibre"),"), such as"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"compact")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"customAttribution"))),(0,o.kt)("p",null,"Plus the following:"),(0,o.kt)("h4",{id:"position"},(0,o.kt)("inlineCode",{parentName:"h4"},"position"),": 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'"),(0,o.kt)("p",null,"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'bottom-right'")),(0,o.kt)("p",null,"Placement of the control relative to the map."),(0,o.kt)("h2",{id:"source"},"Source"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/visgl/react-map-gl/tree/7.1-release/src/components/attribution-control.ts"},"attribution-control.ts")))}v.isMDXComponent=!0}}]);