import React from 'react';
import style from "./UserInfo.module.css";


type StatusPropsType = {
  status: string
  updateStatus: (status: string) => void
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

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status)
  }

  changeStatusHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  changeStatusKeyHandler = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if(e.code === 'Enter' || e.code === 'NumpadEnter'){
      this.deactivateEditMode()
    }
  }

  componentDidUpdate(prevProps: Readonly<StatusPropsType>, prevState: Readonly<StatusStateType>, snapshot?: any) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return <>
      <h4 style={{margin: '0'}}>Статус</h4>
      {!this.state.editMode
        ?
        <div onDoubleClick={this.activateEditMode} className={style.userItem}>{this.state.status}</div>
        :
        <input onChange={this.changeStatusHandler} onKeyPress={this.changeStatusKeyHandler} autoFocus onBlur={this.deactivateEditMode} className={style.input}
               value={this.state.status}/>
      }
    </>
  }

}


export default Status




