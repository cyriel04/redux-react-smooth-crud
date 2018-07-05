import React, { Component } from "react";
import { Modal, Input } from "antd";
export default class AddModal extends Component {
  state = {
    title: "",
    desc: ""
  };
  // after receiving props set it to state within the components
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  sampleFunc = () => {
    const data = {
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
