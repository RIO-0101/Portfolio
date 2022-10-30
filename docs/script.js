/////// DARK MODE //////////
var darkMode = document.getElementById("darkMode");
var body = document.querySelector("body");
var penCont = document.getElementById("penCont");
var iconsDark = document.getElementById("iconsDark");
var mainText = document.getElementById("mainText1");
var mainText = document.getElementById("mainText2");
var mainText = document.getElementById("mainText3");
var mainText = document.getElementById("mainText4");
////////////////////
var BtnDownload = document.querySelector(".Btn-download");

var moonimg = document.querySelector(".moonimg");

var orentasi = document.querySelector(".orentasi");

var lokasimap = document.getElementById("ifram");

var loader = document.getElementById("preloader");

var darkload = document.getElementById("darkload");


//////// TOPIC SKILL///////
var topicSkill = document.querySelector(".topicskill");
////// COUNTAINER SKILL
var containerSkill = document.querySelector(".container-skill");

var home = document.getElementById("p1");
var about = document.getElementById("p2");
var skill = document.getElementById("p3");
var gallery = document.getElementById("p4");

////// DARK
var DARK1 = document.getElementById("DARK1");
var DARK2 = document.getElementById("DARK2");
var DARK3 = document.getElementById("DARK3");
var DARK4 = document.getElementById("DARK4");
var DARK5 = document.getElementById("DARK5");
var DARK6 = document.getElementById("DARK6");
var DARK7 = document.getElementById("DARK7");
var DARK8 = document.getElementById("DARK8");
var DARK9 = document.getElementById("DARK9");
var DARK10 = document.getElementById("DARK10");
var DARK11 = document.getElementById("DARK11");
var DARK12 = document.getElementById("DARK12");
var DARK13 = document.getElementById("DARK13");
var DARK14 = document.getElementById("DARK14");
var DARK15 = document.querySelector("form");
var DARK16 = document.getElementById("DARK16")
var DARK17 = document.getElementById("DARK17")
var DARK18 = document.getElementById("DARK18")


//////// TEXT CONTACT
var con1 = document.getElementById("con-1");
var con2 = document.getElementById("con-2");
var con3 = document.getElementById("con-3");
var con4 = document.getElementById("con-4");
var con5 = document.getElementById("con-5");
var con6 = document.getElementById("con-6");
///////// CAPTION DARK
var caption1 = document.getElementById("caption1");
var caption2 = document.getElementById("caption2");
var caption3 = document.getElementById("caption3");
var caption4 = document.getElementById("caption4");
////// IMAGES CONTAINER PROJECT
var contPro1 = document.getElementById("contPro1");
var contPro2 = document.getElementById("contPro2");
var contPro3 = document.getElementById("contPro3");
var contPro4 = document.getElementById("contPro4");
var contPro5 = document.getElementById("contPro5");

/////// SLIDE /////////
var slidedark = document.querySelector(".slide");
///////// Buble dark ///////
var buble1 = document.getElementById("homebuble");
var buble2 = document.getElementById("contactbuble");


/////  LOCAL STORAGE ////////////
let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
  ////////// BUBLE DARK//////////
  buble1.classList.toggle("bubleDark");
  buble2.classList.toggle("bubleDark");
  ////////////////SLIDE//////////
  slidedark.classList.toggle("dark");
  /////////////
  body.classList.add("dark");
  darkMode.classList.add("active");
  penCont.classList.toggle("pencont");
  iconsDark.classList.toggle("iconsDark");
  mainText1.classList.toggle("darkMain");
  mainText2.classList.toggle("darkMain");
  mainText3.classList.toggle("darkMain");
  mainText4.classList.toggle("darkMain");
  ////// CAPTION DARK
  caption1.classList.toggle("darkCap");
  caption2.classList.toggle("darkCap");
  caption3.classList.toggle("darkCap");
  caption4.classList.toggle("darkCap");

  ///////////// TEXT CONTACT
  con1.classList.toggle("darkPen");
  con2.classList.toggle("darkPen");
  con3.classList.toggle("darkPen");
  con4.classList.toggle("darkPen");
  con5.classList.toggle("darkPen");
  con6.classList.toggle("darkPen");
  //////////// dark background
  home.classList.toggle("homeDark");
  about.classList.toggle("aboutDark");
  skill.classList.toggle("skillDark");
  gallery.classList.toggle("galleryDark");
  /////// BTN DOWNLOAD///////////
  BtnDownload.classList.toggle("darkBtn");
  /////////////// TOPIC SKILL
  topicSkill.classList.toggle("darkTopic");

  ////////// 
  orentasi.classList.toggle("darkoren");
  lokasimap.classList.toggle("iframdark");
  //////CONTAINER SKILL
  containerSkill.classList.toggle("darkContiner");

  //////////////
  darkload.classList.toggle("active");
  /////// DARK
  DARK1.classList.toggle("DARK1");
  DARK2.classList.toggle("DARK2");
  DARK3.classList.toggle("DARK3");
  DARK4.classList.toggle("DARK4");
  DARK5.classList.toggle("DARK5");
  DARK6.classList.toggle("DARK6");
  DARK7.classList.toggle("DARK7");
  DARK8.classList.toggle("DARK8");
  DARK9.classList.toggle("DARK9");
  DARK10.classList.toggle("DARK10");
  DARK11.classList.toggle("DARK11");
  DARK12.classList.toggle("DARK12");
  DARK13.classList.toggle("DARK13");
  DARK14.classList.toggle("DARK14");
  DARK15.classList.toggle("DARK15");
  DARK16.classList.toggle("DARK16");
  DARK17.classList.toggle("DARK16");
  DARK18.classList.toggle("DARK16");
  ////////// IMAGES CONTAINER PRO
  contPro1.classList.toggle("darkPro1");
  contPro2.classList.toggle("darkPro1");
  contPro3.classList.toggle("darkPro1");
  contPro4.classList.toggle("darkPro1");
  contPro5.classList.toggle("darkPro1");
  ////// TEXT DARK LOAD 

}
/////////////////////////

var home = document.getElementById("p1");
var about = document.getElementById("p2");
var skill = document.getElementById("p3");
var gallery = document.getElementById("p4");
////var backGround = document.getElementById("backGround");
var DARK1 = document.getElementById("DARK1");
var DARK2 = document.getElementById("DARK2");
var DARK3 = document.getElementById("DARK3");
var DARK4 = document.getElementById("DARK4");
var DARK5 = document.getElementById("DARK5");
var DARK6 = document.getElementById("DARK6");
var DARK7 = document.getElementById("DARK7");
var DARK8 = document.getElementById("DARK8");
var DARK9 = document.getElementById("DARK9");
var DARK10 = document.getElementById("DARK10");
var DARK11 = document.getElementById("DARK11");
var DARK12 = document.getElementById("DARK12");
var DARK13 = document.getElementById("DARK13");
var DARK14 = document.getElementById("DARK14");
var DARK15 = document.querySelector("form");
var DARK16 = document.getElementById("DARK16")
var DARK17 = document.getElementById("DARK17")
var DARK18 = document.getElementById("DARK18")
////////// TEXT CONTACT
var con1 = document.getElementById("con-1");
var con2 = document.getElementById("con-2");
var con3 = document.getElementById("con-3");
var con4 = document.getElementById("con-4");
var con5 = document.getElementById("con-5");
var con6 = document.getElementById("con-6");
///////// CAPTION
var caption1 = document.getElementById("caption1");
var caption2 = document.getElementById("caption2");
var caption3 = document.getElementById("caption3");
var caption4 = document.getElementById("caption4");
////// IMAGES CONTAINER PROJECT
var contPro1 = document.getElementById("contPro1");
var contPro2 = document.getElementById("contPro2");
var contPro3 = document.getElementById("contPro3");
var contPro4 = document.getElementById("contPro4");
var contPro5 = document.getElementById("contPro5");

//////////////SLIDE
var slidedark = document.querySelector(".slide")
////////// BUBLE DARK MODE//////////
var buble1 = document.getElementById("homebuble");
var buble2 = document.getElementById("contactbuble");

/////// toggle dark mode ///////////
darkMode.addEventListener("click", () => {
  ///////// BUBLE DARK MODE////////
  buble1.classList.toggle("bubleDark");
  buble2.classList.toggle("bubleDark");
  ///////////// SLIDE DARK ////////
  slidedark.classList.toggle("dark");
  ////////// IMAGES CONTAINER PRO
  contPro1.classList.toggle("darkPro1");
  contPro2.classList.toggle("darkPro1");
  contPro3.classList.toggle("darkPro1");
  contPro4.classList.toggle("darkPro1");
  contPro5.classList.toggle("darkPro1");
  /////// CAPTION 
  caption1.classList.toggle("darkCap");
  caption2.classList.toggle("darkCap");
  caption3.classList.toggle("darkCap");
  caption4.classList.toggle("darkCap");
  ////// TEXT PENCONT
  con1.classList.toggle("darkPen");
  con2.classList.toggle("darkPen");
  con3.classList.toggle("darkPen");
  con4.classList.toggle("darkPen");
  con5.classList.toggle("darkPen");
  con6.classList.toggle("darkPen");
  ////////// DARK
  DARK1.classList.toggle("DARK1");
  DARK2.classList.toggle("DARK2");
  DARK3.classList.toggle("DARK3");
  DARK4.classList.toggle("DARK4");
  DARK5.classList.toggle("DARK5");
  DARK6.classList.toggle("DARK6");
  DARK7.classList.toggle("DARK7");
  DARK8.classList.toggle("DARK8");
  DARK9.classList.toggle("DARK9");
  DARK10.classList.toggle("DARK10");
  DARK11.classList.toggle("DARK11");
  DARK12.classList.toggle("DARK12");
  DARK13.classList.toggle("DARK13");
  DARK14.classList.toggle("DARK14");
  DARK15.classList.toggle("DARK15");
  DARK16.classList.toggle("DARK16");
  DARK17.classList.toggle("DARK16");
  DARK18.classList.toggle("DARK16");


  ////// BACKGROUND DARK
  home.classList.toggle("homeDark");
  about.classList.toggle("aboutDark");
  skill.classList.toggle("skillDark");
  gallery.classList.toggle("galleryDark");

  ///////
  body.classList.toggle("dark");
  darkMode.classList.toggle("active");
  orentasi.classList.toggle("darkoren");
  lokasimap.classList.toggle("iframdark");
  /////// TOPIC SKILL///
  topicSkill.classList.toggle("darkTopic");

  ///////LAYAR LOADER DARK/////
  darkload.classList.toggle("active");
  //////CONTAINER SKILL
  containerSkill.classList.toggle("darkContiner");

  ////////////////
 //// background.classList.toggle("backGroundDark");

  penCont.classList.toggle("pencont");
  iconsDark.classList.toggle("iconsDark");
  mainText1.classList.toggle("darkMain");
  mainText2.classList.toggle("darkMain");
  mainText3.classList.toggle("darkMain");
  mainText4.classList.toggle("darkMain");
  ///////////////////
  BtnDownload.classList.toggle("darkBtn");
  //////////// DARK TOGGLE MODE
  if (darkload.style.visibility = "visible") {
    setTimeout(() => {
      darkload.style.visibility = "hidden";
    }, 2300);
  };
  ////////////
  if (!body.classList.contains("dark")) {
    return localStorage.setItem("mode", "light");
  };

  localStorage.setItem("mode", "dark");
});




////// PRELOADER ///////////////
var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
  loader.style.visibility = "hidden";
});


////// icons share ///////////
var alertDiscord = document.getElementById("alertDiscord");

var boxAlert = document.getElementById("boxAlert");

var Tidak = document.getElementById("Tidak");

var Yes = document.getElementById("Yes");
///// FACEBOOK 
var Facebook = document.getElementById("alertFacebook");
Facebook.addEventListener("click", () => {
  loader.style.visibility = "visible";

  setTimeout(() => {
    loader.style.visibility = "hidden";
    let menuju_href = "https://www.facebook.com/kaloskl.kaloskl";
    window.location.href = menuju_href;

  }, 3000);
});
///// INSTAGRAM 
var Instagram = document.getElementById("alertInstagram");
Instagram.addEventListener("click", () => {
  loader.style.visibility = "visible";

  setTimeout(() => {
    loader.style.visibility = "hidden";
    let menuju_href = "https://www.instagram.com/rioladimas0101/";
    window.location.href = menuju_href;

  }, 3000);
});
/////// GITHUB
var Github = document.getElementById("alertGithub");
Github.addEventListener("click", () => {
  loader.style.visibility = "visible";

  setTimeout(() => {
    loader.style.visibility = "hidden";
    let menuju_href = "https://github.com/RIO-0101";
    window.location.href = menuju_href;

  }, 3000);
});

////// DISCORD 
alertDiscord.addEventListener("click", () => {
  boxAlert.style.display = "flex";

});

Tidak.addEventListener("click", () => {
  boxAlert.style.display = "none";
});


Yes.addEventListener("click", () => {
  loader.style.visibility = "visible";

  setTimeout(() => {
    loader.style.visibility = "hidden";

    let menuju_href = "https://discord.gg/wpu";
    window.location.href = menuju_href;

  }, 1000);
});



////// ICONS CONTACT /////////
const iconContact = document.querySelector(".icons-contact");

iconContact.addEventListener("click", () => {
  loader.style.visibility = "visible";

  if (loader.style.visibility = "visible") {
    setTimeout(() => {
      loader.style.visibility = "hidden";


    }, 1000)
  }


})

////////// DOWNLOAD CV ////////
BtnDownload.addEventListener("click", () => {
  BtnDownload.classList.add("active");
  BtnDownload.innerText = "";

  setTimeout(() => {
    BtnDownload.innerText = "Completed";
    BtnDownload.classList.remove("active");

    loader.style.visibility = "visible";

    setTimeout(() => {
      loader.style.visibility = "hidden";
      let download_href = "https://drive.google.com/uc?export=download&id=1Hn0L1L2I5D4AWNSoBvBuePT1RCFNj6lg";
      window.location.href = download_href;

    }, 4000)
  }, 6000);


  setTimeout(() => {
    BtnDownload.innerText = "Again";

  }, 10000)

});
/////// TOOLTIP TEXT 

///////////////////////
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

////// ANIMASI TEXT BERGERAK /////////////


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




////// BUTTON PREV DAN NEXT //////////


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

/////// IMAGES CAPTION ///////////
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





////// SCROLL REVEAL 

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

////////// DISABLE COPY PASTE
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

var scrollFram = document.getElementById("scrollFram");
var fram = document.getElementById("ifram");


scrollFram.addEventListener('click', () => {
  fram.scrollIntoView({
    block: "center",
  })

})
