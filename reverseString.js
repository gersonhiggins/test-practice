module.exports = reverseString = (str) => {
    let regex = /[\W_]/g;
    str = str.split('').reverse().join("").replace(regex, '');
    return str;
}
