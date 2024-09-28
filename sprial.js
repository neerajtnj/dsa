function spiralMatrix(n)
{
    let arr = new Array(n)
    for(let i=0;i<n;i++)
    {
        arr[i]= new Array(n)
    }
    let topmostRow=0;
    let bottommostRow=n-1
    let leftmostCol=0;
    let rightmostCol=n-1;

    let count=1;

    while(count<=n*n)
    {
        for(let i=leftmostCol;i<=rightmostCol;i++)
        {
            arr[topmostRow][i] = count++;
        }
        topmostRow++;
        for(let i= topmostRow;i<=bottommostRow;i++)
        {
            arr[i][rightmostCol] =  count++;
        }
        rightmostCol--;
        for(let i=rightmostCol;i>=leftmostCol;i--)
        {
            arr[bottommostRow][i]= count++;
        }
        bottommostRow--;
        for(let i=bottommostRow;i>=topmostRow;i--)
        {
            arr[i][leftmostCol]=count++;
        }
        leftmostCol++
    }
    return arr;
}
console.log(spiralMatrix(3));