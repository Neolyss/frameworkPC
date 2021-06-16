const liste = [];

window.addEventListener("DOMContentLoaded", (event) => {
    loadJSON('pcs.json');
});

const loadJSON = (link) => {
    fetch(link, { method: 'GET' })
        // On utilise then car on utilise le mécanisme de promesse javascript 
        // (Comme la réponse est disponible après l'appel réseaux, on est dans ce cas forcément en asynchrone)
        .then((response) => {
            // On doit ensuite convertir la reponse que l'on reçoit en JSON.
            response.json().then(
                (data) => {
                    liste.push(...data);
                    showResult(params);
                }
            );
        });
}

function showResult(params) {
    let prix = params.price;
    let categorie = params.categories;
    //console.log(params);
    let listFilter = liste.filter(
        pc => {
            return pc.categorie = categorie;
        }
    );
    console.log(listFilter);
    let val = listFilter.reduce((prev, curr) => Math.abs(curr.prix - prix) < Math.abs(prev.prix - prix) ? curr : prev);
    console.log(val);
    document.getElementsByTagName('main')[0].innerHTML += createPC(val);
}

const createPC = (pc) => {
    return '<div class="card">Nom : ' + pc.nom + ' <br/>Marque : ' + pc.marque + ' <br/> Prix : ' + pc.prix + ' <br/> Type : ' +
        pc.type + '</div>';
}