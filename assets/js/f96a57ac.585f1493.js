"use strict";(self.webpackChunkreact_map_gl_website=self.webpackChunkreact_map_gl_website||[]).push([[6701],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4046:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>x,contentTitle:()=>h,default:()=>E,frontMatter:()=>g,metadata:()=>b,toc:()=>_});var n=r(7462),o=r(3366),a=r(7294),i=r(3905),s=(r(745),r(945)),l={parks:/park/,buildings:/building/,roads:/bridge|road|tunnel/,labels:/label|place|poi/};function u(e){var t=e.name,r=e.value,n=e.onChange;return a.createElement("div",{key:t,className:"input"},a.createElement("label",null,t),a.createElement("input",{type:"checkbox",checked:r,onChange:function(e){return n(t,e.target.checked)}}))}function c(e){var t=(0,a.useState)({parks:!0,buildings:!0,roads:!0,labels:!0}),r=t[0],n=t[1];(0,a.useEffect)((function(){e.onChange((function(e){return function(e,t){for(var r in e)if(e[r]&&l[r].test(t))return!0;return!1}(r,e)}))}),[r]);var o=function(e,t){var o;n(Object.assign({},r,((o={})[e]=t,o)))};return a.createElement("div",{className:"control-panel"},a.createElement("h3",null,"Custom Cursor"),a.createElement("p",null,"Customize the cursor based on interactivity."),a.createElement("div",{className:"source-link"},a.createElement("a",{href:"https://github.com/visgl/react-map-gl/tree/7.1-release/examples/custom-cursor",target:"_new"},"View Code \u2197")),a.createElement("hr",null),a.createElement("p",null,"Clickable layers"),Object.keys(l).map((function(e){return a.createElement(u,{key:e,name:e,value:r[e],onChange:o})})))}const p=a.memo(c);var d=r(2853),f="",m={longitude:-122.48,latitude:37.78,zoom:15.5,bearing:0,pitch:0};function v(){var e=(0,a.useState)("auto"),t=e[0],r=e[1],n=(0,a.useState)(["nonexist"]),o=n[0],i=n[1],l=(0,a.useCallback)((function(e){i(d.layers.map((function(e){return e.id})).filter(e))}),[]),u=(0,a.useCallback)((function(e){var t=e.features&&e.features[0];t&&window.alert("Clicked layer "+t.layer.id)}),[]),c=(0,a.useCallback)((function(){return r("pointer")}),[]),v=(0,a.useCallback)((function(){return r("auto")}),[]);return a.createElement(a.Fragment,null,a.createElement(s.ZP,{initialViewState:m,mapStyle:d,onClick:u,onMouseEnter:c,onMouseLeave:v,cursor:t,interactiveLayerIds:o,mapboxAccessToken:f}),a.createElement(p,{onChange:l}))}var y=["components"],g={},h="Custom Cursor",b={unversionedId:"custom-cursor",id:"custom-cursor",title:"Custom Cursor",description:"",source:"@site/src/examples/custom-cursor.mdx",sourceDirName:".",slug:"/custom-cursor",permalink:"/react-map-gl/examples/custom-cursor",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"examplesSidebar",previous:{title:"Markers, Popups and Controls",permalink:"/react-map-gl/examples/controls"},next:{title:"Draggable Marker",permalink:"/react-map-gl/examples/draggable-markers"}},x={},_=[],w={toc:_},S="wrapper";function E(e){var t=e.components,r=(0,o.Z)(e,y);return(0,i.kt)(S,(0,n.Z)({},w,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"custom-cursor"},"Custom Cursor"),(0,i.kt)(v,{mdxType:"App"}))}E.isMDXComponent=!0},945:(e,t,r)=>{r.d(t,{ot:()=>Y,$j:()=>te,mh:()=>G,D5:()=>Q,Jx:()=>X,Pv:()=>ee,GI:()=>K,jf:()=>re,Hw:()=>V,ZP:()=>ne,PE:()=>A});var n=r(7294),o=n.createContext(null);var a=r(1202);function i(e,t){if(e===t)return!0;if(!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!i(e[r],t[r]))return!1;return!0}if(Array.isArray(t))return!1;if("object"==typeof e&&"object"==typeof t){var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(var a=0,s=n;a<s.length;a++){var l=s[a];if(!t.hasOwnProperty(l))return!1;if(!i(e[l],t[l]))return!1}return!0}return!1}function s(e,t){if(e.getProjection){var r=e.getProjection();i(r,t.getProjection())||t.setProjection(r)}}function l(e){return{longitude:e.center.lng,latitude:e.center.lat,zoom:e.zoom,pitch:e.pitch,bearing:e.bearing,padding:e.padding}}function u(e,t){var r=t.viewState||t,n=!1;if("longitude"in r&&"latitude"in r){var o=e.center;e.center=new o.constructor(r.longitude,r.latitude),n=n||o!==e.center}if("zoom"in r){var a=e.zoom;e.zoom=r.zoom,n=n||a!==e.zoom}if("bearing"in r){var i=e.bearing;e.bearing=r.bearing,n=n||i!==e.bearing}if("pitch"in r){var s=e.pitch;e.pitch=r.pitch,n=n||s!==e.pitch}return r.padding&&!e.isPaddingEqual(r.padding)&&(n=!0,e.padding=r.padding),n}var c=r(7855),p=["type","source","source-layer","minzoom","maxzoom","filter","layout"];function d(e){if(!e)return null;if("string"==typeof e)return e;if("toJS"in e&&(e=e.toJS()),!e.layers)return e;for(var t,r={},n=(0,c.Z)(e.layers);!(t=n()).done;){var o=t.value;r[o.id]=o}var a=e.layers.map((function(e){var t=null;"interactive"in e&&delete(t=Object.assign({},e)).interactive;var n=r[e.ref];if(n){delete(t=t||Object.assign({},e)).ref;for(var o,a=(0,c.Z)(p);!(o=a()).done;){var i=o.value;i in n&&(t[i]=n[i])}}return t||e}));return Object.assign({},e,{layers:a})}var f={version:8,sources:{},layers:[]},m={mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",click:"onClick",dblclick:"onDblClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",mouseout:"onMouseOut",contextmenu:"onContextMenu",touchstart:"onTouchStart",touchend:"onTouchEnd",touchmove:"onTouchMove",touchcancel:"onTouchCancel"},v={movestart:"onMoveStart",move:"onMove",moveend:"onMoveEnd",dragstart:"onDragStart",drag:"onDrag",dragend:"onDragEnd",zoomstart:"onZoomStart",zoom:"onZoom",zoomend:"onZoomEnd",rotatestart:"onRotateStart",rotate:"onRotate",rotateend:"onRotateEnd",pitchstart:"onPitchStart",pitch:"onPitch",pitchend:"onPitchEnd"},y={wheel:"onWheel",boxzoomstart:"onBoxZoomStart",boxzoomend:"onBoxZoomEnd",boxzoomcancel:"onBoxZoomCancel",resize:"onResize",load:"onLoad",render:"onRender",idle:"onIdle",remove:"onRemove",data:"onData",styledata:"onStyleData",sourcedata:"onSourceData",error:"onError"},g=["minZoom","maxZoom","minPitch","maxPitch","maxBounds","projection","renderWorldCopies"],h=["scrollZoom","boxZoom","dragRotate","dragPan","keyboard","doubleClickZoom","touchZoomRotate","touchPitch"],b=function(){function e(e,t,r){var n=this;this._map=null,this._internalUpdate=!1,this._inRender=!1,this._hoveredFeatures=null,this._deferredEvents={move:!1,zoom:!1,pitch:!1,rotate:!1},this._onEvent=function(e){var t=n.props[y[e.type]];t?t(e):"error"===e.type&&console.error(e.error)},this._onPointerEvent=function(e){"mousemove"!==e.type&&"mouseout"!==e.type||n._updateHover(e);var t=n.props[m[e.type]];t&&(n.props.interactiveLayerIds&&"mouseover"!==e.type&&"mouseout"!==e.type&&(e.features=n._hoveredFeatures||n._queryRenderedFeatures(e.point)),t(e),delete e.features)},this._onCameraEvent=function(e){if(!n._internalUpdate){var t=n.props[v[e.type]];t&&t(e)}e.type in n._deferredEvents&&(n._deferredEvents[e.type]=!1)},this._MapClass=e,this.props=t,this._initialize(r)}var t=e.prototype;return t.setProps=function(e){var t=this.props;this.props=e;var r=this._updateSettings(e,t);r&&this._createShadowTransform(this._map);var n=this._updateSize(e),o=this._updateViewState(e,!0);this._updateStyle(e,t),this._updateStyleComponents(e,t),this._updateHandlers(e,t),(r||n||o&&!this._map.isMoving())&&this.redraw()},e.reuse=function(t,r){var n=e.savedMaps.pop();if(!n)return null;var o=n.map,a=o.getContainer();for(r.className=a.className;a.childNodes.length>0;)r.appendChild(a.childNodes[0]);o._container=r;var i=o._resizeObserver;i&&(i.disconnect(),i.observe(r)),n.setProps(Object.assign({},t,{styleDiffing:!1})),o.resize();var s=t.initialViewState;return s&&(s.bounds?o.fitBounds(s.bounds,Object.assign({},s.fitBoundsOptions,{duration:0})):n._updateViewState(s,!1)),o.isStyleLoaded()?o.fire("load"):o.once("styledata",(function(){return o.fire("load")})),o._update(),n},t._initialize=function(e){var t=this,r=this.props,n=r.mapStyle,o=void 0===n?f:n,a=Object.assign({},r,r.initialViewState,{accessToken:r.mapboxAccessToken||x()||null,container:e,style:d(o)}),i=a.initialViewState||a.viewState||a;if(Object.assign(a,{center:[i.longitude||0,i.latitude||0],zoom:i.zoom||0,pitch:i.pitch||0,bearing:i.bearing||0}),r.gl){var l=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(){return HTMLCanvasElement.prototype.getContext=l,r.gl}}var u=new this._MapClass(a);i.padding&&u.setPadding(i.padding),r.cursor&&(u.getCanvas().style.cursor=r.cursor),this._createShadowTransform(u);var c=u._render;u._render=function(e){t._inRender=!0,c.call(u,e),t._inRender=!1};var p=u._renderTaskQueue.run;u._renderTaskQueue.run=function(e){p.call(u._renderTaskQueue,e),t._onBeforeRepaint()},u.on("render",(function(){return t._onAfterRepaint()}));var g=u.fire;for(var h in u.fire=this._fireEvent.bind(this,g),u.on("resize",(function(){t._renderTransform.resize(u.transform.width,u.transform.height)})),u.on("styledata",(function(){t._updateStyleComponents(t.props,{}),s(u.transform,t._renderTransform)})),u.on("sourcedata",(function(){return t._updateStyleComponents(t.props,{})})),m)u.on(h,this._onPointerEvent);for(var b in v)u.on(b,this._onCameraEvent);for(var _ in y)u.on(_,this._onEvent);this._map=u},t.recycle=function(){var t=this.map.getContainer().querySelector("[mapboxgl-children]");null==t||t.remove(),e.savedMaps.push(this)},t.destroy=function(){this._map.remove()},t.redraw=function(){var e=this._map;!this._inRender&&e.style&&(e._frame&&(e._frame.cancel(),e._frame=null),e._render())},t._createShadowTransform=function(e){var t,r,n=(t=e.transform,(r=t.clone()).pixelsToGLUnits=t.pixelsToGLUnits,r);e.painter.transform=n,this._renderTransform=n},t._updateSize=function(e){var t=e.viewState;if(t){var r=this._map;if(t.width!==r.transform.width||t.height!==r.transform.height)return r.resize(),!0}return!1},t._updateViewState=function(e,t){if(this._internalUpdate)return!1;var r=this._map,n=this._renderTransform,o=n.zoom,a=n.pitch,i=n.bearing,s=r.isMoving();s&&(n.cameraElevationReference="sea");var c=u(n,Object.assign({},l(r.transform),e));if(s&&(n.cameraElevationReference="ground"),c&&t){var p=this._deferredEvents;p.move=!0,p.zoom||(p.zoom=o!==n.zoom),p.rotate||(p.rotate=i!==n.bearing),p.pitch||(p.pitch=a!==n.pitch)}return s||u(r.transform,e),c},t._updateSettings=function(e,t){for(var r=this._map,n=!1,o=0,a=g;o<a.length;o++){var s=a[o];if(s in e&&!i(e[s],t[s])){n=!0;var l=r["set"+s[0].toUpperCase()+s.slice(1)];null==l||l.call(r,e[s])}}return n},t._updateStyle=function(e,t){if(e.cursor!==t.cursor&&(this._map.getCanvas().style.cursor=e.cursor),e.mapStyle!==t.mapStyle){var r=e.mapStyle,n=void 0===r?f:r,o=e.styleDiffing,a={diff:void 0===o||o};return"localIdeographFontFamily"in e&&(a.localIdeographFontFamily=e.localIdeographFontFamily),this._map.setStyle(d(n),a),!0}return!1},t._updateStyleComponents=function(e,t){var r=this._map,n=!1;return r.isStyleLoaded()&&("light"in e&&r.setLight&&!i(e.light,t.light)&&(n=!0,r.setLight(e.light)),"fog"in e&&r.setFog&&!i(e.fog,t.fog)&&(n=!0,r.setFog(e.fog)),"terrain"in e&&r.setTerrain&&!i(e.terrain,t.terrain)&&(e.terrain&&!r.getSource(e.terrain.source)||(n=!0,r.setTerrain(e.terrain)))),n},t._updateHandlers=function(e,t){for(var r=this._map,n=!1,o=0,a=h;o<a.length;o++){var s,l,u=a[o],c=null==(s=e[u])||s;i(c,null==(l=t[u])||l)||(n=!0,c?r[u].enable(c):r[u].disable())}return n},t._queryRenderedFeatures=function(e){var t=this._map,r=this.props.interactiveLayerIds,n=void 0===r?[]:r;try{return t.queryRenderedFeatures(e,{layers:n.filter(t.getLayer.bind(t))})}catch(o){return[]}},t._updateHover=function(e){var t=this.props;if(t.interactiveLayerIds&&(t.onMouseMove||t.onMouseEnter||t.onMouseLeave)){var r,n=e.type,o=(null==(r=this._hoveredFeatures)?void 0:r.length)>0,a=this._queryRenderedFeatures(e.point),i=a.length>0;!i&&o&&(e.type="mouseleave",this._onPointerEvent(e)),this._hoveredFeatures=a,i&&!o&&(e.type="mouseenter",this._onPointerEvent(e)),e.type=n}else this._hoveredFeatures=null},t._fireEvent=function(e,t,r){var n=this._map,o=n.transform,a="string"==typeof t?t:t.type;return"move"===a&&this._updateViewState(this.props,!1),a in v&&("object"==typeof t&&(t.viewState=l(o)),this._map.isMoving())?(n.transform=this._renderTransform,e.call(n,t,r),n.transform=o,n):(e.call(n,t,r),n)},t._onBeforeRepaint=function(){var e=this,t=this._map;for(var r in this._internalUpdate=!0,this._deferredEvents)this._deferredEvents[r]&&t.fire(r);this._internalUpdate=!1;var n=this._map.transform;t.transform=this._renderTransform,this._onAfterRepaint=function(){s(e._renderTransform,n),t.transform=n}},(0,a.Z)(e,[{key:"map",get:function(){return this._map}},{key:"transform",get:function(){return this._renderTransform}}]),e}();function x(){var e=null;if("undefined"!=typeof location){var t=/access_token=([^&\/]*)/.exec(location.search);e=t&&t[1]}try{e=e||"pk.eyJ1IjoidWNmLW1hcGJveCIsImEiOiJja2tyNHQzdnIzYmNnMndwZGI3djNzdjVyIn0.xgCXV9mLZ47q7easx6WLCQ"}catch(r){}try{e=e||process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}catch(n){}return e}b.savedMaps=[];var _=["setMaxBounds","setMinZoom","setMaxZoom","setMinPitch","setMaxPitch","setRenderWorldCopies","setProjection","setStyle","addSource","removeSource","addLayer","removeLayer","setLayerZoomRange","setFilter","setPaintProperty","setLayoutProperty","setLight","setTerrain","setFog","remove"];function w(e){if(!e)return null;for(var t,r=e.map,n={getMap:function(){return r},getCenter:function(){return e.transform.center},getZoom:function(){return e.transform.zoom},getBearing:function(){return e.transform.bearing},getPitch:function(){return e.transform.pitch},getPadding:function(){return e.transform.padding},getBounds:function(){return e.transform.getBounds()},project:function(t){var n=r.transform;r.transform=e.transform;var o=r.project(t);return r.transform=n,o},unproject:function(t){var n=r.transform;r.transform=e.transform;var o=r.unproject(t);return r.transform=n,o},queryTerrainElevation:function(t,n){var o=r.transform;r.transform=e.transform;var a=r.queryTerrainElevation(t,n);return r.transform=o,a}},o=(0,c.Z)(function(e){var t=new Set,r=e;for(;r;){for(var n,o=(0,c.Z)(Object.getOwnPropertyNames(r));!(n=o()).done;){var a=n.value;"_"!==a[0]&&"function"==typeof e[a]&&"fire"!==a&&"setEventedParent"!==a&&t.add(a)}r=Object.getPrototypeOf(r)}return Array.from(t)}(r));!(t=o()).done;){var a=t.value;a in n||_.includes(a)||(n[a]=r[a].bind(r))}return n}const S="undefined"!=typeof document?n.useLayoutEffect:n.useEffect;var E=["baseApiUrl","maxParallelImageRequests","workerClass","workerCount","workerUrl"];var C=n.createContext(null);function k(e,t,r){var a=(0,n.useContext)(o),i=(0,n.useState)(null),s=i[0],l=i[1],u=(0,n.useRef)(),p=(0,n.useRef)({mapLib:null,map:null}).current;(0,n.useEffect)((function(){var t,n=e.mapLib,o=!0;return Promise.resolve(n||r).then((function(r){if(o){if(!r)throw new Error("Invalid mapLib");var n="Map"in r?r:r.default;if(!n.Map)throw new Error("Invalid mapLib");if(function(e,t){for(var r,n=(0,c.Z)(E);!(r=n()).done;){var o=r.value;o in t&&(e[o]=t[o])}var a=t.RTLTextPlugin,i=void 0===a?"https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js":a;i&&e.getRTLTextPluginStatus&&"unavailable"===e.getRTLTextPluginStatus()&&e.setRTLTextPlugin(i,(function(e){e&&console.error(e)}),!1)}(n,e),n.supported&&!n.supported(e))throw new Error("Map is not supported by this browser");e.reuseMaps&&(t=b.reuse(e,u.current)),t||(t=new b(n.Map,e,u.current)),p.map=w(t),p.mapLib=n,l(t),null==a||a.onMapMount(p.map,e.id)}})).catch((function(t){var r=e.onError;r?r({type:"error",target:null,originalEvent:null,error:t}):console.error(t)})),function(){o=!1,t&&(null==a||a.onMapUnmount(e.id),e.reuseMaps?t.recycle():t.destroy())}}),[]),S((function(){s&&s.setProps(e)})),(0,n.useImperativeHandle)(t,(function(){return p.map}),[s]);var d=(0,n.useMemo)((function(){return Object.assign({position:"relative",width:"100%",height:"100%"},e.style)}),[e.style]);return n.createElement("div",{id:e.id,ref:u,style:d},s&&n.createElement(C.Provider,{value:p},n.createElement("div",{"mapboxgl-children":"",style:{height:"100%"}},e.children)))}var L=r(3935),P=/box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;function O(e,t){if(e&&t){var r=e.style;for(var n in t){var o=t[n];Number.isFinite(o)&&!P.test(n)?r[n]=o+"px":r[n]=o}}}function j(e,t){var r=(0,n.useContext)(C),o=r.map,a=r.mapLib,i=(0,n.useRef)({props:e});i.current.props=e;var s=(0,n.useMemo)((function(){var t=!1;n.Children.forEach(e.children,(function(e){e&&(t=!0)}));var r=Object.assign({},e,{element:t?document.createElement("div"):null}),o=new a.Marker(r);return o.setLngLat([e.longitude,e.latitude]),o.getElement().addEventListener("click",(function(e){null==i.current.props.onClick||i.current.props.onClick({type:"click",target:o,originalEvent:e})})),o.on("dragstart",(function(e){var t=e;t.lngLat=s.getLngLat(),null==i.current.props.onDragStart||i.current.props.onDragStart(t)})),o.on("drag",(function(e){var t=e;t.lngLat=s.getLngLat(),null==i.current.props.onDrag||i.current.props.onDrag(t)})),o.on("dragend",(function(e){var t=e;t.lngLat=s.getLngLat(),null==i.current.props.onDragEnd||i.current.props.onDragEnd(t)})),o}),[]);(0,n.useEffect)((function(){return s.addTo(o.getMap()),function(){s.remove()}}),[]);var l,u,c,p,d,f,m=e.longitude,v=e.latitude,y=e.offset,g=e.style,h=e.draggable,b=void 0!==h&&h,x=e.popup,_=void 0===x?null:x,w=e.rotation,S=void 0===w?0:w,E=e.rotationAlignment,k=void 0===E?"auto":E,P=e.pitchAlignment,j=void 0===P?"auto":P;return(0,n.useEffect)((function(){O(s.getElement(),g)}),[g]),(0,n.useImperativeHandle)(t,(function(){return s}),[]),s.getLngLat().lng===m&&s.getLngLat().lat===v||s.setLngLat([m,v]),y&&(l=s.getOffset(),u=y,c=Array.isArray(l)?l[0]:l?l.x:0,p=Array.isArray(l)?l[1]:l?l.y:0,d=Array.isArray(u)?u[0]:u?u.x:0,f=Array.isArray(u)?u[1]:u?u.y:0,c!==d||p!==f)&&s.setOffset(y),s.isDraggable()!==b&&s.setDraggable(b),s.getRotation()!==S&&s.setRotation(S),s.getRotationAlignment()!==k&&s.setRotationAlignment(k),s.getPitchAlignment()!==j&&s.setPitchAlignment(j),s.getPopup()!==_&&s.setPopup(_),(0,L.createPortal)(e.children,s.getElement())}const M=(0,n.memo)((0,n.forwardRef)(j));function T(e){return new Set(e?e.trim().split(/\s+/):[])}function z(e,t){var r=(0,n.useContext)(C),o=r.map,a=r.mapLib,s=(0,n.useMemo)((function(){return document.createElement("div")}),[]),l=(0,n.useRef)({props:e});l.current.props=e;var u=(0,n.useMemo)((function(){var t=Object.assign({},e),r=new a.Popup(t);return r.setLngLat([e.longitude,e.latitude]),r.once("open",(function(e){null==l.current.props.onOpen||l.current.props.onOpen(e)})),r}),[]);if((0,n.useEffect)((function(){var e=function(e){null==l.current.props.onClose||l.current.props.onClose(e)};return u.on("close",e),u.setDOMContent(s).addTo(o.getMap()),function(){u.off("close",e),u.isOpen()&&u.remove()}}),[]),(0,n.useEffect)((function(){O(u.getElement(),e.style)}),[e.style]),(0,n.useImperativeHandle)(t,(function(){return u}),[]),u.isOpen()&&(u.getLngLat().lng===e.longitude&&u.getLngLat().lat===e.latitude||u.setLngLat([e.longitude,e.latitude]),e.offset&&!i(u.options.offset,e.offset)&&u.setOffset(e.offset),u.options.anchor===e.anchor&&u.options.maxWidth===e.maxWidth||(u.options.anchor=e.anchor,u.setMaxWidth(e.maxWidth)),u.options.className!==e.className)){for(var p,d=T(u.options.className),f=T(e.className),m=(0,c.Z)(d);!(p=m()).done;){var v=p.value;f.has(v)||u.removeClassName(v)}for(var y,g=(0,c.Z)(f);!(y=g()).done;){var h=y.value;d.has(h)||u.addClassName(h)}u.options.className=e.className}return(0,L.createPortal)(e.children,s)}const R=(0,n.memo)((0,n.forwardRef)(z));const A=function(e,t,r,o){var a=(0,n.useContext)(C),i=(0,n.useMemo)((function(){return e(a)}),[]);return(0,n.useEffect)((function(){var e=o||r||t,n="function"==typeof t&&"function"==typeof r?t:null,s="function"==typeof r?r:"function"==typeof t?t:null,l=a.map;return l.hasControl(i)||(l.addControl(i,null==e?void 0:e.position),n&&n(a)),function(){s&&s(a),l.hasControl(i)&&l.removeControl(i)}}),[]),i};function Z(e){var t=A((function(t){return new t.mapLib.FullscreenControl({container:e.containerId&&document.getElementById(e.containerId)})}),{position:e.position});return(0,n.useEffect)((function(){O(t._controlContainer,e.style)}),[e.style]),null}const I=(0,n.memo)(Z);function D(e,t){var r=(0,n.useRef)({props:e}),o=A((function(t){var n=new t.mapLib.GeolocateControl(e),o=n._setupUI;return n._setupUI=function(e){n._container.hasChildNodes()||o(e)},n.on("geolocate",(function(e){null==r.current.props.onGeolocate||r.current.props.onGeolocate(e)})),n.on("error",(function(e){null==r.current.props.onError||r.current.props.onError(e)})),n.on("outofmaxbounds",(function(e){null==r.current.props.onOutOfMaxBounds||r.current.props.onOutOfMaxBounds(e)})),n.on("trackuserlocationstart",(function(e){null==r.current.props.onTrackUserLocationStart||r.current.props.onTrackUserLocationStart(e)})),n.on("trackuserlocationend",(function(e){null==r.current.props.onTrackUserLocationEnd||r.current.props.onTrackUserLocationEnd(e)})),n}),{position:e.position});return r.current.props=e,(0,n.useImperativeHandle)(t,(function(){return o}),[]),(0,n.useEffect)((function(){O(o._container,e.style)}),[e.style]),null}const N=(0,n.memo)((0,n.forwardRef)(D));function U(e){var t=A((function(t){return new t.mapLib.NavigationControl(e)}),{position:e.position});return(0,n.useEffect)((function(){O(t._container,e.style)}),[e.style]),null}const F=(0,n.memo)(U);function B(e){var t=A((function(t){return new t.mapLib.ScaleControl(e)}),{position:e.position}),r=(0,n.useRef)(e),o=r.current;r.current=e;var a=e.style;return void 0!==e.maxWidth&&e.maxWidth!==o.maxWidth&&(t.options.maxWidth=e.maxWidth),void 0!==e.unit&&e.unit!==o.unit&&t.setUnit(e.unit),(0,n.useEffect)((function(){O(t._container,a)}),[a]),null}const W=(0,n.memo)(B);function $(e,t){if(!e)throw new Error(t)}var H=0;const V=function(e){var t=(0,n.useContext)(C).map.getMap(),r=(0,n.useRef)(e),o=(0,n.useState)(0)[1],a=(0,n.useMemo)((function(){return e.id||"jsx-source-"+H++}),[]);(0,n.useEffect)((function(){if(t){var e=function(){return setTimeout((function(){return o((function(e){return e+1}))}),0)};return t.on("styledata",e),e(),function(){if(t.off("styledata",e),t.style&&t.style._loaded&&t.getSource(a)){var r,n=null==(r=t.getStyle())?void 0:r.layers;if(n)for(var o,i=(0,c.Z)(n);!(o=i()).done;){var s=o.value;s.source===a&&t.removeLayer(s.id)}t.removeSource(a)}}}}),[t]);var s=t&&t.style&&t.getSource(a);return s?function(e,t,r){$(t.id===r.id,"source id changed"),$(t.type===r.type,"source type changed");var n="",o=0;for(var a in t)"children"===a||"id"===a||i(r[a],t[a])||(n=a,o++);if(o){var s=t.type;if("geojson"===s)e.setData(t.data);else if("image"===s)e.updateImage({url:t.url,coordinates:t.coordinates});else if("setCoordinates"in e&&1===o&&"coordinates"===n)e.setCoordinates(t.coordinates);else if("setUrl"in e)switch(n){case"url":e.setUrl(t.url);break;case"tiles":e.setTiles(t.tiles)}else console.warn("Unable to update <Source> prop: "+n)}}(s,e,r.current):s=function(e,t,r){if(e.style&&e.style._loaded){var n=Object.assign({},r);return delete n.id,delete n.children,e.addSource(t,n),e.getSource(t)}return null}(t,a,e),r.current=e,s&&n.Children.map(e.children,(function(e){return e&&(0,n.cloneElement)(e,{source:a})}))||null};var q=0;const G=function(e){var t=(0,n.useContext)(C).map.getMap(),r=(0,n.useRef)(e),o=(0,n.useState)(0)[1],a=(0,n.useMemo)((function(){return e.id||"jsx-layer-"+q++}),[]);if((0,n.useEffect)((function(){if(t){var e=function(){return o((function(e){return e+1}))};return t.on("styledata",e),e(),function(){t.off("styledata",e),t.style&&t.style._loaded&&t.getLayer(a)&&t.removeLayer(a)}}}),[t]),t&&t.style&&t.getLayer(a))try{!function(e,t,r,n){if($(r.id===n.id,"layer id changed"),$(r.type===n.type,"layer type changed"),"custom"!==r.type&&"custom"!==n.type){var o=r.layout,a=void 0===o?{}:o,s=r.paint,l=void 0===s?{}:s,u=r.filter,c=r.minzoom,p=r.maxzoom,d=r.beforeId;if(d!==n.beforeId&&e.moveLayer(t,d),a!==n.layout){var f=n.layout||{};for(var m in a)i(a[m],f[m])||e.setLayoutProperty(t,m,a[m]);for(var v in f)a.hasOwnProperty(v)||e.setLayoutProperty(t,v,void 0)}if(l!==n.paint){var y=n.paint||{};for(var g in l)i(l[g],y[g])||e.setPaintProperty(t,g,l[g]);for(var h in y)l.hasOwnProperty(h)||e.setPaintProperty(t,h,void 0)}i(u,n.filter)||e.setFilter(t,u),c===n.minzoom&&p===n.maxzoom||e.setLayerZoomRange(t,c,p)}}(t,a,e,r.current)}catch(s){console.warn(s)}else!function(e,t,r){if(e.style&&e.style._loaded&&(!("source"in r)||e.getSource(r.source))){var n=Object.assign({},r,{id:t});delete n.beforeId,e.addLayer(n,r.beforeId)}}(t,a,e);return r.current=e,null};var J=r.e(8539).then(r.t.bind(r,8539,23)),Q=n.forwardRef((function(e,t){return k(e,t,J)})),X=M,K=R,Y=I,ee=F,te=N,re=W;const ne=Q},745:(e,t,r)=>{var n=r(3935);n.createRoot,n.hydrateRoot},1202:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(1002);function o(e){var t=function(e,t){if("object"!==(0,n.Z)(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==(0,n.Z)(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===(0,n.Z)(t)?t:String(t)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,o(n.key),n)}}function i(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}},2853:e=>{e.exports=JSON.parse('{"version":8,"name":"Basic","metadata":{"mapbox:autocomposite":true},"sources":{"mapbox":{"url":"mapbox://mapbox.mapbox-streets-v7","type":"vector"}},"sprite":"mapbox://sprites/mapbox/basic-v8","glyphs":"mapbox://fonts/mapbox/{fontstack}/{range}.pbf","layers":[{"id":"background","type":"background","paint":{"background-color":"#dedede"},"interactive":true},{"id":"landuse_overlay_national_park","type":"fill","source":"mapbox","source-layer":"landuse_overlay","filter":["==","class","national_park"],"paint":{"fill-color":"#d2edae","fill-opacity":0.75},"interactive":true},{"id":"landuse_park","type":"fill","source":"mapbox","source-layer":"landuse","filter":["==","class","park"],"paint":{"fill-color":"#d2edae"},"interactive":true},{"id":"waterway","type":"line","source":"mapbox","source-layer":"waterway","filter":["all",["==","$type","LineString"],["in","class","river","canal"]],"paint":{"line-color":"#a0cfdf","line-width":{"base":1.4,"stops":[[8,0.5],[20,15]]}},"interactive":true},{"id":"water","type":"fill","source":"mapbox","source-layer":"water","paint":{"fill-color":"#a0cfdf"},"interactive":true},{"id":"building","type":"fill","source":"mapbox","source-layer":"building","paint":{"fill-color":"#d6d6d6"},"interactive":true},{"interactive":true,"layout":{"line-cap":"butt","line-join":"miter"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["==","structure","tunnel"]]],"type":"line","source":"mapbox","id":"tunnel_minor","paint":{"line-color":"#efefef","line-width":{"base":1.55,"stops":[[4,0.25],[20,30]]},"line-dasharray":[0.36,0.18]},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"butt","line-join":"miter"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["==","structure","tunnel"]]],"type":"line","source":"mapbox","id":"tunnel_major","paint":{"line-color":"#fff","line-width":{"base":1.4,"stops":[[6,0.5],[20,30]]},"line-dasharray":[0.28,0.14]},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["in","structure","none","ford"]]],"type":"line","source":"mapbox","id":"road_minor","paint":{"line-color":"#efefef","line-width":{"base":1.55,"stops":[[4,0.25],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["in","structure","none","ford"]]],"type":"line","source":"mapbox","id":"road_major","paint":{"line-color":"#fff","line-width":{"base":1.4,"stops":[[6,0.5],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"butt","line-join":"miter"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["==","structure","bridge"]]],"type":"line","source":"mapbox","id":"bridge_minor case","paint":{"line-color":"#dedede","line-width":{"base":1.6,"stops":[[12,0.5],[20,10]]},"line-gap-width":{"base":1.55,"stops":[[4,0.25],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"butt","line-join":"miter"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["==","structure","bridge"]]],"type":"line","source":"mapbox","id":"bridge_major case","paint":{"line-color":"#dedede","line-width":{"base":1.6,"stops":[[12,0.5],[20,10]]},"line-gap-width":{"base":1.55,"stops":[[4,0.25],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["==","structure","bridge"]]],"type":"line","source":"mapbox","id":"bridge_minor","paint":{"line-color":"#efefef","line-width":{"base":1.55,"stops":[[4,0.25],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["==","structure","bridge"]]],"type":"line","source":"mapbox","id":"bridge_major","paint":{"line-color":"#fff","line-width":{"base":1.4,"stops":[[6,0.5],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["<=","admin_level",2],["==","maritime",0]]],"type":"line","source":"mapbox","id":"admin_country","paint":{"line-color":"#8b8a8a","line-width":{"base":1.3,"stops":[[3,0.5],[22,15]]}},"source-layer":"admin"},{"interactive":true,"minzoom":5,"layout":{"icon-image":"{maki}-11","text-offset":[0,0.5],"text-field":"{name_en}","text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-max-width":8,"text-anchor":"top","text-size":11,"icon-size":1},"filter":["all",["==","$type","Point"],["all",["==","scalerank",1],["==","localrank",1]]],"type":"symbol","source":"mapbox","id":"poi_label","paint":{"text-color":"#666","text-halo-width":1,"text-halo-color":"rgba(255,255,255,0.75)","text-halo-blur":1},"source-layer":"poi_label"},{"interactive":true,"layout":{"symbol-placement":"line","text-field":"{name_en}","text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-transform":"uppercase","text-letter-spacing":0.1,"text-size":{"base":1.4,"stops":[[10,8],[20,14]]}},"filter":["all",["==","$type","LineString"],["in","class","motorway","primary","secondary","tertiary","trunk"]],"type":"symbol","source":"mapbox","id":"road_major_label","paint":{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":2},"source-layer":"road_label"},{"interactive":true,"minzoom":8,"layout":{"text-field":"{name_en}","text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-max-width":6,"text-size":{"stops":[[6,12],[12,16]]}},"filter":["all",["==","$type","Point"],["in","type","town","village","hamlet","suburb","neighbourhood","island"]],"type":"symbol","source":"mapbox","id":"place_label_other","paint":{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":1,"text-halo-blur":1},"source-layer":"place_label"},{"interactive":true,"layout":{"text-field":"{name_en}","text-font":["Open Sans Bold","Arial Unicode MS Bold"],"text-max-width":10,"text-size":{"stops":[[3,12],[8,16]]}},"maxzoom":16,"filter":["all",["==","$type","Point"],["==","type","city"]],"type":"symbol","source":"mapbox","id":"place_label_city","paint":{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":1,"text-halo-blur":1},"source-layer":"place_label"},{"interactive":true,"layout":{"text-field":"{name_en}","text-font":["Open Sans Regular","Arial Unicode MS Regular"],"text-max-width":10,"text-size":{"stops":[[3,14],[8,22]]}},"maxzoom":12,"filter":["==","$type","Point"],"type":"symbol","source":"mapbox","id":"country_label","paint":{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":1,"text-halo-blur":1},"source-layer":"country_label"}]}')}}]);