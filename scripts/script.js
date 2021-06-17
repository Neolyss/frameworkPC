const liste = [];
let listeFilter = [];
let filtersSelected = {};
let sort = 0;

window.addEventListener("DOMContentLoaded", (event) => {

    init();

    loadJSON('pcs.json');

    let components = document.getElementById("components");
    let categories = document.getElementById("categories");
    let brand = document.getElementById("brand");
    let pc = document.getElementById("type");
    let proc = document.getElementById("processor");
    let cg = document.getElementById("cg");
    let divComponents = document.getElementById("divComponents");
    let divCategories = document.getElementById("divCategories");
    let divBrand = document.getElementById("divBrand");
    let divType = document.getElementById('divType');
    let divCpuMarque = document.getElementById('divCpuMarque');
    let divCgMarque = document.getElementById('divCgMarque');


    divComponents.style.display = "none";
    divCategories.style.display = "none";
    divBrand.style.display = "none";
    divType.style.display = "none";
    divCpuMarque.style.display = "none";
    divCgMarque.style.display = "none";

    components.addEventListener("click", (event) => { dropDown(divComponents) });
    categories.addEventListener("click", (event) => { dropDown(divCategories) });
    brand.addEventListener("click", (event) => { dropDown(divBrand) });
    pc.addEventListener('click', (event) => { dropDown(divType) });
    proc.addEventListener('click', (event) => { dropDown(divCpuMarque) });
    cg.addEventListener('click', (event) => { dropDown(divCgMarque) });

    document.querySelectorAll(".checkBox").forEach(element => {
        element.addEventListener("click", (event) => onCheckBoxChange(event));
    });
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
                    filter();
                    sortList();
                    display();
                }
            );
        });
}

// Init du slider
const init = () => {
    let slider = document.getElementById("filtrePrix");
    let label = document.getElementById("filtrePrixLabel");
    label.innerHTML = slider.value;

    slider.oninput = function() {
        label.innerHTML = this.value;
        onSliderChange(this.value);
    }
}

// On change du slider
const onSliderChange = (prixSelect) => {
    // Ajout du changement dans le filtre
    filtersSelected['prix'] = prixSelect;
    filter();
    sortList();
    display();
}

function onCheckBoxChange(event) {
    // Ajout de l'état du checkbox dans le filtre 
    let input = event.target;
    if (filtersSelected[input.dataset.filter] == null) {
        filtersSelected[input.dataset.filter] = [];
    }
    let tab = filtersSelected[input.dataset.filter];
    let index = tab.indexOf(input.id);
    if (index > -1) {
        tab.splice(index, 1);
    } else {
        tab.push(input.id);
    }
    console.log(filtersSelected);
    filter();
    sortList();
    display();
}

function select(select) {
    filter();
    sort = Number(select.value);
    sortList();
    display();
}

function filter() {
    listeFilter = liste.filter(
        pc => {
            let status = true;
            for (const [key, value] of Object.entries(filtersSelected)) {
                let res = null;
                if (key === 'prix') {
                    status &= pc.prix < Number(filtersSelected.prix);
                } else {
                    let words = [...key.matchAll(/\w+/g)];
                    res = pc[words[0][0]];
                    for (let i=1; i<words.length; i++) {
                        let subKey = words[i][0];
                        if(res.hasOwnProperty(subKey))
                            res = res[subKey];
                    }
                    if (value.length > 0) {
                        status &= (value.indexOf(res) > -1);
                    }
                }
            }
            return status;
        });
}

function display() {
    let elementHTML = "";
    let resultatFiltre = document.getElementById("resultatFiltre");

    if (listeFilter.length === 0) {
        if (isFiltersEmpty(filtersSelected)) {
            resultatFiltre.innerHTML = "";
        }
    } else {
        listeFilter.forEach(element => {
            elementHTML = elementHTML + createPC(element);

            resultatFiltre.innerHTML = elementHTML;
        });
    }
}

function isFiltersEmpty(object) {
    if (object.length === 0) {
        return true;
    } else {
        for (const arrays in object) {
            if (arrays.length !== 0) {
                return false;
            }
        }
    }
    return true;
}

// Création d'un element html pc
const createPC = (pc) => {
    return '' +
        '<div class="card">' +
            '<img src="' + pc.image + '" alt="img">' +
            '<div class="info">' +
                '<p>Nom : ' + pc.nom + '</p>' +
                '<p>Marque : ' + pc.marque + '</p>' +
                '<p>Prix : ' + pc.prix + '</p>' +
                '<p>Type : ' + pc.type + '</p>' +
                '<p>Processeur : ' + pc.system.cpu.marque + '</p>' +
                '<p>Carte Graphique : ' + pc.system.cg.marque + '</p>' +
                '<p>Rate : ' + pc.rate + '</p>' +
            '</div>' +
        '</div>';
}

// Menu déroulant
function dropDown(div) {
    if (div.style.display === "none") {
        div.style.display = "flex";
    } else {
        div.style.display = "none";
    }
}

function sortList() {
    switch (sort) {
        case 1:
            listeFilter = listeFilter.sort(function(a, b) {
                return a.name - b.name;
            });
            break;
        case 2:
            listeFilter = listeFilter.sort(function(a, b) {
                return a.prix - b.prix;
            });
            break;
        case 3:
            listeFilter = listeFilter.sort(function(a, b) {
                console.log(a.rate);
                return b.prix - a.prix;
            });
            break;
        case 4:
            listeFilter = listeFilter.sort(function(a, b) {
                return b.rate - a.rate;
            });
            break;
        default:
            break;
    }
}

function addAutobuild() {
    let mask = document.getElementById('maskAutobuild');
    mask.style.display = 'block';
    let form = document.getElementById('autobuildForm');
    form.style.display = 'flex';
}

function removeAutobuild() {
    let mask = document.getElementById('maskAutobuild');
    mask.style.display = 'none';
    let form = document.getElementById('autobuildForm');
    form.style.display = 'none';
}