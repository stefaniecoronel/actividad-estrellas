
let reviewsList = document.getElementById('lista')
let selectorUsuarios= document.getElementById('usuarios')

document.addEventListener('DOMContentLoaded', function(){
    let reviewsJSON = 'https://nataliasotelo.github.io/act-estrellas/estrellas.json'
    getJSONData(reviewsJSON).then(function(respObj){
        if(respObj.status=="ok"){
            console.log(respObj.data);
            showReviews(respObj.data);
            showUsers(respObj.data);
        }
    });
});

function showUsers(users){
    users.forEach((element)=>{
        selectorUsuarios.innerHTML+=
        `
        <option value="${element.list}">${element.name}</option>
        `
    }

    )
}



function showReviews(reviews){
   reviewsList.innerHTML = "";
   reviews.forEach( (element)=>{
    let stars = Number(element.numberrange)
    console.log(stars)
    let starRating =""
    if (stars<=1.2){
      starRating=`<i class="fa-solid fa-star checked"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      `
    } else if (stars>1.2 && stars<=1.7){
      starRating=`<i class="fa-solid fa-star checked"></i>
      <i class="fa-solid fa-star-half-stroke checked"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      `
    } else if (stars>1.7 && stars<=2.2){
      starRating=`<i class="fa-solid fa-star checked"></i>
      <i class="fa-solid fa-star checked"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      `
    } else if (stars>2.2 && stars<=2.7){
      starRating=`<i class="fa-solid fa-star checked"></i>
      <i class="fa-solid fa-star checked"></i>
      <i class="fa-regular fa-star-half-stroke checked"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      `
    } else if (stars>2.7 && stars<=3.2){
      starRating=`<i class="fa fa-star checked"></i>
      <i class="fa-solid fa-star checked"></i>
      <i class="fa-solid fa-star checked"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      `
    } else if (stars>3.2 && stars<= 3.7){
      starRating=`<i class="fa-solid fa-star checked"></i>
      <i class="fa-solid fa-star checked"></i>
      <i class="fa-solid fa-star checked"></i>
      <i class="fa-regular fa-star-half-stroke checked"></i>
      <i class="fa-regular fa-star"></i>
      `
    } else if (stars>3.7 && stars<= 4.2){
      starRating=`<i class="fa-solid fa-star checked"></i>
      <i class="fa-solid fa-star checked"></i>
      <i class="fa-solid fa-star checked"></i>
      <i class="fa-solid fa-star checked"></i>
      <i class="fa-regular fa-star"></i>
      `
    } else if (stars>4.2 && stars<= 4.7){
      starRating=`<i class="fa-solid fa-star checked"></i>
      <i class="fa-solid fa-star checked"></i>
      <i class="fa-solid fa-star checked"></i>
      <i class="fa-solid fa-star checked"></i>
      <i class="fa-regular fa-star-half-stroke checked"></i>
      `
    } else if (stars>4.7){
      starRating=`<i class="fa-solid fa-star checked"></i>
      <i class="fa-solid fa-star checked"></i>
      <i class="fa-solid fa-star checked"></i>
      <i class="fa-solid fa-star checked"></i>
      <i class="fa-solid fa-star checked"></i>
      `
    }
    reviewsList.innerHTML += `  
    <a href="#" class="list-group-item list-group-item-action custom-color">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">${element.name}</h5>
        <small class="text-muted">${starRating}</small> 
      </div>
      <p class="mb-1">${element.company}</p>
    </a>
    `
   }
  )
}


let getJSONData = function(url){
    let result = {};
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        return result;
    });
};