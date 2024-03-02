const game = (function() {

    const gameLogic = {

        board: [
            [" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "]
        ],
    
        win: "",
    
        currentTurn: "o",
    
        createPlayer: function(name, xo) {
    
            return {
                name: name,
                xo: xo
            }
    
        },
    
        submit: function() {
    
            let form = document.getElementById("form");
    
            form.addEventListener("submit", function(event) {
    
                event.preventDefault();
    
                gameLogic.makePlayers();
    
                gameLogic.play();
    
                document.getElementById("player1").value = "";
                document.getElementById("player2").value = "";
    
            });
        },
    
        restartGame: function() {
            this.win = "";
            this.board = [
                [" ", " ", " "],
                [" ", " ", " "],
                [" ", " ", " "]
            ]
            this.displayDOM();
            this.play();
        },
    
        makePlayers: function() {
            this.player1 = this.createPlayer(document.getElementById("player1").value, "x");
            this.player2 = this.createPlayer(document.getElementById("player2").value, "o");
        },
    
        displayHeader: function(name, turn) {
            let header = document.getElementById("header");
    
            header.textContent = name + " turn (" + turn + ")";
        },
    
        play: function() {
    
            if (this.currentTurn == "o") this.displayHeader(this.player1.name, this.player1.xo);
            else if (this.currentTurn == "x") this.displayHeader(this.player2.name, this.player2.xo);
    
            let tiles = document.querySelectorAll(".tile");

                tiles.forEach(item => {

                    if (!item.listenedAdded) {
                        item.addEventListener("click", () => {
        
                            const rowIndex = item.getAttribute("data-row");
                            const colIndex = item.getAttribute("data-col");
            
                            if (!(this.win == "x" || this.win == "o" || this.win == "draw")) {
                                if (this.board[rowIndex][colIndex] != "x" && this.board[rowIndex][colIndex] != "o") {
            
                                    if (this.currentTurn == "x") {
                                        this.displayHeader(this.player1.name, this.player1.xo);
                                        this.currentTurn = "o";
                                    }
                
                                    else if (this.currentTurn == "o") {
                                        this.displayHeader(this.player2.name, this.player2.xo);
                                        this.currentTurn = "x";
                                    }
                
                                    this.board[rowIndex][colIndex] = this.currentTurn;
                                }
                            }
            
                            this.displayDOM();
                            this.checkWin();
            
                        });
                        item.listenerAdded = true;
                    }

                });
    
            let restart = document.getElementById("restart");
            restart.addEventListener("click", () => {
                this.restartGame();
            });
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
    
                header.textContent = "X won!"; 
                this.win = "x";
            }
            
            else if (this.board[0][0] == "o" && this.board[0][1] == "o" && this.board[0][2] == "o" ||
                this.board[1][0] == "o" && this.board[1][1] == "o" && this.board[1][2] == "o" ||
                this.board[2][0] == "o" && this.board[2][1] == "o" && this.board[2][2] == "o" ||
                this.board[0][0] == "o" && this.board[1][0] == "o" && this.board[2][0] == "o" ||
                this.board[0][1] == "o" && this.board[1][1] == "o" && this.board[2][1] == "o" ||
                this.board[0][2] == "o" && this.board[1][2] == "o" && this.board[2][2] == "o" ||
                this.board[0][0] == "o" && this.board[1][1] == "o" && this.board[2][2] == "o" ||
                this.board[2][0] == "o" && this.board[1][1] == "o" && this.board[0][2] == "o") {
    
                header.textContent = "O won!";
                this.win = "o";
    
            }
    
            else if (this.board.every(row => row.every(element => element === "x" || element === "o"))) {
                header.textContent = "Draw!";
                this.win = "draw";
            }   
        },
    
        displayDOM: function() {
            this.board.forEach((row, rowIndex) => {
                row.forEach((item, colIndex) => {
                    const selector = `div[data-row="${rowIndex}"][data-col="${colIndex}"]`;
                    const div = document.querySelector(selector);
                    if (div) {
                        div.textContent = item;
                    }
                });
            });
        }
    }

    gameLogic.submit();

})();