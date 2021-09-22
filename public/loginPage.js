const UserFormObject = new UserForm();

UserFormObject.loginFormCallback = function(data) {
    
    ApiConnector.login(data, response => {
		
		if (response.success) {
			location.reload();
			console.log('Вы успешно вошли прошла успешно');
		} else { 
			UserFormObject.setLoginErrorMessage(`Произошла ошибка при логине: ${response.error}`);
		}
	})	

}

UserFormObject.registerFormCallback = function(data) {
	
	ApiConnector.register(data, response => {
		
		if (response.success) {
			location.reload();
			console.log('Регистрация прошла успешно');
		} else { 
            UserFormObject.setLoginErrorMessage(`Произошла ошибка при регистрации: ${response.error}`);
		}
	})	
}