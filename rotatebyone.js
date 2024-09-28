//anticlockwise
function rotateByOne(arr)
{
   let temp=arr[0]
   for(let i=1;i<arr.length;i++)
    {
        arr[i-1]=arr[i]
    }
    arr[arr.length-1]=temp
    return arr 
}

console.log(rotateByOne([1,2,3,4,5])) // [2, 3, 4, 5, 1]

//clockwise
function rotateByOneclockwise(numbers)
{
    let  temp=numbers[numbers.length-1]
    for(let i=numbers.length-1;i>0;i--)
    {
        numbers[i]=numbers[i-1]
    }
    numbers[0]=temp
    return numbers
}
let numbers=[1,2,3,4,5]
console.log(rotateByOneclockwise(numbers)) // [5, 1, 2, 3, 4]