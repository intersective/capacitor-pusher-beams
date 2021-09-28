import { registerPlugin } from '@capacitor/core';

import type { PusherBeamsPlugin } from './definitions';

const PusherBeams = registerPlugin<PusherBeamsPlugin>('PusherBeams', {
    web: () => import('./web').then(m => new m.PusherBeamsWeb()),
});

export * from './definitions';
export { PusherBeams };
