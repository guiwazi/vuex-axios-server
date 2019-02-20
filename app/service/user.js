// app/service/user.js
const Service = require('egg').Service;

class UserService extends Service {
  async reg(body) {
    const ctx = this.ctx;
    let regVar = await ctx.model.User.find({username:body.name})
    if(regVar.length > 0){
    	return {success:true,Message:"已有该用户",code:100}
    }else{
	     const res = await ctx.model.User.create({
	      username:body.name,
	      password:body.password,
	      age:"暂无",
	      img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548989413&di=aae68b7f1bf2c768297322b79a33eda6&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201511%2F04%2F20151104223558_TavBL.jpeg",
	      gender:"暂无",
	      habby:[],
	    }).catch(err =>{
	      return {success:false,err:err}
	    })
	      return {success:true,Message:"注册成功",code:200}
	   
    }
  }

  async login (body) {
    const ctx = this.ctx;
    let regVar = await ctx.model.User.find({username:body.name})
    if (regVar.length > 0) {
    	if (body.password === regVar[0].password) {
    		return {success:true,Message:"登陆成功",code:200,_id:regVar[0]._id}
    	}else {
    	return {success:true,Message:"密码错误，请重新输入",code:100}
    	}
    }else {
    	return {success:true,Message:"无此用户，请注册",code:100}
    }
  }

  async userInfo (body) {
    const ctx = this.ctx;
    let regVar = await ctx.model.User.findOne({_id:body.id})
	regVar.password = "******"
    return {data: regVar,success:true,Message:"成功",code:200}
  }
  async editUserInfo (body) {
  	const ctx = this.ctx;
  	let regVar = await ctx.model.User.findByIdAndUpdate({_id:body._id}, {username: body.username, age: body.age, gender: body.gender})
  	return {success:true,Message:"修改成功",code:200}
 }
}
module.exports = UserService;	