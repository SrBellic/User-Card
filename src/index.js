const reposEndpoint = "https://api.github.com/users/SrBellic/repos";
const followersEndpoint = "https://api.github.com/users/SrBellic/followers";
const followingEndpoint = "https://api.github.com/users/SrBellic/following";

fetch(reposEndpoint).then((response) => {
  response.json().then((data) => {
    repos.innerHTML = data.length; // Numero de repositorios
  });
});

fetch(followersEndpoint).then((response) => {
  response.json().then((data) => {
    followers.innerHTML = data.length; // Numero de seguidores
  });
});

fetch(followingEndpoint).then((response) => {
  response.json().then((data) => {
    following.innerHTML = data.length; // Numero de seguidos
  });
});
