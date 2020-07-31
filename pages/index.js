import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import Button from '../components/button'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import ClipLoader from "react-spinners/ClipLoader";
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json())

function getPlanet(id) {
  const { data, error } = useSWR(`http://swapi.dev/api/planets/${id}`, fetcher)
  return {
    planet: data,
    isLoading: !error && !data,
    isError: error
  }
}

function renderSpinner() {
  return <ClipLoader
    size={20}
    color={"#123abc"}
    loading={true}
  />
}

export default function Home({allPostsData}) {
  const planetResult = getPlanet(2) 
  console.log(planetResult)


  // if (error) return <div>failed to load</div>
  // if (!data) return <div>loading...</div>
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Nicolas Rotias dominas !</p>
        <p>et je viens de la planète</p>
        {planetResult.isLoading && renderSpinner()}
        {planetResult.planet && (<div>{planetResult.planet.name}</div>)} 
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section>
        <Button>Envoyer</Button>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({id, date, title}) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br/>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{id}</a>
              </Link>
              <br/>
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  console.log(allPostsData)
  return {
    props: {
      allPostsData
    }
  }
}