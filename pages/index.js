import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import Hero from '@/components/Hero'
import { VegaLite } from 'react-vega'


const spec = 
  {
    "width": 300,
    "height": 200,
    "config": {
      "background": "#fbfbfb",
      "title": {
        "color": "#003057",
        "fontSize": 18,
        "anchor": "start",
        "align": "left",
        "subtitleColor": "#003057",
        "subtitleFontSize": 14
      },
      "axis": {
        "grid": false,
        "titleColor": "#003057",
        "titleFontSize": 13,
        "titleAngle": 0,
        "labelColor": "#5e667d",
        "labelFontSize": 12,
        "labelAngle": 0,
        "labelLimit": 1000,
        "tickColor": "#5e667d",
        "tickWidth": 0.5,
        "domainColor": "#5e667d",
        "domainWidth": 0.5
      },
      "axisY": {
        "title": "",
        "domain": false,
        "ticks": false,
        "labelPadding": 15
      },
      "legend": {
        "direction": "horizontal",
        "orient": "top",
        "titleColor": "#003057",
        "labelColor": "#003057",
        "labelFontSize": 12,
        "padding": 5
      },
      "header": {
        "labelColor": "#003057",
        "labelFontSize": 13,
        "labelAngle": 0,
        "title": ""
      },
      "range": {
        "category": [
          "#19a7a4",
          "#1941a6",
          "#9b9fa8"
        ],
        "diverging": [
          "#1941a6",
          "#fbfbfb",
          "#19a7a4"
        ],
        "heatmap": [
          "#e6f5f5",
          "#ccebeb",
          "#b3e2e1",
          "#99d8d7",
          "#80cecd",
          "#66c4c2",
          "#4dbab8",
          "#33b1ae",
          "#19a7a4",
          "#008d8b",
          "#007e7b",
          "#006e6c",
          "#005e5c"
        ]
      },
      "mark": {
        "color": "#19a7a4"
      },
      "view": {
        "stroke": "transparent"
      },
      "text": {
        "color": "#5e667d",
        "fontSize": 13,
        "align": "center",
        "baseline": "middle"
      },
      "bar": {},
      "point": {
        "fill": "",
        "opacity": 0.8,
        "size": 100
      },
      "circle": {
        "opacity": 1,
        "size": 50
      },
      "rect": {
        "tickSize": 0
      },
      "line": {
        "strokeWidth": 3
      }
    },
    "data": {
      "name": "data-c3cf64cfe81ae75b13085b5bde2f71b5"
    },
    "mark": {
      "type": "line",
      "point": true,
      "size": 1
    },
    "encoding": {
      "color": {
        "type": "nominal",
        "field": "Race",
        "title": "Arrestee Race"
      },
      "facet": {
        "type": "nominal",
        "columns": 2,
        "field": "Gender",
        "sort": [
          "Male",
          "Female"
        ]
      },
      "tooltip": [
        {
          "type": "quantitative",
          "field": "Year"
        },
        {
          "type": "nominal",
          "field": "Gender"
        },
        {
          "type": "nominal",
          "field": "Race"
        },
        {
          "type": "quantitative",
          "field": "Population",
          "format": ","
        },
        {
          "type": "quantitative",
          "field": "cases_per_capita",
          "format": ".1f",
          "title": "Cases Per Capita"
        }
      ],
      "x": {
        "type": "ordinal",
        "field": "Year",
        "title": "Arrest Year"
      },
      "y": {
        "type": "quantitative",
        "axis": {
          "tickMinStep": 20
        },
        "field": "cases_per_capita"
      }
    },
    "title": {
      "text": [
        "Number Of Cases Per 1,000 Adults"
      ],
      "dx": 33
    },
    "$schema": "https://vega.github.io/schema/vega-lite/v4.8.1.json",
    "datasets": {
      "data-c3cf64cfe81ae75b13085b5bde2f71b5": [
        {
          "Race": "Black",
          "Gender": "Female",
          "Year": 2015,
          "Jurisdiction": "Charleston",
          "Population": 44365,
          "WarrantNumber": 555,
          "CaseId": 419,
          "DefendantId": 363,
          "cases_per_capita": 9.444381832525641
        },
        {
          "Race": "Black",
          "Gender": "Female",
          "Year": 2016,
          "Jurisdiction": "Charleston",
          "Population": 44815,
          "WarrantNumber": 465,
          "CaseId": 371,
          "DefendantId": 333,
          "cases_per_capita": 8.27847818810666
        },
        {
          "Race": "Black",
          "Gender": "Female",
          "Year": 2017,
          "Jurisdiction": "Charleston",
          "Population": 45018,
          "WarrantNumber": 571,
          "CaseId": 439,
          "DefendantId": 379,
          "cases_per_capita": 9.751654893598117
        },
        {
          "Race": "Black",
          "Gender": "Female",
          "Year": 2018,
          "Jurisdiction": "Charleston",
          "Population": 45229,
          "WarrantNumber": 649,
          "CaseId": 455,
          "DefendantId": 395,
          "cases_per_capita": 10.059917309690684
        },
        {
          "Race": "Black",
          "Gender": "Female",
          "Year": 2019,
          "Jurisdiction": "Charleston",
          "Population": 45303,
          "WarrantNumber": 561,
          "CaseId": 397,
          "DefendantId": 338,
          "cases_per_capita": 8.763216564024457
        },
        {
          "Race": "Black",
          "Gender": "Female",
          "Year": 2020,
          "Jurisdiction": "Charleston",
          "Population": 45023,
          "WarrantNumber": 552,
          "CaseId": 399,
          "DefendantId": 346,
          "cases_per_capita": 8.86213712991138
        },
        {
          "Race": "Black",
          "Gender": "Male",
          "Year": 2015,
          "Jurisdiction": "Charleston",
          "Population": 35812,
          "WarrantNumber": 4027,
          "CaseId": 2711,
          "DefendantId": 2134,
          "cases_per_capita": 75.70088238579248
        },
        {
          "Race": "Black",
          "Gender": "Male",
          "Year": 2016,
          "Jurisdiction": "Charleston",
          "Population": 36128,
          "WarrantNumber": 4126,
          "CaseId": 2768,
          "DefendantId": 2160,
          "cases_per_capita": 76.61647475642161
        },
        {
          "Race": "Black",
          "Gender": "Male",
          "Year": 2017,
          "Jurisdiction": "Charleston",
          "Population": 36355,
          "WarrantNumber": 5262,
          "CaseId": 3288,
          "DefendantId": 2484,
          "cases_per_capita": 90.44147985146472
        },
        {
          "Race": "Black",
          "Gender": "Male",
          "Year": 2018,
          "Jurisdiction": "Charleston",
          "Population": 36575,
          "WarrantNumber": 4684,
          "CaseId": 3009,
          "DefendantId": 2337,
          "cases_per_capita": 82.26930963773069
        },
        {
          "Race": "Black",
          "Gender": "Male",
          "Year": 2019,
          "Jurisdiction": "Charleston",
          "Population": 36588,
          "WarrantNumber": 4368,
          "CaseId": 2805,
          "DefendantId": 2212,
          "cases_per_capita": 76.66448015742866
        },
        {
          "Race": "Black",
          "Gender": "Male",
          "Year": 2020,
          "Jurisdiction": "Charleston",
          "Population": 36716,
          "WarrantNumber": 4098,
          "CaseId": 2637,
          "DefendantId": 2043,
          "cases_per_capita": 71.82154918836474
        },
        {
          "Race": "White",
          "Gender": "Female",
          "Year": 2015,
          "Jurisdiction": "Charleston",
          "Population": 105243,
          "WarrantNumber": 642,
          "CaseId": 485,
          "DefendantId": 428,
          "cases_per_capita": 4.608382505249756
        },
        {
          "Race": "White",
          "Gender": "Female",
          "Year": 2016,
          "Jurisdiction": "Charleston",
          "Population": 107988,
          "WarrantNumber": 661,
          "CaseId": 491,
          "DefendantId": 439,
          "cases_per_capita": 4.54680149646257
        },
        {
          "Race": "White",
          "Gender": "Female",
          "Year": 2017,
          "Jurisdiction": "Charleston",
          "Population": 110673,
          "WarrantNumber": 751,
          "CaseId": 535,
          "DefendantId": 471,
          "cases_per_capita": 4.834060701345405
        },
        {
          "Race": "White",
          "Gender": "Female",
          "Year": 2018,
          "Jurisdiction": "Charleston",
          "Population": 113400,
          "WarrantNumber": 805,
          "CaseId": 577,
          "DefendantId": 506,
          "cases_per_capita": 5.088183421516755
        },
        {
          "Race": "White",
          "Gender": "Female",
          "Year": 2019,
          "Jurisdiction": "Charleston",
          "Population": 115673,
          "WarrantNumber": 732,
          "CaseId": 535,
          "DefendantId": 468,
          "cases_per_capita": 4.625106982614785
        },
        {
          "Race": "White",
          "Gender": "Female",
          "Year": 2020,
          "Jurisdiction": "Charleston",
          "Population": 117549,
          "WarrantNumber": 685,
          "CaseId": 498,
          "DefendantId": 429,
          "cases_per_capita": 4.236531148712452
        },
        {
          "Race": "White",
          "Gender": "Male",
          "Year": 2015,
          "Jurisdiction": "Charleston",
          "Population": 101001,
          "WarrantNumber": 1872,
          "CaseId": 1342,
          "DefendantId": 1137,
          "cases_per_capita": 13.286997158443976
        },
        {
          "Race": "White",
          "Gender": "Male",
          "Year": 2016,
          "Jurisdiction": "Charleston",
          "Population": 103552,
          "WarrantNumber": 1918,
          "CaseId": 1410,
          "DefendantId": 1175,
          "cases_per_capita": 13.616347342398022
        },
        {
          "Race": "White",
          "Gender": "Male",
          "Year": 2017,
          "Jurisdiction": "Charleston",
          "Population": 106060,
          "WarrantNumber": 2031,
          "CaseId": 1485,
          "DefendantId": 1232,
          "cases_per_capita": 14.001508580049029
        },
        {
          "Race": "White",
          "Gender": "Male",
          "Year": 2018,
          "Jurisdiction": "Charleston",
          "Population": 108537,
          "WarrantNumber": 2092,
          "CaseId": 1479,
          "DefendantId": 1249,
          "cases_per_capita": 13.626689516017578
        },
        {
          "Race": "White",
          "Gender": "Male",
          "Year": 2019,
          "Jurisdiction": "Charleston",
          "Population": 109884,
          "WarrantNumber": 1963,
          "CaseId": 1424,
          "DefendantId": 1182,
          "cases_per_capita": 12.959120527101307
        },
        {
          "Race": "White",
          "Gender": "Male",
          "Year": 2020,
          "Jurisdiction": "Charleston",
          "Population": 111123,
          "WarrantNumber": 1845,
          "CaseId": 1321,
          "DefendantId": 1062,
          "cases_per_capita": 11.887728013102597
        }
      ]
    }
  }

const barData = {
  table: [
    { a: 'A', b: 28 },
    { a: 'B', b: 55 },
    { a: 'C', b: 43 },
    { a: 'D', b: 91 },
    { a: 'E', b: 81 },
    { a: 'F', b: 53 },
    { a: 'G', b: 19 },
    { a: 'H', b: 87 },
    { a: 'I', b: 52 },
  ],
}

const barData2 = {
  table: [
    { a: 'A', b: 28 },
    { a: 'B', b: 15 },
    { a: 'C', b: 43 },
    { a: 'D', b: 81 },
    { a: 'E', b: 81 },
    { a: 'F', b: 33 },
    { a: 'G', b: 19 },
    { a: 'H', b: 27 },
    { a: 'I', b: 52 },
  ],
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {

  
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <Hero />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
          <VegaLite spec={spec}  />

        </div>
      </div>
    </>
  )
}
