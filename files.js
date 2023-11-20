const fs = require('fs');


//reading files
fs.readFile('./docs/blog.txt', (err, data)=> {
if(err){
    console.log(err);
} console.log(data.toString());

}); 

console.log('last line of code');

// //writing files
 fs.writeFile('./docs/blog.txt', 'This is the new text', ()=>{
console.log('Your file has been written')
 })


//directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err)=>{
        if(err) {
            console.log(err);
        }
        console.log('Directory/folder has been created');
        });
        
} else{
    fs.rmdir('./assets', (err)=>{
        if(err) {
            console.log(err);
        }
        console.log('Directory/folder deleted');
        })
        
}

//deleting files
if (fs.existsSync('./docs/labrat.txt')) {
    fs.unlink('./docs/labrat.txt', (err)=> {
        if(err) {
            console.log(err)
        }
        console.log('Document has been deleted')
    }) 
}
else{
    console.log('Sorry, file doesnt exist or has been removed before')
}