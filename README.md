![logo](https://github.com/sebsowter/wipeout/assets/7384630/698b7b05-3809-49e9-badf-d665e1db4f6d)

# Wipeout in WebGL

Welcome, this is an experimental WIP WebGL project. The intention is to create a raceable track in the style of the PS1 game Wipeout. The code is quite vanilla at the moment. But in order to accomodate a richer UI the intention is to refactor the project to use `react-three-fiber`.

## Demo

[Play the demo on GitHub](https://sebsowter.github.io/wipeout/)

[Play the demo on itch.io](https://calabi.itch.io/antigravity?secret=MqnRPz7h3nEsAqRaEp9YNyXhfXo)

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

- Refactor to use `react-three-fiber`
- Model terrain in Blender - currently uses a rudimentary height map to generate terrain which is limitting
- Vehicle model and texture improvements
- Add effects - motor light trails and lense flairs
- Add settings UI to control sound
- Environmental model and texture improvements
- Sound engineering improvements
