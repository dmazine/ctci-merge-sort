'use strict'

function countInversions(arr) {
    return mergeSort(arr, 0, arr.length, new Array(arr.length));
}

function mergeSort(sourceArray, startIndex, endIndex, workArray) {
    const length = endIndex - startIndex;
    if (length < 2) {
        return 0;
    }
    
    let middleIndex = Math.trunc(startIndex + length / 2);

    let inversionsCount = 0;

    inversionsCount += mergeSort(sourceArray, startIndex, middleIndex, workArray);
    inversionsCount += mergeSort(sourceArray, middleIndex, endIndex, workArray);
    inversionsCount += merge(sourceArray, startIndex, middleIndex, endIndex, workArray);
    
    return inversionsCount;
}

function merge(sourceArray, startIndex, middleIndex, endIndex, workArray) {
    let leftIndex = startIndex;
    let rightIndex = middleIndex;

    let workIndex = 0;

    let inversionsCount = 0;
    
    while(leftIndex < middleIndex && rightIndex < endIndex) {
        if (sourceArray[leftIndex] <= sourceArray[rightIndex]) {
            workArray[workIndex++] = sourceArray[leftIndex++];
        } else {
            workArray[workIndex++] = sourceArray[rightIndex++];
            inversionsCount += middleIndex - leftIndex;;
        }
    }

    while (leftIndex < middleIndex) {
        workArray[workIndex++] = sourceArray[leftIndex++];
    }

    while (rightIndex < endIndex) {
        workArray[workIndex++] = sourceArray[rightIndex++];
    }

    copy(workArray, 0, workIndex, sourceArray, startIndex);

    return inversionsCount;
}

function copy(source, startIndex, endIndex, destination, destinationOffset) {
    for(let sourceIndex = startIndex, destinationIndex = destinationOffset; sourceIndex < endIndex; sourceIndex++, destinationIndex++) {
        destination[destinationIndex] = source[sourceIndex];
    }
}

module.exports = countInversions;
