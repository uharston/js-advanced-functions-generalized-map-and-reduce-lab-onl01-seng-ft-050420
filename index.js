// Add your functions here

function map(array, callback) {
    return array.map(num => {
        return callback(num)
    })
}

function reduce(sourceArray, callback, startValue){
    
    let baseValue = (!!startValue) ? startValue : sourceArray[0]

    for (let i = (!!startValue) ? 0 : 1; i < sourceArray.length; i++) {
      baseValue = callback(sourceArray[i], baseValue)
    }
  
    return baseValue
}

