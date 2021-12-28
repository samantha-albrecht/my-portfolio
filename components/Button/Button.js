import styles from './Button.module.scss';

export function Button() {
    return (
        <button>
            Text goes here
        </button>
    )
}

export interface ButtonParams {
    href: String;
    title: String;
    text: String;
    className?: String;
    onClick?: () => unknown;
}

function Button({ href, title, className, text, onClick}: ButtonParams) {
    return (
        <a></a>
    )
}