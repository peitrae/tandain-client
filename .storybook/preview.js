import '!style-loader!css-loader!sass-loader!../styles/index.sass';

import { RouterContext } from 'next/dist/shared/lib/router-context';
import * as NextImage from 'next/image';

// De-optimize Next.js Image
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
	configurable: true,
	value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	nextRouter: {
		Provider: RouterContext.Provider,
	},
};
