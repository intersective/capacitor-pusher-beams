var capacitorPlugin = (function (exports, core) {
    'use strict';

    var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    class PusherBeamsWeb extends core.WebPlugin {
        constructor() {
            super({
                name: 'PusherBeams',
                platforms: ['web'],
            });
        }
        addDeviceInterest(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(options);
                throw new Error("Method not implemented.");
            });
        }
        removeDeviceInterest(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('removeDeviceInterest::', options);
                console.log('removeDeviceInterest:: Method not implemented.');
                return { success: true };
            });
        }
        setUserID(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(options);
                // throw new Error("setUserID :: Method not implemented.");
                return { message: 'success' };
            });
        }
        getDeviceInterests(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(options);
                // throw new Error("getDeviceInterests :: Method not implemented.");
                return { interests: options.interests };
            });
        }
        setDeviceInterests() {
            return __awaiter(this, void 0, void 0, function* () {
                // throw new Error("setDeviceInterests :: Method not implemented.");
                console.log('None set on browser :: Method not implemented.');
                return { success: true };
            });
        }
        clearDeviceInterests() {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('CapacitorPusherBeamsAuthWeb :: clearDeviceInterests');
                return { success: true };
            });
        }
        clearAllState() {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('CapacitorPusherBeamsAuthWeb :: clearAllState');
                return { success: true };
            });
        }
        stop() {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('CapacitorPusherBeamsAuthWeb :: stop');
                return { success: true };
            });
        }
    }
    const PusherBeams = new PusherBeamsWeb();
    core.registerWebPlugin(PusherBeams);

    exports.PusherBeams = PusherBeams;
    exports.PusherBeamsWeb = PusherBeamsWeb;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
