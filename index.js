function getJSON(api) {
	const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
	const request = new XMLHttpRequest();

	request.open('GET', api, false);
	request.send();

	let response = JSON.parse(request.responseText);
	
	return response;
}

//Início do programa:

function main() {
	console.log('Programa iniciado...');

	const btcTicker = "https://api.bitpreco.com/btc-brl/ticker";
	const usdcTicker = "https://api.bitpreco.com/usdc-brl/ticker";

	let btc = getJSON(btcTicker);
	let usdc = getJSON(usdcTicker);

	console.log(btc);
	console.log(usdc);

}

main();
