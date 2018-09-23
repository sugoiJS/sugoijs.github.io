(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["documentation-documentation-module"],{

/***/ "./node_modules/@angular/common/fesm5/http.js":
/*!****************************************************!*\
  !*** ./node_modules/@angular/common/fesm5/http.js ***!
  \****************************************************/
/*! exports provided: ɵangular_packages_common_http_http_a, ɵangular_packages_common_http_http_b, ɵangular_packages_common_http_http_c, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_g, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_f, HttpBackend, HttpHandler, HttpClient, HttpHeaders, HTTP_INTERCEPTORS, JsonpClientBackend, JsonpInterceptor, HttpClientJsonpModule, HttpClientModule, HttpClientXsrfModule, ɵHttpInterceptingHandler, HttpParams, HttpUrlEncodingCodec, HttpRequest, HttpErrorResponse, HttpEventType, HttpHeaderResponse, HttpResponse, HttpResponseBase, HttpXhrBackend, XhrFactory, HttpXsrfTokenExtractor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_a", function() { return NoopInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_b", function() { return JsonpCallbackContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_c", function() { return jsonpCallbackContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_d", function() { return BrowserXhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_g", function() { return HttpXsrfCookieExtractor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_h", function() { return HttpXsrfInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_e", function() { return XSRF_COOKIE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_f", function() { return XSRF_HEADER_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpBackend", function() { return HttpBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHandler", function() { return HttpHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClient", function() { return HttpClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaders", function() { return HttpHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_INTERCEPTORS", function() { return HTTP_INTERCEPTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpClientBackend", function() { return JsonpClientBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpInterceptor", function() { return JsonpInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientJsonpModule", function() { return HttpClientJsonpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientModule", function() { return HttpClientModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientXsrfModule", function() { return HttpClientXsrfModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵHttpInterceptingHandler", function() { return HttpInterceptingHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpParams", function() { return HttpParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpUrlEncodingCodec", function() { return HttpUrlEncodingCodec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequest", function() { return HttpRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorResponse", function() { return HttpErrorResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpEventType", function() { return HttpEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaderResponse", function() { return HttpHeaderResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponse", function() { return HttpResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponseBase", function() { return HttpResponseBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXhrBackend", function() { return HttpXhrBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrFactory", function() { return XhrFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXsrfTokenExtractor", function() { return HttpXsrfTokenExtractor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @license Angular v6.0.7
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */







/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
 * `HttpResponse`.
 *
 * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
 * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
 * `HttpBackend`.
 *
 * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
 *
 *
 */
var HttpHandler = /** @class */ (function () {
    function HttpHandler() {
    }
    return HttpHandler;
}());
/**
 * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
 *
 * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
 *
 * When injected, `HttpBackend` dispatches requests directly to the backend, without going
 * through the interceptor chain.
 *
 *
 */
var HttpBackend = /** @class */ (function () {
    function HttpBackend() {
    }
    return HttpBackend;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Immutable set of Http headers, with lazy parsing.
 *
 */
var HttpHeaders = /** @class */ (function () {
    function HttpHeaders(headers) {
        var _this = this;
        /**
         * Internal map of lowercased header names to the normalized
         * form of the name (the form seen first).
         */
        this.normalizedNames = new Map();
        /**
         * Queued updates to be materialized the next initialization.
         */
        this.lazyUpdate = null;
        if (!headers) {
            this.headers = new Map();
        }
        else if (typeof headers === 'string') {
            this.lazyInit = function () {
                _this.headers = new Map();
                headers.split('\n').forEach(function (line) {
                    var index = line.indexOf(':');
                    if (index > 0) {
                        var name_1 = line.slice(0, index);
                        var key = name_1.toLowerCase();
                        var value = line.slice(index + 1).trim();
                        _this.maybeSetNormalizedName(name_1, key);
                        if (_this.headers.has(key)) {
                            _this.headers.get(key).push(value);
                        }
                        else {
                            _this.headers.set(key, [value]);
                        }
                    }
                });
            };
        }
        else {
            this.lazyInit = function () {
                _this.headers = new Map();
                Object.keys(headers).forEach(function (name) {
                    var values = headers[name];
                    var key = name.toLowerCase();
                    if (typeof values === 'string') {
                        values = [values];
                    }
                    if (values.length > 0) {
                        _this.headers.set(key, values);
                        _this.maybeSetNormalizedName(name, key);
                    }
                });
            };
        }
    }
    /**
     * Checks for existence of header by given name.
     */
    HttpHeaders.prototype.has = function (name) {
        this.init();
        return this.headers.has(name.toLowerCase());
    };
    /**
     * Returns first header that matches given name.
     */
    HttpHeaders.prototype.get = function (name) {
        this.init();
        var values = this.headers.get(name.toLowerCase());
        return values && values.length > 0 ? values[0] : null;
    };
    /**
     * Returns the names of the headers
     */
    HttpHeaders.prototype.keys = function () {
        this.init();
        return Array.from(this.normalizedNames.values());
    };
    /**
     * Returns list of header values for a given name.
     */
    HttpHeaders.prototype.getAll = function (name) {
        this.init();
        return this.headers.get(name.toLowerCase()) || null;
    };
    HttpHeaders.prototype.append = function (name, value) {
        return this.clone({ name: name, value: value, op: 'a' });
    };
    HttpHeaders.prototype.set = function (name, value) {
        return this.clone({ name: name, value: value, op: 's' });
    };
    HttpHeaders.prototype.delete = function (name, value) {
        return this.clone({ name: name, value: value, op: 'd' });
    };
    HttpHeaders.prototype.maybeSetNormalizedName = function (name, lcName) {
        if (!this.normalizedNames.has(lcName)) {
            this.normalizedNames.set(lcName, name);
        }
    };
    HttpHeaders.prototype.init = function () {
        var _this = this;
        if (!!this.lazyInit) {
            if (this.lazyInit instanceof HttpHeaders) {
                this.copyFrom(this.lazyInit);
            }
            else {
                this.lazyInit();
            }
            this.lazyInit = null;
            if (!!this.lazyUpdate) {
                this.lazyUpdate.forEach(function (update) { return _this.applyUpdate(update); });
                this.lazyUpdate = null;
            }
        }
    };
    HttpHeaders.prototype.copyFrom = function (other) {
        var _this = this;
        other.init();
        Array.from(other.headers.keys()).forEach(function (key) {
            _this.headers.set(key, other.headers.get(key));
            _this.normalizedNames.set(key, other.normalizedNames.get(key));
        });
    };
    HttpHeaders.prototype.clone = function (update) {
        var clone = new HttpHeaders();
        clone.lazyInit =
            (!!this.lazyInit && this.lazyInit instanceof HttpHeaders) ? this.lazyInit : this;
        clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
        return clone;
    };
    HttpHeaders.prototype.applyUpdate = function (update) {
        var key = update.name.toLowerCase();
        switch (update.op) {
            case 'a':
            case 's':
                var value = update.value;
                if (typeof value === 'string') {
                    value = [value];
                }
                if (value.length === 0) {
                    return;
                }
                this.maybeSetNormalizedName(update.name, key);
                var base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
                base.push.apply(base, Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spread"])(value));
                this.headers.set(key, base);
                break;
            case 'd':
                var toDelete_1 = update.value;
                if (!toDelete_1) {
                    this.headers.delete(key);
                    this.normalizedNames.delete(key);
                }
                else {
                    var existing = this.headers.get(key);
                    if (!existing) {
                        return;
                    }
                    existing = existing.filter(function (value) { return toDelete_1.indexOf(value) === -1; });
                    if (existing.length === 0) {
                        this.headers.delete(key);
                        this.normalizedNames.delete(key);
                    }
                    else {
                        this.headers.set(key, existing);
                    }
                }
                break;
        }
    };
    /**
     * @internal
     */
    HttpHeaders.prototype.forEach = function (fn) {
        var _this = this;
        this.init();
        Array.from(this.normalizedNames.keys())
            .forEach(function (key) { return fn(_this.normalizedNames.get(key), _this.headers.get(key)); });
    };
    return HttpHeaders;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A `HttpParameterCodec` that uses `encodeURIComponent` and `decodeURIComponent` to
 * serialize and parse URL parameter keys and values.
 *
 *
 */
var HttpUrlEncodingCodec = /** @class */ (function () {
    function HttpUrlEncodingCodec() {
    }
    HttpUrlEncodingCodec.prototype.encodeKey = function (k) { return standardEncoding(k); };
    HttpUrlEncodingCodec.prototype.encodeValue = function (v) { return standardEncoding(v); };
    HttpUrlEncodingCodec.prototype.decodeKey = function (k) { return decodeURIComponent(k); };
    HttpUrlEncodingCodec.prototype.decodeValue = function (v) { return decodeURIComponent(v); };
    return HttpUrlEncodingCodec;
}());
function paramParser(rawParams, codec) {
    var map$$1 = new Map();
    if (rawParams.length > 0) {
        var params = rawParams.split('&');
        params.forEach(function (param) {
            var eqIdx = param.indexOf('=');
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__read"])(eqIdx == -1 ?
                [codec.decodeKey(param), ''] :
                [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))], 2), key = _a[0], val = _a[1];
            var list = map$$1.get(key) || [];
            list.push(val);
            map$$1.set(key, list);
        });
    }
    return map$$1;
}
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * An HTTP request/response body that represents serialized parameters,
 * per the MIME type `application/x-www-form-urlencoded`.
 *
 * This class is immutable - all mutation operations return a new instance.
 *
 *
 */
var HttpParams = /** @class */ (function () {
    function HttpParams(options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        this.updates = null;
        this.cloneFrom = null;
        this.encoder = options.encoder || new HttpUrlEncodingCodec();
        if (!!options.fromString) {
            if (!!options.fromObject) {
                throw new Error("Cannot specify both fromString and fromObject.");
            }
            this.map = paramParser(options.fromString, this.encoder);
        }
        else if (!!options.fromObject) {
            this.map = new Map();
            Object.keys(options.fromObject).forEach(function (key) {
                var value = options.fromObject[key];
                _this.map.set(key, Array.isArray(value) ? value : [value]);
            });
        }
        else {
            this.map = null;
        }
    }
    /**
     * Check whether the body has one or more values for the given parameter name.
     */
    HttpParams.prototype.has = function (param) {
        this.init();
        return this.map.has(param);
    };
    /**
     * Get the first value for the given parameter name, or `null` if it's not present.
     */
    HttpParams.prototype.get = function (param) {
        this.init();
        var res = this.map.get(param);
        return !!res ? res[0] : null;
    };
    /**
     * Get all values for the given parameter name, or `null` if it's not present.
     */
    HttpParams.prototype.getAll = function (param) {
        this.init();
        return this.map.get(param) || null;
    };
    /**
     * Get all the parameter names for this body.
     */
    HttpParams.prototype.keys = function () {
        this.init();
        return Array.from(this.map.keys());
    };
    /**
     * Construct a new body with an appended value for the given parameter name.
     */
    HttpParams.prototype.append = function (param, value) { return this.clone({ param: param, value: value, op: 'a' }); };
    /**
     * Construct a new body with a new value for the given parameter name.
     */
    HttpParams.prototype.set = function (param, value) { return this.clone({ param: param, value: value, op: 's' }); };
    /**
     * Construct a new body with either the given value for the given parameter
     * removed, if a value is given, or all values for the given parameter removed
     * if not.
     */
    HttpParams.prototype.delete = function (param, value) { return this.clone({ param: param, value: value, op: 'd' }); };
    /**
     * Serialize the body to an encoded string, where key-value pairs (separated by `=`) are
     * separated by `&`s.
     */
    HttpParams.prototype.toString = function () {
        var _this = this;
        this.init();
        return this.keys()
            .map(function (key) {
            var eKey = _this.encoder.encodeKey(key);
            return _this.map.get(key).map(function (value) { return eKey + '=' + _this.encoder.encodeValue(value); })
                .join('&');
        })
            .join('&');
    };
    HttpParams.prototype.clone = function (update) {
        var clone = new HttpParams({ encoder: this.encoder });
        clone.cloneFrom = this.cloneFrom || this;
        clone.updates = (this.updates || []).concat([update]);
        return clone;
    };
    HttpParams.prototype.init = function () {
        var _this = this;
        if (this.map === null) {
            this.map = new Map();
        }
        if (this.cloneFrom !== null) {
            this.cloneFrom.init();
            this.cloneFrom.keys().forEach(function (key) { return _this.map.set(key, _this.cloneFrom.map.get(key)); });
            this.updates.forEach(function (update) {
                switch (update.op) {
                    case 'a':
                    case 's':
                        var base = (update.op === 'a' ? _this.map.get(update.param) : undefined) || [];
                        base.push(update.value);
                        _this.map.set(update.param, base);
                        break;
                    case 'd':
                        if (update.value !== undefined) {
                            var base_1 = _this.map.get(update.param) || [];
                            var idx = base_1.indexOf(update.value);
                            if (idx !== -1) {
                                base_1.splice(idx, 1);
                            }
                            if (base_1.length > 0) {
                                _this.map.set(update.param, base_1);
                            }
                            else {
                                _this.map.delete(update.param);
                            }
                        }
                        else {
                            _this.map.delete(update.param);
                            break;
                        }
                }
            });
            this.cloneFrom = null;
        }
    };
    return HttpParams;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Determine whether the given HTTP method may include a body.
 */
function mightHaveBody(method) {
    switch (method) {
        case 'DELETE':
        case 'GET':
        case 'HEAD':
        case 'OPTIONS':
        case 'JSONP':
            return false;
        default:
            return true;
    }
}
/**
 * Safely assert whether the given value is an ArrayBuffer.
 *
 * In some execution environments ArrayBuffer is not defined.
 */
function isArrayBuffer(value) {
    return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
}
/**
 * Safely assert whether the given value is a Blob.
 *
 * In some execution environments Blob is not defined.
 */
function isBlob(value) {
    return typeof Blob !== 'undefined' && value instanceof Blob;
}
/**
 * Safely assert whether the given value is a FormData instance.
 *
 * In some execution environments FormData is not defined.
 */
function isFormData(value) {
    return typeof FormData !== 'undefined' && value instanceof FormData;
}
/**
 * An outgoing HTTP request with an optional typed body.
 *
 * `HttpRequest` represents an outgoing request, including URL, method,
 * headers, body, and other request configuration options. Instances should be
 * assumed to be immutable. To modify a `HttpRequest`, the `clone`
 * method should be used.
 *
 *
 */
var HttpRequest = /** @class */ (function () {
    function HttpRequest(method, url, third, fourth) {
        this.url = url;
        /**
         * The request body, or `null` if one isn't set.
         *
         * Bodies are not enforced to be immutable, as they can include a reference to any
         * user-defined data type. However, interceptors should take care to preserve
         * idempotence by treating them as such.
         */
        this.body = null;
        /**
         * Whether this request should be made in a way that exposes progress events.
         *
         * Progress events are expensive (change detection runs on each event) and so
         * they should only be requested if the consumer intends to monitor them.
         */
        this.reportProgress = false;
        /**
         * Whether this request should be sent with outgoing credentials (cookies).
         */
        this.withCredentials = false;
        /**
         * The expected response type of the server.
         *
         * This is used to parse the response appropriately before returning it to
         * the requestee.
         */
        this.responseType = 'json';
        this.method = method.toUpperCase();
        // Next, need to figure out which argument holds the HttpRequestInit
        // options, if any.
        var options;
        // Check whether a body argument is expected. The only valid way to omit
        // the body argument is to use a known no-body method like GET.
        if (mightHaveBody(this.method) || !!fourth) {
            // Body is the third argument, options are the fourth.
            this.body = (third !== undefined) ? third : null;
            options = fourth;
        }
        else {
            // No body required, options are the third argument. The body stays null.
            options = third;
        }
        // If options have been passed, interpret them.
        if (options) {
            // Normalize reportProgress and withCredentials.
            this.reportProgress = !!options.reportProgress;
            this.withCredentials = !!options.withCredentials;
            // Override default response type of 'json' if one is provided.
            if (!!options.responseType) {
                this.responseType = options.responseType;
            }
            // Override headers if they're provided.
            if (!!options.headers) {
                this.headers = options.headers;
            }
            if (!!options.params) {
                this.params = options.params;
            }
        }
        // If no headers have been passed in, construct a new HttpHeaders instance.
        if (!this.headers) {
            this.headers = new HttpHeaders();
        }
        // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.
        if (!this.params) {
            this.params = new HttpParams();
            this.urlWithParams = url;
        }
        else {
            // Encode the parameters to a string in preparation for inclusion in the URL.
            var params = this.params.toString();
            if (params.length === 0) {
                // No parameters, the visible URL is just the URL given at creation time.
                this.urlWithParams = url;
            }
            else {
                // Does the URL already have query parameters? Look for '?'.
                var qIdx = url.indexOf('?');
                // There are 3 cases to handle:
                // 1) No existing parameters -> append '?' followed by params.
                // 2) '?' exists and is followed by existing query string ->
                //    append '&' followed by params.
                // 3) '?' exists at the end of the url -> append params directly.
                // This basically amounts to determining the character, if any, with
                // which to join the URL and parameters.
                var sep = qIdx === -1 ? '?' : (qIdx < url.length - 1 ? '&' : '');
                this.urlWithParams = url + sep + params;
            }
        }
    }
    /**
     * Transform the free-form body into a serialized format suitable for
     * transmission to the server.
     */
    HttpRequest.prototype.serializeBody = function () {
        // If no body is present, no need to serialize it.
        if (this.body === null) {
            return null;
        }
        // Check whether the body is already in a serialized form. If so,
        // it can just be returned directly.
        if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) ||
            typeof this.body === 'string') {
            return this.body;
        }
        // Check whether the body is an instance of HttpUrlEncodedParams.
        if (this.body instanceof HttpParams) {
            return this.body.toString();
        }
        // Check whether the body is an object or array, and serialize with JSON if so.
        if (typeof this.body === 'object' || typeof this.body === 'boolean' ||
            Array.isArray(this.body)) {
            return JSON.stringify(this.body);
        }
        // Fall back on toString() for everything else.
        return this.body.toString();
    };
    /**
     * Examine the body and attempt to infer an appropriate MIME type
     * for it.
     *
     * If no such type can be inferred, this method will return `null`.
     */
    HttpRequest.prototype.detectContentTypeHeader = function () {
        // An empty body has no content type.
        if (this.body === null) {
            return null;
        }
        // FormData bodies rely on the browser's content type assignment.
        if (isFormData(this.body)) {
            return null;
        }
        // Blobs usually have their own content type. If it doesn't, then
        // no type can be inferred.
        if (isBlob(this.body)) {
            return this.body.type || null;
        }
        // Array buffers have unknown contents and thus no type can be inferred.
        if (isArrayBuffer(this.body)) {
            return null;
        }
        // Technically, strings could be a form of JSON data, but it's safe enough
        // to assume they're plain strings.
        if (typeof this.body === 'string') {
            return 'text/plain';
        }
        // `HttpUrlEncodedParams` has its own content-type.
        if (this.body instanceof HttpParams) {
            return 'application/x-www-form-urlencoded;charset=UTF-8';
        }
        // Arrays, objects, and numbers will be encoded as JSON.
        if (typeof this.body === 'object' || typeof this.body === 'number' ||
            Array.isArray(this.body)) {
            return 'application/json';
        }
        // No type could be inferred.
        return null;
    };
    HttpRequest.prototype.clone = function (update) {
        if (update === void 0) { update = {}; }
        // For method, url, and responseType, take the current value unless
        // it is overridden in the update hash.
        var method = update.method || this.method;
        var url = update.url || this.url;
        var responseType = update.responseType || this.responseType;
        // The body is somewhat special - a `null` value in update.body means
        // whatever current body is present is being overridden with an empty
        // body, whereas an `undefined` value in update.body implies no
        // override.
        var body = (update.body !== undefined) ? update.body : this.body;
        // Carefully handle the boolean options to differentiate between
        // `false` and `undefined` in the update args.
        var withCredentials = (update.withCredentials !== undefined) ? update.withCredentials : this.withCredentials;
        var reportProgress = (update.reportProgress !== undefined) ? update.reportProgress : this.reportProgress;
        // Headers and params may be appended to if `setHeaders` or
        // `setParams` are used.
        var headers = update.headers || this.headers;
        var params = update.params || this.params;
        // Check whether the caller has asked to add headers.
        if (update.setHeaders !== undefined) {
            // Set every requested header.
            headers =
                Object.keys(update.setHeaders)
                    .reduce(function (headers, name) { return headers.set(name, update.setHeaders[name]); }, headers);
        }
        // Check whether the caller has asked to set params.
        if (update.setParams) {
            // Set every requested param.
            params = Object.keys(update.setParams)
                .reduce(function (params, param) { return params.set(param, update.setParams[param]); }, params);
        }
        // Finally, construct the new HttpRequest using the pieces from above.
        return new HttpRequest(method, url, body, {
            params: params, headers: headers, reportProgress: reportProgress, responseType: responseType, withCredentials: withCredentials,
        });
    };
    return HttpRequest;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Type enumeration for the different kinds of `HttpEvent`.
 *
 *
 */
var HttpEventType;
(function (HttpEventType) {
    /**
     * The request was sent out over the wire.
     */
    HttpEventType[HttpEventType["Sent"] = 0] = "Sent";
    /**
     * An upload progress event was received.
     */
    HttpEventType[HttpEventType["UploadProgress"] = 1] = "UploadProgress";
    /**
     * The response status code and headers were received.
     */
    HttpEventType[HttpEventType["ResponseHeader"] = 2] = "ResponseHeader";
    /**
     * A download progress event was received.
     */
    HttpEventType[HttpEventType["DownloadProgress"] = 3] = "DownloadProgress";
    /**
     * The full response including the body was received.
     */
    HttpEventType[HttpEventType["Response"] = 4] = "Response";
    /**
     * A custom event from an interceptor or a backend.
     */
    HttpEventType[HttpEventType["User"] = 5] = "User";
})(HttpEventType || (HttpEventType = {}));
/**
 * Base class for both `HttpResponse` and `HttpHeaderResponse`.
 *
 *
 */
var HttpResponseBase = /** @class */ (function () {
    /**
     * Super-constructor for all responses.
     *
     * The single parameter accepted is an initialization hash. Any properties
     * of the response passed there will override the default values.
     */
    function HttpResponseBase(init, defaultStatus, defaultStatusText) {
        if (defaultStatus === void 0) { defaultStatus = 200; }
        if (defaultStatusText === void 0) { defaultStatusText = 'OK'; }
        // If the hash has values passed, use them to initialize the response.
        // Otherwise use the default values.
        this.headers = init.headers || new HttpHeaders();
        this.status = init.status !== undefined ? init.status : defaultStatus;
        this.statusText = init.statusText || defaultStatusText;
        this.url = init.url || null;
        // Cache the ok value to avoid defining a getter.
        this.ok = this.status >= 200 && this.status < 300;
    }
    return HttpResponseBase;
}());
/**
 * A partial HTTP response which only includes the status and header data,
 * but no response body.
 *
 * `HttpHeaderResponse` is a `HttpEvent` available on the response
 * event stream, only when progress events are requested.
 *
 *
 */
var HttpHeaderResponse = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(HttpHeaderResponse, _super);
    /**
     * Create a new `HttpHeaderResponse` with the given parameters.
     */
    function HttpHeaderResponse(init) {
        if (init === void 0) { init = {}; }
        var _this = _super.call(this, init) || this;
        _this.type = HttpEventType.ResponseHeader;
        return _this;
    }
    /**
     * Copy this `HttpHeaderResponse`, overriding its contents with the
     * given parameter hash.
     */
    HttpHeaderResponse.prototype.clone = function (update) {
        if (update === void 0) { update = {}; }
        // Perform a straightforward initialization of the new HttpHeaderResponse,
        // overriding the current parameters with new ones if given.
        return new HttpHeaderResponse({
            headers: update.headers || this.headers,
            status: update.status !== undefined ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    };
    return HttpHeaderResponse;
}(HttpResponseBase));
/**
 * A full HTTP response, including a typed response body (which may be `null`
 * if one was not returned).
 *
 * `HttpResponse` is a `HttpEvent` available on the response event
 * stream.
 *
 *
 */
var HttpResponse = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(HttpResponse, _super);
    /**
     * Construct a new `HttpResponse`.
     */
    function HttpResponse(init) {
        if (init === void 0) { init = {}; }
        var _this = _super.call(this, init) || this;
        _this.type = HttpEventType.Response;
        _this.body = init.body !== undefined ? init.body : null;
        return _this;
    }
    HttpResponse.prototype.clone = function (update) {
        if (update === void 0) { update = {}; }
        return new HttpResponse({
            body: (update.body !== undefined) ? update.body : this.body,
            headers: update.headers || this.headers,
            status: (update.status !== undefined) ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    };
    return HttpResponse;
}(HttpResponseBase));
/**
 * A response that represents an error or failure, either from a
 * non-successful HTTP status, an error while executing the request,
 * or some other failure which occurred during the parsing of the response.
 *
 * Any error returned on the `Observable` response stream will be
 * wrapped in an `HttpErrorResponse` to provide additional context about
 * the state of the HTTP layer when the error occurred. The error property
 * will contain either a wrapped Error object or the error response returned
 * from the server.
 *
 *
 */
var HttpErrorResponse = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(HttpErrorResponse, _super);
    function HttpErrorResponse(init) {
        var _this = 
        // Initialize with a default status of 0 / Unknown Error.
        _super.call(this, init, 0, 'Unknown Error') || this;
        _this.name = 'HttpErrorResponse';
        /**
         * Errors are never okay, even when the status code is in the 2xx success range.
         */
        _this.ok = false;
        // If the response was successful, then this was a parse error. Otherwise, it was
        // a protocol-level failure of some sort. Either the request failed in transit
        // or the server returned an unsuccessful status code.
        if (_this.status >= 200 && _this.status < 300) {
            _this.message = "Http failure during parsing for " + (init.url || '(unknown url)');
        }
        else {
            _this.message =
                "Http failure response for " + (init.url || '(unknown url)') + ": " + init.status + " " + init.statusText;
        }
        _this.error = init.error || null;
        return _this;
    }
    return HttpErrorResponse;
}(HttpResponseBase));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Construct an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
 * the given `body`. Basically, this clones the object and adds the body.
 */
function addBody(options, body) {
    return {
        body: body,
        headers: options.headers,
        observe: options.observe,
        params: options.params,
        reportProgress: options.reportProgress,
        responseType: options.responseType,
        withCredentials: options.withCredentials,
    };
}
/**
 * Perform HTTP requests.
 *
 * `HttpClient` is available as an injectable class, with methods to perform HTTP requests.
 * Each request method has multiple signatures, and the return type varies according to which
 * signature is called (mainly the values of `observe` and `responseType`).
 *
 *
 */
var HttpClient = /** @class */ (function () {
    function HttpClient(handler) {
        this.handler = handler;
    }
    /**
     * Constructs an `Observable` for a particular HTTP request that, when subscribed,
     * fires the request through the chain of registered interceptors and on to the
     * server.
     *
     * This method can be called in one of two ways. Either an `HttpRequest`
     * instance can be passed directly as the only parameter, or a method can be
     * passed as the first parameter, a string URL as the second, and an
     * options hash as the third.
     *
     * If a `HttpRequest` object is passed directly, an `Observable` of the
     * raw `HttpEvent` stream will be returned.
     *
     * If a request is instead built by providing a URL, the options object
     * determines the return type of `request()`. In addition to configuring
     * request parameters such as the outgoing headers and/or the body, the options
     * hash specifies two key pieces of information about the request: the
     * `responseType` and what to `observe`.
     *
     * The `responseType` value determines how a successful response body will be
     * parsed. If `responseType` is the default `json`, a type interface for the
     * resulting object may be passed as a type parameter to `request()`.
     *
     * The `observe` value determines the return type of `request()`, based on what
     * the consumer is interested in observing. A value of `events` will return an
     * `Observable<HttpEvent>` representing the raw `HttpEvent` stream,
     * including progress events by default. A value of `response` will return an
     * `Observable<HttpResponse<T>>` where the `T` parameter of `HttpResponse`
     * depends on the `responseType` and any optionally provided type parameter.
     * A value of `body` will return an `Observable<T>` with the same `T` body type.
     */
    HttpClient.prototype.request = function (first, url, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var req;
        // Firstly, check whether the primary argument is an instance of `HttpRequest`.
        if (first instanceof HttpRequest) {
            // It is. The other arguments must be undefined (per the signatures) and can be
            // ignored.
            req = first;
        }
        else {
            // It's a string, so it represents a URL. Construct a request based on it,
            // and incorporate the remaining arguments (assuming GET unless a method is
            // provided.
            // Figure out the headers.
            var headers = undefined;
            if (options.headers instanceof HttpHeaders) {
                headers = options.headers;
            }
            else {
                headers = new HttpHeaders(options.headers);
            }
            // Sort out parameters.
            var params = undefined;
            if (!!options.params) {
                if (options.params instanceof HttpParams) {
                    params = options.params;
                }
                else {
                    params = new HttpParams({ fromObject: options.params });
                }
            }
            // Construct the request.
            req = new HttpRequest(first, url, (options.body !== undefined ? options.body : null), {
                headers: headers,
                params: params,
                reportProgress: options.reportProgress,
                // By default, JSON is assumed to be returned for all calls.
                responseType: options.responseType || 'json',
                withCredentials: options.withCredentials,
            });
        }
        // Start with an Observable.of() the initial request, and run the handler (which
        // includes all interceptors) inside a concatMap(). This way, the handler runs
        // inside an Observable chain, which causes interceptors to be re-run on every
        // subscription (this also makes retries re-run the handler, including interceptors).
        var events$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (req) { return _this.handler.handle(req); }));
        // If coming via the API signature which accepts a previously constructed HttpRequest,
        // the only option is to get the event stream. Otherwise, return the event stream if
        // that is what was requested.
        if (first instanceof HttpRequest || options.observe === 'events') {
            return events$;
        }
        // The requested stream contains either the full response or the body. In either
        // case, the first step is to filter the event stream to extract a stream of
        // responses(s).
        var res$ = events$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof HttpResponse; }));
        // Decide which stream to return.
        switch (options.observe || 'body') {
            case 'body':
                // The requested stream is the body. Map the response stream to the response
                // body. This could be done more simply, but a misbehaving interceptor might
                // transform the response body into a different format and ignore the requested
                // responseType. Guard against this by validating that the response is of the
                // requested type.
                switch (req.responseType) {
                    case 'arraybuffer':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                            // Validate that the body is an ArrayBuffer.
                            if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                                throw new Error('Response is not an ArrayBuffer.');
                            }
                            return res.body;
                        }));
                    case 'blob':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                            // Validate that the body is a Blob.
                            if (res.body !== null && !(res.body instanceof Blob)) {
                                throw new Error('Response is not a Blob.');
                            }
                            return res.body;
                        }));
                    case 'text':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                            // Validate that the body is a string.
                            if (res.body !== null && typeof res.body !== 'string') {
                                throw new Error('Response is not a string.');
                            }
                            return res.body;
                        }));
                    case 'json':
                    default:
                        // No validation needed for JSON responses, as they can be of any type.
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.body; }));
                }
            case 'response':
                // The response stream was requested directly, so return it.
                return res$;
            default:
                // Guard against new future observe types being added.
                throw new Error("Unreachable: unhandled observe type " + options.observe + "}");
        }
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * DELETE request to be executed on the server. See the individual overloads for
     * details of `delete()`'s return type based on the provided options.
     */
    HttpClient.prototype.delete = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('DELETE', url, options);
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * GET request to be executed on the server. See the individual overloads for
     * details of `get()`'s return type based on the provided options.
     */
    HttpClient.prototype.get = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('GET', url, options);
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * HEAD request to be executed on the server. See the individual overloads for
     * details of `head()`'s return type based on the provided options.
     */
    HttpClient.prototype.head = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('HEAD', url, options);
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause a request
     * with the special method `JSONP` to be dispatched via the interceptor pipeline.
     *
     * A suitable interceptor must be installed (e.g. via the `HttpClientJsonpModule`).
     * If no such interceptor is reached, then the `JSONP` request will likely be
     * rejected by the configured backend.
     */
    HttpClient.prototype.jsonp = function (url, callbackParam) {
        return this.request('JSONP', url, {
            params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
            observe: 'body',
            responseType: 'json',
        });
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * OPTIONS request to be executed on the server. See the individual overloads for
     * details of `options()`'s return type based on the provided options.
     */
    HttpClient.prototype.options = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('OPTIONS', url, options);
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * PATCH request to be executed on the server. See the individual overloads for
     * details of `patch()`'s return type based on the provided options.
     */
    HttpClient.prototype.patch = function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('PATCH', url, addBody(options, body));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * POST request to be executed on the server. See the individual overloads for
     * details of `post()`'s return type based on the provided options.
     */
    HttpClient.prototype.post = function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('POST', url, addBody(options, body));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * POST request to be executed on the server. See the individual overloads for
     * details of `post()`'s return type based on the provided options.
     */
    HttpClient.prototype.put = function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('PUT', url, addBody(options, body));
    };
    HttpClient.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    HttpClient.ctorParameters = function () { return [
        { type: HttpHandler }
    ]; };
    return HttpClient;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
 *
 *
 */
var HttpInterceptorHandler = /** @class */ (function () {
    function HttpInterceptorHandler(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    HttpInterceptorHandler.prototype.handle = function (req) {
        return this.interceptor.intercept(req, this.next);
    };
    return HttpInterceptorHandler;
}());
/**
 * A multi-provider token which represents the array of `HttpInterceptor`s that
 * are registered.
 *
 *
 */
var HTTP_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('HTTP_INTERCEPTORS');
var NoopInterceptor = /** @class */ (function () {
    function NoopInterceptor() {
    }
    NoopInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req);
    };
    NoopInterceptor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return NoopInterceptor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Every request made through JSONP needs a callback name that's unique across the
// whole page. Each request is assigned an id and the callback name is constructed
// from that. The next id to be assigned is tracked in a global variable here that
// is shared among all applications on the page.
var nextRequestId = 0;
// Error text given when a JSONP script is injected, but doesn't invoke the callback
// passed in its URL.
var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
// Error text given when a request is passed to the JsonpClientBackend that doesn't
// have a request method JSONP.
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
var JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
/**
 * DI token/abstract type representing a map of JSONP callbacks.
 *
 * In the browser, this should always be the `window` object.
 *
 *
 */
var JsonpCallbackContext = /** @class */ (function () {
    function JsonpCallbackContext() {
    }
    return JsonpCallbackContext;
}());
/**
 * `HttpBackend` that only processes `HttpRequest` with the JSONP method,
 * by performing JSONP style requests.
 *
 *
 */
var JsonpClientBackend = /** @class */ (function () {
    function JsonpClientBackend(callbackMap, document) {
        this.callbackMap = callbackMap;
        this.document = document;
    }
    /**
     * Get the name of the next callback method, by incrementing the global `nextRequestId`.
     */
    JsonpClientBackend.prototype.nextCallback = function () { return "ng_jsonp_callback_" + nextRequestId++; };
    /**
     * Process a JSONP request and return an event stream of the results.
     */
    JsonpClientBackend.prototype.handle = function (req) {
        var _this = this;
        // Firstly, check both the method and response type. If either doesn't match
        // then the request was improperly routed here and cannot be handled.
        if (req.method !== 'JSONP') {
            throw new Error(JSONP_ERR_WRONG_METHOD);
        }
        else if (req.responseType !== 'json') {
            throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
        }
        // Everything else happens inside the Observable boundary.
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            // The first step to make a request is to generate the callback name, and replace the
            // callback placeholder in the URL with the name. Care has to be taken here to ensure
            // a trailing &, if matched, gets inserted back into the URL in the correct place.
            var callback = _this.nextCallback();
            var url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, "=" + callback + "$1");
            // Construct the <script> tag and point it at the URL.
            var node = _this.document.createElement('script');
            node.src = url;
            // A JSONP request requires waiting for multiple callbacks. These variables
            // are closed over and track state across those callbacks.
            // The response object, if one has been received, or null otherwise.
            var body = null;
            // Whether the response callback has been called.
            var finished = false;
            // Whether the request has been cancelled (and thus any other callbacks)
            // should be ignored.
            var cancelled = false;
            // Set the response callback in this.callbackMap (which will be the window
            // object in the browser. The script being loaded via the <script> tag will
            // eventually call this callback.
            _this.callbackMap[callback] = function (data) {
                // Data has been received from the JSONP script. Firstly, delete this callback.
                delete _this.callbackMap[callback];
                // Next, make sure the request wasn't cancelled in the meantime.
                if (cancelled) {
                    return;
                }
                // Set state to indicate data was received.
                body = data;
                finished = true;
            };
            // cleanup() is a utility closure that removes the <script> from the page and
            // the response callback from the window. This logic is used in both the
            // success, error, and cancellation paths, so it's extracted out for convenience.
            var cleanup = function () {
                // Remove the <script> tag if it's still on the page.
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
                // Remove the response callback from the callbackMap (window object in the
                // browser).
                delete _this.callbackMap[callback];
            };
            // onLoad() is the success callback which runs after the response callback
            // if the JSONP script loads successfully. The event itself is unimportant.
            // If something went wrong, onLoad() may run without the response callback
            // having been invoked.
            var onLoad = function (event) {
                // Do nothing if the request has been cancelled.
                if (cancelled) {
                    return;
                }
                // Cleanup the page.
                cleanup();
                // Check whether the response callback has run.
                if (!finished) {
                    // It hasn't, something went wrong with the request. Return an error via
                    // the Observable error path. All JSONP errors have status 0.
                    observer.error(new HttpErrorResponse({
                        url: url,
                        status: 0,
                        statusText: 'JSONP Error',
                        error: new Error(JSONP_ERR_NO_CALLBACK),
                    }));
                    return;
                }
                // Success. body either contains the response body or null if none was
                // returned.
                observer.next(new HttpResponse({
                    body: body,
                    status: 200,
                    statusText: 'OK', url: url,
                }));
                // Complete the stream, the response is over.
                observer.complete();
            };
            // onError() is the error callback, which runs if the script returned generates
            // a Javascript error. It emits the error via the Observable error channel as
            // a HttpErrorResponse.
            var onError = function (error) {
                // If the request was already cancelled, no need to emit anything.
                if (cancelled) {
                    return;
                }
                cleanup();
                // Wrap the error in a HttpErrorResponse.
                observer.error(new HttpErrorResponse({
                    error: error,
                    status: 0,
                    statusText: 'JSONP Error', url: url,
                }));
            };
            // Subscribe to both the success (load) and error events on the <script> tag,
            // and add it to the page.
            node.addEventListener('load', onLoad);
            node.addEventListener('error', onError);
            _this.document.body.appendChild(node);
            // The request has now been successfully sent.
            observer.next({ type: HttpEventType.Sent });
            // Cancellation handler.
            return function () {
                // Track the cancellation so event listeners won't do anything even if already scheduled.
                cancelled = true;
                // Remove the event listeners so they won't run if the events later fire.
                node.removeEventListener('load', onLoad);
                node.removeEventListener('error', onError);
                // And finally, clean up the page.
                cleanup();
            };
        });
    };
    JsonpClientBackend.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    JsonpClientBackend.ctorParameters = function () { return [
        { type: JsonpCallbackContext },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
    ]; };
    return JsonpClientBackend;
}());
/**
 * An `HttpInterceptor` which identifies requests with the method JSONP and
 * shifts them to the `JsonpClientBackend`.
 *
 *
 */
var JsonpInterceptor = /** @class */ (function () {
    function JsonpInterceptor(jsonp) {
        this.jsonp = jsonp;
    }
    JsonpInterceptor.prototype.intercept = function (req, next) {
        if (req.method === 'JSONP') {
            return this.jsonp.handle(req);
        }
        // Fall through for normal HTTP requests.
        return next.handle(req);
    };
    JsonpInterceptor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    JsonpInterceptor.ctorParameters = function () { return [
        { type: JsonpClientBackend }
    ]; };
    return JsonpInterceptor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Determine an appropriate URL for the response, by checking either
 * XMLHttpRequest.responseURL or the X-Request-URL header.
 */
function getResponseUrl(xhr) {
    if ('responseURL' in xhr && xhr.responseURL) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
/**
 * A wrapper around the `XMLHttpRequest` constructor.
 *
 *
 */
var XhrFactory = /** @class */ (function () {
    function XhrFactory() {
    }
    return XhrFactory;
}());
/**
 * A factory for @{link HttpXhrBackend} that uses the `XMLHttpRequest` browser API.
 *
 *
 */
var BrowserXhr = /** @class */ (function () {
    function BrowserXhr() {
    }
    BrowserXhr.prototype.build = function () { return (new XMLHttpRequest()); };
    BrowserXhr.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    BrowserXhr.ctorParameters = function () { return []; };
    return BrowserXhr;
}());
/**
 * An `HttpBackend` which uses the XMLHttpRequest API to send
 * requests to a backend server.
 *
 *
 */
var HttpXhrBackend = /** @class */ (function () {
    function HttpXhrBackend(xhrFactory) {
        this.xhrFactory = xhrFactory;
    }
    /**
     * Process a request and return a stream of response events.
     */
    HttpXhrBackend.prototype.handle = function (req) {
        var _this = this;
        // Quick check to give a better error message when a user attempts to use
        // HttpClient.jsonp() without installing the JsonpClientModule
        if (req.method === 'JSONP') {
            throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
        }
        // Everything happens on Observable subscription.
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            // Start by setting up the XHR object with request method, URL, and withCredentials flag.
            var xhr = _this.xhrFactory.build();
            xhr.open(req.method, req.urlWithParams);
            if (!!req.withCredentials) {
                xhr.withCredentials = true;
            }
            // Add all the requested headers.
            req.headers.forEach(function (name, values) { return xhr.setRequestHeader(name, values.join(',')); });
            // Add an Accept header if one isn't present already.
            if (!req.headers.has('Accept')) {
                xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
            }
            // Auto-detect the Content-Type header if one isn't present already.
            if (!req.headers.has('Content-Type')) {
                var detectedType = req.detectContentTypeHeader();
                // Sometimes Content-Type detection fails.
                if (detectedType !== null) {
                    xhr.setRequestHeader('Content-Type', detectedType);
                }
            }
            // Set the responseType if one was requested.
            if (req.responseType) {
                var responseType = req.responseType.toLowerCase();
                // JSON responses need to be processed as text. This is because if the server
                // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
                // xhr.response will be null, and xhr.responseText cannot be accessed to
                // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
                // is parsed by first requesting text and then applying JSON.parse.
                xhr.responseType = ((responseType !== 'json') ? responseType : 'text');
            }
            // Serialize the request body if one is present. If not, this will be set to null.
            var reqBody = req.serializeBody();
            // If progress events are enabled, response headers will be delivered
            // in two events - the HttpHeaderResponse event and the full HttpResponse
            // event. However, since response headers don't change in between these
            // two events, it doesn't make sense to parse them twice. So headerResponse
            // caches the data extracted from the response whenever it's first parsed,
            // to ensure parsing isn't duplicated.
            var headerResponse = null;
            // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
            // state, and memoizes it into headerResponse.
            var partialFromXhr = function () {
                if (headerResponse !== null) {
                    return headerResponse;
                }
                // Read status and normalize an IE9 bug (http://bugs.jquery.com/ticket/1450).
                var status = xhr.status === 1223 ? 204 : xhr.status;
                var statusText = xhr.statusText || 'OK';
                // Parse headers from XMLHttpRequest - this step is lazy.
                var headers = new HttpHeaders(xhr.getAllResponseHeaders());
                // Read the response URL from the XMLHttpResponse instance and fall back on the
                // request URL.
                var url = getResponseUrl(xhr) || req.url;
                // Construct the HttpHeaderResponse and memoize it.
                headerResponse = new HttpHeaderResponse({ headers: headers, status: status, statusText: statusText, url: url });
                return headerResponse;
            };
            // Next, a few closures are defined for the various events which XMLHttpRequest can
            // emit. This allows them to be unregistered as event listeners later.
            // First up is the load event, which represents a response being fully available.
            var onLoad = function () {
                // Read response state from the memoized partial data.
                var _a = partialFromXhr(), headers = _a.headers, status = _a.status, statusText = _a.statusText, url = _a.url;
                // The body will be read out if present.
                var body = null;
                if (status !== 204) {
                    // Use XMLHttpRequest.response if set, responseText otherwise.
                    body = (typeof xhr.response === 'undefined') ? xhr.responseText : xhr.response;
                }
                // Normalize another potential bug (this one comes from CORS).
                if (status === 0) {
                    status = !!body ? 200 : 0;
                }
                // ok determines whether the response will be transmitted on the event or
                // error channel. Unsuccessful status codes (not 2xx) will always be errors,
                // but a successful status code can still result in an error if the user
                // asked for JSON data and the body cannot be parsed as such.
                var ok = status >= 200 && status < 300;
                // Check whether the body needs to be parsed as JSON (in many cases the browser
                // will have done that already).
                if (req.responseType === 'json' && typeof body === 'string') {
                    // Save the original body, before attempting XSSI prefix stripping.
                    var originalBody = body;
                    body = body.replace(XSSI_PREFIX, '');
                    try {
                        // Attempt the parse. If it fails, a parse error should be delivered to the user.
                        body = body !== '' ? JSON.parse(body) : null;
                    }
                    catch (error) {
                        // Since the JSON.parse failed, it's reasonable to assume this might not have been a
                        // JSON response. Restore the original body (including any XSSI prefix) to deliver
                        // a better error response.
                        body = originalBody;
                        // If this was an error request to begin with, leave it as a string, it probably
                        // just isn't JSON. Otherwise, deliver the parsing error to the user.
                        if (ok) {
                            // Even though the response status was 2xx, this is still an error.
                            ok = false;
                            // The parse error contains the text of the body that failed to parse.
                            body = { error: error, text: body };
                        }
                    }
                }
                if (ok) {
                    // A successful response is delivered on the event stream.
                    observer.next(new HttpResponse({
                        body: body,
                        headers: headers,
                        status: status,
                        statusText: statusText,
                        url: url || undefined,
                    }));
                    // The full body has been received and delivered, no further events
                    // are possible. This request is complete.
                    observer.complete();
                }
                else {
                    // An unsuccessful request is delivered on the error channel.
                    observer.error(new HttpErrorResponse({
                        // The error in this case is the response body (error from the server).
                        error: body,
                        headers: headers,
                        status: status,
                        statusText: statusText,
                        url: url || undefined,
                    }));
                }
            };
            // The onError callback is called when something goes wrong at the network level.
            // Connection timeout, DNS error, offline, etc. These are actual errors, and are
            // transmitted on the error channel.
            var onError = function (error) {
                var res = new HttpErrorResponse({
                    error: error,
                    status: xhr.status || 0,
                    statusText: xhr.statusText || 'Unknown Error',
                });
                observer.error(res);
            };
            // The sentHeaders flag tracks whether the HttpResponseHeaders event
            // has been sent on the stream. This is necessary to track if progress
            // is enabled since the event will be sent on only the first download
            // progerss event.
            var sentHeaders = false;
            // The download progress event handler, which is only registered if
            // progress events are enabled.
            var onDownProgress = function (event) {
                // Send the HttpResponseHeaders event if it hasn't been sent already.
                if (!sentHeaders) {
                    observer.next(partialFromXhr());
                    sentHeaders = true;
                }
                // Start building the download progress event to deliver on the response
                // event stream.
                var progressEvent = {
                    type: HttpEventType.DownloadProgress,
                    loaded: event.loaded,
                };
                // Set the total number of bytes in the event if it's available.
                if (event.lengthComputable) {
                    progressEvent.total = event.total;
                }
                // If the request was for text content and a partial response is
                // available on XMLHttpRequest, include it in the progress event
                // to allow for streaming reads.
                if (req.responseType === 'text' && !!xhr.responseText) {
                    progressEvent.partialText = xhr.responseText;
                }
                // Finally, fire the event.
                observer.next(progressEvent);
            };
            // The upload progress event handler, which is only registered if
            // progress events are enabled.
            var onUpProgress = function (event) {
                // Upload progress events are simpler. Begin building the progress
                // event.
                var progress = {
                    type: HttpEventType.UploadProgress,
                    loaded: event.loaded,
                };
                // If the total number of bytes being uploaded is available, include
                // it.
                if (event.lengthComputable) {
                    progress.total = event.total;
                }
                // Send the event.
                observer.next(progress);
            };
            // By default, register for load and error events.
            xhr.addEventListener('load', onLoad);
            xhr.addEventListener('error', onError);
            // Progress events are only enabled if requested.
            if (req.reportProgress) {
                // Download progress is always enabled if requested.
                xhr.addEventListener('progress', onDownProgress);
                // Upload progress depends on whether there is a body to upload.
                if (reqBody !== null && xhr.upload) {
                    xhr.upload.addEventListener('progress', onUpProgress);
                }
            }
            // Fire the request, and notify the event stream that it was fired.
            xhr.send(reqBody);
            observer.next({ type: HttpEventType.Sent });
            // This is the return from the Observable function, which is the
            // request cancellation handler.
            return function () {
                // On a cancellation, remove all registered event listeners.
                xhr.removeEventListener('error', onError);
                xhr.removeEventListener('load', onLoad);
                if (req.reportProgress) {
                    xhr.removeEventListener('progress', onDownProgress);
                    if (reqBody !== null && xhr.upload) {
                        xhr.upload.removeEventListener('progress', onUpProgress);
                    }
                }
                // Finally, abort the in-flight request.
                xhr.abort();
            };
        });
    };
    HttpXhrBackend.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    HttpXhrBackend.ctorParameters = function () { return [
        { type: XhrFactory }
    ]; };
    return HttpXhrBackend;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSRF_COOKIE_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('XSRF_COOKIE_NAME');
var XSRF_HEADER_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('XSRF_HEADER_NAME');
/**
 * Retrieves the current XSRF token to use with the next outgoing request.
 *
 *
 */
var HttpXsrfTokenExtractor = /** @class */ (function () {
    function HttpXsrfTokenExtractor() {
    }
    return HttpXsrfTokenExtractor;
}());
/**
 * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
 */
var HttpXsrfCookieExtractor = /** @class */ (function () {
    function HttpXsrfCookieExtractor(doc, platform, cookieName) {
        this.doc = doc;
        this.platform = platform;
        this.cookieName = cookieName;
        this.lastCookieString = '';
        this.lastToken = null;
        /**
         * @internal for testing
         */
        this.parseCount = 0;
    }
    HttpXsrfCookieExtractor.prototype.getToken = function () {
        if (this.platform === 'server') {
            return null;
        }
        var cookieString = this.doc.cookie || '';
        if (cookieString !== this.lastCookieString) {
            this.parseCount++;
            this.lastToken = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵparseCookieValue"])(cookieString, this.cookieName);
            this.lastCookieString = cookieString;
        }
        return this.lastToken;
    };
    HttpXsrfCookieExtractor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    HttpXsrfCookieExtractor.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [XSRF_COOKIE_NAME,] }] }
    ]; };
    return HttpXsrfCookieExtractor;
}());
/**
 * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
 */
var HttpXsrfInterceptor = /** @class */ (function () {
    function HttpXsrfInterceptor(tokenService, headerName) {
        this.tokenService = tokenService;
        this.headerName = headerName;
    }
    HttpXsrfInterceptor.prototype.intercept = function (req, next) {
        var lcUrl = req.url.toLowerCase();
        // Skip both non-mutating requests and absolute URLs.
        // Non-mutating requests don't require a token, and absolute URLs require special handling
        // anyway as the cookie set
        // on our origin is not the same as the token expected by another origin.
        if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') ||
            lcUrl.startsWith('https://')) {
            return next.handle(req);
        }
        var token = this.tokenService.getToken();
        // Be careful not to overwrite an existing header of the same name.
        if (token !== null && !req.headers.has(this.headerName)) {
            req = req.clone({ headers: req.headers.set(this.headerName, token) });
        }
        return next.handle(req);
    };
    HttpXsrfInterceptor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    HttpXsrfInterceptor.ctorParameters = function () { return [
        { type: HttpXsrfTokenExtractor },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [XSRF_HEADER_NAME,] }] }
    ]; };
    return HttpXsrfInterceptor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * An injectable `HttpHandler` that applies multiple interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * The interceptors are loaded lazily from the injector, to allow
 * interceptors to themselves inject classes depending indirectly
 * on `HttpInterceptingHandler` itself.
 * @see `HttpInterceptor`
 */
var HttpInterceptingHandler = /** @class */ (function () {
    function HttpInterceptingHandler(backend, injector) {
        this.backend = backend;
        this.injector = injector;
        this.chain = null;
    }
    HttpInterceptingHandler.prototype.handle = function (req) {
        if (this.chain === null) {
            var interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
            this.chain = interceptors.reduceRight(function (next, interceptor) { return new HttpInterceptorHandler(next, interceptor); }, this.backend);
        }
        return this.chain.handle(req);
    };
    HttpInterceptingHandler.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    HttpInterceptingHandler.ctorParameters = function () { return [
        { type: HttpBackend },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
    ]; };
    return HttpInterceptingHandler;
}());
/**
 * Constructs an `HttpHandler` that applies interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * Use as a factory function within `HttpClientModule`.
 *
 *
 */

/**
 * Factory function that determines where to store JSONP callbacks.
 *
 * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
 * in test environments. In that case, callbacks are stored on an anonymous object instead.
 *
 *
 */
function jsonpCallbackContext() {
    if (typeof window === 'object') {
        return window;
    }
    return {};
}
/**
 * An NgModule that adds XSRF protection support to outgoing requests.
 *
 * For a server that supports a cookie-based XSRF protection system,
 * use directly to configure XSRF protection with the correct
 * cookie and header names.
 *
 * If no names are supplied, the default cookie name is `XSRF-TOKEN`
 * and the default header name is `X-XSRF-TOKEN`.
 *
 *
 */
var HttpClientXsrfModule = /** @class */ (function () {
    function HttpClientXsrfModule() {
    }
    /**
     * Disable the default XSRF protection.
     */
    HttpClientXsrfModule.disable = function () {
        return {
            ngModule: HttpClientXsrfModule,
            providers: [
                { provide: HttpXsrfInterceptor, useClass: NoopInterceptor },
            ],
        };
    };
    /**
     * Configure XSRF protection.
     * @param options An object that can specify either or both
     * cookie name or header name.
     * - Cookie name default is `XSRF-TOKEN`.
     * - Header name default is `X-XSRF-TOKEN`.
     *
     */
    HttpClientXsrfModule.withOptions = function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: HttpClientXsrfModule,
            providers: [
                options.cookieName ? { provide: XSRF_COOKIE_NAME, useValue: options.cookieName } : [],
                options.headerName ? { provide: XSRF_HEADER_NAME, useValue: options.headerName } : [],
            ],
        };
    };
    HttpClientXsrfModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    providers: [
                        HttpXsrfInterceptor,
                        { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
                        { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
                        { provide: XSRF_COOKIE_NAME, useValue: 'XSRF-TOKEN' },
                        { provide: XSRF_HEADER_NAME, useValue: 'X-XSRF-TOKEN' },
                    ],
                },] }
    ];
    return HttpClientXsrfModule;
}());
/**
 * An NgModule that provides the `HttpClient` and associated services.
 *
 * Interceptors can be added to the chain behind `HttpClient` by binding them
 * to the multiprovider for `HTTP_INTERCEPTORS`.
 *
 *
 */
var HttpClientModule = /** @class */ (function () {
    function HttpClientModule() {
    }
    HttpClientModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    /**
                     * Optional configuration for XSRF protection.
                     */
                    imports: [
                        HttpClientXsrfModule.withOptions({
                            cookieName: 'XSRF-TOKEN',
                            headerName: 'X-XSRF-TOKEN',
                        }),
                    ],
                    /**
                     * The module provides `HttpClient` itself, and supporting services.
                     */
                    providers: [
                        HttpClient,
                        { provide: HttpHandler, useClass: HttpInterceptingHandler },
                        HttpXhrBackend,
                        { provide: HttpBackend, useExisting: HttpXhrBackend },
                        BrowserXhr,
                        { provide: XhrFactory, useExisting: BrowserXhr },
                    ],
                },] }
    ];
    return HttpClientModule;
}());
/**
 * An NgModule that enables JSONP support in `HttpClient`.
 *
 * Without this module, Jsonp requests will reach the backend
 * with method JSONP, where they'll be rejected.
 *
 *
 */
var HttpClientJsonpModule = /** @class */ (function () {
    function HttpClientJsonpModule() {
    }
    HttpClientJsonpModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    providers: [
                        JsonpClientBackend,
                        { provide: JsonpCallbackContext, useFactory: jsonpCallbackContext },
                        { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true },
                    ],
                },] }
    ];
    return HttpClientJsonpModule;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file is not used to build this module. It is only used during editing
// by the TypeScript language service and during build for verification. `ngc`
// replaces this file with production index.ts when it rewrites private symbol
// names.

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=http.js.map


/***/ }),

/***/ "./node_modules/rxjs/index.js":
/*!************************************!*\
  !*** ./node_modules/rxjs/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ./internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
exports.Observable = Observable_1.Observable;
var ConnectableObservable_1 = __webpack_require__(/*! ./internal/observable/ConnectableObservable */ "./node_modules/rxjs/internal/observable/ConnectableObservable.js");
exports.ConnectableObservable = ConnectableObservable_1.ConnectableObservable;
var groupBy_1 = __webpack_require__(/*! ./internal/operators/groupBy */ "./node_modules/rxjs/internal/operators/groupBy.js");
exports.GroupedObservable = groupBy_1.GroupedObservable;
var observable_1 = __webpack_require__(/*! ./internal/symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
exports.observable = observable_1.observable;
var Subject_1 = __webpack_require__(/*! ./internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
exports.Subject = Subject_1.Subject;
var BehaviorSubject_1 = __webpack_require__(/*! ./internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
exports.BehaviorSubject = BehaviorSubject_1.BehaviorSubject;
var ReplaySubject_1 = __webpack_require__(/*! ./internal/ReplaySubject */ "./node_modules/rxjs/internal/ReplaySubject.js");
exports.ReplaySubject = ReplaySubject_1.ReplaySubject;
var AsyncSubject_1 = __webpack_require__(/*! ./internal/AsyncSubject */ "./node_modules/rxjs/internal/AsyncSubject.js");
exports.AsyncSubject = AsyncSubject_1.AsyncSubject;
var asap_1 = __webpack_require__(/*! ./internal/scheduler/asap */ "./node_modules/rxjs/internal/scheduler/asap.js");
exports.asapScheduler = asap_1.asap;
var async_1 = __webpack_require__(/*! ./internal/scheduler/async */ "./node_modules/rxjs/internal/scheduler/async.js");
exports.asyncScheduler = async_1.async;
var queue_1 = __webpack_require__(/*! ./internal/scheduler/queue */ "./node_modules/rxjs/internal/scheduler/queue.js");
exports.queueScheduler = queue_1.queue;
var animationFrame_1 = __webpack_require__(/*! ./internal/scheduler/animationFrame */ "./node_modules/rxjs/internal/scheduler/animationFrame.js");
exports.animationFrameScheduler = animationFrame_1.animationFrame;
var VirtualTimeScheduler_1 = __webpack_require__(/*! ./internal/scheduler/VirtualTimeScheduler */ "./node_modules/rxjs/internal/scheduler/VirtualTimeScheduler.js");
exports.VirtualTimeScheduler = VirtualTimeScheduler_1.VirtualTimeScheduler;
exports.VirtualAction = VirtualTimeScheduler_1.VirtualAction;
var Scheduler_1 = __webpack_require__(/*! ./internal/Scheduler */ "./node_modules/rxjs/internal/Scheduler.js");
exports.Scheduler = Scheduler_1.Scheduler;
var Subscription_1 = __webpack_require__(/*! ./internal/Subscription */ "./node_modules/rxjs/internal/Subscription.js");
exports.Subscription = Subscription_1.Subscription;
var Subscriber_1 = __webpack_require__(/*! ./internal/Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
exports.Subscriber = Subscriber_1.Subscriber;
var Notification_1 = __webpack_require__(/*! ./internal/Notification */ "./node_modules/rxjs/internal/Notification.js");
exports.Notification = Notification_1.Notification;
var pipe_1 = __webpack_require__(/*! ./internal/util/pipe */ "./node_modules/rxjs/internal/util/pipe.js");
exports.pipe = pipe_1.pipe;
var noop_1 = __webpack_require__(/*! ./internal/util/noop */ "./node_modules/rxjs/internal/util/noop.js");
exports.noop = noop_1.noop;
var identity_1 = __webpack_require__(/*! ./internal/util/identity */ "./node_modules/rxjs/internal/util/identity.js");
exports.identity = identity_1.identity;
var isObservable_1 = __webpack_require__(/*! ./internal/util/isObservable */ "./node_modules/rxjs/internal/util/isObservable.js");
exports.isObservable = isObservable_1.isObservable;
var ArgumentOutOfRangeError_1 = __webpack_require__(/*! ./internal/util/ArgumentOutOfRangeError */ "./node_modules/rxjs/internal/util/ArgumentOutOfRangeError.js");
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
var EmptyError_1 = __webpack_require__(/*! ./internal/util/EmptyError */ "./node_modules/rxjs/internal/util/EmptyError.js");
exports.EmptyError = EmptyError_1.EmptyError;
var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./internal/util/ObjectUnsubscribedError */ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js");
exports.ObjectUnsubscribedError = ObjectUnsubscribedError_1.ObjectUnsubscribedError;
var UnsubscriptionError_1 = __webpack_require__(/*! ./internal/util/UnsubscriptionError */ "./node_modules/rxjs/internal/util/UnsubscriptionError.js");
exports.UnsubscriptionError = UnsubscriptionError_1.UnsubscriptionError;
var TimeoutError_1 = __webpack_require__(/*! ./internal/util/TimeoutError */ "./node_modules/rxjs/internal/util/TimeoutError.js");
exports.TimeoutError = TimeoutError_1.TimeoutError;
var bindCallback_1 = __webpack_require__(/*! ./internal/observable/bindCallback */ "./node_modules/rxjs/internal/observable/bindCallback.js");
exports.bindCallback = bindCallback_1.bindCallback;
var bindNodeCallback_1 = __webpack_require__(/*! ./internal/observable/bindNodeCallback */ "./node_modules/rxjs/internal/observable/bindNodeCallback.js");
exports.bindNodeCallback = bindNodeCallback_1.bindNodeCallback;
var combineLatest_1 = __webpack_require__(/*! ./internal/observable/combineLatest */ "./node_modules/rxjs/internal/observable/combineLatest.js");
exports.combineLatest = combineLatest_1.combineLatest;
var concat_1 = __webpack_require__(/*! ./internal/observable/concat */ "./node_modules/rxjs/internal/observable/concat.js");
exports.concat = concat_1.concat;
var defer_1 = __webpack_require__(/*! ./internal/observable/defer */ "./node_modules/rxjs/internal/observable/defer.js");
exports.defer = defer_1.defer;
var empty_1 = __webpack_require__(/*! ./internal/observable/empty */ "./node_modules/rxjs/internal/observable/empty.js");
exports.empty = empty_1.empty;
var forkJoin_1 = __webpack_require__(/*! ./internal/observable/forkJoin */ "./node_modules/rxjs/internal/observable/forkJoin.js");
exports.forkJoin = forkJoin_1.forkJoin;
var from_1 = __webpack_require__(/*! ./internal/observable/from */ "./node_modules/rxjs/internal/observable/from.js");
exports.from = from_1.from;
var fromEvent_1 = __webpack_require__(/*! ./internal/observable/fromEvent */ "./node_modules/rxjs/internal/observable/fromEvent.js");
exports.fromEvent = fromEvent_1.fromEvent;
var fromEventPattern_1 = __webpack_require__(/*! ./internal/observable/fromEventPattern */ "./node_modules/rxjs/internal/observable/fromEventPattern.js");
exports.fromEventPattern = fromEventPattern_1.fromEventPattern;
var generate_1 = __webpack_require__(/*! ./internal/observable/generate */ "./node_modules/rxjs/internal/observable/generate.js");
exports.generate = generate_1.generate;
var iif_1 = __webpack_require__(/*! ./internal/observable/iif */ "./node_modules/rxjs/internal/observable/iif.js");
exports.iif = iif_1.iif;
var interval_1 = __webpack_require__(/*! ./internal/observable/interval */ "./node_modules/rxjs/internal/observable/interval.js");
exports.interval = interval_1.interval;
var merge_1 = __webpack_require__(/*! ./internal/observable/merge */ "./node_modules/rxjs/internal/observable/merge.js");
exports.merge = merge_1.merge;
var never_1 = __webpack_require__(/*! ./internal/observable/never */ "./node_modules/rxjs/internal/observable/never.js");
exports.never = never_1.never;
var of_1 = __webpack_require__(/*! ./internal/observable/of */ "./node_modules/rxjs/internal/observable/of.js");
exports.of = of_1.of;
var onErrorResumeNext_1 = __webpack_require__(/*! ./internal/observable/onErrorResumeNext */ "./node_modules/rxjs/internal/observable/onErrorResumeNext.js");
exports.onErrorResumeNext = onErrorResumeNext_1.onErrorResumeNext;
var pairs_1 = __webpack_require__(/*! ./internal/observable/pairs */ "./node_modules/rxjs/internal/observable/pairs.js");
exports.pairs = pairs_1.pairs;
var race_1 = __webpack_require__(/*! ./internal/observable/race */ "./node_modules/rxjs/internal/observable/race.js");
exports.race = race_1.race;
var range_1 = __webpack_require__(/*! ./internal/observable/range */ "./node_modules/rxjs/internal/observable/range.js");
exports.range = range_1.range;
var throwError_1 = __webpack_require__(/*! ./internal/observable/throwError */ "./node_modules/rxjs/internal/observable/throwError.js");
exports.throwError = throwError_1.throwError;
var timer_1 = __webpack_require__(/*! ./internal/observable/timer */ "./node_modules/rxjs/internal/observable/timer.js");
exports.timer = timer_1.timer;
var using_1 = __webpack_require__(/*! ./internal/observable/using */ "./node_modules/rxjs/internal/observable/using.js");
exports.using = using_1.using;
var zip_1 = __webpack_require__(/*! ./internal/observable/zip */ "./node_modules/rxjs/internal/observable/zip.js");
exports.zip = zip_1.zip;
var empty_2 = __webpack_require__(/*! ./internal/observable/empty */ "./node_modules/rxjs/internal/observable/empty.js");
exports.EMPTY = empty_2.EMPTY;
var never_2 = __webpack_require__(/*! ./internal/observable/never */ "./node_modules/rxjs/internal/observable/never.js");
exports.NEVER = never_2.NEVER;
var config_1 = __webpack_require__(/*! ./internal/config */ "./node_modules/rxjs/internal/config.js");
exports.config = config_1.config;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/bindCallback.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/bindCallback.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var AsyncSubject_1 = __webpack_require__(/*! ../AsyncSubject */ "./node_modules/rxjs/internal/AsyncSubject.js");
var map_1 = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/internal/operators/map.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
function bindCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (isScheduler_1.isScheduler(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return bindCallback(callbackFunc, scheduler).apply(void 0, args).pipe(map_1.map(function (args) { return isArray_1.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
            };
        }
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var context = this;
        var subject;
        var params = {
            context: context,
            subject: subject,
            callbackFunc: callbackFunc,
            scheduler: scheduler,
        };
        return new Observable_1.Observable(function (subscriber) {
            if (!scheduler) {
                if (!subject) {
                    subject = new AsyncSubject_1.AsyncSubject();
                    var handler = function () {
                        var innerArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            innerArgs[_i] = arguments[_i];
                        }
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, args.concat([handler]));
                    }
                    catch (err) {
                        subject.error(err);
                    }
                }
                return subject.subscribe(subscriber);
            }
            else {
                var state = {
                    args: args, subscriber: subscriber, params: params,
                };
                return scheduler.schedule(dispatch, 0, state);
            }
        });
    };
}
exports.bindCallback = bindCallback;
function dispatch(state) {
    var _this = this;
    var self = this;
    var args = state.args, subscriber = state.subscriber, params = state.params;
    var callbackFunc = params.callbackFunc, context = params.context, scheduler = params.scheduler;
    var subject = params.subject;
    if (!subject) {
        subject = params.subject = new AsyncSubject_1.AsyncSubject();
        var handler = function () {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i] = arguments[_i];
            }
            var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
            _this.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
        };
        try {
            callbackFunc.apply(context, args.concat([handler]));
        }
        catch (err) {
            subject.error(err);
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext(state) {
    var value = state.value, subject = state.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(state) {
    var err = state.err, subject = state.subject;
    subject.error(err);
}
//# sourceMappingURL=bindCallback.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/bindNodeCallback.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/bindNodeCallback.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var AsyncSubject_1 = __webpack_require__(/*! ../AsyncSubject */ "./node_modules/rxjs/internal/AsyncSubject.js");
var map_1 = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/internal/operators/map.js");
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (isScheduler_1.isScheduler(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return bindNodeCallback(callbackFunc, scheduler).apply(void 0, args).pipe(map_1.map(function (args) { return isArray_1.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
            };
        }
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var params = {
            subject: undefined,
            args: args,
            callbackFunc: callbackFunc,
            scheduler: scheduler,
            context: this,
        };
        return new Observable_1.Observable(function (subscriber) {
            var context = params.context;
            var subject = params.subject;
            if (!scheduler) {
                if (!subject) {
                    subject = params.subject = new AsyncSubject_1.AsyncSubject();
                    var handler = function () {
                        var innerArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            innerArgs[_i] = arguments[_i];
                        }
                        var err = innerArgs.shift();
                        if (err) {
                            subject.error(err);
                            return;
                        }
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, args.concat([handler]));
                    }
                    catch (err) {
                        subject.error(err);
                    }
                }
                return subject.subscribe(subscriber);
            }
            else {
                return scheduler.schedule(dispatch, 0, { params: params, subscriber: subscriber, context: context });
            }
        });
    };
}
exports.bindNodeCallback = bindNodeCallback;
function dispatch(state) {
    var _this = this;
    var params = state.params, subscriber = state.subscriber, context = state.context;
    var callbackFunc = params.callbackFunc, args = params.args, scheduler = params.scheduler;
    var subject = params.subject;
    if (!subject) {
        subject = params.subject = new AsyncSubject_1.AsyncSubject();
        var handler = function () {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i] = arguments[_i];
            }
            var err = innerArgs.shift();
            if (err) {
                _this.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
            }
            else {
                var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                _this.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
            }
        };
        try {
            callbackFunc.apply(context, args.concat([handler]));
        }
        catch (err) {
            this.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext(arg) {
    var value = arg.value, subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    var err = arg.err, subject = arg.subject;
    subject.error(err);
}
//# sourceMappingURL=bindNodeCallback.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/forkJoin.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/forkJoin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var empty_1 = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/internal/observable/empty.js");
var subscribeToResult_1 = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/internal/util/subscribeToResult.js");
var OuterSubscriber_1 = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/internal/OuterSubscriber.js");
var map_1 = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/internal/operators/map.js");
function forkJoin() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    var resultSelector;
    if (typeof sources[sources.length - 1] === 'function') {
        resultSelector = sources.pop();
    }
    if (sources.length === 1 && isArray_1.isArray(sources[0])) {
        sources = sources[0];
    }
    if (sources.length === 0) {
        return empty_1.EMPTY;
    }
    if (resultSelector) {
        return forkJoin(sources).pipe(map_1.map(function (args) { return resultSelector.apply(void 0, args); }));
    }
    return new Observable_1.Observable(function (subscriber) {
        return new ForkJoinSubscriber(subscriber, sources);
    });
}
exports.forkJoin = forkJoin;
var ForkJoinSubscriber = (function (_super) {
    __extends(ForkJoinSubscriber, _super);
    function ForkJoinSubscriber(destination, sources) {
        var _this = _super.call(this, destination) || this;
        _this.sources = sources;
        _this.completed = 0;
        _this.haveValues = 0;
        var len = sources.length;
        _this.values = new Array(len);
        for (var i = 0; i < len; i++) {
            var source = sources[i];
            var innerSubscription = subscribeToResult_1.subscribeToResult(_this, source, null, i);
            if (innerSubscription) {
                _this.add(innerSubscription);
            }
        }
        return _this;
    }
    ForkJoinSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.values[outerIndex] = innerValue;
        if (!innerSub._hasValue) {
            innerSub._hasValue = true;
            this.haveValues++;
        }
    };
    ForkJoinSubscriber.prototype.notifyComplete = function (innerSub) {
        var _a = this, destination = _a.destination, haveValues = _a.haveValues, values = _a.values;
        var len = values.length;
        if (!innerSub._hasValue) {
            destination.complete();
            return;
        }
        this.completed++;
        if (this.completed !== len) {
            return;
        }
        if (haveValues === len) {
            destination.next(values);
        }
        destination.complete();
    };
    return ForkJoinSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=forkJoin.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/fromEvent.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/fromEvent.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isFunction_1 = __webpack_require__(/*! ../util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var map_1 = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/internal/operators/map.js");
var toString = Object.prototype.toString;
function fromEvent(target, eventName, options, resultSelector) {
    if (isFunction_1.isFunction(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(map_1.map(function (args) { return isArray_1.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
    }
    return new Observable_1.Observable(function (subscriber) {
        function handler(e) {
            if (arguments.length > 1) {
                subscriber.next(Array.prototype.slice.call(arguments));
            }
            else {
                subscriber.next(e);
            }
        }
        setupSubscription(target, eventName, handler, subscriber, options);
    });
}
exports.fromEvent = fromEvent;
function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
    var unsubscribe;
    if (isEventTarget(sourceObj)) {
        var source_1 = sourceObj;
        sourceObj.addEventListener(eventName, handler, options);
        unsubscribe = function () { return source_1.removeEventListener(eventName, handler, options); };
    }
    else if (isJQueryStyleEventEmitter(sourceObj)) {
        var source_2 = sourceObj;
        sourceObj.on(eventName, handler);
        unsubscribe = function () { return source_2.off(eventName, handler); };
    }
    else if (isNodeStyleEventEmitter(sourceObj)) {
        var source_3 = sourceObj;
        sourceObj.addListener(eventName, handler);
        unsubscribe = function () { return source_3.removeListener(eventName, handler); };
    }
    else if (sourceObj && sourceObj.length) {
        for (var i = 0, len = sourceObj.length; i < len; i++) {
            setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
        }
    }
    else {
        throw new TypeError('Invalid event target');
    }
    subscriber.add(unsubscribe);
}
function isNodeStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isEventTarget(sourceObj) {
    return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}
//# sourceMappingURL=fromEvent.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/fromEventPattern.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/fromEventPattern.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isFunction_1 = __webpack_require__(/*! ../util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var map_1 = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/internal/operators/map.js");
function fromEventPattern(addHandler, removeHandler, resultSelector) {
    if (resultSelector) {
        return fromEventPattern(addHandler, removeHandler).pipe(map_1.map(function (args) { return isArray_1.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
    }
    return new Observable_1.Observable(function (subscriber) {
        var handler = function () {
            var e = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                e[_i] = arguments[_i];
            }
            return subscriber.next(e.length === 1 ? e[0] : e);
        };
        var retValue;
        try {
            retValue = addHandler(handler);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!isFunction_1.isFunction(removeHandler)) {
            return undefined;
        }
        return function () { return removeHandler(handler, retValue); };
    });
}
exports.fromEventPattern = fromEventPattern;
//# sourceMappingURL=fromEventPattern.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/generate.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/generate.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var identity_1 = __webpack_require__(/*! ../util/identity */ "./node_modules/rxjs/internal/util/identity.js");
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
function generate(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
    var resultSelector;
    var initialState;
    if (arguments.length == 1) {
        var options = initialStateOrOptions;
        initialState = options.initialState;
        condition = options.condition;
        iterate = options.iterate;
        resultSelector = options.resultSelector || identity_1.identity;
        scheduler = options.scheduler;
    }
    else if (resultSelectorOrObservable === undefined || isScheduler_1.isScheduler(resultSelectorOrObservable)) {
        initialState = initialStateOrOptions;
        resultSelector = identity_1.identity;
        scheduler = resultSelectorOrObservable;
    }
    else {
        initialState = initialStateOrOptions;
        resultSelector = resultSelectorOrObservable;
    }
    return new Observable_1.Observable(function (subscriber) {
        var state = initialState;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                subscriber: subscriber,
                iterate: iterate,
                condition: condition,
                resultSelector: resultSelector,
                state: state
            });
        }
        do {
            if (condition) {
                var conditionResult = void 0;
                try {
                    conditionResult = condition(state);
                }
                catch (err) {
                    subscriber.error(err);
                    return undefined;
                }
                if (!conditionResult) {
                    subscriber.complete();
                    break;
                }
            }
            var value = void 0;
            try {
                value = resultSelector(state);
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
            subscriber.next(value);
            if (subscriber.closed) {
                break;
            }
            try {
                state = iterate(state);
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
        } while (true);
        return undefined;
    });
}
exports.generate = generate;
function dispatch(state) {
    var subscriber = state.subscriber, condition = state.condition;
    if (subscriber.closed) {
        return undefined;
    }
    if (state.needIterate) {
        try {
            state.state = state.iterate(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
    }
    else {
        state.needIterate = true;
    }
    if (condition) {
        var conditionResult = void 0;
        try {
            conditionResult = condition(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!conditionResult) {
            subscriber.complete();
            return undefined;
        }
        if (subscriber.closed) {
            return undefined;
        }
    }
    var value;
    try {
        value = state.resultSelector(state.state);
    }
    catch (err) {
        subscriber.error(err);
        return undefined;
    }
    if (subscriber.closed) {
        return undefined;
    }
    subscriber.next(value);
    if (subscriber.closed) {
        return undefined;
    }
    return this.schedule(state);
}
//# sourceMappingURL=generate.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/iif.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/iif.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var defer_1 = __webpack_require__(/*! ./defer */ "./node_modules/rxjs/internal/observable/defer.js");
var empty_1 = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/internal/observable/empty.js");
function iif(condition, trueResult, falseResult) {
    if (trueResult === void 0) { trueResult = empty_1.EMPTY; }
    if (falseResult === void 0) { falseResult = empty_1.EMPTY; }
    return defer_1.defer(function () { return condition() ? trueResult : falseResult; });
}
exports.iif = iif;
//# sourceMappingURL=iif.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/interval.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/interval.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var async_1 = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/internal/scheduler/async.js");
var isNumeric_1 = __webpack_require__(/*! ../util/isNumeric */ "./node_modules/rxjs/internal/util/isNumeric.js");
function interval(period, scheduler) {
    if (period === void 0) { period = 0; }
    if (scheduler === void 0) { scheduler = async_1.async; }
    if (!isNumeric_1.isNumeric(period) || period < 0) {
        period = 0;
    }
    if (!scheduler || typeof scheduler.schedule !== 'function') {
        scheduler = async_1.async;
    }
    return new Observable_1.Observable(function (subscriber) {
        subscriber.add(scheduler.schedule(dispatch, period, { subscriber: subscriber, counter: 0, period: period }));
        return subscriber;
    });
}
exports.interval = interval;
function dispatch(state) {
    var subscriber = state.subscriber, counter = state.counter, period = state.period;
    subscriber.next(counter);
    this.schedule({ subscriber: subscriber, counter: counter + 1, period: period }, period);
}
//# sourceMappingURL=interval.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/never.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/never.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var noop_1 = __webpack_require__(/*! ../util/noop */ "./node_modules/rxjs/internal/util/noop.js");
exports.NEVER = new Observable_1.Observable(noop_1.noop);
function never() {
    return exports.NEVER;
}
exports.never = never;
//# sourceMappingURL=never.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/onErrorResumeNext.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/onErrorResumeNext.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var from_1 = __webpack_require__(/*! ./from */ "./node_modules/rxjs/internal/observable/from.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var empty_1 = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/internal/observable/empty.js");
function onErrorResumeNext() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    if (sources.length === 0) {
        return empty_1.EMPTY;
    }
    var first = sources[0], remainder = sources.slice(1);
    if (sources.length === 1 && isArray_1.isArray(first)) {
        return onErrorResumeNext.apply(void 0, first);
    }
    return new Observable_1.Observable(function (subscriber) {
        var subNext = function () { return subscriber.add(onErrorResumeNext.apply(void 0, remainder).subscribe(subscriber)); };
        return from_1.from(first).subscribe({
            next: function (value) { subscriber.next(value); },
            error: subNext,
            complete: subNext,
        });
    });
}
exports.onErrorResumeNext = onErrorResumeNext;
//# sourceMappingURL=onErrorResumeNext.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/pairs.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/pairs.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
function pairs(obj, scheduler) {
    if (!scheduler) {
        return new Observable_1.Observable(function (subscriber) {
            var keys = Object.keys(obj);
            for (var i = 0; i < keys.length && !subscriber.closed; i++) {
                var key = keys[i];
                if (obj.hasOwnProperty(key)) {
                    subscriber.next([key, obj[key]]);
                }
            }
            subscriber.complete();
        });
    }
    else {
        return new Observable_1.Observable(function (subscriber) {
            var keys = Object.keys(obj);
            var subscription = new Subscription_1.Subscription();
            subscription.add(scheduler.schedule(dispatch, 0, { keys: keys, index: 0, subscriber: subscriber, subscription: subscription, obj: obj }));
            return subscription;
        });
    }
}
exports.pairs = pairs;
function dispatch(state) {
    var keys = state.keys, index = state.index, subscriber = state.subscriber, subscription = state.subscription, obj = state.obj;
    if (!subscriber.closed) {
        if (index < keys.length) {
            var key = keys[index];
            subscriber.next([key, obj[key]]);
            subscription.add(this.schedule({ keys: keys, index: index + 1, subscriber: subscriber, subscription: subscription, obj: obj }));
        }
        else {
            subscriber.complete();
        }
    }
}
exports.dispatch = dispatch;
//# sourceMappingURL=pairs.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/range.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/range.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
function range(start, count, scheduler) {
    if (start === void 0) { start = 0; }
    if (count === void 0) { count = 0; }
    return new Observable_1.Observable(function (subscriber) {
        var index = 0;
        var current = start;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                index: index, count: count, start: start, subscriber: subscriber
            });
        }
        else {
            do {
                if (index++ >= count) {
                    subscriber.complete();
                    break;
                }
                subscriber.next(current++);
                if (subscriber.closed) {
                    break;
                }
            } while (true);
        }
        return undefined;
    });
}
exports.range = range;
function dispatch(state) {
    var start = state.start, index = state.index, count = state.count, subscriber = state.subscriber;
    if (index >= count) {
        subscriber.complete();
        return;
    }
    subscriber.next(start);
    if (subscriber.closed) {
        return;
    }
    state.index = index + 1;
    state.start = start + 1;
    this.schedule(state);
}
exports.dispatch = dispatch;
//# sourceMappingURL=range.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/using.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/using.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var from_1 = __webpack_require__(/*! ./from */ "./node_modules/rxjs/internal/observable/from.js");
var empty_1 = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/internal/observable/empty.js");
function using(resourceFactory, observableFactory) {
    return new Observable_1.Observable(function (subscriber) {
        var resource;
        try {
            resource = resourceFactory();
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var result;
        try {
            result = observableFactory(resource);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var source = result ? from_1.from(result) : empty_1.EMPTY;
        var subscription = source.subscribe(subscriber);
        return function () {
            subscription.unsubscribe();
            if (resource) {
                resource.unsubscribe();
            }
        };
    });
}
exports.using = using;
//# sourceMappingURL=using.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AnimationFrameAction.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AnimationFrameAction.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AsyncAction_1 = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/internal/scheduler/AsyncAction.js");
var AnimationFrameAction = (function (_super) {
    __extends(AnimationFrameAction, _super);
    function AnimationFrameAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function () { return scheduler.flush(null); }));
    };
    AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            cancelAnimationFrame(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    };
    return AnimationFrameAction;
}(AsyncAction_1.AsyncAction));
exports.AnimationFrameAction = AnimationFrameAction;
//# sourceMappingURL=AnimationFrameAction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AnimationFrameScheduler.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AnimationFrameScheduler.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AsyncScheduler_1 = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js");
var AnimationFrameScheduler = (function (_super) {
    __extends(AnimationFrameScheduler, _super);
    function AnimationFrameScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnimationFrameScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AnimationFrameScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.AnimationFrameScheduler = AnimationFrameScheduler;
//# sourceMappingURL=AnimationFrameScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/VirtualTimeScheduler.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/VirtualTimeScheduler.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AsyncAction_1 = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/internal/scheduler/AsyncAction.js");
var AsyncScheduler_1 = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js");
var VirtualTimeScheduler = (function (_super) {
    __extends(VirtualTimeScheduler, _super);
    function VirtualTimeScheduler(SchedulerAction, maxFrames) {
        if (SchedulerAction === void 0) { SchedulerAction = VirtualAction; }
        if (maxFrames === void 0) { maxFrames = Number.POSITIVE_INFINITY; }
        var _this = _super.call(this, SchedulerAction, function () { return _this.frame; }) || this;
        _this.maxFrames = maxFrames;
        _this.frame = 0;
        _this.index = -1;
        return _this;
    }
    VirtualTimeScheduler.prototype.flush = function () {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error, action;
        while ((action = actions.shift()) && (this.frame = action.delay) <= maxFrames) {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    VirtualTimeScheduler.frameTimeFactor = 10;
    return VirtualTimeScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.VirtualTimeScheduler = VirtualTimeScheduler;
var VirtualAction = (function (_super) {
    __extends(VirtualAction, _super);
    function VirtualAction(scheduler, work, index) {
        if (index === void 0) { index = scheduler.index += 1; }
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.index = index;
        _this.active = true;
        _this.index = scheduler.index = index;
        return _this;
    }
    VirtualAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (!this.id) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.active = false;
        var action = new VirtualAction(this.scheduler, this.work);
        this.add(action);
        return action.schedule(state, delay);
    };
    VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction.sortActions);
        return true;
    };
    VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return undefined;
    };
    VirtualAction.prototype._execute = function (state, delay) {
        if (this.active === true) {
            return _super.prototype._execute.call(this, state, delay);
        }
    };
    VirtualAction.sortActions = function (a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) {
                return 0;
            }
            else if (a.index > b.index) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else if (a.delay > b.delay) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return VirtualAction;
}(AsyncAction_1.AsyncAction));
exports.VirtualAction = VirtualAction;
//# sourceMappingURL=VirtualTimeScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/animationFrame.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/animationFrame.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AnimationFrameAction_1 = __webpack_require__(/*! ./AnimationFrameAction */ "./node_modules/rxjs/internal/scheduler/AnimationFrameAction.js");
var AnimationFrameScheduler_1 = __webpack_require__(/*! ./AnimationFrameScheduler */ "./node_modules/rxjs/internal/scheduler/AnimationFrameScheduler.js");
exports.animationFrame = new AnimationFrameScheduler_1.AnimationFrameScheduler(AnimationFrameAction_1.AnimationFrameAction);
//# sourceMappingURL=animationFrame.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isObservable.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObservable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
function isObservable(obj) {
    return !!obj && (obj instanceof Observable_1.Observable || (typeof obj.lift === 'function' && typeof obj.subscribe === 'function'));
}
exports.isObservable = isObservable;
//# sourceMappingURL=isObservable.js.map

/***/ }),

/***/ "./src/app/documentation/components/documentation-loader/documentation-loader.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/documentation/components/documentation-loader/documentation-loader.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section\n  class=\"documentation-wrapper\"\n  [innerHtml]=\"docHtml\"></section>\n"

/***/ }),

/***/ "./src/app/documentation/components/documentation-loader/documentation-loader.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/documentation/components/documentation-loader/documentation-loader.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".documentation-wrapper ::ng-deep > *:not(.container-main) {\n  display: none; }\n\n@media screen and (max-width: 1024px) {\n  ::ng-deep .documentation-wrapper .menu-sticky-wrap {\n    width: 100% !important; }\n  ::ng-deep .documentation-wrapper .container.container-main > .row > .col-8.col-content {\n    width: 100% !important; } }\n"

/***/ }),

/***/ "./src/app/documentation/components/documentation-loader/documentation-loader.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/documentation/components/documentation-loader/documentation-loader.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: DocumentationLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationLoaderComponent", function() { return DocumentationLoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-toolkit/universal */ "./node_modules/@ng-toolkit/universal/fesm5/ng-toolkit-universal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_documentation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/documentation.service */ "./src/app/documentation/services/documentation.service.ts");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var DocumentationLoaderComponent = /** @class */ (function () {
    function DocumentationLoaderComponent(window, router, routing, documentation, domSanitizer, cd) {
        this.window = window;
        this.router = router;
        this.routing = routing;
        this.documentation = documentation;
        this.domSanitizer = domSanitizer;
        this.cd = cd;
        this.destroyer$ = new rxjs_index__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    DocumentationLoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.data
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) { return data.body; }))
            .subscribe(function (html) { return _this.setDoc(html); });
        this.window.addEventListener('click', function (e) { return _this.clickHandler(e); });
    };
    DocumentationLoaderComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.window.removeEventListener('click', function (e) { return _this.clickHandler(e); });
        this.destroyer$.next();
        this.destroyer$.complete();
    };
    DocumentationLoaderComponent.prototype.clickHandler = function (event) {
        var element;
        if (event.srcElement.nodeName.toLowerCase() === 'em') {
            element = event.srcElement.closest('a');
        }
        if (element || ['a'].indexOf(event.srcElement.nodeName.toLowerCase()) > -1) {
            element = element || event.srcElement;
            if (element.dataset.pass) {
                return;
            }
            event.preventDefault();
            var href = element['href'].split(element['host'])[1];
            if (href.includes("#"))
                return;
            href = href.split('.html')[0];
            href = href.split('/').filter(function (param) { return !!param; });
            var params = void 0;
            if (href.length === 2 && !(href[0] === 'framework' || href[1] === 'index' || href[1] === 'globals')) {
                params = [this.router.snapshot.params.module];
            }
            else if (href.length === 1 && !(href[0] === 'framework' || href[0] === 'globals')) {
                // return;
                params = [this.router.snapshot.params.module, this.router.snapshot.params.type];
            }
            else if (href[0] === 'globals') {
                params = [this.router.snapshot.params.module];
            }
            else {
                params = [];
            }
            params.push.apply(params, href);
            this.routing.navigate(['documentation'].concat(params));
        }
    };
    DocumentationLoaderComponent.prototype.setDoc = function (docHtml) {
        this.docHtml = this.domSanitizer.bypassSecurityTrustHtml(docHtml);
        this.cd.markForCheck();
        // this.cd.detectChanges();
    };
    DocumentationLoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sug-documentation-loader',
            template: __webpack_require__(/*! ./documentation-loader.component.html */ "./src/app/documentation/components/documentation-loader/documentation-loader.component.html"),
            styles: [__webpack_require__(/*! ./documentation-loader.component.scss */ "./src/app/documentation/components/documentation-loader/documentation-loader.component.scss"), __webpack_require__(/*! ../../../../assets/helpers/ts-doc-styles.scss */ "./src/assets/helpers/ts-doc-styles.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_1__["WINDOW"])),
        __metadata("design:paramtypes", [Window, _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_documentation_service__WEBPACK_IMPORTED_MODULE_3__["DocumentationService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], DocumentationLoaderComponent);
    return DocumentationLoaderComponent;
}());



/***/ }),

/***/ "./src/app/documentation/components/documentation/documentation.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/documentation/components/documentation/documentation.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"documentation-wrapper\">\n  <router-outlet></router-outlet>\n</section>\n"

/***/ }),

/***/ "./src/app/documentation/components/documentation/documentation.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/documentation/components/documentation/documentation.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".documentation-wrapper {\n  font-size: 1.5rem; }\n"

/***/ }),

/***/ "./src/app/documentation/components/documentation/documentation.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/documentation/components/documentation/documentation.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationComponent", function() { return DocumentationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DocumentationComponent = /** @class */ (function () {
    function DocumentationComponent() {
    }
    DocumentationComponent.prototype.ngOnInit = function () { };
    DocumentationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sug-documentation',
            template: __webpack_require__(/*! ./documentation.component.html */ "./src/app/documentation/components/documentation/documentation.component.html"),
            styles: [__webpack_require__(/*! ./documentation.component.scss */ "./src/app/documentation/components/documentation/documentation.component.scss")]
        })
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/documentation/documentation-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/documentation/documentation-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DocumentationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationRoutingModule", function() { return DocumentationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/documentation/documentation.component */ "./src/app/documentation/components/documentation/documentation.component.ts");
/* harmony import */ var _components_documentation_loader_documentation_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/documentation-loader/documentation-loader.component */ "./src/app/documentation/components/documentation-loader/documentation-loader.component.ts");
/* harmony import */ var _services_documentation_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/documentation-resolver.service */ "./src/app/documentation/services/documentation-resolver.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DocumentationRoutingModule = /** @class */ (function () {
    function DocumentationRoutingModule() {
    }
    DocumentationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_2__["DocumentationComponent"],
                        children: [
                            {
                                path: ':module/:type/:name',
                                component: _components_documentation_loader_documentation_loader_component__WEBPACK_IMPORTED_MODULE_3__["DocumentationLoaderComponent"],
                                resolve: {
                                    body: _services_documentation_resolver_service__WEBPACK_IMPORTED_MODULE_4__["DocumentationResolverService"]
                                }
                            },
                            {
                                path: ':module/:type',
                                component: _components_documentation_loader_documentation_loader_component__WEBPACK_IMPORTED_MODULE_3__["DocumentationLoaderComponent"],
                                resolve: {
                                    body: _services_documentation_resolver_service__WEBPACK_IMPORTED_MODULE_4__["DocumentationResolverService"]
                                }
                            },
                            {
                                path: '',
                                redirectTo: 'framework/index',
                                pathMatch: 'full'
                            }
                        ]
                    }
                ])]
        })
    ], DocumentationRoutingModule);
    return DocumentationRoutingModule;
}());



/***/ }),

/***/ "./src/app/documentation/documentation.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/documentation/documentation.module.ts ***!
  \*******************************************************/
/*! exports provided: DocumentationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationModule", function() { return DocumentationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _documentation_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./documentation-routing.module */ "./src/app/documentation/documentation-routing.module.ts");
/* harmony import */ var _components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/documentation/documentation.component */ "./src/app/documentation/components/documentation/documentation.component.ts");
/* harmony import */ var _components_documentation_loader_documentation_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/documentation-loader/documentation-loader.component */ "./src/app/documentation/components/documentation-loader/documentation-loader.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_documentation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/documentation.service */ "./src/app/documentation/services/documentation.service.ts");
/* harmony import */ var _services_documentation_resolver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/documentation-resolver.service */ "./src/app/documentation/services/documentation-resolver.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DocumentationModule = /** @class */ (function () {
    function DocumentationModule() {
    }
    DocumentationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _documentation_routing_module__WEBPACK_IMPORTED_MODULE_2__["DocumentationRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [_services_documentation_service__WEBPACK_IMPORTED_MODULE_6__["DocumentationService"], _services_documentation_resolver_service__WEBPACK_IMPORTED_MODULE_7__["DocumentationResolverService"]],
            declarations: [_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_3__["DocumentationComponent"], _components_documentation_loader_documentation_loader_component__WEBPACK_IMPORTED_MODULE_4__["DocumentationLoaderComponent"]],
            entryComponents: [_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_3__["DocumentationComponent"], _components_documentation_loader_documentation_loader_component__WEBPACK_IMPORTED_MODULE_4__["DocumentationLoaderComponent"]]
        })
    ], DocumentationModule);
    return DocumentationModule;
}());



/***/ }),

/***/ "./src/app/documentation/services/documentation-resolver.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/documentation/services/documentation-resolver.service.ts ***!
  \**************************************************************************/
/*! exports provided: DocumentationResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationResolverService", function() { return DocumentationResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _documentation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./documentation.service */ "./src/app/documentation/services/documentation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocumentationResolverService = /** @class */ (function () {
    function DocumentationResolverService(documentationService) {
        this.documentationService = documentationService;
    }
    DocumentationResolverService.prototype.resolve = function (route, state) {
        return this.documentationService.getDocumentation(route.params.module, route.params.type, route.params.name);
    };
    DocumentationResolverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_documentation_service__WEBPACK_IMPORTED_MODULE_1__["DocumentationService"]])
    ], DocumentationResolverService);
    return DocumentationResolverService;
}());



/***/ }),

/***/ "./src/app/documentation/services/documentation.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/documentation/services/documentation.service.ts ***!
  \*****************************************************************/
/*! exports provided: DocumentationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationService", function() { return DocumentationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DocumentationService = /** @class */ (function () {
    function DocumentationService(http) {
        this.http = http;
    }
    DocumentationService_1 = DocumentationService;
    DocumentationService.getUri = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        return DocumentationService_1.DOCUMENTATION_BASE_URI + "/" + params.join("/");
    };
    DocumentationService.prototype.getDocumentation = function (module, type, name) {
        var uri = !!name
            ? DocumentationService_1.getUri(module, type, name + '.html')
            : DocumentationService_1.getUri(module, type + '.html');
        return this.http.get(uri, { observe: 'response', responseType: "text" })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) { return resp.body; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return '<h1>Not Found</h1>'; }));
    };
    DocumentationService.DOCUMENTATION_BASE_URI = "/assets/docs";
    DocumentationService = DocumentationService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DocumentationService);
    return DocumentationService;
    var DocumentationService_1;
}());



/***/ }),

/***/ "./src/assets/helpers/ts-doc-styles.scss":
/*!***********************************************!*\
  !*** ./src/assets/helpers/ts-doc-styles.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep.documentation-wrapper {\n  /*! normalize.css v1.1.3 | MIT License | git.io/normalize */\n  /* ========================================================================== HTML5 display definitions ========================================================================== */\n  /** Correct `block` display not defined in IE 6/7/8/9 and Firefox 3. */\n  /** Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3. */\n  /** Prevent modern browsers from displaying `audio` without controls. Remove excess height in iOS 5 devices. */\n  /** Address styling not present in IE 7/8/9, Firefox 3, and Safari 4. Known issue: no IE 6 support. */\n  /* ========================================================================== Base ========================================================================== */\n  /** 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using `em` units. 2. Prevent iOS text size adjust after orientation change, without disabling user zoom. */\n  /** Address `font-family` inconsistency between `textarea` and other form elements. */\n  /** Address margins handled incorrectly in IE 6/7. */\n  /* ========================================================================== Links ========================================================================== */\n  /** Address `outline` inconsistency between Chrome and other browsers. */\n  /** Improve readability when focused and also mouse hovered in all browsers. */\n  /* ========================================================================== Typography ========================================================================== */\n  /** Address font sizes and margins set differently in IE 6/7. Address font sizes within `section` and `article` in Firefox 4+, Safari 5, and Chrome. */\n  /** Address styling not present in IE 7/8/9, Safari 5, and Chrome. */\n  /** Address style set to `bolder` in Firefox 3+, Safari 4/5, and Chrome. */\n  /** Address styling not present in Safari 5 and Chrome. */\n  /** Address differences between Firefox and other browsers. Known issue: no IE 6/7 normalization. */\n  /** Address styling not present in IE 6/7/8/9. */\n  /** Address margins set differently in IE 6/7. */\n  /** Correct font family set oddly in IE 6, Safari 4/5, and Chrome. */\n  /** Improve readability of pre-formatted text in all browsers. */\n  /** Address CSS quotes not supported in IE 6/7. */\n  /** Address `quotes` property not supported in Safari 4. */\n  /** Address inconsistent and variable font size in all browsers. */\n  /** Prevent `sub` and `sup` affecting `line-height` in all browsers. */\n  /* ========================================================================== Lists ========================================================================== */\n  /** Address margins set differently in IE 6/7. */\n  /** Address paddings set differently in IE 6/7. */\n  /** Correct list images handled incorrectly in IE 7. */\n  /* ========================================================================== Embedded content ========================================================================== */\n  /** 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3. 2. Improve image quality when scaled in IE 7. */\n  /* 2 */\n  /** Correct overflow displayed oddly in IE 9. */\n  /* ========================================================================== Figures ========================================================================== */\n  /** Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11. */\n  /* ========================================================================== Forms ========================================================================== */\n  /** Correct margin displayed oddly in IE 6/7. */\n  /** Define consistent border, margin, and padding. */\n  /** 1. Correct color not being inherited in IE 6/7/8/9. 2. Correct text not wrapping in Firefox 3. 3. Correct alignment displayed oddly in IE 6/7. */\n  /* 3 */\n  /** 1. Correct font size not being inherited in all browsers. 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5, and Chrome. 3. Improve appearance and consistency in all browsers. */\n  /* 3 */\n  /** Address Firefox 3+ setting `line-height` on `input` using `!important` in the UA stylesheet. */\n  /** Address inconsistent `text-transform` inheritance for `button` and `select`. All other form control elements do not inherit `text-transform` values. Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+. Correct `select` style inheritance in Firefox 4+ and Opera. */\n  /** 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio` and `video` controls. 2. Correct inability to style clickable `input` types in iOS. 3. Improve usability and consistency of cursor style between image-type `input` and others. 4. Remove inner spacing in IE 7 without affecting normal text inputs. Known issue: inner spacing remains in IE 6. */\n  /* 4 */\n  /* 4 */\n  /** Re-set default cursor for disabled elements. */\n  /** 1. Address box sizing set to content-box in IE 8/9. 2. Remove excess padding in IE 8/9. 3. Remove excess padding in IE 7. Known issue: excess padding remains in IE 6. */\n  /** 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome. 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome (include `-moz` to future-proof). */\n  /** Remove inner padding and search cancel button in Safari 5 and Chrome on OS X. */\n  /** Remove inner padding and border in Firefox 3+. */\n  /** 1. Remove default vertical scrollbar in IE 6/7/8/9. 2. Improve readability and alignment in all browsers. */\n  /* 2 */\n  /* ========================================================================== Tables ========================================================================== */\n  /** Remove most spacing between table cells. */\n  /* Visual Studio-like style based on original C# coloring by Jason Diamond <jason@diamond.name> */ }\n  ::ng-deep.documentation-wrapper article, ::ng-deep.documentation-wrapper aside, ::ng-deep.documentation-wrapper details, ::ng-deep.documentation-wrapper figcaption, ::ng-deep.documentation-wrapper figure, ::ng-deep.documentation-wrapper footer, ::ng-deep.documentation-wrapper header, ::ng-deep.documentation-wrapper hgroup, ::ng-deep.documentation-wrapper main, ::ng-deep.documentation-wrapper nav, ::ng-deep.documentation-wrapper section, ::ng-deep.documentation-wrapper summary {\n    display: block; }\n  ::ng-deep.documentation-wrapper audio, ::ng-deep.documentation-wrapper canvas, ::ng-deep.documentation-wrapper video {\n    display: inline-block;\n    *display: inline;\n    *zoom: 1; }\n  ::ng-deep.documentation-wrapper audio:not([controls]) {\n    display: none;\n    height: 0; }\n  ::ng-deep.documentation-wrapper [hidden] {\n    display: none; }\n  ::ng-deep.documentation-wrapper html {\n    font-size: 100%;\n    /* 1 */\n    -ms-text-size-adjust: 100%;\n    /* 2 */\n    -webkit-text-size-adjust: 100%;\n    /* 2 */\n    font-family: sans-serif; }\n  ::ng-deep.documentation-wrapper button, ::ng-deep.documentation-wrapper input, ::ng-deep.documentation-wrapper select, ::ng-deep.documentation-wrapper textarea {\n    font-family: sans-serif; }\n  ::ng-deep.documentation-wrapper body {\n    margin: 0; }\n  ::ng-deep.documentation-wrapper a:focus {\n    outline: thin dotted; }\n  ::ng-deep.documentation-wrapper a:active, ::ng-deep.documentation-wrapper a:hover {\n    outline: 0; }\n  ::ng-deep.documentation-wrapper h1 {\n    font-size: 2em;\n    margin: 0.67em 0; }\n  ::ng-deep.documentation-wrapper h2 {\n    font-size: 1.5em;\n    margin: 0.83em 0; }\n  ::ng-deep.documentation-wrapper h3 {\n    font-size: 1.17em;\n    margin: 1em 0; }\n  ::ng-deep.documentation-wrapper h4, ::ng-deep.documentation-wrapper .tsd-index-panel h3 {\n    font-size: 1em;\n    margin: 1.33em 0; }\n  ::ng-deep.documentation-wrapper h5 {\n    font-size: 0.83em;\n    margin: 1.67em 0; }\n  ::ng-deep.documentation-wrapper h6 {\n    font-size: 0.67em;\n    margin: 2.33em 0; }\n  ::ng-deep.documentation-wrapper abbr[title] {\n    border-bottom: 1px dotted; }\n  ::ng-deep.documentation-wrapper b, ::ng-deep.documentation-wrapper strong {\n    font-weight: bold; }\n  ::ng-deep.documentation-wrapper blockquote {\n    margin: 1em 40px; }\n  ::ng-deep.documentation-wrapper dfn {\n    font-style: italic; }\n  ::ng-deep.documentation-wrapper hr {\n    box-sizing: content-box;\n    height: 0; }\n  ::ng-deep.documentation-wrapper mark {\n    background: #ff0;\n    color: #000; }\n  ::ng-deep.documentation-wrapper p, ::ng-deep.documentation-wrapper pre {\n    margin: 1em 0; }\n  ::ng-deep.documentation-wrapper code, ::ng-deep.documentation-wrapper kbd, ::ng-deep.documentation-wrapper pre, ::ng-deep.documentation-wrapper samp {\n    font-family: monospace, serif;\n    _font-family: \"courier new\", monospace;\n    font-size: 1em; }\n  ::ng-deep.documentation-wrapper pre {\n    white-space: pre;\n    white-space: pre-wrap;\n    word-wrap: break-word; }\n  ::ng-deep.documentation-wrapper q {\n    quotes: none; }\n  ::ng-deep.documentation-wrapper q:before, ::ng-deep.documentation-wrapper q:after {\n    content: \"\";\n    content: none; }\n  ::ng-deep.documentation-wrapper small {\n    font-size: 80%; }\n  ::ng-deep.documentation-wrapper sub {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline; }\n  ::ng-deep.documentation-wrapper sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n    top: -0.5em; }\n  ::ng-deep.documentation-wrapper sub {\n    bottom: -0.25em; }\n  ::ng-deep.documentation-wrapper dl, ::ng-deep.documentation-wrapper menu, ::ng-deep.documentation-wrapper ol, ::ng-deep.documentation-wrapper ul {\n    margin: 1em 0; }\n  ::ng-deep.documentation-wrapper dd {\n    margin: 0 0 0 40px; }\n  ::ng-deep.documentation-wrapper menu, ::ng-deep.documentation-wrapper ol, ::ng-deep.documentation-wrapper ul {\n    padding: 0 0 0 40px; }\n  ::ng-deep.documentation-wrapper nav ul, ::ng-deep.documentation-wrapper nav ol {\n    list-style: none;\n    list-style-image: none; }\n  ::ng-deep.documentation-wrapper img {\n    border: 0;\n    /* 1 */\n    -ms-interpolation-mode: bicubic; }\n  ::ng-deep.documentation-wrapper svg:not(:root) {\n    overflow: hidden; }\n  ::ng-deep.documentation-wrapper figure, ::ng-deep.documentation-wrapper form {\n    margin: 0; }\n  ::ng-deep.documentation-wrapper fieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em; }\n  ::ng-deep.documentation-wrapper legend {\n    border: 0;\n    /* 1 */\n    padding: 0;\n    white-space: normal;\n    /* 2 */\n    *margin-left: -7px; }\n  ::ng-deep.documentation-wrapper button, ::ng-deep.documentation-wrapper input, ::ng-deep.documentation-wrapper select, ::ng-deep.documentation-wrapper textarea {\n    font-size: 100%;\n    /* 1 */\n    margin: 0;\n    /* 2 */\n    vertical-align: baseline;\n    /* 3 */\n    *vertical-align: middle; }\n  ::ng-deep.documentation-wrapper button, ::ng-deep.documentation-wrapper input {\n    line-height: normal; }\n  ::ng-deep.documentation-wrapper button, ::ng-deep.documentation-wrapper select {\n    text-transform: none; }\n  ::ng-deep.documentation-wrapper button, ::ng-deep.documentation-wrapper html input[type=\"button\"] {\n    -webkit-appearance: button;\n    /* 2 */\n    cursor: pointer;\n    /* 3 */\n    *overflow: visible; }\n  ::ng-deep.documentation-wrapper input[type=\"reset\"], ::ng-deep.documentation-wrapper input[type=\"submit\"] {\n    -webkit-appearance: button;\n    /* 2 */\n    cursor: pointer;\n    /* 3 */\n    *overflow: visible; }\n  ::ng-deep.documentation-wrapper button[disabled], ::ng-deep.documentation-wrapper html input[disabled] {\n    cursor: default; }\n  ::ng-deep.documentation-wrapper input {\n    /* 3 */ }\n  ::ng-deep.documentation-wrapper input[type=\"checkbox\"], ::ng-deep.documentation-wrapper input[type=\"radio\"] {\n    box-sizing: border-box;\n    /* 1 */\n    padding: 0;\n    /* 2 */\n    *height: 13px;\n    /* 3 */\n    *width: 13px; }\n  ::ng-deep.documentation-wrapper input[type=\"search\"] {\n    -webkit-appearance: textfield;\n    /* 1 */\n    /* 2 */\n    box-sizing: content-box; }\n  ::ng-deep.documentation-wrapper input[type=\"search\"]::-webkit-search-cancel-button, ::ng-deep.documentation-wrapper input[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none; }\n  ::ng-deep.documentation-wrapper button::-moz-focus-inner, ::ng-deep.documentation-wrapper input::-moz-focus-inner {\n    border: 0;\n    padding: 0; }\n  ::ng-deep.documentation-wrapper textarea {\n    overflow: auto;\n    /* 1 */\n    vertical-align: top; }\n  ::ng-deep.documentation-wrapper table {\n    border-collapse: collapse;\n    border-spacing: 0; }\n  ::ng-deep.documentation-wrapper .hljs {\n    display: inline-block;\n    padding: 0.5em;\n    background: white;\n    color: black; }\n  ::ng-deep.documentation-wrapper .hljs-comment, ::ng-deep.documentation-wrapper .hljs-annotation, ::ng-deep.documentation-wrapper .hljs-template_comment, ::ng-deep.documentation-wrapper .diff .hljs-header, ::ng-deep.documentation-wrapper .hljs-chunk, ::ng-deep.documentation-wrapper .apache .hljs-cbracket {\n    color: #008000; }\n  ::ng-deep.documentation-wrapper .hljs-keyword, ::ng-deep.documentation-wrapper .hljs-id, ::ng-deep.documentation-wrapper .hljs-built_in, ::ng-deep.documentation-wrapper .css .smalltalk .hljs-class, ::ng-deep.documentation-wrapper .hljs-winutils, ::ng-deep.documentation-wrapper .bash .hljs-variable, ::ng-deep.documentation-wrapper .tex .hljs-command, ::ng-deep.documentation-wrapper .hljs-request, ::ng-deep.documentation-wrapper .hljs-status, ::ng-deep.documentation-wrapper .nginx .hljs-title {\n    color: #00f; }\n  ::ng-deep.documentation-wrapper .xml .hljs-tag {\n    color: #00f; }\n  ::ng-deep.documentation-wrapper .xml .hljs-tag .hljs-value {\n    color: #00f; }\n  ::ng-deep.documentation-wrapper .hljs-string, ::ng-deep.documentation-wrapper .hljs-title, ::ng-deep.documentation-wrapper .hljs-parent, ::ng-deep.documentation-wrapper .hljs-tag .hljs-value, ::ng-deep.documentation-wrapper .hljs-rules .hljs-value {\n    color: #a31515; }\n  ::ng-deep.documentation-wrapper .ruby .hljs-symbol {\n    color: #a31515; }\n  ::ng-deep.documentation-wrapper .ruby .hljs-symbol .hljs-string {\n    color: #a31515; }\n  ::ng-deep.documentation-wrapper .hljs-template_tag, ::ng-deep.documentation-wrapper .django .hljs-variable, ::ng-deep.documentation-wrapper .hljs-addition, ::ng-deep.documentation-wrapper .hljs-flow, ::ng-deep.documentation-wrapper .hljs-stream, ::ng-deep.documentation-wrapper .apache .hljs-tag, ::ng-deep.documentation-wrapper .hljs-date, ::ng-deep.documentation-wrapper .tex .hljs-formula, ::ng-deep.documentation-wrapper .coffeescript .hljs-attribute {\n    color: #a31515; }\n  ::ng-deep.documentation-wrapper .ruby .hljs-string, ::ng-deep.documentation-wrapper .hljs-decorator, ::ng-deep.documentation-wrapper .hljs-filter .hljs-argument, ::ng-deep.documentation-wrapper .hljs-localvars, ::ng-deep.documentation-wrapper .hljs-array, ::ng-deep.documentation-wrapper .hljs-attr_selector, ::ng-deep.documentation-wrapper .hljs-pseudo, ::ng-deep.documentation-wrapper .hljs-pi, ::ng-deep.documentation-wrapper .hljs-doctype, ::ng-deep.documentation-wrapper .hljs-deletion, ::ng-deep.documentation-wrapper .hljs-envvar, ::ng-deep.documentation-wrapper .hljs-shebang, ::ng-deep.documentation-wrapper .hljs-preprocessor, ::ng-deep.documentation-wrapper .hljs-pragma, ::ng-deep.documentation-wrapper .userType, ::ng-deep.documentation-wrapper .apache .hljs-sqbracket, ::ng-deep.documentation-wrapper .nginx .hljs-built_in, ::ng-deep.documentation-wrapper .tex .hljs-special, ::ng-deep.documentation-wrapper .hljs-prompt {\n    color: #2b91af; }\n  ::ng-deep.documentation-wrapper .hljs-phpdoc, ::ng-deep.documentation-wrapper .hljs-javadoc, ::ng-deep.documentation-wrapper .hljs-xmlDocTag {\n    color: #808080; }\n  ::ng-deep.documentation-wrapper .vhdl .hljs-typename {\n    font-weight: bold; }\n  ::ng-deep.documentation-wrapper .vhdl .hljs-string {\n    color: #666666; }\n  ::ng-deep.documentation-wrapper .vhdl .hljs-literal {\n    color: #a31515; }\n  ::ng-deep.documentation-wrapper .vhdl .hljs-attribute {\n    color: #00b0e8; }\n  ::ng-deep.documentation-wrapper .xml .hljs-attribute {\n    color: #f00; }\n  ::ng-deep.documentation-wrapper .col > :first-child, ::ng-deep.documentation-wrapper .col-1 > :first-child, ::ng-deep.documentation-wrapper .col-2 > :first-child, ::ng-deep.documentation-wrapper .col-3 > :first-child, ::ng-deep.documentation-wrapper .col-4 > :first-child, ::ng-deep.documentation-wrapper .col-5 > :first-child, ::ng-deep.documentation-wrapper .col-6 > :first-child, ::ng-deep.documentation-wrapper .col-7 > :first-child, ::ng-deep.documentation-wrapper .col-8 > :first-child, ::ng-deep.documentation-wrapper .col-9 > :first-child, ::ng-deep.documentation-wrapper .col-10 > :first-child, ::ng-deep.documentation-wrapper .col-11 > :first-child, ::ng-deep.documentation-wrapper .tsd-panel > :first-child, ::ng-deep.documentation-wrapper ul.tsd-descriptions > li > :first-child, ::ng-deep.documentation-wrapper .col > :first-child > :first-child, ::ng-deep.documentation-wrapper .col-1 > :first-child > :first-child, ::ng-deep.documentation-wrapper .col-2 > :first-child > :first-child, ::ng-deep.documentation-wrapper .col-3 > :first-child > :first-child, ::ng-deep.documentation-wrapper .col-4 > :first-child > :first-child, ::ng-deep.documentation-wrapper .col-5 > :first-child > :first-child, ::ng-deep.documentation-wrapper .col-6 > :first-child > :first-child, ::ng-deep.documentation-wrapper .col-7 > :first-child > :first-child, ::ng-deep.documentation-wrapper .col-8 > :first-child > :first-child, ::ng-deep.documentation-wrapper .col-9 > :first-child > :first-child, ::ng-deep.documentation-wrapper .col-10 > :first-child > :first-child, ::ng-deep.documentation-wrapper .col-11 > :first-child > :first-child, ::ng-deep.documentation-wrapper .tsd-panel > :first-child > :first-child, ::ng-deep.documentation-wrapper ul.tsd-descriptions > li > :first-child > :first-child, ::ng-deep.documentation-wrapper .col > :first-child > :first-child > :first-child, ::ng-deep.documentation-wrapper .col-1 > :first-child > :first-child > :first-child, ::ng-deep.documentation-wrapper .col-2 > :first-child > :first-child > :first-child, ::ng-deep.documentation-wrapper .col-3 > :first-child > :first-child > :first-child, ::ng-deep.documentation-wrapper .col-4 > :first-child > :first-child > :first-child, ::ng-deep.documentation-wrapper .col-5 > :first-child > :first-child > :first-child, ::ng-deep.documentation-wrapper .col-6 > :first-child > :first-child > :first-child, ::ng-deep.documentation-wrapper .col-7 > :first-child > :first-child > :first-child, ::ng-deep.documentation-wrapper .col-8 > :first-child > :first-child > :first-child, ::ng-deep.documentation-wrapper .col-9 > :first-child > :first-child > :first-child, ::ng-deep.documentation-wrapper .col-10 > :first-child > :first-child > :first-child, ::ng-deep.documentation-wrapper .col-11 > :first-child > :first-child > :first-child, ::ng-deep.documentation-wrapper .tsd-panel > :first-child > :first-child > :first-child, ::ng-deep.documentation-wrapper ul.tsd-descriptions > li > :first-child > :first-child > :first-child {\n    margin-top: 0; }\n  ::ng-deep.documentation-wrapper .col > :last-child, ::ng-deep.documentation-wrapper .col-1 > :last-child, ::ng-deep.documentation-wrapper .col-2 > :last-child, ::ng-deep.documentation-wrapper .col-3 > :last-child, ::ng-deep.documentation-wrapper .col-4 > :last-child, ::ng-deep.documentation-wrapper .col-5 > :last-child, ::ng-deep.documentation-wrapper .col-6 > :last-child, ::ng-deep.documentation-wrapper .col-7 > :last-child, ::ng-deep.documentation-wrapper .col-8 > :last-child, ::ng-deep.documentation-wrapper .col-9 > :last-child, ::ng-deep.documentation-wrapper .col-10 > :last-child, ::ng-deep.documentation-wrapper .col-11 > :last-child, ::ng-deep.documentation-wrapper .tsd-panel > :last-child, ::ng-deep.documentation-wrapper ul.tsd-descriptions > li > :last-child, ::ng-deep.documentation-wrapper .col > :last-child > :last-child, ::ng-deep.documentation-wrapper .col-1 > :last-child > :last-child, ::ng-deep.documentation-wrapper .col-2 > :last-child > :last-child, ::ng-deep.documentation-wrapper .col-3 > :last-child > :last-child, ::ng-deep.documentation-wrapper .col-4 > :last-child > :last-child, ::ng-deep.documentation-wrapper .col-5 > :last-child > :last-child, ::ng-deep.documentation-wrapper .col-6 > :last-child > :last-child, ::ng-deep.documentation-wrapper .col-7 > :last-child > :last-child, ::ng-deep.documentation-wrapper .col-8 > :last-child > :last-child, ::ng-deep.documentation-wrapper .col-9 > :last-child > :last-child, ::ng-deep.documentation-wrapper .col-10 > :last-child > :last-child, ::ng-deep.documentation-wrapper .col-11 > :last-child > :last-child, ::ng-deep.documentation-wrapper .tsd-panel > :last-child > :last-child, ::ng-deep.documentation-wrapper ul.tsd-descriptions > li > :last-child > :last-child, ::ng-deep.documentation-wrapper .col > :last-child > :last-child > :last-child, ::ng-deep.documentation-wrapper .col-1 > :last-child > :last-child > :last-child, ::ng-deep.documentation-wrapper .col-2 > :last-child > :last-child > :last-child, ::ng-deep.documentation-wrapper .col-3 > :last-child > :last-child > :last-child, ::ng-deep.documentation-wrapper .col-4 > :last-child > :last-child > :last-child, ::ng-deep.documentation-wrapper .col-5 > :last-child > :last-child > :last-child, ::ng-deep.documentation-wrapper .col-6 > :last-child > :last-child > :last-child, ::ng-deep.documentation-wrapper .col-7 > :last-child > :last-child > :last-child, ::ng-deep.documentation-wrapper .col-8 > :last-child > :last-child > :last-child, ::ng-deep.documentation-wrapper .col-9 > :last-child > :last-child > :last-child, ::ng-deep.documentation-wrapper .col-10 > :last-child > :last-child > :last-child, ::ng-deep.documentation-wrapper .col-11 > :last-child > :last-child > :last-child, ::ng-deep.documentation-wrapper .tsd-panel > :last-child > :last-child > :last-child, ::ng-deep.documentation-wrapper ul.tsd-descriptions > li > :last-child > :last-child > :last-child {\n    margin-bottom: 0; }\n  ::ng-deep.documentation-wrapper .col, ::ng-deep.documentation-wrapper .col-1, ::ng-deep.documentation-wrapper .col-2, ::ng-deep.documentation-wrapper .col-3, ::ng-deep.documentation-wrapper .col-4, ::ng-deep.documentation-wrapper .col-5, ::ng-deep.documentation-wrapper .col-6, ::ng-deep.documentation-wrapper .col-7, ::ng-deep.documentation-wrapper .col-8, ::ng-deep.documentation-wrapper .col-9, ::ng-deep.documentation-wrapper .col-10, ::ng-deep.documentation-wrapper .col-11 {\n    box-sizing: border-box;\n    float: left;\n    padding: 0 10px; }\n  ::ng-deep.documentation-wrapper .col-1 {\n    width: 8.33333%; }\n  ::ng-deep.documentation-wrapper .offset-1 {\n    margin-left: 8.33333%; }\n  ::ng-deep.documentation-wrapper .col-2 {\n    width: 16.66667%; }\n  ::ng-deep.documentation-wrapper .offset-2 {\n    margin-left: 16.66667%; }\n  ::ng-deep.documentation-wrapper .col-3 {\n    width: 25%; }\n  ::ng-deep.documentation-wrapper .offset-3 {\n    margin-left: 25%; }\n  ::ng-deep.documentation-wrapper .col-4 {\n    width: 33.33333%; }\n  ::ng-deep.documentation-wrapper .offset-4 {\n    margin-left: 33.33333%; }\n  ::ng-deep.documentation-wrapper .col-5 {\n    width: 41.66667%; }\n  ::ng-deep.documentation-wrapper .offset-5 {\n    margin-left: 41.66667%; }\n  ::ng-deep.documentation-wrapper .col-6 {\n    width: 50%; }\n  ::ng-deep.documentation-wrapper .offset-6 {\n    margin-left: 50%; }\n  ::ng-deep.documentation-wrapper .col-7 {\n    width: 58.33333%; }\n  ::ng-deep.documentation-wrapper .offset-7 {\n    margin-left: 58.33333%; }\n  ::ng-deep.documentation-wrapper .col-8 {\n    width: 66.66667%; }\n  ::ng-deep.documentation-wrapper .offset-8 {\n    margin-left: 66.66667%; }\n  ::ng-deep.documentation-wrapper .col-9 {\n    width: 75%; }\n  ::ng-deep.documentation-wrapper .offset-9 {\n    margin-left: 75%; }\n  ::ng-deep.documentation-wrapper .col-10 {\n    width: 83.33333%; }\n  ::ng-deep.documentation-wrapper .offset-10 {\n    margin-left: 83.33333%; }\n  ::ng-deep.documentation-wrapper .col-11 {\n    width: 91.66667%; }\n  ::ng-deep.documentation-wrapper .offset-11 {\n    margin-left: 91.66667%; }\n  ::ng-deep.documentation-wrapper .tsd-kind-icon {\n    display: block;\n    position: relative;\n    padding-left: 20px;\n    text-indent: -20px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-icon:before {\n    content: '';\n    display: inline-block;\n    vertical-align: middle;\n    width: 17px;\n    height: 17px;\n    margin: 0 3px 2px 0;\n    background-image: url(data:image/png;base64,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); }\n  @media (-webkit-min-device-pixel-ratio: 1.5), (min-device-pixel-ratio: 1.5), (min-resolution: 144dpi) {\n    ::ng-deep.documentation-wrapper .tsd-kind-icon:before {\n      background-image: url('icons@2x.png');\n      background-size: 238px 204px; } }\n  ::ng-deep.documentation-wrapper .tsd-signature.tsd-kind-icon:before {\n    background-position: 0 -153px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-object-literal > .tsd-kind-icon:before {\n    background-position: 0px -17px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-object-literal.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -17px -17px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-object-literal.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -34px -17px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-class > .tsd-kind-icon:before {\n    background-position: 0px -34px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-class.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -17px -34px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-class.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -34px -34px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-class.tsd-has-type-parameter > .tsd-kind-icon:before {\n    background-position: 0px -51px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-class.tsd-has-type-parameter.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -17px -51px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-class.tsd-has-type-parameter.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -34px -51px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-interface > .tsd-kind-icon:before {\n    background-position: 0px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-interface.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -17px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-interface.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -34px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-interface.tsd-has-type-parameter > .tsd-kind-icon:before {\n    background-position: 0px -85px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-interface.tsd-has-type-parameter.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -17px -85px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-interface.tsd-has-type-parameter.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -34px -85px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-module > .tsd-kind-icon:before {\n    background-position: 0px -102px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-module.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -17px -102px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-module.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -34px -102px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-external-module > .tsd-kind-icon:before {\n    background-position: 0px -102px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-external-module.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -17px -102px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-external-module.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -34px -102px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-enum > .tsd-kind-icon:before {\n    background-position: 0px -119px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-enum.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -17px -119px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-enum.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -34px -119px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-enum-member > .tsd-kind-icon:before {\n    background-position: 0px -136px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-enum-member.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -17px -136px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-enum-member.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -34px -136px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-signature > .tsd-kind-icon:before {\n    background-position: 0px -153px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-signature.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -17px -153px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-signature.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -34px -153px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-type-alias > .tsd-kind-icon:before {\n    background-position: 0px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-type-alias.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -17px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-type-alias.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -34px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-variable > .tsd-kind-icon:before {\n    background-position: -136px -0px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-variable.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -153px -0px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-variable.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -0px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-variable.tsd-parent-kind-class > .tsd-kind-icon:before {\n    background-position: -51px -0px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-variable.tsd-parent-kind-class.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -68px -0px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-variable.tsd-parent-kind-class.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -85px -0px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-variable.tsd-parent-kind-class.tsd-is-protected.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -102px -0px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-variable.tsd-parent-kind-class.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -0px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-variable.tsd-parent-kind-enum > .tsd-kind-icon:before {\n    background-position: -170px -0px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-variable.tsd-parent-kind-enum.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -187px -0px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-variable.tsd-parent-kind-enum.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -0px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-variable.tsd-parent-kind-interface > .tsd-kind-icon:before {\n    background-position: -204px -0px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-variable.tsd-parent-kind-interface.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -221px -0px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-property > .tsd-kind-icon:before {\n    background-position: -136px -0px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-property.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -153px -0px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-property.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -0px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-property.tsd-parent-kind-class > .tsd-kind-icon:before {\n    background-position: -51px -0px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-property.tsd-parent-kind-class.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -68px -0px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-property.tsd-parent-kind-class.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -85px -0px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-property.tsd-parent-kind-class.tsd-is-protected.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -102px -0px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-property.tsd-parent-kind-class.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -0px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-property.tsd-parent-kind-enum > .tsd-kind-icon:before {\n    background-position: -170px -0px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-property.tsd-parent-kind-enum.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -187px -0px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-property.tsd-parent-kind-enum.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -0px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-property.tsd-parent-kind-interface > .tsd-kind-icon:before {\n    background-position: -204px -0px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-property.tsd-parent-kind-interface.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -221px -0px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-get-signature > .tsd-kind-icon:before {\n    background-position: -136px -17px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-get-signature.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -153px -17px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-get-signature.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -17px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-get-signature.tsd-parent-kind-class > .tsd-kind-icon:before {\n    background-position: -51px -17px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-get-signature.tsd-parent-kind-class.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -68px -17px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-get-signature.tsd-parent-kind-class.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -85px -17px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-get-signature.tsd-parent-kind-class.tsd-is-protected.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -102px -17px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-get-signature.tsd-parent-kind-class.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -17px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-get-signature.tsd-parent-kind-enum > .tsd-kind-icon:before {\n    background-position: -170px -17px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-get-signature.tsd-parent-kind-enum.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -187px -17px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-get-signature.tsd-parent-kind-enum.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -17px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-get-signature.tsd-parent-kind-interface > .tsd-kind-icon:before {\n    background-position: -204px -17px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-get-signature.tsd-parent-kind-interface.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -221px -17px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-set-signature > .tsd-kind-icon:before {\n    background-position: -136px -34px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-set-signature.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -153px -34px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-set-signature.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -34px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-set-signature.tsd-parent-kind-class > .tsd-kind-icon:before {\n    background-position: -51px -34px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-set-signature.tsd-parent-kind-class.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -68px -34px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-set-signature.tsd-parent-kind-class.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -85px -34px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-set-signature.tsd-parent-kind-class.tsd-is-protected.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -102px -34px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-set-signature.tsd-parent-kind-class.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -34px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-set-signature.tsd-parent-kind-enum > .tsd-kind-icon:before {\n    background-position: -170px -34px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-set-signature.tsd-parent-kind-enum.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -187px -34px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-set-signature.tsd-parent-kind-enum.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -34px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-set-signature.tsd-parent-kind-interface > .tsd-kind-icon:before {\n    background-position: -204px -34px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-set-signature.tsd-parent-kind-interface.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -221px -34px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-accessor > .tsd-kind-icon:before {\n    background-position: -136px -51px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-accessor.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -153px -51px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-accessor.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -51px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-accessor.tsd-parent-kind-class > .tsd-kind-icon:before {\n    background-position: -51px -51px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-accessor.tsd-parent-kind-class.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -68px -51px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-accessor.tsd-parent-kind-class.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -85px -51px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-accessor.tsd-parent-kind-class.tsd-is-protected.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -102px -51px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-accessor.tsd-parent-kind-class.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -51px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-accessor.tsd-parent-kind-enum > .tsd-kind-icon:before {\n    background-position: -170px -51px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-accessor.tsd-parent-kind-enum.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -187px -51px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-accessor.tsd-parent-kind-enum.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -51px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-accessor.tsd-parent-kind-interface > .tsd-kind-icon:before {\n    background-position: -204px -51px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-accessor.tsd-parent-kind-interface.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -221px -51px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-function > .tsd-kind-icon:before {\n    background-position: -136px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-function.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -153px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-function.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-function.tsd-parent-kind-class > .tsd-kind-icon:before {\n    background-position: -51px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-function.tsd-parent-kind-class.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -68px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-function.tsd-parent-kind-class.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -85px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-function.tsd-parent-kind-class.tsd-is-protected.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -102px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-function.tsd-parent-kind-class.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-function.tsd-parent-kind-enum > .tsd-kind-icon:before {\n    background-position: -170px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-function.tsd-parent-kind-enum.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -187px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-function.tsd-parent-kind-enum.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-function.tsd-parent-kind-interface > .tsd-kind-icon:before {\n    background-position: -204px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-function.tsd-parent-kind-interface.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -221px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-method > .tsd-kind-icon:before {\n    background-position: -136px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-method.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -153px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-method.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-method.tsd-parent-kind-class > .tsd-kind-icon:before {\n    background-position: -51px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-method.tsd-parent-kind-class.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -68px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-method.tsd-parent-kind-class.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -85px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-method.tsd-parent-kind-class.tsd-is-protected.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -102px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-method.tsd-parent-kind-class.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-method.tsd-parent-kind-enum > .tsd-kind-icon:before {\n    background-position: -170px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-method.tsd-parent-kind-enum.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -187px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-method.tsd-parent-kind-enum.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-method.tsd-parent-kind-interface > .tsd-kind-icon:before {\n    background-position: -204px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-method.tsd-parent-kind-interface.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -221px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-call-signature > .tsd-kind-icon:before {\n    background-position: -136px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-call-signature.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -153px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-call-signature.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-call-signature.tsd-parent-kind-class > .tsd-kind-icon:before {\n    background-position: -51px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-call-signature.tsd-parent-kind-class.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -68px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-call-signature.tsd-parent-kind-class.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -85px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-call-signature.tsd-parent-kind-class.tsd-is-protected.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -102px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-call-signature.tsd-parent-kind-class.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-call-signature.tsd-parent-kind-enum > .tsd-kind-icon:before {\n    background-position: -170px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-call-signature.tsd-parent-kind-enum.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -187px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-call-signature.tsd-parent-kind-enum.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-call-signature.tsd-parent-kind-interface > .tsd-kind-icon:before {\n    background-position: -204px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-call-signature.tsd-parent-kind-interface.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -221px -68px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-function.tsd-has-type-parameter > .tsd-kind-icon:before {\n    background-position: -136px -85px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-function.tsd-has-type-parameter.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -153px -85px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-function.tsd-has-type-parameter.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -85px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-function.tsd-has-type-parameter.tsd-parent-kind-class > .tsd-kind-icon:before {\n    background-position: -51px -85px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-function.tsd-has-type-parameter.tsd-parent-kind-class.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -68px -85px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-function.tsd-has-type-parameter.tsd-parent-kind-class.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -85px -85px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-function.tsd-has-type-parameter.tsd-parent-kind-class.tsd-is-protected.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -102px -85px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-function.tsd-has-type-parameter.tsd-parent-kind-class.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -85px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-function.tsd-has-type-parameter.tsd-parent-kind-enum > .tsd-kind-icon:before {\n    background-position: -170px -85px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-function.tsd-has-type-parameter.tsd-parent-kind-enum.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -187px -85px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-function.tsd-has-type-parameter.tsd-parent-kind-enum.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -85px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-function.tsd-has-type-parameter.tsd-parent-kind-interface > .tsd-kind-icon:before {\n    background-position: -204px -85px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-function.tsd-has-type-parameter.tsd-parent-kind-interface.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -221px -85px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-method.tsd-has-type-parameter > .tsd-kind-icon:before {\n    background-position: -136px -85px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-method.tsd-has-type-parameter.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -153px -85px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-method.tsd-has-type-parameter.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -85px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-method.tsd-has-type-parameter.tsd-parent-kind-class > .tsd-kind-icon:before {\n    background-position: -51px -85px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-method.tsd-has-type-parameter.tsd-parent-kind-class.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -68px -85px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-method.tsd-has-type-parameter.tsd-parent-kind-class.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -85px -85px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-method.tsd-has-type-parameter.tsd-parent-kind-class.tsd-is-protected.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -102px -85px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-method.tsd-has-type-parameter.tsd-parent-kind-class.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -85px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-method.tsd-has-type-parameter.tsd-parent-kind-enum > .tsd-kind-icon:before {\n    background-position: -170px -85px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-method.tsd-has-type-parameter.tsd-parent-kind-enum.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -187px -85px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-method.tsd-has-type-parameter.tsd-parent-kind-enum.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -85px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-method.tsd-has-type-parameter.tsd-parent-kind-interface > .tsd-kind-icon:before {\n    background-position: -204px -85px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-method.tsd-has-type-parameter.tsd-parent-kind-interface.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -221px -85px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-constructor > .tsd-kind-icon:before {\n    background-position: -136px -102px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-constructor.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -153px -102px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-constructor.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -102px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-constructor.tsd-parent-kind-class > .tsd-kind-icon:before {\n    background-position: -51px -102px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-constructor.tsd-parent-kind-class.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -68px -102px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-constructor.tsd-parent-kind-class.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -85px -102px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-constructor.tsd-parent-kind-class.tsd-is-protected.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -102px -102px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-constructor.tsd-parent-kind-class.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -102px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-constructor.tsd-parent-kind-enum > .tsd-kind-icon:before {\n    background-position: -170px -102px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-constructor.tsd-parent-kind-enum.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -187px -102px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-constructor.tsd-parent-kind-enum.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -102px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-constructor.tsd-parent-kind-interface > .tsd-kind-icon:before {\n    background-position: -204px -102px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-constructor.tsd-parent-kind-interface.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -221px -102px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-constructor-signature > .tsd-kind-icon:before {\n    background-position: -136px -102px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-constructor-signature.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -153px -102px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-constructor-signature.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -102px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-constructor-signature.tsd-parent-kind-class > .tsd-kind-icon:before {\n    background-position: -51px -102px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-constructor-signature.tsd-parent-kind-class.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -68px -102px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-constructor-signature.tsd-parent-kind-class.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -85px -102px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-constructor-signature.tsd-parent-kind-class.tsd-is-protected.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -102px -102px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-constructor-signature.tsd-parent-kind-class.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -102px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-constructor-signature.tsd-parent-kind-enum > .tsd-kind-icon:before {\n    background-position: -170px -102px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-constructor-signature.tsd-parent-kind-enum.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -187px -102px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-constructor-signature.tsd-parent-kind-enum.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -102px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-constructor-signature.tsd-parent-kind-interface > .tsd-kind-icon:before {\n    background-position: -204px -102px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-constructor-signature.tsd-parent-kind-interface.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -221px -102px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-index-signature > .tsd-kind-icon:before {\n    background-position: -136px -119px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-index-signature.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -153px -119px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-index-signature.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -119px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-index-signature.tsd-parent-kind-class > .tsd-kind-icon:before {\n    background-position: -51px -119px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-index-signature.tsd-parent-kind-class.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -68px -119px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-index-signature.tsd-parent-kind-class.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -85px -119px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-index-signature.tsd-parent-kind-class.tsd-is-protected.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -102px -119px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-index-signature.tsd-parent-kind-class.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -119px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-index-signature.tsd-parent-kind-enum > .tsd-kind-icon:before {\n    background-position: -170px -119px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-index-signature.tsd-parent-kind-enum.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -187px -119px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-index-signature.tsd-parent-kind-enum.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -119px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-index-signature.tsd-parent-kind-interface > .tsd-kind-icon:before {\n    background-position: -204px -119px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-index-signature.tsd-parent-kind-interface.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -221px -119px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-event > .tsd-kind-icon:before {\n    background-position: -136px -136px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-event.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -153px -136px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-event.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -136px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-event.tsd-parent-kind-class > .tsd-kind-icon:before {\n    background-position: -51px -136px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-event.tsd-parent-kind-class.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -68px -136px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-event.tsd-parent-kind-class.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -85px -136px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-event.tsd-parent-kind-class.tsd-is-protected.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -102px -136px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-event.tsd-parent-kind-class.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -136px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-event.tsd-parent-kind-enum > .tsd-kind-icon:before {\n    background-position: -170px -136px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-event.tsd-parent-kind-enum.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -187px -136px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-event.tsd-parent-kind-enum.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -136px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-event.tsd-parent-kind-interface > .tsd-kind-icon:before {\n    background-position: -204px -136px; }\n  ::ng-deep.documentation-wrapper .tsd-kind-event.tsd-parent-kind-interface.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -221px -136px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static > .tsd-kind-icon:before {\n    background-position: -136px -153px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -153px -153px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -153px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-parent-kind-class > .tsd-kind-icon:before {\n    background-position: -51px -153px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-parent-kind-class.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -68px -153px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-parent-kind-class.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -85px -153px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-parent-kind-class.tsd-is-protected.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -102px -153px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-parent-kind-class.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -153px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-parent-kind-enum > .tsd-kind-icon:before {\n    background-position: -170px -153px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-parent-kind-enum.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -187px -153px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-parent-kind-enum.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -153px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-parent-kind-interface > .tsd-kind-icon:before {\n    background-position: -204px -153px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-parent-kind-interface.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -221px -153px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-function > .tsd-kind-icon:before {\n    background-position: -136px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-function.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -153px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-function.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-function.tsd-parent-kind-class > .tsd-kind-icon:before {\n    background-position: -51px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-function.tsd-parent-kind-class.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -68px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-function.tsd-parent-kind-class.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -85px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-function.tsd-parent-kind-class.tsd-is-protected.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -102px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-function.tsd-parent-kind-class.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-function.tsd-parent-kind-enum > .tsd-kind-icon:before {\n    background-position: -170px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-function.tsd-parent-kind-enum.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -187px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-function.tsd-parent-kind-enum.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-function.tsd-parent-kind-interface > .tsd-kind-icon:before {\n    background-position: -204px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-function.tsd-parent-kind-interface.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -221px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-method > .tsd-kind-icon:before {\n    background-position: -136px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-method.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -153px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-method.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-method.tsd-parent-kind-class > .tsd-kind-icon:before {\n    background-position: -51px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-method.tsd-parent-kind-class.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -68px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-method.tsd-parent-kind-class.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -85px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-method.tsd-parent-kind-class.tsd-is-protected.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -102px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-method.tsd-parent-kind-class.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-method.tsd-parent-kind-enum > .tsd-kind-icon:before {\n    background-position: -170px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-method.tsd-parent-kind-enum.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -187px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-method.tsd-parent-kind-enum.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-method.tsd-parent-kind-interface > .tsd-kind-icon:before {\n    background-position: -204px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-method.tsd-parent-kind-interface.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -221px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-call-signature > .tsd-kind-icon:before {\n    background-position: -136px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-call-signature.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -153px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-call-signature.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-call-signature.tsd-parent-kind-class > .tsd-kind-icon:before {\n    background-position: -51px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-call-signature.tsd-parent-kind-class.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -68px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-call-signature.tsd-parent-kind-class.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -85px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-call-signature.tsd-parent-kind-class.tsd-is-protected.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -102px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-call-signature.tsd-parent-kind-class.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-call-signature.tsd-parent-kind-enum > .tsd-kind-icon:before {\n    background-position: -170px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-call-signature.tsd-parent-kind-enum.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -187px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-call-signature.tsd-parent-kind-enum.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-call-signature.tsd-parent-kind-interface > .tsd-kind-icon:before {\n    background-position: -204px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-call-signature.tsd-parent-kind-interface.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -221px -170px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-event > .tsd-kind-icon:before {\n    background-position: -136px -187px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-event.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -153px -187px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-event.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -187px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-event.tsd-parent-kind-class > .tsd-kind-icon:before {\n    background-position: -51px -187px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-event.tsd-parent-kind-class.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -68px -187px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-event.tsd-parent-kind-class.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -85px -187px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-event.tsd-parent-kind-class.tsd-is-protected.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -102px -187px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-event.tsd-parent-kind-class.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -187px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-event.tsd-parent-kind-enum > .tsd-kind-icon:before {\n    background-position: -170px -187px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-event.tsd-parent-kind-enum.tsd-is-protected > .tsd-kind-icon:before {\n    background-position: -187px -187px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-event.tsd-parent-kind-enum.tsd-is-private > .tsd-kind-icon:before {\n    background-position: -119px -187px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-event.tsd-parent-kind-interface > .tsd-kind-icon:before {\n    background-position: -204px -187px; }\n  ::ng-deep.documentation-wrapper .tsd-is-static.tsd-kind-event.tsd-parent-kind-interface.tsd-is-inherited > .tsd-kind-icon:before {\n    background-position: -221px -187px; }\n  ::ng-deep.documentation-wrapper .no-transition {\n    transition: none !important; }\n  @-webkit-keyframes fade-in {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n  @keyframes fade-in {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n  @-webkit-keyframes fade-out {\n  from {\n    opacity: 1;\n    visibility: visible; }\n  to {\n    opacity: 0; } }\n  @keyframes fade-out {\n  from {\n    opacity: 1;\n    visibility: visible; }\n  to {\n    opacity: 0; } }\n  @-webkit-keyframes fade-in-delayed {\n  0% {\n    opacity: 0; }\n  33% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n  @keyframes fade-in-delayed {\n  0% {\n    opacity: 0; }\n  33% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n  @-webkit-keyframes fade-out-delayed {\n  0% {\n    opacity: 1;\n    visibility: visible; }\n  66% {\n    opacity: 0; }\n  100% {\n    opacity: 0; } }\n  @keyframes fade-out-delayed {\n  0% {\n    opacity: 1;\n    visibility: visible; }\n  66% {\n    opacity: 0; }\n  100% {\n    opacity: 0; } }\n  @-webkit-keyframes shift-to-left {\n  from {\n    -webkit-transform: translate(0, 0);\n    transform: translate(0, 0); }\n  to {\n    -webkit-transform: translate(-25%, 0);\n    transform: translate(-25%, 0); } }\n  @keyframes shift-to-left {\n  from {\n    -webkit-transform: translate(0, 0);\n    transform: translate(0, 0); }\n  to {\n    -webkit-transform: translate(-25%, 0);\n    transform: translate(-25%, 0); } }\n  @-webkit-keyframes unshift-to-left {\n  from {\n    -webkit-transform: translate(-25%, 0);\n    transform: translate(-25%, 0); }\n  to {\n    -webkit-transform: translate(0, 0);\n    transform: translate(0, 0); } }\n  @keyframes unshift-to-left {\n  from {\n    -webkit-transform: translate(-25%, 0);\n    transform: translate(-25%, 0); }\n  to {\n    -webkit-transform: translate(0, 0);\n    transform: translate(0, 0); } }\n  @-webkit-keyframes pop-in-from-right {\n  from {\n    -webkit-transform: translate(100%, 0);\n    transform: translate(100%, 0); }\n  to {\n    -webkit-transform: translate(0, 0);\n    transform: translate(0, 0); } }\n  @keyframes pop-in-from-right {\n  from {\n    -webkit-transform: translate(100%, 0);\n    transform: translate(100%, 0); }\n  to {\n    -webkit-transform: translate(0, 0);\n    transform: translate(0, 0); } }\n  @-webkit-keyframes pop-out-to-right {\n  from {\n    -webkit-transform: translate(0, 0);\n    transform: translate(0, 0);\n    visibility: visible; }\n  to {\n    -webkit-transform: translate(100%, 0);\n    transform: translate(100%, 0); } }\n  @keyframes pop-out-to-right {\n  from {\n    -webkit-transform: translate(0, 0);\n    transform: translate(0, 0);\n    visibility: visible; }\n  to {\n    -webkit-transform: translate(100%, 0);\n    transform: translate(100%, 0); } }\n  ::ng-deep.documentation-wrapper body {\n    background: #fdfdfd;\n    font-family: \"Segoe UI\", sans-serif;\n    font-size: 16px;\n    color: #222; }\n  ::ng-deep.documentation-wrapper a {\n    color: #4da6ff;\n    text-decoration: none; }\n  ::ng-deep.documentation-wrapper a:hover {\n    text-decoration: underline; }\n  ::ng-deep.documentation-wrapper code, ::ng-deep.documentation-wrapper pre {\n    font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n    padding: 0.2em;\n    margin: 0;\n    font-size: 14px;\n    background-color: rgba(0, 0, 0, 0.04); }\n  ::ng-deep.documentation-wrapper pre {\n    padding: 10px; }\n  ::ng-deep.documentation-wrapper pre code {\n    padding: 0;\n    font-size: 100%;\n    background-color: transparent; }\n  ::ng-deep.documentation-wrapper .tsd-typography {\n    line-height: 1.333em; }\n  ::ng-deep.documentation-wrapper .tsd-typography ul {\n    list-style: square;\n    padding: 0 0 0 20px;\n    margin: 0; }\n  ::ng-deep.documentation-wrapper .tsd-typography h4, ::ng-deep.documentation-wrapper .tsd-typography .tsd-index-panel h3, ::ng-deep.documentation-wrapper .tsd-index-panel .tsd-typography h3, ::ng-deep.documentation-wrapper .tsd-typography h5, ::ng-deep.documentation-wrapper .tsd-typography h6 {\n    font-size: 1em;\n    margin: 0; }\n  ::ng-deep.documentation-wrapper .tsd-typography h5, ::ng-deep.documentation-wrapper .tsd-typography h6 {\n    font-weight: normal; }\n  ::ng-deep.documentation-wrapper .tsd-typography p, ::ng-deep.documentation-wrapper .tsd-typography ul, ::ng-deep.documentation-wrapper .tsd-typography ol {\n    margin: 1em 0; }\n  @media (min-width: 901px) and (max-width: 1024px) {\n    ::ng-deep.documentation-wrapper html.default .col-content {\n      width: 72%; }\n    ::ng-deep.documentation-wrapper html.default .col-menu {\n      width: 28%; }\n    ::ng-deep.documentation-wrapper html.default .tsd-navigation {\n      padding-left: 10px; } }\n  @media (max-width: 900px) {\n    ::ng-deep.documentation-wrapper html.default .col-content {\n      float: none;\n      width: 100%; }\n    ::ng-deep.documentation-wrapper html.default .col-menu {\n      position: fixed !important;\n      overflow: auto;\n      -webkit-overflow-scrolling: touch;\n      overflow-scrolling: touch;\n      z-index: 1024;\n      top: 0 !important;\n      bottom: 0 !important;\n      left: auto !important;\n      right: 0 !important;\n      width: 100%;\n      padding: 20px 20px 0 0;\n      max-width: 450px;\n      visibility: hidden;\n      background-color: #fff;\n      -webkit-transform: translate(100%, 0);\n      transform: translate(100%, 0); }\n    ::ng-deep.documentation-wrapper html.default .col-menu > *:last-child {\n      padding-bottom: 20px; }\n    ::ng-deep.documentation-wrapper html.default .overlay {\n      content: \"\";\n      display: block;\n      position: fixed;\n      z-index: 1023;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background-color: rgba(0, 0, 0, 0.75);\n      visibility: hidden; }\n    ::ng-deep.documentation-wrapper html.default.to-has-menu .overlay {\n      -webkit-animation: fade-in 0.4s;\n      animation: fade-in 0.4s; }\n    ::ng-deep.documentation-wrapper html.default.to-has-menu header, ::ng-deep.documentation-wrapper html.default.to-has-menu footer, ::ng-deep.documentation-wrapper html.default.to-has-menu .col-content {\n      -webkit-animation: shift-to-left 0.4s;\n      animation: shift-to-left 0.4s; }\n    ::ng-deep.documentation-wrapper html.default.to-has-menu .col-menu {\n      -webkit-animation: pop-in-from-right 0.4s;\n      animation: pop-in-from-right 0.4s; }\n    ::ng-deep.documentation-wrapper html.default.from-has-menu .overlay {\n      -webkit-animation: fade-out 0.4s;\n      animation: fade-out 0.4s; }\n    ::ng-deep.documentation-wrapper html.default.from-has-menu header, ::ng-deep.documentation-wrapper html.default.from-has-menu footer, ::ng-deep.documentation-wrapper html.default.from-has-menu .col-content {\n      -webkit-animation: unshift-to-left 0.4s;\n      animation: unshift-to-left 0.4s; }\n    ::ng-deep.documentation-wrapper html.default.from-has-menu .col-menu {\n      -webkit-animation: pop-out-to-right 0.4s;\n      animation: pop-out-to-right 0.4s; }\n    ::ng-deep.documentation-wrapper html.default.has-menu body {\n      overflow: hidden; }\n    ::ng-deep.documentation-wrapper html.default.has-menu .overlay {\n      visibility: visible; }\n    ::ng-deep.documentation-wrapper html.default.has-menu header, ::ng-deep.documentation-wrapper html.default.has-menu footer, ::ng-deep.documentation-wrapper html.default.has-menu .col-content {\n      -webkit-transform: translate(-25%, 0);\n      transform: translate(-25%, 0); }\n    ::ng-deep.documentation-wrapper html.default.has-menu .col-menu {\n      visibility: visible;\n      -webkit-transform: translate(0, 0);\n      transform: translate(0, 0); } }\n  ::ng-deep.documentation-wrapper .tsd-page-title {\n    padding: 70px 0 20px 0;\n    margin: 0 0 40px 0;\n    background: #fff;\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.35); }\n  ::ng-deep.documentation-wrapper .tsd-page-title h1 {\n    margin: 0; }\n  ::ng-deep.documentation-wrapper .tsd-breadcrumb {\n    margin: 0;\n    padding: 0;\n    color: #808080; }\n  ::ng-deep.documentation-wrapper .tsd-breadcrumb a {\n    color: #808080;\n    text-decoration: none; }\n  ::ng-deep.documentation-wrapper .tsd-breadcrumb a:hover {\n    text-decoration: underline; }\n  ::ng-deep.documentation-wrapper .tsd-breadcrumb li {\n    display: inline; }\n  ::ng-deep.documentation-wrapper .tsd-breadcrumb li:after {\n    content: \" / \"; }\n  ::ng-deep.documentation-wrapper html.minimal .container {\n    margin: 0; }\n  ::ng-deep.documentation-wrapper html.minimal .container-main {\n    padding-top: 50px;\n    padding-bottom: 0; }\n  ::ng-deep.documentation-wrapper html.minimal .content-wrap {\n    padding-left: 300px; }\n  ::ng-deep.documentation-wrapper html.minimal .tsd-navigation {\n    position: fixed !important;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n    overflow-scrolling: touch;\n    box-sizing: border-box;\n    z-index: 1;\n    left: 0;\n    top: 40px;\n    bottom: 0;\n    width: 300px;\n    padding: 20px;\n    margin: 0; }\n  ::ng-deep.documentation-wrapper html.minimal .tsd-member .tsd-member {\n    margin-left: 0; }\n  ::ng-deep.documentation-wrapper html.minimal .tsd-page-toolbar {\n    position: fixed;\n    z-index: 2; }\n  ::ng-deep.documentation-wrapper html.minimal #tsd-filter .tsd-filter-group {\n    right: 0;\n    -webkit-transform: none;\n    transform: none; }\n  ::ng-deep.documentation-wrapper html.minimal footer {\n    background-color: transparent; }\n  ::ng-deep.documentation-wrapper html.minimal footer .container {\n    padding: 0; }\n  ::ng-deep.documentation-wrapper html.minimal .tsd-generator {\n    padding: 0; }\n  @media (max-width: 900px) {\n    ::ng-deep.documentation-wrapper html.minimal .tsd-navigation {\n      display: none; }\n    ::ng-deep.documentation-wrapper html.minimal .content-wrap {\n      padding-left: 0; } }\n  ::ng-deep.documentation-wrapper dl.tsd-comment-tags {\n    overflow: hidden; }\n  ::ng-deep.documentation-wrapper dl.tsd-comment-tags dt {\n    clear: both;\n    float: left;\n    padding: 1px 5px;\n    margin: 0 10px 0 0;\n    border-radius: 4px;\n    border: 1px solid #808080;\n    color: #808080;\n    font-size: 0.8em;\n    font-weight: normal; }\n  ::ng-deep.documentation-wrapper dl.tsd-comment-tags dd {\n    margin: 0 0 10px 0; }\n  ::ng-deep.documentation-wrapper dl.tsd-comment-tags p {\n    margin: 0; }\n  ::ng-deep.documentation-wrapper .tsd-panel.tsd-comment .lead {\n    font-size: 1.1em;\n    line-height: 1.333em;\n    margin-bottom: 2em; }\n  ::ng-deep.documentation-wrapper .tsd-panel.tsd-comment .lead:last-child {\n    margin-bottom: 0; }\n  ::ng-deep.documentation-wrapper .toggle-protected .tsd-is-private {\n    display: none; }\n  ::ng-deep.documentation-wrapper .toggle-public .tsd-is-private, ::ng-deep.documentation-wrapper .toggle-public .tsd-is-protected, ::ng-deep.documentation-wrapper .toggle-public .tsd-is-private-protected {\n    display: none; }\n  ::ng-deep.documentation-wrapper .toggle-inherited .tsd-is-inherited {\n    display: none; }\n  ::ng-deep.documentation-wrapper .toggle-only-exported .tsd-is-not-exported {\n    display: none; }\n  ::ng-deep.documentation-wrapper .toggle-externals .tsd-is-external {\n    display: none; }\n  ::ng-deep.documentation-wrapper #tsd-filter {\n    position: relative;\n    display: inline-block;\n    height: 40px;\n    vertical-align: bottom; }\n  ::ng-deep.documentation-wrapper .no-filter #tsd-filter {\n    display: none; }\n  ::ng-deep.documentation-wrapper #tsd-filter .tsd-filter-group {\n    display: inline-block;\n    height: 40px;\n    vertical-align: bottom;\n    white-space: nowrap; }\n  ::ng-deep.documentation-wrapper #tsd-filter input {\n    display: none; }\n  @media (max-width: 900px) {\n    ::ng-deep.documentation-wrapper #tsd-filter .tsd-filter-group {\n      display: block;\n      position: absolute;\n      top: 40px;\n      right: 20px;\n      height: auto;\n      background-color: #fff;\n      visibility: hidden;\n      -webkit-transform: translate(50%, 0);\n      transform: translate(50%, 0);\n      box-shadow: 0 0 4px rgba(0, 0, 0, 0.25); }\n    ::ng-deep.documentation-wrapper .has-options #tsd-filter .tsd-filter-group {\n      visibility: visible; }\n    ::ng-deep.documentation-wrapper .to-has-options #tsd-filter .tsd-filter-group {\n      -webkit-animation: fade-in 0.2s;\n      animation: fade-in 0.2s; }\n    ::ng-deep.documentation-wrapper .from-has-options #tsd-filter .tsd-filter-group {\n      -webkit-animation: fade-out 0.2s;\n      animation: fade-out 0.2s; }\n    ::ng-deep.documentation-wrapper #tsd-filter label, ::ng-deep.documentation-wrapper #tsd-filter .tsd-select {\n      display: block;\n      padding-right: 20px; } }\n  ::ng-deep.documentation-wrapper footer {\n    border-top: 1px solid #eee;\n    background-color: #fff; }\n  ::ng-deep.documentation-wrapper footer.with-border-bottom {\n    border-bottom: 1px solid #eee; }\n  ::ng-deep.documentation-wrapper footer .tsd-legend-group {\n    font-size: 0; }\n  ::ng-deep.documentation-wrapper footer .tsd-legend {\n    display: inline-block;\n    width: 25%;\n    padding: 0;\n    font-size: 16px;\n    list-style: none;\n    line-height: 1.333em;\n    vertical-align: top; }\n  @media (max-width: 900px) {\n    ::ng-deep.documentation-wrapper footer .tsd-legend {\n      width: 50%; } }\n  ::ng-deep.documentation-wrapper .tsd-hierarchy {\n    list-style: square;\n    padding: 0 0 0 20px;\n    margin: 0; }\n  ::ng-deep.documentation-wrapper .tsd-hierarchy .target {\n    font-weight: bold; }\n  ::ng-deep.documentation-wrapper .tsd-index-panel .tsd-index-content {\n    margin-bottom: -30px !important; }\n  ::ng-deep.documentation-wrapper .tsd-index-panel .tsd-index-section {\n    margin-bottom: 30px !important; }\n  ::ng-deep.documentation-wrapper .tsd-index-panel h3 {\n    margin: 0 -20px 10px -20px;\n    padding: 0 20px 10px 20px;\n    border-bottom: 1px solid #eee; }\n  ::ng-deep.documentation-wrapper .tsd-index-panel ul.tsd-index-list {\n    -webkit-column-count: 3;\n    -ms-column-count: 3;\n    -o-column-count: 3;\n    column-count: 3;\n    -webkit-column-gap: 20px;\n    -ms-column-gap: 20px;\n    -o-column-gap: 20px;\n    column-gap: 20px;\n    padding: 0;\n    list-style: none;\n    line-height: 1.333em; }\n  @media (max-width: 900px) {\n    ::ng-deep.documentation-wrapper .tsd-index-panel ul.tsd-index-list {\n      -webkit-column-count: 1;\n      -ms-column-count: 1;\n      -o-column-count: 1;\n      column-count: 1; } }\n  @media (min-width: 901px) and (max-width: 1024px) {\n    ::ng-deep.documentation-wrapper .tsd-index-panel ul.tsd-index-list {\n      -webkit-column-count: 2;\n      -ms-column-count: 2;\n      -o-column-count: 2;\n      column-count: 2; } }\n  ::ng-deep.documentation-wrapper .tsd-index-panel ul.tsd-index-list li {\n    -webkit-column-break-inside: avoid;\n    -moz-column-break-inside: avoid;\n    -ms-column-break-inside: avoid;\n    -o-column-break-inside: avoid;\n    column-break-inside: avoid;\n    -webkit-page-break-inside: avoid;\n    -moz-page-break-inside: avoid;\n    -ms-page-break-inside: avoid;\n    -o-page-break-inside: avoid;\n    page-break-inside: avoid; }\n  ::ng-deep.documentation-wrapper .tsd-index-panel a, ::ng-deep.documentation-wrapper .tsd-index-panel .tsd-parent-kind-module a {\n    color: #9600ff; }\n  ::ng-deep.documentation-wrapper .tsd-index-panel .tsd-parent-kind-interface a {\n    color: #7da01f; }\n  ::ng-deep.documentation-wrapper .tsd-index-panel .tsd-parent-kind-enum a {\n    color: #cc9900; }\n  ::ng-deep.documentation-wrapper .tsd-index-panel .tsd-parent-kind-class a {\n    color: #4da6ff; }\n  ::ng-deep.documentation-wrapper .tsd-index-panel .tsd-kind-module a {\n    color: #9600ff; }\n  ::ng-deep.documentation-wrapper .tsd-index-panel .tsd-kind-interface a {\n    color: #7da01f; }\n  ::ng-deep.documentation-wrapper .tsd-index-panel .tsd-kind-enum a {\n    color: #cc9900; }\n  ::ng-deep.documentation-wrapper .tsd-index-panel .tsd-kind-class a {\n    color: #4da6ff; }\n  ::ng-deep.documentation-wrapper .tsd-index-panel .tsd-is-private a {\n    color: #808080; }\n  ::ng-deep.documentation-wrapper .tsd-flag {\n    display: inline-block;\n    padding: 1px 5px;\n    border-radius: 4px;\n    color: #fff;\n    background-color: #808080;\n    text-indent: 0;\n    font-size: 14px;\n    font-weight: normal; }\n  ::ng-deep.documentation-wrapper .tsd-anchor {\n    position: absolute;\n    top: -100px; }\n  ::ng-deep.documentation-wrapper .tsd-member {\n    position: relative; }\n  ::ng-deep.documentation-wrapper .tsd-member .tsd-anchor + h3 {\n    margin-top: 0;\n    margin-bottom: 0;\n    border-bottom: none; }\n  ::ng-deep.documentation-wrapper .tsd-navigation {\n    padding: 0 0 0 40px; }\n  ::ng-deep.documentation-wrapper .tsd-navigation a {\n    display: block;\n    padding-top: 2px;\n    padding-bottom: 2px;\n    border-left: 2px solid transparent;\n    color: #222;\n    text-decoration: none;\n    transition: border-left-color 0.1s; }\n  ::ng-deep.documentation-wrapper .tsd-navigation a:hover {\n    text-decoration: underline; }\n  ::ng-deep.documentation-wrapper .tsd-navigation ul {\n    margin: 0;\n    padding: 0;\n    list-style: none; }\n  ::ng-deep.documentation-wrapper .tsd-navigation li {\n    padding: 0; }\n  ::ng-deep.documentation-wrapper .tsd-navigation.primary {\n    padding-bottom: 40px; }\n  ::ng-deep.documentation-wrapper .tsd-navigation.primary a {\n    display: block;\n    padding-top: 6px;\n    padding-bottom: 6px; }\n  ::ng-deep.documentation-wrapper .tsd-navigation.primary ul li a {\n    padding-left: 5px; }\n  ::ng-deep.documentation-wrapper .tsd-navigation.primary ul li li a {\n    padding-left: 25px; }\n  ::ng-deep.documentation-wrapper .tsd-navigation.primary ul li li li a {\n    padding-left: 45px; }\n  ::ng-deep.documentation-wrapper .tsd-navigation.primary ul li li li li a {\n    padding-left: 65px; }\n  ::ng-deep.documentation-wrapper .tsd-navigation.primary ul li li li li li a {\n    padding-left: 85px; }\n  ::ng-deep.documentation-wrapper .tsd-navigation.primary ul li li li li li li a {\n    padding-left: 105px; }\n  ::ng-deep.documentation-wrapper .tsd-navigation.primary > ul {\n    border-bottom: 1px solid #eee; }\n  ::ng-deep.documentation-wrapper .tsd-navigation.primary li {\n    border-top: 1px solid #eee; }\n  ::ng-deep.documentation-wrapper .tsd-navigation.primary li.current > a {\n    font-weight: bold; }\n  ::ng-deep.documentation-wrapper .tsd-navigation.primary li.label span {\n    display: block;\n    padding: 20px 0 6px 5px;\n    color: #808080; }\n  ::ng-deep.documentation-wrapper .tsd-navigation.primary li.globals + li > span, ::ng-deep.documentation-wrapper .tsd-navigation.primary li.globals + li > a {\n    padding-top: 20px; }\n  ::ng-deep.documentation-wrapper .tsd-navigation.secondary ul {\n    transition: opacity 0.2s; }\n  ::ng-deep.documentation-wrapper .tsd-navigation.secondary ul li a {\n    padding-left: 25px; }\n  ::ng-deep.documentation-wrapper .tsd-navigation.secondary ul li li a {\n    padding-left: 45px; }\n  ::ng-deep.documentation-wrapper .tsd-navigation.secondary ul li li li a {\n    padding-left: 65px; }\n  ::ng-deep.documentation-wrapper .tsd-navigation.secondary ul li li li li a {\n    padding-left: 85px; }\n  ::ng-deep.documentation-wrapper .tsd-navigation.secondary ul li li li li li a {\n    padding-left: 105px; }\n  ::ng-deep.documentation-wrapper .tsd-navigation.secondary ul li li li li li li a {\n    padding-left: 125px; }\n  ::ng-deep.documentation-wrapper .tsd-navigation.secondary ul.current a {\n    border-left-color: #eee; }\n  ::ng-deep.documentation-wrapper .tsd-navigation.secondary li.focus > a, ::ng-deep.documentation-wrapper .tsd-navigation.secondary ul.current li.focus > a {\n    border-left-color: #000; }\n  ::ng-deep.documentation-wrapper .tsd-navigation.secondary li.current {\n    margin-top: 20px;\n    margin-bottom: 20px;\n    border-left-color: #eee; }\n  ::ng-deep.documentation-wrapper .tsd-navigation.secondary li.current > a {\n    font-weight: bold; }\n  @media (min-width: 901px) {\n    ::ng-deep.documentation-wrapper .menu-sticky-wrap {\n      position: static; }\n    ::ng-deep.documentation-wrapper .no-csspositionsticky .menu-sticky-wrap.sticky {\n      position: fixed; }\n    ::ng-deep.documentation-wrapper .no-csspositionsticky .menu-sticky-wrap.sticky-current {\n      position: fixed; }\n    ::ng-deep.documentation-wrapper .no-csspositionsticky .menu-sticky-wrap.sticky-current ul.before-current, ::ng-deep.documentation-wrapper .no-csspositionsticky .menu-sticky-wrap.sticky-current ul.after-current {\n      opacity: 0; }\n    ::ng-deep.documentation-wrapper .no-csspositionsticky .menu-sticky-wrap.sticky-bottom {\n      position: absolute;\n      top: auto !important;\n      left: auto !important;\n      bottom: 0;\n      right: 0; }\n    ::ng-deep.documentation-wrapper .csspositionsticky .menu-sticky-wrap.sticky {\n      position: -webkit-sticky;\n      position: sticky; }\n    ::ng-deep.documentation-wrapper .csspositionsticky .menu-sticky-wrap.sticky-current {\n      position: -webkit-sticky;\n      position: sticky; } }\n  ::ng-deep.documentation-wrapper .tsd-panel {\n    margin: 20px 0;\n    padding: 20px;\n    background-color: #fff;\n    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25); }\n  ::ng-deep.documentation-wrapper .tsd-panel:empty {\n    display: none; }\n  ::ng-deep.documentation-wrapper .tsd-panel > h1, ::ng-deep.documentation-wrapper .tsd-panel > h2, ::ng-deep.documentation-wrapper .tsd-panel > h3 {\n    margin: 1.5em -20px 10px -20px;\n    padding: 0 20px 10px 20px;\n    border-bottom: 1px solid #eee; }\n  ::ng-deep.documentation-wrapper .tsd-panel > h1.tsd-before-signature, ::ng-deep.documentation-wrapper .tsd-panel > h2.tsd-before-signature, ::ng-deep.documentation-wrapper .tsd-panel > h3.tsd-before-signature {\n    margin-bottom: 0;\n    border-bottom: 0; }\n  ::ng-deep.documentation-wrapper .tsd-panel table {\n    display: block;\n    width: 100%;\n    overflow: auto;\n    margin-top: 10px;\n    word-break: normal;\n    word-break: keep-all; }\n  ::ng-deep.documentation-wrapper .tsd-panel table th {\n    font-weight: bold; }\n  ::ng-deep.documentation-wrapper .tsd-panel table th, ::ng-deep.documentation-wrapper .tsd-panel table td {\n    padding: 6px 13px;\n    border: 1px solid #ddd; }\n  ::ng-deep.documentation-wrapper .tsd-panel table tr {\n    background-color: #fff;\n    border-top: 1px solid #ccc; }\n  ::ng-deep.documentation-wrapper .tsd-panel table tr:nth-child(2n) {\n    background-color: #f8f8f8; }\n  ::ng-deep.documentation-wrapper .tsd-panel-group {\n    margin: 60px 0; }\n  ::ng-deep.documentation-wrapper .tsd-panel-group > h1, ::ng-deep.documentation-wrapper .tsd-panel-group > h2, ::ng-deep.documentation-wrapper .tsd-panel-group > h3 {\n    padding-left: 20px;\n    padding-right: 20px; }\n  ::ng-deep.documentation-wrapper #tsd-search {\n    transition: background-color 0.2s; }\n  ::ng-deep.documentation-wrapper #tsd-search .title {\n    position: relative;\n    z-index: 2; }\n  ::ng-deep.documentation-wrapper #tsd-search .field {\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 40px;\n    height: 40px; }\n  ::ng-deep.documentation-wrapper #tsd-search .field input {\n    box-sizing: border-box;\n    position: relative;\n    top: -50px;\n    z-index: 1;\n    width: 100%;\n    padding: 0 10px;\n    opacity: 0;\n    outline: 0;\n    border: 0;\n    background: transparent;\n    color: #222; }\n  ::ng-deep.documentation-wrapper #tsd-search .field label {\n    position: absolute;\n    overflow: hidden;\n    right: -40px; }\n  ::ng-deep.documentation-wrapper #tsd-search .field input, ::ng-deep.documentation-wrapper #tsd-search .title {\n    transition: opacity 0.2s; }\n  ::ng-deep.documentation-wrapper #tsd-search .results {\n    position: absolute;\n    visibility: hidden;\n    top: 40px;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25); }\n  ::ng-deep.documentation-wrapper #tsd-search .results li {\n    padding: 0 10px;\n    background-color: #fdfdfd; }\n  ::ng-deep.documentation-wrapper #tsd-search .results li:nth-child(even) {\n    background-color: #fff; }\n  ::ng-deep.documentation-wrapper #tsd-search .results li.state {\n    display: none; }\n  ::ng-deep.documentation-wrapper #tsd-search .results li.current, ::ng-deep.documentation-wrapper #tsd-search .results li:hover {\n    background-color: #eee; }\n  ::ng-deep.documentation-wrapper #tsd-search .results a {\n    display: block; }\n  ::ng-deep.documentation-wrapper #tsd-search .results a:before {\n    top: 10px; }\n  ::ng-deep.documentation-wrapper #tsd-search .results span.parent {\n    color: #808080;\n    font-weight: normal; }\n  ::ng-deep.documentation-wrapper #tsd-search.has-focus {\n    background-color: #eee; }\n  ::ng-deep.documentation-wrapper #tsd-search.has-focus .field input {\n    top: 0;\n    opacity: 1; }\n  ::ng-deep.documentation-wrapper #tsd-search.has-focus .title {\n    z-index: 0;\n    opacity: 0; }\n  ::ng-deep.documentation-wrapper #tsd-search.has-focus .results {\n    visibility: visible; }\n  ::ng-deep.documentation-wrapper #tsd-search.loading .results li.state.loading {\n    display: block; }\n  ::ng-deep.documentation-wrapper #tsd-search.failure .results li.state.failure {\n    display: block; }\n  ::ng-deep.documentation-wrapper .tsd-signature {\n    margin: 0 0 1em 0;\n    padding: 10px;\n    border: 1px solid #eee;\n    font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n    font-size: 14px; }\n  ::ng-deep.documentation-wrapper .tsd-signature.tsd-kind-icon {\n    padding-left: 30px; }\n  ::ng-deep.documentation-wrapper .tsd-signature.tsd-kind-icon:before {\n    top: 10px;\n    left: 10px; }\n  ::ng-deep.documentation-wrapper .tsd-panel > .tsd-signature {\n    margin-left: -20px;\n    margin-right: -20px;\n    border-width: 1px 0; }\n  ::ng-deep.documentation-wrapper .tsd-panel > .tsd-signature.tsd-kind-icon {\n    padding-left: 40px; }\n  ::ng-deep.documentation-wrapper .tsd-panel > .tsd-signature.tsd-kind-icon:before {\n    left: 20px; }\n  ::ng-deep.documentation-wrapper .tsd-signature-symbol {\n    color: #808080;\n    font-weight: normal; }\n  ::ng-deep.documentation-wrapper .tsd-signature-type {\n    font-style: italic;\n    font-weight: normal; }\n  ::ng-deep.documentation-wrapper .tsd-signatures {\n    padding: 0;\n    margin: 0 0 1em 0;\n    border: 1px solid #eee; }\n  ::ng-deep.documentation-wrapper .tsd-signatures .tsd-signature {\n    margin: 0;\n    border-width: 1px 0 0 0;\n    transition: background-color 0.1s; }\n  ::ng-deep.documentation-wrapper .tsd-signatures .tsd-signature:first-child {\n    border-top-width: 0; }\n  ::ng-deep.documentation-wrapper .tsd-signatures .tsd-signature.current {\n    background-color: #eee; }\n  ::ng-deep.documentation-wrapper .tsd-signatures.active > .tsd-signature {\n    cursor: pointer; }\n  ::ng-deep.documentation-wrapper .tsd-panel > .tsd-signatures {\n    margin-left: -20px;\n    margin-right: -20px;\n    border-width: 1px 0; }\n  ::ng-deep.documentation-wrapper .tsd-panel > .tsd-signatures .tsd-signature.tsd-kind-icon {\n    padding-left: 40px; }\n  ::ng-deep.documentation-wrapper .tsd-panel > .tsd-signatures .tsd-signature.tsd-kind-icon:before {\n    left: 20px; }\n  ::ng-deep.documentation-wrapper .tsd-panel > a.anchor + .tsd-signatures {\n    border-top-width: 0;\n    margin-top: -20px; }\n  ::ng-deep.documentation-wrapper ul.tsd-descriptions {\n    position: relative;\n    overflow: hidden;\n    transition: height 0.3s;\n    padding: 0;\n    list-style: none; }\n  ::ng-deep.documentation-wrapper ul.tsd-descriptions.active > .tsd-description {\n    display: none; }\n  ::ng-deep.documentation-wrapper ul.tsd-descriptions.active > .tsd-description.current {\n    display: block; }\n  ::ng-deep.documentation-wrapper ul.tsd-descriptions.active > .tsd-description.fade-in {\n    -webkit-animation: fade-in-delayed 0.3s;\n    animation: fade-in-delayed 0.3s; }\n  ::ng-deep.documentation-wrapper ul.tsd-descriptions.active > .tsd-description.fade-out {\n    -webkit-animation: fade-out-delayed 0.3s;\n    animation: fade-out-delayed 0.3s;\n    position: absolute;\n    display: block;\n    top: 0;\n    left: 0;\n    right: 0;\n    opacity: 0;\n    visibility: hidden; }\n  ::ng-deep.documentation-wrapper ul.tsd-descriptions h4, ::ng-deep.documentation-wrapper ul.tsd-descriptions .tsd-index-panel h3, ::ng-deep.documentation-wrapper .tsd-index-panel ul.tsd-descriptions h3 {\n    font-size: 16px;\n    margin: 1em 0 0.5em 0; }\n  ::ng-deep.documentation-wrapper ul.tsd-parameters, ::ng-deep.documentation-wrapper ul.tsd-type-parameters {\n    list-style: square;\n    margin: 0;\n    padding-left: 20px; }\n  ::ng-deep.documentation-wrapper ul.tsd-parameters > li.tsd-parameter-siganture, ::ng-deep.documentation-wrapper ul.tsd-type-parameters > li.tsd-parameter-siganture {\n    list-style: none;\n    margin-left: -20px; }\n  ::ng-deep.documentation-wrapper ul.tsd-parameters h5, ::ng-deep.documentation-wrapper ul.tsd-type-parameters h5 {\n    font-size: 16px;\n    margin: 1em 0 0.5em 0; }\n  ::ng-deep.documentation-wrapper ul.tsd-parameters .tsd-comment, ::ng-deep.documentation-wrapper ul.tsd-type-parameters .tsd-comment {\n    margin-top: -0.5em; }\n  ::ng-deep.documentation-wrapper .tsd-sources {\n    font-size: 14px;\n    color: #808080;\n    margin: 0 0 1em 0; }\n  ::ng-deep.documentation-wrapper .tsd-sources a {\n    color: #808080;\n    text-decoration: underline; }\n  ::ng-deep.documentation-wrapper .tsd-sources ul, ::ng-deep.documentation-wrapper .tsd-sources p {\n    margin: 0 !important; }\n  ::ng-deep.documentation-wrapper .tsd-sources ul {\n    list-style: none;\n    padding: 0; }\n  ::ng-deep.documentation-wrapper .tsd-page-toolbar {\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 40px;\n    color: #333;\n    background: #fff;\n    border-bottom: 1px solid #eee; }\n  ::ng-deep.documentation-wrapper .tsd-page-toolbar a {\n    color: #333;\n    text-decoration: none; }\n  ::ng-deep.documentation-wrapper .tsd-page-toolbar a.title {\n    font-weight: bold; }\n  ::ng-deep.documentation-wrapper .tsd-page-toolbar a.title:hover {\n    text-decoration: underline; }\n  ::ng-deep.documentation-wrapper .tsd-page-toolbar .table-wrap {\n    display: table;\n    width: 100%;\n    height: 40px; }\n  ::ng-deep.documentation-wrapper .tsd-page-toolbar .table-cell {\n    display: table-cell;\n    position: relative;\n    white-space: nowrap;\n    line-height: 40px; }\n  ::ng-deep.documentation-wrapper .tsd-page-toolbar .table-cell:first-child {\n    width: 100%; }\n  ::ng-deep.documentation-wrapper .tsd-widget:before, ::ng-deep.documentation-wrapper .tsd-select .tsd-select-label:before, ::ng-deep.documentation-wrapper .tsd-select .tsd-select-list li:before {\n    content: \"\";\n    display: inline-block;\n    width: 40px;\n    height: 40px;\n    margin: 0 -8px 0 0;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAAoCAQAAAAlSeuiAAABp0lEQVR4Ae3aUa3jQAyF4QNhIBTCQiiEQlgIhRAGhTAQBkIgBEIgDITZZGXNjZTePiSWYqn/54dGfbAq+SiTutWXAgAAAAAAAAAAAAA8NCz1UFSD2lKDS5d3NVzZj/BVNasaLoRZRUmj2lLrVVHWMUntQ13Wj/i1pWa9lprX6xMRnH4dx6Rjsn26+v+12ms+EcB37P0r+qH+DNQGXgMFcHzbregQ78B8eQCTJk0e979ZW7PdA2O49ceDsYexKgUNoI3EKYDWL3D8miaPh/uXtl6BHqEHFQvgXau/FsCiIWAAbST2fpQRT0sl70j3z5ZiBdD7CG5WZX8kxwmgjbiP5GQA9/3O2XaxnnHi53AEE0AbRh+JQwC3/fzC4hcb6xPvS4i3QaMdwX+0utsRPEY6gm2wNhKHAG77eUi7SIcK4G4NY4GMIan2u2Cxqzncl5DUn7Q8ArjvZ8JFOsl/Ed0jyBom+BomQKSto+9PcblHMM4iuu4X0QQw5hrGQY/gUxFkjZuf4m4alXVU+1De/VhEn5CvDSB/RsBzqWgAAAAAAAAAAAAAAACAfyyYJ5nhVuwIAAAAAElFTkSuQmCC);\n    background-repeat: no-repeat;\n    text-indent: -1024px;\n    vertical-align: bottom; }\n  @media (-webkit-min-device-pixel-ratio: 1.5), (min-device-pixel-ratio: 1.5), (min-resolution: 144dpi) {\n    ::ng-deep.documentation-wrapper .tsd-widget:before, ::ng-deep.documentation-wrapper .tsd-select .tsd-select-label:before, ::ng-deep.documentation-wrapper .tsd-select .tsd-select-list li:before {\n      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAABQCAMAAAC+sjQXAAAAM1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACjBUbJAAAAEXRSTlMA3/+/UCBw7xCPYIBAMM+vn1qYQ7QAAALCSURBVHgB7MGBAAAAAICg/akXqQIAAAAAAAAAAAAAAAAAAJids9mdE4bhoDNZCITP93/aSmhV/9uwPWyi8jtkblws2IxsYpz9LwSAaJW8AreE16PxOsMYE6Q4DiYKF7X+8ZHXc/E608xv5snEyIuZrVwMZjbnujR6T3gsXmcLOIRNzD+Ig2UuVtt2+NbAiX/wVLzOlviD9L2BOfGBlL/3D1I+uDjGBJArBPxU3x+K15kCQFo2s21JAOHrKpz4SPrWv4IKA+uFaR6vMwMcb+emA2DWEfDglrkLqEBOKVslA8Dx14oPMiV4CtywWxdQgAwkq2QE0uTXUwJGk2G9s3mTFNBzAkC7HKPsX72AEVjMnAWIpsPCRRjXdQxcjCYpoOcEgHY5Rtk/slWSgM3M2aSeeVgjAOeVpKcdgGMdNAXMuIAqOcZzqF8L+WcAsi8wkTeheCWMegL6mgCorHHyEJ5TVfxrLWDrTUjZdhnhjYqAnlN8TaoELOLVC0gucmoz/3RKcPs2jAs4+J5ET8AEZF+TSgGLeC1V8YuGQQU2IV1Asq9JCwE9XitZVPxr34bpJRj8PqsFLOK108W9aVrWZRrR7Sm2HL4JCToCujHZ6gUs4jUz0P1TEvD+U5wMa363YeziBODIq1YbJrsv9QKW8Ry1nNp+GAHvuingRTfmYcjBf0QpAS37bdUL6PFKtHJq63EsZ5cxcKMkDVIClu1dAK1PcJ5TFQ0M9wZKDCPs3BD7MIJGTs3WfiTfDVQYx5q5ZekCauTU3P5Q0ukGCgh49oFURdobWBY9N/CxEuwGjpGLuPhTdwH1x7HqDDxNgRP2zQ8lraFyF/yJ9vH6QGqtgSbBOU8/j2VORz+Wqfle2d5Ae4R+ML0z7Y+W4P7XHN3AU+tzyK/24EAGAAAAYJC/9T2+CgAAAAAAAAAAAAAAAAAAAADgJpfzHyIKFFBKAAAAAElFTkSuQmCC);\n      background-size: 320px 40px; } }\n  ::ng-deep.documentation-wrapper .tsd-widget {\n    display: inline-block;\n    overflow: hidden;\n    opacity: 0.6;\n    height: 40px;\n    transition: opacity 0.1s, background-color 0.2s;\n    vertical-align: bottom;\n    cursor: pointer; }\n  ::ng-deep.documentation-wrapper .tsd-widget:hover {\n    opacity: 0.8; }\n  ::ng-deep.documentation-wrapper .tsd-widget.active {\n    opacity: 1;\n    background-color: #eee; }\n  ::ng-deep.documentation-wrapper .tsd-widget.no-caption {\n    width: 40px; }\n  ::ng-deep.documentation-wrapper .tsd-widget.no-caption:before {\n    margin: 0; }\n  ::ng-deep.documentation-wrapper .tsd-widget.search:before {\n    background-position: 0 0; }\n  ::ng-deep.documentation-wrapper .tsd-widget.menu:before {\n    background-position: -40px 0; }\n  ::ng-deep.documentation-wrapper .tsd-widget.options:before {\n    background-position: -80px 0; }\n  ::ng-deep.documentation-wrapper .tsd-widget.options, ::ng-deep.documentation-wrapper .tsd-widget.menu {\n    display: none; }\n  @media (max-width: 900px) {\n    ::ng-deep.documentation-wrapper .tsd-widget.options, ::ng-deep.documentation-wrapper .tsd-widget.menu {\n      display: inline-block; } }\n  ::ng-deep.documentation-wrapper input[type=checkbox] + .tsd-widget:before {\n    background-position: -120px 0; }\n  ::ng-deep.documentation-wrapper input[type=checkbox]:checked + .tsd-widget:before {\n    background-position: -160px 0; }\n  ::ng-deep.documentation-wrapper .tsd-select {\n    position: relative;\n    display: inline-block;\n    height: 40px;\n    transition: opacity 0.1s, background-color 0.2s;\n    vertical-align: bottom;\n    cursor: pointer; }\n  ::ng-deep.documentation-wrapper .tsd-select .tsd-select-label {\n    opacity: 0.6;\n    transition: opacity 0.2s; }\n  ::ng-deep.documentation-wrapper .tsd-select .tsd-select-label:before {\n    background-position: -240px 0; }\n  ::ng-deep.documentation-wrapper .tsd-select.active .tsd-select-label {\n    opacity: 0.8; }\n  ::ng-deep.documentation-wrapper .tsd-select.active .tsd-select-list {\n    visibility: visible;\n    opacity: 1;\n    transition-delay: 0s; }\n  ::ng-deep.documentation-wrapper .tsd-select .tsd-select-list {\n    position: absolute;\n    visibility: hidden;\n    top: 40px;\n    left: 0;\n    margin: 0;\n    padding: 0;\n    opacity: 0;\n    list-style: none;\n    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);\n    transition: visibility 0s 0.2s, opacity 0.2s; }\n  ::ng-deep.documentation-wrapper .tsd-select .tsd-select-list li {\n    padding: 0 20px 0 0;\n    background-color: #fdfdfd; }\n  ::ng-deep.documentation-wrapper .tsd-select .tsd-select-list li:before {\n    background-position: 40px 0; }\n  ::ng-deep.documentation-wrapper .tsd-select .tsd-select-list li:nth-child(even) {\n    background-color: #fff; }\n  ::ng-deep.documentation-wrapper .tsd-select .tsd-select-list li:hover {\n    background-color: #eee; }\n  ::ng-deep.documentation-wrapper .tsd-select .tsd-select-list li.selected:before {\n    background-position: -200px 0; }\n  @media (max-width: 900px) {\n    ::ng-deep.documentation-wrapper .tsd-select .tsd-select-list {\n      top: 0;\n      left: auto;\n      right: 100%;\n      margin-right: -5px; }\n    ::ng-deep.documentation-wrapper .tsd-select .tsd-select-label:before {\n      background-position: -280px 0; } }\n  ::ng-deep.documentation-wrapper img {\n    max-width: 100%; }\n"

/***/ })

}]);
//# sourceMappingURL=documentation-documentation-module.js.map