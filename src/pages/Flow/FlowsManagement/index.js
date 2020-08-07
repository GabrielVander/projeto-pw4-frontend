import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  BsChevronRight,
  BsPlusCircle,
  BsTrash,
  BsPencil,
} from "react-icons/bs";
import "./styles.css";

const FlowAction = {
  idle: "idle",
  edit: "edit",
};

class FlowManagement extends Component {
  state = {
    action: FlowAction.idle,
  };

  buildFlowsCards = (flows) => {
    const history = this.props.history
    const { action } = this.state;
    return (
      <div>
        {flows.map((flow) => (
          <Card style={{ marginBottom: 8 }}  onClick={() => history.push(`/flow/flowBoard/${flow.name}`)}>
            <Card.Body>
              <div class="flowCard">
                <span class="flowTitle">{flow.name}</span>
                {action === FlowAction.idle && <BsChevronRight size={40} />}
                {action === FlowAction.edit && (
                  <BsTrash color="#f04848" size={24} />
                )}
              </div>
            </Card.Body>
          </Card>
        ))}
        <Card style={{ marginBottom: 8 }}>
          <Card.Body>
            <BsPlusCircle size={40} />
          </Card.Body>
        </Card>
      </div>
    );
  };

  render() {
    const { action } = this.state;
    const flows = [
      { name: "Flow 1" },
      { name: "Flow 2" },
      { name: "Flow 3" },
      { name: "Flow 4" },
    ];
    return (
      <div class="container">
        <div class="header">
          <p>
            <Link to="/dashboard"> Go back </Link>
          </p>
          <h2>Flow Management</h2>
          {action === FlowAction.idle && (
            <div
              class="edit-button"
              onClick={() => this.setState({ action: FlowAction.edit })}
            >
              <span style={{ marginRight: 8 }}>Edit</span>
              <BsPencil size={18} />
            </div>
          )}
          {action === FlowAction.edit && (
            <div
              class="edit-button"
              onClick={() => this.setState({ action: FlowAction.idle })}
            >
              <span style={{ color: "#f04848" }}>Cancel</span>
            </div>
          )}
        </div>
        {this.buildFlowsCards(flows)}
      </div>
    );
  }
}

export default FlowManagement;
