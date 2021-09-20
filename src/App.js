import './App.css';
import PageOne from './Views/PageOne/PageOne'
import PageTwo from './Views/PageTwo/PageTwo';
import { useState, useEffect } from 'react';


function App(props) {

  const [scrollHeight, setScrollHeight] = useState(window.scrollY + window.innerHeight);

  // ComponentDidMount
  useEffect(() => {
    window.addEventListener('scroll', function windowScrollHeight() {
      setScrollHeight(window.scrollY + window.innerHeight);
      // ComponentWillUnmount
      return () => {
        window.removeEventListener('scroll', windowScrollHeight);
      }
    });
  }, []);
  return (
    <div className="App">
      {scrollHeight < 1500 && <PageOne />}
      {scrollHeight > 1400 && <PageTwo/>}
    </div>
  );

  // window.addEventListener('scroll', event => {
  //   const app = document.querySelector('App')
  //   if (checkScrollHeight() == 0) {
  //     return (
  //       <div className="App">
  //         <Header />
  //         <NavBar />
  //         <Switch>
  //           <Route
  //             path="/about" 
  //             component={AboutMe}
  //           />
  //           <Route
  //             path="/portfolio"
  //             component={Portfolio}
  //           />
  //           <Route
  //             path="/hobbies"
  //             component={Hobbies}
  //           />
  //           <Route
  //             path="/contact"
  //             component={Contact}
  //           />
  //           <Route
  //             path="/"
  //             component={LandingPage}
  //           />
  //         </Switch>
  //       </div>
  //     )
  //   } else if (checkScrollHeight() == 1) {
  //     const app = document.querySelector('App')
  //     return (
  //       React.Children.only({testExtraText})
  //     )
  //   }
  // })

  // return (
  //   <div className="App">
  //     <Header />
  //     <NavBar />
  //     <Switch>
  //       <Route
  //         path="/about" 
  //         component={AboutMe}
  //       />
  //       <Route
  //         path="/portfolio"
  //         component={Portfolio}
  //       />
  //       <Route
  //         path="/hobbies"
  //         component={Hobbies}
  //       />
  //       <Route
  //         path="/contact"
  //         component={Contact}
  //       />
  //       <Route
  //         path="/"
  //         component={LandingPage}
  //         // component={() => <LandingPage width={width} />}
  //       />
  //     </Switch>
  //   </div>
  // );
}

export default App;
