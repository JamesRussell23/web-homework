const { model, Schema, SchemaTypes } = require('mongoose');

const CompanySchema = new Schema({
  id: { type: SchemaTypes.ObjectId },
  name: { type: String, default: null },
  description: { type: String, default: null},
  transaction_id: { type: String, default: null },
  total_transactions: {type: Number, default: null},
  credit_line: {type: Number, default: null}
});

const CompanySchema = model('company', CompanySchema);

module.exports = {
  CompanySchema,
  CompanySchema,
  default: CompanySchema
};
