//Question no. 1
function triArea(base, height) {
    return (base* height)/2;    //returns the area of triangle by applying the formula 
}
triArea(3,4);

//Question no. 2
function giveMeSomething(a){        // this function adds "sommething" to the value given
    something = 'something' +" "+ a;
    return something;
}
giveMeSomething("is nothing.");

// Question no. 3
function basketballScore(two,three){       //this function adds the basketball score according to the 3 point and 2 point 
    totalpoint = two * 2 + three * 3;
    return totalpoint;
}
basketballScore(4,3);

//Question no. 4
function lessThan100(n1,n2){    //this function checks the total sum of the given parameter and 
    totalsum = n1 + n2;         // returns true if sum is less than 100 else returns false
    if (totalsum < 100){
        return true;
    }else{
        return false;
    }
}
lessThan100(10,20);

//Question no. 5
function addup(n){      //this function adds the number from starting up to the number given
   var sum= 0;
    for (i= 1; i <= n; i++){
        sum += i;
    }
    return sum;
}
addup(5);

//Question no. 6
function oddishOrEvenish(a){    //this function  adds the digits of the given number and checks whether the
    sum = 0;                    // sum is oddish or evenish
    for (i= 0;  a!= 0; i++){
        var R = a % 10;
        sum += R;
        a = Math.floor(a/10);   //does the truncate division 
    }
    if (sum%2 == 0){
        console.log("Evenish")
    }else{
        console.log("Oddish")
    }
}

    
function primeInRange(n1, n2) {         //this function checks the range and returns true if the range contains at least one prime number 
    num1 = n1;   
    num2 = n2;

    while (num1 <= num2) {
        let i = 2;
        while (i < num1 / 2) {
            if (num1 % i == 0) {
                console.log(true);
                break
            }
            i++;
        }
        num1++;
    };
};

primeInRange(5, 11);



//Question no. 8
function shiftToLeft(n,m){      //this function multiplies the value 'n' with two to the power 'm'
    result = n * (2 ** m);
    return result
}

//Question no. 9
function binary(n){         //this function changes the given decimal value into binary system
decimal = n.toString();
let binary = "";
while (n>=1){
    let bin = n%2;
    binary = bin.toString().concat(binary);
    n = parseInt(n/2);
}
return binary;
}