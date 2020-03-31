
axios.get('https://api.github.com/users/dayvisonos')
 .then(function(response){
     console.log(response);
 })
 .catch(function(error){
    console.warn(error);
 });