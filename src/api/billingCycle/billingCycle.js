const restful = require('node-restful')
const mongoose = restful.mongoose

/** @@ Billing Cycle Model
 * @ Description: Schema represents the individual billing cycles, with the instances of credit and of debt
 * 
 * @ Log:
 * Luccas Mateus '2018-23-10' >> First definition
 */
const creditSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Type credit name'] },
    value: { type: Number, min: 0, required: [true, 'Type credit value'] }
})

const debtSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Type debt name'] },
    value: { type: Number, min: 0, required: [true, 'Type debt value']},
    status: { type: String, required: false, uppercase: true, enum: ['PAYED', 'PENDING', 'SCHEDULED'] }
})

const billingCycleSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Type billing cycle name'] },
    month: { type: Number, min: 1, max: 12, required: [true, 'Type billing cycle month'] },
    year: { type: Number, min: 1970, max: 2100, required: [true, 'Type billing cycle year'] },
    credits: [creditSchema],
    debts: [debtSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)