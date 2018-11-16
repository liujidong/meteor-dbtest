import {Users} from '../lib/collection/Users.js';
Template.useritem.helpers({

});
Template.useritem.events({
	'click .edit':function(e,tpl){
		e.preventDefault();
		//取得当前用户的_id
		var id=this._id;
		//console.log('id:'+id);
		//设置到session
		Session.set('editid',id);
		//return Users.findOne({editid:eid});
	},
	'click .remove':function(e,tpl){
		if(confirm('确定删除？')){
			var id = this._id;
			//调用集合的remove删除
			Users.remove(id);
		}
	}
});