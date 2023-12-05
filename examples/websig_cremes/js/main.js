var map = L.map('map', {
    center: [39.4, -0.4],
    zoom: 8,
    layers: [osm]
});


var source = L.WMS.source("https://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx?", {
    opacity: 0.1,
});
source.getLayer("PARCELA").addTo(map);



var layerControl  = L.control.layers(baseLayers, overLayers, {
    collapsed: false
}).addTo(map);

// Añadir títulos a los controles de capas base
$('.leaflet-control-layers-base').each(function(index) {
    var title = index === 0 ? '<h6><strong>Cartografia base</strong></h6>' : 'Título Capas Base 2'; // Define los títulos para cada conjunto de capas base
    $(this).before('<div class="layer-title">' + title + '</div>');
});

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
        label: '<h6><strong>Superficie forestal</strong><br><br>Opacitat</h6>',
        collapsed: false,

    })
    .addTo(map);
  
  
