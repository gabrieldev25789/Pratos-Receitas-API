const url = "https://dummyjson.com/recipes"

const plateInfos = document.querySelector("#plate-infos")

const imgContainer = document.querySelector("#img-container")

const prepModeContainer = document.querySelector("#prep-mode-info")
const openBtn = document.querySelector("#open-prep")

const extraInfosContainer = document.querySelector("#extra-infos-container")
extraInfosContainer.classList.add("hide")

async function consumirApi() {
    const divInfos = document.querySelector("#div-infos")

    try{

    const resposta =  await fetch(url)
    const dados = await resposta.json()
    console.log(dados)

    dados.recipes.forEach((recipe)=>{

        const button = document.createElement("button")
        button.classList.add("button-recipe")

        const nameRecipe = recipe.name
        button.innerText = nameRecipe
        
        const ingredientsName = recipe.ingredients
        const calories = recipe.caloriesPerServing
        const timePrep = recipe.prepTimeMinutes
        const img = recipe.image

        const instructions = recipe.instructions

        const nation = recipe.cuisine
        const rating = recipe.rating 
        const serving = recipe.servings
        const mealType = recipe.mealType 
        const imgCuisine = recipe.cuisine

        divInfos.appendChild(button)

        button.addEventListener("click", () =>{
            openBtn.classList.remove("hide")
            const buttons = divInfos.querySelectorAll(".button-recipe")
            buttons.forEach((el) => el.classList.remove("green"))
           
            button.classList.add("green")
            plateInfos.classList.remove("hide")
            plateInfos.innerHTML = ""
            showPlateInfos(nameRecipe, ingredientsName, calories, timePrep, img)
            prepModeContainer.innerHTML = ""
            instructionPrep(instructions)
            extraInfosContainer.innerHTML = ""
            extraInfosContainer.className = ""
            extraInfos(nation, rating, serving, mealType, imgCuisine)
        })
    })

    } catch(e){
        console.error(e)
    } finally{
    
    }
    }
    
consumirApi()


function showPlateInfos(plate, ingredients, calories, timePrep, img){
  
    const div = document.createElement("div")
    const ul = document.createElement("ul")

    const namePlate = document.createElement("h2")
    namePlate.id = "name-plate"

    const title = document.createElement("h3")
    title.id = "title-ingredient"
    title.textContent = "Ingredients:"

    const counterCalories = document.createElement("p")
    counterCalories.id = "counter-calories"
    counterCalories.textContent = `Amount of calories: ${calories} grams`

    const prepTime = document.createElement("p")
    prepTime.id = "time-prep"
    prepTime.textContent = `Preparation time: ${timePrep} minutes`

    div.classList.add("hide")
    
    ingredients.forEach((ingredient)=>{
        div.classList.add("div-plates")
        div.classList.remove("hide")

        ul.classList.add("ul-ingredient")

        const li = document.createElement("li")
        li.classList.add("li-ingredient")
        li.textContent = ingredient

        const foodImg = document.createElement("img")
        img.id = "food-img"
        foodImg.src = `${img}` 
        imgContainer.innerHTML = ""
        imgContainer.appendChild(foodImg)

        namePlate.textContent = plate

        div.appendChild(namePlate)
        div.appendChild(title)
        div.appendChild(ul)
        ul.appendChild(li)
        div.appendChild(counterCalories)
        div.appendChild(prepTime)
        div.appendChild(imgContainer)
        plateInfos.appendChild(div)
    })
}

function instructionPrep(instructions){
    const instructionsInfo = document.createElement("p")
    instructionsInfo.id = "instructions-info"
    instructionsInfo.textContent = `Preparation mode: ${instructions}`

    prepModeContainer.appendChild(instructionsInfo)
    console.log(instructionsInfo)
}

openBtn.addEventListener("click", () =>{
    prepModeContainer.classList.toggle("hide")
    if(!prepModeContainer.classList.contains("hide")){
        openBtn.innerHTML = "Close Prep mode"
        openBtn.classList.add("red")
    } else{
        openBtn.innerHTML = "Open Prep mode"
        openBtn.classList.remove("red")
    }
})

function extraInfos(cuisine, rating, serving, mealType, id){
    extraInfosContainer.classList.add(id)

    const imgCuisine = document.createElement("img")
    imgCuisine.src = `./img/${id}.png`
    imgCuisine.classList.add("img-cuisine")
    console.log(imgCuisine)

    const ul = document.createElement("ul")
    ul.id = "extra-infos-ul"

    const nation = document.createElement("li")
    nation.classList.add("extra-info-li")
    nation.textContent = `Cuisine type: ${cuisine}`
    console.log(nation.textContent)

    const ratingRecipe = document.createElement("li")
    ratingRecipe.classList.add("extra-info-li")
    ratingRecipe.textContent = `rating: ${rating}`

    const servingRecipe = document.createElement("li")
    servingRecipe.classList.add("extra-info-li")
    servingRecipe.textContent = `serves: ${serving} people`

    const mealTypeRecipe = document.createElement("li")
    mealTypeRecipe.classList.add("extra-info-li")

    mealType.forEach((type)=>{
        mealTypeRecipe.textContent = `Type food: ${type}`
    })

    ul.appendChild(nation)
    ul.appendChild(ratingRecipe)
    ul.appendChild(servingRecipe)
    ul.appendChild(mealTypeRecipe)
    extraInfosContainer.appendChild(ul)
    extraInfosContainer.appendChild(imgCuisine)
}
