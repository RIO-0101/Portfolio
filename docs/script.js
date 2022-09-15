////// ANIMASI TEXT BERGERAK /////////////
const text = document.querySelector(".sec-text");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Freelancer";
  }, 0);
  setTimeout(() => {
    text.textContent = "Web Developer";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Web Designer";
  }, 8000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);

///// ALERT/////////////////////////
document.getElementById("twitter").onclick = function() {
  alert("Not Ready Yet! 😁");
}
document.getElementById("youtube").onclick = function() {
  alert("Not Ready Yet! 😋");
}


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





