'strict mode';

var unsortedArray = [4,1,6,0,2,9,3];

function quickSort(unsortedArray, left, right){
    if(left >= right){
        return;
    }

    var pivot = unsortedArray[getRandomPivotIndex(left, right)];
    console.log('pivot', pivot);
    var index = partition(unsortedArray, left, right, pivot);
    console.log('index', index);

    quickSort(unsortedArray, left, index-1);
    quickSort(unsortedArray, index, right);
}

function partition(unsortedArray, left, right, pivot){
    while(left <= right){
        if(unsortedArray[left] >= pivot && unsortedArray[right] <= pivot){
            swap(unsortedArray, left, right);
            left++;
            right--;
        }
        if(unsortedArray[left] < pivot){
            left++;
        }
        if(unsortedArray[right] > pivot){
            right--;
        }
    }

    return left;
}

function swap(array, i, j){
    var temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}

function getRandomPivotIndex(start, end){
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

quickSort(unsortedArray, 0, unsortedArray.length-1);
console.log(unsortedArray);