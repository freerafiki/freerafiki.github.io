/*!
  * Venessia4Working Javascripts
  * Copyright 2020 
  * Licensed under MIT 
  */
	
	/* Open a window visualizing a help message on how to make the correct search.
		In the window a button to close it should be available, calling closeHelpWindow().
		The actual happening is just making the element with id "helpwindow" visible.
	*/
	function showHelpWindow() {
		document.getElementById("helpwindow").style.display = "block";
		document.getElementById("searchbar").style.display = "none";
	}

	/* Close the window visualizing a help message on how to make the correct search.
		The actual happening is just making the element with id "helpwindow" invisible.
	*/
	function closeHelpWindow() {
		document.getElementById("helpwindow").style.display = "none";
		document.getElementById("searchbar").style.display = "block";
	}


	function changeMap(currentMap) {
		if (currentMap == "osm") {
			mymap.attributionControl._attributions = {};
			var Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
				attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
				subdomains: 'abcd',
				minZoom: 1,
				maxZoom: 16,
				ext: 'jpg'
			}).addTo(mymap);
			whichmap = "water";
		}
		else {
			mymap.attributionControl._attributions = {};
			var OpenStreetMap_DE = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
			maxZoom: 20,
			zoomControl: false,
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(mymap);
			whichmap = "osm";
		}
	}

function locateUser(map) {
	map.locate({setView: true, watch: true}) /* This will return map so you can do chaining */
		.on('locationfound', function(e){
				var marker = L.marker([e.latitude, e.longitude]).bindPopup('Your are here :)');
				var circle = L.circle([e.latitude, e.longitude], e.accuracy/2, {
						weight: 1,
						color: 'blue',
						fillColor: '#cacaca',
						fillOpacity: 0.2
				});
				map.addLayer(marker);
				map.addLayer(circle);
		})
	 .on('locationerror', function(e){
				console.log(e);
				alert("Location access denied.");
		});
	}

// progetto 
function hideAll() {
	var dynamics = document.getElementsByClassName("dyn-content");
	for (i = 0; i < dynamics.length; i++) {
		dynamics[i].classList.add("fadingOut");
		setTimeout(function(){ },2000);
		dynamics[i].style.display	= "none";
		dynamics[i].style.opacity = 0;
	}
	var strati = document.getElementsByClassName("strato");
	//console.log(strati);
	for (j = 0; j < strati.length; j++)	{
		if (strati[j].classList.contains("c60")) {
			strati[j].classList.remove("c60");
			strati[j].classList.add("c50");
		}
	}
}

function show(dynid) {
	hideAll();
	var blockToBeShown = document.getElementById(dynid);
	blockToBeShown.style.display = "block";
	blockToBeShown.style.opacity = 1;
	document.getElementById(dynid.concat("box")).classList.remove("c50");
	document.getElementById(dynid.concat("box")).classList.add("c60");
	if (blockToBeShown.classList.contains("fadingOut")) {
			blockToBeShown.classList.remove("fadingOut");
		}
}

function hideCategories() {
	var categories = document.getElementsByClassName("catcont");
	for (i = 0; i < categories.length; i++) {
		categories[i].style.display	= "none";
	}
}

function changeCategory(catid) {
	hideCategories();
	document.getElementById(catid.concat("t")).style.display = "block";
}