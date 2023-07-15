import { createContext, useContext, useState } from 'react';
import data from './data';
import List from './components/List';
import Button from './components/Button';
import Header from './components/Header';

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);
const text = `${data.length} Birthdays Today. `


const App = () => {
  const [people, setPeople] = useState(data);

  return <main>
    <div className='container'>
      <AppContext.Provider value={{ people, setPeople }}>
        <Header text={text} />
        <List />
        <Button />
      </AppContext.Provider>
      </div>
  </main>;
};
export default App;
