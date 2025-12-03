const sketch = document.getElementById('sketch');


// window.addEventListener('scroll', () => {window.addEventListener('scroll', () => {

// }
// )

window.onload = async () => {
    console.log("window loaded");

    // await initAudio();

    // initMatterJS();

    setInterval(time, 1000);
    // setInterval(statistic, 1000);
    // getQuote();
    // nextEmoji();
}

function time() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let time = document.getElementById("clock");
    time.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}


document.getElementById("logo-link").addEventListener("click", (e) => {
  e.preventDefault();

  smoother.scrollTo(0, true); // smooth scroll to top

  // wait for scrolling to finish, then reload
  setTimeout(() => {
    window.location.reload();
  }, 600); // duration in ms, adjust if your smooth time is longer
});

