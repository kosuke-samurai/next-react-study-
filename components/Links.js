import Image from 'next/image'
import classes from './Links.module.css'

const ITEMS = [
    {
        href: 'https://nextjs.org/docs',
        title: 'Documentation \u2192',
        description: 'Find in-depth information about Next.js features and API.'
    },
    {
        href: 'https://nextjs.org/learn',
        title: 'Learn \u2192',
        description: 'Learn about Next.js in an interactive course with quizzes!'
    },
    {
        href: 'https://github.com/vercel/next.js/tree/canary/examples',
        title: 'Examples →',
        description: 'Discover and deploy boilerplate example Next.js projects.'
    },
    {
        href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
        title: 'Deploy →',
        description: 'Instantly deploy your Next.js site to a public URL with Vercel.'
    },
]

export function Links() {

    return (
        <div className={classes.grid}>

            {ITEMS.map(item => {
                return (
                    <a key={item.href} href={item.href} className={classes.card}>
                        <h2>{item.title}</h2>
                        <p className={classes.description}>{item.description}</p>
                    </a>
                )
            })}

            {/* <a href="https://nextjs.org/learn" className={classes.card}>
                <h2>Learn &rarr;</h2>
                <p className={classes.description}>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
                href="https://github.com/vercel/next.js/tree/canary/examples"
                className={classes.card}
            >
                <h2>Examples &rarr;</h2>
                <p className={classes.description}>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.card}
            >
                <h2>Deploy &rarr;</h2>
                <p className={classes.description}>
                    Instantly deploy your Next.js site to a public URL with Vercel.
                </p>
            </a> */}
        </div>

    );
}
