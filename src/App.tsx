import './App.css';
import { Container } from './module/Container';

import { RequestBlock } from './module/Request';
import { BtnTranslate } from './module/BtnTranslate';
import { ResponzeBlock } from './module/Responze';


function App(): JSX.Element {
  
  return (
    <div className="App">
      <Container>
        <RequestBlock />
        <BtnTranslate />
        <ResponzeBlock />
      </Container>
    </div>
  );
}

export default App;
