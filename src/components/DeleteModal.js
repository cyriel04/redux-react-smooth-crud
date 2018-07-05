import React, { Component } from "react";
import { Modal } from "antd";

export default class DeleteModal extends Component {
  render() {
    return (
      <div>
        <Modal
          title={this.props.title}
          visible={this.props.visible}
          onOk={this.props.onOk}
          onCancel={this.props.onCancel}
        >
          Are you sure you want to delete {this.props.data.title}
        </Modal>
      </div>
    );
  }
}
