const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney')

mongoose.Error.messages.general.required = "The attribute '{PATH}' is required"
mongoose.Error.messages.Number.min = "The '{VALUE}' typed is smaller than the limit"
mongoose.Error.messages.Number.max = "The '{VALUE}' typed is bigger than the limit"
mongoose.Error.messages.String.enum = "The '{VALUE}' is not valid to the attribute '{PATH}'."