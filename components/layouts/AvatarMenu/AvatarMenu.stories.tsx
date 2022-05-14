import { ComponentMeta, ComponentStory } from '@storybook/react';

import AvatarMenu from './AvatarMenu';

export default {
	title: 'Components/Layouts/AvatarMenu',
	component: AvatarMenu,
} as ComponentMeta<typeof AvatarMenu>;

export const Default: ComponentStory<typeof AvatarMenu> = (args) => (
	<AvatarMenu {...args} />
);
