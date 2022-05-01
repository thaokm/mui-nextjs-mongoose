// ■---- customHead\index.js
import Head from 'next/head'

export default function CustomHead({title="Unknown page :D"}) {
    return(
        <Head>
            <meta name="author" content='thao.km' />
            <meta name="description" content='One-Stop Service System' />
            <link rel="icon" href="/favicon-16x16.png" />
            <title>{title}</title>
        </Head>
    )
}