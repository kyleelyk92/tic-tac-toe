document.addEventListener('DOMContentLoaded', function(){
  
// reset button
  document.body.querySelector('button').addEventListener('click', function(){
    for(squares of document.getElementById('gameboard').children){
      squares.innerHTML = "";
      player = "X"
      winner = false
      counter = 0
    }
  })

  // starting board conditions

  let winner = false
  let player = "X"
  let boardArray = [
    ['', '', '', ],
    ['', '', '', ],
    ['', '', '', ]
  ]

  let gameboard = document.querySelector('.gameboard')
  let counter = 0
  //update board array on every click (ask John about how to make this one a loop)
  const updateArray = function(){
    gameboard = document.querySelector('.gameboard')
    boardArray[0][0] = gameboard.children[0].innerHTML
    boardArray[0][1] = gameboard.children[1].innerHTML
    boardArray[0][2] = gameboard.children[2].innerHTML
    boardArray[1][0] = gameboard.children[3].innerHTML
    boardArray[1][1] = gameboard.children[4].innerHTML
    boardArray[1][2] = gameboard.children[5].innerHTML
    boardArray[2][0] = gameboard.children[6].innerHTML
    boardArray[2][1] = gameboard.children[7].innerHTML
    boardArray[2][2] = gameboard.children[8].innerHTML
  }

//Drawing in boxes, building player arrays, checking for winners
//Playing the game, basically

  gameboard.addEventListener('click', function(e){
  
  if (e.target.nodeName === 'DIV' && e.target.innerText == false){
      e.target.innerText = player
      updateArray()
      checkWin()
      counter += 1
      checkTie()
      if(winner === true){
        Swal.fire({
          type:'success',
          text:`${player} wins!`,
          title: `We have a winner!`
        })
      }
      if(player === "X"){
        player = "O"
        } else{
          player = "X"
        }
    }
  })


  // Put all the win conditions together into one function
  checkWin = function(){
    checkRow();
    checkCol();
    checkDiag1();
    checkDiag2();
  }
  const checkTie = function(){
    if (counter === 9 && winner === false){
      console.log('Tie game')
      Swal.fire({
        type:'success',
        text:`Nobody wins!`,
        title: `Draw!`
        })
      
    }
  }

  // individual win conditions
  const checkRow = function(){
    for(n = 0; n < boardArray.length; n++){
      if(boardArray[n][0] !== "" && boardArray[n][1]!== "" && boardArray[n][2]!== "" && 
      boardArray[n][0] === boardArray[n][1] && boardArray[n][1] === boardArray[n][2] && winner != true){
        winner = true
        console.log(`${player} is a winner`)
      }
    }
  }
  const checkCol = function(){
    for(i = 0; i < boardArray.length; i++){
      if(boardArray[0][i] !== "" && boardArray[1][i]!=="" && boardArray[2][i]!=="" && 
      boardArray[0][i] === boardArray[1][i] && boardArray[1][i] === boardArray[2][i] && winner != true){
        winner = true
        console.log(`${player} is a winner`)
      }
    }
  }
  const checkDiag1 = function(){
    if(boardArray[0][0] !== "" && boardArray[1][1]!=="" && boardArray[2][2]!=="" && 
    boardArray[0][0] === boardArray[1][1] && boardArray[1][1] === boardArray[2][2] && winner != true){
      winner = true
      console.log(`${player} is a winner`)
    }
  }
  const checkDiag2 = function(){
    if(boardArray[0][2] !== "" && boardArray[1][1]!== "" && boardArray[2][0]!== "" && 
    boardArray[0][2] === boardArray[1][1] && boardArray[1][1] === boardArray[2][0] && winner != true){
      winner = true
      console.log(`${player} is a winner`)
    }
  }


})

