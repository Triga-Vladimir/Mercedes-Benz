const form = document.querySelector('.form-test-drive');
const formUrl = 'https://jsonplaceholder.typicode.com/posts';

form.addEventListener('submit', (e) => {
    const formData = {};
    let emptyField = false;

    e.preventDefault();

    for (let { name, value } of form.elements) {
        if (name) {
            value = value.trim();
            formData[name] = value;
            if (value === '') emptyField = true;
        }
    }

    if (emptyField) alert('Заполнены не все поля Формы!');
    else {
        fetch(formUrl, {
            method: 'POST',
            body: JSON.stringify(formData),
        }).then((response) => {
            if (response.status === 200 || response.status === 201) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        }).then((data) => {
            alert('Запрос отправлен');
            form.reset();
        }).catch((error) => {
            alert('Произошла Ошибка, статус ошибки: ' + error.message);
        });
    }
});

