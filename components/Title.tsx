import { ReactNode } from "react";
import styles from './Title.module.scss'
interface TitleProps {
    title:string;
    children:ReactNode;
}

function Title({ title, children }:TitleProps) {
	return (
		<>
			<h2>{title}</h2>
			<div className={styles.underline}></div>
			<div className={styles.container}>{children}</div>
		</>
	);
}
export default Title;
