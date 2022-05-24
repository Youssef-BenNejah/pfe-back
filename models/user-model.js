const mongoose = require('mongoose')


const User = new mongoose.Schema(
	{
		name: { type: String, required: true },
		lastname: { type: String, default: "Ben Nejah"  },
		entreprise: { type: String, default: "Esen" },
		adresse: { type: String, default: "Tunis" },
		tel: { type: Number, default: 99200302 },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		role: {
			type: String,
			default: "user",
			enum: ["user", "admin"]
		  },
		resetToken: { type: String},
		expireToken: { type: Date},
		

	},
	
)

const model = mongoose.model('user', User)

module.exports = model