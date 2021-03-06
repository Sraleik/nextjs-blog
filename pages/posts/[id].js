import Layout from '../../components/layout'
import Date from '../../components/date'
import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({postData}) {
  return (
  <Layout>
    <Head>
      <title>{postData.title}</title>
    </Head>
      <br />
      {postData.id}
      <br />
      <Date dateString={postData.date}></Date>
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
  </Layout>)
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}