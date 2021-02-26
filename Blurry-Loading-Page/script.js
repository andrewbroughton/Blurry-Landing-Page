
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
const title = document.querySelector('.fifty-fifty');

let load = 0;

let timer = setInterval(blurring, 30);

// title.innerHTML = '50 Projects in 50 Days - Blurry Loading Page';

function blurring() {
    load++

    if ( load > 99) {
        clearInterval(timer)
    }

    // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

    const scale = (num, in_min, in_max, out_min, out_max) => {
        return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
        }
    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

    // console.log(load);
}  

