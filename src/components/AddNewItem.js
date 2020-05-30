import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';

const AddNewItem = ({ callBackActionMethod, callBackToggleMethod, indexOfThisItem, item }) => {

  const [itemToAdd, setItemToAdd] = useState('');

  const toggle = () => {
    setItemToAdd('');
    callBackToggleMethod();
  };

  useEffect(() => {
    if (item) {
      setItemToAdd(item);
    }
  }, [item])

  return (
    <>
      <Form.Group controlId="formAddTask">
        <Form.Control
          autoFocus
          placeholder="Enter a new task"
          value={itemToAdd}
          onChange={e => setItemToAdd(e.target.value)}
        />
      </Form.Group>
      <div className="float-right">
        {item
          ? <Button variant="primary" onClick={() => callBackActionMethod(indexOfThisItem, itemToAdd)}>Update</Button>
          : <Button variant="primary" onClick={() => callBackActionMethod(itemToAdd)}>Save</Button>
        }
        <Button className="ml-3" variant="secondary" onClick={() => toggle()}>Cancel</Button>
      </div>
    </>
  );
};

AddNewItem.defaultProps = {
  indexOfThisItem: null
};

AddNewItem.propTypes = {
  callBackActionMethod: PropTypes.func.isRequired,
  callBackToggleMethod: PropTypes.func.isRequired,
  indexOfThisItem: PropTypes.number,
  item: PropTypes.string
};

export default AddNewItem;
