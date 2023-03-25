var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);
request.responseType = 'json';

request.onload = function () {

    var responseObj = request.response
    var res = responseObj.reduce((total, country) => total + country.population)





    console.log(`The Total Population is : ${res}`);




};
request.onerror = function () {
    console.log('Error in connecting api');

}
request.send();