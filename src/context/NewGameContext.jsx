import { createContext, useContext, useReducer } from "react";

const NewGameContext = createContext(null);

const NewGameDispatchContext = createContext(null);

const newGameReducer = (state, action) => {
  switch (action.type) {
    case "GETDATA": {
      return {
        ...state,
        game: action.payload.game,
      };
    }
    default: {
      throw new Error("Unknown action: " + action.type);
    }
  }
};


export function NewGameProvider({ children }) {
  const [newGame, dispatch] = useReducer(newGameReducer, {
    game: [],
  });

  return (
    <NewGameContext.Provider value={newGame}>
      <NewGameDispatchContext.Provider value={dispatch}>
        {children}
      </NewGameDispatchContext.Provider>
    </NewGameContext.Provider>
  );
}

export function useNewGame() {
  return useContext(NewGameContext);
}

export function useNewGameDispatch() {
  return useContext(NewGameDispatchContext);
}
