export declare const favIconHtml: string;
export declare const htmlTemplateString = "\n<!-- HTML for static distribution bundle build -->\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title><% title %></title>\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"<% baseUrl %>swagger-ui.css\" >\n  <% favIconString %>\n  <style>\n    html\n    {\n      box-sizing: border-box;\n      overflow: -moz-scrollbars-vertical;\n      overflow-y: scroll;\n    }\n    *,\n    *:before,\n    *:after\n    {\n      box-sizing: inherit;\n    }\n\n    body {\n      margin:0;\n      background: #fafafa;\n    }\n  </style>\n</head>\n\n<body>\n\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"position:absolute;width:0;height:0\">\n  <defs>\n    <symbol viewBox=\"0 0 20 20\" id=\"unlocked\">\n      <path d=\"M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V6h2v-.801C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8z\"></path>\n    </symbol>\n\n    <symbol viewBox=\"0 0 20 20\" id=\"locked\">\n      <path d=\"M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8zM12 8H8V5.199C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8z\"/>\n    </symbol>\n\n    <symbol viewBox=\"0 0 20 20\" id=\"close\">\n      <path d=\"M14.348 14.849c-.469.469-1.229.469-1.697 0L10 11.819l-2.651 3.029c-.469.469-1.229.469-1.697 0-.469-.469-.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-.469-.469-.469-1.228 0-1.697.469-.469 1.228-.469 1.697 0L10 8.183l2.651-3.031c.469-.469 1.228-.469 1.697 0 .469.469.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c.469.469.469 1.229 0 1.698z\"/>\n    </symbol>\n\n    <symbol viewBox=\"0 0 20 20\" id=\"large-arrow\">\n      <path d=\"M13.25 10L6.109 2.58c-.268-.27-.268-.707 0-.979.268-.27.701-.27.969 0l7.83 7.908c.268.271.268.709 0 .979l-7.83 7.908c-.268.271-.701.27-.969 0-.268-.269-.268-.707 0-.979L13.25 10z\"/>\n    </symbol>\n\n    <symbol viewBox=\"0 0 20 20\" id=\"large-arrow-down\">\n      <path d=\"M17.418 6.109c.272-.268.709-.268.979 0s.271.701 0 .969l-7.908 7.83c-.27.268-.707.268-.979 0l-7.908-7.83c-.27-.268-.27-.701 0-.969.271-.268.709-.268.979 0L10 13.25l7.418-7.141z\"/>\n    </symbol>\n\n\n    <symbol viewBox=\"0 0 24 24\" id=\"jump-to\">\n      <path d=\"M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z\"/>\n    </symbol>\n\n    <symbol viewBox=\"0 0 24 24\" id=\"expand\">\n      <path d=\"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z\"/>\n    </symbol>\n\n  </defs>\n</svg>\n\n<div id=\"swagger-ui\"></div>\n\n<script src=\"<% baseUrl %>swagger-ui-bundle.js\"> </script>\n<script src=\"<% baseUrl %>swagger-ui-standalone-preset.js\"> </script>\n<script src=\"<% baseUrl %>swagger-ui-init.js\"> </script>\n<% customJs %>\n<% customJsStr %>\n<% customCssUrl %>\n<style>\n  <% customCss %>\n  <% explorerCss %>\n</style>\n</body>\n\n</html>\n";
export declare const jsTemplateString = "\nwindow.onload = function() {\n  // Build a system\n  let url = window.location.search.match(/url=([^&]+)/);\n  if (url && url.length > 1) {\n    url = decodeURIComponent(url[1]);\n  } else {\n    url = window.location.origin;\n  }\n  <% swaggerOptions %>\n  url = options.swaggerUrl || url\n  let urls = options.swaggerUrls\n  let customOptions = options.customOptions\n  let spec1 = options.swaggerDoc\n  let swaggerOptions = {\n    spec: spec1,\n    url: url,\n    urls: urls,\n    dom_id: '#swagger-ui',\n    deepLinking: true,\n    presets: [\n      SwaggerUIBundle.presets.apis,\n      SwaggerUIStandalonePreset\n    ],\n    plugins: [\n      SwaggerUIBundle.plugins.DownloadUrl\n    ],\n    layout: \"StandaloneLayout\"\n  }\n  for (let attrname in customOptions) {\n    swaggerOptions[attrname] = customOptions[attrname];\n  }\n  let ui = SwaggerUIBundle(swaggerOptions)\n\n  if (customOptions.initOAuth) {\n    ui.initOAuth(customOptions.initOAuth)\n  }\n\n  if (customOptions.authAction) {\n    ui.authActions.authorize(customOptions.authAction)\n  }\n\n  window.ui = ui\n}\n";
