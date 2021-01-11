// ***     *** //

// *** INFO PANNEL *** //
var info = L.control();
info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};
info.update = function (props) {
    this._div.innerHTML = '<h4>US Covid Cases Per Million</h4>' +  (props ?
        '<b>' + props.name + '</b><br />' + props.casesPerOneMillion + ' cases per million since June 1 2019<sup></sup>'
        : 'Hover over a state');
};
info.addTo(map);



// *** LAYER EVENTS *** //
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }

    info.update(layer.feature.properties);
}


function resetHighlight(e) {
    geo.resetStyle(e.target);
    info.update();
}



function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        //click: geo.flyToBounds()
    });
}

// ***  PER MIL CHLORO LEGEND  *** //


var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),

        grades = [30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000],
        labels = [],
        from, to;

    for (var i = 0; i < grades.length; i++) {
        from = grades[i];
        to = grades[i + 1];

        labels.push(
            '<i style="background:' + getColor(from + 1) + '"></i> ' +
            from + (to ? '&ndash;' + to : '+'));
    }

    div.innerHTML = labels.join('<br>');
    return div;
};

legend.addTo(map);
