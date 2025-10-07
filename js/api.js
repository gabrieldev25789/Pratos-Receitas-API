const url = "https://dummyjson.com/recipes"

const plateInfos = document.querySelector("#plate-infos")

const imgContainer = document.querySelector("#img-container")

const extraInfosContainer = document.querySelector("#extra-infos-container")
const openBtn = document.querySelector("#open-prep")

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

        divInfos.appendChild(button)

        button.addEventListener("click", () =>{
           const buttons = divInfos.querySelectorAll(".button-recipe")
           buttons.forEach((el) => el.classList.remove("green"))
           
            button.classList.add("green")
            plateInfos.classList.remove("hide")
            plateInfos.innerHTML = ""
            showPlateInfos(nameRecipe, ingredientsName, calories, timePrep, img)
            extraInfosContainer.innerHTML = ""
            instructionPrep(instructions)
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

    extraInfosContainer.appendChild(instructionsInfo)
    document.body.appendChild(extraInfosContainer)

    console.log(instructionsInfo)
}

openBtn.addEventListener("click", () =>{
    extraInfosContainer.classList.toggle("hide")
    if(!extraInfosContainer.classList.contains("hide")){
        openBtn.innerHTML = "Close Prep mode"
    } else{
        openBtn.innerHTML = "Open Prep mode"
    }
})
