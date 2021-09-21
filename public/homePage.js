const LogoutButtonObject = new LogoutButton();
// console.log(LogoutButtonObject);

// Реализация выхода из аккаунта
LogoutButtonObject.action = function() {
    
    ApiConnector.logout(response => {
		
		if (response.success) {
			location.reload();
			console.log('Вы успешно вышли');
		} else { 
            alert(response.error);
		}

	})	
}

// Получение текущего пользователя и его данных
ApiConnector.current(response => {

	// console.log(response);
	if (response.success) {
		ProfileWidget.showProfile(response.data);
	} else { 
		alert(response.error);
	}

})

// Реализация получения курса валют
const RatesBoardObject = new RatesBoard();
// console.log(RatesBoardObject);

function getStocksEveryMin() {
	ApiConnector.getStocks(response => {

		console.log(response);
		if (response.success) {
			RatesBoardObject.clearTable();
			RatesBoardObject.fillTable(response.data);
		} else { 
			alert(response.error);
		}

	})
}
getStocksEveryMin();
setInterval(getStocksEveryMin, 60000);
