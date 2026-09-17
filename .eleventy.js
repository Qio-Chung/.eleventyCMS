const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
    // Add a filter to format dates
    eleventyConfig.addFilter("postDate", function (dateObj) {
        return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("LLL dd yyyy");
    });

    eleventyConfig.addFilter("sortDate", function (collection) {
        return collection.sort((a, b) => {
            const aDate = a.date || a.data?.date || new Date(0);
            const bDate = b.date || b.data?.date || new Date(0);
            return new Date(bDate) - new Date(aDate);
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