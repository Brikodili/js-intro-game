# Игра «Угадай число» 

<p>Система спрашивает: «Хотите начать?» // использовать confirm()</p>
<p>Если пользователь выбирает «сancel» - выводим в консоль «Сегодня не выиграл миллион»,  если выбирает «ок» - начинаем игру:</p>
<p>Случайным образом //Math.random() выбираем число в промежутке от 1 до 5, просим пользователя ввести число. </p>
<p>У пользователя 3 попытки угадать.</p>
<p>Если угадал с первой - выиграл 10$, со второй - 5$, с третей - 2$.</p>
<p>Если не угадал, выводим в консоль «Ваш выигрыш - 0», и спрашиваем хочет ли сыграть еще раз.</p>
<p>Если все таки угадал, то спрашиваем хочет ли продолжить игру //confirm();</p>
<p>Если не хочет продолжать, выводим в консоль «Спасибо за игру, ваш выигрыш ..».</p>
<p>Если продолжает, повышаем ставки вдвое, призовые умножаем на 3, то есть: угадал с первого раза - выиграл 30$, со второго - 15$, с третьего - 6$.</p>
<p>Выигрыш прибавляется к предыдущему.</p>
<p>Все повторяется до того момента, пока пользователь не проиграет, или пока не захочет завершить игру. </p>
