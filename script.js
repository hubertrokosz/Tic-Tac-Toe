let game = {

    board: [
        [".", ".", "."],
        [".", ".", "."],
        [".", ".", "."]
    ],

    displayBoard: function() {
        console.table(this.board.map(row => row.join("|")).join("\n"));
    },

    play: function(row, column) {
        if (this.player.turn == "x") {

            this.board[row][column] = "x";
  
            this.player.turn = "o";
        }
        else if (this.player.turn == "o") {

            this.board[row][column] = "o";

            this.player.turn = "x";
        }
        this.displayBoard();
        this.checkWin();
    },

    checkWin: function() {
        if (this.board[0][0] == "x" && this.board[0][1] == "x" && this.board[0][2] == "x" ||
            this.board[1][0] == "x" && this.board[1][1] == "x" && this.board[1][2] == "x" ||
            this.board[2][0] == "x" && this.board[2][1] == "x" && this.board[2][2] == "x" ||
            this.board[0][0] == "x" && this.board[1][0] == "x" && this.board[2][0] == "x" ||
            this.board[0][1] == "x" && this.board[1][1] == "x" && this.board[2][1] == "x" ||
            this.board[0][2] == "x" && this.board[1][2] == "x" && this.board[2][2] == "x" ||
            this.board[0][0] == "x" && this.board[1][1] == "x" && this.board[2][2] == "x" ||
            this.board[2][0] == "x" && this.board[1][1] == "x" && this.board[0][2] == "x") {
            console.log("x won!");
        }
        
        else if (this.board[0][0] == "o" && this.board[0][1] == "o" && this.board[0][2] == "o" ||
        this.board[1][0] == "o" && this.board[1][1] == "o" && this.board[1][2] == "o" ||
        this.board[2][0] == "o" && this.board[2][1] == "o" && this.board[2][2] == "o" ||
        this.board[0][0] == "o" && this.board[1][0] == "o" && this.board[2][0] == "o" ||
        this.board[0][1] == "o" && this.board[1][1] == "o" && this.board[2][1] == "o" ||
        this.board[0][2] == "o" && this.board[1][2] == "o" && this.board[2][2] == "o" ||
        this.board[0][0] == "o" && this.board[1][1] == "o" && this.board[2][2] == "o" ||
        this.board[2][0] == "o" && this.board[1][1] == "o" && this.board[0][2] == "o") {
        console.log("o won!");
    }
        else if (this.board.every(row => row.every(element => element === "x" || element === "o"))) console.log("draw");

    },

    player: {
        turn: "x"
    }

};



game.displayBoard();