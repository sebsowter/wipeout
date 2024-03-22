# Wipeout in WebGL

Welcome, this is an experimental WebGL project. The intention is to create a raceable track in the style of the PS1 game Wipeout. The code is quite vanilla at the moment. But in order to accomodate a richer UI the intention is to refactor the project to use react-three-fiber.

## Tasks

```bash
# install project
npm i

# run project locally
npx vite

# create production build of project
npm vite build
```

## TODO

- Refactor to use 'react-three-fiber'
- Model terrain in Blender - currently uses a rudimentary height map to generate terrain which is limitting
- Improve vehicle - model and textures
- Add effects - motor light trails and lense flairs
- Add settings UI to control sound
