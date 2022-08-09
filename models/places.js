const mongoose = require('mongoose')

// schema
const placeSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	pic: { 
		type: String, 
		default: 'http://placekitten.com/400/400', 
	},
	cuisines: {
		type: String,
		required: true
	},
	city: {
		type: String,
		default: 'Anytown'
	},
	state: { 
		type: String,
		default: 'USA'
	},
	founded: {
		type: Number,
		min: [1673, 'No way is your resturant that old.'],
		max: [new Date().getFullYear(), 'Year entered is in the future!']
	},
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId, 
			ref: 'Comment'
		}
	]
})

// helper methods
placeSchema.methods.showEstablished = function() {
	return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

// model
module.exports = mongoose.model('Place', placeSchema)