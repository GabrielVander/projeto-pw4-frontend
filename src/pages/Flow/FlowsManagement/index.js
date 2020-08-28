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
    flows: [
      { id: 1, name: "Flow 1" },
      { id: 2, name: "Flow 2" },
      { id: 3, name: "Flow 3" },
      { id: 4, name: "Flow 4" },
    ],
    action: FlowAction.idle,
  };

  buildFlowsCards = (flows) => {
    const history = this.props.history;
    const { action } = this.state;
    return (
      <div>
        {flows.map((flow) => (
          <Card style={{ marginBottom: 8 }}>
            <Card.Body>
              <div className="flowCard">
                <p
                  className="flowTitle"
                  onClick={() => history.push(`/flow/flowBoard/${flow.name}`)}
                >
                  {flow.name}
                </p>
                {action === FlowAction.idle && (
                   <button
                   class="btn outline-warning"
                   onClick={() => history.push(`/flow/flowBoard/${flow.name}`)}
                 ><BsChevronRight size={40} color="#343a40" />
                 </button>
                )}
                {action === FlowAction.edit && (
                  <button
                    class="btn outline-warning"
                    onClick={() => this.onDeleteFlow(flow)}
                  >
                    <BsTrash color="#f04848" size={32} />
                  </button>
                )}
              </div>
            </Card.Body>
          </Card>
        ))}
        <Card className="addFlowCard">
          <Card.Body>
            <BsPlusCircle color="#343a40" size={40} />
          </Card.Body>
        </Card>
      </div>
    );
  };

  onDeleteFlow = (flow) => {
    const { flows } = this.state;
    let newFlows = flows.filter((flw) => flw.id !== flow.id);
    this.setState({ flows: newFlows });
  };

  render() {
    const { action, flows } = this.state;
    return (
      <div className="container">
        <div className="custom-header">
          <p>
            <Link to="/dashboard"> Go back </Link>
          </p>
          <h2>Flow Management</h2>
          {action === FlowAction.idle && (
            <div
              className="edit-button"
              onClick={() => this.setState({ action: FlowAction.edit })}
            >
              <span style={{ marginRight: 8 }}>Edit</span>
              <BsPencil size={18} />
            </div>
          )}
          {action === FlowAction.edit && (
            <div
              className="edit-button"
              onClick={() => this.setState({ action: FlowAction.idle })}
            >
              <span style={{ color: "#f04848" }}>Cancel</span>
            </div>
          )}
        </div>
        {flows && this.buildFlowsCards(flows)}
        {flows == null && <span>Loading...</span>}
      </div>
    );
  }
}

export default FlowManagement;
