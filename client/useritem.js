import {Users} from '../lib/collection/Users.js';
Template.useritem.helpers({
	isEditing	: function(){
		//从session中取得editid值
		//到命令行中添加Session支持
		//meteor add session
		var eid = Session.get('editid');
		//console.log('eid:'+eid);
		//console.log('this_id:'+this._id);
		//返回对比结果
		var flag = this._id+''==eid;
		return flag;
	} 
});
Template.useritem.events({
	'click .edit':function(e,tpl){
		e.preventDefault();
		//取得当前用户的_id
		var id=this._id;
		console.log('id:'+id);
		//设置到session
		Session.set('editid',id);
	},
	'click button':function(e,tpl){
		var name=tpl.$("#username").val();
		var age=tpl.$("#age").val();

		var id=this._id;

		Users.update({_id:id},{name:name,age:age},function(){
			Session.set("editid",-1);
		});
	},
	'click .remove':function(e,tpl){
		if(confirm('确定删除？')){
			var id = this._id;
			//调用集合的remove删除
			Users.remove(id);
		}
	}
});