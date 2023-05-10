var map = L.map('map', {
    center: [39.4, -0.4],
    zoom: 8,
    layers: [catastro]
});



// Estilo GeoJSON

var muniStyle = {
    fillColor: '#0074cf',
    weight: 0.8,
    opacity: 0.6,
    color: '#0074cf',
    dashArray: '1',
    fillOpacity: 0
}

// Carga el archivo GeoJSON

var muniLayer = L.geoJSON(null, {
        style: muniStyle,
        onEachFeature
    }
).addTo(map);


$.getJSON("data/municipis.geojson",function(data){
    muniLayer.addData(data);
});
        

function zoomToFeature(e) {
	map.fitBounds(e.target.getBounds());
}

 
function onEachFeature(feature, layer) {
    var name = feature.properties.NAMEUNIT;
    var tooltip = L.tooltip({sticky: false}).setContent(name);
    
    layer.bindTooltip(tooltip);
    
}



// Obtener información de catastro


var source = L.WMS.source("https://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx?", {
    opacity: 0.1,
});
source.getLayer("PARCELA").addTo(map);


var layerControl = L.control.layers(null, overLayers, {collapsed:true}).addTo(map);


map.on('click', function (e) {
    var url = source.getFeatureInfoUrl(e.latlng, {
        'info_format': 'text/html',
        'propertyName': 'refcat',
        'query_layers': 'PARCELA',
        'format_options': 'callback:getJson'
    });
    if (url) {
        fetch(url)
            .then(function (response) {
                return response.text();
            })
            .then(function (html) {
                document.getElementById('info').innerHTML = html;
            });
    }
});

// SIDEBAR
        // create the sidebar instance and add it to the map
        var sidebar = L.control.sidebar({ container: 'sidebar' })
            .addTo(map)
            .open('home');

    
// Inicializar componente de Bootstrap
        var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
            keyboard: false
        });              
// Mostrar el modal
        myModal.show();
              

// LOGO

var logoControl = L.control({position: 'bottomleft'});
logoControl.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'logo-control');
    div.innerHTML = '<img src="assets/liberam_blue_gradient.png" width="100px">';

// Asignar la URL al hacer clic en el logotipo
    div.addEventListener('click', function() {
        window.location.href = 'https://liberam.es'; // URL a la que se redirigirá
    });
 
    return div;
};


logoControl.addTo(map);


//OpacityControl
L.control
    .opacity(overLayers, {
        label: '<h6><strong>Opacidad</strong></h6>',
        collapsed: false,

    })
    .addTo(map);
  
  
  
  
  
  