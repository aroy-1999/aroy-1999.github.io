// Get the button:


// When the user scrolls down 20px from the top of the document, show the button


function scrollFunction() {
    let mybutton = document.getElementById("btnGotoTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function resizeLogo(){
    const header = document.getElementById("idHeader");
    y = header.offsetHeight-14;
    newSize = y.toString() + "px";

    const image = document.getElementById("idLogo");
    image.style.height = newSize;
    image.style.width = newSize;
    image.style.top = "7px";
    image.style.left = "7px";
    image.style.display = "block";
}
