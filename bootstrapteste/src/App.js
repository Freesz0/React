import logo from './foto.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function App() {
  return (
    <div className = "App">
      <header className = "App-header">
        <img src={logo} className="Foto" alt="foto" />
        <div className = "Texto"><h1 className="Nome">
          Alex Sandro Silva Pereira
        </h1>
        <p className = "Contato">
          Lorem ipsum
        </p>
        </div>
      </header>

      <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Resumo">
      Sou um atleta de alto rendimento com experiência em diversas modalidades de luta. Obtive sucesso tanto no kickboxing quanto no MMA, conquistando títulos importantes e demonstrando minha paixão e dedicação ao esporte. Sou um profissional dedicado, comprometido e focado em alcançar meus objetivos. Estou em busca de novos desafios e oportunidades para continuar crescendo e me desenvolvendo como atleta e pessoa.
      </Tab>
      <Tab eventKey="profile" title="Experiência Profissional">
      <div className = "Experiencia">
        <div className = "Data">
          Antes de 2015
        </div>
        <div className = "Descricao">
          • Servente de pedreiro.<br />
          • Borracheiro. 
        </div>

        <div className = "Data">
          2015 - Presente
        </div>
          <div className = "Descricao">
          <strong>Artes Marciais Mistas</strong><br />
          • Início da carreira profissional no MMA.<br />
          • Lutador do Ano de 2017.<br />
          • Ex-Campeão Peso-Médio do UFC em 2022.<br />
          • Campeão meio-pesado do UFC em 2023.<br />
          • Lutador do Ano de 2023.
        </div>

        <div className = "Data">
          2012 - 2021
        </div>
        <div className = "Descricao">
          <strong>Kickboxing</strong><br />
          • Campeão meio-pesado do em 2017.<br />
          • Campeão médio do em 2018.<br />
          • Duplo campeão mundial pelo Glory.
        </div>
      
      </div>
      </Tab>
      <Tab eventKey="longer-tab" title="Formação Acadêmica">
      <div className = "Formacao">
        <div className = "Data">
          2024
        </div>
        <div className = "Descricao">
          <strong>Faixa Preta em Jiu Jitsu Brasileiro</strong><br />
          UFC 300 - Las Vegas, Nevada
        </div>

        <div className = "Data">
          -
        </div>
        <div className = "Descricao">
          <strong>Faixa Preta em Kickboxing</strong>
        </div>

        <div className = "Data">
          -
        </div>
        <div className = "Descricao">
          <strong>Ensino Fundamental completo</strong>
        </div>
      </div>
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
    </div>
  );
}

export default App;
