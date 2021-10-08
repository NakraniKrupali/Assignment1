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
   console.log("\n Enter 1. for Create  Directory ");
   console.log("\n Enter 2. for Remove Directory ");
   console.log("\n Enter 3. for Write File");
   console.log("\n Enter 4. for Read File..");
   console.log("\n Enter 5. for Delete a text file");
   console.log("\n Enter 6. for Append Data To file");
   console.log("\n Enter 7. for Update / Replace file with new data ");
   console.log("\n Enter 8. for Rename a text file");
   console.log("\n Enter 0. for exit");
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
  rl.question("Name Of The Directory :-",(ans) => {
     dirname = ans;
     create_Dir();
  });
};

var repeat = () => {
  instruction();
  start();
};

console.log("Hello!,Welcome To This Game..");
repeat();