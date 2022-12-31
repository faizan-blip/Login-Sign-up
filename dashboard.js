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


function black(){
   back.classList.toggle('dark');

}