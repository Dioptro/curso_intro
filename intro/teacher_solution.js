const sort = (array) => {
    const sorted = [];

    array.forEach(element => {
        if (sorted.length > 0) {
            const firstNumber = sorted.find((n) => n >= element)

            if (firstNumber) {
                const lastElementIndex = sorted.indexOf(firstNumber);
                sorted.splice(lastElementIndex, 0, element);
            } else {
                sorted.push(element);
            }
        } else {
            sorted.push(element);
        }
    });

    return sorted;
};

console.log(sort([1, 2, 10, 4]));