var GMap = function(canvas, options) {
	// debugger;
	var self = this;
		this.map = null;
		this.mapCanvas = document.getElementById(canvas);
		this.mapOptions = options;
		createMap = function() {
			// debugger;
			self.map = new google.maps.Map(self.mapCanvas, self.mapOptions);
		};

	createMap();	
};

GMap.prototype.addMarker = function(objLocation, options, infoW) {
		var self = this;

		this.objLocation = objLocation;
		this.marker;
		this.uniqueAttr;
		this.markerOptions; 

	// for(var i = 0; i < this.objLocation.length; i++) {

		this.uniqueAttr = {
			position: new google.maps.LatLng(this.objLocation.lat, this.objLocation.lng),
			title: this.objLocation.title,
			id_hotel: this.objLocation.id_hotel,
			map: this.getMap()		     
		};

		this.markerOptions = this.mergeObj(this.uniqueAttr, options);

		this.marker = new google.maps.Marker(this.markerOptions);
		

		if(infoW) {
			var map = this.getMap();
			google.maps.event.addListener(this.marker, 'click', function(e) {			
			    infoW.open(map, this);
			    // console.log(this.id_hotel);
			});
		}
	// }
};

GMap.prototype.addCustomInfoWindow = function(options) {
	var self = this;
	this.winOpt = options;
	this.infoW;

	// add map to obj
	this.winOpt['map'] = this.getMap();

	// debugger;

	this.infoW = new InfoBubble(this.winOpt);

	return this.infoW;
};

GMap.prototype.getMap = function() {
	return this.map;
};

GMap.prototype.mergeObj = function(obj1, obj2) {
	var obj3 = {};

	for(var attr in obj1) { obj3[attr] = obj1[attr]; }
	for(var attr in obj2) { obj3[attr] = obj2[attr]; }	

	return obj3;
};
