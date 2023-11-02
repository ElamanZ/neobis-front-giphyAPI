const btnSearch = document.getElementById('btn-search');
const inpSearch = document.getElementById('input-search');
const resultsContainer = document.getElementById('giphy');
const URL = "https://api.giphy.com/v1/gifs/search?api_key=";
const APIKEY = "Bv3lnQoO2rIGMAXsYMGIpSvPSyTcCS6t";

document.addEventListener('DOMContentLoaded', async function () {
    inpSearch.value = "cat";
    searchGifs();
    btnSearch.addEventListener('click', searchGifs);
});
async function searchGifs() {
    btnSearch.disabled = true;

    try {
        const response = await fetch(`${URL}${APIKEY}&q=${inpSearch.value.trim()}&limit=24`);
        const data = await response.json();


        resultsContainer.innerHTML = '';

        data.data.forEach(gif => {
            const gifImage = document.createElement('img');
            gifImage.src = gif.images.original.url;
            resultsContainer.appendChild(gifImage);
        });

        inpSearch.value = '';
    } catch (e) {
        console.error(e);
    } finally {
        btnSearch.disabled = false;
    }
}
