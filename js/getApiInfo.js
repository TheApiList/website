/*
* Copyright (C) 2021 TheApiList

* This file is subject to the terms and conditions defined in
* file 'LICENSE.txt', which is part of this source code package.
*/

document.title = `${sessionStorage.getItem("selectedApiPageTitle")}`

document.querySelector('.developer').src=`${sessionStorage.getItem("selectedApiAuthorAvatar")}`
document.querySelector('.authorName').innerHTML=`${sessionStorage.getItem("selectedApiAuthor")}`
document.querySelector('.apiNameBreadcrumb').innerHTML=`${sessionStorage.getItem("selectedApiTitle")}`
document.querySelector('.apiTitleMenu').innerHTML=`${sessionStorage.getItem("selectedApiTitle")}`
document.querySelector('.apiDescriptionMenu').innerHTML=`${sessionStorage.getItem("selectedApiDescription")}`
document.querySelector('.apiVersionMenu').innerHTML=`${sessionStorage.getItem("selectedApiVersion")}`
document.querySelector('.isPremium').innerHTML=`${sessionStorage.getItem("selectedApiIsPremium")}`
document.querySelector('.authorBadgeText').innerHTML=`${sessionStorage.getItem("selectedApiAuthor")}`
document.querySelector('.websiteBadgeLink').innerHTML=`${sessionStorage.getItem("selectedApiWebsite")}`
document.querySelector('.verifiedBadgeText').innerHTML=`${sessionStorage.getItem("selectedApiIsVerified")}`