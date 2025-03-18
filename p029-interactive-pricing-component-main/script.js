const slider = document.querySelector(".custom-range input");
const currentPrice = document.querySelector("#currentPrice");
const currentViews = document.querySelector("#currentViews");
const yearDiscount = document.querySelector("#yearDiscount");

yearDiscount.addEventListener("change", () => {
    percent = findPercentage()
    priceHandler(percent);
})

slider.addEventListener("input", function () {
    percent = findPercentage()
    this.style.setProperty("--progress", percent * 100 + "%");
    priceHandler(percent);
});

function findPercentage() {
    return (slider.value - slider.min) / (slider.max - slider.min);
}

function priceHandler(percent) {
    const maxPrice = 32, maxViews = 1000;
    const discount = yearDiscount.checked;
    let price = 0, views = 0;
    if (percent == 0) percent = 0.05;
    price = maxPrice * percent;
    views = maxViews * percent;


    if (discount) {
        price *= (12 * 0.75);
        views *= 12;
        currentPrice.nextElementSibling.innerHTML = `/year`;
    } else {
        currentPrice.nextElementSibling.innerHTML = `/month`;
    }
    currentPrice.innerHTML = `$${price.toFixed(2)}`;
    if (views >= 1000) {
        views /= 1000;
        currentViews.innerHTML = `${views}M`;
    }
    else {
        currentViews.innerHTML = `${views}K`;
    }
}

