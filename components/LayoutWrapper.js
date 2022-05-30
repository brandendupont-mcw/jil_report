import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="https://www.justiceinnovationlab.org/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Logo />
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5 ">

            <div className="hidden sm:block sm:space-x-7">
              {headerNavLinks.map((link) => (
                <span                   key={link.title} className=' hover:border-sblue transition duration-150 ease-in-out  hover:border-b-4 py-2 '>
                <Link
                  href={link.href}
                  className="p-1 font-medium "
                >
                  {link.title}
                </Link>
                </span>
              ))}
            </div>

            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
