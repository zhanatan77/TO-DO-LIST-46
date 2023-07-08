const input = document.querySelector(".text-input")
const addBtn = document.querySelector(".btn-success")
const removeBtn = document.querySelector(".btn-danger")
const ul = document.querySelector(".list-group")
const bg = document.querySelector(".bg-info")
const h1 = document.querySelector(".text-center")

bg.addEventListener("click",()=>{
    bg.style.background = randomColor()
})

addBtn.addEventListener("click", ()=>{
    addList()
    bg.style.background = randomColor()
    h1.style.color = randomColor()
})

input.addEventListener("keyup", (e)=>{
    if(e.key === "Enter"){
        addList()
    }

})

removeBtn.addEventListener("click", ()=>{
    ul.innerHTML = ""
})

function addList () {
    if( input.value.length !== 0){
        ul.innerHTML += `<li class = "list-group-item"> ${input.value} </li>`
        input.value = ""
    }
}
function randomColor() {
    let color = "#"
    for (let i = 1; i < 7; i++)
        color += Math.floor(Math.random() * 10)
    return color
}


// bg.addEventListener("click",()=>{
//     addList()
//
// })
// addBtn.addEventListener("click", ()=>{
//     addList()
// })
//
// input.addEventListener("keyup", (e)=>{
//     if(e.key === "Enter"){
//         addList()
//     }
//
// })
//
// function addList () {
//     if( input.value.length !== 0){
//         ul.innerHTML += <li class = "list-group-item" > ${input.value} </li>
//         input.value = ""
//     }
// }
//
// removeBtn.addEventListener("click", ()=>{
//     ul.innerHTML = ""
// })
