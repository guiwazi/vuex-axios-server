// app/controller/user.js
const Controller = require('egg').Controller;

class TableController extends Controller {

  async addInfo() {
    const ctx = this.ctx;
    const body = this.ctx.request.body;
    ctx.body = await ctx.service.table.addInfo(body);
  }
  async getTableList() {
    const ctx = this.ctx;
    const body = this.ctx.request.body;
    ctx.body = await ctx.service.table.getTableList(body);
  }
  async modifyInfo() {
    const ctx = this.ctx;
    const body = this.ctx.request.body;
    ctx.body = await ctx.service.table.modifyInfo(body);
  }

  async deleteInfo() {
    const { ctx } = this;
    const { params } = ctx;
    const { id: fid } = params;
    ctx.body = await ctx.service.table.deleteInfo(fid);
  }

  async searchInfo() {
    const ctx = this.ctx;
    const body = this.ctx.request.body;
    ctx.body = await ctx.service.table.searchInfo(body);    
  }
}
module.exports = TableController;
