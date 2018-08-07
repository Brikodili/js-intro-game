var start = confirm('Start?');

if (start === true) {
    checkNum();
} else {
    alert('Not today');
}

function checkNum() {
    var c; // coefficient
    var money = 0;

    for (c = 1; c > 0; c *= 3) {
        var randomNum = Math.floor( Math.random() * 5) + 1;
        console.log(randomNum); // для проверки

        var i = 1;

        while (i < 4) {
            var userNum = +prompt('Enter a number between 1 and 5', '');

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
        console.log('Your winnings - ' + money);

        if (i <= 3) {
            var continueGame = confirm('Continue?');

            if (continueGame === false) {
                c = -1;
                console.log('Thanks for the game! Your winnings - '  + money);
                break;
            }
        }
    }
}
