// Write your solution in this file!
let driver = {
    key: "value"
}

function updateDriverWithKeyAndValue(a, b, c) {
    let d = {...a};
    d[b] = c; 
    return a, d
}
function destructivelyUpdateDriverWithKeyAndValue(a, b, c) {
    a[b] = c; 
    return a;
}

function deleteFromDriverByKey(a, b) {
    let d = {...a};
    delete d[b]; 
    return a, d;
}

function destructivelyDeleteFromDriverByKey(a, b) {
    delete a[b]; 
    return a;
}


destructivelyDeleteFromDriverByKey(driver, key)

deleteFromDriverByKey(driver, b)

destructivelyUpdateDriverWithKeyAndValue(driver, key, value);

console.log(updateDriverWithKeyAndValue(driver, address, "11 Broadway"))