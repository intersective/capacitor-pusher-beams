import { WebPlugin } from '@capacitor/core';
import { PusherBeamsPlugin } from './definitions';

export class PusherBeamsWeb extends WebPlugin implements PusherBeamsPlugin {
  constructor() {
    super({
      name: 'PusherBeams',
      platforms: ['web'],
    });
  }

  async addDeviceInterest(options: { interest: string; }): Promise<{ message: string; }> {
    console.log(options);
    throw new Error("Method not implemented.");
  }

  async removeDeviceInterest(options: { interest: string }): Promise<{ success: boolean }> {
    console.log('removeDeviceInterest::', options);
    console.log('removeDeviceInterest:: Method not implemented.')
    return { success : true };
  }

  async setUserID(options: { beamsAuthURL: string; userID: string; headers: JSON; }): Promise<string | { message: string; }> {
    console.log(options);
    // throw new Error("setUserID :: Method not implemented.");
    return { message: 'success'};
  }

  async getDeviceInterests(options: { interests: string[] }): Promise<{ interests: string[] }> {
    console.log(options);
    // throw new Error("getDeviceInterests :: Method not implemented.");
    return { interests: options.interests };
  }
  
  async setDeviceInterests(): Promise<{ success: boolean }> {
    // throw new Error("setDeviceInterests :: Method not implemented.");
    console.log('None set on browser :: Method not implemented.')
    return { success: true };
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
}

const PusherBeams = new PusherBeamsWeb();

export { PusherBeams };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(PusherBeams);
