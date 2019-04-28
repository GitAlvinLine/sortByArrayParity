// Given an array A of non-negative integers, 
// return an array consisting of all the even elements of A, 
// followed by all the odd elements of A.

// EX: 
// Input: [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

var sortByArrayParity = function(A) {
    var checkArray = Array.isArray(A)
    var isEmpty = A.length >= 2 
    console.log("Is the argument you enter an array: " + checkArray)
    console.log("Does the array have at least 2 numbers to compare? " + isEmpty)
    if (checkArray === false) {
        console.log("Please enter an array inside the argument")
    } 
    if (isEmpty === false) {
        console.log("Please enter at least 2 numbers to compare.")
    }

    A.sort();
    var result = [];
    var even = [];
    var odd = [];
    for (var i = 0;i < A.length; i++) {
        if (A[i] % 2 === 0) {
            even.push(A[i])
        }
        if (A[i] % 2 === 1) {
            odd.push(A[i])
        }
    }
    result = even.concat(odd)
    console.log(result);
};

sortByArrayParity([4,2,1,3])