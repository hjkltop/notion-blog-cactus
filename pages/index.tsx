import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {getPage} from '../lib/notion/index'

export const getStaticProps = async () => {
  try {
    const props = await getPage('448cc0875f2548ee89bce2359983a6f3');
    return {props}
  } catch (err) {
    // console.error('page error', domain, err)

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err
  }
}

export default  function  Home(props:any): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {JSON.stringify(props)}
      </div>


    </div>
  )
}
