
const gameOptions = ["rock", "paper", "scissors"];


function computerPlay()
{
    let computerSelection = gameOptions[Math.floor((Math.random() * gameOptions.length) + 0)];
    return computerSelection;
}

function playRound(playerSelection, computerSelection)
{
    let playerWinsMessage = `You win, ${playerSelection} beats ${computerSelection} `;
    let playerLoseMessage = `You loose, ${computerSelection} beats ${playerSelection} `;
    let gameTieMessage = 'Its a tie please play again in this round';
    let gamelock = false; // game lock is on
    lock = true; // game lock is off
    if(lock == true)
    {
        if( playerSelection == "paper" && computerSelection == "scissors" )
        {
            return playerLoseMessage;
        }
        else if( playerSelection == "rock" && computerSelection == "scissors" )
        {
            return playerWinsMessage;
        }
        else if(playerSelection == "rock" && computerSelection == "paper" )
        {
            return playerLoseMessage;
        }
        else if(playerSelection == "scissors" && computerSelection == "paper" )
        {
            return playerLoseMessage;
        }
        else if(playerSelection == "paper" && computerSelection == "rock" )
        {
            return playerWinsMessage;
        } 
        else if(playerSelection == "scissors" && computerSelection == "rock" )
        {
            return playerLoseMessage;
        }
        else
        {
            return gameTieMessage;
        }
    }
    
}

function game()
{
    let computerPoints = 0,
        playerPoints = 0;

    let comparePoints = -1;

    let firstRound = 0,
        secondRound = 1,
        thirdRound = 2,
        fourthRound = 3,
        lastRound = 4;

    for(let state = 0; state < 5;)
    {
        
        switch(state)
        {
            case firstRound:
                playerSelection = window.prompt("This is a rock, paper, scissors game");
                playerSelection = playerSelection.toLowerCase();
                computerSelection = computerPlay();
                let gameResultsRoundOne = playRound(playerSelection, computerSelection);
                let playerWinsMessageR1 = `You win, ${playerSelection} beats ${computerSelection} `;
                let playerLoseMessageR1 = `You loose, ${computerSelection} beats ${playerSelection} `;
                console.log(`first round results ${gameResultsRoundOne} at round ${state}`);
                
                if(gameResultsRoundOne == playerLoseMessageR1)
                {
                    computerPoints += 1;
                    console.log(`computerPoints are ${computerPoints}`);
                    state = secondRound;
                }
                else if(gameResultsRoundOne == playerWinsMessageR1)
                {
                    playerPoints += 1;
                    console.log(`playerPoints are ${playerPoints}`);
                    state = secondRound;
                }
                else
                {
                    state = firstRound;
                }
                break;

            case secondRound:
                playerSelection = window.prompt("This is a rock, paper, scissors game");
                playerSelection = playerSelection.toLowerCase();
                computerSelection = computerPlay();
                let gameResultsRoundTwo = playRound(playerSelection, computerSelection);
                let playerWinsMessageR2 = `You win, ${playerSelection} beats ${computerSelection} `;
                let playerLoseMessageR2 = `You loose, ${computerSelection} beats ${playerSelection} `;
                console.log(`second round results ${gameResultsRoundTwo} at round ${state}`);

                if(gameResultsRoundTwo == playerLoseMessageR2)
                {
                    computerPoints += 1;
                    console.log(`computerPoints are ${computerPoints}`);
                    state = thirdRound;
                }
                else if(gameResultsRoundTwo == playerWinsMessageR2)
                {
                    playerPoints += 1;
                    console.log(`playerPoints are ${playerPoints}`);
                    state = thirdRound;
                }
                else
                {
                    state = secondRound;
                }
                break;
            case thirdRound:
                playerSelection = window.prompt("This is a rock, paper, scissors game");
                playerSelection = playerSelection.toLowerCase();
                computerSelection = computerPlay();
                let gameResultsRoundThree = playRound(playerSelection, computerSelection);
                let playerWinsMessageR3 = `You win, ${playerSelection} beats ${computerSelection} `;
                let playerLoseMessageR3 = `You loose, ${computerSelection} beats ${playerSelection} `;
                console.log(`third round results ${gameResultsRoundThree} at round ${state}`);

                if(gameResultsRoundThree == playerLoseMessageR3)
                {
                    computerPoints += 1;
                    console.log(`computerPoints are ${computerPoints}`);
                    state = fourthRound;
                }
                else if(gameResultsRoundThree == playerWinsMessageR3)
                {
                    playerPoints += 1;
                    console.log(`playerPoints are ${playerPoints}`);
                    state = fourthRound;
                }
                else
                {
                    state = thirdRound;
                }
                break;
            case fourthRound:
                playerSelection = window.prompt("This is a rock, paper, scissors game");
                playerSelection = playerSelection.toLowerCase();
                computerSelection = computerPlay();
                let gameResultsRoundFour = playRound(playerSelection, computerSelection);
                let playerWinsMessageR4 = `You win, ${playerSelection} beats ${computerSelection} `;
                let playerLoseMessageR4 = `You loose, ${computerSelection} beats ${playerSelection} `;
                console.log(`fourth round results ${gameResultsRoundFour} at round ${state}`);

                if(gameResultsRoundFour == playerLoseMessageR4)
                {
                    computerPoints += 1;
                    console.log(`computerPoints are ${computerPoints}`);
                    state = lastRound;
                }
                else if(gameResultsRoundFour == playerWinsMessageR4)
                {
                    playerPoints += 1;
                    console.log(`playerPoints are ${playerPoints}`);
                    state = lastRound;
                }
                else
                {
                    state = fourthRound;
                }
                break;
            case lastRound:
                playerSelection = window.prompt("This is a rock, paper, scissors game");
                playerSelection = playerSelection.toLowerCase();
                computerSelection = computerPlay();
                let gameResultsRoundFive = playRound(playerSelection, computerSelection);
                let playerWinsMessageR5 = `You win, ${playerSelection} beats ${computerSelection} `;
                let playerLoseMessageR5 = `You loose, ${computerSelection} beats ${playerSelection} `;
                console.log(`fifth round results ${gameResultsRoundFive} at round ${state}`);

                if(gameResultsRoundFive == playerLoseMessageR5)
                {
                    computerPoints += 1;
                    console.log(`computerPoints are ${computerPoints}`);
                    state = comparePoints;
                }
                else if(gameResultsRoundFive == playerWinsMessageR5)
                {
                    playerPoints += 1;
                    console.log(`playerPoints are ${playerPoints}`);
                    state = comparePoints;
                }
                else
                {
                    state = lastRound;
                }
                break;
        }
        if(state == comparePoints)
        {
            if(playerPoints > computerPoints)
            {
                return 'You have won the game';
            }
            else if(computerPoints > playerPoints)
            {
                return 'You have lost the game';
            }
            else
            {
                return 'repeat the game';
            }
        }
    }  
}


//console.log(game());
