const tabItems = document.querySelectorAll( ".tabheader__item")
const tabContent = document.querySelectorAll(".tabcontent")
const  tabMain = document.querySelector( ".tabheader__items")


const hideContent = () => {
    tabContent.forEach((item) => {
        item.style.display = "none"
    })
    tabItems.forEach((item)  => {
        item.classList.remove("tabheader__item_active")
    })
}



const showcontent = (i = 0 ) =>{
    tabContent[i].style.display = "block"
    tabItems[i].classList.add("tabheader__item_active")
}
hideContent()
showcontent()

tabMain.addEventListener("click",(event) => {
    const target = event.target
    if (target.classList.contains("tabheader__item")){
    tabItems.forEach((Element, idx ) => {
        if(target === Element){
            hideContent()
            showcontent(idx)
        }
    })
}
})

//2
const modal = document.querySelector('.modal')
const btnOpen = document.querySelector('.btn_white')
const btnCLose = document.querySelector('.modal__close')


console.log(modalDiolog)
function OpenModal(){
    modal.classList.add('show')
    document.body.style.overflow = 'hidden'
}
function CloseModal(){
    modal.classList.remove('show')
    document.body.style.overflow = 'auto'
}

btnOpen.addEventListener('click',OpenModal)
btnCLose.addEventListener('click',CloseModal)

modal.addEventListener('click',(e)=>{
    if(e.target.classList.contains('modal')){
        CloseModal()
    }   
})
setTimeout(OpenModal,60000)