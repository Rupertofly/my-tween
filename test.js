let m = require('./dist/index');

const myTween = m.myTween;
let count = 21;
let test1 = myTween(v => console.log(`value is ${v}`), {
  frameRate: 50,
  length: 200,
  max: 32,
});
let test2 = myTween(v => console.log(`otherVal is ${v}`), {
  count: count,
});
console.log(test1);
for (let i = 0; i < count; i++) {
  test1.update();
  test2.update();
  console.log(`and yes value is still ${test1.value}`);
}
