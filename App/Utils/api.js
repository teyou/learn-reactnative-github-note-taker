var api = {
  getBio(username){
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}`;
    //var url = 'https://api.github.com/users/' + username ;
    console.log('getBio,url:' + url);
    return fetch(url).then((res) => res.json());
  },
  getRepos(username){
    username = username.toLowerCase().trim();
    var url = 'https://api.github.com/users/${username}/repos';
    console.log('getRepos,url:' + url);
    return fetch(url).then((res)=> res.json());
  }
};


module.exports = api;