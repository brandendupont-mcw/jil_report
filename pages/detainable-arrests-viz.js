import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { aq, op, table, loadCSV, FileAttachment } from 'arquero';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import _ from "lodash";



const FirstBar = dynamic(
    () => import('@/components/charts/bar'),
    { ssr: false }
  );

//import risk from '../data/viz/risk.csv'




import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {

  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {

    const barData = [
      {
        "country": "AD",
        "eric": "howdy",
        "hot dog": 4,
        "burger": 102,
        "kebab": 199,
      },
      {
        "country": "joe",
        "hot dog": 4,
        "burger": 102,
        "sandwich": 54,
        "kebab": 199,
        "fries": 78,
        "donut": 60,
      },

    ]

    const lastTest = [{"Circuit":"23","Offense Type":"Non-Probationable Forcible Felony & Sex Offenses","Annual Cases":333,"FTA Risk":0.12,"NCA Risk":0.37},
    {"Circuit":"23","Offense Type":"Weapon Offenses","Annual Cases":190,"FTA Risk":0.14,"NCA Risk":0.4},{"Circuit":"23","Offense Type":"Domestic Violence/VOOP","Annual Cases":3116,"FTA Risk":0.11,"NCA Risk":0.29},
    {"Circuit":"23","Offense Type":"Class 3 Felony or Greater","Annual Cases":1500,"FTA Risk":0.17,"NCA Risk":0.4},{"Circuit":"23","Offense Type":"Non-Detainable","Annual Cases":9820,"FTA Risk":null,"NCA Risk":null}]

  async function fetchData() {
    return(loadCSV('https://raw.githubusercontent.com/brandendupont-mcw/bond-court-reform/master/data/viz/risk.csv'))
  }

  async function main() {
    let abc = await fetchData();
    const testData = abc.filter(d => d.Circuit === '23');
    return testData.objects()
  }

    const testArray = [{ "Non-Probationable Forcible Felony & Sex Offenses": 0.37, "Weapon Offenses": 0.4, "Domestic Violence/VOOP": 0.29, "Class 3 Felony or Greater": 0.4, "Non-Detainable": 0 }]

    //const riskData = fromCSV('../data/viz/risk.csv')

    const array1 = ["Non-Probationable Forcible Felony & Sex Offenses","Weapon Offenses","Domestic Violence/VOOP","Class 3 Felony or Greater","Non-Detainable"]

    const array2 = Array(array1.length).fill('Offense Type');

    const array3 =[0.37,0.4,0.29,0.4,0]

    //console.log(array2)

    //console.log(_.zipObject([ "Offense Type", "Offense Type", "Offense Type", "Offense Type", "Offense Type" ],array1))

    const [riskData, setRiskData] = useState(lastTest);

    const [circuit, setCircuit] = useState('Statewide');

    const data = table({
        country: ['USA', 'USA', 'Canada', 'Canada'],
        medal: ['gold', 'silver', 'gold', 'silver'],
        count: [10, 20, 7, 26]
      })


      useEffect(() => {
        (async () => {
          const users = await loadCSV('https://raw.githubusercontent.com/brandendupont-mcw/bond-court-reform/master/data/viz/risk.csv');
          //console.log(users);
          const testData = users.filter(d => d.Circuit === '19');
          setRiskData(testData.objects());
          //console.log(testData.objects())
          
        })();
      
        return () => {
          // this now gets called when the component unmounts
        };
      }, []);

    // we can load data without much problem from an extenal source
    // this is not as fast as importing the data directly
    //const riskData = loadCSV('https://raw.githubusercontent.com/brandendupont-mcw/bond-court-reform/master/data/viz/risk.csv')



    // this looks like this works
    const filteredData =  data.filter(d => d.medal === 'gold') 
    //console.log(typeof(riskData))
    //const testData = riskData.filter(d => d.Circuit === 'gold')


    const testAsync = main()
    //const jsonTestAsync = JSON.stringify(testAsync)

    //console.log(jsonTestAsync)


    const jsonTestAsync = JSON.parse(JSON.stringify(riskData))
    console.log(typeof(jsonTestAsync))
    console.log([lastTest === jsonTestAsync])






  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      
      <h1>
          HI
      </h1>

      <div className='w-full h-96'>


      <FirstBar data={jsonTestAsync} />

      </div>

    </>
  )
}
