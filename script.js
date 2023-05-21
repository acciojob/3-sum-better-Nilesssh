function threeSum(arr, target) {
// write your code here
	arr.sort((a,b)=> a-b);
	for (let i = 0; i < arr.length; i++) {
		if(i>1){
			if(arr[i]===target){
			return arr[i]+arr[i-1]+arr[i-2];
			}
		}else if(i==1){
			if(arr[i]===target){
			return arr[i]+arr[i-1]+arr[i+1];
		}
		}else if(i==0){
			if(arr[i]===target){
			return arr[i]+arr[i+1]+arr[i+2];
		}
		}
	}
  
}

module.exports = threeSum;
