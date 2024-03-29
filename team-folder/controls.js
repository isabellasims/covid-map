// ***  CHLOR STYLE  *** //

// GET CHLOR COLORS BASED ON CASES PER MIL NUM
function getColor(d) {
    return d > 100000 ? '#800026' :
        d > 90000  ? '#BD0026' :
            d > 80000  ? '#E31A1C' :
                d > 70000  ? '#FC4E2A' :
                    d > 60000   ? '#FD8D3C' :
                        d > 50000   ? '#FEB24C' :
                            d > 40000   ? '#FED976' :
                                d > 30000   ? '#FFEDA0' :
                                    d > 20000   ? '#faffc5' :
                                        '#fff5f0';
}



// CREATE FUNCTION TO STYLE AND APPLY GET COLOR
function style(feature) {
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

// CREATE FUNCTION TO STYLE AND APPLY GET COLOR
function style2(feature) {
    return {
        // apply get color
        fillColor: getColor(feature.properties.testsPerOneMillion),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    }
}


// *** INFO PANNEL *** //
// var milInfo = L.control();
// milInfo.onAdd = function (map) {
//     this._div = L.DomUtil.create('div', 'info');
//     this.update();
//     return this._div;
// };
// milInfo.update = function (props) {
//     this._div.innerHTML = '<h4>US Covid Cases Per Million since June 1, 2019</h4>' +  (props ?
//         '<b>' + props.name + '</b><br />' + props.casesPerOneMillion + ' cases per million since June 1 2019<sup></sup>'
//         : 'Hover over a state');
// };
//milInfo.addTo(map);

var testsInfo = L.control();
testsInfo.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};
testsInfo.update = function (props) {
    this._div.innerHTML = '<h4>US Covid Cases Per Million since June 1, 2019</h4>' +  (props ?
        '<b>' + props.name + '</b><br />' + props.testsPerOneMillion + ' cases per million since June 1 2019<sup></sup>'
        : 'Hover over a state');
};


//
// // *** LAYER EVENTS *** //
// function highlightFeature(e) {
//     var layer = e.target;
//
//     layer.setStyle({
//         weight: 5,
//         color: '#666',
//         dashArray: '',
//         fillOpacity: 0.7
//     });
//
//     if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
//         layer.bringToFront();
//     }
//
//     milInfo.update(layer.feature.properties);
// }
//
//
// function resetHighlight(e) {
//     geo.resetStyle(e.target);
//     // milInfo.update();
// }
//
//
//
// function onEachFeature(feature, layer) {
//     layer.on({
//         mouseover: highlightFeature,
//         mouseout: resetHighlight,
//         //click: geo.flyToBounds()
//     });
// }
//
// // ***  PER MIL CHLORO LEGEND  *** //
//
//
// var milLegend = L.control({position: 'bottomright'});
//
// milLegend.onAdd = function (map) {
//
//     var div = L.DomUtil.create('div', 'info legend'),
//
//         grades = [30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000],
//         labels = [],
//         from, to;
//
//     for (var i = 0; i < grades.length; i++) {
//         from = grades[i];
//         to = grades[i + 1];
//
//         labels.push(
//             '<i style="background:' + getColor(from + 1) + '"></i> ' +
//             from + (to ? '&ndash;' + to : '+'));
//     }
//
//     div.innerHTML = labels.join('<br>');
//     return div;
// };

//milLegend.addTo(map); //removed when implimented legend toggle
