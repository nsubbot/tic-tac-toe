
class TicTacToe {
    constructor() {
        this.currentValue = 'x';
        this.field = [
            [null,null,null],
            [null,null,null],
            [null,null,null],
        ];
    }

    getCurrentPlayerSymbol() {
        return this.currentValue;
    }

    nextTurn(rowIndex, columnIndex) {

        if (this.field[rowIndex][columnIndex] === null) {

            this.field[rowIndex][columnIndex] = this.currentValue;

            if (this.currentValue === 'o') 
                this.currentValue = 'x';
            else 
                this.currentValue = 'o';
        }
    }

    isFinished() {

        if (this.getWinner() || this.isDraw()) {
          return true;
        }
        return false;

    }

    getWinner() {

        for (var i = 0; i < this.field.length; i++) {
            if ((this.field[i][0] === this.field[i][1]) && (this.field[i][1] === this.field[i][2]) && (this.field[i][0] !== null)) 
                return this.field[i][0];
            if ((this.field[0][i] === this.field[1][i]) && (this.field[1][i] === this.field[2][i]) && (this.field[2][i] !== null)) 
                return this.field[0][i];
        }

        if ((this.field[0][0] === this.field[1][1]) && (this.field[1][1]  === this.field[2][2]) && (this.field[2][2] !== null)) {
          return this.field[0][0];
        }

        if ((this.field[2][0] === this.field[1][1]) && (this.field[1][1]  === this.field[0][2]) && (this.field[0][2] !== null)) {
          return this.field[2][0];
        }

        return null;

    }

    noMoreTurns() {
        for (let i = 0; i < this.field.length; i++) {
            for (let j = 0; j < this.field[i].length; j++) {
                if (this.field[i][j] === null) 
                    return false;
            }
        }
        return true;
    }

    isDraw() {
        return !this.getWinner() && this.noMoreTurns();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }

}

module.exports = TicTacToe;