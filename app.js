window.onload = function() {
	getCovidStats();
}

function getCovidStats() {
	fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/212') 
	.then(function(resp) { return resp.json() })
	.then(function(data) {
        let population = data.location.country_population;
        let country = data.location.country;
        let cases = data.location.latest.confirmed;
        let death = data.location.latest.deaths;
        let update = data.location.last_updated;

        document.getElementById('population').innerHTML = population.toLocaleString('en');
        document.getElementById('update').innerHTML = update.substr(0,10);
        document.getElementById('cases').innerHTML = cases.toLocaleString('en');
        document.getElementById('deaths').innerHTML = death.toLocaleString('en');
        document.getElementById('country').innerHTML = country.toLocaleString('en');

        console.log(data)



	})
	.catch(function() {
		console.log("error");
	})

}