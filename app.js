let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = input.value;
    ul.appendChild(item);

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);

    input.value = "";

})

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        // let listItem = event.target.parentElement;
        // console.log(listItem);
        // listItem.remove();
        event.target.parentElement.remove();
        console.log("deleted");
    }
})

// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//     delBtn.addEventListener("click", function () {
//         let par = this.parentElement;
//         par.remove();
//     })
// }