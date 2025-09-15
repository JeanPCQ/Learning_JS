
## Variable's
### Rules of Variable
  - Cannot be a reserved keyword
  - Should be meaningful
  - Cannot start with a number (1name)
  - Cannot contain a space of hyphen (-)
  - Are case-sensitive

### Creating Variable
  - <b>let</b> - this gives the opperturnity to change the variable down the road
```
let firstName = 'Jean'
firstName = 'Bob'

console.log(firstName)
```
```
Output {Bob}
```
  - <b>const</b> - locks down the first initial variable
```
const firstName = 'Jean'
firstName = 'Bob'

console.log(firstName)
```
```
Output {TypeError: Assignment to constant variable.}
```

## Primitive/Value types

When it comes to types, there are essentailly only five types in Javascipt.
  - String
  - Number
  - Boolean
  - undefined
  - null

```
let name = 'Mosh'; //String
let stringNumber = '29'; //string
let number = 30; //Number
let isApproved = true; //Boolean
let firstName = undefined;
let lastName = null;
```

## Reference Types
### Object 
A list of property key:values inside curly braces { }.
```
let person = {
  name: 'Jean', age: 29
};

console.log(person)
```
```
output {name: 'Jean', age: 29}
```
```
let person = {
  name: 'Jean', age: 29
};

//1. Dot Notation
person.name = 'John';

//2. Bracket Notation
person['name'] = 'Mary';

//3. Bracket Notation using let
let selection = 'name';
person[selection] = 'James';

console.log(person.name)
```
```
output 1 {John}
output 2 {Mary}
output 3 {James}
```

  - Array 
  - Function


