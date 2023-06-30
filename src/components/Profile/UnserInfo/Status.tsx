import React from 'react';
import style from "./UserInfo.module.css";


type StatusPropsType = {
  status: string
  changeProfileStatusTC: (status: string) => void
}

type StatusStateType = { editMode: boolean, status: string }

class Status extends React.Component<StatusPropsType, StatusStateType> {

  state = {
    editMode: false,
    status: this.props.status
  }


  activateEditMode = () => {
    this.setState({
      editMode: true,
    })
  }

  deActivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.changeProfileStatusTC(this.state.status)
  }

  changeStatusHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  render() {
    return <>
      <h4 style={{margin: '0'}}>Статус</h4>
      {!this.state.editMode
        ?
        <div onDoubleClick={this.activateEditMode} className={style.userItem}>{this.props.status}</div>
        :
        <input onChange={this.changeStatusHandler} autoFocus onBlur={this.deActivateEditMode} className={style.input}
               value={this.state.status}/>
      }
    </>
  }

}


export default Status




