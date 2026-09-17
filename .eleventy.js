module.exports = function (eleventyConfig) {
    // Add a filter to format dates
    eleventyConfig.addFilter("dateFormat", function (date) {
        return new Date(date).toLocaleDateString("en-AU", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    });

    // Add a shortcode for the current year
    eleventyConfig.addShortcode("currentYear", function () {
        return new Date().getFullYear();
    });

    // Passthrough copy for static assets
    eleventyConfig.addPassthroughCopy("./src/assets");

    // Return the configuration object
    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
};  