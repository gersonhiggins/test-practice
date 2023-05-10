module.exports =  stringLength = (str) => {
   if(str.length < 1) {
    return "String its null";
   }
   else if(str.length >= 1 && str.length <= 10) {
    return str.length;
   }
   else if(str.length > 10) {
    return "Too long";
   }
}

