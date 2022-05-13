import "./index.scss"
import png from "./assets/1.png"
const div = document.getElementById("app")

div.innerHTML = `
<img src="${png}">
`

const button = document.createElement("button")
div.appendChild(button)

button.innerText = "懒加载"

button.onclick = () => {
    console.log("123");
    const promise1 = import("./lazy.js")
    promise1.then((module) => {
        const fn = module.default
        fn()
    }, () => {
        console.log("懒加载错误");
    })
}