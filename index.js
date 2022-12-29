function register(){
    const box = document.querySelector('.container');
    const box1 = document.querySelector('.container1');
    const log = document.querySelector('#log');
    box.style.display = 'none';
    box1.style.display = 'block';
    log.style.right = '0.2em';
    
    
}
function login(){
    const box = document.querySelector('.container');
    const box1 = document.querySelector('.container1');
    // const span = document.querySelector('#span');
    const reg = document.querySelector('#reg');
    box.style.display = 'block';
    reg.style.right = '1.3em';
    box1.style.display = 'none';
} 

// document.getElementById('login_form').addEventListener('submit' , (e) =>{
// e.preventDefault();
// });

