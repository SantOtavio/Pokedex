function getPokemonName(userName) {
    fetch('https://api.github.com/users/' + userName)
        .then(function (resultado) {
            resultado.json().then(function (data) {
                console.log('User Data:', data);
                getPokemonName(data);
            });
        }).catch(function (erro) {
            console.log('erro:', erro);
        });
}

function getPokemonName(user) {
    if (!user) return;
    let divName = document.createElement('div');
    divName.innerText = user.login;
    document.body.appendChild(divName);
}