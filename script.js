'use strict';

const countriesContainer = document.querySelector(".countries");
const countriesDetails = document.querySelector(".country");
const inputField = document.querySelector("input");
// const inputValue = document.getElementById("input_values");
let searchValue;
let country_borders;

const getAllCountryData = function () {
    fetch(`https://restcountries.com/v3.1/all`)
    .then (function (response) {
        console.log(response);
        return response.json();
    })
    .then (function (data) {
        console.log(data);
        renderCountry(data);

        function countrySearch(event) {
            searchValue = event.target.value;
            console.log(searchValue);
            country_borders = data.filter(border => {
                border.name.common.toLowerCase().includes(searchValue);
                renderSpecificCountry(searchValue);
            }); 
        }

        inputField.addEventListener("input", countrySearch);        
    });
}

getAllCountryData();

const renderCountry = function(data) {

    for (let i = 0; i < data.length; i++) {
            const html = `
                <article class="country">
                    <img class="country__img" class="card-img" 
                    width="300" height="200"
                    src="${data[i]["flags"]["png"]}">
                    <div class="country__data">
                        <h3 class="country_name">${data[i]["name"]["common"]}</h3>
                        <p class="country_population">Population: ${data[i]["population"]}</p>
                        <p class="country_region">Region: ${data[i]["region"]}</p>
                        <p class="country_capital">Capital: ${data[i]["capital"]}</p>
                    </div>
                </article>
            `;

        countriesContainer.insertAdjacentHTML('beforeend', html);
    }
}

// Searching for country using the input field

// const getCountryData = function (name) {
//     fetch(`https://restcountries.com/v3.1/name/${name}`)
//     .then (function (response) {
//         console.log(response);
//         return response.json();
//     })
//     .then (function (data) {
//         console.log(data);
//         renderSpecificCountry(data);
            
// 
//     });
// }

// getCountryData('sweden');

const renderSpecificCountry = function(data) {

    const html = `
     <article class="country">
         <img class="country__img" class="card-img" 
         width="300" height="200"
        src="${["flags"]["png"]}">
         <div class="country__data">
             <h3 class="country_name">${["name"]["common"]}</h3>
             <p class="country_population">Population: ${["population"]}</p>
             <p class="country_region">Region: ${["region"]}</p>
             <p class="country_capital">Capital: ${["capital"]}</p>
         </div>
     </article>
     `;
     countriesContainer.insertAdjacentHTML('beforeend', html);
}