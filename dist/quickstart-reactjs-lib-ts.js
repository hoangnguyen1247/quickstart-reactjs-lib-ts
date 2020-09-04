(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['Quickstart reactjs lib ts'] = {}, global.React));
}(this, (function (exports, React) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

    function Alert() {
        {
            return (React__default['default'].createElement("div", null, "Hello"));
        }
    }

    exports.Alert = Alert;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=quickstart-reactjs-lib-ts.js.map
