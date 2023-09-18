import logo from './logo.svg';
import './App.css';
import SearchComponent from './components/SearchComponent';
import { useState } from 'react';
import Member from './components/Member';
import Pharmacy from './components/Pharmacy';
import {useSearch} from './util/SearchContext'


function App() {
  const { searchResult} = useSearch();
  return (

    <div className="App">
<SearchComponent/>
{searchResult ? (
          <div>
            <Member searchResult={searchResult} />
            <Pharmacy searchResult={searchResult} />
          </div>
        ) : null}
    </div>
  
  );
}

export default App;
