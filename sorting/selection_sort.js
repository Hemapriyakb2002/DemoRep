function selectionsort(arr){
    for(let i=0;i<arr.length-1;i++){
        let min=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[min]>arr[j]){
                min=j;
            }
        }
        let temp=arr[i];
        arr[i]=arr[min];
        arr[min]=temp;
    }
    return arr;
}
const arr=[7,4,9,-2,0];  //0 4 9 -2 7 //0 -2 9 4 7
console.log(selectionsort(arr));