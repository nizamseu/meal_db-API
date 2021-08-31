searchMeal = ()=>{
    const inputField =document.getElementById('inputField');
    const inputValue = inputField.value;


    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
    
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayMeal(data.meals))

    inputField.value=''
  
}

displayMeal= (meal)=>{
    const cardItem =document.getElementById('cardItem');
console.log(meal);
    meal.map(item=>{
        const div = document.createElement('div');
        // div.classList.add('col');
        div.innerHTML = `
        <div class="col">
              <div class="card">
                <img src="${item.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${item.strMeal}</h5>
                  <p class="card-text">${item.strInstructions.slice(0,200)}</p>
                </div>
              </div>
        </div>
        `;
        cardItem.appendChild(div)
    })
    console.log(meal);
}