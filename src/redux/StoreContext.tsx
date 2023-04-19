import React from "react";
import {ActionsType} from "./state";
import {Store} from "redux";
import {ReduxStateType} from "./redux-store";

export const StoreContext = React.createContext({} as Store<ReduxStateType, ActionsType>)

export type ProviderType = {
  reduxStore: Store
  children: React.ReactNode
}

export const Provider = (props: ProviderType) => {
  return (
    <StoreContext.Provider value={props.reduxStore}>
      {props.children}
    </StoreContext.Provider>
  )
}


export default StoreContext