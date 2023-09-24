import { AppButton } from './Components/Button.style';
import { AppContainer } from './Components/Container.style'
import { GlobalStyle } from './Components/GlobalStyles.style';

function App() {

  return (
    <GlobalStyle>
      <AppContainer>
      <AppButton buttonLabel="Click Me" backgroundColor='violet'></AppButton>
    </AppContainer>
    </GlobalStyle>
    
  )
}

export default App
