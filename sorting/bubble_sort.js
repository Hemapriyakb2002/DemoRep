function bubblesort(arr){
    let swapped;
    do{
        swapped=false;
        for(let i=0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
                let temp=arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp;
                swapped=true;
            }
        }
    }while(swapped);
}
const arr=[9,2,5,-1,6]; //2 9 5 -1 6 //2 5 9 -1 6 //2 5 -1 9 6 //2 5 -1 6 9
bubblesort(arr);
console.log(arr);