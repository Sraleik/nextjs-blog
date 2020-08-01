import Head from 'next/head'
import TextButton from '../components/text-button'
// import ClipLoader from "react-spinners/ClipLoader";

// import useSWR from 'swr'
// const fetcher = (...args) => fetch(...args).then(res => res.json())

// function getPlanet(id) {
//   const { data, error } = useSWR(`http://swapi.dev/api/planets/${id}`, fetcher)
//   return {
//     planet: data,
//     isLoading: !error && !data,
//     isError: error
//   }
// }

const siteTitle = 'Nicolas Rotier CV'

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
      </header>
      <main>
        <h1>{props.data}</h1>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()

  // Pass data to the page via props
  return { props: { data: 'et ouai mémé !!'} }
}

