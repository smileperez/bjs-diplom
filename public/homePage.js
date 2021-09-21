const HomePageObject = new LogoutButton();

console.log(HomePageObject);

HomePageObject.action = function() {
    
    ApiConnector.logout(response => {
		
		if (response.success) {
			location.reload();
			console.log('Вы успешно вышли');
		} else { 
            alert(response.error);
		}
	})	
    
}