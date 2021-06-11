let liste = [
    { marque: "ASSER", nom: "Respire TC10", type: "fixe", ecran: null, clavier: null, system: { ram: 32, cpu: { marque: "INTELLE", nom: "X9 900", score: 25000, core: 2, frequenceMax: 5900, tdp: 125 }, hdd: { capacite: 3840, type: "nvme", rpm: null, vitesseTransfert: 3000 }, cg: { marque: "NVADIA", modele: "RTZ 3080", score: 20000 } }, batterie: null, prix: 1000 } //,
    { marque: "ASSER", nom: "Respire TC2", type: "fixe", ecran: null, clavier: null, system: { ram: 16, cpu: { marque: "INTELLE", nom: "X3 300", score: 12000, core: 2, frequenceMax: 4200, tdp: 65 }, hdd: { capacite: 1024, type: "nvme", rpm: null, vitesseTransfert: 3000 }, cg: { marque: "NVADIA", modele: "RTZ 3030", score: 4000 } }, batterie: null, prix: 300 },
    { marque: "ASSER", nom: "Respire TC", type: "fixe", ecran: null, clavier: null, system: { ram: 16, cpu: { marque: "AMDé", nom: "B5 5000", score: 15000, core: 6, frequenceMax: 4200, tdp: 65 }, hdd: { capacite: 1024, type: "nvme", rpm: null, vitesseTransfert: 3000 }, cg: { marque: "NVADIA", modele: "RTZ 3050", score: 6500 } }, batterie: null, prix: 500 },
    { marque: "ASSER", nom: "Swif 15", type: "portable", ecran: { taille: 15, type: "TN", dpi: 100 }, clavier: { chiclet: true, retroeclairage: true, type: "azerty", paveNum: false }, system: { ram: 16, cpu: { marque: "AMDé", nom: "B5 550", score: 12000, core: 6, frequenceMax: 4200, tdp: 25 }, hdd: { capacite: 1024, type: "nvme", rpm: null, vitesseTransfert: 3000 }, cg: { marque: "NVADIA", modele: "mtx 350", score: 4000 } }, batterie: { capacite: 55, autonomie: 6 }, prix: 900 },
    { marque: "ASSER", nom: "Swif 13", type: "portable", ecran: { taille: 13, type: "IPS", dpi: 100 }, clavier: { chiclet: true, retroeclairage: true, type: "azerty", paveNum: false }, system: { ram: 16, cpu: { marque: "AMDé", nom: "B5 550", score: 12000, core: 6, frequenceMax: 4200, tdp: 25 }, hdd: { capacite: 1024, type: "nvme", rpm: null, vitesseTransfert: 3000 }, cg: { marque: "NVADIA", modele: "mtx 350", score: 4000 } }, batterie: { capacite: 55, autonomie: 6 }, prix: 900 },
    { marque: "ASSER", nom: "Swif 14", type: "portable", ecran: { taille: 14, type: "IPS", dpi: 100 }, clavier: { chiclet: true, retroeclairage: false, type: "azerty", paveNum: false }, system: { ram: 16, cpu: { marque: "AMDé", nom: "B3 500", score: 7000, core: 4, frequenceMax: 4000, tdp: 15 }, hdd: { capacite: 1024, type: "ssd", rpm: null, vitesseTransfert: 300 }, cg: { marque: "NVADIA", modele: "RTZ 3050", score: 6500 } }, batterie: { capacite: 55, autonomie: 4 }, prix: 800 },
    { marque: "ROJ", nom: "Flow Z15", type: "portable", ecran: { taille: 15, type: "TN", dpi: 100 }, clavier: { chiclet: true, retroeclairage: true, type: "azerty", paveNum: true }, system: { ram: 32, cpu: { marque: "AMDé", nom: "B9 5000", score: 20000, core: 10, frequenceMax: 4400, tdp: 45 }, hdd: { capacite: 3840, type: "mvne", rpm: null, vitesseTransfert: 3000 }, cg: { marque: "NVADIA", modele: "RTZ 3080", score: 20000 } }, batterie: { capacite: 65, autonomie: 3 }, prix: 1700 },
    { marque: "ROJ", nom: "Flow Z13", type: "portable", ecran: { taille: 13, type: "TN", dpi: 100 }, clavier: { chiclet: true, retroeclairage: true, type: "azerty", paveNum: false }, system: { ram: 16, cpu: { marque: "AMDé", nom: "B7 5000", score: 17000, core: 8, frequenceMax: 4400, tdp: 45 }, hdd: { capacite: 2048, type: "mvne", rpm: null, vitesseTransfert: 3000 }, cg: { marque: "NVADIA", modele: "RTZ 3060", score: 12000 } }, batterie: { capacite: 55, autonomie: 4 }, prix: 1500 },
    { marque: "Azuss", nom: "ZunBook 13", type: "portable", ecran: { taille: 13, type: "IPS", dpi: 200 }, clavier: { chiclet: true, retroeclairage: true, type: "azerty", paveNum: false }, system: { ram: 16, cpu: { marque: "INTELLE", nom: "X7 770Y", score: 7500, core: 4, frequenceMax: 3600, tdp: 12 }, hdd: { capacite: 1024, type: "mvne", rpm: null, vitesseTransfert: 3000 }, cg: { marque: "INTELLE", modele: "HD IRIS", score: 1500 } }, batterie: { capacite: 55, autonomie: 10 }, prix: 1200 },
    { marque: "Azuss", nom: "ZunBook 12", type: "portable", ecran: { taille: 12, type: "IPS", dpi: 100 }, clavier: { chiclet: true, retroeclairage: true, type: "azerty", paveNum: false }, system: { ram: 16, cpu: { marque: "INTELLE", nom: "X5 550Y", score: 6500, core: 4, frequenceMax: 3600, tdp: 10 }, hdd: { capacite: 256, type: "mvne", rpm: null, vitesseTransfert: 3000 }, cg: { marque: "INTELLE", modele: "HD IRIS", score: 1500 } }, batterie: { capacite: 45, autonomie: 8 }, prix: 900 },
    { marque: "Azuss", nom: "VivaBook 15", type: "portable", ecran: { taille: 15, type: "TN", dpi: 72 }, clavier: { chiclet: true, retroeclairage: false, type: "azerty", paveNum: true }, system: { ram: 16, cpu: { marque: "INTELLE", nom: "X5 550", score: 7900, core: 4, frequenceMax: 3600, tdp: 25 }, hdd: { capacite: 2048, type: "hdd", rpm: 7200, vitesseTransfert: 100 }, cg: { marque: "INTELLE", modele: "HD 9000", score: 395 } }, batterie: { capacite: 58, autonomie: 4 }, prix: 700 },
    { marque: "Azuss", nom: "VivaBook 14", type: "portable", ecran: { taille: 14, type: "TN", dpi: 90 }, clavier: { chiclet: true, retroeclairage: false, type: "azerty", paveNum: false }, system: { ram: 8, cpu: { marque: "INTELLE", nom: "X3 300", score: 5200, core: 2, frequenceMax: 3400, tdp: 15 }, hdd: { capacite: 512, type: "ssd", rpm: null, vitesseTransfert: 400 }, cg: { marque: "INTELLE", modele: "HD 9000", score: 395 } }, batterie: { capacite: 45, autonomie: 4 }, prix: 700 },
    { marque: "Azuss", nom: "VivaBook 11", type: "portable", ecran: { taille: 11, type: "TN", dpi: 72 }, clavier: { chiclet: true, retroeclairage: false, type: "azerty", paveNum: false }, system: { ram: 4, cpu: { marque: "INTELLE", nom: "ATAUM", score: 1250, core: 2, frequenceMax: 1900, tdp: 5 }, hdd: { capacite: 256, type: "mmc", rpm: null, vitesseTransfert: 50 }, cg: { marque: "INTELLE", modele: "HD 9000", score: 395 } }, batterie: { capacite: 35, autonomie: 5 }, prix: 400 }
]

let filters = {};

window.addEventListener("DOMContentLoaded", (event) => {

    init();
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

    display();
});

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

function display(input) {
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
    let result = listeFiltre;
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

const listeAAfficher = () => {
    // On filtre la liste a affiché avec le prix selectionné
    return result;
};

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