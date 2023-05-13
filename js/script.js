//закрытие и открытие модального окна
document.getElementById("button-modal-open").addEventListener("click", function(){
    document.getElementById("my-modal").classList.add("open")
})
document.getElementById("button-modal-close").addEventListener("click", function(){
    document.getElementById("my-modal").classList.remove("open")
})
document.getElementById("all-close").addEventListener("click", function(){
    
    document.getElementById("my-modal").classList.remove("open");
    
})

const submitBtn = document.getElementById("submit-button");
//кнопка показа пароля
const eyeBtn = document.getElementById("eye");
const passInput = document.getElementById("pass-id");
// eyeBtn.addEventListener("click", function(){
//     if(passInput.getAttribute('type') === 'password') {
//         passInput.setAttribute('type','text'); 
//     } else {
//         passInput.setAttribute('type','password');
//     }
// }
// )
eyeBtn.addEventListener("pointerdown", function(){
    passInput.setAttribute('type','text');
})
eyeBtn.addEventListener("pointerup", function(){
    passInput.setAttribute('type','password');
})
// получение данных из формы
const form = document.getElementById("regform1");

form.addEventListener('submit',function(event){
    event.preventDefault();
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());
    console.log(values);
})