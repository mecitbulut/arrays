let arr = ["hello!", 7, ["goodbye", "no for real"]]
console.log(arr)

console.log(arr[2][1])
console.log(arr[0][1])
console.log(arr[1][1])

console.log("\n------\n")

let fruits = ["apple", "banana", "cherry", "strawberry","pineapple"];

console.log("\nfor...of")
for (fruit of fruits) {
    console.log("i like" + fruit + "!")
}

console.log("\nforEach")
fruits.forEach((elemenet) => {
console.log(`i like ${elemenet}!`)
})

console.log("\nfind")
console.log(fruits.filter((element) => {
    return element(0) === "b"
}))

console.log("\nfilter");
console.log(fruits.filter((elemenet) => {
    return elemenet.slice(-1) === "y"
}))

console.log("\map")
console.log(fruits.map((elemenet) => {
    return `I like ${elemenet}!`
}))

console.log("\nreduce")
console.log(fruits.reduce((accumulator, elemenet) => {
    return accumulator + elemenet.length
}, 0))