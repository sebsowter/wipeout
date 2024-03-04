import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const css$1 = {
  code: "canvas.svelte-1k1fo63{position:absolute;bottom:0;left:0;width:100%;height:100%}",
  map: null
};
const Terrain = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let canvas;
  $$result.css.add(css$1);
  return `<canvas${add_attribute("width", 1920, 0)}${add_attribute("height", 960, 0)} class="svelte-1k1fo63"${add_attribute("this", canvas, 0)}></canvas>`;
});
const css = {
  code: ".relative.svelte-1ac8adp{position:relative}section.svelte-1ac8adp{flex:1;display:grid;grid-template-columns:1fr;grid-template-rows:1fr auto}.padding.svelte-1ac8adp{position:relative;padding:2rem;pointer-events:none}@media(min-width: 600px){.padding.svelte-1ac8adp{padding:2.4rem}}.row.svelte-1ac8adp{display:flex;flex-direction:column;column-gap:2.4rem}@media(min-width: 600px){.row.svelte-1ac8adp{padding:1.2rem 2.4rem;border-top:1px solid #999;flex-direction:row}}.box.svelte-1ac8adp{padding:1.2rem 2.4rem;border-top:1px solid #999}@media(min-width: 600px){.box.svelte-1ac8adp{padding:0;border:0;flex-direction:row}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-fwnzao_START -->${$$result.title = `<title>Seb Sowter / Interactive Developer</title>`, ""}<meta name="description" content="Seb Sowter. Interactive Developer. Websites, WebGL, Web3 and Web Games."><!-- HEAD_svelte-fwnzao_END -->`, ""} <section class="svelte-1ac8adp"><div class="relative svelte-1ac8adp">${validate_component(Terrain, "Terrain").$$render($$result, {}, {}, {})} <div class="padding svelte-1ac8adp" data-svelte-h="svelte-1jkl3qf"><h1><span>Seb</span><br><span>Sowter</span></h1> <h2><span>INTERACTIVE</span><span>DEVELOPER</span><br><span>WEBSITES</span><span>/</span><span>WEBGL</span><span>/</span><span>WEB3</span><span>/</span><span>WEB GAMES</span></h2></div></div> <div class="row svelte-1ac8adp" data-svelte-h="svelte-18of8zs"><div class="box svelte-1ac8adp"><h3>GitHub</h3> <p><a href="https://github.com/sebsowter">github.com/sebsowter</a></p></div> <div class="box svelte-1ac8adp"><h3>LinkedIn</h3> <p><a href="https://linkedin.com/in/sebsowter">linkedin.com/in/sebsowter</a></p></div></div> </section>`;
});
export {
  Page as default
};
