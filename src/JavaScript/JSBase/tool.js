/*
    冒泡排序：
    规则：前后两个数两两进行比较，如果符合交换条件就交换两个数位置。
    规律：冒泡排序每一轮排序，都可以找出一个较大的数，放在正确的位置。
    分析：
    比较轮数 = 数组长度 - 1;
    每一轮比较的次数 = 数组长度 - 当前的轮数。
*/
function bubbleSort(arr){
    for (var i = 0; i < arr.length -1; i++){
        for (var j = 0; j < arr.length -(i-1);j++ ){
            if (arr[j] > arr[j+1]){
                var tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
}

/*
    选择排序(打擂台法)
    规则：选出一个位置，这个位置上的数，和后面所有的数进行比较，如果比较出大小就交换两个数位置。
    规律：每一轮都能选出一个最小的数，放在正确的位置。
    分析：比较的轮数 = 数组长度 - 1;
          每一轮比较的次数 = 数组长度 - 当前的轮数
*/
function changeSortAsc(arr){ //升序
    for(var i = 0; i < arr.length - 1; i++){
        //被比较的数的下标
        for(var j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                var tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
}


function changeSortDesc(arr){ //降序
    for(var i = 0; i < arr.length - 1; i++){
        //被比较的数的下标
        for(var j = i + 1; j < arr.length; j++){
            if(arr[i] < arr[j]){
                var tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
}
