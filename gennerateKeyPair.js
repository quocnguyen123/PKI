var keypair = require('keypair');
var fs = require("fs");

var pair = keypair();

fs.writeFile("./privateKey.txt", pair.private, function(err) {
    if(err) {
      console.log(err);
      return;
    }
    console.log("Generate private key sucessfully");
});

fs.writeFile("./publicKey.txt", pair.public, function(err) {
  if(err) {
    console.log(err);
    return;
  }
  console.log("Generate public key sucessfully");
}); 

