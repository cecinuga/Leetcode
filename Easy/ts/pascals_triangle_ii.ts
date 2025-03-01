function getRow(rowIndex: number): number[] {
    const res = [[1]]

    for ( let row=1; row < rowIndex+1; row++ ){
        res.push([])
        for ( let col=0; col <= row; col++ ){
            let aboveLeft = col < res[row-1].length ? res[row-1][col] : 0
            let aboveRight = col-1 >= 0 ? res[row-1][col-1] : 0

            res[row][col] = aboveLeft + aboveRight
        }
    }

    return res[res.length-1]
};