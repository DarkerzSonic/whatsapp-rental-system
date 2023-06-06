import './App.css';

import Container from '@mui/material/Container';


import Title from './components/Title.jsx';
import Form from './components/Form';

function App() {
  return (
    <Container maxWidth="xs" style={{ backgroundColor: "white", paddingTop: "5px", paddingBottom: "10px" }} sx={{ borderRadius: 2 }}>
      <Title />
      <Form/>
    </Container>
  )
}

export default App;
