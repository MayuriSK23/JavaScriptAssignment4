/* Q.1 You are given a string S, and your task is to return 
an array B(having a size of 2), where B[0] contains the 
count of character A (uppercase) in string S and B[1] contains 
the count of character D (uppercase) in string S. */

function returnArray() {
    let count1 = 0;
    let count2 = 0;
    let str = "AaBABdDaaDAA"
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "A") {
            count1++;
        }
        else if (str[i] === "D") {
            count2++;
        }
    }
    return [count1, count2]
}

let countA_D = returnArray();
console.log(countA_D);

/* Q.2 Tina is given a string S which contains the first letter of 
all the student names in her class. She got a curiosity to check how 
many people have their names starting from the same alphabet. So given 
a string S, she decided to write a code that finds out the count of 
characters that occur more than once in the string. */

function findDuplicates(str) {
    const arr = str.split('');

    for (let i = 0; i < arr.length; i++) {
        const currentChar = arr[i];
        let count = 0;

        let alreadyCounted = false;
        for (let k = 0; k < i; k++) {
            if (arr[k] === currentChar) {
                alreadyCounted = true;
                break;
            }
        }
        if (alreadyCounted) continue;

        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === currentChar) {
                count++;
            }
        }
        if (count > 1) {
            console.log(`${currentChar}: ${count}`);
        }
    }
    return 
}
findDuplicates("sixtyHeadsInClassRoom");

/* Q.3 You are given a string S containing both uppercase and lowercase letters. 
You need to find out the number of vowels in the given string. */

function countVowels() {
    let str = "Hello! UsEr"
    let arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let count = 0;
    for (items in str) {
        let store = str[items];

        for (things in arr) {
            let store2 = arr[things];

            if (store === store2) {
                count++
            }
        }
    }
    return count;
}
console.log(countVowels());

/* Q.4 You are given two strings S1 and S2 (containing both uppercase and 
lowercase letters), You need to retrun a string which is the concatenation 
of both the given strings. */

function concateStr(str1, str2) {
    let strRes = str1.concat(str2)
    return strRes;
}
console.log(concateStr("JS", "-Assignment"));

/* Q.5 You are given a string S, and your task is to return the length 
of the string S. */

function strLength(str) {
    return str.length;
}
console.log(strLength("Hello World!"));

/* Q.6 You are given a string S consisting of two letters A and D,where each 
character represent the winner of N games played between Aditya and Danish, 
where letter A represents the win of Aditya and letter D represents the win 
of Danish. You need to find out the that which player wins the maximum number 
of games or there is a draw between them.   */

function findWinner() {
    let str = "ADDDAADDAADDAAADD"
    let count = 0
    let count2 = 0
    for (win in str) {
        if (str[win] === "A") {
            count++;
        }
        else if (str[win] === "D") {
            count2++;
        }
    }
    if (count > count2) {
        console.log("Aditya is winner!")
    }
    else if (count < count2) {
        console.log("Danish is winner!")
    }
    else {
        console.log("Match Draw!")
    }
    return
}
findWinner();

/*Q.7 You are given two strings S and P, and your task is to concatenate 
them and return the concatenated string. */

function joinStr(str1, str2) {
    let strRes = str1.concat(str2)
    return strRes;
}
console.log(joinStr("Hello", " Welcome to JS Assignment!"));

/* Q.8 You are given a string S, Your task is to check wether the given string is a Palindrome or not.
A Palindrome is a string, which turnout same when read in reverse direction. Example: "naman" is a Palindrome. String can contain 
both upppercase lowercase letters. */

function palindromeStr() {
    let str = "noon"
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev = rev + str.charAt(i);
    }
    if (str === rev)
        console.log("String is palindrome");
    else
        console.log("String is not palindrome");

    return
}
palindromeStr();

/* Q.9 You are given a string S, Your task is to Reverse the string. 
String can contain both upppercase lowercase letters. */

function reverseStr(str) {
    rev = ""
    for (i = str.length - 1; i >= 0; i--) {
        rev = rev + str.charAt(i)
    }
    return rev;
}
console.log(reverseStr("Hey, Everyone!"));

/* Q.10 You are given two strings S1 and S2, Your task is to print YES 
if both strings are same else print NO. */

function matchStrings(str1, str2) {
    if (str1 === str2) {
        console.log("YES")
    }
    else {
        console.log("NO")
    }
    return
}
matchStrings("javaScript", "javascript")

/* Q.11 You are given a string S, along with a pattern string and a text string.
You need to repalce the pattern string in S to the text string. */

function replaceStr() {
    let str = "Hey! I am You."
    let pattern = "I am You."
    let text = "You JavaScript"
    str.replace(pattern, text)
    return str.replace(pattern, text)
}
console.log(replaceStr());

/* Q.12 You are given a string S, Your task is to split the string with 
respect to spaces. */

function splitSpaces() {
    let str = "I am writing Js Code"
    str.split(" ")
    return str.split(" ")
}
console.log(splitSpaces());

/* Q.13 You are given a string S containing both uppercase and lowercase 
letters. You need to find out the number of vowels and the number of consonants 
in the given string. */

function vowelsConsonents() {
    let str = "Hello, Welcome to JS World!"
    let arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let count_v = 0
    let count_c = 0
    for (let item of str) {
        if (arr.includes(item)) {
            count_v++;
        }
        else if (item.toLowerCase() >= 'a' && item.toLowerCase() <= 'z') {
            count_c++;
        }
    }
    return [count_v, count_c];
}
console.log(vowelsConsonents());

