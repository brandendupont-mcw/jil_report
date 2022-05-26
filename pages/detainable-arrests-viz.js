import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { aq, op, table, loadCSV, FileAttachment } from 'arquero';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import _ from "lodash";
import Select from '@/components/Select'  ;
import VizHeader from '@/components/VizHeader.js'
import MyResponsivePie from '@/components/charts/pie'

const FirstBar = dynamic(
    () => import('@/components/charts/bar'),
    { ssr: false }
  );

const FirstPie = dynamic(
  () => import('@/components/charts/pie'),
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


    const lastTest1 = [{'hi':'loading'}]

    const pieData = [
      {
        "id": "Percent Black",
        "label": "% Black",
        "value": 83,
  
      },
      {
        "id": "Percent Other",
        "label": "% Other",
        "value": 17,
      }
    ]

    const people = [
      { id: 'Statewide', name: 'Statewide' },
      { id: 2, name: '2' },
      { id: 3, name: '3' }
    ]


    const [riskData, setRiskData] = useState(lastTest1);

    const [circuitVal, setCircuit] = useState('Statewide');

    const [selected, setSelected] = useState(people[0]);


    const data = table({
        country: ['USA', 'USA', 'Canada', 'Canada'],
        medal: ['gold', 'silver', 'gold', 'silver'],
        count: [10, 20, 7, 26]
      })


      useEffect(() => {
        (async () => {
          const users = await loadCSV('https://raw.githubusercontent.com/brandendupont-mcw/bond-court-reform/master/data/viz/risk.csv');

          
          // eslint-disable-line
          const testData = users.params({ threshold: selected['id'] }).filter(d => d.Circuit === threshold ); 
          // risk data
          

          setRiskData(testData.objects());

        })();
      
        return () => {
          // this now gets called when the component unmounts
        };
      }, [selected]);






    //const testData = users.filter(d => d.Circuit === circuitVal );

    const jsonTestAsync = JSON.parse(JSON.stringify(riskData))

    console.log(jsonTestAsync);






  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <VizHeader />

      

        <div className='h-32 p-4 mt-10'>
          <div className='flex flex-row gap-1 sm:gap-2'>
          <h3 className='text-xl mt-3 font-extrabold '>Select Detainable Arrests By</h3>
      <Select  selected={selected} setSelected={setSelected} />
      </div>
      </div>
      <div className="mb-12"></div>

      <div  style={{height:"80px", width:"140px"}} className="ml-2"> 
                            
                            <div className="pt-2"></div>
                                              </div>
                    

      <div className="mb-4 ">
          <h1 className="text-2xl font-extrabold  tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:text-2xl md:leading-14">
            Risk Level of Individuals Arrested
          </h1>
          <div className="text-md text-gray-700 max-w-sm  ">Percent of individuals arrested with a risk of new criminal activity or failure to appear</div>
          <hr className='max-w-sm mb-6 mt-4'></hr>
          </div>
         

      <div className='grid gap-10 grid-cols-2 '>
      <span className=' h-[250px] '>
      <div className="text-lg leading-7 text-gray-700 ml-[210px]">Risk of New Criminal Activity</div>
            <FirstBar className="z-0" data={jsonTestAsync} keyArray={["NCA Risk"]} indexArray={"Offense Type"} marginObject={{ top: 0, right: 0, bottom: 0, left: 300 }} />
            </span>
            
    
            
      <span className=' w-[212px] h-[250px] z-index-0 mb-10'>
      <div className="text-lg leading-7 text-gray-700">Risk of Failure to Appear</div>
          <FirstBar className="z-0" data={jsonTestAsync} keyArray={["FTA Risk"]} indexArray={"Offense Type"} marginObject={{ top: 0, right: 0, bottom: 0, left: 10 }} />
          </span>
      </div>

      <hr></hr>


    </>
  )
}
