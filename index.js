const genreSelect = document.querySelector("#genres")
let itemList = document.querySelector("#item-list")

dropDown()

function dropDown(){
  genreSelect.addEventListener('change', function (e) {
    e.preventDefault();
    getClothes(e.target.value)
  })
}


function buttonMaker(parent, x){
  let btn = document.createElement("button")
  btn.innerHTML =`<button class="boo-btn" >BOO!</button>`
  parent.appendChild(btn)

  btn.addEventListener("click", () =>{
    parent.removeChild(x)
    parent.removeChild(btn)
  }
  
  )
}


function getClothes(genre) {
  fetch(`http://localhost:3000/${genre}`)
    .then((res) => res.json())
    .then((clothingData) => clothingData.forEach(item =>
      renderClothes(item)
    )
    )
}

function renderClothes(item) {
  let card = document.createElement('li')
  
  card.className = "card"
  card.innerHTML = `
      <h2>${item.company}</h2>
      <h2>${item.price}</h2>
      <img src=${item.imgage} class="image-avatar" height="250" width="250">
      <p class = "labor-score">Labor Score: ${item.laborScore}</p>
      <p class="enviro-score">Environment Score: ${item.environmentScore}</p>
      `
  itemList.appendChild(card)
  buttonMaker(itemList, card);

  card.addEventListener("mouseover", ()=>
  card.innerHTML = `${item.information}`)

  card.addEventListener("mouseout", ()=>
  card.innerHTML = `
  <h2>${item.company}</h2>
  <h2>${item.price}</h2>
  <img src=${item.imgage} class="image-avatar" height="250" width="250">
  <p class = "labor-score">Labor Score: ${item.laborScore}</p>
  <p class="enviro-score">Environment Score: ${item.environmentScore}</p>`
  )

 
}




