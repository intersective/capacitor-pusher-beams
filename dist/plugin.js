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
            this.nativeOnly = "Method not implemented for web browser.";
        }
        addDeviceInterest(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(options);
                throw new Error(this.nativeOnly);
            });
        }
        removeDeviceInterest(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(this.nativeOnly, options);
                return { success: true };
            });
        }
        setUserID(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(options);
                return { message: 'success' };
            });
        }
        getDeviceInterests() {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(this.nativeOnly);
                return { interests: [] };
            });
        }
        setDeviceInterests(interests) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(this.nativeOnly);
                return { interests };
            });
        }
        clearDeviceInterests() {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(this.nativeOnly);
                return { success: true };
            });
        }
        clearAllState() {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(this.nativeOnly);
                return { success: true };
            });
        }
        stop() {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(this.nativeOnly);
                return { success: true };
            });
        }
    }
    const PusherBeams = new PusherBeamsWeb();
    core.registerWebPlugin(PusherBeams);

    exports.PusherBeams = PusherBeams;
    exports.PusherBeamsWeb = PusherBeamsWeb;

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
