import React, { Component } from "react";
import { Modal, Input } from "antd";
export default class UpdateModal extends Component {
  state = {
    title: "",
    desc: ""
  };
  // after receiving props set it to state within the components
  UNSAFE_componentWillReceiveProps(props) {
    this.setState({
      id: props.data.id,
      key: props.data.id,
      title: props.data.title,
      desc: props.data.desc
    });
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  };
  sampleFunc = () => {
    const data = {
      id: this.state.id,
      key: this.state.id,
      title: this.state.title,
      desc: this.state.desc
    };
    this.props.onOk(data);
  };

  render() {
    return (
      <div>
        <Modal
          title={this.props.title}
          visible={this.props.visible}
          onOk={this.sampleFunc}
          onCancel={this.props.onCancel}
        >
          <Input
            name="title"
            placeholder="Title"
            type="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <Input
            name="desc"
            placeholder="Description"
            type="desc"
            value={this.state.desc}
            onChange={this.handleChange}
          />
        </Modal>
      </div>
    );
  }
}
