exports.kickstart = function(server){

    console.log('we zijn gelinkt');

    const Primus = require('primus');
    let primus = new Primus(server,{});

    primus.on('connection', function(spark){
        console.log('spark connected');

        spark.on('data', function(data){
            primus.write(data);
        });
    });
}