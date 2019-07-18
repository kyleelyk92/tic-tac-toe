//function that accepts an array
document.addEventListener('DOMContentLoaded', function(){

// reset button
  document.body.querySelector('button').addEventListener('click', function(){
    for(squares of document.getElementById('gameboard').children){
      squares.innerHTML = "";
    }
  }
  )

  let player = "X"
  let boardArray = [
    ['', '', '', ],
    ['', '', '', ],
    ['', '', '', ]
  ]

  const winningCombinations = [
    [0, 1, 2, ],
    [3, 4, 5, ],
    [6, 7, 8, ],
    [0, 3, 6, ],
    [1, 4, 7, ],
    [2, 5, 8, ],
    [0, 4 ,8, ],
    [2, 4, 6, ], 
  ]

//Clicking elements, filling in squares, 
    
  gameboard.addEventListener('click', function(e){
    if (e.target.nodeName === 'DIV' && e.target.innerText == false){
      if(player === "X"){
        e.target.innerText = player
        player = "O"
        checkWinner()
      }else{
        e.target.innerText = player
        player = "X"
        checkWinner()
      }

    }
  })
  
  const checkWinner = function(x, y, z){
    for (let i = 0; i < winningCombinations.length; i++){
      let box = document.querySelector('.gameboard')
      console.log(box.children[i].innerHTML)
    }
  }

  const functionThatAcceptsThreeInputs = function(a, b, c){
    if(box.children[a].innerHTML === box.children[b].innerHTML && box.children[b].innerHTML === box.children[c].innerHTML){

      
      winner = true
      console.log(`${player} wins`)
    }
  }
})