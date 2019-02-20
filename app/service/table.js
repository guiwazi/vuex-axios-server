// app/service/user.js
const Service = require('egg').Service;

class TableService extends Service {
  async addInfo(body) {
    const ctx = this.ctx;
	     const res = await ctx.model.Table.create({
	      name: body.name,
	      tel: body.tel,
	      company: body.company,
	      number: body.number,
	      transport: body.transport,
	      remarks: body.remarks,
	    }).catch(err =>{
	      return {success:false,err:err}
	    })
	      return {success:true,Message:"新增物流信息成功",code:200}	   
  }

  async getTableList (body) {
    const ctx = this.ctx;
    let tableList = await ctx.model.Table.find({}).limit(body.params.limit).skip(body.params.offset * 10)
    let Count = await ctx.model.Table.find()
    let meta = {
      count: Count.length
    }
    return {success:true, data:tableList,code:200,meta: meta} 
  }

  async modifyInfo (body) {
    const ctx = this.ctx;
    let data = await ctx.model.Table.findByIdAndUpdate({_id:body._id}, {
        name: body.name,
        tel: body.tel,
        company: body.company,
        number: body.number,
        transport: body.transport,
        remarks: body.remarks,
      })
    return {success:true,Message:"编辑成功",code:200}
  }

  async deleteInfo (el) {
    const { ctx } = this
    let data = await ctx.model.Table.remove({_id:el})
  }
  
  async searchInfo(body) {
    const ctx = this.ctx
    let vm = body.params
    let obj = {}    
    if(vm.company){
        obj.company = vm.company;
    }
    if(vm.transport){
        obj.transport = vm.transport
    }
    let tableList = await ctx.model.Table.find(obj).limit(10).skip(0)
    let Count = await ctx.model.Table.find(obj)
    let meta = {
      count: Count.length
    }
    return {success:true, data:tableList,code:200,meta: meta}
  }
}
module.exports = TableService;	  