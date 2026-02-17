const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const countElement = document.getElementById("count");

let count = 0;
function increment() {
    count++;
    countElement.textContent = count;
}

function decrement() {
    count--;
    countElement.textContent = count;
}

incrementButton.addEventListener("click", function () {
    increment();
});

decrementButton.addEventListener("click", function () {
    decrement();
});
