// app/model/table.js
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
 
  const TableSchema = new Schema({
    name: { type: String },
    tel: {type: String },
    company: { type: String },
    number: { type: String },
    transport:{ type : String },
    remarks:{ type : String }
  });
  // 以上定义了表数据的类型
 
  return mongoose.model('Table', TableSchema,'table');
}
