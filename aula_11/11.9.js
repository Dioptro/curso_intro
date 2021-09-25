const fill = (all, element) => {
    const array = [];
        for (i = 0; i < all ; i++) {
            array.push (element);
        }
 
    return array;
};

console.log (fill (2, 3));
console.log (fill (3, 'Jeová'));