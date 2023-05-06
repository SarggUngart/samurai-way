import React from "react";
import {ActionsType} from "../redux/stateTypes";
import {Store} from "redux";
import {ReduxStateType} from "../redux/redux-store";

export const StoreContext = React.createContext({} as Store<ReduxStateType, ActionsType>)

export type ProviderType = {
  store: Store
  children: React.ReactNode
}

export const Provider = (props: ProviderType) => {
  return (
    <StoreContext.Provider value={props.store}>
      {props.children}
    </StoreContext.Provider>
  )
}
