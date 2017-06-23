var Investment = function(options) {
	const self = this; 
	self.set(options); 
}

Investment.prototype.set = function(options) {
	const self = this; 

	self.name = options.name; 
	self.start = options.start; 
	self.end = options.end; 
	self.interest = options.interest;
	self.capital = options.capital; 
}

Investment.prototype.get = function() {
	const self = this; 

	return {
		name: self.name,
		start: self.start,
		end: self.end,
		interest: self.interest,
		capital: self.capital
	}
}

// Time in days
Investment.prototype.prediction = function(time) {
	const self = this; 

	let a = 360 // days in year


	let k = self.capital; 
	let p = self.interest/100; 
	let n = time/a;

	// K = (1+ (p/100))^n

	// returns K
	return  Math.pow(1+p, n)
}


export default function(options) {
	let i = new Investment(options);
	return i;
}

