const favoriteEl = document.querySelector('.favoriteAPI')
const data = sessionStorage.getItem('favorite')

favoriteEl.innerHTML = data