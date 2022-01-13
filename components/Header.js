import { useEffect, useRef } from 'react'
import Link from 'next/link'
import BLOG from '@/blog.config'
import { useLocale } from '@/lib/locale'

const NavBar = () => {
  const locale = useLocale()
  const links = [
    { id: 0, name: locale.NAV.INDEX, to: BLOG.path || '/', show: true },
    { id: 1, name: locale.NAV.ABOUT, to: '/about', show: BLOG.showAbout },
    { id: 2, name: locale.NAV.RSS, to: '/feed', show: true },
    { id: 3, name: locale.NAV.SEARCH, to: '/search', show: true }
  ]
  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-row">
        {links.map(
          link =>
            link.show && (
              <li
                key={link.id}
                className="block ml-4 text-black dark:text-gray-50 nav"
              >
                <Link href={link.to}>
                  <a>{link.name}</a>
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  )
}

const Header = ({ navBarTitle, fullWidth }) => {
  const useSticky = !BLOG.autoCollapsedNavBar
  const navRef = useRef(null)
  const sentinalRef = useRef([])
  const handler = ([entry]) => {
    if (navRef && navRef.current && useSticky) {
      if (!entry.isIntersecting && entry !== undefined) {
        navRef.current?.classList.add('sticky-nav-full')
      } else {
        navRef.current?.classList.remove('sticky-nav-full')
      }
    } else {
      navRef.current?.classList.add('remove-sticky')
    }
  }
  useEffect(() => {
    const obvserver = new window.IntersectionObserver(handler)
    obvserver.observe(sentinalRef.current)
    // Don't touch this, I have no idea how it works XD
    // return () => {
    //   if (sentinalRef.current) obvserver.unobserve(sentinalRef.current)
    // }
    /* eslint-disable-line */
  }, [sentinalRef])
  return (
    <>
      <div className="observer-element h-4 md:h-12" ref={sentinalRef}></div>
      <div
        className={`sticky-nav m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-12 py-8 bg-opacity-60 ${
          !fullWidth ? 'max-w-3xl px-4' : 'px-4 md:px-24'
        }`}
        id="sticky-nav"
        ref={navRef}
      >
        <div className="flex items-center">
          <Link href="/">
            <a aria-label={BLOG.title}>
              <div className="h-6">
                {/* <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="24"
                    height="24"
                    className="fill-current text-black dark:text-white"
                  />
                  <rect width="24" height="24" fill="url(#paint0_radial)" />
                  <defs>
                    <radialGradient
                      id="paint0_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="rotate(45) scale(39.598)"
                    >
                      <stop stopColor="#CFCFCF" stopOpacity="0.6" />
                      <stop offset="1" stopColor="#E9E9E9" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg> */}
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="596px" height="596px" viewBox="0 0 596 596" enable-background="new 0 0 596 596" xml:space="preserve">  <image id="image0" width="596" height="596" x="0" y="0"
    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlQAAAJUCAMAAADkRkgbAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB3VBMVEU6PkaWmJzu7u7n5+hF
SVFydXqTlZmqq67BwsSJi5BcX2aeoKTMzc7j4+O1trl9gIXY2dpRVFtzdnvX2Nnj5OS2t7qKjJBn
anCfoaTNzc+UlpqrrK9+gYZ6fIGusLOChInR0dOpqq25ur2Vl5vp6eq+v8Hi4uPt7e24ubuXmZ3N
ztDKysyEhove3t90dnzKy82vsbNwc3ne399tcHa3uLrb3NxpbHJUWF/U1dbs7O2lpqp2eH7h4eKw
sbRhZGudn6Pr6+vs7OyipKfT1NVXW2G0trja29zn5+fW1tdsb3Xa2tuZm5/Jyszg4ODo6Ojp6elD
R069vsDS09Sys7bq6uqanKCen6Pd3t+Zmp54e4CjpajExcZ/gYbm5uaGiY3HyMmOkJSho6bT09V/
goe4ubxlaG6mqKtOUViur7Lc3N17foONj5TOz9DAwcPd3d5qbXPQ0NLIycvLzM3l5eaxsrVfYmjF
xsiPkpaYmp1vcneHiY7V1tebnaC+wMJ8foODhoqoqayFh4zCw8XJysupq67DxMaPkZWIio/R0tPE
xcfX19jk5OWgoqWBg4ioqq2/wMKeoKOKjJGrrbCLjZGztLesrrHU1NXf3+CJjJC0tbi7vL7g4eG6
u710d3z///+3ydCSAAAAAWJLR0Sen7KjCwAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAAd0SU1FB+UI
GwkWL4WtCM8AABPBSURBVHja7d35YxTnYYfx7VigtYxsCRZ0rEhFLNhAjBVz2WBMwGCO2IaV7dSh
CY6TNCGOheMEH2kSIGlCnKPN1aZH2v6v3fd953hn5p09Rl9k1H0+P2BpdxmtZh/PvPPuzNJoAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAMD/I3+DLerTLqdfVBG2JKKCHFFBjqggR1SQIyrIbYGoHsGWsXWi+rSfB4ZFVJAjKsgR
FeSICnJEBTmighxRQY6oIEdUkCMqyBEV5IgKckQFOaKCHFFBjqggR1SQIyrIERXkiApyRAU5ooIc
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" />
</svg>
              </div>
            </a>
          </Link>
          {navBarTitle
            ? (
            <p className="ml-2 font-medium text-day dark:text-night header-name">
              {navBarTitle}
            </p>
              )
            : (
            <p className="ml-2 font-medium text-day dark:text-night header-name">
              {BLOG.title},{' '}
              <span className="font-normal">{BLOG.description}</span>
            </p>
              )}
        </div>
        <NavBar />
      </div>
    </>
  )
}

export default Header
