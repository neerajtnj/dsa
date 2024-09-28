function spiralMatrix(n)
{
    let topmost_row=0,bottommost_row=n-1
    let leftmost_col=0,rightmost_col=n-1
    let arr = new Array(n)
    for(let i=0;i<n;i++)
    {
        arr[i]= new Array(n)
    }
    let count=1
    while(count<=n*n)
    {
        for(let i=leftmost_col;i<=rightmost_col;i++)
        {
            arr[topmost_row][i]=count++
        }
        topmost_row++
        for(let i=topmost_row;i<=bottommost_row;i++)
            {
                arr[i][rightmost_col]=count++
            }
        rightmost_col--
        for(let i=rightmost_col;i>=leftmost_col;i--)
            {
                arr[bottommost_row][i]=count++
            }
        bottommost_row--
        for(let i=bottommost_row;i>=topmost_row;i--)
            {
                arr[i][leftmost_col]=count++
            }  
            leftmost_col++  
    }
    return arr;
}
console.log(spiralMatrix(4))