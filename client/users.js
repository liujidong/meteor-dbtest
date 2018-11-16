import {Users} from '../lib/collection/Users.js';
Template.users.helpers({
	users: function(){
		//调用数据库对象，执行查询
		//find()返回json数据
		return Users.find();
	},
	user:function(){
		var eid = Session.get('editid');
		//console.log('eid:'+eid);
		if(eid != -1){
			var user = Users.findOne({_id:eid});
			//console.log(user);
			return user;
		}
		return null;
	}	
});
Template.users.events({
	'click button':function(e,tpl){
		var name=tpl.$("#username").val();
		var age=tpl.$("#age").val();
		var user = {name:name,age:age};
		//var id=this._id;//此处不能用，特指该条数据的id
		var id = Session.get('editid');
		console.log(id);
		if(id==false || id < 0){
			user._id=Users.insert(user);
			//Session.set("editid",-2);
		}else{
			user._id=id;
			console.log(user);
			Users.update({_id:id},user,function(){
				Session.set("editid",-1);
			});
		}
	}
});