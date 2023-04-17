import './App.css';
import ContainerTranslate from './module/Container/Component/Container.master';

import { RequestBlock } from './module/Request';
import { BtnTranslate } from './module/BtnTranslate';
import { ResponzeBlock } from './module/Responze';


function App(): JSX.Element {
  
  return (
    <div className="App">
      <ContainerTranslate.Provider>
        <RequestBlock />
        <BtnTranslate />
        <ResponzeBlock />
      </ContainerTranslate.Provider>
    </div>
  );
}

export default App;
