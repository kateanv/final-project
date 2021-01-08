let video = document.querySelector("#video"),
    button = document.querySelector("#button");

button.addEventListener("click", function() {
  video_content.style.display = "none";
  video.play()
  video.setAttribute("controls","controls");
}, false);

let video_content = document.querySelector(".services-video-content")

const counters = document.querySelectorAll(".statistic-number")

const speed = 50

counters.forEach((counter) => {
    const updateCount = () => {
        let actualNumber = +counter.innerHTML
        const targetNumber = +counter.dataset.target
        
        const step = targetNumber / speed

        let newCount = actualNumber + step
    
        if(newCount < targetNumber) {
            counter.innerHTML = newCount
            setTimeout(updateCount, 1)
        } else {
            counter.innerHTML = targetNumber
        }
    }

    updateCount()
})

function outNum(num, elem, time, step) {
    let number = document.querySelector(elem);
    n = 0;
    let t = Math.round(time / (num / step));
    let interval = setInterval (() => {
        n = n + step;
        if (n >= num) {
            clearInterval(interval);
        }
        number.innerHTML = n;
    },
        t);
}

outNum (3587, '#statistic-number-3587', 1000, 17);
outNum (207, '#statistic-number-207', 1000, 9);
outNum (2500, '#statistic-number-2500', 1000, 4);
outNum (873, '#statistic-number-873', 1000, 9);
outNum (900, '#statistic-number-900', 1000, 3);
