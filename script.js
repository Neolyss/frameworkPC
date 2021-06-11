let liste = [];
let filters = {};

window.addEventListener("DOMContentLoaded", (event) => {

    init();

    loadJSON('pcs.json');

    let components = document.getElementById("components");
    let categories = document.getElementById("categories");
    let brand = document.getElementById("brand");
    let pc = document.getElementById("type");
    let divComponents = document.getElementById("divComponents");
    let divCategories = document.getElementById("divCategories");
    let divBrand = document.getElementById("divBrand");
    let divType = document.getElementById('divType');
    divComponents.style.display = "none";
    divCategories.style.display = "none";
    divBrand.style.display = "none";
    divType.style.display = "none";

    components.addEventListener("click", (event) => { dropDown(divComponents) });
    categories.addEventListener("click", (event) => { dropDown(divCategories) });
    brand.addEventListener("click", (event) => { dropDown(divBrand) });
    pc.addEventListener('click', (event) => { dropDown(divType) });


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
    filters['prix'] = prixSelect;
    display();
}

function onCheckBoxChange(event) {
    // Ajout de l'état du checkbox dans le filtre 
    let input = event.target;
    if (filters[input.dataset.filter] == null) {
        filters[input.dataset.filter] = [];
    }
    let tab = filters[input.dataset.filter];
    let index = tab.indexOf(input.id);
    if (index > -1) {
        tab.splice(index, 1);
    } else {
        tab.push(input.id);
    }
    console.log(filters);
    display();
}

function display() {
    console.log(filters);
    let listeFiltre = liste.filter(
        pc => {
            let status = true;
            for (const [key, value] of Object.entries(filters)) {
                if (key == 'prix') {
                    status &= pc.prix < Number(filters.prix);
                } else {
                    if (value.length > 0) {
                        status &= (value.indexOf(pc[key]) > -1);
                    }
                }
            }
            return status;
        });
    let elementHTML = "";
    let resultatFiltre = document.getElementById("resultatFiltre");

    if (listeFiltre.length == 0) {
        if (!isFiltersEmpty(filters)) {
            resultatFiltre.innerHTML = "";
        }
    } else {
        listeFiltre.forEach(element => {
            elementHTML = elementHTML + createPC(element.nom, element.prix, element.marque, element.type);

            resultatFiltre.innerHTML = elementHTML;
        });
    }
}

function isFiltersEmpty(object) {
    if (object.length == 0) {
        return true;
    } else {
        for (const arrays in object) {
            if (arrays.length != 0) {
                return false;
            }
        }
    }
    return true;
}

// Création d'un element html pc
const createPC = (nom, prix, marque, type) => {
    return '<div class="card">Nom : ' + nom + ' <br/>Marque : ' + marque + ' <br/> Prix : ' + prix + ' <br/> Type : ' + type + '</div>';
}

// Menu déroulant
function dropDown(div) {
    if (div.style.display == "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}