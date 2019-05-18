// Проверка пароля
function CheckPassword(password){
    let pwd = document.getElementById('pwd').value;

    if(pwd.length < 6 || pwd.length > 20) {
        console.log('В пароле должено быть от 6 до 20 символов');
        return false;
    }
    if (pwd.search(/[a-zA-Z]/) == -1) {
        console.log('Пароль должен содержать заглавные и прописные буквы');
        return false;
    }
    if(/^[a-zA-Z1-9]+$/.test(pwd) === false) {
        console.log('В пароле должны быть только латинские буквы');

        return false;
    }

    return true;
}

// Проверка ЛОГИНА

function CheckLogin(login) {
    let log = document.getElementsByName('login').value;

    if(/^[a-zA-Z1-9]+$/.test(log) === false) {
        console.log('В пароле должны быть только латинские буквы');
        return false;
    }

    return true;
}


