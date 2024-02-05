/////////// ICON DARK MODE///////////////
var darkMode = document.getElementById("darkMode");
//////////BTN DOWNLOAD  ////////////////
const BtnDownload = document.querySelector(".Btn-download");
///////// PRELOADER  //////////////////
var loader = document.getElementById("preloader");
var darkload = document.getElementById("darkload");
//////// BUBLE DARK //////////////////
const bubleMode1 = document.querySelector("#homebuble")
/////////// MODE MALAM////////////////
const body = document.body;
/////// BACKGROUND IMG DARK /////////////
const ImgBackg = document.querySelectorAll(".ImgBackg");



/////////  LOCAL STORAGE ///////////////
let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {

  body.classList.toggle("Modemalam");

  for (var i = 0; i < ImgBackg.length; i++) {
    ImgBackg[i].classList.toggle("ImgDarkBg");
  }
  /////////// BUBLE DARK MODE////////////
  bubleMode1.classList.toggle("DARKBUB");
  ////////// BTN DOWNLOAD////////////////
  BtnDownload.classList.toggle("darkBtn");
  /////////TOGGLE DARK MODE//////////////
  darkMode.classList.toggle("active");
  darkload.classList.toggle("active");
}

//////////////MODE MALAM/////////////////
darkMode.addEventListener("click", () => {
  /////////// DARK MODE /////////////////
  body.classList.toggle("Modemalam");
  ////////BACKGROUND IMG DARK////////////
  for (var i = 0; i < ImgBackg.length; i++) {
    ImgBackg[i].classList.toggle("ImgDarkBg");
  }
  /////////// BUBLE DARK MODE////////////
  bubleMode1.classList.toggle("DARKBUB");
  ///////////////////////////////////////
  ////////////LAYAR LOADER DARK//////////
  darkMode.classList.toggle("active");
  darkload.classList.toggle("active");
  ///////////BTN DOWNLOAD////////////////
  BtnDownload.classList.toggle("darkBtn");
  //////////// DARK TOGGLE MODE ////////
  if (darkload.style.visibility = "visible") {
    setTimeout(() => {
      darkload.style.visibility = "hidden";
    }, 2300);
  };
  ///////////////////////////////////////

  if (!body.classList.contains("Modemalam")) {

    return localStorage.setItem("mode", "light");

  };

  localStorage.setItem("mode", "dark");
});


/////////////// PRELOADER ///////////////
var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
  loader.style.visibility = "hidden";
});


///////////// ICONS SHARE ///////////////
const alertDiscord = document.getElementById("alertDiscord");

const boxAlert = document.getElementById("boxAlert");

var Tidak = document.getElementById("Tidak");

var Yes = document.getElementById("Yes");

////////////FACEBOOK/////////////////////
var Facebook = document.getElementById("alertFacebook");
Facebook.addEventListener("click", () => {
  loader.style.visibility = "visible";

  setTimeout(() => {
    loader.style.visibility = "hidden";
    let menuju_href = "https://www.facebook.com/kaloskl.kaloskl";
    window.location.href = menuju_href;

  }, 3000);
});

////////////INSTAGRAM///////////////////
var Instagram = document.getElementById("alertInstagram");
Instagram.addEventListener("click", () => {
  loader.style.visibility = "visible";

  setTimeout(() => {
    loader.style.visibility = "hidden";
    let menuju_href = "https://www.instagram.com/rioladimas0101/";
    window.location.href = menuju_href;

  }, 3000);
});
////////////// GITHUB ///////////////////

var Github = document.getElementById("alertGithub");
Github.addEventListener("click", () => {
  loader.style.visibility = "visible";

  setTimeout(() => {
    loader.style.visibility = "hidden";
    let menuju_href = "https://github.com/RIO-0101";
    window.location.href = menuju_href;

  }, 3000);
});

///////////// DISCORD //////////////////
alertDiscord.addEventListener("click", () => {
  boxAlert.classList.toggle("active");

  Tidak.addEventListener("click", () => {
    boxAlert.classList.remove("active");

  });

  Yes.addEventListener("click", () => {
    loader.style.visibility = "visible";

    setTimeout(() => {
      loader.style.visibility = "hidden";

      let menuju_href = "https://discord.gg/wpu";
      window.location.href = menuju_href;

    }, 2000);
  });

});

//////////// ICONS CONTACT //////////////
const Gmail = document.getElementById("Gmail")
const WhatsApp = document.getElementById("WhatsApp")
/////////GMAIL////////////////////////
Gmail.addEventListener('click', () => {

  loader.style.visibility = "visible";
  setTimeout(() => {
    loader.style.visibility = "visible";
    let gmail = "mailto: lautuganteng@gmail.com?subject=DO%20YOU%20HAVE%20ANY%20SUGGESTION%20AND%20FEEDBACK%20?";
    window.location.href = gmail;
  }, 3000)
});

///////////WHATSAPP///////////////////
WhatsApp.addEventListener('click', () => {

  loader.style.visibility = "visible";
  setTimeout(() => {
    loader.style.visibility = "visible";
    let WhatsApp = "https://api.whatsapp.com/send?phone=6283184989872&text=Your%20name:%0AYour%20E-mail:%0AMessages:";
    window.location.href = WhatsApp;
  }, 3000)
});



////////// DOWNLOAD CV /////////////////
BtnDownload.addEventListener("click", () => {
  BtnDownload.classList.add("active");
  BtnDownload.innerText = "";

  setTimeout(() => {
    BtnDownload.innerText = "Completed";
    BtnDownload.classList.remove("active");

    loader.style.visibility = "visible";

    setTimeout(() => {
      loader.style.visibility = "hidden";
      let download_href = "https://drive.google.com/uc?export=download&id=1-6nnwS6qHllboQ6eFZolMEt0IpCtkkkX/view?usp=drivesdk";
      window.location.href = download_href;

    }, 4000)
  }, 6000);


  setTimeout(() => {
    BtnDownload.innerText = "Again";

  }, 10000)

});

//////////TITIK-TITIK///////////////////
const titik = document.querySelector(".sapaandua");

const titikLoad = () => {

  setTimeout(() => {
    titik.textContent = ".";

  }, 0);
  setTimeout(() => {
    titik.textContent = "..";

  }, 500);
  setTimeout(() => {
    titik.textContent = "...";


  }, 1000); //1s = 1000 milliseconds

  setTimeout(() => {
    titik.textContent = "....";


  }, 1500);

  setTimeout(() => {
    titik.textContent = ".....";


  }, 2000);

  setTimeout(() => {
    titik.textContent = "......";


  }, 2500);

}

titikLoad();
setInterval(titikLoad, 3000);

////// ANIMASI TEXT BERGERAK ////////////
const text = document.querySelector(".kata-bijak");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "don't forget to smile 😃";

  }, 0);
  setTimeout(() => {
    text.textContent = "don't forget to prayer 🥰";



  }, 3000);
  setTimeout(() => {
    text.textContent = "never give up !! 😤";


  }, 5000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 8000);




///////// BUTTON PREV DAN NEXT //////////
const productContainers = [...document.querySelectorAll('.container-project')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth;
  })

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
  })


})

///////// IMAGES CAPTION ////////////////
function toggleCaption1() {
  let contPro1 = document.getElementById('contPro1');
  contPro1.classList.toggle('active')
}

function toggleCaption2() {
  let contPro2 = document.getElementById('contPro2');
  contPro2.classList.toggle('active')
}

function toggleCaption3() {
  let contPro3 = document.getElementById('contPro3');
  contPro3.classList.toggle('active')
}

function toggleCaption4() {
  let contPro4 = document.getElementById('contPro4');
  contPro4.classList.toggle('active')
}

function toggleCaption5() {
  let contPro5 = document.getElementById('contPro5');
  contPro5.classList.toggle('active')
}



///////////SCROLL REVEAL/////////////////
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 50;


    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");

    }

    else {
      reveals[i].classList.remove("active");
    }

  }
}

////////// DISABLE COPY PASTE //////////
const disabledKeys = [67, 73, 85, 88]; // keys code that will be disabled

const showAlert = e => {
  e.preventDefault(); // preventing its default behaviour
  ///return alert("Sorry, you can't view or copy source codes this way!");
}

document.addEventListener("contextmenu", e => {
  showAlert(e); // calling showAlert() function on mouse right click
});

document.addEventListener("keydown", e => {
  // calling showAlert() function, if the pressed key matched to disabled keys
  if (e.ctrlKey && disabledKeys.includes(e.keyCode)) {
    showAlert(e);
  }
});

///////// SCROLL IFRAM //////////////////
const scrollFram = document.getElementById("scrollFram");
const fram = document.getElementById("ifram");


scrollFram.addEventListener('click', () => {
  fram.scrollIntoView({
    block: "center",
  })

});

/*//////// ONLINE OFFLINE //////////////
const Navigator = document.querySelector(".navigator");
const offline = document.getElementById("offline");
const span2 = document.querySelector(".alas-nav #text");


navigator.onLine;

if (navigator.onLine) {
  
    Navigator.classList.remove("active");
    
} else {
  Navigator.classList.toggle("active");

  var x = 10;

  var myInterval = setInterval(function() {
    x -= 1;
    document.getElementById("count").innerHTML = x;

    if (x <= 0) {
      clearInterval(myInterval);
      loader.style.visibility = "visible";
      setTimeout(() => {
        loader.style.visibility = "hidden";

      }, 2000)
    }

  }, 1000);


}******/
