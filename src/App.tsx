import './styles/index.scss'
import Button, {ButtonType, ButtonSize} from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button> Hello </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Hello </Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled> Baidu Link </Button>
      </header>
    </div>
  );
}

export default App;
