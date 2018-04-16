const fs = require('fs');

module.exports =  class MessageHandler{
	constructor(){
		this.path = `${__dirname}/msg/`;
	}

	store(name,params,req,res){
		let data = `{"color":"${params.color}", "msg":"${params.msg}"}`;

		fs.writeFile(this.path+name, data, { flag: 'wx' }, function (err) {
		    if (err) throw err;
		    res.json("It's saved!");
		});
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

	delete(req,res){

	}

	edit(name,params,req,res){

	}
}