var map = L.map('map').setView([39.93519629723, -3.8321898052376], 5);

        var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            minZoom: 5,
            maxZoom: 7,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);


        // Estilo GeoJSON

        var ccaaStyle = {
            fillColor: '#000',
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.3
        }


    	/* global statesData */
        // Carga el archivo GeoJSON
       var ccaaLayer = L.geoJSON(null, {
        style: ccaaStyle,
        onEachFeature
    }
    ).addTo(map);
        
        $.getJSON("geojson/ccaa_84.geojson",function(data){
            ccaaLayer.addData(data);
            });
        

	function zoomToFeature(e) {
		map.fitBounds(e.target.getBounds());
	}

 
function onEachFeature(feature, layer) {
    var name = feature.properties.ETIQUETA;
    var tooltip = L.tooltip({sticky: true}).setContent(name);
    
    layer.bindTooltip(tooltip);
    /*layer.on('click', function() {
        var container = window.parent.document.getElementById('info');
        container.innerHTML = name;
    });
*/
    layer.on('click', function(e) {
        var lugarInput = window.parent.document.getElementById('lugar');
        // Actualizar los valores de los campos
        lugarInput.value = name;
    });


    layer.on('mouseover', function(e) {
        tooltip.options.sticky = false; // desactivar sticky
        layer.openTooltip(e.latlng);
        layer.setStyle({
                weight: 3,
                color: '#666',
                dashArray: '',
                fillOpacity: 0.7
            });
    });
    layer.on('mouseout', function() {
        tooltip.options.sticky = true; // activar sticky
        layer.closeTooltip();
                    // Eliminar resaltado
                    layer.setStyle({
                weight: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 0.2
            });
    });
}

