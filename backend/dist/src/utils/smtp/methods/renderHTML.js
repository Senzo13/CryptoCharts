"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderHTML = exports.readHTMLFile = void 0;
const fs_1 = __importDefault(require("fs"));
const handlebars_1 = __importDefault(require("handlebars"));
const readHTMLFile = function (path, callback) {
    fs_1.default.readFile(path, { encoding: "utf-8" }, function (err, html) {
        if (err) {
            callback("error");
        }
        else {
            callback(null, html);
        }
    });
};
exports.readHTMLFile = readHTMLFile;
const renderHTML = (template, data) => new Promise((resolve, reject) => {
    (0, exports.readHTMLFile)(`templates/${template}`, (err, html) => {
        if (err) {
            reject("error reading file");
            return;
        }
        const template = handlebars_1.default.compile(html);
        resolve(template(data));
    });
});
exports.renderHTML = renderHTML;
exports.default = exports.renderHTML;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVySFRNTC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91dGlscy9zbXRwL21ldGhvZHMvcmVuZGVySFRNTC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw0Q0FBb0I7QUFDcEIsNERBQW9DO0FBQzdCLE1BQU0sWUFBWSxHQUFHLFVBQzFCLElBQVksRUFDWixRQUE4QztJQUU5QyxZQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsRUFBRSxVQUFVLEdBQUcsRUFBRSxJQUFJO1FBQzFELElBQUksR0FBRyxFQUFFO1lBQ1AsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25CO2FBQU07WUFDTCxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFYVyxRQUFBLFlBQVksZ0JBV3ZCO0FBRUssTUFBTSxVQUFVLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFtQixFQUFFLENBQzVELElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO0lBQzlCLElBQUEsb0JBQVksRUFDVixhQUFhLFFBQVEsRUFBRSxFQUN2QixDQUFDLEdBQVcsRUFBRSxJQUFhLEVBQUUsRUFBRTtRQUM3QixJQUFJLEdBQUcsRUFBRTtZQUNQLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQzdCLE9BQU87U0FDUjtRQUNELE1BQU0sUUFBUSxHQUNaLG9CQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTNCLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDLENBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDO0FBZlEsUUFBQSxVQUFVLGNBZWxCO0FBRUwsa0JBQWUsa0JBQVUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IGhhbmRsZWJhcnMgZnJvbSBcImhhbmRsZWJhcnNcIjtcclxuZXhwb3J0IGNvbnN0IHJlYWRIVE1MRmlsZSA9IGZ1bmN0aW9uIChcclxuICBwYXRoOiBzdHJpbmcsXHJcbiAgY2FsbGJhY2s6IChlcnI6IHN0cmluZywgaHRtbD86IHN0cmluZykgPT4gdm9pZFxyXG4pIHtcclxuICBmcy5yZWFkRmlsZShwYXRoLCB7IGVuY29kaW5nOiBcInV0Zi04XCIgfSwgZnVuY3Rpb24gKGVyciwgaHRtbCkge1xyXG4gICAgaWYgKGVycikge1xyXG4gICAgICBjYWxsYmFjayhcImVycm9yXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2FsbGJhY2sobnVsbCwgaHRtbCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVySFRNTCA9ICh0ZW1wbGF0ZSwgZGF0YSk6IFByb21pc2U8c3RyaW5nPiA9PlxyXG4gIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHJlYWRIVE1MRmlsZShcclxuICAgICAgYHRlbXBsYXRlcy8ke3RlbXBsYXRlfWAsXHJcbiAgICAgIChlcnI6IHN0cmluZywgaHRtbD86IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgIHJlamVjdChcImVycm9yIHJlYWRpbmcgZmlsZVwiKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGU6IEhhbmRsZWJhcnNUZW1wbGF0ZURlbGVnYXRlPHVua25vd24+ID1cclxuICAgICAgICAgIGhhbmRsZWJhcnMuY29tcGlsZShodG1sKTtcclxuXHJcbiAgICAgICAgcmVzb2x2ZSh0ZW1wbGF0ZShkYXRhKSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZW5kZXJIVE1MO1xyXG4iXX0=