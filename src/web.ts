import { WebPlugin } from '@capacitor/core';
import { PusherBeamsPlugin } from './definitions';

export class PusherBeamsWeb extends WebPlugin implements PusherBeamsPlugin {
  constructor() {
    super({
      name: 'PusherBeams',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const PusherBeams = new PusherBeamsWeb();

export { PusherBeams };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(PusherBeams);
