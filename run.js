var exec = require('child_process').exec;
var cmd = 'gitbook serve';

console.log("Running \""+cmd+"\"");

for(var i = 0; i < 1; i++){
  exec(cmd, function(error, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    if(error){
      exec(cmd, function(error, stdout, stderr) {
        console.log(stdout);
        if(error){
          exec(cmd, function(error, stdout, stderr) {
            console.log(stdout);
            if(error){
              exec(cmd, function(error, stdout, stderr) {
                console.log(stdout);
                if(error){
                  exec(cmd, function(error, stdout, stderr) {
                    console.log(stdout);
                    if(error){
                      exec(cmd, function(error, stdout, stderr) {
                        console.log(stdout);
                        if(error){

                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
}
