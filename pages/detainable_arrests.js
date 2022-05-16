import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { aq, op, table, loadCSV, FileAttachment } from 'arquero';

//import risk from '../data/viz/risk.csv'


import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {

  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {

    //const riskData = fromCSV('../data/viz/risk.csv')

    const data = table({
        country: ['USA', 'USA', 'Canada', 'Canada'],
        medal: ['gold', 'silver', 'gold', 'silver'],
        count: [10, 20, 7, 26]
      })

    // we can load data without much problem from an extenal source
    // this is not as fast as importing the data directly
    const flights = loadCSV('https://raw.githubusercontent.com/brandendupont-mcw/bond-court-reform/master/data/viz/risk.csv?token=GHSAT0AAAAAABPAN4HY27QS2HUZSHA3MW7WYUCUYZA')

    // this looks like this works
    const filteredData = data.filter(d => d.medal === 'gold')


    console.log((flights))

    
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <h1>
          HI
      </h1>

    </>
  )
}
