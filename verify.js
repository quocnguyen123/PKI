var fs = require("fs");
var crypto = require("crypto");

var signatedMessage = fs.readFileSync('./signatedMessage.txt').toString();
var publicKey = fs.readFileSync('./publicKey.txt').toString();

var message = signatedMessage.split("\n**")[0];
var signature = new Buffer(signatedMessage.split("\n**")[1], "base64");
try {
  var decryptedsignature = crypto.publicDecrypt(publicKey, signature).toString("utf8");
  if (decryptedsignature === message) {
    console.log("verified message");
  } else {
    console.log("fake message");
  }
} catch (error) {
  console.log("public key is incorrect");
}

