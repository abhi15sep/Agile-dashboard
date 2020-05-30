import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import AddNewItem from './AddNewItem';

const ActionCard = ({ content, color, updateExistingItem, index, boardKey, deleteActionItem }) => {
  const characterLimit = 100;
  const [editActionItem, setEditActionItem] = useState(false);

  /**
   * Toggle the view for editing an action item
   */
  const toggleEditButton = () => {
    setEditActionItem(() => !editActionItem);
  };

  /**
   * Intermediate method only to toggle the view
   * @param  {...any} args Whatever the props, just send it ahead
   */
  const updateExistingItemIntermediate = (...args) => {
    toggleEditButton();
    updateExistingItem(...args);
  };

  return (
    <Card className="board-card m-2" style={{ backgroundColor: color }}>

      {editActionItem
        ? (
          <AddNewItem
            callBackToggleMethod={toggleEditButton}
            callBackActionMethod={updateExistingItemIntermediate}
            indexOfThisItem={index}
            item={content}
          />
        )
        : (
          <Card.Body className="actionItem">
            <i
              className="fa fa-times action-items"
              aria-hidden="true"
              onClick={() => deleteActionItem(boardKey, index)}
            />
            <i aria-hidden="true"></i>
            <i
              className="fa fa-pencil action-items mr-4"
              aria-hidden="true"
              onClick={() => toggleEditButton()}
            />
            <Card.Text className="pt-3" title={content}>
              {content.length > characterLimit
                ? `${content.substring(0, characterLimit)}...`
                : content
              }
            </Card.Text>
          </Card.Body>
        )
      }
    </Card>
  );
};

ActionCard.defaultProps = {
  color: "#2d3035"
};

ActionCard.propTypes = {
  content: PropTypes.string.isRequired,
  color: PropTypes.string,
  updateExistingItem: PropTypes.func,
  deleteActionItem: PropTypes.func,
  index: PropTypes.number.isRequired,
  boardKey: PropTypes.string.isRequired
};

export default ActionCard;
