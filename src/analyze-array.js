

export function analyzeArray (arr) {
    const average = arr.reduce((acc, curr) => {
        acc+=curr;
        return acc
    },0)/arr.length
    
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    const length = arr.length

    return {
        average,
        min,
        max,
        length
    }
}

console.log(analyzeArray([1,8,3,4,2,6]))