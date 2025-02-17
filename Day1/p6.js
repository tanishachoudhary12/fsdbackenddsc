const fs=require('fs');
const write=(data)=>{
    fs.writeFile("./data.txt",data,(err)=>{
        if(err)
            console.log("Error writing file",err);
        else
        console.log("File written successfully");
    });
}
write("I am new data");
   