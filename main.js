let a = document.querySelector(".search-box");
let b = document.querySelector(".b");
let smg = new SpeechSynthesisUtterance("password galat hai dobara koshish kijiye");
let smg1 = new SpeechSynthesisUtterance("Ali ke wabsite par Apka Swagat Hai");


smg.lang = "hi-IN";
smg1.lang = "hi-IN";


function btn() {
  let pass = document.querySelector(".as").value;
  if (pass === "shama@0000") {
    a.style.display = "none";
    b.style.display = "grid";
    speechSynthesis.speak(smg1);
  } else {
    alert ("galat password hai")
    speechSynthesis.speak(smg);
  }
}




fetch("https://api.github.com/repos/shamaali86055/PicAl/contents/")
        .then(res => res.json())
        .then(data => {
            document.querySelector(".b").innerHTML = data
                .filter(file => file.type === "file" && /\.(jpg|jpeg|png|gif)$/i.test(file.name))
                .map(file => `<img src="${file.download_url}" alt="${file.name}" onclick="toggleFullScreen(this)" class="gallery-image">`)
                .join('');
        })
        .catch(err => console.log("Error:", err));
        
        
  function toggleFullScreen(img) {
  if (!document.fullscreenElement) {
    // Agar fullscreen nahi hai to fullscreen mode me le jao
    if (img.requestFullscreen) {
      img.requestFullscreen();
    } else if (img.mozRequestFullScreen) {
      img.mozRequestFullScreen();
    } else if (img.webkitRequestFullscreen) {
      img.webkitRequestFullscreen();
    } else if (img.msRequestFullscreen) {
      img.msRequestFullscreen();
    }
  } 
}
