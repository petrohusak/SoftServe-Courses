let startGame = confirm('Do you want to play a game?');
if(!startGame){
    alert('You did not want become a millionaire.');
} else {
    let maxNumber = 5;
    let prize = 0;
    let maxPrize = [2, 5, 10];
    while(startGame){
        let rightNumber = Math.round(Math.random() * maxNumber);
        console.log('Right number: ' + rightNumber);
        for(let i=3; i > 0; i--){
            let userNumber = prompt('Enter a number from 0 to ' + maxNumber + '\nAttempts left: ' + i + '\nTotal prize: ' + prize + '$\nPossible prize on current attempt: ' + (prize + maxPrize[i-1]) + '$');
            if(parseInt(userNumber) == rightNumber){
                prize += maxPrize[i-1];
                startGame = confirm('You win: ' + prize + '$\nDo you want play again?');
                break;
            }
            if(i==1){
                startGame = confirm('Thank you for a game. You win: ' + prize + '$\nDo you want play again?');
            }
        }
        if(startGame){
            for(let i=0; i < maxPrize.length; i++){
                maxPrize[i] *= 3;
            }
            maxNumber *= 2;
        }
    }
}