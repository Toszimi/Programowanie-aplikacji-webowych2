import Cell from "./Cell";


class Board {
    cells: Cell[];
    currentSymbol: number;
    winner: HTMLElement;



    constructor(size: number, playerSymbol: number) {
        this.cells = new Array(size);
        this.currentSymbol = playerSymbol;
        this.winner = <HTMLTableElement>document.getElementById("winner");

        let table =
            <HTMLTableElement>document.getElementById("tictactoe");
        let i = 0;
        for (let r = 0; r < size; r++) {
            let row = table.insertRow(r);
            for (let c = 0; c < size; c++) {
                let cell = <HTMLTableDataCellElement>row.insertCell(c);
                cell.className = 'cell';
                const newCell = new Cell(cell);
                this.cells[i] = newCell;
                cell.addEventListener("click", () =>
                    this.makeMove(newCell), false);
                i++;
            }
        }

    }
    makeMove(cell: Cell): void {
        cell.setCellValue(this.currentSymbol);
    };
}


export default Board