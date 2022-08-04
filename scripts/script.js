let features = document.querySelector('.item-features')
let featuresDrop = document.querySelector('.dropdown-features')
let featuresArrow = document.querySelector('#arrow-1')

let company = document.querySelector('.item-company')
let companyDrop = document.querySelector('.dropdown-company')
let companyArrow = document.querySelector('.arrow-2')

let menuMobile = document.querySelector('.menu-mobile')
let closeMenu = document.querySelector('.close-menu-button')
let divMenu = document.querySelector('.div-menu-mobile')
let bgMask = document.querySelector('.menu-bg-mask')

let mobileFeat = document.querySelector('.item-features-mobile')
let mobileFeatDrop = document.querySelector('.mobile-features-dropdown')
let featDropControl = false

let mobileComp = document.querySelector('.item-company-mobile')
let mobileCompDrop = document.querySelector('.mobile-company-dropdown')
let compDropControl = false

features.addEventListener('mouseover', function() {

    let rectFeatures = features.getBoundingClientRect()
    let x = rectFeatures.left
    let y = rectFeatures.top

    y = y + 65
    x = x - features.clientWidth

    featuresDrop.style.display = 'flex'
    featuresDrop.style.top = y + 'px'
    featuresDrop.style.left = x + 'px'
    
})

features.addEventListener('mouseout', function() {
    featuresDrop.addEventListener('mouseover', function(){
        featuresDrop.style.display = 'flex'
    })

    featuresDrop.addEventListener('mouseout', function(){
        featuresDrop.style.display = 'none'
    })

    featuresDrop.style.display = 'none'
})

company.addEventListener('mouseover', function() {

    let rectCompany = company.getBoundingClientRect()
    let x = rectCompany.left
    let y = rectCompany.top

    y = y + 65

    companyDrop.style.display = "flex"
    companyDrop.style.top = y + 'px'
    companyDrop.style.left = x + 'px'
})

company.addEventListener('mouseout', function() {
    companyDrop.addEventListener('mouseover', function() {
        companyDrop.style.display = 'flex'
    })
    companyDrop.addEventListener('mouseout', function() {
        companyDrop.style.display = 'none'
    })

    companyDrop.style.display = 'none'
})

menuMobile.addEventListener('click', function () {
    divMenu.style.display = 'flex'
    bgMask.style.display = 'block'
})

closeMenu.addEventListener('click', function () {
    divMenu.style.display = 'none'
    bgMask.style.display = 'none'
})

bgMask.addEventListener('click', function () {
    divMenu.style.display = 'none'
    bgMask.style.display = 'none'
})

mobileFeat.addEventListener('click', function () {
    if (!featDropControl) {
        mobileFeatDrop.style.display = 'block'
        featDropControl = true
    }
    else {
        mobileFeatDrop.style.display = 'none'
        featDropControl = false
    }
})

mobileComp.addEventListener('click', function () {
    if (!compDropControl) {
        mobileCompDrop.style.display = 'block'
        compDropControl = true
    }
    else {
        mobileCompDrop.style.display = 'none'
        compDropControl = false
    }
})



window.addEventListener('resize', function () {
    divMenu.style.display = 'none'
    bgMask.style.display = 'none'
    mobileFeatDrop.style.display = 'none'
    mobileCompDrop.style.display = 'none'

    featDropControl = false
    compDropControl = false
})
