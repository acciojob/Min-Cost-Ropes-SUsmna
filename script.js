function mincost(arr)
{ 
//write your code here
	arr.sort((a,b)=>a-b);
	let totalCost =0;
	while (arr.length>1){
		let min1 = arr.shift();
		let min2 = arr.shift();
		let cost = min1 + min2;
		totalCost +=cost;
		arr.push(cost);
		arr.sort((a,b)=>a-b);
	}
// return the min cost
	return totalCost;
}
module.exports=mincost;
