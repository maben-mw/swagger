"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildSwaggerHTML = exports.getSwaggerAssetsAbsoluteFSPath = exports.buildSwaggerInitJS = void 0;
const constants_1 = require("./constants");
const helpers_1 = require("./helpers");
function buildSwaggerInitJS(swaggerDoc, customOptions = {}) {
    const { swaggerOptions = {}, swaggerUrl } = customOptions;
    const swaggerInitOptions = {
        swaggerDoc,
        swaggerUrl,
        customOptions: swaggerOptions
    };
    const jsInitOptions = (0, helpers_1.buildJSInitOptions)(swaggerInitOptions);
    return constants_1.jsTemplateString.replace('<% swaggerOptions %>', jsInitOptions);
}
exports.buildSwaggerInitJS = buildSwaggerInitJS;
let swaggerAssetsAbsoluteFSPath;
function getSwaggerAssetsAbsoluteFSPath() {
    if (!swaggerAssetsAbsoluteFSPath) {
        const swaggerUi = require('swagger-ui-dist');
        swaggerAssetsAbsoluteFSPath = swaggerUi.getAbsoluteFSPath();
    }
    return swaggerAssetsAbsoluteFSPath;
}
exports.getSwaggerAssetsAbsoluteFSPath = getSwaggerAssetsAbsoluteFSPath;
function buildSwaggerHTML(baseUrl, swaggerDoc, customOptions = {}) {
    const { customCss = '', customJs = '', customJsStr = '', customfavIcon = false, customSiteTitle = 'Swagger UI', customCssUrl = '', explorer = false } = customOptions;
    const favIconString = customfavIcon
        ? `<link rel="icon" href="${customfavIcon}" />`
        : constants_1.favIconHtml;
    const explorerCss = explorer
        ? ''
        : '.swagger-ui .topbar .download-url-wrapper { display: none }';
    return constants_1.htmlTemplateString
        .replace('<% customCss %>', customCss)
        .replace('<% explorerCss %>', explorerCss)
        .replace('<% favIconString %>', favIconString)
        .replace(/<% baseUrl %>/g, baseUrl)
        .replace('<% customJs %>', customJs ? `<script src="${customJs}"></script>` : '')
        .replace('<% customJsStr %>', customJsStr ? `<script> ${customJsStr} </script>` : '')
        .replace('<% customCssUrl %>', customCssUrl ? `<link href="${customCssUrl}" rel="stylesheet">` : '')
        .replace('<% title %>', customSiteTitle);
}
exports.buildSwaggerHTML = buildSwaggerHTML;
