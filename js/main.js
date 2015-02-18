(function(W) {

	var mapa = new GMap("map_canvas", 
	{
		center: new google.maps.LatLng(-30.114102, -51.210455),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        panControl: false,
		zoomControl: false,
		mapTypeControl: false,
		scaleControl: false,
		streetViewControl: false,
		overviewMapControl: false
	});

	// debugger;

	// var mapa2 = new GMap(canvas2, 
	// {
	// 	center: new google.maps.LatLng(-30.069226, -51.021305),
 //        zoom: 8,
 //        mapTypeId: google.maps.MapTypeId.ROADMAP,
 //        panControl: false,
	// 	zoomControl: false,
	// 	mapTypeControl: false,
	// 	scaleControl: false,
	// 	streetViewControl: false,
	// 	overviewMapControl: false
	// });

	var locations = [
		{title: 'local 1', lat: -30.114102, lng: -51.210455, id_hotel: '#hotel1'},
		{title: 'local 2', lat: -30.124101, lng: -51.310455, id_hotel: '#hotel2'},
		{title: 'local 3', lat: -30.134103, lng: -51.010455, id_hotel: '#hotel3'},
		{title: 'local 4', lat: -30.144104, lng: -51.410455, id_hotel: '#hotel4'},
		{title: 'local 5', lat: -30.154105, lng: -51.510455, id_hotel: '#hotel5'},

	],
	options = {	    
	    icon: 'img/marker.png'
  	};

  	var infoContent = [
  		{title: 'Hotel 1'},
  		{title: 'Hotel 2'},
  		{title: 'Hotel 3'},
  		{title: 'Hotel 4'},
  		{title: 'Hotel 5'}
  	];

  	for(var i = 0; i < locations.length; i++) {
  		var contentString = '<h2 id="firstHeading" class="firstHeading">'+ infoContent[i].title +'</h2>';
		var infoWindOpt = {
			hideCloseButton: false,
			arrowPosition: 50,
			maxWidth: 420,
			borderRadius: 3,
			padding: 0,
		    content: contentString
		};    

		var infoW = mapa.addCustomInfoWindow(infoWindOpt);
		mapa.addMarker(locations[i], options, infoW);
	}
})(window);
