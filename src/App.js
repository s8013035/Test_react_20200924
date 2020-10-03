import React from 'react';
import Wrapper from "./components/Wrapper"
import Main from "./components/Main"
import Blog from "./blog"

const App = () => {
  return (
    <>
      <Wrapper>
        <Main />
      </Wrapper>
      <Blog />
    </>
  )
}

export default App