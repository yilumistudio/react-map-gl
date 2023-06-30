"use strict";(self.webpackChunkreact_map_gl_website=self.webpackChunkreact_map_gl_website||[]).push([[1089],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,v=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(v,i(i({ref:t},c),{},{components:n})):a.createElement(v,i({ref:t},c))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),o=n(6010),i=n(2466),l=n(6550),s=n(1980),u=n(7392),c=n(12);function p(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function v(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,l.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function b(e){var t,n,a,o,i=e.defaultValue,l=e.queryString,s=void 0!==l&&l,u=e.groupId,p=m(e),b=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:p})})),f=b[0],h=b[1],g=v({queryString:s,groupId:u}),k=g[0],y=g[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,c.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),T=w[0],x=w[1],N=function(){var e=null!=k?k:T;return d({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){N&&h(N)}),[N]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);h(e),y(e),x(e)}),[y,x,p]),tabValues:p}}var f=n(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var t=e.className,n=e.block,l=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(p(t),s(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;n=null!=(o=c[i])?o:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return c.push(e)},onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",h.tabItem,null==i?void 0:i.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function k(e){var t=e.lazy,n=e.children,a=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=o.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function y(e){var t=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function w(e){var t=(0,f.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},7460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>p,toc:()=>d});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(4866),l=n(5162),s=["components"],u={},c="Tips and Tricks",p={unversionedId:"get-started/tips-and-tricks",id:"get-started/tips-and-tricks",title:"Tips and Tricks",description:"Securing Mapbox Token",source:"@site/../docs/get-started/tips-and-tricks.md",sourceDirName:"get-started",slug:"/get-started/tips-and-tricks",permalink:"/react-map-gl/docs/get-started/tips-and-tricks",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/get-started/tips-and-tricks.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Adding Custom Data",permalink:"/react-map-gl/docs/get-started/adding-custom-data"},next:{title:"default (Map)",permalink:"/react-map-gl/docs/api-reference/map"}},m={},d=[{value:"Securing Mapbox Token",id:"securing-mapbox-token",level:2},{value:"Minimize Cost from Frequent Re-mounting",id:"minimize-cost-from-frequent-re-mounting",level:2},{value:"Performance with Many Markers",id:"performance-with-many-markers",level:2},{value:"Finding out if a point is within the current viewport",id:"finding-out-if-a-point-is-within-the-current-viewport",level:2}],v={toc:d},b="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)(b,(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tips-and-tricks"},"Tips and Tricks"),(0,o.kt)("h2",{id:"securing-mapbox-token"},"Securing Mapbox Token"),(0,o.kt)("p",null,"Because Mapbox tokens are required for the client application to make requests to Mapbox servers, you have to distribute it with your app. It is not possible to stop a visitor to your site from scraping the token. The practice outlined below can help you protect your token from being abused."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Never commit your token in clear text into GitHub or other source control."),(0,o.kt)("li",{parentName:"ul"},"In your local dev environment, define the token in an environment variable e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"MapboxAccessTokenDev=...")," in the command line, or use something like ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/motdotla/dotenv"},"dotenv")," and put ",(0,o.kt)("inlineCode",{parentName:"li"},"MapboxAccessTokenDev=...")," in a ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," file. Add ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," to ",(0,o.kt)("inlineCode",{parentName:"li"},".gitignore")," so it's never tracked. If your app is deployed by a continuous integration pipeline, follow its documentation and set a secret environment variable."),(0,o.kt)("li",{parentName:"ul"},"Create separate tokens for development (often times on ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost"),"), public code snippet (Gist, Codepen etc.) and production (deployed to ",(0,o.kt)("inlineCode",{parentName:"li"},"https://mycompany.com"),"). The public token should be rotated regularly. The production token should have strict ",(0,o.kt)("a",{parentName:"li",href:"https://docs.mapbox.com/help/troubleshooting/how-to-use-mapbox-securely/#access-tokens"},"scope and URL restrictions")," that only allows it to be used on a domain that you own."),(0,o.kt)("li",{parentName:"ul"},"Add the following to your bundler config:")),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"webpack",label:"Webpack",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/// webpack.config.js\nconst {DefinePlugin} = require('webpack');\n\nmodule.exports = {\n  ...\n  plugins: [\n    new DefinePlugin({\n      'process.env.MapboxAccessToken': JSON.stringify(process.env.NODE_ENV == 'production' ? process.env.MapboxAccessTokenProd : process.env.MapboxAccessTokenDev)\n    })\n  ]\n};\n"))),(0,o.kt)(l.Z,{value:"rollup",label:"Rollup",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/// rollup.config.js\nconst replace = require('@rollup/plugin-replace').default;\n\nmodule.exports = {\n  ...\n  plugins: [\n    replace({ \n      'process.env.MapboxAccessToken': JSON.stringify(process.env.NODE_ENV == 'production' ? process.env.MapboxAccessTokenProd : process.env.MapboxAccessTokenDev)\n    })\n  ]\n};\n")))),(0,o.kt)("p",null,"  react-map-gl automatically picks up ",(0,o.kt)("inlineCode",{parentName:"p"},"process.env.MapboxAccessToken")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"process.env.REACT_APP_MAPBOX_ACCESS_TOKEN")," if they are defined. Alternatively, you can use your own variable name (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"__SUPER_SECRET_TOKEN__"),") and pass it in manually with ",(0,o.kt)("inlineCode",{parentName:"p"},"mapboxAccessToken={__SUPER_SECRET_TOKEN__}"),"."),(0,o.kt)("h2",{id:"minimize-cost-from-frequent-re-mounting"},"Minimize Cost from Frequent Re-mounting"),(0,o.kt)("p",null,"In a moderately complex single-page app, as the user navigates through the UI, a map component may unmount and mount again many times during a session. Consider the following layout:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'/// Example using Tabs from Material UI\n<TabContext value={selectedTab}>\n  <TabList onChange={handleTabChange}>\n    <Tab label="Map" value="map" />\n    <Tab label="List" value="table" />\n  </TabList>\n  <TabPanel value="map">\n    <Map mapStyle="mapbox://styles/mapbox/streets-v9" >\n      {items.map(renderMarker)}\n    </Map>\n  </TabPanel>\n  <TabPanel value="table">\n    <Table>\n      {items.map(renderRow)}\n    </Table>\n  </TabPanel>\n</TabContext>\n')),(0,o.kt)("p",null,'Every time the user clicks the "table" tab, the map is unmounted. When they click the "map" tab, the map is mounted again. As of v2.0, mapbox-gl generates a ',(0,o.kt)("a",{parentName:"p",href:"https://www.mapbox.com/pricing#maploads"},"billable event")," every time a Map object is initialized. It is obviously not ideal to get billed for just collapsing and expanding part of the UI."),(0,o.kt)("p",null,"In this case, it is recommended that you set the ",(0,o.kt)("a",{parentName:"p",href:"/react-map-gl/docs/api-reference/map#reuseMaps"},"reuseMaps")," prop to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'  <TabPanel value="map">\n    <Map reuseMaps mapStyle="mapbox://styles/mapbox/streets-v9" >\n      {items.map(renderMarker)}\n    </Map>\n  </TabPanel>\n')),(0,o.kt)("p",null,"This bypasses the initialization when a map is removed then added back."),(0,o.kt)("h2",{id:"performance-with-many-markers"},"Performance with Many Markers"),(0,o.kt)("p",null,"If your application uses externally managed camera state, like with Redux, the number of React rerenders may be very high when the user is interacting with the map. Consider the following setup:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {useSelector, useDispatch} from 'react-redux';\nimport Map, {Marker} from 'react-map-gl';\n\nfunction MapView() {\n  const viewState = useSelector((s: RootState) => s.viewState);\n  const vehicles = useSelector((s: RootState) => s.vehicles);\n  const dispatch = useDispatch();\n\n  const onMove = useCallback(evt => {\n    dispatch({type: 'setViewState', payload: evt.viewState});\n  }, []);\n\n  return (\n    <Map\n      {...viewState}\n      onMove={onMove}\n      mapStyle=\"mapbox://styles/mapbox/streets-v9\" >\n    >\n      {vehicles.map(vehicle => (\n        <Marker key={vehicle.id}\n          longitude={vehicle.coordinates[0]}\n          latitude={vehicle.coordinates[1]}>\n          <svg>\n            // vehicle icon\n          </svg>\n        </Marker>)\n      )}\n    </Map>\n  );\n}\n")),(0,o.kt)("p",null,"This component is rerendered on every animation frame when the user is dragging the map. If it's trying to render hundreds of markers, the performance lag will become quite visible."),(0,o.kt)("p",null,"One way to improve the performance is ",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'  const markers = useMemo(() => vehicles.map(vehicle => (\n    <Marker key={vehicle.id}\n      longitude={vehicle.coordinates[0]}\n      latitude={vehicle.coordinates[1]}>\n      <svg>\n        // vehicle icon\n      </svg>\n    </Marker>)\n  ), [vehicles]);\n\n  return (\n    <Map\n      {...viewState}\n      onMove={onMove}\n      mapStyle="mapbox://styles/mapbox/streets-v9" >\n    >\n      {markers}\n    </Map>\n  );\n}\n')),(0,o.kt)("p",null,"This prevents React from rerendering the markers unless they have changed."),(0,o.kt)("p",null,"If your application can do without complicated DOM objects and CSS styling, consider switching to a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#symbol"},"symbol layer"),". Layers are rendered in WebGL and are much more performant than markers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"  const vehiclesGeoJSON = useMemo(() => {\n    return {\n      type: 'FeatureCollection',\n      features: vehicles.map(vehicle => turf.point(vehicle.coordinates, vehicle))\n    };\n  }, [vehicles]);\n\n  return (\n    <Map\n      {...viewState}\n      onMove={onMove}\n      mapStyle=\"mapbox://styles/mapbox/streets-v9\" >\n    >\n      <Source id=\"vehicles\" type=\"geojson\" data={vehiclesGeoJSON}>\n        <Layer type=\"symbol\"\n          layout={{\n            'icon-image': 'vehicle-icon',\n            'icon-size': 1,\n            'text-field': ['get', 'id']\n          }} >\n      </Sources>\n    </Map>\n  );\n")),(0,o.kt)("h2",{id:"finding-out-if-a-point-is-within-the-current-viewport"},"Finding out if a point is within the current viewport"),(0,o.kt)("p",null,"There are some situations where you want to know if a point is currently visible on the map.",(0,o.kt)("br",{parentName:"p"}),"\n","Checking this is simple and can be done like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const mapRef = useRef<MapRef>();\n\nconst checkIfPositionInViewport = (lat, lng) => {\n    const bounds = mapRef.current.getBounds();\n    return bounds.contains([lng, lat]);\n}\n\nreturn <Map ref={mapRef} ... />\n")))}f.isMDXComponent=!0}}]);