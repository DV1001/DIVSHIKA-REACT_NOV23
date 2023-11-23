import logo from './logo.svg';
import './App.css';
import AxiosGet from './components/AxiosGet';
import AxiosPost from './components/AxiosPost';
import AxiosPut from './components/AxiosPut';
import AxiosDelete from './components/AxiosDelete';

function App() {
  return (
    <div className="App">
      <AxiosGet/>
      <AxiosPost/>
      <AxiosPut/>
      <AxiosDelete/>
    </div>
  );
}

export default App;
