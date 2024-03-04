import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.T8FLD9HF.js","_app/immutable/chunks/scheduler.kAlY8CUs.js","_app/immutable/chunks/index.2OJ4lfVL.js"];
export const stylesheets = ["_app/immutable/assets/2.-DgqbAfF.css"];
export const fonts = [];
