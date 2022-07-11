function printArray(number){
    var newArray = [];
    for (var i = 1; i <= number; i++){
        newArray.push(i);
    }
    return newArray;
};
console.log(printArray(6));
printArray(1);
 //Qn 2 

 function countTrue(a){
    // newArray = [a];
    count = 0;
    for (var i = 0; i <= a.length;i++){
        if ( a[i] ){
            count +=1
        }
    }
    console.log(count);
 }

 //Qn 3
 function toArray(object){
    for ([key,value] in Object.entries(object)){
        console.log(Object.entries(object));
    }
 }
toArray()

 //Qn 4
 function getVoteCount(upvotes,downvotes){
    difference = upvotes - downvotes;
    console.log(difference)
 }
 getVoteCount(3,33)

