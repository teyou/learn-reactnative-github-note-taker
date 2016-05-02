var api = {
  getBio(username) {
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}`;
    //var url = 'https://api.github.com/users/' + username ;
    console.log('getBio,url:' + url);
    return fetch(url).then((res) => res.json());
  },
  getRepos(username) {
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}/repos`;
    console.log('getRepos,url:' + url);
    return fetch(url).then((res) => res.json());
  },
  getNotes(username) {
    username = username.toLowerCase().trim();
    var url = `https://github-saver-teyou.firebaseio.com/${username}.json`;
    console.log('getNotes,url:' + url);
    return fetch(url).then((res) => res.json());
  },
  addNote(username, note) {
    username = username.toLowerCase().trim();
    var url = `https://github-saver-teyou.firebaseio.com/${username}.json`;
    console.log('addNote,url:' + url, note);
    return fetch(url, { method: 'post', body: JSON.stringify(note) })
      .then((res) => res.json());
  }
};


module.exports = api;
