function setZeroToMatrixIfZero(matrix)
{
    let rows=matrix.length;
    let cols= matrix[0].length;
    let rowsZero= new Array(rows).fill(false);
    let colsZero=new Array(cols).fill(false);

    for(let i=0;i<rows;i++)
        {
            for(let j=0;j<cols;j++)
                {
                    if(matrix[i][j]==0)
                        {
                            rowsZero[i]=true
                            colsZero[j]=true
                        }
                }
        }

        for(let i=0;i<rows;i++)
            {
                for(let j=0;j<cols;j++)
                    {
                        if(rowsZero[i]==true || colsZero[j]==true)
                            {
                                matrix[i][j]=0
                            }
                    }
            }
            return matrix
}
// Example matrix to demonstrate the function
let matrix = [
    [1, 2, 3],
    [0, 0, 6],
    [7, 8, 9]
];

console.log(setZeroToMatrixIfZero(matrix));