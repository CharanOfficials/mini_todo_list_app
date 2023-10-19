let mainListDisplay = false

document.addEventListener('click',(e)=>{
    // To display the menu list
    if(e.target.id === "main-menu" && !mainListDisplay){
        showMenuList()
        mainListDisplay = true
    }
    // To hide the menu list
    else if(e.target.id === "main-menu" && mainListDisplay){
        hideMenuList()
        mainListDisplay = false
    }
})

function showMenuList() {
    const mainMenuAnimation = document.getElementById("main-menu");
    const mainListAnimation = document.getElementById("menu-list");

    mainMenuAnimation.classList.add("menu_show_animation");
    mainListAnimation.classList.add("menu_list_animation_show");

    mainListAnimation.addEventListener("animationend", () => {
        mainListAnimation.classList.remove("menu_list_animation_show")
    })
    mainMenuAnimation.addEventListener("animationend", () => {
        mainMenuAnimation.classList.remove("menu_show_animation")
    })
    mainMenuAnimation.style.transform = 'rotate(180deg)'
    mainListAnimation.style.height = '100%'
}
function hideMenuList(){
    const mainMenuAnimation = document.getElementById("main-menu");
    const mainListAnimation = document.getElementById("menu-list");

    mainMenuAnimation.classList.add("menu_hide_animation");
    mainListAnimation.classList.add("menu_list_animation_hide");

    mainListAnimation.addEventListener("animationend", () => {
        mainListAnimation.classList.remove("menu_list_animation_hide")
    })
    mainMenuAnimation.addEventListener("animationend", () => {
        mainMenuAnimation.classList.remove("menu_hide_animation")
    })

    mainMenuAnimation.style.transform = 'rotate(0deg)'
    mainListAnimation.style.height = '0%'
}
  