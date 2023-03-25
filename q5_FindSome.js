



const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.responseType = 'json'
request.onload = () => {
    if (request.status === 200) {
        // Parse response into an array of country objects
        const countries = request.response

        // Find country that uses US Dollars as currency
        const res = countries.find(country => country.currencies.some(currency => currency.code === "USD"));

        if (res) {
            console.log(`${res.name} uses US Dollars as currency.`);
        } else {
            console.log("No country found that uses US Dollars as currency.");
        }
    } else {
        console.error("Error fetching data from API");
    }

};
request.onerror = function () {
    console.log('Error in connecting api');

}

request.send();
