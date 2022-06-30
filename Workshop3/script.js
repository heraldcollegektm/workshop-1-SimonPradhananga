function triArea(base, height) {
    return (base* height)/2;
}

function giveMeSomething(a){
    something = 'something' +" "+ a;
    return something;
}

function basketballScore(two,three){
    totalpoint = two * 2 + three * 3;
    return totalpoint;
}

function lessThan100(n1,n2){
    totalsum = n1 + n2;
    if (totalsum < 100){
        return true;
    }else{
        return false;
    }
}

function addup(n){
   var sum= 0;
    for (i= 1; i <= n; i++){
        sum += i;
    }
    return sum;
}
//     i = 0
//        while (i <= n){
//        sum += i
//        i += 1
//     }
// }

// function oddishOrEvenish(a){
//     sum = 0;
//  while (a!= 0){
//     var R = a % 10;
//     sum = sum + R;
//     a= Math.floor(a/10);

//  }
//  if (sum%2 == 0){
//     document.write("Evenish")
//  }else{
//     document.write("Oddish")
//  }
// }

function primeInRange(n1,n2){
    for()

}
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
oddishOrEvenish(12)