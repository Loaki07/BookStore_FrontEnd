import Routes from './Routes';
import { BookStoreProvider } from './context-api/BookStoreContext';

function App() {
  return (
    <BookStoreProvider>
      <div className="App">
        <Routes />
      </div>
    </BookStoreProvider>
  );
}

export default App;
