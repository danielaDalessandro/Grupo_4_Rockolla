window.addEventListener("load", function () {
  let counter = document.getElementById("counter");
  setInterval(function () {
    --counter.innerHTML;
    if (counter.innerHTML <= 0) {
      window.location.pathname = "/";
    }
  }, 1000);
});
