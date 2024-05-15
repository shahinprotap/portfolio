import FeaturePost from "./FeaturePost";
import CoverPost from "./CoverPost";
import BodyOne from "./BodyOne";
import Service from "./Service";
import { Contact } from "./Contact";
import About from "./About";

const Home = () => {
  return (
    <>
      <FeaturePost />
      <CoverPost />
      <Service />
      <Contact />
      <BodyOne />
      <About />
    </>
  );
};

export default Home;

// Closure 

// function getCapital(capital){
//     return function (interest){
//         return(capital * interest) / 100
//     }
// }

// const busnessOne = getCapital(100000)
// console.log(busnessOne)
// busnessOne(25)



// Array Methods
// Array.map(); Array.find(); Array.findIndex(); Array.filter(); Array.reduce(); Array.push(); Array.unshift(); Array.pop(); Array.shift(); Array.concat(); Array.slice(); Array.splice(); Array.reverse();
// Array item random print korar Methods
// const arr = ["shahin", "alam", "hasan", ["raju", "toha",["taibur"]], "baba"];
// const arrLength = arr.length -1;
// const random = Math.floor(Math.random() * arrLength);
// console.log(arr[random])
// Array Duplicate valu replace method
// const number = [1, 2, 2, 3, 3, 4];
// const withoutDuplicate = Array.from(new Set(number));
// console.log(withoutDuplicate);
// console.log(number);
// Array Loop
// const arr = ["shahin", "alam", "hasan", "raju", "toha","taibur"];
// arr.forEach(function(item){
// console.log(item)
// })
// Map for lop er bikolpo
// const arr = ["shahin", "alam", "hasan", "raju", "toha","taibur"];
// const result = arr.map((valu) => {
// console.log(valu)
// })
// Find method sob item itaret korte korte jabe value paile ekta item return kore ber hoye jabe
// const arr = [1, 3, 5, 6, 8, 20, 66, 100];
// const result = arr.find((val) =>{
// return val > 18;
// })
// console.log(result)
// findIndex eta find er motoi but eta array er index return kore
// const arr = [1, 3, 5, 6, 8, 20, 66, 100];
// const result = arr.findIndex((val) =>{
// return val > 18;
// })
// console.log(result)
// filter current value theke jeta dibo tar por theke boro gulo reyurn kore
// const arr = [1, 3, 5, 6, 8, 20, 66, 100];
// const result = arr.filter((val) =>{
// return val > 7;
// })
// console.log(result)
// Reduce method proti item itaret kore carentValue prevValue er mode rakhe evabe porer iten e giya abar prevValue rekhe dey
// const arr = [1, 3, 5, 6, 8, 20, 66, 100];
// const result = arr.reduce((prevValue, carentValue) =>{
// return prevValue + carentValue;
// })
// console.log(result)
// Arry Item add push array laste element e add kore r unshift prothome add kore
// const arr = ["shahin", "alam", "hasan", "raju", "toha","taibur"];
// arr.push("rofiq")
// arr.unshift("rofiq")
// console.log(arr)
// pop last element delete kore r shift prothome delete kore
// const arr = ["shahin", "alam", "hasan", "raju", "toha","taibur"];
// arr.pop()
// arr.shift()
// console.log(arr)
// Sob Array eksathe korar method
// const arr = ["shahin", "alam", "hasan", "raju", "toha","taibur"];
// const arrTwo = ["ma", "baba"]
// const arrThree = ["vai", "bon"]
// const childrenArray = arr.concat(arrTwo, arrThree)
// console.log(childrenArray)
// slice is prothom ekta kop tar por koto khani rakhbo tar por r ekta kop, 1st and 2nd kop er majkhane jeta thakbe seta output pabo, eta mainush vabeo kaj kore
// const arr = ["shahin", "alam", "hasan", "raju", "toha","taibur"];
// const result = arr.slice(1, 5)
// console.log(result)
// console.log(arr)
// splice method 1st kop kotha theke suru hobe 2nd kop koto gula iten remove hobe 3rd joto khusi item add kora jabe, eta kono item delete na koreo new iten add kora jabe, r eta main array change kore , ekhane result print korse je item gulo fele disi oigulo
// const arr = ["shahin", "alam", "hasan", "raju", "toha","taibur"];
// const result = arr.splice(1, 3, "baba", "ma")
// console.log(result)
// console.log(arr)
// const arr = ["shahin", "alam", "hasan", "raju", "toha","taibur"];
// const result = arr.splice(1, 0, "baba", "ma")
// console.log(result)
// console.log(arr)
// ekta raika sob delete
// const result = arr.splice(1, Infinity)
// eta arry item ke ultay e dey
// const number = [1, 2, 3, 4];
// number.reverse();
// console.log(number)

// sob Arry ek sathe korar niyom
// const arr = ["shahin", "alam", "hasan", ["raju", "toha",["taibur"]], "baba"];
// console.log(arr.flat(Infinity))
