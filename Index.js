const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fs = require("fs");

var dirname = "";
var filename = "";
var content = "";

var instruction = () => {
  console.log("\n====================== MAIN MENU ======================\n");
   console.log("Enter 1. for Create  Directory ");
   console.log("Enter 2. for Remove Directory ");
   console.log("Enter 3. for Write File");
   console.log("Enter 4. for Read File..");
   console.log("Enter 5. for Delete a text file");
   console.log("Enter 6. for Append Data To file");
   console.log("Enter 7. for Update / Replace file with new data ");
   console.log("Enter 8. for Rename a text file");
   console.log("Enter 0. for Exit");
};

var start = () => {
   rl.question("Enter Your Choice : ",(answer) => {
    if(answer === "1"){
      createDirWizard();
    }
    else if(answer === "2"){
      removeDirWizard();
    }
    else if(answer === "3"){
      writeFileWizard();
    }
    else if(answer === "4"){
      readFileWizard();
    }
    else if(answer === "5"){
      deleteFileWizard();
    }
    else if(answer === "6"){
      appendFileWizard();
    }
    else if(answer === "7"){
      replaceFileWizard();
    }
    else if(answer === "8"){
      renameFileWizard();
    }
    else if(answer === "0"){
      rl.close()
    }
  });
};

var createDirWizard = () => {
  console.log("\n Welcome to the file Creation Wizard");
  rl.question("Name Of The Directory : ",(ans) => {
     dirname = ans;
     create_Dir();
  });
};

var create_Dir = () => {
   fs.mkdir(dirname,(err) => {
      if(err){
        console.log(err);
      }else{
        console.log(dirname +" Directory Created SuccessFully..." );
      }
      repeat();
   });
};

var removeDirWizard = () => {
  rl.question("Enter Directory Name : ",(ans) => {
    dirname = ans;
    removeDir();
  })
};

var removeDir = () => {
   fs.rmdir(dirname,(err) => {
      if(err){
        console.log(err);
      }else{
        console.log(dirname + " Directory Removed Successfully...");
      }
      repeat();
   });
};

var writeFileWizard = () => {
  rl.question("Enter File Name : ",(ans) => {
      filename = ans;
      rl.question("Enter File Content : ",(ans) => {
         content = ans;
         writeFileData();
      });
  });
};

var writeFileData = () => {
   fs.writeFile(filename + ".txt",content,(err) => {
      if(err){
        console.log(err);
      }
      else
      {
        console.log(filename + ".txt File Created SuccessFully...");
      }
      repeat();
   });
};

var readFileWizard = () => {
   rl.question("Enter File Name : ",(ans) => {
      filename = ans;
      fs.readFile(filename + ".txt","utf8",(err,result) => {
         if(err){
            console.log(err);
         }else{
           console.log("\n=========== " + filename + ".txt" + " ===========\n)
            console.log(result);
         }
         repeat();
      });
   });
};

var deleteFileWizard = () => {
   rl.question("Enter File Name : ",(ans) => {
     fs.unlink(ans + ".txt",(err) => {
         if(err){
              console.log(err);
         }else{
              console.log(ans +".txt" + " File Deleted SuccessFully....");
         }
         repeat();
     });
   });
};

var appendFileWizard = () => {
  rl.question("Enter File Name  : ",(ans) => {
     filename = ans;
     rl.question("Enter Content :",(ans) => {
        content = ans;
        fs.appendFile(filename + ".txt",content,(err) => {
          if(err){
             console.log(err);
          }else{
             console.log(filename +" File Appended Successfully..");
          }
          repeat();
        });
     });
  });
};

var replaceFileWizard = () => {
    rl.question("Enter Your File Name : ",(ans) => {
       filename = ans;
       rl.question("Enter Content Of Replace : ",(ans) => {
         content = ans;
         rl.question("Enter New Content To Replace : ",(ans) => {
           const replace_Str = ans;
           fs.readFile(filename + ".txt","utf8",(err,data) => {
              if(err){
                 console.log(err);
                 repeat();
              }else{
                const res = data.replace(content,replace_Str);
                fs.writeFile(filename + ".txt",res,(err) => {
                  if(err){
                      console.log(err);
                  }else{
                     console.log(filename + " File Updated / Replaced SuccessFully...");
                  }
                  repeat();
                });
              }
           });
         });
       });
    });
};

var renameFileWizard = () => {
   rl.question("Enter Old File Name : ",(ans) => {
     var oldFile = ans;
     rl.question("Enter New File Name : ",(ans) => {
       fs.rename(oldFile + ".txt",ans + ".txt",(err) => {
          if(err){
             console.log(err);
          }else{
             console.log(ans + ".txt File Renamed SuccessFully ...");
          }
          repeat();
       }); 
     });
   });
};

var repeat = () => {
  instruction();
  start();
};

console.log("Hello!,Welcome To This Game..");
repeat();