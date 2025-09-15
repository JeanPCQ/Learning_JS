
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
```
let name = 'Mosh'; //String
let number = 30; //Number
let isApproved = true; //Boolean
let firstName = undefined; //
let lastName = null;
```
Objects (Reference Types)
