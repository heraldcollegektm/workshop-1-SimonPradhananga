//Question no. 1
function triArea(base, height) {
    return (base* height)/2;
}
triArea(3,4);

//Question no. 2
function giveMeSomething(a){
    something = 'something' +" "+ a;
    return something;
}
giveMeSomething("is nothing.");

// Question no. 3
function basketballScore(two,three){
    totalpoint = two * 2 + three * 3;
    return totalpoint;
}
basketballScore(4,3);

//Question no. 4
function lessThan100(n1,n2){
    totalsum = n1 + n2;
    if (totalsum < 100){
        return true;
    }else{
        return false;
    }
}
lessThan100(10,20);

//Question no. 5
function addup(n){
   var sum= 0;
    for (i= 1; i <= n; i++){
        sum += i;
    }
    return sum;
}
addup(5);

//Question no. 6
function oddishOrEvenish(a){
    sum = 0;
    for (i= 0;  a!= 0; i++){
        var R = a % 10;
        sum += R;
        a = Math.floor(a/10);
    }
    if (sum%2 == 0){
        console.log("Evenish")
    }else{
        console.log("Oddish")
    }
}

function primeInRange(n1, n2) {
    count = 0; 
    for (i = 1; n1 <= n2; i++){
        for (j = 1; j<  (n1/2)+1; j++){
            if (n1  % j == 0){
                count += 1;
            } break
        }n1+=1;
    }
    if (count == 2){
        return true;
    }else{
        return false;
    }
};




//Question no. 8
function shiftToLeft(n,m){
    result = n * (2 ** m);
    return result
}

//Question no. 9
function binary(n){
decimal = n.toString();
let binary = "";
while (n>=1){
    let bin = n%2;
    binary = bin.toString().concat(binary);
    n = parseInt(n/2);
}
return binary;
}