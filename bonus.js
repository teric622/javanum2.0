// whats wrong with code
// mispelled squared
// never declared a in the function and instead had b
function squared(a) {
    return a * a;
  }
// result
//   squared(5) ➞ 25



function and(a, b) {

    a= 10
    b= 20

if( a < 20 ){

   return (true)
}

else if (a > 20){
return(false)
}

else if (b >= 20){
return(true)
}

else if (b < 20){
    return(false)
    }
    
else if (a <=10 && b >= 20){
    return(true)
}
}


// fixing bug true or false
// buggycode declared never used mispelled
// many syntax errors
function has_bugs(buggyCode) {
    if (buggyCode === true) {
        return 'sad days';
    } 
    else if (buggyCode === false) {
        return `it's a good day`;
        }
    }


//     has_bugs(true) ➞ "sad days"
// has_bugs(false) ➞ "it's a good day"


function dividesEvenly(a, b) {

    if (a % b) {
return true;
    }
else{
    return false;
}

}