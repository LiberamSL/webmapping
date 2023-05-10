var map = L.map('map').setView([41.621914, -0.954415200], 17);

        var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            minZoom: 5,
            maxZoom: 21,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);


       var arquetasLayer = L.geoJSON(null).addTo(map);


        $.getJSON("load_arquetas.php",function(data){
            arquetasLayer.addData(data);
        });
                
                
