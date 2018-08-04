import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {
  code = [
    {
      title: "Palindrome Checker",
      description: "Function that checks to see if a string is a palindrome.",
      code: `function palindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^a-z0-9]/g, "");
  var split = str.split("");
  var newStr = [];
  for (let i = split.length - 1; i >= 0; i--) {
    newStr.push(split[i]);
  }
  newStr = newStr.join("");
  if (str === newStr) {
    return true;
  } else {
    return false;
  }
}`
  },
  {
    title: "Roman Numeral Converter",
    description: "Function that converts Arabic numerals into Roman numerals.",
    code: `function convertToRoman(num) {
  var roman;
  var arr = [];
  var romanArr = [];
  for (let i = 0; i < num; i++) {
    arr.push("a");
  }
  while (arr.length >= 1) {
    if (arr.length >= 900) {
      while(arr.length >= 1000) {
        arr.splice(0, 1000);
        romanArr.push("M");
      }
      if (arr.length >= 900) {
        arr.splice(0, 900);
        romanArr.push("CM");
      }
    } else if (arr.length >= 400) {
      while(arr.length >= 500) {
        arr.splice(0, 500);
        romanArr.push("D");
      }
      if (arr.length >= 400) {
        arr.splice(0, 400);
        romanArr.push("CD")
      }
    } else if (arr.length >= 90) {
      while(arr.length >= 100) {
        arr.splice(0, 100);
        romanArr.push("C");
      }
      if (arr.length >= 90) {
        arr.splice(0, 90);
        romanArr.push("XC")
      }
      } else if (arr.length >= 40) {
        while(arr.length >= 50) {
          arr.splice(0, 50);
          romanArr.push("L");
        }
        if (arr.length >= 40) {
          arr.splice(0, 40);
          romanArr.push("XL");
        }
      } else if (arr.length >= 9) {
        while(arr.length >= 10) {
          arr.splice(0, 10);
          romanArr.push("X");
        }
        if (arr.length === 9) {
          arr.splice(0, 9);
          romanArr.push("IX");
        }
      } else if (arr.length >= 4) {
        while(arr.length >= 5) {
          arr.splice(0, 5);
          romanArr.push("V");
        }
        if (arr.length === 4) {
          arr.splice(0, 4);
          romanArr.push("IV");
        }
      } else {
        while(arr.length >= 1) {
          arr.splice(0, 1);
          romanArr.push("I");
        }
      }
    }
  roman = romanArr.join("");
  return roman;
}`
  },
  {
    title: "Caesar's Cipher",
    description: "Function that translates a string into and out of Caesar's Cipher, or ROT13 code.",
    code: `function rot13(str) { // LBH QVQ VG!
  var arr = [];
  for (let i = 0; i < str.length; i++) {
    let x = str.charCodeAt(i);
    arr.push(x);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 65 && arr[i] <= 77) {
      arr.splice(i, 1, arr[i] + 13);
    } else if (arr[i] > 77 && arr[i] <= 90) {
      arr.splice(i, 1, arr[i] - 13);
    }
    arr[i] = String.fromCharCode(arr[i]);
  }
  var newStr = arr.join("");
  return newStr;
}`
  },
  {
    title: "Telephone Number Validator",
    description: "Function that uses a regular expression to check if a phone number is valid.",
    code: `function telephoneCheck(str) {
  // Good luck!
  var regex = /^(1\s?)?([0-9]{3}-[0-9]{3}-[0-9]{4})|^(1\s?)?([0-9]{3}\s[0-9]{3}\s[0-9]{4})|^(1\s?)?(\([0-9]{3}\)\([0-9]{3}\)\([0-9]{4}\))|^(1\s?)?(\([0-9]{3}\)\s?[0-9]{3}-[0-9]{4})|^([0-9]{10})/;
  if (str.length === 11 && str[0] !== 1) {
    return false;
  } else if (str.match(regex)) {
    return true;
  } else {
    return false;
  }
}`
  },
  {
    title: "Cash Register",
    description: "Function that takes in a cost, an amount paid, and an array of cash available in a register and returns change.",
    code: `function checkCashRegister(price, cash, cid) {
//ending vars
  var change = [];
  var message = {};
//change vars
  var originalLeft = cash - price;
  var left = originalLeft;
  var changeHundred = 0;
  var changeTwenty = 0;
  var changeTen = 0;
  var changeFive = 0;
  var changeOne = 0;
  var changeQuarter = 0;
  var changeDime = 0;
  var changeNickel = 0;
  var changePenny = 0;
//cid vars
  const hundred = cid[8][1];
  var hundreds = hundred / 100;
  const twenty = cid[7][1];
  var twenties = twenty / 20;
  const ten = cid[6][1];
  var tens = ten / 10;
  const five = cid[5][1];
  var fives = five / 5;
  const one = cid[4][1];
  var ones = one;
  const quarter = cid[3][1];
  var quarters = quarter / 0.25;
  const dime = cid[2][1];
  var dimes = dime / 0.1;
  const nickel = cid[1][1];
  var nickels = nickel / 0.05;
  const penny = cid[0][1];
  var pennies = penny / 0.01;
  var allChange = hundred + twenty + ten + five + one + quarter + dime + nickel + penny;

//check hundreds
  while (left >= 100 && hundreds >= 1) {
    hundreds -= 1;
    left = Number(left - 100).toFixed(2);
    changeHundred += 100;
  }
  if (changeHundred > 0) {
    change.push(["ONE HUNDRED", changeHundred]);
  }
//check twenties
  while (left >= 20 && twenties >= 1) {
    twenties -= 1;
    left = Number(left - 20).toFixed(2);
    changeTwenty += 20;
  }
  if (changeTwenty > 0) {
    change.push(["TWENTY", changeTwenty]);
  }
//check tens
  while (left >= 10 && tens >= 1) {
    tens -= 1;
    left = Number(left - 10).toFixed(2);
    changeTen += 10;
  }
  if (changeTen > 0) {
    change.push(["TEN", changeTen]);
  }
//check fives
  while (left >= 5 && fives >= 1) {
    fives -= 1;
    left = Number(left - 5).toFixed(2);
    changeFive += 5;
  }
  if (changeFive > 0) {
    change.push(["FIVE", changeFive]);
  }
//check ones
  while (left >= 1 && ones >= 1) {
    ones -= 1;
    left = Number(left - 1).toFixed(2);
    changeOne += 1;
  }
  if (changeOne > 0) {
    change.push(["ONE", changeOne]);
  }
//check quarters
  while (left >= 0.25 && quarters >= 1) {
    quarters -= 1;
    left = Number(left - 0.25).toFixed(2);
    changeQuarter += 0.25;
  }
  if (changeQuarter > 0) {
    change.push(["QUARTER", changeQuarter]);
  }
//check dimes
  while (left >= 0.1 && dimes >= 1) {
    dimes -= 1;
    left = Number(left- 0.1).toFixed(2);
    changeDime += 0.1;
  }
  if (changeDime > 0) {
    change.push(["DIME", changeDime]);
  }
//check nickels
  while (left >= 0.05 && nickels >= 1) {
    nickels -= 1;
    left = Number(left - 0.05).toFixed(2);
    changeNickel += 0.05;
  }
  if (changeNickel > 0) {
    change.push(["NICKEL", changeNickel]);
  }
//check pennies
  while (left >= 0.01 && pennies >= 1) {
    pennies -= 1;
    left = Number(left - 0.01).toFixed(2);
    changePenny += 0.01;
  }
  if (changePenny > 0) {
    change.push(["PENNY", changePenny]);
  }
//create message
  if (originalLeft > allChange || parseFloat(left) > 0) {
    message.status = "INSUFFICIENT_FUNDS";
    message.change = [];
  } else if (allChange == originalLeft && parseFloat(left) == 0) {
    message.status = "CLOSED";
    message.change = cid;
  } else {
    message.status = "OPEN";
    message.change = change;
  }

  return message;
}`
  }
  ]
  constructor() { }

  ngOnInit() {
  }

}
