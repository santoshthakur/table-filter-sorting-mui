import { Container, Typography, Button, Rating } from '@mui/material';
import TableData from './TableData';
import Header from './Header';

function App() {


  return (
    <>
  <Container sx={{ textAlign: 'center'}}>
    <Header />
    <TableData />


    {/* <Ratting /> */}
    </Container>
    </>
  )
}

export default App
