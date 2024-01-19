console.log("projects.js loaded")

let carouselsCollection = [[0, [], 0], [0, [], 0], [0, [], 0]]

const items = document.querySelectorAll('.carousel-item');
// let itemsLength = items.length;
for (let i = 0; i < items.length; i++) {
    const element = items[i];
    carouselsCollection[(Number(element.attributes.getNamedItem("data-index").value))][2] += 1
    carouselsCollection[(Number(element.attributes.getNamedItem("data-index").value))][1].push(element)

}
// console.log(carouselsCollection[1][1])
function showSlide(index, carouselInd) {
    const carouselInners = document.getElementsByClassName('carousel-inner');

    for (let i = 0; i < carouselInners.length; i++) {
        const element = carouselInners.item(i)
        if (Number(element.attributes.getNamedItem("data-index").value) != carouselInd) {
            continue
        }

        const newPosition = -index * 100 + '%';
        element.style.transform = 'translateX(' + newPosition + ')';

    }



}

function nextSlide(ind) {
    ind = Number(ind)
    console.log(ind)
    console.log("next clicked")

    carouselsCollection[ind][0] = (carouselsCollection[ind][0] + 1) % carouselsCollection[ind][2];
    showSlide(carouselsCollection[ind][0], ind);
}

function prevSlide(ind) {
    ind = Number(ind)
    console.log(ind)
    console.log("previous clicked")

    carouselsCollection[ind][0] = (carouselsCollection[ind][0] - 1) % carouselsCollection[ind][2];
    showSlide(carouselsCollection[ind][0], ind);
}