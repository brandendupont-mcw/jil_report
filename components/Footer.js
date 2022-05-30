import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Logo from '@/data/logowhite.svg'

export default function Footer() {
  return (

  <footer className="p-4 bg-mblue text-white md:py-4 dark:bg-gray-800">
  <div className="sm:flex sm:items-center sm:justify-between">
  <Link href="https:/www.justiceinnovationlab.org" className="flex items-center mb-4 sm:mb-0">
  <div className="mr-3">
                  <Logo />
                </div>
  </Link>
  <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 dark:text-gray-400">
  <li>
  <Link href="/about" className="mr-4 hover:underline md:mr-6 ">About</Link>
  </li>
  <li>
  <Link href="/about" className="mr-4 hover:underline md:mr-6 ">Glossary</Link>
  </li>
  <li>
  <a href="https://www.justiceinnovationlab.org/donate" className="mr-4 hover:underline md:mr-6 ">Donate</a>
  </li>
  <li>
  <a href="https://www.justiceinnovationlab.org/contact" className="hover:underline">Contact</a>
  </li>
  </ul>
  </div>
  </footer>

  )
}
