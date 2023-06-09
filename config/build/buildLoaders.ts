import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

    const cssLoader =
        {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: /\.module\.\w+$/i,
                            localIdentName: isDev
                                ? "[path][name]__[local]--[hash:base64:5]"
                                : '[hash:base64]',
                        },
                    }
                },
                // Compiles Sass to CSS
                "sass-loader",
            ],
        }
    const typeScriptsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typeScriptsLoader,
        cssLoader

    ]
}