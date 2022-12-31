const query = document.querySelector('#query');
// const search = document.querySelector('#search');

function search(){
    var url = 'https://www.google.com/search?q='+query.value;
    window.open(url,'_self');

}
function logout(){
    window.alert("Logging-Out");
}
const back = document.querySelector('.container');
const h1 = document.querySelector('h1');
const house = document.querySelector('i');

function black(){
   back.classList.toggle('dark');
   h1.classList.toggle('h1_dark');
   house.classList.toggle('house');
}