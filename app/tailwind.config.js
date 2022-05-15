const isProduction = !process.env.ROLLUP_WATCH;

module.exports = {
    plugins: [],
    purge: {
        content: [
            "./src/**/*.svelte",
            "./src/**/*.html"
        ],
        // this is for extracting Svelte `class:` syntax but is not perfect yet, see below
        defaultExtractor: content => {
            const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
            const broadMatchesWithoutTrailingSlash = broadMatches.map(match => _.trimEnd(match, '\\'))
            const matches = broadMatches
                .concat(broadMatchesWithoutTrailingSlash)
            return matches
        },
        enabled: isProduction // disable purge in dev
    },
};      
