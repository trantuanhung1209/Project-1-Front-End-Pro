const buttonMobile = document.querySelector(".header__menu-mobile");

if (buttonMobile) {
    const menu = document.querySelector(".header .header__menu");
    buttonMobile.addEventListener("click", () => {
        menu.setAttribute("show", "yes");
    })

    const overlay = document.querySelector(".header__menu--overlay");
    overlay.addEventListener("click", () => {
        menu.removeAttribute("show");
    })
}


const listUser = [
    "Tran Tuan Hung",
    "Nguyen Van A",
    "Nguyen Van B",
    "Le Van C",
    "Hoang Van D",
]

const input = document.querySelector(".header__form input");
const suggest = document.querySelector(".header__form--suggest");
const ulElement = suggest.querySelector("ul");
input.addEventListener("keyup", () => {
    let filterUser = [];
    if(input.value) {
        filterUser = listUser.filter(user => user.toLowerCase().includes(input.value));
        console.log(filterUser)
    }

    if(filterUser.length > 0) {
        suggest.setAttribute("show","yes");
        let listLi = filterUser.map(user => {
            return `<li>${user}</li>`
        })
        ulElement.innerHTML = listLi.join("");
    }else {
        suggest.setAttribute("show","");
        ulElement.innerHTML = ``;
    }
})