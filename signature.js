var fs = require("fs");
var crypto = require("crypto");

var privateKey = fs.readFileSync('./privateKey.txt').toString();
var message = fs.readFileSync('message.txt');
var signature = crypto.privateEncrypt(privateKey, message).toString("base64");

var signatedMessage = message.toString() +"\n**" + signature;
fs.writeFile('./signatedMessage.txt', signatedMessage, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Signated to the message sucessfully");
});
