import React, { useState } from 'react';
import './App.scss';
import TopNav from './components/TopNav';
import { Row, Container, Col } from 'react-bootstrap';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import sections from './model/initial-states';

const App = () => {

  const [boardSections, setBoardSections] = useState(sections);

  /**
   * To add a new action item to the appropriate board
   * @param {string} item     The action item to be added
   * @param {string} boardKey The key of the board map object to update
   */
  const addActionItemToBoard = (item, boardKey) => {
    if (boardSections.has(boardKey)) {
      let copyOfBoardSections = new Map(boardSections);
      let newObject = [...(copyOfBoardSections.get(boardKey).data), item];
      copyOfBoardSections.get(boardKey).data = newObject;
      setBoardSections(copyOfBoardSections);
    }
  };

  const updateActionItem = (boardKey, indexOfItemToUpdate, newItem) => {
    if (boardSections.has(boardKey)) {
      let copyOfBoardSections = new Map(boardSections);
      copyOfBoardSections.get(boardKey).data[indexOfItemToUpdate] = newItem;
      setBoardSections(copyOfBoardSections);
    }
  };

  /**
   * 
   * @param {string} boardKey       The key of the board map object to update
   * @param {*} indexOfItemToDelete The index of the action item to be deleted from the board
   */
  const deleteActionItem = (boardKey, indexOfItemToDelete) => {
    if (boardSections.has(boardKey)) {
      let copyOfBoardSections = new Map(boardSections);
      let newObject = copyOfBoardSections.get(boardKey).data.filter((data, index) => index !== indexOfItemToDelete);
      copyOfBoardSections.get(boardKey).data = newObject;
      setBoardSections(copyOfBoardSections);
    }
  };

  // TODO
  const toggleBoardStatus = (status, boardKey) => {

  };

  /////////////////

  let layout = [];
  boardSections.forEach((value, key) => {
    layout.push(
      <Col
        sm={6}
        key={value.id}
        className="p-3">
        <Layout
          board={value}
          boardKey={key}
          addActionItemToBoard={addActionItemToBoard}
          toggleBoardStatus={toggleBoardStatus}
          deleteActionItem={deleteActionItem}
          updateActionItem={updateActionItem}
        />
      </Col>
    )
  });

  return (
    <div className="App">
      <TopNav />
      <Container fluid>
        <Row>
          {layout.length && layout}
        </Row>
        <ScrollToTop />
      </Container>
    </div>
  );
};

export default App;
