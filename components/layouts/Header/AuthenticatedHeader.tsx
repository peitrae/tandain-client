import { FC } from 'react';

import useAppDispatch from '../../../hooks/useAppDispatch';
import { toggleExpandSidebar } from '../../../store/actions/page';

import Logo from '../../ui/Logo';
import BaseHeader from './BaseHeader';
import Button from '../../ui/Button';
import MenuIcon from '../../icons/MenuIcon';
import UserIcon from '../../icons/UserIcon';

import classes from './AuthenticatedHeader.module.scss';

const AuthenticatedHeader: FC = () => {
	const dispatch = useAppDispatch();

	const toggleSidebar = () => dispatch(toggleExpandSidebar());

	return (
		<BaseHeader
			className={classes.Container}
			data-testid='authenticated-header'
		>
			<div className='col'>
				<Button
					data-testid='sidebar-toggle'
					variant='text'
					color='primary'
					startIcon={<MenuIcon />}
					className={`${classes.SidebarButton} mr2`}
					onClick={toggleSidebar}
				/>
				<Logo />
			</div>
			<Button
				data-testid='avatar'
				variant='text'
				color='primary'
				startIcon={<UserIcon />}
				className={classes.Avatar}
				round
			/>
		</BaseHeader>
	);
};

export default AuthenticatedHeader;
