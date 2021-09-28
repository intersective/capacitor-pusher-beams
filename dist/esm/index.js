import { registerPlugin } from '@capacitor/core';
const PusherBeams = registerPlugin('PusherBeams', {
    web: () => import('./web').then(m => new m.PusherBeamsWeb()),
});
export * from './definitions';
export { PusherBeams };
//# sourceMappingURL=index.js.map