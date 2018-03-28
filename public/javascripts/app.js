var url = '/';
var primus = Primus.connect(url, {
    reconnect: {
        max: Infinity,
        min: 500,
        retries: 10
    }
});

primus.on('data', function(data){
    var title = document.querySelector(".titlePoll");
    var answer1 = document.querySelector(".answer01");
    var answer2 = document.querySelector(".answer02");
    //Nakijken of titel bestaat op pagina
    if(title){
        title.innerHTML = data.question;
        answer1.innerHTML = data.answer1;
        answer2.innerHTML = data.answer2;
    }
});

//klikken -> data poll verplaatsen
document.querySelector('.submitBtn').addEventListener("click", function(e){
    console.log('geklikt');
    primus.write({ 
        question: document.querySelector('.pollQuestion').value, 
        answer1: document.querySelector('.answer1').value,
        answer2: document.querySelector('.answer2').value,
        });
    e.preventDefault();
});