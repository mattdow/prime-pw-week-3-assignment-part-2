console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');

for (let i=0; i<6; i++) {
  console.log(i);
} // Changed the limit of i from 4 to 6.

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');

for (let i=3; i<6; i++) {
  console.log(i);
} // Changed the start from 0 to 3.

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');

for (let i=2; i<11; i+=2) {
  console.log(i);
}
// In this case, I started i at 2 and changed the loop increment to add 2 to i
// each loop instead of 1. Also changed the exit condition to <11 so the loop
// stops after the loop at i = 10.

// 1.d. (STRETCH) TODO: Write a for loop to do a counddown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');

for (let i=5; i>-1; i--) { //changed start to 5, changed increment to decrement
  console.log(i);
}


// 2. For of loops
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
for (let star of stars) {
  console.log(star);
}

// 3. While loops
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
i = 0;
while (i < stars.length) {
  console.log(stars[i]);
  i++;
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
i = 0;
while (i < 6) {
  console.log(i);
  i++;
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
i = 10;
while (i > 4) {
  console.log(i);
  i--;
}
