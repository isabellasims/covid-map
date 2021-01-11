// *** GET THE COVID DATA *** // 
function setup(){
    loadJSON("https://disease.sh/v3/covid-19/states",gotData);
}

// *** FORMAT THE DATA *** // 
// adds casesPerMillion from queried data to states data 
function gotData(data){
    covid = data;
    statesData.features[1].properties.casesPerOneMillion = covid[1].casesPerOneMillion;
    // add covid cases to states data
    for (let i = 0; i < statesData.features.length; i++) {
        for (let j = 0; j < statesData.features.length; j++) {
            if (statesData.features[i].properties.name === covid[j].state) {
                statesData.features[i].properties.casesPerOneMillion = covid[j].casesPerOneMillion;
                break;
            }
        }
    }

    geo.addData(statesData); // another part of the solution - addData function

};
