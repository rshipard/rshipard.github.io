import './App.css';
import PageOne from './Views/PageOne/PageOne'
import PageTwo from './Views/PageTwo/PageTwo'
import PageThree from './Views/PageThree/PageThree'
import { useState, useEffect } from 'react'
import FinalPage from './Views/Final/FinalPage'


function App(props) {

  const [scrollHeight, setScrollHeight] = useState(window.scrollY + window.innerHeight);

  // ComponentDidMount
  useEffect(() => {
    window.addEventListener('scroll', function windowScrollHeight() {
      setScrollHeight(window.scrollY + window.innerHeight);
      console.log(scrollHeight)
      // ComponentWillUnmount
      return () => {
        window.removeEventListener('scroll', windowScrollHeight);
      }
    });
  }, []);
  return (
    <div className="App">
      {/* {scrollHeight < 1829 && <PageOne />}
      {scrollHeight > 1800 && <PageTwo/>}
      {scrollHeight > 2353 && <PageThree/>}
      {scrollHeight > 4000 && <FinalPage/>} */}
      <FinalPage/>
    </div>
  );

}

export default App;
