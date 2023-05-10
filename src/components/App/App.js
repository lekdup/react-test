import './App.scss';
import F0fimal from '../F0fimal/F0fimal';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Menu, Image, Icon } from 'semantic-ui-react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Test from '../Test/Test';

function App() {
  const [myGithub, setMyGithub] = useState([]);
  const [isActive, setIsActive] = useState('name');

  const handleItemClick = ({name}) => setIsActive({isActive: name})

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("https://api.github.com/search/repositories?q=lekdup");
        console.log(response.data.items[0].owner);
        setMyGithub(response.data.items[0].owner);
      }
      catch (err) {
        console.log('err');
      }
    })()
  }, []);

  console.log(myGithub.avatar_url);
  return (
    <div className="app">
      <Menu>
        <Menu.Item
          as={NavLink}
          to="/"
          name='home'
          active={isActive === 'home'}
          onClick={handleItemClick}
          >
          Home
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          to="/panda"
          name='panda'
          active={isActive === 'panda'}
          onClick={handleItemClick}
          >
          Panda
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          to="/test"
          name='test'
          active={isActive === 'test'}
          onClick={handleItemClick}
          >
          Test
        </Menu.Item>
      </Menu>
      

      <Routes>
        <Route
          path='/'
          element={
            <Link
              to={'https://github.com/lekdup'}
              target='blank'
            >
            <Card className='center-card'>
              <Image src={myGithub.avatar_url} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Tenzin</Card.Header>
                <Card.Meta>
                  <span className='date'>Was born in 1994</span>
                </Card.Meta>
                <Card.Description>I am a newbie Web Developer. Specialized in Front-End with React</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                  7 Friends
                </a>
              </Card.Content>
            </Card>
            </Link>
          }
        />
        <Route
          path='/panda'
          element={<F0fimal />}
        />
        <Route
          path='/test'
          element={<Test />}
        />
      </Routes>
    </div>
  );
}

export default App;
