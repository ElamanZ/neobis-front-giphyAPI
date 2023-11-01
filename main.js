
const btnSearch = document.getElementById('header__search-btn')
const inpSearch = document.getElementById('input-search')
const URL = "https://api.giphy.com/v1/gifs/search?api_key="
const APIKEY = "Bv3lnQoO2rIGMAXsYMGIpSvPSyTcCS6t"


document.addEventListener('DOMContentLoaded', init)
function init() {
    btnSearch.addEventListener('click', e => {
        e.preventDefault()
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`
        let str = document.getElementById('input-search').value.trim()
        url = url.concat(str)
        console.log(url)
        fetch(url)
            .then(response => response.json())
            .then(content => {
                console.log(content.data)
                console.log('META', content.meta)
            })
            .catch(err => {
                console.error(err)
            })
    })
}
init()
