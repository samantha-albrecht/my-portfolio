import styles from './ButtonLink.module.scss';
import cn from 'classnames';

const ButtonLink = ({ url, title, target, className, buttonOutline, children }) => (
    <a 
        href={url} 
        title={title} 
        className={cn(styles.buttonDefault, className, { [styles[`buttonOutline${buttonOutline}`]]: buttonOutline })} 
        target={target}
    >
        {children}
    </a>
    );

export default ButtonLink;