const url = "https://dummyjson.com/recipes"

const plateInfos = document.querySelector("#plate-infos")

async function consumirApi() {
    const divInfos = document.querySelector("#div-infos")

    try{

    const resposta =  await fetch(url)
    const dados = await resposta.json()

    dados.recipes.forEach((receita)=>{

        const button = document.createElement("button")
        button.classList.add("button-receita")

        const nomeReceita = receita.name
        button.innerText = nomeReceita
        button.id = receita.id

        divInfos.appendChild(button)

        button.addEventListener("click", () =>{
            console.log(button.id)

           const buttons = divInfos.querySelectorAll(".button-receita")
           buttons.forEach((el) => el.classList.remove("green"))
           
            button.classList.add("green")
            plateInfos.classList.remove("hide")
            showPlateInfos(button.id, nomeReceita, receita.ingredients)
        })
    })

    } catch(e){
        console.error(e)
    } finally{
    
    }
    }
    
consumirApi()

function showPlateInfos(id, prato, ingredientes){
  
    const div = document.createElement("div")
    const ul = document.createElement("ul")

        div.classList.add("hide")
    
    ingredientes.forEach((ingredient)=>{
        div.classList.add("div-plates")
        div.classList.remove("hide")

        ul.classList.add("ul-ingredient")

        const li = document.createElement("li")
        li.classList.add("li-ingredient")
        li.textContent = ingredient

        plateInfos.appendChild(div)
        div.appendChild(ul)
        ul.appendChild(li)

    })
}

