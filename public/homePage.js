const LogoutButtonObject = new LogoutButton();
// console.log(LogoutButtonObject);

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

	ApiConnector.current(response => {
		// console.log(response);
		if (response.success) {
			ProfileWidget.showProfile(response.data);
		} else { 
			alert(response.error);
		}

	})