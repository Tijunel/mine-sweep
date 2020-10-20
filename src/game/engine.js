// Credit goes to Pavol Federl for the core game engine code.
// This code is a modification to make it easier to use with React.

const STATE_HIDDEN = "hidden";
const STATE_SHOWN = "shown";
const STATE_MARKED = "marked";

function array2d(nrows, ncols, val) {
    const res = [];
    for (let row = 0; row < nrows; row++) {
        res[row] = [];
        for (let col = 0; col < ncols; col++)
            res[row][col] = val(row, col);
    }
    return res;
}

function rndInt(min, max) {
    [min, max] = [Math.ceil(min), Math.floor(max)]
    return min + Math.floor(Math.random() * (max - min + 1));
}

export default class GameEngine {
    static instance = null;
    constructor() {
        this.init(10, 10, 10);
    }

    static getInstance() {
        if (GameEngine.instance === null) GameEngine.instance = new GameEngine();
        return this.instance;
    }

    setGameMode(easy) {
        if (easy) this.init(10, 10, 10);
        else this.init(15, 15, 25);
    }

    validCoord(row, col) {
        return row >= 0 && row < this.nrows && col >= 0 && col < this.ncols;
    }

    init(nrows, ncols, nmines) {
        this.nrows = nrows;
        this.ncols = ncols;
        this.nmines = nmines;
        this.nmarked = 0;
        this.nuncovered = 0;
        this.exploded = false;
        this.arr = array2d(
            nrows, ncols,
            () => ({ mine: false, state: STATE_HIDDEN, count: 0 })
        );
    }

    count(row, col) {
        const c = (r, c) =>
            (this.validCoord(r, c) && this.arr[r][c].mine ? 1 : 0);
        let res = 0;
        for (let dr = -1; dr <= 1; dr++)
            for (let dc = -1; dc <= 1; dc++)
                res += c(row + dr, col + dc);
        return res;
    }

    sprinkleMines(row, col) {
        let allowed = [];
        for (let r = 0; r < this.nrows; r++) {
            for (let c = 0; c < this.ncols; c++) {
                if (Math.abs(row - r) > 2 || Math.abs(col - c) > 2)
                    allowed.push([r, c]);
            }
        }
        this.nmines = Math.min(this.nmines, allowed.length);
        for (let i = 0; i < this.nmines; i++) {
            let j = rndInt(i, allowed.length - 1);
            [allowed[i], allowed[j]] = [allowed[j], allowed[i]];
            let [r, c] = allowed[i];
            this.arr[r][c].mine = true;
        }
        for (let r = 0; r < this.nrows; r++) {
            for (let c = 0; c < this.ncols; c++) {
                if (this.arr[r][c].state == STATE_MARKED)
                    this.arr[r][c].state = STATE_HIDDEN;
                this.arr[r][c].count = this.count(r, c);
            }
        }
        let mines = []; let counts = [];
        for (let row = 0; row < this.nrows; row++) {
            let s = "";
            for (let col = 0; col < this.ncols; col++) {
                s += this.arr[row][col].mine ? "B" : ".";
            }
            s += "  |  ";
            for (let col = 0; col < this.ncols; col++) {
                s += this.arr[row][col].count.toString();
            }
            mines[row] = s;
        }
    }

    uncover(row, col) {
        if (!this.validCoord(row, col)) return false;
        if (this.nuncovered === 0)
            this.sprinkleMines(row, col);
        if (this.arr[row][col].state !== STATE_HIDDEN) return false;
        const ff = (r, c) => {
            if (!this.validCoord(r, c)) return;
            if (this.arr[r][c].state !== STATE_HIDDEN) return;
            this.arr[r][c].state = STATE_SHOWN;
            this.nuncovered++;
            if (this.arr[r][c].count !== 0) return;
            ff(r - 1, c - 1); ff(r - 1, c); ff(r - 1, c + 1);
            ff(r, c - 1);; ff(r, c + 1);
            ff(r + 1, c - 1); ff(r + 1, c); ff(r + 1, c + 1);
        };
        ff(row, col);
        if (this.arr[row][col].mine) {
            this.exploded = true;
        }
        return true;
    }

    mark(row, col) {
        if (!this.validCoord(row, col)) return false;
        if (this.arr[row][col].state === STATE_SHOWN) return false;
        this.nmarked += this.arr[row][col].state === STATE_MARKED ? -1 : 1;
        this.arr[row][col].state = this.arr[row][col].state === STATE_MARKED ? STATE_HIDDEN : STATE_MARKED;
        return true;
    }

    getRendering() {
        const res = [];
        for (let row = 0; row < this.nrows; row++) {
            let s = "";
            for (let col = 0; col < this.ncols; col++) {
                let a = this.arr[row][col];
                if (this.exploded && a.mine) s += "M";
                else if (a.state === STATE_HIDDEN) s += "H";
                else if (a.state === STATE_MARKED) s += "F";
                else if (a.mine) s += "M";
                else s += a.count.toString();
            }
            res[row] = s;
        }
        return res;
    }

    getStatus() {
        let done = this.exploded ||
            this.nuncovered === this.nrows * this.ncols - this.nmines;
        return {
            done: done,
            exploded: this.exploded,
            nrows: this.nrows,
            ncols: this.ncols,
            nmarked: this.nmarked,
            nuncovered: this.nuncovered,
            nmines: this.nmines
        }
    }

    unmarkAll() {
        let arr = this.getRendering();
        for (let row = 0; row < this.nrows; row++) {
            for (let col = 0; col < this.ncols; col++) {
                if (arr[row][col] === "F") this.mark(row, col);
            }
        }
    }

    markBombs() {
        let arr = this.getRendering();
        for (let row = 0; row < this.nrows; row++) {
            for (let col = 0; col < this.ncols; col++) {
                if (arr[row][col] === "H") this.mark(row, col);
            }
        }
    }

    getTileStatus(row, col) {
        if (this.arr[row][col].mine) return -1;
        return this.arr[row][col].count;
    }
}