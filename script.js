
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

    let on = 0,
        off = 2;

    for(let state = 0; state < 5;)
    {
        
        switch(state)
        {
            case firstRound:
                playerSelection = window.prompt("This is a rock, paper, scissors game - Round 1");
                console.log(`You have selected ${playerSelection}`);
                playerSelection = playerSelection.toLowerCase().trim();

                let gameLockFirstRound = 1;
                if((playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"))
                {
                    gameLockFirstRound += 1;
                }
                else
                {
                    gameLockFirstRound -= 1;
                }

                if(gameLockFirstRound == off)
                {
                    computerSelection = computerPlay();
                    console.log(`computer has selected ${computerSelection}`);
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
                }
                else if(gameLockFirstRound == on)
                {
                    alert('Wrong Input, Please try again');
                    state = firstRound;
                }
                break;

            case secondRound:
                playerSelection = window.prompt("This is a rock, paper, scissors game - Round 2");
                console.log(`You have selected ${playerSelection}`);
                playerSelection = playerSelection.toLowerCase().trim();
                
                let gameLockSecondRound = 1;
                if((playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"))
                {
                    gameLockSecondRound += 1;
                }
                else
                {
                    gameLockSecondRound -= 1;
                }

                if(gameLockSecondRound == off)
                {
                    computerSelection = computerPlay();
                    console.log(`computer has selected ${computerSelection}`);
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
                }
                else if(gameLockSecondRound == on)
                {
                    alert('Wrong Input, Please try again');
                    state = secondRound;
                }              
                break;
            case thirdRound:
                playerSelection = window.prompt("This is a rock, paper, scissors game - Round 3");
                console.log(`You have selected ${playerSelection}`);
                playerSelection = playerSelection.toLowerCase().trim();
                
                let gameLockThirdRound = 1;
                if((playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"))
                {
                    gameLockThirdRound += 1;
                }
                else
                {
                    gameLockThirdRound -= 1;
                }

                if(gameLockThirdRound == off)
                {
                    computerSelection = computerPlay();
                    console.log(`computer has selected ${computerSelection}`);
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
                }
                else if(gameLockThirdRound == on)
                {
                    alert('Wrong Input, Please try again');
                    state = thirdRound;
                } 
                break;
            case fourthRound:
                playerSelection = window.prompt("This is a rock, paper, scissors game - Round 4");
                console.log(`You have selected ${playerSelection}`);
                playerSelection = playerSelection.toLowerCase().trim();
                
                let gameLockFourthRound = 1;
                if((playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"))
                {
                    gameLockFourthRound += 1;
                }
                else
                {
                    gameLockFourthRound -= 1;
                }

                if(gameLockFourthRound == off)
                {
                    computerSelection = computerPlay();
                    console.log(`computer has selected ${computerSelection}`);
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
                }
                else if(gameLockFourthRound == on)
                {
                    alert('Wrong Input, Please try again');
                    state = fourthRound;
                } 
                break;
            case lastRound:
                playerSelection = window.prompt("This is a rock, paper, scissors game - Round 5");
                console.log(`You have selected ${playerSelection}`);
                playerSelection = playerSelection.toLowerCase().trim();
                
                let gameLockLastRound = 1;
                if((playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"))
                {
                    gameLockLastRound += 1;
                }
                else
                {
                    gameLockLastRound -= 1;
                }

                if(gameLockLastRound == off)
                {
                    computerSelection = computerPlay();
                    console.log(`computer has selected ${computerSelection}`);
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
                }
                else if(gameLockLastRound == on)
                {
                    alert('Wrong Input, Please try again');
                    state = lastRound;
                } 
                break;
        }
        if(state == comparePoints)
        {
            if(playerPoints > computerPoints)
            {
                alert('Game Over: You have won the game - Reload this page to restart the game');
                return 'Game Over: You have won the game';
            }
            else if(computerPoints > playerPoints)
            {
                alert('Game Over: You have lost the game - Reload this page to restart the game');
                return 'Game Over: You have lost the game';
            }
            else
            {
                alert('Game Over: It\'s a Tie - Reload this page to restart the game');
                return 'Game Over: It\'s a Tie';
            }
        }
    }  
}


//console.log(game());
