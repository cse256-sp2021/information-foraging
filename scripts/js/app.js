(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports=[
    {
      "scenario": "You have a daughter, age 3, who attends the Washington University Nursery School and is in the Teddy Bear classroom. You are planning a trip to the library and want to check out some books that connect with something she is doing in school.",
      "question": "What are some potential book topics that relate to something that is going on in her classroom this week?",
      "inputType": "textarea",
      "tag": "book_topics"
    },
    {
      "scenario": "Your son is a student in the Panda Bear classroom and has come home this week singing a song in Spanish. You think he has the words slightly wrong, but your Spanish is a little bit rusty.",
      "question": "Find the lyrics for the songs his class is currently singing in Spanish.",
      "inputType": "textarea",
      "tag": "spanish_lyrics"
    },
    {
      "scenario": "You are a father with a son who is in the Big Bears and Sun Bears classrooms. You know there’s a Donuts with Dads event in the fall and want to make sure to get it onto your work calendar early so that you don’t accidentally schedule something that makes it impossible to attend.",
      "question": "What date and time do you need to block off?",
      "inputType": "textarea",
      "tag": "time_off"
    },
    {
      "scenario": "You have two children that attend Washington University Nursery School. You know that the school has some holidays throughout the year. You want to line up alternative childcare arrangements for the days with no school.",
      "question": "Find all of the dates when you will need alternative care through the end of this year.",
      "inputType": "textarea",
      "tag": "alternate_care"
    },
    {
      "scenario": "A new school year is about to start.",
      "question": "Figure out which forms you need to fill out so that you can have them completed by the first day of school.",
      "inputType": "textarea",
      "tag": "forms"
    },
    {
      "scenario": "You have a daughter in the Teddy Bear classroom at Washington University Nursery School. You would like to find a way to be involved with the school to get a stronger sense of her school experience and to give back.",
      "question": "What options do you have to volunteer for the school?",
      "inputType": "textarea",
      "tag": "volunteer"
    },
    {
      "scenario": "Your son has a birthday coming up soon and you would like to send in a treat to share at school.",
      "question": "Is this ok? What kinds of treats are acceptable? What do you need to do to set it up?",
      "inputType": "textarea",
      "tag": "birthday"
    }
  ]
  
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('data loaded.');
var urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
exports.urlData = {
    raw: urlParams.toString(),
    assignmentID: urlParams.get('assignmentId'),
    hitID: urlParams.get('hitId'),
    workerID: urlParams.get('workerId'),
    submitTo: urlParams.get('turkSubmitTo'),
};
var Data = /** @class */ (function () {
    function Data(rawMturkURLData) {
        this.logs = {};
        this.data = {};
        this.errors = [];
        this.urlData = rawMturkURLData;
    }
    Data.prototype.serialize = function () {
        return JSON.stringify(this);
    };
    return Data;
}());
exports.Data = Data;
exports.data = new Data(exports.urlData);
Object.assign(window, { data: exports.data });
},{}],3:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("../utils/console_wrapper");
var funcs_1 = require("../utils/funcs");
console_wrapper_1.log("event loaded.", 2 /* BASIC */);
function objectToTrackerEvent(obj, action) {
    obj.action = action;
    obj.time = funcs_1.now();
}
exports.objectToTrackerEvent = objectToTrackerEvent;
function isTrackerEvent(obj) {
    return obj.action !== undefined && obj.time !== undefined;
}
exports.isTrackerEvent = isTrackerEvent;
var BaseTrackerEvent = /** @class */ (function () {
    function BaseTrackerEvent(action, eventInitDict) {
        this.custEv = new CustomEvent(action, eventInitDict);
        this.action = action;
        this.time = funcs_1.now();
    }
    Object.defineProperty(BaseTrackerEvent.prototype, "detail", {
        get: function () {
            return this.custEv.detail;
        },
        enumerable: true,
        configurable: true
    });
    return BaseTrackerEvent;
}());
exports.BaseTrackerEvent = BaseTrackerEvent;
// tslint:disable-next-line: max-classes-per-file
var ClickEvent = /** @class */ (function (_super) {
    __extends(ClickEvent, _super);
    function ClickEvent(x, y, id, eventInitDict) {
        var _this = _super.call(this, "click" /* CLICK */, eventInitDict) || this;
        _this.detail.x = x;
        _this.detail.y = y;
        _this.detail.id = id;
        return _this;
    }
    return ClickEvent;
}(BaseTrackerEvent));
exports.ClickEvent = ClickEvent;
// tslint:disable-next-line: max-classes-per-file
var ButtonEvent = /** @class */ (function (_super) {
    __extends(ButtonEvent, _super);
    function ButtonEvent(key, id, eventInitDict) {
        var _this = _super.call(this, "click" /* CLICK */, eventInitDict) || this;
        _this.detail.key = key;
        _this.detail.id = id;
        return _this;
    }
    return ButtonEvent;
}(BaseTrackerEvent));
exports.ButtonEvent = ButtonEvent;
// tslint:disable-next-line: max-classes-per-file
var HistoryEvent = /** @class */ (function (_super) {
    __extends(HistoryEvent, _super);
    function HistoryEvent(url, extra, eventInitDict) {
        var _this = _super.call(this, "history" /* HISTORY */, eventInitDict) || this;
        _this.detail.url = url;
        _this.detail.extra = extra;
        return _this;
    }
    return HistoryEvent;
}(BaseTrackerEvent));
exports.HistoryEvent = HistoryEvent;
},{"../utils/console_wrapper":16,"../utils/funcs":17}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("../utils/console_wrapper");
var event_1 = require("./event");
console_wrapper_1.log("receiver loaded.", 2 /* BASIC */);
var EventReceiver = /** @class */ (function () {
    function EventReceiver() {
        this.map = new Map();
        this.emitter = new EventTarget();
    }
    EventReceiver.prototype.register = function (eventType, callback) {
        this.emitter.addEventListener(eventType, function (event) {
            var trackEv = event
                .detail;
            if (event_1.isTrackerEvent(trackEv) && callback) {
                callback(trackEv);
            }
        });
        if (callback) {
            this.map.set(eventType, callback);
        }
    };
    EventReceiver.prototype.doEvent = function (event) {
        var callback = this.map.get("" + event.action);
        if (callback) {
            callback(event);
        }
    };
    return EventReceiver;
}());
exports.EventReceiver = EventReceiver;
},{"../utils/console_wrapper":16,"./event":3}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("../router/router");
var console_wrapper_1 = require("../utils/console_wrapper");
var history_1 = require("./../router/history");
var document_1 = require("./document");
var elements_1 = require("./elements");
console_wrapper_1.log("banner loaded.", 2 /* BASIC */);
var TopBanner = /** @class */ (function () {
    function TopBanner() {
    }
    TopBanner.show = function () {
        TopBanner.showing = true;
        document_1.D.display(elements_1.Elements.ddUp, true);
        document_1.D.display(elements_1.Elements.ddDown, false);
        document_1.D.display(elements_1.Elements.ddContent, true);
    };
    TopBanner.hide = function () {
        TopBanner.showing = false;
        document_1.D.display(elements_1.Elements.ddDown, true);
        document_1.D.display(elements_1.Elements.ddUp, false);
        document_1.D.display(elements_1.Elements.ddContent, false);
    };
    TopBanner.doDisplayChange = function () {
        TopBanner.showing ? TopBanner.hide() : TopBanner.show();
    };
    TopBanner.setup = function () {
        document_1.D.addEventListener(elements_1.Elements.ddArrow, "click", TopBanner.doDisplayChange);
    };
    TopBanner.showing = true;
    return TopBanner;
}());
exports.TopBanner = TopBanner;
document_1.D.addEventListener("mturk-top-banner-back", "click", function (e) {
    if (history_1.History.canBackward()) {
        router_1.Router.loadWithPathPrefix(history_1.History.backward());
    }
    else {
        alert("There is no page history to go back for at this time!");
    }
});
},{"../router/router":14,"../utils/console_wrapper":16,"./../router/history":13,"./document":6,"./elements":7}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("./../utils/console_wrapper");
console_wrapper_1.log("document loaded.", 2 /* BASIC */);
var D = /** @class */ (function () {
    function D() {
    }
    D.elem = function (elem) {
        if (typeof elem === "string") {
            return D.id(elem);
        }
        else {
            return elem;
        }
    };
    D.display = function (elem, show) {
        elem = D.elem(elem);
        if (show) {
            elem.classList.remove("none");
            elem.classList.add("display");
        }
        else {
            elem.classList.remove("display");
            elem.classList.add("none");
        }
    };
    D.id = function (id) {
        var element = D.doc.getElementById(id);
        if (element === null) {
            throw new Error("Element was not found, id: <" + id + ">.");
        }
        else {
            return element;
        }
    };
    D.claz = function (claz) {
        return D.doc.getElementsByClassName(claz);
    };
    D.tag = function (tag) {
        return D.doc.getElementsByTagName(tag);
    };
    D.image = function (id, url) {
        console_wrapper_1.error(function () { return D.id(id).setAttribute("src", url); });
    };
    D.addEventListener = function (elem, type, listener) {
        elem = this.elem(elem);
        var wrapperFunc = function (e) {
            try {
                listener(e);
            }
            catch (err) {
                console.error(err);
            }
        };
        elem.addEventListener(type, wrapperFunc);
        return wrapperFunc;
    };
    D.each = function (elem, apply) {
        elem = this.elem(elem);
        var children = elem.children;
        for (var i = 0; i < children.length; i++) {
            apply(children[i]);
        }
    };
    D.eachRecur = function (elem, apply) {
        elem = this.elem(elem);
        var children = elem.children;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            apply(child);
            D.eachRecur(child, apply);
        }
    };
    D.create = function (tagName, options) {
        return document.createElement(tagName, options);
    };
    D.doc = document;
    return D;
}());
exports.D = D;
},{"./../utils/console_wrapper":16}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("../utils/console_wrapper");
var document_1 = require("./document");
console_wrapper_1.log('element loaded.', 2 /* BASIC */);
/**
 * These are elements that are in every single project. Even if they are not used they should
 * be place in the project and display should be set to none. This simplifies configuration
 * and some common functions and allows less null checks to be performed overall. If the
 * element does not exist at run time an empty div with that id is created and its display
 * is set to none then appended to the body.
 */
/**
 * Attempts to get an element, if unsuccessful, creates div with id and appends to body.
 *
 * @param id - the id of the element to retrieve.
 */
function makeElemIfNotExist(id) {
    var elem;
    try {
        elem = document_1.D.id(id);
    }
    catch (err) {
        elem = document_1.D.create('div');
        elem.id = id;
        elem.style.display = 'none';
        document.body.append(elem);
    }
    return elem;
}
/**
 * Commonly accessed elements, allows for clearer dom manip on these elements.
 */
exports.Elements = {
    document: document_1.D.doc.documentElement,
    wrapper: makeElemIfNotExist('wrapper'),
    htmlLoc: makeElemIfNotExist('html-loc'),
    innerBody: makeElemIfNotExist('inner-body'),
    ddDown: makeElemIfNotExist('mturk-top-banner-drop-down-button'),
    ddUp: makeElemIfNotExist('mturk-top-banner-collapse-button'),
    ddContent: makeElemIfNotExist('mturk-top-banner-drop-down-content'),
    backButton: makeElemIfNotExist('mturk-top-banner-back'),
    ddArrow: makeElemIfNotExist('mturk-top-banner-arrow'),
    mtTopBannerText: makeElemIfNotExist('mturk-top-banner-text'),
    mtScenarioContext: makeElemIfNotExist('scenario_context'),
    mtScenarioQuestion: makeElemIfNotExist('scenario_question'),
    logFileInput: makeElemIfNotExist('mturk-top-banner-drop-down-content-log-file-input'),
    submitForm: makeElemIfNotExist('mturk-submit-form'),
    modal: makeElemIfNotExist('modal'),
};
},{"../utils/console_wrapper":16,"./document":6}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("../utils/console_wrapper");
var elements_1 = require("./../dom/elements");
console_wrapper_1.log('html loc loaded.', 2 /* BASIC */);
var AppEnum;
(function (AppEnum) {
    AppEnum["INFORMATION_FORAGING"] = "information-foraging";
    AppEnum["COGNITIVE_LOAD"] = "cognitive-load";
    AppEnum["GENDER_MAG"] = "gender-mag";
    AppEnum["ERROR"] = "error";
})(AppEnum = exports.AppEnum || (exports.AppEnum = {}));
var ModeEnum;
(function (ModeEnum) {
    ModeEnum["REAL"] = "real";
    ModeEnum["SANDBOX"] = "sandbox";
    ModeEnum["TEST"] = "test";
    ModeEnum["ERROR"] = "error";
})(ModeEnum = exports.ModeEnum || (exports.ModeEnum = {}));
var HTMLLoc = /** @class */ (function () {
    function HTMLLoc() {
    }
    HTMLLoc.setup = function () {
        HTMLLoc.app = HTMLLoc.elem.dataset.app || AppEnum.ERROR;
        HTMLLoc.mode =
            HTMLLoc.elem.dataset.mode || ModeEnum.ERROR;
        HTMLLoc.scenario = HTMLLoc.elem.dataset.scenario || 'error';
    };
    HTMLLoc.elem = elements_1.Elements.htmlLoc;
    return HTMLLoc;
}());
exports.HTMLLoc = HTMLLoc;
},{"../utils/console_wrapper":16,"./../dom/elements":7}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("./../utils/console_wrapper");
var document_1 = require("./document");
var elements_1 = require("./elements");
console_wrapper_1.log('modal loaded.', 2 /* BASIC */);
var Modal = /** @class */ (function () {
    function Modal() {
    }
    Modal.display = function (src) {
        Modal.elem.setAttribute('style', "left: " + Math.round(window.pageXOffset) + "px; top: " + Math.round(window.pageYOffset) + "px;");
        Modal.elem.classList.replace('hide-modal', 'show-modal');
        document_1.D.each(Modal.elem, function (node) {
            node.src = src;
        });
        document.body.classList.add('noscroll');
    };
    Modal.hide = function () {
        Modal.elem.classList.replace('show-modal', 'hide-modal');
        document_1.D.each(Modal.elem, function (node) {
            node.src = '';
        });
        document.body.classList.remove('noscroll');
    };
    Modal.elem = elements_1.Elements.modal;
    return Modal;
}());
exports.Modal = Modal;
document_1.D.addEventListener(Modal.elem, 'click', function (e) {
    Modal.hide();
});
document_1.D.each(Modal.elem, function (node) {
    document_1.D.addEventListener(node, 'click', function (e) {
        e.preventDefault();
    });
});
},{"./../utils/console_wrapper":16,"./document":6,"./elements":7}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("../utils/console_wrapper");
var funcs_1 = require("./../utils/funcs");
console_wrapper_1.log('scroll loaded.', 2 /* BASIC */);
/**
 * Linear implementation of scrolling.
 * Follows the singleton pattern, call do to start a scroll operation.
 *
 * If a scroll is called when another scroll has already begun an
 * error will be thrown, but the first scroll will continue until completion.
 */
var Scroll = /** @class */ (function () {
    function Scroll(endPos, duration, complete) {
        this.endPos = endPos;
        this.duration = duration;
        this.complete = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            document.dispatchEvent(new CustomEvent('scroll'));
            complete(args);
        };
    }
    Scroll.callback = function (endPos, duration, complete) {
        if (duration === void 0) { duration = 200; }
        if (complete === void 0) { complete = funcs_1.noop; }
        if (Scroll.running) {
            throw new Error('Cannot make multiple calls to scroll at the same time.');
        }
        Scroll.running = true;
        var oldComplete = complete;
        complete = function () {
            Scroll.running = false;
            console_wrapper_1.error(oldComplete);
        };
        this.instance.update(endPos, duration, complete).attemptScroll();
    };
    Scroll.promise = function (endPos, duration) {
        var _this = this;
        if (duration === void 0) { duration = 200; }
        if (Scroll.running) {
            throw new Error('Cannot make multiple calls to scroll at the same time.');
        }
        Scroll.running = true;
        return new Promise(function (resolve, reject) {
            try {
                var runResolver = function () {
                    Scroll.running = false;
                    resolve();
                };
                _this.instance
                    .update(endPos, duration, runResolver)
                    .attemptScroll();
            }
            catch (err) {
                Scroll.running = false;
                reject(err);
            }
        });
    };
    Object.defineProperty(Scroll, "isRunning", {
        get: function () {
            return Scroll.running;
        },
        enumerable: true,
        configurable: true
    });
    Scroll.prototype.update = function (endPos, duration, complete) {
        this.endPos = endPos;
        this.duration = duration;
        this.complete = complete;
        return this;
    };
    Scroll.prototype.calcScrollAmount = function () {
        var curTime = funcs_1.now();
        var steps = Math.max(1, (this.duration - curTime) / Scroll.STEP_IN_MS);
        var curPos = window.pageYOffset;
        return Math.ceil((this.endPos - curPos) / steps);
    };
    Scroll.prototype.scroll = function () {
        window.scroll(0, this.calcScrollAmount());
        if (window.pageYOffset === this.endPos) {
            this.complete();
        }
        else {
            requestAnimationFrame(this.scroll);
        }
    };
    Scroll.prototype.attemptScroll = function () {
        if ('requestAnimationFrame' in window === false) {
            window.scroll(0, this.endPos);
        }
        this.scroll();
    };
    Scroll.STEP_IN_MS = 17;
    Scroll.running = false;
    Scroll.instance = new Scroll(0, 0, funcs_1.noop);
    return Scroll;
}());
exports.Scroll = Scroll;
},{"../utils/console_wrapper":16,"./../utils/funcs":17}],11:[function(require,module,exports){
"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var funcs_1 = require("../utils/funcs");
var data_1 = require("./../data-log/data");
var console_wrapper_1 = require("./../utils/console_wrapper");
var q_params_1 = require("./../utils/q_params");
var document_1 = require("./document");
var elements_1 = require("./elements");
console_wrapper_1.log('submit form loaded.', 2 /* BASIC */);
var k = 'NcF2WRkUbf5tzj4bIvI981FqmS6pMlO83g2j7u5R';
var gate = 'https://2ykopq1oha.execute-api.us-east-1.amazonaws.com/PROD/logs';
var AllowSubmissionDefault = {
    allow: function () { return null; },
    preSubmit: funcs_1.noop,
};
var SubmitForm = /** @class */ (function () {
    function SubmitForm() {
    }
    SubmitForm.setup = function (allowSubmission) {
        var _this = this;
        if (allowSubmission === void 0) { allowSubmission = AllowSubmissionDefault; }
        SubmitForm.submitFunc = function (event) { return __awaiter(_this, void 0, void 0, function () {
            var allowed, qp, hitID, assignmnetID, resp, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        event.preventDefault();
                        allowed = allowSubmission.allow();
                        if (!(allowed === null)) return [3 /*break*/, 4];
                        qp = new URL(window.location.href).searchParams;
                        data_1.data.urlData.raw = window.location.href;
                        data_1.data.urlData.assignmentID = qp.get('assignmentId');
                        data_1.data.urlData.hitID = qp.get('hitId');
                        data_1.data.urlData.workerID = qp.get('workerId');
                        data_1.data.urlData.submitTo = qp.get('turkSubmitTo');
                        if (data_1.data.urlData.assignmentID !== null) {
                            document_1.D.id('assignment-id').value =
                                data_1.data.urlData.assignmentID;
                        }
                        if (data_1.data.urlData.hitID !== null) {
                            document_1.D.id('hit-id').value =
                                data_1.data.urlData.hitID;
                        }
                        elements_1.Elements.submitForm.action = data_1.data.urlData
                            .submitTo;
                        allowSubmission.preSubmit();
                        hitID = data_1.data.urlData.hitID;
                        if (hitID === null) {
                            hitID = 'hitid' + Math.round(Math.random() * 100000);
                        }
                        assignmnetID = data_1.data.urlData.assignmentID;
                        if (assignmnetID === null) {
                            assignmnetID =
                                'assignmnetid' + Math.round(Math.random() * 100000);
                        }
                        return [4 /*yield*/, fetch(gate, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'x-api-key': k,
                                },
                                body: JSON.stringify({
                                    body: JSON.stringify({
                                        sandbox: q_params_1.params.sandbox,
                                        wustl_key: q_params_1.params.wustl_key,
                                        project: q_params_1.params.project,
                                        iteration: q_params_1.params.iteration,
                                        tag: q_params_1.params.tag,
                                        log: data_1.data,
                                    }),
                                }),
                            })];
                    case 1:
                        resp = _c.sent();
                        if (!(resp.status !== 200)) return [3 /*break*/, 3];
                        _a = alert;
                        _b = 'You made a bad request with your submission. The server thinks that you made this error: ';
                        return [4 /*yield*/, resp.json()];
                    case 2:
                        _a.apply(void 0, [_b +
                                (_c.sent()).error]);
                        return [2 /*return*/];
                    case 3:
                        SubmitForm.elem.removeEventListener('submit', SubmitForm.submitFunc);
                        SubmitForm.elem.submit();
                        return [3 /*break*/, 5];
                    case 4:
                        alert(allowed);
                        _c.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        SubmitForm.elem.addEventListener('submit', SubmitForm.submitFunc);
    };
    SubmitForm.elem = elements_1.Elements.submitForm;
    SubmitForm.allowSubmitDefault = { allow: function () { return true; }, preSubmit: funcs_1.noop };
    return SubmitForm;
}());
exports.SubmitForm = SubmitForm;
},{"../utils/funcs":17,"./../data-log/data":2,"./../utils/console_wrapper":16,"./../utils/q_params":20,"./document":6,"./elements":7}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var banner_1 = require("./banner");
var html_loc_1 = require("./html_loc");
var TrackerElements = /** @class */ (function () {
    function TrackerElements() {
    }
    TrackerElements.setupTrackerElements = function () {
        // setup dom elements
        banner_1.TopBanner.setup();
        html_loc_1.HTMLLoc.setup();
    };
    return TrackerElements;
}());
exports.TrackerElements = TrackerElements;
},{"./banner":5,"./html_loc":8}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tracker_1 = require("./../tracker/tracker");
function newHistoryEntry(currURL, hasPrevURL, prevEntry, extra) {
    tracker_1.Tracker.getEventDispatchFunc('history')({ url: currURL, extra: extra });
    return {
        currURL: currURL,
        hasPrevURL: hasPrevURL,
        prevEntry: prevEntry,
        extra: extra,
        nextEntries: [],
    };
}
var History = /** @class */ (function () {
    function History() {
    }
    History.forward = function (url, extra) {
        var histEnt = newHistoryEntry(url, true, History.currhistory, extra);
        History.currhistory.nextEntries.push(histEnt);
        History.currhistory = histEnt;
        return url;
    };
    History.canBackward = function () {
        var _a, _b;
        return (History.currhistory.hasPrevURL &&
            !((_b = (_a = History.currhistory.prevEntry) === null || _a === void 0 ? void 0 : _a.extra) === null || _b === void 0 ? void 0 : _b.wrapper));
    };
    History.backward = function () {
        if (!History.canBackward()) {
            throw new Error('Cannot go back any further.');
        }
        console.log(History.currhistory.prevEntry);
        var prevEntry = History.currhistory.prevEntry;
        var nextURL = prevEntry.currURL;
        var histEnt = newHistoryEntry(nextURL, prevEntry.hasPrevURL, prevEntry.prevEntry, { back: true });
        History.currhistory = histEnt;
        return nextURL;
    };
    History.setup = function (url, extra) {
        History.firstHistory = newHistoryEntry(url, false, undefined, extra);
        History.currhistory = History.firstHistory;
    };
    return History;
}());
exports.History = History;
window.h = History;
},{"./../tracker/tracker":15}],14:[function(require,module,exports){
"use strict";
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var document_1 = require("../dom/document");
var elements_1 = require("../dom/elements");
var modal_1 = require("../dom/modal");
var console_wrapper_1 = require("../utils/console_wrapper");
var funcs_1 = require("../utils/funcs");
var html_loader_1 = require("../utils/html_loader");
var history_1 = require("./history");
console_wrapper_1.log('router loaded.', 2 /* BASIC */);
function testOn(elem, config) {
    return (elem.tagName === config.module &&
        (config.mode === 1 /* ON */ ||
            config.mode === 2 /* STANDARD_ALLOWANCES */));
}
function testAllowance(config) {
    return config.mode === 2 /* STANDARD_ALLOWANCES */;
}
var Router = /** @class */ (function () {
    function Router() {
    }
    Router.configure = function (configs, pathPrefix) {
        configs.forEach(function (config) {
            Router.configs.set(config.module, Router.upgradeConfig(config));
        });
        Router.pathPrefix = pathPrefix;
    };
    Router.setup = function (elem) {
        document_1.D.eachRecur(elem, function (node) {
            var e_1, _a;
            try {
                for (var _b = __values(Router.configs.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var config = _c.value;
                    if (testOn(node, config)) {
                        config.setup(config, node);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    };
    Router.STANDARD_LINK_LISTENER = function (e) {
        return console_wrapper_1.error(function () {
            e.preventDefault();
            var target = e.target;
            var url = target.href;
            history_1.History.forward(Router.getPathName(url));
            var ret = html_loader_1.HTMLLoader.loadURL(url, elements_1.Elements.htmlLoc);
            window.dispatchEvent(new CustomEvent('newPageLoad'));
            return ret;
        });
    };
    Router.ON_COMPLETE_SLL = function (post) {
        var _this = this;
        return function (e) {
            console_wrapper_1.error(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Router.STANDARD_LINK_LISTENER(e)];
                        case 1:
                            _a.sent();
                            post(e);
                            return [2 /*return*/];
                    }
                });
            }); });
        };
    };
    Router.IMAGE_LINK_LISTENER = function (e) {
        return console_wrapper_1.error(function () {
            // TODO: Load modal or load nothing at all, fix this
            e.preventDefault();
            // const target = e.target as HTMLImageElement;
            // const url = target.src;
            // History.forward(Router.getPathName(url));
            // return HTMLLoader.loadURL(url, Elements.htmlLoc);
        });
    };
    Router.FORM_OFF_LISTENER = function (e) {
        e.preventDefault();
        console.error('All forms except for the one in the top header are inactive.');
    };
    Router.defaultAllowancesOn = function () {
        Router.registerAllowance({ regex: Router.EMPTY, func: Router.EMPTY_RESPONDER }, { regex: Router.HASH_TAGS, func: Router.HASH_TAG_RESPONDER }, { regex: Router.AT_SYMBOL, func: Router.AT_SYMBOL_RESPONDER });
    };
    Router.defaultAllowancesOff = function () {
        Router.unregisterAllowance(Router.EMPTY, Router.HASH_TAGS, Router.AT_SYMBOL);
    };
    Router.registerAllowance = function () {
        var regexs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            regexs[_i] = arguments[_i];
        }
        regexs.forEach(function (regex) {
            return Router.linkAllowances.set(regex.regex, regex.func);
        });
    };
    Router.unregisterAllowance = function () {
        var regexs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            regexs[_i] = arguments[_i];
        }
        regexs.forEach(function (regex) { return Router.linkAllowances.delete(regex); });
    };
    Router.clearAllowances = function () {
        Router.linkAllowances.clear();
    };
    Router.load = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        history_1.History.forward(Router.getPathName(url));
                        return [4 /*yield*/, html_loader_1.HTMLLoader.loadURL(url, elements_1.Elements.htmlLoc)];
                    case 1:
                        ret = _a.sent();
                        window.dispatchEvent(new CustomEvent('newPageLoad'));
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    Router.loadWithPathPrefix = function (page) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                ret = html_loader_1.HTMLLoader.loadURL(Router.pathPrefix + page, elements_1.Elements.htmlLoc);
                window.dispatchEvent(new CustomEvent('newPageLoad'));
                return [2 /*return*/, ret];
            });
        });
    };
    Router.upgradeConfig = function (config) {
        return {
            module: config.module,
            mode: config.mode,
            setup: Router.SetupFunctions[config.module],
        };
    };
    Router.getPathName = function (url) {
        var ret = Router.pathRegex.exec(url);
        return ret === null ? url : ret.length > 1 ? ret[1] : url;
    };
    Router.HASH_TAGS = new RegExp('#');
    Router.EMPTY = new RegExp('^$');
    Router.AT_SYMBOL = new RegExp('@');
    Router.HASH_TAG_RESPONDER = funcs_1.noop;
    Router.EMPTY_RESPONDER = function (event) { return event.preventDefault(); };
    Router.AT_SYMBOL_RESPONDER = function (event) {
        return event.preventDefault();
    };
    Router.pathPrefix = '';
    Router.SetupFunctions = {
        A: function (config, elem) {
            var aNode = elem;
            if (testAllowance(config)) {
                var passesRegexTest_1 = true;
                var href_1 = aNode.href;
                Router.linkAllowances.forEach(function (func, regex) {
                    var test = regex.test(href_1);
                    passesRegexTest_1 = passesRegexTest_1 && !test;
                    if (test) {
                        document_1.D.addEventListener(elem, 'click', func);
                    }
                });
                if (passesRegexTest_1) {
                    if (href_1.substr(href_1.length - 3) === 'pdf') {
                        document_1.D.addEventListener(elem, 'click', function (e) {
                            e.preventDefault();
                            modal_1.Modal.display(href_1);
                        });
                    }
                    else {
                        document_1.D.addEventListener(elem, 'click', function (e) {
                            return Router.STANDARD_LINK_LISTENER(e);
                        });
                    }
                }
            }
            else {
                document_1.D.addEventListener(elem, 'click', function (e) {
                    return Router.STANDARD_LINK_LISTENER(e);
                });
            }
        },
        IMG: function (config, elem) {
            var imgNode = elem;
            if (testAllowance(config)) {
                var passesRegexTest_2 = true;
                Router.linkAllowances.forEach(function (func, regex) {
                    var test = !regex.test(imgNode.src);
                    passesRegexTest_2 = passesRegexTest_2 && test;
                    if (test) {
                        document_1.D.addEventListener(elem, 'click', func);
                    }
                });
                if (passesRegexTest_2) {
                    document_1.D.addEventListener(elem, 'click', function (e) {
                        return Router.IMAGE_LINK_LISTENER(e);
                    });
                }
            }
            else {
                document_1.D.addEventListener(elem, 'click', function (e) {
                    return Router.IMAGE_LINK_LISTENER(e);
                });
            }
        },
        FORM: function (config, elem) {
            var formNode = elem;
            if (testAllowance(config)) {
                var passesRegexTest_3 = true;
                Router.linkAllowances.forEach(function (func, regex) {
                    var test = !regex.test(formNode.src);
                    passesRegexTest_3 = passesRegexTest_3 && test;
                    if (test) {
                        document_1.D.addEventListener(elem, 'click', func);
                    }
                });
                if (passesRegexTest_3) {
                    document_1.D.addEventListener(elem, 'submit', Router.FORM_OFF_LISTENER);
                }
            }
            else {
                document_1.D.addEventListener(elem, 'submit', Router.FORM_OFF_LISTENER);
            }
        },
    };
    Router.configs = new Map();
    Router.linkAllowances = new Map();
    Router.pathRegex = /\/([\w]+.html)/;
    return Router;
}());
exports.Router = Router;
},{"../dom/document":6,"../dom/elements":7,"../dom/modal":9,"../utils/console_wrapper":16,"../utils/funcs":17,"../utils/html_loader":18,"./history":13}],15:[function(require,module,exports){
"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var event_1 = require("../data-log/event");
var receiver_1 = require("../data-log/receiver");
var elements_1 = require("../dom/elements");
var tracker_elems_1 = require("../dom/tracker_elems");
var console_wrapper_1 = require("../utils/console_wrapper");
var data_1 = require("./../data-log/data");
var submit_form_1 = require("./../dom/submit_form");
console_wrapper_1.log('tracker loaded.', 2 /* BASIC */);
var Tracker = /** @class */ (function () {
    function Tracker() {
    }
    Tracker.loadScenario = function (scen) {
        var sub = scen.scenario;
        if (sub.length > 50) {
            sub = sub.substring(0, 50);
            var inds = [
                sub.lastIndexOf(' '),
                sub.lastIndexOf('.'),
                sub.lastIndexOf(','),
                sub.lastIndexOf('?'),
                sub.lastIndexOf('!'),
            ];
            var ind = Math.max.apply(Math, __spread(inds));
            sub = sub.substring(0, ind) + '...';
        }
        elements_1.Elements.mtTopBannerText.innerText = sub;
        elements_1.Elements.mtScenarioContext.innerText = scen.scenario;
        elements_1.Elements.mtScenarioQuestion.innerText = scen.question;
        elements_1.Elements.htmlLoc.dataset.task = scen.tag;
    };
    Tracker.start = function (config) {
        console_wrapper_1.setDebugLevel(config.debugLevel);
        // configure tracker specific elements
        tracker_elems_1.TrackerElements.setupTrackerElements();
        submit_form_1.SubmitForm.setup(config.allowSubmission);
        data_1.data.data.task = elements_1.Elements.htmlLoc.dataset.task;
        config.setup();
    };
    Tracker.registerEvent = function (eventType) {
        data_1.data.logs[eventType] = [];
        this.receiver.register(eventType, function (event) {
            data_1.data.logs[eventType].push(event);
        });
        return this.getEventDispatchFunc(eventType);
    };
    Tracker.getEventDispatchFunc = function (eventType) {
        var _this = this;
        return function (evData) {
            if (typeof evData === 'object') {
                if (!event_1.isTrackerEvent(evData)) {
                    event_1.objectToTrackerEvent(evData, eventType);
                }
                _this.receiver.doEvent(evData);
            }
        };
    };
    Tracker.attachData = function (key, attribute) {
        data_1.data.data[key] = attribute;
    };
    Tracker.computeAttribute = function (name, compute) {
        data_1.data.data[name] = compute(data_1.data.data[name]);
    };
    Tracker.lastPos = { x: 0, y: 0, time: 0 };
    Tracker.receiver = new receiver_1.EventReceiver();
    return Tracker;
}());
exports.Tracker = Tracker;
},{"../data-log/event":3,"../data-log/receiver":4,"../dom/elements":7,"../dom/tracker_elems":12,"../utils/console_wrapper":16,"./../data-log/data":2,"./../dom/submit_form":11}],16:[function(require,module,exports){
"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./../data-log/data");
log("console wrapper loaded.", 2 /* BASIC */);
function error(func) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, errorHO(func)()];
        });
    });
}
exports.error = error;
function errorHO(func) {
    var _this = this;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, func(args)];
                }
                catch (error) {
                    data_1.data.errors.push(error);
                    console.error(error);
                }
                return [2 /*return*/];
            });
        });
    };
}
exports.errorHO = errorHO;
var debugLevel = 2 /* BASIC */;
function setDebugLevel(level) {
    debugLevel = level;
}
exports.setDebugLevel = setDebugLevel;
function log(message, importance) {
    if (debugLevel >= importance) {
        console.log(message);
    }
}
exports.log = log;
},{"./../data-log/data":2}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("./console_wrapper");
console_wrapper_1.log("funcs loaded.", 2 /* BASIC */);
// tslint:disable-next-line: no-empty
function noop() { }
exports.noop = noop;
function now() {
    return new Date().getTime();
}
exports.now = now;
},{"./console_wrapper":16}],18:[function(require,module,exports){
"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var document_1 = require("../dom/document");
var console_wrapper_1 = require("./console_wrapper");
var funcs_1 = require("./funcs");
console_wrapper_1.log('html loader loaded.', 2 /* BASIC */);
var HTMLLoader = /** @class */ (function () {
    function HTMLLoader() {
    }
    HTMLLoader.finish = function () {
        HTMLLoader.finished = true;
        HTMLLoader.flattenTSLoadTags();
    };
    HTMLLoader.isFinished = function () {
        return HTMLLoader.finished;
    };
    HTMLLoader.cacheHTML = function (name, content) {
        if (HTMLLoader.finished) {
            throw new Error('Cannot cache new HTML entities after the application has been started.');
        }
        var tsl = document.createElement('ts-load');
        tsl.dataset.name = name;
        tsl.innerHTML = content;
        this.CACHE[name] = tsl;
    };
    HTMLLoader.registerPostLoadFunc = function (func) {
        console_wrapper_1.log('regsiter post load function', 3 /* DETAILED */);
        HTMLLoader.postLoadFunc = func;
    };
    HTMLLoader.load = function (html, elem) {
        return new Promise(function (resolve, reject) {
            try {
                console_wrapper_1.log('begin load', 3 /* DETAILED */);
                var context = document_1.D.elem(elem);
                var range = document.createRange();
                range.selectNodeContents(context);
                var frag = range.createContextualFragment(html);
                HTMLLoader.removeTagsFromDocumentFragment(frag, 'script');
                HTMLLoader.loadAllCachedElements(frag);
                context.innerHTML = '';
                context.appendChild(frag);
                console_wrapper_1.log('end load', 3 /* DETAILED */);
                HTMLLoader.postLoadFunc();
                resolve(true);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    HTMLLoader.loadURL = function (url, elem) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = HTMLLoader).load;
                        return [4 /*yield*/, HTMLLoader.getHTML(url)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), elem])];
                }
            });
        });
    };
    HTMLLoader.getHTML = function (url) {
        return new Promise(function (resolve, reject) {
            try {
                console_wrapper_1.log('begin request', 3 /* DETAILED */);
                var request_1 = new XMLHttpRequest();
                request_1.open('GET', url, true);
                request_1.send(null);
                request_1.onreadystatechange = function () {
                    if (request_1.readyState === 4) {
                        console_wrapper_1.log('resolve request', 3 /* DETAILED */);
                        resolve(request_1.responseText);
                    }
                };
            }
            catch (err) {
                reject(err);
            }
        });
    };
    HTMLLoader.removeTagsFromDocumentFragment = function (frag, tagName) {
        frag.querySelectorAll(tagName).forEach(function (tag) { return frag.removeChild(tag); });
    };
    HTMLLoader.flattenTSLoadTags = function () {
        console_wrapper_1.log('Flattening', 3 /* DETAILED */);
        var s = new Set();
        Object.keys(HTMLLoader.CACHE).forEach(function (name) {
            return (HTMLLoader.CACHE[name] = HTMLLoader.flattenTSLoadTag(HTMLLoader.getCachedContent(name), s, 0));
        });
    };
    HTMLLoader.multipleTabs = function (n) {
        var ret = '';
        for (var i = 0; i < n; i++) {
            ret += '\t';
        }
        return ret;
    };
    HTMLLoader.flattenTSLoadTag = function (elem, flattened, count) {
        var tabs = HTMLLoader.multipleTabs(count);
        if (count > 100) {
            alert('Check the console, an error has occurred.');
            throw new Error('It seems like you might have infinitely recursively nested tags.' +
                '\nHere are all of the tags that have been flattened so far: ' +
                flattened +
                '\nHere is the name of the current element: ' +
                elem.getAttribute('data-name'));
        }
        var name = elem.getAttribute('data-name');
        if (name === null) {
            return null;
        }
        var content = HTMLLoader.getCachedContent(name);
        if (content === null) {
            return null;
        }
        if (flattened.has(name)) {
            return content;
        }
        content.querySelectorAll('script').forEach(function (e) { return e.remove(); });
        content.querySelectorAll('ts-load').forEach(function (e) {
            var child = HTMLLoader.flattenTSLoadTag(e, flattened, count + 1);
            if (child !== null) {
                e.replaceWith(child);
            }
        });
        flattened.add(name);
        return content;
    };
    HTMLLoader.getCachedContent = function (name) {
        if (name === undefined || name === null) {
            return null;
        }
        var content = HTMLLoader.CACHE[name];
        if (content === undefined || content === null) {
            return null;
        }
        return content.cloneNode(true);
    };
    HTMLLoader.loadAllCachedElements = function (frag) {
        frag.querySelectorAll('ts-load').forEach(function (elem) {
            var name = elem.getAttribute('data-name');
            var content = HTMLLoader.getCachedContent(name);
            if (content != null) {
                elem.replaceWith(content);
            }
        });
    };
    HTMLLoader.CACHE = {};
    HTMLLoader.finished = false;
    HTMLLoader.postLoadFunc = funcs_1.noop;
    return HTMLLoader;
}());
exports.HTMLLoader = HTMLLoader;
},{"../dom/document":6,"./console_wrapper":16,"./funcs":17}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var elements_1 = require("../dom/elements");
var document_1 = require("./../dom/document");
var console_wrapper_1 = require("./console_wrapper");
console_wrapper_1.log("id generator loaded", 2 /* BASIC */);
var IDGenerator = /** @class */ (function () {
    function IDGenerator() {
    }
    IDGenerator.reset = function () {
        IDGenerator.idCount = 0;
    };
    Object.defineProperty(IDGenerator, "next", {
        get: function () {
            IDGenerator.idCount += 1;
            return IDGenerator.prefix + IDGenerator.idCount;
        },
        enumerable: true,
        configurable: true
    });
    IDGenerator.applyID = function (elem) {
        elem.id = elem.id ? elem.id : IDGenerator.next;
    };
    /**
     * Recursively adds ids to all elements that are below the given
     * element in the heirarchy.
     *
     * @param elem - the element to start applying ids to its children.
     *                  Will not apply an id to this element.
     */
    IDGenerator.applyRecur = function (elem) {
        document_1.D.eachRecur(elem, this.applyID);
    };
    /**
     * Attaches ids to all html elements in the target location in the DOM that do not have ids.
     */
    IDGenerator.attachIdsToAllElements = function () {
        IDGenerator.applyRecur(elements_1.Elements.htmlLoc);
    };
    IDGenerator.idCount = 0;
    IDGenerator.prefix = "auto_gen_id_unq_";
    return IDGenerator;
}());
exports.IDGenerator = IDGenerator;
},{"../dom/elements":7,"./../dom/document":6,"./console_wrapper":16}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qParams = new URL(window.location.href).searchParams; // TODO: Fix query params
exports.params = {
    wustl_key: '',
    sandbox: false,
    project: '',
    iteration: 0,
    tag: '',
};
try {
    if (['wustl_key', 'sandbox', 'project', 'iteration', 'tag'].every(function (key) {
        return qParams.has(key);
    })) {
        exports.params.wustl_key = qParams.get('wustl_key');
        exports.params.sandbox = qParams.get('sandbox') === 'true';
        exports.params.project = qParams.get('project');
        exports.params.iteration = parseInt(qParams.get('iteration'), 10);
        exports.params.tag = qParams.get('tag');
    }
    else {
        alert('This HIT is broken, sorry for the inconvenience. Please contact the Requester as this is not intended to happen.');
    }
}
catch (e) {
    console.log(e);
    alert('This HIT is broken, sorry for the inconvenience. Please contact the Requester as this is not intended to happen.');
}
},{}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("./console_wrapper");
console_wrapper_1.log("ready loaded", 2 /* BASIC */);
var ready = false;
var resolveFunc;
var rejectFunc;
var readyPromise = new Promise(function (resolve, reject) {
    resolveFunc = resolve;
    rejectFunc = reject;
});
document.addEventListener("DOMContentLoaded", function () {
    console_wrapper_1.log("document is ready", 3 /* DETAILED */);
    ready = true;
    resolveFunc(true);
});
function isReady() {
    return ready;
}
exports.isReady = isReady;
function waitUntilReady() {
    return ready ? Promise.resolve(true) : readyPromise;
}
exports.waitUntilReady = waitUntilReady;
},{"./console_wrapper":16}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line: no-var-requires
exports.scenarios = require('./../../../../scenarios/scenarios.json');
},{"./../../../../scenarios/scenarios.json":1}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var document_1 = require("./../core/dom/document");
var Accordion = /** @class */ (function () {
    function Accordion(outer) {
        var _this = this;
        this.outer = outer;
        document_1.D.addEventListener(outer, "click", function () {
            /* Toggle between adding and removing the "active" class,
                      to highlight the button that controls the panel */
            _this.outer.classList.toggle("active");
            /* Toggle between hiding and showing the active panel */
            var panel = _this.outer.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            }
            else {
                panel.style.display = "block";
            }
        });
    }
    Accordion.setupAll = function () {
        Accordion.discardAll();
        var accordions = document_1.D.claz("accordion");
        for (var accIndex = 0; accIndex < accordions.length; ++accIndex) {
            var elem = accordions.item(accIndex);
            if (elem == null) {
                continue;
            }
            Accordion.accordions.push(new Accordion(elem));
        }
    };
    Accordion.discardAll = function () {
        Accordion.accordions = [];
    };
    Accordion.accordions = [];
    return Accordion;
}());
exports.Accordion = Accordion;
},{"./../core/dom/document":6}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function doSomething() {
    console.log("Put some code in here!");
}
exports.doSomething = doSomething;
},{}],25:[function(require,module,exports){
"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var html_loader_1 = require("../core/utils/html_loader");
var accordion_1 = require("./accordion");
var do_something_1 = require("./do-something");
var html_imports_1 = require("./html-imports");
var slideshow_1 = require("./slideshow");
// Put all function calls that need to be made on every page load inside the setupAll function body.
function PutStudentPageLoadOperationsInsideThisStudentBody() {
    // TODO: Put all operations that you want to happen on ever page load in this function.
    // For example you could write: Sticky.setup()
    do_something_1.doSomething();
}
exports.PutStudentPageLoadOperationsInsideThisStudentBody = PutStudentPageLoadOperationsInsideThisStudentBody;
function setupAll() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 100); })];
                case 1:
                    _a.sent();
                    console.log('reloading');
                    slideshow_1.Slideshow.setupAll();
                    accordion_1.Accordion.setupAll();
                    PutStudentPageLoadOperationsInsideThisStudentBody();
                    console.log('reloaded');
                    return [2 /*return*/];
            }
        });
    });
}
exports.setupAll = setupAll;
html_imports_1.itemsToCache.forEach(function (item) {
    html_loader_1.HTMLLoader.cacheHTML(item.name, item.content);
});
window.HTMLLoader = html_loader_1.HTMLLoader;
console.log('dynamic-dom loaded');
// Do not touch this line, needed to reinitialize code in the dynamic-dom.ts setupAll function
window.addEventListener('newPageLoad', function () { return setupAll(); });
},{"../core/utils/html_loader":18,"./accordion":23,"./do-something":24,"./html-imports":26,"./slideshow":29}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// An HTMLContent object should look like the following:
// {
//     name: 'footer',
//     content: require('./html/footer.html'),
// }
// Then you can reference that content in your html using the following tag with the corresponding name attribute.
// <ts-load data-name="header"></ts-load>
// You can specify as many as you want inside of the array and they will all be bundled up with your website.
// Make sure to make a corresponding html file in the html file folder for each element you specify.
exports.itemsToCache = [
    // Feel free to change the content inside any of the html files in the html file folder to suit your needs.
    {
        name: 'header',
        content: require('./html/header.html'),
    },
    {
        name: 'footer',
        content: require('./html/footer.html'),
    },
];
},{"./html/footer.html":27,"./html/header.html":28}],27:[function(require,module,exports){
module.exports = "<footer id=\"colophon\" class=\"footer\" role=\"contentinfo\">\n  <div class=\"container\">\n    <div class=\"footer-widgets\">\n      <aside class=\"widget site-contact\">\n        <h2 class=\"footer-widget-title\">Nursery School</h2>\n        <p>6926 Forest Park Parkway</p>\n        <p>St. Louis, MO 63130</p>\n        <p class=\"phone\">314-935-6689 <span>|</span> Fax: 314-935-7249</p>\n        <p>\n          <a href=\"files/mailto:nursery@wustl.edu\">nursery@wustl.edu</a>\n        </p>\n      </aside>\n\n      <div class=\"widget-wrapper\">\n        <aside id=\"text-4\" class=\"widget widget_text widget-count-2\">\n          <h2 class=\"footer-widget-title\">Hours of Operation</h2>\n          <div class=\"textwidget\">\n            <p>\n              Classes meet Mon. through Fri.<br />\n              Morning: 9-11:45 a.m.<br />\n              Afternoon: 12:30-3:15 p.m.<br />\n              Full day: 9 a.m.-3:15 p.m.\n            </p>\n          </div>\n        </aside>\n        <aside id=\"text-3\" class=\"widget widget_text widget-count-2\">\n          <h2 class=\"footer-widget-title\">Apply for the Nursery School</h2>\n          <div class=\"textwidget\">\n            <p>\n              Experience the innovative approach and dynamic teaching\n              environment of the Washington University Nursery School.\n            </p>\n            <a href=\"files/apply.html\">Register Now</a>\n          </div>\n        </aside>\n      </div>\n    </div>\n    <div class=\"site-info\">\n      <p class=\"footer-copyright\">©2019 Washington University in St. Louis</p>\n    </div>\n  </div>\n</footer>";

},{}],28:[function(require,module,exports){
module.exports = "<div id=\"wustl-branding\">\n  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"321\" height=\"28\" viewBox=\"0 0 321 28\" class=\"washu-logo\"\n    aria-labelledby=\"title\">\n    <title id=\"title\">Washington University in St. Louis</title>\n    <path fill=\"#FFF\"\n      d=\"M10.46 1.76c-.09 0-4.41.04-10.46-1.21V18c0 .27.01.47.01.47v.02c.04.81.28 1.45.77 2 .32.34.76.7 1.38 1.05.17.1.35.18.55.28.15.07.31.14.47.2.14.06.55.24.69.29l6.59 2.5 6.59-2.5c.15-.05.56-.24.69-.29.16-.07.32-.14.47-.2.19-.1.38-.18.55-.28.62-.35 1.06-.7 1.38-1.05.48-.55.73-1.19.77-2v-.02s0-.19.01-.47V.55C14.86 1.8 10.55 1.76 10.46 1.76z\">\n    </path>\n    <path fill=\"#007360\"\n      d=\"M10.46 2.8c-.09 0-4.03.04-9.56-1.1v15.95c0 .25.01.43.01.44v.02c.04.74.25 1.33.7 1.83.29.31.7.64 1.26.95.15.09.32.17.5.26.14.07.28.13.44.19.12.05.5.22.63.27l6.03 2.29 6.03-2.29c.13-.05.51-.22.63-.27.15-.06.3-.13.44-.19.18-.09.35-.17.5-.26.56-.31.97-.64 1.26-.95.44-.5.66-1.09.7-1.83v-.02s0-.18.01-.44V1.7c-5.55 1.14-9.5 1.1-9.58 1.1z\">\n    </path>\n    <path fill=\"#E1C4AC\"\n      d=\"M10.46 3.75c-.08 0-3.68.04-8.74-1.02v4.08c5.05 1.05 8.67 1.02 8.74 1.02s3.68.04 8.74-1.02V2.73c-5.06 1.05-8.66 1.02-8.74 1.02z\">\n    </path>\n    <path fill=\"#A51417\"\n      d=\"M10.46 7.83c-.08 0-3.68.04-8.74-1.02v9.05c5.05 1.05 8.67 1.02 8.74 1.02s3.68.04 8.74-1.02V6.82c-5.06 1.04-8.66 1.01-8.74 1.01z\">\n    </path>\n    <path fill=\"#E1C4AC\"\n      d=\"M1.72 17.72c.03.69.23 1.23.64 1.68.26.28.64.58 1.15.87.15.08.29.15.46.23.13.06.26.12.4.17.11.05.46.2.58.24L10.46 23l5.51-2.09c.12-.04.46-.2.58-.24.14-.06.27-.12.4-.17.16-.08.32-.15.46-.23.51-.29.88-.58 1.15-.87.41-.46.6-1 .64-1.68v-.02s0-.16.01-.4v-1.44c-5.05 1.05-8.67 1.02-8.74 1.02s-3.68.04-8.74-1.02v1.45c-.02.25-.01.41-.01.41z\">\n    </path>\n    <path fill=\"#007360\"\n      d=\"M4.8 3.69l.41 1.23 1.29.01-1.04.77.39 1.24-1.05-.76-1.05.76.39-1.24-1.04-.77 1.29-.01.41-1.23zm11.31 0l.42 1.23 1.29.01-1.04.77.39 1.24-1.06-.76-1.05.76.39-1.24-1.04-.77 1.29-.01.41-1.23zm-5.65.48l.42 1.23 1.29.01-1.04.77.39 1.24-1.06-.76-1.06.75.39-1.24-1.04-.77 1.3-.01.41-1.22zM10.46 17.21l-.46.45v1.22l.23.65v1.09h.45v-1.09l.23-.65v-1.22l-.45-.45zm.22 4.41v-.65h-.45v.65l-.23.42.46.56.46-.56-.24-.42zm.33-.65v.5l.29.31.51-.41v-.41h-.8zm.54-2.04l-.54.6v1.09h.44v-.65l.43-.46.55.36.35-.36v-.58h-1.23zm-1.64 2.04v.5l-.29.31-.52-.41v-.41h.81zm-.55-2.04l.54.6v1.09h-.43v-.65l-.43-.46-.55.36-.35-.36v-.58h1.22z\">\n    </path>\n    <path fill=\"#E1C4AC\"\n      d=\"M14.62 9.27v5.19h-3.49l-.25.21-.43.37-.43-.37-.25-.21H6.29V9.27l-.74.54v5.38h4.12l.37.31.43.38.43-.38.37-.31h4.12V9.81l-.77-.54z\">\n    </path>\n    <path fill=\"#E1C4AC\"\n      d=\"M11.02 8.83l-.14.11-.43.38-.43-.38-.12-.11H7.03v4.89h2.88l.2.17.35.31.36-.31.19-.17h2.88V8.83h-2.87zM16.11 10.35v3.31c.95-.14 1.98-.31 3.08-.54V9.81a50.5 50.5 0 0 1-3.08.54zm-11.31 0c-.95-.14-1.98-.31-3.08-.54v3.31c1.1.23 2.14.41 3.08.54v-3.31z\">\n    </path>\n    <path fill=\"#007360\"\n      d=\"M16.11 16.76l-.31.32v.86l.15.46v.77h.31v-.77l.16-.46v-.86l-.31-.32zm.16 3.09v-.45h-.31v.46l-.15.3.31.4.32-.4-.17-.31zm.23-.45v.35l.2.22.36-.28v-.29h-.56zm.38-1.43l-.38.43v.77h.31v-.46l.3-.33.38.25.24-.25v-.41h-.85zm-1.14 1.43v.35l-.21.22-.35-.28v-.29h.56zm-.39-1.43l.39.43v.77h-.31v-.46l-.3-.33-.39.25-.24-.25v-.41h.85zM4.8 16.76l-.32.32v.86l.16.46v.77h.31v-.77l.15-.46v-.86l-.3-.32zm.16 3.09v-.45h-.31v.46l-.16.3.32.4.31-.4-.16-.31zm.22-.45v.35l.21.22.35-.28v-.29h-.56zm.39-1.43l-.39.43v.77h.31v-.46l.3-.33.39.25.24-.25v-.41h-.85zM4.42 19.4v.35l-.2.22-.36-.28v-.29h.56zm-.38-1.43l.38.43v.77h-.31v-.46l-.3-.33-.38.25-.24-.25v-.41h.85z\">\n    </path>\n    <g fill=\"#FFF\" class=\"washu-logo-text\">\n      <path\n        d=\"M232.47 8.16c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.76 1.57 1.07 1.57zm13.82 12.03v-5.08c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-1.04 1.01-3.06 1.62-.13.03-.5.04-.51.27 0 .65 2.03-.84 1.99 1.68v7.64c0 1.43-.7 1.55-1.21 1.68-.03 0-.06-.01-.1 0-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04-.84-.01-.63.1-.63.36.03.31.53.33 1.37.34.29 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.31 0 1.15-.13 2.53-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06V13.1c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c-.03 2.27-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c1.27 0 1.82.12 2.16.12.26 0 .73-.2.45-.44-.68-.5-1.97.3-1.95-2.04zM48.91 2.4c.37-.05.55-.19.55-.19 0-.24-.05-.3-.39-.3-.65 0-1.05.11-1.69.11-.71 0-1.25-.08-1.85-.08-.34 0-.31.11-.31.3 0 .21.65.08 1.02.89.21.44.13 1.36-.08 1.9l-5.01 13.74-2.14-6.1-.83-2.23s-.13.06.46-1.79l1.17-3.52c.57-1.73 1.14-2.64 1.88-2.65.92-.02.92-.57.21-.57s-1.13.06-1.75.06c-.65 0-.99-.06-1.69-.06-.26 0-.55.08-.52.3.03.21.42.14.71.3.47.24.78 1.25.45 2.3l-1.38 4.42-1.58-4.13c-.31-.78-.73-2.52.03-2.67.73-.15.63-.52.18-.52-.86 0-1.32.11-2.15.11-.91 0-1.59-.11-2.45-.11-.18 0-.52.03-.42.38.05.21.49.14.76.3 1.05.68 1.25 1.55 1.62 2.52l2.3 6.48c.42 1.16.45.74.11 1.73l-2 5.5-4.95-14.11c-.39-1.06-.6-1.79.26-2.2.37-.19.47-.22.52-.3.05-.07.1-.32-.45-.3-.89.03-1.43.11-2.32.11-.94 0-1.59-.11-2.45-.11-.29 0-.34.14-.34.35 0 .33.71.11 1.31.81.34.38.99 1.66 1.14 2.12L32.8 22.3c.11.25.14.76.48.76.27 0 .33-.57.42-.79l3.13-8.59 3.05 8.16c.13.33.31 1.22.63 1.22.26 0 .36-.43.49-.83l5.9-16.87c.5-1.36 1.07-2.79 2.01-2.96zm65.46 6.71c-3.26 0-5.77 3.28-5.77 7.13 0 1.96.52 3.51 1.42 4.63-.31.21-.92.7-2.15.7-1.07 0-1.68-.64-1.74-2V11.2l3.38-.01c.22 0 .65-1.44.67-1.52.04-.18.1-.33.12-.46.04-.28-.17-.3-.37-.01-.15.15-.32.55-.99.55h-2.81c0-2.41.03-3.51-.35-3.51-.36 0-.3.1-.63 1.17-.44 1.44-1.79 2.23-2.63 2.68-.38.09-.81.12-1.29.01-.74-.16-1.6-1.06-3.83-1.06-2.38 0-4.46 1.95-4.46 4.55 0 1.4.62 2.76 1.71 3.48-.2.12-1.53 1.24-1.37 2.56 0 0-.03 1.37 1.05 1.82-.33.14-.67.36-.96.63-.7-.26-1.72-.06-1.72-1.91V15.1c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-.73.99-2.91 1.55-.13.03-.43.1-.44.34 0 .65 1.75-.71 1.76 1.68v7.64c0 1.65-1.31 1.65-1.54 1.67-.1 0-.19 0-.31.01-.55-.05-1.51-.3-1.51-1.34V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.78-.86 2.01-1.43 2.03-.69-.09-1.22-.37-1.22-1.41v-5.14c0-2.65-1.01-6.07-4.33-6.07-1.47 0-2.75.81-3.73 1.92V2.41c0-.31-.15-.48-.31-.49-.4-.03-1.07 1.19-2.96 1.63-.13.03-.62.07-.62.25 0 .65 1.97-.31 1.99 1.69V20.6c0 1.51-1.3 1.31-1.53 1.79-.04.21.08.31.26.31.42 0 1.55-.12 2.35-.12s2.1.12 2.64.12c.31 0 .44-.06.44-.44-.27-.52-2.28.28-2.28-2.37v-6.5c0-1.57 1.87-2.78 3.03-2.78.91 0 3.14.71 3.14 4.53v5.64c0 1.11-1.18 1.23-1.27 1.57 0 .24.15.34.42.34.28 0 1.11-.12 2.12-.12.56 0 1.07.03 1.5.06.23.05.57.05.99.05.28 0 1-.11 1.82-.11s1.48.07 1.99.11c.1.01.2.01.3.01.04 0 .08.01.12.01h.01c.32.01.61 0 .74 0 .31 0 .83-.13 2.2-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06v-7.09c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c0 2-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c.93 0 1.53.07 1.91.1-.29.42-.48.9-.51 1.4-.14 2.51 2.93 3.41 5.51 3.37 5.12-.07 6.57-3.62 5.51-5.51-1.09-1.95-3.44-1.87-5.68-1.86-4.2.02-3.41-2.59-1.69-2.49.4.02.2.14 1.57.14 2.43 0 4.76-1.66 4.7-4.38-.01-.23.05-1.03-.53-2.14 1.14.01.69 0 2.41 0l-.01 7.63c0 3.45 1.64 4.03 2.87 4.03 1.74 0 3.01-1.15 3.24-1.68 1.03 1.1 2.46 1.68 4.12 1.68 3.19 0 5.6-2.93 5.6-6.78 0-5.8-3.65-6.96-5.61-6.96zM95.62 21.72c.21-.01.27.08 2.64.17 2.45.06 3.33.77 3.49 1.4.26 1.12-.53 3.52-4.05 3.29-2.22-.15-2.87-1.2-3.03-1.44-.84-1.16-.16-3.35.95-3.42zm2.01-4.57c-2.08 0-2.78-2-2.78-3.91 0-1.96.59-3.58 2.67-3.58 2.11 0 2.95 2.16 2.95 4.07.01 1.93-.87 3.42-2.84 3.42zm16.99 4.81c-3.03 0-4.22-3.76-4.22-6.82 0-2.65 1.04-5.1 3.57-5.1 3.08 0 4.19 3.29 4.19 6.51.01 3.87-1.36 5.41-3.54 5.41z\">\n      </path>\n      <path\n        d=\"M131.11 20.19v-5.08c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-1.04 1.01-3.07 1.62-.13.03-.5.04-.51.27 0 .65 2.03-.84 2 1.68v7.64c0 2-1.35 1.52-1.66 2.04-.15.27.25.33.59.33.31 0 .83-.13 2.2-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06v-7.09c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c-.03 2.27-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c1.27 0 1.82.12 2.16.12.26 0 .73-.2.44-.44-.65-.49-1.94.31-1.92-2.03zM77.41 8.16c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6.02.35.77 1.57 1.07 1.57zm-17.3 6.96c-.51-.24-1.27-.68-1.65-.88-1.63-.89-2.27-1.47-2.31-2.3-.08-1.44 1.15-2.19 2.21-2.08 2.54-.04 2.88 2.8 3.14 2.8.39 0 .28-.37.28-1.21 0-.21.03-1.27-.13-1.52-.31-.46-2.1-.74-2.55-.74-.11 0-.52-.01-.6-.02-.13 0-.28.02-.28.02-1.81-.03-3.5 1.11-3.45 3.53.05 2.21 2.64 3.47 4.04 4.3 1.04.59 2.26 1.15 2.24 2.57-.02 1.61-1.27 2.68-2.61 2.6-3.15-.05-2.72-4-3.28-4-.39 0-.31 1-.31 1.52 0 .51-.01.98-.01 1.38-.07.36-.2.7-.54.72-1.24.08-.94-1.9-.94-2.95v-6.43c-.06-1.97-1.54-3.25-3.8-3.25-3.09 0-5.31 3.81-4.25 5 .25.28 1.26-.8 1.32-.86s.08-.13.08-.13c-.01-1.3.97-2.95 2.37-3.09 1.6-.15 2.4 1.04 2.4 2.65v2.09c-6.06 1.21-6.93 3.22-6.93 4.87 0 2.21 1.55 3.2 3.23 3.2 1.45 0 2.88-.69 3.96-1.8.34 1.03 1.01 1.65 2.02 1.62.35-.01.41.09 1.46-.37.37-.1.35-.09.77-.01.56.19 1.32.57 2.66.57 2.03.03 3.85-1.85 3.85-4.17 0-1.5-.43-2.41-2.39-3.63zm-8.43 4.32c0 1.65-1.68 2.52-2.6 2.52-1.38 0-2.33-.89-2.33-2.66 0-2.73 3.28-3.23 4.94-3.67-.01-.01-.01 3.81-.01 3.81zm219.99.19c-.31 0-1.07 1.29-1.07 1.63 0 .34.77 1.6 1.07 1.6.33 0 1.07-1.23 1.07-1.6s-.73-1.63-1.07-1.63zm33.71 1.12V9.92c0-.61-.34-.77-.44-.77-.39 0-.61.1-.88.16-.27.1-.58.23-1.29.23-.13 0-.79-.12-.76.25.04.37 1.57.15 1.58 1.23v7.83c-.12 1.37-1.27 2.88-2.66 2.88-.32 0-2.39-.22-2.37-3.65V9.92c0-.61-.34-.77-.44-.77-.39 0-.61.1-.88.16-.27.1-.61.22-1.32.19-.38-.02-.79-.07-.73.29.06.32 1.59 0 1.59 1.23v7.51c0 2.74 1.61 4.32 3.56 4.32 1.3 0 2.49-.28 3.24-1.8h.05v1.32c0 .13.03.48.22.48.37 0 .56-.3.83-.4.29-.07.37-.33 1.28-.42.39-.04.82-.24.82-.5-.11-.53-1.4.06-1.4-.78zM290.09 9.11c-3.26 0-5.77 3.28-5.77 7.13 0 1.73.42 3.15 1.13 4.23-.79.57-2.23 1.1-4.96 1.1-2.13 0-1.93-.74-1.93-2.55V4.57c0-2.66 1.99-1.89 2.03-2.37.03-.34-.28-.26-.61-.26-.38 0-1.07.15-2.52.15-1.25 0-2.34-.12-2.88-.12-.33 0-.63.1-.52.35.25.57 2.14.05 2.14 1.65v15.1c0 1.44.21 2.36-.45 2.73-.81.49-1.76.51-1.68.83.05.19.45.2.68.2 1.02 0 2.42-.13 3.44-.15 1.94-.06 3.86.13 5.79.13 1.12 0 1.4-.22 2.22-1.33.01-.02.02-.03.04-.05 1.01.94 2.34 1.44 3.87 1.44 3.19 0 5.6-2.93 5.6-6.78.01-5.82-3.65-6.98-5.62-6.98zm.26 12.85c-3.03 0-4.22-3.76-4.22-6.82 0-2.65 1.04-5.1 3.57-5.1 3.08 0 4.19 3.29 4.19 6.51.01 3.87-1.36 5.41-3.54 5.41zm-32.03-10.49c-.75-.37-1.85-1.04-2.39-1.36-2.37-1.37-3.3-2.26-3.37-3.52-.12-2.21 2.04-3.52 3.58-3.35 1.96 0 3.57 1.19 4.24 3.73.07.27.31.89.56.89.22 0 .26-.2.24-.45l-.33-4.02c-.02-.33-.14-.42-.27-.42-.22 0-.36.33-.56.33-.31 0-1.1-1.11-3.8-1.09-.18-.01-.43.02-.43.02-2.63-.05-5.1 1.7-5.02 5.4.07 3.37 3.85 5.3 5.89 6.59 1.51.9 3.09 2.34 3.04 3.95-.08 2.47-1.63 4.08-3.58 3.94-4.59-.08-3.96-6.13-4.78-6.13-.56 0-.45 1.52-.46 2.32 0 1.92-.08 3.49.14 3.77.07.09.29.05.74.05.9 0 2 1.05 4.65 1.05 2.95.05 5.38-2.69 5.38-6.25-.01-2.19-.62-3.58-3.47-5.45zm51.69-3.31c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.76 1.57 1.07 1.57zM312.64 22c-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04-.84-.01-.63.1-.63.36.03.31.53.33 1.37.34.28 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.33 0 .76-.8.07-.69zm5.98-6.88c-.51-.24-1.27-.68-1.65-.88-1.63-.89-2.27-1.47-2.31-2.3-.08-1.44 1.15-2.19 2.21-2.08 2.54-.05 2.88 2.8 3.14 2.8.39 0 .28-.37.28-1.21 0-.21.03-1.27-.13-1.52-.31-.46-2.11-.74-2.55-.74-.11 0-.52-.01-.6-.01-.13 0-.28.01-.28.01-1.81-.03-3.5 1.11-3.44 3.53.05 2.21 2.64 3.46 4.04 4.3 1.04.59 2.26 1.15 2.24 2.57-.02 1.61-1.27 2.68-2.61 2.6-3.15-.05-2.72-4-3.28-4-.39 0-.31 1-.31 1.52-.01 1.25-.06 2.28.1 2.46.05.06.2.03.5.03.62 0 1.38.69 3.19.69 2.03.03 3.85-1.85 3.85-4.17-.01-1.48-.43-2.39-2.39-3.6zm-48.73 5.66c-.26.13-.85.77-2.28.77-1.07 0-1.68-.64-1.74-2v-8.82l3.38-.01c.22 0 .65-1.44.67-1.52.04-.18.1-.33.12-.46.04-.28-.17-.3-.37-.01-.15.15-.32.55-.99.55h-2.81c0-2.41.03-3.04-.35-3.04-.36 0-.3.1-.63 1.17-.54 1.79-2.52 2.58-3.15 2.97-.15.08-.15.11-.15.19-.01.23.75.14 2.31.17l-.01 8.07c0 3.45 1.64 4.03 2.87 4.03 1.87 0 3.21-1.34 3.28-1.8.03-.25 0-.28-.15-.26zm-81.32-1.09c-.57 0-1.42 1.62-3.66 1.62-1.58 0-4.17-1.53-4.17-6.66h6.9c.6 0 .88.03.88-.52 0-1.25-1.4-4.95-4.59-4.95-3.24 0-5.08 3.33-5.08 7.31 0 2.05 1.35 6.38 5.24 6.38 2.33 0 4.59-2.24 4.59-2.95-.01-.11-.01-.23-.11-.23zm-5.08-9.81c1.42 0 2.88 1.56 2.88 3.3 0 .46-.15.62-.52.62h-5.11c0-1.71 1.13-3.92 2.75-3.92zm-31.7-7.33c.1-.16-.25-.24-.37-.24-.42 0-1.37.11-1.8.11-.89 0-1.64-.09-2.53-.09-.07 0-.46.05-.46.18-.01.63 2.13-.11 2.13 2.6v10.57c0 3.13-.99 6.41-5.29 6.41-3.09 0-4.76-1.94-4.76-6.17V4.41c0-1.91 1.49-1.49 1.52-1.92.03-.41-1.33-.16-1.43-.16-.71 0-1.21.08-1.95.08-.62 0-1.37-.1-1.97-.1-.12 0-.53-.02-.61.15-.23.56 1.91.26 1.91 1.83v10.92c0 4.08 1.14 8.08 7.17 7.97 7.14-.12 7.01-6.54 7.01-7.83V5.12c.01-2.43 1.2-2.2 1.43-2.57zm28.19 7.24c.17-.2.22-.53-.57-.46-.45 0-.77.08-1.22.08-.57 0-.68-.02-1.22-.04-.68-.02-.86.05-.82.25.12.6 1.55.01 1.36 1.8-.16 1.5-.65 2.79-1.14 4.07l-1.73 4.62-2.54-7.7c-.31-.96-.45-1.47-.45-1.57 0-.96 1.16-.75 1.42-1.14.16-.26-.17-.4-.54-.4-.31 0-.67.11-1.63.13-.79.02-1.36.02-1.7-.05-.89-.16-.82.33-.51.48s.46.01.91 1.36l3.91 11.06c.08.22.18.77.52.77.39 0 .39-.39.88-1.69 0 0 3.75-10.48 4-10.86.51-.74.89-.5 1.07-.71zm14.47-.5c-1.07 0-1.8 1.28-2.33 2.16h-.05V9.53c0-.3-.15-.48-.3-.48-.41 0-.72.81-2.87 1.33-.13.03-.48.1-.48.28 0 .64 1.82-.19 1.82 1.93v8.07c0 1.25-1.29 1.12-1.29 1.77 0 .18.08.27.28.27.17 0 .63-.12 2.32-.12 1.41 0 2.02.12 2.37.12.28 0 .41-.06.41-.34 0-.98-2.25.48-2.25-2.34v-6.88c0-.4.6-1.8 1.64-1.8.91 0 1.02.7 1.5.7.3 0 .91-.91.91-1.38-.01-.58-1.16-1.37-1.68-1.37zm32.55.1c-.27 0-.96.04-1.59.04-.76 0-1.13-.09-1.45-.09-.48 0-.96 0-.87.32.1.36 1.73.23 1.73 2.01 0 .23 0 .52-.33 1.71l-2.08 6.63-2.9-8.15s-.14-.26-.14-.79c0-1.32 1.54-1.17 1.6-1.41.05-.19-.21-.4-.62-.4h-3.63c-.02 0-.03.01-.05.01h-2.81c0-2.41.03-3.04-.35-3.04-.36 0-.3.1-.63 1.17-.54 1.79-2.52 2.58-3.15 2.97-.15.08-.15.11-.15.19-.01.22.76.14 2.31.17l-.01 8.07c0 3.45 1.64 4.03 2.87 4.03 1.87 0 3.21-1.33 3.28-1.8 0-.27-.04-.29-.18-.27-.26.13-.85.77-2.28.77-1.07 0-1.68-.64-1.74-2V10.7s2.5-.01 3.21-.01c.04.06.08.13.1.19l2.99 8.45c.24.69.39.92.68 2.14.19.79.12 1.51.12 1.51-.29 1.27-1.07 1.99-2.26 4.34-.12.22 1.71-.02 1.81-.05.15-.05.13-.09.31-.42l1.32-3.93 3.69-11.34c.54-1.98 1.39-1.62 1.53-1.89.12-.13 0-.3-.33-.3z\">\n      </path>\n      <path\n        d=\"M222.22 22.76l-.07.19V23l.07-.24zm-14.74-14.6c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.76 1.57 1.07 1.57zM210.11 22c-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04-.84-.01-.63.1-.63.36.03.31.53.33 1.37.34.28 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.33 0 .76-.8.07-.69zM166.52 8.16c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.77 1.57 1.07 1.57zM169.17 22c-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04h-.17c-.54-.1-1.06-.32-1.05-1.79v-5.08c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-1.04 1.01-3.07 1.62-.13.03-.5.04-.51.27 0 .65 2.03-.84 2 1.68v7.64c0 2-1.35 1.52-1.66 2.04-.15.27.25.33.59.33.31 0 .83-.13 2.2-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06v-7.09c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c-.03 2.27-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c1.27 0 1.82.12 2.16.12.04 0 .09-.01.13-.01.11 0 .21.01.34.01.28 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.34.02.75-.78.08-.67zm32.72-6.89c-.51-.24-1.27-.68-1.65-.88-1.63-.89-2.27-1.47-2.31-2.3-.08-1.44 1.15-2.19 2.21-2.08 2.54-.05 2.88 2.8 3.14 2.8.39 0 .28-.37.28-1.21 0-.21.03-1.27-.13-1.52-.31-.46-2.1-.74-2.55-.74-.11 0-.52-.01-.6-.02-.13 0-.28.02-.28.02-1.81-.03-3.5 1.11-3.45 3.53.05 2.21 2.64 3.46 4.04 4.3 1.04.59 2.26 1.15 2.24 2.57-.02 1.62-1.27 2.68-2.61 2.6-3.15-.05-2.72-4-3.28-4-.39 0-.31 1-.31 1.52 0 1.25-.06 2.28.1 2.46.05.06.2.03.5.03.62 0 1.38.69 3.19.69 2.03.03 3.85-1.85 3.85-4.17 0-1.47-.42-2.38-2.38-3.6z\">\n      </path>\n    </g>\n  </svg>\n</div>\n<header role=\"banner\">\n  <div class=\"container\">\n    <a class=\"site-title\" href=\"files/index.html\">Nursery School</a>\n  </div>\n  <div id=\"main-menu-container\">\n    <div class=\"container\">\n      <div class=\"navbar\">\n        <div class=\"dropdown\">\n          <button class=\"dropbtn\">\n            <a id=\"about\" href=\"files/about.html\">About\n            </a>\n          </button>\n          <div class=\"dropdown-content\">\n            <a id=\"tuition\" href=\"files/tuition.html\">Tuition</a>\n            <a id=\"staff\" href=\"files/staff.html\">Staff</a>\n            <a id=\"parent-handbook\" href=\"files/parent_handbook.html\">Parent Handbook</a>\n          </div>\n        </div>\n        <div class=\"dropdown\">\n          <button class=\"dropbtn\">\n            <a id=\"classrooms\" href=\"files/classrooms.html\">Classrooms\n            </a>\n          </button>\n          <div class=\"dropdown-content\">\n            <a id=\"curriculum-overview\" href=\"files/curriculum_overview.html\">Curriculum Overview</a>\n            <a id=\"teddy-bears\" href=\"files/teddy_bears.html\">Teddy Bears</a>\n            <a id=\"panda-bears\" href=\"files/panda_bears.html\">Panda Bears</a>\n            <a id=\"bear-cubs\" href=\"files/bear_cubs.html\">Bear Cubs</a>\n            <a id=\"big-bears\" href=\"files/big_bears.html\">Big Bears</a>\n            <a id=\"sun-bears\" href=\"files/sun_bears.html\">Sun Bears</a>\n            <a id=\"bear-tracks\" href=\"files/bear_tracks.html\">Bear Tracks</a>\n            <a id=\"enrichment-program\" href=\"files/enrichment_programs.html\">Enrichment Program</a>\n          </div>\n        </div>\n        <a id=\"calendar\" href=\"files/calendar.html\">Calendar</a>\n        <a id=\"summer-camp\" href=\"files/summer_camp.html\">Summer Camp</a>\n        <div class=\"dropdown\">\n          <button class=\"dropbtn\">\n            <a id=\"get-involved\" href=\"files/get_involved.html\">Get Involved</a>\n          </button>\n          <div class=\"dropdown-content\">\n            <a id=\"nursery-school-merchandise\" href=\"files/nursery_school_merchandise.html\">Nursery School\n              Merchandise</a>\n            <a id=\"parent-association\" href=\"files/parent_association.html\">Parent Association</a>\n          </div>\n        </div>\n\n        <a id=\"apply\" href=\"files/apply.html\">Apply</a>\n        <a id=\"forms\" href=\"files/forms.html\">Forms</a>\n\n        <a id=\"parent-resources\" href=\"files/parent_resources.html\">Parent Resources</a>\n      </div>\n    </div>\n  </div>\n</header>";

},{}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var document_1 = require("./../core/dom/document");
var Slideshow = /** @class */ (function () {
    function Slideshow(outer) {
        var _this = this;
        this.outer = outer;
        this.slideIndex = 0;
        this.slideCount = 0;
        this.slides = [];
        this.dots = [];
        document_1.D.eachRecur(this.outer, function (elem) {
            var cList = elem.classList;
            if (cList.contains("prev-slideshow-button")) {
                document_1.D.addEventListener(elem, "click", function () { return _this.minusSlide(1); });
            }
            else if (cList.contains("next-slideshow-button")) {
                document_1.D.addEventListener(elem, "click", function () { return _this.plusSlide(1); });
            }
            else if (cList.contains("slideshow-entry")) {
                _this.slides.push(elem);
            }
            else if (cList.contains("slideshow-dot")) {
                _this.dots.push(elem);
            }
        });
        var _loop_1 = function (i) {
            document_1.D.addEventListener(this_1.dots[i], "click", function () { return _this.showSlide(i); });
        };
        var this_1 = this;
        for (var i = 0; i < this.dots.length; ++i) {
            _loop_1(i);
        }
        this.slideCount = this.slides.length;
        this.showSlide(this.slideIndex);
    }
    Slideshow.setupAll = function () {
        Slideshow.discardAll();
        var slideshows = document_1.D.claz("slideshow");
        for (var ssIndex = 0; ssIndex < slideshows.length; ++ssIndex) {
            var elem = slideshows.item(ssIndex);
            if (elem == null) {
                continue;
            }
            Slideshow.slideshows.push(new Slideshow(elem));
        }
    };
    Slideshow.discardAll = function () {
        Slideshow.slideshows = [];
    };
    Slideshow.prototype.plusSlide = function (n) {
        this.showSlide((this.slideIndex += n));
    };
    Slideshow.prototype.minusSlide = function (n) {
        this.showSlide((this.slideIndex -= n));
    };
    Slideshow.prototype.showSlide = function (index) {
        this.slideIndex = index % this.slideCount;
        this.slideIndex = Math.max(this.slideIndex, -1 * this.slideIndex);
        for (var i = 0; i < this.slides.length; ++i) {
            this.slides[i].style.display = "none";
        }
        for (var i = 0; i < this.dots.length; i++) {
            this.dots[i].classList.remove("active");
        }
        this.slides[this.slideIndex].style.display = "block";
        this.dots[this.slideIndex].classList.add("active");
    };
    Slideshow.slideshows = [];
    return Slideshow;
}());
exports.Slideshow = Slideshow;
},{"./../core/dom/document":6}],30:[function(require,module,exports){
"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var q_params_1 = require("../core/utils/q_params");
var data_1 = require("./../core/data-log/data");
var document_1 = require("./../core/dom/document");
var elements_1 = require("./../core/dom/elements");
var scroll_1 = require("./../core/dom/scroll");
var history_1 = require("./../core/router/history");
var router_1 = require("./../core/router/router");
var tracker_1 = require("./../core/tracker/tracker");
var html_loader_1 = require("./../core/utils/html_loader");
var id_generator_1 = require("./../core/utils/id_generator");
var ready_1 = require("./../core/utils/ready");
var scenarios_1 = require("./../core/utils/scenarios");
var setup = function () { return __awaiter(void 0, void 0, void 0, function () {
    var scenario;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ready_1.waitUntilReady()];
            case 1:
                _a.sent();
                scenario = scenarios_1.scenarios.find(function (scen) { return scen.tag === q_params_1.params.tag; });
                if (!q_params_1.params.sandbox) {
                    if (scenario === null || scenario === undefined) {
                        alert('This HIT is broken and cannot be completed at this time.');
                    }
                    else {
                        tracker_1.Tracker.loadScenario(scenario);
                    }
                }
                tracker_1.Tracker.start({
                    keyPrefix: 'information-foraging',
                    bucketName: 'cse-256-log',
                    allowSubmission: {
                        allow: function () {
                            try {
                                var textArea = document_1.D.id('text-area');
                                console.log(textArea.value);
                                if (textArea.value === '') {
                                    return 'You must fill out the text box to turn this HIT in.';
                                }
                                else {
                                    return null;
                                }
                            }
                            catch (error) {
                                console.log(error);
                                return 'There was an error fill out the form and try again.';
                            }
                        },
                        preSubmit: function () {
                            data_1.data.data.response = document_1.D.id('text-area').value;
                            return;
                        },
                    },
                    debugLevel: 1 /* NONE */,
                    setup: function () {
                        return __awaiter(this, void 0, void 0, function () {
                            var sElem;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        // configure router
                                        router_1.Router.defaultAllowancesOn();
                                        router_1.Router.configure([
                                            {
                                                mode: 2 /* STANDARD_ALLOWANCES */,
                                                module: "A" /* A */,
                                            },
                                            { mode: 0 /* OFF */, module: "FORM" /* FORM */ },
                                            {
                                                mode: 2 /* STANDARD_ALLOWANCES */,
                                                module: "IMG" /* IMG */,
                                            },
                                        ], 'files/');
                                        history_1.History.setup(window.location.href, { wrapper: true });
                                        // configure html loader post operation
                                        html_loader_1.HTMLLoader.finish();
                                        html_loader_1.HTMLLoader.registerPostLoadFunc(function () {
                                            id_generator_1.IDGenerator.reset();
                                            id_generator_1.IDGenerator.attachIdsToAllElements();
                                            router_1.Router.setup(elements_1.Elements.htmlLoc);
                                            scroll_1.Scroll.promise(0);
                                        });
                                        // configure listeners on html loc
                                        document_1.D.addEventListener(elements_1.Elements.htmlLoc, "click" /* CLICK */, function (e) {
                                            var ev = e;
                                            var obj = {
                                                x: ev.clientX,
                                                y: ev.clientY,
                                                id: ev.target.id,
                                            };
                                            tracker_1.Tracker.getEventDispatchFunc("click" /* CLICK */)(obj);
                                        });
                                        document_1.D.addEventListener(elements_1.Elements.document, 'keypress', function (e) {
                                            var ev = e;
                                            var obj = {
                                                key: ev.key,
                                                id: ev.srcElement.id,
                                            };
                                            tracker_1.Tracker.getEventDispatchFunc("button" /* BUTTON */)(obj);
                                        });
                                        sElem = document.scrollingElement;
                                        document.addEventListener('scroll', function (e) {
                                            var dx = sElem.scrollLeft;
                                            var dy = sElem.scrollTop;
                                            var dtime = new Date().getTime();
                                            if (Math.abs(tracker_1.Tracker.lastPos.x - dx) > 10 ||
                                                (Math.abs(tracker_1.Tracker.lastPos.y - dy) > 10 &&
                                                    dtime - tracker_1.Tracker.lastPos.time > 100)) {
                                                tracker_1.Tracker.lastPos.x = dx;
                                                tracker_1.Tracker.lastPos.y = dy;
                                                tracker_1.Tracker.lastPos.time = dtime;
                                                var obj = { x: dx, y: dy };
                                                tracker_1.Tracker.getEventDispatchFunc("scroll" /* SCROLL */)(obj);
                                            }
                                        });
                                        // configure tracked events
                                        tracker_1.Tracker.registerEvent("history" /* HISTORY */);
                                        tracker_1.Tracker.registerEvent("button" /* BUTTON */);
                                        tracker_1.Tracker.registerEvent("click" /* CLICK */);
                                        tracker_1.Tracker.registerEvent("scroll" /* SCROLL */);
                                        // load first page
                                        return [4 /*yield*/, router_1.Router.load('files/index.html')];
                                    case 1:
                                        // load first page
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        });
                    },
                });
                return [2 /*return*/];
        }
    });
}); };
setup();
},{"../core/utils/q_params":20,"./../core/data-log/data":2,"./../core/dom/document":6,"./../core/dom/elements":7,"./../core/dom/scroll":10,"./../core/router/history":13,"./../core/router/router":14,"./../core/tracker/tracker":15,"./../core/utils/html_loader":18,"./../core/utils/id_generator":19,"./../core/utils/ready":21,"./../core/utils/scenarios":22}]},{},[25,30])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY2VuYXJpb3Mvc2NlbmFyaW9zLmpzb24iLCJzY3JpcHRzL3RzL2NvcmUvZGF0YS1sb2cvZGF0YS50cyIsInNjcmlwdHMvdHMvY29yZS9kYXRhLWxvZy9ldmVudC50cyIsInNjcmlwdHMvdHMvY29yZS9kYXRhLWxvZy9yZWNlaXZlci50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vYmFubmVyLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9kb2N1bWVudC50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vZWxlbWVudHMudHMiLCJzY3JpcHRzL3RzL2NvcmUvZG9tL2h0bWxfbG9jLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9tb2RhbC50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vc2Nyb2xsLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9zdWJtaXRfZm9ybS50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vdHJhY2tlcl9lbGVtcy50cyIsInNjcmlwdHMvdHMvY29yZS9yb3V0ZXIvaGlzdG9yeS50cyIsInNjcmlwdHMvdHMvY29yZS9yb3V0ZXIvcm91dGVyLnRzIiwic2NyaXB0cy90cy9jb3JlL3RyYWNrZXIvdHJhY2tlci50cyIsInNjcmlwdHMvdHMvY29yZS91dGlscy9jb25zb2xlX3dyYXBwZXIudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvZnVuY3MudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvaHRtbF9sb2FkZXIudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvaWRfZ2VuZXJhdG9yLnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3FfcGFyYW1zLnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3JlYWR5LnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3NjZW5hcmlvcy50cyIsInNjcmlwdHMvdHMvZHluYW1pYy1kb20vYWNjb3JkaW9uLnRzIiwic2NyaXB0cy90cy9keW5hbWljLWRvbS9kby1zb21ldGhpbmcuanMiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL2R5bmFtaWMtZG9tLnRzIiwic2NyaXB0cy90cy9keW5hbWljLWRvbS9odG1sLWltcG9ydHMudHMiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL2h0bWwvZm9vdGVyLmh0bWwiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL2h0bWwvaGVhZGVyLmh0bWwiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL3NsaWRlc2hvdy50cyIsInNjcmlwdHMvdHMvdHJhY2tlci90cmFja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDM0NBLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7QUFTNUIsSUFBTSxTQUFTLEdBQUcsSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFN0QsUUFBQSxPQUFPLEdBQWlCO0lBQ2pDLEdBQUcsRUFBRSxTQUFTLENBQUMsUUFBUSxFQUFFO0lBQ3pCLFlBQVksRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUMzQyxLQUFLLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDN0IsUUFBUSxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO0lBQ25DLFFBQVEsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLGNB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QUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7Z0RBQzdCLGlCQUFPLENBQUMsb0JBQW9CLHVCQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDOzZDQUN4RDt3Q0FDTCxDQUFDLENBQUMsQ0FBQzt3Q0FDSCwyQkFBMkI7d0NBQzNCLGlCQUFPLENBQUMsYUFBYSx5QkFBb0IsQ0FBQzt3Q0FDMUMsaUJBQU8sQ0FBQyxhQUFhLHVCQUFtQixDQUFDO3dDQUN6QyxpQkFBTyxDQUFDLGFBQWEscUJBQWtCLENBQUM7d0NBQ3hDLGlCQUFPLENBQUMsYUFBYSx1QkFBbUIsQ0FBQzt3Q0FDekMsa0JBQWtCO3dDQUNsQixxQkFBTSxlQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUE7O3dDQURyQyxrQkFBa0I7d0NBQ2xCLFNBQXFDLENBQUM7Ozs7O3FCQUN6QztpQkFDSixDQUFDLENBQUM7Ozs7S0FDTixDQUFDO0FBRUYsS0FBSyxFQUFFLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJtb2R1bGUuZXhwb3J0cz1bXHJcbiAgICB7XHJcbiAgICAgIFwic2NlbmFyaW9cIjogXCJZb3UgaGF2ZSBhIGRhdWdodGVyLCBhZ2UgMywgd2hvIGF0dGVuZHMgdGhlIFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbCBhbmQgaXMgaW4gdGhlIFRlZGR5IEJlYXIgY2xhc3Nyb29tLiBZb3UgYXJlIHBsYW5uaW5nIGEgdHJpcCB0byB0aGUgbGlicmFyeSBhbmQgd2FudCB0byBjaGVjayBvdXQgc29tZSBib29rcyB0aGF0IGNvbm5lY3Qgd2l0aCBzb21ldGhpbmcgc2hlIGlzIGRvaW5nIGluIHNjaG9vbC5cIixcclxuICAgICAgXCJxdWVzdGlvblwiOiBcIldoYXQgYXJlIHNvbWUgcG90ZW50aWFsIGJvb2sgdG9waWNzIHRoYXQgcmVsYXRlIHRvIHNvbWV0aGluZyB0aGF0IGlzIGdvaW5nIG9uIGluIGhlciBjbGFzc3Jvb20gdGhpcyB3ZWVrP1wiLFxyXG4gICAgICBcImlucHV0VHlwZVwiOiBcInRleHRhcmVhXCIsXHJcbiAgICAgIFwidGFnXCI6IFwiYm9va190b3BpY3NcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJzY2VuYXJpb1wiOiBcIllvdXIgc29uIGlzIGEgc3R1ZGVudCBpbiB0aGUgUGFuZGEgQmVhciBjbGFzc3Jvb20gYW5kIGhhcyBjb21lIGhvbWUgdGhpcyB3ZWVrIHNpbmdpbmcgYSBzb25nIGluIFNwYW5pc2guIFlvdSB0aGluayBoZSBoYXMgdGhlIHdvcmRzIHNsaWdodGx5IHdyb25nLCBidXQgeW91ciBTcGFuaXNoIGlzIGEgbGl0dGxlIGJpdCBydXN0eS5cIixcclxuICAgICAgXCJxdWVzdGlvblwiOiBcIkZpbmQgdGhlIGx5cmljcyBmb3IgdGhlIHNvbmdzIGhpcyBjbGFzcyBpcyBjdXJyZW50bHkgc2luZ2luZyBpbiBTcGFuaXNoLlwiLFxyXG4gICAgICBcImlucHV0VHlwZVwiOiBcInRleHRhcmVhXCIsXHJcbiAgICAgIFwidGFnXCI6IFwic3BhbmlzaF9seXJpY3NcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJzY2VuYXJpb1wiOiBcIllvdSBhcmUgYSBmYXRoZXIgd2l0aCBhIHNvbiB3aG8gaXMgaW4gdGhlIEJpZyBCZWFycyBhbmQgU3VuIEJlYXJzIGNsYXNzcm9vbXMuIFlvdSBrbm93IHRoZXJl4oCZcyBhIERvbnV0cyB3aXRoIERhZHMgZXZlbnQgaW4gdGhlIGZhbGwgYW5kIHdhbnQgdG8gbWFrZSBzdXJlIHRvIGdldCBpdCBvbnRvIHlvdXIgd29yayBjYWxlbmRhciBlYXJseSBzbyB0aGF0IHlvdSBkb27igJl0IGFjY2lkZW50YWxseSBzY2hlZHVsZSBzb21ldGhpbmcgdGhhdCBtYWtlcyBpdCBpbXBvc3NpYmxlIHRvIGF0dGVuZC5cIixcclxuICAgICAgXCJxdWVzdGlvblwiOiBcIldoYXQgZGF0ZSBhbmQgdGltZSBkbyB5b3UgbmVlZCB0byBibG9jayBvZmY/XCIsXHJcbiAgICAgIFwiaW5wdXRUeXBlXCI6IFwidGV4dGFyZWFcIixcclxuICAgICAgXCJ0YWdcIjogXCJ0aW1lX29mZlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcInNjZW5hcmlvXCI6IFwiWW91IGhhdmUgdHdvIGNoaWxkcmVuIHRoYXQgYXR0ZW5kIFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbC4gWW91IGtub3cgdGhhdCB0aGUgc2Nob29sIGhhcyBzb21lIGhvbGlkYXlzIHRocm91Z2hvdXQgdGhlIHllYXIuIFlvdSB3YW50IHRvIGxpbmUgdXAgYWx0ZXJuYXRpdmUgY2hpbGRjYXJlIGFycmFuZ2VtZW50cyBmb3IgdGhlIGRheXMgd2l0aCBubyBzY2hvb2wuXCIsXHJcbiAgICAgIFwicXVlc3Rpb25cIjogXCJGaW5kIGFsbCBvZiB0aGUgZGF0ZXMgd2hlbiB5b3Ugd2lsbCBuZWVkIGFsdGVybmF0aXZlIGNhcmUgdGhyb3VnaCB0aGUgZW5kIG9mIHRoaXMgeWVhci5cIixcclxuICAgICAgXCJpbnB1dFR5cGVcIjogXCJ0ZXh0YXJlYVwiLFxyXG4gICAgICBcInRhZ1wiOiBcImFsdGVybmF0ZV9jYXJlXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwic2NlbmFyaW9cIjogXCJBIG5ldyBzY2hvb2wgeWVhciBpcyBhYm91dCB0byBzdGFydC5cIixcclxuICAgICAgXCJxdWVzdGlvblwiOiBcIkZpZ3VyZSBvdXQgd2hpY2ggZm9ybXMgeW91IG5lZWQgdG8gZmlsbCBvdXQgc28gdGhhdCB5b3UgY2FuIGhhdmUgdGhlbSBjb21wbGV0ZWQgYnkgdGhlIGZpcnN0IGRheSBvZiBzY2hvb2wuXCIsXHJcbiAgICAgIFwiaW5wdXRUeXBlXCI6IFwidGV4dGFyZWFcIixcclxuICAgICAgXCJ0YWdcIjogXCJmb3Jtc1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcInNjZW5hcmlvXCI6IFwiWW91IGhhdmUgYSBkYXVnaHRlciBpbiB0aGUgVGVkZHkgQmVhciBjbGFzc3Jvb20gYXQgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sLiBZb3Ugd291bGQgbGlrZSB0byBmaW5kIGEgd2F5IHRvIGJlIGludm9sdmVkIHdpdGggdGhlIHNjaG9vbCB0byBnZXQgYSBzdHJvbmdlciBzZW5zZSBvZiBoZXIgc2Nob29sIGV4cGVyaWVuY2UgYW5kIHRvIGdpdmUgYmFjay5cIixcclxuICAgICAgXCJxdWVzdGlvblwiOiBcIldoYXQgb3B0aW9ucyBkbyB5b3UgaGF2ZSB0byB2b2x1bnRlZXIgZm9yIHRoZSBzY2hvb2w/XCIsXHJcbiAgICAgIFwiaW5wdXRUeXBlXCI6IFwidGV4dGFyZWFcIixcclxuICAgICAgXCJ0YWdcIjogXCJ2b2x1bnRlZXJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJzY2VuYXJpb1wiOiBcIllvdXIgc29uIGhhcyBhIGJpcnRoZGF5IGNvbWluZyB1cCBzb29uIGFuZCB5b3Ugd291bGQgbGlrZSB0byBzZW5kIGluIGEgdHJlYXQgdG8gc2hhcmUgYXQgc2Nob29sLlwiLFxyXG4gICAgICBcInF1ZXN0aW9uXCI6IFwiSXMgdGhpcyBvaz8gV2hhdCBraW5kcyBvZiB0cmVhdHMgYXJlIGFjY2VwdGFibGU/IFdoYXQgZG8geW91IG5lZWQgdG8gZG8gdG8gc2V0IGl0IHVwP1wiLFxyXG4gICAgICBcImlucHV0VHlwZVwiOiBcInRleHRhcmVhXCIsXHJcbiAgICAgIFwidGFnXCI6IFwiYmlydGhkYXlcIlxyXG4gICAgfVxyXG4gIF1cclxuICAiLCJpbXBvcnQgeyBUcmFja2VyRXZlbnQgfSBmcm9tICcuL2V2ZW50JztcbmNvbnNvbGUubG9nKCdkYXRhIGxvYWRlZC4nKTtcbmV4cG9ydCBpbnRlcmZhY2UgTXR1cmtVUkxEYXRhIHtcbiAgICByYXc6IHN0cmluZztcbiAgICBhc3NpZ25tZW50SUQ6IHN0cmluZyB8IG51bGw7XG4gICAgaGl0SUQ6IHN0cmluZyB8IG51bGw7XG4gICAgd29ya2VySUQ6IHN0cmluZyB8IG51bGw7XG4gICAgc3VibWl0VG86IHN0cmluZyB8IG51bGw7XG59XG5cbmNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJz8nKVsxXSk7XG5cbmV4cG9ydCBjb25zdCB1cmxEYXRhOiBNdHVya1VSTERhdGEgPSB7XG4gICAgcmF3OiB1cmxQYXJhbXMudG9TdHJpbmcoKSxcbiAgICBhc3NpZ25tZW50SUQ6IHVybFBhcmFtcy5nZXQoJ2Fzc2lnbm1lbnRJZCcpLFxuICAgIGhpdElEOiB1cmxQYXJhbXMuZ2V0KCdoaXRJZCcpLFxuICAgIHdvcmtlcklEOiB1cmxQYXJhbXMuZ2V0KCd3b3JrZXJJZCcpLFxuICAgIHN1Ym1pdFRvOiB1cmxQYXJhbXMuZ2V0KCd0dXJrU3VibWl0VG8nKSxcbn07XG5cbmV4cG9ydCBjbGFzcyBEYXRhIHtcbiAgICBwdWJsaWMgbG9nczogeyBbZXZlbnRUeXBlOiBzdHJpbmddOiBUcmFja2VyRXZlbnRbXSB9ID0ge307XG4gICAgcHVibGljIGRhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgICBwdWJsaWMgZXJyb3JzOiBhbnlbXSA9IFtdO1xuICAgIHB1YmxpYyB1cmxEYXRhOiBNdHVya1VSTERhdGE7XG5cbiAgICBjb25zdHJ1Y3RvcihyYXdNdHVya1VSTERhdGE6IE10dXJrVVJMRGF0YSkge1xuICAgICAgICB0aGlzLnVybERhdGEgPSByYXdNdHVya1VSTERhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIHNlcmlhbGl6ZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcyk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZGF0YSA9IG5ldyBEYXRhKHVybERhdGEpO1xuXG5PYmplY3QuYXNzaWduKHdpbmRvdywgeyBkYXRhIH0pO1xuIiwiaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gXCIuLi91dGlscy9jb25zb2xlX3dyYXBwZXJcIjtcbmltcG9ydCB7IG5vdyB9IGZyb20gXCIuLi91dGlscy9mdW5jc1wiO1xubG9nKFwiZXZlbnQgbG9hZGVkLlwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgY29uc3QgZW51bSBBY3Rpb25FbnVtIHtcbiAgQ0xJQ0sgPSBcImNsaWNrXCIsXG4gIEJVVFRPTiA9IFwiYnV0dG9uXCIsXG4gIFNDUk9MTCA9IFwic2Nyb2xsXCIsXG4gIEhJU1RPUlkgPSBcImhpc3RvcnlcIixcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja2VyRXZlbnQge1xuICBhY3Rpb246IHN0cmluZztcbiAgdGltZTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0VG9UcmFja2VyRXZlbnQob2JqOiBhbnksIGFjdGlvbjogc3RyaW5nKSB7XG4gIG9iai5hY3Rpb24gPSBhY3Rpb247XG4gIG9iai50aW1lID0gbm93KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RyYWNrZXJFdmVudChvYmo6IGFueSk6IG9iaiBpcyBUcmFja2VyRXZlbnQge1xuICByZXR1cm4gb2JqLmFjdGlvbiAhPT0gdW5kZWZpbmVkICYmIG9iai50aW1lICE9PSB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBCYXNlVHJhY2tlckV2ZW50PFQ+IGltcGxlbWVudHMgVHJhY2tlckV2ZW50IHtcbiAgcHVibGljIGN1c3RFdjogQ3VzdG9tRXZlbnQ7XG4gIHB1YmxpYyBhY3Rpb246IHN0cmluZztcbiAgcHVibGljIHRpbWU6IG51bWJlcjtcbiAgY29uc3RydWN0b3IoYWN0aW9uOiBzdHJpbmcsIGV2ZW50SW5pdERpY3Q/OiBDdXN0b21FdmVudEluaXQ8VD4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLmN1c3RFdiA9IG5ldyBDdXN0b21FdmVudChhY3Rpb24sIGV2ZW50SW5pdERpY3QpO1xuICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuICAgIHRoaXMudGltZSA9IG5vdygpO1xuICB9XG5cbiAgcHVibGljIGdldCBkZXRhaWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VzdEV2LmRldGFpbDtcbiAgfVxufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1jbGFzc2VzLXBlci1maWxlXG5leHBvcnQgY2xhc3MgQ2xpY2tFdmVudCBleHRlbmRzIEJhc2VUcmFja2VyRXZlbnQ8e1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgaWQ6IHN0cmluZztcbn0+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgeDogbnVtYmVyLFxuICAgIHk6IG51bWJlcixcbiAgICBpZDogc3RyaW5nLFxuICAgIGV2ZW50SW5pdERpY3Q/OlxuICAgICAgfCBDdXN0b21FdmVudEluaXQ8eyB4OiBudW1iZXI7IHk6IG51bWJlcjsgaWQ6IHN0cmluZyB9PlxuICAgICAgfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgc3VwZXIoQWN0aW9uRW51bS5DTElDSywgZXZlbnRJbml0RGljdCk7XG4gICAgdGhpcy5kZXRhaWwueCA9IHg7XG4gICAgdGhpcy5kZXRhaWwueSA9IHk7XG4gICAgdGhpcy5kZXRhaWwuaWQgPSBpZDtcbiAgfVxufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1jbGFzc2VzLXBlci1maWxlXG5leHBvcnQgY2xhc3MgQnV0dG9uRXZlbnQgZXh0ZW5kcyBCYXNlVHJhY2tlckV2ZW50PHsga2V5OiBzdHJpbmc7IGlkOiBzdHJpbmcgfT4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBrZXk6IHN0cmluZyxcbiAgICBpZDogc3RyaW5nLFxuICAgIGV2ZW50SW5pdERpY3Q/OiBDdXN0b21FdmVudEluaXQ8eyBrZXk6IHN0cmluZzsgaWQ6IHN0cmluZyB9PiB8IHVuZGVmaW5lZFxuICApIHtcbiAgICBzdXBlcihBY3Rpb25FbnVtLkNMSUNLLCBldmVudEluaXREaWN0KTtcbiAgICB0aGlzLmRldGFpbC5rZXkgPSBrZXk7XG4gICAgdGhpcy5kZXRhaWwuaWQgPSBpZDtcbiAgfVxufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1jbGFzc2VzLXBlci1maWxlXG5leHBvcnQgY2xhc3MgSGlzdG9yeUV2ZW50IGV4dGVuZHMgQmFzZVRyYWNrZXJFdmVudDx7XG4gIHVybDogc3RyaW5nO1xuICBleHRyYT86IGFueTtcbn0+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgZXh0cmE/OiBhbnksXG4gICAgZXZlbnRJbml0RGljdD86IEN1c3RvbUV2ZW50SW5pdDx7IHVybDogc3RyaW5nIH0+IHwgdW5kZWZpbmVkXG4gICkge1xuICAgIHN1cGVyKEFjdGlvbkVudW0uSElTVE9SWSwgZXZlbnRJbml0RGljdCk7XG4gICAgdGhpcy5kZXRhaWwudXJsID0gdXJsO1xuICAgIHRoaXMuZGV0YWlsLmV4dHJhID0gZXh0cmE7XG4gIH1cbn1cbiIsImltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tIFwiLi4vdXRpbHMvY29uc29sZV93cmFwcGVyXCI7XG5pbXBvcnQgeyBpc1RyYWNrZXJFdmVudCwgVHJhY2tlckV2ZW50IH0gZnJvbSBcIi4vZXZlbnRcIjtcbmxvZyhcInJlY2VpdmVyIGxvYWRlZC5cIiwgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGNsYXNzIEV2ZW50UmVjZWl2ZXIge1xuICBwcml2YXRlIG1hcCA9IG5ldyBNYXA8c3RyaW5nLCAoZXZlbnQ6IFRyYWNrZXJFdmVudCkgPT4gdm9pZD4oKTtcbiAgcHJpdmF0ZSBlbWl0dGVyID0gbmV3IEV2ZW50VGFyZ2V0KCk7XG5cbiAgcHVibGljIHJlZ2lzdGVyKGV2ZW50VHlwZTogc3RyaW5nLCBjYWxsYmFjaz86IChldmVudDogVHJhY2tlckV2ZW50KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5lbWl0dGVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB0cmFja0V2ID0gKChldmVudCBhcyB1bmtub3duKSBhcyBDdXN0b21FdmVudClcbiAgICAgICAgLmRldGFpbCBhcyBUcmFja2VyRXZlbnQ7XG4gICAgICBpZiAoaXNUcmFja2VyRXZlbnQodHJhY2tFdikgJiYgY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sodHJhY2tFdik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLm1hcC5zZXQoZXZlbnRUeXBlLCBjYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRvRXZlbnQoZXZlbnQ6IFRyYWNrZXJFdmVudCkge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gdGhpcy5tYXAuZ2V0KFwiXCIgKyBldmVudC5hY3Rpb24pO1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIi4uL3JvdXRlci9yb3V0ZXJcIjtcbmltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tIFwiLi4vdXRpbHMvY29uc29sZV93cmFwcGVyXCI7XG5pbXBvcnQgeyBIaXN0b3J5IH0gZnJvbSBcIi4vLi4vcm91dGVyL2hpc3RvcnlcIjtcbmltcG9ydCB7IEQgfSBmcm9tIFwiLi9kb2N1bWVudFwiO1xuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tIFwiLi9lbGVtZW50c1wiO1xubG9nKFwiYmFubmVyIGxvYWRlZC5cIiwgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGNsYXNzIFRvcEJhbm5lciB7XG4gIHB1YmxpYyBzdGF0aWMgc2hvdygpIHtcbiAgICBUb3BCYW5uZXIuc2hvd2luZyA9IHRydWU7XG4gICAgRC5kaXNwbGF5KEVsZW1lbnRzLmRkVXAsIHRydWUpO1xuICAgIEQuZGlzcGxheShFbGVtZW50cy5kZERvd24sIGZhbHNlKTtcbiAgICBELmRpc3BsYXkoRWxlbWVudHMuZGRDb250ZW50LCB0cnVlKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaGlkZSgpIHtcbiAgICBUb3BCYW5uZXIuc2hvd2luZyA9IGZhbHNlO1xuICAgIEQuZGlzcGxheShFbGVtZW50cy5kZERvd24sIHRydWUpO1xuICAgIEQuZGlzcGxheShFbGVtZW50cy5kZFVwLCBmYWxzZSk7XG4gICAgRC5kaXNwbGF5KEVsZW1lbnRzLmRkQ29udGVudCwgZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkb0Rpc3BsYXlDaGFuZ2UoKSB7XG4gICAgVG9wQmFubmVyLnNob3dpbmcgPyBUb3BCYW5uZXIuaGlkZSgpIDogVG9wQmFubmVyLnNob3coKTtcbiAgfVxuICBwdWJsaWMgc3RhdGljIHNldHVwKCkge1xuICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihFbGVtZW50cy5kZEFycm93LCBcImNsaWNrXCIsIFRvcEJhbm5lci5kb0Rpc3BsYXlDaGFuZ2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgc2hvd2luZyA9IHRydWU7XG59XG5cbkQuYWRkRXZlbnRMaXN0ZW5lcihcIm10dXJrLXRvcC1iYW5uZXItYmFja1wiLCBcImNsaWNrXCIsIChlKSA9PiB7XG4gIGlmIChIaXN0b3J5LmNhbkJhY2t3YXJkKCkpIHtcbiAgICBSb3V0ZXIubG9hZFdpdGhQYXRoUHJlZml4KEhpc3RvcnkuYmFja3dhcmQoKSk7XG4gIH0gZWxzZSB7XG4gICAgYWxlcnQoXCJUaGVyZSBpcyBubyBwYWdlIGhpc3RvcnkgdG8gZ28gYmFjayBmb3IgYXQgdGhpcyB0aW1lIVwiKTtcbiAgfVxufSk7XG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgZXJyb3IsIGxvZyB9IGZyb20gXCIuLy4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlclwiO1xubG9nKFwiZG9jdW1lbnQgbG9hZGVkLlwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgY2xhc3MgRCB7XG4gIHB1YmxpYyBzdGF0aWMgZG9jOiBEb2N1bWVudCA9IGRvY3VtZW50O1xuXG4gIHB1YmxpYyBzdGF0aWMgZWxlbShlbGVtOiBFbGVtZW50IHwgc3RyaW5nKTogRWxlbWVudCB7XG4gICAgaWYgKHR5cGVvZiBlbGVtID09PSBcInN0cmluZ1wiKSB7XG4gICAgICByZXR1cm4gRC5pZChlbGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVsZW0gYXMgRWxlbWVudDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRpc3BsYXkoZWxlbTogRWxlbWVudCB8IHN0cmluZywgc2hvdzogYm9vbGVhbik6IHZvaWQge1xuICAgIGVsZW0gPSBELmVsZW0oZWxlbSk7XG4gICAgaWYgKHNob3cpIHtcbiAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcIm5vbmVcIik7XG4gICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5XCIpO1xuICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwibm9uZVwiKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGlkKGlkOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgZWxlbWVudCA9IEQuZG9jLmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFbGVtZW50IHdhcyBub3QgZm91bmQsIGlkOiA8JHtpZH0+LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gIH1cbiAgcHVibGljIHN0YXRpYyBjbGF6KGNsYXo6IHN0cmluZyk6IEhUTUxDb2xsZWN0aW9uT2Y8RWxlbWVudD4ge1xuICAgIHJldHVybiBELmRvYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXopO1xuICB9XG4gIHB1YmxpYyBzdGF0aWMgdGFnKHRhZzogc3RyaW5nKTogSFRNTENvbGxlY3Rpb25PZjxFbGVtZW50PiB7XG4gICAgcmV0dXJuIEQuZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZyk7XG4gIH1cbiAgcHVibGljIHN0YXRpYyBpbWFnZShpZDogc3RyaW5nLCB1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgIGVycm9yKCgpID0+IEQuaWQoaWQpLnNldEF0dHJpYnV0ZShcInNyY1wiLCB1cmwpKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBlbGVtOiBFbGVtZW50IHwgc3RyaW5nLFxuICAgIHR5cGU6IHN0cmluZyxcbiAgICBsaXN0ZW5lcjogKGU6IEV2ZW50KSA9PiBhbnlcbiAgKSB7XG4gICAgZWxlbSA9IHRoaXMuZWxlbShlbGVtKTtcbiAgICBjb25zdCB3cmFwcGVyRnVuYyA9IChlOiBFdmVudCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGlzdGVuZXIoZSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH07XG4gICAgKGVsZW0gYXMgRWxlbWVudCkuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCB3cmFwcGVyRnVuYyk7XG4gICAgcmV0dXJuIHdyYXBwZXJGdW5jO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBlYWNoKGVsZW06IEVsZW1lbnQgfCBzdHJpbmcsIGFwcGx5OiAobm9kZTogRWxlbWVudCkgPT4gYW55KSB7XG4gICAgZWxlbSA9IHRoaXMuZWxlbShlbGVtKTtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGVsZW0uY2hpbGRyZW47XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgYXBwbHkoY2hpbGRyZW5baV0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZWFjaFJlY3VyKFxuICAgIGVsZW06IEVsZW1lbnQgfCBzdHJpbmcsXG4gICAgYXBwbHk6IChub2RlOiBFbGVtZW50KSA9PiBhbnlcbiAgKSB7XG4gICAgZWxlbSA9IHRoaXMuZWxlbShlbGVtKTtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGVsZW0uY2hpbGRyZW47XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIGFwcGx5KGNoaWxkKTtcbiAgICAgIEQuZWFjaFJlY3VyKGNoaWxkLCBhcHBseSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBjcmVhdGU8SyBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcD4oXG4gICAgdGFnTmFtZTogSyxcbiAgICBvcHRpb25zPzogRWxlbWVudENyZWF0aW9uT3B0aW9uc1xuICApOiBIVE1MRWxlbWVudFRhZ05hbWVNYXBbS10ge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUsIG9wdGlvbnMpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSAnLi4vdXRpbHMvY29uc29sZV93cmFwcGVyJztcbmltcG9ydCB7IEQgfSBmcm9tICcuL2RvY3VtZW50JztcbmxvZygnZWxlbWVudCBsb2FkZWQuJywgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuLyoqXG4gKiBUaGVzZSBhcmUgZWxlbWVudHMgdGhhdCBhcmUgaW4gZXZlcnkgc2luZ2xlIHByb2plY3QuIEV2ZW4gaWYgdGhleSBhcmUgbm90IHVzZWQgdGhleSBzaG91bGRcbiAqIGJlIHBsYWNlIGluIHRoZSBwcm9qZWN0IGFuZCBkaXNwbGF5IHNob3VsZCBiZSBzZXQgdG8gbm9uZS4gVGhpcyBzaW1wbGlmaWVzIGNvbmZpZ3VyYXRpb25cbiAqIGFuZCBzb21lIGNvbW1vbiBmdW5jdGlvbnMgYW5kIGFsbG93cyBsZXNzIG51bGwgY2hlY2tzIHRvIGJlIHBlcmZvcm1lZCBvdmVyYWxsLiBJZiB0aGVcbiAqIGVsZW1lbnQgZG9lcyBub3QgZXhpc3QgYXQgcnVuIHRpbWUgYW4gZW1wdHkgZGl2IHdpdGggdGhhdCBpZCBpcyBjcmVhdGVkIGFuZCBpdHMgZGlzcGxheVxuICogaXMgc2V0IHRvIG5vbmUgdGhlbiBhcHBlbmRlZCB0byB0aGUgYm9keS5cbiAqL1xuXG4vKipcbiAqIEF0dGVtcHRzIHRvIGdldCBhbiBlbGVtZW50LCBpZiB1bnN1Y2Nlc3NmdWwsIGNyZWF0ZXMgZGl2IHdpdGggaWQgYW5kIGFwcGVuZHMgdG8gYm9keS5cbiAqXG4gKiBAcGFyYW0gaWQgLSB0aGUgaWQgb2YgdGhlIGVsZW1lbnQgdG8gcmV0cmlldmUuXG4gKi9cbmZ1bmN0aW9uIG1ha2VFbGVtSWZOb3RFeGlzdChpZDogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICAgIGxldCBlbGVtO1xuICAgIHRyeSB7XG4gICAgICAgIGVsZW0gPSBELmlkKGlkKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgZWxlbSA9IEQuY3JlYXRlKCdkaXYnKTtcbiAgICAgICAgZWxlbS5pZCA9IGlkO1xuICAgICAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGVsZW0pO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbTtcbn1cblxuLyoqXG4gKiBDb21tb25seSBhY2Nlc3NlZCBlbGVtZW50cywgYWxsb3dzIGZvciBjbGVhcmVyIGRvbSBtYW5pcCBvbiB0aGVzZSBlbGVtZW50cy5cbiAqL1xuZXhwb3J0IGNvbnN0IEVsZW1lbnRzID0ge1xuICAgIGRvY3VtZW50OiBELmRvYy5kb2N1bWVudEVsZW1lbnQsXG4gICAgd3JhcHBlcjogbWFrZUVsZW1JZk5vdEV4aXN0KCd3cmFwcGVyJyksXG4gICAgaHRtbExvYzogbWFrZUVsZW1JZk5vdEV4aXN0KCdodG1sLWxvYycpLFxuICAgIGlubmVyQm9keTogbWFrZUVsZW1JZk5vdEV4aXN0KCdpbm5lci1ib2R5JyksXG4gICAgZGREb3duOiBtYWtlRWxlbUlmTm90RXhpc3QoJ210dXJrLXRvcC1iYW5uZXItZHJvcC1kb3duLWJ1dHRvbicpLFxuICAgIGRkVXA6IG1ha2VFbGVtSWZOb3RFeGlzdCgnbXR1cmstdG9wLWJhbm5lci1jb2xsYXBzZS1idXR0b24nKSxcbiAgICBkZENvbnRlbnQ6IG1ha2VFbGVtSWZOb3RFeGlzdCgnbXR1cmstdG9wLWJhbm5lci1kcm9wLWRvd24tY29udGVudCcpLFxuICAgIGJhY2tCdXR0b246IG1ha2VFbGVtSWZOb3RFeGlzdCgnbXR1cmstdG9wLWJhbm5lci1iYWNrJyksXG4gICAgZGRBcnJvdzogbWFrZUVsZW1JZk5vdEV4aXN0KCdtdHVyay10b3AtYmFubmVyLWFycm93JyksXG4gICAgbXRUb3BCYW5uZXJUZXh0OiBtYWtlRWxlbUlmTm90RXhpc3QoJ210dXJrLXRvcC1iYW5uZXItdGV4dCcpLFxuICAgIG10U2NlbmFyaW9Db250ZXh0OiBtYWtlRWxlbUlmTm90RXhpc3QoJ3NjZW5hcmlvX2NvbnRleHQnKSxcbiAgICBtdFNjZW5hcmlvUXVlc3Rpb246IG1ha2VFbGVtSWZOb3RFeGlzdCgnc2NlbmFyaW9fcXVlc3Rpb24nKSxcbiAgICBsb2dGaWxlSW5wdXQ6IG1ha2VFbGVtSWZOb3RFeGlzdChcbiAgICAgICAgJ210dXJrLXRvcC1iYW5uZXItZHJvcC1kb3duLWNvbnRlbnQtbG9nLWZpbGUtaW5wdXQnXG4gICAgKSxcbiAgICBzdWJtaXRGb3JtOiBtYWtlRWxlbUlmTm90RXhpc3QoJ210dXJrLXN1Ym1pdC1mb3JtJyksXG4gICAgbW9kYWw6IG1ha2VFbGVtSWZOb3RFeGlzdCgnbW9kYWwnKSxcbn07XG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSAnLi4vdXRpbHMvY29uc29sZV93cmFwcGVyJztcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSAnLi8uLi9kb20vZWxlbWVudHMnO1xubG9nKCdodG1sIGxvYyBsb2FkZWQuJywgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGVudW0gQXBwRW51bSB7XG4gICAgSU5GT1JNQVRJT05fRk9SQUdJTkcgPSAnaW5mb3JtYXRpb24tZm9yYWdpbmcnLFxuICAgIENPR05JVElWRV9MT0FEID0gJ2NvZ25pdGl2ZS1sb2FkJyxcbiAgICBHRU5ERVJfTUFHID0gJ2dlbmRlci1tYWcnLFxuICAgIEVSUk9SID0gJ2Vycm9yJyxcbn1cblxuZXhwb3J0IGVudW0gTW9kZUVudW0ge1xuICAgIFJFQUwgPSAncmVhbCcsXG4gICAgU0FOREJPWCA9ICdzYW5kYm94JyxcbiAgICBURVNUID0gJ3Rlc3QnLFxuICAgIEVSUk9SID0gJ2Vycm9yJyxcbn1cblxuZXhwb3J0IGNsYXNzIEhUTUxMb2Mge1xuICAgIHB1YmxpYyBzdGF0aWMgZWxlbSA9IEVsZW1lbnRzLmh0bWxMb2M7XG4gICAgcHVibGljIHN0YXRpYyBhcHA6IEFwcEVudW07XG4gICAgcHVibGljIHN0YXRpYyBtb2RlOiBNb2RlRW51bTtcbiAgICBwdWJsaWMgc3RhdGljIHNjZW5hcmlvOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgc3RhdGljIHNldHVwKCkge1xuICAgICAgICBIVE1MTG9jLmFwcCA9IChIVE1MTG9jLmVsZW0uZGF0YXNldC5hcHAgYXMgQXBwRW51bSkgfHwgQXBwRW51bS5FUlJPUjtcbiAgICAgICAgSFRNTExvYy5tb2RlID1cbiAgICAgICAgICAgIChIVE1MTG9jLmVsZW0uZGF0YXNldC5tb2RlIGFzIE1vZGVFbnVtKSB8fCBNb2RlRW51bS5FUlJPUjtcbiAgICAgICAgSFRNTExvYy5zY2VuYXJpbyA9IEhUTUxMb2MuZWxlbS5kYXRhc2V0LnNjZW5hcmlvIHx8ICdlcnJvcic7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gJy4vLi4vdXRpbHMvY29uc29sZV93cmFwcGVyJztcbmltcG9ydCB7IEQgfSBmcm9tICcuL2RvY3VtZW50JztcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSAnLi9lbGVtZW50cyc7XG5sb2coJ21vZGFsIGxvYWRlZC4nLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgY2xhc3MgTW9kYWwge1xuICAgIHB1YmxpYyBzdGF0aWMgZWxlbSA9IEVsZW1lbnRzLm1vZGFsO1xuXG4gICAgcHVibGljIHN0YXRpYyBkaXNwbGF5KHNyYzogc3RyaW5nKSB7XG4gICAgICAgIE1vZGFsLmVsZW0uc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgJ3N0eWxlJyxcbiAgICAgICAgICAgIGBsZWZ0OiAke01hdGgucm91bmQod2luZG93LnBhZ2VYT2Zmc2V0KX1weDsgdG9wOiAke01hdGgucm91bmQoXG4gICAgICAgICAgICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICApfXB4O2BcbiAgICAgICAgKTtcbiAgICAgICAgTW9kYWwuZWxlbS5jbGFzc0xpc3QucmVwbGFjZSgnaGlkZS1tb2RhbCcsICdzaG93LW1vZGFsJyk7XG4gICAgICAgIEQuZWFjaChNb2RhbC5lbGVtLCAobm9kZSkgPT4ge1xuICAgICAgICAgICAgKG5vZGUgYXMgSFRNTElGcmFtZUVsZW1lbnQpLnNyYyA9IHNyYztcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbm9zY3JvbGwnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGhpZGUoKSB7XG4gICAgICAgIE1vZGFsLmVsZW0uY2xhc3NMaXN0LnJlcGxhY2UoJ3Nob3ctbW9kYWwnLCAnaGlkZS1tb2RhbCcpO1xuICAgICAgICBELmVhY2goTW9kYWwuZWxlbSwgKG5vZGUpID0+IHtcbiAgICAgICAgICAgIChub2RlIGFzIEhUTUxJRnJhbWVFbGVtZW50KS5zcmMgPSAnJztcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm9zY3JvbGwnKTtcbiAgICB9XG59XG5cbkQuYWRkRXZlbnRMaXN0ZW5lcihNb2RhbC5lbGVtLCAnY2xpY2snLCAoZSkgPT4ge1xuICAgIE1vZGFsLmhpZGUoKTtcbn0pO1xuRC5lYWNoKE1vZGFsLmVsZW0sIChub2RlKSA9PiB7XG4gICAgRC5hZGRFdmVudExpc3RlbmVyKG5vZGUsICdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbn0pO1xuIiwiaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGVycm9yLCBsb2cgfSBmcm9tICcuLi91dGlscy9jb25zb2xlX3dyYXBwZXInO1xuaW1wb3J0IHsgbm9vcCwgbm93IH0gZnJvbSAnLi8uLi91dGlscy9mdW5jcyc7XG5sb2coJ3Njcm9sbCBsb2FkZWQuJywgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuLyoqXG4gKiBMaW5lYXIgaW1wbGVtZW50YXRpb24gb2Ygc2Nyb2xsaW5nLlxuICogRm9sbG93cyB0aGUgc2luZ2xldG9uIHBhdHRlcm4sIGNhbGwgZG8gdG8gc3RhcnQgYSBzY3JvbGwgb3BlcmF0aW9uLlxuICpcbiAqIElmIGEgc2Nyb2xsIGlzIGNhbGxlZCB3aGVuIGFub3RoZXIgc2Nyb2xsIGhhcyBhbHJlYWR5IGJlZ3VuIGFuXG4gKiBlcnJvciB3aWxsIGJlIHRocm93biwgYnV0IHRoZSBmaXJzdCBzY3JvbGwgd2lsbCBjb250aW51ZSB1bnRpbCBjb21wbGV0aW9uLlxuICovXG5leHBvcnQgY2xhc3MgU2Nyb2xsIHtcbiAgICBwdWJsaWMgc3RhdGljIFNURVBfSU5fTVMgPSAxNztcblxuICAgIHB1YmxpYyBzdGF0aWMgY2FsbGJhY2soXG4gICAgICAgIGVuZFBvczogbnVtYmVyLFxuICAgICAgICBkdXJhdGlvbjogbnVtYmVyID0gMjAwLFxuICAgICAgICBjb21wbGV0ZTogKC4uLmFyZ3M6IGFueSkgPT4gYW55ID0gbm9vcFxuICAgICk6IHZvaWQge1xuICAgICAgICBpZiAoU2Nyb2xsLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAnQ2Fubm90IG1ha2UgbXVsdGlwbGUgY2FsbHMgdG8gc2Nyb2xsIGF0IHRoZSBzYW1lIHRpbWUuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBTY3JvbGwucnVubmluZyA9IHRydWU7XG4gICAgICAgIGNvbnN0IG9sZENvbXBsZXRlID0gY29tcGxldGU7XG4gICAgICAgIGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgU2Nyb2xsLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGVycm9yKG9sZENvbXBsZXRlKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS51cGRhdGUoZW5kUG9zLCBkdXJhdGlvbiwgY29tcGxldGUpLmF0dGVtcHRTY3JvbGwoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHByb21pc2UoZW5kUG9zOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIgPSAyMDApIHtcbiAgICAgICAgaWYgKFNjcm9sbC5ydW5uaW5nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgJ0Nhbm5vdCBtYWtlIG11bHRpcGxlIGNhbGxzIHRvIHNjcm9sbCBhdCB0aGUgc2FtZSB0aW1lLidcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgU2Nyb2xsLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoXG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgcmVzb2x2ZTogKHZhbHVlPzogdW5rbm93bikgPT4gdm9pZCxcbiAgICAgICAgICAgICAgICByZWplY3Q6IChhcmcwOiBhbnkpID0+IHZvaWRcbiAgICAgICAgICAgICkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJ1blJlc29sdmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgU2Nyb2xsLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnVwZGF0ZShlbmRQb3MsIGR1cmF0aW9uLCBydW5SZXNvbHZlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRlbXB0U2Nyb2xsKCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIFNjcm9sbC5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBydW5uaW5nID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2UgPSBuZXcgU2Nyb2xsKDAsIDAsIG5vb3ApO1xuICAgIHByaXZhdGUgY29tcGxldGU6ICguLi5hcmdzOiBhbnkpID0+IGFueTtcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZW5kUG9zOiBudW1iZXIsXG4gICAgICAgIHByaXZhdGUgZHVyYXRpb246IG51bWJlcixcbiAgICAgICAgY29tcGxldGU6ICguLi5hcmdzOiBhbnkpID0+IGFueVxuICAgICkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gKC4uLmFyZ3M6IGFueSkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3Njcm9sbCcpKTtcbiAgICAgICAgICAgIGNvbXBsZXRlKGFyZ3MpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGlzUnVubmluZygpIHtcbiAgICAgICAgcmV0dXJuIFNjcm9sbC5ydW5uaW5nO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlKFxuICAgICAgICBlbmRQb3M6IG51bWJlcixcbiAgICAgICAgZHVyYXRpb246IG51bWJlcixcbiAgICAgICAgY29tcGxldGU6ICguLi5hcmdzOiBhbnkpID0+IGFueVxuICAgICk6IFNjcm9sbCB7XG4gICAgICAgIHRoaXMuZW5kUG9zID0gZW5kUG9zO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWxjU2Nyb2xsQW1vdW50KCkge1xuICAgICAgICBjb25zdCBjdXJUaW1lID0gbm93KCk7XG4gICAgICAgIGNvbnN0IHN0ZXBzID0gTWF0aC5tYXgoXG4gICAgICAgICAgICAxLFxuICAgICAgICAgICAgKHRoaXMuZHVyYXRpb24gLSBjdXJUaW1lKSAvIFNjcm9sbC5TVEVQX0lOX01TXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGN1clBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbCgodGhpcy5lbmRQb3MgLSBjdXJQb3MpIC8gc3RlcHMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2Nyb2xsKCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsKDAsIHRoaXMuY2FsY1Njcm9sbEFtb3VudCgpKTtcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA9PT0gdGhpcy5lbmRQb3MpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnNjcm9sbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGF0dGVtcHRTY3JvbGwoKSB7XG4gICAgICAgIGlmICgncmVxdWVzdEFuaW1hdGlvbkZyYW1lJyBpbiB3aW5kb3cgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsKDAsIHRoaXMuZW5kUG9zKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjcm9sbCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IG5vb3AgfSBmcm9tICcuLi91dGlscy9mdW5jcyc7XG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi8uLi9kYXRhLWxvZy9kYXRhJztcbmltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tICcuLy4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlcic7XG5pbXBvcnQgeyBwYXJhbXMgfSBmcm9tICcuLy4uL3V0aWxzL3FfcGFyYW1zJztcbmltcG9ydCB7IEQgfSBmcm9tICcuL2RvY3VtZW50JztcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSAnLi9lbGVtZW50cyc7XG5sb2coJ3N1Ym1pdCBmb3JtIGxvYWRlZC4nLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgaW50ZXJmYWNlIEFsbG93U3VibWlzc2lvbiB7XG4gICAgYWxsb3coKTogc3RyaW5nIHwgbnVsbDtcbiAgICBwcmVTdWJtaXQoLi4uYXJnczogYW55KTogYW55O1xufVxuXG5jb25zdCBrID0gJ05jRjJXUmtVYmY1dHpqNGJJdkk5ODFGcW1TNnBNbE84M2cyajd1NVInO1xuY29uc3QgZ2F0ZSA9ICdodHRwczovLzJ5a29wcTFvaGEuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vUFJPRC9sb2dzJztcblxuY29uc3QgQWxsb3dTdWJtaXNzaW9uRGVmYXVsdDogQWxsb3dTdWJtaXNzaW9uID0ge1xuICAgIGFsbG93OiAoKSA9PiBudWxsLFxuICAgIHByZVN1Ym1pdDogbm9vcCxcbn07XG5cbmV4cG9ydCBjbGFzcyBTdWJtaXRGb3JtIHtcbiAgICBwdWJsaWMgc3RhdGljIGVsZW0gPSBFbGVtZW50cy5zdWJtaXRGb3JtIGFzIEhUTUxGb3JtRWxlbWVudDtcbiAgICBwdWJsaWMgc3RhdGljIGFsbG93U3VibWl0RGVmYXVsdCA9IHsgYWxsb3c6ICgpID0+IHRydWUsIHByZVN1Ym1pdDogbm9vcCB9O1xuXG4gICAgcHVibGljIHN0YXRpYyBzZXR1cChcbiAgICAgICAgYWxsb3dTdWJtaXNzaW9uOiBBbGxvd1N1Ym1pc3Npb24gPSBBbGxvd1N1Ym1pc3Npb25EZWZhdWx0XG4gICAgKSB7XG4gICAgICAgIFN1Ym1pdEZvcm0uc3VibWl0RnVuYyA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGFsbG93ZWQgPSBhbGxvd1N1Ym1pc3Npb24uYWxsb3coKTtcbiAgICAgICAgICAgIGlmIChhbGxvd2VkID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcXAgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKS5zZWFyY2hQYXJhbXM7XG4gICAgICAgICAgICAgICAgZGF0YS51cmxEYXRhLnJhdyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICAgICAgICAgIGRhdGEudXJsRGF0YS5hc3NpZ25tZW50SUQgPSBxcC5nZXQoJ2Fzc2lnbm1lbnRJZCcpO1xuICAgICAgICAgICAgICAgIGRhdGEudXJsRGF0YS5oaXRJRCA9IHFwLmdldCgnaGl0SWQnKTtcbiAgICAgICAgICAgICAgICBkYXRhLnVybERhdGEud29ya2VySUQgPSBxcC5nZXQoJ3dvcmtlcklkJyk7XG4gICAgICAgICAgICAgICAgZGF0YS51cmxEYXRhLnN1Ym1pdFRvID0gcXAuZ2V0KCd0dXJrU3VibWl0VG8nKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS51cmxEYXRhLmFzc2lnbm1lbnRJRCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAoRC5pZCgnYXNzaWdubWVudC1pZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudXJsRGF0YS5hc3NpZ25tZW50SUQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnVybERhdGEuaGl0SUQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgKEQuaWQoJ2hpdC1pZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudXJsRGF0YS5oaXRJRDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKEVsZW1lbnRzLnN1Ym1pdEZvcm0gYXMgSFRNTEZvcm1FbGVtZW50KS5hY3Rpb24gPSBkYXRhLnVybERhdGFcbiAgICAgICAgICAgICAgICAgICAgLnN1Ym1pdFRvIGFzIHN0cmluZztcbiAgICAgICAgICAgICAgICBhbGxvd1N1Ym1pc3Npb24ucHJlU3VibWl0KCk7XG4gICAgICAgICAgICAgICAgbGV0IGhpdElEID0gZGF0YS51cmxEYXRhLmhpdElEO1xuICAgICAgICAgICAgICAgIGlmIChoaXRJRCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBoaXRJRCA9ICdoaXRpZCcgKyBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgYXNzaWdubW5ldElEID0gZGF0YS51cmxEYXRhLmFzc2lnbm1lbnRJRDtcbiAgICAgICAgICAgICAgICBpZiAoYXNzaWdubW5ldElEID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2lnbm1uZXRJRCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAnYXNzaWdubW5ldGlkJyArIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChnYXRlLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3gtYXBpLWtleSc6IGssXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW5kYm94OiBwYXJhbXMuc2FuZGJveCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3dXN0bF9rZXk6IHBhcmFtcy53dXN0bF9rZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdDogcGFyYW1zLnByb2plY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlcmF0aW9uOiBwYXJhbXMuaXRlcmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogcGFyYW1zLnRhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2c6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgfSk7IC8vIFRPRE86IHZlcmlmeSB0aGlzIGFjdHVhbGx5IHdvcmtzXG4gICAgICAgICAgICAgICAgaWYgKHJlc3Auc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnWW91IG1hZGUgYSBiYWQgcmVxdWVzdCB3aXRoIHlvdXIgc3VibWlzc2lvbi4gVGhlIHNlcnZlciB0aGlua3MgdGhhdCB5b3UgbWFkZSB0aGlzIGVycm9yOiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYXdhaXQgcmVzcC5qc29uKCkpLmVycm9yXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgU3VibWl0Rm9ybS5lbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgICAgICdzdWJtaXQnLFxuICAgICAgICAgICAgICAgICAgICBTdWJtaXRGb3JtLnN1Ym1pdEZ1bmNcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIFN1Ym1pdEZvcm0uZWxlbS5zdWJtaXQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoYWxsb3dlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFN1Ym1pdEZvcm0uZWxlbS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBTdWJtaXRGb3JtLnN1Ym1pdEZ1bmMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIHN1Ym1pdEZ1bmM6IChldmVudDogRXZlbnQpID0+IGFueTtcbn1cbiIsImltcG9ydCB7IFRvcEJhbm5lciB9IGZyb20gXCIuL2Jhbm5lclwiO1xuaW1wb3J0IHsgSFRNTExvYyB9IGZyb20gXCIuL2h0bWxfbG9jXCI7XG5cbmV4cG9ydCBjbGFzcyBUcmFja2VyRWxlbWVudHMge1xuICBwdWJsaWMgc3RhdGljIHNldHVwVHJhY2tlckVsZW1lbnRzKCkge1xuICAgIC8vIHNldHVwIGRvbSBlbGVtZW50c1xuICAgIFRvcEJhbm5lci5zZXR1cCgpO1xuICAgIEhUTUxMb2Muc2V0dXAoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVHJhY2tlciB9IGZyb20gJy4vLi4vdHJhY2tlci90cmFja2VyJztcblxuZXhwb3J0IGludGVyZmFjZSBIaXN0b3J5RW50cnkge1xuICAgIGhhc1ByZXZVUkw6IGJvb2xlYW47XG4gICAgcHJldkVudHJ5PzogSGlzdG9yeUVudHJ5O1xuICAgIGN1cnJVUkw6IHN0cmluZztcbiAgICBleHRyYT86IGFueTtcbiAgICBuZXh0RW50cmllczogSGlzdG9yeUVudHJ5W107XG59XG5cbmZ1bmN0aW9uIG5ld0hpc3RvcnlFbnRyeShcbiAgICBjdXJyVVJMOiBzdHJpbmcsXG4gICAgaGFzUHJldlVSTDogYm9vbGVhbixcbiAgICBwcmV2RW50cnk/OiBIaXN0b3J5RW50cnksXG4gICAgZXh0cmE/OiBhbnlcbik6IEhpc3RvcnlFbnRyeSB7XG4gICAgVHJhY2tlci5nZXRFdmVudERpc3BhdGNoRnVuYygnaGlzdG9yeScpKHsgdXJsOiBjdXJyVVJMLCBleHRyYSB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjdXJyVVJMLFxuICAgICAgICBoYXNQcmV2VVJMLFxuICAgICAgICBwcmV2RW50cnksXG4gICAgICAgIGV4dHJhLFxuICAgICAgICBuZXh0RW50cmllczogW10sXG4gICAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIEhpc3Rvcnkge1xuICAgIHB1YmxpYyBzdGF0aWMgZm9yd2FyZCh1cmw6IHN0cmluZywgZXh0cmE/OiBhbnkpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBoaXN0RW50ID0gbmV3SGlzdG9yeUVudHJ5KHVybCwgdHJ1ZSwgSGlzdG9yeS5jdXJyaGlzdG9yeSwgZXh0cmEpO1xuICAgICAgICBIaXN0b3J5LmN1cnJoaXN0b3J5Lm5leHRFbnRyaWVzLnB1c2goaGlzdEVudCk7XG4gICAgICAgIEhpc3RvcnkuY3Vycmhpc3RvcnkgPSBoaXN0RW50O1xuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY2FuQmFja3dhcmQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBIaXN0b3J5LmN1cnJoaXN0b3J5Lmhhc1ByZXZVUkwgJiZcbiAgICAgICAgICAgICFIaXN0b3J5LmN1cnJoaXN0b3J5LnByZXZFbnRyeT8uZXh0cmE/LndyYXBwZXJcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGJhY2t3YXJkKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICghSGlzdG9yeS5jYW5CYWNrd2FyZCgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBnbyBiYWNrIGFueSBmdXJ0aGVyLicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKEhpc3RvcnkuY3Vycmhpc3RvcnkucHJldkVudHJ5KTtcbiAgICAgICAgY29uc3QgcHJldkVudHJ5ID0gSGlzdG9yeS5jdXJyaGlzdG9yeS5wcmV2RW50cnkgYXMgSGlzdG9yeUVudHJ5O1xuICAgICAgICBjb25zdCBuZXh0VVJMID0gcHJldkVudHJ5LmN1cnJVUkw7XG4gICAgICAgIGNvbnN0IGhpc3RFbnQgPSBuZXdIaXN0b3J5RW50cnkoXG4gICAgICAgICAgICBuZXh0VVJMLFxuICAgICAgICAgICAgcHJldkVudHJ5Lmhhc1ByZXZVUkwsXG4gICAgICAgICAgICBwcmV2RW50cnkucHJldkVudHJ5LFxuICAgICAgICAgICAgeyBiYWNrOiB0cnVlIH1cbiAgICAgICAgKTtcbiAgICAgICAgSGlzdG9yeS5jdXJyaGlzdG9yeSA9IGhpc3RFbnQ7XG4gICAgICAgIHJldHVybiBuZXh0VVJMO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc2V0dXAodXJsOiBzdHJpbmcsIGV4dHJhPzogYW55KSB7XG4gICAgICAgIEhpc3RvcnkuZmlyc3RIaXN0b3J5ID0gbmV3SGlzdG9yeUVudHJ5KHVybCwgZmFsc2UsIHVuZGVmaW5lZCwgZXh0cmEpO1xuICAgICAgICBIaXN0b3J5LmN1cnJoaXN0b3J5ID0gSGlzdG9yeS5maXJzdEhpc3Rvcnk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZmlyc3RIaXN0b3J5OiBIaXN0b3J5RW50cnk7XG4gICAgcHJpdmF0ZSBzdGF0aWMgY3Vycmhpc3Rvcnk6IEhpc3RvcnlFbnRyeTtcbn1cblxuKHdpbmRvdyBhcyBhbnkpLmggPSBIaXN0b3J5O1xuIiwiaW1wb3J0IHsgRCB9IGZyb20gJy4uL2RvbS9kb2N1bWVudCc7XG5pbXBvcnQgeyBFbGVtZW50cyB9IGZyb20gJy4uL2RvbS9lbGVtZW50cyc7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4uL2RvbS9tb2RhbCc7XG5pbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgZXJyb3IsIGxvZyB9IGZyb20gJy4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlcic7XG5pbXBvcnQgeyBub29wIH0gZnJvbSAnLi4vdXRpbHMvZnVuY3MnO1xuaW1wb3J0IHsgSFRNTExvYWRlciB9IGZyb20gJy4uL3V0aWxzL2h0bWxfbG9hZGVyJztcbmltcG9ydCB7IEhpc3RvcnkgfSBmcm9tICcuL2hpc3RvcnknO1xubG9nKCdyb3V0ZXIgbG9hZGVkLicsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbmV4cG9ydCBjb25zdCBlbnVtIFJvdXRlck1vZGUge1xuICAgIE9GRixcbiAgICBPTixcbiAgICBTVEFOREFSRF9BTExPV0FOQ0VTLFxufVxuXG4vLyBUT0RPOiBOZWVkIHRvIGltcHJvdmUgdGhpcyB0byB0YWtlIGluIGEgZnVuY3Rpb24gZm9yIHRoZSBhbGxvd2FuY2Ugb3IgcmVkdWNlIGFic3RyYWN0bmVzcyBvdmVyYWxsLlxuXG5leHBvcnQgY29uc3QgZW51bSBSb3V0ZXJNb2R1bGUge1xuICAgIEEgPSAnQScsXG4gICAgSU1HID0gJ0lNRycsXG4gICAgRk9STSA9ICdGT1JNJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZXJDb25maWcge1xuICAgIG1vZHVsZTogUm91dGVyTW9kdWxlO1xuICAgIG1vZGU6IFJvdXRlck1vZGU7XG59XG5cbmludGVyZmFjZSBGdWxsUm91dGVyQ29uZmlnIGV4dGVuZHMgUm91dGVyQ29uZmlnIHtcbiAgICBzZXR1cChjb25maWc6IEZ1bGxSb3V0ZXJDb25maWcsIGVsZW06IEVsZW1lbnQpOiBhbnk7XG59XG5cbmZ1bmN0aW9uIHRlc3RPbihlbGVtOiBFbGVtZW50LCBjb25maWc6IFJvdXRlckNvbmZpZykge1xuICAgIHJldHVybiAoXG4gICAgICAgIGVsZW0udGFnTmFtZSA9PT0gY29uZmlnLm1vZHVsZSAmJlxuICAgICAgICAoY29uZmlnLm1vZGUgPT09IFJvdXRlck1vZGUuT04gfHxcbiAgICAgICAgICAgIGNvbmZpZy5tb2RlID09PSBSb3V0ZXJNb2RlLlNUQU5EQVJEX0FMTE9XQU5DRVMpXG4gICAgKTtcbn1cbmZ1bmN0aW9uIHRlc3RBbGxvd2FuY2UoY29uZmlnOiBSb3V0ZXJDb25maWcpIHtcbiAgICByZXR1cm4gY29uZmlnLm1vZGUgPT09IFJvdXRlck1vZGUuU1RBTkRBUkRfQUxMT1dBTkNFUztcbn1cblxuZXhwb3J0IGNsYXNzIFJvdXRlciB7XG4gICAgcHVibGljIHN0YXRpYyBIQVNIX1RBR1MgPSBuZXcgUmVnRXhwKCcjJyk7XG4gICAgcHVibGljIHN0YXRpYyBFTVBUWSA9IG5ldyBSZWdFeHAoJ14kJyk7XG4gICAgcHVibGljIHN0YXRpYyBBVF9TWU1CT0wgPSBuZXcgUmVnRXhwKCdAJyk7XG5cbiAgICBwdWJsaWMgc3RhdGljIEhBU0hfVEFHX1JFU1BPTkRFUiA9IG5vb3A7XG4gICAgcHVibGljIHN0YXRpYyBFTVBUWV9SRVNQT05ERVIgPSAoZXZlbnQ6IEV2ZW50KSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHB1YmxpYyBzdGF0aWMgQVRfU1lNQk9MX1JFU1BPTkRFUiA9IChldmVudDogRXZlbnQpID0+XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBwdWJsaWMgc3RhdGljIHBhdGhQcmVmaXggPSAnJztcblxuICAgIHB1YmxpYyBzdGF0aWMgY29uZmlndXJlKGNvbmZpZ3M6IFJvdXRlckNvbmZpZ1tdLCBwYXRoUHJlZml4OiBzdHJpbmcpIHtcbiAgICAgICAgY29uZmlncy5mb3JFYWNoKChjb25maWcpID0+IHtcbiAgICAgICAgICAgIFJvdXRlci5jb25maWdzLnNldChjb25maWcubW9kdWxlLCBSb3V0ZXIudXBncmFkZUNvbmZpZyhjb25maWcpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFJvdXRlci5wYXRoUHJlZml4ID0gcGF0aFByZWZpeDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNldHVwKGVsZW06IEVsZW1lbnQgfCBzdHJpbmcpIHtcbiAgICAgICAgRC5lYWNoUmVjdXIoZWxlbSwgKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgY29uZmlnIG9mIFJvdXRlci5jb25maWdzLnZhbHVlcygpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRlc3RPbihub2RlLCBjb25maWcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5zZXR1cChjb25maWcsIG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBTVEFOREFSRF9MSU5LX0xJU1RFTkVSKGU6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yKCgpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgdXJsID0gdGFyZ2V0LmhyZWY7XG4gICAgICAgICAgICBIaXN0b3J5LmZvcndhcmQoUm91dGVyLmdldFBhdGhOYW1lKHVybCkpO1xuICAgICAgICAgICAgY29uc3QgcmV0ID0gSFRNTExvYWRlci5sb2FkVVJMKHVybCwgRWxlbWVudHMuaHRtbExvYyk7XG4gICAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ25ld1BhZ2VMb2FkJykpO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBPTl9DT01QTEVURV9TTEwocG9zdDogKGU6IE1vdXNlRXZlbnQpID0+IGFueSkge1xuICAgICAgICByZXR1cm4gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGVycm9yKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBSb3V0ZXIuU1RBTkRBUkRfTElOS19MSVNURU5FUihlKTtcbiAgICAgICAgICAgICAgICBwb3N0KGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBJTUFHRV9MSU5LX0xJU1RFTkVSKGU6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yKCgpID0+IHtcbiAgICAgICAgICAgIC8vIFRPRE86IExvYWQgbW9kYWwgb3IgbG9hZCBub3RoaW5nIGF0IGFsbCwgZml4IHRoaXNcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgICAgICAgICAvLyBjb25zdCB1cmwgPSB0YXJnZXQuc3JjO1xuICAgICAgICAgICAgLy8gSGlzdG9yeS5mb3J3YXJkKFJvdXRlci5nZXRQYXRoTmFtZSh1cmwpKTtcbiAgICAgICAgICAgIC8vIHJldHVybiBIVE1MTG9hZGVyLmxvYWRVUkwodXJsLCBFbGVtZW50cy5odG1sTG9jKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBGT1JNX09GRl9MSVNURU5FUihlOiBFdmVudCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAnQWxsIGZvcm1zIGV4Y2VwdCBmb3IgdGhlIG9uZSBpbiB0aGUgdG9wIGhlYWRlciBhcmUgaW5hY3RpdmUuJ1xuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZGVmYXVsdEFsbG93YW5jZXNPbigpIHtcbiAgICAgICAgUm91dGVyLnJlZ2lzdGVyQWxsb3dhbmNlKFxuICAgICAgICAgICAgeyByZWdleDogUm91dGVyLkVNUFRZLCBmdW5jOiBSb3V0ZXIuRU1QVFlfUkVTUE9OREVSIH0sXG4gICAgICAgICAgICB7IHJlZ2V4OiBSb3V0ZXIuSEFTSF9UQUdTLCBmdW5jOiBSb3V0ZXIuSEFTSF9UQUdfUkVTUE9OREVSIH0sXG4gICAgICAgICAgICB7IHJlZ2V4OiBSb3V0ZXIuQVRfU1lNQk9MLCBmdW5jOiBSb3V0ZXIuQVRfU1lNQk9MX1JFU1BPTkRFUiB9XG4gICAgICAgICk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgZGVmYXVsdEFsbG93YW5jZXNPZmYoKSB7XG4gICAgICAgIFJvdXRlci51bnJlZ2lzdGVyQWxsb3dhbmNlKFxuICAgICAgICAgICAgUm91dGVyLkVNUFRZLFxuICAgICAgICAgICAgUm91dGVyLkhBU0hfVEFHUyxcbiAgICAgICAgICAgIFJvdXRlci5BVF9TWU1CT0xcbiAgICAgICAgKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyByZWdpc3RlckFsbG93YW5jZShcbiAgICAgICAgLi4ucmVnZXhzOiBBcnJheTx7IHJlZ2V4OiBSZWdFeHA7IGZ1bmM6IChldmVudDogRXZlbnQpID0+IGFueSB9PlxuICAgICkge1xuICAgICAgICByZWdleHMuZm9yRWFjaCgocmVnZXgpID0+XG4gICAgICAgICAgICBSb3V0ZXIubGlua0FsbG93YW5jZXMuc2V0KHJlZ2V4LnJlZ2V4LCByZWdleC5mdW5jKVxuICAgICAgICApO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIHVucmVnaXN0ZXJBbGxvd2FuY2UoLi4ucmVnZXhzOiBSZWdFeHBbXSkge1xuICAgICAgICByZWdleHMuZm9yRWFjaCgocmVnZXgpID0+IFJvdXRlci5saW5rQWxsb3dhbmNlcy5kZWxldGUocmVnZXgpKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBjbGVhckFsbG93YW5jZXMoKSB7XG4gICAgICAgIFJvdXRlci5saW5rQWxsb3dhbmNlcy5jbGVhcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgbG9hZCh1cmw6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICBIaXN0b3J5LmZvcndhcmQoUm91dGVyLmdldFBhdGhOYW1lKHVybCkpO1xuICAgICAgICBjb25zdCByZXQgPSBhd2FpdCBIVE1MTG9hZGVyLmxvYWRVUkwodXJsLCBFbGVtZW50cy5odG1sTG9jKTtcbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCduZXdQYWdlTG9hZCcpKTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGxvYWRXaXRoUGF0aFByZWZpeChwYWdlOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgY29uc3QgcmV0ID0gSFRNTExvYWRlci5sb2FkVVJMKFxuICAgICAgICAgICAgUm91dGVyLnBhdGhQcmVmaXggKyBwYWdlLFxuICAgICAgICAgICAgRWxlbWVudHMuaHRtbExvY1xuICAgICAgICApO1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ25ld1BhZ2VMb2FkJykpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIFNldHVwRnVuY3Rpb25zID0ge1xuICAgICAgICBBOiAoY29uZmlnOiBGdWxsUm91dGVyQ29uZmlnLCBlbGVtOiBFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhTm9kZSA9IGVsZW0gYXMgSFRNTEFuY2hvckVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAodGVzdEFsbG93YW5jZShjb25maWcpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBhc3Nlc1JlZ2V4VGVzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uc3QgaHJlZiA9IGFOb2RlLmhyZWY7XG4gICAgICAgICAgICAgICAgUm91dGVyLmxpbmtBbGxvd2FuY2VzLmZvckVhY2goKGZ1bmMsIHJlZ2V4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlc3QgPSByZWdleC50ZXN0KGhyZWYpO1xuICAgICAgICAgICAgICAgICAgICBwYXNzZXNSZWdleFRlc3QgPSBwYXNzZXNSZWdleFRlc3QgJiYgIXRlc3Q7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgJ2NsaWNrJywgZnVuYyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocGFzc2VzUmVnZXhUZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChocmVmLnN1YnN0cihocmVmLmxlbmd0aCAtIDMpID09PSAncGRmJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sICdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vZGFsLmRpc3BsYXkoaHJlZik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCAnY2xpY2snLCAoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIuU1RBTkRBUkRfTElOS19MSVNURU5FUihlIGFzIE1vdXNlRXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgJ2NsaWNrJywgKGUpID0+XG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5TVEFOREFSRF9MSU5LX0xJU1RFTkVSKGUgYXMgTW91c2VFdmVudClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBJTUc6IChjb25maWc6IEZ1bGxSb3V0ZXJDb25maWcsIGVsZW06IEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltZ05vZGUgPSBlbGVtIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAodGVzdEFsbG93YW5jZShjb25maWcpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBhc3Nlc1JlZ2V4VGVzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgUm91dGVyLmxpbmtBbGxvd2FuY2VzLmZvckVhY2goKGZ1bmMsIHJlZ2V4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlc3QgPSAhcmVnZXgudGVzdChpbWdOb2RlLnNyYyk7XG4gICAgICAgICAgICAgICAgICAgIHBhc3Nlc1JlZ2V4VGVzdCA9IHBhc3Nlc1JlZ2V4VGVzdCAmJiB0ZXN0O1xuICAgICAgICAgICAgICAgICAgICBpZiAodGVzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sICdjbGljaycsIGZ1bmMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHBhc3Nlc1JlZ2V4VGVzdCkge1xuICAgICAgICAgICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgJ2NsaWNrJywgKGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIuSU1BR0VfTElOS19MSVNURU5FUihlIGFzIE1vdXNlRXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgJ2NsaWNrJywgKGUpID0+XG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5JTUFHRV9MSU5LX0xJU1RFTkVSKGUgYXMgTW91c2VFdmVudClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBGT1JNOiAoY29uZmlnOiBGdWxsUm91dGVyQ29uZmlnLCBlbGVtOiBFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtTm9kZSA9IGVsZW0gYXMgSFRNTEZvcm1FbGVtZW50O1xuICAgICAgICAgICAgaWYgKHRlc3RBbGxvd2FuY2UoY29uZmlnKSkge1xuICAgICAgICAgICAgICAgIGxldCBwYXNzZXNSZWdleFRlc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIFJvdXRlci5saW5rQWxsb3dhbmNlcy5mb3JFYWNoKChmdW5jLCByZWdleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXN0ID0gIXJlZ2V4LnRlc3QoZm9ybU5vZGUuc3JjKTtcbiAgICAgICAgICAgICAgICAgICAgcGFzc2VzUmVnZXhUZXN0ID0gcGFzc2VzUmVnZXhUZXN0ICYmIHRlc3Q7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgJ2NsaWNrJywgZnVuYyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocGFzc2VzUmVnZXhUZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3VibWl0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5GT1JNX09GRl9MSVNURU5FUlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sICdzdWJtaXQnLCBSb3V0ZXIuRk9STV9PRkZfTElTVEVORVIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBwcml2YXRlIHN0YXRpYyBjb25maWdzID0gbmV3IE1hcDxSb3V0ZXJNb2R1bGUsIEZ1bGxSb3V0ZXJDb25maWc+KCk7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBsaW5rQWxsb3dhbmNlczogTWFwPFJlZ0V4cCwgKGV2ZW50OiBFdmVudCkgPT4gYW55PiA9IG5ldyBNYXA8XG4gICAgICAgIFJlZ0V4cCxcbiAgICAgICAgKGV2ZW50OiBFdmVudCkgPT4gYW55XG4gICAgPigpO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcGF0aFJlZ2V4ID0gL1xcLyhbXFx3XSsuaHRtbCkvO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgdXBncmFkZUNvbmZpZyhjb25maWc6IFJvdXRlckNvbmZpZyk6IEZ1bGxSb3V0ZXJDb25maWcge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW9kdWxlOiBjb25maWcubW9kdWxlLFxuICAgICAgICAgICAgbW9kZTogY29uZmlnLm1vZGUsXG4gICAgICAgICAgICBzZXR1cDogUm91dGVyLlNldHVwRnVuY3Rpb25zW2NvbmZpZy5tb2R1bGVdLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcml2YXRlIHN0YXRpYyBnZXRQYXRoTmFtZSh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHJldCA9IFJvdXRlci5wYXRoUmVnZXguZXhlYyh1cmwpO1xuICAgICAgICByZXR1cm4gcmV0ID09PSBudWxsID8gdXJsIDogcmV0Lmxlbmd0aCA+IDEgPyByZXRbMV0gOiB1cmw7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgaXNUcmFja2VyRXZlbnQsIG9iamVjdFRvVHJhY2tlckV2ZW50IH0gZnJvbSAnLi4vZGF0YS1sb2cvZXZlbnQnO1xuaW1wb3J0IHsgRXZlbnRSZWNlaXZlciB9IGZyb20gJy4uL2RhdGEtbG9nL3JlY2VpdmVyJztcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSAnLi4vZG9tL2VsZW1lbnRzJztcbmltcG9ydCB7IFRyYWNrZXJFbGVtZW50cyB9IGZyb20gJy4uL2RvbS90cmFja2VyX2VsZW1zJztcbmltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2csIHNldERlYnVnTGV2ZWwgfSBmcm9tICcuLi91dGlscy9jb25zb2xlX3dyYXBwZXInO1xuaW1wb3J0IHsgU2NlbmFyaW8gfSBmcm9tICcuLi91dGlscy9zY2VuYXJpb3MnO1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4vLi4vZGF0YS1sb2cvZGF0YSc7XG5pbXBvcnQgeyBBbGxvd1N1Ym1pc3Npb24sIFN1Ym1pdEZvcm0gfSBmcm9tICcuLy4uL2RvbS9zdWJtaXRfZm9ybSc7XG5cbmxvZygndHJhY2tlciBsb2FkZWQuJywgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrZXJDb25maWd1cmF0aW9uIHtcbiAgICBhbGxvd1N1Ym1pc3Npb246IEFsbG93U3VibWlzc2lvbjtcbiAgICBkZWJ1Z0xldmVsOiBEZWJ1Z0xldmVsRW51bTtcbiAgICBidWNrZXROYW1lOiBzdHJpbmc7XG4gICAga2V5UHJlZml4OiBzdHJpbmc7XG4gICAgc2V0dXAoKTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIFRyYWNrZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgbGFzdFBvcyA9IHsgeDogMCwgeTogMCwgdGltZTogMCB9O1xuXG4gICAgcHVibGljIHN0YXRpYyBsb2FkU2NlbmFyaW8oc2NlbjogU2NlbmFyaW8pIHtcbiAgICAgICAgbGV0IHN1YiA9IHNjZW4uc2NlbmFyaW87XG4gICAgICAgIGlmIChzdWIubGVuZ3RoID4gNTApIHtcbiAgICAgICAgICAgIHN1YiA9IHN1Yi5zdWJzdHJpbmcoMCwgNTApO1xuICAgICAgICAgICAgY29uc3QgaW5kcyA9IFtcbiAgICAgICAgICAgICAgICBzdWIubGFzdEluZGV4T2YoJyAnKSxcbiAgICAgICAgICAgICAgICBzdWIubGFzdEluZGV4T2YoJy4nKSxcbiAgICAgICAgICAgICAgICBzdWIubGFzdEluZGV4T2YoJywnKSxcbiAgICAgICAgICAgICAgICBzdWIubGFzdEluZGV4T2YoJz8nKSxcbiAgICAgICAgICAgICAgICBzdWIubGFzdEluZGV4T2YoJyEnKSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBjb25zdCBpbmQgPSBNYXRoLm1heCguLi5pbmRzKTtcbiAgICAgICAgICAgIHN1YiA9IHN1Yi5zdWJzdHJpbmcoMCwgaW5kKSArICcuLi4nO1xuICAgICAgICB9XG5cbiAgICAgICAgRWxlbWVudHMubXRUb3BCYW5uZXJUZXh0LmlubmVyVGV4dCA9IHN1YjtcbiAgICAgICAgRWxlbWVudHMubXRTY2VuYXJpb0NvbnRleHQuaW5uZXJUZXh0ID0gc2Nlbi5zY2VuYXJpbztcbiAgICAgICAgRWxlbWVudHMubXRTY2VuYXJpb1F1ZXN0aW9uLmlubmVyVGV4dCA9IHNjZW4ucXVlc3Rpb247XG4gICAgICAgIEVsZW1lbnRzLmh0bWxMb2MuZGF0YXNldC50YXNrID0gc2Nlbi50YWc7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBzdGFydChjb25maWc6IFRyYWNrZXJDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHNldERlYnVnTGV2ZWwoY29uZmlnLmRlYnVnTGV2ZWwpO1xuICAgICAgICAvLyBjb25maWd1cmUgdHJhY2tlciBzcGVjaWZpYyBlbGVtZW50c1xuICAgICAgICBUcmFja2VyRWxlbWVudHMuc2V0dXBUcmFja2VyRWxlbWVudHMoKTtcbiAgICAgICAgU3VibWl0Rm9ybS5zZXR1cChjb25maWcuYWxsb3dTdWJtaXNzaW9uKTtcbiAgICAgICAgZGF0YS5kYXRhLnRhc2sgPSBFbGVtZW50cy5odG1sTG9jLmRhdGFzZXQudGFzaztcbiAgICAgICAgY29uZmlnLnNldHVwKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyByZWdpc3RlckV2ZW50KGV2ZW50VHlwZTogc3RyaW5nKSB7XG4gICAgICAgIGRhdGEubG9nc1tldmVudFR5cGVdID0gW107XG4gICAgICAgIHRoaXMucmVjZWl2ZXIucmVnaXN0ZXIoZXZlbnRUeXBlLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRhdGEubG9nc1tldmVudFR5cGVdLnB1c2goZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RXZlbnREaXNwYXRjaEZ1bmMoZXZlbnRUeXBlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEV2ZW50RGlzcGF0Y2hGdW5jKGV2ZW50VHlwZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiAoZXZEYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZXZEYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGlmICghaXNUcmFja2VyRXZlbnQoZXZEYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3RUb1RyYWNrZXJFdmVudChldkRhdGEsIGV2ZW50VHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucmVjZWl2ZXIuZG9FdmVudChldkRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXR0YWNoRGF0YShrZXk6IHN0cmluZywgYXR0cmlidXRlOiBhbnkpIHtcbiAgICAgICAgZGF0YS5kYXRhW2tleV0gPSBhdHRyaWJ1dGU7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjb21wdXRlQXR0cmlidXRlKG5hbWU6IHN0cmluZywgY29tcHV0ZTogKHZhbDogYW55KSA9PiBhbnkpIHtcbiAgICAgICAgZGF0YS5kYXRhW25hbWVdID0gY29tcHV0ZShkYXRhLmRhdGFbbmFtZV0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIHJlY2VpdmVyID0gbmV3IEV2ZW50UmVjZWl2ZXIoKTtcbn1cbiIsImltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi8uLi9kYXRhLWxvZy9kYXRhXCI7XG5sb2coXCJjb25zb2xlIHdyYXBwZXIgbG9hZGVkLlwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXJyb3I8VD4oXG4gIGZ1bmM6ICguLi5hcmdzOiBhbnkpID0+IFRcbik6IFByb21pc2U8VCB8IHVuZGVmaW5lZD4ge1xuICByZXR1cm4gZXJyb3JITyhmdW5jKSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JITzxUPihcbiAgZnVuYzogKC4uLmFyZ3M6IGFueSkgPT4gVFxuKTogKC4uLmFyZ3M6IGFueSkgPT4gUHJvbWlzZTxUIHwgdW5kZWZpbmVkPiB7XG4gIHJldHVybiBhc3luYyAoLi4uYXJnczogYW55KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jKGFyZ3MpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkYXRhLmVycm9ycy5wdXNoKGVycm9yKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGVudW0gRGVidWdMZXZlbEVudW0ge1xuICBOT05FID0gMSxcbiAgQkFTSUMgPSAyLFxuICBERVRBSUxFRCA9IDMsXG59XG5cbmxldCBkZWJ1Z0xldmVsOiBEZWJ1Z0xldmVsRW51bSA9IERlYnVnTGV2ZWxFbnVtLkJBU0lDO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVidWdMZXZlbChsZXZlbDogRGVidWdMZXZlbEVudW0pIHtcbiAgZGVidWdMZXZlbCA9IGxldmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9nKG1lc3NhZ2U6IHN0cmluZywgaW1wb3J0YW5jZTogRGVidWdMZXZlbEVudW0pIHtcbiAgaWYgKGRlYnVnTGV2ZWwgPj0gaW1wb3J0YW5jZSkge1xuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSBcIi4vY29uc29sZV93cmFwcGVyXCI7XG5sb2coXCJmdW5jcyBsb2FkZWQuXCIsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tZW1wdHlcbmV4cG9ydCBmdW5jdGlvbiBub29wKCkge31cbmV4cG9ydCBmdW5jdGlvbiBub3coKTogbnVtYmVyIHtcbiAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufVxuIiwiaW1wb3J0IHsgRCB9IGZyb20gJy4uL2RvbS9kb2N1bWVudCc7XG5pbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSAnLi9jb25zb2xlX3dyYXBwZXInO1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vZnVuY3MnO1xubG9nKCdodG1sIGxvYWRlciBsb2FkZWQuJywgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGludGVyZmFjZSBDYWNoZSB7XG4gICAgW25hbWU6IHN0cmluZ106IEVsZW1lbnQ7XG59XG5leHBvcnQgY2xhc3MgSFRNTExvYWRlciB7XG4gICAgcHVibGljIHN0YXRpYyBDQUNIRTogQ2FjaGUgPSB7fTtcblxuICAgIHB1YmxpYyBzdGF0aWMgZmluaXNoKCkge1xuICAgICAgICBIVE1MTG9hZGVyLmZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgICAgSFRNTExvYWRlci5mbGF0dGVuVFNMb2FkVGFncygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgaXNGaW5pc2hlZCgpIHtcbiAgICAgICAgcmV0dXJuIEhUTUxMb2FkZXIuZmluaXNoZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjYWNoZUhUTUwobmFtZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKEhUTUxMb2FkZXIuZmluaXNoZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAnQ2Fubm90IGNhY2hlIG5ldyBIVE1MIGVudGl0aWVzIGFmdGVyIHRoZSBhcHBsaWNhdGlvbiBoYXMgYmVlbiBzdGFydGVkLidcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdHNsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHMtbG9hZCcpO1xuICAgICAgICB0c2wuZGF0YXNldC5uYW1lID0gbmFtZTtcbiAgICAgICAgdHNsLmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgICAgIHRoaXMuQ0FDSEVbbmFtZV0gPSB0c2w7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyByZWdpc3RlclBvc3RMb2FkRnVuYyhmdW5jOiAoKSA9PiBhbnkpIHtcbiAgICAgICAgbG9nKCdyZWdzaXRlciBwb3N0IGxvYWQgZnVuY3Rpb24nLCBEZWJ1Z0xldmVsRW51bS5ERVRBSUxFRCk7XG4gICAgICAgIEhUTUxMb2FkZXIucG9zdExvYWRGdW5jID0gZnVuYztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGxvYWQoaHRtbDogc3RyaW5nLCBlbGVtOiBFbGVtZW50IHwgc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxvZygnYmVnaW4gbG9hZCcsIERlYnVnTGV2ZWxFbnVtLkRFVEFJTEVEKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gRC5lbGVtKGVsZW0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICAgICAgICAgICAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMoY29udGV4dCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZnJhZyA9IHJhbmdlLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChodG1sKTtcbiAgICAgICAgICAgICAgICBIVE1MTG9hZGVyLnJlbW92ZVRhZ3NGcm9tRG9jdW1lbnRGcmFnbWVudChmcmFnLCAnc2NyaXB0Jyk7XG4gICAgICAgICAgICAgICAgSFRNTExvYWRlci5sb2FkQWxsQ2FjaGVkRWxlbWVudHMoZnJhZyk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICBjb250ZXh0LmFwcGVuZENoaWxkKGZyYWcpO1xuICAgICAgICAgICAgICAgIGxvZygnZW5kIGxvYWQnLCBEZWJ1Z0xldmVsRW51bS5ERVRBSUxFRCk7XG4gICAgICAgICAgICAgICAgSFRNTExvYWRlci5wb3N0TG9hZEZ1bmMoKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgbG9hZFVSTCh1cmw6IHN0cmluZywgZWxlbTogRWxlbWVudCB8IHN0cmluZykge1xuICAgICAgICByZXR1cm4gSFRNTExvYWRlci5sb2FkKGF3YWl0IEhUTUxMb2FkZXIuZ2V0SFRNTCh1cmwpLCBlbGVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEhUTUwodXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxvZygnYmVnaW4gcmVxdWVzdCcsIERlYnVnTGV2ZWxFbnVtLkRFVEFJTEVEKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJlcXVlc3Quc2VuZChudWxsKTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nKCdyZXNvbHZlIHJlcXVlc3QnLCBEZWJ1Z0xldmVsRW51bS5ERVRBSUxFRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZmluaXNoZWQgPSBmYWxzZTtcblxuICAgIHByaXZhdGUgc3RhdGljIHBvc3RMb2FkRnVuYzogKCkgPT4gYW55ID0gbm9vcDtcblxuICAgIHByaXZhdGUgc3RhdGljIHJlbW92ZVRhZ3NGcm9tRG9jdW1lbnRGcmFnbWVudChcbiAgICAgICAgZnJhZzogRG9jdW1lbnRGcmFnbWVudCxcbiAgICAgICAgdGFnTmFtZTogc3RyaW5nXG4gICAgKSB7XG4gICAgICAgIGZyYWcucXVlcnlTZWxlY3RvckFsbCh0YWdOYW1lKS5mb3JFYWNoKCh0YWcpID0+IGZyYWcucmVtb3ZlQ2hpbGQodGFnKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZmxhdHRlblRTTG9hZFRhZ3MoKSB7XG4gICAgICAgIGxvZygnRmxhdHRlbmluZycsIERlYnVnTGV2ZWxFbnVtLkRFVEFJTEVEKTtcbiAgICAgICAgY29uc3QgcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgICAgICBPYmplY3Qua2V5cyhIVE1MTG9hZGVyLkNBQ0hFKS5mb3JFYWNoKFxuICAgICAgICAgICAgKG5hbWUpID0+XG4gICAgICAgICAgICAgICAgKEhUTUxMb2FkZXIuQ0FDSEVbbmFtZV0gPSBIVE1MTG9hZGVyLmZsYXR0ZW5UU0xvYWRUYWcoXG4gICAgICAgICAgICAgICAgICAgIEhUTUxMb2FkZXIuZ2V0Q2FjaGVkQ29udGVudChuYW1lKSBhcyBFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICBzLFxuICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgKSBhcyBFbGVtZW50KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIG11bHRpcGxlVGFicyhuOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBsZXQgcmV0ID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICByZXQgKz0gJ1xcdCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBmbGF0dGVuVFNMb2FkVGFnKFxuICAgICAgICBlbGVtOiBFbGVtZW50LFxuICAgICAgICBmbGF0dGVuZWQ6IFNldDxzdHJpbmc+LFxuICAgICAgICBjb3VudDogbnVtYmVyXG4gICAgKTogRWxlbWVudCB8IG51bGwge1xuICAgICAgICBjb25zdCB0YWJzID0gSFRNTExvYWRlci5tdWx0aXBsZVRhYnMoY291bnQpO1xuICAgICAgICBpZiAoY291bnQgPiAxMDApIHtcbiAgICAgICAgICAgIGFsZXJ0KCdDaGVjayB0aGUgY29uc29sZSwgYW4gZXJyb3IgaGFzIG9jY3VycmVkLicpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICdJdCBzZWVtcyBsaWtlIHlvdSBtaWdodCBoYXZlIGluZmluaXRlbHkgcmVjdXJzaXZlbHkgbmVzdGVkIHRhZ3MuJyArXG4gICAgICAgICAgICAgICAgICAgICdcXG5IZXJlIGFyZSBhbGwgb2YgdGhlIHRhZ3MgdGhhdCBoYXZlIGJlZW4gZmxhdHRlbmVkIHNvIGZhcjogJyArXG4gICAgICAgICAgICAgICAgICAgIGZsYXR0ZW5lZCArXG4gICAgICAgICAgICAgICAgICAgICdcXG5IZXJlIGlzIHRoZSBuYW1lIG9mIHRoZSBjdXJyZW50IGVsZW1lbnQ6ICcgK1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmFtZSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKTtcbiAgICAgICAgaWYgKG5hbWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBIVE1MTG9hZGVyLmdldENhY2hlZENvbnRlbnQobmFtZSk7XG4gICAgICAgIGlmIChjb250ZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmxhdHRlbmVkLmhhcyhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHQnKS5mb3JFYWNoKChlKSA9PiBlLnJlbW92ZSgpKTtcbiAgICAgICAgY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCd0cy1sb2FkJykuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBIVE1MTG9hZGVyLmZsYXR0ZW5UU0xvYWRUYWcoZSwgZmxhdHRlbmVkLCBjb3VudCArIDEpO1xuICAgICAgICAgICAgaWYgKGNoaWxkICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZS5yZXBsYWNlV2l0aChjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBmbGF0dGVuZWQuYWRkKG5hbWUpO1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBnZXRDYWNoZWRDb250ZW50KFxuICAgICAgICBuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkXG4gICAgKTogRWxlbWVudCB8IG51bGwge1xuICAgICAgICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkIHx8IG5hbWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBIVE1MTG9hZGVyLkNBQ0hFW25hbWVdO1xuICAgICAgICBpZiAoY29udGVudCA9PT0gdW5kZWZpbmVkIHx8IGNvbnRlbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZW50LmNsb25lTm9kZSh0cnVlKSBhcyBFbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGxvYWRBbGxDYWNoZWRFbGVtZW50cyhmcmFnOiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICAgIGZyYWcucXVlcnlTZWxlY3RvckFsbCgndHMtbG9hZCcpLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJyk7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gSFRNTExvYWRlci5nZXRDYWNoZWRDb250ZW50KG5hbWUpO1xuICAgICAgICAgICAgaWYgKGNvbnRlbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGVsZW0ucmVwbGFjZVdpdGgoY29udGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSBcIi4uL2RvbS9lbGVtZW50c1wiO1xuaW1wb3J0IHsgRCB9IGZyb20gXCIuLy4uL2RvbS9kb2N1bWVudFwiO1xuaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gXCIuL2NvbnNvbGVfd3JhcHBlclwiO1xubG9nKFwiaWQgZ2VuZXJhdG9yIGxvYWRlZFwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgY2xhc3MgSURHZW5lcmF0b3Ige1xuICBwdWJsaWMgc3RhdGljIHJlc2V0KCkge1xuICAgIElER2VuZXJhdG9yLmlkQ291bnQgPSAwO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXQgbmV4dCgpIHtcbiAgICBJREdlbmVyYXRvci5pZENvdW50ICs9IDE7XG4gICAgcmV0dXJuIElER2VuZXJhdG9yLnByZWZpeCArIElER2VuZXJhdG9yLmlkQ291bnQ7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGFwcGx5SUQoZWxlbTogRWxlbWVudCkge1xuICAgIGVsZW0uaWQgPSBlbGVtLmlkID8gZWxlbS5pZCA6IElER2VuZXJhdG9yLm5leHQ7XG4gIH1cblxuICAvKipcbiAgICogUmVjdXJzaXZlbHkgYWRkcyBpZHMgdG8gYWxsIGVsZW1lbnRzIHRoYXQgYXJlIGJlbG93IHRoZSBnaXZlblxuICAgKiBlbGVtZW50IGluIHRoZSBoZWlyYXJjaHkuXG4gICAqXG4gICAqIEBwYXJhbSBlbGVtIC0gdGhlIGVsZW1lbnQgdG8gc3RhcnQgYXBwbHlpbmcgaWRzIHRvIGl0cyBjaGlsZHJlbi5cbiAgICogICAgICAgICAgICAgICAgICBXaWxsIG5vdCBhcHBseSBhbiBpZCB0byB0aGlzIGVsZW1lbnQuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGFwcGx5UmVjdXIoZWxlbTogRWxlbWVudCB8IHN0cmluZykge1xuICAgIEQuZWFjaFJlY3VyKGVsZW0sIHRoaXMuYXBwbHlJRCk7XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoZXMgaWRzIHRvIGFsbCBodG1sIGVsZW1lbnRzIGluIHRoZSB0YXJnZXQgbG9jYXRpb24gaW4gdGhlIERPTSB0aGF0IGRvIG5vdCBoYXZlIGlkcy5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgYXR0YWNoSWRzVG9BbGxFbGVtZW50cygpIHtcbiAgICBJREdlbmVyYXRvci5hcHBseVJlY3VyKEVsZW1lbnRzLmh0bWxMb2MpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgaWRDb3VudCA9IDA7XG4gIHByaXZhdGUgc3RhdGljIHByZWZpeCA9IFwiYXV0b19nZW5faWRfdW5xX1wiO1xufVxuIiwiY29uc3QgcVBhcmFtcyA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpLnNlYXJjaFBhcmFtczsgLy8gVE9ETzogRml4IHF1ZXJ5IHBhcmFtc1xyXG5leHBvcnQgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgd3VzdGxfa2V5OiAnJyxcclxuICAgIHNhbmRib3g6IGZhbHNlLFxyXG4gICAgcHJvamVjdDogJycsXHJcbiAgICBpdGVyYXRpb246IDAsXHJcbiAgICB0YWc6ICcnLFxyXG59O1xyXG50cnkge1xyXG4gICAgaWYgKFxyXG4gICAgICAgIFsnd3VzdGxfa2V5JywgJ3NhbmRib3gnLCAncHJvamVjdCcsICdpdGVyYXRpb24nLCAndGFnJ10uZXZlcnkoKGtleSkgPT5cclxuICAgICAgICAgICAgcVBhcmFtcy5oYXMoa2V5KVxyXG4gICAgICAgIClcclxuICAgICkge1xyXG4gICAgICAgIHBhcmFtcy53dXN0bF9rZXkgPSBxUGFyYW1zLmdldCgnd3VzdGxfa2V5JykgYXMgc3RyaW5nO1xyXG4gICAgICAgIHBhcmFtcy5zYW5kYm94ID0gcVBhcmFtcy5nZXQoJ3NhbmRib3gnKSA9PT0gJ3RydWUnO1xyXG4gICAgICAgIHBhcmFtcy5wcm9qZWN0ID0gcVBhcmFtcy5nZXQoJ3Byb2plY3QnKSBhcyBzdHJpbmc7XHJcbiAgICAgICAgcGFyYW1zLml0ZXJhdGlvbiA9IHBhcnNlSW50KHFQYXJhbXMuZ2V0KCdpdGVyYXRpb24nKSBhcyBzdHJpbmcsIDEwKTtcclxuICAgICAgICBwYXJhbXMudGFnID0gcVBhcmFtcy5nZXQoJ3RhZycpIGFzIHN0cmluZztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAgICdUaGlzIEhJVCBpcyBicm9rZW4sIHNvcnJ5IGZvciB0aGUgaW5jb252ZW5pZW5jZS4gUGxlYXNlIGNvbnRhY3QgdGhlIFJlcXVlc3RlciBhcyB0aGlzIGlzIG5vdCBpbnRlbmRlZCB0byBoYXBwZW4uJ1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgYWxlcnQoXHJcbiAgICAgICAgJ1RoaXMgSElUIGlzIGJyb2tlbiwgc29ycnkgZm9yIHRoZSBpbmNvbnZlbmllbmNlLiBQbGVhc2UgY29udGFjdCB0aGUgUmVxdWVzdGVyIGFzIHRoaXMgaXMgbm90IGludGVuZGVkIHRvIGhhcHBlbi4nXHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tIFwiLi9jb25zb2xlX3dyYXBwZXJcIjtcblxubG9nKFwicmVhZHkgbG9hZGVkXCIsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcblxubGV0IHJlYWR5ID0gZmFsc2U7XG5cbmxldCByZXNvbHZlRnVuYzogKHZhbDogYm9vbGVhbikgPT4gYW55O1xubGV0IHJlamVjdEZ1bmM7XG5jb25zdCByZWFkeVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZTogKHZhbDogYm9vbGVhbikgPT4gYW55LCByZWplY3QpID0+IHtcbiAgcmVzb2x2ZUZ1bmMgPSByZXNvbHZlO1xuICByZWplY3RGdW5jID0gcmVqZWN0O1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgbG9nKFwiZG9jdW1lbnQgaXMgcmVhZHlcIiwgRGVidWdMZXZlbEVudW0uREVUQUlMRUQpO1xuICByZWFkeSA9IHRydWU7XG4gIHJlc29sdmVGdW5jKHRydWUpO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1JlYWR5KCkge1xuICByZXR1cm4gcmVhZHk7XG59XG5leHBvcnQgZnVuY3Rpb24gd2FpdFVudGlsUmVhZHkoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIHJldHVybiByZWFkeSA/IFByb21pc2UucmVzb2x2ZSh0cnVlKSA6IHJlYWR5UHJvbWlzZTtcbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgU2NlbmFyaW8ge1xyXG4gICAgc2NlbmFyaW86IHN0cmluZztcclxuICAgIHF1ZXN0aW9uOiBzdHJpbmc7XHJcbiAgICBpbnB1dFR5cGU6IHN0cmluZztcclxuICAgIHRhZzogc3RyaW5nO1xyXG59XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXZhci1yZXF1aXJlc1xyXG5leHBvcnQgY29uc3Qgc2NlbmFyaW9zOiBTY2VuYXJpb1tdID0gcmVxdWlyZSgnLi8uLi8uLi8uLi8uLi9zY2VuYXJpb3Mvc2NlbmFyaW9zLmpzb24nKTtcclxuIiwiaW1wb3J0IHsgRCB9IGZyb20gXCIuLy4uL2NvcmUvZG9tL2RvY3VtZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBBY2NvcmRpb24ge1xuICBwdWJsaWMgc3RhdGljIHNldHVwQWxsKCkge1xuICAgIEFjY29yZGlvbi5kaXNjYXJkQWxsKCk7XG4gICAgY29uc3QgYWNjb3JkaW9ucyA9IEQuY2xheihcImFjY29yZGlvblwiKTtcbiAgICBmb3IgKGxldCBhY2NJbmRleCA9IDA7IGFjY0luZGV4IDwgYWNjb3JkaW9ucy5sZW5ndGg7ICsrYWNjSW5kZXgpIHtcbiAgICAgIGNvbnN0IGVsZW0gPSBhY2NvcmRpb25zLml0ZW0oYWNjSW5kZXgpO1xuICAgICAgaWYgKGVsZW0gPT0gbnVsbCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIEFjY29yZGlvbi5hY2NvcmRpb25zLnB1c2gobmV3IEFjY29yZGlvbihlbGVtKSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkaXNjYXJkQWxsKCkge1xuICAgIEFjY29yZGlvbi5hY2NvcmRpb25zID0gW107XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBhY2NvcmRpb25zOiBBY2NvcmRpb25bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3V0ZXI6IEVsZW1lbnQpIHtcbiAgICBELmFkZEV2ZW50TGlzdGVuZXIob3V0ZXIsIFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgLyogVG9nZ2xlIGJldHdlZW4gYWRkaW5nIGFuZCByZW1vdmluZyB0aGUgXCJhY3RpdmVcIiBjbGFzcyxcbiAgICAgICAgICAgICAgICB0byBoaWdobGlnaHQgdGhlIGJ1dHRvbiB0aGF0IGNvbnRyb2xzIHRoZSBwYW5lbCAqL1xuICAgICAgdGhpcy5vdXRlci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuXG4gICAgICAvKiBUb2dnbGUgYmV0d2VlbiBoaWRpbmcgYW5kIHNob3dpbmcgdGhlIGFjdGl2ZSBwYW5lbCAqL1xuICAgICAgY29uc3QgcGFuZWwgPSB0aGlzLm91dGVyLm5leHRFbGVtZW50U2libGluZyBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChwYW5lbC5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcbiAgICAgICAgcGFuZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFuZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRvU29tZXRoaW5nKCkge1xuICBjb25zb2xlLmxvZyhcIlB1dCBzb21lIGNvZGUgaW4gaGVyZSFcIik7XG59XG4iLCJpbXBvcnQgeyBIVE1MTG9hZGVyIH0gZnJvbSAnLi4vY29yZS91dGlscy9odG1sX2xvYWRlcic7XG5pbXBvcnQgeyBBY2NvcmRpb24gfSBmcm9tICcuL2FjY29yZGlvbic7XG5pbXBvcnQgeyBkb1NvbWV0aGluZyB9IGZyb20gJy4vZG8tc29tZXRoaW5nJztcbmltcG9ydCB7IEhUTUxDb250ZW50LCBpdGVtc1RvQ2FjaGUgfSBmcm9tICcuL2h0bWwtaW1wb3J0cyc7XG5pbXBvcnQgeyBTbGlkZXNob3cgfSBmcm9tICcuL3NsaWRlc2hvdyc7XG5cbi8vIFB1dCBhbGwgZnVuY3Rpb24gY2FsbHMgdGhhdCBuZWVkIHRvIGJlIG1hZGUgb24gZXZlcnkgcGFnZSBsb2FkIGluc2lkZSB0aGUgc2V0dXBBbGwgZnVuY3Rpb24gYm9keS5cbmV4cG9ydCBmdW5jdGlvbiBQdXRTdHVkZW50UGFnZUxvYWRPcGVyYXRpb25zSW5zaWRlVGhpc1N0dWRlbnRCb2R5KCkge1xuICAgIC8vIFRPRE86IFB1dCBhbGwgb3BlcmF0aW9ucyB0aGF0IHlvdSB3YW50IHRvIGhhcHBlbiBvbiBldmVyIHBhZ2UgbG9hZCBpbiB0aGlzIGZ1bmN0aW9uLlxuICAgIC8vIEZvciBleGFtcGxlIHlvdSBjb3VsZCB3cml0ZTogU3RpY2t5LnNldHVwKClcbiAgICBkb1NvbWV0aGluZygpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0dXBBbGwoKSB7XG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHI6IGFueSkgPT4gc2V0VGltZW91dChyLCAxMDApKTtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkaW5nJyk7XG4gICAgU2xpZGVzaG93LnNldHVwQWxsKCk7XG4gICAgQWNjb3JkaW9uLnNldHVwQWxsKCk7XG4gICAgUHV0U3R1ZGVudFBhZ2VMb2FkT3BlcmF0aW9uc0luc2lkZVRoaXNTdHVkZW50Qm9keSgpO1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWRlZCcpO1xufVxuXG5pdGVtc1RvQ2FjaGUuZm9yRWFjaCgoaXRlbTogSFRNTENvbnRlbnQpID0+IHtcbiAgICBIVE1MTG9hZGVyLmNhY2hlSFRNTChpdGVtLm5hbWUsIGl0ZW0uY29udGVudCk7XG59KTtcbih3aW5kb3cgYXMgYW55KS5IVE1MTG9hZGVyID0gSFRNTExvYWRlcjtcblxuY29uc29sZS5sb2coJ2R5bmFtaWMtZG9tIGxvYWRlZCcpO1xuLy8gRG8gbm90IHRvdWNoIHRoaXMgbGluZSwgbmVlZGVkIHRvIHJlaW5pdGlhbGl6ZSBjb2RlIGluIHRoZSBkeW5hbWljLWRvbS50cyBzZXR1cEFsbCBmdW5jdGlvblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ25ld1BhZ2VMb2FkJywgKCkgPT4gc2V0dXBBbGwoKSk7XG4iLCJkZWNsYXJlIGZ1bmN0aW9uIHJlcXVpcmUoaWQ6IHN0cmluZyk6IHN0cmluZztcblxuLy8gVGhpcyBkZWZpbmVzIHRoZSBkYXRhIHRoYXQgbmVlZHMgdG8gYmUgcGFzc2VkIHRvIHRoZSBIVE1MTG9hZGVyIHRvIGNhY2hlIHlvdXIgaHRtbCBjb250ZW50LlxuZXhwb3J0IGludGVyZmFjZSBIVE1MQ29udGVudCB7XG4gICAgbmFtZTogc3RyaW5nOyAvLyBUaGUgbmFtZSB0aGF0IHlvdSB3aWxsIHVzZSB0byByZWZlcmVuY2UgdGhlIGNvbnRlbnQgaW4geW91ciBodG1sIHBhZ2VzLlxuICAgIGNvbnRlbnQ6IHN0cmluZzsgLy8gVGhlIGFjdHVhbCBodG1sIHN0cmluZyB0aGF0IHdpbGwgYmUgcHVsbGVkIGZyb20gdGhlIHNvdXJjZSBmaWxlIHRoYXQgeW91IHNwZWNpZnkuXG59XG5cbi8vIEFuIEhUTUxDb250ZW50IG9iamVjdCBzaG91bGQgbG9vayBsaWtlIHRoZSBmb2xsb3dpbmc6XG4vLyB7XG4vLyAgICAgbmFtZTogJ2Zvb3RlcicsXG4vLyAgICAgY29udGVudDogcmVxdWlyZSgnLi9odG1sL2Zvb3Rlci5odG1sJyksXG4vLyB9XG5cbi8vIFRoZW4geW91IGNhbiByZWZlcmVuY2UgdGhhdCBjb250ZW50IGluIHlvdXIgaHRtbCB1c2luZyB0aGUgZm9sbG93aW5nIHRhZyB3aXRoIHRoZSBjb3JyZXNwb25kaW5nIG5hbWUgYXR0cmlidXRlLlxuLy8gPHRzLWxvYWQgZGF0YS1uYW1lPVwiaGVhZGVyXCI+PC90cy1sb2FkPlxuXG4vLyBZb3UgY2FuIHNwZWNpZnkgYXMgbWFueSBhcyB5b3Ugd2FudCBpbnNpZGUgb2YgdGhlIGFycmF5IGFuZCB0aGV5IHdpbGwgYWxsIGJlIGJ1bmRsZWQgdXAgd2l0aCB5b3VyIHdlYnNpdGUuXG4vLyBNYWtlIHN1cmUgdG8gbWFrZSBhIGNvcnJlc3BvbmRpbmcgaHRtbCBmaWxlIGluIHRoZSBodG1sIGZpbGUgZm9sZGVyIGZvciBlYWNoIGVsZW1lbnQgeW91IHNwZWNpZnkuXG5cbmV4cG9ydCBjb25zdCBpdGVtc1RvQ2FjaGUgPSBbXG4gICAgLy8gRmVlbCBmcmVlIHRvIGNoYW5nZSB0aGUgY29udGVudCBpbnNpZGUgYW55IG9mIHRoZSBodG1sIGZpbGVzIGluIHRoZSBodG1sIGZpbGUgZm9sZGVyIHRvIHN1aXQgeW91ciBuZWVkcy5cbiAgICB7XG4gICAgICAgIG5hbWU6ICdoZWFkZXInLFxuICAgICAgICBjb250ZW50OiByZXF1aXJlKCcuL2h0bWwvaGVhZGVyLmh0bWwnKSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ2Zvb3RlcicsXG4gICAgICAgIGNvbnRlbnQ6IHJlcXVpcmUoJy4vaHRtbC9mb290ZXIuaHRtbCcpLFxuICAgIH0sXG4gICAgLy8gUHV0IG1vcmUgaXRlbXMgaW4gdGhlIGFycmF5IGJlbG93IGhlcmUuXG5dO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb290ZXIgaWQ9XFxcImNvbG9waG9uXFxcIiBjbGFzcz1cXFwiZm9vdGVyXFxcIiByb2xlPVxcXCJjb250ZW50aW5mb1xcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXItd2lkZ2V0c1xcXCI+XFxuICAgICAgPGFzaWRlIGNsYXNzPVxcXCJ3aWRnZXQgc2l0ZS1jb250YWN0XFxcIj5cXG4gICAgICAgIDxoMiBjbGFzcz1cXFwiZm9vdGVyLXdpZGdldC10aXRsZVxcXCI+TnVyc2VyeSBTY2hvb2w8L2gyPlxcbiAgICAgICAgPHA+NjkyNiBGb3Jlc3QgUGFyayBQYXJrd2F5PC9wPlxcbiAgICAgICAgPHA+U3QuIExvdWlzLCBNTyA2MzEzMDwvcD5cXG4gICAgICAgIDxwIGNsYXNzPVxcXCJwaG9uZVxcXCI+MzE0LTkzNS02Njg5IDxzcGFuPnw8L3NwYW4+IEZheDogMzE0LTkzNS03MjQ5PC9wPlxcbiAgICAgICAgPHA+XFxuICAgICAgICAgIDxhIGhyZWY9XFxcImZpbGVzL21haWx0bzpudXJzZXJ5QHd1c3RsLmVkdVxcXCI+bnVyc2VyeUB3dXN0bC5lZHU8L2E+XFxuICAgICAgICA8L3A+XFxuICAgICAgPC9hc2lkZT5cXG5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJ3aWRnZXQtd3JhcHBlclxcXCI+XFxuICAgICAgICA8YXNpZGUgaWQ9XFxcInRleHQtNFxcXCIgY2xhc3M9XFxcIndpZGdldCB3aWRnZXRfdGV4dCB3aWRnZXQtY291bnQtMlxcXCI+XFxuICAgICAgICAgIDxoMiBjbGFzcz1cXFwiZm9vdGVyLXdpZGdldC10aXRsZVxcXCI+SG91cnMgb2YgT3BlcmF0aW9uPC9oMj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGV4dHdpZGdldFxcXCI+XFxuICAgICAgICAgICAgPHA+XFxuICAgICAgICAgICAgICBDbGFzc2VzIG1lZXQgTW9uLiB0aHJvdWdoIEZyaS48YnIgLz5cXG4gICAgICAgICAgICAgIE1vcm5pbmc6IDktMTE6NDUgYS5tLjxiciAvPlxcbiAgICAgICAgICAgICAgQWZ0ZXJub29uOiAxMjozMC0zOjE1IHAubS48YnIgLz5cXG4gICAgICAgICAgICAgIEZ1bGwgZGF5OiA5IGEubS4tMzoxNSBwLm0uXFxuICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvYXNpZGU+XFxuICAgICAgICA8YXNpZGUgaWQ9XFxcInRleHQtM1xcXCIgY2xhc3M9XFxcIndpZGdldCB3aWRnZXRfdGV4dCB3aWRnZXQtY291bnQtMlxcXCI+XFxuICAgICAgICAgIDxoMiBjbGFzcz1cXFwiZm9vdGVyLXdpZGdldC10aXRsZVxcXCI+QXBwbHkgZm9yIHRoZSBOdXJzZXJ5IFNjaG9vbDwvaDI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRleHR3aWRnZXRcXFwiPlxcbiAgICAgICAgICAgIDxwPlxcbiAgICAgICAgICAgICAgRXhwZXJpZW5jZSB0aGUgaW5ub3ZhdGl2ZSBhcHByb2FjaCBhbmQgZHluYW1pYyB0ZWFjaGluZ1xcbiAgICAgICAgICAgICAgZW52aXJvbm1lbnQgb2YgdGhlIFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbC5cXG4gICAgICAgICAgICA8L3A+XFxuICAgICAgICAgICAgPGEgaHJlZj1cXFwiZmlsZXMvYXBwbHkuaHRtbFxcXCI+UmVnaXN0ZXIgTm93PC9hPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvYXNpZGU+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzaXRlLWluZm9cXFwiPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJmb290ZXItY29weXJpZ2h0XFxcIj7CqTIwMTkgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IGluIFN0LiBMb3VpczwvcD5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Zvb3Rlcj5cIjtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGlkPVxcXCJ3dXN0bC1icmFuZGluZ1xcXCI+XFxuICA8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgd2lkdGg9XFxcIjMyMVxcXCIgaGVpZ2h0PVxcXCIyOFxcXCIgdmlld0JveD1cXFwiMCAwIDMyMSAyOFxcXCIgY2xhc3M9XFxcIndhc2h1LWxvZ29cXFwiXFxuICAgIGFyaWEtbGFiZWxsZWRieT1cXFwidGl0bGVcXFwiPlxcbiAgICA8dGl0bGUgaWQ9XFxcInRpdGxlXFxcIj5XYXNoaW5ndG9uIFVuaXZlcnNpdHkgaW4gU3QuIExvdWlzPC90aXRsZT5cXG4gICAgPHBhdGggZmlsbD1cXFwiI0ZGRlxcXCJcXG4gICAgICBkPVxcXCJNMTAuNDYgMS43NmMtLjA5IDAtNC40MS4wNC0xMC40Ni0xLjIxVjE4YzAgLjI3LjAxLjQ3LjAxLjQ3di4wMmMuMDQuODEuMjggMS40NS43NyAyIC4zMi4zNC43Ni43IDEuMzggMS4wNS4xNy4xLjM1LjE4LjU1LjI4LjE1LjA3LjMxLjE0LjQ3LjIuMTQuMDYuNTUuMjQuNjkuMjlsNi41OSAyLjUgNi41OS0yLjVjLjE1LS4wNS41Ni0uMjQuNjktLjI5LjE2LS4wNy4zMi0uMTQuNDctLjIuMTktLjEuMzgtLjE4LjU1LS4yOC42Mi0uMzUgMS4wNi0uNyAxLjM4LTEuMDUuNDgtLjU1LjczLTEuMTkuNzctMnYtLjAyczAtLjE5LjAxLS40N1YuNTVDMTQuODYgMS44IDEwLjU1IDEuNzYgMTAuNDYgMS43NnpcXFwiPlxcbiAgICA8L3BhdGg+XFxuICAgIDxwYXRoIGZpbGw9XFxcIiMwMDczNjBcXFwiXFxuICAgICAgZD1cXFwiTTEwLjQ2IDIuOGMtLjA5IDAtNC4wMy4wNC05LjU2LTEuMXYxNS45NWMwIC4yNS4wMS40My4wMS40NHYuMDJjLjA0Ljc0LjI1IDEuMzMuNyAxLjgzLjI5LjMxLjcuNjQgMS4yNi45NS4xNS4wOS4zMi4xNy41LjI2LjE0LjA3LjI4LjEzLjQ0LjE5LjEyLjA1LjUuMjIuNjMuMjdsNi4wMyAyLjI5IDYuMDMtMi4yOWMuMTMtLjA1LjUxLS4yMi42My0uMjcuMTUtLjA2LjMtLjEzLjQ0LS4xOS4xOC0uMDkuMzUtLjE3LjUtLjI2LjU2LS4zMS45Ny0uNjQgMS4yNi0uOTUuNDQtLjUuNjYtMS4wOS43LTEuODN2LS4wMnMwLS4xOC4wMS0uNDRWMS43Yy01LjU1IDEuMTQtOS41IDEuMS05LjU4IDEuMXpcXFwiPlxcbiAgICA8L3BhdGg+XFxuICAgIDxwYXRoIGZpbGw9XFxcIiNFMUM0QUNcXFwiXFxuICAgICAgZD1cXFwiTTEwLjQ2IDMuNzVjLS4wOCAwLTMuNjguMDQtOC43NC0xLjAydjQuMDhjNS4wNSAxLjA1IDguNjcgMS4wMiA4Ljc0IDEuMDJzMy42OC4wNCA4Ljc0LTEuMDJWMi43M2MtNS4wNiAxLjA1LTguNjYgMS4wMi04Ljc0IDEuMDJ6XFxcIj5cXG4gICAgPC9wYXRoPlxcbiAgICA8cGF0aCBmaWxsPVxcXCIjQTUxNDE3XFxcIlxcbiAgICAgIGQ9XFxcIk0xMC40NiA3LjgzYy0uMDggMC0zLjY4LjA0LTguNzQtMS4wMnY5LjA1YzUuMDUgMS4wNSA4LjY3IDEuMDIgOC43NCAxLjAyczMuNjguMDQgOC43NC0xLjAyVjYuODJjLTUuMDYgMS4wNC04LjY2IDEuMDEtOC43NCAxLjAxelxcXCI+XFxuICAgIDwvcGF0aD5cXG4gICAgPHBhdGggZmlsbD1cXFwiI0UxQzRBQ1xcXCJcXG4gICAgICBkPVxcXCJNMS43MiAxNy43MmMuMDMuNjkuMjMgMS4yMy42NCAxLjY4LjI2LjI4LjY0LjU4IDEuMTUuODcuMTUuMDguMjkuMTUuNDYuMjMuMTMuMDYuMjYuMTIuNC4xNy4xMS4wNS40Ni4yLjU4LjI0TDEwLjQ2IDIzbDUuNTEtMi4wOWMuMTItLjA0LjQ2LS4yLjU4LS4yNC4xNC0uMDYuMjctLjEyLjQtLjE3LjE2LS4wOC4zMi0uMTUuNDYtLjIzLjUxLS4yOS44OC0uNTggMS4xNS0uODcuNDEtLjQ2LjYtMSAuNjQtMS42OHYtLjAyczAtLjE2LjAxLS40di0xLjQ0Yy01LjA1IDEuMDUtOC42NyAxLjAyLTguNzQgMS4wMnMtMy42OC4wNC04Ljc0LTEuMDJ2MS40NWMtLjAyLjI1LS4wMS40MS0uMDEuNDF6XFxcIj5cXG4gICAgPC9wYXRoPlxcbiAgICA8cGF0aCBmaWxsPVxcXCIjMDA3MzYwXFxcIlxcbiAgICAgIGQ9XFxcIk00LjggMy42OWwuNDEgMS4yMyAxLjI5LjAxLTEuMDQuNzcuMzkgMS4yNC0xLjA1LS43Ni0xLjA1Ljc2LjM5LTEuMjQtMS4wNC0uNzcgMS4yOS0uMDEuNDEtMS4yM3ptMTEuMzEgMGwuNDIgMS4yMyAxLjI5LjAxLTEuMDQuNzcuMzkgMS4yNC0xLjA2LS43Ni0xLjA1Ljc2LjM5LTEuMjQtMS4wNC0uNzcgMS4yOS0uMDEuNDEtMS4yM3ptLTUuNjUuNDhsLjQyIDEuMjMgMS4yOS4wMS0xLjA0Ljc3LjM5IDEuMjQtMS4wNi0uNzYtMS4wNi43NS4zOS0xLjI0LTEuMDQtLjc3IDEuMy0uMDEuNDEtMS4yMnpNMTAuNDYgMTcuMjFsLS40Ni40NXYxLjIybC4yMy42NXYxLjA5aC40NXYtMS4wOWwuMjMtLjY1di0xLjIybC0uNDUtLjQ1em0uMjIgNC40MXYtLjY1aC0uNDV2LjY1bC0uMjMuNDIuNDYuNTYuNDYtLjU2LS4yNC0uNDJ6bS4zMy0uNjV2LjVsLjI5LjMxLjUxLS40MXYtLjQxaC0uOHptLjU0LTIuMDRsLS41NC42djEuMDloLjQ0di0uNjVsLjQzLS40Ni41NS4zNi4zNS0uMzZ2LS41OGgtMS4yM3ptLTEuNjQgMi4wNHYuNWwtLjI5LjMxLS41Mi0uNDF2LS40MWguODF6bS0uNTUtMi4wNGwuNTQuNnYxLjA5aC0uNDN2LS42NWwtLjQzLS40Ni0uNTUuMzYtLjM1LS4zNnYtLjU4aDEuMjJ6XFxcIj5cXG4gICAgPC9wYXRoPlxcbiAgICA8cGF0aCBmaWxsPVxcXCIjRTFDNEFDXFxcIlxcbiAgICAgIGQ9XFxcIk0xNC42MiA5LjI3djUuMTloLTMuNDlsLS4yNS4yMS0uNDMuMzctLjQzLS4zNy0uMjUtLjIxSDYuMjlWOS4yN2wtLjc0LjU0djUuMzhoNC4xMmwuMzcuMzEuNDMuMzguNDMtLjM4LjM3LS4zMWg0LjEyVjkuODFsLS43Ny0uNTR6XFxcIj5cXG4gICAgPC9wYXRoPlxcbiAgICA8cGF0aCBmaWxsPVxcXCIjRTFDNEFDXFxcIlxcbiAgICAgIGQ9XFxcIk0xMS4wMiA4LjgzbC0uMTQuMTEtLjQzLjM4LS40My0uMzgtLjEyLS4xMUg3LjAzdjQuODloMi44OGwuMi4xNy4zNS4zMS4zNi0uMzEuMTktLjE3aDIuODhWOC44M2gtMi44N3pNMTYuMTEgMTAuMzV2My4zMWMuOTUtLjE0IDEuOTgtLjMxIDMuMDgtLjU0VjkuODFhNTAuNSA1MC41IDAgMCAxLTMuMDguNTR6bS0xMS4zMSAwYy0uOTUtLjE0LTEuOTgtLjMxLTMuMDgtLjU0djMuMzFjMS4xLjIzIDIuMTQuNDEgMy4wOC41NHYtMy4zMXpcXFwiPlxcbiAgICA8L3BhdGg+XFxuICAgIDxwYXRoIGZpbGw9XFxcIiMwMDczNjBcXFwiXFxuICAgICAgZD1cXFwiTTE2LjExIDE2Ljc2bC0uMzEuMzJ2Ljg2bC4xNS40NnYuNzdoLjMxdi0uNzdsLjE2LS40NnYtLjg2bC0uMzEtLjMyem0uMTYgMy4wOXYtLjQ1aC0uMzF2LjQ2bC0uMTUuMy4zMS40LjMyLS40LS4xNy0uMzF6bS4yMy0uNDV2LjM1bC4yLjIyLjM2LS4yOHYtLjI5aC0uNTZ6bS4zOC0xLjQzbC0uMzguNDN2Ljc3aC4zMXYtLjQ2bC4zLS4zMy4zOC4yNS4yNC0uMjV2LS40MWgtLjg1em0tMS4xNCAxLjQzdi4zNWwtLjIxLjIyLS4zNS0uMjh2LS4yOWguNTZ6bS0uMzktMS40M2wuMzkuNDN2Ljc3aC0uMzF2LS40NmwtLjMtLjMzLS4zOS4yNS0uMjQtLjI1di0uNDFoLjg1ek00LjggMTYuNzZsLS4zMi4zMnYuODZsLjE2LjQ2di43N2guMzF2LS43N2wuMTUtLjQ2di0uODZsLS4zLS4zMnptLjE2IDMuMDl2LS40NWgtLjMxdi40NmwtLjE2LjMuMzIuNC4zMS0uNC0uMTYtLjMxem0uMjItLjQ1di4zNWwuMjEuMjIuMzUtLjI4di0uMjloLS41NnptLjM5LTEuNDNsLS4zOS40M3YuNzdoLjMxdi0uNDZsLjMtLjMzLjM5LjI1LjI0LS4yNXYtLjQxaC0uODV6TTQuNDIgMTkuNHYuMzVsLS4yLjIyLS4zNi0uMjh2LS4yOWguNTZ6bS0uMzgtMS40M2wuMzguNDN2Ljc3aC0uMzF2LS40NmwtLjMtLjMzLS4zOC4yNS0uMjQtLjI1di0uNDFoLjg1elxcXCI+XFxuICAgIDwvcGF0aD5cXG4gICAgPGcgZmlsbD1cXFwiI0ZGRlxcXCIgY2xhc3M9XFxcIndhc2h1LWxvZ28tdGV4dFxcXCI+XFxuICAgICAgPHBhdGhcXG4gICAgICAgIGQ9XFxcIk0yMzIuNDcgOC4xNmMuMzMgMCAxLjA3LTEuMiAxLjA3LTEuNTcgMC0uMzYtLjc0LTEuNi0xLjA3LTEuNi0uMyAwLTEuMDcgMS4yNi0xLjA3IDEuNnMuNzYgMS41NyAxLjA3IDEuNTd6bTEzLjgyIDEyLjAzdi01LjA4YzAtMi4zNC0uNzYtNS43Ni00LjIyLTUuNzYtMi41MSAwLTMuODEgMi4zOC0zLjc2IDIuMDFWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0xLjA0IDEuMDEtMy4wNiAxLjYyLS4xMy4wMy0uNS4wNC0uNTEuMjcgMCAuNjUgMi4wMy0uODQgMS45OSAxLjY4djcuNjRjMCAxLjQzLS43IDEuNTUtMS4yMSAxLjY4LS4wMyAwLS4wNi0uMDEtLjEgMC0uNTItLjAzLTEuNjMtLjIzLTEuNjMtMS4zNVY5LjU5YzAtLjMxLS4xNS0uNDktLjMxLS40OS0uNiAwLS45OCAxLjA4LTIuNjMgMS42NC0uMTMuMDMtLjM3LjA2LS4zNy4yNCAwIC42NSAxLjQ5LS42MSAxLjQyIDEuNjl2Ny4yN2MuMDYgMS44Ni0uOTYgMi4wNC0xLjUyIDIuMDQtLjg0LS4wMS0uNjMuMS0uNjMuMzYuMDMuMzEuNTMuMzMgMS4zNy4zNC4yOSAwIDEtLjExIDEuODItLjExIDEuMDcgMCAxLjg3LjEyIDIuNDEuMTIuMzEgMCAxLjE1LS4xMyAyLjUzLS4xMyAxLjUgMCAyLjAyLjEzIDIuNDYuMTMuMzkgMCAuODMtLjE3LjU3LS40NC0uNDItLjQxLTIuMjguMDYtMi4yOC0yLjA2VjEzLjFjLS4wMy0uNDkuODgtMi40IDMuMDYtMi40IDIuMSAwIDMuMDMgMi4zMSAzLjAzIDMuODV2NS43NmMtLjAzIDIuMjctLjggMS41NS0xLjExIDItLjE3LjI1LjEzLjM3LjQ2LjM3cy44OC0uMTMgMS44Ny0uMTNjMS4yNyAwIDEuODIuMTIgMi4xNi4xMi4yNiAwIC43My0uMi40NS0uNDQtLjY4LS41LTEuOTcuMy0xLjk1LTIuMDR6TTQ4LjkxIDIuNGMuMzctLjA1LjU1LS4xOS41NS0uMTkgMC0uMjQtLjA1LS4zLS4zOS0uMy0uNjUgMC0xLjA1LjExLTEuNjkuMTEtLjcxIDAtMS4yNS0uMDgtMS44NS0uMDgtLjM0IDAtLjMxLjExLS4zMS4zIDAgLjIxLjY1LjA4IDEuMDIuODkuMjEuNDQuMTMgMS4zNi0uMDggMS45bC01LjAxIDEzLjc0LTIuMTQtNi4xLS44My0yLjIzcy0uMTMuMDYuNDYtMS43OWwxLjE3LTMuNTJjLjU3LTEuNzMgMS4xNC0yLjY0IDEuODgtMi42NS45Mi0uMDIuOTItLjU3LjIxLS41N3MtMS4xMy4wNi0xLjc1LjA2Yy0uNjUgMC0uOTktLjA2LTEuNjktLjA2LS4yNiAwLS41NS4wOC0uNTIuMy4wMy4yMS40Mi4xNC43MS4zLjQ3LjI0Ljc4IDEuMjUuNDUgMi4zbC0xLjM4IDQuNDItMS41OC00LjEzYy0uMzEtLjc4LS43My0yLjUyLjAzLTIuNjcuNzMtLjE1LjYzLS41Mi4xOC0uNTItLjg2IDAtMS4zMi4xMS0yLjE1LjExLS45MSAwLTEuNTktLjExLTIuNDUtLjExLS4xOCAwLS41Mi4wMy0uNDIuMzguMDUuMjEuNDkuMTQuNzYuMyAxLjA1LjY4IDEuMjUgMS41NSAxLjYyIDIuNTJsMi4zIDYuNDhjLjQyIDEuMTYuNDUuNzQuMTEgMS43M2wtMiA1LjUtNC45NS0xNC4xMWMtLjM5LTEuMDYtLjYtMS43OS4yNi0yLjIuMzctLjE5LjQ3LS4yMi41Mi0uMy4wNS0uMDcuMS0uMzItLjQ1LS4zLS44OS4wMy0xLjQzLjExLTIuMzIuMTEtLjk0IDAtMS41OS0uMTEtMi40NS0uMTEtLjI5IDAtLjM0LjE0LS4zNC4zNSAwIC4zMy43MS4xMSAxLjMxLjgxLjM0LjM4Ljk5IDEuNjYgMS4xNCAyLjEyTDMyLjggMjIuM2MuMTEuMjUuMTQuNzYuNDguNzYuMjcgMCAuMzMtLjU3LjQyLS43OWwzLjEzLTguNTkgMy4wNSA4LjE2Yy4xMy4zMy4zMSAxLjIyLjYzIDEuMjIuMjYgMCAuMzYtLjQzLjQ5LS44M2w1LjktMTYuODdjLjUtMS4zNiAxLjA3LTIuNzkgMi4wMS0yLjk2em02NS40NiA2LjcxYy0zLjI2IDAtNS43NyAzLjI4LTUuNzcgNy4xMyAwIDEuOTYuNTIgMy41MSAxLjQyIDQuNjMtLjMxLjIxLS45Mi43LTIuMTUuNy0xLjA3IDAtMS42OC0uNjQtMS43NC0yVjExLjJsMy4zOC0uMDFjLjIyIDAgLjY1LTEuNDQuNjctMS41Mi4wNC0uMTguMS0uMzMuMTItLjQ2LjA0LS4yOC0uMTctLjMtLjM3LS4wMS0uMTUuMTUtLjMyLjU1LS45OS41NWgtMi44MWMwLTIuNDEuMDMtMy41MS0uMzUtMy41MS0uMzYgMC0uMy4xLS42MyAxLjE3LS40NCAxLjQ0LTEuNzkgMi4yMy0yLjYzIDIuNjgtLjM4LjA5LS44MS4xMi0xLjI5LjAxLS43NC0uMTYtMS42LTEuMDYtMy44My0xLjA2LTIuMzggMC00LjQ2IDEuOTUtNC40NiA0LjU1IDAgMS40LjYyIDIuNzYgMS43MSAzLjQ4LS4yLjEyLTEuNTMgMS4yNC0xLjM3IDIuNTYgMCAwLS4wMyAxLjM3IDEuMDUgMS44Mi0uMzMuMTQtLjY3LjM2LS45Ni42My0uNy0uMjYtMS43Mi0uMDYtMS43Mi0xLjkxVjE1LjFjMC0yLjM0LS43Ni01Ljc2LTQuMjItNS43Ni0yLjUxIDAtMy44MSAyLjM4LTMuNzYgMi4wMVY5LjU5YzAtLjMxLS4xNS0uNDktLjMxLS40OS0uNiAwLS43My45OS0yLjkxIDEuNTUtLjEzLjAzLS40My4xLS40NC4zNCAwIC42NSAxLjc1LS43MSAxLjc2IDEuNjh2Ny42NGMwIDEuNjUtMS4zMSAxLjY1LTEuNTQgMS42Ny0uMSAwLS4xOSAwLS4zMS4wMS0uNTUtLjA1LTEuNTEtLjMtMS41MS0xLjM0VjkuNTljMC0uMzEtLjE1LS40OS0uMzEtLjQ5LS42IDAtLjk4IDEuMDgtMi42MyAxLjY0LS4xMy4wMy0uMzcuMDYtLjM3LjI0IDAgLjY1IDEuNDktLjYxIDEuNDIgMS42OXY3LjI3Yy4wNiAxLjc4LS44NiAyLjAxLTEuNDMgMi4wMy0uNjktLjA5LTEuMjItLjM3LTEuMjItMS40MXYtNS4xNGMwLTIuNjUtMS4wMS02LjA3LTQuMzMtNi4wNy0xLjQ3IDAtMi43NS44MS0zLjczIDEuOTJWMi40MWMwLS4zMS0uMTUtLjQ4LS4zMS0uNDktLjQtLjAzLTEuMDcgMS4xOS0yLjk2IDEuNjMtLjEzLjAzLS42Mi4wNy0uNjIuMjUgMCAuNjUgMS45Ny0uMzEgMS45OSAxLjY5VjIwLjZjMCAxLjUxLTEuMyAxLjMxLTEuNTMgMS43OS0uMDQuMjEuMDguMzEuMjYuMzEuNDIgMCAxLjU1LS4xMiAyLjM1LS4xMnMyLjEuMTIgMi42NC4xMmMuMzEgMCAuNDQtLjA2LjQ0LS40NC0uMjctLjUyLTIuMjguMjgtMi4yOC0yLjM3di02LjVjMC0xLjU3IDEuODctMi43OCAzLjAzLTIuNzguOTEgMCAzLjE0LjcxIDMuMTQgNC41M3Y1LjY0YzAgMS4xMS0xLjE4IDEuMjMtMS4yNyAxLjU3IDAgLjI0LjE1LjM0LjQyLjM0LjI4IDAgMS4xMS0uMTIgMi4xMi0uMTIuNTYgMCAxLjA3LjAzIDEuNS4wNi4yMy4wNS41Ny4wNS45OS4wNS4yOCAwIDEtLjExIDEuODItLjExczEuNDguMDcgMS45OS4xMWMuMS4wMS4yLjAxLjMuMDEuMDQgMCAuMDguMDEuMTIuMDFoLjAxYy4zMi4wMS42MSAwIC43NCAwIC4zMSAwIC44My0uMTMgMi4yLS4xMyAxLjUgMCAyLjAyLjEzIDIuNDYuMTMuMzkgMCAuODMtLjE3LjU3LS40NC0uNDItLjQxLTIuMjguMDYtMi4yOC0yLjA2di03LjA5Yy0uMDMtLjQ5Ljg4LTIuNCAzLjA2LTIuNCAyLjEgMCAzLjAzIDIuMzEgMy4wMyAzLjg1djUuNzZjMCAyLS44IDEuNTUtMS4xMSAyLS4xNy4yNS4xMy4zNy40Ni4zN3MuODgtLjEzIDEuODctLjEzYy45MyAwIDEuNTMuMDcgMS45MS4xLS4yOS40Mi0uNDguOS0uNTEgMS40LS4xNCAyLjUxIDIuOTMgMy40MSA1LjUxIDMuMzcgNS4xMi0uMDcgNi41Ny0zLjYyIDUuNTEtNS41MS0xLjA5LTEuOTUtMy40NC0xLjg3LTUuNjgtMS44Ni00LjIuMDItMy40MS0yLjU5LTEuNjktMi40OS40LjAyLjIuMTQgMS41Ny4xNCAyLjQzIDAgNC43Ni0xLjY2IDQuNy00LjM4LS4wMS0uMjMuMDUtMS4wMy0uNTMtMi4xNCAxLjE0LjAxLjY5IDAgMi40MSAwbC0uMDEgNy42M2MwIDMuNDUgMS42NCA0LjAzIDIuODcgNC4wMyAxLjc0IDAgMy4wMS0xLjE1IDMuMjQtMS42OCAxLjAzIDEuMSAyLjQ2IDEuNjggNC4xMiAxLjY4IDMuMTkgMCA1LjYtMi45MyA1LjYtNi43OCAwLTUuOC0zLjY1LTYuOTYtNS42MS02Ljk2ek05NS42MiAyMS43MmMuMjEtLjAxLjI3LjA4IDIuNjQuMTcgMi40NS4wNiAzLjMzLjc3IDMuNDkgMS40LjI2IDEuMTItLjUzIDMuNTItNC4wNSAzLjI5LTIuMjItLjE1LTIuODctMS4yLTMuMDMtMS40NC0uODQtMS4xNi0uMTYtMy4zNS45NS0zLjQyem0yLjAxLTQuNTdjLTIuMDggMC0yLjc4LTItMi43OC0zLjkxIDAtMS45Ni41OS0zLjU4IDIuNjctMy41OCAyLjExIDAgMi45NSAyLjE2IDIuOTUgNC4wNy4wMSAxLjkzLS44NyAzLjQyLTIuODQgMy40MnptMTYuOTkgNC44MWMtMy4wMyAwLTQuMjItMy43Ni00LjIyLTYuODIgMC0yLjY1IDEuMDQtNS4xIDMuNTctNS4xIDMuMDggMCA0LjE5IDMuMjkgNC4xOSA2LjUxLjAxIDMuODctMS4zNiA1LjQxLTMuNTQgNS40MXpcXFwiPlxcbiAgICAgIDwvcGF0aD5cXG4gICAgICA8cGF0aFxcbiAgICAgICAgZD1cXFwiTTEzMS4xMSAyMC4xOXYtNS4wOGMwLTIuMzQtLjc2LTUuNzYtNC4yMi01Ljc2LTIuNTEgMC0zLjgxIDIuMzgtMy43NiAyLjAxVjkuNTljMC0uMzEtLjE1LS40OS0uMzEtLjQ5LS42IDAtMS4wNCAxLjAxLTMuMDcgMS42Mi0uMTMuMDMtLjUuMDQtLjUxLjI3IDAgLjY1IDIuMDMtLjg0IDIgMS42OHY3LjY0YzAgMi0xLjM1IDEuNTItMS42NiAyLjA0LS4xNS4yNy4yNS4zMy41OS4zMy4zMSAwIC44My0uMTMgMi4yLS4xMyAxLjUgMCAyLjAyLjEzIDIuNDYuMTMuMzkgMCAuODMtLjE3LjU3LS40NC0uNDItLjQxLTIuMjguMDYtMi4yOC0yLjA2di03LjA5Yy0uMDMtLjQ5Ljg4LTIuNCAzLjA2LTIuNCAyLjEgMCAzLjAzIDIuMzEgMy4wMyAzLjg1djUuNzZjLS4wMyAyLjI3LS44IDEuNTUtMS4xMSAyLS4xNy4yNS4xMy4zNy40Ni4zN3MuODgtLjEzIDEuODctLjEzYzEuMjcgMCAxLjgyLjEyIDIuMTYuMTIuMjYgMCAuNzMtLjIuNDQtLjQ0LS42NS0uNDktMS45NC4zMS0xLjkyLTIuMDN6TTc3LjQxIDguMTZjLjMzIDAgMS4wNy0xLjIgMS4wNy0xLjU3IDAtLjM2LS43NC0xLjYtMS4wNy0xLjYtLjMgMC0xLjA3IDEuMjYtMS4wNyAxLjYuMDIuMzUuNzcgMS41NyAxLjA3IDEuNTd6bS0xNy4zIDYuOTZjLS41MS0uMjQtMS4yNy0uNjgtMS42NS0uODgtMS42My0uODktMi4yNy0xLjQ3LTIuMzEtMi4zLS4wOC0xLjQ0IDEuMTUtMi4xOSAyLjIxLTIuMDggMi41NC0uMDQgMi44OCAyLjggMy4xNCAyLjguMzkgMCAuMjgtLjM3LjI4LTEuMjEgMC0uMjEuMDMtMS4yNy0uMTMtMS41Mi0uMzEtLjQ2LTIuMS0uNzQtMi41NS0uNzQtLjExIDAtLjUyLS4wMS0uNi0uMDItLjEzIDAtLjI4LjAyLS4yOC4wMi0xLjgxLS4wMy0zLjUgMS4xMS0zLjQ1IDMuNTMuMDUgMi4yMSAyLjY0IDMuNDcgNC4wNCA0LjMgMS4wNC41OSAyLjI2IDEuMTUgMi4yNCAyLjU3LS4wMiAxLjYxLTEuMjcgMi42OC0yLjYxIDIuNi0zLjE1LS4wNS0yLjcyLTQtMy4yOC00LS4zOSAwLS4zMSAxLS4zMSAxLjUyIDAgLjUxLS4wMS45OC0uMDEgMS4zOC0uMDcuMzYtLjIuNy0uNTQuNzItMS4yNC4wOC0uOTQtMS45LS45NC0yLjk1di02LjQzYy0uMDYtMS45Ny0xLjU0LTMuMjUtMy44LTMuMjUtMy4wOSAwLTUuMzEgMy44MS00LjI1IDUgLjI1LjI4IDEuMjYtLjggMS4zMi0uODZzLjA4LS4xMy4wOC0uMTNjLS4wMS0xLjMuOTctMi45NSAyLjM3LTMuMDkgMS42LS4xNSAyLjQgMS4wNCAyLjQgMi42NXYyLjA5Yy02LjA2IDEuMjEtNi45MyAzLjIyLTYuOTMgNC44NyAwIDIuMjEgMS41NSAzLjIgMy4yMyAzLjIgMS40NSAwIDIuODgtLjY5IDMuOTYtMS44LjM0IDEuMDMgMS4wMSAxLjY1IDIuMDIgMS42Mi4zNS0uMDEuNDEuMDkgMS40Ni0uMzcuMzctLjEuMzUtLjA5Ljc3LS4wMS41Ni4xOSAxLjMyLjU3IDIuNjYuNTcgMi4wMy4wMyAzLjg1LTEuODUgMy44NS00LjE3IDAtMS41LS40My0yLjQxLTIuMzktMy42M3ptLTguNDMgNC4zMmMwIDEuNjUtMS42OCAyLjUyLTIuNiAyLjUyLTEuMzggMC0yLjMzLS44OS0yLjMzLTIuNjYgMC0yLjczIDMuMjgtMy4yMyA0Ljk0LTMuNjctLjAxLS4wMS0uMDEgMy44MS0uMDEgMy44MXptMjE5Ljk5LjE5Yy0uMzEgMC0xLjA3IDEuMjktMS4wNyAxLjYzIDAgLjM0Ljc3IDEuNiAxLjA3IDEuNi4zMyAwIDEuMDctMS4yMyAxLjA3LTEuNnMtLjczLTEuNjMtMS4wNy0xLjYzem0zMy43MSAxLjEyVjkuOTJjMC0uNjEtLjM0LS43Ny0uNDQtLjc3LS4zOSAwLS42MS4xLS44OC4xNi0uMjcuMS0uNTguMjMtMS4yOS4yMy0uMTMgMC0uNzktLjEyLS43Ni4yNS4wNC4zNyAxLjU3LjE1IDEuNTggMS4yM3Y3LjgzYy0uMTIgMS4zNy0xLjI3IDIuODgtMi42NiAyLjg4LS4zMiAwLTIuMzktLjIyLTIuMzctMy42NVY5LjkyYzAtLjYxLS4zNC0uNzctLjQ0LS43Ny0uMzkgMC0uNjEuMS0uODguMTYtLjI3LjEtLjYxLjIyLTEuMzIuMTktLjM4LS4wMi0uNzktLjA3LS43My4yOS4wNi4zMiAxLjU5IDAgMS41OSAxLjIzdjcuNTFjMCAyLjc0IDEuNjEgNC4zMiAzLjU2IDQuMzIgMS4zIDAgMi40OS0uMjggMy4yNC0xLjhoLjA1djEuMzJjMCAuMTMuMDMuNDguMjIuNDguMzcgMCAuNTYtLjMuODMtLjQuMjktLjA3LjM3LS4zMyAxLjI4LS40Mi4zOS0uMDQuODItLjI0LjgyLS41LS4xMS0uNTMtMS40LjA2LTEuNC0uNzh6TTI5MC4wOSA5LjExYy0zLjI2IDAtNS43NyAzLjI4LTUuNzcgNy4xMyAwIDEuNzMuNDIgMy4xNSAxLjEzIDQuMjMtLjc5LjU3LTIuMjMgMS4xLTQuOTYgMS4xLTIuMTMgMC0xLjkzLS43NC0xLjkzLTIuNTVWNC41N2MwLTIuNjYgMS45OS0xLjg5IDIuMDMtMi4zNy4wMy0uMzQtLjI4LS4yNi0uNjEtLjI2LS4zOCAwLTEuMDcuMTUtMi41Mi4xNS0xLjI1IDAtMi4zNC0uMTItMi44OC0uMTItLjMzIDAtLjYzLjEtLjUyLjM1LjI1LjU3IDIuMTQuMDUgMi4xNCAxLjY1djE1LjFjMCAxLjQ0LjIxIDIuMzYtLjQ1IDIuNzMtLjgxLjQ5LTEuNzYuNTEtMS42OC44My4wNS4xOS40NS4yLjY4LjIgMS4wMiAwIDIuNDItLjEzIDMuNDQtLjE1IDEuOTQtLjA2IDMuODYuMTMgNS43OS4xMyAxLjEyIDAgMS40LS4yMiAyLjIyLTEuMzMuMDEtLjAyLjAyLS4wMy4wNC0uMDUgMS4wMS45NCAyLjM0IDEuNDQgMy44NyAxLjQ0IDMuMTkgMCA1LjYtMi45MyA1LjYtNi43OC4wMS01LjgyLTMuNjUtNi45OC01LjYyLTYuOTh6bS4yNiAxMi44NWMtMy4wMyAwLTQuMjItMy43Ni00LjIyLTYuODIgMC0yLjY1IDEuMDQtNS4xIDMuNTctNS4xIDMuMDggMCA0LjE5IDMuMjkgNC4xOSA2LjUxLjAxIDMuODctMS4zNiA1LjQxLTMuNTQgNS40MXptLTMyLjAzLTEwLjQ5Yy0uNzUtLjM3LTEuODUtMS4wNC0yLjM5LTEuMzYtMi4zNy0xLjM3LTMuMy0yLjI2LTMuMzctMy41Mi0uMTItMi4yMSAyLjA0LTMuNTIgMy41OC0zLjM1IDEuOTYgMCAzLjU3IDEuMTkgNC4yNCAzLjczLjA3LjI3LjMxLjg5LjU2Ljg5LjIyIDAgLjI2LS4yLjI0LS40NWwtLjMzLTQuMDJjLS4wMi0uMzMtLjE0LS40Mi0uMjctLjQyLS4yMiAwLS4zNi4zMy0uNTYuMzMtLjMxIDAtMS4xLTEuMTEtMy44LTEuMDktLjE4LS4wMS0uNDMuMDItLjQzLjAyLTIuNjMtLjA1LTUuMSAxLjctNS4wMiA1LjQuMDcgMy4zNyAzLjg1IDUuMyA1Ljg5IDYuNTkgMS41MS45IDMuMDkgMi4zNCAzLjA0IDMuOTUtLjA4IDIuNDctMS42MyA0LjA4LTMuNTggMy45NC00LjU5LS4wOC0zLjk2LTYuMTMtNC43OC02LjEzLS41NiAwLS40NSAxLjUyLS40NiAyLjMyIDAgMS45Mi0uMDggMy40OS4xNCAzLjc3LjA3LjA5LjI5LjA1Ljc0LjA1LjkgMCAyIDEuMDUgNC42NSAxLjA1IDIuOTUuMDUgNS4zOC0yLjY5IDUuMzgtNi4yNS0uMDEtMi4xOS0uNjItMy41OC0zLjQ3LTUuNDV6bTUxLjY5LTMuMzFjLjMzIDAgMS4wNy0xLjIgMS4wNy0xLjU3IDAtLjM2LS43NC0xLjYtMS4wNy0xLjYtLjMgMC0xLjA3IDEuMjYtMS4wNyAxLjZzLjc2IDEuNTcgMS4wNyAxLjU3ek0zMTIuNjQgMjJjLS41Mi0uMDMtMS42My0uMjMtMS42My0xLjM1VjkuNTljMC0uMzEtLjE1LS40OS0uMzEtLjQ5LS42IDAtLjk4IDEuMDgtMi42MyAxLjY0LS4xMy4wMy0uMzcuMDYtLjM3LjI0IDAgLjY1IDEuNDktLjYxIDEuNDIgMS42OXY3LjI3Yy4wNiAxLjg2LS45NiAyLjA0LTEuNTIgMi4wNC0uODQtLjAxLS42My4xLS42My4zNi4wMy4zMS41My4zMyAxLjM3LjM0LjI4IDAgMS0uMTEgMS44Mi0uMTEgMS4wNyAwIDEuODcuMTIgMi40MS4xMi4zMyAwIC43Ni0uOC4wNy0uNjl6bTUuOTgtNi44OGMtLjUxLS4yNC0xLjI3LS42OC0xLjY1LS44OC0xLjYzLS44OS0yLjI3LTEuNDctMi4zMS0yLjMtLjA4LTEuNDQgMS4xNS0yLjE5IDIuMjEtMi4wOCAyLjU0LS4wNSAyLjg4IDIuOCAzLjE0IDIuOC4zOSAwIC4yOC0uMzcuMjgtMS4yMSAwLS4yMS4wMy0xLjI3LS4xMy0xLjUyLS4zMS0uNDYtMi4xMS0uNzQtMi41NS0uNzQtLjExIDAtLjUyLS4wMS0uNi0uMDEtLjEzIDAtLjI4LjAxLS4yOC4wMS0xLjgxLS4wMy0zLjUgMS4xMS0zLjQ0IDMuNTMuMDUgMi4yMSAyLjY0IDMuNDYgNC4wNCA0LjMgMS4wNC41OSAyLjI2IDEuMTUgMi4yNCAyLjU3LS4wMiAxLjYxLTEuMjcgMi42OC0yLjYxIDIuNi0zLjE1LS4wNS0yLjcyLTQtMy4yOC00LS4zOSAwLS4zMSAxLS4zMSAxLjUyLS4wMSAxLjI1LS4wNiAyLjI4LjEgMi40Ni4wNS4wNi4yLjAzLjUuMDMuNjIgMCAxLjM4LjY5IDMuMTkuNjkgMi4wMy4wMyAzLjg1LTEuODUgMy44NS00LjE3LS4wMS0xLjQ4LS40My0yLjM5LTIuMzktMy42em0tNDguNzMgNS42NmMtLjI2LjEzLS44NS43Ny0yLjI4Ljc3LTEuMDcgMC0xLjY4LS42NC0xLjc0LTJ2LTguODJsMy4zOC0uMDFjLjIyIDAgLjY1LTEuNDQuNjctMS41Mi4wNC0uMTguMS0uMzMuMTItLjQ2LjA0LS4yOC0uMTctLjMtLjM3LS4wMS0uMTUuMTUtLjMyLjU1LS45OS41NWgtMi44MWMwLTIuNDEuMDMtMy4wNC0uMzUtMy4wNC0uMzYgMC0uMy4xLS42MyAxLjE3LS41NCAxLjc5LTIuNTIgMi41OC0zLjE1IDIuOTctLjE1LjA4LS4xNS4xMS0uMTUuMTktLjAxLjIzLjc1LjE0IDIuMzEuMTdsLS4wMSA4LjA3YzAgMy40NSAxLjY0IDQuMDMgMi44NyA0LjAzIDEuODcgMCAzLjIxLTEuMzQgMy4yOC0xLjguMDMtLjI1IDAtLjI4LS4xNS0uMjZ6bS04MS4zMi0xLjA5Yy0uNTcgMC0xLjQyIDEuNjItMy42NiAxLjYyLTEuNTggMC00LjE3LTEuNTMtNC4xNy02LjY2aDYuOWMuNiAwIC44OC4wMy44OC0uNTIgMC0xLjI1LTEuNC00Ljk1LTQuNTktNC45NS0zLjI0IDAtNS4wOCAzLjMzLTUuMDggNy4zMSAwIDIuMDUgMS4zNSA2LjM4IDUuMjQgNi4zOCAyLjMzIDAgNC41OS0yLjI0IDQuNTktMi45NS0uMDEtLjExLS4wMS0uMjMtLjExLS4yM3ptLTUuMDgtOS44MWMxLjQyIDAgMi44OCAxLjU2IDIuODggMy4zIDAgLjQ2LS4xNS42Mi0uNTIuNjJoLTUuMTFjMC0xLjcxIDEuMTMtMy45MiAyLjc1LTMuOTJ6bS0zMS43LTcuMzNjLjEtLjE2LS4yNS0uMjQtLjM3LS4yNC0uNDIgMC0xLjM3LjExLTEuOC4xMS0uODkgMC0xLjY0LS4wOS0yLjUzLS4wOS0uMDcgMC0uNDYuMDUtLjQ2LjE4LS4wMS42MyAyLjEzLS4xMSAyLjEzIDIuNnYxMC41N2MwIDMuMTMtLjk5IDYuNDEtNS4yOSA2LjQxLTMuMDkgMC00Ljc2LTEuOTQtNC43Ni02LjE3VjQuNDFjMC0xLjkxIDEuNDktMS40OSAxLjUyLTEuOTIuMDMtLjQxLTEuMzMtLjE2LTEuNDMtLjE2LS43MSAwLTEuMjEuMDgtMS45NS4wOC0uNjIgMC0xLjM3LS4xLTEuOTctLjEtLjEyIDAtLjUzLS4wMi0uNjEuMTUtLjIzLjU2IDEuOTEuMjYgMS45MSAxLjgzdjEwLjkyYzAgNC4wOCAxLjE0IDguMDggNy4xNyA3Ljk3IDcuMTQtLjEyIDcuMDEtNi41NCA3LjAxLTcuODNWNS4xMmMuMDEtMi40MyAxLjItMi4yIDEuNDMtMi41N3ptMjguMTkgNy4yNGMuMTctLjIuMjItLjUzLS41Ny0uNDYtLjQ1IDAtLjc3LjA4LTEuMjIuMDgtLjU3IDAtLjY4LS4wMi0xLjIyLS4wNC0uNjgtLjAyLS44Ni4wNS0uODIuMjUuMTIuNiAxLjU1LjAxIDEuMzYgMS44LS4xNiAxLjUtLjY1IDIuNzktMS4xNCA0LjA3bC0xLjczIDQuNjItMi41NC03LjdjLS4zMS0uOTYtLjQ1LTEuNDctLjQ1LTEuNTcgMC0uOTYgMS4xNi0uNzUgMS40Mi0xLjE0LjE2LS4yNi0uMTctLjQtLjU0LS40LS4zMSAwLS42Ny4xMS0xLjYzLjEzLS43OS4wMi0xLjM2LjAyLTEuNy0uMDUtLjg5LS4xNi0uODIuMzMtLjUxLjQ4cy40Ni4wMS45MSAxLjM2bDMuOTEgMTEuMDZjLjA4LjIyLjE4Ljc3LjUyLjc3LjM5IDAgLjM5LS4zOS44OC0xLjY5IDAgMCAzLjc1LTEwLjQ4IDQtMTAuODYuNTEtLjc0Ljg5LS41IDEuMDctLjcxem0xNC40Ny0uNWMtMS4wNyAwLTEuOCAxLjI4LTIuMzMgMi4xNmgtLjA1VjkuNTNjMC0uMy0uMTUtLjQ4LS4zLS40OC0uNDEgMC0uNzIuODEtMi44NyAxLjMzLS4xMy4wMy0uNDguMS0uNDguMjggMCAuNjQgMS44Mi0uMTkgMS44MiAxLjkzdjguMDdjMCAxLjI1LTEuMjkgMS4xMi0xLjI5IDEuNzcgMCAuMTguMDguMjcuMjguMjcuMTcgMCAuNjMtLjEyIDIuMzItLjEyIDEuNDEgMCAyLjAyLjEyIDIuMzcuMTIuMjggMCAuNDEtLjA2LjQxLS4zNCAwLS45OC0yLjI1LjQ4LTIuMjUtMi4zNHYtNi44OGMwLS40LjYtMS44IDEuNjQtMS44LjkxIDAgMS4wMi43IDEuNS43LjMgMCAuOTEtLjkxLjkxLTEuMzgtLjAxLS41OC0xLjE2LTEuMzctMS42OC0xLjM3em0zMi41NS4xYy0uMjcgMC0uOTYuMDQtMS41OS4wNC0uNzYgMC0xLjEzLS4wOS0xLjQ1LS4wOS0uNDggMC0uOTYgMC0uODcuMzIuMS4zNiAxLjczLjIzIDEuNzMgMi4wMSAwIC4yMyAwIC41Mi0uMzMgMS43MWwtMi4wOCA2LjYzLTIuOS04LjE1cy0uMTQtLjI2LS4xNC0uNzljMC0xLjMyIDEuNTQtMS4xNyAxLjYtMS40MS4wNS0uMTktLjIxLS40LS42Mi0uNGgtMy42M2MtLjAyIDAtLjAzLjAxLS4wNS4wMWgtMi44MWMwLTIuNDEuMDMtMy4wNC0uMzUtMy4wNC0uMzYgMC0uMy4xLS42MyAxLjE3LS41NCAxLjc5LTIuNTIgMi41OC0zLjE1IDIuOTctLjE1LjA4LS4xNS4xMS0uMTUuMTktLjAxLjIyLjc2LjE0IDIuMzEuMTdsLS4wMSA4LjA3YzAgMy40NSAxLjY0IDQuMDMgMi44NyA0LjAzIDEuODcgMCAzLjIxLTEuMzMgMy4yOC0xLjggMC0uMjctLjA0LS4yOS0uMTgtLjI3LS4yNi4xMy0uODUuNzctMi4yOC43Ny0xLjA3IDAtMS42OC0uNjQtMS43NC0yVjEwLjdzMi41LS4wMSAzLjIxLS4wMWMuMDQuMDYuMDguMTMuMS4xOWwyLjk5IDguNDVjLjI0LjY5LjM5LjkyLjY4IDIuMTQuMTkuNzkuMTIgMS41MS4xMiAxLjUxLS4yOSAxLjI3LTEuMDcgMS45OS0yLjI2IDQuMzQtLjEyLjIyIDEuNzEtLjAyIDEuODEtLjA1LjE1LS4wNS4xMy0uMDkuMzEtLjQybDEuMzItMy45MyAzLjY5LTExLjM0Yy41NC0xLjk4IDEuMzktMS42MiAxLjUzLTEuODkuMTItLjEzIDAtLjMtLjMzLS4zelxcXCI+XFxuICAgICAgPC9wYXRoPlxcbiAgICAgIDxwYXRoXFxuICAgICAgICBkPVxcXCJNMjIyLjIyIDIyLjc2bC0uMDcuMTlWMjNsLjA3LS4yNHptLTE0Ljc0LTE0LjZjLjMzIDAgMS4wNy0xLjIgMS4wNy0xLjU3IDAtLjM2LS43NC0xLjYtMS4wNy0xLjYtLjMgMC0xLjA3IDEuMjYtMS4wNyAxLjZzLjc2IDEuNTcgMS4wNyAxLjU3ek0yMTAuMTEgMjJjLS41Mi0uMDMtMS42My0uMjMtMS42My0xLjM1VjkuNTljMC0uMzEtLjE1LS40OS0uMzEtLjQ5LS42IDAtLjk4IDEuMDgtMi42MyAxLjY0LS4xMy4wMy0uMzcuMDYtLjM3LjI0IDAgLjY1IDEuNDktLjYxIDEuNDIgMS42OXY3LjI3Yy4wNiAxLjg2LS45NiAyLjA0LTEuNTIgMi4wNC0uODQtLjAxLS42My4xLS42My4zNi4wMy4zMS41My4zMyAxLjM3LjM0LjI4IDAgMS0uMTEgMS44Mi0uMTEgMS4wNyAwIDEuODcuMTIgMi40MS4xMi4zMyAwIC43Ni0uOC4wNy0uNjl6TTE2Ni41MiA4LjE2Yy4zMyAwIDEuMDctMS4yIDEuMDctMS41NyAwLS4zNi0uNzQtMS42LTEuMDctMS42LS4zIDAtMS4wNyAxLjI2LTEuMDcgMS42cy43NyAxLjU3IDEuMDcgMS41N3pNMTY5LjE3IDIyYy0uNTItLjAzLTEuNjMtLjIzLTEuNjMtMS4zNVY5LjU5YzAtLjMxLS4xNS0uNDktLjMxLS40OS0uNiAwLS45OCAxLjA4LTIuNjMgMS42NC0uMTMuMDMtLjM3LjA2LS4zNy4yNCAwIC42NSAxLjQ5LS42MSAxLjQyIDEuNjl2Ny4yN2MuMDYgMS44Ni0uOTYgMi4wNC0xLjUyIDIuMDRoLS4xN2MtLjU0LS4xLTEuMDYtLjMyLTEuMDUtMS43OXYtNS4wOGMwLTIuMzQtLjc2LTUuNzYtNC4yMi01Ljc2LTIuNTEgMC0zLjgxIDIuMzgtMy43NiAyLjAxVjkuNTljMC0uMzEtLjE1LS40OS0uMzEtLjQ5LS42IDAtMS4wNCAxLjAxLTMuMDcgMS42Mi0uMTMuMDMtLjUuMDQtLjUxLjI3IDAgLjY1IDIuMDMtLjg0IDIgMS42OHY3LjY0YzAgMi0xLjM1IDEuNTItMS42NiAyLjA0LS4xNS4yNy4yNS4zMy41OS4zMy4zMSAwIC44My0uMTMgMi4yLS4xMyAxLjUgMCAyLjAyLjEzIDIuNDYuMTMuMzkgMCAuODMtLjE3LjU3LS40NC0uNDItLjQxLTIuMjguMDYtMi4yOC0yLjA2di03LjA5Yy0uMDMtLjQ5Ljg4LTIuNCAzLjA2LTIuNCAyLjEgMCAzLjAzIDIuMzEgMy4wMyAzLjg1djUuNzZjLS4wMyAyLjI3LS44IDEuNTUtMS4xMSAyLS4xNy4yNS4xMy4zNy40Ni4zN3MuODgtLjEzIDEuODctLjEzYzEuMjcgMCAxLjgyLjEyIDIuMTYuMTIuMDQgMCAuMDktLjAxLjEzLS4wMS4xMSAwIC4yMS4wMS4zNC4wMS4yOCAwIDEtLjExIDEuODItLjExIDEuMDcgMCAxLjg3LjEyIDIuNDEuMTIuMzQuMDIuNzUtLjc4LjA4LS42N3ptMzIuNzItNi44OWMtLjUxLS4yNC0xLjI3LS42OC0xLjY1LS44OC0xLjYzLS44OS0yLjI3LTEuNDctMi4zMS0yLjMtLjA4LTEuNDQgMS4xNS0yLjE5IDIuMjEtMi4wOCAyLjU0LS4wNSAyLjg4IDIuOCAzLjE0IDIuOC4zOSAwIC4yOC0uMzcuMjgtMS4yMSAwLS4yMS4wMy0xLjI3LS4xMy0xLjUyLS4zMS0uNDYtMi4xLS43NC0yLjU1LS43NC0uMTEgMC0uNTItLjAxLS42LS4wMi0uMTMgMC0uMjguMDItLjI4LjAyLTEuODEtLjAzLTMuNSAxLjExLTMuNDUgMy41My4wNSAyLjIxIDIuNjQgMy40NiA0LjA0IDQuMyAxLjA0LjU5IDIuMjYgMS4xNSAyLjI0IDIuNTctLjAyIDEuNjItMS4yNyAyLjY4LTIuNjEgMi42LTMuMTUtLjA1LTIuNzItNC0zLjI4LTQtLjM5IDAtLjMxIDEtLjMxIDEuNTIgMCAxLjI1LS4wNiAyLjI4LjEgMi40Ni4wNS4wNi4yLjAzLjUuMDMuNjIgMCAxLjM4LjY5IDMuMTkuNjkgMi4wMy4wMyAzLjg1LTEuODUgMy44NS00LjE3IDAtMS40Ny0uNDItMi4zOC0yLjM4LTMuNnpcXFwiPlxcbiAgICAgIDwvcGF0aD5cXG4gICAgPC9nPlxcbiAgPC9zdmc+XFxuPC9kaXY+XFxuPGhlYWRlciByb2xlPVxcXCJiYW5uZXJcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgPGEgY2xhc3M9XFxcInNpdGUtdGl0bGVcXFwiIGhyZWY9XFxcImZpbGVzL2luZGV4Lmh0bWxcXFwiPk51cnNlcnkgU2Nob29sPC9hPlxcbiAgPC9kaXY+XFxuICA8ZGl2IGlkPVxcXCJtYWluLW1lbnUtY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJuYXZiYXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJkcm9wYnRuXFxcIj5cXG4gICAgICAgICAgICA8YSBpZD1cXFwiYWJvdXRcXFwiIGhyZWY9XFxcImZpbGVzL2Fib3V0Lmh0bWxcXFwiPkFib3V0XFxuICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tY29udGVudFxcXCI+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcInR1aXRpb25cXFwiIGhyZWY9XFxcImZpbGVzL3R1aXRpb24uaHRtbFxcXCI+VHVpdGlvbjwvYT5cXG4gICAgICAgICAgICA8YSBpZD1cXFwic3RhZmZcXFwiIGhyZWY9XFxcImZpbGVzL3N0YWZmLmh0bWxcXFwiPlN0YWZmPC9hPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJwYXJlbnQtaGFuZGJvb2tcXFwiIGhyZWY9XFxcImZpbGVzL3BhcmVudF9oYW5kYm9vay5odG1sXFxcIj5QYXJlbnQgSGFuZGJvb2s8L2E+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImRyb3BidG5cXFwiPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJjbGFzc3Jvb21zXFxcIiBocmVmPVxcXCJmaWxlcy9jbGFzc3Jvb21zLmh0bWxcXFwiPkNsYXNzcm9vbXNcXG4gICAgICAgICAgICA8L2E+XFxuICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICA8YSBpZD1cXFwiY3VycmljdWx1bS1vdmVydmlld1xcXCIgaHJlZj1cXFwiZmlsZXMvY3VycmljdWx1bV9vdmVydmlldy5odG1sXFxcIj5DdXJyaWN1bHVtIE92ZXJ2aWV3PC9hPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJ0ZWRkeS1iZWFyc1xcXCIgaHJlZj1cXFwiZmlsZXMvdGVkZHlfYmVhcnMuaHRtbFxcXCI+VGVkZHkgQmVhcnM8L2E+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcInBhbmRhLWJlYXJzXFxcIiBocmVmPVxcXCJmaWxlcy9wYW5kYV9iZWFycy5odG1sXFxcIj5QYW5kYSBCZWFyczwvYT5cXG4gICAgICAgICAgICA8YSBpZD1cXFwiYmVhci1jdWJzXFxcIiBocmVmPVxcXCJmaWxlcy9iZWFyX2N1YnMuaHRtbFxcXCI+QmVhciBDdWJzPC9hPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJiaWctYmVhcnNcXFwiIGhyZWY9XFxcImZpbGVzL2JpZ19iZWFycy5odG1sXFxcIj5CaWcgQmVhcnM8L2E+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcInN1bi1iZWFyc1xcXCIgaHJlZj1cXFwiZmlsZXMvc3VuX2JlYXJzLmh0bWxcXFwiPlN1biBCZWFyczwvYT5cXG4gICAgICAgICAgICA8YSBpZD1cXFwiYmVhci10cmFja3NcXFwiIGhyZWY9XFxcImZpbGVzL2JlYXJfdHJhY2tzLmh0bWxcXFwiPkJlYXIgVHJhY2tzPC9hPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJlbnJpY2htZW50LXByb2dyYW1cXFwiIGhyZWY9XFxcImZpbGVzL2VucmljaG1lbnRfcHJvZ3JhbXMuaHRtbFxcXCI+RW5yaWNobWVudCBQcm9ncmFtPC9hPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGEgaWQ9XFxcImNhbGVuZGFyXFxcIiBocmVmPVxcXCJmaWxlcy9jYWxlbmRhci5odG1sXFxcIj5DYWxlbmRhcjwvYT5cXG4gICAgICAgIDxhIGlkPVxcXCJzdW1tZXItY2FtcFxcXCIgaHJlZj1cXFwiZmlsZXMvc3VtbWVyX2NhbXAuaHRtbFxcXCI+U3VtbWVyIENhbXA8L2E+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImRyb3BidG5cXFwiPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJnZXQtaW52b2x2ZWRcXFwiIGhyZWY9XFxcImZpbGVzL2dldF9pbnZvbHZlZC5odG1sXFxcIj5HZXQgSW52b2x2ZWQ8L2E+XFxuICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICA8YSBpZD1cXFwibnVyc2VyeS1zY2hvb2wtbWVyY2hhbmRpc2VcXFwiIGhyZWY9XFxcImZpbGVzL251cnNlcnlfc2Nob29sX21lcmNoYW5kaXNlLmh0bWxcXFwiPk51cnNlcnkgU2Nob29sXFxuICAgICAgICAgICAgICBNZXJjaGFuZGlzZTwvYT5cXG4gICAgICAgICAgICA8YSBpZD1cXFwicGFyZW50LWFzc29jaWF0aW9uXFxcIiBocmVmPVxcXCJmaWxlcy9wYXJlbnRfYXNzb2NpYXRpb24uaHRtbFxcXCI+UGFyZW50IEFzc29jaWF0aW9uPC9hPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPGEgaWQ9XFxcImFwcGx5XFxcIiBocmVmPVxcXCJmaWxlcy9hcHBseS5odG1sXFxcIj5BcHBseTwvYT5cXG4gICAgICAgIDxhIGlkPVxcXCJmb3Jtc1xcXCIgaHJlZj1cXFwiZmlsZXMvZm9ybXMuaHRtbFxcXCI+Rm9ybXM8L2E+XFxuXFxuICAgICAgICA8YSBpZD1cXFwicGFyZW50LXJlc291cmNlc1xcXCIgaHJlZj1cXFwiZmlsZXMvcGFyZW50X3Jlc291cmNlcy5odG1sXFxcIj5QYXJlbnQgUmVzb3VyY2VzPC9hPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvaGVhZGVyPlwiO1xuIiwiaW1wb3J0IHsgRCB9IGZyb20gXCIuLy4uL2NvcmUvZG9tL2RvY3VtZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBTbGlkZXNob3cge1xuICBwdWJsaWMgc3RhdGljIHNldHVwQWxsKCkge1xuICAgIFNsaWRlc2hvdy5kaXNjYXJkQWxsKCk7XG4gICAgY29uc3Qgc2xpZGVzaG93cyA9IEQuY2xheihcInNsaWRlc2hvd1wiKTtcbiAgICBmb3IgKGxldCBzc0luZGV4ID0gMDsgc3NJbmRleCA8IHNsaWRlc2hvd3MubGVuZ3RoOyArK3NzSW5kZXgpIHtcbiAgICAgIGNvbnN0IGVsZW0gPSBzbGlkZXNob3dzLml0ZW0oc3NJbmRleCk7XG4gICAgICBpZiAoZWxlbSA9PSBudWxsKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgU2xpZGVzaG93LnNsaWRlc2hvd3MucHVzaChuZXcgU2xpZGVzaG93KGVsZW0pKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRpc2NhcmRBbGwoKSB7XG4gICAgU2xpZGVzaG93LnNsaWRlc2hvd3MgPSBbXTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHNsaWRlc2hvd3M6IFNsaWRlc2hvd1tdID0gW107XG5cbiAgcHJpdmF0ZSBzbGlkZUluZGV4ID0gMDtcbiAgcHJpdmF0ZSBzbGlkZUNvdW50ID0gMDtcbiAgcHJpdmF0ZSBzbGlkZXM6IEVsZW1lbnRbXSA9IFtdO1xuICBwcml2YXRlIGRvdHM6IEVsZW1lbnRbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3V0ZXI6IEVsZW1lbnQpIHtcbiAgICBELmVhY2hSZWN1cih0aGlzLm91dGVyLCAoZWxlbSkgPT4ge1xuICAgICAgY29uc3QgY0xpc3QgPSBlbGVtLmNsYXNzTGlzdDtcbiAgICAgIGlmIChjTGlzdC5jb250YWlucyhcInByZXYtc2xpZGVzaG93LWJ1dHRvblwiKSkge1xuICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgXCJjbGlja1wiLCAoKSA9PiB0aGlzLm1pbnVzU2xpZGUoMSkpO1xuICAgICAgfSBlbHNlIGlmIChjTGlzdC5jb250YWlucyhcIm5leHQtc2xpZGVzaG93LWJ1dHRvblwiKSkge1xuICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgXCJjbGlja1wiLCAoKSA9PiB0aGlzLnBsdXNTbGlkZSgxKSk7XG4gICAgICB9IGVsc2UgaWYgKGNMaXN0LmNvbnRhaW5zKFwic2xpZGVzaG93LWVudHJ5XCIpKSB7XG4gICAgICAgIHRoaXMuc2xpZGVzLnB1c2goZWxlbSk7XG4gICAgICB9IGVsc2UgaWYgKGNMaXN0LmNvbnRhaW5zKFwic2xpZGVzaG93LWRvdFwiKSkge1xuICAgICAgICB0aGlzLmRvdHMucHVzaChlbGVtKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZG90cy5sZW5ndGg7ICsraSkge1xuICAgICAgRC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZG90c1tpXSwgXCJjbGlja1wiLCAoKSA9PiB0aGlzLnNob3dTbGlkZShpKSk7XG4gICAgfVxuICAgIHRoaXMuc2xpZGVDb3VudCA9IHRoaXMuc2xpZGVzLmxlbmd0aDtcbiAgICB0aGlzLnNob3dTbGlkZSh0aGlzLnNsaWRlSW5kZXgpO1xuICB9XG5cbiAgcHVibGljIHBsdXNTbGlkZShuOiBudW1iZXIpIHtcbiAgICB0aGlzLnNob3dTbGlkZSgodGhpcy5zbGlkZUluZGV4ICs9IG4pKTtcbiAgfVxuICBwdWJsaWMgbWludXNTbGlkZShuOiBudW1iZXIpIHtcbiAgICB0aGlzLnNob3dTbGlkZSgodGhpcy5zbGlkZUluZGV4IC09IG4pKTtcbiAgfVxuICBwdWJsaWMgc2hvd1NsaWRlKGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLnNsaWRlSW5kZXggPSBpbmRleCAlIHRoaXMuc2xpZGVDb3VudDtcbiAgICB0aGlzLnNsaWRlSW5kZXggPSBNYXRoLm1heCh0aGlzLnNsaWRlSW5kZXgsIC0xICogdGhpcy5zbGlkZUluZGV4KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2xpZGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAodGhpcy5zbGlkZXNbaV0gYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuZG90c1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgICAodGhpcy5zbGlkZXNbdGhpcy5zbGlkZUluZGV4XSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB0aGlzLmRvdHNbdGhpcy5zbGlkZUluZGV4XS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBwYXJhbXMgfSBmcm9tICcuLi9jb3JlL3V0aWxzL3FfcGFyYW1zJztcbmltcG9ydCB7IGRhdGEgfSBmcm9tICcuLy4uL2NvcmUvZGF0YS1sb2cvZGF0YSc7XG5pbXBvcnQgeyBBY3Rpb25FbnVtIH0gZnJvbSAnLi8uLi9jb3JlL2RhdGEtbG9nL2V2ZW50JztcbmltcG9ydCB7IEQgfSBmcm9tICcuLy4uL2NvcmUvZG9tL2RvY3VtZW50JztcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSAnLi8uLi9jb3JlL2RvbS9lbGVtZW50cyc7XG5pbXBvcnQgeyBTY3JvbGwgfSBmcm9tICcuLy4uL2NvcmUvZG9tL3Njcm9sbCc7XG5pbXBvcnQgeyBIaXN0b3J5IH0gZnJvbSAnLi8uLi9jb3JlL3JvdXRlci9oaXN0b3J5JztcbmltcG9ydCB7IFJvdXRlciwgUm91dGVyTW9kZSwgUm91dGVyTW9kdWxlIH0gZnJvbSAnLi8uLi9jb3JlL3JvdXRlci9yb3V0ZXInO1xuaW1wb3J0IHsgVHJhY2tlciB9IGZyb20gJy4vLi4vY29yZS90cmFja2VyL3RyYWNrZXInO1xuaW1wb3J0IHsgRGVidWdMZXZlbEVudW0gfSBmcm9tICcuLy4uL2NvcmUvdXRpbHMvY29uc29sZV93cmFwcGVyJztcbmltcG9ydCB7IEhUTUxMb2FkZXIgfSBmcm9tICcuLy4uL2NvcmUvdXRpbHMvaHRtbF9sb2FkZXInO1xuaW1wb3J0IHsgSURHZW5lcmF0b3IgfSBmcm9tICcuLy4uL2NvcmUvdXRpbHMvaWRfZ2VuZXJhdG9yJztcbmltcG9ydCB7IHdhaXRVbnRpbFJlYWR5IH0gZnJvbSAnLi8uLi9jb3JlL3V0aWxzL3JlYWR5JztcbmltcG9ydCB7IHNjZW5hcmlvcywgU2NlbmFyaW8gfSBmcm9tICcuLy4uL2NvcmUvdXRpbHMvc2NlbmFyaW9zJztcblxuY29uc3Qgc2V0dXAgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgd2FpdFVudGlsUmVhZHkoKTtcbiAgICBjb25zdCBzY2VuYXJpbyA9IHNjZW5hcmlvcy5maW5kKChzY2VuKSA9PiBzY2VuLnRhZyA9PT0gcGFyYW1zLnRhZyk7XG4gICAgaWYgKCFwYXJhbXMuc2FuZGJveCkge1xuICAgICAgICBpZiAoc2NlbmFyaW8gPT09IG51bGwgfHwgc2NlbmFyaW8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYWxlcnQoJ1RoaXMgSElUIGlzIGJyb2tlbiBhbmQgY2Fubm90IGJlIGNvbXBsZXRlZCBhdCB0aGlzIHRpbWUuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBUcmFja2VyLmxvYWRTY2VuYXJpbyhzY2VuYXJpbyBhcyBTY2VuYXJpbyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVHJhY2tlci5zdGFydCh7XG4gICAgICAgIGtleVByZWZpeDogJ2luZm9ybWF0aW9uLWZvcmFnaW5nJyxcbiAgICAgICAgYnVja2V0TmFtZTogJ2NzZS0yNTYtbG9nJyxcbiAgICAgICAgYWxsb3dTdWJtaXNzaW9uOiB7XG4gICAgICAgICAgICBhbGxvdygpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0QXJlYSA9IEQuaWQoJ3RleHQtYXJlYScpIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRleHRBcmVhLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleHRBcmVhLnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdZb3UgbXVzdCBmaWxsIG91dCB0aGUgdGV4dCBib3ggdG8gdHVybiB0aGlzIEhJVCBpbi4nO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnVGhlcmUgd2FzIGFuIGVycm9yIGZpbGwgb3V0IHRoZSBmb3JtIGFuZCB0cnkgYWdhaW4uJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJlU3VibWl0KCkge1xuICAgICAgICAgICAgICAgIGRhdGEuZGF0YS5yZXNwb25zZSA9IChELmlkKFxuICAgICAgICAgICAgICAgICAgICAndGV4dC1hcmVhJ1xuICAgICAgICAgICAgICAgICkgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBkZWJ1Z0xldmVsOiBEZWJ1Z0xldmVsRW51bS5OT05FLFxuXG4gICAgICAgIGFzeW5jIHNldHVwKCkge1xuICAgICAgICAgICAgLy8gY29uZmlndXJlIHJvdXRlclxuICAgICAgICAgICAgUm91dGVyLmRlZmF1bHRBbGxvd2FuY2VzT24oKTtcbiAgICAgICAgICAgIFJvdXRlci5jb25maWd1cmUoXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiBSb3V0ZXJNb2RlLlNUQU5EQVJEX0FMTE9XQU5DRVMsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU6IFJvdXRlck1vZHVsZS5BLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7IG1vZGU6IFJvdXRlck1vZGUuT0ZGLCBtb2R1bGU6IFJvdXRlck1vZHVsZS5GT1JNIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6IFJvdXRlck1vZGUuU1RBTkRBUkRfQUxMT1dBTkNFUyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZTogUm91dGVyTW9kdWxlLklNRyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICdmaWxlcy8nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgSGlzdG9yeS5zZXR1cCh3aW5kb3cubG9jYXRpb24uaHJlZiwgeyB3cmFwcGVyOiB0cnVlIH0pO1xuICAgICAgICAgICAgLy8gY29uZmlndXJlIGh0bWwgbG9hZGVyIHBvc3Qgb3BlcmF0aW9uXG4gICAgICAgICAgICBIVE1MTG9hZGVyLmZpbmlzaCgpO1xuICAgICAgICAgICAgSFRNTExvYWRlci5yZWdpc3RlclBvc3RMb2FkRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgSURHZW5lcmF0b3IucmVzZXQoKTtcbiAgICAgICAgICAgICAgICBJREdlbmVyYXRvci5hdHRhY2hJZHNUb0FsbEVsZW1lbnRzKCk7XG4gICAgICAgICAgICAgICAgUm91dGVyLnNldHVwKEVsZW1lbnRzLmh0bWxMb2MpO1xuICAgICAgICAgICAgICAgIFNjcm9sbC5wcm9taXNlKDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBjb25maWd1cmUgbGlzdGVuZXJzIG9uIGh0bWwgbG9jXG4gICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoRWxlbWVudHMuaHRtbExvYywgQWN0aW9uRW51bS5DTElDSywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBldiA9IGUgYXMgTW91c2VFdmVudDtcbiAgICAgICAgICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGV2LmNsaWVudFgsXG4gICAgICAgICAgICAgICAgICAgIHk6IGV2LmNsaWVudFksXG4gICAgICAgICAgICAgICAgICAgIGlkOiAoZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5pZCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIFRyYWNrZXIuZ2V0RXZlbnREaXNwYXRjaEZ1bmMoQWN0aW9uRW51bS5DTElDSykob2JqKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKEVsZW1lbnRzLmRvY3VtZW50LCAna2V5cHJlc3MnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV2ID0gZSBhcyBLZXlib2FyZEV2ZW50O1xuICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBldi5rZXksXG4gICAgICAgICAgICAgICAgICAgIGlkOiAoZXYuc3JjRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuaWQsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBUcmFja2VyLmdldEV2ZW50RGlzcGF0Y2hGdW5jKEFjdGlvbkVudW0uQlVUVE9OKShvYmopO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBTUEVDSUFMIENBU0U6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCBkb2VzIG5vdCBiZWhhdmUgdGhlIHNhbWUgd2F5IGFzIGRvY3VtZW50IHNvIHRoZSBiZWxvdyBmdW5jdGlvbiBtdXN0IGJlaGF2ZSBkaWZmZXJlbnRseSB0aGFuIHRoZSBsaXN0ZW5lcnMgYWJvdmUuXG4gICAgICAgICAgICBjb25zdCBzRWxlbSA9IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgYXMgRWxlbWVudDtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZHggPSBzRWxlbS5zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGR5ID0gc0VsZW0uc2Nyb2xsVG9wO1xuICAgICAgICAgICAgICAgIGNvbnN0IGR0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBNYXRoLmFicyhUcmFja2VyLmxhc3RQb3MueCAtIGR4KSA+IDEwIHx8XG4gICAgICAgICAgICAgICAgICAgIChNYXRoLmFicyhUcmFja2VyLmxhc3RQb3MueSAtIGR5KSA+IDEwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBkdGltZSAtIFRyYWNrZXIubGFzdFBvcy50aW1lID4gMTAwKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBUcmFja2VyLmxhc3RQb3MueCA9IGR4O1xuICAgICAgICAgICAgICAgICAgICBUcmFja2VyLmxhc3RQb3MueSA9IGR5O1xuICAgICAgICAgICAgICAgICAgICBUcmFja2VyLmxhc3RQb3MudGltZSA9IGR0aW1lO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmogPSB7IHg6IGR4LCB5OiBkeSB9O1xuICAgICAgICAgICAgICAgICAgICBUcmFja2VyLmdldEV2ZW50RGlzcGF0Y2hGdW5jKEFjdGlvbkVudW0uU0NST0xMKShvYmopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gY29uZmlndXJlIHRyYWNrZWQgZXZlbnRzXG4gICAgICAgICAgICBUcmFja2VyLnJlZ2lzdGVyRXZlbnQoQWN0aW9uRW51bS5ISVNUT1JZKTtcbiAgICAgICAgICAgIFRyYWNrZXIucmVnaXN0ZXJFdmVudChBY3Rpb25FbnVtLkJVVFRPTik7XG4gICAgICAgICAgICBUcmFja2VyLnJlZ2lzdGVyRXZlbnQoQWN0aW9uRW51bS5DTElDSyk7XG4gICAgICAgICAgICBUcmFja2VyLnJlZ2lzdGVyRXZlbnQoQWN0aW9uRW51bS5TQ1JPTEwpO1xuICAgICAgICAgICAgLy8gbG9hZCBmaXJzdCBwYWdlXG4gICAgICAgICAgICBhd2FpdCBSb3V0ZXIubG9hZCgnZmlsZXMvaW5kZXguaHRtbCcpO1xuICAgICAgICB9LFxuICAgIH0pO1xufTtcblxuc2V0dXAoKTtcbiJdfQ==
