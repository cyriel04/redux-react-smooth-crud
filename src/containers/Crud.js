import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Table, Button, Divider } from "antd";
import { bindActionCreators } from "redux";
import axios from "axios";
import { startApp, addItem, editItem, deleteItem } from "../actions/index";
import DeleteModal from "../components/DeleteModal";
import AddModal from "../components/AddModal";
import UpdateModal from "../components/UpdateModal";
const { Column } = Table;

export class Crud extends Component {
  state = {
    visible: false,
    edit: false,
    delete: false,
    data: {}
  };

  UNSAFE_componentWillMount() {
    axios("http://localhost:3000/posts").then(resp => {
      const data = resp.data.map(a => ({
        key: a.id,
        id: a.id,
        title: a.title,
        desc: a.desc
      }));
      this.props.startApp(data);
    });
  }

  //for add
  showAddModal = () => {
    this.setState({
      visible: true
    });
  };
  addModalOk = async data => {
    let cd = await axios.post("http://localhost:3000/posts", data);
    data.id = cd.data.id;
    data.key = cd.data.id;
    this.setState({
      data
    });
    this.setState({
      visible: false
    });
    await this.props.addItem(this.state.data);
  };
  addModalCancel = () => {
    this.setState({
      visible: false
    });
  };

  //for update
  editModalOk = data => {
    this.setState({
      edit: false
    });
    this.props.editItem(data);
  };
  editModalCancel = data => {
    this.setState({
      edit: false
    });
  };

  //for delete
  deleteModalCancel = () => {
    this.setState({
      delete: false
    });
  };

  deleteModalOk = data => {
    this.setState({
      delete: false
    });
    this.props.deleteItem(data);
    axios.delete(`http://localhost:3000/posts/${data.id}`);
  };

  render() {
    return (
      <div>
        <div
          style={{ display: "flex", justifyContent: "center", paddingTop: 100 }}
        >
          <Table dataSource={this.props.start}>
            <Column title="Name" width={140} key="title" dataIndex="title" />
            <Column
              title="Description"
              width={200}
              key="desc"
              dataIndex="desc"
            />
            <Column
              title="Actions"
              width={140}
              render={data => (
                <span style={{ display: "flex" }}>
                  <Button
                    onClick={() => this.setState({ data: data, edit: true })}
                  >
                    Edit
                  </Button>
                  <Divider />
                  <Button
                    type="primary"
                    onClick={() => this.setState({ data: data, delete: true })}
                  >
                    Delete
                  </Button>
                </span>
              )}
            />
          </Table>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", paddingTop: 50 }}
        >
          <Button type="primary" onClick={this.showAddModal}>
            Add
          </Button>
        </div>

        {/* add modal */}
        <AddModal
          title="Add item"
          visible={this.state.visible}
          onOk={this.addModalOk}
          onCancel={this.addModalCancel}
        />

        {/* delete modal */}
        <DeleteModal
          title="Delete item"
          data={this.state.data}
          visible={this.state.delete}
          onOk={data => this.deleteModalOk(this.state.data)}
          onCancel={this.deleteModalCancel}
        />

        {/* update modal */}
        <UpdateModal
          title="Update item"
          data={this.state.data}
          visible={this.state.edit}
          onOk={this.editModalOk}
          onCancel={this.editModalCancel}
        />
      </div>
    );
  }
}

Crud.propTypes = {
  startApp: PropTypes.func,
  addItem: PropTypes.func,
  deleteItem: PropTypes.func
};

function mapStateToProps(state) {
  return {
    start: state.start
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      startApp: data => startApp(data),
      addItem: data => addItem(data),
      editItem: data => editItem(data),
      deleteItem: data => deleteItem(data)
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Crud);
