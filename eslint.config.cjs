module.exports = [
    {
        files: ["**/*.js"],  // this explicitly states which files to lint
        rules: {
            "semi": "error",
            "no-unused-vars": "warn",
            "no-var": "error"
        },
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: {
                console: true,
                document: true,
                window: true
            }
        }
    }
];