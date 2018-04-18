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
        
    },
    getALL: ()=>{
        return new Promise(function(resolve, reject){
            axios.get('/all', {})
            .then(function (response) {
                resolve(response);
            })
            .catch(function (error) {
              reject(error);
            });
        })
        
    },
    delAuthor:(id)=>{
        return new Promise(function(resolve, reject){
            let url = `/authors/${id}`;
            axios.delete(url, {})
            .then(function (response) {
                resolve(response);
            })
            .catch(function (error) {
              reject(error);
            });
        })
    },
    updateAuthor:(id,name)=>{
        return new Promise(function(resolve, reject){
            let url = `/authors/${id}`;
            axios.put(url, {name:name})
            .then(function (response) {
                resolve(response);
            })
            .catch(function (error) {
              reject(error);
            });
        })
    }
}