import { FC } from 'react';

import { BackdropProps } from './Backdrop.types';

import classes from './Backdrop.module.sass';

const Backdrop: FC<BackdropProps> = ({ className, onClick, ...rest }) => (
	<div
		onClick={onClick}
		className={`${classes.Backdrop} ${className}`}
		{...rest}
	></div>
);

export default Backdrop;
