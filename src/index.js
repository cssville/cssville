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
function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    }
    else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}
var hasCopied = false;
var entityMap = new Map(Object.entries({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
}));
function escape_html(source) {
    return String(source).replace(/[&<>"'\/]/g, function (s) { return entityMap.get(s); });
}
docReady(function () {
    var _a;
    console.log("doc ready");
    var ex = document.getElementById("example");
    var exCode = document.getElementById("example-code");
    console.log(ex.innerHTML);
    console.log(escape_html(ex.innerHTML));
    exCode.innerHTML = escape_html(ex.innerHTML);
    (_a = document.getElementById("copy")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        return __awaiter(this, void 0, void 0, function () {
            var copyText, copyIcon;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        copyText = document.getElementById("input-copy");
                        copyIcon = document.getElementById("copy-icon");
                        if (!navigator.clipboard) return [3 /*break*/, 2];
                        return [4 /*yield*/, navigator.clipboard.writeText(copyText.innerText)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        copyText.select();
                        copyText.setSelectionRange(0, 99999);
                        document.execCommand("copy");
                        _a.label = 3;
                    case 3:
                        if (!hasCopied) {
                            hasCopied = true;
                            copyIcon.src = "copied.svg";
                            setTimeout(function () {
                                hasCopied = false;
                                copyIcon.src = "copy.svg";
                            }, 2000);
                        }
                        return [2 /*return*/];
                }
            });
        });
    }, false);
});
