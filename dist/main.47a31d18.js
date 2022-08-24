// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
var html = document.querySelector("#html");
var style = document.querySelector("#style");
var n = -1;
var string = "\n/*\u4F60\u597D\uFF0C\u6211\u662Fcsg\n *\u63A5\u4E0B\u6765\u6211\u5C55\u793A\u4E00\u4E0B\u6211\u7684\u524D\u7AEF\u529F\u5E95\n *\u9996\u5148\u6211\u9700\u8981\u51C6\u5907\u4E00\u4E2Adiv\n */\n#div1{\n  border:1px solid red;\n  width:300px;\n  height:300px;\n}\n/*\u63A5\u4E0B\u6765\u8981\u628A\u8FD9\u4E2Adiv\u53D8\u6210\u592A\u6781\n *\u770B\u597D\u4E86\n *\u5148\u628Adiv\u53D8\u4E3A\u5706\u5F62\n */\n#div1{\n  border-radius:50%;\n  box-shadow:0 0 3px rgba(0,0,0,0.5);\n  border:none;\n}\n/*\u5728\u4F7F\u7528\u989C\u8272\u6E10\u53D8\u586B\u5145\u80CC\u666F\n *\u4F7F\u5B83\u53D8\u6210\u9ED1\u767D\u4E24\u8272\n */\n#div1{\n  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%);\n}\n/*\u63A5\u4E0B\u6765\u4F7F\u7528css\u7684\u4F2A\u5143\u7D20\u4F7F\u4ED6\u4EEC\u6210\u52FE\u7389\u72B6*/\n#div1::before{\n  content:'';\n  width:150px;\n  height:150px;\n  border-radius:50%;\n  position:absolute;\n  display:block;\n  top:0px;\n  transform:translate(50%);\n  background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);\n}\n#div1::after{\n  content:'';\n  width:150px;\n  height:150px;\n  bottom:0px;\n  border-radius:50%;\n  position:absolute;\n  display:block;\n  transform:translate(50%);\n  background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(231,231,231,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n/*\u8FD9\u6837\u4E00\u4E2A\u592A\u6781\u5C31\u51FA\u6765\u4E86*/\n";
var string2 = "";

var add = function add() {
  setTimeout(function () {
    n++;

    if (string[n] === "\n") {
      string2 = string2 + "<br>";
    } else if (string[n] === " ") {
      string2 = string2 + "&nbsp;";
    } else {
      string2 = string2 + string[n];
    }

    if (n < string.length) {
      html.innerHTML = string2;
      style.innerHTML = string.substring(0, n + 1);
      window.scrollTo(0, 99999);
      html.scrollTo(0, 99999);
      add();
    }
  }, 50);
};

add();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.47a31d18.js.map