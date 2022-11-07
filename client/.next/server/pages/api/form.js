"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 3934:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body; // Optional logging to see the responses
  // in the command line where next.js app is running.

  console.log('body: ', body); // Guard clause checks for first and last name,
  // and returns early if they are not found

  if (!body.first || !body.last) {
    // Sends a HTTP bad request error code
    return res.status(400).json({
      data: 'First or last name not found'
    });
  } // Found the name.
  // Sends a HTTP success code


  res.status(200).json({
    data: `${body.first} ${body.last}`
  });
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3934));
module.exports = __webpack_exports__;

})();