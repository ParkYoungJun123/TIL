# reduce

기본형

```javascript
Array.property.reduce();

array.reduce(콜백함수, 초기값);
```

콜백함수는 (acc, cur) => {, initialValue}의 형태로 인자로 들어가는 acc는 accumulator 콜백의 첫번째 호출이자 이전 반환값이다. initialValue를 설정해준다면 그 값이 된다.
cur은 currentValue이고 현재 처리가 되는 요소이다.
<br/><br/>

예제 (1)

```javascript
const array = [1, 2, 3, 4, 5, 6];

const reduce = array.reduce((acc, cur) => acc + cur, 0);

console.log(reduce); // 21
```

예제 (2)g

```javascript
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
    name: "Bukayo Saka",
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
console.log(howMerch); // Heung-min Son is €70.00m!!!Phil Foden is €110.00m!!!Bukayo Saka is €90.00m!!!Lionel Messi is €50.00m!!!
```
