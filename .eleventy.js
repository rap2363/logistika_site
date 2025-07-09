module.exports = (config) => {
	config.addPassthroughCopy("css");
	return {
		dir: {
			input: 'src',
			includes: "_includes",
      		output: "_site"
		},
	};
};
