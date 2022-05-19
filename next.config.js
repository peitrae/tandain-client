/** @type {import('next').NextConfig} */

const { withFederatedSidecar } = require('@module-federation/nextjs-mf');
const { dependencies } = require('./package.json');

module.exports = withFederatedSidecar({
	name: 'tandainClient', // NOTE: Don't use kebab-case
	filename: 'static/chunks/remoteEntry.js',
	exposes: {
		'./TrashIcon': './components/icons/TrashIcon.tsx',
		'./CheckmarkIcon': './components/icons/CheckmarkIcon.tsx',
		'./Button': './components/ui/Button/index.ts',
		'./Spinner': './components/ui/Spinner/index.ts',
		'./Tooltip': './components/ui/Tooltip/index.ts',
		'./Title': './components/typhographies/Title/index.ts',
	},
	shared: {
		...dependencies,
		clsx: {
			singleton: true,
			requiredVersion: dependencies.clsx,
		},
		react: {
			singleton: true,
			eager: true,
			requiredVersion: dependencies.react,
		},
		'react-dom': {
			singleton: true,
			eager: true,
			requiredVersion: dependencies['react-dom'],
		},
	},
})({
	// your original next.config.js export
  async headers() {
    return [
      {
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, max-age=0, must-revalidate',
          }
        ],
      },
    ]
  },
	reactStrictMode: true,
	webpack(config) {
		config.output.publicPath = 'auto';

		return config;
	},
});
