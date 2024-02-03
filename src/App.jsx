import { RoutesTree } from './routes'
import GlobalStyles from './GlobalStyles'
import { AuthContextProvider } from './context/AuthContext'
import { LocationContextProvider } from './context/LocationContext'



function App() {
  return(
  <>
  <AuthContextProvider>
  <LocationContextProvider>
    <GlobalStyles/>
    <RoutesTree/>
  </LocationContextProvider>
  </AuthContextProvider>
  </>
    )
}

export default App
