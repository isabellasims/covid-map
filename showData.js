var map = L.map('map').setView([37.8, -96], 4);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);
//"https://corona.lmao.ninja/v3/covid-19/states"
var geojson = L.geoJson(statesData).addTo(map);

statesData.features[0].properties.casesPerOneMillion = 2000;


function getColor(d) {
    return d > 30000 ? '#800026' :
        d > 25000  ? '#BD0026' :
            d > 20000  ? '#E31A1C' :
                d > 15000  ? '#FC4E2A' :
                    d > 5000   ? '#FD8D3C' :
                        d > 2000   ? '#FEB24C' :
                            d > 1000   ? '#FED976' :
                                '#FFEDA0';

}



// CREATE FUNCTION TO STYLE AND APPLY GET COLOR
function style(feature) {
    console.log(feature.properties.casesPerOneMillion);
    return {
        // apply get color

        fillColor: getColor(feature.properties.casesPerOneMillion),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    }
}




// why does this not work like it does in chlor


L.geoJson(statesData, {style: style}).addTo(map);
