import logo from './logo.svg';
import './App.css';
import SearchComponent from './components/SearchComponent';
import Member from './components/Member';
import Pharmacy from './components/Pharmacy';
import { SearchProvider } from './util/SearchContext';

function App() {
  return (
    <SearchProvider>
    <div className="App">
<SearchComponent/>
<Member/>
<Pharmacy/>
    </div>
    </SearchProvider>
  );
}

export default App;
