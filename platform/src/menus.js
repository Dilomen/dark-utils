const menus = [
  {
    name: '使用',
    submenus: [
      { name: "快速开始", url: "/use" },
    ]
  },
  {
    name: '基础',
    submenus: [
      { name: "hasOwnProperty", url: "/base/hasOwnProperty" },
      { name: "isArray", url: "/base/isArray" },
      { name: "isDate", url: "/base/isDate" },
      { name: "isEmptyArr", url: "/base/isEmtpyArr" },
      { name: "isEmptyObj", url: "/base/isEmtpyObj" },
      { name: "isFrozen", url: "/base/isFrozen" },
      { name: "isMap", url: "/base/isMap" },
      { name: "isNumber", url: "/base/isNumber" },
      { name: "isObject", url: "/base/isObject" },
      { name: "isSet", url: "/base/isSet" },
      { name: "toString", url: "/base/toString" }
    ]
  },
  {
    name: '方法',
    submenus: [
      { "name": "debounce", "url": "/fn/debounce" },
      // { "name": "deepCopy", "url": "/fn/deepCopy" },
      { "name": "formatNumber", "url": "/fn/formatNumber" },
      { "name": "compose", "url": "/fn/compose" },
      { "name": "composeSync", "url": "/fn/composeSync" },
      { "name": "diff", "url": "/fn/diff" },
      { "name": "isMobile", "url": "/fn/isMobile" },
      { "name": "queryAnalysis", "url": "/fn/queryAnalysis" },
      { "name": "randomStr", "url": "/fn/randomStr" },
      { "name": "throttle", "url": "/fn/throttle" },
      { "name": "tryFunc", "url": "/fn/tryFunc" },
      { "name": "tryPromiseFunc", "url": "/fn/tryPromiseFunc" }
    ]
  },
  {
    name: '文件',
    submenus: [
      { "name": "blobToFile", "url": "/file/blobToFile" },
      { "name": "dataURLToBlob", "url": "/file/dataURLToBlob" },
      { "name": "dataURLtoFile", "url": "/file/dataURLtoFile" },
      { "name": "fileOrBlobToDataURL", "url": "/file/fileOrBlobToDataURL" },
      { "name": "fileToBlob", "url": "/file/fileToBlob" },
    ]
  },
  {
    name: 'DOM相关',
    submenus: [
      { "name": "preventDefault", "url": "/dom/preventDefault" },
      { "name": "stopPropagation", "url": "/dom/stopPropagation" },
      { "name": "addClass", "url": "/dom/addClass" },
      { "name": "readClass", "url": "/dom/readClass" },
      { "name": "removeClass", "url": "/dom/removeClass" },
      { "name": "replaceClass", "url": "/dom/replaceClass" },
      { "name": "getElementStyle", "url": "/dom/getElementStyle" },
      { "name": "getParentElement", "url": "/dom/getParentElement" },
      { "name": "loasdScript", "url": "/dom/loasdScript" },
      { "name": "nextElement", "url": "/dom/nextElement" },
    ]
  },
]

export default menus