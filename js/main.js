/*
* Copyright (C) 2021 TheApiList

* This file is subject to the terms and conditions defined in
* file 'LICENSE.txt', which is part of this source code package.
*/

const search = document.getElementById("search")
const matchList = document.getElementById("match-list")

const searchLib = async searchText => {
    const res = await fetch('https://raw.githubusercontent.com/TheApiList/data/main/data/data.json');
    const libs = await res.json();

    let matches = libs.filter(lib => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return lib.title.match(regex) || lib.description.match(regex)
    });

    if (searchText.length === 0) {
        matches = [];
        matchList.innerHTML = ''
    }

    outputHtml(matches)
}

const outputHtml = matches => {
    if (matches.length > 0) {
        const html = matches.map(match => `
        <div class="card card-body mb-1" style="background: #333333; color: white; box-shadow: 5px 4px 21px 5px rgba(0,0,0,0.4);">
        <h4 class="title">${match.title} <div class="badge-premium-${match.premium}"><i class="fas fa-star premium${match.premium}"></i></div> <span class="badge badge-secondary" style="background: green; color: white;">${match.version}</span></h4>
        <b>${match.author} <div class="verified verified-${match.verified}"><i class="fas fa-check-circle verified__${match.verified}"></i></div></b>
        <small>${match.description}</small>
        <button class="button btn1" onclick="window.open('${match.website}')" style="background: transparent;
        border: none !important;">
        <i class="fas fa-link i1"></i></button>
    <button class="button btn2" onclick="window.open('${match.github}')" style="background: transparent;
    border: none !important;"><i class="fab fa-github i2"></i></button>
        </div>`)
        .join()

        matchList.innerHTML = html
    }
}

search.addEventListener('input', () => searchLib(search.value))

console.log("\x1b[44m%s\x1b[0m", ' LICENSE ', 'TheApiList is under Apache 2 LICENSE')