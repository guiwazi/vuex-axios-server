// app/controller/user.js
const Controller = require('egg').Controller;

class UserController extends Controller {
// 这里的 reg 就是上面 controller.user.reg 里面的 reg
  async reg() {
    const ctx = this.ctx
    let body = this.ctx.request.body
    ctx.body = await ctx.service.user.reg(body)
  }

  async login() {
  	const ctx = this.ctx
  	let body = this.ctx.request.body
  	ctx.body = await ctx.service.user.login(body)
  }

  async userInfo () {
  	const ctx = this.ctx
  	let body = this.ctx.params
  	ctx.body = await ctx.service.user.userInfo(body)
  }

  async editUserInfo () {
  	const ctx = this.ctx
  	let body = this.ctx.request.body
  	ctx.body = await ctx.service.user.editUserInfo(body)
  }
}
module.exports = UserController;
