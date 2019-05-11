//lesson6/dom2.js массив articles.
//Написать функцию генегации таблицы (для тестирования функции использовать массив articles)

let articles = [
    {
        id: 1,
        title: "JS",
        description: "Описание",
        author: "Mike"
    },
    {
        id: 2,
        title: "PHP",
        description: "Описание",
        author: "Mike"
    },
    {
        id: 3,
        title: "HTML",
        description: "Описание",
        author: "Alex"
    },
    {
        id: 4,
        title: "Базы Данных",
        description: "Описание",
        author: "Peter"
    }
];

let tableGenerator = {
    init: function (arr_data) {
        let data = arr_data; // видно только внутри данного метода
        this.data = arr_data; // свойство объекта - доступно
        // в других методах объекта
        this.table = document.createElement('table');
        this.table.setAttribute('border', '1');
    },
    // названия столбцов
    genCaption: function () {
        let captionRow = this.table.insertRow();
        for (let key in this.data[0]){
            let cell = captionRow.insertCell();
            cell.innerText = key.toUpperCase();
            cell.classList.add('caption-cell');
        }
    },

    genContent: function () {
        for (let i = 0; i < this.data.length; i++){
            let row = this.table.insertRow();
            for (let key in this.data[i]) {
                let cell = row.insertCell();
                cell.innerText = this.data[i][key];
                cell.classList.add('content-cell');
            }
        }
    },
    getTable: function (arr_data) {
        this.init(arr_data);
        this.genCaption();
        this.genContent();
        return this.table;
    }
};

let tableContainer = document.getElementById('for_table');
tableContainer.appendChild(tableGenerator.getTable(articles));



////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {

    const getSort = ({ target }) => {
        const order = (target.dataset.order = -(target.dataset.order || -1));
        const index = [...target.parentNode.cells].indexOf(target);
        const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
        const comparator = (index, order) => (a, b) => order * collator.compare(
            a.children[index].innerHTML,
            b.children[index].innerHTML
        );

        for(const tBody of target.closest('table').tBodies)
            tBody.append(...[...tBody.rows].sort(comparator(index, order)));

        for(const cell of target.parentNode.cells)
            cell.classList.toggle('sorted', cell === target);
    };

    document.querySelectorAll('.table_sort thead').forEach(tableTH => tableTH.addEventListener('click', () => getSort(event)));

});
