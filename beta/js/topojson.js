topojson=function(){function n(n,t){
    function e(t){
	var e=n.arcs[t],r=e[0],u=[0,0];
	return e.forEach(function(n){
	    u[0]+=n[0],u[1]+=n[1]}
	),[r,u]}
    var r={},u={},i={};

  t.forEach(function(n){
      var t=e(n);(r[t[0]]||(r[t[0]]=[])).push(n),(r[t[1]]||(r[t[1]]=[])).push(~n)
  }),t.forEach(function(n){
      var t,r,a=e(n),o=a[0],c=a[1];
      if(t=i[o])if(delete i[t.end],t.push(n),t.end=c,r=u[c]){
	  delete u[r.start];
	  var l=r===t?t:t.concat(r);
	  u[l.start=t.start]=i[l.end=r.end]=l}
      else if(r=i[c]){delete u[r.start],delete i[r.end];
		      var l=t.concat(r.map(function(n){
			  return~n}).reverse());
		      u[l.start=t.start]=i[l.end=r.start]=l} 
      else u[t.start]=i[t.end]=t;
      else if(t=u[c])if(delete u[t.start],t.unshift(n),t.start=o,r=i[o]){
	  delete i[r.end];var f=r===t?t:r.concat(t);u[f.start=r.start]=i[f.end=t.end]=f}
      else if(r=u[o]){delete u[r.start],delete i[r.end];
		     var f=r.map(function(n){
			 return~n}).reverse().concat(t);
		      u[f.start=r.end]=i[f.end=t.end]=f}
      else u[t.start]=i[t.end]=t;
      else if(t=u[o])if(delete u[t.start],t.unshift(~n),t.start=c,r=i[c]){delete i[r.end];
									  var f=r===t?t:r.concat(t);u[f.start=r.start]=i[f.end=t.end]=f}
      else if(r=u[c]){delete u[r.start],delete i[r.end];
		      var f=r.map(function(n){return~n}).reverse().concat(t);u[f.start=r.end]=i[f.end=t.end]=f}
      else u[t.start]=i[t.end]=t;
      else if(t=i[c])if(delete i[t.end],t.push(~n),t.end=o,r=i[o]){
	  delete u[r.start];var l=r===t?t:t.concat(r);
	  u[l.start=t.start]=i[l.end=r.end]=l}
      else if(r=u[o]){delete u[r.start],delete i[r.end];
		      var l=t.concat(r.map(function(n){return~n}).reverse());u[l.start=t.start]=i[l.end=r.start]=l}
      else u[t.start]=i[t.end]=t;
      else t=[n],u[t.start=o]=i[t.end=c]=t});
    var a=[];
    for(var o in i)a.push(i[o]);
    return a}function t(t,r,u){function i(n){0>n&&(n=~n),(s[n]||(s[n]=[])).push(f)}function a(n){n.forEach(i)}function o(n){n.forEach(a)}function c(n){"GeometryCollection"===n.type?n.geometries.forEach(c):n.type in h&&(f=n,h[n.type](n.arcs))}var l=[];if(arguments.length>1){var f,s=[],h={LineString:a,MultiLineString:o,Polygon:o,MultiPolygon:function(n){n.forEach(o)}};c(r),s.forEach(3>arguments.length?function(n,t){l.push([t])}:function(n,t){u(n[0],n[n.length-1])&&l.push([t])})}else for(var g=0,p=t.arcs.length;p>g;++g)l.push([g]);return e(t,{type:"MultiLineString",arcs:n(t,l)})}function e(n,t){function e(n,t){t.length&&t.pop();for(var e,u=p[0>n?~n:n],i=0,a=u.length,o=0,c=0;a>i;++i)t.push([(o+=(e=u[i])[0])*f+h,(c+=e[1])*s+g]);0>n&&r(t,a)}function u(n){return[n[0]*f+h,n[1]*s+g]}function i(n){for(var t=[],r=0,u=n.length;u>r;++r)e(n[r],t);return 2>t.length&&t.push(t[0]),t}function a(n){for(var t=i(n);4>t.length;)t.push(t[0]);return t}function o(n){return n.map(a)}function c(n){var t=n.type,e="GeometryCollection"===t?{type:t,geometries:n.geometries.map(c)}:t in d?{type:t,coordinates:d[t](n)}:{type:null};return"id"in n&&(e.id=n.id),"properties"in n&&(e.properties=n.properties),e}var l=n.transform,f=l.scale[0],s=l.scale[1],h=l.translate[0],g=l.translate[1],p=n.arcs,d={Point:function(n){return u(n.coordinates)},MultiPoint:function(n){return n.coordinates.map(u)},LineString:function(n){return i(n.arcs)},MultiLineString:function(n){return n.arcs.map(i)},Polygon:function(n){return o(n.arcs)},MultiPolygon:function(n){return n.arcs.map(o)}};return c(t)}function r(n,t){for(var e,r=n.length,u=r-t;--r>u;)e=n[u],n[u++]=n[r],n[r]=e}function u(n,t){for(var e=0,r=n.length;r>e;){var u=e+r>>>1;t>n[u]?e=u+1:r=u}return e}function i(n){function t(n,t){n.forEach(function(n){0>n&&(n=~n);var e=i[n]||(i[n]=[]);e[t]||(e.forEach(function(n){var e,r;r=u(e=a[t],n),e[r]!==n&&e.splice(r,0,n),r=u(e=a[n],t),e[r]!==t&&e.splice(r,0,t)}),e[t]=t)})}function e(n,e){n.forEach(function(n){t(n,e)})}function r(n,t){"GeometryCollection"===n.type?n.geometries.forEach(function(n){r(n,t)}):n.type in o&&o[n.type](n.arcs,t)}var i=[],a=n.map(function(){return[]}),o={LineString:t,MultiLineString:e,Polygon:e,MultiPolygon:function(n,t){n.forEach(function(n){e(n,t)})}};return n.forEach(r),a}return{version:"0.0.39",mesh:t,object:e,neighbors:i}}();
