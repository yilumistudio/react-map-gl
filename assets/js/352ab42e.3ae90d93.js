"use strict";(self.webpackChunkreact_map_gl_website=self.webpackChunkreact_map_gl_website||[]).push([[9984],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7294),n=r(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,r=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(7462),n=r(7294),o=r(6010),l=r(2466),i=r(6550),u=r(1980),s=r(7392),c=r(12);function p(e){return function(e){var t,r;return null!=(t=null==(r=n.Children.map(e,(function(e){if(!e||(0,n.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,r=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:p(r);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,r=void 0!==t&&t,a=e.groupId,o=(0,i.k6)(),l=function(e){var t=e.queryString,r=void 0!==t&&t,a=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:r,groupId:a});return[(0,u._X)(l),(0,n.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function y(e){var t,r,a,o,l=e.defaultValue,i=e.queryString,u=void 0!==i&&i,s=e.groupId,p=d(e),y=(0,n.useState)((function(){return function(e){var t,r=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var n=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:l,tabValues:p})})),b=y[0],h=y[1],v=f({queryString:u,groupId:s}),g=v[0],k=v[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),r=(0,c.Nk)(t),a=r[0],o=r[1],[a,(0,n.useCallback)((function(e){t&&o.set(e)}),[t,o])]),T=w[0],x=w[1],N=function(){var e=null!=g?g:T;return m({value:e,tabValues:p})?e:null}();return(0,n.useLayoutEffect)((function(){N&&h(N)}),[N]),{selectedValue:b,selectValue:(0,n.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);h(e),k(e),x(e)}),[k,x,p]),tabValues:p}}var b=r(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){var t=e.className,r=e.block,i=e.selectedValue,u=e.selectValue,s=e.tabValues,c=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,r=c.indexOf(t),a=s[r].value;a!==i&&(p(t),u(a))},m=function(e){var t,r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,n=c.indexOf(e.currentTarget)+1;r=null!=(a=c[n])?a:c[0];break;case"ArrowLeft":var o,l=c.indexOf(e.currentTarget)-1;r=null!=(o=c[l])?o:c[c.length-1]}null==(t=r)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},s.map((function(e){var t=e.value,r=e.label,l=e.attributes;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",h.tabItem,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=r?r:t)})))}function g(e){var t=e.lazy,r=e.children,a=e.selectedValue,o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var l=o.find((function(e){return e.props.value===a}));return l?(0,n.cloneElement)(l,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function k(e){var t=y(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},n.createElement(v,(0,a.Z)({},e,t)),n.createElement(g,(0,a.Z)({},e,t)))}function w(e){var t=(0,b.Z)();return n.createElement(k,(0,a.Z)({key:String(t)},e))}},8908:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),l=r(4866),i=r(5162),u=["components"],s={},c="Layer",p={unversionedId:"api-reference/layer",id:"api-reference/layer",title:"Layer",description:"This component allows apps to create a map layer using React.",source:"@site/../docs/api-reference/layer.md",sourceDirName:"api-reference",slug:"/api-reference/layer",permalink:"/react-map-gl/docs/api-reference/layer",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/layer.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"GeolocateControl",permalink:"/react-map-gl/docs/api-reference/geolocate-control"},next:{title:"MapProvider",permalink:"/react-map-gl/docs/api-reference/map-provider"}},d={},m=[{value:"Properties",id:"properties",level:2},{value:"Identity Properties",id:"identity-properties",level:3},{value:"<code>id</code>: string",id:"id",level:4},{value:"<code>type</code>: string",id:"type",level:4},{value:"Options",id:"options",level:3},{value:"<code>beforeId</code>: string",id:"beforeid",level:4},{value:"<code>source</code>: string",id:"source",level:4},{value:"Source",id:"source",level:2}],f={toc:m},y="wrapper";function b(e){var t=e.components,r=(0,n.Z)(e,u);return(0,o.kt)(y,(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"layer"},"Layer"),(0,o.kt)("p",null,"This component allows apps to create a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/style-spec/#layers"},"map layer")," using React."),(0,o.kt)(l.Z,{groupId:"map-library",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"mapbox",label:"Mapbox",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport Map, {Layer} from 'react-map-gl';\nimport type {FillLayer} from 'react-map-gl';\n\nconst parkLayer: FillLayer = {\n  id: 'landuse_park',\n  type: 'fill',\n  source: 'mapbox',\n  'source-layer': 'landuse',\n  filter: ['==', 'class', 'park'],\n  paint: {\n    'fill-color': '#4E3FC8'\n  }\n};\n\nfunction App() {\n  return <Map\n    mapboxAccessToken=\"<Mapbox access token>\"\n    initialViewState={{\n      longitude: -122.4,\n      latitude: 37.8,\n      zoom: 14\n    }}\n    mapStyle=\"mapbox://styles/mapbox/streets-v9\"\n  >\n    <Layer {...parkLayer} />\n  </Map>;\n}\n"))),(0,o.kt)(i.Z,{value:"maplibre",label:"Maplibre",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport Map, {Layer} from 'react-map-gl/maplibre';\nimport type {FillLayer} from 'react-map-gl/maplibre';\n\nconst parkLayer: FillLayer = {\n  id: 'landuse_park',\n  type: 'fill',\n  source: 'mapbox',\n  'source-layer': 'landuse',\n  filter: ['==', 'class', 'park'],\n  paint: {\n    'fill-color': '#4E3FC8'\n  }\n};\n\nfunction App() {\n  return <Map\n    initialViewState={{\n      longitude: -122.4,\n      latitude: 37.8,\n      zoom: 14\n    }}\n    mapStyle=\"https://api.maptiler.com/maps/streets/style.json?key=get_your_own_key\"\n  >\n    <Layer {...parkLayer} />\n  </Map>;\n}\n")))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("p",null,"The props provided to this component should be conforming to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/style-spec/#layers"},"Mapbox layer specification"),"."),(0,o.kt)("p",null,"When props change ",(0,o.kt)("em",{parentName:"p"},"shallowly"),", the component will perform style diffing to update the layer. Avoid defining constant objects/arrays inline may help performance."),(0,o.kt)("h3",{id:"identity-properties"},"Identity Properties"),(0,o.kt)("p",null,"Once a ",(0,o.kt)("inlineCode",{parentName:"p"},"<Layer>")," is mounted, the following props should not change. If you add/remove multiple JSX layers dynamically, make sure you use React's ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/lists-and-keys.html#keys"},"key prop")," to give each element a stable identity."),(0,o.kt)("h4",{id:"id"},(0,o.kt)("inlineCode",{parentName:"h4"},"id"),": string"),(0,o.kt)("p",null,"Unique identifier of the layer. If not provided, a default id will be assigned."),(0,o.kt)("h4",{id:"type"},(0,o.kt)("inlineCode",{parentName:"h4"},"type"),": string"),(0,o.kt)("p",null,"Required. Type of the layer."),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("h4",{id:"beforeid"},(0,o.kt)("inlineCode",{parentName:"h4"},"beforeId"),": string"),(0,o.kt)("p",null,"The ID of an existing layer to insert this layer before. If this prop is omitted, the layer will be appended to the end of the layers array. This is useful when using dynamic layers with a map style from a URL."),(0,o.kt)("p",null,"Note that layers are added by the order that they mount. They are ",(0,o.kt)("em",{parentName:"p"},"NOT")," reordered later if their relative positions in the JSX tree change. If dynamic reordering is desired, you should manipulate ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeId")," for consistent behavior."),(0,o.kt)("h4",{id:"source"},(0,o.kt)("inlineCode",{parentName:"h4"},"source"),": string"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"source")," is required by some layer types in the Mapbox style specification. If ",(0,o.kt)("inlineCode",{parentName:"p"},"<Layer>")," is used as the child of a ",(0,o.kt)("a",{parentName:"p",href:"/react-map-gl/docs/api-reference/source"},"Source")," component, this prop will be overwritten by the id of the parent source."),(0,o.kt)("h2",{id:"source"},"Source"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/visgl/react-map-gl/tree/7.1-release/src/components/layer.ts"},"layer.ts")))}b.isMDXComponent=!0}}]);