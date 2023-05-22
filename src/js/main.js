import {globalVariablesInit} from "./modules/global-variables";


// HEADER
// import {initCatalogMenu} from "./modules/header/menu-catalog";
// import {initSearchHeader} from "./modules/search";


const globalsArgs = [
    {
        // name: "productCardInit",
        // value: productCardInit
    },
    {
        // name: 'accordionInit',
        // value: accordionInit
    },
    
];

globalVariablesInit(globalsArgs);



document.addEventListener('DOMContentLoaded', function () {
    // HEADER
    // initCatalogMenu();
    // initSearchHeader();
});