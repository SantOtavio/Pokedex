const body = document.querySelector('body');

let tableContainer = document.createElement('div');
tableContainer.id = 'tableContainer';
body.appendChild(tableContainer);


function getPokemonName(userName) {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
        .then(function (resultado) {
            resultado.json().then(function (data) {
                console.log('User Data:', data);
                pegarNomePokemon = function(data){
                    console.log(data.name)
                }

               console.log(data.results.name)
            });
        }).catch(function (erro) {
            console.log('erro:', erro);
        });
}

getPokemonName();




/*function showUserGithub(user) {
    if (!user) return;
    let divName = document.createElement('div');
    divName.innerText = user.login;
    document.body.appendChild(divName);
}*/
