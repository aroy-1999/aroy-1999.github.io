
function initToTop(){
    const btn = document.getElementById("toTop");

    window.addEventListener("scroll", () => {
      btn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

function initMovingGeese(){

    const thumbs = document.querySelectorAll(".goose");

    thumbs.forEach((thumb, index) => {
        let x = -Math.random() * 100;  // stagger starting positions
        let speed = 0.1 + Math.random() * 0.3;       // slightly different speeds

        function randomHeight() {
            const nav = document.getElementById('nav');
            return Math.random() * nav.offsetHeight * 0.95;
        }

        thumb.style.top = randomHeight() + "px";

        function animate() {
            x += speed;

            if (x > window.innerWidth) {
                x = -thumb.offsetWidth;
                thumb.style.top = randomHeight() + "px";
            }

            thumb.style.left = x + "px";
            requestAnimationFrame(animate);
        }

        animate();
    });
}


function loadCollapsible() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
              content.style.maxHeight = null;
            } else {
              content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
}


function initCollapsible(){

    loadCollapsible();

    const btn = document.getElementById("toTop");

    window.addEventListener("scroll", () => {
      btn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

function showSlide(index) {
   const slides = document.getElementsByClassName("slide");

  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

function changeSlide(n) {
  slideIndex += n;
  showSlide(slideIndex);
}

function initSlideShow(){

    // Auto play every 5 seconds
    setInterval(() => {
      slideIndex++;
      showSlide(slideIndex);
    }, 5000);

    // Initialize
    showSlide(slideIndex);
}