const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    username: { type: String, default: null, require:true },
    password: { type: String, default: null,require:true },
});

module.exports = mongoose.model('account', accountSchema, 'Accounts');