let covid;
let bounds = statesData;
let cases_per_mil;
let flag = 0;
let check = false;

// GET THE COVID DATA
function setup(){
    loadJSON("https://disease.sh/v3/covid-19/states",gotData);
    flag +=1;


}

//
function gotData(data) {

    covid = data;

    statesData.features[1].properties.casesPerOneMillion = covid[1].casesPerOneMillion;
    // add covid cases to states data
    for (let i = 0; i < statesData.features.length; i++) {
        for (let j = 0; j < statesData.features.length; j++) {
            if (statesData.features[i].properties.name === covid[j].state) {
                statesData.features[i].properties.casesPerOneMillion = covid[j].casesPerOneMillion;
            }
        }
    }
}
