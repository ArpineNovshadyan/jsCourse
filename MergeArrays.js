function Merge2SortedArrays(arr1, arr2) {
    const mergedArr = [];
    let arr1Index = 0;
    let arr2Index = 0;

    if (!arr1.length) {
        return arr2;
    }
    if (!arr2.length) {
        return arr1;
    }
    for (let i = 0; i < arr1.length + arr2.length; ++i) {
        const arr1Empty = arr1Index >= arr1.length;
        const arr2Empty = arr2Index >= arr2.length;
        if (
            !arr1Empty &&
            (arr2Empty || arr1[arr1Index] < arr2[arr2Index])
        ) {
            mergedArr[i] = arr1[arr1Index];
            arr1Index++;
        } else {
            mergedArr[i] = arr2[arr2Index];
            arr2Index++;
        }
    }
    return mergedArr;
}

function MergeNSortedArrays() {
    const args = [...arguments];
    let mergedArr = [];
    if (!args.length) {
        return mergedArr;
    }
    mergedArr = args[0];
    for (let i = 1; i < args.length; ++i) {
        const temp = Merge2SortedArrays(mergedArr, args[i]);
        mergedArr = temp;
    }
    return mergedArr;
}

MergeNSortedArrays([3,7,11], [0, 54], [0, 2, 17], [1,13,17], [7, 11, 17])