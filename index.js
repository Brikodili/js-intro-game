var start = confirm("Начать игру?");

if (start === true) {
    checkNum();
} else {
    alert('Not today');
}

function checkNum() {
    var c;
    var money = 0;
    for (c = 1; c > 0; c *= 3) {
        var randomNum = Math.floor( Math.random() * 5) + 1;
        console.log(randomNum);
        var i = 1;
        while (i < 4) {
            var userNum = +prompt("Введите число от 1 до 5", "");
            if (userNum === randomNum) break;
            else {
                i++;
            }
        }
        switch (i) {
            case 1:
                money += 10 * c;
                break;
            case 2:
                money += 5 * c;
                break;
            case 3:
                money += 2 * c;
                break;
            case 4:
                money = 0;
                c = -1;
                break;
            default:
                alert('Error');
        }
        console.log(money);
        if (i <= 3){
            var continueGame = confirm('continue?');
            if (continueGame === false) {
                c = -1;
                console.log('Thanks');
                break;
            }
        }
    }
}
