import "../styles/globals.css"
import styles from "../styles/Home.module.css"
import Link from "next/link"
import Layout from "../components/Layout"

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <main className={styles.main}>
        <Link href='/posts'>
          <a className={styles.card}>
            <p>posts</p>
          </a>
        </Link>
        <Link href='/about'>
          <a className={styles.card}>
            <p>about</p>
          </a>
        </Link>
      </main>
      <Layout>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </>
  )
}

export default MyApp
