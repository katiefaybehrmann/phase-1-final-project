function getClothes(genre){
    fetch(`http://localhost:3000/${genre}`)
      .then((res) => res.json())
      .then((clothingData) => clothingData.forEach(item => renderClothes(item)))
}

function renderClothes(){}