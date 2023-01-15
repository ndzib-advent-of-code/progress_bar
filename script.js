const progress = document.querySelector("#progress");
const indicator = document.querySelector("#indicator");

for(let i=0; i<= 63; i++) {
    setTimeout(() => {
        progress.style.width = `${i}%`;
        indicator.style.marginLeft = `${i}%`;
        indicator.innerText = `${i}%`
    }, 300)
}
