(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports=[
    {
        "context": "You are a parent considering sending your child to Washington University Nursery School. You’ve learned that the curriculum is play-based and you want to know how learning is incorporated into a play-based context. You have some ideas about how language learning might happen, but are less sure about math.",
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
        "context": "You are moving to St. Louis from Beijing and looking for a Pre-K program for your daughter, age 5. She is very close to her friends and you are worried that the move might be hard on her. She may need some extra support from her new teachers learning English, adapting to American culture, and making new friends.",
        "question": "How does the Washington University Nursery School staff approach providing extra help to students who need it?",
        "tag": "help"
    },
    {
        "context": "You are looking at Nursery Schools for your soon to be 3 year old. He has never been in school or daycare before and you are somewhat worried about the transition. You'd like to ensure that you'll be able to have strong communicationat his new school.",
        "question": "How does the Washington University Nursery School handle communicating with parents?",
        "tag": "communication"
    },
    {
        "context": "It’s mid-December and your son, age 4, came home all excited about science class. They learned a new word, but he can’t actually remember the word they learned about.",
        "question": "What was the topic of his recent science class?",
        "tag": "science"
    },
    {
        "context": "You are selecting a pre-school, but want to be sure that your daughter will be ready for kindergarten when it’s time.",
        "question": "How does the nursery school assess children’s knowledge, support their growth, and share the results with parents?",
        "tag": "parent_teacher_conference"
    },
    {
        "context": "You have recently accepted a position for your child for the coming school year at the Washington University Nursery School. Up to this point, your child has been at home and you are somewhat worried about the transition.",
        "question": "How does the nursery school support kids’ transitions into school?",
        "tag": "orientation"
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
                        data_1.data.urlData.submitTo =
                            qp.get('turkSubmitTo') + 'mturk/externalSubmit';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY2VuYXJpb3Mvc2NlbmFyaW9zLmpzb24iLCJzY3JpcHRzL3RzL2NvcmUvZGF0YS1sb2cvZGF0YS50cyIsInNjcmlwdHMvdHMvY29yZS9kYXRhLWxvZy9ldmVudC50cyIsInNjcmlwdHMvdHMvY29yZS9kYXRhLWxvZy9yZWNlaXZlci50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vYmFubmVyLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9kb2N1bWVudC50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vZWxlbWVudHMudHMiLCJzY3JpcHRzL3RzL2NvcmUvZG9tL2h0bWxfbG9jLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9tb2RhbC50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vc2Nyb2xsLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9zdWJtaXRfZm9ybS50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vdHJhY2tlcl9lbGVtcy50cyIsInNjcmlwdHMvdHMvY29yZS9yb3V0ZXIvaGlzdG9yeS50cyIsInNjcmlwdHMvdHMvY29yZS9yb3V0ZXIvcm91dGVyLnRzIiwic2NyaXB0cy90cy9jb3JlL3RyYWNrZXIvdHJhY2tlci50cyIsInNjcmlwdHMvdHMvY29yZS91dGlscy9jb25zb2xlX3dyYXBwZXIudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvZnVuY3MudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvaHRtbF9sb2FkZXIudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvaWRfZ2VuZXJhdG9yLnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3FfcGFyYW1zLnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3JlYWR5LnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3NjZW5hcmlvcy50cyIsInNjcmlwdHMvdHMvZHluYW1pYy1kb20vYWNjb3JkaW9uLnRzIiwic2NyaXB0cy90cy9keW5hbWljLWRvbS9kby1zb21ldGhpbmcuanMiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL2R5bmFtaWMtZG9tLnRzIiwic2NyaXB0cy90cy9keW5hbWljLWRvbS9odG1sLWltcG9ydHMudHMiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL2h0bWwvZm9vdGVyLmh0bWwiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL2h0bWwvaGVhZGVyLmh0bWwiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL3NsaWRlc2hvdy50cyIsInNjcmlwdHMvdHMvdHJhY2tlci90cmFja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2RUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQVM1QixJQUFNLFNBQVMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQztBQUVoRCxRQUFBLE9BQU8sR0FBaUI7SUFDakMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxRQUFRLEVBQUU7SUFDekIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQzNDLEtBQUssRUFBRSxTQUFT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QUMsRUFDekM7Z0RBQ0UsaUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnREFDdkIsaUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnREFDdkIsaUJBQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztnREFDN0IsSUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztnREFDN0IsaUJBQU8sQ0FBQyxvQkFBb0IsdUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUM7NkNBQ3hEO3dDQUNMLENBQUMsQ0FBQyxDQUFDO3dDQUNILDJCQUEyQjt3Q0FDM0IsaUJBQU8sQ0FBQyxhQUFhLHlCQUFvQixDQUFDO3dDQUMxQyxpQkFBTyxDQUFDLGFBQWEsdUJBQW1CLENBQUM7d0NBQ3pDLGlCQUFPLENBQUMsYUFBYSxxQkFBa0IsQ0FBQzt3Q0FDeEMsaUJBQU8sQ0FBQyxhQUFhLHVCQUFtQixDQUFDO3dDQUN6QyxrQkFBa0I7d0NBQ2xCLHFCQUFNLGVBQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBQTs7d0NBRHJDLGtCQUFrQjt3Q0FDbEIsU0FBcUMsQ0FBQzs7Ozs7cUJBQ3pDO2lCQUNKLENBQUMsQ0FBQzs7OztLQUNOLENBQUM7QUFFRixLQUFLLEVBQUUsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIm1vZHVsZS5leHBvcnRzPVtcclxuICAgIHtcclxuICAgICAgICBcImNvbnRleHRcIjogXCJZb3UgYXJlIGEgcGFyZW50IGNvbnNpZGVyaW5nIHNlbmRpbmcgeW91ciBjaGlsZCB0byBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wuIFlvdeKAmXZlIGxlYXJuZWQgdGhhdCB0aGUgY3VycmljdWx1bSBpcyBwbGF5LWJhc2VkIGFuZCB5b3Ugd2FudCB0byBrbm93IGhvdyBsZWFybmluZyBpcyBpbmNvcnBvcmF0ZWQgaW50byBhIHBsYXktYmFzZWQgY29udGV4dC4gWW91IGhhdmUgc29tZSBpZGVhcyBhYm91dCBob3cgbGFuZ3VhZ2UgbGVhcm5pbmcgbWlnaHQgaGFwcGVuLCBidXQgYXJlIGxlc3Mgc3VyZSBhYm91dCBtYXRoLlwiLFxyXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJGaW5kIHNvbWUgZXhhbXBsZXMgb2YgaG93IG1hdGggbGVhcm5pbmcgaXMgaW5jb3Jwb3JhdGVkIGF0IFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbC5cIixcclxuICAgICAgICBcInRhZ1wiOiBcIm1hdGhcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvbnRleHRcIjogXCJZb3UgYXJlIGludmVzdGlnYXRpbmcgcHJlLXNjaG9vbCBvcHRpb25zIGZvciB5b3VyIDQgeWVhciBvbGQuIEJvdGggeW91IGFuZCB5b3VyIHNwb3VzZSB3b3JrLCBzbyB5b3UgbmVlZCB0byBmdWxseSB1bmRlcnN0YW5kIHdoYXQgc2NoZWR1bGluZyBjb25zdHJhaW50cyBlYWNoIG9wdGlvbiBpbnZvbHZlcy4gT25lIG9mIHlvdXIgc2Nob29scyBvZiBpbnRlcmVzdCBpcyB0aGUgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sLlwiLFxyXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJXaGVuIGRvZXMgc2Nob29sIHN0YXJ0IGFuZCBlbmQgZWFjaCBkYXk/IFdoYXQgaXMgdGhlIGxvbmdlc3QgcGVyaW9kIG9mIHRpbWUgdGhhdCB5b3VyIGNoaWxkIGNhbiBiZSB0aGVyZT9cIixcclxuICAgICAgICBcInRhZ1wiOiBcInNjaG9vbF9kYXlcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvbnRleHRcIjogXCJZb3UgYXJlIGludmVzdGlnYXRpbmcgcHJlLXNjaG9vbCBvcHRpb25zIGZvciB5b3VyIDMuNSB5ZWFyIG9sZC4gWW914oCZdmUgYmVlbiB0b2xkIHRoYXQgb25lIG9mIHRoZSBoYWxsbWFya3Mgb2YgYSBnb29kIHByb2dyYW0gaXMgdGVhY2hlcnMgd2hvIGhhdmUgYmVlbiB0aGVyZSBmb3IgYSBsb25nIHRpbWUuIFlvdSB3YW50IHlvdXIgY2hpbGQgdG8gYXR0ZW5kIGluIHRoZSBtb3JuaW5ncyBvbmx5LlwiLFxyXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJXaGljaCB0ZWFjaGVycyB3b3VsZCB5b3VyIGNoaWxkIGhhdmUgYW5kIGhvdyBsb25nIGhhdmUgdGhleSBiZWVuIGF0IHRoZSBzY2hvb2w/XCIsXHJcbiAgICAgICAgXCJ0YWdcIjogXCJ0ZWFjaGVyX3RlbnVyZVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgc3RhcnRpbmcgdG8gbG9vayBhdCBzdW1tZXIgY2FtcCBvcHRpb25zIGFuZCBoYXZlIGhlYXJkIGdvb2QgdGhpbmdzIGFib3V0IFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbCBmb3IgeW91bmcgY2hpbGRyZW4uXCIsXHJcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIldoYXQgYXJlIHRoZSBkYWlseSBjYW1wIGhvdXJzPyBBcmUgdGhlcmUgYW55IGV4dGVuZGVkIGRheSBvcHBvcnR1bml0aWVzP1wiLFxyXG4gICAgICAgIFwidGFnXCI6IFwic3VtbWVyX2NhbXBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvbnRleHRcIjogXCJZb3UgYXJlIGludmVzdGlnYXRpbmcgcHJlLXNjaG9vbCBvcHRpb25zIGZvciB5b3VyIHNwaXJpdGVkIDMgeWVhciBvbGQgYW5kIHdhbnQgdG8gdW5kZXJzdGFuZCB0aGVpciBhcHByb2FjaCB0byBkaXNjaXBsaW5lLlwiLFxyXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJIb3cgZG8gdGVhY2hlcnMgYXQgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IGFwcHJvYWNoIGRpc2NpcGxpbmU/XCIsXHJcbiAgICAgICAgXCJ0YWdcIjogXCJkaXNjaXBsaW5lXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiWW91ciBkYXVnaHRlciBpcyBpbiB0aGUgVGVkZHkgQmVhciBjbGFzcyBhdCBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wuIFNoZSBjYW1lIGhvbWUgdGhpcyB3ZWVrIHNpbmdpbmcgYSBzb25nIGluIFNwYW5pc2ggYWJvdXQgc2hhcGVzLCBidXQgeW91IGFyZSBwcmV0dHkgc3VyZSB0aGF0IHNoZSBoYXMgc29tZSBvZiB0aGUgd29yZHMgd3JvbmcuXCIsXHJcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIldoYXQgYXJlIHRoZSBjb3JyZWN0IGx5cmljcz9cIixcclxuICAgICAgICBcInRhZ1wiOiBcInNwYW5pc2hfc29uZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29udGV4dFwiOiBcIkl0IGlzIG1pZC1EZWNlbWJlciBhbmQgeW91IGFyZSB0aGlua2luZyBhYm91dCB0aGluZ3MgdG8gZG8gb3ZlciB5b3VyIGRhdWdodGVyJ3MgdXBjb21pbmcgc2Nob29sIGJyZWFrLiBTaGUgaXMgMyB5ZWFycyBvbGQgYW5kIGF0dGVuZHMgdGhlIFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbCBhbmQgaXMgaW4gdGhlIFRlZGR5IEJlYXIgY2xhc3Nyb29tLiBZb3UgYXJlIHBsYW5uaW5nIGEgdHJpcCB0byB0aGUgbGlicmFyeSBhbmQgd2FudCB0byBjaGVjayBvdXQgc29tZSBib29rcyB0aGF0IGNvbm5lY3Qgd2l0aCBzb21ldGhpbmcgc2hlIGlzIGRvaW5nIGluIHNjaG9vbC5cIixcclxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiV2hhdCBhcmUgc29tZSBwb3RlbnRpYWwgYm9vayB0b3BpY3MgdGhhdCByZWxhdGUgdG8gc29tZXRoaW5nIHRoYXQgaXMgZ29pbmcgb24gaW4gaGVyIGNsYXNzcm9vbSB0aGlzIHdlZWs/XCIsXHJcbiAgICAgICAgXCJ0YWdcIjogXCJib29rc1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgYSBwYXJlbnQgd2l0aCBhIGNoaWxkIHdobyBoYXMganVzdCBiZWVuIGFjY2VwdGVkIHRvIGF0dGVuZCBhcyBhIGZ1bGwgdGltZSBzdHVkZW50IGF0IHRoZSBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wuIFlvdSB3YW50IHRvIGFjY2VwdCB0aGUgb2ZmZXIgb2YgYWRtaXNzaW9uLlwiLFxyXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJGaWd1cmUgb3V0IHdoYXQgeW91IG5lZWQgdG8gZG8gYXQgdGhpcyB0aW1lIHRvIGZpbmFsaXplIHlvdXIgY2hpbGTigJlzIHBsYWNlIGF0IHRoZSBzY2hvb2wuXCIsXHJcbiAgICAgICAgXCJ0YWdcIjogXCJhZG1pc3Npb25fMlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgYSBwYXJlbnQgd2l0aCBhIGNoaWxkIHdobyBoYXMganVzdCBiZWVuIGFjY2VwdGVkIHRvIGF0dGVuZCBhcyBhIGZ1bGwgdGltZSBzdHVkZW50IGF0IHRoZSBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wuIFlvdSBuZWVkIHRvIHBheSBvbmUgbW9udGggb2YgdHVpdGlvbiBhcyBhIGRlcG9zaXQuXCIsXHJcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIkZpbmQgb3V0IGhvdyBtdWNoIG9uZSBtb250aCBvZiB0dWl0aW9uIGlzIGFuZCB3aGV0aGVyIG9yIG5vdCBpdCBpcyBwb3NzaWJsZSB0byBwYXkgb25saW5lLlwiLFxyXG4gICAgICAgIFwidGFnXCI6IFwiZGVwb3NpdFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgbW92aW5nIHRvIFN0LiBMb3VpcyBmcm9tIEJlaWppbmcgYW5kIGxvb2tpbmcgZm9yIGEgUHJlLUsgcHJvZ3JhbSBmb3IgeW91ciBkYXVnaHRlciwgYWdlIDUuIFNoZSBpcyB2ZXJ5IGNsb3NlIHRvIGhlciBmcmllbmRzIGFuZCB5b3UgYXJlIHdvcnJpZWQgdGhhdCB0aGUgbW92ZSBtaWdodCBiZSBoYXJkIG9uIGhlci4gU2hlIG1heSBuZWVkIHNvbWUgZXh0cmEgc3VwcG9ydCBmcm9tIGhlciBuZXcgdGVhY2hlcnMgbGVhcm5pbmcgRW5nbGlzaCwgYWRhcHRpbmcgdG8gQW1lcmljYW4gY3VsdHVyZSwgYW5kIG1ha2luZyBuZXcgZnJpZW5kcy5cIixcclxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiSG93IGRvZXMgdGhlIFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbCBzdGFmZiBhcHByb2FjaCBwcm92aWRpbmcgZXh0cmEgaGVscCB0byBzdHVkZW50cyB3aG8gbmVlZCBpdD9cIixcclxuICAgICAgICBcInRhZ1wiOiBcImhlbHBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvbnRleHRcIjogXCJZb3UgYXJlIGxvb2tpbmcgYXQgTnVyc2VyeSBTY2hvb2xzIGZvciB5b3VyIHNvb24gdG8gYmUgMyB5ZWFyIG9sZC4gSGUgaGFzIG5ldmVyIGJlZW4gaW4gc2Nob29sIG9yIGRheWNhcmUgYmVmb3JlIGFuZCB5b3UgYXJlIHNvbWV3aGF0IHdvcnJpZWQgYWJvdXQgdGhlIHRyYW5zaXRpb24uIFlvdSdkIGxpa2UgdG8gZW5zdXJlIHRoYXQgeW91J2xsIGJlIGFibGUgdG8gaGF2ZSBzdHJvbmcgY29tbXVuaWNhdGlvbmF0IGhpcyBuZXcgc2Nob29sLlwiLFxyXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJIb3cgZG9lcyB0aGUgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sIGhhbmRsZSBjb21tdW5pY2F0aW5nIHdpdGggcGFyZW50cz9cIixcclxuICAgICAgICBcInRhZ1wiOiBcImNvbW11bmljYXRpb25cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvbnRleHRcIjogXCJJdOKAmXMgbWlkLURlY2VtYmVyIGFuZCB5b3VyIHNvbiwgYWdlIDQsIGNhbWUgaG9tZSBhbGwgZXhjaXRlZCBhYm91dCBzY2llbmNlIGNsYXNzLiBUaGV5IGxlYXJuZWQgYSBuZXcgd29yZCwgYnV0IGhlIGNhbuKAmXQgYWN0dWFsbHkgcmVtZW1iZXIgdGhlIHdvcmQgdGhleSBsZWFybmVkIGFib3V0LlwiLFxyXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJXaGF0IHdhcyB0aGUgdG9waWMgb2YgaGlzIHJlY2VudCBzY2llbmNlIGNsYXNzP1wiLFxyXG4gICAgICAgIFwidGFnXCI6IFwic2NpZW5jZVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgc2VsZWN0aW5nIGEgcHJlLXNjaG9vbCwgYnV0IHdhbnQgdG8gYmUgc3VyZSB0aGF0IHlvdXIgZGF1Z2h0ZXIgd2lsbCBiZSByZWFkeSBmb3Iga2luZGVyZ2FydGVuIHdoZW4gaXTigJlzIHRpbWUuXCIsXHJcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIkhvdyBkb2VzIHRoZSBudXJzZXJ5IHNjaG9vbCBhc3Nlc3MgY2hpbGRyZW7igJlzIGtub3dsZWRnZSwgc3VwcG9ydCB0aGVpciBncm93dGgsIGFuZCBzaGFyZSB0aGUgcmVzdWx0cyB3aXRoIHBhcmVudHM/XCIsXHJcbiAgICAgICAgXCJ0YWdcIjogXCJwYXJlbnRfdGVhY2hlcl9jb25mZXJlbmNlXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiWW91IGhhdmUgcmVjZW50bHkgYWNjZXB0ZWQgYSBwb3NpdGlvbiBmb3IgeW91ciBjaGlsZCBmb3IgdGhlIGNvbWluZyBzY2hvb2wgeWVhciBhdCB0aGUgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sLiBVcCB0byB0aGlzIHBvaW50LCB5b3VyIGNoaWxkIGhhcyBiZWVuIGF0IGhvbWUgYW5kIHlvdSBhcmUgc29tZXdoYXQgd29ycmllZCBhYm91dCB0aGUgdHJhbnNpdGlvbi5cIixcclxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiSG93IGRvZXMgdGhlIG51cnNlcnkgc2Nob29sIHN1cHBvcnQga2lkc+KAmSB0cmFuc2l0aW9ucyBpbnRvIHNjaG9vbD9cIixcclxuICAgICAgICBcInRhZ1wiOiBcIm9yaWVudGF0aW9uXCJcclxuICAgIH1cclxuXVxyXG4iLCJpbXBvcnQgeyBUcmFja2VyRXZlbnQgfSBmcm9tICcuL2V2ZW50JztcbmNvbnNvbGUubG9nKCdkYXRhIGxvYWRlZC4nKTtcbmV4cG9ydCBpbnRlcmZhY2UgTXR1cmtVUkxEYXRhIHtcbiAgICByYXc6IHN0cmluZztcbiAgICBhc3NpZ25tZW50SUQ6IHN0cmluZyB8IG51bGw7XG4gICAgaGl0SUQ6IHN0cmluZyB8IG51bGw7XG4gICAgd29ya2VySUQ6IHN0cmluZyB8IG51bGw7XG4gICAgc3VibWl0VG86IHN0cmluZyB8IG51bGw7XG59XG5cbmNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpLnNlYXJjaFBhcmFtcztcblxuZXhwb3J0IGNvbnN0IHVybERhdGE6IE10dXJrVVJMRGF0YSA9IHtcbiAgICByYXc6IHVybFBhcmFtcy50b1N0cmluZygpLFxuICAgIGFzc2lnbm1lbnRJRDogdXJsUGFyYW1zLmdldCgnYXNzaWdubWVudElkJyksXG4gICAgaGl0SUQ6IHVybFBhcmFtcy5nZXQoJ2hpdElkJyksXG4gICAgd29ya2VySUQ6IHVybFBhcmFtcy5nZXQoJ3dvcmtlcklkJyksXG4gICAgc3VibWl0VG86IHVybFBhcmFtcy5nZXQoJ3R1cmtTdWJtaXRUbycpLFxufTtcblxuZXhwb3J0IGNsYXNzIERhdGEge1xuICAgIHB1YmxpYyBsb2dzOiB7IFtldmVudFR5cGU6IHN0cmluZ106IFRyYWNrZXJFdmVudFtdIH0gPSB7fTtcbiAgICBwdWJsaWMgZGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgIHB1YmxpYyBlcnJvcnM6IGFueVtdID0gW107XG4gICAgcHVibGljIHVybERhdGE6IE10dXJrVVJMRGF0YTtcblxuICAgIGNvbnN0cnVjdG9yKHJhd010dXJrVVJMRGF0YTogTXR1cmtVUkxEYXRhKSB7XG4gICAgICAgIHRoaXMudXJsRGF0YSA9IHJhd010dXJrVVJMRGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VyaWFsaXplKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBkYXRhID0gbmV3IERhdGEodXJsRGF0YSk7XG5cbk9iamVjdC5hc3NpZ24od2luZG93LCB7IGRhdGEgfSk7XG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlclwiO1xuaW1wb3J0IHsgbm93IH0gZnJvbSBcIi4uL3V0aWxzL2Z1bmNzXCI7XG5sb2coXCJldmVudCBsb2FkZWQuXCIsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbmV4cG9ydCBjb25zdCBlbnVtIEFjdGlvbkVudW0ge1xuICBDTElDSyA9IFwiY2xpY2tcIixcbiAgQlVUVE9OID0gXCJidXR0b25cIixcbiAgU0NST0xMID0gXCJzY3JvbGxcIixcbiAgSElTVE9SWSA9IFwiaGlzdG9yeVwiLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrZXJFdmVudCB7XG4gIGFjdGlvbjogc3RyaW5nO1xuICB0aW1lOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RUb1RyYWNrZXJFdmVudChvYmo6IGFueSwgYWN0aW9uOiBzdHJpbmcpIHtcbiAgb2JqLmFjdGlvbiA9IGFjdGlvbjtcbiAgb2JqLnRpbWUgPSBub3coKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVHJhY2tlckV2ZW50KG9iajogYW55KTogb2JqIGlzIFRyYWNrZXJFdmVudCB7XG4gIHJldHVybiBvYmouYWN0aW9uICE9PSB1bmRlZmluZWQgJiYgb2JqLnRpbWUgIT09IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNsYXNzIEJhc2VUcmFja2VyRXZlbnQ8VD4gaW1wbGVtZW50cyBUcmFja2VyRXZlbnQge1xuICBwdWJsaWMgY3VzdEV2OiBDdXN0b21FdmVudDtcbiAgcHVibGljIGFjdGlvbjogc3RyaW5nO1xuICBwdWJsaWMgdGltZTogbnVtYmVyO1xuICBjb25zdHJ1Y3RvcihhY3Rpb246IHN0cmluZywgZXZlbnRJbml0RGljdD86IEN1c3RvbUV2ZW50SW5pdDxUPiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuY3VzdEV2ID0gbmV3IEN1c3RvbUV2ZW50KGFjdGlvbiwgZXZlbnRJbml0RGljdCk7XG4gICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG4gICAgdGhpcy50aW1lID0gbm93KCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRldGFpbCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXN0RXYuZGV0YWlsO1xuICB9XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWNsYXNzZXMtcGVyLWZpbGVcbmV4cG9ydCBjbGFzcyBDbGlja0V2ZW50IGV4dGVuZHMgQmFzZVRyYWNrZXJFdmVudDx7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBpZDogc3RyaW5nO1xufT4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICB4OiBudW1iZXIsXG4gICAgeTogbnVtYmVyLFxuICAgIGlkOiBzdHJpbmcsXG4gICAgZXZlbnRJbml0RGljdD86XG4gICAgICB8IEN1c3RvbUV2ZW50SW5pdDx7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBpZDogc3RyaW5nIH0+XG4gICAgICB8IHVuZGVmaW5lZFxuICApIHtcbiAgICBzdXBlcihBY3Rpb25FbnVtLkNMSUNLLCBldmVudEluaXREaWN0KTtcbiAgICB0aGlzLmRldGFpbC54ID0geDtcbiAgICB0aGlzLmRldGFpbC55ID0geTtcbiAgICB0aGlzLmRldGFpbC5pZCA9IGlkO1xuICB9XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWNsYXNzZXMtcGVyLWZpbGVcbmV4cG9ydCBjbGFzcyBCdXR0b25FdmVudCBleHRlbmRzIEJhc2VUcmFja2VyRXZlbnQ8eyBrZXk6IHN0cmluZzsgaWQ6IHN0cmluZyB9PiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGtleTogc3RyaW5nLFxuICAgIGlkOiBzdHJpbmcsXG4gICAgZXZlbnRJbml0RGljdD86IEN1c3RvbUV2ZW50SW5pdDx7IGtleTogc3RyaW5nOyBpZDogc3RyaW5nIH0+IHwgdW5kZWZpbmVkXG4gICkge1xuICAgIHN1cGVyKEFjdGlvbkVudW0uQ0xJQ0ssIGV2ZW50SW5pdERpY3QpO1xuICAgIHRoaXMuZGV0YWlsLmtleSA9IGtleTtcbiAgICB0aGlzLmRldGFpbC5pZCA9IGlkO1xuICB9XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWNsYXNzZXMtcGVyLWZpbGVcbmV4cG9ydCBjbGFzcyBIaXN0b3J5RXZlbnQgZXh0ZW5kcyBCYXNlVHJhY2tlckV2ZW50PHtcbiAgdXJsOiBzdHJpbmc7XG4gIGV4dHJhPzogYW55O1xufT4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBleHRyYT86IGFueSxcbiAgICBldmVudEluaXREaWN0PzogQ3VzdG9tRXZlbnRJbml0PHsgdXJsOiBzdHJpbmcgfT4gfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgc3VwZXIoQWN0aW9uRW51bS5ISVNUT1JZLCBldmVudEluaXREaWN0KTtcbiAgICB0aGlzLmRldGFpbC51cmwgPSB1cmw7XG4gICAgdGhpcy5kZXRhaWwuZXh0cmEgPSBleHRyYTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gXCIuLi91dGlscy9jb25zb2xlX3dyYXBwZXJcIjtcbmltcG9ydCB7IGlzVHJhY2tlckV2ZW50LCBUcmFja2VyRXZlbnQgfSBmcm9tIFwiLi9ldmVudFwiO1xubG9nKFwicmVjZWl2ZXIgbG9hZGVkLlwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgY2xhc3MgRXZlbnRSZWNlaXZlciB7XG4gIHByaXZhdGUgbWFwID0gbmV3IE1hcDxzdHJpbmcsIChldmVudDogVHJhY2tlckV2ZW50KSA9PiB2b2lkPigpO1xuICBwcml2YXRlIGVtaXR0ZXIgPSBuZXcgRXZlbnRUYXJnZXQoKTtcblxuICBwdWJsaWMgcmVnaXN0ZXIoZXZlbnRUeXBlOiBzdHJpbmcsIGNhbGxiYWNrPzogKGV2ZW50OiBUcmFja2VyRXZlbnQpID0+IHZvaWQpIHtcbiAgICB0aGlzLmVtaXR0ZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIChldmVudDogRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRyYWNrRXYgPSAoKGV2ZW50IGFzIHVua25vd24pIGFzIEN1c3RvbUV2ZW50KVxuICAgICAgICAuZGV0YWlsIGFzIFRyYWNrZXJFdmVudDtcbiAgICAgIGlmIChpc1RyYWNrZXJFdmVudCh0cmFja0V2KSAmJiBjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayh0cmFja0V2KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMubWFwLnNldChldmVudFR5cGUsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZG9FdmVudChldmVudDogVHJhY2tlckV2ZW50KSB7XG4gICAgY29uc3QgY2FsbGJhY2sgPSB0aGlzLm1hcC5nZXQoXCJcIiArIGV2ZW50LmFjdGlvbik7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjayhldmVudCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiLi4vcm91dGVyL3JvdXRlclwiO1xuaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gXCIuLi91dGlscy9jb25zb2xlX3dyYXBwZXJcIjtcbmltcG9ydCB7IEhpc3RvcnkgfSBmcm9tIFwiLi8uLi9yb3V0ZXIvaGlzdG9yeVwiO1xuaW1wb3J0IHsgRCB9IGZyb20gXCIuL2RvY3VtZW50XCI7XG5pbXBvcnQgeyBFbGVtZW50cyB9IGZyb20gXCIuL2VsZW1lbnRzXCI7XG5sb2coXCJiYW5uZXIgbG9hZGVkLlwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgY2xhc3MgVG9wQmFubmVyIHtcbiAgcHVibGljIHN0YXRpYyBzaG93KCkge1xuICAgIFRvcEJhbm5lci5zaG93aW5nID0gdHJ1ZTtcbiAgICBELmRpc3BsYXkoRWxlbWVudHMuZGRVcCwgdHJ1ZSk7XG4gICAgRC5kaXNwbGF5KEVsZW1lbnRzLmRkRG93biwgZmFsc2UpO1xuICAgIEQuZGlzcGxheShFbGVtZW50cy5kZENvbnRlbnQsIHRydWUpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBoaWRlKCkge1xuICAgIFRvcEJhbm5lci5zaG93aW5nID0gZmFsc2U7XG4gICAgRC5kaXNwbGF5KEVsZW1lbnRzLmRkRG93biwgdHJ1ZSk7XG4gICAgRC5kaXNwbGF5KEVsZW1lbnRzLmRkVXAsIGZhbHNlKTtcbiAgICBELmRpc3BsYXkoRWxlbWVudHMuZGRDb250ZW50LCBmYWxzZSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRvRGlzcGxheUNoYW5nZSgpIHtcbiAgICBUb3BCYW5uZXIuc2hvd2luZyA/IFRvcEJhbm5lci5oaWRlKCkgOiBUb3BCYW5uZXIuc2hvdygpO1xuICB9XG4gIHB1YmxpYyBzdGF0aWMgc2V0dXAoKSB7XG4gICAgRC5hZGRFdmVudExpc3RlbmVyKEVsZW1lbnRzLmRkQXJyb3csIFwiY2xpY2tcIiwgVG9wQmFubmVyLmRvRGlzcGxheUNoYW5nZSk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBzaG93aW5nID0gdHJ1ZTtcbn1cblxuRC5hZGRFdmVudExpc3RlbmVyKFwibXR1cmstdG9wLWJhbm5lci1iYWNrXCIsIFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgaWYgKEhpc3RvcnkuY2FuQmFja3dhcmQoKSkge1xuICAgIFJvdXRlci5sb2FkV2l0aFBhdGhQcmVmaXgoSGlzdG9yeS5iYWNrd2FyZCgpKTtcbiAgfSBlbHNlIHtcbiAgICBhbGVydChcIlRoZXJlIGlzIG5vIHBhZ2UgaGlzdG9yeSB0byBnbyBiYWNrIGZvciBhdCB0aGlzIHRpbWUhXCIpO1xuICB9XG59KTtcbiIsImltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBlcnJvciwgbG9nIH0gZnJvbSBcIi4vLi4vdXRpbHMvY29uc29sZV93cmFwcGVyXCI7XG5sb2coXCJkb2N1bWVudCBsb2FkZWQuXCIsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbmV4cG9ydCBjbGFzcyBEIHtcbiAgcHVibGljIHN0YXRpYyBkb2M6IERvY3VtZW50ID0gZG9jdW1lbnQ7XG5cbiAgcHVibGljIHN0YXRpYyBlbGVtKGVsZW06IEVsZW1lbnQgfCBzdHJpbmcpOiBFbGVtZW50IHtcbiAgICBpZiAodHlwZW9mIGVsZW0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHJldHVybiBELmlkKGVsZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZWxlbSBhcyBFbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZGlzcGxheShlbGVtOiBFbGVtZW50IHwgc3RyaW5nLCBzaG93OiBib29sZWFuKTogdm9pZCB7XG4gICAgZWxlbSA9IEQuZWxlbShlbGVtKTtcbiAgICBpZiAoc2hvdykge1xuICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwibm9uZVwiKTtcbiAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXlcIik7XG4gICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJub25lXCIpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaWQoaWQ6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBlbGVtZW50ID0gRC5kb2MuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEVsZW1lbnQgd2FzIG5vdCBmb3VuZCwgaWQ6IDwke2lkfT4uYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfVxuICBwdWJsaWMgc3RhdGljIGNsYXooY2xhejogc3RyaW5nKTogSFRNTENvbGxlY3Rpb25PZjxFbGVtZW50PiB7XG4gICAgcmV0dXJuIEQuZG9jLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xheik7XG4gIH1cbiAgcHVibGljIHN0YXRpYyB0YWcodGFnOiBzdHJpbmcpOiBIVE1MQ29sbGVjdGlvbk9mPEVsZW1lbnQ+IHtcbiAgICByZXR1cm4gRC5kb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnKTtcbiAgfVxuICBwdWJsaWMgc3RhdGljIGltYWdlKGlkOiBzdHJpbmcsIHVybDogc3RyaW5nKTogdm9pZCB7XG4gICAgZXJyb3IoKCkgPT4gRC5pZChpZCkuc2V0QXR0cmlidXRlKFwic3JjXCIsIHVybCkpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBhZGRFdmVudExpc3RlbmVyKFxuICAgIGVsZW06IEVsZW1lbnQgfCBzdHJpbmcsXG4gICAgdHlwZTogc3RyaW5nLFxuICAgIGxpc3RlbmVyOiAoZTogRXZlbnQpID0+IGFueVxuICApIHtcbiAgICBlbGVtID0gdGhpcy5lbGVtKGVsZW0pO1xuICAgIGNvbnN0IHdyYXBwZXJGdW5jID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBsaXN0ZW5lcihlKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9XG4gICAgfTtcbiAgICAoZWxlbSBhcyBFbGVtZW50KS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIHdyYXBwZXJGdW5jKTtcbiAgICByZXR1cm4gd3JhcHBlckZ1bmM7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGVhY2goZWxlbTogRWxlbWVudCB8IHN0cmluZywgYXBwbHk6IChub2RlOiBFbGVtZW50KSA9PiBhbnkpIHtcbiAgICBlbGVtID0gdGhpcy5lbGVtKGVsZW0pO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gZWxlbS5jaGlsZHJlbjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcHBseShjaGlsZHJlbltpXSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBlYWNoUmVjdXIoXG4gICAgZWxlbTogRWxlbWVudCB8IHN0cmluZyxcbiAgICBhcHBseTogKG5vZGU6IEVsZW1lbnQpID0+IGFueVxuICApIHtcbiAgICBlbGVtID0gdGhpcy5lbGVtKGVsZW0pO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gZWxlbS5jaGlsZHJlbjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgYXBwbHkoY2hpbGQpO1xuICAgICAgRC5lYWNoUmVjdXIoY2hpbGQsIGFwcGx5KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZTxLIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwPihcbiAgICB0YWdOYW1lOiBLLFxuICAgIG9wdGlvbnM/OiBFbGVtZW50Q3JlYXRpb25PcHRpb25zXG4gICk6IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtLXSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSwgb3B0aW9ucyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tICcuLi91dGlscy9jb25zb2xlX3dyYXBwZXInO1xuaW1wb3J0IHsgRCB9IGZyb20gJy4vZG9jdW1lbnQnO1xubG9nKCdlbGVtZW50IGxvYWRlZC4nLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG4vKipcbiAqIFRoZXNlIGFyZSBlbGVtZW50cyB0aGF0IGFyZSBpbiBldmVyeSBzaW5nbGUgcHJvamVjdC4gRXZlbiBpZiB0aGV5IGFyZSBub3QgdXNlZCB0aGV5IHNob3VsZFxuICogYmUgcGxhY2UgaW4gdGhlIHByb2plY3QgYW5kIGRpc3BsYXkgc2hvdWxkIGJlIHNldCB0byBub25lLiBUaGlzIHNpbXBsaWZpZXMgY29uZmlndXJhdGlvblxuICogYW5kIHNvbWUgY29tbW9uIGZ1bmN0aW9ucyBhbmQgYWxsb3dzIGxlc3MgbnVsbCBjaGVja3MgdG8gYmUgcGVyZm9ybWVkIG92ZXJhbGwuIElmIHRoZVxuICogZWxlbWVudCBkb2VzIG5vdCBleGlzdCBhdCBydW4gdGltZSBhbiBlbXB0eSBkaXYgd2l0aCB0aGF0IGlkIGlzIGNyZWF0ZWQgYW5kIGl0cyBkaXNwbGF5XG4gKiBpcyBzZXQgdG8gbm9uZSB0aGVuIGFwcGVuZGVkIHRvIHRoZSBib2R5LlxuICovXG5cbi8qKlxuICogQXR0ZW1wdHMgdG8gZ2V0IGFuIGVsZW1lbnQsIGlmIHVuc3VjY2Vzc2Z1bCwgY3JlYXRlcyBkaXYgd2l0aCBpZCBhbmQgYXBwZW5kcyB0byBib2R5LlxuICpcbiAqIEBwYXJhbSBpZCAtIHRoZSBpZCBvZiB0aGUgZWxlbWVudCB0byByZXRyaWV2ZS5cbiAqL1xuZnVuY3Rpb24gbWFrZUVsZW1JZk5vdEV4aXN0KGlkOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gICAgbGV0IGVsZW07XG4gICAgdHJ5IHtcbiAgICAgICAgZWxlbSA9IEQuaWQoaWQpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBlbGVtID0gRC5jcmVhdGUoJ2RpdicpO1xuICAgICAgICBlbGVtLmlkID0gaWQ7XG4gICAgICAgIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZWxlbSk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtO1xufVxuXG4vKipcbiAqIENvbW1vbmx5IGFjY2Vzc2VkIGVsZW1lbnRzLCBhbGxvd3MgZm9yIGNsZWFyZXIgZG9tIG1hbmlwIG9uIHRoZXNlIGVsZW1lbnRzLlxuICovXG5leHBvcnQgY29uc3QgRWxlbWVudHMgPSB7XG4gICAgZG9jdW1lbnQ6IEQuZG9jLmRvY3VtZW50RWxlbWVudCxcbiAgICB3cmFwcGVyOiBtYWtlRWxlbUlmTm90RXhpc3QoJ3dyYXBwZXInKSxcbiAgICBodG1sTG9jOiBtYWtlRWxlbUlmTm90RXhpc3QoJ2h0bWwtbG9jJyksXG4gICAgaW5uZXJCb2R5OiBtYWtlRWxlbUlmTm90RXhpc3QoJ2lubmVyLWJvZHknKSxcbiAgICBkZERvd246IG1ha2VFbGVtSWZOb3RFeGlzdCgnbXR1cmstdG9wLWJhbm5lci1kcm9wLWRvd24tYnV0dG9uJyksXG4gICAgZGRVcDogbWFrZUVsZW1JZk5vdEV4aXN0KCdtdHVyay10b3AtYmFubmVyLWNvbGxhcHNlLWJ1dHRvbicpLFxuICAgIGRkQ29udGVudDogbWFrZUVsZW1JZk5vdEV4aXN0KCdtdHVyay10b3AtYmFubmVyLWRyb3AtZG93bi1jb250ZW50JyksXG4gICAgYmFja0J1dHRvbjogbWFrZUVsZW1JZk5vdEV4aXN0KCdtdHVyay10b3AtYmFubmVyLWJhY2snKSxcbiAgICBkZEFycm93OiBtYWtlRWxlbUlmTm90RXhpc3QoJ210dXJrLXRvcC1iYW5uZXItYXJyb3cnKSxcbiAgICBtdFRvcEJhbm5lclRleHQ6IG1ha2VFbGVtSWZOb3RFeGlzdCgnbXR1cmstdG9wLWJhbm5lci10ZXh0JyksXG4gICAgbXRTY2VuYXJpb0NvbnRleHQ6IG1ha2VFbGVtSWZOb3RFeGlzdCgnc2NlbmFyaW9fY29udGV4dCcpLFxuICAgIG10U2NlbmFyaW9RdWVzdGlvbjogbWFrZUVsZW1JZk5vdEV4aXN0KCdzY2VuYXJpb19xdWVzdGlvbicpLFxuICAgIGxvZ0ZpbGVJbnB1dDogbWFrZUVsZW1JZk5vdEV4aXN0KFxuICAgICAgICAnbXR1cmstdG9wLWJhbm5lci1kcm9wLWRvd24tY29udGVudC1sb2ctZmlsZS1pbnB1dCdcbiAgICApLFxuICAgIHN1Ym1pdEZvcm06IG1ha2VFbGVtSWZOb3RFeGlzdCgnbXR1cmstc3VibWl0LWZvcm0nKSxcbiAgICBtb2RhbDogbWFrZUVsZW1JZk5vdEV4aXN0KCdtb2RhbCcpLFxufTtcbiIsImltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tICcuLi91dGlscy9jb25zb2xlX3dyYXBwZXInO1xuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tICcuLy4uL2RvbS9lbGVtZW50cyc7XG5sb2coJ2h0bWwgbG9jIGxvYWRlZC4nLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgZW51bSBBcHBFbnVtIHtcbiAgICBJTkZPUk1BVElPTl9GT1JBR0lORyA9ICdpbmZvcm1hdGlvbi1mb3JhZ2luZycsXG4gICAgQ09HTklUSVZFX0xPQUQgPSAnY29nbml0aXZlLWxvYWQnLFxuICAgIEdFTkRFUl9NQUcgPSAnZ2VuZGVyLW1hZycsXG4gICAgRVJST1IgPSAnZXJyb3InLFxufVxuXG5leHBvcnQgZW51bSBNb2RlRW51bSB7XG4gICAgUkVBTCA9ICdyZWFsJyxcbiAgICBTQU5EQk9YID0gJ3NhbmRib3gnLFxuICAgIFRFU1QgPSAndGVzdCcsXG4gICAgRVJST1IgPSAnZXJyb3InLFxufVxuXG5leHBvcnQgY2xhc3MgSFRNTExvYyB7XG4gICAgcHVibGljIHN0YXRpYyBlbGVtID0gRWxlbWVudHMuaHRtbExvYztcbiAgICBwdWJsaWMgc3RhdGljIGFwcDogQXBwRW51bTtcbiAgICBwdWJsaWMgc3RhdGljIG1vZGU6IE1vZGVFbnVtO1xuICAgIHB1YmxpYyBzdGF0aWMgc2NlbmFyaW86IHN0cmluZztcblxuICAgIHB1YmxpYyBzdGF0aWMgc2V0dXAoKSB7XG4gICAgICAgIEhUTUxMb2MuYXBwID0gKEhUTUxMb2MuZWxlbS5kYXRhc2V0LmFwcCBhcyBBcHBFbnVtKSB8fCBBcHBFbnVtLkVSUk9SO1xuICAgICAgICBIVE1MTG9jLm1vZGUgPVxuICAgICAgICAgICAgKEhUTUxMb2MuZWxlbS5kYXRhc2V0Lm1vZGUgYXMgTW9kZUVudW0pIHx8IE1vZGVFbnVtLkVSUk9SO1xuICAgICAgICBIVE1MTG9jLnNjZW5hcmlvID0gSFRNTExvYy5lbGVtLmRhdGFzZXQuc2NlbmFyaW8gfHwgJ2Vycm9yJztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSAnLi8uLi91dGlscy9jb25zb2xlX3dyYXBwZXInO1xuaW1wb3J0IHsgRCB9IGZyb20gJy4vZG9jdW1lbnQnO1xuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tICcuL2VsZW1lbnRzJztcbmxvZygnbW9kYWwgbG9hZGVkLicsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbmV4cG9ydCBjbGFzcyBNb2RhbCB7XG4gICAgcHVibGljIHN0YXRpYyBlbGVtID0gRWxlbWVudHMubW9kYWw7XG5cbiAgICBwdWJsaWMgc3RhdGljIGRpc3BsYXkoc3JjOiBzdHJpbmcpIHtcbiAgICAgICAgTW9kYWwuZWxlbS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAnc3R5bGUnLFxuICAgICAgICAgICAgYGxlZnQ6ICR7TWF0aC5yb3VuZCh3aW5kb3cucGFnZVhPZmZzZXQpfXB4OyB0b3A6ICR7TWF0aC5yb3VuZChcbiAgICAgICAgICAgICAgICB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICl9cHg7YFxuICAgICAgICApO1xuICAgICAgICBNb2RhbC5lbGVtLmNsYXNzTGlzdC5yZXBsYWNlKCdoaWRlLW1vZGFsJywgJ3Nob3ctbW9kYWwnKTtcbiAgICAgICAgRC5lYWNoKE1vZGFsLmVsZW0sIChub2RlKSA9PiB7XG4gICAgICAgICAgICAobm9kZSBhcyBIVE1MSUZyYW1lRWxlbWVudCkuc3JjID0gc3JjO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdub3Njcm9sbCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgaGlkZSgpIHtcbiAgICAgICAgTW9kYWwuZWxlbS5jbGFzc0xpc3QucmVwbGFjZSgnc2hvdy1tb2RhbCcsICdoaWRlLW1vZGFsJyk7XG4gICAgICAgIEQuZWFjaChNb2RhbC5lbGVtLCAobm9kZSkgPT4ge1xuICAgICAgICAgICAgKG5vZGUgYXMgSFRNTElGcmFtZUVsZW1lbnQpLnNyYyA9ICcnO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdub3Njcm9sbCcpO1xuICAgIH1cbn1cblxuRC5hZGRFdmVudExpc3RlbmVyKE1vZGFsLmVsZW0sICdjbGljaycsIChlKSA9PiB7XG4gICAgTW9kYWwuaGlkZSgpO1xufSk7XG5ELmVhY2goTW9kYWwuZWxlbSwgKG5vZGUpID0+IHtcbiAgICBELmFkZEV2ZW50TGlzdGVuZXIobm9kZSwgJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xufSk7XG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgZXJyb3IsIGxvZyB9IGZyb20gJy4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlcic7XG5pbXBvcnQgeyBub29wLCBub3cgfSBmcm9tICcuLy4uL3V0aWxzL2Z1bmNzJztcbmxvZygnc2Nyb2xsIGxvYWRlZC4nLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG4vKipcbiAqIExpbmVhciBpbXBsZW1lbnRhdGlvbiBvZiBzY3JvbGxpbmcuXG4gKiBGb2xsb3dzIHRoZSBzaW5nbGV0b24gcGF0dGVybiwgY2FsbCBkbyB0byBzdGFydCBhIHNjcm9sbCBvcGVyYXRpb24uXG4gKlxuICogSWYgYSBzY3JvbGwgaXMgY2FsbGVkIHdoZW4gYW5vdGhlciBzY3JvbGwgaGFzIGFscmVhZHkgYmVndW4gYW5cbiAqIGVycm9yIHdpbGwgYmUgdGhyb3duLCBidXQgdGhlIGZpcnN0IHNjcm9sbCB3aWxsIGNvbnRpbnVlIHVudGlsIGNvbXBsZXRpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBTY3JvbGwge1xuICAgIHB1YmxpYyBzdGF0aWMgU1RFUF9JTl9NUyA9IDE3O1xuXG4gICAgcHVibGljIHN0YXRpYyBjYWxsYmFjayhcbiAgICAgICAgZW5kUG9zOiBudW1iZXIsXG4gICAgICAgIGR1cmF0aW9uOiBudW1iZXIgPSAyMDAsXG4gICAgICAgIGNvbXBsZXRlOiAoLi4uYXJnczogYW55KSA9PiBhbnkgPSBub29wXG4gICAgKTogdm9pZCB7XG4gICAgICAgIGlmIChTY3JvbGwucnVubmluZykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICdDYW5ub3QgbWFrZSBtdWx0aXBsZSBjYWxscyB0byBzY3JvbGwgYXQgdGhlIHNhbWUgdGltZS4nXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIFNjcm9sbC5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgY29uc3Qgb2xkQ29tcGxldGUgPSBjb21wbGV0ZTtcbiAgICAgICAgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBTY3JvbGwucnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgZXJyb3Iob2xkQ29tcGxldGUpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmluc3RhbmNlLnVwZGF0ZShlbmRQb3MsIGR1cmF0aW9uLCBjb21wbGV0ZSkuYXR0ZW1wdFNjcm9sbCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgcHJvbWlzZShlbmRQb3M6IG51bWJlciwgZHVyYXRpb246IG51bWJlciA9IDIwMCkge1xuICAgICAgICBpZiAoU2Nyb2xsLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAnQ2Fubm90IG1ha2UgbXVsdGlwbGUgY2FsbHMgdG8gc2Nyb2xsIGF0IHRoZSBzYW1lIHRpbWUuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBTY3JvbGwucnVubmluZyA9IHRydWU7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICByZXNvbHZlOiAodmFsdWU/OiB1bmtub3duKSA9PiB2b2lkLFxuICAgICAgICAgICAgICAgIHJlamVjdDogKGFyZzA6IGFueSkgPT4gdm9pZFxuICAgICAgICAgICAgKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcnVuUmVzb2x2ZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTY3JvbGwucnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAudXBkYXRlKGVuZFBvcywgZHVyYXRpb24sIHJ1blJlc29sdmVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dGVtcHRTY3JvbGwoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgU2Nyb2xsLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZSA9IG5ldyBTY3JvbGwoMCwgMCwgbm9vcCk7XG4gICAgcHJpdmF0ZSBjb21wbGV0ZTogKC4uLmFyZ3M6IGFueSkgPT4gYW55O1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBlbmRQb3M6IG51bWJlcixcbiAgICAgICAgcHJpdmF0ZSBkdXJhdGlvbjogbnVtYmVyLFxuICAgICAgICBjb21wbGV0ZTogKC4uLmFyZ3M6IGFueSkgPT4gYW55XG4gICAgKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGUgPSAoLi4uYXJnczogYW55KSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc2Nyb2xsJykpO1xuICAgICAgICAgICAgY29tcGxldGUoYXJncyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaXNSdW5uaW5nKCkge1xuICAgICAgICByZXR1cm4gU2Nyb2xsLnJ1bm5pbmc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGUoXG4gICAgICAgIGVuZFBvczogbnVtYmVyLFxuICAgICAgICBkdXJhdGlvbjogbnVtYmVyLFxuICAgICAgICBjb21wbGV0ZTogKC4uLmFyZ3M6IGFueSkgPT4gYW55XG4gICAgKTogU2Nyb2xsIHtcbiAgICAgICAgdGhpcy5lbmRQb3MgPSBlbmRQb3M7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwcml2YXRlIGNhbGNTY3JvbGxBbW91bnQoKSB7XG4gICAgICAgIGNvbnN0IGN1clRpbWUgPSBub3coKTtcbiAgICAgICAgY29uc3Qgc3RlcHMgPSBNYXRoLm1heChcbiAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAodGhpcy5kdXJhdGlvbiAtIGN1clRpbWUpIC8gU2Nyb2xsLlNURVBfSU5fTVNcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgY3VyUG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKCh0aGlzLmVuZFBvcyAtIGN1clBvcykgLyBzdGVwcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzY3JvbGwoKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGwoMCwgdGhpcy5jYWxjU2Nyb2xsQW1vdW50KCkpO1xuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID09PSB0aGlzLmVuZFBvcykge1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuc2Nyb2xsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYXR0ZW1wdFNjcm9sbCgpIHtcbiAgICAgICAgaWYgKCdyZXF1ZXN0QW5pbWF0aW9uRnJhbWUnIGluIHdpbmRvdyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGwoMCwgdGhpcy5lbmRQb3MpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2Nyb2xsKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4uL3V0aWxzL2Z1bmNzJztcbmltcG9ydCB7IGRhdGEgfSBmcm9tICcuLy4uL2RhdGEtbG9nL2RhdGEnO1xuaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gJy4vLi4vdXRpbHMvY29uc29sZV93cmFwcGVyJztcbmltcG9ydCB7IHBhcmFtcyB9IGZyb20gJy4vLi4vdXRpbHMvcV9wYXJhbXMnO1xuaW1wb3J0IHsgRCB9IGZyb20gJy4vZG9jdW1lbnQnO1xuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tICcuL2VsZW1lbnRzJztcbmxvZygnc3VibWl0IGZvcm0gbG9hZGVkLicsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbmV4cG9ydCBpbnRlcmZhY2UgQWxsb3dTdWJtaXNzaW9uIHtcbiAgICBhbGxvdygpOiBzdHJpbmcgfCBudWxsO1xuICAgIHByZVN1Ym1pdCguLi5hcmdzOiBhbnkpOiBhbnk7XG59XG5cbmNvbnN0IGsgPSAnTmNGMldSa1ViZjV0emo0Ykl2STk4MUZxbVM2cE1sTzgzZzJqN3U1Uic7XG5jb25zdCBnYXRlID0gJ2h0dHBzOi8vMnlrb3BxMW9oYS5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9QUk9EL2xvZ3MnO1xuXG5jb25zdCBBbGxvd1N1Ym1pc3Npb25EZWZhdWx0OiBBbGxvd1N1Ym1pc3Npb24gPSB7XG4gICAgYWxsb3c6ICgpID0+IG51bGwsXG4gICAgcHJlU3VibWl0OiBub29wLFxufTtcblxuZXhwb3J0IGNsYXNzIFN1Ym1pdEZvcm0ge1xuICAgIHB1YmxpYyBzdGF0aWMgZWxlbSA9IEVsZW1lbnRzLnN1Ym1pdEZvcm0gYXMgSFRNTEZvcm1FbGVtZW50O1xuICAgIHB1YmxpYyBzdGF0aWMgYWxsb3dTdWJtaXREZWZhdWx0ID0geyBhbGxvdzogKCkgPT4gdHJ1ZSwgcHJlU3VibWl0OiBub29wIH07XG5cbiAgICBwdWJsaWMgc3RhdGljIHNldHVwKFxuICAgICAgICBhbGxvd1N1Ym1pc3Npb246IEFsbG93U3VibWlzc2lvbiA9IEFsbG93U3VibWlzc2lvbkRlZmF1bHRcbiAgICApIHtcbiAgICAgICAgU3VibWl0Rm9ybS5zdWJtaXRGdW5jID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgYWxsb3dlZCA9IGFsbG93U3VibWlzc2lvbi5hbGxvdygpO1xuICAgICAgICAgICAgaWYgKGFsbG93ZWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBxcCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpLnNlYXJjaFBhcmFtcztcbiAgICAgICAgICAgICAgICBkYXRhLnVybERhdGEucmF3ID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgICAgICAgICAgZGF0YS51cmxEYXRhLmFzc2lnbm1lbnRJRCA9IHFwLmdldCgnYXNzaWdubWVudElkJyk7XG4gICAgICAgICAgICAgICAgZGF0YS51cmxEYXRhLmhpdElEID0gcXAuZ2V0KCdoaXRJZCcpO1xuICAgICAgICAgICAgICAgIGRhdGEudXJsRGF0YS53b3JrZXJJRCA9IHFwLmdldCgnd29ya2VySWQnKTtcbiAgICAgICAgICAgICAgICBkYXRhLnVybERhdGEuc3VibWl0VG8gPVxuICAgICAgICAgICAgICAgICAgICBxcC5nZXQoJ3R1cmtTdWJtaXRUbycpICsgJ210dXJrL2V4dGVybmFsU3VibWl0JztcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS51cmxEYXRhLmFzc2lnbm1lbnRJRCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAoRC5pZCgnYXNzaWdubWVudC1pZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudXJsRGF0YS5hc3NpZ25tZW50SUQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnVybERhdGEuaGl0SUQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgKEQuaWQoJ2hpdC1pZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudXJsRGF0YS5oaXRJRDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKEVsZW1lbnRzLnN1Ym1pdEZvcm0gYXMgSFRNTEZvcm1FbGVtZW50KS5hY3Rpb24gPSBkYXRhLnVybERhdGFcbiAgICAgICAgICAgICAgICAgICAgLnN1Ym1pdFRvIGFzIHN0cmluZztcbiAgICAgICAgICAgICAgICBhbGxvd1N1Ym1pc3Npb24ucHJlU3VibWl0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKGdhdGUsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAneC1hcGkta2V5JzogayxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2FuZGJveDogcGFyYW1zLnNhbmRib3gsXG4gICAgICAgICAgICAgICAgICAgICAgICB3dXN0bF9rZXk6IHBhcmFtcy53dXN0bF9rZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiBwYXJhbXMucHJvamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZXJhdGlvbjogcGFyYW1zLml0ZXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogcGFyYW1zLnRhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRJRDogZGF0YS51cmxEYXRhLmFzc2lnbm1lbnRJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpdElEOiBkYXRhLnVybERhdGEuaGl0SUQsXG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXJJRDogZGF0YS51cmxEYXRhLndvcmtlcklELFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nOiBkYXRhLnNlcmlhbGl6ZSgpLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB9KTsgLy8gVE9ETzogdmVyaWZ5IHRoaXMgYWN0dWFsbHkgd29ya3NcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXdhaXQgcmVzcC5qc29uKCkpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1lvdSBtYWRlIGEgYmFkIHJlcXVlc3Qgd2l0aCB5b3VyIHN1Ym1pc3Npb24uIFRoZSBzZXJ2ZXIgdGhpbmtzIHRoYXQgeW91IG1hZGUgdGhpcyBlcnJvcjogJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGF3YWl0IHJlc3AuanNvbigpKS5lcnJvclxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFN1Ym1pdEZvcm0uZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgICAgICAnc3VibWl0JyxcbiAgICAgICAgICAgICAgICAgICAgU3VibWl0Rm9ybS5zdWJtaXRGdW5jXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBTdWJtaXRGb3JtLmVsZW0uc3VibWl0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGFsbG93ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBTdWJtaXRGb3JtLmVsZW0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgU3VibWl0Rm9ybS5zdWJtaXRGdW5jKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBzdWJtaXRGdW5jOiAoZXZlbnQ6IEV2ZW50KSA9PiBhbnk7XG59XG4iLCJpbXBvcnQgeyBUb3BCYW5uZXIgfSBmcm9tIFwiLi9iYW5uZXJcIjtcbmltcG9ydCB7IEhUTUxMb2MgfSBmcm9tIFwiLi9odG1sX2xvY1wiO1xuXG5leHBvcnQgY2xhc3MgVHJhY2tlckVsZW1lbnRzIHtcbiAgcHVibGljIHN0YXRpYyBzZXR1cFRyYWNrZXJFbGVtZW50cygpIHtcbiAgICAvLyBzZXR1cCBkb20gZWxlbWVudHNcbiAgICBUb3BCYW5uZXIuc2V0dXAoKTtcbiAgICBIVE1MTG9jLnNldHVwKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFRyYWNrZXIgfSBmcm9tICcuLy4uL3RyYWNrZXIvdHJhY2tlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGlzdG9yeUVudHJ5IHtcbiAgICBoYXNQcmV2VVJMOiBib29sZWFuO1xuICAgIHByZXZFbnRyeT86IEhpc3RvcnlFbnRyeTtcbiAgICBjdXJyVVJMOiBzdHJpbmc7XG4gICAgZXh0cmE/OiBhbnk7XG4gICAgbmV4dEVudHJpZXM6IEhpc3RvcnlFbnRyeVtdO1xufVxuXG5mdW5jdGlvbiBuZXdIaXN0b3J5RW50cnkoXG4gICAgY3VyclVSTDogc3RyaW5nLFxuICAgIGhhc1ByZXZVUkw6IGJvb2xlYW4sXG4gICAgcHJldkVudHJ5PzogSGlzdG9yeUVudHJ5LFxuICAgIGV4dHJhPzogYW55XG4pOiBIaXN0b3J5RW50cnkge1xuICAgIFRyYWNrZXIuZ2V0RXZlbnREaXNwYXRjaEZ1bmMoJ2hpc3RvcnknKSh7IHVybDogY3VyclVSTCwgZXh0cmEgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3VyclVSTCxcbiAgICAgICAgaGFzUHJldlVSTCxcbiAgICAgICAgcHJldkVudHJ5LFxuICAgICAgICBleHRyYSxcbiAgICAgICAgbmV4dEVudHJpZXM6IFtdLFxuICAgIH07XG59XG5cbmV4cG9ydCBjbGFzcyBIaXN0b3J5IHtcbiAgICBwdWJsaWMgc3RhdGljIGZvcndhcmQodXJsOiBzdHJpbmcsIGV4dHJhPzogYW55KTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgaGlzdEVudCA9IG5ld0hpc3RvcnlFbnRyeSh1cmwsIHRydWUsIEhpc3RvcnkuY3Vycmhpc3RvcnksIGV4dHJhKTtcbiAgICAgICAgSGlzdG9yeS5jdXJyaGlzdG9yeS5uZXh0RW50cmllcy5wdXNoKGhpc3RFbnQpO1xuICAgICAgICBIaXN0b3J5LmN1cnJoaXN0b3J5ID0gaGlzdEVudDtcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNhbkJhY2t3YXJkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgSGlzdG9yeS5jdXJyaGlzdG9yeS5oYXNQcmV2VVJMICYmXG4gICAgICAgICAgICAhSGlzdG9yeS5jdXJyaGlzdG9yeS5wcmV2RW50cnk/LmV4dHJhPy53cmFwcGVyXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBiYWNrd2FyZCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIUhpc3RvcnkuY2FuQmFja3dhcmQoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZ28gYmFjayBhbnkgZnVydGhlci4nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhIaXN0b3J5LmN1cnJoaXN0b3J5LnByZXZFbnRyeSk7XG4gICAgICAgIGNvbnN0IHByZXZFbnRyeSA9IEhpc3RvcnkuY3Vycmhpc3RvcnkucHJldkVudHJ5IGFzIEhpc3RvcnlFbnRyeTtcbiAgICAgICAgY29uc3QgbmV4dFVSTCA9IHByZXZFbnRyeS5jdXJyVVJMO1xuICAgICAgICBjb25zdCBoaXN0RW50ID0gbmV3SGlzdG9yeUVudHJ5KFxuICAgICAgICAgICAgbmV4dFVSTCxcbiAgICAgICAgICAgIHByZXZFbnRyeS5oYXNQcmV2VVJMLFxuICAgICAgICAgICAgcHJldkVudHJ5LnByZXZFbnRyeSxcbiAgICAgICAgICAgIHsgYmFjazogdHJ1ZSB9XG4gICAgICAgICk7XG4gICAgICAgIEhpc3RvcnkuY3Vycmhpc3RvcnkgPSBoaXN0RW50O1xuICAgICAgICByZXR1cm4gbmV4dFVSTDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNldHVwKHVybDogc3RyaW5nLCBleHRyYT86IGFueSkge1xuICAgICAgICBIaXN0b3J5LmZpcnN0SGlzdG9yeSA9IG5ld0hpc3RvcnlFbnRyeSh1cmwsIGZhbHNlLCB1bmRlZmluZWQsIGV4dHJhKTtcbiAgICAgICAgSGlzdG9yeS5jdXJyaGlzdG9yeSA9IEhpc3RvcnkuZmlyc3RIaXN0b3J5O1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGZpcnN0SGlzdG9yeTogSGlzdG9yeUVudHJ5O1xuICAgIHByaXZhdGUgc3RhdGljIGN1cnJoaXN0b3J5OiBIaXN0b3J5RW50cnk7XG59XG5cbih3aW5kb3cgYXMgYW55KS5oID0gSGlzdG9yeTtcbiIsImltcG9ydCB7IEQgfSBmcm9tICcuLi9kb20vZG9jdW1lbnQnO1xuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tICcuLi9kb20vZWxlbWVudHMnO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi9kb20vbW9kYWwnO1xuaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGVycm9yLCBsb2cgfSBmcm9tICcuLi91dGlscy9jb25zb2xlX3dyYXBwZXInO1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4uL3V0aWxzL2Z1bmNzJztcbmltcG9ydCB7IEhUTUxMb2FkZXIgfSBmcm9tICcuLi91dGlscy9odG1sX2xvYWRlcic7XG5pbXBvcnQgeyBIaXN0b3J5IH0gZnJvbSAnLi9oaXN0b3J5JztcbmxvZygncm91dGVyIGxvYWRlZC4nLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgY29uc3QgZW51bSBSb3V0ZXJNb2RlIHtcbiAgICBPRkYsXG4gICAgT04sXG4gICAgU1RBTkRBUkRfQUxMT1dBTkNFUyxcbn1cblxuLy8gVE9ETzogTmVlZCB0byBpbXByb3ZlIHRoaXMgdG8gdGFrZSBpbiBhIGZ1bmN0aW9uIGZvciB0aGUgYWxsb3dhbmNlIG9yIHJlZHVjZSBhYnN0cmFjdG5lc3Mgb3ZlcmFsbC5cblxuZXhwb3J0IGNvbnN0IGVudW0gUm91dGVyTW9kdWxlIHtcbiAgICBBID0gJ0EnLFxuICAgIElNRyA9ICdJTUcnLFxuICAgIEZPUk0gPSAnRk9STScsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVyQ29uZmlnIHtcbiAgICBtb2R1bGU6IFJvdXRlck1vZHVsZTtcbiAgICBtb2RlOiBSb3V0ZXJNb2RlO1xufVxuXG5pbnRlcmZhY2UgRnVsbFJvdXRlckNvbmZpZyBleHRlbmRzIFJvdXRlckNvbmZpZyB7XG4gICAgc2V0dXAoY29uZmlnOiBGdWxsUm91dGVyQ29uZmlnLCBlbGVtOiBFbGVtZW50KTogYW55O1xufVxuXG5mdW5jdGlvbiB0ZXN0T24oZWxlbTogRWxlbWVudCwgY29uZmlnOiBSb3V0ZXJDb25maWcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICBlbGVtLnRhZ05hbWUgPT09IGNvbmZpZy5tb2R1bGUgJiZcbiAgICAgICAgKGNvbmZpZy5tb2RlID09PSBSb3V0ZXJNb2RlLk9OIHx8XG4gICAgICAgICAgICBjb25maWcubW9kZSA9PT0gUm91dGVyTW9kZS5TVEFOREFSRF9BTExPV0FOQ0VTKVxuICAgICk7XG59XG5mdW5jdGlvbiB0ZXN0QWxsb3dhbmNlKGNvbmZpZzogUm91dGVyQ29uZmlnKSB7XG4gICAgcmV0dXJuIGNvbmZpZy5tb2RlID09PSBSb3V0ZXJNb2RlLlNUQU5EQVJEX0FMTE9XQU5DRVM7XG59XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgSEFTSF9UQUdTID0gbmV3IFJlZ0V4cCgnIycpO1xuICAgIHB1YmxpYyBzdGF0aWMgRU1QVFkgPSBuZXcgUmVnRXhwKCdeJCcpO1xuICAgIHB1YmxpYyBzdGF0aWMgQVRfU1lNQk9MID0gbmV3IFJlZ0V4cCgnQCcpO1xuXG4gICAgcHVibGljIHN0YXRpYyBIQVNIX1RBR19SRVNQT05ERVIgPSBub29wO1xuICAgIHB1YmxpYyBzdGF0aWMgRU1QVFlfUkVTUE9OREVSID0gKGV2ZW50OiBFdmVudCkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBwdWJsaWMgc3RhdGljIEFUX1NZTUJPTF9SRVNQT05ERVIgPSAoZXZlbnQ6IEV2ZW50KSA9PlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgcHVibGljIHN0YXRpYyBwYXRoUHJlZml4ID0gJyc7XG5cbiAgICBwdWJsaWMgc3RhdGljIGNvbmZpZ3VyZShjb25maWdzOiBSb3V0ZXJDb25maWdbXSwgcGF0aFByZWZpeDogc3RyaW5nKSB7XG4gICAgICAgIGNvbmZpZ3MuZm9yRWFjaCgoY29uZmlnKSA9PiB7XG4gICAgICAgICAgICBSb3V0ZXIuY29uZmlncy5zZXQoY29uZmlnLm1vZHVsZSwgUm91dGVyLnVwZ3JhZGVDb25maWcoY29uZmlnKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBSb3V0ZXIucGF0aFByZWZpeCA9IHBhdGhQcmVmaXg7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBzZXR1cChlbGVtOiBFbGVtZW50IHwgc3RyaW5nKSB7XG4gICAgICAgIEQuZWFjaFJlY3VyKGVsZW0sIChub2RlKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNvbmZpZyBvZiBSb3V0ZXIuY29uZmlncy52YWx1ZXMoKSkge1xuICAgICAgICAgICAgICAgIGlmICh0ZXN0T24obm9kZSwgY29uZmlnKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25maWcuc2V0dXAoY29uZmlnLCBub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgU1RBTkRBUkRfTElOS19MSVNURU5FUihlOiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIHJldHVybiBlcnJvcigoKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IHRhcmdldC5ocmVmO1xuICAgICAgICAgICAgSGlzdG9yeS5mb3J3YXJkKFJvdXRlci5nZXRQYXRoTmFtZSh1cmwpKTtcbiAgICAgICAgICAgIGNvbnN0IHJldCA9IEhUTUxMb2FkZXIubG9hZFVSTCh1cmwsIEVsZW1lbnRzLmh0bWxMb2MpO1xuICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCduZXdQYWdlTG9hZCcpKTtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgT05fQ09NUExFVEVfU0xMKHBvc3Q6IChlOiBNb3VzZUV2ZW50KSA9PiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBlcnJvcihhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYXdhaXQgUm91dGVyLlNUQU5EQVJEX0xJTktfTElTVEVORVIoZSk7XG4gICAgICAgICAgICAgICAgcG9zdChlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgSU1BR0VfTElOS19MSVNURU5FUihlOiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIHJldHVybiBlcnJvcigoKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgRk9STV9PRkZfTElTVEVORVIoZTogRXZlbnQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgJ0FsbCBmb3JtcyBleGNlcHQgZm9yIHRoZSBvbmUgaW4gdGhlIHRvcCBoZWFkZXIgYXJlIGluYWN0aXZlLidcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGRlZmF1bHRBbGxvd2FuY2VzT24oKSB7XG4gICAgICAgIFJvdXRlci5yZWdpc3RlckFsbG93YW5jZShcbiAgICAgICAgICAgIHsgcmVnZXg6IFJvdXRlci5FTVBUWSwgZnVuYzogUm91dGVyLkVNUFRZX1JFU1BPTkRFUiB9LFxuICAgICAgICAgICAgeyByZWdleDogUm91dGVyLkhBU0hfVEFHUywgZnVuYzogUm91dGVyLkhBU0hfVEFHX1JFU1BPTkRFUiB9LFxuICAgICAgICAgICAgeyByZWdleDogUm91dGVyLkFUX1NZTUJPTCwgZnVuYzogUm91dGVyLkFUX1NZTUJPTF9SRVNQT05ERVIgfVxuICAgICAgICApO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGRlZmF1bHRBbGxvd2FuY2VzT2ZmKCkge1xuICAgICAgICBSb3V0ZXIudW5yZWdpc3RlckFsbG93YW5jZShcbiAgICAgICAgICAgIFJvdXRlci5FTVBUWSxcbiAgICAgICAgICAgIFJvdXRlci5IQVNIX1RBR1MsXG4gICAgICAgICAgICBSb3V0ZXIuQVRfU1lNQk9MXG4gICAgICAgICk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJBbGxvd2FuY2UoXG4gICAgICAgIC4uLnJlZ2V4czogQXJyYXk8eyByZWdleDogUmVnRXhwOyBmdW5jOiAoZXZlbnQ6IEV2ZW50KSA9PiBhbnkgfT5cbiAgICApIHtcbiAgICAgICAgcmVnZXhzLmZvckVhY2goKHJlZ2V4KSA9PlxuICAgICAgICAgICAgUm91dGVyLmxpbmtBbGxvd2FuY2VzLnNldChyZWdleC5yZWdleCwgcmVnZXguZnVuYylcbiAgICAgICAgKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyB1bnJlZ2lzdGVyQWxsb3dhbmNlKC4uLnJlZ2V4czogUmVnRXhwW10pIHtcbiAgICAgICAgcmVnZXhzLmZvckVhY2goKHJlZ2V4KSA9PiBSb3V0ZXIubGlua0FsbG93YW5jZXMuZGVsZXRlKHJlZ2V4KSk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgY2xlYXJBbGxvd2FuY2VzKCkge1xuICAgICAgICBSb3V0ZXIubGlua0FsbG93YW5jZXMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGxvYWQodXJsOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgSGlzdG9yeS5mb3J3YXJkKFJvdXRlci5nZXRQYXRoTmFtZSh1cmwpKTtcbiAgICAgICAgY29uc3QgcmV0ID0gYXdhaXQgSFRNTExvYWRlci5sb2FkVVJMKHVybCwgRWxlbWVudHMuaHRtbExvYyk7XG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbmV3UGFnZUxvYWQnKSk7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBsb2FkV2l0aFBhdGhQcmVmaXgocGFnZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIGNvbnN0IHJldCA9IEhUTUxMb2FkZXIubG9hZFVSTChcbiAgICAgICAgICAgIFJvdXRlci5wYXRoUHJlZml4ICsgcGFnZSxcbiAgICAgICAgICAgIEVsZW1lbnRzLmh0bWxMb2NcbiAgICAgICAgKTtcbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCduZXdQYWdlTG9hZCcpKTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBTZXR1cEZ1bmN0aW9ucyA9IHtcbiAgICAgICAgQTogKGNvbmZpZzogRnVsbFJvdXRlckNvbmZpZywgZWxlbTogRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYU5vZGUgPSBlbGVtIGFzIEhUTUxBbmNob3JFbGVtZW50O1xuICAgICAgICAgICAgaWYgKHRlc3RBbGxvd2FuY2UoY29uZmlnKSkge1xuICAgICAgICAgICAgICAgIGxldCBwYXNzZXNSZWdleFRlc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBhTm9kZS5ocmVmO1xuICAgICAgICAgICAgICAgIFJvdXRlci5saW5rQWxsb3dhbmNlcy5mb3JFYWNoKChmdW5jLCByZWdleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXN0ID0gcmVnZXgudGVzdChocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgcGFzc2VzUmVnZXhUZXN0ID0gcGFzc2VzUmVnZXhUZXN0ICYmICF0ZXN0O1xuICAgICAgICAgICAgICAgICAgICBpZiAodGVzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sICdjbGljaycsIGZ1bmMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHBhc3Nlc1JlZ2V4VGVzdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaHJlZi5zdWJzdHIoaHJlZi5sZW5ndGggLSAzKSA9PT0gJ3BkZicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCAnY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb2RhbC5kaXNwbGF5KGhyZWYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgJ2NsaWNrJywgKGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLlNUQU5EQVJEX0xJTktfTElTVEVORVIoZSBhcyBNb3VzZUV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sICdjbGljaycsIChlKSA9PlxuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIuU1RBTkRBUkRfTElOS19MSVNURU5FUihlIGFzIE1vdXNlRXZlbnQpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgSU1HOiAoY29uZmlnOiBGdWxsUm91dGVyQ29uZmlnLCBlbGVtOiBFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWdOb2RlID0gZWxlbSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuICAgICAgICAgICAgaWYgKHRlc3RBbGxvd2FuY2UoY29uZmlnKSkge1xuICAgICAgICAgICAgICAgIGxldCBwYXNzZXNSZWdleFRlc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIFJvdXRlci5saW5rQWxsb3dhbmNlcy5mb3JFYWNoKChmdW5jLCByZWdleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXN0ID0gIXJlZ2V4LnRlc3QoaW1nTm9kZS5zcmMpO1xuICAgICAgICAgICAgICAgICAgICBwYXNzZXNSZWdleFRlc3QgPSBwYXNzZXNSZWdleFRlc3QgJiYgdGVzdDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCAnY2xpY2snLCBmdW5jKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwYXNzZXNSZWdleFRlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sICdjbGljaycsIChlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLklNQUdFX0xJTktfTElTVEVORVIoZSBhcyBNb3VzZUV2ZW50KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sICdjbGljaycsIChlKSA9PlxuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIuSU1BR0VfTElOS19MSVNURU5FUihlIGFzIE1vdXNlRXZlbnQpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgRk9STTogKGNvbmZpZzogRnVsbFJvdXRlckNvbmZpZywgZWxlbTogRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybU5vZGUgPSBlbGVtIGFzIEhUTUxGb3JtRWxlbWVudDtcbiAgICAgICAgICAgIGlmICh0ZXN0QWxsb3dhbmNlKGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFzc2VzUmVnZXhUZXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBSb3V0ZXIubGlua0FsbG93YW5jZXMuZm9yRWFjaCgoZnVuYywgcmVnZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVzdCA9ICFyZWdleC50ZXN0KGZvcm1Ob2RlLnNyYyk7XG4gICAgICAgICAgICAgICAgICAgIHBhc3Nlc1JlZ2V4VGVzdCA9IHBhc3Nlc1JlZ2V4VGVzdCAmJiB0ZXN0O1xuICAgICAgICAgICAgICAgICAgICBpZiAodGVzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sICdjbGljaycsIGZ1bmMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHBhc3Nlc1JlZ2V4VGVzdCkge1xuICAgICAgICAgICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3N1Ym1pdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIuRk9STV9PRkZfTElTVEVORVJcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCAnc3VibWl0JywgUm91dGVyLkZPUk1fT0ZGX0xJU1RFTkVSKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgY29uZmlncyA9IG5ldyBNYXA8Um91dGVyTW9kdWxlLCBGdWxsUm91dGVyQ29uZmlnPigpO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgbGlua0FsbG93YW5jZXM6IE1hcDxSZWdFeHAsIChldmVudDogRXZlbnQpID0+IGFueT4gPSBuZXcgTWFwPFxuICAgICAgICBSZWdFeHAsXG4gICAgICAgIChldmVudDogRXZlbnQpID0+IGFueVxuICAgID4oKTtcblxuICAgIHByaXZhdGUgc3RhdGljIHBhdGhSZWdleCA9IC9cXC8oW1xcd10rLmh0bWwpLztcblxuICAgIHByaXZhdGUgc3RhdGljIHVwZ3JhZGVDb25maWcoY29uZmlnOiBSb3V0ZXJDb25maWcpOiBGdWxsUm91dGVyQ29uZmlnIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vZHVsZTogY29uZmlnLm1vZHVsZSxcbiAgICAgICAgICAgIG1vZGU6IGNvbmZpZy5tb2RlLFxuICAgICAgICAgICAgc2V0dXA6IFJvdXRlci5TZXR1cEZ1bmN0aW9uc1tjb25maWcubW9kdWxlXSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0UGF0aE5hbWUodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCByZXQgPSBSb3V0ZXIucGF0aFJlZ2V4LmV4ZWModXJsKTtcbiAgICAgICAgcmV0dXJuIHJldCA9PT0gbnVsbCA/IHVybCA6IHJldC5sZW5ndGggPiAxID8gcmV0WzFdIDogdXJsO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGlzVHJhY2tlckV2ZW50LCBvYmplY3RUb1RyYWNrZXJFdmVudCB9IGZyb20gJy4uL2RhdGEtbG9nL2V2ZW50JztcbmltcG9ydCB7IEV2ZW50UmVjZWl2ZXIgfSBmcm9tICcuLi9kYXRhLWxvZy9yZWNlaXZlcic7XG5pbXBvcnQgeyBFbGVtZW50cyB9IGZyb20gJy4uL2RvbS9lbGVtZW50cyc7XG5pbXBvcnQgeyBUcmFja2VyRWxlbWVudHMgfSBmcm9tICcuLi9kb20vdHJhY2tlcl9lbGVtcyc7XG5pbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nLCBzZXREZWJ1Z0xldmVsIH0gZnJvbSAnLi4vdXRpbHMvY29uc29sZV93cmFwcGVyJztcbmltcG9ydCB7IFNjZW5hcmlvIH0gZnJvbSAnLi4vdXRpbHMvc2NlbmFyaW9zJztcbmltcG9ydCB7IGRhdGEgfSBmcm9tICcuLy4uL2RhdGEtbG9nL2RhdGEnO1xuaW1wb3J0IHsgQWxsb3dTdWJtaXNzaW9uLCBTdWJtaXRGb3JtIH0gZnJvbSAnLi8uLi9kb20vc3VibWl0X2Zvcm0nO1xuXG5sb2coJ3RyYWNrZXIgbG9hZGVkLicsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcblxuZXhwb3J0IGludGVyZmFjZSBUcmFja2VyQ29uZmlndXJhdGlvbiB7XG4gICAgYWxsb3dTdWJtaXNzaW9uOiBBbGxvd1N1Ym1pc3Npb247XG4gICAgZGVidWdMZXZlbDogRGVidWdMZXZlbEVudW07XG4gICAgYnVja2V0TmFtZTogc3RyaW5nO1xuICAgIGtleVByZWZpeDogc3RyaW5nO1xuICAgIHNldHVwKCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBUcmFja2VyIHtcbiAgICBwdWJsaWMgc3RhdGljIGxhc3RQb3MgPSB7IHg6IDAsIHk6IDAsIHRpbWU6IDAgfTtcblxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZFNjZW5hcmlvKHNjZW46IFNjZW5hcmlvKSB7XG4gICAgICAgIGxldCBzdWIgPSBzY2VuLmNvbnRleHQ7XG4gICAgICAgIGlmIChzdWIubGVuZ3RoID4gNTApIHtcbiAgICAgICAgICAgIHN1YiA9IHN1Yi5zdWJzdHJpbmcoMCwgNTApO1xuICAgICAgICAgICAgY29uc3QgaW5kcyA9IFtcbiAgICAgICAgICAgICAgICBzdWIubGFzdEluZGV4T2YoJyAnKSxcbiAgICAgICAgICAgICAgICBzdWIubGFzdEluZGV4T2YoJy4nKSxcbiAgICAgICAgICAgICAgICBzdWIubGFzdEluZGV4T2YoJywnKSxcbiAgICAgICAgICAgICAgICBzdWIubGFzdEluZGV4T2YoJz8nKSxcbiAgICAgICAgICAgICAgICBzdWIubGFzdEluZGV4T2YoJyEnKSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBjb25zdCBpbmQgPSBNYXRoLm1heCguLi5pbmRzKTtcbiAgICAgICAgICAgIHN1YiA9IHN1Yi5zdWJzdHJpbmcoMCwgaW5kKSArICcuLi4nO1xuICAgICAgICB9XG5cbiAgICAgICAgRWxlbWVudHMubXRUb3BCYW5uZXJUZXh0LmlubmVyVGV4dCA9IHN1YjtcbiAgICAgICAgRWxlbWVudHMubXRTY2VuYXJpb0NvbnRleHQuaW5uZXJUZXh0ID0gc2Nlbi5jb250ZXh0O1xuICAgICAgICBFbGVtZW50cy5tdFNjZW5hcmlvUXVlc3Rpb24uaW5uZXJUZXh0ID0gc2Nlbi5xdWVzdGlvbjtcbiAgICAgICAgRWxlbWVudHMuaHRtbExvYy5kYXRhc2V0LnRhc2sgPSBzY2VuLnRhZztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHN0YXJ0KGNvbmZpZzogVHJhY2tlckNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgc2V0RGVidWdMZXZlbChjb25maWcuZGVidWdMZXZlbCk7XG4gICAgICAgIC8vIGNvbmZpZ3VyZSB0cmFja2VyIHNwZWNpZmljIGVsZW1lbnRzXG4gICAgICAgIFRyYWNrZXJFbGVtZW50cy5zZXR1cFRyYWNrZXJFbGVtZW50cygpO1xuICAgICAgICBTdWJtaXRGb3JtLnNldHVwKGNvbmZpZy5hbGxvd1N1Ym1pc3Npb24pO1xuICAgICAgICBkYXRhLmRhdGEudGFzayA9IEVsZW1lbnRzLmh0bWxMb2MuZGF0YXNldC50YXNrO1xuICAgICAgICBjb25maWcuc2V0dXAoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyRXZlbnQoZXZlbnRUeXBlOiBzdHJpbmcpIHtcbiAgICAgICAgZGF0YS5sb2dzW2V2ZW50VHlwZV0gPSBbXTtcbiAgICAgICAgdGhpcy5yZWNlaXZlci5yZWdpc3RlcihldmVudFR5cGUsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGF0YS5sb2dzW2V2ZW50VHlwZV0ucHVzaChldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFdmVudERpc3BhdGNoRnVuYyhldmVudFR5cGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0RXZlbnREaXNwYXRjaEZ1bmMoZXZlbnRUeXBlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIChldkRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBldkRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1RyYWNrZXJFdmVudChldkRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFRvVHJhY2tlckV2ZW50KGV2RGF0YSwgZXZlbnRUeXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5yZWNlaXZlci5kb0V2ZW50KGV2RGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhdHRhY2hEYXRhKGtleTogc3RyaW5nLCBhdHRyaWJ1dGU6IGFueSkge1xuICAgICAgICBkYXRhLmRhdGFba2V5XSA9IGF0dHJpYnV0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNvbXB1dGVBdHRyaWJ1dGUobmFtZTogc3RyaW5nLCBjb21wdXRlOiAodmFsOiBhbnkpID0+IGFueSkge1xuICAgICAgICBkYXRhLmRhdGFbbmFtZV0gPSBjb21wdXRlKGRhdGEuZGF0YVtuYW1lXSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVjZWl2ZXIgPSBuZXcgRXZlbnRSZWNlaXZlcigpO1xufVxuIiwiaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLy4uL2RhdGEtbG9nL2RhdGFcIjtcbmxvZyhcImNvbnNvbGUgd3JhcHBlciBsb2FkZWQuXCIsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlcnJvcjxUPihcbiAgZnVuYzogKC4uLmFyZ3M6IGFueSkgPT4gVFxuKTogUHJvbWlzZTxUIHwgdW5kZWZpbmVkPiB7XG4gIHJldHVybiBlcnJvckhPKGZ1bmMpKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcnJvckhPPFQ+KFxuICBmdW5jOiAoLi4uYXJnczogYW55KSA9PiBUXG4pOiAoLi4uYXJnczogYW55KSA9PiBQcm9taXNlPFQgfCB1bmRlZmluZWQ+IHtcbiAgcmV0dXJuIGFzeW5jICguLi5hcmdzOiBhbnkpID0+IHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmMoYXJncyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRhdGEuZXJyb3JzLnB1c2goZXJyb3IpO1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgZW51bSBEZWJ1Z0xldmVsRW51bSB7XG4gIE5PTkUgPSAxLFxuICBCQVNJQyA9IDIsXG4gIERFVEFJTEVEID0gMyxcbn1cblxubGV0IGRlYnVnTGV2ZWw6IERlYnVnTGV2ZWxFbnVtID0gRGVidWdMZXZlbEVudW0uQkFTSUM7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWJ1Z0xldmVsKGxldmVsOiBEZWJ1Z0xldmVsRW51bSkge1xuICBkZWJ1Z0xldmVsID0gbGV2ZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2cobWVzc2FnZTogc3RyaW5nLCBpbXBvcnRhbmNlOiBEZWJ1Z0xldmVsRW51bSkge1xuICBpZiAoZGVidWdMZXZlbCA+PSBpbXBvcnRhbmNlKSB7XG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tIFwiLi9jb25zb2xlX3dyYXBwZXJcIjtcbmxvZyhcImZ1bmNzIGxvYWRlZC5cIiwgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1lbXB0eVxuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7fVxuZXhwb3J0IGZ1bmN0aW9uIG5vdygpOiBudW1iZXIge1xuICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59XG4iLCJpbXBvcnQgeyBEIH0gZnJvbSAnLi4vZG9tL2RvY3VtZW50JztcbmltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tICcuL2NvbnNvbGVfd3JhcHBlcic7XG5pbXBvcnQgeyBub29wIH0gZnJvbSAnLi9mdW5jcyc7XG5sb2coJ2h0bWwgbG9hZGVyIGxvYWRlZC4nLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgaW50ZXJmYWNlIENhY2hlIHtcbiAgICBbbmFtZTogc3RyaW5nXTogRWxlbWVudDtcbn1cbmV4cG9ydCBjbGFzcyBIVE1MTG9hZGVyIHtcbiAgICBwdWJsaWMgc3RhdGljIENBQ0hFOiBDYWNoZSA9IHt9O1xuXG4gICAgcHVibGljIHN0YXRpYyBmaW5pc2goKSB7XG4gICAgICAgIEhUTUxMb2FkZXIuZmluaXNoZWQgPSB0cnVlO1xuICAgICAgICBIVE1MTG9hZGVyLmZsYXR0ZW5UU0xvYWRUYWdzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBpc0ZpbmlzaGVkKCkge1xuICAgICAgICByZXR1cm4gSFRNTExvYWRlci5maW5pc2hlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNhY2hlSFRNTChuYW1lOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZykge1xuICAgICAgICBpZiAoSFRNTExvYWRlci5maW5pc2hlZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICdDYW5ub3QgY2FjaGUgbmV3IEhUTUwgZW50aXRpZXMgYWZ0ZXIgdGhlIGFwcGxpY2F0aW9uIGhhcyBiZWVuIHN0YXJ0ZWQuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0c2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cy1sb2FkJyk7XG4gICAgICAgIHRzbC5kYXRhc2V0Lm5hbWUgPSBuYW1lO1xuICAgICAgICB0c2wuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICAgICAgdGhpcy5DQUNIRVtuYW1lXSA9IHRzbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyUG9zdExvYWRGdW5jKGZ1bmM6ICgpID0+IGFueSkge1xuICAgICAgICBsb2coJ3JlZ3NpdGVyIHBvc3QgbG9hZCBmdW5jdGlvbicsIERlYnVnTGV2ZWxFbnVtLkRFVEFJTEVEKTtcbiAgICAgICAgSFRNTExvYWRlci5wb3N0TG9hZEZ1bmMgPSBmdW5jO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZChodG1sOiBzdHJpbmcsIGVsZW06IEVsZW1lbnQgfCBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbG9nKCdiZWdpbiBsb2FkJywgRGVidWdMZXZlbEVudW0uREVUQUlMRUQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBELmVsZW0oZWxlbSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgICAgICAgICAgICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBmcmFnID0gcmFuZ2UuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KGh0bWwpO1xuICAgICAgICAgICAgICAgIEhUTUxMb2FkZXIucmVtb3ZlVGFnc0Zyb21Eb2N1bWVudEZyYWdtZW50KGZyYWcsICdzY3JpcHQnKTtcbiAgICAgICAgICAgICAgICBIVE1MTG9hZGVyLmxvYWRBbGxDYWNoZWRFbGVtZW50cyhmcmFnKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuYXBwZW5kQ2hpbGQoZnJhZyk7XG4gICAgICAgICAgICAgICAgbG9nKCdlbmQgbG9hZCcsIERlYnVnTGV2ZWxFbnVtLkRFVEFJTEVEKTtcbiAgICAgICAgICAgICAgICBIVE1MTG9hZGVyLnBvc3RMb2FkRnVuYygpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBsb2FkVVJMKHVybDogc3RyaW5nLCBlbGVtOiBFbGVtZW50IHwgc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBIVE1MTG9hZGVyLmxvYWQoYXdhaXQgSFRNTExvYWRlci5nZXRIVE1MKHVybCksIGVsZW0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SFRNTCh1cmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbG9nKCdiZWdpbiByZXF1ZXN0JywgRGVidWdMZXZlbEVudW0uREVUQUlMRUQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmVxdWVzdC5zZW5kKG51bGwpO1xuICAgICAgICAgICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2coJ3Jlc29sdmUgcmVxdWVzdCcsIERlYnVnTGV2ZWxFbnVtLkRFVEFJTEVEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBmaW5pc2hlZCA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcG9zdExvYWRGdW5jOiAoKSA9PiBhbnkgPSBub29wO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVtb3ZlVGFnc0Zyb21Eb2N1bWVudEZyYWdtZW50KFxuICAgICAgICBmcmFnOiBEb2N1bWVudEZyYWdtZW50LFxuICAgICAgICB0YWdOYW1lOiBzdHJpbmdcbiAgICApIHtcbiAgICAgICAgZnJhZy5xdWVyeVNlbGVjdG9yQWxsKHRhZ05hbWUpLmZvckVhY2goKHRhZykgPT4gZnJhZy5yZW1vdmVDaGlsZCh0YWcpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBmbGF0dGVuVFNMb2FkVGFncygpIHtcbiAgICAgICAgbG9nKCdGbGF0dGVuaW5nJywgRGVidWdMZXZlbEVudW0uREVUQUlMRUQpO1xuICAgICAgICBjb25zdCBzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgICAgIE9iamVjdC5rZXlzKEhUTUxMb2FkZXIuQ0FDSEUpLmZvckVhY2goXG4gICAgICAgICAgICAobmFtZSkgPT5cbiAgICAgICAgICAgICAgICAoSFRNTExvYWRlci5DQUNIRVtuYW1lXSA9IEhUTUxMb2FkZXIuZmxhdHRlblRTTG9hZFRhZyhcbiAgICAgICAgICAgICAgICAgICAgSFRNTExvYWRlci5nZXRDYWNoZWRDb250ZW50KG5hbWUpIGFzIEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIHMsXG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICApIGFzIEVsZW1lbnQpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgbXVsdGlwbGVUYWJzKG46IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGxldCByZXQgPSAnJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHJldCArPSAnXFx0JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGZsYXR0ZW5UU0xvYWRUYWcoXG4gICAgICAgIGVsZW06IEVsZW1lbnQsXG4gICAgICAgIGZsYXR0ZW5lZDogU2V0PHN0cmluZz4sXG4gICAgICAgIGNvdW50OiBudW1iZXJcbiAgICApOiBFbGVtZW50IHwgbnVsbCB7XG4gICAgICAgIGNvbnN0IHRhYnMgPSBIVE1MTG9hZGVyLm11bHRpcGxlVGFicyhjb3VudCk7XG4gICAgICAgIGlmIChjb3VudCA+IDEwMCkge1xuICAgICAgICAgICAgYWxlcnQoJ0NoZWNrIHRoZSBjb25zb2xlLCBhbiBlcnJvciBoYXMgb2NjdXJyZWQuJyk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgJ0l0IHNlZW1zIGxpa2UgeW91IG1pZ2h0IGhhdmUgaW5maW5pdGVseSByZWN1cnNpdmVseSBuZXN0ZWQgdGFncy4nICtcbiAgICAgICAgICAgICAgICAgICAgJ1xcbkhlcmUgYXJlIGFsbCBvZiB0aGUgdGFncyB0aGF0IGhhdmUgYmVlbiBmbGF0dGVuZWQgc28gZmFyOiAnICtcbiAgICAgICAgICAgICAgICAgICAgZmxhdHRlbmVkICtcbiAgICAgICAgICAgICAgICAgICAgJ1xcbkhlcmUgaXMgdGhlIG5hbWUgb2YgdGhlIGN1cnJlbnQgZWxlbWVudDogJyArXG4gICAgICAgICAgICAgICAgICAgIGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuYW1lID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpO1xuICAgICAgICBpZiAobmFtZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGVudCA9IEhUTUxMb2FkZXIuZ2V0Q2FjaGVkQ29udGVudChuYW1lKTtcbiAgICAgICAgaWYgKGNvbnRlbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmbGF0dGVuZWQuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdCcpLmZvckVhY2goKGUpID0+IGUucmVtb3ZlKCkpO1xuICAgICAgICBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RzLWxvYWQnKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IEhUTUxMb2FkZXIuZmxhdHRlblRTTG9hZFRhZyhlLCBmbGF0dGVuZWQsIGNvdW50ICsgMSk7XG4gICAgICAgICAgICBpZiAoY2hpbGQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBlLnJlcGxhY2VXaXRoKGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGZsYXR0ZW5lZC5hZGQobmFtZSk7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGdldENhY2hlZENvbnRlbnQoXG4gICAgICAgIG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWRcbiAgICApOiBFbGVtZW50IHwgbnVsbCB7XG4gICAgICAgIGlmIChuYW1lID09PSB1bmRlZmluZWQgfHwgbmFtZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGVudCA9IEhUTUxMb2FkZXIuQ0FDSEVbbmFtZV07XG4gICAgICAgIGlmIChjb250ZW50ID09PSB1bmRlZmluZWQgfHwgY29udGVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRlbnQuY2xvbmVOb2RlKHRydWUpIGFzIEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgbG9hZEFsbENhY2hlZEVsZW1lbnRzKGZyYWc6IERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgICAgZnJhZy5xdWVyeVNlbGVjdG9yQWxsKCd0cy1sb2FkJykuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBIVE1MTG9hZGVyLmdldENhY2hlZENvbnRlbnQobmFtZSk7XG4gICAgICAgICAgICBpZiAoY29udGVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZWxlbS5yZXBsYWNlV2l0aChjb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tIFwiLi4vZG9tL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBEIH0gZnJvbSBcIi4vLi4vZG9tL2RvY3VtZW50XCI7XG5pbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSBcIi4vY29uc29sZV93cmFwcGVyXCI7XG5sb2coXCJpZCBnZW5lcmF0b3IgbG9hZGVkXCIsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbmV4cG9ydCBjbGFzcyBJREdlbmVyYXRvciB7XG4gIHB1YmxpYyBzdGF0aWMgcmVzZXQoKSB7XG4gICAgSURHZW5lcmF0b3IuaWRDb3VudCA9IDA7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldCBuZXh0KCkge1xuICAgIElER2VuZXJhdG9yLmlkQ291bnQgKz0gMTtcbiAgICByZXR1cm4gSURHZW5lcmF0b3IucHJlZml4ICsgSURHZW5lcmF0b3IuaWRDb3VudDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYXBwbHlJRChlbGVtOiBFbGVtZW50KSB7XG4gICAgZWxlbS5pZCA9IGVsZW0uaWQgPyBlbGVtLmlkIDogSURHZW5lcmF0b3IubmV4dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWN1cnNpdmVseSBhZGRzIGlkcyB0byBhbGwgZWxlbWVudHMgdGhhdCBhcmUgYmVsb3cgdGhlIGdpdmVuXG4gICAqIGVsZW1lbnQgaW4gdGhlIGhlaXJhcmNoeS5cbiAgICpcbiAgICogQHBhcmFtIGVsZW0gLSB0aGUgZWxlbWVudCB0byBzdGFydCBhcHBseWluZyBpZHMgdG8gaXRzIGNoaWxkcmVuLlxuICAgKiAgICAgICAgICAgICAgICAgIFdpbGwgbm90IGFwcGx5IGFuIGlkIHRvIHRoaXMgZWxlbWVudC5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgYXBwbHlSZWN1cihlbGVtOiBFbGVtZW50IHwgc3RyaW5nKSB7XG4gICAgRC5lYWNoUmVjdXIoZWxlbSwgdGhpcy5hcHBseUlEKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRhY2hlcyBpZHMgdG8gYWxsIGh0bWwgZWxlbWVudHMgaW4gdGhlIHRhcmdldCBsb2NhdGlvbiBpbiB0aGUgRE9NIHRoYXQgZG8gbm90IGhhdmUgaWRzLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBhdHRhY2hJZHNUb0FsbEVsZW1lbnRzKCkge1xuICAgIElER2VuZXJhdG9yLmFwcGx5UmVjdXIoRWxlbWVudHMuaHRtbExvYyk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBpZENvdW50ID0gMDtcbiAgcHJpdmF0ZSBzdGF0aWMgcHJlZml4ID0gXCJhdXRvX2dlbl9pZF91bnFfXCI7XG59XG4iLCJjb25zdCBxUGFyYW1zID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZikuc2VhcmNoUGFyYW1zO1xyXG5leHBvcnQgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgd3VzdGxfa2V5OiAnJyxcclxuICAgIHNhbmRib3g6IGZhbHNlLFxyXG4gICAgcHJvamVjdDogJycsXHJcbiAgICBpdGVyYXRpb246IDAsXHJcbiAgICB0YWc6ICcnLFxyXG59O1xyXG50cnkge1xyXG4gICAgcVBhcmFtcy5mb3JFYWNoKGNvbnNvbGUubG9nKTtcclxuICAgIGlmIChcclxuICAgICAgICBbJ3d1c3RsX2tleScsICdzYW5kYm94JywgJ3Byb2plY3QnLCAnaXRlcmF0aW9uJywgJ3RhZyddLmV2ZXJ5KChrZXkpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2tleTogJyArIHFQYXJhbXMuaGFzKGtleSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gcVBhcmFtcy5oYXMoa2V5KTtcclxuICAgICAgICB9KVxyXG4gICAgKSB7XHJcbiAgICAgICAgcGFyYW1zLnd1c3RsX2tleSA9IHFQYXJhbXMuZ2V0KCd3dXN0bF9rZXknKSBhcyBzdHJpbmc7XHJcbiAgICAgICAgcGFyYW1zLnNhbmRib3ggPSBxUGFyYW1zLmdldCgnc2FuZGJveCcpID09PSAndHJ1ZSc7XHJcbiAgICAgICAgcGFyYW1zLnByb2plY3QgPSBxUGFyYW1zLmdldCgncHJvamVjdCcpIGFzIHN0cmluZztcclxuICAgICAgICBwYXJhbXMuaXRlcmF0aW9uID0gcGFyc2VJbnQocVBhcmFtcy5nZXQoJ2l0ZXJhdGlvbicpIGFzIHN0cmluZywgMTApO1xyXG4gICAgICAgIHBhcmFtcy50YWcgPSBxUGFyYW1zLmdldCgndGFnJykgYXMgc3RyaW5nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbWlzc2luZyBxdWVyeSBwYXJhbXMnKTtcclxuICAgICAgICBhbGVydChcclxuICAgICAgICAgICAgJ1RoaXMgSElUIGlzIG1pc3NpbmcgbmVjY2Vzc2FyeSBtZXRhZGF0YSwgc29ycnkgZm9yIHRoZSBpbmNvbnZlbmllbmNlLiBQbGVhc2UgY29udGFjdCB0aGUgUmVxdWVzdGVyIGFzIHRoaXMgaXMgbm90IGludGVuZGVkIHRvIGhhcHBlbi4nXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coZSk7XHJcbiAgICBhbGVydChlKTtcclxuICAgIGFsZXJ0KFxyXG4gICAgICAgICdUaGlzIEhJVCBpcyBicm9rZW4sIHNvcnJ5IGZvciB0aGUgaW5jb252ZW5pZW5jZS4gUGxlYXNlIGNvbnRhY3QgdGhlIFJlcXVlc3RlciBhcyB0aGlzIGlzIG5vdCBpbnRlbmRlZCB0byBoYXBwZW4uJ1xyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSBcIi4vY29uc29sZV93cmFwcGVyXCI7XG5cbmxvZyhcInJlYWR5IGxvYWRlZFwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5cbmxldCByZWFkeSA9IGZhbHNlO1xuXG5sZXQgcmVzb2x2ZUZ1bmM6ICh2YWw6IGJvb2xlYW4pID0+IGFueTtcbmxldCByZWplY3RGdW5jO1xuY29uc3QgcmVhZHlQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmU6ICh2YWw6IGJvb2xlYW4pID0+IGFueSwgcmVqZWN0KSA9PiB7XG4gIHJlc29sdmVGdW5jID0gcmVzb2x2ZTtcbiAgcmVqZWN0RnVuYyA9IHJlamVjdDtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGxvZyhcImRvY3VtZW50IGlzIHJlYWR5XCIsIERlYnVnTGV2ZWxFbnVtLkRFVEFJTEVEKTtcbiAgcmVhZHkgPSB0cnVlO1xuICByZXNvbHZlRnVuYyh0cnVlKTtcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNSZWFkeSgpIHtcbiAgcmV0dXJuIHJlYWR5O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdhaXRVbnRpbFJlYWR5KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICByZXR1cm4gcmVhZHkgPyBQcm9taXNlLnJlc29sdmUodHJ1ZSkgOiByZWFkeVByb21pc2U7XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIFNjZW5hcmlvIHtcclxuICAgIGNvbnRleHQ6IHN0cmluZztcclxuICAgIHF1ZXN0aW9uOiBzdHJpbmc7XHJcbiAgICB0YWc6IHN0cmluZztcclxufVxyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby12YXItcmVxdWlyZXNcclxuZXhwb3J0IGNvbnN0IHNjZW5hcmlvczogU2NlbmFyaW9bXSA9IHJlcXVpcmUoJy4vLi4vLi4vLi4vLi4vc2NlbmFyaW9zL3NjZW5hcmlvcy5qc29uJyk7XHJcbih3aW5kb3cgYXMgYW55KS5zY2VuYXJpb3MgPSBzY2VuYXJpb3M7XHJcbiIsImltcG9ydCB7IEQgfSBmcm9tIFwiLi8uLi9jb3JlL2RvbS9kb2N1bWVudFwiO1xuXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uIHtcbiAgcHVibGljIHN0YXRpYyBzZXR1cEFsbCgpIHtcbiAgICBBY2NvcmRpb24uZGlzY2FyZEFsbCgpO1xuICAgIGNvbnN0IGFjY29yZGlvbnMgPSBELmNsYXooXCJhY2NvcmRpb25cIik7XG4gICAgZm9yIChsZXQgYWNjSW5kZXggPSAwOyBhY2NJbmRleCA8IGFjY29yZGlvbnMubGVuZ3RoOyArK2FjY0luZGV4KSB7XG4gICAgICBjb25zdCBlbGVtID0gYWNjb3JkaW9ucy5pdGVtKGFjY0luZGV4KTtcbiAgICAgIGlmIChlbGVtID09IG51bGwpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBBY2NvcmRpb24uYWNjb3JkaW9ucy5wdXNoKG5ldyBBY2NvcmRpb24oZWxlbSkpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZGlzY2FyZEFsbCgpIHtcbiAgICBBY2NvcmRpb24uYWNjb3JkaW9ucyA9IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgYWNjb3JkaW9uczogQWNjb3JkaW9uW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG91dGVyOiBFbGVtZW50KSB7XG4gICAgRC5hZGRFdmVudExpc3RlbmVyKG91dGVyLCBcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8qIFRvZ2dsZSBiZXR3ZWVuIGFkZGluZyBhbmQgcmVtb3ZpbmcgdGhlIFwiYWN0aXZlXCIgY2xhc3MsXG4gICAgICAgICAgICAgICAgdG8gaGlnaGxpZ2h0IHRoZSBidXR0b24gdGhhdCBjb250cm9scyB0aGUgcGFuZWwgKi9cbiAgICAgIHRoaXMub3V0ZXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcblxuICAgICAgLyogVG9nZ2xlIGJldHdlZW4gaGlkaW5nIGFuZCBzaG93aW5nIHRoZSBhY3RpdmUgcGFuZWwgKi9cbiAgICAgIGNvbnN0IHBhbmVsID0gdGhpcy5vdXRlci5uZXh0RWxlbWVudFNpYmxpbmcgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAocGFuZWwuc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XG4gICAgICAgIHBhbmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhbmVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBkb1NvbWV0aGluZygpIHtcbiAgY29uc29sZS5sb2coXCJQdXQgc29tZSBjb2RlIGluIGhlcmUhXCIpO1xufVxuIiwiaW1wb3J0IHsgSFRNTExvYWRlciB9IGZyb20gJy4uL2NvcmUvdXRpbHMvaHRtbF9sb2FkZXInO1xuaW1wb3J0IHsgQWNjb3JkaW9uIH0gZnJvbSAnLi9hY2NvcmRpb24nO1xuaW1wb3J0IHsgZG9Tb21ldGhpbmcgfSBmcm9tICcuL2RvLXNvbWV0aGluZyc7XG5pbXBvcnQgeyBIVE1MQ29udGVudCwgaXRlbXNUb0NhY2hlIH0gZnJvbSAnLi9odG1sLWltcG9ydHMnO1xuaW1wb3J0IHsgU2xpZGVzaG93IH0gZnJvbSAnLi9zbGlkZXNob3cnO1xuXG4vLyBQdXQgYWxsIGZ1bmN0aW9uIGNhbGxzIHRoYXQgbmVlZCB0byBiZSBtYWRlIG9uIGV2ZXJ5IHBhZ2UgbG9hZCBpbnNpZGUgdGhlIHNldHVwQWxsIGZ1bmN0aW9uIGJvZHkuXG5leHBvcnQgZnVuY3Rpb24gUHV0U3R1ZGVudFBhZ2VMb2FkT3BlcmF0aW9uc0luc2lkZVRoaXNTdHVkZW50Qm9keSgpIHtcbiAgICAvLyBUT0RPOiBQdXQgYWxsIG9wZXJhdGlvbnMgdGhhdCB5b3Ugd2FudCB0byBoYXBwZW4gb24gZXZlciBwYWdlIGxvYWQgaW4gdGhpcyBmdW5jdGlvbi5cbiAgICAvLyBGb3IgZXhhbXBsZSB5b3UgY291bGQgd3JpdGU6IFN0aWNreS5zZXR1cCgpXG4gICAgZG9Tb21ldGhpbmcoKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldHVwQWxsKCkge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyOiBhbnkpID0+IHNldFRpbWVvdXQociwgMTAwKSk7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZGluZycpO1xuICAgIFNsaWRlc2hvdy5zZXR1cEFsbCgpO1xuICAgIEFjY29yZGlvbi5zZXR1cEFsbCgpO1xuICAgIFB1dFN0dWRlbnRQYWdlTG9hZE9wZXJhdGlvbnNJbnNpZGVUaGlzU3R1ZGVudEJvZHkoKTtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkZWQnKTtcbn1cblxuaXRlbXNUb0NhY2hlLmZvckVhY2goKGl0ZW06IEhUTUxDb250ZW50KSA9PiB7XG4gICAgSFRNTExvYWRlci5jYWNoZUhUTUwoaXRlbS5uYW1lLCBpdGVtLmNvbnRlbnQpO1xufSk7XG4od2luZG93IGFzIGFueSkuSFRNTExvYWRlciA9IEhUTUxMb2FkZXI7XG5cbmNvbnNvbGUubG9nKCdkeW5hbWljLWRvbSBsb2FkZWQnKTtcbi8vIERvIG5vdCB0b3VjaCB0aGlzIGxpbmUsIG5lZWRlZCB0byByZWluaXRpYWxpemUgY29kZSBpbiB0aGUgZHluYW1pYy1kb20udHMgc2V0dXBBbGwgZnVuY3Rpb25cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCduZXdQYWdlTG9hZCcsICgpID0+IHNldHVwQWxsKCkpO1xuIiwiZGVjbGFyZSBmdW5jdGlvbiByZXF1aXJlKGlkOiBzdHJpbmcpOiBzdHJpbmc7XG5cbi8vIFRoaXMgZGVmaW5lcyB0aGUgZGF0YSB0aGF0IG5lZWRzIHRvIGJlIHBhc3NlZCB0byB0aGUgSFRNTExvYWRlciB0byBjYWNoZSB5b3VyIGh0bWwgY29udGVudC5cbmV4cG9ydCBpbnRlcmZhY2UgSFRNTENvbnRlbnQge1xuICAgIG5hbWU6IHN0cmluZzsgLy8gVGhlIG5hbWUgdGhhdCB5b3Ugd2lsbCB1c2UgdG8gcmVmZXJlbmNlIHRoZSBjb250ZW50IGluIHlvdXIgaHRtbCBwYWdlcy5cbiAgICBjb250ZW50OiBzdHJpbmc7IC8vIFRoZSBhY3R1YWwgaHRtbCBzdHJpbmcgdGhhdCB3aWxsIGJlIHB1bGxlZCBmcm9tIHRoZSBzb3VyY2UgZmlsZSB0aGF0IHlvdSBzcGVjaWZ5LlxufVxuXG4vLyBBbiBIVE1MQ29udGVudCBvYmplY3Qgc2hvdWxkIGxvb2sgbGlrZSB0aGUgZm9sbG93aW5nOlxuLy8ge1xuLy8gICAgIG5hbWU6ICdmb290ZXInLFxuLy8gICAgIGNvbnRlbnQ6IHJlcXVpcmUoJy4vaHRtbC9mb290ZXIuaHRtbCcpLFxuLy8gfVxuXG4vLyBUaGVuIHlvdSBjYW4gcmVmZXJlbmNlIHRoYXQgY29udGVudCBpbiB5b3VyIGh0bWwgdXNpbmcgdGhlIGZvbGxvd2luZyB0YWcgd2l0aCB0aGUgY29ycmVzcG9uZGluZyBuYW1lIGF0dHJpYnV0ZS5cbi8vIDx0cy1sb2FkIGRhdGEtbmFtZT1cImhlYWRlclwiPjwvdHMtbG9hZD5cblxuLy8gWW91IGNhbiBzcGVjaWZ5IGFzIG1hbnkgYXMgeW91IHdhbnQgaW5zaWRlIG9mIHRoZSBhcnJheSBhbmQgdGhleSB3aWxsIGFsbCBiZSBidW5kbGVkIHVwIHdpdGggeW91ciB3ZWJzaXRlLlxuLy8gTWFrZSBzdXJlIHRvIG1ha2UgYSBjb3JyZXNwb25kaW5nIGh0bWwgZmlsZSBpbiB0aGUgaHRtbCBmaWxlIGZvbGRlciBmb3IgZWFjaCBlbGVtZW50IHlvdSBzcGVjaWZ5LlxuXG5leHBvcnQgY29uc3QgaXRlbXNUb0NhY2hlID0gW1xuICAgIC8vIEZlZWwgZnJlZSB0byBjaGFuZ2UgdGhlIGNvbnRlbnQgaW5zaWRlIGFueSBvZiB0aGUgaHRtbCBmaWxlcyBpbiB0aGUgaHRtbCBmaWxlIGZvbGRlciB0byBzdWl0IHlvdXIgbmVlZHMuXG4gICAge1xuICAgICAgICBuYW1lOiAnaGVhZGVyJyxcbiAgICAgICAgY29udGVudDogcmVxdWlyZSgnLi9odG1sL2hlYWRlci5odG1sJyksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdmb290ZXInLFxuICAgICAgICBjb250ZW50OiByZXF1aXJlKCcuL2h0bWwvZm9vdGVyLmh0bWwnKSxcbiAgICB9LFxuICAgIC8vIFB1dCBtb3JlIGl0ZW1zIGluIHRoZSBhcnJheSBiZWxvdyBoZXJlLlxuXTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9vdGVyIGlkPVxcXCJjb2xvcGhvblxcXCIgY2xhc3M9XFxcImZvb3RlclxcXCIgcm9sZT1cXFwiY29udGVudGluZm9cXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9vdGVyLXdpZGdldHNcXFwiPlxcbiAgICAgIDxhc2lkZSBjbGFzcz1cXFwid2lkZ2V0IHNpdGUtY29udGFjdFxcXCI+XFxuICAgICAgICA8aDIgY2xhc3M9XFxcImZvb3Rlci13aWRnZXQtdGl0bGVcXFwiPk51cnNlcnkgU2Nob29sPC9oMj5cXG4gICAgICAgIDxwPjY5MjYgRm9yZXN0IFBhcmsgUGFya3dheTwvcD5cXG4gICAgICAgIDxwPlN0LiBMb3VpcywgTU8gNjMxMzA8L3A+XFxuICAgICAgICA8cCBjbGFzcz1cXFwicGhvbmVcXFwiPjMxNC05MzUtNjY4OSA8c3Bhbj58PC9zcGFuPiBGYXg6IDMxNC05MzUtNzI0OTwvcD5cXG4gICAgICAgIDxwPlxcbiAgICAgICAgICA8YSBocmVmPVxcXCJmaWxlcy9tYWlsdG86bnVyc2VyeUB3dXN0bC5lZHVcXFwiPm51cnNlcnlAd3VzdGwuZWR1PC9hPlxcbiAgICAgICAgPC9wPlxcbiAgICAgIDwvYXNpZGU+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwid2lkZ2V0LXdyYXBwZXJcXFwiPlxcbiAgICAgICAgPGFzaWRlIGlkPVxcXCJ0ZXh0LTRcXFwiIGNsYXNzPVxcXCJ3aWRnZXQgd2lkZ2V0X3RleHQgd2lkZ2V0LWNvdW50LTJcXFwiPlxcbiAgICAgICAgICA8aDIgY2xhc3M9XFxcImZvb3Rlci13aWRnZXQtdGl0bGVcXFwiPkhvdXJzIG9mIE9wZXJhdGlvbjwvaDI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRleHR3aWRnZXRcXFwiPlxcbiAgICAgICAgICAgIDxwPlxcbiAgICAgICAgICAgICAgQ2xhc3NlcyBtZWV0IE1vbi4gdGhyb3VnaCBGcmkuPGJyIC8+XFxuICAgICAgICAgICAgICBNb3JuaW5nOiA5LTExOjQ1IGEubS48YnIgLz5cXG4gICAgICAgICAgICAgIEFmdGVybm9vbjogMTI6MzAtMzoxNSBwLm0uPGJyIC8+XFxuICAgICAgICAgICAgICBGdWxsIGRheTogOSBhLm0uLTM6MTUgcC5tLlxcbiAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2FzaWRlPlxcbiAgICAgICAgPGFzaWRlIGlkPVxcXCJ0ZXh0LTNcXFwiIGNsYXNzPVxcXCJ3aWRnZXQgd2lkZ2V0X3RleHQgd2lkZ2V0LWNvdW50LTJcXFwiPlxcbiAgICAgICAgICA8aDIgY2xhc3M9XFxcImZvb3Rlci13aWRnZXQtdGl0bGVcXFwiPkFwcGx5IGZvciB0aGUgTnVyc2VyeSBTY2hvb2w8L2gyPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0d2lkZ2V0XFxcIj5cXG4gICAgICAgICAgICA8cD5cXG4gICAgICAgICAgICAgIEV4cGVyaWVuY2UgdGhlIGlubm92YXRpdmUgYXBwcm9hY2ggYW5kIGR5bmFtaWMgdGVhY2hpbmdcXG4gICAgICAgICAgICAgIGVudmlyb25tZW50IG9mIHRoZSBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wuXFxuICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcImZpbGVzL2FwcGx5Lmh0bWxcXFwiPlJlZ2lzdGVyIE5vdzwvYT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2FzaWRlPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2l0ZS1pbmZvXFxcIj5cXG4gICAgICA8cCBjbGFzcz1cXFwiZm9vdGVyLWNvcHlyaWdodFxcXCI+wqkyMDE5IFdhc2hpbmd0b24gVW5pdmVyc2l0eSBpbiBTdC4gTG91aXM8L3A+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9mb290ZXI+XCI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBpZD1cXFwid3VzdGwtYnJhbmRpbmdcXFwiPlxcbiAgPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCIzMjFcXFwiIGhlaWdodD1cXFwiMjhcXFwiIHZpZXdCb3g9XFxcIjAgMCAzMjEgMjhcXFwiIGNsYXNzPVxcXCJ3YXNodS1sb2dvXFxcIlxcbiAgICBhcmlhLWxhYmVsbGVkYnk9XFxcInRpdGxlXFxcIj5cXG4gICAgPHRpdGxlIGlkPVxcXCJ0aXRsZVxcXCI+V2FzaGluZ3RvbiBVbml2ZXJzaXR5IGluIFN0LiBMb3VpczwvdGl0bGU+XFxuICAgIDxwYXRoIGZpbGw9XFxcIiNGRkZcXFwiXFxuICAgICAgZD1cXFwiTTEwLjQ2IDEuNzZjLS4wOSAwLTQuNDEuMDQtMTAuNDYtMS4yMVYxOGMwIC4yNy4wMS40Ny4wMS40N3YuMDJjLjA0LjgxLjI4IDEuNDUuNzcgMiAuMzIuMzQuNzYuNyAxLjM4IDEuMDUuMTcuMS4zNS4xOC41NS4yOC4xNS4wNy4zMS4xNC40Ny4yLjE0LjA2LjU1LjI0LjY5LjI5bDYuNTkgMi41IDYuNTktMi41Yy4xNS0uMDUuNTYtLjI0LjY5LS4yOS4xNi0uMDcuMzItLjE0LjQ3LS4yLjE5LS4xLjM4LS4xOC41NS0uMjguNjItLjM1IDEuMDYtLjcgMS4zOC0xLjA1LjQ4LS41NS43My0xLjE5Ljc3LTJ2LS4wMnMwLS4xOS4wMS0uNDdWLjU1QzE0Ljg2IDEuOCAxMC41NSAxLjc2IDEwLjQ2IDEuNzZ6XFxcIj5cXG4gICAgPC9wYXRoPlxcbiAgICA8cGF0aCBmaWxsPVxcXCIjMDA3MzYwXFxcIlxcbiAgICAgIGQ9XFxcIk0xMC40NiAyLjhjLS4wOSAwLTQuMDMuMDQtOS41Ni0xLjF2MTUuOTVjMCAuMjUuMDEuNDMuMDEuNDR2LjAyYy4wNC43NC4yNSAxLjMzLjcgMS44My4yOS4zMS43LjY0IDEuMjYuOTUuMTUuMDkuMzIuMTcuNS4yNi4xNC4wNy4yOC4xMy40NC4xOS4xMi4wNS41LjIyLjYzLjI3bDYuMDMgMi4yOSA2LjAzLTIuMjljLjEzLS4wNS41MS0uMjIuNjMtLjI3LjE1LS4wNi4zLS4xMy40NC0uMTkuMTgtLjA5LjM1LS4xNy41LS4yNi41Ni0uMzEuOTctLjY0IDEuMjYtLjk1LjQ0LS41LjY2LTEuMDkuNy0xLjgzdi0uMDJzMC0uMTguMDEtLjQ0VjEuN2MtNS41NSAxLjE0LTkuNSAxLjEtOS41OCAxLjF6XFxcIj5cXG4gICAgPC9wYXRoPlxcbiAgICA8cGF0aCBmaWxsPVxcXCIjRTFDNEFDXFxcIlxcbiAgICAgIGQ9XFxcIk0xMC40NiAzLjc1Yy0uMDggMC0zLjY4LjA0LTguNzQtMS4wMnY0LjA4YzUuMDUgMS4wNSA4LjY3IDEuMDIgOC43NCAxLjAyczMuNjguMDQgOC43NC0xLjAyVjIuNzNjLTUuMDYgMS4wNS04LjY2IDEuMDItOC43NCAxLjAyelxcXCI+XFxuICAgIDwvcGF0aD5cXG4gICAgPHBhdGggZmlsbD1cXFwiI0E1MTQxN1xcXCJcXG4gICAgICBkPVxcXCJNMTAuNDYgNy44M2MtLjA4IDAtMy42OC4wNC04Ljc0LTEuMDJ2OS4wNWM1LjA1IDEuMDUgOC42NyAxLjAyIDguNzQgMS4wMnMzLjY4LjA0IDguNzQtMS4wMlY2LjgyYy01LjA2IDEuMDQtOC42NiAxLjAxLTguNzQgMS4wMXpcXFwiPlxcbiAgICA8L3BhdGg+XFxuICAgIDxwYXRoIGZpbGw9XFxcIiNFMUM0QUNcXFwiXFxuICAgICAgZD1cXFwiTTEuNzIgMTcuNzJjLjAzLjY5LjIzIDEuMjMuNjQgMS42OC4yNi4yOC42NC41OCAxLjE1Ljg3LjE1LjA4LjI5LjE1LjQ2LjIzLjEzLjA2LjI2LjEyLjQuMTcuMTEuMDUuNDYuMi41OC4yNEwxMC40NiAyM2w1LjUxLTIuMDljLjEyLS4wNC40Ni0uMi41OC0uMjQuMTQtLjA2LjI3LS4xMi40LS4xNy4xNi0uMDguMzItLjE1LjQ2LS4yMy41MS0uMjkuODgtLjU4IDEuMTUtLjg3LjQxLS40Ni42LTEgLjY0LTEuNjh2LS4wMnMwLS4xNi4wMS0uNHYtMS40NGMtNS4wNSAxLjA1LTguNjcgMS4wMi04Ljc0IDEuMDJzLTMuNjguMDQtOC43NC0xLjAydjEuNDVjLS4wMi4yNS0uMDEuNDEtLjAxLjQxelxcXCI+XFxuICAgIDwvcGF0aD5cXG4gICAgPHBhdGggZmlsbD1cXFwiIzAwNzM2MFxcXCJcXG4gICAgICBkPVxcXCJNNC44IDMuNjlsLjQxIDEuMjMgMS4yOS4wMS0xLjA0Ljc3LjM5IDEuMjQtMS4wNS0uNzYtMS4wNS43Ni4zOS0xLjI0LTEuMDQtLjc3IDEuMjktLjAxLjQxLTEuMjN6bTExLjMxIDBsLjQyIDEuMjMgMS4yOS4wMS0xLjA0Ljc3LjM5IDEuMjQtMS4wNi0uNzYtMS4wNS43Ni4zOS0xLjI0LTEuMDQtLjc3IDEuMjktLjAxLjQxLTEuMjN6bS01LjY1LjQ4bC40MiAxLjIzIDEuMjkuMDEtMS4wNC43Ny4zOSAxLjI0LTEuMDYtLjc2LTEuMDYuNzUuMzktMS4yNC0xLjA0LS43NyAxLjMtLjAxLjQxLTEuMjJ6TTEwLjQ2IDE3LjIxbC0uNDYuNDV2MS4yMmwuMjMuNjV2MS4wOWguNDV2LTEuMDlsLjIzLS42NXYtMS4yMmwtLjQ1LS40NXptLjIyIDQuNDF2LS42NWgtLjQ1di42NWwtLjIzLjQyLjQ2LjU2LjQ2LS41Ni0uMjQtLjQyem0uMzMtLjY1di41bC4yOS4zMS41MS0uNDF2LS40MWgtLjh6bS41NC0yLjA0bC0uNTQuNnYxLjA5aC40NHYtLjY1bC40My0uNDYuNTUuMzYuMzUtLjM2di0uNThoLTEuMjN6bS0xLjY0IDIuMDR2LjVsLS4yOS4zMS0uNTItLjQxdi0uNDFoLjgxem0tLjU1LTIuMDRsLjU0LjZ2MS4wOWgtLjQzdi0uNjVsLS40My0uNDYtLjU1LjM2LS4zNS0uMzZ2LS41OGgxLjIyelxcXCI+XFxuICAgIDwvcGF0aD5cXG4gICAgPHBhdGggZmlsbD1cXFwiI0UxQzRBQ1xcXCJcXG4gICAgICBkPVxcXCJNMTQuNjIgOS4yN3Y1LjE5aC0zLjQ5bC0uMjUuMjEtLjQzLjM3LS40My0uMzctLjI1LS4yMUg2LjI5VjkuMjdsLS43NC41NHY1LjM4aDQuMTJsLjM3LjMxLjQzLjM4LjQzLS4zOC4zNy0uMzFoNC4xMlY5LjgxbC0uNzctLjU0elxcXCI+XFxuICAgIDwvcGF0aD5cXG4gICAgPHBhdGggZmlsbD1cXFwiI0UxQzRBQ1xcXCJcXG4gICAgICBkPVxcXCJNMTEuMDIgOC44M2wtLjE0LjExLS40My4zOC0uNDMtLjM4LS4xMi0uMTFINy4wM3Y0Ljg5aDIuODhsLjIuMTcuMzUuMzEuMzYtLjMxLjE5LS4xN2gyLjg4VjguODNoLTIuODd6TTE2LjExIDEwLjM1djMuMzFjLjk1LS4xNCAxLjk4LS4zMSAzLjA4LS41NFY5LjgxYTUwLjUgNTAuNSAwIDAgMS0zLjA4LjU0em0tMTEuMzEgMGMtLjk1LS4xNC0xLjk4LS4zMS0zLjA4LS41NHYzLjMxYzEuMS4yMyAyLjE0LjQxIDMuMDguNTR2LTMuMzF6XFxcIj5cXG4gICAgPC9wYXRoPlxcbiAgICA8cGF0aCBmaWxsPVxcXCIjMDA3MzYwXFxcIlxcbiAgICAgIGQ9XFxcIk0xNi4xMSAxNi43NmwtLjMxLjMydi44NmwuMTUuNDZ2Ljc3aC4zMXYtLjc3bC4xNi0uNDZ2LS44NmwtLjMxLS4zMnptLjE2IDMuMDl2LS40NWgtLjMxdi40NmwtLjE1LjMuMzEuNC4zMi0uNC0uMTctLjMxem0uMjMtLjQ1di4zNWwuMi4yMi4zNi0uMjh2LS4yOWgtLjU2em0uMzgtMS40M2wtLjM4LjQzdi43N2guMzF2LS40NmwuMy0uMzMuMzguMjUuMjQtLjI1di0uNDFoLS44NXptLTEuMTQgMS40M3YuMzVsLS4yMS4yMi0uMzUtLjI4di0uMjloLjU2em0tLjM5LTEuNDNsLjM5LjQzdi43N2gtLjMxdi0uNDZsLS4zLS4zMy0uMzkuMjUtLjI0LS4yNXYtLjQxaC44NXpNNC44IDE2Ljc2bC0uMzIuMzJ2Ljg2bC4xNi40NnYuNzdoLjMxdi0uNzdsLjE1LS40NnYtLjg2bC0uMy0uMzJ6bS4xNiAzLjA5di0uNDVoLS4zMXYuNDZsLS4xNi4zLjMyLjQuMzEtLjQtLjE2LS4zMXptLjIyLS40NXYuMzVsLjIxLjIyLjM1LS4yOHYtLjI5aC0uNTZ6bS4zOS0xLjQzbC0uMzkuNDN2Ljc3aC4zMXYtLjQ2bC4zLS4zMy4zOS4yNS4yNC0uMjV2LS40MWgtLjg1ek00LjQyIDE5LjR2LjM1bC0uMi4yMi0uMzYtLjI4di0uMjloLjU2em0tLjM4LTEuNDNsLjM4LjQzdi43N2gtLjMxdi0uNDZsLS4zLS4zMy0uMzguMjUtLjI0LS4yNXYtLjQxaC44NXpcXFwiPlxcbiAgICA8L3BhdGg+XFxuICAgIDxnIGZpbGw9XFxcIiNGRkZcXFwiIGNsYXNzPVxcXCJ3YXNodS1sb2dvLXRleHRcXFwiPlxcbiAgICAgIDxwYXRoXFxuICAgICAgICBkPVxcXCJNMjMyLjQ3IDguMTZjLjMzIDAgMS4wNy0xLjIgMS4wNy0xLjU3IDAtLjM2LS43NC0xLjYtMS4wNy0xLjYtLjMgMC0xLjA3IDEuMjYtMS4wNyAxLjZzLjc2IDEuNTcgMS4wNyAxLjU3em0xMy44MiAxMi4wM3YtNS4wOGMwLTIuMzQtLjc2LTUuNzYtNC4yMi01Ljc2LTIuNTEgMC0zLjgxIDIuMzgtMy43NiAyLjAxVjkuNTljMC0uMzEtLjE1LS40OS0uMzEtLjQ5LS42IDAtMS4wNCAxLjAxLTMuMDYgMS42Mi0uMTMuMDMtLjUuMDQtLjUxLjI3IDAgLjY1IDIuMDMtLjg0IDEuOTkgMS42OHY3LjY0YzAgMS40My0uNyAxLjU1LTEuMjEgMS42OC0uMDMgMC0uMDYtLjAxLS4xIDAtLjUyLS4wMy0xLjYzLS4yMy0xLjYzLTEuMzVWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0uOTggMS4wOC0yLjYzIDEuNjQtLjEzLjAzLS4zNy4wNi0uMzcuMjQgMCAuNjUgMS40OS0uNjEgMS40MiAxLjY5djcuMjdjLjA2IDEuODYtLjk2IDIuMDQtMS41MiAyLjA0LS44NC0uMDEtLjYzLjEtLjYzLjM2LjAzLjMxLjUzLjMzIDEuMzcuMzQuMjkgMCAxLS4xMSAxLjgyLS4xMSAxLjA3IDAgMS44Ny4xMiAyLjQxLjEyLjMxIDAgMS4xNS0uMTMgMi41My0uMTMgMS41IDAgMi4wMi4xMyAyLjQ2LjEzLjM5IDAgLjgzLS4xNy41Ny0uNDQtLjQyLS40MS0yLjI4LjA2LTIuMjgtMi4wNlYxMy4xYy0uMDMtLjQ5Ljg4LTIuNCAzLjA2LTIuNCAyLjEgMCAzLjAzIDIuMzEgMy4wMyAzLjg1djUuNzZjLS4wMyAyLjI3LS44IDEuNTUtMS4xMSAyLS4xNy4yNS4xMy4zNy40Ni4zN3MuODgtLjEzIDEuODctLjEzYzEuMjcgMCAxLjgyLjEyIDIuMTYuMTIuMjYgMCAuNzMtLjIuNDUtLjQ0LS42OC0uNS0xLjk3LjMtMS45NS0yLjA0ek00OC45MSAyLjRjLjM3LS4wNS41NS0uMTkuNTUtLjE5IDAtLjI0LS4wNS0uMy0uMzktLjMtLjY1IDAtMS4wNS4xMS0xLjY5LjExLS43MSAwLTEuMjUtLjA4LTEuODUtLjA4LS4zNCAwLS4zMS4xMS0uMzEuMyAwIC4yMS42NS4wOCAxLjAyLjg5LjIxLjQ0LjEzIDEuMzYtLjA4IDEuOWwtNS4wMSAxMy43NC0yLjE0LTYuMS0uODMtMi4yM3MtLjEzLjA2LjQ2LTEuNzlsMS4xNy0zLjUyYy41Ny0xLjczIDEuMTQtMi42NCAxLjg4LTIuNjUuOTItLjAyLjkyLS41Ny4yMS0uNTdzLTEuMTMuMDYtMS43NS4wNmMtLjY1IDAtLjk5LS4wNi0xLjY5LS4wNi0uMjYgMC0uNTUuMDgtLjUyLjMuMDMuMjEuNDIuMTQuNzEuMy40Ny4yNC43OCAxLjI1LjQ1IDIuM2wtMS4zOCA0LjQyLTEuNTgtNC4xM2MtLjMxLS43OC0uNzMtMi41Mi4wMy0yLjY3LjczLS4xNS42My0uNTIuMTgtLjUyLS44NiAwLTEuMzIuMTEtMi4xNS4xMS0uOTEgMC0xLjU5LS4xMS0yLjQ1LS4xMS0uMTggMC0uNTIuMDMtLjQyLjM4LjA1LjIxLjQ5LjE0Ljc2LjMgMS4wNS42OCAxLjI1IDEuNTUgMS42MiAyLjUybDIuMyA2LjQ4Yy40MiAxLjE2LjQ1Ljc0LjExIDEuNzNsLTIgNS41LTQuOTUtMTQuMTFjLS4zOS0xLjA2LS42LTEuNzkuMjYtMi4yLjM3LS4xOS40Ny0uMjIuNTItLjMuMDUtLjA3LjEtLjMyLS40NS0uMy0uODkuMDMtMS40My4xMS0yLjMyLjExLS45NCAwLTEuNTktLjExLTIuNDUtLjExLS4yOSAwLS4zNC4xNC0uMzQuMzUgMCAuMzMuNzEuMTEgMS4zMS44MS4zNC4zOC45OSAxLjY2IDEuMTQgMi4xMkwzMi44IDIyLjNjLjExLjI1LjE0Ljc2LjQ4Ljc2LjI3IDAgLjMzLS41Ny40Mi0uNzlsMy4xMy04LjU5IDMuMDUgOC4xNmMuMTMuMzMuMzEgMS4yMi42MyAxLjIyLjI2IDAgLjM2LS40My40OS0uODNsNS45LTE2Ljg3Yy41LTEuMzYgMS4wNy0yLjc5IDIuMDEtMi45NnptNjUuNDYgNi43MWMtMy4yNiAwLTUuNzcgMy4yOC01Ljc3IDcuMTMgMCAxLjk2LjUyIDMuNTEgMS40MiA0LjYzLS4zMS4yMS0uOTIuNy0yLjE1LjctMS4wNyAwLTEuNjgtLjY0LTEuNzQtMlYxMS4ybDMuMzgtLjAxYy4yMiAwIC42NS0xLjQ0LjY3LTEuNTIuMDQtLjE4LjEtLjMzLjEyLS40Ni4wNC0uMjgtLjE3LS4zLS4zNy0uMDEtLjE1LjE1LS4zMi41NS0uOTkuNTVoLTIuODFjMC0yLjQxLjAzLTMuNTEtLjM1LTMuNTEtLjM2IDAtLjMuMS0uNjMgMS4xNy0uNDQgMS40NC0xLjc5IDIuMjMtMi42MyAyLjY4LS4zOC4wOS0uODEuMTItMS4yOS4wMS0uNzQtLjE2LTEuNi0xLjA2LTMuODMtMS4wNi0yLjM4IDAtNC40NiAxLjk1LTQuNDYgNC41NSAwIDEuNC42MiAyLjc2IDEuNzEgMy40OC0uMi4xMi0xLjUzIDEuMjQtMS4zNyAyLjU2IDAgMC0uMDMgMS4zNyAxLjA1IDEuODItLjMzLjE0LS42Ny4zNi0uOTYuNjMtLjctLjI2LTEuNzItLjA2LTEuNzItMS45MVYxNS4xYzAtMi4zNC0uNzYtNS43Ni00LjIyLTUuNzYtMi41MSAwLTMuODEgMi4zOC0zLjc2IDIuMDFWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0uNzMuOTktMi45MSAxLjU1LS4xMy4wMy0uNDMuMS0uNDQuMzQgMCAuNjUgMS43NS0uNzEgMS43NiAxLjY4djcuNjRjMCAxLjY1LTEuMzEgMS42NS0xLjU0IDEuNjctLjEgMC0uMTkgMC0uMzEuMDEtLjU1LS4wNS0xLjUxLS4zLTEuNTEtMS4zNFY5LjU5YzAtLjMxLS4xNS0uNDktLjMxLS40OS0uNiAwLS45OCAxLjA4LTIuNjMgMS42NC0uMTMuMDMtLjM3LjA2LS4zNy4yNCAwIC42NSAxLjQ5LS42MSAxLjQyIDEuNjl2Ny4yN2MuMDYgMS43OC0uODYgMi4wMS0xLjQzIDIuMDMtLjY5LS4wOS0xLjIyLS4zNy0xLjIyLTEuNDF2LTUuMTRjMC0yLjY1LTEuMDEtNi4wNy00LjMzLTYuMDctMS40NyAwLTIuNzUuODEtMy43MyAxLjkyVjIuNDFjMC0uMzEtLjE1LS40OC0uMzEtLjQ5LS40LS4wMy0xLjA3IDEuMTktMi45NiAxLjYzLS4xMy4wMy0uNjIuMDctLjYyLjI1IDAgLjY1IDEuOTctLjMxIDEuOTkgMS42OVYyMC42YzAgMS41MS0xLjMgMS4zMS0xLjUzIDEuNzktLjA0LjIxLjA4LjMxLjI2LjMxLjQyIDAgMS41NS0uMTIgMi4zNS0uMTJzMi4xLjEyIDIuNjQuMTJjLjMxIDAgLjQ0LS4wNi40NC0uNDQtLjI3LS41Mi0yLjI4LjI4LTIuMjgtMi4zN3YtNi41YzAtMS41NyAxLjg3LTIuNzggMy4wMy0yLjc4LjkxIDAgMy4xNC43MSAzLjE0IDQuNTN2NS42NGMwIDEuMTEtMS4xOCAxLjIzLTEuMjcgMS41NyAwIC4yNC4xNS4zNC40Mi4zNC4yOCAwIDEuMTEtLjEyIDIuMTItLjEyLjU2IDAgMS4wNy4wMyAxLjUuMDYuMjMuMDUuNTcuMDUuOTkuMDUuMjggMCAxLS4xMSAxLjgyLS4xMXMxLjQ4LjA3IDEuOTkuMTFjLjEuMDEuMi4wMS4zLjAxLjA0IDAgLjA4LjAxLjEyLjAxaC4wMWMuMzIuMDEuNjEgMCAuNzQgMCAuMzEgMCAuODMtLjEzIDIuMi0uMTMgMS41IDAgMi4wMi4xMyAyLjQ2LjEzLjM5IDAgLjgzLS4xNy41Ny0uNDQtLjQyLS40MS0yLjI4LjA2LTIuMjgtMi4wNnYtNy4wOWMtLjAzLS40OS44OC0yLjQgMy4wNi0yLjQgMi4xIDAgMy4wMyAyLjMxIDMuMDMgMy44NXY1Ljc2YzAgMi0uOCAxLjU1LTEuMTEgMi0uMTcuMjUuMTMuMzcuNDYuMzdzLjg4LS4xMyAxLjg3LS4xM2MuOTMgMCAxLjUzLjA3IDEuOTEuMS0uMjkuNDItLjQ4LjktLjUxIDEuNC0uMTQgMi41MSAyLjkzIDMuNDEgNS41MSAzLjM3IDUuMTItLjA3IDYuNTctMy42MiA1LjUxLTUuNTEtMS4wOS0xLjk1LTMuNDQtMS44Ny01LjY4LTEuODYtNC4yLjAyLTMuNDEtMi41OS0xLjY5LTIuNDkuNC4wMi4yLjE0IDEuNTcuMTQgMi40MyAwIDQuNzYtMS42NiA0LjctNC4zOC0uMDEtLjIzLjA1LTEuMDMtLjUzLTIuMTQgMS4xNC4wMS42OSAwIDIuNDEgMGwtLjAxIDcuNjNjMCAzLjQ1IDEuNjQgNC4wMyAyLjg3IDQuMDMgMS43NCAwIDMuMDEtMS4xNSAzLjI0LTEuNjggMS4wMyAxLjEgMi40NiAxLjY4IDQuMTIgMS42OCAzLjE5IDAgNS42LTIuOTMgNS42LTYuNzggMC01LjgtMy42NS02Ljk2LTUuNjEtNi45NnpNOTUuNjIgMjEuNzJjLjIxLS4wMS4yNy4wOCAyLjY0LjE3IDIuNDUuMDYgMy4zMy43NyAzLjQ5IDEuNC4yNiAxLjEyLS41MyAzLjUyLTQuMDUgMy4yOS0yLjIyLS4xNS0yLjg3LTEuMi0zLjAzLTEuNDQtLjg0LTEuMTYtLjE2LTMuMzUuOTUtMy40MnptMi4wMS00LjU3Yy0yLjA4IDAtMi43OC0yLTIuNzgtMy45MSAwLTEuOTYuNTktMy41OCAyLjY3LTMuNTggMi4xMSAwIDIuOTUgMi4xNiAyLjk1IDQuMDcuMDEgMS45My0uODcgMy40Mi0yLjg0IDMuNDJ6bTE2Ljk5IDQuODFjLTMuMDMgMC00LjIyLTMuNzYtNC4yMi02LjgyIDAtMi42NSAxLjA0LTUuMSAzLjU3LTUuMSAzLjA4IDAgNC4xOSAzLjI5IDQuMTkgNi41MS4wMSAzLjg3LTEuMzYgNS40MS0zLjU0IDUuNDF6XFxcIj5cXG4gICAgICA8L3BhdGg+XFxuICAgICAgPHBhdGhcXG4gICAgICAgIGQ9XFxcIk0xMzEuMTEgMjAuMTl2LTUuMDhjMC0yLjM0LS43Ni01Ljc2LTQuMjItNS43Ni0yLjUxIDAtMy44MSAyLjM4LTMuNzYgMi4wMVY5LjU5YzAtLjMxLS4xNS0uNDktLjMxLS40OS0uNiAwLTEuMDQgMS4wMS0zLjA3IDEuNjItLjEzLjAzLS41LjA0LS41MS4yNyAwIC42NSAyLjAzLS44NCAyIDEuNjh2Ny42NGMwIDItMS4zNSAxLjUyLTEuNjYgMi4wNC0uMTUuMjcuMjUuMzMuNTkuMzMuMzEgMCAuODMtLjEzIDIuMi0uMTMgMS41IDAgMi4wMi4xMyAyLjQ2LjEzLjM5IDAgLjgzLS4xNy41Ny0uNDQtLjQyLS40MS0yLjI4LjA2LTIuMjgtMi4wNnYtNy4wOWMtLjAzLS40OS44OC0yLjQgMy4wNi0yLjQgMi4xIDAgMy4wMyAyLjMxIDMuMDMgMy44NXY1Ljc2Yy0uMDMgMi4yNy0uOCAxLjU1LTEuMTEgMi0uMTcuMjUuMTMuMzcuNDYuMzdzLjg4LS4xMyAxLjg3LS4xM2MxLjI3IDAgMS44Mi4xMiAyLjE2LjEyLjI2IDAgLjczLS4yLjQ0LS40NC0uNjUtLjQ5LTEuOTQuMzEtMS45Mi0yLjAzek03Ny40MSA4LjE2Yy4zMyAwIDEuMDctMS4yIDEuMDctMS41NyAwLS4zNi0uNzQtMS42LTEuMDctMS42LS4zIDAtMS4wNyAxLjI2LTEuMDcgMS42LjAyLjM1Ljc3IDEuNTcgMS4wNyAxLjU3em0tMTcuMyA2Ljk2Yy0uNTEtLjI0LTEuMjctLjY4LTEuNjUtLjg4LTEuNjMtLjg5LTIuMjctMS40Ny0yLjMxLTIuMy0uMDgtMS40NCAxLjE1LTIuMTkgMi4yMS0yLjA4IDIuNTQtLjA0IDIuODggMi44IDMuMTQgMi44LjM5IDAgLjI4LS4zNy4yOC0xLjIxIDAtLjIxLjAzLTEuMjctLjEzLTEuNTItLjMxLS40Ni0yLjEtLjc0LTIuNTUtLjc0LS4xMSAwLS41Mi0uMDEtLjYtLjAyLS4xMyAwLS4yOC4wMi0uMjguMDItMS44MS0uMDMtMy41IDEuMTEtMy40NSAzLjUzLjA1IDIuMjEgMi42NCAzLjQ3IDQuMDQgNC4zIDEuMDQuNTkgMi4yNiAxLjE1IDIuMjQgMi41Ny0uMDIgMS42MS0xLjI3IDIuNjgtMi42MSAyLjYtMy4xNS0uMDUtMi43Mi00LTMuMjgtNC0uMzkgMC0uMzEgMS0uMzEgMS41MiAwIC41MS0uMDEuOTgtLjAxIDEuMzgtLjA3LjM2LS4yLjctLjU0LjcyLTEuMjQuMDgtLjk0LTEuOS0uOTQtMi45NXYtNi40M2MtLjA2LTEuOTctMS41NC0zLjI1LTMuOC0zLjI1LTMuMDkgMC01LjMxIDMuODEtNC4yNSA1IC4yNS4yOCAxLjI2LS44IDEuMzItLjg2cy4wOC0uMTMuMDgtLjEzYy0uMDEtMS4zLjk3LTIuOTUgMi4zNy0zLjA5IDEuNi0uMTUgMi40IDEuMDQgMi40IDIuNjV2Mi4wOWMtNi4wNiAxLjIxLTYuOTMgMy4yMi02LjkzIDQuODcgMCAyLjIxIDEuNTUgMy4yIDMuMjMgMy4yIDEuNDUgMCAyLjg4LS42OSAzLjk2LTEuOC4zNCAxLjAzIDEuMDEgMS42NSAyLjAyIDEuNjIuMzUtLjAxLjQxLjA5IDEuNDYtLjM3LjM3LS4xLjM1LS4wOS43Ny0uMDEuNTYuMTkgMS4zMi41NyAyLjY2LjU3IDIuMDMuMDMgMy44NS0xLjg1IDMuODUtNC4xNyAwLTEuNS0uNDMtMi40MS0yLjM5LTMuNjN6bS04LjQzIDQuMzJjMCAxLjY1LTEuNjggMi41Mi0yLjYgMi41Mi0xLjM4IDAtMi4zMy0uODktMi4zMy0yLjY2IDAtMi43MyAzLjI4LTMuMjMgNC45NC0zLjY3LS4wMS0uMDEtLjAxIDMuODEtLjAxIDMuODF6bTIxOS45OS4xOWMtLjMxIDAtMS4wNyAxLjI5LTEuMDcgMS42MyAwIC4zNC43NyAxLjYgMS4wNyAxLjYuMzMgMCAxLjA3LTEuMjMgMS4wNy0xLjZzLS43My0xLjYzLTEuMDctMS42M3ptMzMuNzEgMS4xMlY5LjkyYzAtLjYxLS4zNC0uNzctLjQ0LS43Ny0uMzkgMC0uNjEuMS0uODguMTYtLjI3LjEtLjU4LjIzLTEuMjkuMjMtLjEzIDAtLjc5LS4xMi0uNzYuMjUuMDQuMzcgMS41Ny4xNSAxLjU4IDEuMjN2Ny44M2MtLjEyIDEuMzctMS4yNyAyLjg4LTIuNjYgMi44OC0uMzIgMC0yLjM5LS4yMi0yLjM3LTMuNjVWOS45MmMwLS42MS0uMzQtLjc3LS40NC0uNzctLjM5IDAtLjYxLjEtLjg4LjE2LS4yNy4xLS42MS4yMi0xLjMyLjE5LS4zOC0uMDItLjc5LS4wNy0uNzMuMjkuMDYuMzIgMS41OSAwIDEuNTkgMS4yM3Y3LjUxYzAgMi43NCAxLjYxIDQuMzIgMy41NiA0LjMyIDEuMyAwIDIuNDktLjI4IDMuMjQtMS44aC4wNXYxLjMyYzAgLjEzLjAzLjQ4LjIyLjQ4LjM3IDAgLjU2LS4zLjgzLS40LjI5LS4wNy4zNy0uMzMgMS4yOC0uNDIuMzktLjA0LjgyLS4yNC44Mi0uNS0uMTEtLjUzLTEuNC4wNi0xLjQtLjc4ek0yOTAuMDkgOS4xMWMtMy4yNiAwLTUuNzcgMy4yOC01Ljc3IDcuMTMgMCAxLjczLjQyIDMuMTUgMS4xMyA0LjIzLS43OS41Ny0yLjIzIDEuMS00Ljk2IDEuMS0yLjEzIDAtMS45My0uNzQtMS45My0yLjU1VjQuNTdjMC0yLjY2IDEuOTktMS44OSAyLjAzLTIuMzcuMDMtLjM0LS4yOC0uMjYtLjYxLS4yNi0uMzggMC0xLjA3LjE1LTIuNTIuMTUtMS4yNSAwLTIuMzQtLjEyLTIuODgtLjEyLS4zMyAwLS42My4xLS41Mi4zNS4yNS41NyAyLjE0LjA1IDIuMTQgMS42NXYxNS4xYzAgMS40NC4yMSAyLjM2LS40NSAyLjczLS44MS40OS0xLjc2LjUxLTEuNjguODMuMDUuMTkuNDUuMi42OC4yIDEuMDIgMCAyLjQyLS4xMyAzLjQ0LS4xNSAxLjk0LS4wNiAzLjg2LjEzIDUuNzkuMTMgMS4xMiAwIDEuNC0uMjIgMi4yMi0xLjMzLjAxLS4wMi4wMi0uMDMuMDQtLjA1IDEuMDEuOTQgMi4zNCAxLjQ0IDMuODcgMS40NCAzLjE5IDAgNS42LTIuOTMgNS42LTYuNzguMDEtNS44Mi0zLjY1LTYuOTgtNS42Mi02Ljk4em0uMjYgMTIuODVjLTMuMDMgMC00LjIyLTMuNzYtNC4yMi02LjgyIDAtMi42NSAxLjA0LTUuMSAzLjU3LTUuMSAzLjA4IDAgNC4xOSAzLjI5IDQuMTkgNi41MS4wMSAzLjg3LTEuMzYgNS40MS0zLjU0IDUuNDF6bS0zMi4wMy0xMC40OWMtLjc1LS4zNy0xLjg1LTEuMDQtMi4zOS0xLjM2LTIuMzctMS4zNy0zLjMtMi4yNi0zLjM3LTMuNTItLjEyLTIuMjEgMi4wNC0zLjUyIDMuNTgtMy4zNSAxLjk2IDAgMy41NyAxLjE5IDQuMjQgMy43My4wNy4yNy4zMS44OS41Ni44OS4yMiAwIC4yNi0uMi4yNC0uNDVsLS4zMy00LjAyYy0uMDItLjMzLS4xNC0uNDItLjI3LS40Mi0uMjIgMC0uMzYuMzMtLjU2LjMzLS4zMSAwLTEuMS0xLjExLTMuOC0xLjA5LS4xOC0uMDEtLjQzLjAyLS40My4wMi0yLjYzLS4wNS01LjEgMS43LTUuMDIgNS40LjA3IDMuMzcgMy44NSA1LjMgNS44OSA2LjU5IDEuNTEuOSAzLjA5IDIuMzQgMy4wNCAzLjk1LS4wOCAyLjQ3LTEuNjMgNC4wOC0zLjU4IDMuOTQtNC41OS0uMDgtMy45Ni02LjEzLTQuNzgtNi4xMy0uNTYgMC0uNDUgMS41Mi0uNDYgMi4zMiAwIDEuOTItLjA4IDMuNDkuMTQgMy43Ny4wNy4wOS4yOS4wNS43NC4wNS45IDAgMiAxLjA1IDQuNjUgMS4wNSAyLjk1LjA1IDUuMzgtMi42OSA1LjM4LTYuMjUtLjAxLTIuMTktLjYyLTMuNTgtMy40Ny01LjQ1em01MS42OS0zLjMxYy4zMyAwIDEuMDctMS4yIDEuMDctMS41NyAwLS4zNi0uNzQtMS42LTEuMDctMS42LS4zIDAtMS4wNyAxLjI2LTEuMDcgMS42cy43NiAxLjU3IDEuMDcgMS41N3pNMzEyLjY0IDIyYy0uNTItLjAzLTEuNjMtLjIzLTEuNjMtMS4zNVY5LjU5YzAtLjMxLS4xNS0uNDktLjMxLS40OS0uNiAwLS45OCAxLjA4LTIuNjMgMS42NC0uMTMuMDMtLjM3LjA2LS4zNy4yNCAwIC42NSAxLjQ5LS42MSAxLjQyIDEuNjl2Ny4yN2MuMDYgMS44Ni0uOTYgMi4wNC0xLjUyIDIuMDQtLjg0LS4wMS0uNjMuMS0uNjMuMzYuMDMuMzEuNTMuMzMgMS4zNy4zNC4yOCAwIDEtLjExIDEuODItLjExIDEuMDcgMCAxLjg3LjEyIDIuNDEuMTIuMzMgMCAuNzYtLjguMDctLjY5em01Ljk4LTYuODhjLS41MS0uMjQtMS4yNy0uNjgtMS42NS0uODgtMS42My0uODktMi4yNy0xLjQ3LTIuMzEtMi4zLS4wOC0xLjQ0IDEuMTUtMi4xOSAyLjIxLTIuMDggMi41NC0uMDUgMi44OCAyLjggMy4xNCAyLjguMzkgMCAuMjgtLjM3LjI4LTEuMjEgMC0uMjEuMDMtMS4yNy0uMTMtMS41Mi0uMzEtLjQ2LTIuMTEtLjc0LTIuNTUtLjc0LS4xMSAwLS41Mi0uMDEtLjYtLjAxLS4xMyAwLS4yOC4wMS0uMjguMDEtMS44MS0uMDMtMy41IDEuMTEtMy40NCAzLjUzLjA1IDIuMjEgMi42NCAzLjQ2IDQuMDQgNC4zIDEuMDQuNTkgMi4yNiAxLjE1IDIuMjQgMi41Ny0uMDIgMS42MS0xLjI3IDIuNjgtMi42MSAyLjYtMy4xNS0uMDUtMi43Mi00LTMuMjgtNC0uMzkgMC0uMzEgMS0uMzEgMS41Mi0uMDEgMS4yNS0uMDYgMi4yOC4xIDIuNDYuMDUuMDYuMi4wMy41LjAzLjYyIDAgMS4zOC42OSAzLjE5LjY5IDIuMDMuMDMgMy44NS0xLjg1IDMuODUtNC4xNy0uMDEtMS40OC0uNDMtMi4zOS0yLjM5LTMuNnptLTQ4LjczIDUuNjZjLS4yNi4xMy0uODUuNzctMi4yOC43Ny0xLjA3IDAtMS42OC0uNjQtMS43NC0ydi04LjgybDMuMzgtLjAxYy4yMiAwIC42NS0xLjQ0LjY3LTEuNTIuMDQtLjE4LjEtLjMzLjEyLS40Ni4wNC0uMjgtLjE3LS4zLS4zNy0uMDEtLjE1LjE1LS4zMi41NS0uOTkuNTVoLTIuODFjMC0yLjQxLjAzLTMuMDQtLjM1LTMuMDQtLjM2IDAtLjMuMS0uNjMgMS4xNy0uNTQgMS43OS0yLjUyIDIuNTgtMy4xNSAyLjk3LS4xNS4wOC0uMTUuMTEtLjE1LjE5LS4wMS4yMy43NS4xNCAyLjMxLjE3bC0uMDEgOC4wN2MwIDMuNDUgMS42NCA0LjAzIDIuODcgNC4wMyAxLjg3IDAgMy4yMS0xLjM0IDMuMjgtMS44LjAzLS4yNSAwLS4yOC0uMTUtLjI2em0tODEuMzItMS4wOWMtLjU3IDAtMS40MiAxLjYyLTMuNjYgMS42Mi0xLjU4IDAtNC4xNy0xLjUzLTQuMTctNi42Nmg2LjljLjYgMCAuODguMDMuODgtLjUyIDAtMS4yNS0xLjQtNC45NS00LjU5LTQuOTUtMy4yNCAwLTUuMDggMy4zMy01LjA4IDcuMzEgMCAyLjA1IDEuMzUgNi4zOCA1LjI0IDYuMzggMi4zMyAwIDQuNTktMi4yNCA0LjU5LTIuOTUtLjAxLS4xMS0uMDEtLjIzLS4xMS0uMjN6bS01LjA4LTkuODFjMS40MiAwIDIuODggMS41NiAyLjg4IDMuMyAwIC40Ni0uMTUuNjItLjUyLjYyaC01LjExYzAtMS43MSAxLjEzLTMuOTIgMi43NS0zLjkyem0tMzEuNy03LjMzYy4xLS4xNi0uMjUtLjI0LS4zNy0uMjQtLjQyIDAtMS4zNy4xMS0xLjguMTEtLjg5IDAtMS42NC0uMDktMi41My0uMDktLjA3IDAtLjQ2LjA1LS40Ni4xOC0uMDEuNjMgMi4xMy0uMTEgMi4xMyAyLjZ2MTAuNTdjMCAzLjEzLS45OSA2LjQxLTUuMjkgNi40MS0zLjA5IDAtNC43Ni0xLjk0LTQuNzYtNi4xN1Y0LjQxYzAtMS45MSAxLjQ5LTEuNDkgMS41Mi0xLjkyLjAzLS40MS0xLjMzLS4xNi0xLjQzLS4xNi0uNzEgMC0xLjIxLjA4LTEuOTUuMDgtLjYyIDAtMS4zNy0uMS0xLjk3LS4xLS4xMiAwLS41My0uMDItLjYxLjE1LS4yMy41NiAxLjkxLjI2IDEuOTEgMS44M3YxMC45MmMwIDQuMDggMS4xNCA4LjA4IDcuMTcgNy45NyA3LjE0LS4xMiA3LjAxLTYuNTQgNy4wMS03LjgzVjUuMTJjLjAxLTIuNDMgMS4yLTIuMiAxLjQzLTIuNTd6bTI4LjE5IDcuMjRjLjE3LS4yLjIyLS41My0uNTctLjQ2LS40NSAwLS43Ny4wOC0xLjIyLjA4LS41NyAwLS42OC0uMDItMS4yMi0uMDQtLjY4LS4wMi0uODYuMDUtLjgyLjI1LjEyLjYgMS41NS4wMSAxLjM2IDEuOC0uMTYgMS41LS42NSAyLjc5LTEuMTQgNC4wN2wtMS43MyA0LjYyLTIuNTQtNy43Yy0uMzEtLjk2LS40NS0xLjQ3LS40NS0xLjU3IDAtLjk2IDEuMTYtLjc1IDEuNDItMS4xNC4xNi0uMjYtLjE3LS40LS41NC0uNC0uMzEgMC0uNjcuMTEtMS42My4xMy0uNzkuMDItMS4zNi4wMi0xLjctLjA1LS44OS0uMTYtLjgyLjMzLS41MS40OHMuNDYuMDEuOTEgMS4zNmwzLjkxIDExLjA2Yy4wOC4yMi4xOC43Ny41Mi43Ny4zOSAwIC4zOS0uMzkuODgtMS42OSAwIDAgMy43NS0xMC40OCA0LTEwLjg2LjUxLS43NC44OS0uNSAxLjA3LS43MXptMTQuNDctLjVjLTEuMDcgMC0xLjggMS4yOC0yLjMzIDIuMTZoLS4wNVY5LjUzYzAtLjMtLjE1LS40OC0uMy0uNDgtLjQxIDAtLjcyLjgxLTIuODcgMS4zMy0uMTMuMDMtLjQ4LjEtLjQ4LjI4IDAgLjY0IDEuODItLjE5IDEuODIgMS45M3Y4LjA3YzAgMS4yNS0xLjI5IDEuMTItMS4yOSAxLjc3IDAgLjE4LjA4LjI3LjI4LjI3LjE3IDAgLjYzLS4xMiAyLjMyLS4xMiAxLjQxIDAgMi4wMi4xMiAyLjM3LjEyLjI4IDAgLjQxLS4wNi40MS0uMzQgMC0uOTgtMi4yNS40OC0yLjI1LTIuMzR2LTYuODhjMC0uNC42LTEuOCAxLjY0LTEuOC45MSAwIDEuMDIuNyAxLjUuNy4zIDAgLjkxLS45MS45MS0xLjM4LS4wMS0uNTgtMS4xNi0xLjM3LTEuNjgtMS4zN3ptMzIuNTUuMWMtLjI3IDAtLjk2LjA0LTEuNTkuMDQtLjc2IDAtMS4xMy0uMDktMS40NS0uMDktLjQ4IDAtLjk2IDAtLjg3LjMyLjEuMzYgMS43My4yMyAxLjczIDIuMDEgMCAuMjMgMCAuNTItLjMzIDEuNzFsLTIuMDggNi42My0yLjktOC4xNXMtLjE0LS4yNi0uMTQtLjc5YzAtMS4zMiAxLjU0LTEuMTcgMS42LTEuNDEuMDUtLjE5LS4yMS0uNC0uNjItLjRoLTMuNjNjLS4wMiAwLS4wMy4wMS0uMDUuMDFoLTIuODFjMC0yLjQxLjAzLTMuMDQtLjM1LTMuMDQtLjM2IDAtLjMuMS0uNjMgMS4xNy0uNTQgMS43OS0yLjUyIDIuNTgtMy4xNSAyLjk3LS4xNS4wOC0uMTUuMTEtLjE1LjE5LS4wMS4yMi43Ni4xNCAyLjMxLjE3bC0uMDEgOC4wN2MwIDMuNDUgMS42NCA0LjAzIDIuODcgNC4wMyAxLjg3IDAgMy4yMS0xLjMzIDMuMjgtMS44IDAtLjI3LS4wNC0uMjktLjE4LS4yNy0uMjYuMTMtLjg1Ljc3LTIuMjguNzctMS4wNyAwLTEuNjgtLjY0LTEuNzQtMlYxMC43czIuNS0uMDEgMy4yMS0uMDFjLjA0LjA2LjA4LjEzLjEuMTlsMi45OSA4LjQ1Yy4yNC42OS4zOS45Mi42OCAyLjE0LjE5Ljc5LjEyIDEuNTEuMTIgMS41MS0uMjkgMS4yNy0xLjA3IDEuOTktMi4yNiA0LjM0LS4xMi4yMiAxLjcxLS4wMiAxLjgxLS4wNS4xNS0uMDUuMTMtLjA5LjMxLS40MmwxLjMyLTMuOTMgMy42OS0xMS4zNGMuNTQtMS45OCAxLjM5LTEuNjIgMS41My0xLjg5LjEyLS4xMyAwLS4zLS4zMy0uM3pcXFwiPlxcbiAgICAgIDwvcGF0aD5cXG4gICAgICA8cGF0aFxcbiAgICAgICAgZD1cXFwiTTIyMi4yMiAyMi43NmwtLjA3LjE5VjIzbC4wNy0uMjR6bS0xNC43NC0xNC42Yy4zMyAwIDEuMDctMS4yIDEuMDctMS41NyAwLS4zNi0uNzQtMS42LTEuMDctMS42LS4zIDAtMS4wNyAxLjI2LTEuMDcgMS42cy43NiAxLjU3IDEuMDcgMS41N3pNMjEwLjExIDIyYy0uNTItLjAzLTEuNjMtLjIzLTEuNjMtMS4zNVY5LjU5YzAtLjMxLS4xNS0uNDktLjMxLS40OS0uNiAwLS45OCAxLjA4LTIuNjMgMS42NC0uMTMuMDMtLjM3LjA2LS4zNy4yNCAwIC42NSAxLjQ5LS42MSAxLjQyIDEuNjl2Ny4yN2MuMDYgMS44Ni0uOTYgMi4wNC0xLjUyIDIuMDQtLjg0LS4wMS0uNjMuMS0uNjMuMzYuMDMuMzEuNTMuMzMgMS4zNy4zNC4yOCAwIDEtLjExIDEuODItLjExIDEuMDcgMCAxLjg3LjEyIDIuNDEuMTIuMzMgMCAuNzYtLjguMDctLjY5ek0xNjYuNTIgOC4xNmMuMzMgMCAxLjA3LTEuMiAxLjA3LTEuNTcgMC0uMzYtLjc0LTEuNi0xLjA3LTEuNi0uMyAwLTEuMDcgMS4yNi0xLjA3IDEuNnMuNzcgMS41NyAxLjA3IDEuNTd6TTE2OS4xNyAyMmMtLjUyLS4wMy0xLjYzLS4yMy0xLjYzLTEuMzVWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0uOTggMS4wOC0yLjYzIDEuNjQtLjEzLjAzLS4zNy4wNi0uMzcuMjQgMCAuNjUgMS40OS0uNjEgMS40MiAxLjY5djcuMjdjLjA2IDEuODYtLjk2IDIuMDQtMS41MiAyLjA0aC0uMTdjLS41NC0uMS0xLjA2LS4zMi0xLjA1LTEuNzl2LTUuMDhjMC0yLjM0LS43Ni01Ljc2LTQuMjItNS43Ni0yLjUxIDAtMy44MSAyLjM4LTMuNzYgMi4wMVY5LjU5YzAtLjMxLS4xNS0uNDktLjMxLS40OS0uNiAwLTEuMDQgMS4wMS0zLjA3IDEuNjItLjEzLjAzLS41LjA0LS41MS4yNyAwIC42NSAyLjAzLS44NCAyIDEuNjh2Ny42NGMwIDItMS4zNSAxLjUyLTEuNjYgMi4wNC0uMTUuMjcuMjUuMzMuNTkuMzMuMzEgMCAuODMtLjEzIDIuMi0uMTMgMS41IDAgMi4wMi4xMyAyLjQ2LjEzLjM5IDAgLjgzLS4xNy41Ny0uNDQtLjQyLS40MS0yLjI4LjA2LTIuMjgtMi4wNnYtNy4wOWMtLjAzLS40OS44OC0yLjQgMy4wNi0yLjQgMi4xIDAgMy4wMyAyLjMxIDMuMDMgMy44NXY1Ljc2Yy0uMDMgMi4yNy0uOCAxLjU1LTEuMTEgMi0uMTcuMjUuMTMuMzcuNDYuMzdzLjg4LS4xMyAxLjg3LS4xM2MxLjI3IDAgMS44Mi4xMiAyLjE2LjEyLjA0IDAgLjA5LS4wMS4xMy0uMDEuMTEgMCAuMjEuMDEuMzQuMDEuMjggMCAxLS4xMSAxLjgyLS4xMSAxLjA3IDAgMS44Ny4xMiAyLjQxLjEyLjM0LjAyLjc1LS43OC4wOC0uNjd6bTMyLjcyLTYuODljLS41MS0uMjQtMS4yNy0uNjgtMS42NS0uODgtMS42My0uODktMi4yNy0xLjQ3LTIuMzEtMi4zLS4wOC0xLjQ0IDEuMTUtMi4xOSAyLjIxLTIuMDggMi41NC0uMDUgMi44OCAyLjggMy4xNCAyLjguMzkgMCAuMjgtLjM3LjI4LTEuMjEgMC0uMjEuMDMtMS4yNy0uMTMtMS41Mi0uMzEtLjQ2LTIuMS0uNzQtMi41NS0uNzQtLjExIDAtLjUyLS4wMS0uNi0uMDItLjEzIDAtLjI4LjAyLS4yOC4wMi0xLjgxLS4wMy0zLjUgMS4xMS0zLjQ1IDMuNTMuMDUgMi4yMSAyLjY0IDMuNDYgNC4wNCA0LjMgMS4wNC41OSAyLjI2IDEuMTUgMi4yNCAyLjU3LS4wMiAxLjYyLTEuMjcgMi42OC0yLjYxIDIuNi0zLjE1LS4wNS0yLjcyLTQtMy4yOC00LS4zOSAwLS4zMSAxLS4zMSAxLjUyIDAgMS4yNS0uMDYgMi4yOC4xIDIuNDYuMDUuMDYuMi4wMy41LjAzLjYyIDAgMS4zOC42OSAzLjE5LjY5IDIuMDMuMDMgMy44NS0xLjg1IDMuODUtNC4xNyAwLTEuNDctLjQyLTIuMzgtMi4zOC0zLjZ6XFxcIj5cXG4gICAgICA8L3BhdGg+XFxuICAgIDwvZz5cXG4gIDwvc3ZnPlxcbjwvZGl2PlxcbjxoZWFkZXIgcm9sZT1cXFwiYmFubmVyXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgIDxhIGNsYXNzPVxcXCJzaXRlLXRpdGxlXFxcIiBocmVmPVxcXCJmaWxlcy9pbmRleC5odG1sXFxcIj5OdXJzZXJ5IFNjaG9vbDwvYT5cXG4gIDwvZGl2PlxcbiAgPGRpdiBpZD1cXFwibWFpbi1tZW51LWNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwibmF2YmFyXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZHJvcGJ0blxcXCI+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcImFib3V0XFxcIiBocmVmPVxcXCJmaWxlcy9hYm91dC5odG1sXFxcIj5BYm91dFxcbiAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJ0dWl0aW9uXFxcIiBocmVmPVxcXCJmaWxlcy90dWl0aW9uLmh0bWxcXFwiPlR1aXRpb248L2E+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcInN0YWZmXFxcIiBocmVmPVxcXCJmaWxlcy9zdGFmZi5odG1sXFxcIj5TdGFmZjwvYT5cXG4gICAgICAgICAgICA8YSBpZD1cXFwicGFyZW50LWhhbmRib29rXFxcIiBocmVmPVxcXCJmaWxlcy9wYXJlbnRfaGFuZGJvb2suaHRtbFxcXCI+UGFyZW50IEhhbmRib29rPC9hPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJkcm9wYnRuXFxcIj5cXG4gICAgICAgICAgICA8YSBpZD1cXFwiY2xhc3Nyb29tc1xcXCIgaHJlZj1cXFwiZmlsZXMvY2xhc3Nyb29tcy5odG1sXFxcIj5DbGFzc3Jvb21zXFxuICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tY29udGVudFxcXCI+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcImN1cnJpY3VsdW0tb3ZlcnZpZXdcXFwiIGhyZWY9XFxcImZpbGVzL2N1cnJpY3VsdW1fb3ZlcnZpZXcuaHRtbFxcXCI+Q3VycmljdWx1bSBPdmVydmlldzwvYT5cXG4gICAgICAgICAgICA8YSBpZD1cXFwidGVkZHktYmVhcnNcXFwiIGhyZWY9XFxcImZpbGVzL3RlZGR5X2JlYXJzLmh0bWxcXFwiPlRlZGR5IEJlYXJzPC9hPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJwYW5kYS1iZWFyc1xcXCIgaHJlZj1cXFwiZmlsZXMvcGFuZGFfYmVhcnMuaHRtbFxcXCI+UGFuZGEgQmVhcnM8L2E+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcImJlYXItY3Vic1xcXCIgaHJlZj1cXFwiZmlsZXMvYmVhcl9jdWJzLmh0bWxcXFwiPkJlYXIgQ3ViczwvYT5cXG4gICAgICAgICAgICA8YSBpZD1cXFwiYmlnLWJlYXJzXFxcIiBocmVmPVxcXCJmaWxlcy9iaWdfYmVhcnMuaHRtbFxcXCI+QmlnIEJlYXJzPC9hPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJzdW4tYmVhcnNcXFwiIGhyZWY9XFxcImZpbGVzL3N1bl9iZWFycy5odG1sXFxcIj5TdW4gQmVhcnM8L2E+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcImJlYXItdHJhY2tzXFxcIiBocmVmPVxcXCJmaWxlcy9iZWFyX3RyYWNrcy5odG1sXFxcIj5CZWFyIFRyYWNrczwvYT5cXG4gICAgICAgICAgICA8YSBpZD1cXFwiZW5yaWNobWVudC1wcm9ncmFtXFxcIiBocmVmPVxcXCJmaWxlcy9lbnJpY2htZW50X3Byb2dyYW1zLmh0bWxcXFwiPkVucmljaG1lbnQgUHJvZ3JhbTwvYT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxhIGlkPVxcXCJjYWxlbmRhclxcXCIgaHJlZj1cXFwiZmlsZXMvY2FsZW5kYXIuaHRtbFxcXCI+Q2FsZW5kYXI8L2E+XFxuICAgICAgICA8YSBpZD1cXFwic3VtbWVyLWNhbXBcXFwiIGhyZWY9XFxcImZpbGVzL3N1bW1lcl9jYW1wLmh0bWxcXFwiPlN1bW1lciBDYW1wPC9hPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJkcm9wYnRuXFxcIj5cXG4gICAgICAgICAgICA8YSBpZD1cXFwiZ2V0LWludm9sdmVkXFxcIiBocmVmPVxcXCJmaWxlcy9nZXRfaW52b2x2ZWQuaHRtbFxcXCI+R2V0IEludm9sdmVkPC9hPlxcbiAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tY29udGVudFxcXCI+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcIm51cnNlcnktc2Nob29sLW1lcmNoYW5kaXNlXFxcIiBocmVmPVxcXCJmaWxlcy9udXJzZXJ5X3NjaG9vbF9tZXJjaGFuZGlzZS5odG1sXFxcIj5OdXJzZXJ5IFNjaG9vbFxcbiAgICAgICAgICAgICAgTWVyY2hhbmRpc2U8L2E+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcInBhcmVudC1hc3NvY2lhdGlvblxcXCIgaHJlZj1cXFwiZmlsZXMvcGFyZW50X2Fzc29jaWF0aW9uLmh0bWxcXFwiPlBhcmVudCBBc3NvY2lhdGlvbjwvYT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDxhIGlkPVxcXCJhcHBseVxcXCIgaHJlZj1cXFwiZmlsZXMvYXBwbHkuaHRtbFxcXCI+QXBwbHk8L2E+XFxuICAgICAgICA8YSBpZD1cXFwiZm9ybXNcXFwiIGhyZWY9XFxcImZpbGVzL2Zvcm1zLmh0bWxcXFwiPkZvcm1zPC9hPlxcblxcbiAgICAgICAgPGEgaWQ9XFxcInBhcmVudC1yZXNvdXJjZXNcXFwiIGhyZWY9XFxcImZpbGVzL3BhcmVudF9yZXNvdXJjZXMuaHRtbFxcXCI+UGFyZW50IFJlc291cmNlczwvYT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2hlYWRlcj5cIjtcbiIsImltcG9ydCB7IEQgfSBmcm9tIFwiLi8uLi9jb3JlL2RvbS9kb2N1bWVudFwiO1xuXG5leHBvcnQgY2xhc3MgU2xpZGVzaG93IHtcbiAgcHVibGljIHN0YXRpYyBzZXR1cEFsbCgpIHtcbiAgICBTbGlkZXNob3cuZGlzY2FyZEFsbCgpO1xuICAgIGNvbnN0IHNsaWRlc2hvd3MgPSBELmNsYXooXCJzbGlkZXNob3dcIik7XG4gICAgZm9yIChsZXQgc3NJbmRleCA9IDA7IHNzSW5kZXggPCBzbGlkZXNob3dzLmxlbmd0aDsgKytzc0luZGV4KSB7XG4gICAgICBjb25zdCBlbGVtID0gc2xpZGVzaG93cy5pdGVtKHNzSW5kZXgpO1xuICAgICAgaWYgKGVsZW0gPT0gbnVsbCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIFNsaWRlc2hvdy5zbGlkZXNob3dzLnB1c2gobmV3IFNsaWRlc2hvdyhlbGVtKSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkaXNjYXJkQWxsKCkge1xuICAgIFNsaWRlc2hvdy5zbGlkZXNob3dzID0gW107XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBzbGlkZXNob3dzOiBTbGlkZXNob3dbXSA9IFtdO1xuXG4gIHByaXZhdGUgc2xpZGVJbmRleCA9IDA7XG4gIHByaXZhdGUgc2xpZGVDb3VudCA9IDA7XG4gIHByaXZhdGUgc2xpZGVzOiBFbGVtZW50W10gPSBbXTtcbiAgcHJpdmF0ZSBkb3RzOiBFbGVtZW50W10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG91dGVyOiBFbGVtZW50KSB7XG4gICAgRC5lYWNoUmVjdXIodGhpcy5vdXRlciwgKGVsZW0pID0+IHtcbiAgICAgIGNvbnN0IGNMaXN0ID0gZWxlbS5jbGFzc0xpc3Q7XG4gICAgICBpZiAoY0xpc3QuY29udGFpbnMoXCJwcmV2LXNsaWRlc2hvdy1idXR0b25cIikpIHtcbiAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sIFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5taW51c1NsaWRlKDEpKTtcbiAgICAgIH0gZWxzZSBpZiAoY0xpc3QuY29udGFpbnMoXCJuZXh0LXNsaWRlc2hvdy1idXR0b25cIikpIHtcbiAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sIFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5wbHVzU2xpZGUoMSkpO1xuICAgICAgfSBlbHNlIGlmIChjTGlzdC5jb250YWlucyhcInNsaWRlc2hvdy1lbnRyeVwiKSkge1xuICAgICAgICB0aGlzLnNsaWRlcy5wdXNoKGVsZW0pO1xuICAgICAgfSBlbHNlIGlmIChjTGlzdC5jb250YWlucyhcInNsaWRlc2hvdy1kb3RcIikpIHtcbiAgICAgICAgdGhpcy5kb3RzLnB1c2goZWxlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRvdHMubGVuZ3RoOyArK2kpIHtcbiAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmRvdHNbaV0sIFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zaG93U2xpZGUoaSkpO1xuICAgIH1cbiAgICB0aGlzLnNsaWRlQ291bnQgPSB0aGlzLnNsaWRlcy5sZW5ndGg7XG4gICAgdGhpcy5zaG93U2xpZGUodGhpcy5zbGlkZUluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBwbHVzU2xpZGUobjogbnVtYmVyKSB7XG4gICAgdGhpcy5zaG93U2xpZGUoKHRoaXMuc2xpZGVJbmRleCArPSBuKSk7XG4gIH1cbiAgcHVibGljIG1pbnVzU2xpZGUobjogbnVtYmVyKSB7XG4gICAgdGhpcy5zaG93U2xpZGUoKHRoaXMuc2xpZGVJbmRleCAtPSBuKSk7XG4gIH1cbiAgcHVibGljIHNob3dTbGlkZShpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5zbGlkZUluZGV4ID0gaW5kZXggJSB0aGlzLnNsaWRlQ291bnQ7XG4gICAgdGhpcy5zbGlkZUluZGV4ID0gTWF0aC5tYXgodGhpcy5zbGlkZUluZGV4LCAtMSAqIHRoaXMuc2xpZGVJbmRleCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNsaWRlcy5sZW5ndGg7ICsraSkge1xuICAgICAgKHRoaXMuc2xpZGVzW2ldIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmRvdHNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gICAgKHRoaXMuc2xpZGVzW3RoaXMuc2xpZGVJbmRleF0gYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgdGhpcy5kb3RzW3RoaXMuc2xpZGVJbmRleF0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgcGFyYW1zIH0gZnJvbSAnLi4vY29yZS91dGlscy9xX3BhcmFtcyc7XG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi8uLi9jb3JlL2RhdGEtbG9nL2RhdGEnO1xuaW1wb3J0IHsgQWN0aW9uRW51bSB9IGZyb20gJy4vLi4vY29yZS9kYXRhLWxvZy9ldmVudCc7XG5pbXBvcnQgeyBEIH0gZnJvbSAnLi8uLi9jb3JlL2RvbS9kb2N1bWVudCc7XG5pbXBvcnQgeyBFbGVtZW50cyB9IGZyb20gJy4vLi4vY29yZS9kb20vZWxlbWVudHMnO1xuaW1wb3J0IHsgU2Nyb2xsIH0gZnJvbSAnLi8uLi9jb3JlL2RvbS9zY3JvbGwnO1xuaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gJy4vLi4vY29yZS9yb3V0ZXIvaGlzdG9yeSc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlck1vZGUsIFJvdXRlck1vZHVsZSB9IGZyb20gJy4vLi4vY29yZS9yb3V0ZXIvcm91dGVyJztcbmltcG9ydCB7IFRyYWNrZXIgfSBmcm9tICcuLy4uL2NvcmUvdHJhY2tlci90cmFja2VyJztcbmltcG9ydCB7IERlYnVnTGV2ZWxFbnVtIH0gZnJvbSAnLi8uLi9jb3JlL3V0aWxzL2NvbnNvbGVfd3JhcHBlcic7XG5pbXBvcnQgeyBIVE1MTG9hZGVyIH0gZnJvbSAnLi8uLi9jb3JlL3V0aWxzL2h0bWxfbG9hZGVyJztcbmltcG9ydCB7IElER2VuZXJhdG9yIH0gZnJvbSAnLi8uLi9jb3JlL3V0aWxzL2lkX2dlbmVyYXRvcic7XG5pbXBvcnQgeyB3YWl0VW50aWxSZWFkeSB9IGZyb20gJy4vLi4vY29yZS91dGlscy9yZWFkeSc7XG5pbXBvcnQgeyBzY2VuYXJpb3MsIFNjZW5hcmlvIH0gZnJvbSAnLi8uLi9jb3JlL3V0aWxzL3NjZW5hcmlvcyc7XG5cbmNvbnN0IHNldHVwID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHdhaXRVbnRpbFJlYWR5KCk7XG4gICAgY29uc3Qgc2NlbmFyaW8gPSBzY2VuYXJpb3MuZmluZCgoc2NlbikgPT4gc2Nlbi50YWcgPT09IHBhcmFtcy50YWcpO1xuICAgIGlmICghcGFyYW1zLnNhbmRib3gpIHtcbiAgICAgICAgaWYgKHNjZW5hcmlvID09PSBudWxsIHx8IHNjZW5hcmlvID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdUaGlzIEhJVCBpcyBicm9rZW4gYW5kIGNhbm5vdCBiZSBjb21wbGV0ZWQgYXQgdGhpcyB0aW1lLicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgVHJhY2tlci5sb2FkU2NlbmFyaW8oc2NlbmFyaW8gYXMgU2NlbmFyaW8pO1xuICAgICAgICB9XG4gICAgfVxuICAgIFRyYWNrZXIuc3RhcnQoe1xuICAgICAgICBrZXlQcmVmaXg6ICdpbmZvcm1hdGlvbi1mb3JhZ2luZycsXG4gICAgICAgIGJ1Y2tldE5hbWU6ICdjc2UtMjU2LWxvZycsXG4gICAgICAgIGFsbG93U3VibWlzc2lvbjoge1xuICAgICAgICAgICAgYWxsb3coKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dEFyZWEgPSBELmlkKCd0ZXh0LWFyZWEnKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXh0QXJlYS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0QXJlYS52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnWW91IG11c3QgZmlsbCBvdXQgdGhlIHRleHQgYm94IHRvIHR1cm4gdGhpcyBISVQgaW4uJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1RoZXJlIHdhcyBhbiBlcnJvciBmaWxsIG91dCB0aGUgZm9ybSBhbmQgdHJ5IGFnYWluLic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByZVN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICBkYXRhLmRhdGEucmVzcG9uc2UgPSAoRC5pZChcbiAgICAgICAgICAgICAgICAgICAgJ3RleHQtYXJlYSdcbiAgICAgICAgICAgICAgICApIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQpLnZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVidWdMZXZlbDogRGVidWdMZXZlbEVudW0uTk9ORSxcblxuICAgICAgICBhc3luYyBzZXR1cCgpIHtcbiAgICAgICAgICAgIC8vIGNvbmZpZ3VyZSByb3V0ZXJcbiAgICAgICAgICAgIFJvdXRlci5kZWZhdWx0QWxsb3dhbmNlc09uKCk7XG4gICAgICAgICAgICBSb3V0ZXIuY29uZmlndXJlKFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogUm91dGVyTW9kZS5TVEFOREFSRF9BTExPV0FOQ0VTLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlOiBSb3V0ZXJNb2R1bGUuQSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBtb2RlOiBSb3V0ZXJNb2RlLk9GRiwgbW9kdWxlOiBSb3V0ZXJNb2R1bGUuRk9STSB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiBSb3V0ZXJNb2RlLlNUQU5EQVJEX0FMTE9XQU5DRVMsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU6IFJvdXRlck1vZHVsZS5JTUcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAnZmlsZXMvJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIEhpc3Rvcnkuc2V0dXAod2luZG93LmxvY2F0aW9uLmhyZWYsIHsgd3JhcHBlcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIC8vIGNvbmZpZ3VyZSBodG1sIGxvYWRlciBwb3N0IG9wZXJhdGlvblxuICAgICAgICAgICAgSFRNTExvYWRlci5maW5pc2goKTtcbiAgICAgICAgICAgIEhUTUxMb2FkZXIucmVnaXN0ZXJQb3N0TG9hZEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgIElER2VuZXJhdG9yLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgSURHZW5lcmF0b3IuYXR0YWNoSWRzVG9BbGxFbGVtZW50cygpO1xuICAgICAgICAgICAgICAgIFJvdXRlci5zZXR1cChFbGVtZW50cy5odG1sTG9jKTtcbiAgICAgICAgICAgICAgICBTY3JvbGwucHJvbWlzZSgwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gY29uZmlndXJlIGxpc3RlbmVycyBvbiBodG1sIGxvY1xuICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKEVsZW1lbnRzLmh0bWxMb2MsIEFjdGlvbkVudW0uQ0xJQ0ssIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXYgPSBlIGFzIE1vdXNlRXZlbnQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiBldi5jbGllbnRYLFxuICAgICAgICAgICAgICAgICAgICB5OiBldi5jbGllbnRZLFxuICAgICAgICAgICAgICAgICAgICBpZDogKGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuaWQsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBUcmFja2VyLmdldEV2ZW50RGlzcGF0Y2hGdW5jKEFjdGlvbkVudW0uQ0xJQ0spKG9iaik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihFbGVtZW50cy5kb2N1bWVudCwgJ2tleXByZXNzJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBldiA9IGUgYXMgS2V5Ym9hcmRFdmVudDtcbiAgICAgICAgICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogZXYua2V5LFxuICAgICAgICAgICAgICAgICAgICBpZDogKGV2LnNyY0VsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmlkLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgVHJhY2tlci5nZXRFdmVudERpc3BhdGNoRnVuYyhBY3Rpb25FbnVtLkJVVFRPTikob2JqKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gU1BFQ0lBTCBDQVNFOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgZG9lcyBub3QgYmVoYXZlIHRoZSBzYW1lIHdheSBhcyBkb2N1bWVudCBzbyB0aGUgYmVsb3cgZnVuY3Rpb24gbXVzdCBiZWhhdmUgZGlmZmVyZW50bHkgdGhhbiB0aGUgbGlzdGVuZXJzIGFib3ZlLlxuICAgICAgICAgICAgY29uc3Qgc0VsZW0gPSBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50IGFzIEVsZW1lbnQ7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGR4ID0gc0VsZW0uc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgICAgICBjb25zdCBkeSA9IHNFbGVtLnNjcm9sbFRvcDtcbiAgICAgICAgICAgICAgICBjb25zdCBkdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5hYnMoVHJhY2tlci5sYXN0UG9zLnggLSBkeCkgPiAxMCB8fFxuICAgICAgICAgICAgICAgICAgICAoTWF0aC5hYnMoVHJhY2tlci5sYXN0UG9zLnkgLSBkeSkgPiAxMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgZHRpbWUgLSBUcmFja2VyLmxhc3RQb3MudGltZSA+IDEwMClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgVHJhY2tlci5sYXN0UG9zLnggPSBkeDtcbiAgICAgICAgICAgICAgICAgICAgVHJhY2tlci5sYXN0UG9zLnkgPSBkeTtcbiAgICAgICAgICAgICAgICAgICAgVHJhY2tlci5sYXN0UG9zLnRpbWUgPSBkdGltZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqID0geyB4OiBkeCwgeTogZHkgfTtcbiAgICAgICAgICAgICAgICAgICAgVHJhY2tlci5nZXRFdmVudERpc3BhdGNoRnVuYyhBY3Rpb25FbnVtLlNDUk9MTCkob2JqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIGNvbmZpZ3VyZSB0cmFja2VkIGV2ZW50c1xuICAgICAgICAgICAgVHJhY2tlci5yZWdpc3RlckV2ZW50KEFjdGlvbkVudW0uSElTVE9SWSk7XG4gICAgICAgICAgICBUcmFja2VyLnJlZ2lzdGVyRXZlbnQoQWN0aW9uRW51bS5CVVRUT04pO1xuICAgICAgICAgICAgVHJhY2tlci5yZWdpc3RlckV2ZW50KEFjdGlvbkVudW0uQ0xJQ0spO1xuICAgICAgICAgICAgVHJhY2tlci5yZWdpc3RlckV2ZW50KEFjdGlvbkVudW0uU0NST0xMKTtcbiAgICAgICAgICAgIC8vIGxvYWQgZmlyc3QgcGFnZVxuICAgICAgICAgICAgYXdhaXQgUm91dGVyLmxvYWQoJ2ZpbGVzL2luZGV4Lmh0bWwnKTtcbiAgICAgICAgfSxcbiAgICB9KTtcbn07XG5cbnNldHVwKCk7XG4iXX0=
