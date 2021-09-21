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


// Операции с деньгами
const MoneyManagerObject = new MoneyManager();
// console.log(MoneyManagerObject);

MoneyManagerObject.addMoneyCallback = function(data) {
	
	ApiConnector.addMoney(data, response => {
		if (response.success) {
			ProfileWidget.showProfile(response.data);
			console.log('Баланс успешно пополнен');
		} else { 
            alert(response.error);
		}
	})

}

MoneyManagerObject.conversionMoneyCallback = function(data) {

	ApiConnector.convertMoney(data, response => {
		if (response.success) {
			ProfileWidget.showProfile(response.data);
			console.log('Валюта успешно конвертирована успешно');
		} else { 
            alert(response.error);
		}
	})

}

MoneyManagerObject.sendMoneyCallback = function(data) {

	ApiConnector.transferMoney(data, response => {
		if (response.success) {
			ProfileWidget.showProfile(response.data);
			console.log('Валюта успешно переведна');
		} else { 
            alert(response.error);
		}
	})

}

const FavoritesWidgetObject = new FavoritesWidget();
// console.log(FavoritesWidgetObject); 

ApiConnector.getFavorites(response => {

	// console.log(response);
	if (response.success) {
		FavoritesWidgetObject.clearTable();
		FavoritesWidgetObject.fillTable(response.data);
		MoneyManagerObject.updateUsersList(response.data);
	} else { 
		alert(response.error);
	}

})

FavoritesWidgetObject.addUserCallback = function(data) {

	ApiConnector.addUserToFavorites(data, response => {
		if (response.success) {
			FavoritesWidgetObject.clearTable();
			FavoritesWidgetObject.fillTable(response.data);
			MoneyManagerObject.updateUsersList(response.data);
		} else { 
			alert(response.error);
		}
	})

}

FavoritesWidgetObject.removeUserCallback = function(data) {

	ApiConnector.removeUserFromFavorites(data, response => {
		if (response.success) {
			FavoritesWidgetObject.clearTable();
			FavoritesWidgetObject.fillTable(response.data);
			MoneyManagerObject.updateUsersList(response.data);
		} else { 
			alert(response.error);
		}
	})

}