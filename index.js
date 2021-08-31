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
    // clean serach result and single prvious data 
    const singleMeal =document.getElementById('singleMeal');
    const cardItem =document.getElementById('cardItem');
    singleMeal.textContent='';
    cardItem.textContent ='';
    meal.map(item=>{
        const div = document.createElement('div');
        // div.classList.add('col');
        div.innerHTML = `
        <div onClick="loadSingleMeal(${item.idMeal})" class="col">
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
  
}


loadSingleMeal = (id)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=> displaySingleMeal(data?.meals[0]))
}


displaySingleMeal=meal=>{
    const singleMeal =document.getElementById('singleMeal');
        singleMeal.textContent='';
        const div = document.createElement('div');
        div.classList.add('card')

        div.innerHTML = `
            <img height= '350px' src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body my-3">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
                <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
        `;
        singleMeal.appendChild(div)
console.log(meal);
}