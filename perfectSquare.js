const nextPerfectSquare = (numSquare) => Math.sqrt(numSquare) * Math.sqrt(numSquare) ===numSquare ? (Math.sqrt(numSquare)+1)*(Math.sqrt(numSquare)+1): -1
 

console.log(nextPerfectSquare(289))