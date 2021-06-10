let seconds = 10,
    span = document.getElementById("seconds");

const counter = () => {
    if (seconds > 1){
        seconds -=1
        span.innerText = seconds
    } else {
        clearInterval (countdown);
        window.location.href = "https://google.com"
    }
}

let countdown = setInterval(counter, 1000);

document.addEventListener("visibilitychange", ()=>{
    if (document.visibilityState === "visible"){
        countdown = setInterval(counter, 1000)
    } else {
        console.log("countdown stopped");
        clearInterval(countdown)
    }
})