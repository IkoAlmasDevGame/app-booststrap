import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/NavigationBar';
import Intro from './Components/Intro';
import LatestNews from './Components/Latest';
import OldNews from './Components/Old';

import './style/styleComponents.css';

function App() {
  return (
    <div>
      <div className='MyBG'>
        <NavigationBar />
        <Intro />
      </div>
      <div className='MyLatest'>
        <LatestNews />
      </div>
      <div className='MyOld'>
        <OldNews />
      </div>
    </div>
  );
}

export default App;
