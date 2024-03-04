

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.4KrXNOjV.js","_app/immutable/chunks/scheduler.kAlY8CUs.js","_app/immutable/chunks/index.2OJ4lfVL.js","_app/immutable/chunks/entry.v3DFTlKz.js"];
export const stylesheets = [];
export const fonts = [];
