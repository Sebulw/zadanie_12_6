var url = 'https://restcountries.eu/rest/v1/name/',
	countriesList = $('#countries');
$('#search').click(searchCountries);
function searchCountries() {
	var countryName = $('#country-name').val();
	if (!countryName.length) {
		countryName = 'Poland';
	}
	$.ajax({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList
	});
}
function showCountriesList(resp) {
	countriesList.empty();
	resp.forEach(function(item) {
		$('<h2>').text(item.name).appendTo(countriesList);
		$('<li class="native-name">').text('Nazwa kraju w języku ojczystym: ' + item.nativeName).appendTo(countriesList);
		$('<li>').text('Stolica: ' + item.capital).appendTo(countriesList);
		$('<li>').text('Region: ' + item.region).appendTo(countriesList);
	});
}