import '../App.css';
import TodoList from './TodoList';

function App() {
  let items = [
    {
      id: 1,
      text: 'GAMTIME',
      status: false
    },
    {
      id: 2,
      text: 'T1',
      status: true
    },
    {
      id: 3,
      text: 'KT',
      status: false
    }
  ];

  let title = 'things to do';

  return (
    <div className="container">
      <div className="row">
        <TodoList title={title} items={items}/>
      </div>
    </div>
  );
}

export default App;
