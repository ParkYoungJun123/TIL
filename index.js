//문자열의 경우
// const array = [1, 2, 3, 4, 5, 6];

// const reduce = array.reduce((acc, cur) => acc + cur, 0);

// console.log(reduce);

const soccerPlayervalue = [
  {
    name: "Heung-min Son",
    age: 30,
    value: "€70.00m",
  },
  {
    name: "Phil Foden",
    age: 22,
    value: "€110.00m",
  },
  {
    name: "Bukayo Sakaa",
    age: 21,
    value: "€90.00m",
  },
  {
    name: "Lionel Messi",
    age: 35,
    value: "€50.00m",
  },
];

const howMerch = soccerPlayervalue.reduce((acc, cur) => {
  return acc + `${cur.name} is ${cur.value}!!!`;
}, "");
console.log(howMerch);
