document.getElementById('addInputButton').addEventListener('click', function() {

    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = 'additional_info';
    newInput.placeholder = 'Напишіть який саме мерч ви хочете';

    const form = document.getElementById('mclarenForm');
    const addButton = document.getElementById('addInputButton');
    form.insertBefore(newInput, addButton.nextSibling);
    form.insertBefore(document.createElement('br'), addButton.nextSibling);
});

document.getElementById('mclarenForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const formData = new FormData(this);
    let formObj = {};

    formData.forEach((value, key) => {
        formObj[key] = value;
    });

    console.log(JSON.stringify(formObj, null, 2));

    alert('Дані збережено успішно.');
});