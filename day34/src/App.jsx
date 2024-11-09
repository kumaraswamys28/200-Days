import Content from './component/Content';
import Header from './component/Header';
import { ThemeProvider } from './component/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <Content />
      </div>
    </ThemeProvider>
  );
}

export default App;
