import { Router, useRoute } from "@intrnl/astro"

export default function App({ children }) {
  const { pathname } = useRoute()

  if (pathname.endsWith("/")) {
    return (
      <Router basePath={pathname}>
        {children}
      </Router>
    )
  }

  return <>{children}</>
}
