var score = 0 ;
var pcscore = 0 ; 

function resetScore ()
{
    pcscore = 0 ; 
    score = 0 ;
}

function announceWinner()
{

    console.log(`ANNOUNCE WINNER SCORE : ${score}`)

    if ((score == 5) && (pcscore < 5))
    {
    document.getElementById('final-result').textContent = 'PLAYER WINS' ; }
    
    else if ((pcscore == 5) && (score != 5) )
    document.getElementById('final-result').textContent = 'PC WINS' ; 

    else if ( (pcscore ==  5) && (score == 5) )
    document.getElementById('final-result').textContent = 'DRAW' ; 

    else 
    document.getElementById('final-result').textContent = '' ; 

}   

function calclScore (){
    score ++ ;
    document.getElementById('score').textContent = score ; 
    announceWinner()
    if ( (pcscore == 5) || (score == 5 ) )
    resetScore (); 

}

function calclSorePC(){
    pcscore ++ ;
    document.getElementById('pcscore').textContent = pcscore ; 
    announceWinner()
    if ( (pcscore == 5) || (score == 5 ) )
    resetScore (); 
}

function RPC() {

    const paper = document.getElementById('btnPaper') ;
    const rock = document.getElementById("btnRock") ;
    const scissors = document.getElementById("btnScissors") ;

    paper.addEventListener('click' , () => {
        const choices=['rock','paper','scissors'] ;
        const index = parseInt(Math.floor(Math.random() * choices.length));
        const ComputerChoice = choices[index]
        console.log(`computer chose : ${ComputerChoice}`) ;
        const result = FindWinner('paper',ComputerChoice)
            if (result==1)
                { calclScore()

                    const div = document.querySelector(".result") ;
                    div.textContent = 'player won round' ; 
                }
                else
                { calclSorePC()

                    const div = document.querySelector(".result") ;
                    div.textContent = 'pc won round' ; 
                }
    }) ; 

    rock.addEventListener('click' , () => {
        const choices=['rock','paper','scissors'] ;
        const index = parseInt(Math.floor(Math.random() * choices.length));
        const ComputerChoice = choices[index]
        console.log(`computer chose : ${ComputerChoice}`) ;

        const result = FindWinner('rock',ComputerChoice)
            if (result==1)
                {calclScore()

                    const div = document.querySelector(".result") ;
                    div.textContent = 'player won round' ; 
                }
                else
                {calclSorePC()
                    const div = document.querySelector(".result") ;
                    div.textContent = 'pc won round' ; 
                }
    }) ; 

    scissors.addEventListener('click' , () => {
        const choices=['rock','paper','scissors'] ;
        const index = parseInt(Math.floor(Math.random() * choices.length));
        const ComputerChoice = choices[index]
        console.log(`computer chose : ${ComputerChoice}`) ;

        const result = FindWinner('scissors',ComputerChoice)
            if (result==1)
                {calclScore()

                    const div = document.querySelector(".result") ;
                    div.textContent = 'player won round' ; 
                }
                else if (result==0)
                {calclSorePC()
                    const div = document.querySelector(".result") ;
                    div.textContent = 'pc won round' ; 
                }

                else 
                {
                    const div = document.querySelector(".result") ;
                    div.textContent = 'draw' ; 
                }
                    
    }) ; 


}


function FindWinner(playerSelection,computerSelection) {
    if ((playerSelection==='rock')&&(computerSelection==='scissors'))
    {   console.log('player wins round') ; 
        return 1 ; 
    }   
if ((playerSelection==='rock')&&(computerSelection==='paper'))
{     console.log('PC wins round') ; 
return 0 ; 
}   

    if ((playerSelection==='scissors')&&(computerSelection==='paper'))
    {     console.log('player wins round') ; 
        return 1 ; 
    }   
if ((playerSelection==='scissors')&&(computerSelection==='rock'))
{     console.log('PC wins round') ; 
return 0 ; 
}   

if ((playerSelection==='paper')&&(computerSelection==='rock'))
{     console.log('player wins round') ; 
return 1 ; 
}   
    if ((playerSelection==='paper')&&(computerSelection==='scissors'))
    {    console.log('PC wins round') ; 
    return 0 ; 
}   
}
