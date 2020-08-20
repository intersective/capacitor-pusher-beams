import { WebPlugin } from '@capacitor/core';
import { PusherBeamsPlugin } from './definitions';

export class PusherBeamsWeb extends WebPlugin implements PusherBeamsPlugin {
  constructor() {
    super({
      name: 'PusherBeams',
      platforms: ['web'],
    });
  }

  addDeviceInterest(options: { interest: string; }): Promise<{ message: string; }> {
    console.log(options);
    throw new Error("Method not implemented.");
  }

  async removeDeviceInterest(options: { interest: string }): Promise<{ success: boolean }> {
    console.log('removeDeviceInterest::', options);
    return { success : true };
  }

  setUserID(options: { beamsAuthURL: string; userID: string; headers: JSON; }): Promise<string | { message: string; }> {
    console.log(options);
    throw new Error("setUserID :: Method not implemented.");
  }

  getDeviceInterests(options: { interests: string[] }): Promise<{ interests: string[] }> {
    console.log(options);
    throw new Error("getDeviceInterests :: Method not implemented.");
  }
  
  setDeviceInterests(): Promise<{ success: boolean }> {
    throw new Error("setDeviceInterests :: Method not implemented.");
  }

  async clearDeviceInterests(): Promise<{success: boolean}> {
    console.log('CapacitorPusherBeamsAuthWeb :: clearDeviceInterests');
    return { success: true };
  }

  async clearAllState(): Promise<{success: boolean}> {
    console.log('CapacitorPusherBeamsAuthWeb :: clearAllState');
    return { success: true };
  }

  async stop(): Promise<{success: boolean}> {
    console.log('CapacitorPusherBeamsAuthWeb :: stop');
    return {success: true};
  }

  async goToAppSetting(options: {value: any}): Promise<{value: any}> {
    const anything = options.value  || `Capacitor Push Beams Auth :: TESTING`;
    return anything;
  }
}

const PusherBeams = new PusherBeamsWeb();

export { PusherBeams };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(PusherBeams);
