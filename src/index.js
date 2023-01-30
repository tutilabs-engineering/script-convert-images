var fs = require('fs');
var path = require('path');
var { optimizationImage } = require('./SharpMiddleware')

async function execute(){

var domain = require('domain').create();
console.log(path.resolve(__dirname, "..", 'uploads','layout_extracao'));

fs.readdir(path.resolve(__dirname, "..", 'uploads','layout_extracao'),async function(error,files){
//    console.log(files);
   await optimizationImage(files)
});

domain.on("error",function(erros){
   console.log(erros);
});


}

execute()