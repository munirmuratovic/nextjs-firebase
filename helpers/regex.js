export function isEmail(text) {
    var re = /\S+@\S+\.\S+/;
    return re.test(text);
}