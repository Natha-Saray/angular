'use strict';var lang_1 = require('angular2/src/facade/lang');
var CAMEL_CASE_REGEXP = /([A-Z])/g;
var DASH_CASE_REGEXP = /-([a-z])/g;
var SINGLE_QUOTE_ESCAPE_STRING_RE = /'|\\|\n|\r|\$/g;
var DOUBLE_QUOTE_ESCAPE_STRING_RE = /"|\\|\n|\r|\$/g;
exports.MODULE_SUFFIX = lang_1.IS_DART ? '.dart' : '.js';
function camelCaseToDashCase(input) {
    return lang_1.StringWrapper.replaceAllMapped(input, CAMEL_CASE_REGEXP, function (m) { return '-' + m[1].toLowerCase(); });
}
exports.camelCaseToDashCase = camelCaseToDashCase;
function dashCaseToCamelCase(input) {
    return lang_1.StringWrapper.replaceAllMapped(input, DASH_CASE_REGEXP, function (m) { return m[1].toUpperCase(); });
}
exports.dashCaseToCamelCase = dashCaseToCamelCase;
function escapeSingleQuoteString(input) {
    if (lang_1.isBlank(input)) {
        return null;
    }
    return "'" + escapeString(input, SINGLE_QUOTE_ESCAPE_STRING_RE) + "'";
}
exports.escapeSingleQuoteString = escapeSingleQuoteString;
function escapeDoubleQuoteString(input) {
    if (lang_1.isBlank(input)) {
        return null;
    }
    return "\"" + escapeString(input, DOUBLE_QUOTE_ESCAPE_STRING_RE) + "\"";
}
exports.escapeDoubleQuoteString = escapeDoubleQuoteString;
function escapeString(input, re) {
    return lang_1.StringWrapper.replaceAllMapped(input, re, function (match) {
        if (match[0] == '$') {
            return lang_1.IS_DART ? '\\$' : '$';
        }
        else if (match[0] == '\n') {
            return '\\n';
        }
        else if (match[0] == '\r') {
            return '\\r';
        }
        else {
            return "\\" + match[0];
        }
    });
}
function codeGenExportVariable(name) {
    if (lang_1.IS_DART) {
        return "const " + name + " = ";
    }
    else {
        return "var " + name + " = exports['" + name + "'] = ";
    }
}
exports.codeGenExportVariable = codeGenExportVariable;
function codeGenConstConstructorCall(name) {
    if (lang_1.IS_DART) {
        return "const " + name;
    }
    else {
        return "new " + name;
    }
}
exports.codeGenConstConstructorCall = codeGenConstConstructorCall;
function codeGenValueFn(params, value, fnName) {
    if (fnName === void 0) { fnName = ''; }
    if (lang_1.IS_DART) {
        return fnName + "(" + params.join(',') + ") => " + value;
    }
    else {
        return "function " + fnName + "(" + params.join(',') + ") { return " + value + "; }";
    }
}
exports.codeGenValueFn = codeGenValueFn;
function codeGenToString(expr) {
    if (lang_1.IS_DART) {
        return "'${" + expr + "}'";
    }
    else {
        // JS automatically convets to string...
        return expr;
    }
}
exports.codeGenToString = codeGenToString;
function splitAtColon(input, defaultValues) {
    var parts = lang_1.StringWrapper.split(input.trim(), /\s*:\s*/g);
    if (parts.length > 1) {
        return parts;
    }
    else {
        return defaultValues;
    }
}
exports.splitAtColon = splitAtColon;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9jb21waWxlci91dGlsLnRzIl0sIm5hbWVzIjpbImNhbWVsQ2FzZVRvRGFzaENhc2UiLCJkYXNoQ2FzZVRvQ2FtZWxDYXNlIiwiZXNjYXBlU2luZ2xlUXVvdGVTdHJpbmciLCJlc2NhcGVEb3VibGVRdW90ZVN0cmluZyIsImVzY2FwZVN0cmluZyIsImNvZGVHZW5FeHBvcnRWYXJpYWJsZSIsImNvZGVHZW5Db25zdENvbnN0cnVjdG9yQ2FsbCIsImNvZGVHZW5WYWx1ZUZuIiwiY29kZUdlblRvU3RyaW5nIiwic3BsaXRBdENvbG9uIl0sIm1hcHBpbmdzIjoiQUFBQSxxQkFBOEMsMEJBQTBCLENBQUMsQ0FBQTtBQUV6RSxJQUFJLGlCQUFpQixHQUFHLFVBQVUsQ0FBQztBQUNuQyxJQUFJLGdCQUFnQixHQUFHLFdBQVcsQ0FBQztBQUNuQyxJQUFJLDZCQUE2QixHQUFHLGdCQUFnQixDQUFDO0FBQ3JELElBQUksNkJBQTZCLEdBQUcsZ0JBQWdCLENBQUM7QUFFMUMscUJBQWEsR0FBRyxjQUFPLEdBQUcsT0FBTyxHQUFHLEtBQUssQ0FBQztBQUVyRCw2QkFBb0MsS0FBYTtJQUMvQ0EsTUFBTUEsQ0FBQ0Esb0JBQWFBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsS0FBS0EsRUFBRUEsaUJBQWlCQSxFQUN4QkEsVUFBQ0EsQ0FBQ0EsSUFBT0EsTUFBTUEsQ0FBQ0EsR0FBR0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7QUFDckZBLENBQUNBO0FBSGUsMkJBQW1CLHNCQUdsQyxDQUFBO0FBRUQsNkJBQW9DLEtBQWE7SUFDL0NDLE1BQU1BLENBQUNBLG9CQUFhQSxDQUFDQSxnQkFBZ0JBLENBQUNBLEtBQUtBLEVBQUVBLGdCQUFnQkEsRUFDdkJBLFVBQUNBLENBQUNBLElBQU9BLE1BQU1BLENBQUNB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SVNfREFSVCwgU3RyaW5nV3JhcHBlciwgaXNCbGFua30gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcblxudmFyIENBTUVMX0NBU0VfUkVHRVhQID0gLyhbQS1aXSkvZztcbnZhciBEQVNIX0NBU0VfUkVHRVhQID0gLy0oW2Etel0pL2c7XG52YXIgU0lOR0xFX1FVT1RFX0VTQ0FQRV9TVFJJTkdfUkUgPSAvJ3xcXFxcfFxcbnxcXHJ8XFwkL2c7XG52YXIgRE9VQkxFX1FVT1RFX0VTQ0FQRV9TVFJJTkdfUkUgPSAvXCJ8XFxcXHxcXG58XFxyfFxcJC9nO1xuXG5leHBvcnQgdmFyIE1PRFVMRV9TVUZGSVggPSBJU19EQVJUID8gJy5kYXJ0JyA6ICcuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FtZWxDYXNlVG9EYXNoQ2FzZShpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIFN0cmluZ1dyYXBwZXIucmVwbGFjZUFsbE1hcHBlZChpbnB1dCwgQ0FNRUxfQ0FTRV9SRUdFWFAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG0pID0+IHsgcmV0dXJuICctJyArIG1bMV0udG9Mb3dlckNhc2UoKTsgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXNoQ2FzZVRvQ2FtZWxDYXNlKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gU3RyaW5nV3JhcHBlci5yZXBsYWNlQWxsTWFwcGVkKGlucHV0LCBEQVNIX0NBU0VfUkVHRVhQLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChtKSA9PiB7IHJldHVybiBtWzFdLnRvVXBwZXJDYXNlKCk7IH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlU2luZ2xlUXVvdGVTdHJpbmcoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChpc0JsYW5rKGlucHV0KSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBgJyR7ZXNjYXBlU3RyaW5nKGlucHV0LCBTSU5HTEVfUVVPVEVfRVNDQVBFX1NUUklOR19SRSl9J2A7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVEb3VibGVRdW90ZVN0cmluZyhpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKGlzQmxhbmsoaW5wdXQpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIGBcIiR7ZXNjYXBlU3RyaW5nKGlucHV0LCBET1VCTEVfUVVPVEVfRVNDQVBFX1NUUklOR19SRSl9XCJgO1xufVxuXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoaW5wdXQ6IHN0cmluZywgcmU6IFJlZ0V4cCk6IHN0cmluZyB7XG4gIHJldHVybiBTdHJpbmdXcmFwcGVyLnJlcGxhY2VBbGxNYXBwZWQoaW5wdXQsIHJlLCAobWF0Y2gpID0+IHtcbiAgICBpZiAobWF0Y2hbMF0gPT0gJyQnKSB7XG4gICAgICByZXR1cm4gSVNfREFSVCA/ICdcXFxcJCcgOiAnJCc7XG4gICAgfSBlbHNlIGlmIChtYXRjaFswXSA9PSAnXFxuJykge1xuICAgICAgcmV0dXJuICdcXFxcbic7XG4gICAgfSBlbHNlIGlmIChtYXRjaFswXSA9PSAnXFxyJykge1xuICAgICAgcmV0dXJuICAnXFxcXHInO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYFxcXFwke21hdGNoWzBdfWA7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZGVHZW5FeHBvcnRWYXJpYWJsZShuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoSVNfREFSVCkge1xuICAgIHJldHVybiBgY29uc3QgJHtuYW1lfSA9IGA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGB2YXIgJHtuYW1lfSA9IGV4cG9ydHNbJyR7bmFtZX0nXSA9IGA7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZGVHZW5Db25zdENvbnN0cnVjdG9yQ2FsbChuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoSVNfREFSVCkge1xuICAgIHJldHVybiBgY29uc3QgJHtuYW1lfWA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGBuZXcgJHtuYW1lfWA7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZGVHZW5WYWx1ZUZuKHBhcmFtczogc3RyaW5nW10sIHZhbHVlOiBzdHJpbmcsIGZuTmFtZTogc3RyaW5nID0gJycpOiBzdHJpbmcge1xuICBpZiAoSVNfREFSVCkge1xuICAgIHJldHVybiBgJHtmbk5hbWV9KCR7cGFyYW1zLmpvaW4oJywnKX0pID0+ICR7dmFsdWV9YDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYGZ1bmN0aW9uICR7Zm5OYW1lfSgke3BhcmFtcy5qb2luKCcsJyl9KSB7IHJldHVybiAke3ZhbHVlfTsgfWA7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZGVHZW5Ub1N0cmluZyhleHByOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoSVNfREFSVCkge1xuICAgIHJldHVybiBgJ1xcJHske2V4cHJ9fSdgO1xuICB9IGVsc2Uge1xuICAgIC8vIEpTIGF1dG9tYXRpY2FsbHkgY29udmV0cyB0byBzdHJpbmcuLi5cbiAgICByZXR1cm4gZXhwcjtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BsaXRBdENvbG9uKGlucHV0OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZXM6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xuICB2YXIgcGFydHMgPSBTdHJpbmdXcmFwcGVyLnNwbGl0KGlucHV0LnRyaW0oKSwgL1xccyo6XFxzKi9nKTtcbiAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICByZXR1cm4gcGFydHM7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZXM7XG4gIH1cbn1cbiJdfQ==