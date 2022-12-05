import Link from 'next/link';
import Image from 'next/image';
import classes from './Header.module.css'

export function Header() {
    return (
        <header className={classes.header}>
            <Link href="/">
                <div className={classes.anchor}>Index</div>
            </Link>
            <Link href="/about">
                <div className={classes.anchor}>About</div>
            </Link>
        </header>

    )
}