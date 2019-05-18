function FormValidator(form) {
    this._form = form;
    this._form.addEventListener('submit', this.chechData.bind(this));
    this._elem = document.querySelectorAll(".validate");


}

FormValidator.prototype.addRules = function(rules){ //к начальной функции добавляем методы
    this._rules = rules.rules;
    this._message = rules.messages;
};

FormValidator.prototype.checkData = function(event) {

    event.preventDefault(); // запрет на отправку запроса по умолчанию на сервер

    for (let i = 0; i < this._elem.length; i++){    // проверяем заполнина ли фарма в целом
        if (!this._rules[this._elem[i].name].test(this._elem[i].value)) {
            // вывести сообщение об ошибке
            this._elem[i].nextSibling.innerText = this._messages[this._elem[i].name];
           // event.target.nextSibling
        }
        return false;
    }
    return true;

};

//let form = document.forms.someForm;

let formValidator = new FormValidator(form); // правила проверки заполнености полей

formValidator.addRules({
    rules: {
        login: /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,15})$/,
        pwd: /^[a-z0-9]{6,}$/
    },
    messages: {
        login: "Логин должен состоять из латинских букв ",
        pwd: "Пароль должен состоять из латинских букв верхнего и нижнего регистра и цифр"
    }
});
formValidator.validate();