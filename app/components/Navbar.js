import { Link } from 'remix'
import Prefetch from '@layer0/react/Prefetch'

const navLinks = [
  {
    pathname: '/',
    name: 'Home',
  },
  {
    pathname: '/why',
    name: 'Why?',
  },
  {
    pathname: '/example',
    name: 'Example',
  },
]

const Navbar = () => {
  return (
    <div className="w-full md:max-w-2xl flex flex-col items-start">
      <div className="mt-10 overflow-x-scroll sm:overflow-x-hidden sm:max-w-none flex flex-row items-center space-x-3">
        {navLinks.map((item) => (
          <Prefetch
            key={item.name}
            url={`${item.pathname}?_data=routes${encodeURIComponent(item.pathname === '/' ? '/index' : item.pathname)}`}
          >
            <Link
              to={item.pathname}
              className={`${item.hasOwnProperty('class') ? item.class : ''} p-2 hover:bg-gray-100 hover:rounded`}
            >
              <span className="text-sm text-black hover:text-gray-700">{item.name}</span>
            </Link>
          </Prefetch>
        ))}
      </div>
    </div>
  )
}

export default Navbar
