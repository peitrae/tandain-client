const path = require('path');

module.exports = {
	stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)', '../modules/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/preset-scss',
    'storybook-addon-next-router',
    '@storybook/addon-viewport' // allows the stories to be displayed in different sizes and layouts
	],
	framework: '@storybook/react',
  staticDirs: ['../public'],
	webpackFinal: async (config, _) => {
		config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, "../"),
    };

		return config;
	},
};
