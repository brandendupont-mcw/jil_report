import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, title, } = frontMatter

  console.log(name)

  return (
    <>
      <PageSEO title={`About - ${title}`} description={`- ${title}`} />
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 ">
            {title}
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-6 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">


            <div className="flex space-x-3 pt-6">
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-4">{children}</div>
        </div>
      </div>
    </>
  ) 
}
