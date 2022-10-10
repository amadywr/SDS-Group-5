const buttons = document.querySelectorAll(".rc-poi-buttons")
const clear = document.querySelector("#btn-clear")
const search = document.querySelector("#btn-search")
const ul = document.querySelector(".rc-list-selected")

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let doesExists = false
    const lis = ul.children

    for (let i = 0; i < lis.length; i++) {
      if (e.target.innerText === lis[i].innerText) {
        console.log("already exists", i)
        doesExists = true
      }
    }

    if (doesExists === false) {
      const li = document.createElement("li")
      li.innerText = e.target.innerText
      ul.appendChild(li)
    }
  })
})

clear.addEventListener("click", () => {
  ul.innerHTML = ""
})

search.addEventListener("click", () => {
  for (let i = 0; i < ul.children.length; i++) {
    console.log(ul.children[i].innerText)
  }
})
