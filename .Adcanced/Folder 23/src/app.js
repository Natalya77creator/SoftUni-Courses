import { page, render, } from "./lib.js";
import { homeView } from "./view/home.js";
import { showCatalog } from "./view/catalog.js";

const main = document.getElementById('content')

page(decorateContext)
page('/', homeView);
page('/catalog', () => showCatalog);
page('/catalog/:id', () => console.log('details'));
page('/edit/:id', () => console.log('edit'));
page('/create', () => console.log('create'));
page('/login', () => console.log('login'));
page('/register', () => console.log('register'));

page.start();

function decorateContext(ctx, next) {
    ctx.render = renderMain
    next();
}

function renderMain(content) {
    render(content, main)
}



