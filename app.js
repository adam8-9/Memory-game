let score = document.querySelector("h2")
let clickCount = 0;
let firstImage;
let secImage;
let scorekeeper = 0;
function clickCheck(e) {
    clickCount++;
    let image = e.target;
    if (clickCount === 1) {
        console.log(clickCount)
        firstImage = image.classList.value;
        console.log(firstImage)
        image.classList.toggle("animal")

    } if (clickCount === 2) {
        console.log(clickCount)
        secImage = image.classList.value;
        console.log(secImage)
        image.classList.toggle("animal")
        clickCount = "";

        if (firstImage === secImage) {
            console.log("matched")
            setTimeout(() => {
                prompt("u matched");
            }, 100)
            scorekeeper++;
            score.innerText = `${scorekeeper}`
        } else {
            setTimeout(() => {
                prompt("u didnt match");
            }, 100)
        }
    }
}



image1.addEventListener("click", clickCheck)
image2.addEventListener("click", clickCheck)
image3.addEventListener("click", clickCheck)
image4.addEventListener("click", clickCheck)
image5.addEventListener("click", clickCheck)
image6.addEventListener("click", clickCheck)
