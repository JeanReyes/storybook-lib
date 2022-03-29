// import { io } from 'socket.io-client'
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// interface ServerToClientEvents {
//     noArg: () => void;
//     basicEmit: (a: number, b: string, c: Buffer) => void;
//     withAck: (d: string, callback: (e: number) => void) => void;
//   }
//   interface ClientToServerEvents {
//     hello: () => void;
//   }
//   interface InterServerEvents {
//     ping: () => void;
//   }
//   interface SocketData {
//     name: string;
//     age: number;
//   }
// please note that the types are reversed
//const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();
var VideoCall = /** @class */ (function () {
    function VideoCall(lbNumber, 
    //private video: boolean = false,
    audio
    //llegan todos los refs del html
    ) {
        if (audio === void 0) { audio = false; }
        this.lbNumber = lbNumber;
        this.audio = audio;
        this.connectToWS = function () {
            console.log('connectToWS');
            //this.chageStatePhoneControls(false);
            var uri = 'wss://4125-190-114-32-200.ngrok.io/v1/facl/phone';
            // const uri = 'ws://localhost:8000/phone';
            // VideoCall.CURRENT_SOCKET = io(uri) 
            // .on('connect', () => {
            //     this.lbNumber.innerText = VideoCall.CURRENT_SOCKET.id; // ref de id de conversacion
            //     //this.chageStatePhoneControls(true);
            // })
            // .on('begin-call', receiveBeginCall)
            // .on('incoming-call', receiveIncomingCall)
            // .on('rtc-peer-offer', receiveRTCOffer)
            // .on('rtc-peer-answer', receiveRTCAnswer)
            // .on('ice-new-candidate', receiveICENewCandidate)
            // .on('hang-up', hangUp)
            // .on('unknown-recipient', notAllowed)
            // .on('recipient-not-available', notAllowed)
            // .on('bad-request', notAllowed)
            // .on('error', handleError);
        };
    }
    VideoCall.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.startLocalVideo()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VideoCall.prototype.startLocalVideo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var devices, params, device, video, constraints, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('startLocalVideo');
                        if (VideoCall.LOCAL_STREAM) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, navigator.mediaDevices.enumerateDevices()];
                    case 1:
                        devices = _b.sent();
                        params = new URLSearchParams(window.location.search);
                        console.log(this.lbNumber);
                        console.log("devices", devices);
                        device = devices.find(function (item) {
                            var _a;
                            var url = (_a = params === null || params === void 0 ? void 0 : params.get('device')) === null || _a === void 0 ? void 0 : _a.toLowerCase();
                            if (url) {
                                item.label.toLowerCase().includes(url);
                            }
                        });
                        console.log("device", device);
                        video = {
                            deviceId: device ? { exact: device.deviceId } : undefined,
                            aspectRatio: {
                                ideal: 1.333333
                            }
                        };
                        constraints = { audio: this.audio, video: video };
                        console.log('mediaConstraints', constraints);
                        _a = VideoCall;
                        return [4 /*yield*/, navigator.mediaDevices.getUserMedia(constraints)];
                    case 2:
                        _a.LOCAL_STREAM = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return VideoCall;
}());
export { VideoCall };
