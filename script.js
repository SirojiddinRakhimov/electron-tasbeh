const btn = document.querySelector('.count')
const reset = document.querySelector('.reset')
let show = document.querySelector('.indicator')
let i = 0;


reset.addEventListener('dblclick', function () {
    show.innerHTML = 0;
    i = 0
    document.querySelector("audio").play();
})

btn.addEventListener('click', function () {
    i++;
    show.innerHTML = i;
    if (i == 33) {
        i = -1
    }
    document.querySelector("audio").play();
})