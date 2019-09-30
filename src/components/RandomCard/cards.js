export const cardAt = (number) => {
    let cardType = ["C", "D", "H", "S"];
    let cardNum = ["2", "3", "4", "5", "6", "7", "8", "9", "0", "J", "Q", "K", "A"];

    if (number < 0 || number > (cardType.length * cardNum.length) - 1) {
        return `Number cannot < 0 or > ${(cardType.length * cardNum.length) - 1}`
    }

    let indexCardNum = number % cardNum.length
    let indexCardType = parseInt(number / cardNum.length)

    return cardNum[indexCardNum] + cardType[indexCardType]
};