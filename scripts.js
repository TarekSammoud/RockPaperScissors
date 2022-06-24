

function computerPlay()
{
    const choices=['rock','paper','scissors'] ;
    const index = parseInt(Math.floor(Math.random() * choices.length));
    const result = choices[index]
    alert(`Computer chooses : ${result}`) ;
    return result ; 

}

function playerSelection()
{
    const choice = prompt("What will you play? : ") ; 

    const choicelow = choice.toLowerCase() ; 
    return choicelow ; 
}

function playRound(playerSelection,computerSelection)
{
    if ((playerSelection==='rock')&&(computerSelection==='scissors'))
        {   
            return 1 ; 
        }   
    if ((playerSelection==='rock')&&(computerSelection==='paper'))
    {    
    return 0 ; 
}   

        if ((playerSelection==='scissors')&&(computerSelection==='paper'))
        {    
            return 1 ; 
        }   
    if ((playerSelection==='scissors')&&(computerSelection==='rock'))
    {    
    return 0 ; 
}   
    
    if ((playerSelection==='paper')&&(computerSelection==='rock'))
    {    
    return 1 ; 
}   
        if ((playerSelection==='paper')&&(computerSelection==='scissors'))
        {    
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
            {
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