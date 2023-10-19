import './App.css';
import Routes from './Routes';
import { isLogado } from './auth';
import Menu from './components/Menu/Menu';
import Configuracoes from './pages/Cofiguracoes/Configuracoes';

function App() {
  return (
    <div className="bg-primary text-white p-3 text-center mx-auto"
      style={{ width: '50%', marginTop: "3%" }}>
      {isLogado() && <Menu />}
      <Configuracoes />
      <Routes />
    </div>
  );
}

export default App;
