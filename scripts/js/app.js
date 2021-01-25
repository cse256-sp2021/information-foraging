(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports=[
    {
        "context": " You are a parent considering sending your child to Washington University Nursery School. You’ve learned that the curriculum is play-based and you want to know how learning is incorporated into a play-based context. You have some ideas about how language learning might happen, but are less sure about math. ",
        "question": "Find some examples of how math learning is incorporated at Washington University Nursery School.",
        "tag": "math"
    },
    {
        "context": "You are investigating pre-school options for your 4 year old. Both you and your spouse work, so you need to fully understand what scheduling constraints each option involves. One of your schools of interest is the Washington University Nursery School.",
        "question": "When does school start and end each day? What is the longest period of time that your child can be there?",
        "tag": "school_day"
    },
    {
        "context": "You are investigating pre-school options for your 3.5 year old. You’ve been told that one of the hallmarks of a good program is teachers who have been there for a long time. You want your child to attend in the mornings only.",
        "question": "Which teachers would your child have and how long have they been at the school?",
        "tag": "teacher_tenure"
    },
    {
        "context": "You are starting to look at summer camp options and have heard good things about Washington University Nursery School for young children.",
        "question": "What are the daily camp hours? Are there any extended day opportunities?",
        "tag": "summer_camp"
    },
    {
        "context": "You are investigating pre-school options for your spirited 3 year old and want to understand their approach to discipline.",
        "question": "How do teachers at Washington University approach discipline?",
        "tag": "discipline"
    },
    {
        "context": "Your daughter is in the Teddy Bear class at Washington University Nursery School. She came home this week singing a song in Spanish about shapes, but you are pretty sure that she has some of the words wrong.",
        "question": "What are the correct lyrics?",
        "tag": "spanish_song"
    },
    {
        "context": "It is mid-December and you are thinking about things to do over your daughter's upcoming school break. She is 3 years old and attends the Washington University Nursery School and is in the Teddy Bear classroom. You are planning a trip to the library and want to check out some books that connect with something she is doing in school.",
        "question": "What are some potential book topics that relate to something that is going on in her classroom this week?",
        "tag": "books"
    },
    {
        "context": "You are a parent with a child who has just been accepted to attend as a full time student at the Washington University Nursery School. You want to accept the offer of admission.",
        "question": "Figure out what you need to do at this time to finalize your child’s place at the school.",
        "tag": "admission_2"
    },
    {
        "context": "You are a parent with a child who has just been accepted to attend as a full time student at the Washington University Nursery School. You need to pay one month of tuition as a deposit.",
        "question": "Find out how much one month of tuition is and whether or not it is possible to pay online.",
        "tag": "deposit"
    },
    {
        "context": "You are looking at Nursery Schools for your soon to be 3 year old. He has never been in school or daycare before and you are somewhat worried about the transition. You'd like to ensure that you'll be able to have strong communicationat his new school.",
        "question": "How does the Washington University Nursery School handle communicating with parents?",
        "tag": "communication"
    },
    {
        "context": "You are moving to St. Louis from Beijing and looking for a Pre-K program for your daughter, age 5. She is very close to her friends and you are worried that the move might be hard on her. She may need some extra support from her new teachers learning English, adapting to American culture, and making new friends.",
        "question": "How does the Washington University Nursery School staff approach providing extra help to students who need it?",
        "tag": "help"
    }
]

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('data loaded.');
var urlParams = new URL(window.location.href).searchParams;
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
            var allowed, qp, resp, _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        event.preventDefault();
                        allowed = allowSubmission.allow();
                        if (!(allowed === null)) return [3 /*break*/, 5];
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
                        return [4 /*yield*/, fetch(gate, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'x-api-key': k,
                                },
                                body: JSON.stringify({
                                    sandbox: q_params_1.params.sandbox,
                                    wustl_key: q_params_1.params.wustl_key,
                                    project: q_params_1.params.project,
                                    iteration: q_params_1.params.iteration,
                                    tag: q_params_1.params.tag,
                                    assignmentID: data_1.data.urlData.assignmentID,
                                    hitID: data_1.data.urlData.hitID,
                                    workerID: data_1.data.urlData.workerID,
                                    log: data_1.data.serialize(),
                                }),
                            })];
                    case 1:
                        resp = _e.sent();
                        console.log(resp.status);
                        _b = (_a = console).log;
                        return [4 /*yield*/, resp.json()];
                    case 2:
                        _b.apply(_a, [_e.sent()]);
                        if (!(resp.status !== 200)) return [3 /*break*/, 4];
                        _c = alert;
                        _d = 'You made a bad request with your submission. The server thinks that you made this error: ';
                        return [4 /*yield*/, resp.json()];
                    case 3:
                        _c.apply(void 0, [_d +
                                (_e.sent()).error]);
                        return [2 /*return*/];
                    case 4:
                        SubmitForm.elem.removeEventListener('submit', SubmitForm.submitFunc);
                        SubmitForm.elem.submit();
                        return [3 /*break*/, 6];
                    case 5:
                        alert(allowed);
                        _e.label = 6;
                    case 6: return [2 /*return*/];
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
            e.preventDefault();
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
        var sub = scen.context;
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
        elements_1.Elements.mtScenarioContext.innerText = scen.context;
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
var qParams = new URL(window.location.href).searchParams;
exports.params = {
    wustl_key: '',
    sandbox: false,
    project: '',
    iteration: 0,
    tag: '',
};
try {
    qParams.forEach(console.log);
    if (['wustl_key', 'sandbox', 'project', 'iteration', 'tag'].every(function (key) {
        console.log('key: ' + qParams.has(key));
        return qParams.has(key);
    })) {
        exports.params.wustl_key = qParams.get('wustl_key');
        exports.params.sandbox = qParams.get('sandbox') === 'true';
        exports.params.project = qParams.get('project');
        exports.params.iteration = parseInt(qParams.get('iteration'), 10);
        exports.params.tag = qParams.get('tag');
    }
    else {
        console.log('missing query params');
        alert('This HIT is missing neccessary metadata, sorry for the inconvenience. Please contact the Requester as this is not intended to happen.');
    }
}
catch (e) {
    console.log(e);
    alert(e);
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
window.scenarios = exports.scenarios;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY2VuYXJpb3Mvc2NlbmFyaW9zLmpzb24iLCJzY3JpcHRzL3RzL2NvcmUvZGF0YS1sb2cvZGF0YS50cyIsInNjcmlwdHMvdHMvY29yZS9kYXRhLWxvZy9ldmVudC50cyIsInNjcmlwdHMvdHMvY29yZS9kYXRhLWxvZy9yZWNlaXZlci50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vYmFubmVyLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9kb2N1bWVudC50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vZWxlbWVudHMudHMiLCJzY3JpcHRzL3RzL2NvcmUvZG9tL2h0bWxfbG9jLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9tb2RhbC50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vc2Nyb2xsLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9zdWJtaXRfZm9ybS50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vdHJhY2tlcl9lbGVtcy50cyIsInNjcmlwdHMvdHMvY29yZS9yb3V0ZXIvaGlzdG9yeS50cyIsInNjcmlwdHMvdHMvY29yZS9yb3V0ZXIvcm91dGVyLnRzIiwic2NyaXB0cy90cy9jb3JlL3RyYWNrZXIvdHJhY2tlci50cyIsInNjcmlwdHMvdHMvY29yZS91dGlscy9jb25zb2xlX3dyYXBwZXIudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvZnVuY3MudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvaHRtbF9sb2FkZXIudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvaWRfZ2VuZXJhdG9yLnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3FfcGFyYW1zLnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3JlYWR5LnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3NjZW5hcmlvcy50cyIsInNjcmlwdHMvdHMvZHluYW1pYy1kb20vYWNjb3JkaW9uLnRzIiwic2NyaXB0cy90cy9keW5hbWljLWRvbS9kby1zb21ldGhpbmcuanMiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL2R5bmFtaWMtZG9tLnRzIiwic2NyaXB0cy90cy9keW5hbWljLWRvbS9odG1sLWltcG9ydHMudHMiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL2h0bWwvZm9vdGVyLmh0bWwiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL2h0bWwvaGVhZGVyLmh0bWwiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL3NsaWRlc2hvdy50cyIsInNjcmlwdHMvdHMvdHJhY2tlci90cmFja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN4REEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQVM1QixJQUFNLFNBQVMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQztBQUVoRCxRQUFBLE9BQU8sR0FBaUI7SUFDakMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxRQUFRLEVBQUU7SUFDekIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQzNDLEtBQUssRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUM3QixRQUFRLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFD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R0FBRyxFQUFFLENBQUM7Z0RBQ3ZCLGlCQUFPLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7Z0RBQzdCLElBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7Z0RBQzdCLGlCQUFPLENBQUMsb0JBQW9CLHVCQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDOzZDQUN4RDt3Q0FDTCxDQUFDLENBQUMsQ0FBQzt3Q0FDSCwyQkFBMkI7d0NBQzNCLGlCQUFPLENBQUMsYUFBYSx5QkFBb0IsQ0FBQzt3Q0FDMUMsaUJBQU8sQ0FBQyxhQUFhLHVCQUFtQixDQUFDO3dDQUN6QyxpQkFBTyxDQUFDLGFBQWEscUJBQWtCLENBQUM7d0NBQ3hDLGlCQUFPLENBQUMsYUFBYSx1QkFBbUIsQ0FBQzt3Q0FDekMsa0JBQWtCO3dDQUNsQixxQkFBTSxlQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUE7O3dDQURyQyxrQkFBa0I7d0NBQ2xCLFNBQXFDLENBQUM7Ozs7O3FCQUN6QztpQkFDSixDQUFDLENBQUM7Ozs7S0FDTixDQUFDO0FBRUYsS0FBSyxFQUFFLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJtb2R1bGUuZXhwb3J0cz1bXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiIFlvdSBhcmUgYSBwYXJlbnQgY29uc2lkZXJpbmcgc2VuZGluZyB5b3VyIGNoaWxkIHRvIFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbC4gWW914oCZdmUgbGVhcm5lZCB0aGF0IHRoZSBjdXJyaWN1bHVtIGlzIHBsYXktYmFzZWQgYW5kIHlvdSB3YW50IHRvIGtub3cgaG93IGxlYXJuaW5nIGlzIGluY29ycG9yYXRlZCBpbnRvIGEgcGxheS1iYXNlZCBjb250ZXh0LiBZb3UgaGF2ZSBzb21lIGlkZWFzIGFib3V0IGhvdyBsYW5ndWFnZSBsZWFybmluZyBtaWdodCBoYXBwZW4sIGJ1dCBhcmUgbGVzcyBzdXJlIGFib3V0IG1hdGguIFwiLFxyXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJGaW5kIHNvbWUgZXhhbXBsZXMgb2YgaG93IG1hdGggbGVhcm5pbmcgaXMgaW5jb3Jwb3JhdGVkIGF0IFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbC5cIixcclxuICAgICAgICBcInRhZ1wiOiBcIm1hdGhcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvbnRleHRcIjogXCJZb3UgYXJlIGludmVzdGlnYXRpbmcgcHJlLXNjaG9vbCBvcHRpb25zIGZvciB5b3VyIDQgeWVhciBvbGQuIEJvdGggeW91IGFuZCB5b3VyIHNwb3VzZSB3b3JrLCBzbyB5b3UgbmVlZCB0byBmdWxseSB1bmRlcnN0YW5kIHdoYXQgc2NoZWR1bGluZyBjb25zdHJhaW50cyBlYWNoIG9wdGlvbiBpbnZvbHZlcy4gT25lIG9mIHlvdXIgc2Nob29scyBvZiBpbnRlcmVzdCBpcyB0aGUgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sLlwiLFxyXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJXaGVuIGRvZXMgc2Nob29sIHN0YXJ0IGFuZCBlbmQgZWFjaCBkYXk/IFdoYXQgaXMgdGhlIGxvbmdlc3QgcGVyaW9kIG9mIHRpbWUgdGhhdCB5b3VyIGNoaWxkIGNhbiBiZSB0aGVyZT9cIixcclxuICAgICAgICBcInRhZ1wiOiBcInNjaG9vbF9kYXlcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvbnRleHRcIjogXCJZb3UgYXJlIGludmVzdGlnYXRpbmcgcHJlLXNjaG9vbCBvcHRpb25zIGZvciB5b3VyIDMuNSB5ZWFyIG9sZC4gWW914oCZdmUgYmVlbiB0b2xkIHRoYXQgb25lIG9mIHRoZSBoYWxsbWFya3Mgb2YgYSBnb29kIHByb2dyYW0gaXMgdGVhY2hlcnMgd2hvIGhhdmUgYmVlbiB0aGVyZSBmb3IgYSBsb25nIHRpbWUuIFlvdSB3YW50IHlvdXIgY2hpbGQgdG8gYXR0ZW5kIGluIHRoZSBtb3JuaW5ncyBvbmx5LlwiLFxyXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJXaGljaCB0ZWFjaGVycyB3b3VsZCB5b3VyIGNoaWxkIGhhdmUgYW5kIGhvdyBsb25nIGhhdmUgdGhleSBiZWVuIGF0IHRoZSBzY2hvb2w/XCIsXHJcbiAgICAgICAgXCJ0YWdcIjogXCJ0ZWFjaGVyX3RlbnVyZVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgc3RhcnRpbmcgdG8gbG9vayBhdCBzdW1tZXIgY2FtcCBvcHRpb25zIGFuZCBoYXZlIGhlYXJkIGdvb2QgdGhpbmdzIGFib3V0IFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbCBmb3IgeW91bmcgY2hpbGRyZW4uXCIsXHJcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIldoYXQgYXJlIHRoZSBkYWlseSBjYW1wIGhvdXJzPyBBcmUgdGhlcmUgYW55IGV4dGVuZGVkIGRheSBvcHBvcnR1bml0aWVzP1wiLFxyXG4gICAgICAgIFwidGFnXCI6IFwic3VtbWVyX2NhbXBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvbnRleHRcIjogXCJZb3UgYXJlIGludmVzdGlnYXRpbmcgcHJlLXNjaG9vbCBvcHRpb25zIGZvciB5b3VyIHNwaXJpdGVkIDMgeWVhciBvbGQgYW5kIHdhbnQgdG8gdW5kZXJzdGFuZCB0aGVpciBhcHByb2FjaCB0byBkaXNjaXBsaW5lLlwiLFxyXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJIb3cgZG8gdGVhY2hlcnMgYXQgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IGFwcHJvYWNoIGRpc2NpcGxpbmU/XCIsXHJcbiAgICAgICAgXCJ0YWdcIjogXCJkaXNjaXBsaW5lXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiWW91ciBkYXVnaHRlciBpcyBpbiB0aGUgVGVkZHkgQmVhciBjbGFzcyBhdCBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wuIFNoZSBjYW1lIGhvbWUgdGhpcyB3ZWVrIHNpbmdpbmcgYSBzb25nIGluIFNwYW5pc2ggYWJvdXQgc2hhcGVzLCBidXQgeW91IGFyZSBwcmV0dHkgc3VyZSB0aGF0IHNoZSBoYXMgc29tZSBvZiB0aGUgd29yZHMgd3JvbmcuXCIsXHJcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIldoYXQgYXJlIHRoZSBjb3JyZWN0IGx5cmljcz9cIixcclxuICAgICAgICBcInRhZ1wiOiBcInNwYW5pc2hfc29uZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29udGV4dFwiOiBcIkl0IGlzIG1pZC1EZWNlbWJlciBhbmQgeW91IGFyZSB0aGlua2luZyBhYm91dCB0aGluZ3MgdG8gZG8gb3ZlciB5b3VyIGRhdWdodGVyJ3MgdXBjb21pbmcgc2Nob29sIGJyZWFrLiBTaGUgaXMgMyB5ZWFycyBvbGQgYW5kIGF0dGVuZHMgdGhlIFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbCBhbmQgaXMgaW4gdGhlIFRlZGR5IEJlYXIgY2xhc3Nyb29tLiBZb3UgYXJlIHBsYW5uaW5nIGEgdHJpcCB0byB0aGUgbGlicmFyeSBhbmQgd2FudCB0byBjaGVjayBvdXQgc29tZSBib29rcyB0aGF0IGNvbm5lY3Qgd2l0aCBzb21ldGhpbmcgc2hlIGlzIGRvaW5nIGluIHNjaG9vbC5cIixcclxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiV2hhdCBhcmUgc29tZSBwb3RlbnRpYWwgYm9vayB0b3BpY3MgdGhhdCByZWxhdGUgdG8gc29tZXRoaW5nIHRoYXQgaXMgZ29pbmcgb24gaW4gaGVyIGNsYXNzcm9vbSB0aGlzIHdlZWs/XCIsXHJcbiAgICAgICAgXCJ0YWdcIjogXCJib29rc1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgYSBwYXJlbnQgd2l0aCBhIGNoaWxkIHdobyBoYXMganVzdCBiZWVuIGFjY2VwdGVkIHRvIGF0dGVuZCBhcyBhIGZ1bGwgdGltZSBzdHVkZW50IGF0IHRoZSBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wuIFlvdSB3YW50IHRvIGFjY2VwdCB0aGUgb2ZmZXIgb2YgYWRtaXNzaW9uLlwiLFxyXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJGaWd1cmUgb3V0IHdoYXQgeW91IG5lZWQgdG8gZG8gYXQgdGhpcyB0aW1lIHRvIGZpbmFsaXplIHlvdXIgY2hpbGTigJlzIHBsYWNlIGF0IHRoZSBzY2hvb2wuXCIsXHJcbiAgICAgICAgXCJ0YWdcIjogXCJhZG1pc3Npb25fMlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgYSBwYXJlbnQgd2l0aCBhIGNoaWxkIHdobyBoYXMganVzdCBiZWVuIGFjY2VwdGVkIHRvIGF0dGVuZCBhcyBhIGZ1bGwgdGltZSBzdHVkZW50IGF0IHRoZSBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wuIFlvdSBuZWVkIHRvIHBheSBvbmUgbW9udGggb2YgdHVpdGlvbiBhcyBhIGRlcG9zaXQuXCIsXHJcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIkZpbmQgb3V0IGhvdyBtdWNoIG9uZSBtb250aCBvZiB0dWl0aW9uIGlzIGFuZCB3aGV0aGVyIG9yIG5vdCBpdCBpcyBwb3NzaWJsZSB0byBwYXkgb25saW5lLlwiLFxyXG4gICAgICAgIFwidGFnXCI6IFwiZGVwb3NpdFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgbG9va2luZyBhdCBOdXJzZXJ5IFNjaG9vbHMgZm9yIHlvdXIgc29vbiB0byBiZSAzIHllYXIgb2xkLiBIZSBoYXMgbmV2ZXIgYmVlbiBpbiBzY2hvb2wgb3IgZGF5Y2FyZSBiZWZvcmUgYW5kIHlvdSBhcmUgc29tZXdoYXQgd29ycmllZCBhYm91dCB0aGUgdHJhbnNpdGlvbi4gWW91J2QgbGlrZSB0byBlbnN1cmUgdGhhdCB5b3UnbGwgYmUgYWJsZSB0byBoYXZlIHN0cm9uZyBjb21tdW5pY2F0aW9uYXQgaGlzIG5ldyBzY2hvb2wuXCIsXHJcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIkhvdyBkb2VzIHRoZSBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wgaGFuZGxlIGNvbW11bmljYXRpbmcgd2l0aCBwYXJlbnRzP1wiLFxyXG4gICAgICAgIFwidGFnXCI6IFwiY29tbXVuaWNhdGlvblwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgbW92aW5nIHRvIFN0LiBMb3VpcyBmcm9tIEJlaWppbmcgYW5kIGxvb2tpbmcgZm9yIGEgUHJlLUsgcHJvZ3JhbSBmb3IgeW91ciBkYXVnaHRlciwgYWdlIDUuIFNoZSBpcyB2ZXJ5IGNsb3NlIHRvIGhlciBmcmllbmRzIGFuZCB5b3UgYXJlIHdvcnJpZWQgdGhhdCB0aGUgbW92ZSBtaWdodCBiZSBoYXJkIG9uIGhlci4gU2hlIG1heSBuZWVkIHNvbWUgZXh0cmEgc3VwcG9ydCBmcm9tIGhlciBuZXcgdGVhY2hlcnMgbGVhcm5pbmcgRW5nbGlzaCwgYWRhcHRpbmcgdG8gQW1lcmljYW4gY3VsdHVyZSwgYW5kIG1ha2luZyBuZXcgZnJpZW5kcy5cIixcclxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiSG93IGRvZXMgdGhlIFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbCBzdGFmZiBhcHByb2FjaCBwcm92aWRpbmcgZXh0cmEgaGVscCB0byBzdHVkZW50cyB3aG8gbmVlZCBpdD9cIixcclxuICAgICAgICBcInRhZ1wiOiBcImhlbHBcIlxyXG4gICAgfVxyXG5dXHJcbiIsImltcG9ydCB7IFRyYWNrZXJFdmVudCB9IGZyb20gJy4vZXZlbnQnO1xuY29uc29sZS5sb2coJ2RhdGEgbG9hZGVkLicpO1xuZXhwb3J0IGludGVyZmFjZSBNdHVya1VSTERhdGEge1xuICAgIHJhdzogc3RyaW5nO1xuICAgIGFzc2lnbm1lbnRJRDogc3RyaW5nIHwgbnVsbDtcbiAgICBoaXRJRDogc3RyaW5nIHwgbnVsbDtcbiAgICB3b3JrZXJJRDogc3RyaW5nIHwgbnVsbDtcbiAgICBzdWJtaXRUbzogc3RyaW5nIHwgbnVsbDtcbn1cblxuY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZikuc2VhcmNoUGFyYW1zO1xuXG5leHBvcnQgY29uc3QgdXJsRGF0YTogTXR1cmtVUkxEYXRhID0ge1xuICAgIHJhdzogdXJsUGFyYW1zLnRvU3RyaW5nKCksXG4gICAgYXNzaWdubWVudElEOiB1cmxQYXJhbXMuZ2V0KCdhc3NpZ25tZW50SWQnKSxcbiAgICBoaXRJRDogdXJsUGFyYW1zLmdldCgnaGl0SWQnKSxcbiAgICB3b3JrZXJJRDogdXJsUGFyYW1zLmdldCgnd29ya2VySWQnKSxcbiAgICBzdWJtaXRUbzogdXJsUGFyYW1zLmdldCgndHVya1N1Ym1pdFRvJyksXG59O1xuXG5leHBvcnQgY2xhc3MgRGF0YSB7XG4gICAgcHVibGljIGxvZ3M6IHsgW2V2ZW50VHlwZTogc3RyaW5nXTogVHJhY2tlckV2ZW50W10gfSA9IHt9O1xuICAgIHB1YmxpYyBkYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgcHVibGljIGVycm9yczogYW55W10gPSBbXTtcbiAgICBwdWJsaWMgdXJsRGF0YTogTXR1cmtVUkxEYXRhO1xuXG4gICAgY29uc3RydWN0b3IocmF3TXR1cmtVUkxEYXRhOiBNdHVya1VSTERhdGEpIHtcbiAgICAgICAgdGhpcy51cmxEYXRhID0gcmF3TXR1cmtVUkxEYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXJpYWxpemUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGRhdGEgPSBuZXcgRGF0YSh1cmxEYXRhKTtcblxuT2JqZWN0LmFzc2lnbih3aW5kb3csIHsgZGF0YSB9KTtcbiIsImltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tIFwiLi4vdXRpbHMvY29uc29sZV93cmFwcGVyXCI7XG5pbXBvcnQgeyBub3cgfSBmcm9tIFwiLi4vdXRpbHMvZnVuY3NcIjtcbmxvZyhcImV2ZW50IGxvYWRlZC5cIiwgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGNvbnN0IGVudW0gQWN0aW9uRW51bSB7XG4gIENMSUNLID0gXCJjbGlja1wiLFxuICBCVVRUT04gPSBcImJ1dHRvblwiLFxuICBTQ1JPTEwgPSBcInNjcm9sbFwiLFxuICBISVNUT1JZID0gXCJoaXN0b3J5XCIsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tlckV2ZW50IHtcbiAgYWN0aW9uOiBzdHJpbmc7XG4gIHRpbWU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdFRvVHJhY2tlckV2ZW50KG9iajogYW55LCBhY3Rpb246IHN0cmluZykge1xuICBvYmouYWN0aW9uID0gYWN0aW9uO1xuICBvYmoudGltZSA9IG5vdygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUcmFja2VyRXZlbnQob2JqOiBhbnkpOiBvYmogaXMgVHJhY2tlckV2ZW50IHtcbiAgcmV0dXJuIG9iai5hY3Rpb24gIT09IHVuZGVmaW5lZCAmJiBvYmoudGltZSAhPT0gdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY2xhc3MgQmFzZVRyYWNrZXJFdmVudDxUPiBpbXBsZW1lbnRzIFRyYWNrZXJFdmVudCB7XG4gIHB1YmxpYyBjdXN0RXY6IEN1c3RvbUV2ZW50O1xuICBwdWJsaWMgYWN0aW9uOiBzdHJpbmc7XG4gIHB1YmxpYyB0aW1lOiBudW1iZXI7XG4gIGNvbnN0cnVjdG9yKGFjdGlvbjogc3RyaW5nLCBldmVudEluaXREaWN0PzogQ3VzdG9tRXZlbnRJbml0PFQ+IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5jdXN0RXYgPSBuZXcgQ3VzdG9tRXZlbnQoYWN0aW9uLCBldmVudEluaXREaWN0KTtcbiAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcbiAgICB0aGlzLnRpbWUgPSBub3coKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGV0YWlsKCkge1xuICAgIHJldHVybiB0aGlzLmN1c3RFdi5kZXRhaWw7XG4gIH1cbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtY2xhc3Nlcy1wZXItZmlsZVxuZXhwb3J0IGNsYXNzIENsaWNrRXZlbnQgZXh0ZW5kcyBCYXNlVHJhY2tlckV2ZW50PHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGlkOiBzdHJpbmc7XG59PiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHg6IG51bWJlcixcbiAgICB5OiBudW1iZXIsXG4gICAgaWQ6IHN0cmluZyxcbiAgICBldmVudEluaXREaWN0PzpcbiAgICAgIHwgQ3VzdG9tRXZlbnRJbml0PHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IGlkOiBzdHJpbmcgfT5cbiAgICAgIHwgdW5kZWZpbmVkXG4gICkge1xuICAgIHN1cGVyKEFjdGlvbkVudW0uQ0xJQ0ssIGV2ZW50SW5pdERpY3QpO1xuICAgIHRoaXMuZGV0YWlsLnggPSB4O1xuICAgIHRoaXMuZGV0YWlsLnkgPSB5O1xuICAgIHRoaXMuZGV0YWlsLmlkID0gaWQ7XG4gIH1cbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtY2xhc3Nlcy1wZXItZmlsZVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkV2ZW50IGV4dGVuZHMgQmFzZVRyYWNrZXJFdmVudDx7IGtleTogc3RyaW5nOyBpZDogc3RyaW5nIH0+IHtcbiAgY29uc3RydWN0b3IoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgaWQ6IHN0cmluZyxcbiAgICBldmVudEluaXREaWN0PzogQ3VzdG9tRXZlbnRJbml0PHsga2V5OiBzdHJpbmc7IGlkOiBzdHJpbmcgfT4gfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgc3VwZXIoQWN0aW9uRW51bS5DTElDSywgZXZlbnRJbml0RGljdCk7XG4gICAgdGhpcy5kZXRhaWwua2V5ID0ga2V5O1xuICAgIHRoaXMuZGV0YWlsLmlkID0gaWQ7XG4gIH1cbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtY2xhc3Nlcy1wZXItZmlsZVxuZXhwb3J0IGNsYXNzIEhpc3RvcnlFdmVudCBleHRlbmRzIEJhc2VUcmFja2VyRXZlbnQ8e1xuICB1cmw6IHN0cmluZztcbiAgZXh0cmE/OiBhbnk7XG59PiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGV4dHJhPzogYW55LFxuICAgIGV2ZW50SW5pdERpY3Q/OiBDdXN0b21FdmVudEluaXQ8eyB1cmw6IHN0cmluZyB9PiB8IHVuZGVmaW5lZFxuICApIHtcbiAgICBzdXBlcihBY3Rpb25FbnVtLkhJU1RPUlksIGV2ZW50SW5pdERpY3QpO1xuICAgIHRoaXMuZGV0YWlsLnVybCA9IHVybDtcbiAgICB0aGlzLmRldGFpbC5leHRyYSA9IGV4dHJhO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlclwiO1xuaW1wb3J0IHsgaXNUcmFja2VyRXZlbnQsIFRyYWNrZXJFdmVudCB9IGZyb20gXCIuL2V2ZW50XCI7XG5sb2coXCJyZWNlaXZlciBsb2FkZWQuXCIsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbmV4cG9ydCBjbGFzcyBFdmVudFJlY2VpdmVyIHtcbiAgcHJpdmF0ZSBtYXAgPSBuZXcgTWFwPHN0cmluZywgKGV2ZW50OiBUcmFja2VyRXZlbnQpID0+IHZvaWQ+KCk7XG4gIHByaXZhdGUgZW1pdHRlciA9IG5ldyBFdmVudFRhcmdldCgpO1xuXG4gIHB1YmxpYyByZWdpc3RlcihldmVudFR5cGU6IHN0cmluZywgY2FsbGJhY2s/OiAoZXZlbnQ6IFRyYWNrZXJFdmVudCkgPT4gdm9pZCkge1xuICAgIHRoaXMuZW1pdHRlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgY29uc3QgdHJhY2tFdiA9ICgoZXZlbnQgYXMgdW5rbm93bikgYXMgQ3VzdG9tRXZlbnQpXG4gICAgICAgIC5kZXRhaWwgYXMgVHJhY2tlckV2ZW50O1xuICAgICAgaWYgKGlzVHJhY2tlckV2ZW50KHRyYWNrRXYpICYmIGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKHRyYWNrRXYpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgdGhpcy5tYXAuc2V0KGV2ZW50VHlwZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkb0V2ZW50KGV2ZW50OiBUcmFja2VyRXZlbnQpIHtcbiAgICBjb25zdCBjYWxsYmFjayA9IHRoaXMubWFwLmdldChcIlwiICsgZXZlbnQuYWN0aW9uKTtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuLi9yb3V0ZXIvcm91dGVyXCI7XG5pbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlclwiO1xuaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gXCIuLy4uL3JvdXRlci9oaXN0b3J5XCI7XG5pbXBvcnQgeyBEIH0gZnJvbSBcIi4vZG9jdW1lbnRcIjtcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSBcIi4vZWxlbWVudHNcIjtcbmxvZyhcImJhbm5lciBsb2FkZWQuXCIsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbmV4cG9ydCBjbGFzcyBUb3BCYW5uZXIge1xuICBwdWJsaWMgc3RhdGljIHNob3coKSB7XG4gICAgVG9wQmFubmVyLnNob3dpbmcgPSB0cnVlO1xuICAgIEQuZGlzcGxheShFbGVtZW50cy5kZFVwLCB0cnVlKTtcbiAgICBELmRpc3BsYXkoRWxlbWVudHMuZGREb3duLCBmYWxzZSk7XG4gICAgRC5kaXNwbGF5KEVsZW1lbnRzLmRkQ29udGVudCwgdHJ1ZSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGhpZGUoKSB7XG4gICAgVG9wQmFubmVyLnNob3dpbmcgPSBmYWxzZTtcbiAgICBELmRpc3BsYXkoRWxlbWVudHMuZGREb3duLCB0cnVlKTtcbiAgICBELmRpc3BsYXkoRWxlbWVudHMuZGRVcCwgZmFsc2UpO1xuICAgIEQuZGlzcGxheShFbGVtZW50cy5kZENvbnRlbnQsIGZhbHNlKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZG9EaXNwbGF5Q2hhbmdlKCkge1xuICAgIFRvcEJhbm5lci5zaG93aW5nID8gVG9wQmFubmVyLmhpZGUoKSA6IFRvcEJhbm5lci5zaG93KCk7XG4gIH1cbiAgcHVibGljIHN0YXRpYyBzZXR1cCgpIHtcbiAgICBELmFkZEV2ZW50TGlzdGVuZXIoRWxlbWVudHMuZGRBcnJvdywgXCJjbGlja1wiLCBUb3BCYW5uZXIuZG9EaXNwbGF5Q2hhbmdlKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHNob3dpbmcgPSB0cnVlO1xufVxuXG5ELmFkZEV2ZW50TGlzdGVuZXIoXCJtdHVyay10b3AtYmFubmVyLWJhY2tcIiwgXCJjbGlja1wiLCAoZSkgPT4ge1xuICBpZiAoSGlzdG9yeS5jYW5CYWNrd2FyZCgpKSB7XG4gICAgUm91dGVyLmxvYWRXaXRoUGF0aFByZWZpeChIaXN0b3J5LmJhY2t3YXJkKCkpO1xuICB9IGVsc2Uge1xuICAgIGFsZXJ0KFwiVGhlcmUgaXMgbm8gcGFnZSBoaXN0b3J5IHRvIGdvIGJhY2sgZm9yIGF0IHRoaXMgdGltZSFcIik7XG4gIH1cbn0pO1xuIiwiaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGVycm9yLCBsb2cgfSBmcm9tIFwiLi8uLi91dGlscy9jb25zb2xlX3dyYXBwZXJcIjtcbmxvZyhcImRvY3VtZW50IGxvYWRlZC5cIiwgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGNsYXNzIEQge1xuICBwdWJsaWMgc3RhdGljIGRvYzogRG9jdW1lbnQgPSBkb2N1bWVudDtcblxuICBwdWJsaWMgc3RhdGljIGVsZW0oZWxlbTogRWxlbWVudCB8IHN0cmluZyk6IEVsZW1lbnQge1xuICAgIGlmICh0eXBlb2YgZWxlbSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuIEQuaWQoZWxlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbGVtIGFzIEVsZW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkaXNwbGF5KGVsZW06IEVsZW1lbnQgfCBzdHJpbmcsIHNob3c6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBlbGVtID0gRC5lbGVtKGVsZW0pO1xuICAgIGlmIChzaG93KSB7XG4gICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJub25lXCIpO1xuICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzcGxheVwiKTtcbiAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcIm5vbmVcIik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpZChpZDogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBELmRvYy5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgaWYgKGVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRWxlbWVudCB3YXMgbm90IGZvdW5kLCBpZDogPCR7aWR9Pi5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBzdGF0aWMgY2xheihjbGF6OiBzdHJpbmcpOiBIVE1MQ29sbGVjdGlvbk9mPEVsZW1lbnQ+IHtcbiAgICByZXR1cm4gRC5kb2MuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGF6KTtcbiAgfVxuICBwdWJsaWMgc3RhdGljIHRhZyh0YWc6IHN0cmluZyk6IEhUTUxDb2xsZWN0aW9uT2Y8RWxlbWVudD4ge1xuICAgIHJldHVybiBELmRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWcpO1xuICB9XG4gIHB1YmxpYyBzdGF0aWMgaW1hZ2UoaWQ6IHN0cmluZywgdXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBlcnJvcigoKSA9PiBELmlkKGlkKS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdXJsKSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGFkZEV2ZW50TGlzdGVuZXIoXG4gICAgZWxlbTogRWxlbWVudCB8IHN0cmluZyxcbiAgICB0eXBlOiBzdHJpbmcsXG4gICAgbGlzdGVuZXI6IChlOiBFdmVudCkgPT4gYW55XG4gICkge1xuICAgIGVsZW0gPSB0aGlzLmVsZW0oZWxlbSk7XG4gICAgY29uc3Qgd3JhcHBlckZ1bmMgPSAoZTogRXZlbnQpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxpc3RlbmVyKGUpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIChlbGVtIGFzIEVsZW1lbnQpLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgd3JhcHBlckZ1bmMpO1xuICAgIHJldHVybiB3cmFwcGVyRnVuYztcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZWFjaChlbGVtOiBFbGVtZW50IHwgc3RyaW5nLCBhcHBseTogKG5vZGU6IEVsZW1lbnQpID0+IGFueSkge1xuICAgIGVsZW0gPSB0aGlzLmVsZW0oZWxlbSk7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBlbGVtLmNoaWxkcmVuO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFwcGx5KGNoaWxkcmVuW2ldKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGVhY2hSZWN1cihcbiAgICBlbGVtOiBFbGVtZW50IHwgc3RyaW5nLFxuICAgIGFwcGx5OiAobm9kZTogRWxlbWVudCkgPT4gYW55XG4gICkge1xuICAgIGVsZW0gPSB0aGlzLmVsZW0oZWxlbSk7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBlbGVtLmNoaWxkcmVuO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBhcHBseShjaGlsZCk7XG4gICAgICBELmVhY2hSZWN1cihjaGlsZCwgYXBwbHkpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlPEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXA+KFxuICAgIHRhZ05hbWU6IEssXG4gICAgb3B0aW9ucz86IEVsZW1lbnRDcmVhdGlvbk9wdGlvbnNcbiAgKTogSFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lLCBvcHRpb25zKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gJy4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlcic7XG5pbXBvcnQgeyBEIH0gZnJvbSAnLi9kb2N1bWVudCc7XG5sb2coJ2VsZW1lbnQgbG9hZGVkLicsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbi8qKlxuICogVGhlc2UgYXJlIGVsZW1lbnRzIHRoYXQgYXJlIGluIGV2ZXJ5IHNpbmdsZSBwcm9qZWN0LiBFdmVuIGlmIHRoZXkgYXJlIG5vdCB1c2VkIHRoZXkgc2hvdWxkXG4gKiBiZSBwbGFjZSBpbiB0aGUgcHJvamVjdCBhbmQgZGlzcGxheSBzaG91bGQgYmUgc2V0IHRvIG5vbmUuIFRoaXMgc2ltcGxpZmllcyBjb25maWd1cmF0aW9uXG4gKiBhbmQgc29tZSBjb21tb24gZnVuY3Rpb25zIGFuZCBhbGxvd3MgbGVzcyBudWxsIGNoZWNrcyB0byBiZSBwZXJmb3JtZWQgb3ZlcmFsbC4gSWYgdGhlXG4gKiBlbGVtZW50IGRvZXMgbm90IGV4aXN0IGF0IHJ1biB0aW1lIGFuIGVtcHR5IGRpdiB3aXRoIHRoYXQgaWQgaXMgY3JlYXRlZCBhbmQgaXRzIGRpc3BsYXlcbiAqIGlzIHNldCB0byBub25lIHRoZW4gYXBwZW5kZWQgdG8gdGhlIGJvZHkuXG4gKi9cblxuLyoqXG4gKiBBdHRlbXB0cyB0byBnZXQgYW4gZWxlbWVudCwgaWYgdW5zdWNjZXNzZnVsLCBjcmVhdGVzIGRpdiB3aXRoIGlkIGFuZCBhcHBlbmRzIHRvIGJvZHkuXG4gKlxuICogQHBhcmFtIGlkIC0gdGhlIGlkIG9mIHRoZSBlbGVtZW50IHRvIHJldHJpZXZlLlxuICovXG5mdW5jdGlvbiBtYWtlRWxlbUlmTm90RXhpc3QoaWQ6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgICBsZXQgZWxlbTtcbiAgICB0cnkge1xuICAgICAgICBlbGVtID0gRC5pZChpZCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGVsZW0gPSBELmNyZWF0ZSgnZGl2Jyk7XG4gICAgICAgIGVsZW0uaWQgPSBpZDtcbiAgICAgICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChlbGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW07XG59XG5cbi8qKlxuICogQ29tbW9ubHkgYWNjZXNzZWQgZWxlbWVudHMsIGFsbG93cyBmb3IgY2xlYXJlciBkb20gbWFuaXAgb24gdGhlc2UgZWxlbWVudHMuXG4gKi9cbmV4cG9ydCBjb25zdCBFbGVtZW50cyA9IHtcbiAgICBkb2N1bWVudDogRC5kb2MuZG9jdW1lbnRFbGVtZW50LFxuICAgIHdyYXBwZXI6IG1ha2VFbGVtSWZOb3RFeGlzdCgnd3JhcHBlcicpLFxuICAgIGh0bWxMb2M6IG1ha2VFbGVtSWZOb3RFeGlzdCgnaHRtbC1sb2MnKSxcbiAgICBpbm5lckJvZHk6IG1ha2VFbGVtSWZOb3RFeGlzdCgnaW5uZXItYm9keScpLFxuICAgIGRkRG93bjogbWFrZUVsZW1JZk5vdEV4aXN0KCdtdHVyay10b3AtYmFubmVyLWRyb3AtZG93bi1idXR0b24nKSxcbiAgICBkZFVwOiBtYWtlRWxlbUlmTm90RXhpc3QoJ210dXJrLXRvcC1iYW5uZXItY29sbGFwc2UtYnV0dG9uJyksXG4gICAgZGRDb250ZW50OiBtYWtlRWxlbUlmTm90RXhpc3QoJ210dXJrLXRvcC1iYW5uZXItZHJvcC1kb3duLWNvbnRlbnQnKSxcbiAgICBiYWNrQnV0dG9uOiBtYWtlRWxlbUlmTm90RXhpc3QoJ210dXJrLXRvcC1iYW5uZXItYmFjaycpLFxuICAgIGRkQXJyb3c6IG1ha2VFbGVtSWZOb3RFeGlzdCgnbXR1cmstdG9wLWJhbm5lci1hcnJvdycpLFxuICAgIG10VG9wQmFubmVyVGV4dDogbWFrZUVsZW1JZk5vdEV4aXN0KCdtdHVyay10b3AtYmFubmVyLXRleHQnKSxcbiAgICBtdFNjZW5hcmlvQ29udGV4dDogbWFrZUVsZW1JZk5vdEV4aXN0KCdzY2VuYXJpb19jb250ZXh0JyksXG4gICAgbXRTY2VuYXJpb1F1ZXN0aW9uOiBtYWtlRWxlbUlmTm90RXhpc3QoJ3NjZW5hcmlvX3F1ZXN0aW9uJyksXG4gICAgbG9nRmlsZUlucHV0OiBtYWtlRWxlbUlmTm90RXhpc3QoXG4gICAgICAgICdtdHVyay10b3AtYmFubmVyLWRyb3AtZG93bi1jb250ZW50LWxvZy1maWxlLWlucHV0J1xuICAgICksXG4gICAgc3VibWl0Rm9ybTogbWFrZUVsZW1JZk5vdEV4aXN0KCdtdHVyay1zdWJtaXQtZm9ybScpLFxuICAgIG1vZGFsOiBtYWtlRWxlbUlmTm90RXhpc3QoJ21vZGFsJyksXG59O1xuIiwiaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gJy4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlcic7XG5pbXBvcnQgeyBFbGVtZW50cyB9IGZyb20gJy4vLi4vZG9tL2VsZW1lbnRzJztcbmxvZygnaHRtbCBsb2MgbG9hZGVkLicsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbmV4cG9ydCBlbnVtIEFwcEVudW0ge1xuICAgIElORk9STUFUSU9OX0ZPUkFHSU5HID0gJ2luZm9ybWF0aW9uLWZvcmFnaW5nJyxcbiAgICBDT0dOSVRJVkVfTE9BRCA9ICdjb2duaXRpdmUtbG9hZCcsXG4gICAgR0VOREVSX01BRyA9ICdnZW5kZXItbWFnJyxcbiAgICBFUlJPUiA9ICdlcnJvcicsXG59XG5cbmV4cG9ydCBlbnVtIE1vZGVFbnVtIHtcbiAgICBSRUFMID0gJ3JlYWwnLFxuICAgIFNBTkRCT1ggPSAnc2FuZGJveCcsXG4gICAgVEVTVCA9ICd0ZXN0JyxcbiAgICBFUlJPUiA9ICdlcnJvcicsXG59XG5cbmV4cG9ydCBjbGFzcyBIVE1MTG9jIHtcbiAgICBwdWJsaWMgc3RhdGljIGVsZW0gPSBFbGVtZW50cy5odG1sTG9jO1xuICAgIHB1YmxpYyBzdGF0aWMgYXBwOiBBcHBFbnVtO1xuICAgIHB1YmxpYyBzdGF0aWMgbW9kZTogTW9kZUVudW07XG4gICAgcHVibGljIHN0YXRpYyBzY2VuYXJpbzogc3RyaW5nO1xuXG4gICAgcHVibGljIHN0YXRpYyBzZXR1cCgpIHtcbiAgICAgICAgSFRNTExvYy5hcHAgPSAoSFRNTExvYy5lbGVtLmRhdGFzZXQuYXBwIGFzIEFwcEVudW0pIHx8IEFwcEVudW0uRVJST1I7XG4gICAgICAgIEhUTUxMb2MubW9kZSA9XG4gICAgICAgICAgICAoSFRNTExvYy5lbGVtLmRhdGFzZXQubW9kZSBhcyBNb2RlRW51bSkgfHwgTW9kZUVudW0uRVJST1I7XG4gICAgICAgIEhUTUxMb2Muc2NlbmFyaW8gPSBIVE1MTG9jLmVsZW0uZGF0YXNldC5zY2VuYXJpbyB8fCAnZXJyb3InO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tICcuLy4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlcic7XG5pbXBvcnQgeyBEIH0gZnJvbSAnLi9kb2N1bWVudCc7XG5pbXBvcnQgeyBFbGVtZW50cyB9IGZyb20gJy4vZWxlbWVudHMnO1xubG9nKCdtb2RhbCBsb2FkZWQuJywgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGNsYXNzIE1vZGFsIHtcbiAgICBwdWJsaWMgc3RhdGljIGVsZW0gPSBFbGVtZW50cy5tb2RhbDtcblxuICAgIHB1YmxpYyBzdGF0aWMgZGlzcGxheShzcmM6IHN0cmluZykge1xuICAgICAgICBNb2RhbC5lbGVtLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICdzdHlsZScsXG4gICAgICAgICAgICBgbGVmdDogJHtNYXRoLnJvdW5kKHdpbmRvdy5wYWdlWE9mZnNldCl9cHg7IHRvcDogJHtNYXRoLnJvdW5kKFxuICAgICAgICAgICAgICAgIHdpbmRvdy5wYWdlWU9mZnNldFxuICAgICAgICAgICAgKX1weDtgXG4gICAgICAgICk7XG4gICAgICAgIE1vZGFsLmVsZW0uY2xhc3NMaXN0LnJlcGxhY2UoJ2hpZGUtbW9kYWwnLCAnc2hvdy1tb2RhbCcpO1xuICAgICAgICBELmVhY2goTW9kYWwuZWxlbSwgKG5vZGUpID0+IHtcbiAgICAgICAgICAgIChub2RlIGFzIEhUTUxJRnJhbWVFbGVtZW50KS5zcmMgPSBzcmM7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ25vc2Nyb2xsJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBoaWRlKCkge1xuICAgICAgICBNb2RhbC5lbGVtLmNsYXNzTGlzdC5yZXBsYWNlKCdzaG93LW1vZGFsJywgJ2hpZGUtbW9kYWwnKTtcbiAgICAgICAgRC5lYWNoKE1vZGFsLmVsZW0sIChub2RlKSA9PiB7XG4gICAgICAgICAgICAobm9kZSBhcyBIVE1MSUZyYW1lRWxlbWVudCkuc3JjID0gJyc7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vc2Nyb2xsJyk7XG4gICAgfVxufVxuXG5ELmFkZEV2ZW50TGlzdGVuZXIoTW9kYWwuZWxlbSwgJ2NsaWNrJywgKGUpID0+IHtcbiAgICBNb2RhbC5oaWRlKCk7XG59KTtcbkQuZWFjaChNb2RhbC5lbGVtLCAobm9kZSkgPT4ge1xuICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihub2RlLCAnY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG59KTtcbiIsImltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBlcnJvciwgbG9nIH0gZnJvbSAnLi4vdXRpbHMvY29uc29sZV93cmFwcGVyJztcbmltcG9ydCB7IG5vb3AsIG5vdyB9IGZyb20gJy4vLi4vdXRpbHMvZnVuY3MnO1xubG9nKCdzY3JvbGwgbG9hZGVkLicsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbi8qKlxuICogTGluZWFyIGltcGxlbWVudGF0aW9uIG9mIHNjcm9sbGluZy5cbiAqIEZvbGxvd3MgdGhlIHNpbmdsZXRvbiBwYXR0ZXJuLCBjYWxsIGRvIHRvIHN0YXJ0IGEgc2Nyb2xsIG9wZXJhdGlvbi5cbiAqXG4gKiBJZiBhIHNjcm9sbCBpcyBjYWxsZWQgd2hlbiBhbm90aGVyIHNjcm9sbCBoYXMgYWxyZWFkeSBiZWd1biBhblxuICogZXJyb3Igd2lsbCBiZSB0aHJvd24sIGJ1dCB0aGUgZmlyc3Qgc2Nyb2xsIHdpbGwgY29udGludWUgdW50aWwgY29tcGxldGlvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIFNjcm9sbCB7XG4gICAgcHVibGljIHN0YXRpYyBTVEVQX0lOX01TID0gMTc7XG5cbiAgICBwdWJsaWMgc3RhdGljIGNhbGxiYWNrKFxuICAgICAgICBlbmRQb3M6IG51bWJlcixcbiAgICAgICAgZHVyYXRpb246IG51bWJlciA9IDIwMCxcbiAgICAgICAgY29tcGxldGU6ICguLi5hcmdzOiBhbnkpID0+IGFueSA9IG5vb3BcbiAgICApOiB2b2lkIHtcbiAgICAgICAgaWYgKFNjcm9sbC5ydW5uaW5nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgJ0Nhbm5vdCBtYWtlIG11bHRpcGxlIGNhbGxzIHRvIHNjcm9sbCBhdCB0aGUgc2FtZSB0aW1lLidcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgU2Nyb2xsLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICBjb25zdCBvbGRDb21wbGV0ZSA9IGNvbXBsZXRlO1xuICAgICAgICBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIFNjcm9sbC5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBlcnJvcihvbGRDb21wbGV0ZSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW5zdGFuY2UudXBkYXRlKGVuZFBvcywgZHVyYXRpb24sIGNvbXBsZXRlKS5hdHRlbXB0U2Nyb2xsKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBwcm9taXNlKGVuZFBvczogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyID0gMjAwKSB7XG4gICAgICAgIGlmIChTY3JvbGwucnVubmluZykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICdDYW5ub3QgbWFrZSBtdWx0aXBsZSBjYWxscyB0byBzY3JvbGwgYXQgdGhlIHNhbWUgdGltZS4nXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIFNjcm9sbC5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKFxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgIHJlc29sdmU6ICh2YWx1ZT86IHVua25vd24pID0+IHZvaWQsXG4gICAgICAgICAgICAgICAgcmVqZWN0OiAoYXJnMDogYW55KSA9PiB2b2lkXG4gICAgICAgICAgICApID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBydW5SZXNvbHZlciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNjcm9sbC5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC51cGRhdGUoZW5kUG9zLCBkdXJhdGlvbiwgcnVuUmVzb2x2ZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0ZW1wdFNjcm9sbCgpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBTY3JvbGwucnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcnVubmluZyA9IGZhbHNlO1xuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlID0gbmV3IFNjcm9sbCgwLCAwLCBub29wKTtcbiAgICBwcml2YXRlIGNvbXBsZXRlOiAoLi4uYXJnczogYW55KSA9PiBhbnk7XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGVuZFBvczogbnVtYmVyLFxuICAgICAgICBwcml2YXRlIGR1cmF0aW9uOiBudW1iZXIsXG4gICAgICAgIGNvbXBsZXRlOiAoLi4uYXJnczogYW55KSA9PiBhbnlcbiAgICApIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9ICguLi5hcmdzOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzY3JvbGwnKSk7XG4gICAgICAgICAgICBjb21wbGV0ZShhcmdzKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBpc1J1bm5pbmcoKSB7XG4gICAgICAgIHJldHVybiBTY3JvbGwucnVubmluZztcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZShcbiAgICAgICAgZW5kUG9zOiBudW1iZXIsXG4gICAgICAgIGR1cmF0aW9uOiBudW1iZXIsXG4gICAgICAgIGNvbXBsZXRlOiAoLi4uYXJnczogYW55KSA9PiBhbnlcbiAgICApOiBTY3JvbGwge1xuICAgICAgICB0aGlzLmVuZFBvcyA9IGVuZFBvcztcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2FsY1Njcm9sbEFtb3VudCgpIHtcbiAgICAgICAgY29uc3QgY3VyVGltZSA9IG5vdygpO1xuICAgICAgICBjb25zdCBzdGVwcyA9IE1hdGgubWF4KFxuICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICh0aGlzLmR1cmF0aW9uIC0gY3VyVGltZSkgLyBTY3JvbGwuU1RFUF9JTl9NU1xuICAgICAgICApO1xuICAgICAgICBjb25zdCBjdXJQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwoKHRoaXMuZW5kUG9zIC0gY3VyUG9zKSAvIHN0ZXBzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNjcm9sbCgpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbCgwLCB0aGlzLmNhbGNTY3JvbGxBbW91bnQoKSk7XG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPT09IHRoaXMuZW5kUG9zKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5zY3JvbGwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhdHRlbXB0U2Nyb2xsKCkge1xuICAgICAgICBpZiAoJ3JlcXVlc3RBbmltYXRpb25GcmFtZScgaW4gd2luZG93ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbCgwLCB0aGlzLmVuZFBvcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY3JvbGwoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBub29wIH0gZnJvbSAnLi4vdXRpbHMvZnVuY3MnO1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4vLi4vZGF0YS1sb2cvZGF0YSc7XG5pbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSAnLi8uLi91dGlscy9jb25zb2xlX3dyYXBwZXInO1xuaW1wb3J0IHsgcGFyYW1zIH0gZnJvbSAnLi8uLi91dGlscy9xX3BhcmFtcyc7XG5pbXBvcnQgeyBEIH0gZnJvbSAnLi9kb2N1bWVudCc7XG5pbXBvcnQgeyBFbGVtZW50cyB9IGZyb20gJy4vZWxlbWVudHMnO1xubG9nKCdzdWJtaXQgZm9ybSBsb2FkZWQuJywgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGludGVyZmFjZSBBbGxvd1N1Ym1pc3Npb24ge1xuICAgIGFsbG93KCk6IHN0cmluZyB8IG51bGw7XG4gICAgcHJlU3VibWl0KC4uLmFyZ3M6IGFueSk6IGFueTtcbn1cblxuY29uc3QgayA9ICdOY0YyV1JrVWJmNXR6ajRiSXZJOTgxRnFtUzZwTWxPODNnMmo3dTVSJztcbmNvbnN0IGdhdGUgPSAnaHR0cHM6Ly8yeWtvcHExb2hhLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL1BST0QvbG9ncyc7XG5cbmNvbnN0IEFsbG93U3VibWlzc2lvbkRlZmF1bHQ6IEFsbG93U3VibWlzc2lvbiA9IHtcbiAgICBhbGxvdzogKCkgPT4gbnVsbCxcbiAgICBwcmVTdWJtaXQ6IG5vb3AsXG59O1xuXG5leHBvcnQgY2xhc3MgU3VibWl0Rm9ybSB7XG4gICAgcHVibGljIHN0YXRpYyBlbGVtID0gRWxlbWVudHMuc3VibWl0Rm9ybSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgcHVibGljIHN0YXRpYyBhbGxvd1N1Ym1pdERlZmF1bHQgPSB7IGFsbG93OiAoKSA9PiB0cnVlLCBwcmVTdWJtaXQ6IG5vb3AgfTtcblxuICAgIHB1YmxpYyBzdGF0aWMgc2V0dXAoXG4gICAgICAgIGFsbG93U3VibWlzc2lvbjogQWxsb3dTdWJtaXNzaW9uID0gQWxsb3dTdWJtaXNzaW9uRGVmYXVsdFxuICAgICkge1xuICAgICAgICBTdWJtaXRGb3JtLnN1Ym1pdEZ1bmMgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBhbGxvd2VkID0gYWxsb3dTdWJtaXNzaW9uLmFsbG93KCk7XG4gICAgICAgICAgICBpZiAoYWxsb3dlZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHFwID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZikuc2VhcmNoUGFyYW1zO1xuICAgICAgICAgICAgICAgIGRhdGEudXJsRGF0YS5yYXcgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgICAgICAgICBkYXRhLnVybERhdGEuYXNzaWdubWVudElEID0gcXAuZ2V0KCdhc3NpZ25tZW50SWQnKTtcbiAgICAgICAgICAgICAgICBkYXRhLnVybERhdGEuaGl0SUQgPSBxcC5nZXQoJ2hpdElkJyk7XG4gICAgICAgICAgICAgICAgZGF0YS51cmxEYXRhLndvcmtlcklEID0gcXAuZ2V0KCd3b3JrZXJJZCcpO1xuICAgICAgICAgICAgICAgIGRhdGEudXJsRGF0YS5zdWJtaXRUbyA9IHFwLmdldCgndHVya1N1Ym1pdFRvJyk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudXJsRGF0YS5hc3NpZ25tZW50SUQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgKEQuaWQoJ2Fzc2lnbm1lbnQtaWQnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnVybERhdGEuYXNzaWdubWVudElEO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS51cmxEYXRhLmhpdElEICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIChELmlkKCdoaXQtaWQnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnVybERhdGEuaGl0SUQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIChFbGVtZW50cy5zdWJtaXRGb3JtIGFzIEhUTUxGb3JtRWxlbWVudCkuYWN0aW9uID0gZGF0YS51cmxEYXRhXG4gICAgICAgICAgICAgICAgICAgIC5zdWJtaXRUbyBhcyBzdHJpbmc7XG4gICAgICAgICAgICAgICAgYWxsb3dTdWJtaXNzaW9uLnByZVN1Ym1pdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChnYXRlLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3gtYXBpLWtleSc6IGssXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbmRib3g6IHBhcmFtcy5zYW5kYm94LFxuICAgICAgICAgICAgICAgICAgICAgICAgd3VzdGxfa2V5OiBwYXJhbXMud3VzdGxfa2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdDogcGFyYW1zLnByb2plY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVyYXRpb246IHBhcmFtcy5pdGVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6IHBhcmFtcy50YWcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50SUQ6IGRhdGEudXJsRGF0YS5hc3NpZ25tZW50SUQsXG4gICAgICAgICAgICAgICAgICAgICAgICBoaXRJRDogZGF0YS51cmxEYXRhLmhpdElELFxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VySUQ6IGRhdGEudXJsRGF0YS53b3JrZXJJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZzogZGF0YS5zZXJpYWxpemUoKSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgfSk7IC8vIFRPRE86IHZlcmlmeSB0aGlzIGFjdHVhbGx5IHdvcmtzXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcC5zdGF0dXMpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGF3YWl0IHJlc3AuanNvbigpKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcC5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcbiAgICAgICAgICAgICAgICAgICAgICAgICdZb3UgbWFkZSBhIGJhZCByZXF1ZXN0IHdpdGggeW91ciBzdWJtaXNzaW9uLiBUaGUgc2VydmVyIHRoaW5rcyB0aGF0IHlvdSBtYWRlIHRoaXMgZXJyb3I6ICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhd2FpdCByZXNwLmpzb24oKSkuZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBTdWJtaXRGb3JtLmVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAgICAgJ3N1Ym1pdCcsXG4gICAgICAgICAgICAgICAgICAgIFN1Ym1pdEZvcm0uc3VibWl0RnVuY1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgU3VibWl0Rm9ybS5lbGVtLnN1Ym1pdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydChhbGxvd2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgU3VibWl0Rm9ybS5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIFN1Ym1pdEZvcm0uc3VibWl0RnVuYyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgc3VibWl0RnVuYzogKGV2ZW50OiBFdmVudCkgPT4gYW55O1xufVxuIiwiaW1wb3J0IHsgVG9wQmFubmVyIH0gZnJvbSBcIi4vYmFubmVyXCI7XG5pbXBvcnQgeyBIVE1MTG9jIH0gZnJvbSBcIi4vaHRtbF9sb2NcIjtcblxuZXhwb3J0IGNsYXNzIFRyYWNrZXJFbGVtZW50cyB7XG4gIHB1YmxpYyBzdGF0aWMgc2V0dXBUcmFja2VyRWxlbWVudHMoKSB7XG4gICAgLy8gc2V0dXAgZG9tIGVsZW1lbnRzXG4gICAgVG9wQmFubmVyLnNldHVwKCk7XG4gICAgSFRNTExvYy5zZXR1cCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBUcmFja2VyIH0gZnJvbSAnLi8uLi90cmFja2VyL3RyYWNrZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhpc3RvcnlFbnRyeSB7XG4gICAgaGFzUHJldlVSTDogYm9vbGVhbjtcbiAgICBwcmV2RW50cnk/OiBIaXN0b3J5RW50cnk7XG4gICAgY3VyclVSTDogc3RyaW5nO1xuICAgIGV4dHJhPzogYW55O1xuICAgIG5leHRFbnRyaWVzOiBIaXN0b3J5RW50cnlbXTtcbn1cblxuZnVuY3Rpb24gbmV3SGlzdG9yeUVudHJ5KFxuICAgIGN1cnJVUkw6IHN0cmluZyxcbiAgICBoYXNQcmV2VVJMOiBib29sZWFuLFxuICAgIHByZXZFbnRyeT86IEhpc3RvcnlFbnRyeSxcbiAgICBleHRyYT86IGFueVxuKTogSGlzdG9yeUVudHJ5IHtcbiAgICBUcmFja2VyLmdldEV2ZW50RGlzcGF0Y2hGdW5jKCdoaXN0b3J5JykoeyB1cmw6IGN1cnJVUkwsIGV4dHJhIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJVUkwsXG4gICAgICAgIGhhc1ByZXZVUkwsXG4gICAgICAgIHByZXZFbnRyeSxcbiAgICAgICAgZXh0cmEsXG4gICAgICAgIG5leHRFbnRyaWVzOiBbXSxcbiAgICB9O1xufVxuXG5leHBvcnQgY2xhc3MgSGlzdG9yeSB7XG4gICAgcHVibGljIHN0YXRpYyBmb3J3YXJkKHVybDogc3RyaW5nLCBleHRyYT86IGFueSk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGhpc3RFbnQgPSBuZXdIaXN0b3J5RW50cnkodXJsLCB0cnVlLCBIaXN0b3J5LmN1cnJoaXN0b3J5LCBleHRyYSk7XG4gICAgICAgIEhpc3RvcnkuY3Vycmhpc3RvcnkubmV4dEVudHJpZXMucHVzaChoaXN0RW50KTtcbiAgICAgICAgSGlzdG9yeS5jdXJyaGlzdG9yeSA9IGhpc3RFbnQ7XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjYW5CYWNrd2FyZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIEhpc3RvcnkuY3Vycmhpc3RvcnkuaGFzUHJldlVSTCAmJlxuICAgICAgICAgICAgIUhpc3RvcnkuY3Vycmhpc3RvcnkucHJldkVudHJ5Py5leHRyYT8ud3JhcHBlclxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYmFja3dhcmQoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCFIaXN0b3J5LmNhbkJhY2t3YXJkKCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGdvIGJhY2sgYW55IGZ1cnRoZXIuJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coSGlzdG9yeS5jdXJyaGlzdG9yeS5wcmV2RW50cnkpO1xuICAgICAgICBjb25zdCBwcmV2RW50cnkgPSBIaXN0b3J5LmN1cnJoaXN0b3J5LnByZXZFbnRyeSBhcyBIaXN0b3J5RW50cnk7XG4gICAgICAgIGNvbnN0IG5leHRVUkwgPSBwcmV2RW50cnkuY3VyclVSTDtcbiAgICAgICAgY29uc3QgaGlzdEVudCA9IG5ld0hpc3RvcnlFbnRyeShcbiAgICAgICAgICAgIG5leHRVUkwsXG4gICAgICAgICAgICBwcmV2RW50cnkuaGFzUHJldlVSTCxcbiAgICAgICAgICAgIHByZXZFbnRyeS5wcmV2RW50cnksXG4gICAgICAgICAgICB7IGJhY2s6IHRydWUgfVxuICAgICAgICApO1xuICAgICAgICBIaXN0b3J5LmN1cnJoaXN0b3J5ID0gaGlzdEVudDtcbiAgICAgICAgcmV0dXJuIG5leHRVUkw7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBzZXR1cCh1cmw6IHN0cmluZywgZXh0cmE/OiBhbnkpIHtcbiAgICAgICAgSGlzdG9yeS5maXJzdEhpc3RvcnkgPSBuZXdIaXN0b3J5RW50cnkodXJsLCBmYWxzZSwgdW5kZWZpbmVkLCBleHRyYSk7XG4gICAgICAgIEhpc3RvcnkuY3Vycmhpc3RvcnkgPSBIaXN0b3J5LmZpcnN0SGlzdG9yeTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBmaXJzdEhpc3Rvcnk6IEhpc3RvcnlFbnRyeTtcbiAgICBwcml2YXRlIHN0YXRpYyBjdXJyaGlzdG9yeTogSGlzdG9yeUVudHJ5O1xufVxuXG4od2luZG93IGFzIGFueSkuaCA9IEhpc3Rvcnk7XG4iLCJpbXBvcnQgeyBEIH0gZnJvbSAnLi4vZG9tL2RvY3VtZW50JztcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSAnLi4vZG9tL2VsZW1lbnRzJztcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi4vZG9tL21vZGFsJztcbmltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBlcnJvciwgbG9nIH0gZnJvbSAnLi4vdXRpbHMvY29uc29sZV93cmFwcGVyJztcbmltcG9ydCB7IG5vb3AgfSBmcm9tICcuLi91dGlscy9mdW5jcyc7XG5pbXBvcnQgeyBIVE1MTG9hZGVyIH0gZnJvbSAnLi4vdXRpbHMvaHRtbF9sb2FkZXInO1xuaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gJy4vaGlzdG9yeSc7XG5sb2coJ3JvdXRlciBsb2FkZWQuJywgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGNvbnN0IGVudW0gUm91dGVyTW9kZSB7XG4gICAgT0ZGLFxuICAgIE9OLFxuICAgIFNUQU5EQVJEX0FMTE9XQU5DRVMsXG59XG5cbi8vIFRPRE86IE5lZWQgdG8gaW1wcm92ZSB0aGlzIHRvIHRha2UgaW4gYSBmdW5jdGlvbiBmb3IgdGhlIGFsbG93YW5jZSBvciByZWR1Y2UgYWJzdHJhY3RuZXNzIG92ZXJhbGwuXG5cbmV4cG9ydCBjb25zdCBlbnVtIFJvdXRlck1vZHVsZSB7XG4gICAgQSA9ICdBJyxcbiAgICBJTUcgPSAnSU1HJyxcbiAgICBGT1JNID0gJ0ZPUk0nLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlckNvbmZpZyB7XG4gICAgbW9kdWxlOiBSb3V0ZXJNb2R1bGU7XG4gICAgbW9kZTogUm91dGVyTW9kZTtcbn1cblxuaW50ZXJmYWNlIEZ1bGxSb3V0ZXJDb25maWcgZXh0ZW5kcyBSb3V0ZXJDb25maWcge1xuICAgIHNldHVwKGNvbmZpZzogRnVsbFJvdXRlckNvbmZpZywgZWxlbTogRWxlbWVudCk6IGFueTtcbn1cblxuZnVuY3Rpb24gdGVzdE9uKGVsZW06IEVsZW1lbnQsIGNvbmZpZzogUm91dGVyQ29uZmlnKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgZWxlbS50YWdOYW1lID09PSBjb25maWcubW9kdWxlICYmXG4gICAgICAgIChjb25maWcubW9kZSA9PT0gUm91dGVyTW9kZS5PTiB8fFxuICAgICAgICAgICAgY29uZmlnLm1vZGUgPT09IFJvdXRlck1vZGUuU1RBTkRBUkRfQUxMT1dBTkNFUylcbiAgICApO1xufVxuZnVuY3Rpb24gdGVzdEFsbG93YW5jZShjb25maWc6IFJvdXRlckNvbmZpZykge1xuICAgIHJldHVybiBjb25maWcubW9kZSA9PT0gUm91dGVyTW9kZS5TVEFOREFSRF9BTExPV0FOQ0VTO1xufVxuXG5leHBvcnQgY2xhc3MgUm91dGVyIHtcbiAgICBwdWJsaWMgc3RhdGljIEhBU0hfVEFHUyA9IG5ldyBSZWdFeHAoJyMnKTtcbiAgICBwdWJsaWMgc3RhdGljIEVNUFRZID0gbmV3IFJlZ0V4cCgnXiQnKTtcbiAgICBwdWJsaWMgc3RhdGljIEFUX1NZTUJPTCA9IG5ldyBSZWdFeHAoJ0AnKTtcblxuICAgIHB1YmxpYyBzdGF0aWMgSEFTSF9UQUdfUkVTUE9OREVSID0gbm9vcDtcbiAgICBwdWJsaWMgc3RhdGljIEVNUFRZX1JFU1BPTkRFUiA9IChldmVudDogRXZlbnQpID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcHVibGljIHN0YXRpYyBBVF9TWU1CT0xfUkVTUE9OREVSID0gKGV2ZW50OiBFdmVudCkgPT5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHB1YmxpYyBzdGF0aWMgcGF0aFByZWZpeCA9ICcnO1xuXG4gICAgcHVibGljIHN0YXRpYyBjb25maWd1cmUoY29uZmlnczogUm91dGVyQ29uZmlnW10sIHBhdGhQcmVmaXg6IHN0cmluZykge1xuICAgICAgICBjb25maWdzLmZvckVhY2goKGNvbmZpZykgPT4ge1xuICAgICAgICAgICAgUm91dGVyLmNvbmZpZ3Muc2V0KGNvbmZpZy5tb2R1bGUsIFJvdXRlci51cGdyYWRlQ29uZmlnKGNvbmZpZykpO1xuICAgICAgICB9KTtcbiAgICAgICAgUm91dGVyLnBhdGhQcmVmaXggPSBwYXRoUHJlZml4O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc2V0dXAoZWxlbTogRWxlbWVudCB8IHN0cmluZykge1xuICAgICAgICBELmVhY2hSZWN1cihlbGVtLCAobm9kZSkgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBjb25maWcgb2YgUm91dGVyLmNvbmZpZ3MudmFsdWVzKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGVzdE9uKG5vZGUsIGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLnNldHVwKGNvbmZpZywgbm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIFNUQU5EQVJEX0xJTktfTElTVEVORVIoZTogTW91c2VFdmVudCkge1xuICAgICAgICByZXR1cm4gZXJyb3IoKCkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnQ7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSB0YXJnZXQuaHJlZjtcbiAgICAgICAgICAgIEhpc3RvcnkuZm9yd2FyZChSb3V0ZXIuZ2V0UGF0aE5hbWUodXJsKSk7XG4gICAgICAgICAgICBjb25zdCByZXQgPSBIVE1MTG9hZGVyLmxvYWRVUkwodXJsLCBFbGVtZW50cy5odG1sTG9jKTtcbiAgICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbmV3UGFnZUxvYWQnKSk7XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIE9OX0NPTVBMRVRFX1NMTChwb3N0OiAoZTogTW91c2VFdmVudCkgPT4gYW55KSB7XG4gICAgICAgIHJldHVybiAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgZXJyb3IoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGF3YWl0IFJvdXRlci5TVEFOREFSRF9MSU5LX0xJU1RFTkVSKGUpO1xuICAgICAgICAgICAgICAgIHBvc3QoZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIElNQUdFX0xJTktfTElTVEVORVIoZTogTW91c2VFdmVudCkge1xuICAgICAgICByZXR1cm4gZXJyb3IoKCkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIEZPUk1fT0ZGX0xJU1RFTkVSKGU6IEV2ZW50KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICdBbGwgZm9ybXMgZXhjZXB0IGZvciB0aGUgb25lIGluIHRoZSB0b3AgaGVhZGVyIGFyZSBpbmFjdGl2ZS4nXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0QWxsb3dhbmNlc09uKCkge1xuICAgICAgICBSb3V0ZXIucmVnaXN0ZXJBbGxvd2FuY2UoXG4gICAgICAgICAgICB7IHJlZ2V4OiBSb3V0ZXIuRU1QVFksIGZ1bmM6IFJvdXRlci5FTVBUWV9SRVNQT05ERVIgfSxcbiAgICAgICAgICAgIHsgcmVnZXg6IFJvdXRlci5IQVNIX1RBR1MsIGZ1bmM6IFJvdXRlci5IQVNIX1RBR19SRVNQT05ERVIgfSxcbiAgICAgICAgICAgIHsgcmVnZXg6IFJvdXRlci5BVF9TWU1CT0wsIGZ1bmM6IFJvdXRlci5BVF9TWU1CT0xfUkVTUE9OREVSIH1cbiAgICAgICAgKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0QWxsb3dhbmNlc09mZigpIHtcbiAgICAgICAgUm91dGVyLnVucmVnaXN0ZXJBbGxvd2FuY2UoXG4gICAgICAgICAgICBSb3V0ZXIuRU1QVFksXG4gICAgICAgICAgICBSb3V0ZXIuSEFTSF9UQUdTLFxuICAgICAgICAgICAgUm91dGVyLkFUX1NZTUJPTFxuICAgICAgICApO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyQWxsb3dhbmNlKFxuICAgICAgICAuLi5yZWdleHM6IEFycmF5PHsgcmVnZXg6IFJlZ0V4cDsgZnVuYzogKGV2ZW50OiBFdmVudCkgPT4gYW55IH0+XG4gICAgKSB7XG4gICAgICAgIHJlZ2V4cy5mb3JFYWNoKChyZWdleCkgPT5cbiAgICAgICAgICAgIFJvdXRlci5saW5rQWxsb3dhbmNlcy5zZXQocmVnZXgucmVnZXgsIHJlZ2V4LmZ1bmMpXG4gICAgICAgICk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgdW5yZWdpc3RlckFsbG93YW5jZSguLi5yZWdleHM6IFJlZ0V4cFtdKSB7XG4gICAgICAgIHJlZ2V4cy5mb3JFYWNoKChyZWdleCkgPT4gUm91dGVyLmxpbmtBbGxvd2FuY2VzLmRlbGV0ZShyZWdleCkpO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGNsZWFyQWxsb3dhbmNlcygpIHtcbiAgICAgICAgUm91dGVyLmxpbmtBbGxvd2FuY2VzLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBsb2FkKHVybDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIEhpc3RvcnkuZm9yd2FyZChSb3V0ZXIuZ2V0UGF0aE5hbWUodXJsKSk7XG4gICAgICAgIGNvbnN0IHJldCA9IGF3YWl0IEhUTUxMb2FkZXIubG9hZFVSTCh1cmwsIEVsZW1lbnRzLmh0bWxMb2MpO1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ25ld1BhZ2VMb2FkJykpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgbG9hZFdpdGhQYXRoUHJlZml4KHBhZ2U6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICBjb25zdCByZXQgPSBIVE1MTG9hZGVyLmxvYWRVUkwoXG4gICAgICAgICAgICBSb3V0ZXIucGF0aFByZWZpeCArIHBhZ2UsXG4gICAgICAgICAgICBFbGVtZW50cy5odG1sTG9jXG4gICAgICAgICk7XG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbmV3UGFnZUxvYWQnKSk7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgU2V0dXBGdW5jdGlvbnMgPSB7XG4gICAgICAgIEE6IChjb25maWc6IEZ1bGxSb3V0ZXJDb25maWcsIGVsZW06IEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFOb2RlID0gZWxlbSBhcyBIVE1MQW5jaG9yRWxlbWVudDtcbiAgICAgICAgICAgIGlmICh0ZXN0QWxsb3dhbmNlKGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFzc2VzUmVnZXhUZXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBocmVmID0gYU5vZGUuaHJlZjtcbiAgICAgICAgICAgICAgICBSb3V0ZXIubGlua0FsbG93YW5jZXMuZm9yRWFjaCgoZnVuYywgcmVnZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVzdCA9IHJlZ2V4LnRlc3QoaHJlZik7XG4gICAgICAgICAgICAgICAgICAgIHBhc3Nlc1JlZ2V4VGVzdCA9IHBhc3Nlc1JlZ2V4VGVzdCAmJiAhdGVzdDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCAnY2xpY2snLCBmdW5jKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwYXNzZXNSZWdleFRlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhyZWYuc3Vic3RyKGhyZWYubGVuZ3RoIC0gMykgPT09ICdwZGYnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9kYWwuZGlzcGxheShocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sICdjbGljaycsIChlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5TVEFOREFSRF9MSU5LX0xJU1RFTkVSKGUgYXMgTW91c2VFdmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCAnY2xpY2snLCAoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLlNUQU5EQVJEX0xJTktfTElTVEVORVIoZSBhcyBNb3VzZUV2ZW50KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIElNRzogKGNvbmZpZzogRnVsbFJvdXRlckNvbmZpZywgZWxlbTogRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1nTm9kZSA9IGVsZW0gYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgICAgICAgICAgIGlmICh0ZXN0QWxsb3dhbmNlKGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFzc2VzUmVnZXhUZXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBSb3V0ZXIubGlua0FsbG93YW5jZXMuZm9yRWFjaCgoZnVuYywgcmVnZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVzdCA9ICFyZWdleC50ZXN0KGltZ05vZGUuc3JjKTtcbiAgICAgICAgICAgICAgICAgICAgcGFzc2VzUmVnZXhUZXN0ID0gcGFzc2VzUmVnZXhUZXN0ICYmIHRlc3Q7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgJ2NsaWNrJywgZnVuYyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocGFzc2VzUmVnZXhUZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCAnY2xpY2snLCAoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5JTUFHRV9MSU5LX0xJU1RFTkVSKGUgYXMgTW91c2VFdmVudClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCAnY2xpY2snLCAoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLklNQUdFX0xJTktfTElTVEVORVIoZSBhcyBNb3VzZUV2ZW50KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIEZPUk06IChjb25maWc6IEZ1bGxSb3V0ZXJDb25maWcsIGVsZW06IEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1Ob2RlID0gZWxlbSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAodGVzdEFsbG93YW5jZShjb25maWcpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBhc3Nlc1JlZ2V4VGVzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgUm91dGVyLmxpbmtBbGxvd2FuY2VzLmZvckVhY2goKGZ1bmMsIHJlZ2V4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlc3QgPSAhcmVnZXgudGVzdChmb3JtTm9kZS5zcmMpO1xuICAgICAgICAgICAgICAgICAgICBwYXNzZXNSZWdleFRlc3QgPSBwYXNzZXNSZWdleFRlc3QgJiYgdGVzdDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCAnY2xpY2snLCBmdW5jKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwYXNzZXNSZWdleFRlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdWJtaXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLkZPUk1fT0ZGX0xJU1RFTkVSXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgJ3N1Ym1pdCcsIFJvdXRlci5GT1JNX09GRl9MSVNURU5FUik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIHByaXZhdGUgc3RhdGljIGNvbmZpZ3MgPSBuZXcgTWFwPFJvdXRlck1vZHVsZSwgRnVsbFJvdXRlckNvbmZpZz4oKTtcblxuICAgIHByaXZhdGUgc3RhdGljIGxpbmtBbGxvd2FuY2VzOiBNYXA8UmVnRXhwLCAoZXZlbnQ6IEV2ZW50KSA9PiBhbnk+ID0gbmV3IE1hcDxcbiAgICAgICAgUmVnRXhwLFxuICAgICAgICAoZXZlbnQ6IEV2ZW50KSA9PiBhbnlcbiAgICA+KCk7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBwYXRoUmVnZXggPSAvXFwvKFtcXHddKy5odG1sKS87XG5cbiAgICBwcml2YXRlIHN0YXRpYyB1cGdyYWRlQ29uZmlnKGNvbmZpZzogUm91dGVyQ29uZmlnKTogRnVsbFJvdXRlckNvbmZpZyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb2R1bGU6IGNvbmZpZy5tb2R1bGUsXG4gICAgICAgICAgICBtb2RlOiBjb25maWcubW9kZSxcbiAgICAgICAgICAgIHNldHVwOiBSb3V0ZXIuU2V0dXBGdW5jdGlvbnNbY29uZmlnLm1vZHVsZV0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByaXZhdGUgc3RhdGljIGdldFBhdGhOYW1lKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgcmV0ID0gUm91dGVyLnBhdGhSZWdleC5leGVjKHVybCk7XG4gICAgICAgIHJldHVybiByZXQgPT09IG51bGwgPyB1cmwgOiByZXQubGVuZ3RoID4gMSA/IHJldFsxXSA6IHVybDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBpc1RyYWNrZXJFdmVudCwgb2JqZWN0VG9UcmFja2VyRXZlbnQgfSBmcm9tICcuLi9kYXRhLWxvZy9ldmVudCc7XG5pbXBvcnQgeyBFdmVudFJlY2VpdmVyIH0gZnJvbSAnLi4vZGF0YS1sb2cvcmVjZWl2ZXInO1xuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tICcuLi9kb20vZWxlbWVudHMnO1xuaW1wb3J0IHsgVHJhY2tlckVsZW1lbnRzIH0gZnJvbSAnLi4vZG9tL3RyYWNrZXJfZWxlbXMnO1xuaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZywgc2V0RGVidWdMZXZlbCB9IGZyb20gJy4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlcic7XG5pbXBvcnQgeyBTY2VuYXJpbyB9IGZyb20gJy4uL3V0aWxzL3NjZW5hcmlvcyc7XG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi8uLi9kYXRhLWxvZy9kYXRhJztcbmltcG9ydCB7IEFsbG93U3VibWlzc2lvbiwgU3VibWl0Rm9ybSB9IGZyb20gJy4vLi4vZG9tL3N1Ym1pdF9mb3JtJztcblxubG9nKCd0cmFja2VyIGxvYWRlZC4nLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tlckNvbmZpZ3VyYXRpb24ge1xuICAgIGFsbG93U3VibWlzc2lvbjogQWxsb3dTdWJtaXNzaW9uO1xuICAgIGRlYnVnTGV2ZWw6IERlYnVnTGV2ZWxFbnVtO1xuICAgIGJ1Y2tldE5hbWU6IHN0cmluZztcbiAgICBrZXlQcmVmaXg6IHN0cmluZztcbiAgICBzZXR1cCgpOiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgVHJhY2tlciB7XG4gICAgcHVibGljIHN0YXRpYyBsYXN0UG9zID0geyB4OiAwLCB5OiAwLCB0aW1lOiAwIH07XG5cbiAgICBwdWJsaWMgc3RhdGljIGxvYWRTY2VuYXJpbyhzY2VuOiBTY2VuYXJpbykge1xuICAgICAgICBsZXQgc3ViID0gc2Nlbi5jb250ZXh0O1xuICAgICAgICBpZiAoc3ViLmxlbmd0aCA+IDUwKSB7XG4gICAgICAgICAgICBzdWIgPSBzdWIuc3Vic3RyaW5nKDAsIDUwKTtcbiAgICAgICAgICAgIGNvbnN0IGluZHMgPSBbXG4gICAgICAgICAgICAgICAgc3ViLmxhc3RJbmRleE9mKCcgJyksXG4gICAgICAgICAgICAgICAgc3ViLmxhc3RJbmRleE9mKCcuJyksXG4gICAgICAgICAgICAgICAgc3ViLmxhc3RJbmRleE9mKCcsJyksXG4gICAgICAgICAgICAgICAgc3ViLmxhc3RJbmRleE9mKCc/JyksXG4gICAgICAgICAgICAgICAgc3ViLmxhc3RJbmRleE9mKCchJyksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgY29uc3QgaW5kID0gTWF0aC5tYXgoLi4uaW5kcyk7XG4gICAgICAgICAgICBzdWIgPSBzdWIuc3Vic3RyaW5nKDAsIGluZCkgKyAnLi4uJztcbiAgICAgICAgfVxuXG4gICAgICAgIEVsZW1lbnRzLm10VG9wQmFubmVyVGV4dC5pbm5lclRleHQgPSBzdWI7XG4gICAgICAgIEVsZW1lbnRzLm10U2NlbmFyaW9Db250ZXh0LmlubmVyVGV4dCA9IHNjZW4uY29udGV4dDtcbiAgICAgICAgRWxlbWVudHMubXRTY2VuYXJpb1F1ZXN0aW9uLmlubmVyVGV4dCA9IHNjZW4ucXVlc3Rpb247XG4gICAgICAgIEVsZW1lbnRzLmh0bWxMb2MuZGF0YXNldC50YXNrID0gc2Nlbi50YWc7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBzdGFydChjb25maWc6IFRyYWNrZXJDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHNldERlYnVnTGV2ZWwoY29uZmlnLmRlYnVnTGV2ZWwpO1xuICAgICAgICAvLyBjb25maWd1cmUgdHJhY2tlciBzcGVjaWZpYyBlbGVtZW50c1xuICAgICAgICBUcmFja2VyRWxlbWVudHMuc2V0dXBUcmFja2VyRWxlbWVudHMoKTtcbiAgICAgICAgU3VibWl0Rm9ybS5zZXR1cChjb25maWcuYWxsb3dTdWJtaXNzaW9uKTtcbiAgICAgICAgZGF0YS5kYXRhLnRhc2sgPSBFbGVtZW50cy5odG1sTG9jLmRhdGFzZXQudGFzaztcbiAgICAgICAgY29uZmlnLnNldHVwKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyByZWdpc3RlckV2ZW50KGV2ZW50VHlwZTogc3RyaW5nKSB7XG4gICAgICAgIGRhdGEubG9nc1tldmVudFR5cGVdID0gW107XG4gICAgICAgIHRoaXMucmVjZWl2ZXIucmVnaXN0ZXIoZXZlbnRUeXBlLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRhdGEubG9nc1tldmVudFR5cGVdLnB1c2goZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RXZlbnREaXNwYXRjaEZ1bmMoZXZlbnRUeXBlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEV2ZW50RGlzcGF0Y2hGdW5jKGV2ZW50VHlwZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiAoZXZEYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZXZEYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGlmICghaXNUcmFja2VyRXZlbnQoZXZEYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3RUb1RyYWNrZXJFdmVudChldkRhdGEsIGV2ZW50VHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucmVjZWl2ZXIuZG9FdmVudChldkRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXR0YWNoRGF0YShrZXk6IHN0cmluZywgYXR0cmlidXRlOiBhbnkpIHtcbiAgICAgICAgZGF0YS5kYXRhW2tleV0gPSBhdHRyaWJ1dGU7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjb21wdXRlQXR0cmlidXRlKG5hbWU6IHN0cmluZywgY29tcHV0ZTogKHZhbDogYW55KSA9PiBhbnkpIHtcbiAgICAgICAgZGF0YS5kYXRhW25hbWVdID0gY29tcHV0ZShkYXRhLmRhdGFbbmFtZV0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIHJlY2VpdmVyID0gbmV3IEV2ZW50UmVjZWl2ZXIoKTtcbn1cbiIsImltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi8uLi9kYXRhLWxvZy9kYXRhXCI7XG5sb2coXCJjb25zb2xlIHdyYXBwZXIgbG9hZGVkLlwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXJyb3I8VD4oXG4gIGZ1bmM6ICguLi5hcmdzOiBhbnkpID0+IFRcbik6IFByb21pc2U8VCB8IHVuZGVmaW5lZD4ge1xuICByZXR1cm4gZXJyb3JITyhmdW5jKSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JITzxUPihcbiAgZnVuYzogKC4uLmFyZ3M6IGFueSkgPT4gVFxuKTogKC4uLmFyZ3M6IGFueSkgPT4gUHJvbWlzZTxUIHwgdW5kZWZpbmVkPiB7XG4gIHJldHVybiBhc3luYyAoLi4uYXJnczogYW55KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jKGFyZ3MpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkYXRhLmVycm9ycy5wdXNoKGVycm9yKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGVudW0gRGVidWdMZXZlbEVudW0ge1xuICBOT05FID0gMSxcbiAgQkFTSUMgPSAyLFxuICBERVRBSUxFRCA9IDMsXG59XG5cbmxldCBkZWJ1Z0xldmVsOiBEZWJ1Z0xldmVsRW51bSA9IERlYnVnTGV2ZWxFbnVtLkJBU0lDO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVidWdMZXZlbChsZXZlbDogRGVidWdMZXZlbEVudW0pIHtcbiAgZGVidWdMZXZlbCA9IGxldmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9nKG1lc3NhZ2U6IHN0cmluZywgaW1wb3J0YW5jZTogRGVidWdMZXZlbEVudW0pIHtcbiAgaWYgKGRlYnVnTGV2ZWwgPj0gaW1wb3J0YW5jZSkge1xuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSBcIi4vY29uc29sZV93cmFwcGVyXCI7XG5sb2coXCJmdW5jcyBsb2FkZWQuXCIsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tZW1wdHlcbmV4cG9ydCBmdW5jdGlvbiBub29wKCkge31cbmV4cG9ydCBmdW5jdGlvbiBub3coKTogbnVtYmVyIHtcbiAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufVxuIiwiaW1wb3J0IHsgRCB9IGZyb20gJy4uL2RvbS9kb2N1bWVudCc7XG5pbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSAnLi9jb25zb2xlX3dyYXBwZXInO1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vZnVuY3MnO1xubG9nKCdodG1sIGxvYWRlciBsb2FkZWQuJywgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGludGVyZmFjZSBDYWNoZSB7XG4gICAgW25hbWU6IHN0cmluZ106IEVsZW1lbnQ7XG59XG5leHBvcnQgY2xhc3MgSFRNTExvYWRlciB7XG4gICAgcHVibGljIHN0YXRpYyBDQUNIRTogQ2FjaGUgPSB7fTtcblxuICAgIHB1YmxpYyBzdGF0aWMgZmluaXNoKCkge1xuICAgICAgICBIVE1MTG9hZGVyLmZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgICAgSFRNTExvYWRlci5mbGF0dGVuVFNMb2FkVGFncygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgaXNGaW5pc2hlZCgpIHtcbiAgICAgICAgcmV0dXJuIEhUTUxMb2FkZXIuZmluaXNoZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjYWNoZUhUTUwobmFtZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKEhUTUxMb2FkZXIuZmluaXNoZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAnQ2Fubm90IGNhY2hlIG5ldyBIVE1MIGVudGl0aWVzIGFmdGVyIHRoZSBhcHBsaWNhdGlvbiBoYXMgYmVlbiBzdGFydGVkLidcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdHNsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHMtbG9hZCcpO1xuICAgICAgICB0c2wuZGF0YXNldC5uYW1lID0gbmFtZTtcbiAgICAgICAgdHNsLmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgICAgIHRoaXMuQ0FDSEVbbmFtZV0gPSB0c2w7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyByZWdpc3RlclBvc3RMb2FkRnVuYyhmdW5jOiAoKSA9PiBhbnkpIHtcbiAgICAgICAgbG9nKCdyZWdzaXRlciBwb3N0IGxvYWQgZnVuY3Rpb24nLCBEZWJ1Z0xldmVsRW51bS5ERVRBSUxFRCk7XG4gICAgICAgIEhUTUxMb2FkZXIucG9zdExvYWRGdW5jID0gZnVuYztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGxvYWQoaHRtbDogc3RyaW5nLCBlbGVtOiBFbGVtZW50IHwgc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxvZygnYmVnaW4gbG9hZCcsIERlYnVnTGV2ZWxFbnVtLkRFVEFJTEVEKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gRC5lbGVtKGVsZW0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICAgICAgICAgICAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMoY29udGV4dCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZnJhZyA9IHJhbmdlLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChodG1sKTtcbiAgICAgICAgICAgICAgICBIVE1MTG9hZGVyLnJlbW92ZVRhZ3NGcm9tRG9jdW1lbnRGcmFnbWVudChmcmFnLCAnc2NyaXB0Jyk7XG4gICAgICAgICAgICAgICAgSFRNTExvYWRlci5sb2FkQWxsQ2FjaGVkRWxlbWVudHMoZnJhZyk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICBjb250ZXh0LmFwcGVuZENoaWxkKGZyYWcpO1xuICAgICAgICAgICAgICAgIGxvZygnZW5kIGxvYWQnLCBEZWJ1Z0xldmVsRW51bS5ERVRBSUxFRCk7XG4gICAgICAgICAgICAgICAgSFRNTExvYWRlci5wb3N0TG9hZEZ1bmMoKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgbG9hZFVSTCh1cmw6IHN0cmluZywgZWxlbTogRWxlbWVudCB8IHN0cmluZykge1xuICAgICAgICByZXR1cm4gSFRNTExvYWRlci5sb2FkKGF3YWl0IEhUTUxMb2FkZXIuZ2V0SFRNTCh1cmwpLCBlbGVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEhUTUwodXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxvZygnYmVnaW4gcmVxdWVzdCcsIERlYnVnTGV2ZWxFbnVtLkRFVEFJTEVEKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJlcXVlc3Quc2VuZChudWxsKTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nKCdyZXNvbHZlIHJlcXVlc3QnLCBEZWJ1Z0xldmVsRW51bS5ERVRBSUxFRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZmluaXNoZWQgPSBmYWxzZTtcblxuICAgIHByaXZhdGUgc3RhdGljIHBvc3RMb2FkRnVuYzogKCkgPT4gYW55ID0gbm9vcDtcblxuICAgIHByaXZhdGUgc3RhdGljIHJlbW92ZVRhZ3NGcm9tRG9jdW1lbnRGcmFnbWVudChcbiAgICAgICAgZnJhZzogRG9jdW1lbnRGcmFnbWVudCxcbiAgICAgICAgdGFnTmFtZTogc3RyaW5nXG4gICAgKSB7XG4gICAgICAgIGZyYWcucXVlcnlTZWxlY3RvckFsbCh0YWdOYW1lKS5mb3JFYWNoKCh0YWcpID0+IGZyYWcucmVtb3ZlQ2hpbGQodGFnKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZmxhdHRlblRTTG9hZFRhZ3MoKSB7XG4gICAgICAgIGxvZygnRmxhdHRlbmluZycsIERlYnVnTGV2ZWxFbnVtLkRFVEFJTEVEKTtcbiAgICAgICAgY29uc3QgcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgICAgICBPYmplY3Qua2V5cyhIVE1MTG9hZGVyLkNBQ0hFKS5mb3JFYWNoKFxuICAgICAgICAgICAgKG5hbWUpID0+XG4gICAgICAgICAgICAgICAgKEhUTUxMb2FkZXIuQ0FDSEVbbmFtZV0gPSBIVE1MTG9hZGVyLmZsYXR0ZW5UU0xvYWRUYWcoXG4gICAgICAgICAgICAgICAgICAgIEhUTUxMb2FkZXIuZ2V0Q2FjaGVkQ29udGVudChuYW1lKSBhcyBFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICBzLFxuICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgKSBhcyBFbGVtZW50KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIG11bHRpcGxlVGFicyhuOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBsZXQgcmV0ID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICByZXQgKz0gJ1xcdCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBmbGF0dGVuVFNMb2FkVGFnKFxuICAgICAgICBlbGVtOiBFbGVtZW50LFxuICAgICAgICBmbGF0dGVuZWQ6IFNldDxzdHJpbmc+LFxuICAgICAgICBjb3VudDogbnVtYmVyXG4gICAgKTogRWxlbWVudCB8IG51bGwge1xuICAgICAgICBjb25zdCB0YWJzID0gSFRNTExvYWRlci5tdWx0aXBsZVRhYnMoY291bnQpO1xuICAgICAgICBpZiAoY291bnQgPiAxMDApIHtcbiAgICAgICAgICAgIGFsZXJ0KCdDaGVjayB0aGUgY29uc29sZSwgYW4gZXJyb3IgaGFzIG9jY3VycmVkLicpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICdJdCBzZWVtcyBsaWtlIHlvdSBtaWdodCBoYXZlIGluZmluaXRlbHkgcmVjdXJzaXZlbHkgbmVzdGVkIHRhZ3MuJyArXG4gICAgICAgICAgICAgICAgICAgICdcXG5IZXJlIGFyZSBhbGwgb2YgdGhlIHRhZ3MgdGhhdCBoYXZlIGJlZW4gZmxhdHRlbmVkIHNvIGZhcjogJyArXG4gICAgICAgICAgICAgICAgICAgIGZsYXR0ZW5lZCArXG4gICAgICAgICAgICAgICAgICAgICdcXG5IZXJlIGlzIHRoZSBuYW1lIG9mIHRoZSBjdXJyZW50IGVsZW1lbnQ6ICcgK1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmFtZSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKTtcbiAgICAgICAgaWYgKG5hbWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBIVE1MTG9hZGVyLmdldENhY2hlZENvbnRlbnQobmFtZSk7XG4gICAgICAgIGlmIChjb250ZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmxhdHRlbmVkLmhhcyhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHQnKS5mb3JFYWNoKChlKSA9PiBlLnJlbW92ZSgpKTtcbiAgICAgICAgY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCd0cy1sb2FkJykuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBIVE1MTG9hZGVyLmZsYXR0ZW5UU0xvYWRUYWcoZSwgZmxhdHRlbmVkLCBjb3VudCArIDEpO1xuICAgICAgICAgICAgaWYgKGNoaWxkICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZS5yZXBsYWNlV2l0aChjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBmbGF0dGVuZWQuYWRkKG5hbWUpO1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBnZXRDYWNoZWRDb250ZW50KFxuICAgICAgICBuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkXG4gICAgKTogRWxlbWVudCB8IG51bGwge1xuICAgICAgICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkIHx8IG5hbWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBIVE1MTG9hZGVyLkNBQ0hFW25hbWVdO1xuICAgICAgICBpZiAoY29udGVudCA9PT0gdW5kZWZpbmVkIHx8IGNvbnRlbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZW50LmNsb25lTm9kZSh0cnVlKSBhcyBFbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGxvYWRBbGxDYWNoZWRFbGVtZW50cyhmcmFnOiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICAgIGZyYWcucXVlcnlTZWxlY3RvckFsbCgndHMtbG9hZCcpLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJyk7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gSFRNTExvYWRlci5nZXRDYWNoZWRDb250ZW50KG5hbWUpO1xuICAgICAgICAgICAgaWYgKGNvbnRlbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGVsZW0ucmVwbGFjZVdpdGgoY29udGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSBcIi4uL2RvbS9lbGVtZW50c1wiO1xuaW1wb3J0IHsgRCB9IGZyb20gXCIuLy4uL2RvbS9kb2N1bWVudFwiO1xuaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gXCIuL2NvbnNvbGVfd3JhcHBlclwiO1xubG9nKFwiaWQgZ2VuZXJhdG9yIGxvYWRlZFwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgY2xhc3MgSURHZW5lcmF0b3Ige1xuICBwdWJsaWMgc3RhdGljIHJlc2V0KCkge1xuICAgIElER2VuZXJhdG9yLmlkQ291bnQgPSAwO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXQgbmV4dCgpIHtcbiAgICBJREdlbmVyYXRvci5pZENvdW50ICs9IDE7XG4gICAgcmV0dXJuIElER2VuZXJhdG9yLnByZWZpeCArIElER2VuZXJhdG9yLmlkQ291bnQ7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGFwcGx5SUQoZWxlbTogRWxlbWVudCkge1xuICAgIGVsZW0uaWQgPSBlbGVtLmlkID8gZWxlbS5pZCA6IElER2VuZXJhdG9yLm5leHQ7XG4gIH1cblxuICAvKipcbiAgICogUmVjdXJzaXZlbHkgYWRkcyBpZHMgdG8gYWxsIGVsZW1lbnRzIHRoYXQgYXJlIGJlbG93IHRoZSBnaXZlblxuICAgKiBlbGVtZW50IGluIHRoZSBoZWlyYXJjaHkuXG4gICAqXG4gICAqIEBwYXJhbSBlbGVtIC0gdGhlIGVsZW1lbnQgdG8gc3RhcnQgYXBwbHlpbmcgaWRzIHRvIGl0cyBjaGlsZHJlbi5cbiAgICogICAgICAgICAgICAgICAgICBXaWxsIG5vdCBhcHBseSBhbiBpZCB0byB0aGlzIGVsZW1lbnQuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGFwcGx5UmVjdXIoZWxlbTogRWxlbWVudCB8IHN0cmluZykge1xuICAgIEQuZWFjaFJlY3VyKGVsZW0sIHRoaXMuYXBwbHlJRCk7XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoZXMgaWRzIHRvIGFsbCBodG1sIGVsZW1lbnRzIGluIHRoZSB0YXJnZXQgbG9jYXRpb24gaW4gdGhlIERPTSB0aGF0IGRvIG5vdCBoYXZlIGlkcy5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgYXR0YWNoSWRzVG9BbGxFbGVtZW50cygpIHtcbiAgICBJREdlbmVyYXRvci5hcHBseVJlY3VyKEVsZW1lbnRzLmh0bWxMb2MpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgaWRDb3VudCA9IDA7XG4gIHByaXZhdGUgc3RhdGljIHByZWZpeCA9IFwiYXV0b19nZW5faWRfdW5xX1wiO1xufVxuIiwiY29uc3QgcVBhcmFtcyA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpLnNlYXJjaFBhcmFtcztcclxuZXhwb3J0IGNvbnN0IHBhcmFtcyA9IHtcclxuICAgIHd1c3RsX2tleTogJycsXHJcbiAgICBzYW5kYm94OiBmYWxzZSxcclxuICAgIHByb2plY3Q6ICcnLFxyXG4gICAgaXRlcmF0aW9uOiAwLFxyXG4gICAgdGFnOiAnJyxcclxufTtcclxudHJ5IHtcclxuICAgIHFQYXJhbXMuZm9yRWFjaChjb25zb2xlLmxvZyk7XHJcbiAgICBpZiAoXHJcbiAgICAgICAgWyd3dXN0bF9rZXknLCAnc2FuZGJveCcsICdwcm9qZWN0JywgJ2l0ZXJhdGlvbicsICd0YWcnXS5ldmVyeSgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdrZXk6ICcgKyBxUGFyYW1zLmhhcyhrZXkpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHFQYXJhbXMuaGFzKGtleSk7XHJcbiAgICAgICAgfSlcclxuICAgICkge1xyXG4gICAgICAgIHBhcmFtcy53dXN0bF9rZXkgPSBxUGFyYW1zLmdldCgnd3VzdGxfa2V5JykgYXMgc3RyaW5nO1xyXG4gICAgICAgIHBhcmFtcy5zYW5kYm94ID0gcVBhcmFtcy5nZXQoJ3NhbmRib3gnKSA9PT0gJ3RydWUnO1xyXG4gICAgICAgIHBhcmFtcy5wcm9qZWN0ID0gcVBhcmFtcy5nZXQoJ3Byb2plY3QnKSBhcyBzdHJpbmc7XHJcbiAgICAgICAgcGFyYW1zLml0ZXJhdGlvbiA9IHBhcnNlSW50KHFQYXJhbXMuZ2V0KCdpdGVyYXRpb24nKSBhcyBzdHJpbmcsIDEwKTtcclxuICAgICAgICBwYXJhbXMudGFnID0gcVBhcmFtcy5nZXQoJ3RhZycpIGFzIHN0cmluZztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ21pc3NpbmcgcXVlcnkgcGFyYW1zJyk7XHJcbiAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAgICdUaGlzIEhJVCBpcyBtaXNzaW5nIG5lY2Nlc3NhcnkgbWV0YWRhdGEsIHNvcnJ5IGZvciB0aGUgaW5jb252ZW5pZW5jZS4gUGxlYXNlIGNvbnRhY3QgdGhlIFJlcXVlc3RlciBhcyB0aGlzIGlzIG5vdCBpbnRlbmRlZCB0byBoYXBwZW4uJ1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgYWxlcnQoZSk7XHJcbiAgICBhbGVydChcclxuICAgICAgICAnVGhpcyBISVQgaXMgYnJva2VuLCBzb3JyeSBmb3IgdGhlIGluY29udmVuaWVuY2UuIFBsZWFzZSBjb250YWN0IHRoZSBSZXF1ZXN0ZXIgYXMgdGhpcyBpcyBub3QgaW50ZW5kZWQgdG8gaGFwcGVuLidcclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gXCIuL2NvbnNvbGVfd3JhcHBlclwiO1xuXG5sb2coXCJyZWFkeSBsb2FkZWRcIiwgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuXG5sZXQgcmVhZHkgPSBmYWxzZTtcblxubGV0IHJlc29sdmVGdW5jOiAodmFsOiBib29sZWFuKSA9PiBhbnk7XG5sZXQgcmVqZWN0RnVuYztcbmNvbnN0IHJlYWR5UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlOiAodmFsOiBib29sZWFuKSA9PiBhbnksIHJlamVjdCkgPT4ge1xuICByZXNvbHZlRnVuYyA9IHJlc29sdmU7XG4gIHJlamVjdEZ1bmMgPSByZWplY3Q7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBsb2coXCJkb2N1bWVudCBpcyByZWFkeVwiLCBEZWJ1Z0xldmVsRW51bS5ERVRBSUxFRCk7XG4gIHJlYWR5ID0gdHJ1ZTtcbiAgcmVzb2x2ZUZ1bmModHJ1ZSk7XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVhZHkoKSB7XG4gIHJldHVybiByZWFkeTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3YWl0VW50aWxSZWFkeSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgcmV0dXJuIHJlYWR5ID8gUHJvbWlzZS5yZXNvbHZlKHRydWUpIDogcmVhZHlQcm9taXNlO1xufVxuIiwiZXhwb3J0IGludGVyZmFjZSBTY2VuYXJpbyB7XHJcbiAgICBjb250ZXh0OiBzdHJpbmc7XHJcbiAgICBxdWVzdGlvbjogc3RyaW5nO1xyXG4gICAgdGFnOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdmFyLXJlcXVpcmVzXHJcbmV4cG9ydCBjb25zdCBzY2VuYXJpb3M6IFNjZW5hcmlvW10gPSByZXF1aXJlKCcuLy4uLy4uLy4uLy4uL3NjZW5hcmlvcy9zY2VuYXJpb3MuanNvbicpO1xyXG4od2luZG93IGFzIGFueSkuc2NlbmFyaW9zID0gc2NlbmFyaW9zO1xyXG4iLCJpbXBvcnQgeyBEIH0gZnJvbSBcIi4vLi4vY29yZS9kb20vZG9jdW1lbnRcIjtcblxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbiB7XG4gIHB1YmxpYyBzdGF0aWMgc2V0dXBBbGwoKSB7XG4gICAgQWNjb3JkaW9uLmRpc2NhcmRBbGwoKTtcbiAgICBjb25zdCBhY2NvcmRpb25zID0gRC5jbGF6KFwiYWNjb3JkaW9uXCIpO1xuICAgIGZvciAobGV0IGFjY0luZGV4ID0gMDsgYWNjSW5kZXggPCBhY2NvcmRpb25zLmxlbmd0aDsgKythY2NJbmRleCkge1xuICAgICAgY29uc3QgZWxlbSA9IGFjY29yZGlvbnMuaXRlbShhY2NJbmRleCk7XG4gICAgICBpZiAoZWxlbSA9PSBudWxsKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgQWNjb3JkaW9uLmFjY29yZGlvbnMucHVzaChuZXcgQWNjb3JkaW9uKGVsZW0pKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRpc2NhcmRBbGwoKSB7XG4gICAgQWNjb3JkaW9uLmFjY29yZGlvbnMgPSBbXTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGFjY29yZGlvbnM6IEFjY29yZGlvbltdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdXRlcjogRWxlbWVudCkge1xuICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihvdXRlciwgXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvKiBUb2dnbGUgYmV0d2VlbiBhZGRpbmcgYW5kIHJlbW92aW5nIHRoZSBcImFjdGl2ZVwiIGNsYXNzLFxuICAgICAgICAgICAgICAgIHRvIGhpZ2hsaWdodCB0aGUgYnV0dG9uIHRoYXQgY29udHJvbHMgdGhlIHBhbmVsICovXG4gICAgICB0aGlzLm91dGVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cbiAgICAgIC8qIFRvZ2dsZSBiZXR3ZWVuIGhpZGluZyBhbmQgc2hvd2luZyB0aGUgYWN0aXZlIHBhbmVsICovXG4gICAgICBjb25zdCBwYW5lbCA9IHRoaXMub3V0ZXIubmV4dEVsZW1lbnRTaWJsaW5nIGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKHBhbmVsLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAgICAgICBwYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZG9Tb21ldGhpbmcoKSB7XG4gIGNvbnNvbGUubG9nKFwiUHV0IHNvbWUgY29kZSBpbiBoZXJlIVwiKTtcbn1cbiIsImltcG9ydCB7IEhUTUxMb2FkZXIgfSBmcm9tICcuLi9jb3JlL3V0aWxzL2h0bWxfbG9hZGVyJztcbmltcG9ydCB7IEFjY29yZGlvbiB9IGZyb20gJy4vYWNjb3JkaW9uJztcbmltcG9ydCB7IGRvU29tZXRoaW5nIH0gZnJvbSAnLi9kby1zb21ldGhpbmcnO1xuaW1wb3J0IHsgSFRNTENvbnRlbnQsIGl0ZW1zVG9DYWNoZSB9IGZyb20gJy4vaHRtbC1pbXBvcnRzJztcbmltcG9ydCB7IFNsaWRlc2hvdyB9IGZyb20gJy4vc2xpZGVzaG93JztcblxuLy8gUHV0IGFsbCBmdW5jdGlvbiBjYWxscyB0aGF0IG5lZWQgdG8gYmUgbWFkZSBvbiBldmVyeSBwYWdlIGxvYWQgaW5zaWRlIHRoZSBzZXR1cEFsbCBmdW5jdGlvbiBib2R5LlxuZXhwb3J0IGZ1bmN0aW9uIFB1dFN0dWRlbnRQYWdlTG9hZE9wZXJhdGlvbnNJbnNpZGVUaGlzU3R1ZGVudEJvZHkoKSB7XG4gICAgLy8gVE9ETzogUHV0IGFsbCBvcGVyYXRpb25zIHRoYXQgeW91IHdhbnQgdG8gaGFwcGVuIG9uIGV2ZXIgcGFnZSBsb2FkIGluIHRoaXMgZnVuY3Rpb24uXG4gICAgLy8gRm9yIGV4YW1wbGUgeW91IGNvdWxkIHdyaXRlOiBTdGlja3kuc2V0dXAoKVxuICAgIGRvU29tZXRoaW5nKCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXR1cEFsbCgpIHtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocjogYW55KSA9PiBzZXRUaW1lb3V0KHIsIDEwMCkpO1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWRpbmcnKTtcbiAgICBTbGlkZXNob3cuc2V0dXBBbGwoKTtcbiAgICBBY2NvcmRpb24uc2V0dXBBbGwoKTtcbiAgICBQdXRTdHVkZW50UGFnZUxvYWRPcGVyYXRpb25zSW5zaWRlVGhpc1N0dWRlbnRCb2R5KCk7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZGVkJyk7XG59XG5cbml0ZW1zVG9DYWNoZS5mb3JFYWNoKChpdGVtOiBIVE1MQ29udGVudCkgPT4ge1xuICAgIEhUTUxMb2FkZXIuY2FjaGVIVE1MKGl0ZW0ubmFtZSwgaXRlbS5jb250ZW50KTtcbn0pO1xuKHdpbmRvdyBhcyBhbnkpLkhUTUxMb2FkZXIgPSBIVE1MTG9hZGVyO1xuXG5jb25zb2xlLmxvZygnZHluYW1pYy1kb20gbG9hZGVkJyk7XG4vLyBEbyBub3QgdG91Y2ggdGhpcyBsaW5lLCBuZWVkZWQgdG8gcmVpbml0aWFsaXplIGNvZGUgaW4gdGhlIGR5bmFtaWMtZG9tLnRzIHNldHVwQWxsIGZ1bmN0aW9uXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbmV3UGFnZUxvYWQnLCAoKSA9PiBzZXR1cEFsbCgpKTtcbiIsImRlY2xhcmUgZnVuY3Rpb24gcmVxdWlyZShpZDogc3RyaW5nKTogc3RyaW5nO1xuXG4vLyBUaGlzIGRlZmluZXMgdGhlIGRhdGEgdGhhdCBuZWVkcyB0byBiZSBwYXNzZWQgdG8gdGhlIEhUTUxMb2FkZXIgdG8gY2FjaGUgeW91ciBodG1sIGNvbnRlbnQuXG5leHBvcnQgaW50ZXJmYWNlIEhUTUxDb250ZW50IHtcbiAgICBuYW1lOiBzdHJpbmc7IC8vIFRoZSBuYW1lIHRoYXQgeW91IHdpbGwgdXNlIHRvIHJlZmVyZW5jZSB0aGUgY29udGVudCBpbiB5b3VyIGh0bWwgcGFnZXMuXG4gICAgY29udGVudDogc3RyaW5nOyAvLyBUaGUgYWN0dWFsIGh0bWwgc3RyaW5nIHRoYXQgd2lsbCBiZSBwdWxsZWQgZnJvbSB0aGUgc291cmNlIGZpbGUgdGhhdCB5b3Ugc3BlY2lmeS5cbn1cblxuLy8gQW4gSFRNTENvbnRlbnQgb2JqZWN0IHNob3VsZCBsb29rIGxpa2UgdGhlIGZvbGxvd2luZzpcbi8vIHtcbi8vICAgICBuYW1lOiAnZm9vdGVyJyxcbi8vICAgICBjb250ZW50OiByZXF1aXJlKCcuL2h0bWwvZm9vdGVyLmh0bWwnKSxcbi8vIH1cblxuLy8gVGhlbiB5b3UgY2FuIHJlZmVyZW5jZSB0aGF0IGNvbnRlbnQgaW4geW91ciBodG1sIHVzaW5nIHRoZSBmb2xsb3dpbmcgdGFnIHdpdGggdGhlIGNvcnJlc3BvbmRpbmcgbmFtZSBhdHRyaWJ1dGUuXG4vLyA8dHMtbG9hZCBkYXRhLW5hbWU9XCJoZWFkZXJcIj48L3RzLWxvYWQ+XG5cbi8vIFlvdSBjYW4gc3BlY2lmeSBhcyBtYW55IGFzIHlvdSB3YW50IGluc2lkZSBvZiB0aGUgYXJyYXkgYW5kIHRoZXkgd2lsbCBhbGwgYmUgYnVuZGxlZCB1cCB3aXRoIHlvdXIgd2Vic2l0ZS5cbi8vIE1ha2Ugc3VyZSB0byBtYWtlIGEgY29ycmVzcG9uZGluZyBodG1sIGZpbGUgaW4gdGhlIGh0bWwgZmlsZSBmb2xkZXIgZm9yIGVhY2ggZWxlbWVudCB5b3Ugc3BlY2lmeS5cblxuZXhwb3J0IGNvbnN0IGl0ZW1zVG9DYWNoZSA9IFtcbiAgICAvLyBGZWVsIGZyZWUgdG8gY2hhbmdlIHRoZSBjb250ZW50IGluc2lkZSBhbnkgb2YgdGhlIGh0bWwgZmlsZXMgaW4gdGhlIGh0bWwgZmlsZSBmb2xkZXIgdG8gc3VpdCB5b3VyIG5lZWRzLlxuICAgIHtcbiAgICAgICAgbmFtZTogJ2hlYWRlcicsXG4gICAgICAgIGNvbnRlbnQ6IHJlcXVpcmUoJy4vaHRtbC9oZWFkZXIuaHRtbCcpLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnZm9vdGVyJyxcbiAgICAgICAgY29udGVudDogcmVxdWlyZSgnLi9odG1sL2Zvb3Rlci5odG1sJyksXG4gICAgfSxcbiAgICAvLyBQdXQgbW9yZSBpdGVtcyBpbiB0aGUgYXJyYXkgYmVsb3cgaGVyZS5cbl07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvb3RlciBpZD1cXFwiY29sb3Bob25cXFwiIGNsYXNzPVxcXCJmb290ZXJcXFwiIHJvbGU9XFxcImNvbnRlbnRpbmZvXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvb3Rlci13aWRnZXRzXFxcIj5cXG4gICAgICA8YXNpZGUgY2xhc3M9XFxcIndpZGdldCBzaXRlLWNvbnRhY3RcXFwiPlxcbiAgICAgICAgPGgyIGNsYXNzPVxcXCJmb290ZXItd2lkZ2V0LXRpdGxlXFxcIj5OdXJzZXJ5IFNjaG9vbDwvaDI+XFxuICAgICAgICA8cD42OTI2IEZvcmVzdCBQYXJrIFBhcmt3YXk8L3A+XFxuICAgICAgICA8cD5TdC4gTG91aXMsIE1PIDYzMTMwPC9wPlxcbiAgICAgICAgPHAgY2xhc3M9XFxcInBob25lXFxcIj4zMTQtOTM1LTY2ODkgPHNwYW4+fDwvc3Bhbj4gRmF4OiAzMTQtOTM1LTcyNDk8L3A+XFxuICAgICAgICA8cD5cXG4gICAgICAgICAgPGEgaHJlZj1cXFwiZmlsZXMvbWFpbHRvOm51cnNlcnlAd3VzdGwuZWR1XFxcIj5udXJzZXJ5QHd1c3RsLmVkdTwvYT5cXG4gICAgICAgIDwvcD5cXG4gICAgICA8L2FzaWRlPlxcblxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIndpZGdldC13cmFwcGVyXFxcIj5cXG4gICAgICAgIDxhc2lkZSBpZD1cXFwidGV4dC00XFxcIiBjbGFzcz1cXFwid2lkZ2V0IHdpZGdldF90ZXh0IHdpZGdldC1jb3VudC0yXFxcIj5cXG4gICAgICAgICAgPGgyIGNsYXNzPVxcXCJmb290ZXItd2lkZ2V0LXRpdGxlXFxcIj5Ib3VycyBvZiBPcGVyYXRpb248L2gyPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0d2lkZ2V0XFxcIj5cXG4gICAgICAgICAgICA8cD5cXG4gICAgICAgICAgICAgIENsYXNzZXMgbWVldCBNb24uIHRocm91Z2ggRnJpLjxiciAvPlxcbiAgICAgICAgICAgICAgTW9ybmluZzogOS0xMTo0NSBhLm0uPGJyIC8+XFxuICAgICAgICAgICAgICBBZnRlcm5vb246IDEyOjMwLTM6MTUgcC5tLjxiciAvPlxcbiAgICAgICAgICAgICAgRnVsbCBkYXk6IDkgYS5tLi0zOjE1IHAubS5cXG4gICAgICAgICAgICA8L3A+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9hc2lkZT5cXG4gICAgICAgIDxhc2lkZSBpZD1cXFwidGV4dC0zXFxcIiBjbGFzcz1cXFwid2lkZ2V0IHdpZGdldF90ZXh0IHdpZGdldC1jb3VudC0yXFxcIj5cXG4gICAgICAgICAgPGgyIGNsYXNzPVxcXCJmb290ZXItd2lkZ2V0LXRpdGxlXFxcIj5BcHBseSBmb3IgdGhlIE51cnNlcnkgU2Nob29sPC9oMj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGV4dHdpZGdldFxcXCI+XFxuICAgICAgICAgICAgPHA+XFxuICAgICAgICAgICAgICBFeHBlcmllbmNlIHRoZSBpbm5vdmF0aXZlIGFwcHJvYWNoIGFuZCBkeW5hbWljIHRlYWNoaW5nXFxuICAgICAgICAgICAgICBlbnZpcm9ubWVudCBvZiB0aGUgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sLlxcbiAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICA8YSBocmVmPVxcXCJmaWxlcy9hcHBseS5odG1sXFxcIj5SZWdpc3RlciBOb3c8L2E+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9hc2lkZT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNpdGUtaW5mb1xcXCI+XFxuICAgICAgPHAgY2xhc3M9XFxcImZvb3Rlci1jb3B5cmlnaHRcXFwiPsKpMjAxOSBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgaW4gU3QuIExvdWlzPC9wPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZm9vdGVyPlwiO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgaWQ9XFxcInd1c3RsLWJyYW5kaW5nXFxcIj5cXG4gIDxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB3aWR0aD1cXFwiMzIxXFxcIiBoZWlnaHQ9XFxcIjI4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMzIxIDI4XFxcIiBjbGFzcz1cXFwid2FzaHUtbG9nb1xcXCJcXG4gICAgYXJpYS1sYWJlbGxlZGJ5PVxcXCJ0aXRsZVxcXCI+XFxuICAgIDx0aXRsZSBpZD1cXFwidGl0bGVcXFwiPldhc2hpbmd0b24gVW5pdmVyc2l0eSBpbiBTdC4gTG91aXM8L3RpdGxlPlxcbiAgICA8cGF0aCBmaWxsPVxcXCIjRkZGXFxcIlxcbiAgICAgIGQ9XFxcIk0xMC40NiAxLjc2Yy0uMDkgMC00LjQxLjA0LTEwLjQ2LTEuMjFWMThjMCAuMjcuMDEuNDcuMDEuNDd2LjAyYy4wNC44MS4yOCAxLjQ1Ljc3IDIgLjMyLjM0Ljc2LjcgMS4zOCAxLjA1LjE3LjEuMzUuMTguNTUuMjguMTUuMDcuMzEuMTQuNDcuMi4xNC4wNi41NS4yNC42OS4yOWw2LjU5IDIuNSA2LjU5LTIuNWMuMTUtLjA1LjU2LS4yNC42OS0uMjkuMTYtLjA3LjMyLS4xNC40Ny0uMi4xOS0uMS4zOC0uMTguNTUtLjI4LjYyLS4zNSAxLjA2LS43IDEuMzgtMS4wNS40OC0uNTUuNzMtMS4xOS43Ny0ydi0uMDJzMC0uMTkuMDEtLjQ3Vi41NUMxNC44NiAxLjggMTAuNTUgMS43NiAxMC40NiAxLjc2elxcXCI+XFxuICAgIDwvcGF0aD5cXG4gICAgPHBhdGggZmlsbD1cXFwiIzAwNzM2MFxcXCJcXG4gICAgICBkPVxcXCJNMTAuNDYgMi44Yy0uMDkgMC00LjAzLjA0LTkuNTYtMS4xdjE1Ljk1YzAgLjI1LjAxLjQzLjAxLjQ0di4wMmMuMDQuNzQuMjUgMS4zMy43IDEuODMuMjkuMzEuNy42NCAxLjI2Ljk1LjE1LjA5LjMyLjE3LjUuMjYuMTQuMDcuMjguMTMuNDQuMTkuMTIuMDUuNS4yMi42My4yN2w2LjAzIDIuMjkgNi4wMy0yLjI5Yy4xMy0uMDUuNTEtLjIyLjYzLS4yNy4xNS0uMDYuMy0uMTMuNDQtLjE5LjE4LS4wOS4zNS0uMTcuNS0uMjYuNTYtLjMxLjk3LS42NCAxLjI2LS45NS40NC0uNS42Ni0xLjA5LjctMS44M3YtLjAyczAtLjE4LjAxLS40NFYxLjdjLTUuNTUgMS4xNC05LjUgMS4xLTkuNTggMS4xelxcXCI+XFxuICAgIDwvcGF0aD5cXG4gICAgPHBhdGggZmlsbD1cXFwiI0UxQzRBQ1xcXCJcXG4gICAgICBkPVxcXCJNMTAuNDYgMy43NWMtLjA4IDAtMy42OC4wNC04Ljc0LTEuMDJ2NC4wOGM1LjA1IDEuMDUgOC42NyAxLjAyIDguNzQgMS4wMnMzLjY4LjA0IDguNzQtMS4wMlYyLjczYy01LjA2IDEuMDUtOC42NiAxLjAyLTguNzQgMS4wMnpcXFwiPlxcbiAgICA8L3BhdGg+XFxuICAgIDxwYXRoIGZpbGw9XFxcIiNBNTE0MTdcXFwiXFxuICAgICAgZD1cXFwiTTEwLjQ2IDcuODNjLS4wOCAwLTMuNjguMDQtOC43NC0xLjAydjkuMDVjNS4wNSAxLjA1IDguNjcgMS4wMiA4Ljc0IDEuMDJzMy42OC4wNCA4Ljc0LTEuMDJWNi44MmMtNS4wNiAxLjA0LTguNjYgMS4wMS04Ljc0IDEuMDF6XFxcIj5cXG4gICAgPC9wYXRoPlxcbiAgICA8cGF0aCBmaWxsPVxcXCIjRTFDNEFDXFxcIlxcbiAgICAgIGQ9XFxcIk0xLjcyIDE3LjcyYy4wMy42OS4yMyAxLjIzLjY0IDEuNjguMjYuMjguNjQuNTggMS4xNS44Ny4xNS4wOC4yOS4xNS40Ni4yMy4xMy4wNi4yNi4xMi40LjE3LjExLjA1LjQ2LjIuNTguMjRMMTAuNDYgMjNsNS41MS0yLjA5Yy4xMi0uMDQuNDYtLjIuNTgtLjI0LjE0LS4wNi4yNy0uMTIuNC0uMTcuMTYtLjA4LjMyLS4xNS40Ni0uMjMuNTEtLjI5Ljg4LS41OCAxLjE1LS44Ny40MS0uNDYuNi0xIC42NC0xLjY4di0uMDJzMC0uMTYuMDEtLjR2LTEuNDRjLTUuMDUgMS4wNS04LjY3IDEuMDItOC43NCAxLjAycy0zLjY4LjA0LTguNzQtMS4wMnYxLjQ1Yy0uMDIuMjUtLjAxLjQxLS4wMS40MXpcXFwiPlxcbiAgICA8L3BhdGg+XFxuICAgIDxwYXRoIGZpbGw9XFxcIiMwMDczNjBcXFwiXFxuICAgICAgZD1cXFwiTTQuOCAzLjY5bC40MSAxLjIzIDEuMjkuMDEtMS4wNC43Ny4zOSAxLjI0LTEuMDUtLjc2LTEuMDUuNzYuMzktMS4yNC0xLjA0LS43NyAxLjI5LS4wMS40MS0xLjIzem0xMS4zMSAwbC40MiAxLjIzIDEuMjkuMDEtMS4wNC43Ny4zOSAxLjI0LTEuMDYtLjc2LTEuMDUuNzYuMzktMS4yNC0xLjA0LS43NyAxLjI5LS4wMS40MS0xLjIzem0tNS42NS40OGwuNDIgMS4yMyAxLjI5LjAxLTEuMDQuNzcuMzkgMS4yNC0xLjA2LS43Ni0xLjA2Ljc1LjM5LTEuMjQtMS4wNC0uNzcgMS4zLS4wMS40MS0xLjIyek0xMC40NiAxNy4yMWwtLjQ2LjQ1djEuMjJsLjIzLjY1djEuMDloLjQ1di0xLjA5bC4yMy0uNjV2LTEuMjJsLS40NS0uNDV6bS4yMiA0LjQxdi0uNjVoLS40NXYuNjVsLS4yMy40Mi40Ni41Ni40Ni0uNTYtLjI0LS40MnptLjMzLS42NXYuNWwuMjkuMzEuNTEtLjQxdi0uNDFoLS44em0uNTQtMi4wNGwtLjU0LjZ2MS4wOWguNDR2LS42NWwuNDMtLjQ2LjU1LjM2LjM1LS4zNnYtLjU4aC0xLjIzem0tMS42NCAyLjA0di41bC0uMjkuMzEtLjUyLS40MXYtLjQxaC44MXptLS41NS0yLjA0bC41NC42djEuMDloLS40M3YtLjY1bC0uNDMtLjQ2LS41NS4zNi0uMzUtLjM2di0uNThoMS4yMnpcXFwiPlxcbiAgICA8L3BhdGg+XFxuICAgIDxwYXRoIGZpbGw9XFxcIiNFMUM0QUNcXFwiXFxuICAgICAgZD1cXFwiTTE0LjYyIDkuMjd2NS4xOWgtMy40OWwtLjI1LjIxLS40My4zNy0uNDMtLjM3LS4yNS0uMjFINi4yOVY5LjI3bC0uNzQuNTR2NS4zOGg0LjEybC4zNy4zMS40My4zOC40My0uMzguMzctLjMxaDQuMTJWOS44MWwtLjc3LS41NHpcXFwiPlxcbiAgICA8L3BhdGg+XFxuICAgIDxwYXRoIGZpbGw9XFxcIiNFMUM0QUNcXFwiXFxuICAgICAgZD1cXFwiTTExLjAyIDguODNsLS4xNC4xMS0uNDMuMzgtLjQzLS4zOC0uMTItLjExSDcuMDN2NC44OWgyLjg4bC4yLjE3LjM1LjMxLjM2LS4zMS4xOS0uMTdoMi44OFY4LjgzaC0yLjg3ek0xNi4xMSAxMC4zNXYzLjMxYy45NS0uMTQgMS45OC0uMzEgMy4wOC0uNTRWOS44MWE1MC41IDUwLjUgMCAwIDEtMy4wOC41NHptLTExLjMxIDBjLS45NS0uMTQtMS45OC0uMzEtMy4wOC0uNTR2My4zMWMxLjEuMjMgMi4xNC40MSAzLjA4LjU0di0zLjMxelxcXCI+XFxuICAgIDwvcGF0aD5cXG4gICAgPHBhdGggZmlsbD1cXFwiIzAwNzM2MFxcXCJcXG4gICAgICBkPVxcXCJNMTYuMTEgMTYuNzZsLS4zMS4zMnYuODZsLjE1LjQ2di43N2guMzF2LS43N2wuMTYtLjQ2di0uODZsLS4zMS0uMzJ6bS4xNiAzLjA5di0uNDVoLS4zMXYuNDZsLS4xNS4zLjMxLjQuMzItLjQtLjE3LS4zMXptLjIzLS40NXYuMzVsLjIuMjIuMzYtLjI4di0uMjloLS41NnptLjM4LTEuNDNsLS4zOC40M3YuNzdoLjMxdi0uNDZsLjMtLjMzLjM4LjI1LjI0LS4yNXYtLjQxaC0uODV6bS0xLjE0IDEuNDN2LjM1bC0uMjEuMjItLjM1LS4yOHYtLjI5aC41NnptLS4zOS0xLjQzbC4zOS40M3YuNzdoLS4zMXYtLjQ2bC0uMy0uMzMtLjM5LjI1LS4yNC0uMjV2LS40MWguODV6TTQuOCAxNi43NmwtLjMyLjMydi44NmwuMTYuNDZ2Ljc3aC4zMXYtLjc3bC4xNS0uNDZ2LS44NmwtLjMtLjMyem0uMTYgMy4wOXYtLjQ1aC0uMzF2LjQ2bC0uMTYuMy4zMi40LjMxLS40LS4xNi0uMzF6bS4yMi0uNDV2LjM1bC4yMS4yMi4zNS0uMjh2LS4yOWgtLjU2em0uMzktMS40M2wtLjM5LjQzdi43N2guMzF2LS40NmwuMy0uMzMuMzkuMjUuMjQtLjI1di0uNDFoLS44NXpNNC40MiAxOS40di4zNWwtLjIuMjItLjM2LS4yOHYtLjI5aC41NnptLS4zOC0xLjQzbC4zOC40M3YuNzdoLS4zMXYtLjQ2bC0uMy0uMzMtLjM4LjI1LS4yNC0uMjV2LS40MWguODV6XFxcIj5cXG4gICAgPC9wYXRoPlxcbiAgICA8ZyBmaWxsPVxcXCIjRkZGXFxcIiBjbGFzcz1cXFwid2FzaHUtbG9nby10ZXh0XFxcIj5cXG4gICAgICA8cGF0aFxcbiAgICAgICAgZD1cXFwiTTIzMi40NyA4LjE2Yy4zMyAwIDEuMDctMS4yIDEuMDctMS41NyAwLS4zNi0uNzQtMS42LTEuMDctMS42LS4zIDAtMS4wNyAxLjI2LTEuMDcgMS42cy43NiAxLjU3IDEuMDcgMS41N3ptMTMuODIgMTIuMDN2LTUuMDhjMC0yLjM0LS43Ni01Ljc2LTQuMjItNS43Ni0yLjUxIDAtMy44MSAyLjM4LTMuNzYgMi4wMVY5LjU5YzAtLjMxLS4xNS0uNDktLjMxLS40OS0uNiAwLTEuMDQgMS4wMS0zLjA2IDEuNjItLjEzLjAzLS41LjA0LS41MS4yNyAwIC42NSAyLjAzLS44NCAxLjk5IDEuNjh2Ny42NGMwIDEuNDMtLjcgMS41NS0xLjIxIDEuNjgtLjAzIDAtLjA2LS4wMS0uMSAwLS41Mi0uMDMtMS42My0uMjMtMS42My0xLjM1VjkuNTljMC0uMzEtLjE1LS40OS0uMzEtLjQ5LS42IDAtLjk4IDEuMDgtMi42MyAxLjY0LS4xMy4wMy0uMzcuMDYtLjM3LjI0IDAgLjY1IDEuNDktLjYxIDEuNDIgMS42OXY3LjI3Yy4wNiAxLjg2LS45NiAyLjA0LTEuNTIgMi4wNC0uODQtLjAxLS42My4xLS42My4zNi4wMy4zMS41My4zMyAxLjM3LjM0LjI5IDAgMS0uMTEgMS44Mi0uMTEgMS4wNyAwIDEuODcuMTIgMi40MS4xMi4zMSAwIDEuMTUtLjEzIDIuNTMtLjEzIDEuNSAwIDIuMDIuMTMgMi40Ni4xMy4zOSAwIC44My0uMTcuNTctLjQ0LS40Mi0uNDEtMi4yOC4wNi0yLjI4LTIuMDZWMTMuMWMtLjAzLS40OS44OC0yLjQgMy4wNi0yLjQgMi4xIDAgMy4wMyAyLjMxIDMuMDMgMy44NXY1Ljc2Yy0uMDMgMi4yNy0uOCAxLjU1LTEuMTEgMi0uMTcuMjUuMTMuMzcuNDYuMzdzLjg4LS4xMyAxLjg3LS4xM2MxLjI3IDAgMS44Mi4xMiAyLjE2LjEyLjI2IDAgLjczLS4yLjQ1LS40NC0uNjgtLjUtMS45Ny4zLTEuOTUtMi4wNHpNNDguOTEgMi40Yy4zNy0uMDUuNTUtLjE5LjU1LS4xOSAwLS4yNC0uMDUtLjMtLjM5LS4zLS42NSAwLTEuMDUuMTEtMS42OS4xMS0uNzEgMC0xLjI1LS4wOC0xLjg1LS4wOC0uMzQgMC0uMzEuMTEtLjMxLjMgMCAuMjEuNjUuMDggMS4wMi44OS4yMS40NC4xMyAxLjM2LS4wOCAxLjlsLTUuMDEgMTMuNzQtMi4xNC02LjEtLjgzLTIuMjNzLS4xMy4wNi40Ni0xLjc5bDEuMTctMy41MmMuNTctMS43MyAxLjE0LTIuNjQgMS44OC0yLjY1LjkyLS4wMi45Mi0uNTcuMjEtLjU3cy0xLjEzLjA2LTEuNzUuMDZjLS42NSAwLS45OS0uMDYtMS42OS0uMDYtLjI2IDAtLjU1LjA4LS41Mi4zLjAzLjIxLjQyLjE0LjcxLjMuNDcuMjQuNzggMS4yNS40NSAyLjNsLTEuMzggNC40Mi0xLjU4LTQuMTNjLS4zMS0uNzgtLjczLTIuNTIuMDMtMi42Ny43My0uMTUuNjMtLjUyLjE4LS41Mi0uODYgMC0xLjMyLjExLTIuMTUuMTEtLjkxIDAtMS41OS0uMTEtMi40NS0uMTEtLjE4IDAtLjUyLjAzLS40Mi4zOC4wNS4yMS40OS4xNC43Ni4zIDEuMDUuNjggMS4yNSAxLjU1IDEuNjIgMi41MmwyLjMgNi40OGMuNDIgMS4xNi40NS43NC4xMSAxLjczbC0yIDUuNS00Ljk1LTE0LjExYy0uMzktMS4wNi0uNi0xLjc5LjI2LTIuMi4zNy0uMTkuNDctLjIyLjUyLS4zLjA1LS4wNy4xLS4zMi0uNDUtLjMtLjg5LjAzLTEuNDMuMTEtMi4zMi4xMS0uOTQgMC0xLjU5LS4xMS0yLjQ1LS4xMS0uMjkgMC0uMzQuMTQtLjM0LjM1IDAgLjMzLjcxLjExIDEuMzEuODEuMzQuMzguOTkgMS42NiAxLjE0IDIuMTJMMzIuOCAyMi4zYy4xMS4yNS4xNC43Ni40OC43Ni4yNyAwIC4zMy0uNTcuNDItLjc5bDMuMTMtOC41OSAzLjA1IDguMTZjLjEzLjMzLjMxIDEuMjIuNjMgMS4yMi4yNiAwIC4zNi0uNDMuNDktLjgzbDUuOS0xNi44N2MuNS0xLjM2IDEuMDctMi43OSAyLjAxLTIuOTZ6bTY1LjQ2IDYuNzFjLTMuMjYgMC01Ljc3IDMuMjgtNS43NyA3LjEzIDAgMS45Ni41MiAzLjUxIDEuNDIgNC42My0uMzEuMjEtLjkyLjctMi4xNS43LTEuMDcgMC0xLjY4LS42NC0xLjc0LTJWMTEuMmwzLjM4LS4wMWMuMjIgMCAuNjUtMS40NC42Ny0xLjUyLjA0LS4xOC4xLS4zMy4xMi0uNDYuMDQtLjI4LS4xNy0uMy0uMzctLjAxLS4xNS4xNS0uMzIuNTUtLjk5LjU1aC0yLjgxYzAtMi40MS4wMy0zLjUxLS4zNS0zLjUxLS4zNiAwLS4zLjEtLjYzIDEuMTctLjQ0IDEuNDQtMS43OSAyLjIzLTIuNjMgMi42OC0uMzguMDktLjgxLjEyLTEuMjkuMDEtLjc0LS4xNi0xLjYtMS4wNi0zLjgzLTEuMDYtMi4zOCAwLTQuNDYgMS45NS00LjQ2IDQuNTUgMCAxLjQuNjIgMi43NiAxLjcxIDMuNDgtLjIuMTItMS41MyAxLjI0LTEuMzcgMi41NiAwIDAtLjAzIDEuMzcgMS4wNSAxLjgyLS4zMy4xNC0uNjcuMzYtLjk2LjYzLS43LS4yNi0xLjcyLS4wNi0xLjcyLTEuOTFWMTUuMWMwLTIuMzQtLjc2LTUuNzYtNC4yMi01Ljc2LTIuNTEgMC0zLjgxIDIuMzgtMy43NiAyLjAxVjkuNTljMC0uMzEtLjE1LS40OS0uMzEtLjQ5LS42IDAtLjczLjk5LTIuOTEgMS41NS0uMTMuMDMtLjQzLjEtLjQ0LjM0IDAgLjY1IDEuNzUtLjcxIDEuNzYgMS42OHY3LjY0YzAgMS42NS0xLjMxIDEuNjUtMS41NCAxLjY3LS4xIDAtLjE5IDAtLjMxLjAxLS41NS0uMDUtMS41MS0uMy0xLjUxLTEuMzRWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0uOTggMS4wOC0yLjYzIDEuNjQtLjEzLjAzLS4zNy4wNi0uMzcuMjQgMCAuNjUgMS40OS0uNjEgMS40MiAxLjY5djcuMjdjLjA2IDEuNzgtLjg2IDIuMDEtMS40MyAyLjAzLS42OS0uMDktMS4yMi0uMzctMS4yMi0xLjQxdi01LjE0YzAtMi42NS0xLjAxLTYuMDctNC4zMy02LjA3LTEuNDcgMC0yLjc1LjgxLTMuNzMgMS45MlYyLjQxYzAtLjMxLS4xNS0uNDgtLjMxLS40OS0uNC0uMDMtMS4wNyAxLjE5LTIuOTYgMS42My0uMTMuMDMtLjYyLjA3LS42Mi4yNSAwIC42NSAxLjk3LS4zMSAxLjk5IDEuNjlWMjAuNmMwIDEuNTEtMS4zIDEuMzEtMS41MyAxLjc5LS4wNC4yMS4wOC4zMS4yNi4zMS40MiAwIDEuNTUtLjEyIDIuMzUtLjEyczIuMS4xMiAyLjY0LjEyYy4zMSAwIC40NC0uMDYuNDQtLjQ0LS4yNy0uNTItMi4yOC4yOC0yLjI4LTIuMzd2LTYuNWMwLTEuNTcgMS44Ny0yLjc4IDMuMDMtMi43OC45MSAwIDMuMTQuNzEgMy4xNCA0LjUzdjUuNjRjMCAxLjExLTEuMTggMS4yMy0xLjI3IDEuNTcgMCAuMjQuMTUuMzQuNDIuMzQuMjggMCAxLjExLS4xMiAyLjEyLS4xMi41NiAwIDEuMDcuMDMgMS41LjA2LjIzLjA1LjU3LjA1Ljk5LjA1LjI4IDAgMS0uMTEgMS44Mi0uMTFzMS40OC4wNyAxLjk5LjExYy4xLjAxLjIuMDEuMy4wMS4wNCAwIC4wOC4wMS4xMi4wMWguMDFjLjMyLjAxLjYxIDAgLjc0IDAgLjMxIDAgLjgzLS4xMyAyLjItLjEzIDEuNSAwIDIuMDIuMTMgMi40Ni4xMy4zOSAwIC44My0uMTcuNTctLjQ0LS40Mi0uNDEtMi4yOC4wNi0yLjI4LTIuMDZ2LTcuMDljLS4wMy0uNDkuODgtMi40IDMuMDYtMi40IDIuMSAwIDMuMDMgMi4zMSAzLjAzIDMuODV2NS43NmMwIDItLjggMS41NS0xLjExIDItLjE3LjI1LjEzLjM3LjQ2LjM3cy44OC0uMTMgMS44Ny0uMTNjLjkzIDAgMS41My4wNyAxLjkxLjEtLjI5LjQyLS40OC45LS41MSAxLjQtLjE0IDIuNTEgMi45MyAzLjQxIDUuNTEgMy4zNyA1LjEyLS4wNyA2LjU3LTMuNjIgNS41MS01LjUxLTEuMDktMS45NS0zLjQ0LTEuODctNS42OC0xLjg2LTQuMi4wMi0zLjQxLTIuNTktMS42OS0yLjQ5LjQuMDIuMi4xNCAxLjU3LjE0IDIuNDMgMCA0Ljc2LTEuNjYgNC43LTQuMzgtLjAxLS4yMy4wNS0xLjAzLS41My0yLjE0IDEuMTQuMDEuNjkgMCAyLjQxIDBsLS4wMSA3LjYzYzAgMy40NSAxLjY0IDQuMDMgMi44NyA0LjAzIDEuNzQgMCAzLjAxLTEuMTUgMy4yNC0xLjY4IDEuMDMgMS4xIDIuNDYgMS42OCA0LjEyIDEuNjggMy4xOSAwIDUuNi0yLjkzIDUuNi02Ljc4IDAtNS44LTMuNjUtNi45Ni01LjYxLTYuOTZ6TTk1LjYyIDIxLjcyYy4yMS0uMDEuMjcuMDggMi42NC4xNyAyLjQ1LjA2IDMuMzMuNzcgMy40OSAxLjQuMjYgMS4xMi0uNTMgMy41Mi00LjA1IDMuMjktMi4yMi0uMTUtMi44Ny0xLjItMy4wMy0xLjQ0LS44NC0xLjE2LS4xNi0zLjM1Ljk1LTMuNDJ6bTIuMDEtNC41N2MtMi4wOCAwLTIuNzgtMi0yLjc4LTMuOTEgMC0xLjk2LjU5LTMuNTggMi42Ny0zLjU4IDIuMTEgMCAyLjk1IDIuMTYgMi45NSA0LjA3LjAxIDEuOTMtLjg3IDMuNDItMi44NCAzLjQyem0xNi45OSA0LjgxYy0zLjAzIDAtNC4yMi0zLjc2LTQuMjItNi44MiAwLTIuNjUgMS4wNC01LjEgMy41Ny01LjEgMy4wOCAwIDQuMTkgMy4yOSA0LjE5IDYuNTEuMDEgMy44Ny0xLjM2IDUuNDEtMy41NCA1LjQxelxcXCI+XFxuICAgICAgPC9wYXRoPlxcbiAgICAgIDxwYXRoXFxuICAgICAgICBkPVxcXCJNMTMxLjExIDIwLjE5di01LjA4YzAtMi4zNC0uNzYtNS43Ni00LjIyLTUuNzYtMi41MSAwLTMuODEgMi4zOC0zLjc2IDIuMDFWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0xLjA0IDEuMDEtMy4wNyAxLjYyLS4xMy4wMy0uNS4wNC0uNTEuMjcgMCAuNjUgMi4wMy0uODQgMiAxLjY4djcuNjRjMCAyLTEuMzUgMS41Mi0xLjY2IDIuMDQtLjE1LjI3LjI1LjMzLjU5LjMzLjMxIDAgLjgzLS4xMyAyLjItLjEzIDEuNSAwIDIuMDIuMTMgMi40Ni4xMy4zOSAwIC44My0uMTcuNTctLjQ0LS40Mi0uNDEtMi4yOC4wNi0yLjI4LTIuMDZ2LTcuMDljLS4wMy0uNDkuODgtMi40IDMuMDYtMi40IDIuMSAwIDMuMDMgMi4zMSAzLjAzIDMuODV2NS43NmMtLjAzIDIuMjctLjggMS41NS0xLjExIDItLjE3LjI1LjEzLjM3LjQ2LjM3cy44OC0uMTMgMS44Ny0uMTNjMS4yNyAwIDEuODIuMTIgMi4xNi4xMi4yNiAwIC43My0uMi40NC0uNDQtLjY1LS40OS0xLjk0LjMxLTEuOTItMi4wM3pNNzcuNDEgOC4xNmMuMzMgMCAxLjA3LTEuMiAxLjA3LTEuNTcgMC0uMzYtLjc0LTEuNi0xLjA3LTEuNi0uMyAwLTEuMDcgMS4yNi0xLjA3IDEuNi4wMi4zNS43NyAxLjU3IDEuMDcgMS41N3ptLTE3LjMgNi45NmMtLjUxLS4yNC0xLjI3LS42OC0xLjY1LS44OC0xLjYzLS44OS0yLjI3LTEuNDctMi4zMS0yLjMtLjA4LTEuNDQgMS4xNS0yLjE5IDIuMjEtMi4wOCAyLjU0LS4wNCAyLjg4IDIuOCAzLjE0IDIuOC4zOSAwIC4yOC0uMzcuMjgtMS4yMSAwLS4yMS4wMy0xLjI3LS4xMy0xLjUyLS4zMS0uNDYtMi4xLS43NC0yLjU1LS43NC0uMTEgMC0uNTItLjAxLS42LS4wMi0uMTMgMC0uMjguMDItLjI4LjAyLTEuODEtLjAzLTMuNSAxLjExLTMuNDUgMy41My4wNSAyLjIxIDIuNjQgMy40NyA0LjA0IDQuMyAxLjA0LjU5IDIuMjYgMS4xNSAyLjI0IDIuNTctLjAyIDEuNjEtMS4yNyAyLjY4LTIuNjEgMi42LTMuMTUtLjA1LTIuNzItNC0zLjI4LTQtLjM5IDAtLjMxIDEtLjMxIDEuNTIgMCAuNTEtLjAxLjk4LS4wMSAxLjM4LS4wNy4zNi0uMi43LS41NC43Mi0xLjI0LjA4LS45NC0xLjktLjk0LTIuOTV2LTYuNDNjLS4wNi0xLjk3LTEuNTQtMy4yNS0zLjgtMy4yNS0zLjA5IDAtNS4zMSAzLjgxLTQuMjUgNSAuMjUuMjggMS4yNi0uOCAxLjMyLS44NnMuMDgtLjEzLjA4LS4xM2MtLjAxLTEuMy45Ny0yLjk1IDIuMzctMy4wOSAxLjYtLjE1IDIuNCAxLjA0IDIuNCAyLjY1djIuMDljLTYuMDYgMS4yMS02LjkzIDMuMjItNi45MyA0Ljg3IDAgMi4yMSAxLjU1IDMuMiAzLjIzIDMuMiAxLjQ1IDAgMi44OC0uNjkgMy45Ni0xLjguMzQgMS4wMyAxLjAxIDEuNjUgMi4wMiAxLjYyLjM1LS4wMS40MS4wOSAxLjQ2LS4zNy4zNy0uMS4zNS0uMDkuNzctLjAxLjU2LjE5IDEuMzIuNTcgMi42Ni41NyAyLjAzLjAzIDMuODUtMS44NSAzLjg1LTQuMTcgMC0xLjUtLjQzLTIuNDEtMi4zOS0zLjYzem0tOC40MyA0LjMyYzAgMS42NS0xLjY4IDIuNTItMi42IDIuNTItMS4zOCAwLTIuMzMtLjg5LTIuMzMtMi42NiAwLTIuNzMgMy4yOC0zLjIzIDQuOTQtMy42Ny0uMDEtLjAxLS4wMSAzLjgxLS4wMSAzLjgxem0yMTkuOTkuMTljLS4zMSAwLTEuMDcgMS4yOS0xLjA3IDEuNjMgMCAuMzQuNzcgMS42IDEuMDcgMS42LjMzIDAgMS4wNy0xLjIzIDEuMDctMS42cy0uNzMtMS42My0xLjA3LTEuNjN6bTMzLjcxIDEuMTJWOS45MmMwLS42MS0uMzQtLjc3LS40NC0uNzctLjM5IDAtLjYxLjEtLjg4LjE2LS4yNy4xLS41OC4yMy0xLjI5LjIzLS4xMyAwLS43OS0uMTItLjc2LjI1LjA0LjM3IDEuNTcuMTUgMS41OCAxLjIzdjcuODNjLS4xMiAxLjM3LTEuMjcgMi44OC0yLjY2IDIuODgtLjMyIDAtMi4zOS0uMjItMi4zNy0zLjY1VjkuOTJjMC0uNjEtLjM0LS43Ny0uNDQtLjc3LS4zOSAwLS42MS4xLS44OC4xNi0uMjcuMS0uNjEuMjItMS4zMi4xOS0uMzgtLjAyLS43OS0uMDctLjczLjI5LjA2LjMyIDEuNTkgMCAxLjU5IDEuMjN2Ny41MWMwIDIuNzQgMS42MSA0LjMyIDMuNTYgNC4zMiAxLjMgMCAyLjQ5LS4yOCAzLjI0LTEuOGguMDV2MS4zMmMwIC4xMy4wMy40OC4yMi40OC4zNyAwIC41Ni0uMy44My0uNC4yOS0uMDcuMzctLjMzIDEuMjgtLjQyLjM5LS4wNC44Mi0uMjQuODItLjUtLjExLS41My0xLjQuMDYtMS40LS43OHpNMjkwLjA5IDkuMTFjLTMuMjYgMC01Ljc3IDMuMjgtNS43NyA3LjEzIDAgMS43My40MiAzLjE1IDEuMTMgNC4yMy0uNzkuNTctMi4yMyAxLjEtNC45NiAxLjEtMi4xMyAwLTEuOTMtLjc0LTEuOTMtMi41NVY0LjU3YzAtMi42NiAxLjk5LTEuODkgMi4wMy0yLjM3LjAzLS4zNC0uMjgtLjI2LS42MS0uMjYtLjM4IDAtMS4wNy4xNS0yLjUyLjE1LTEuMjUgMC0yLjM0LS4xMi0yLjg4LS4xMi0uMzMgMC0uNjMuMS0uNTIuMzUuMjUuNTcgMi4xNC4wNSAyLjE0IDEuNjV2MTUuMWMwIDEuNDQuMjEgMi4zNi0uNDUgMi43My0uODEuNDktMS43Ni41MS0xLjY4LjgzLjA1LjE5LjQ1LjIuNjguMiAxLjAyIDAgMi40Mi0uMTMgMy40NC0uMTUgMS45NC0uMDYgMy44Ni4xMyA1Ljc5LjEzIDEuMTIgMCAxLjQtLjIyIDIuMjItMS4zMy4wMS0uMDIuMDItLjAzLjA0LS4wNSAxLjAxLjk0IDIuMzQgMS40NCAzLjg3IDEuNDQgMy4xOSAwIDUuNi0yLjkzIDUuNi02Ljc4LjAxLTUuODItMy42NS02Ljk4LTUuNjItNi45OHptLjI2IDEyLjg1Yy0zLjAzIDAtNC4yMi0zLjc2LTQuMjItNi44MiAwLTIuNjUgMS4wNC01LjEgMy41Ny01LjEgMy4wOCAwIDQuMTkgMy4yOSA0LjE5IDYuNTEuMDEgMy44Ny0xLjM2IDUuNDEtMy41NCA1LjQxem0tMzIuMDMtMTAuNDljLS43NS0uMzctMS44NS0xLjA0LTIuMzktMS4zNi0yLjM3LTEuMzctMy4zLTIuMjYtMy4zNy0zLjUyLS4xMi0yLjIxIDIuMDQtMy41MiAzLjU4LTMuMzUgMS45NiAwIDMuNTcgMS4xOSA0LjI0IDMuNzMuMDcuMjcuMzEuODkuNTYuODkuMjIgMCAuMjYtLjIuMjQtLjQ1bC0uMzMtNC4wMmMtLjAyLS4zMy0uMTQtLjQyLS4yNy0uNDItLjIyIDAtLjM2LjMzLS41Ni4zMy0uMzEgMC0xLjEtMS4xMS0zLjgtMS4wOS0uMTgtLjAxLS40My4wMi0uNDMuMDItMi42My0uMDUtNS4xIDEuNy01LjAyIDUuNC4wNyAzLjM3IDMuODUgNS4zIDUuODkgNi41OSAxLjUxLjkgMy4wOSAyLjM0IDMuMDQgMy45NS0uMDggMi40Ny0xLjYzIDQuMDgtMy41OCAzLjk0LTQuNTktLjA4LTMuOTYtNi4xMy00Ljc4LTYuMTMtLjU2IDAtLjQ1IDEuNTItLjQ2IDIuMzIgMCAxLjkyLS4wOCAzLjQ5LjE0IDMuNzcuMDcuMDkuMjkuMDUuNzQuMDUuOSAwIDIgMS4wNSA0LjY1IDEuMDUgMi45NS4wNSA1LjM4LTIuNjkgNS4zOC02LjI1LS4wMS0yLjE5LS42Mi0zLjU4LTMuNDctNS40NXptNTEuNjktMy4zMWMuMzMgMCAxLjA3LTEuMiAxLjA3LTEuNTcgMC0uMzYtLjc0LTEuNi0xLjA3LTEuNi0uMyAwLTEuMDcgMS4yNi0xLjA3IDEuNnMuNzYgMS41NyAxLjA3IDEuNTd6TTMxMi42NCAyMmMtLjUyLS4wMy0xLjYzLS4yMy0xLjYzLTEuMzVWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0uOTggMS4wOC0yLjYzIDEuNjQtLjEzLjAzLS4zNy4wNi0uMzcuMjQgMCAuNjUgMS40OS0uNjEgMS40MiAxLjY5djcuMjdjLjA2IDEuODYtLjk2IDIuMDQtMS41MiAyLjA0LS44NC0uMDEtLjYzLjEtLjYzLjM2LjAzLjMxLjUzLjMzIDEuMzcuMzQuMjggMCAxLS4xMSAxLjgyLS4xMSAxLjA3IDAgMS44Ny4xMiAyLjQxLjEyLjMzIDAgLjc2LS44LjA3LS42OXptNS45OC02Ljg4Yy0uNTEtLjI0LTEuMjctLjY4LTEuNjUtLjg4LTEuNjMtLjg5LTIuMjctMS40Ny0yLjMxLTIuMy0uMDgtMS40NCAxLjE1LTIuMTkgMi4yMS0yLjA4IDIuNTQtLjA1IDIuODggMi44IDMuMTQgMi44LjM5IDAgLjI4LS4zNy4yOC0xLjIxIDAtLjIxLjAzLTEuMjctLjEzLTEuNTItLjMxLS40Ni0yLjExLS43NC0yLjU1LS43NC0uMTEgMC0uNTItLjAxLS42LS4wMS0uMTMgMC0uMjguMDEtLjI4LjAxLTEuODEtLjAzLTMuNSAxLjExLTMuNDQgMy41My4wNSAyLjIxIDIuNjQgMy40NiA0LjA0IDQuMyAxLjA0LjU5IDIuMjYgMS4xNSAyLjI0IDIuNTctLjAyIDEuNjEtMS4yNyAyLjY4LTIuNjEgMi42LTMuMTUtLjA1LTIuNzItNC0zLjI4LTQtLjM5IDAtLjMxIDEtLjMxIDEuNTItLjAxIDEuMjUtLjA2IDIuMjguMSAyLjQ2LjA1LjA2LjIuMDMuNS4wMy42MiAwIDEuMzguNjkgMy4xOS42OSAyLjAzLjAzIDMuODUtMS44NSAzLjg1LTQuMTctLjAxLTEuNDgtLjQzLTIuMzktMi4zOS0zLjZ6bS00OC43MyA1LjY2Yy0uMjYuMTMtLjg1Ljc3LTIuMjguNzctMS4wNyAwLTEuNjgtLjY0LTEuNzQtMnYtOC44MmwzLjM4LS4wMWMuMjIgMCAuNjUtMS40NC42Ny0xLjUyLjA0LS4xOC4xLS4zMy4xMi0uNDYuMDQtLjI4LS4xNy0uMy0uMzctLjAxLS4xNS4xNS0uMzIuNTUtLjk5LjU1aC0yLjgxYzAtMi40MS4wMy0zLjA0LS4zNS0zLjA0LS4zNiAwLS4zLjEtLjYzIDEuMTctLjU0IDEuNzktMi41MiAyLjU4LTMuMTUgMi45Ny0uMTUuMDgtLjE1LjExLS4xNS4xOS0uMDEuMjMuNzUuMTQgMi4zMS4xN2wtLjAxIDguMDdjMCAzLjQ1IDEuNjQgNC4wMyAyLjg3IDQuMDMgMS44NyAwIDMuMjEtMS4zNCAzLjI4LTEuOC4wMy0uMjUgMC0uMjgtLjE1LS4yNnptLTgxLjMyLTEuMDljLS41NyAwLTEuNDIgMS42Mi0zLjY2IDEuNjItMS41OCAwLTQuMTctMS41My00LjE3LTYuNjZoNi45Yy42IDAgLjg4LjAzLjg4LS41MiAwLTEuMjUtMS40LTQuOTUtNC41OS00Ljk1LTMuMjQgMC01LjA4IDMuMzMtNS4wOCA3LjMxIDAgMi4wNSAxLjM1IDYuMzggNS4yNCA2LjM4IDIuMzMgMCA0LjU5LTIuMjQgNC41OS0yLjk1LS4wMS0uMTEtLjAxLS4yMy0uMTEtLjIzem0tNS4wOC05LjgxYzEuNDIgMCAyLjg4IDEuNTYgMi44OCAzLjMgMCAuNDYtLjE1LjYyLS41Mi42MmgtNS4xMWMwLTEuNzEgMS4xMy0zLjkyIDIuNzUtMy45MnptLTMxLjctNy4zM2MuMS0uMTYtLjI1LS4yNC0uMzctLjI0LS40MiAwLTEuMzcuMTEtMS44LjExLS44OSAwLTEuNjQtLjA5LTIuNTMtLjA5LS4wNyAwLS40Ni4wNS0uNDYuMTgtLjAxLjYzIDIuMTMtLjExIDIuMTMgMi42djEwLjU3YzAgMy4xMy0uOTkgNi40MS01LjI5IDYuNDEtMy4wOSAwLTQuNzYtMS45NC00Ljc2LTYuMTdWNC40MWMwLTEuOTEgMS40OS0xLjQ5IDEuNTItMS45Mi4wMy0uNDEtMS4zMy0uMTYtMS40My0uMTYtLjcxIDAtMS4yMS4wOC0xLjk1LjA4LS42MiAwLTEuMzctLjEtMS45Ny0uMS0uMTIgMC0uNTMtLjAyLS42MS4xNS0uMjMuNTYgMS45MS4yNiAxLjkxIDEuODN2MTAuOTJjMCA0LjA4IDEuMTQgOC4wOCA3LjE3IDcuOTcgNy4xNC0uMTIgNy4wMS02LjU0IDcuMDEtNy44M1Y1LjEyYy4wMS0yLjQzIDEuMi0yLjIgMS40My0yLjU3em0yOC4xOSA3LjI0Yy4xNy0uMi4yMi0uNTMtLjU3LS40Ni0uNDUgMC0uNzcuMDgtMS4yMi4wOC0uNTcgMC0uNjgtLjAyLTEuMjItLjA0LS42OC0uMDItLjg2LjA1LS44Mi4yNS4xMi42IDEuNTUuMDEgMS4zNiAxLjgtLjE2IDEuNS0uNjUgMi43OS0xLjE0IDQuMDdsLTEuNzMgNC42Mi0yLjU0LTcuN2MtLjMxLS45Ni0uNDUtMS40Ny0uNDUtMS41NyAwLS45NiAxLjE2LS43NSAxLjQyLTEuMTQuMTYtLjI2LS4xNy0uNC0uNTQtLjQtLjMxIDAtLjY3LjExLTEuNjMuMTMtLjc5LjAyLTEuMzYuMDItMS43LS4wNS0uODktLjE2LS44Mi4zMy0uNTEuNDhzLjQ2LjAxLjkxIDEuMzZsMy45MSAxMS4wNmMuMDguMjIuMTguNzcuNTIuNzcuMzkgMCAuMzktLjM5Ljg4LTEuNjkgMCAwIDMuNzUtMTAuNDggNC0xMC44Ni41MS0uNzQuODktLjUgMS4wNy0uNzF6bTE0LjQ3LS41Yy0xLjA3IDAtMS44IDEuMjgtMi4zMyAyLjE2aC0uMDVWOS41M2MwLS4zLS4xNS0uNDgtLjMtLjQ4LS40MSAwLS43Mi44MS0yLjg3IDEuMzMtLjEzLjAzLS40OC4xLS40OC4yOCAwIC42NCAxLjgyLS4xOSAxLjgyIDEuOTN2OC4wN2MwIDEuMjUtMS4yOSAxLjEyLTEuMjkgMS43NyAwIC4xOC4wOC4yNy4yOC4yNy4xNyAwIC42My0uMTIgMi4zMi0uMTIgMS40MSAwIDIuMDIuMTIgMi4zNy4xMi4yOCAwIC40MS0uMDYuNDEtLjM0IDAtLjk4LTIuMjUuNDgtMi4yNS0yLjM0di02Ljg4YzAtLjQuNi0xLjggMS42NC0xLjguOTEgMCAxLjAyLjcgMS41LjcuMyAwIC45MS0uOTEuOTEtMS4zOC0uMDEtLjU4LTEuMTYtMS4zNy0xLjY4LTEuMzd6bTMyLjU1LjFjLS4yNyAwLS45Ni4wNC0xLjU5LjA0LS43NiAwLTEuMTMtLjA5LTEuNDUtLjA5LS40OCAwLS45NiAwLS44Ny4zMi4xLjM2IDEuNzMuMjMgMS43MyAyLjAxIDAgLjIzIDAgLjUyLS4zMyAxLjcxbC0yLjA4IDYuNjMtMi45LTguMTVzLS4xNC0uMjYtLjE0LS43OWMwLTEuMzIgMS41NC0xLjE3IDEuNi0xLjQxLjA1LS4xOS0uMjEtLjQtLjYyLS40aC0zLjYzYy0uMDIgMC0uMDMuMDEtLjA1LjAxaC0yLjgxYzAtMi40MS4wMy0zLjA0LS4zNS0zLjA0LS4zNiAwLS4zLjEtLjYzIDEuMTctLjU0IDEuNzktMi41MiAyLjU4LTMuMTUgMi45Ny0uMTUuMDgtLjE1LjExLS4xNS4xOS0uMDEuMjIuNzYuMTQgMi4zMS4xN2wtLjAxIDguMDdjMCAzLjQ1IDEuNjQgNC4wMyAyLjg3IDQuMDMgMS44NyAwIDMuMjEtMS4zMyAzLjI4LTEuOCAwLS4yNy0uMDQtLjI5LS4xOC0uMjctLjI2LjEzLS44NS43Ny0yLjI4Ljc3LTEuMDcgMC0xLjY4LS42NC0xLjc0LTJWMTAuN3MyLjUtLjAxIDMuMjEtLjAxYy4wNC4wNi4wOC4xMy4xLjE5bDIuOTkgOC40NWMuMjQuNjkuMzkuOTIuNjggMi4xNC4xOS43OS4xMiAxLjUxLjEyIDEuNTEtLjI5IDEuMjctMS4wNyAxLjk5LTIuMjYgNC4zNC0uMTIuMjIgMS43MS0uMDIgMS44MS0uMDUuMTUtLjA1LjEzLS4wOS4zMS0uNDJsMS4zMi0zLjkzIDMuNjktMTEuMzRjLjU0LTEuOTggMS4zOS0xLjYyIDEuNTMtMS44OS4xMi0uMTMgMC0uMy0uMzMtLjN6XFxcIj5cXG4gICAgICA8L3BhdGg+XFxuICAgICAgPHBhdGhcXG4gICAgICAgIGQ9XFxcIk0yMjIuMjIgMjIuNzZsLS4wNy4xOVYyM2wuMDctLjI0em0tMTQuNzQtMTQuNmMuMzMgMCAxLjA3LTEuMiAxLjA3LTEuNTcgMC0uMzYtLjc0LTEuNi0xLjA3LTEuNi0uMyAwLTEuMDcgMS4yNi0xLjA3IDEuNnMuNzYgMS41NyAxLjA3IDEuNTd6TTIxMC4xMSAyMmMtLjUyLS4wMy0xLjYzLS4yMy0xLjYzLTEuMzVWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0uOTggMS4wOC0yLjYzIDEuNjQtLjEzLjAzLS4zNy4wNi0uMzcuMjQgMCAuNjUgMS40OS0uNjEgMS40MiAxLjY5djcuMjdjLjA2IDEuODYtLjk2IDIuMDQtMS41MiAyLjA0LS44NC0uMDEtLjYzLjEtLjYzLjM2LjAzLjMxLjUzLjMzIDEuMzcuMzQuMjggMCAxLS4xMSAxLjgyLS4xMSAxLjA3IDAgMS44Ny4xMiAyLjQxLjEyLjMzIDAgLjc2LS44LjA3LS42OXpNMTY2LjUyIDguMTZjLjMzIDAgMS4wNy0xLjIgMS4wNy0xLjU3IDAtLjM2LS43NC0xLjYtMS4wNy0xLjYtLjMgMC0xLjA3IDEuMjYtMS4wNyAxLjZzLjc3IDEuNTcgMS4wNyAxLjU3ek0xNjkuMTcgMjJjLS41Mi0uMDMtMS42My0uMjMtMS42My0xLjM1VjkuNTljMC0uMzEtLjE1LS40OS0uMzEtLjQ5LS42IDAtLjk4IDEuMDgtMi42MyAxLjY0LS4xMy4wMy0uMzcuMDYtLjM3LjI0IDAgLjY1IDEuNDktLjYxIDEuNDIgMS42OXY3LjI3Yy4wNiAxLjg2LS45NiAyLjA0LTEuNTIgMi4wNGgtLjE3Yy0uNTQtLjEtMS4wNi0uMzItMS4wNS0xLjc5di01LjA4YzAtMi4zNC0uNzYtNS43Ni00LjIyLTUuNzYtMi41MSAwLTMuODEgMi4zOC0zLjc2IDIuMDFWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0xLjA0IDEuMDEtMy4wNyAxLjYyLS4xMy4wMy0uNS4wNC0uNTEuMjcgMCAuNjUgMi4wMy0uODQgMiAxLjY4djcuNjRjMCAyLTEuMzUgMS41Mi0xLjY2IDIuMDQtLjE1LjI3LjI1LjMzLjU5LjMzLjMxIDAgLjgzLS4xMyAyLjItLjEzIDEuNSAwIDIuMDIuMTMgMi40Ni4xMy4zOSAwIC44My0uMTcuNTctLjQ0LS40Mi0uNDEtMi4yOC4wNi0yLjI4LTIuMDZ2LTcuMDljLS4wMy0uNDkuODgtMi40IDMuMDYtMi40IDIuMSAwIDMuMDMgMi4zMSAzLjAzIDMuODV2NS43NmMtLjAzIDIuMjctLjggMS41NS0xLjExIDItLjE3LjI1LjEzLjM3LjQ2LjM3cy44OC0uMTMgMS44Ny0uMTNjMS4yNyAwIDEuODIuMTIgMi4xNi4xMi4wNCAwIC4wOS0uMDEuMTMtLjAxLjExIDAgLjIxLjAxLjM0LjAxLjI4IDAgMS0uMTEgMS44Mi0uMTEgMS4wNyAwIDEuODcuMTIgMi40MS4xMi4zNC4wMi43NS0uNzguMDgtLjY3em0zMi43Mi02Ljg5Yy0uNTEtLjI0LTEuMjctLjY4LTEuNjUtLjg4LTEuNjMtLjg5LTIuMjctMS40Ny0yLjMxLTIuMy0uMDgtMS40NCAxLjE1LTIuMTkgMi4yMS0yLjA4IDIuNTQtLjA1IDIuODggMi44IDMuMTQgMi44LjM5IDAgLjI4LS4zNy4yOC0xLjIxIDAtLjIxLjAzLTEuMjctLjEzLTEuNTItLjMxLS40Ni0yLjEtLjc0LTIuNTUtLjc0LS4xMSAwLS41Mi0uMDEtLjYtLjAyLS4xMyAwLS4yOC4wMi0uMjguMDItMS44MS0uMDMtMy41IDEuMTEtMy40NSAzLjUzLjA1IDIuMjEgMi42NCAzLjQ2IDQuMDQgNC4zIDEuMDQuNTkgMi4yNiAxLjE1IDIuMjQgMi41Ny0uMDIgMS42Mi0xLjI3IDIuNjgtMi42MSAyLjYtMy4xNS0uMDUtMi43Mi00LTMuMjgtNC0uMzkgMC0uMzEgMS0uMzEgMS41MiAwIDEuMjUtLjA2IDIuMjguMSAyLjQ2LjA1LjA2LjIuMDMuNS4wMy42MiAwIDEuMzguNjkgMy4xOS42OSAyLjAzLjAzIDMuODUtMS44NSAzLjg1LTQuMTcgMC0xLjQ3LS40Mi0yLjM4LTIuMzgtMy42elxcXCI+XFxuICAgICAgPC9wYXRoPlxcbiAgICA8L2c+XFxuICA8L3N2Zz5cXG48L2Rpdj5cXG48aGVhZGVyIHJvbGU9XFxcImJhbm5lclxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICA8YSBjbGFzcz1cXFwic2l0ZS10aXRsZVxcXCIgaHJlZj1cXFwiZmlsZXMvaW5kZXguaHRtbFxcXCI+TnVyc2VyeSBTY2hvb2w8L2E+XFxuICA8L2Rpdj5cXG4gIDxkaXYgaWQ9XFxcIm1haW4tbWVudS1jb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm5hdmJhclxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImRyb3BidG5cXFwiPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJhYm91dFxcXCIgaHJlZj1cXFwiZmlsZXMvYWJvdXQuaHRtbFxcXCI+QWJvdXRcXG4gICAgICAgICAgICA8L2E+XFxuICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICA8YSBpZD1cXFwidHVpdGlvblxcXCIgaHJlZj1cXFwiZmlsZXMvdHVpdGlvbi5odG1sXFxcIj5UdWl0aW9uPC9hPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJzdGFmZlxcXCIgaHJlZj1cXFwiZmlsZXMvc3RhZmYuaHRtbFxcXCI+U3RhZmY8L2E+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcInBhcmVudC1oYW5kYm9va1xcXCIgaHJlZj1cXFwiZmlsZXMvcGFyZW50X2hhbmRib29rLmh0bWxcXFwiPlBhcmVudCBIYW5kYm9vazwvYT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZHJvcGJ0blxcXCI+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcImNsYXNzcm9vbXNcXFwiIGhyZWY9XFxcImZpbGVzL2NsYXNzcm9vbXMuaHRtbFxcXCI+Q2xhc3Nyb29tc1xcbiAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJjdXJyaWN1bHVtLW92ZXJ2aWV3XFxcIiBocmVmPVxcXCJmaWxlcy9jdXJyaWN1bHVtX292ZXJ2aWV3Lmh0bWxcXFwiPkN1cnJpY3VsdW0gT3ZlcnZpZXc8L2E+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcInRlZGR5LWJlYXJzXFxcIiBocmVmPVxcXCJmaWxlcy90ZWRkeV9iZWFycy5odG1sXFxcIj5UZWRkeSBCZWFyczwvYT5cXG4gICAgICAgICAgICA8YSBpZD1cXFwicGFuZGEtYmVhcnNcXFwiIGhyZWY9XFxcImZpbGVzL3BhbmRhX2JlYXJzLmh0bWxcXFwiPlBhbmRhIEJlYXJzPC9hPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJiZWFyLWN1YnNcXFwiIGhyZWY9XFxcImZpbGVzL2JlYXJfY3Vicy5odG1sXFxcIj5CZWFyIEN1YnM8L2E+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcImJpZy1iZWFyc1xcXCIgaHJlZj1cXFwiZmlsZXMvYmlnX2JlYXJzLmh0bWxcXFwiPkJpZyBCZWFyczwvYT5cXG4gICAgICAgICAgICA8YSBpZD1cXFwic3VuLWJlYXJzXFxcIiBocmVmPVxcXCJmaWxlcy9zdW5fYmVhcnMuaHRtbFxcXCI+U3VuIEJlYXJzPC9hPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJiZWFyLXRyYWNrc1xcXCIgaHJlZj1cXFwiZmlsZXMvYmVhcl90cmFja3MuaHRtbFxcXCI+QmVhciBUcmFja3M8L2E+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcImVucmljaG1lbnQtcHJvZ3JhbVxcXCIgaHJlZj1cXFwiZmlsZXMvZW5yaWNobWVudF9wcm9ncmFtcy5odG1sXFxcIj5FbnJpY2htZW50IFByb2dyYW08L2E+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8YSBpZD1cXFwiY2FsZW5kYXJcXFwiIGhyZWY9XFxcImZpbGVzL2NhbGVuZGFyLmh0bWxcXFwiPkNhbGVuZGFyPC9hPlxcbiAgICAgICAgPGEgaWQ9XFxcInN1bW1lci1jYW1wXFxcIiBocmVmPVxcXCJmaWxlcy9zdW1tZXJfY2FtcC5odG1sXFxcIj5TdW1tZXIgQ2FtcDwvYT5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZHJvcGJ0blxcXCI+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcImdldC1pbnZvbHZlZFxcXCIgaHJlZj1cXFwiZmlsZXMvZ2V0X2ludm9sdmVkLmh0bWxcXFwiPkdldCBJbnZvbHZlZDwvYT5cXG4gICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJudXJzZXJ5LXNjaG9vbC1tZXJjaGFuZGlzZVxcXCIgaHJlZj1cXFwiZmlsZXMvbnVyc2VyeV9zY2hvb2xfbWVyY2hhbmRpc2UuaHRtbFxcXCI+TnVyc2VyeSBTY2hvb2xcXG4gICAgICAgICAgICAgIE1lcmNoYW5kaXNlPC9hPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJwYXJlbnQtYXNzb2NpYXRpb25cXFwiIGhyZWY9XFxcImZpbGVzL3BhcmVudF9hc3NvY2lhdGlvbi5odG1sXFxcIj5QYXJlbnQgQXNzb2NpYXRpb248L2E+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8YSBpZD1cXFwiYXBwbHlcXFwiIGhyZWY9XFxcImZpbGVzL2FwcGx5Lmh0bWxcXFwiPkFwcGx5PC9hPlxcbiAgICAgICAgPGEgaWQ9XFxcImZvcm1zXFxcIiBocmVmPVxcXCJmaWxlcy9mb3Jtcy5odG1sXFxcIj5Gb3JtczwvYT5cXG5cXG4gICAgICAgIDxhIGlkPVxcXCJwYXJlbnQtcmVzb3VyY2VzXFxcIiBocmVmPVxcXCJmaWxlcy9wYXJlbnRfcmVzb3VyY2VzLmh0bWxcXFwiPlBhcmVudCBSZXNvdXJjZXM8L2E+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9oZWFkZXI+XCI7XG4iLCJpbXBvcnQgeyBEIH0gZnJvbSBcIi4vLi4vY29yZS9kb20vZG9jdW1lbnRcIjtcblxuZXhwb3J0IGNsYXNzIFNsaWRlc2hvdyB7XG4gIHB1YmxpYyBzdGF0aWMgc2V0dXBBbGwoKSB7XG4gICAgU2xpZGVzaG93LmRpc2NhcmRBbGwoKTtcbiAgICBjb25zdCBzbGlkZXNob3dzID0gRC5jbGF6KFwic2xpZGVzaG93XCIpO1xuICAgIGZvciAobGV0IHNzSW5kZXggPSAwOyBzc0luZGV4IDwgc2xpZGVzaG93cy5sZW5ndGg7ICsrc3NJbmRleCkge1xuICAgICAgY29uc3QgZWxlbSA9IHNsaWRlc2hvd3MuaXRlbShzc0luZGV4KTtcbiAgICAgIGlmIChlbGVtID09IG51bGwpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBTbGlkZXNob3cuc2xpZGVzaG93cy5wdXNoKG5ldyBTbGlkZXNob3coZWxlbSkpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZGlzY2FyZEFsbCgpIHtcbiAgICBTbGlkZXNob3cuc2xpZGVzaG93cyA9IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgc2xpZGVzaG93czogU2xpZGVzaG93W10gPSBbXTtcblxuICBwcml2YXRlIHNsaWRlSW5kZXggPSAwO1xuICBwcml2YXRlIHNsaWRlQ291bnQgPSAwO1xuICBwcml2YXRlIHNsaWRlczogRWxlbWVudFtdID0gW107XG4gIHByaXZhdGUgZG90czogRWxlbWVudFtdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdXRlcjogRWxlbWVudCkge1xuICAgIEQuZWFjaFJlY3VyKHRoaXMub3V0ZXIsIChlbGVtKSA9PiB7XG4gICAgICBjb25zdCBjTGlzdCA9IGVsZW0uY2xhc3NMaXN0O1xuICAgICAgaWYgKGNMaXN0LmNvbnRhaW5zKFwicHJldi1zbGlkZXNob3ctYnV0dG9uXCIpKSB7XG4gICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCBcImNsaWNrXCIsICgpID0+IHRoaXMubWludXNTbGlkZSgxKSk7XG4gICAgICB9IGVsc2UgaWYgKGNMaXN0LmNvbnRhaW5zKFwibmV4dC1zbGlkZXNob3ctYnV0dG9uXCIpKSB7XG4gICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCBcImNsaWNrXCIsICgpID0+IHRoaXMucGx1c1NsaWRlKDEpKTtcbiAgICAgIH0gZWxzZSBpZiAoY0xpc3QuY29udGFpbnMoXCJzbGlkZXNob3ctZW50cnlcIikpIHtcbiAgICAgICAgdGhpcy5zbGlkZXMucHVzaChlbGVtKTtcbiAgICAgIH0gZWxzZSBpZiAoY0xpc3QuY29udGFpbnMoXCJzbGlkZXNob3ctZG90XCIpKSB7XG4gICAgICAgIHRoaXMuZG90cy5wdXNoKGVsZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kb3RzLmxlbmd0aDsgKytpKSB7XG4gICAgICBELmFkZEV2ZW50TGlzdGVuZXIodGhpcy5kb3RzW2ldLCBcImNsaWNrXCIsICgpID0+IHRoaXMuc2hvd1NsaWRlKGkpKTtcbiAgICB9XG4gICAgdGhpcy5zbGlkZUNvdW50ID0gdGhpcy5zbGlkZXMubGVuZ3RoO1xuICAgIHRoaXMuc2hvd1NsaWRlKHRoaXMuc2xpZGVJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgcGx1c1NsaWRlKG46IG51bWJlcikge1xuICAgIHRoaXMuc2hvd1NsaWRlKCh0aGlzLnNsaWRlSW5kZXggKz0gbikpO1xuICB9XG4gIHB1YmxpYyBtaW51c1NsaWRlKG46IG51bWJlcikge1xuICAgIHRoaXMuc2hvd1NsaWRlKCh0aGlzLnNsaWRlSW5kZXggLT0gbikpO1xuICB9XG4gIHB1YmxpYyBzaG93U2xpZGUoaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuc2xpZGVJbmRleCA9IGluZGV4ICUgdGhpcy5zbGlkZUNvdW50O1xuICAgIHRoaXMuc2xpZGVJbmRleCA9IE1hdGgubWF4KHRoaXMuc2xpZGVJbmRleCwgLTEgKiB0aGlzLnNsaWRlSW5kZXgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbGlkZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICh0aGlzLnNsaWRlc1tpXSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZG90cy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5kb3RzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICAgICh0aGlzLnNsaWRlc1t0aGlzLnNsaWRlSW5kZXhdIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIHRoaXMuZG90c1t0aGlzLnNsaWRlSW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH1cbn1cbiIsImltcG9ydCB7IHBhcmFtcyB9IGZyb20gJy4uL2NvcmUvdXRpbHMvcV9wYXJhbXMnO1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4vLi4vY29yZS9kYXRhLWxvZy9kYXRhJztcbmltcG9ydCB7IEFjdGlvbkVudW0gfSBmcm9tICcuLy4uL2NvcmUvZGF0YS1sb2cvZXZlbnQnO1xuaW1wb3J0IHsgRCB9IGZyb20gJy4vLi4vY29yZS9kb20vZG9jdW1lbnQnO1xuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tICcuLy4uL2NvcmUvZG9tL2VsZW1lbnRzJztcbmltcG9ydCB7IFNjcm9sbCB9IGZyb20gJy4vLi4vY29yZS9kb20vc2Nyb2xsJztcbmltcG9ydCB7IEhpc3RvcnkgfSBmcm9tICcuLy4uL2NvcmUvcm91dGVyL2hpc3RvcnknO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXJNb2RlLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICcuLy4uL2NvcmUvcm91dGVyL3JvdXRlcic7XG5pbXBvcnQgeyBUcmFja2VyIH0gZnJvbSAnLi8uLi9jb3JlL3RyYWNrZXIvdHJhY2tlcic7XG5pbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSB9IGZyb20gJy4vLi4vY29yZS91dGlscy9jb25zb2xlX3dyYXBwZXInO1xuaW1wb3J0IHsgSFRNTExvYWRlciB9IGZyb20gJy4vLi4vY29yZS91dGlscy9odG1sX2xvYWRlcic7XG5pbXBvcnQgeyBJREdlbmVyYXRvciB9IGZyb20gJy4vLi4vY29yZS91dGlscy9pZF9nZW5lcmF0b3InO1xuaW1wb3J0IHsgd2FpdFVudGlsUmVhZHkgfSBmcm9tICcuLy4uL2NvcmUvdXRpbHMvcmVhZHknO1xuaW1wb3J0IHsgc2NlbmFyaW9zLCBTY2VuYXJpbyB9IGZyb20gJy4vLi4vY29yZS91dGlscy9zY2VuYXJpb3MnO1xuXG5jb25zdCBzZXR1cCA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCB3YWl0VW50aWxSZWFkeSgpO1xuICAgIGNvbnN0IHNjZW5hcmlvID0gc2NlbmFyaW9zLmZpbmQoKHNjZW4pID0+IHNjZW4udGFnID09PSBwYXJhbXMudGFnKTtcbiAgICBpZiAoIXBhcmFtcy5zYW5kYm94KSB7XG4gICAgICAgIGlmIChzY2VuYXJpbyA9PT0gbnVsbCB8fCBzY2VuYXJpbyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBhbGVydCgnVGhpcyBISVQgaXMgYnJva2VuIGFuZCBjYW5ub3QgYmUgY29tcGxldGVkIGF0IHRoaXMgdGltZS4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFRyYWNrZXIubG9hZFNjZW5hcmlvKHNjZW5hcmlvIGFzIFNjZW5hcmlvKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBUcmFja2VyLnN0YXJ0KHtcbiAgICAgICAga2V5UHJlZml4OiAnaW5mb3JtYXRpb24tZm9yYWdpbmcnLFxuICAgICAgICBidWNrZXROYW1lOiAnY3NlLTI1Ni1sb2cnLFxuICAgICAgICBhbGxvd1N1Ym1pc3Npb246IHtcbiAgICAgICAgICAgIGFsbG93KCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRBcmVhID0gRC5pZCgndGV4dC1hcmVhJykgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGV4dEFyZWEudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGV4dEFyZWEudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1lvdSBtdXN0IGZpbGwgb3V0IHRoZSB0ZXh0IGJveCB0byB0dXJuIHRoaXMgSElUIGluLic7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdUaGVyZSB3YXMgYW4gZXJyb3IgZmlsbCBvdXQgdGhlIGZvcm0gYW5kIHRyeSBhZ2Fpbi4nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmVTdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5kYXRhLnJlc3BvbnNlID0gKEQuaWQoXG4gICAgICAgICAgICAgICAgICAgICd0ZXh0LWFyZWEnXG4gICAgICAgICAgICAgICAgKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KS52YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGRlYnVnTGV2ZWw6IERlYnVnTGV2ZWxFbnVtLk5PTkUsXG5cbiAgICAgICAgYXN5bmMgc2V0dXAoKSB7XG4gICAgICAgICAgICAvLyBjb25maWd1cmUgcm91dGVyXG4gICAgICAgICAgICBSb3V0ZXIuZGVmYXVsdEFsbG93YW5jZXNPbigpO1xuICAgICAgICAgICAgUm91dGVyLmNvbmZpZ3VyZShcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6IFJvdXRlck1vZGUuU1RBTkRBUkRfQUxMT1dBTkNFUyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZTogUm91dGVyTW9kdWxlLkEsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbW9kZTogUm91dGVyTW9kZS5PRkYsIG1vZHVsZTogUm91dGVyTW9kdWxlLkZPUk0gfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogUm91dGVyTW9kZS5TVEFOREFSRF9BTExPV0FOQ0VTLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlOiBSb3V0ZXJNb2R1bGUuSU1HLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgJ2ZpbGVzLydcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBIaXN0b3J5LnNldHVwKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB7IHdyYXBwZXI6IHRydWUgfSk7XG4gICAgICAgICAgICAvLyBjb25maWd1cmUgaHRtbCBsb2FkZXIgcG9zdCBvcGVyYXRpb25cbiAgICAgICAgICAgIEhUTUxMb2FkZXIuZmluaXNoKCk7XG4gICAgICAgICAgICBIVE1MTG9hZGVyLnJlZ2lzdGVyUG9zdExvYWRGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICBJREdlbmVyYXRvci5yZXNldCgpO1xuICAgICAgICAgICAgICAgIElER2VuZXJhdG9yLmF0dGFjaElkc1RvQWxsRWxlbWVudHMoKTtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuc2V0dXAoRWxlbWVudHMuaHRtbExvYyk7XG4gICAgICAgICAgICAgICAgU2Nyb2xsLnByb21pc2UoMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIGNvbmZpZ3VyZSBsaXN0ZW5lcnMgb24gaHRtbCBsb2NcbiAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihFbGVtZW50cy5odG1sTG9jLCBBY3Rpb25FbnVtLkNMSUNLLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV2ID0gZSBhcyBNb3VzZUV2ZW50O1xuICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDogZXYuY2xpZW50WCxcbiAgICAgICAgICAgICAgICAgICAgeTogZXYuY2xpZW50WSxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IChldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmlkLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgVHJhY2tlci5nZXRFdmVudERpc3BhdGNoRnVuYyhBY3Rpb25FbnVtLkNMSUNLKShvYmopO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoRWxlbWVudHMuZG9jdW1lbnQsICdrZXlwcmVzcycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXYgPSBlIGFzIEtleWJvYXJkRXZlbnQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGV2LmtleSxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IChldi5zcmNFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5pZCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIFRyYWNrZXIuZ2V0RXZlbnREaXNwYXRjaEZ1bmMoQWN0aW9uRW51bS5CVVRUT04pKG9iaik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFNQRUNJQUwgQ0FTRTogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IGRvZXMgbm90IGJlaGF2ZSB0aGUgc2FtZSB3YXkgYXMgZG9jdW1lbnQgc28gdGhlIGJlbG93IGZ1bmN0aW9uIG11c3QgYmVoYXZlIGRpZmZlcmVudGx5IHRoYW4gdGhlIGxpc3RlbmVycyBhYm92ZS5cbiAgICAgICAgICAgIGNvbnN0IHNFbGVtID0gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCBhcyBFbGVtZW50O1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkeCA9IHNFbGVtLnNjcm9sbExlZnQ7XG4gICAgICAgICAgICAgICAgY29uc3QgZHkgPSBzRWxlbS5zY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgY29uc3QgZHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIE1hdGguYWJzKFRyYWNrZXIubGFzdFBvcy54IC0gZHgpID4gMTAgfHxcbiAgICAgICAgICAgICAgICAgICAgKE1hdGguYWJzKFRyYWNrZXIubGFzdFBvcy55IC0gZHkpID4gMTAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGR0aW1lIC0gVHJhY2tlci5sYXN0UG9zLnRpbWUgPiAxMDApXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIFRyYWNrZXIubGFzdFBvcy54ID0gZHg7XG4gICAgICAgICAgICAgICAgICAgIFRyYWNrZXIubGFzdFBvcy55ID0gZHk7XG4gICAgICAgICAgICAgICAgICAgIFRyYWNrZXIubGFzdFBvcy50aW1lID0gZHRpbWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHsgeDogZHgsIHk6IGR5IH07XG4gICAgICAgICAgICAgICAgICAgIFRyYWNrZXIuZ2V0RXZlbnREaXNwYXRjaEZ1bmMoQWN0aW9uRW51bS5TQ1JPTEwpKG9iaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBjb25maWd1cmUgdHJhY2tlZCBldmVudHNcbiAgICAgICAgICAgIFRyYWNrZXIucmVnaXN0ZXJFdmVudChBY3Rpb25FbnVtLkhJU1RPUlkpO1xuICAgICAgICAgICAgVHJhY2tlci5yZWdpc3RlckV2ZW50KEFjdGlvbkVudW0uQlVUVE9OKTtcbiAgICAgICAgICAgIFRyYWNrZXIucmVnaXN0ZXJFdmVudChBY3Rpb25FbnVtLkNMSUNLKTtcbiAgICAgICAgICAgIFRyYWNrZXIucmVnaXN0ZXJFdmVudChBY3Rpb25FbnVtLlNDUk9MTCk7XG4gICAgICAgICAgICAvLyBsb2FkIGZpcnN0IHBhZ2VcbiAgICAgICAgICAgIGF3YWl0IFJvdXRlci5sb2FkKCdmaWxlcy9pbmRleC5odG1sJyk7XG4gICAgICAgIH0sXG4gICAgfSk7XG59O1xuXG5zZXR1cCgpO1xuIl19
