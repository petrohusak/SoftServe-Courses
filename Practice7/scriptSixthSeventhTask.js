// Task 6
window.addEventListener('resize', sixthTaskOutput);

function sixthTaskOutput() {
    document.getElementById('sixthTaskOutputDiv').innerHTML = `Width: ${document.documentElement.clientWidth}, Height: ${document.documentElement.clientHeight}`;
}


// Task 7
let countryList = document.getElementById('country')
let citiesList = document.getElementById('cities');

countryList.addEventListener('change', changeCities);
citiesList.addEventListener('change', changePOutput);

function changeCities() {
    if(countryList.options[countryList.options.selectedIndex].value == 'ger'){
        while(citiesList.firstChild) {
            citiesList.removeChild(citiesList.firstChild);
        }

        citiesList.add(new Option('Berlin', 'ber'));
        citiesList.add(new Option('Munchen', 'mun'));
        citiesList.add(new Option('Gamburg', 'gam'));
    } else if(countryList.options[countryList.options.selectedIndex].value == 'usa'){
        while(citiesList.firstChild) {
            citiesList.removeChild(citiesList.firstChild);
        }

        citiesList.add(new Option('New York', 'NY'));
        citiesList.add(new Option('Los Angeles', 'LA'));
        citiesList.add(new Option('Chicago', 'chicago'));
    } else if(countryList.options[countryList.options.selectedIndex].value == 'ukr'){
        while(citiesList.firstChild) {
            citiesList.removeChild(citiesList.firstChild);
        }

        citiesList.add(new Option('Lviv', 'lviv'));
        citiesList.add(new Option('Kyiv', 'kyiv'));
        citiesList.add(new Option('Odesa', 'odesa'));
    }
}

function changePOutput() {
    document.getElementById('sevenTaskOutput').innerHTML = `${countryList.options[countryList.options.selectedIndex].innerHTML}, 
        ${citiesList.options[citiesList.options.selectedIndex].innerHTML}`;
}