const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    }
}, { timestamps: true })

const themeSchema = new mongoose.Schema({
	name: {
		required: true,
		type: String
	}
}, { timestamps: true })

const testSchema = new mongoose.Schema({
	name: {
		required: true,
		type: String
	},
	theme_id: {
		required: true,
		type: String,
		ref: 'Theme'
	}
}, { timestamps: true })

const questionSchema = new mongoose.Schema({
	title: {
		required: true,
		type: String
	},
	test_id: {
		required: true,
		type: String,
		ref: 'Test'
	},
	comment: {
		type: String
	}
}, { timestamps: true })

const answerSchema = new mongoose.Schema({
	text: {
		required: true,
		type: String
	},
	question_id: {
		required: true,
		type: String,
		ref: 'Question'
	},
  right: {
		type: Boolean,
    default: false
  }
}, { timestamps: true })

themeSchema.plugin(require('mongoose-lean-virtuals'))
testSchema.plugin(require('mongoose-lean-virtuals'))
questionSchema.plugin(require('mongoose-lean-virtuals'))
answerSchema.plugin(require('mongoose-lean-virtuals'))

module.exports = {
	Data: mongoose.model('Data', dataSchema),
  Theme: mongoose.model('Theme', themeSchema),
  Test: mongoose.model('Test', testSchema),
  Question: mongoose.model('Question', questionSchema),
  Answer: mongoose.model('Answer', answerSchema)
}