module.exports = {
    compilerOptions: {
        baseUrl: ".",
        paths: {
            "@/*": ["./resources/js/*"],
            "~/*": ["./resources/sass/*"],
            "@components/*": ["./resources/js/components/*"],
        },
    },
};
