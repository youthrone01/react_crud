var axios = require("axios");
var Promise = require("bluebird");

module.exports={
    addAuthor: (name)=>{
        return new Promise(function(resolve, reject){
            axios.post('/add', {name:name
            })
            .then(function (response) {
                resolve(response);
            })
            .catch(function (error) {
              reject(error);
            });
        })
        
    }
}