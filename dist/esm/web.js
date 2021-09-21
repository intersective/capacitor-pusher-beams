import { WebPlugin } from '@capacitor/core';
export class PusherBeamsWeb extends WebPlugin {
    constructor() {
        super({
            name: 'PusherBeams',
            platforms: ['web'],
        });
        this.nativeOnly = "Method not implemented for web browser.";
    }
    async addDeviceInterest(options) {
        console.log(options);
        throw new Error(this.nativeOnly);
    }
    async removeDeviceInterest(options) {
        console.log(this.nativeOnly, options);
        return { success: true };
    }
    async setUserID(options) {
        console.log(options);
        return { message: 'success' };
    }
    async getDeviceInterests() {
        console.log(this.nativeOnly);
        return { interests: [] };
    }
    async setDeviceInterests(options) {
        console.log(this.nativeOnly);
        return { interests: options.interests };
    }
    async clearDeviceInterests() {
        console.log(this.nativeOnly);
        return { success: true };
    }
    async clearAllState() {
        console.log(this.nativeOnly);
        return { success: true };
    }
    async stop() {
        console.log(this.nativeOnly);
        return { success: true };
    }
}
//# sourceMappingURL=web.js.map