# sorting-algorithms
Collection of ready-to-use implementation of some basic data structure and algorithms such as: fibonaci, syracuse, stack, queue, ...

## Install

`npm i algorithms`

## Usage

```javascript
const { fiboNumber } = require('algorithms');

console.log(4);
// 5
```

## APIs

### fiboNumber

The Fibonacci series :
The recursion is the ability for a function to call itself
F0 =F1=1
Fn+2 = Fn+1+Fn ∀n∈N

```javascript
fiboNumber(nb)
```

### syraNumber
The series used for the Collatz (Syracuse, 3n+1, Ulam) conjecture :
    Problem :
    u0=k k∈N
    u_(n+1) = 􏰀u_n/2   if u_n is an even number
    u_(n+1) = 3 * u_n + 1   if u_n is an odd number

```javascript
syraNumber(k, nb)
```

### stack


### queue