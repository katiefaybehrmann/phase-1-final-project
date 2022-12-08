function getClothes(genre){
    fetch(`http://localhost:3000/${genre}`)
      .then((res) => res.json())
      .then((clothingData) => clothingData.forEach(item => renderClothes(item)))
}

function renderClothes(item){
    let card = document.createElement('li')
    card.className = "card"
    card.innerHTML = `
      <h2>"${item.company}"</h2>
      <h2>"${item.price}"</h2>
      <img src="${item.image}" class="image-avatar">
      <p>Labor Score: ${item.laborScore}</p>
      <p>Environment Score: ${item.environmentScore}</p>
      <button class="like-btn" id="${item.id}">Like ❤️</button>
      `
    document.querySelector("#collections").appendChild(card)
}