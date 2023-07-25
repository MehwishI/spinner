//process.stdout.write('hello from spinner1.js... \rheyyy\n');

const array = ["|", "/", "-", "\\", "|"];
let timeout = 100;

for (let i = 0; i < array.length; i++) {
  setTimeout(() => {
    process.stdout.write("\r" + array[i]);
  }, timeout);
  timeout += 200;
  if (i === array.length) {
    i = 0;
  }
}

// setTimeout(() => {
//   process.stdout.write("\r|  ");
// }, 100);

// setTimeout(() => {
//   process.stdout.write("\r/  ");
// }, 300);

// setTimeout(() => {
//   process.stdout.write("\r-  ");
// }, 500);

// setTimeout(() => {
//   process.stdout.write("\r\\  ");
// }, 700);

// setTimeout(() => {
//   process.stdout.write("\r|  ");
// }, 900);

// setTimeout(() => {
//   process.stdout.write("\r/  ");
// }, 1100);

// setTimeout(() => {
//   process.stdout.write("\r-  ");
// }, 1300);

// setTimeout(() => {
//   process.stdout.write("\r\\  ");
// }, 1500);

// setTimeout(() => {
//   process.stdout.write("\r|  ");
// }, 1700);
