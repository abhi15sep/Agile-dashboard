import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, Button } from 'react-bootstrap';
import ActionCard from './ActionCard';
import AddNewItem from './AddNewItem';

const Layout = (props) => {
  const {
    boardKey,
    board,
    addActionItemToBoard,
    toggleBoardStatus,
    updateActionItem,
    deleteActionItem
  } = props;

  // hooks
  const [showAddButton, setShowAddButton] = useState(true);
  const [boardActiveStatus, setBoardActiveStatus] = useState(true);

  /**
   * To toggle the visiblity of the Add new item button
   */
  const toggleAddButton = () => {
    setShowAddButton(() => !showAddButton);
  };

  /**
   * To add a new todo item to the list
   */
  const addNewItem = (itemToAdd) => {
    if (itemToAdd && itemToAdd.length > 0) {
      addActionItemToBoard(itemToAdd, boardKey);
      toggleAddButton();
    }
    return false;
  };

  /**
   * To add a new todo item to the list
   */
  const updateExistingItem = (index, item) => {
    if (item && item.length > 0) {
      updateActionItem(boardKey, index, item);
    }
    return false;
  };

  useEffect(() => {
    setBoardActiveStatus(board.active);
  }, [board]);

  return (
    <Row className="board-section p-3">
      <Col sm={12}>
        <p className="board-title">{board.name}</p>
      </Col>

      {!boardActiveStatus
        ? (
          <Col sm={12}>
            <p>This board has been deactivated</p>
            <Button variant="secondary" onClick={() => toggleBoardStatus(false)}>
              Click here to activate it.
            </Button>
          </Col>
        )
        : (
          <Col sm={showAddButton ? 4 : 6} className="board-section">
            <Card className="board-card dashed-border m-2" style={{ backgroundColor: board.color }}>
              <Card.Body className={showAddButton ? "center-h-v" : ""}>
                {showAddButton
                  ? (
                    <Button variant="link" onClick={() => toggleAddButton()}>
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </Button>
                  )
                  : (
                    <AddNewItem
                      callBackToggleMethod={toggleAddButton}
                      callBackActionMethod={addNewItem}
                    />
                  )
                }
              </Card.Body>
            </Card>
          </Col>
        )
      }

      {(board.data.length > 0) && (
        board.data.map((item, index) => (
          <Col sm={4} key={`task-${index}`} className="board-section">
            <ActionCard
              content={item}
              color={board.color}
              index={index}
              updateExistingItem={updateExistingItem}
              deleteActionItem={deleteActionItem}
              boardKey={boardKey}
            />
          </Col>
        ))
      )}
    </Row>
  )
};

Layout.propTypes = {
  board: PropTypes.object.isRequired,
  addActionItemToBoard: PropTypes.func.isRequired,
  boardKey: PropTypes.string.isRequired,
  toggleBoardStatus: PropTypes.func.isRequired,
  deleteActionItem: PropTypes.func.isRequired,
  updateActionItem: PropTypes.func.isRequired
};

export default Layout;
