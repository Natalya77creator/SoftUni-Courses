
import { render } from "../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import {login, register} from './OKK/data.js'
import { catalogView } from "./views/catalog";
import { createView } from "./views/create.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { loginView } from "./views/login";
import { registerView } from "./views/register.js";
import { furnitureView } from "./views/furniture.js";


page ("/", renderMiddleware, catalogView);
page ("/catalog", renderMiddleware, catalogView);
page ("/create", renderMiddleware, createView);
page ("/details/:id", renderMiddleware, detailsView);
page ("/edit/:id", renderMiddleware, editView);
page ("/login", renderMiddleware, loginView);
page ("/my-furniture", renderMiddleware, furnitureView);
page ("/register", renderMiddleware, registerView);
page ("*", catalogView);
page.start();

const root = document.querySelector('.container')

function renderMiddleware(ctx, next) {
    ctx.render = (content) => render(content, root);
    next();
}
