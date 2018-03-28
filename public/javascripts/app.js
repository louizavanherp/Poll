var url = '/';
var primus = Primus.connect(url, {
    reconnect: {
        max: Infinity,
        min: 500,
        retries: 10
    }
});

primus.on('data', function(data){
    var title = document.querySelector(".pollQuestion");
    //Nakijken of titel bestaat op pagina
    if(title){
        console.log(data);
    }
});

//klikken -> data poll verplaatsen
document.querySelector('').addEventListener("click", function(e){
    primus.write({ 
        question: document.querySelector('pollQuestion'), 
        answer1: document.querySelector('answer1'),
        answer2: document.querySelector('answer2'),
        });
    e.preventDefault();
});