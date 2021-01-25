import { WebPlugin } from '@capacitor/core';
import { PusherBeamsPlugin } from './definitions';
export declare class PusherBeamsWeb extends WebPlugin implements PusherBeamsPlugin {
    private nativeOnly;
    constructor();
    addDeviceInterest(options: {
        interest: string;
    }): Promise<{
        message: string;
    }>;
    removeDeviceInterest(options: {
        interest: string;
    }): Promise<{
        success: boolean;
    }>;
    setUserID(options: {
        beamsAuthURL: string;
        userID: string;
        headers: JSON;
    }): Promise<string | {
        message: string;
    }>;
    getDeviceInterests(): Promise<{
        interests: string[];
    }>;
    setDeviceInterests(interests: string[]): Promise<{
        interests: string[];
    }>;
    clearDeviceInterests(): Promise<{
        success: boolean;
    }>;
    clearAllState(): Promise<{
        success: boolean;
    }>;
    stop(): Promise<{
        success: boolean;
    }>;
}
declare const PusherBeams: PusherBeamsWeb;
export { PusherBeams };
