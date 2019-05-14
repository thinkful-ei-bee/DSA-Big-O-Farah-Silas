/*
1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"

O(1)

2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

O(n)


2.
function isEven(value) {
    if (value % 2 == 0) {
        return true;
    }
    else
        return false;
    }
}

O(1)


3.
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

O(n^2)

4.
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

O(n)

5.
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

o(n)

6.
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

O(n^2)

 */

// 7

// function compute(num) {
//   let result = [];
//   for (let i = 1; i <= num; i++) {

//     if (i === 1) {
//       result.push(0);
//     }
//     else if (i == 2) {
//       result.push(1);
//     }
//     else {
//       result.push(result[i - 2] + result[i - 3]);
//     }
//   }
//   return result;
// }

// console.log(compute(8));

/*
O(n)

Fibbonacci sequence

8.
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

O(log(n))

This function eliminates sections of the input that could
not possibly contain the desired item. So the size of the 
input has little effect on the number of steps.

9.
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

O(1)

10
function isWhat(n) {
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}

O(n)
The for loops n number of times, as long as n is greater
than 1
 */


function TOH(num, source, temp, destination ){
  if(num === 1){
    print(source, destination); // if only one disk, move A -> C
  }
  // if num = 2
  // move A -> B
  //      A -> C
  //      B -> C
  if( num === 2 ) {
    TOH(num-1, source, destination, temp ); // `Moving from source to temporary (A -> B)`
    TOH(num-1, source, temp, destination);
    TOH(num-1, temp, source, destination); // `Moving from source to destination (A -> C)
    //TOH(num-1, temp, source, destination);   // Moving from temporary to destination (B -> C)
  }
  if ( num === 3 ){

    TOH(num-1, source, destination, temp);
    TOH(num-2, source, temp, destination);
    TOH(num-1, temp, source, destination);
    // TOH(num-2, source, temp, destination); // A -> C
    // TOH(num-2, source, destination, temp); // A -> B
    // TOH(num-2, destination, source, temp); // C -> B
    // TOH(num-2, source, temp, destination); // A -> C
    // TOH(num-2, temp, destination, source); // B -> A
    // TOH(num-2, temp, source, destination); // B -> C
    // TOH(num-2, source, temp, destination); // A -> C
  }

  if (num===4) {
    TOH(num-1, source, destination, temp);
    TOH(num-3, source, temp, destination);
    TOH(num-1, temp, source, destination); 
  }

  if (num===5) {
    TOH(num-1, source, destination, temp);
    TOH(num-4, source, temp, destination);
    TOH(num-1, temp, source, destination); 
  }
}
function print(source, dest){
  console.log(`Moving from ${source} to ${dest}`);
}




// Counting Sheep 
// O(n)
function countingSheep(sheep) {

  let i = sheep;
  while(i > 0) {
    console.log(`${i}: Another sheep jumps over the fence.`);
    i--;
  }
  console.log('All the sheep have jumped over the fence.');
}

// Power Calc
// O(n)
function powerCalc(base, exp) {
  for (let i = 1; i < exp; i++) {
    base *= base; 
  }

  console.log(base);
}


// Reverse String
// O(n)
function reverseString(word) {

  let reversedWord = '';

  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  console.log(reversedWord);
}

reverseString('dog');



// Triangular number
// O(n)
function triangularNumber(n) {
    let dots = 0;
    for (let i = n; i >= 0; i--) {
        dots += i;
    }
    console.log(dots);
}

triangularNumber(4);


// String splitter
// O(n)
function stringSplitter(string){
    let newString = ''
    for(let i = 0; i < string.length; i++) {
        if (string[i] !== '/') {
            newString += string[i];
        }  
    }
    console.log(newString);
}

stringSplitter('20/20/2020');


// Fibonacci
// O(n)
function fibonacci(num){
    let fibSequence = [];
    for(let i = 1; i <= num; i++){
        if (i === 1) {
            fibSequence.push(0);
        }
        else if(i === 2) {
            fibSequence.push(1);
        }
        else{
            fibSequence.push(fibSequence[(i - 2)] + fibSequence[(i - 3)]); 
        }
    }
    console.log(fibSequence);
}

fibonacci(10);


// Factorial 
// O(n)
function factorial(num){
    let factorial = 1;
    for (let i = num; i > 0; i--){
        factorial *= i;
    }
    console.log(factorial);
}

factorial(4);




// Time complexities of recursive solutions

// 1. Counting sheep: O(n)

// 2. Calculator: O(n)

// 3. Reverse string: O(n)

// 4. Triangular num: O(n)

// 5. String splitter: O(n)

// 6. Factorial: O(n)

// 7. Fibonacci: O(n)

// 8 . Maze: O(n) 

// 9. Maze2: O(nlog(n)) 

// 10. Anagram: o(n^2)

// 11. Chart: 

// 12. Binary: O(n)
