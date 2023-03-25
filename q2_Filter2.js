var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);
request.responseType = 'json';

request.onload = function () {

    var responseObj = request.response
    var res = responseObj.filter((item) => {

        return item.population < 200000;
    })


    console.log(res.map((item) => {
        return item.name.common
    }));


};
request.onerror = function () {
    console.log('Error in connecting api');

}
request.send();