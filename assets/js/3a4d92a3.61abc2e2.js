"use strict";(self.webpackChunkreact_map_gl_website=self.webpackChunkreact_map_gl_website||[]).push([[1341],{5700:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>_,contentTitle:()=>h,default:()=>S,frontMatter:()=>g,metadata:()=>y,toc:()=>b});var r=n(7462),o=n(3366),a=n(7294),i=n(3905),s=(n(745),n(945));function u(e){var t=e.year;return a.createElement("div",{className:"control-panel"},a.createElement("h3",null,"Interactive GeoJSON"),a.createElement("p",null,"Map showing median household income by state in year ",a.createElement("b",null,t),". Hover over a state to see details."),a.createElement("p",null,"Data source: ",a.createElement("a",{href:"www.census.gov"},"US Census Bureau")),a.createElement("div",{className:"source-link"},a.createElement("a",{href:"https://github.com/visgl/react-map-gl/tree/7.1-release/examples/geojson",target:"_new"},"View Code \u2197")),a.createElement("hr",null),a.createElement("div",{key:"year",className:"input"},a.createElement("label",null,"Year"),a.createElement("input",{type:"range",value:t,min:1995,max:2015,step:1,onChange:function(t){return e.onChange(t.target.value)}})))}const l=a.memo(u);var c={id:"data",type:"fill",paint:{"fill-color":{property:"percentile",stops:[[0,"#3288bd"],[1,"#66c2a5"],[2,"#abdda4"],[3,"#e6f598"],[4,"#ffffbf"],[5,"#fee08b"],[6,"#fdae61"],[7,"#f46d43"],[8,"#d53e4f"]]},"fill-opacity":.8}},p=n(685),f=n(5256);var d="";function m(){var e=(0,a.useState)(2015),t=e[0],n=e[1],r=(0,a.useState)(null),o=r[0],i=r[1],u=(0,a.useState)(null),m=u[0],v=u[1];(0,a.useEffect)((function(){fetch("https://raw.githubusercontent.com/uber/react-map-gl/master/examples/.data/us-income.geojson").then((function(e){return e.json()})).then((function(e){return i(e)})).catch((function(e){return console.error("Could not load data",e)}))}),[]);var g=(0,a.useCallback)((function(e){var t=e.features,n=e.point,r=n.x,o=n.y,a=t&&t[0];v(a&&{feature:a,x:r,y:o})}),[]),h=(0,a.useMemo)((function(){return o&&(e=function(e){return e.properties.income[t]},n=o.features,r=(0,f.FT)().domain(n.map(e)).range((0,p.w6)(9)),{type:"FeatureCollection",features:n.map((function(t){var n=e(t),o=Object.assign({},t.properties,{value:n,percentile:r(n)});return Object.assign({},t,{properties:o})}))});var e,n,r}),[o,t]);return a.createElement(a.Fragment,null,a.createElement(s.ZP,{initialViewState:{latitude:40,longitude:-100,zoom:3},mapStyle:"mapbox://styles/mapbox/light-v9",mapboxAccessToken:d,interactiveLayerIds:["data"],onMouseMove:g},a.createElement(s.Hw,{type:"geojson",data:h},a.createElement(s.mh,c)),m&&a.createElement("div",{className:"tooltip",style:{left:m.x,top:m.y}},a.createElement("div",null,"State: ",m.feature.properties.name),a.createElement("div",null,"Median Household Income: ",m.feature.properties.value),a.createElement("div",null,"Percentile: ",m.feature.properties.percentile/8*100))),a.createElement(l,{year:t,onChange:function(e){return n(e)}}))}var v=["components"],g={},h="GeoJSON",y={unversionedId:"geojson",id:"geojson",title:"GeoJSON",description:"",source:"@site/src/examples/geojson.mdx",sourceDirName:".",slug:"/geojson",permalink:"/react-map-gl/examples/geojson",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"examplesSidebar",previous:{title:"Draggable Marker",permalink:"/react-map-gl/examples/draggable-markers"},next:{title:"GeoJSON Animation",permalink:"/react-map-gl/examples/geojson-animation"}},_={},b=[],E={toc:b},x="wrapper";function S(e){var t=e.components,n=(0,o.Z)(e,v);return(0,i.kt)(x,(0,r.Z)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"geojson"},"GeoJSON"),(0,i.kt)(m,{mdxType:"App"}))}S.isMDXComponent=!0},945:(e,t,n)=>{n.d(t,{ot:()=>K,$j:()=>ee,mh:()=>V,D5:()=>Q,Jx:()=>X,Pv:()=>$,GI:()=>Y,jf:()=>te,Hw:()=>G,ZP:()=>ne,PE:()=>z});var r=n(7294),o=r.createContext(null);var a=n(1202);function i(e){return{longitude:e.center.lng,latitude:e.center.lat,zoom:e.zoom,pitch:e.pitch,bearing:e.bearing,padding:e.padding}}function s(e,t){var n=t.viewState||t,r=!1;if("longitude"in n&&"latitude"in n){var o=e.center;e.center=new o.constructor(n.longitude,n.latitude),r=r||o!==e.center}if("zoom"in n){var a=e.zoom;e.zoom=n.zoom,r=r||a!==e.zoom}if("bearing"in n){var i=e.bearing;e.bearing=n.bearing,r=r||i!==e.bearing}if("pitch"in n){var s=e.pitch;e.pitch=n.pitch,r=r||s!==e.pitch}return n.padding&&!e.isPaddingEqual(n.padding)&&(r=!0,e.padding=n.padding),r}var u=n(7855),l=["type","source","source-layer","minzoom","maxzoom","filter","layout"];function c(e){if(!e)return null;if("string"==typeof e)return e;if("toJS"in e&&(e=e.toJS()),!e.layers)return e;for(var t,n={},r=(0,u.Z)(e.layers);!(t=r()).done;){var o=t.value;n[o.id]=o}var a=e.layers.map((function(e){var t=null;"interactive"in e&&delete(t=Object.assign({},e)).interactive;var r=n[e.ref];if(r){delete(t=t||Object.assign({},e)).ref;for(var o,a=(0,u.Z)(l);!(o=a()).done;){var i=o.value;i in r&&(t[i]=r[i])}}return t||e}));return Object.assign({},e,{layers:a})}function p(e,t){if(e===t)return!0;if(!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!p(e[n],t[n]))return!1;return!0}if(Array.isArray(t))return!1;if("object"==typeof e&&"object"==typeof t){var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(var a=0,i=r;a<i.length;a++){var s=i[a];if(!t.hasOwnProperty(s))return!1;if(!p(e[s],t[s]))return!1}return!0}return!1}var f={version:8,sources:{},layers:[]},d={mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",click:"onClick",dblclick:"onDblClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",mouseout:"onMouseOut",contextmenu:"onContextMenu",touchstart:"onTouchStart",touchend:"onTouchEnd",touchmove:"onTouchMove",touchcancel:"onTouchCancel"},m={movestart:"onMoveStart",move:"onMove",moveend:"onMoveEnd",dragstart:"onDragStart",drag:"onDrag",dragend:"onDragEnd",zoomstart:"onZoomStart",zoom:"onZoom",zoomend:"onZoomEnd",rotatestart:"onRotateStart",rotate:"onRotate",rotateend:"onRotateEnd",pitchstart:"onPitchStart",pitch:"onPitch",pitchend:"onPitchEnd"},v={wheel:"onWheel",boxzoomstart:"onBoxZoomStart",boxzoomend:"onBoxZoomEnd",boxzoomcancel:"onBoxZoomCancel",resize:"onResize",load:"onLoad",render:"onRender",idle:"onIdle",remove:"onRemove",data:"onData",styledata:"onStyleData",sourcedata:"onSourceData",error:"onError"},g=["minZoom","maxZoom","minPitch","maxPitch","maxBounds","projection","renderWorldCopies"],h=["scrollZoom","boxZoom","dragRotate","dragPan","keyboard","doubleClickZoom","touchZoomRotate","touchPitch"],y=function(){function e(e,t,n){var r=this;this._map=null,this._internalUpdate=!1,this._inRender=!1,this._hoveredFeatures=null,this._deferredEvents={move:!1,zoom:!1,pitch:!1,rotate:!1},this._onEvent=function(e){var t=r.props[v[e.type]];t?t(e):"error"===e.type&&console.error(e.error)},this._onPointerEvent=function(e){"mousemove"!==e.type&&"mouseout"!==e.type||r._updateHover(e);var t=r.props[d[e.type]];t&&(r.props.interactiveLayerIds&&"mouseover"!==e.type&&"mouseout"!==e.type&&(e.features=r._hoveredFeatures||r._queryRenderedFeatures(e.point)),t(e),delete e.features)},this._onCameraEvent=function(e){if(!r._internalUpdate){var t=r.props[m[e.type]];t&&t(e)}e.type in r._deferredEvents&&(r._deferredEvents[e.type]=!1)},this._MapClass=e,this.props=t,this._initialize(n)}var t=e.prototype;return t.setProps=function(e){var t=this.props;this.props=e;var n=this._updateSettings(e,t);n&&this._createShadowTransform(this._map);var r=this._updateSize(e),o=this._updateViewState(e,!0);this._updateStyle(e,t),this._updateStyleComponents(e,t),this._updateHandlers(e,t),(n||r||o&&!this._map.isMoving())&&this.redraw()},e.reuse=function(t,n){var r=e.savedMaps.pop();if(!r)return null;var o=r.map,a=o.getContainer();for(n.className=a.className;a.childNodes.length>0;)n.appendChild(a.childNodes[0]);o._container=n;var i=o._resizeObserver;i&&(i.disconnect(),i.observe(n)),r.setProps(Object.assign({},t,{styleDiffing:!1})),o.resize();var s=t.initialViewState;return s&&(s.bounds?o.fitBounds(s.bounds,Object.assign({},s.fitBoundsOptions,{duration:0})):r._updateViewState(s,!1)),o.isStyleLoaded()?o.fire("load"):o.once("styledata",(function(){return o.fire("load")})),o._update(),r},t._initialize=function(e){var t=this,n=this.props,r=n.mapStyle,o=void 0===r?f:r,a=Object.assign({},n,n.initialViewState,{accessToken:n.mapboxAccessToken||_()||null,container:e,style:c(o)}),i=a.initialViewState||a.viewState||a;if(Object.assign(a,{center:[i.longitude||0,i.latitude||0],zoom:i.zoom||0,pitch:i.pitch||0,bearing:i.bearing||0}),n.gl){var s=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(){return HTMLCanvasElement.prototype.getContext=s,n.gl}}var u=new this._MapClass(a);i.padding&&u.setPadding(i.padding),n.cursor&&(u.getCanvas().style.cursor=n.cursor),this._createShadowTransform(u);var l=u._render;u._render=function(e){t._inRender=!0,l.call(u,e),t._inRender=!1};var p=u._renderTaskQueue.run;u._renderTaskQueue.run=function(e){p.call(u._renderTaskQueue,e),t._onBeforeRepaint()},u.on("render",(function(){return t._onAfterRepaint()}));var g=u.fire;for(var h in u.fire=this._fireEvent.bind(this,g),u.on("resize",(function(){t._renderTransform.resize(u.transform.width,u.transform.height)})),u.on("styledata",(function(){return t._updateStyleComponents(t.props,{})})),u.on("sourcedata",(function(){return t._updateStyleComponents(t.props,{})})),d)u.on(h,this._onPointerEvent);for(var y in m)u.on(y,this._onCameraEvent);for(var b in v)u.on(b,this._onEvent);this._map=u},t.recycle=function(){var t=this.map.getContainer().querySelector("[mapboxgl-children]");null==t||t.remove(),e.savedMaps.push(this)},t.destroy=function(){this._map.remove()},t.redraw=function(){var e=this._map;!this._inRender&&e.style&&(e._frame&&(e._frame.cancel(),e._frame=null),e._render())},t._createShadowTransform=function(e){var t,n,r=(t=e.transform,(n=t.clone()).pixelsToGLUnits=t.pixelsToGLUnits,n);e.painter.transform=r,this._renderTransform=r},t._updateSize=function(e){var t=e.viewState;if(t){var n=this._map;if(t.width!==n.transform.width||t.height!==n.transform.height)return n.resize(),!0}return!1},t._updateViewState=function(e,t){if(this._internalUpdate)return!1;var n=this._map,r=this._renderTransform,o=r.zoom,a=r.pitch,u=r.bearing,l=n.isMoving();l&&(r.cameraElevationReference="sea");var c=s(r,Object.assign({},i(n.transform),e));if(l&&(r.cameraElevationReference="ground"),c&&t){var p=this._deferredEvents;p.move=!0,p.zoom||(p.zoom=o!==r.zoom),p.rotate||(p.rotate=u!==r.bearing),p.pitch||(p.pitch=a!==r.pitch)}return l||s(n.transform,e),c},t._updateSettings=function(e,t){for(var n=this._map,r=!1,o=0,a=g;o<a.length;o++){var i=a[o];if(i in e&&!p(e[i],t[i])){r=!0;var s=n["set"+i[0].toUpperCase()+i.slice(1)];null==s||s.call(n,e[i])}}return r},t._updateStyle=function(e,t){if(e.cursor!==t.cursor&&(this._map.getCanvas().style.cursor=e.cursor),e.mapStyle!==t.mapStyle){var n=e.mapStyle,r=void 0===n?f:n,o=e.styleDiffing,a={diff:void 0===o||o};return"localIdeographFontFamily"in e&&(a.localIdeographFontFamily=e.localIdeographFontFamily),this._map.setStyle(c(r),a),!0}return!1},t._updateStyleComponents=function(e,t){var n=this._map,r=!1;return n.isStyleLoaded()&&("light"in e&&n.setLight&&!p(e.light,t.light)&&(r=!0,n.setLight(e.light)),"fog"in e&&n.setFog&&!p(e.fog,t.fog)&&(r=!0,n.setFog(e.fog)),"terrain"in e&&n.setTerrain&&!p(e.terrain,t.terrain)&&(e.terrain&&!n.getSource(e.terrain.source)||(r=!0,n.setTerrain(e.terrain)))),r},t._updateHandlers=function(e,t){for(var n=this._map,r=!1,o=0,a=h;o<a.length;o++){var i,s,u=a[o],l=null==(i=e[u])||i;p(l,null==(s=t[u])||s)||(r=!0,l?n[u].enable(l):n[u].disable())}return r},t._queryRenderedFeatures=function(e){var t=this._map,n=this.props.interactiveLayerIds,r=void 0===n?[]:n;try{return t.queryRenderedFeatures(e,{layers:r.filter(t.getLayer.bind(t))})}catch(o){return[]}},t._updateHover=function(e){var t=this.props;if(t.interactiveLayerIds&&(t.onMouseMove||t.onMouseEnter||t.onMouseLeave)){var n,r=e.type,o=(null==(n=this._hoveredFeatures)?void 0:n.length)>0,a=this._queryRenderedFeatures(e.point),i=a.length>0;!i&&o&&(e.type="mouseleave",this._onPointerEvent(e)),this._hoveredFeatures=a,i&&!o&&(e.type="mouseenter",this._onPointerEvent(e)),e.type=r}else this._hoveredFeatures=null},t._fireEvent=function(e,t,n){var r=this._map,o=r.transform,a="string"==typeof t?t:t.type;return"move"===a&&this._updateViewState(this.props,!1),a in m&&("object"==typeof t&&(t.viewState=i(o)),this._map.isMoving())?(r.transform=this._renderTransform,e.call(r,t,n),r.transform=o,r):(e.call(r,t,n),r)},t._onBeforeRepaint=function(){var e=this,t=this._map;for(var n in this._internalUpdate=!0,this._deferredEvents)this._deferredEvents[n]&&t.fire(n);this._internalUpdate=!1;var r=this._map.transform;this._map.transform=this._renderTransform,this._onAfterRepaint=function(){e._map.transform=r}},(0,a.Z)(e,[{key:"map",get:function(){return this._map}},{key:"transform",get:function(){return this._renderTransform}}]),e}();function _(){var e=null;if("undefined"!=typeof location){var t=/access_token=([^&\/]*)/.exec(location.search);e=t&&t[1]}try{e=e||"pk.eyJ1IjoidWNmLW1hcGJveCIsImEiOiJja2tyNHQzdnIzYmNnMndwZGI3djNzdjVyIn0.xgCXV9mLZ47q7easx6WLCQ"}catch(n){}try{e=e||process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}catch(r){}return e}y.savedMaps=[];var b=["setMaxBounds","setMinZoom","setMaxZoom","setMinPitch","setMaxPitch","setRenderWorldCopies","setProjection","setStyle","addSource","removeSource","addLayer","removeLayer","setLayerZoomRange","setFilter","setPaintProperty","setLayoutProperty","setLight","setTerrain","setFog","remove"];function E(e){if(!e)return null;for(var t,n=e.map,r={getMap:function(){return n},getCenter:function(){return e.transform.center},getZoom:function(){return e.transform.zoom},getBearing:function(){return e.transform.bearing},getPitch:function(){return e.transform.pitch},getPadding:function(){return e.transform.padding},getBounds:function(){return e.transform.getBounds()},project:function(t){var r=n.transform;n.transform=e.transform;var o=n.project(t);return n.transform=r,o},unproject:function(t){var r=n.transform;n.transform=e.transform;var o=n.unproject(t);return n.transform=r,o},queryTerrainElevation:function(t,r){var o=n.transform;n.transform=e.transform;var a=n.queryTerrainElevation(t,r);return n.transform=o,a}},o=(0,u.Z)(function(e){var t=new Set,n=e;for(;n;){for(var r,o=(0,u.Z)(Object.getOwnPropertyNames(n));!(r=o()).done;){var a=r.value;"_"!==a[0]&&"function"==typeof e[a]&&"fire"!==a&&"setEventedParent"!==a&&t.add(a)}n=Object.getPrototypeOf(n)}return Array.from(t)}(n));!(t=o()).done;){var a=t.value;a in r||b.includes(a)||(r[a]=n[a].bind(n))}return r}const x="undefined"!=typeof document?r.useLayoutEffect:r.useEffect;var S=["baseApiUrl","maxParallelImageRequests","workerClass","workerCount","workerUrl"];var L=r.createContext(null);function C(e,t,n){var a=(0,r.useContext)(o),i=(0,r.useState)(null),s=i[0],l=i[1],c=(0,r.useRef)(),p=(0,r.useRef)({mapLib:null,map:null}).current;(0,r.useEffect)((function(){var t,r=e.mapLib,o=!0;return Promise.resolve(r||n).then((function(n){if(o){if(!n)throw new Error("Invalid mapLib");var r="Map"in n?n:n.default;if(!r.Map)throw new Error("Invalid mapLib");if(function(e,t){for(var n,r=(0,u.Z)(S);!(n=r()).done;){var o=n.value;o in t&&(e[o]=t[o])}var a=t.RTLTextPlugin,i=void 0===a?"https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js":a;i&&e.getRTLTextPluginStatus&&"unavailable"===e.getRTLTextPluginStatus()&&e.setRTLTextPlugin(i,(function(e){e&&console.error(e)}),!1)}(r,e),r.supported&&!r.supported(e))throw new Error("Map is not supported by this browser");e.reuseMaps&&(t=y.reuse(e,c.current)),t||(t=new y(r.Map,e,c.current)),p.map=E(t),p.mapLib=r,l(t),null==a||a.onMapMount(p.map,e.id)}})).catch((function(t){var n=e.onError;n?n({type:"error",target:null,originalEvent:null,error:t}):console.error(t)})),function(){o=!1,t&&(null==a||a.onMapUnmount(e.id),e.reuseMaps?t.recycle():t.destroy())}}),[]),x((function(){s&&s.setProps(e)})),(0,r.useImperativeHandle)(t,(function(){return p.map}),[s]);var f=(0,r.useMemo)((function(){return Object.assign({position:"relative",width:"100%",height:"100%"},e.style)}),[e.style]);return r.createElement("div",{id:e.id,ref:c,style:f},s&&r.createElement(L.Provider,{value:p},r.createElement("div",{"mapboxgl-children":"",style:{height:"100%"}},e.children)))}var w=n(3935),M=/box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;function P(e,t){if(e&&t){var n=e.style;for(var r in t){var o=t[r];Number.isFinite(o)&&!M.test(r)?n[r]=o+"px":n[r]=o}}}function T(e,t){var n=(0,r.useContext)(L),o=n.map,a=n.mapLib,i=(0,r.useRef)({props:e});i.current.props=e;var s=(0,r.useMemo)((function(){var t=!1;r.Children.forEach(e.children,(function(e){e&&(t=!0)}));var n=Object.assign({},e,{element:t?document.createElement("div"):null}),o=new a.Marker(n);return o.setLngLat([e.longitude,e.latitude]),o.getElement().addEventListener("click",(function(e){null==i.current.props.onClick||i.current.props.onClick({type:"click",target:o,originalEvent:e})})),o.on("dragstart",(function(e){var t=e;t.lngLat=s.getLngLat(),null==i.current.props.onDragStart||i.current.props.onDragStart(t)})),o.on("drag",(function(e){var t=e;t.lngLat=s.getLngLat(),null==i.current.props.onDrag||i.current.props.onDrag(t)})),o.on("dragend",(function(e){var t=e;t.lngLat=s.getLngLat(),null==i.current.props.onDragEnd||i.current.props.onDragEnd(t)})),o}),[]);(0,r.useEffect)((function(){return s.addTo(o.getMap()),function(){s.remove()}}),[]);var u,l,c,p,f,d,m=e.longitude,v=e.latitude,g=e.offset,h=e.style,y=e.draggable,_=void 0!==y&&y,b=e.popup,E=void 0===b?null:b,x=e.rotation,S=void 0===x?0:x,C=e.rotationAlignment,M=void 0===C?"auto":C,T=e.pitchAlignment,j=void 0===T?"auto":T;return(0,r.useEffect)((function(){P(s.getElement(),h)}),[h]),(0,r.useImperativeHandle)(t,(function(){return s}),[]),s.getLngLat().lng===m&&s.getLngLat().lat===v||s.setLngLat([m,v]),g&&(u=s.getOffset(),l=g,c=Array.isArray(u)?u[0]:u?u.x:0,p=Array.isArray(u)?u[1]:u?u.y:0,f=Array.isArray(l)?l[0]:l?l.x:0,d=Array.isArray(l)?l[1]:l?l.y:0,c!==f||p!==d)&&s.setOffset(g),s.isDraggable()!==_&&s.setDraggable(_),s.getRotation()!==S&&s.setRotation(S),s.getRotationAlignment()!==M&&s.setRotationAlignment(M),s.getPitchAlignment()!==j&&s.setPitchAlignment(j),s.getPopup()!==E&&s.setPopup(E),(0,w.createPortal)(e.children,s.getElement())}const j=(0,r.memo)((0,r.forwardRef)(T));function k(e){return new Set(e?e.trim().split(/\s+/):[])}function O(e,t){var n=(0,r.useContext)(L),o=n.map,a=n.mapLib,i=(0,r.useMemo)((function(){return document.createElement("div")}),[]),s=(0,r.useRef)({props:e});s.current.props=e;var l=(0,r.useMemo)((function(){var t=Object.assign({},e),n=new a.Popup(t);return n.setLngLat([e.longitude,e.latitude]),n.once("open",(function(e){null==s.current.props.onOpen||s.current.props.onOpen(e)})),n}),[]);if((0,r.useEffect)((function(){var e=function(e){null==s.current.props.onClose||s.current.props.onClose(e)};return l.on("close",e),l.setDOMContent(i).addTo(o.getMap()),function(){l.off("close",e),l.isOpen()&&l.remove()}}),[]),(0,r.useEffect)((function(){P(l.getElement(),e.style)}),[e.style]),(0,r.useImperativeHandle)(t,(function(){return l}),[]),l.isOpen()&&(l.getLngLat().lng===e.longitude&&l.getLngLat().lat===e.latitude||l.setLngLat([e.longitude,e.latitude]),e.offset&&!p(l.options.offset,e.offset)&&l.setOffset(e.offset),l.options.anchor===e.anchor&&l.options.maxWidth===e.maxWidth||(l.options.anchor=e.anchor,l.setMaxWidth(e.maxWidth)),l.options.className!==e.className)){for(var c,f=k(l.options.className),d=k(e.className),m=(0,u.Z)(f);!(c=m()).done;){var v=c.value;d.has(v)||l.removeClassName(v)}for(var g,h=(0,u.Z)(d);!(g=h()).done;){var y=g.value;f.has(y)||l.addClassName(y)}l.options.className=e.className}return(0,w.createPortal)(e.children,i)}const R=(0,r.memo)((0,r.forwardRef)(O));const z=function(e,t,n,o){var a=(0,r.useContext)(L),i=(0,r.useMemo)((function(){return e(a)}),[]);return(0,r.useEffect)((function(){var e=o||n||t,r="function"==typeof t&&"function"==typeof n?t:null,s="function"==typeof n?n:"function"==typeof t?t:null,u=a.map;return u.hasControl(i)||(u.addControl(i,null==e?void 0:e.position),r&&r(a)),function(){s&&s(a),u.hasControl(i)&&u.removeControl(i)}}),[]),i};function I(e){var t=z((function(t){return new t.mapLib.FullscreenControl({container:e.containerId&&document.getElementById(e.containerId)})}),{position:e.position});return(0,r.useEffect)((function(){P(t._controlContainer,e.style)}),[e.style]),null}const A=(0,r.memo)(I);function Z(e,t){var n=(0,r.useRef)({props:e}),o=z((function(t){var r=new t.mapLib.GeolocateControl(e),o=r._setupUI;return r._setupUI=function(e){r._container.hasChildNodes()||o(e)},r.on("geolocate",(function(e){null==n.current.props.onGeolocate||n.current.props.onGeolocate(e)})),r.on("error",(function(e){null==n.current.props.onError||n.current.props.onError(e)})),r.on("outofmaxbounds",(function(e){null==n.current.props.onOutOfMaxBounds||n.current.props.onOutOfMaxBounds(e)})),r.on("trackuserlocationstart",(function(e){null==n.current.props.onTrackUserLocationStart||n.current.props.onTrackUserLocationStart(e)})),r.on("trackuserlocationend",(function(e){null==n.current.props.onTrackUserLocationEnd||n.current.props.onTrackUserLocationEnd(e)})),r}),{position:e.position});return n.current.props=e,(0,r.useImperativeHandle)(t,(function(){return o}),[]),(0,r.useEffect)((function(){P(o._container,e.style)}),[e.style]),null}const N=(0,r.memo)((0,r.forwardRef)(Z));function D(e){var t=z((function(t){return new t.mapLib.NavigationControl(e)}),{position:e.position});return(0,r.useEffect)((function(){P(t._container,e.style)}),[e.style]),null}const F=(0,r.memo)(D);function U(e){var t=z((function(t){return new t.mapLib.ScaleControl(e)}),{position:e.position}),n=(0,r.useRef)(e),o=n.current;n.current=e;var a=e.style;return void 0!==e.maxWidth&&e.maxWidth!==o.maxWidth&&(t.options.maxWidth=e.maxWidth),void 0!==e.unit&&e.unit!==o.unit&&t.setUnit(e.unit),(0,r.useEffect)((function(){P(t._container,a)}),[a]),null}const B=(0,r.memo)(U);function H(e,t){if(!e)throw new Error(t)}var W=0;const G=function(e){var t=(0,r.useContext)(L).map.getMap(),n=(0,r.useRef)(e),o=(0,r.useState)(0)[1],a=(0,r.useMemo)((function(){return e.id||"jsx-source-"+W++}),[]);(0,r.useEffect)((function(){if(t){var e=function(){return setTimeout((function(){return o((function(e){return e+1}))}),0)};return t.on("styledata",e),e(),function(){if(t.off("styledata",e),t.style&&t.style._loaded&&t.getSource(a)){var n,r=null==(n=t.getStyle())?void 0:n.layers;if(r)for(var o,i=(0,u.Z)(r);!(o=i()).done;){var s=o.value;s.source===a&&t.removeLayer(s.id)}t.removeSource(a)}}}}),[t]);var i=t&&t.style&&t.getSource(a);return i?function(e,t,n){H(t.id===n.id,"source id changed"),H(t.type===n.type,"source type changed");var r="",o=0;for(var a in t)"children"===a||"id"===a||p(n[a],t[a])||(r=a,o++);if(o){var i=t.type;if("geojson"===i)e.setData(t.data);else if("image"===i)e.updateImage({url:t.url,coordinates:t.coordinates});else if("setCoordinates"in e&&1===o&&"coordinates"===r)e.setCoordinates(t.coordinates);else if("setUrl"in e)switch(r){case"url":e.setUrl(t.url);break;case"tiles":e.setTiles(t.tiles)}else console.warn("Unable to update <Source> prop: "+r)}}(i,e,n.current):i=function(e,t,n){if(e.style&&e.style._loaded){var r=Object.assign({},n);return delete r.id,delete r.children,e.addSource(t,r),e.getSource(t)}return null}(t,a,e),n.current=e,i&&r.Children.map(e.children,(function(e){return e&&(0,r.cloneElement)(e,{source:a})}))||null};var J=0;const V=function(e){var t=(0,r.useContext)(L).map.getMap(),n=(0,r.useRef)(e),o=(0,r.useState)(0)[1],a=(0,r.useMemo)((function(){return e.id||"jsx-layer-"+J++}),[]);if((0,r.useEffect)((function(){if(t){var e=function(){return o((function(e){return e+1}))};return t.on("styledata",e),e(),function(){t.off("styledata",e),t.style&&t.style._loaded&&t.getLayer(a)&&t.removeLayer(a)}}}),[t]),t&&t.style&&t.getLayer(a))try{!function(e,t,n,r){if(H(n.id===r.id,"layer id changed"),H(n.type===r.type,"layer type changed"),"custom"!==n.type&&"custom"!==r.type){var o=n.layout,a=void 0===o?{}:o,i=n.paint,s=void 0===i?{}:i,u=n.filter,l=n.minzoom,c=n.maxzoom,f=n.beforeId;if(f!==r.beforeId&&e.moveLayer(t,f),a!==r.layout){var d=r.layout||{};for(var m in a)p(a[m],d[m])||e.setLayoutProperty(t,m,a[m]);for(var v in d)a.hasOwnProperty(v)||e.setLayoutProperty(t,v,void 0)}if(s!==r.paint){var g=r.paint||{};for(var h in s)p(s[h],g[h])||e.setPaintProperty(t,h,s[h]);for(var y in g)s.hasOwnProperty(y)||e.setPaintProperty(t,y,void 0)}p(u,r.filter)||e.setFilter(t,u),l===r.minzoom&&c===r.maxzoom||e.setLayerZoomRange(t,l,c)}}(t,a,e,n.current)}catch(i){console.warn(i)}else!function(e,t,n){if(e.style&&e.style._loaded&&(!("source"in n)||e.getSource(n.source))){var r=Object.assign({},n,{id:t});delete r.beforeId,e.addLayer(r,n.beforeId)}}(t,a,e);return n.current=e,null};var q=n.e(8539).then(n.t.bind(n,8539,23)),Q=r.forwardRef((function(e,t){return C(e,t,q)})),X=j,Y=R,K=A,$=F,ee=N,te=B;const ne=Q}}]);