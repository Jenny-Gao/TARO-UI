"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const runner_utils_1 = require("@tarojs/runner-utils");
exports.default = (ctx, opts) => {
    ctx.modifyWebpackChain(({ chain }) => __awaiter(void 0, void 0, void 0, function* () {
        const { enableSourceMap = true } = opts;
        const taroEnv = process.env.TARO_ENV;
        if (taroEnv) {
            const sass = require('node-sass');
            const currentPlatform = ctx.platforms.get(taroEnv);
            if (!currentPlatform)
                return;
            const { sass: sassOption } = ctx.initialConfig;
            const platformConfig = ctx.initialConfig[currentPlatform.useConfigName];
            const defaultSassLoaderOption = {
                sourceMap: enableSourceMap,
                implementation: sass,
                sassOptions: {
                    outputStyle: 'expanded'
                }
            };
            const newSassLoaderOption = yield runner_utils_1.getSassLoaderOption({
                sass: sassOption,
                sassLoaderOption: platformConfig === null || platformConfig === void 0 ? void 0 : platformConfig.sassLoaderOption
            });
            chain.module
                .rule('addChainStyleSass')
                .test(ctx.helper.REG_SASS)
                .pre()
                .use('resolveUrl')
                .loader(require.resolve('resolve-url-loader'))
                .end()
                .use('sass')
                .loader(require.resolve('sass-loader'))
                .options(Object.assign({}, defaultSassLoaderOption, newSassLoaderOption))
                .end();
        }
    }));
};
