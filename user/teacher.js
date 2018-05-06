var User = require('./User');

function Teacher(id,name,age){
	User.apply(this,[id,name,age]);
	this.soso=function(res){
		res.write(this.name+"在看书");
	}
}

module.exports = Teacher;