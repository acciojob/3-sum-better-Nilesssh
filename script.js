function threeSum(arr, target) {
// write your code here
	for (let i = 0; i < arr.length; i++) {
		if(arr[i]===target){
			return arr[i]+arr[i-1]+arr[i-2];
		}
	}
  
}

module.exports = threeSum;
