import './App.css';

function App() {
  let items = [
    {
      text: 'GAMTIME',
      status: false
    },
    {
      text: 'T1',
      status: true
    },
    {
      text: 'KT',
      status: false
    }
  ];

  let title = 'things to do';

  return (
    <div className="container">
      <div className="row">
        <div className="todolist">
          <h1>{title.toUpperCase()}</h1>
          <ul className="list-unstyled">
            {items.map(item => (
              <li className="ui-state-default">
                <div className="checkbox">
                  <label>
                    <input type="checkbox" value=""/>{item.text}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
