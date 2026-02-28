import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactGA from 'react-ga4'

export function usePageTracking() {
  const location = useLocation()

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page_path: location.pathname + location.search,
      page_location: window.location.origin + location.pathname + location.search,
      page_title: document.title,
    })
  }, [location])
}
