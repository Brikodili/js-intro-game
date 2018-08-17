var start = confirm('Start?');

if (start) {
    startGame(0, 10);
} else {
    alert('Not today');
}

function createNumber() {
    return Math.floor( Math.random() * 5) + 1;
}

function askNumber(guessedNumber) {
    var response = {
        success: false,
        attemptNumber: null
    };

    var i = 1;

    while (i < 4) {
        var promptNumber = Number(prompt('Enter a number between 1 and 5', ''));

        if (promptNumber === guessedNumber) {
            response['success'] = true;
            response['attemptNumber'] = i;

            break;
        }

        i++;
    }

    return response;
}

function startGame(money, maxWin) {
    console.log('Current money:', money);

    var number = createNumber();
    console.log(number);
    var answer = askNumber(number);

    if (answer.success) {
        var maxWinDevider;

        switch (answer.attemptNumber) {
            case 1:
                maxWinDevider = 1; break;
            case 2:
                maxWinDevider = 2; break;
            case 3:
                maxWinDevider = 5; break;
        }

        money += maxWin / maxWinDevider;
        maxWin = maxWin * 3;
        console.log('You won:', money);
    } else {
        maxWin = 10;
    }

    if (confirm('Continue?')) {
        startGame(money, maxWin)
    } else {
        console.log('Thanks for the game! Your winnings - ', money);
    }
}