import './App.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="todolist">
          <h1>Todos</h1>
          <ul className="list-unstyled">
            <li className="ui-state-default">
              <div className="checkbox">
                <label>
                  <input type="checkbox" value=""/>MAD Lions
                </label>
              </div>
            </li>
            <li className="ui-state-default">
              <div className="checkbox">
                <label>
                  <input type="checkbox" value=""/>GAM
                </label>
              </div>
            </li>
            <li className="ui-state-default">
              <div className="checkbox">
                <label>
                  <input type="checkbox" value=""/>KT Rolster
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
