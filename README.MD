TypeScript Debug

- Open this in vscode and run `npm install`
- Open `src/index.ts` and make some breakpoints
- Tap the `F5` to start debug

## Desc

In the launch.json file,the field `runtimeArgs` is pass values to nodejs,so `{ "runtimeArgs": [ "-r", "ts-node/register" ] }` is equal with `node -r ts-node/register`.

and the field `args` is pass values to `*.js` so these can get from `process.args`.

`node -r` is to preload the specified module at startup.Follows require()'s module resolution rules. module may be either a path to a file, or a node module name.

## More document

- [Debug](https://code.visualstudio.com/docs/editor/debugging)
