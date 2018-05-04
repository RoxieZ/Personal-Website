const fs = require('fs');

module.exports =  class MessageHandler{
	constructor(){
		this.path = `${__dirname}/msg/`;
	}

	store(name,params,req,res){
		let data = `{"name":"${req.body.name}", "color":"${params.color}", "msg":"${req.body.msg}"}`;
		if (fs.existsSync(this.path+name)&&!params.color){
			fs.unlink(this.path+name, (err) => {
			  	if (err) throw err;
			  	console.log('deleted');
			  	res.json("It's deleted!");
			});
		}
		else{
			if(fs.existsSync(this.path+name)){
				fs.unlink(this.path+name, (err) => {
				  	if (err) throw err;

					fs.writeFile(this.path+name, data, { flag: 'wx' }, function (err) {
					    if (err) throw err;
					    res.json("It's saved!");
					});
				});
			}
		}
	}

	get(req,res){
		let files = fs.readdirSync(this.path);
		let returnDate = {};

		for(let i=0; i< files.length; i++){
			if(files[i][0]!="."){
				console.log(this.path+files[i]);
				fs.readFile(this.path+files[i], (err, data)=>{
				    if (err) {
				        throw err;
				    }
				    else{

					    returnDate[files[i]] = JSON.parse(data);
					    if(i==files.length-1){

							console.log(returnDate);
					    	res.json(returnDate);
					    }
					}
				})
			}
		}
	}

}