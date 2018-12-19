const config = require('../../../test/jasmine')

module.exports = {
    ...config,
    spec_files: [
        "test/src/**/*.ts",
        "test/src/**/*.js",
        "test/src/**/*.tsx",
        "test/src/**/*.jsx",
        'src/template/test/src/**/*.ts',
        'src/template/test/src/**/*.js',
        'src/template/test/src/**/*.tsx',
        'src/template/test/src/**/*.jsx',
    ],
}
