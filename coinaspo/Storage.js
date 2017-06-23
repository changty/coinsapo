import { AsyncStorage } from 'react-native';

var Storage = function(options) {
	const self = this; 

	self.name = '@coinsapo'; 
	if(options && options.name) {
		self.name = options.name; 
	}
	console.log("module set, name is:", self.name)
}

Storage.prototype.set = async function(key, data) {
	const self = this; 
	
	data = JSON.stringify(data); 
	console.log("Saving data:", data); 
	try {
		await AsyncStorage.setItem(self.name + ":" + key, data);
	}
	catch (error) {
		console.log("Error saving data to Storage", error); 
	}
}

Storage.prototype.get = async function(key) {
	const self = this;
	console.log("Loading data by key:", self.name + ":" + key);
	try {
		const value = await AsyncStorage.getItem(self.name + ":" + key); 
		if  (value !== null) {
			value = JSON.parse(value);
			console.log("Found: ", value)

			return value;
		}
	}
	catch(error) {
		console.log("Error getting data from Storage", error); 
	}
	
}

export default function(options) {
	let s = new Storage(options);
	return s;
}