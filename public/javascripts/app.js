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
    var answer1 = document.querySelector(".answer1");
    var answer2 = document.querySelector(".answer2");
    var result1 = document.querySelector(".result1");
    var result2 = document.querySelector('.result2');
    //Nakijken of titel bestaat op pagina
    if(title){
        title.innerHTML = data.question;
        answer1.innerHTML = data.answer1;
        answer2.innerHTML = data.answer2;
        result1.innerHTML = data.click1;
        result2.innerHTML = data.click2;
    }
});

//submitBtn only exists on createpoll page --> check if exists
if(document.querySelector('.submitBtn')){
    //klikken op submit -> data poll verplaatsen
    document.querySelector('.submitBtn').addEventListener("click", function(e){
    console.log('geklikt');
    primus.write({ 
        click1:0,
        click2:0,
        question: document.querySelector('.question').value, 
        answer1: document.querySelector('.answer1').value,
        answer2: document.querySelector('.answer2').value,
        });
    e.preventDefault();
});

}

//answer01 only exists on index page --> check if exists
if(document.querySelector('a.answer1')){
//klikken op poll 1 -> optellen
document.querySelector('.answer1').addEventListener("click", function(e){
    console.log('geklikt');
    primus.write({ 
            click1: parseInt(document.querySelector('.result1').innerHTML)+1,
            click2: parseInt(document.querySelector('.result2').innerHTML),
            //overrite question and answers from before
            question: document.querySelector('.titlePoll').innerHTML, 
            answer1: document.querySelector('.answer1').innerHTML,
            answer2: document.querySelector('.answer2').innerHTML,
        });
    e.preventDefault();
});
}

//answer02 only exists on index page --> check if exists
if(document.querySelector('a.answer2')){
    //klikken op poll 2 -> optellen
    document.querySelector('.answer2').addEventListener("click", function(e){
        console.log('geklikt');
        primus.write({ 
                click1: parseInt(document.querySelector('.result1').innerHTML),
                click2: parseInt(document.querySelector('.result2').innerHTML)+1,
                //overrite question and answers from before
                question: document.querySelector('.titlePoll').innerHTML, 
                answer1: document.querySelector('.answer1').innerHTML,
                answer2: document.querySelector('.answer2').innerHTML,
            });
        e.preventDefault();
    });
    }