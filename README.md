![logo](https://github.com/sebsowter/wipeout/assets/7384630/698b7b05-3809-49e9-badf-d665e1db4f6d)

# Wipeout in WebGL

Welcome, this is an experimental WIP WebGL project. The intention is to create a raceable track in the style of the PS1 game Wipeout. This has been built with [react-three-fiber](https://docs.pmnd.rs/react-three-fiber). The prototype version, before moving to `react-three-fiber`, is on the [vanilla branch](https://github.com/sebsowter/wipeout/tree/vanilla).

## Tasks

```bash
# install project
npm i

# run project locally
npm start

# create production build of project
npm run build

# launch the test runner
npm run test
```

## TODO

- [x] Refactor to use `react-three-fiber`
- [ ] Model terrain in Blender - currently uses a rudimentary height map to generate terrain which is limitting
- [x] Use .json format for vehicle model instead of .obj
- [ ] Vehicle model and texture improvements
- [ ] Add effects - motor light trails and lense flairs
- [x] Add audio mute button
- [ ] Environmental model and texture improvements
- [ ] Sound engineering improvements
- [ ] Fullscreen button for web
- [ ] Mobile controls

## Demo

[View the demo on GitHub](https://sebsowter.github.io/wipeout/)

[Or play on itch.io](https://calabi.itch.io/antigravity?secret=MqnRPz7h3nEsAqRaEp9YNyXhfXo)
