function App(props) {
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            Tâches à faire
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Ajouter
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Afficher </span>
          <span>Toutes les</span>
          <span className="visually-hidden"> tâches</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Afficher </span>
          <span>les tâches</span>
          <span className="visually-hidden"> actives</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Afficher </span>
          <span>les tâches</span>
          <span className="visually-hidden"> complêtes</span>
        </button>
      </div>
      <h2 id="list-heading">3 tâches restantes</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked={true} />
            <label className="todo-label" htmlFor="todo-0">
              Balayer
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Editer <span className="visually-hidden">Balayer</span>
            </button>
            <button type="button" className="btn btn__danger">
              Supprimer <span className="visually-hidden">Balayer</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-1" type="checkbox" />
            <label className="todo-label" htmlFor="todo-1">
              Nettoyer
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Editer <span className="visually-hidden">Nettoyer</span>
            </button>
            <button type="button" className="btn btn__danger">
              Supprimer <span className="visually-hidden">Nettoyer</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-2" type="checkbox" />
            <label className="todo-label" htmlFor="todo-2">
            Répeter
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Editer <span className="visually-hidden">Répeter</span>
            </button>
            <button type="button" className="btn btn__danger">
              Supprimer <span className="visually-hidden">Répeter</span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
