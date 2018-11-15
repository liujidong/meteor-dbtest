import {Users} from '../lib/collection/Users.js';
Template.users.helpers({
	users: function(){
		//调用数据库对象，执行查询
		//find()返回json数据
		return Users.find();
	}
});