const add = (n1, n2) => n1 + n2;
const mul = (n1, n2) => n1 * n2;

const LUCKY_NUMBER = Math.round(Math.random() * 100)

const getLuckyNumber = () => LUCKY_NUMBER;

module.exports = {
    add , mul, 
    getMyLuckyNumber : getLuckyNumber
}