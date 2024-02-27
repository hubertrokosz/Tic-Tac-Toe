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
        this.board[row][column] = "x";
        this.displayBoard();
        this.checkWin();
    },

    checkWin: function() {
        if (this.board[0][0] == "x" && this.board[0][1] == "x" && this.board[0][2] == "x") {
            console.log("You won!");
        }
    },

    player: {
        choice: "x"
    }

};



game.displayBoard();