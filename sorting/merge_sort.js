function mergesort(arr){
    if(arr.length<2){
        return arr;
    }
    let mid= Math.floor(arr.length/2);
    let left=arr.slice(0,mid);
    let right=arr.slice(mid);
    return merge(mergesort(left),mergesort(right));
}
function merge(left,right){
    let sorted=[];
    while(left.length && right.length){
        if(left[0]<=right[0]){
            sorted.push(left.shift());
        }
        else{
            sorted.push(right.shift());
        }
    }
    return [...sorted, ...left, ...right];
}
const arr=[-6,20,8,-2,4];
console.log(mergesort(arr));