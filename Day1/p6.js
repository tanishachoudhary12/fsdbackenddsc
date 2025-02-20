const fs=require('fs');
const write=(data)=>{
    fs.writeFile("./mydir/data.txt",data,(err)=>{
        if(err)
            console.log("Error writing file",err);
        else
        console.log("File written successfully");
    });
}
write("Tanisha");
   