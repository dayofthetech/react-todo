import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Container } from './components/styles/Container.styled'
import GlobalStyles from './components/styles/Global';
import {ThemeProvider} from "styled-components";
import Header from './components/Header';
import Footer from './components/Footer';
import TodoContainer from './components/TodoContainer';


const theme = {
  colors: {
    header: '#ebfbff',
    body: '#ebfbff',
    footer: '#003333',
  },
  mobile: '768',
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />
            <Header />
            <Container>
              <TodoContainer />
            </Container>
            <Footer />
          </>
          </ThemeProvider>
        }/>
      <Route path='/new' element={<h1>New Todo List</h1>}/>
      </Routes>
    </BrowserRouter>
  )
  }

  export default App;