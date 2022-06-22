

function computerPlay()
{
    const choices=['rock','paper','scissors'] ;
    const index = parseInt(Math.floor(Math.random() * choices.length));
    const result = choices[index]
    console.log("Computer chooses : ",result) ;
    return result ; 

}

function playerSelection()
{
    const choice = prompt("What will you play? : ") ; 
    const choicelow = choice.toLowerCase()
    return choicelow ; 
}

function playRound(playerSelection,computerSelection)
{
    if ((playerSelection==='rock')&&(computerSelection==='scissors'))
        {   console.log("1") ; 
            return 1 ; 
        }   
    if ((playerSelection==='rock')&&(computerSelection==='paper'))
    {   console.log("0") ; 
    return 0 ; 
}   

        if ((playerSelection==='scissors')&&(computerSelection==='paper'))
        {   console.log("1") ; 
            return 1 ; 
        }   
    if ((playerSelection==='scissors')&&(computerSelection==='rock'))
    {   console.log("0") ; 
    return 0 ; 
}   
    
    if ((playerSelection==='paper')&&(computerSelection==='rock'))
    {   console.log("1") ; 
    return 1 ; 
}   
        if ((playerSelection==='paper')&&(computerSelection==='scissors'))
        {   console.log("0") ; 
        return 0 ; 
    }   

}

function game()
{
    let playerscore =0 ; 
    let computerscore= 0 ; 
    for (let i=0 ; i<5 ; i++)
    {
        let playerChoice = playerSelection() ; 
        let computerChoice = computerPlay(); 
        
        if  (playRound(playerChoice,computerChoice)==1)
            {console.log("Player")
            playerscore++ ; }
        else 
            computerscore++ ; 

        alert(playerscore);
        alert(computerscore);

        
    }

    if (playerscore>computerscore)
        alert("Player wins !! ") ; 
    
    else if (computerscore>playerscore)
    alert("computer wins !! ") ; 

    else 
        alert ("Draw ! ") ;

}