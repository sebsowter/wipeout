import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: ".app.svelte-1vy2v4s{display:flex;flex-direction:column;min-height:100vh}main.svelte-1vy2v4s{flex:1;display:flex;flex-direction:column;width:100%;margin:0}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-1vy2v4s"><main class="svelte-1vy2v4s">${slots.default ? slots.default({}) : ``}</main> </div>`;
});
export {
  Layout as default
};
