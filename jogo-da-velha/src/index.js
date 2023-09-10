class Player {

    id
    symbol

    constructor(id, symbol) {
        this.id = id    
        this.symbol = symbol
    }

}

class TicTacToe {

     static WILD_VALUE = 0
     static PLAYER1_ID = 1
     static PLAYER2_ID = 2
     static MATRIZ_POSITIONS_WON = [
         [0,1,2],
         [3,4,5],
         [6,7,8],
         [0,3,6],
         [1,4,7],
         [2,5,8],
         [0,4,8],
         [2,4,6]
     ]
     time
     winner
     textWinner
     isFinished

     constructor() {
         this.player1 = new Player(TicTacToe.PLAYER1_ID, "X")
         this.player2 = new Player(TicTacToe.PLAYER2_ID, "O")
         this.winner = null
         this.plays = [...Array(9).keys()].map(() => TicTacToe.WILD_VALUE)
         this.time = this.drawPlayer()
         this.changeTextPlayTurn()
         this.textWinner = document.getElementById("text-winner")
         this.isFinished = false
     }

     drawPlayer() {
        const players = this.getPlayersInArray()
        
        return players[~~(Math.random() * players.lenght)]
     } 

     changePlayerTurn() {
        this.time = this.time.id == this.player1.id ? this.player2 : this.player1
     }

     getPlayersInArray() {
        return [this.player1, this.player2]
     }

     setPlay(index, e) {

        if (this.hasAlreadyBeenChosen(index) || this.isFinished)
            return;

        this.plays[index] = this.time.id;   
        e.target.innerHTML = this.time.symbol;
        
        const data = this.checkHasWinner()
        const draw = this.checkDraw()

        if (data?.winner) {
            this,this.finishGame()
            return this.setWinnerText(data, e)
        }
    
        if (draw) {
            this.textWinner.innerHTML = "Deu velha..."
            this,this.finishGame()
            return;
        }
        
        this.changePlayerTurn()
        this.changeTextPlayTurn()
     }

     finishGame() {
        this.isFinished = true
     }

     checkDraw() {
        return this.plays.every(position => position != TicTacToe.WILD_VALUE)
     }

     setWinnerText(data) {       
        this.textWinner.innerHTML = `o player ${data.winner.symbol} Venceu a Partida`
     }

     changeTextPlayTurn() {
        const text = document.getElementById("text-player-turn")

        text.innerHTML = this.time.symbol
     }

     hasAlreadyBeenChosen(index) {
       return this.plays[index] !== TicTacToe.WILD_VALUE;
     }

     checkHasWinner() {

        const players = this.getPlayersInArray()
        const matrix = TicTacToe.MATRIZ_POSITIONS_WON

        for (let player of players) {

            for(let i = 0; i < matrix.length; i++) {

                const hasWInner = matrix[i].every(position => this.plays[position] === player.id)

                if (hasWInner) {
                   this.setWinner(player)

                   return  {
                      position: i <= 2 ? "horizontal" : i <= 5 ? "vertical" : "diagonal",
                      winner: player
                   }

                }

            }
        }

        return null
     }

     setWinner(player) {
        this.winner = player
     }

     restart(buttons) {
        this.plays = [...Array(9).keys()].map(() => TicTacToe.WILD_VALUE)
        this.time = this.drawPlayer()
        buttons.forEach(button => button.innerHTML = "")
        this.changeTextPlayTurn()
        this.winner = null
        this.textWinner.innerHTML = ""
        this.isFinished = false
     }

}

const game = new TicTacToe()
const buttonRestart = document.getElementById("button-restart")
const buttons = document
    .querySelector(".contaneir-buttons")
    .querySelectorAll("button")

buttons.forEach(button => {
    button.addEventListener("click", handleClickButton)
})

buttonRestart.addEventListener("click", () => {
    game.restart(buttons)
})

function handleClickButton(e) {

     const index = Number(this.dataset.index)
     
     game.setPlay(index, e)
}