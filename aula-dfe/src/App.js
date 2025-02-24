import logo from './poatan.png';
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

      <hr className = "Barra"></hr>
        <h2 className = "DivTitulo">Resumo</h2>
        <p className = "Resumo">
          Atual campeão da divisão meio-médio do UFC e ex-campeão da divisão média, faixa preta em Kickboxing e Jiu-jitsu brasileiro. Defendi meu cinturão de oponentes mais ágeis 5 vezes, todas com nocautes e nocautes técnicos. Atualmente 3º colocado nos top 15 Pound-for-Pound, classificação que determina o sucesso e desempenho dos lutadores da organização como um todo, sem considerar pesagem. <br />
          <br />
          No meu cartel de lutas tenho um total de 28 no boxing amador, com apenas 3 derrotas, 1 no MMA e 2 no Kickboxing. Sou conhecido por ser um lutador agressivo e com um estilo de luta que mistura o Kickboxing com o Jiu-jitsu brasileiro, o que me rendeu o apelido de "Poatan", mão de pedra em Tupi.<br />
          <br />
          Também tenho experiência como servente de pedreiro e borracheiro, o que me ajudou a desenvolver força e resistência física, além de ter me ensinado a importância do trabalho duro e da disciplina.
        </p>

      <hr className = "Barra"></hr>
      <h2 className = "DivTitulo">Experiência Profissional</h2>
      <div className = "Experiencia">
        <div className = "Data">
          2010 - 2021
        </div>
        <div className = "Descricao">
          <strong>Kickboxer Profissional</strong><br />
          Semifinal do <em>Glory 14: Zagreb - Middleweight Contender Tournament</em><br />
        </div>
        </div>
    </div>
  );
}

export default App;
