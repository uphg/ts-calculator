/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buttonText = void 0;
var buttonText;
(function (buttonText) {
    buttonText["clear"] = "clear";
    buttonText["divide"] = "divide";
    buttonText["multiply"] = "multiply";
    buttonText["subtract"] = "subtract";
    buttonText["add"] = "add";
    buttonText["point"] = "point";
    buttonText["equal"] = "equal";
})(buttonText = exports.buttonText || (exports.buttonText = {}));


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var enum_1 = __webpack_require__(1);
var createData = function (name, type, text) {
    if (type === void 0) { type = 'number'; }
    if (text === void 0) { text = name; }
    return ({ name: name, type: type, text: text });
};
var buttons = [
    [
        createData(enum_1.buttonText.clear, 'operator', 'Clear'),
        createData(enum_1.buttonText.divide, 'operator', '÷'),
    ],
    [
        createData('7'),
        createData('8'),
        createData('9'),
        createData(enum_1.buttonText.multiply, 'operator', '×'),
    ],
    [
        createData('4'),
        createData('5'),
        createData('6'),
        createData(enum_1.buttonText.subtract, 'operator', '-'),
    ],
    [
        createData('1'),
        createData('2'),
        createData('3'),
        createData(enum_1.buttonText.add, 'operator', '+'),
    ],
    [
        createData('0'),
        createData(enum_1.buttonText.point, 'number', '.'),
        createData(enum_1.buttonText.equal, 'operator', '='),
    ]
];
exports.default = buttons;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
var enum_1 = __webpack_require__(1);
var buttons_1 = __webpack_require__(2);
function createElement(labelName, attribute) {
    var el = document.createElement(labelName);
    if (attribute) {
        for (var key in attribute)
            if (Object.hasOwnProperty.call(attribute, key)) {
                el[key] = attribute[key];
            }
    }
    return el;
}
var beforeNumber, afterNumber, mark;
var container = createElement('div', { id: 'container' });
document.body.appendChild(container);
var output = createElement('div', { className: 'output' });
var span = createElement('span', {
    textContent: '0',
    className: 'output-span'
});
output.appendChild(span);
container.appendChild(output);
container.addEventListener('click', function (event) {
    if (event.target instanceof HTMLButtonElement) {
        var text = event.target.textContent;
        var el = event.target;
        var name_1 = el.getAttribute('data-name');
        console.log("name");
        console.log(name_1);
        if (el.getAttribute('data-name') === enum_1.buttonText.add) {
            console.log('添加按钮');
        }
        if ('0123456789'.indexOf(text) >= 0) {
            if (mark) {
                afterNumber = text;
            }
            else {
                beforeNumber = text;
            }
        }
        else if ([].indexOf(text)) {
        }
    }
});
buttons_1.default.forEach(function (item) {
    var div = createElement('div', { className: 'row' });
    item.forEach(function (button) {
        var buttonEl = createElement('button', {
            className: "button text-" + button.name,
            textContent: button.text
        });
        buttonEl.setAttribute('data-type', button.type);
        buttonEl.setAttribute('data-name', button.name);
        div.appendChild(buttonEl);
    });
    container.appendChild(div);
});

})();

/******/ })()
;