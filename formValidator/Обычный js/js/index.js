function validate() {



    let login = document.getElementById('login');
    let pwd = document.getElementById('pwd');

    event.preventDefault() // запрет не отправку запроса сразу на сервер
    // проверяем логин

    if(!login.values) { // Логин не должен быть пустым
        login.style.border = "2px solid red";
        return false;
    }

    if(/^[a-zA-Z1-9]+$/.test(log) === false) { //В пароле должны быть только латинские буквы
        login.style.border = "2px solid red";
        return false;
    }

    // проверяем пароль


    if(!pwd.values) {
        pwd.style.border = "2px solid red";
        return false;
    }
    if(pwd.length < 6 || pwd.length > 20) { // В пароле должено быть от 6 до 20 символов
        pwd.style.border = "2px solid red";
        return false;
    }
    if (pwd.search(/[a-zA-Z]/) == -1) { // Пароль должен содержать заглавные и прописные буквы
        pwd.style.border = "2px solid red";
        console.log('');
        return false;
    }
    if(/^[a-zA-Z1-9]+$/.test(pwd) === false) { // В пароле должны быть только латинские буквы
        pwd .style.border = "2px solid red";
        return false;
    }

    return true;
}

