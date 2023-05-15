//закрытие и открытие модального окна
document.getElementById("button-modal-open").addEventListener("click", function(){
    document.getElementById("my-modal").classList.add("open")
    // body.style.position="fixed";
})
document.getElementById("button-modal-close").addEventListener("click", function(){
    document.getElementById("my-modal").classList.remove("open")
})
document.getElementById("all-close").addEventListener("click", function(){
    
    document.getElementById("my-modal").classList.remove("open");
    
})
const body = document.getElementById("body");
const form = document.getElementById("regform1");//форма регистрации
const submitBtn = document.getElementById("submit-button");//кнопка отправки данных формы
//кнопка показа пароля
const eyeBtn = document.getElementById("eye"); //кнопка скрытия пароля
const passInput = document.getElementById("pass-id");//пароль
const formInput = document.querySelectorAll(".email-enter");


eyeBtn.addEventListener("pointerdown", function(){
    passInput.setAttribute('type','text');
})
eyeBtn.addEventListener("pointerup", function(){
    passInput.setAttribute('type','password');
})
// получение данных из формы

form.addEventListener('submit',function(event){
    event.preventDefault();
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());
    console.log(values);
})
//фокус формы и текст ошибки

// formInput.addEventListener("blur", function(){
//     if(formInput.value == ""){
//         formInput.setCustomValidity('Введите что-нибудь!');
//         formInput.reportValidity();
        
//     } else{
//         formInput.setCustomValidity('');
//     }
//     formInput.blur();
// })
// function qwe(e){
//     console.log(e)
//     let input = e.target;
//     // console.log(input);
//     if(input.value == ""){
//         console.log("sdsfsdf");
//         input.setCustomValidity('Введите что-нибудь!');
//         input.reportValidity();    

//     } else{
//          input.setCustomValidity('');
//     }
    
//     input.removeEventListener("blur", qwe);
    
    
//     // добавить потом input.addEventListener("blur", qwe);
    
// }
// formInput.forEach(input => {
//     console.log(input);
//     input.addEventListener("blur", qwe);
//     // добавить потом input.removeEventListener("blur", qwe);
// }
// )
// console.log(input);
//teest