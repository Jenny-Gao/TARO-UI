"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printHelpLog = exports.resolvePresetsOrPlugins = exports.mergePlugins = exports.convertPluginsToObject = exports.getPluginPath = void 0;
const path = require("path");
const lodash_1 = require("lodash");
const resolve = require("resolve");
const helper_1 = require("@tarojs/helper");
function getPluginPath(pluginPath) {
    if (helper_1.isNpmPkg(pluginPath) || path.isAbsolute(pluginPath))
        return pluginPath;
    throw new Error('plugin 和 preset 配置必须为绝对路径或者包名');
}
exports.getPluginPath = getPluginPath;
function convertPluginsToObject(items) {
    return () => {
        const obj = {};
        if (Array.isArray(items)) {
            items.forEach(item => {
                if (typeof item === 'string') {
                    const name = getPluginPath(item);
                    obj[name] = null;
                }
                else if (Array.isArray(item)) {
                    const name = getPluginPath(item[0]);
                    obj[name] = item[1];
                }
            });
        }
        return obj;
    };
}
exports.convertPluginsToObject = convertPluginsToObject;
function mergePlugins(dist, src) {
    return () => {
        const srcObj = convertPluginsToObject(src)();
        const distObj = convertPluginsToObject(dist)();
        return lodash_1.merge(srcObj, distObj);
    };
}
exports.mergePlugins = mergePlugins;
// getModuleDefaultExport
function resolvePresetsOrPlugins(root, args, type) {
    return Object.keys(args).map(item => {
        let pkgInfo;
        const fPath = resolve.sync(item, {
            basedir: root,
            extensions: ['.js', '.ts'],
            packageFilter(pkg) {
                pkgInfo = pkg;
            }
        });
        let name = fPath;
        if (helper_1.NODE_MODULES_REG.test(fPath) && helper_1.isNpmPkg(item)) {
            name = pkgInfo.name || fPath;
        }
        return {
            id: fPath,
            path: fPath,
            name,
            type,
            opts: args[item] || {},
            apply() {
                try {
                    return helper_1.getModuleDefaultExport(require(fPath));
                }
                catch (err) {
                    throw err;
                }
            }
        };
    });
}
exports.resolvePresetsOrPlugins = resolvePresetsOrPlugins;
function supplementBlank(length) {
    return Array(length).map(() => '').join(' ');
}
function printHelpLog(command, optionsList, synopsisList) {
    console.log(`Usage: taro ${command} [options]`);
    console.log();
    console.log('Options:');
    const keys = Array.from(optionsList.keys());
    const maxLength = keys.reduce((v1, v2) => {
        return v1.length > v2.length ? v1 : v2;
    }).length + 3;
    optionsList.forEach((v, k) => {
        const supplementBlankLength = maxLength - k.length;
        console.log(`  ${k}${supplementBlank(supplementBlankLength)}${v}`);
    });
    if (synopsisList && synopsisList.size) {
        console.log();
        console.log('Synopsis:');
        synopsisList.forEach(item => {
            console.log(`  $ ${item}`);
        });
    }
}
exports.printHelpLog = printHelpLog;
