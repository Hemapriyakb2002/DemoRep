function insertionsort(arr){
    for(let i=1;i<arr.length;i++){
        for(let j=i;j>0;j--){
            if(arr[j]<arr[j-1]){
                let temp=arr[j];
                arr[j]=arr[j-1];
                arr[j-1]=temp;
            }
            else
                break;
        }
    }
    return arr;
}
const arr=[9,5,8,-4,-7]; //5 9 8 -4 -7 //5 8 9 -4 -7
console.log(insertionsort(arr));