import babel from "@rollup/plugin-babel";

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/draggable-helper.cjs.js',
        format: 'cjs'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**',
            extensions: ['.ts', '.js']
        })
    ],
}
