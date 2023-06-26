// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"eFdob":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ae62edc4cb43b74a";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1l7bB":[function(require,module,exports) {
var _exportFooterBar = require("./page-modules/footer-bar/export-footer-bar");
var _exportBurger = require("./page-modules/burger/export-burger");
var _exportAuthentication = require("./page-modules/authentication/export-authentication");
var _exportBasket = require("./page-modules/basket/export-basket");
var _exportSlider = require("./page-modules/slider/export-slider");
var _exportSearch = require("./page-modules/search/export-search");
var _exportFooter = require("./page-modules/footer/export-footer");
var _exportBrands = require("./page-modules/brands/export-brands");
var _sidebarExport = require("./page-modules/sidebar/sidebar-export");

},{"./page-modules/footer-bar/export-footer-bar":"duso4","./page-modules/burger/export-burger":"bJGIK","./page-modules/authentication/export-authentication":"fJ3AE","./page-modules/basket/export-basket":"8yUuE","./page-modules/slider/export-slider":"lPyde","./page-modules/search/export-search":"adQnh","./page-modules/footer/export-footer":"9ZmAw","./page-modules/brands/export-brands":"3ztCg","./page-modules/sidebar/sidebar-export":"gj6hT"}],"duso4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "footerBarUser", ()=>_footerBarUserJs);
var _footerBarUserJs = require("./footer-bar-user.js");

},{"./footer-bar-user.js":"iysVJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iysVJ":[function(require,module,exports) {
var _burgerJs = require("../burger/burger.js");
var _submenuJs = require("../authentication/submenu.js");
const userFooterBarBtn = document.querySelector(".footer-bar__user");
const submenu = document.querySelector(".user__submenu");
const btnClose = document.querySelectorAll(".btn-close");
const registrationWrapper = document.querySelector(".user__registration");
const loginWrapper = document.querySelector(".user__login");
userFooterBarBtn.addEventListener("click", function() {
    if (!submenu.classList.contains("user__submenu_active") && !registrationWrapper.classList.contains("user__registration_active") && !loginWrapper.classList.contains("user__login_active")) {
        submenu.classList.add("user__submenu_active");
        (0, _burgerJs.setBodyStyles)("fixed", "100%", "scroll");
        (0, _submenuJs.checkSubmenuClass)();
    } else if (submenu.classList.contains("user__submenu_active")) {
        submenu.classList.remove("user__submenu_active");
        (0, _burgerJs.setBodyStyles)(null, null, null);
        (0, _submenuJs.checkSubmenuClass)();
    }
});
btnClose.forEach((el)=>el.addEventListener("click", ()=>(0, _burgerJs.setBodyStyles)(null, null, null)));

},{"../burger/burger.js":"5lyme","../authentication/submenu.js":"9nm5y"}],"5lyme":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setBodyStyles", ()=>(0, _hideScroll.setBodyStyles));
parcelHelpers.export(exports, "checkSidebarClass", ()=>checkSidebarClass);
var _hideScroll = require("../../core/utils/hide-scroll");
const burgerBtn = document.querySelector(".burger");
const burgerFooterBarBtn = document.querySelector(".footer-bar__sidebar-btn");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".sidebar .btn-close");
const body = document.getElementById("body");
burgerBtn.addEventListener("click", chengeSidebarClass);
burgerFooterBarBtn.addEventListener("click", chengeSidebarClass);
function chengeSidebarClass() {
    if (!sidebar.classList.contains("sidebar_active")) {
        sidebar.classList.add("sidebar_active");
        (0, _hideScroll.setBodyStyles)("fixed", "100%", "scroll");
        checkSidebarClass();
    } else {
        sidebar.classList.remove("sidebar_active");
        (0, _hideScroll.setBodyStyles)(null, null, null);
    }
}
function checkSidebarClass() {
    if (sidebar.classList.contains("sidebar_active")) document.addEventListener("click", removeSidebarClass);
    else document.removeEventListener("click", removeSidebarClass);
}
function removeSidebarClass(event) {
    if (!sidebar.contains(event.target) && !burgerBtn.contains(event.target) && !burgerFooterBarBtn.contains(event.target)) {
        sidebar.classList.remove("sidebar_active");
        (0, _hideScroll.setBodyStyles)(null, null, null);
        checkSidebarClass();
    }
}
closeBtn.addEventListener("click", function() {
    if (sidebar.classList.contains("sidebar_active")) {
        sidebar.classList.remove("sidebar_active");
        (0, _hideScroll.setBodyStyles)(null, null, null);
    }
});

},{"../../core/utils/hide-scroll":"jl5TS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jl5TS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setBodyStyles", ()=>setBodyStyles);
let scrollTop = 0;
let scrollLeft = 0;
function setBodyStyles(position, width, overflowY) {
    if (position === "fixed") {
        scrollTop = window.scrollY || document.documentElement.scrollTop;
        scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    }
    body.style.position = position;
    body.style.width = width;
    body.style.overflowY = overflowY;
    if (position !== "fixed") window.scrollTo(scrollLeft, scrollTop);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9nm5y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "checkSubmenuClass", ()=>checkSubmenuClass);
parcelHelpers.export(exports, "removeSubmenuClassList", ()=>removeSubmenuClassList);
var _registrationJs = require("./registration.js");
var _loginJs = require("./login.js");
const userBtn = document.querySelector(".user-btn");
const submenu = document.querySelector(".user__submenu");
const submenuBtnClose = document.querySelector(".user__submenu-btn-close");
const btnRegistration = document.querySelector(".user__submenu-btn-registration");
const btnLogin = document.querySelector(".user__submenu-btn-login");
const userFooterBarBtn = document.querySelector(".footer-bar__user");
userBtn.addEventListener("click", function() {
    submenu.classList.toggle("user__submenu_active");
    checkSubmenuClass();
});
function checkSubmenuClass() {
    if (submenu.classList.contains("user__submenu_active")) {
        userBtn.classList.add("user-btn_active");
        document.addEventListener("click", removeSubmenuClassList);
    } else {
        userBtn.classList.remove("user-btn_active");
        document.removeEventListener("click", removeSubmenuClassList);
    }
}
function removeSubmenuClassList(event) {
    if (!submenu.contains(event.target) && !userBtn.contains(event.target) && !userFooterBarBtn.contains(event.target) && !event.target.classList.contains("basket__btn-order")) {
        submenu.classList.remove("user__submenu_active");
        checkSubmenuClass();
    }
}
submenuBtnClose.addEventListener("click", function() {
    submenu.classList.remove("user__submenu_active");
    checkSubmenuClass();
});
btnRegistration.addEventListener("click", function() {
    submenu.classList.remove("user__submenu_active");
    checkSubmenuClass();
    (0, _registrationJs.registrationWrapperAddClassActive)();
});
btnLogin.addEventListener("click", function() {
    submenu.classList.remove("user__submenu_active");
    checkSubmenuClass();
    (0, _loginJs.loginWrapperAddClassActive)();
});

},{"./registration.js":"6QAf4","./login.js":"eoIe3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6QAf4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "registrationWrapperAddClassActive", ()=>registrationWrapperAddClassActive);
var _authenticationApiJs = require("../../core/API/authenticationApi.js");
var _optionsJs = require("../../core/consts/options.js");
var _usersStoreJs = require("../../stores/users-store/users-store.js");
var _createFormJs = require("../../core/utils/authentication/create-form.js");
var _changeTokenJs = require("../../core/utils/authentication/change-token.js");
var _successAuthenticationJs = require("../../core/utils/authentication/success-authentication.js");
var _orderJs = require("../../core/utils/order/order.js");
const registrationWrapper = document.querySelector(".user__registration");
const btnClose = document.querySelector(".user__registration-btn-close");
const btnRegistration = document.querySelector(".user__submenu-btn-registration");
const userBtn = document.querySelector(".user-btn");
function registrationWrapperAddClassActive() {
    registrationWrapper.classList.add("user__registration_active");
    checkRegistrationClass();
}
function checkRegistrationClass() {
    if (registrationWrapper.classList.contains("user__registration_active")) {
        document.addEventListener("click", removeRegistrationClassList);
        userBtn.classList.add("user-btn_active");
        document.querySelector(".registration__btn").addEventListener("click", submitForm);
    }
}
function removeRegistrationClassList(event) {
    if (!registrationWrapper.contains(event.target) && !btnRegistration.contains(event.target)) registrationWrapper.classList.remove("user__registration_active");
    if (!registrationWrapper.classList.contains("user__registration_active")) {
        document.removeEventListener("click", removeRegistrationClassList);
        userBtn.classList.remove("user-btn_active");
        resetForm();
    }
}
btnClose.addEventListener("click", function() {
    registrationWrapper.classList.remove("user__registration_active");
});
async function addInputsValues() {
    let inputs = document.querySelectorAll(".user__input");
    let values = [];
    let SpecialSymbolsArray = /[!@#$%^&*()[\]{}|\\;:'"<>.,\/?`~=+\-№_]/;
    const SpecialSymbols = "!@#$%^&*()-_+={}[]|\\;:'\"<>.,/?`~№";
    const errorMessageRegistrationLogin = document.querySelector(".error-message_registration-login");
    const errorMessageRegistrationPasswordFirst = document.querySelector(".error-message_registration-password-first");
    const errorMessageRegistrationPasswordSecond = document.querySelector(".error-message_registration-password-second");
    inputs.forEach((element)=>values.push(element.value));
    const person = {
        login: values[0],
        password: values[1],
        token: Math.random() * new Date().getTime()
    };
    let userData = await (0, _authenticationApiJs.AuthenticationApi).getUserByLogin(person.login);
    const minLogin = 3;
    const minPassword = 8;
    const maxSymbols = 20;
    const showSymbolsLengthErrorMessage = (element, min, max, credentialName)=>element.textContent = `${credentialName} должен содержать от ${min} до ${max} символов`;
    const currentPasswordLength = person.password.length;
    const currentLoginLength = person.login.length;
    if (person.login.match(SpecialSymbolsArray)) errorMessageRegistrationLogin.textContent = `Логин не должен содержать пробелы и символы: ${SpecialSymbols}`;
    else if (currentPasswordLength < minPassword || currentPasswordLength > maxSymbols) showSymbolsLengthErrorMessage(errorMessageRegistrationPasswordFirst, minPassword, maxSymbols, "Пароль");
    else if (currentLoginLength < minLogin || currentLoginLength > maxSymbols) showSymbolsLengthErrorMessage(errorMessageRegistrationLogin, minLogin, maxSymbols, "Логин");
    else if (values[1] !== values[2]) {
        errorMessageRegistrationPasswordFirst.textContent = "Пароль не совпадает";
        errorMessageRegistrationPasswordSecond.textContent = "Пароль не совпадает";
    } else if (userData !== undefined) errorMessageRegistrationLogin.textContent = `Пользователь с логином "${person.login}" уже зарегистрирован`;
    else {
        (0, _authenticationApiJs.AuthenticationApi).setUser(person.login, person.password, person.token).then(()=>(0, _successAuthenticationJs.successAuthentication)(".user__registration-form", "Регистрация прошла успешно ☑"));
        (0, _usersStoreJs.setTokenStore)(person.token);
        setTimeout(()=>{
            (0, _changeTokenJs.changeToken)();
            (0, _orderJs.linkStoreToUserData)();
        }, 3000);
    }
}
function showPassword() {
    const inputPassword = document.querySelector('[data-input="1"]');
    const inputRepeatPassword = document.querySelector('[data-input="2"]');
    const btnShow1 = document.querySelector('[data-btn="1"]');
    const btnShow2 = document.querySelector('[data-btn="2"]');
    const btns = document.querySelectorAll(".btn-show-password");
    btns.forEach((btn)=>{
        btn.addEventListener("click", function(event) {
            let input = event.target.getAttribute("data-btn") === "1" ? inputPassword : inputRepeatPassword;
            let neededType = input.type === "password" ? "text" : "password";
            input.type = neededType;
            let btn = event.target.getAttribute("data-btn") === "1" ? btnShow1 : btnShow2;
            let neededText = btn.textContent === "показать пароль" ? "скрыть пароль" : "показать пароль";
            btn.textContent = neededText;
        });
    });
}
function resetForm() {
    registrationForm = document.querySelector(".user__registration-form");
    if (registrationForm) {
        registrationForm.reset();
        document.querySelector('[data-input="1"]').type = "password";
        document.querySelector('[data-input="2"]').type = "password";
        document.querySelector('[data-btn="1"]').textContent = "показать пароль";
        document.querySelector('[data-btn="2"]').textContent = "показать пароль";
        resetErrorMessage();
    }
}
function resetErrorMessage() {
    const errorMessageRegistrationLogin = document.querySelector(".error-message_registration-login");
    const errorMessageRegistrationPasswordFirst = document.querySelector(".error-message_registration-password-first");
    const errorMessageRegistrationPasswordSecond = document.querySelector(".error-message_registration-password-second");
    errorMessageRegistrationLogin.textContent = null;
    errorMessageRegistrationPasswordFirst.textContent = null;
    errorMessageRegistrationPasswordSecond.textContent = null;
}
function submitForm(event) {
    event.preventDefault();
    addInputsValues();
    resetErrorMessage();
}
function init() {
    (0, _createFormJs.createForm)("user__registration-form", (0, _optionsJs.REGISTRATION_OPTIONS), registrationWrapper);
    showPassword();
    (0, _changeTokenJs.changeToken)();
}
document.addEventListener("DOMContentLoaded", init);

},{"../../core/API/authenticationApi.js":"7yKf7","../../core/consts/options.js":"a8zsC","../../stores/users-store/users-store.js":"5mRkp","../../core/utils/authentication/create-form.js":"8GXyQ","../../core/utils/authentication/change-token.js":"9csWu","../../core/utils/authentication/success-authentication.js":"1kKgw","../../core/utils/order/order.js":"j9F6e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a8zsC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "REGISTRATION_OPTIONS", ()=>REGISTRATION_OPTIONS);
parcelHelpers.export(exports, "LOGIN_OPTIONS", ()=>LOGIN_OPTIONS);
const REGISTRATION_OPTIONS = [
    {
        tag: "input",
        class: "user__input",
        attributes: [
            {
                required: true
            },
            {
                placeholder: "Логин"
            },
            {
                type: "text"
            }
        ]
    },
    {
        tag: "span",
        class: [
            "error-message",
            "error-message_registration-login"
        ]
    },
    {
        tag: "input",
        class: "user__input",
        attributes: [
            {
                required: true
            },
            {
                placeholder: "Пароль"
            },
            {
                type: "password"
            },
            {
                "data-input": "1"
            }
        ]
    },
    {
        tag: "button",
        class: "btn-show-password",
        attributes: [
            {
                href: "#"
            },
            {
                "data-btn": "1"
            },
            {
                type: "button"
            }
        ],
        text: "показать пароль"
    },
    {
        tag: "span",
        class: [
            "error-message",
            "error-message_registration-password-first"
        ]
    },
    {
        tag: "input",
        class: "user__input",
        attributes: [
            {
                required: true
            },
            {
                placeholder: "Повторите пароль"
            },
            {
                type: "password"
            },
            {
                "data-input": "2"
            }
        ]
    },
    {
        tag: "button",
        class: "btn-show-password",
        attributes: [
            {
                href: "#"
            },
            {
                "data-btn": "2"
            },
            {
                type: "button"
            }
        ],
        text: "показать пароль"
    },
    {
        tag: "span",
        class: [
            "error-message",
            "error-message_registration-password-second"
        ]
    },
    {
        tag: "button",
        class: [
            "btn",
            "registration__btn"
        ],
        content: "Зарегистрироваться",
        attributes: [
            {
                type: "submit"
            }
        ]
    }
];
const LOGIN_OPTIONS = [
    {
        tag: "input",
        class: "user__login-input",
        attributes: [
            {
                required: true
            },
            {
                placeholder: "Логин"
            },
            {
                type: "text"
            }
        ]
    },
    {
        tag: "span",
        class: [
            "error-message",
            "error-message_login"
        ]
    },
    {
        tag: "input",
        class: "user__login-input",
        attributes: [
            {
                required: true
            },
            {
                placeholder: "Введите пароль"
            },
            {
                type: "password"
            },
            {
                "data-input": "input"
            }
        ]
    },
    {
        tag: "button",
        class: "btn-show-password",
        attributes: [
            {
                href: "#"
            },
            {
                "data-btn": "password"
            },
            {
                type: "button"
            }
        ],
        text: "показать пароль"
    },
    {
        tag: "span",
        class: [
            "error-message",
            "error-message_password"
        ]
    },
    {
        tag: "button",
        class: [
            "btn",
            "login-btn"
        ],
        content: "Войти",
        attributes: [
            {
                type: "submit"
            }
        ]
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8GXyQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createForm", ()=>createForm);
var _createFormElements = require("./create-form-elements");
function createForm(elementClass, options, container) {
    const form = document.createElement("form");
    form.classList.add(elementClass);
    (0, _createFormElements.createFormElements)(form, options);
    container.appendChild(form);
}

},{"./create-form-elements":"aJP88","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aJP88":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createFormElements", ()=>createFormElements);
function createFormElements(form, options) {
    options.forEach((option)=>{
        const element = document.createElement(option.tag);
        if (Array.isArray(option.class) && option.class.length > 0) option.class.forEach((className)=>element.classList.add(className));
        else element.classList.add(option.class);
        option.id && (element.id = option.id);
        option.text && (element.textContent = option.text);
        option.content && (element.textContent = option.content);
        option.dataset && (element.dataset.data = option.dataset.data);
        if (option.attributes && option.attributes.length > 0) option.attributes.forEach((attribute)=>{
            const [key, value] = Object.entries(attribute)[0];
            element.setAttribute(key, value);
        });
        form.appendChild(element);
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9csWu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "changeToken", ()=>changeToken);
var _usersStoreJs = require("../../../stores/users-store/users-store.js");
var _authorizedJs = require("./authorized.js");
const userBtn = document.querySelector(".user-btn");
function changeToken() {
    const token = (0, _usersStoreJs.getTokenStore)();
    if (token) {
        (0, _authorizedJs.userAuthorized)(token);
        userBtn.classList.add("user-btn_authorized");
    } else userBtn.classList.remove("user-btn_authorized");
}

},{"../../../stores/users-store/users-store.js":"5mRkp","./authorized.js":"9tCSh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9tCSh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "userAuthorized", ()=>userAuthorized);
var _authenticationApiJs = require("../../API/authenticationApi.js");
var _singOutJs = require("./singOut.js");
const submenu = document.querySelector(".user__submenu");
async function userAuthorized(token) {
    const userData = await (0, _authenticationApiJs.AuthenticationApi).getUserByToken(token);
    if (userData) {
        const allSubmenuChildren = submenu.children;
        submenu.removeChild(allSubmenuChildren[1]);
        submenu.removeChild(allSubmenuChildren[1]);
        allSubmenuChildren[0].querySelector(".modal-header__title > h2").textContent = `Здравствуйте, ${userData.login}!`;
        const btnExit = document.createElement("button");
        btnExit.type = "button";
        btnExit.classList.add("btn", "user__submenu-btn-exit");
        btnExit.textContent = "Выйти из аккаунта";
        submenu.appendChild(btnExit);
        btnExit.addEventListener("click", (0, _singOutJs.singOut));
    }
}

},{"../../API/authenticationApi.js":"7yKf7","./singOut.js":"dn8ym","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dn8ym":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "singOut", ()=>singOut);
var _usersStoreJs = require("../../../stores/users-store/users-store.js");
function singOut() {
    (0, _usersStoreJs.removeTokenStore)();
    localStorage.setItem("basketStore", JSON.stringify([]));
    location.reload();
}

},{"../../../stores/users-store/users-store.js":"5mRkp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1kKgw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "successAuthentication", ()=>successAuthentication);
function successAuthentication(formClass, message) {
    const form = document.querySelector(formClass);
    const parent = form.parentNode;
    parent.innerHTML = null;
    const successContainer = document.createElement("div");
    const successMessage = document.createElement("span");
    successContainer.classList.add("success-container");
    successMessage.classList.add("success-message");
    successMessage.textContent = message;
    successContainer.appendChild(successMessage);
    parent.append(successContainer);
    setTimeout(function() {
        parent.remove();
    }, 3000);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eoIe3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loginWrapperAddClassActive", ()=>loginWrapperAddClassActive);
var _optionsJs = require("../../core/consts/options.js");
var _authenticationApiJs = require("../../core/API/authenticationApi.js");
var _usersStoreJs = require("../../stores/users-store/users-store.js");
var _createFormJs = require("../../core/utils/authentication/create-form.js");
var _changeTokenJs = require("../../core/utils/authentication/change-token.js");
var _successAuthenticationJs = require("../../core/utils/authentication/success-authentication.js");
var _alertServiceJs = require("../../core/services/alert-service/alertService.js");
const loginWrapper = document.querySelector(".user__login");
const btnClose = document.querySelector(".user__login-btn-close");
const btnLogin = document.querySelector(".user__submenu-btn-login");
const userBtn = document.querySelector(".user-btn");
function loginWrapperAddClassActive() {
    loginWrapper.classList.add("user__login_active");
    addDocumentEvent();
    userBtn.classList.add("user-btn_active");
    document.querySelector(".login-btn").addEventListener("click", submitLoginForm);
}
btnClose.addEventListener("click", function() {
    removeLoginWrapperClassList();
});
function removeLoginWrapperClassList() {
    loginWrapper.classList.remove("user__login_active");
    userBtn.classList.remove("user-btn_active");
}
function addDocumentEvent() {
    if (loginWrapper.classList.contains("user__login_active")) document.addEventListener("click", checkLoginWrapperClass);
}
function checkLoginWrapperClass(event) {
    if (!loginWrapper.contains(event.target) && !btnLogin.contains(event.target)) loginWrapper.classList.remove("user__login_active");
    if (!loginWrapper.classList.contains("user__login_active")) {
        document.removeEventListener("click", checkLoginWrapperClass);
        userBtn.classList.remove("user-btn_active");
        resetLoginForm();
    }
}
async function singIn() {
    let inputs = document.querySelectorAll(".user__login-input");
    let inputsValue = [];
    const errorMessageLogin = document.querySelector(".error-message_login");
    const errorMessagePassword = document.querySelector(".error-message_password");
    inputs.forEach((el)=>{
        inputsValue.push(el.value);
    });
    let userData = await (0, _authenticationApiJs.AuthenticationApi).getUserByLogin(inputsValue[0]);
    if (!userData || userData.password !== inputsValue[1]) {
        errorMessageLogin.textContent = "Неверный логин или пароль";
        errorMessagePassword.textContent = "Неверный логин или пароль";
    } else {
        (0, _successAuthenticationJs.successAuthentication)(".user__login-form", "Вы вошли ✓");
        (0, _alertServiceJs.AlertService).access("Вы вошли ✓");
        (0, _usersStoreJs.setTokenStore)(userData.token);
        localStorage.setItem("basketStore", JSON.stringify(userData.orders));
        (0, _changeTokenJs.changeToken)();
    }
}
function showLoginPassword() {
    const btn = document.querySelector('[data-btn="password"]');
    const input = document.querySelector('[data-input="input"]');
    btn.addEventListener("click", function() {
        neededType = input.type === "password" ? "text" : "password";
        input.type = neededType;
        neededText = btn.textContent === "показать пароль" ? "скрыть пароль" : "показать пароль";
        btn.textContent = neededText;
    });
}
function resetErrorMessage() {
    const errorMessageLogin = document.querySelector(".error-message_login");
    const errorMessagePassword = document.querySelector(".error-message_password");
    errorMessageLogin.textContent = null;
    errorMessagePassword.textContent = null;
}
function resetLoginForm() {
    const loginForm = document.querySelector(".user__login-form");
    if (loginForm) {
        loginForm.reset();
        const btn = document.querySelector('[data-btn="password"]').textContent = "показать пароль";
        const input = document.querySelector('[data-input="input"]').type = "password";
        resetErrorMessage();
    }
}
function submitLoginForm(event) {
    event.preventDefault();
    singIn();
    resetErrorMessage();
}
function init() {
    (0, _createFormJs.createForm)("user__login-form", (0, _optionsJs.LOGIN_OPTIONS), loginWrapper);
    showLoginPassword();
}
document.addEventListener("DOMContentLoaded", init);

},{"../../core/consts/options.js":"a8zsC","../../core/API/authenticationApi.js":"7yKf7","../../stores/users-store/users-store.js":"5mRkp","../../core/utils/authentication/create-form.js":"8GXyQ","../../core/utils/authentication/change-token.js":"9csWu","../../core/utils/authentication/success-authentication.js":"1kKgw","../../core/services/alert-service/alertService.js":"cq7m8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bJGIK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "burger", ()=>_burgerJs);
var _burgerJs = require("./burger.js");

},{"./burger.js":"5lyme","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fJ3AE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "registration", ()=>_registrationJs);
parcelHelpers.export(exports, "submenu", ()=>_submenuJs);
parcelHelpers.export(exports, "login", ()=>_loginJs);
var _registrationJs = require("./registration.js");
var _submenuJs = require("./submenu.js");
var _loginJs = require("./login.js");

},{"./registration.js":"6QAf4","./submenu.js":"9nm5y","./login.js":"eoIe3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8yUuE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "basket", ()=>_basketJs);
var _basketJs = require("./basket.js");

},{"./basket.js":"8Hwqm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Hwqm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "removeFromBasketStorage", ()=>removeFromBasketStorage);
var _orderJs = require("../../core/utils/order/order.js");
var _usersStoreJs = require("../../stores/users-store/users-store.js");
var _submenuJs = require("../authentication/submenu.js");
var _hideScrollJs = require("../../core/utils/hide-scroll.js");
var _alertServiceJs = require("../../core/services/alert-service/alertService.js");
const basketModal = document.querySelector(".basket__modal");
const footerBarBasketBtn = document.querySelector(".footer-bar__basket-btn");
footerBarBasketBtn.addEventListener("click", onBasketBtn);
footerBarBasketBtn.addEventListener("click", function() {
    if (basketModal.classList.contains("basket__modal_active")) (0, _hideScrollJs.setBodyStyles)("fixed", "100%", "scroll");
    else (0, _hideScrollJs.setBodyStyles)(null, null, null);
});
function basketBtn() {
    const basketBtn = document.querySelector(".basket-btn");
    basketBtn.addEventListener("click", onBasketBtn);
}
basketBtn();
function onBasketBtn() {
    const cardList = createCardListFromBasketStore();
    if (!basketModal.classList.contains("basket__modal_active")) {
        if (cardList.length > 0) {
            createBasketList();
            deleteBtns("block", "flex");
            outputTotalPrice();
        } else createBasketList();
        basketModal.classList.add("basket__modal_active");
        checkBasketModalClass();
    } else basketModal.classList.remove("basket__modal_active");
}
function init() {
    createModalHeader();
    createBasketBlock();
    createBtnBasketDltAll();
    createFooterBasket();
}
function createModalHeader() {
    const modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header");
    modalHeader.innerHTML = `
		<div class="modal-header__title">
		<h2>Корзина</h2>
		</div>
		<button class="btn-close basket__modal-btn-close"></button>
		`;
    basketModal.appendChild(modalHeader);
    const btnCloseBasketModal = document.querySelector(".basket__modal-btn-close");
    btnCloseBasketModal.addEventListener("click", onCloseModalByBtnClose);
}
function onCloseModalByBtnClose() {
    const basketBlock = document.querySelector(".basket-block");
    basketModal.classList.remove("basket__modal_active");
    basketBlock.innerHTML = null;
    (0, _hideScrollJs.setBodyStyles)(null, null, null);
}
function checkBasketModalClass() {
    if (basketModal.classList.contains("basket__modal_active")) document.addEventListener("click", closeBasketModal);
    else document.removeEventListener("click", closeBasketModal);
}
function closeBasketModal(event) {
    if (!basketModal.contains(event.target) && !event.target.classList.contains("basket-btn") && !event.target.classList.contains("basket__list-item-btn-remove") && !footerBarBasketBtn.contains(event.target)) {
        basketModal.classList.remove("basket__modal_active");
        checkBasketModalClass();
    }
}
function createBasketBlock() {
    const basketBlock = document.createElement("div");
    basketBlock.classList.add("basket-block");
    return basketModal.appendChild(basketBlock);
}
function createCardListFromBasketStore() {
    const basketStr = localStorage.getItem("basketStore");
    const cardList = JSON.parse(basketStr) || [];
    return cardList;
}
function createBasketList() {
    const basketBlock = document.querySelector(".basket-block");
    const basketList = document.createElement("ul");
    basketList.classList.add("basket__list");
    basketBlock.appendChild(basketList);
    addContentBasketList(`\u{2639}<br>Корзина пуста`);
}
function addContentBasketList(text) {
    const cardList = createCardListFromBasketStore();
    const basketList = document.querySelector(".basket__list");
    if (cardList.length === 0) basketList.innerHTML = text;
    else {
        basketList.textContent = null;
        cardList.forEach((element)=>{
            basketList.append(createBasketListItem(element));
        });
    }
}
function createBasketListItem(element) {
    const basketListItem = document.createElement("li");
    basketListItem.classList.add("basket__list-item");
    const wrapperPriceAndRemove = createListItemWrapper();
    wrapperPriceAndRemove.append(createListItemPrice(element), createBtnRemoveListItem(element));
    basketListItem.append(createListItemTitle(element), wrapperPriceAndRemove);
    return basketListItem;
}
function createListItemTitle(element) {
    const basketListTitle = document.createElement("div");
    basketListTitle.classList.add("basket__list-item-title");
    const basketListTitleh5 = document.createElement("h5");
    basketListTitleh5.textContent = `${element.title}`;
    basketListTitle.append(basketListTitleh5);
    return basketListTitle;
}
function createListItemPrice(element) {
    const basketListItemPrice = document.createElement("div");
    basketListItemPrice.classList.add("basket__list-item-price");
    const basketListItemPriceh5 = document.createElement("h5");
    basketListItemPriceh5.textContent = `${element.price + "$"}`;
    basketListItemPrice.append(basketListItemPriceh5);
    return basketListItemPrice;
}
function createListItemWrapper() {
    const basketListItemWrapper = document.createElement("div");
    basketListItemWrapper.classList.add("basket__list-item-wrapper");
    return basketListItemWrapper;
}
function createBtnRemoveListItem(element) {
    const basketListItemBtnRemove = document.createElement("button");
    basketListItemBtnRemove.classList.add("icon-trash", "basket__list-item-btn-remove");
    basketListItemBtnRemove.setAttribute("data-id", `${element.id}`);
    basketListItemBtnRemove.addEventListener("click", onRemoveBasketListItem);
    return basketListItemBtnRemove;
}
function onRemoveBasketListItem(event) {
    const basketList = document.querySelector(".basket__list");
    if (event.target.classList.contains("basket__list-item-btn-remove")) {
        const cardId = event.target.dataset.id;
        removeFromBasketStorage(cardId);
        event.target.closest(".basket__list-item").remove();
        (0, _alertServiceJs.AlertService).warning("Товар удалён из корзины");
        getBasketTotalPrice();
        outputTotalPrice();
    }
    if (basketList.children.length === 0) {
        addContentBasketList(`\u{2639}<br>Корзина пуста`);
        deleteBtns("none", "none");
    }
}
function removeFromBasketStorage(cardId) {
    let basketStore = localStorage.getItem("basketStore");
    if (basketStore) {
        let basketArray = JSON.parse(basketStore);
        const cardIndex = basketArray.findIndex((card)=>card.id === cardId);
        if (cardIndex !== -1) {
            basketArray.splice(cardIndex, 1);
            localStorage.setItem("basketStore", JSON.stringify(basketArray));
            (0, _orderJs.linkStoreToUserData)();
        }
    }
}
function createBtnBasketDltAll() {
    const basketBtnDltAll = document.createElement("button");
    basketBtnDltAll.classList.add("btn", "basket__btn-delete-all");
    basketBtnDltAll.innerText = "Очистить корзину";
    basketBtnDltAll.addEventListener("click", onClearAllBasket);
    basketModal.appendChild(basketBtnDltAll);
}
function onClearAllBasket() {
    const basketListItems = document.querySelectorAll(".basket__list-item");
    localStorage.setItem("basketStore", JSON.stringify([]));
    basketListItems.forEach((element)=>element.remove());
    addContentBasketList(`\u{2639}<br>Корзина пуста`);
    (0, _orderJs.linkStoreToUserData)();
    (0, _alertServiceJs.AlertService).warning("Корзина очищена!");
    deleteBtns("none", "none");
}
function deleteBtns(valueBtnAll, valueFooter) {
    const basketBtnDltAll = document.querySelector(".basket__btn-delete-all");
    const basketFooter = document.querySelector(".basket__footer");
    basketBtnDltAll.style.display = valueBtnAll;
    basketFooter.style.display = valueFooter;
}
function createFooterBasket() {
    const cardList = createCardListFromBasketStore();
    const footerBasket = document.createElement("div");
    footerBasket.classList.add("basket__footer");
    footerBasket.innerHTML = `
	<button type="button" class="btn basket__btn-order">Заказать</button>
	 <div class="basket__total-price">
	  <h4 class="basket__total-price-title">Итого:</h4>
	  <h4 class="basket__total-price-value"></h4>
	 </div>
	`;
    basketModal.appendChild(footerBasket);
    const orderBtn = document.querySelector(".basket__btn-order");
    orderBtn.addEventListener("click", toDoOrder);
    if (cardList.length === 0) deleteBtns("none", "none");
}
function toDoOrder() {
    const submenu = document.querySelector(".user__submenu");
    const userStore = (0, _usersStoreJs.getTokenStore)();
    if (!userStore) {
        basketModal.classList.remove("basket__modal_active");
        submenu.classList.add("user__submenu_active");
        (0, _submenuJs.checkSubmenuClass)();
    } else {
        localStorage.setItem("basketStore", JSON.stringify([]));
        (0, _orderJs.linkStoreToUserData)();
        deleteBtns("none", "none");
        addContentBasketList("Заказ успешно создан \uD83D\uDCE6");
    }
}
function outputTotalPrice() {
    const totalPrice = document.querySelector(".basket__total-price-value");
    const num = getBasketTotalPrice();
    totalPrice.innerText = ` ${num} $`;
}
function getBasketTotalPrice() {
    const newCardList = JSON.parse(localStorage.getItem("basketStore"));
    let basketTotalPrice = 0;
    newCardList.forEach((element)=>{
        basketTotalPrice += element.price;
    });
    return basketTotalPrice;
}
document.addEventListener("DOMContentLoaded", init);

},{"../../core/utils/order/order.js":"j9F6e","../../stores/users-store/users-store.js":"5mRkp","../authentication/submenu.js":"9nm5y","../../core/utils/hide-scroll.js":"jl5TS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../core/services/alert-service/alertService.js":"cq7m8"}],"lPyde":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "slider", ()=>_sliderJs);
parcelHelpers.export(exports, "sliderSwiper", ()=>_sliderSwiperJs);
var _sliderJs = require("./slider.js");
var _sliderSwiperJs = require("./slider-swiper.js");

},{"./slider.js":"1XL6f","./slider-swiper.js":"It4BQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1XL6f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createSlider", ()=>createSlider);
var _sliderApiJs = require("../../core/API/sliderApi.js");
var _sliderSwiperJs = require("./slider-swiper.js");
const swiperWrapper = document.querySelector(".swiper-wrapper");
function createSlider(imageInner) {
    swiperWrapper.appendChild(imageInner);
    (0, _sliderSwiperJs.loadContent)();
}
function createImageInner(url, alt) {
    const imageInner = document.createElement("div");
    imageInner.classList.add("swiper-slide");
    const image = document.createElement("img");
    image.alt = alt;
    image.src = url;
    image.loading = "eager";
    imageInner.append(image);
    createSlider(imageInner);
}
async function createImage() {
    await (0, _sliderApiJs.SliderApi).getImages().then((data)=>{
        data.forEach((element)=>{
            createImageInner(element.url, element.alt);
        });
    }).catch((error)=>{
        throw error;
    });
}
document.addEventListener("DOMContentLoaded", createImage);

},{"../../core/API/sliderApi.js":"aVjzM","./slider-swiper.js":"It4BQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aVjzM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SliderApi", ()=>SliderApi);
class SliderApi {
    static imagesUrlApi = "https://646e07219c677e23218ae1e2.mockapi.io/users/images";
    static async getImages() {
        return await fetch(this.imagesUrlApi).then((response)=>response.json()).catch((error)=>console.error(`Произошла ошибка при загрузке изображения: ${error}`));
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"It4BQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadContent", ()=>loadContent);
function loadContent() {
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: true
        },
        speed: 1500
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"adQnh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "search", ()=>_searchJs);
var _searchJs = require("./search.js");

},{"./search.js":"5XKO7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5XKO7":[function(require,module,exports) {
var _cardsApiJs = require("../../core/API/cardsApi.js");
var _productCardJs = require("../product-card/product-card.js");
const searchWrapper = document.querySelector(".search");
const inputBox = document.querySelector(".search__input");
const searchBtn = document.querySelector(".search-btn");
const cardsInner = document.querySelector(".cards__inner");
let dataCards;
let titleData = [];
let brandData = [];
inputBox.addEventListener("input", onEnter);
function checkSearchListItems() {
    let searchList = document.querySelector(".search__list");
    if (searchList) document.addEventListener("click", removeSearchList);
}
function removeSearchList(event) {
    if (event.target !== inputBox) {
        let searchList = document.querySelector(".search__list");
        if (searchList) searchList.remove();
        document.removeEventListener("click", removeSearchList);
    }
}
async function getCardsForSerch() {
    dataCards = await (0, _cardsApiJs.getDataCards)();
    (0, _productCardJs.addCards)(dataCards);
    dataCards.forEach((element)=>{
        if (!titleData.includes(element.title)) titleData.push(element.title);
        if (!brandData.includes(element.brand)) brandData.push(element.brand);
    });
}
function onEnter(event) {
    let inputValue = event.target.value;
    let titleDataArray = titleData.filter((data)=>{
        return data.toLowerCase().startsWith(inputValue.toLowerCase());
    });
    let brandDataArray = brandData.filter((data)=>{
        return data.toLowerCase().startsWith(inputValue.toLowerCase());
    });
    let searchList = document.querySelector(".search__list");
    if (!inputValue) {
        if (searchList) {
            searchList.remove();
            checkSearchListItems();
        }
        return;
    }
    if (!searchList) {
        searchList = document.createElement("ul");
        searchList.classList.add("search__list");
        searchWrapper.appendChild(searchList);
        checkSearchListItems();
    } else searchList.innerHTML = null;
    onCklickEventEnter(inputValue);
    searchBtn.addEventListener("click", ()=>onSearchElements(inputValue));
    createElemnetsSearchList(titleDataArray, searchList);
    createElemnetsSearchList(brandDataArray, searchList);
}
function selectCardsProduct() {
    const searchListItems = document.querySelectorAll(".search__list-item");
    searchListItems.forEach((item)=>{
        item.addEventListener("click", function(event) {
            cardsInner.innerHTML = null;
            const category = event.target.textContent;
            let filterSearchCards = [];
            dataCards.forEach((element)=>{
                if (element.title.toLowerCase() === category.toLowerCase()) filterSearchCards.push(element);
                if (element.brand.toLowerCase() === category.toLowerCase()) filterSearchCards.push(element);
            });
            (0, _productCardJs.addCards)(filterSearchCards);
        });
    });
}
function onCklickEventEnter(value) {
    inputBox.addEventListener("keyup", (event)=>{
        if (event.code === "Enter") {
            onSearchElements(value);
            removeSearchList({
                target: document
            });
        }
    });
}
function onSearchElements(value) {
    cardsInner.innerHTML = null;
    let filterSearchCards = [];
    dataCards.forEach((element)=>{
        if (element.title.toLowerCase().startsWith(value.toLowerCase())) filterSearchCards.push(element);
    });
    (0, _productCardJs.addCards)(filterSearchCards);
}
function createElemnetsSearchList(suggestions, searchList) {
    suggestions.forEach((text)=>{
        const searchListItem = document.createElement("li");
        searchListItem.classList.add("search__list-item");
        searchListItem.textContent = text;
        searchList.appendChild(searchListItem);
        selectCardsProduct();
    });
}
window.addEventListener("DOMContentLoaded", getCardsForSerch);

},{"../../core/API/cardsApi.js":"2ckNJ","../product-card/product-card.js":"eLI9n"}],"2ckNJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDataCards", ()=>getDataCards);
var _cardsStoreJs = require("../../stores/cards-store/cards-store.js");
function getDataCards() {
    return fetch("https://646f451109ff19b12086e48a.mockapi.io/wildberries/cards").then((response)=>response.json()).then((cards)=>{
        (0, _cardsStoreJs.CardsStore).setCards(cards);
        return cards;
    }).catch((error)=>{
        throw error;
    });
}

},{"../../stores/cards-store/cards-store.js":"ksauc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9ZmAw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "footer", ()=>_footerJs);
var _footerJs = require("./footer.js");

},{"./footer.js":"96lga","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"96lga":[function(require,module,exports) {
const footerOrderList = document.querySelector(".order-list");
const footerCompanyList = document.querySelector(".company-list");
const footerContentWrapCust = document.querySelector(".footer__content-wrapper-cust");
const footerContentWrapComp = document.querySelector(".footer__content-wrapper-comp");
const iconArrowCust = document.querySelector(".icon-arrow-down-cust");
const iconArrowComp = document.querySelector(".icon-arrow-down-comp");
const footerBtnUp = document.querySelector(".footer__btn-up");
footerContentWrapCust.addEventListener("click", onOrderTitle);
function onOrderTitle() {
    if (!footerOrderList.classList.contains("order-list_active")) {
        footerOrderList.classList.add("order-list_active");
        iconArrowCust.classList.add("icon-arrow-down-cust_active");
        removeList(footerCompanyList, iconArrowComp, "company-list_active", "icon-arrow-down-comp_active");
    } else {
        footerOrderList.classList.remove("order-list_active");
        iconArrowCust.classList.remove("icon-arrow-down-cust_active");
    }
}
footerContentWrapComp.addEventListener("click", onCompanyTitle);
function onCompanyTitle() {
    if (!footerCompanyList.classList.contains("company-list_active")) {
        footerCompanyList.classList.add("company-list_active");
        iconArrowComp.classList.add("icon-arrow-down-comp_active");
        removeList(footerOrderList, iconArrowCust, "order-list_active", "icon-arrow-down-cust_active");
    } else {
        footerCompanyList.classList.remove("company-list_active");
        iconArrowComp.classList.remove("icon-arrow-down-comp_active");
    }
}
function removeList(list, arrow, activeList, activeArrow) {
    if (list.classList.contains(activeList)) {
        list.classList.remove(activeList);
        arrow.classList.remove(activeArrow);
    }
}
window.addEventListener("scroll", scrollDocument);
function scrollDocument() {
    const offset = window.scrollY;
    const coords = document.documentElement.clientHeight;
    if (offset > coords) {
        footerBtnUp.classList.add("footer__btn-up_active");
        setTimeout(()=>footerBtnUp.classList.remove("footer__btn-up_active"), 3000);
    }
}

},{}],"3ztCg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "brands", ()=>_brandsJs);
var _brandsJs = require("./brands.js");

},{"./brands.js":"kO4bF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kO4bF":[function(require,module,exports) {
var _brandsApiJs = require("../../core/API/brandsApi.js");
const brandWrapper = document.querySelector(".brand__wrapper");
function crtImg(url, altValue) {
    const imagesInner = document.createElement("a");
    imagesInner.classList.add("brand__inner");
    const img = document.createElement("img");
    img.src = url;
    img.setAttribute("alt", altValue);
    imagesInner.append(img);
    brandWrapper.append(imagesInner);
}
async function addImagesFromApi() {
    await (0, _brandsApiJs.BrandApi).getBrandsImage().then((data)=>{
        data.forEach((element)=>{
            crtImg(element.url, element.alt);
        });
    });
}
addImagesFromApi();

},{"../../core/API/brandsApi.js":"4YZke"}],"4YZke":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BrandApi", ()=>BrandApi);
class BrandApi {
    static url = "https://649060be1e6aa71680cb2478.mockapi.io/Brands";
    static async getBrandsImage() {
        return await fetch(this.url).then((resolve)=>resolve.json()).catch((error)=>console.log(error));
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gj6hT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sidebar", ()=>_sidebarJs);
var _sidebarJs = require("./sidebar.js");

},{"./sidebar.js":"9n8Kh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9n8Kh":[function(require,module,exports) {
var _productCardJs = require("../product-card/product-card.js");
var _cardsApiJs = require("../../core/API/cardsApi.js");
var _burgerJs = require("../burger/burger.js");
var _hideScrollJs = require("../../core/utils/hide-scroll.js");
const sidebarList = document.querySelector(".sidebar__list");
const sidebar = document.querySelector(".sidebar");
const cardsInner = document.querySelector(".cards__inner");
let dataCardsFromApi;
sidebarList.addEventListener("click", onSidebarItem);
const productMenu = {
    "Футболки": "майка",
    "Обувь": "кроссовки",
    "Брюки": "штаны",
    "Байки": "байка",
    "Верхняя одежда": "куртка"
};
function onSidebarItem(event) {
    const textContent = event.target.textContent;
    if (productMenu.hasOwnProperty(textContent)) filterCards(productMenu[textContent]);
}
async function filterCards(text) {
    dataCardsFromApi = await (0, _cardsApiJs.getDataCards)();
    cardsInner.innerHTML = null;
    let cards = [];
    dataCardsFromApi.forEach((element)=>{
        if (element.title.toLowerCase().startsWith(text)) cards.push(element);
    });
    (0, _productCardJs.addCards)(cards);
    sidebar.classList.remove("sidebar_active");
    (0, _burgerJs.checkSidebarClass)();
    (0, _hideScrollJs.setBodyStyles)(null, null, null);
}

},{"../product-card/product-card.js":"eLI9n","../../core/API/cardsApi.js":"2ckNJ","../burger/burger.js":"5lyme","../../core/utils/hide-scroll.js":"jl5TS"}]},["eFdob","1l7bB"], "1l7bB", "parcelRequire5951")

//# sourceMappingURL=index.cb43b74a.js.map
