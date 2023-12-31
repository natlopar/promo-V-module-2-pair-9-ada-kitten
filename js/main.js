'use strict';
const list = document.querySelector('.js-list');
const kittenOneImage = 'https://dev.adalab.es/gato-siames.webp';
const kittenOneName = 'Anastacio';
const kittenOneRace = 'Siamés';
const kittenOneDesc =
  ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';

  const mayus1= kittenOneName.toUpperCase();
  // const kittenOne = `<li class="card">
  // <article> 
  // <img
  //   class="card_img"
  //   src= "${kittenOneImage}";
  //   alt="gatito"
  // />
  // <h3 class="card_title"> ${mayus1} </h3>
  // <h4 class="card_race"> ${kittenOneRace} </h4>
  // <p class="card_description"> ${kittenOneDesc} </p>
  // </article>
  // </li>`;



  const kittenTwoImage = 'https://dev.adalab.es/sphynx-gato.webp';
  const kittenTwoName = 'Fiona';
  const kittenTwoRace = 'Sphynx';
  const kittenTwoDesc =
    'Produce fascinación y curiosidad. Exótico, raro, bello, extraño..hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';

const mayus2= kittenTwoName.toUpperCase();
// const kittenTwo = `<li class="card">
// <article> 
// <img
//   class="card_img"
//   src="${kittenTwoImage}"
//   alt="sphynx-cat"/>
// <h3 class="card_title">${mayus2} </h3>
// <h4 class="card_race"> ${kittenTwoRace}</h4>
// <p class="card_description"> ${kittenTwoDesc} </p>
// </article>
// </li>`;


  const kittenThreeImage = 'https://dev.adalab.es/maine-coon-cat.webp';
  const kittenThreeName = 'Cielo';
  const kittenThreeRace = 'Maine Coon';
  const kittenThreeDesc =
  'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';

const mayus3= kittenThreeName.toUpperCase();
// const kittenThree = `<li class="card">
// <img
//   class="card_img"
//   src= ${kittenThreeImage}
//   alt="maine-coon-cat"
// />
// <h3 class="card_title"> ${mayus3} </h3>
// <h4 class="card_race">${kittenThreeRace}</h4>
// <p class="card_description">
// ${kittenThreeDesc}
// </p>
// </li>`;



const inputSearch = document.querySelector('.js_in_search_desc');

const descrSearchText = inputSearch.value;

// if( kittenOneDesc.includes(descrSearchText) ) {
//   kittenOne.classList.remove('hidden');
// } else {
//   kittenOne.classList.add('hidden');
// }
  

const buttonAdd = document.querySelector(".js-btn-add");
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');
const valueDesc = inputDesc.value;
const valuePhoto = inputPhoto.value;
const valueName = inputName.value;

// buttonAdd.addEventListener('click', (event)=> {
//   if (valueDesc === '' || valuePhoto === '' || valueName === '') {
//     labelMessageError.innerHTML = '¡Uy! parece que has olvidado algo';
//   }
// })

const buttonCancel = document.querySelector('.js-btn-cancel');
const newForm = document.querySelector('.js-new-form');
//31-12-23
const linkNewFormElement= document.querySelector('.item');


buttonCancel.addEventListener('click', (event)=> {
  newForm.classList.add('collapsed');
  // const resetForm = document.querySelector('.js-form-reset');
  // resetForm.innerHTML = "holahola";
  // console.log(event.currentTarget);
})

function showNewCatForm() {
  newForm.classList.remove('collapsed');
}
function hideNewCatForm() {
  newForm.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newForm.classList.contains('collapsed')) {
    console.log(showNewCatForm);
    return showNewCatForm();
  } else {
    console.log( hideNewCatForm);
    return hideNewCatForm()
  }
}

linkNewFormElement.addEventListener('click', handleClickNewCatForm);

//lección5-ejercicio 2:formulario

function addNewKitten(event) {
  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMessageError.innerHTML = '¡Uy! parece que has olvidado algo';
  }
}

buttonAdd.addEventListener('click', (addNewKitten));

//ejercicio3

// list.innerHTML= kittenOne +kittenTwo + kittenThree;

function renderKitten(url, desc, name, race) {
  return `<li class="card">
<article> 
<img
  class="card_img"
  src="${url}"
  alt="sphynx-cat"/>
<h3 class="card_title">${name} </h3>
<h4 class="card_race"> ${race}</h4>
<p class="card_description"> ${desc} </p>
</article>
</li>`;
}

const kittenOne = renderKitten (kittenOneImage, kittenOneDesc, mayus1, kittenOneRace);
const kittenTwo = renderKitten (kittenTwoImage, kittenTwoDesc, mayus2, kittenTwoRace);
const kittenThree = renderKitten (kittenThreeImage, kittenThreeDesc, mayus3, kittenThreeRace);

inputSearch.addEventListener('input',(event)=> {

  if (descrSearchText===kittenOneDesc) {
    event.preventDefault();
    list.innerHTML='';
    return list.innerHTML+= kittenOne;
  }
})
// if( kittenOneDesc.includes(descrSearchText)) {
//   list.innerHTML='';
//   list.innerHTML+= kittenOne;
// } else if( kittenTwoDesc.includes(descrSearchText) ) {
//   list.innerHTML='';
//   list.innerHTML+= kittenTwo;
// } else if( kittenThreeDesc.includes(descrSearchText) ) {
//   list.innerHTML='';
//   list.innerHTML+= kittenTwo;
// } 

