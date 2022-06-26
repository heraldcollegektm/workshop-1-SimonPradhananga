function triArea(base, height) {
    return (base* height)/2;
}
docment.getElementById("demo").innerHTML = x;

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
    for (var i= 0; i <= n; i++){
        sum += i;
    }
    return sum;
}

function oddishOrEvenish(a){
    true1 = "Evenish";
    false2 = "Oddish";
    if (a % 2 == 0){
        return true1;
    }else{
        return false2 ;
    }
}