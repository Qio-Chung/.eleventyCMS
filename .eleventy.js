const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
    // Add a filter to format dates
    eleventyConfig.addFilter("postDate", function (dateObj) {
        return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("LLL dd yyyy");
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