import { FC, HTMLAttributes } from 'react';

const BaseHeader: FC<HTMLAttributes<HTMLElement>> = ({
	children,
	className,
	...args
}) => (
	<header data-testid='header' className={className} {...args}>
		{children}
	</header>
);

export default BaseHeader;
