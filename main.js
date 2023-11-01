
const btnSearch = document.getElementById('btn-search')
const inpSearch = document.getElementById('input-search')
const resultsContainer = document.getElementById('giphy')
const URL = "https://api.giphy.com/v1/gifs/search?api_key="
const APIKEY = "U531ZZAk6PTU6Z15Hy1H3KWdGijmUYcL"


document.addEventListener('DOMContentLoaded', function () {
    btnSearch.addEventListener('click', async () => {
        try {
            const response = await fetch(`${URL}${APIKEY}&q=${inpSearch.value.trim()}&limit=25`);
            const data = await response.json();
            console.log('data', data);

            // Очистите предыдущие результаты
            resultsContainer.innerHTML = '';

            // Обработайте данные и отобразите их на странице

        } catch (e) {
            console.error(e);
        }
    });


});
