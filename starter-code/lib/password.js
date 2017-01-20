console.log("///Password///");

var goodPsswd = "1234567890";
var badPsswd = "1123456";

var noRepeatChar = function (password) {
  var arrayPass = _.split(password, "");
  var checkPass = _.uniq(arrayPass);
  if (arrayPass.length === checkPass.length) {
    return true;
  } else {
    return false;
  }
};

console.log("the goodPsswd password is "+noRepeatChar(goodPsswd));
console.log("the badPsswd password is "+noRepeatChar(badPsswd));



var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function (password) {
  var arrayPass = _.split(password, "");
  var onlyNums = _.without(arrayPass, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
  if (onlyNums.length === 0) {
    return true;
  } else {
    return false;
  }
};
console.log("the goodPsswd password is "+onlyNumbers(goodPsswd));
console.log("the badPsswd password is "+onlyNumbers(badPsswd));


var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
  var arrayPass = _.split(password, "");
  var trimPass = _.slice(arrayPass, 0, 10);
  var cleanPass = _.join(trimPass, "");
  return cleanPass;
};
trimPassword(badPsswd);

console.log("the trim new password is "+trimPassword(badPsswd));
