  /////// DARK MODE //////////
  var darkMode = document.getElementById("darkMode");
  var body = document.querySelector("body");
  var penCont = document.getElementById("penCont");
  var iconsDark = document.getElementById("iconsDark");
  var mainText = document.getElementById("mainText1");
  var mainText = document.getElementById("mainText2");
  var mainText = document.getElementById("mainText3");
  var mainText = document.getElementById("mainText4");
  ///////////


  /////////// BUBLE //////////
  var bubleDark1 = document.querySelector(".lidark1");
  var bubleDark2 = document.querySelector(".lidark2");
  var bubleDark3 = document.querySelector(".lidark3");

  var bubleDark4 = document.querySelector(".lidark4");

  var bubleDark5 = document.querySelector(".lidark5");

  var bubleDark6 = document.querySelector(".lidark6");
  var bubleDark7 = document.querySelector(".lidark7");

  var bubleDark8 = document.querySelector(".lidark8");

  var bubleDark9 = document.querySelector(".lidark9");

  var bubleDark10 = document.querySelector(".lidark10");
  ////////////////////
  var BtnDownload = document.querySelector(".Btn-download");

  var moonimg = document.querySelector(".moonimg");

  var orentasi = document.querySelector(".orentasi");

  var lokasimap = document.getElementById("ifram");

  var loader = document.getElementById("preloader");

  var darkload = document.getElementById("darkload");

  var imgDarkload = document.getElementById("imagesDark");

  //////// TOPIC SKILL///////
  var topicSkill = document.querySelector(".topicskill");
  ////// COUNTAINER SKILL
  var containerSkill = document.querySelector(".container-skill");

  let getMode = localStorage.getItem("mode");

  if (getMode && getMode === "dark") {
    body.classList.add("dark");
    darkMode.classList.add("active");
    penCont.classList.toggle("pencont");
    iconsDark.classList.toggle("iconsDark");
    mainText1.classList.toggle("darkMain");
    mainText2.classList.toggle("darkMain");
    mainText3.classList.toggle("darkMain");
    mainText4.classList.toggle("darkMain");

    ///////// buble  /////////////
    bubleDark1.classList.toggle("bubleDark");
    bubleDark2.classList.toggle("bubleDark");
    bubleDark3.classList.toggle("bubleDark");
    bubleDark4.classList.toggle("bubleDark");
    bubleDark5.classList.toggle("bubleDark");
    bubleDark6.classList.toggle("bubleDark");
    bubleDark7.classList.toggle("bubleDark");
    bubleDark8.classList.toggle("bubleDark");
    bubleDark9.classList.toggle("bubleDark");
    bubleDark10.classList.toggle("bubleDark");

    BtnDownload.classList.toggle("darkBtn");
    /////// TOPIC SKILL
    topicSkill.classList.toggle("darkTopic");

    ////////// 
    moonimg.classList.toggle("sonimg");
    orentasi.classList.toggle("darkoren");
    lokasimap.classList.toggle("iframdark");
    //////CONTAINER SKILL
    containerSkill.classList.toggle("darkContiner");

    /////


    darkload.classList.toggle("Darkload");
    imgDarkload.classList.toggle("imgdark");

  }




  /////// toggle dark mode ///////////
  darkMode.addEventListener("click", () => {
    body.classList.toggle("dark");
    darkMode.classList.toggle("active");
    moonimg.classList.toggle("sonimg");
    orentasi.classList.toggle("darkoren");
    lokasimap.classList.toggle("iframdark");
    /////// TOPIC SKILL///
    topicSkill.classList.toggle("darkTopic");

    ///////LAYAR LOADER DARK/////
    darkload.style.visibility = "visible";
    darkload.classList.toggle("Darkload");
    darkload.style.display = "flex";
    //////CONTAINER SKILL
    containerSkill.classList.toggle("darkContiner");


    imgDarkload.classList.toggle("imgdark");
    imgDarkload.style.visibility = "visible";

    ////////////////




    penCont.classList.toggle("pencont");
    iconsDark.classList.toggle("iconsDark");
    mainText1.classList.toggle("darkMain");
    mainText2.classList.toggle("darkMain");
    mainText3.classList.toggle("darkMain");
    mainText4.classList.toggle("darkMain");
    ///////////// 
    bubleDark1.classList.toggle("bubleDark");
    bubleDark2.classList.toggle("bubleDark");
    bubleDark3.classList.toggle("bubleDark");
    bubleDark4.classList.toggle("bubleDark");
    bubleDark5.classList.toggle("bubleDark");
    bubleDark6.classList.toggle("bubleDark");
    bubleDark7.classList.toggle("bubleDark");
    bubleDark8.classList.toggle("bubleDark");
    bubleDark9.classList.toggle("bubleDark");
    bubleDark10.classList.toggle("bubleDark");

    ///////////////////
    BtnDownload.classList.toggle("darkBtn");


    if (darkload.style.visibility = "visible") {
      setTimeout(() => {
        darkload.style.visibility = "hidden";
        imgDarkload.style.visibility = "hidden";
        imgDarkload.style.opacity = "0";
        darkload.style.opacity = "0";

      }, 1500);
    };

    if (!body.classList.contains("dark")) {
      return localStorage.setItem("mode", "light");
    };

    localStorage.setItem("mode", "dark");
  });




  ////// PRELOADER ///////////////
  var loader = document.getElementById("preloader");



  window.addEventListener("load", function() {
    setTimeout(() => {
      loader.style.visibility = "hidden";

    }, 1000)


  });


  ////// icons ///////////
  
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
