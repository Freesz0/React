import logo from './poatan1.png';
import './App.css';

function App() {
  return (
    <div className = "App">
      <header className = "App-header">
        <img src={logo} className="Foto" alt="foto" />
        <div className = "Texto"><h1 className="Nome">
          Alex Pereira
        </h1>
        <p className = "Contato">
          linkedin.com/in/alex-poatan-pereira<br />
          (99) 99999-9999<br />
          alexpoatan@email.com.br
        </p>
        </div>
      </header>

      <div className = "Barra">
        <h2 className = "DivTitulo">Resumo</h2>
        <p className = "Resumo">
          Atual campeão da divisão meio-médio do UFC e ex-campeão da divisão média, faixa preta em Kickboxing e Jiu-jitsu brasileiro. Defendi meu cinturão de oponentes mais ágeis 5 vezes, todas com nocautes e nocautes técnicos. Atualmente 3º colocado nos top 15 Pound-for-Pound, classificação que determina o sucesso e desempenho dos lutadores da organização como um todo, sem considerar pesagem.
        </p>
      </div>

      
      <div className = "Barra">
        <h2 className = "DivTitulo">Experiência Profissional</h2>
        <div className = "Data">2010-2021</div>
        <div className = "Descricao">
        Vencedor do <em>Glory 14: Zagreb - Middleweight Contender Tournament</em> no dia 08 de Março de 2014.
        </div>
      </div>
    </div>
  );
}

export default App;
