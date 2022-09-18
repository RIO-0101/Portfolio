  ////// PRELOADER ///////////////
  const loader = document.getElementById("preloader");

  window.addEventListener("load", function() {
    setTimeout(() => {
      loader.style.visibility = "hidden";
    }, 3000)


  })


////// icons ///////////
const icons = document.getElementById("icons")

icons.addEventListener("click", () => {
   loader.style.visibility = "visible";

if (loader.style.visibility = "visible") {
   setTimeout(() => {
   loader.style.visibility = "hidden";

     
   }, 5000)
}

  
})

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

///// DISCORD //////
const discord = document.querySelector(".discord");

discord.addEventListener("click", () => {
  
  
})






  ////////// Download cv ////////
  const BtnDownload = document.querySelector(".Btn-download");

  BtnDownload.addEventListener("click", () => {
    BtnDownload.classList.add("active");

    BtnDownload.innerText = "Process...";
    setTimeout(() => {
      BtnDownload.innerText = "Completed";


      if (BtnDownload.innerText = "Completed") {
        loader.style.visibility = "visible";

        setTimeout(() => {
          BtnDownload.innerText = "again";
          loader.style.visibility = "hidden";
          let download_href = "https://drive.google.com/uc?export=download&id=1Hn0L1L2I5D4AWNSoBvBuePT1RCFNj6lg";
          window.location.href = download_href;

        }, 5000)
      }


      if (BtnDownload.innerText = "again") {
        BtnDownload.classList.remove("active");

      }



    }, 6000)





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
