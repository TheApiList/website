/*
* Copyright (C) 2021 TheApiList

* This file is subject to the terms and conditions defined in
* file 'LICENSE.txt', which is part of this source code package.
*/

const favoriteEl = document.querySelector('.favoriteAPI')
const data = sessionStorage.getItem('favorite')

favoriteEl.innerHTML = data