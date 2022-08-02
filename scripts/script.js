let features = document.querySelector('.item-features')
let featuresDrop = document.querySelector('.dropdown-features')
let featuresArrow = document.querySelector('#arrow-1')

let company = document.querySelector('.item-company')
let companyDrop = document.querySelector('.dropdown-company')
let companyArrow = document.querySelector('.arrow-2')

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