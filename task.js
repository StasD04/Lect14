function arruniq(a) {
    let arr = []
    for (i = 0; i < a.length; i++) {
        if (arr.indexOf(a[i])<0) {
            arr.push(a[i]);
        }
    }
    return arr;
};