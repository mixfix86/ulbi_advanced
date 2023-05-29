import webpack from "webpack";

export function buildResolvers(): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'], // расширения которые можно не указывать при импорте: import Component from './component'
    }
}