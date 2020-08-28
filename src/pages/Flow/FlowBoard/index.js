import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BsPencil, BsThreeDots, BsPlus, BsTrash } from "react-icons/bs";

import "./styles.css";
import { Card, Modal, Form, Dropdown } from "react-bootstrap";
import CustomToggle from "./CustomToggle";

class FlowBoard extends Component {
  state = {
    cards: [
      {
        id: 1,
        name: "Card 1",
        description: "Teste de descrição 1",
        stateId: 1,
      },
      {
        id: 2,
        name: "Card 2",
        description: "Teste de descrição 2",
        stateId: 2,
      },
      {
        id: 3,
        name: "Card 3",
        description: "Teste de descrição 3",
        stateId: 2,
      },
      {
        id: 4,
        name: "Card 4",
        description: "Teste de descrição 4",
        stateId: 1,
      },
    ],
    states: [
      { id: 1, description: "Backlog" },
      { id: 2, description: "Doing" },
      { id: 3, description: "Testing" },
      { id: 4, description: "Complete" },
    ],
    modalState: {
      card: {},
      show: false,
      edit: false,
    },
  };

  componentDidMount() {
    this.onChangeCardState.bind(this);
  }

  openModal = (card, edit = false) => {
    this.setState({ modalState: { card: card, show: true, edit } });
  };

  closeModal = () => {
    this.setState({ modalState: { card: {}, show: false, edit: false } });
  };

  onSetCardEditionOn = () => {
    const { card, show } = this.state.modalState;
    this.setState({ modalState: { card, edit: true, show } });
  };

  buildCards = (cards) => {
    return (
      <>
        {cards.map((card) => (
          <Card className="card" onClick={() => this.openModal(card)}>
            <Card.Title className="card-title">{card.name}</Card.Title>
            <Card.Text  className="card-description">{card.description}</Card.Text>
            <Card.Text></Card.Text>
          </Card>
        ))}
      </>
    );
  };

  buildStates = () => {
    const { states, cards } = this.state;
    let lastState = states[states.length - 1];
    return (
      <>
        {states.map((state) => (
          <>
            <div id={state.id} className="state-column">
              <h3 className="state-title">{state.description}</h3>
              {this.buildCards(
                cards.filter((card) => card.stateId === state.id)
              )}
            </div>
            {state !== lastState && <div className="vertical-divider"></div>}
          </>
        ))}
      </>
    );
  };

  onChangeCardState = (event, card) => {
    event.persist();
    const { cards, modalState } = this.state;
    let newCards = cards.map((c) => {
      if (c.id === card.id) {
        return {
          id: card.id,
          name: card.name,
          description: card.description,
          stateId: parseInt(event.target.value),
        };
      } else {
        return c;
      }
    });
    this.setState({
      cards: newCards,
      modalState: {
        card: newCards.filter((cf) => cf.id === card.id)[0],
        edit: modalState.edit,
        show: true,
      },
    });
  };

  onDeleteCard = (card) => {
    const { cards } = this.state;
    let newCards = cards.filter((cd) => cd.id !== card.id);
    this.setState({ cards: newCards });
    this.closeModal()
  };

  onChangeCardDescription = (event, card) => {
    event.persist();
    const cards = this.state.cards;
    let newCards = cards;
    card.description = event.target.value;
    let isNewCard = cards.findIndex((cd) => card.id === cd.id);
    if (isNewCard === -1) {
      let newCard = {
        id: card.id,
        name: card.name,
        description: card.description,
        stateId: card.stateId,
      };
      cards.push(newCard);
    } else {
      newCards = cards.map((cd) => (cd.id === card.id ? card : cd));
    }
    this.setState({ cards: newCards });
  };

  onChangeCardName = (event, card) => {
    event.persist();
    const { cards } = this.state;
    let newCards = cards;
    card.name = event.target.value;
    let isNewCard = cards.findIndex((cd) => card.id === cd.id);
    if (isNewCard === -1) {
      let newCard = {
        id: card.id,
        name: card.name,
        description: card.description,
        stateId: card.stateId,
      };
      cards.push(newCard);
    } else {
      newCards = cards.map((cd) => (cd.id === card.id ? card : cd));
    }
    this.setState({ cards: newCards });
  };

  render() {
    const name = this.props.match.params.name;
    const { modalState, states } = this.state;
    return (
      <div class="container">
        <div class="custom-header">
          <p>
            <Link to="/flow/flowManagement"> Go back </Link>
          </p>
          <h1>{name}</h1>
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle}>
              <BsThreeDots size={40} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <div
                  className="edit-button"
                  onClick={() =>
                    this.openModal(
                      {
                        id: Math.random(),
                        name: "",
                        description: "",
                        stateId: 1,
                      },
                      true
                    )
                  }
                >
                  <BsPlus size={16} />
                  <span style={{ marginLeft: 8 }}>Create Card</span>
                </div>
              </Dropdown.Item>
              <Dropdown.Item>
                <div className="edit-button" onClick={() => {}}>
                  <BsPencil size={16} />
                  <span style={{ marginLeft: 8 }}>Edit Flow</span>
                </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="board-container">{this.buildStates()}</div>
        <Modal
          size="lg"
          centered
          show={modalState.show}
          onHide={() => this.closeModal()}
        >
          <Modal.Header>
            <Modal.Title style={{ color: "#343a40" }}>
              {!modalState.edit && modalState.card.name}
              {modalState.edit && (
                <Form.Control
                  value={modalState.card.name}
                  onChange={(event) =>
                    this.onChangeCardName(event, modalState.card)
                  }
                ></Form.Control>
              )}
            </Modal.Title>
            <Dropdown>
              <Dropdown.Toggle as={CustomToggle}>
                <BsThreeDots size={32} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <div
                    className="edit-button"
                    onClick={() => this.onSetCardEditionOn()}
                  >
                    <BsPencil size={16} />
                    <span style={{ marginLeft: 8 }}>Edit</span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item>
                  <div
                    className="edit-button"
                    onClick={() => this.onDeleteCard(modalState.card)}
                  >
                    <BsTrash color="#f04848" size={16} />
                    <span style={{ marginLeft: 8, color: "#f04848" }}>
                      Delete
                    </span>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Modal.Header>
          <Modal.Body>
            <Form.Label>Description</Form.Label>
            <Form.Control
              readOnly={!modalState.edit}
              as="textarea"
              value={modalState.card.description}
              onChange={(event) =>
                this.onChangeCardDescription(event, modalState.card)
              }
            ></Form.Control>
            <Form.Label>State</Form.Label>
            <Form.Control
              as="select"
              custom
              value={modalState.card.stateId}
              onChange={(event) => {
                this.onChangeCardState(event, modalState.card);
              }}
            >
              {states.map((state) => (
                <option value={state.id}>{state.description}</option>
              ))}
            </Form.Control>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default FlowBoard;
