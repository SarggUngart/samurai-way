import React from 'react';
import style from "./UserInfo.module.css";


type StatusPropsType = {
  about: string
}


class Status extends React.Component<StatusPropsType, { editMode: boolean }> {

  state = {
    editMode: false
  }

  activateEditMode() {
    this.setState({
      editMode: true
    })
  }

  deActivateEditMode() {
    this.setState({
      editMode: false
    })
  }


  render() {
    return <>
      <h4 style={{margin: '0'}}>Статус</h4>
      {!this.state.editMode
        ?
        <div onDoubleClick={this.activateEditMode.bind(this)} className={style.userItem}>{this.props.about}</div>
        :
        <input autoFocus onBlur={this.deActivateEditMode.bind(this)} className={style.input} value={this.props.about}/>
      }
    </>
  }

}


export default Status




