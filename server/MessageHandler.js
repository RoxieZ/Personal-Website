const fs = require('fs');

module.exports =  class MessageHandler{
	constructor(){
		this.path = `${__dirname}/msg/`;
	}

	store(name,params,req,res){
		let data = `{color:${params.color}, msg:${params.msg}}`;

		fs.writeFile(this.path+name, data, { flag: 'wx' }, function (err) {
		    if (err) throw err;
		    res.json("It's saved!");
		});
	}

	get(req,res){
		let files = fs.readdirSync(this.path);
		console.log(files);
		let returnDate = null;

		for(let file of files){
			if(file[0]!="."){
				fs.readFile(this.path+file, (err, data)=>{
				    if (err) {
				        throw err;
				    }
				    console.log(data);
				})
			}
			
		}
		res.json(returnDate);
	}

	delete(req,res){

	}

	edit(name,params,req,res){

	}
}