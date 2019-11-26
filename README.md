# W2D2- The Dev Workflow

# Problem

Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though.

## Questions

-How can we tell if it's a whole number?
  -Number.IsInteger()
-How do we get command line agruements
  -`processs.argv`
  -Does the command line give us a `string` or an `number`?
    -`string`
  -How do we convert from a string to a number?
  -`parsefloat`

## Psuedocode

```Get valuses from command line arguments (as an array)
remove first 2 elements from array
sum = 0
for each element in the arguments provided
convert element to a number 
  if element is a number and a whole number
    sum = sum +element

print out the resulting sum

```

