import './App.css';
import { Container, Typography, Link } from '@material-ui/core';
import FlockingGui from './components/FlockingGui.tsx';

function App() {
  return (
    <div>
      <Container className="App">
        <header className="App-header">
          <Typography variant='h1'>
            Flocking Simulator
          </Typography>
          <FlockingGui/>
        </header>
      </Container>
      <div id="footer">
        <Container maxWidth="lg" className="App">
          {/* <p id="footertext">
            Created by <span style={{fontWeight: ""}}>Ethan Lao</span> | LinkedIn | GitHub
          </p>   */}
          <Typography variant="overline">
            Created by Ethan Lao | <Link color="inherit" href="https://www.linkedin.com/in/ethan-lao/" underline="hover">LinkedIn</Link> | <Link color="inherit" href="https://github.com/ethan-lao/FlockingSimulator" underline="hover">Github</Link>
          </Typography>
        </Container>  
      </div>
    </div>
  );
}

export default App;
