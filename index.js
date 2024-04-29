


let container = document.getElementById("container");

let selectTag = document.getElementById("select");

selectTag.addEventListener('change',function(){



    console.log(selectTag.value)

    fetchData(selectTag.value)
})

async function fetchData(order) {
let API_LINK="https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries";
   
if(order != undefined){
API_LINK+="?sort=population&order="   +order;


}

try{
    let res = await fetch(API_LINK)
  
    let data = await res.json()
     console.log(data.data)

    showData(data.data)

}catch (error){
    console.log(error)
}





}
fetchData()

function showData(data){
data.forEach((element) =>{
let countrydiv = document.createElement("div")
countrydiv.className="countrydiv"

let rank =document.createElement("h4")
rank.innerHTML = element.Rank;

let country = document.createElement("h3")
country.innerHTML = element.country

let population = document.createElement("p")
population.innerHTML = element.population;
 countrydiv.append(rank,country,population)
container.append(countrydiv)
})

}