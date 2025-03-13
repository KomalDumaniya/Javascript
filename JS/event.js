let count = 0;

const increaseCounter = () => {
    count++;
    document.getElementById("counter").innerText = count;
};

const decreaseCounter = () => {
    count--;
    document.getElementById("counter").innerText = count;
};
