import './App.css';
import Header from './Header';
import Aside from './Aside';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <html>
      <body>
        <Header 
          menu = "sim"
        />

        <Aside />
        <Main />
        <Footer 
          insta = "@marcosamiguel"
          whats = "32 98401-5080"
        />
      
     
    {/*    <div class="row">
          <div class="col-1g-12 header">
            <Header />
          </div>
        </div>
        <div class="row" >
          <div class="col-1g-4 menu">
            <Aside />
          </div>
          <div class="col-1g-8 content">
            <Main />
          </div>
        </div>
        <div class="row">
          <div class="col-1g-4 footer">
            < Footer />
          </div>
        </div>
   */}

      </body>
    </html >
  );
}

export default App;
