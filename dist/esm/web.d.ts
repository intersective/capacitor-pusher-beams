import { WebPlugin } from '@capacitor/core';
import { PusherBeamsPlugin } from './definitions';
export declare class PusherBeamsWeb extends WebPlugin implements PusherBeamsPlugin {
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
    getDeviceInterests(options: {
        interests: string[];
    }): Promise<{
        interests: string[];
    }>;
    setDeviceInterests(): Promise<{
        success: boolean;
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
