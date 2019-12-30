import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Button, Divider } from 'semantic-ui-react';
import api from '../../services/api';

// Global
import {
  Content,
  Card,
  Top,
  Title,
  CenterContent,
  Item,
  ItemLeft,
  ItemRight
} from '../../global/styles.global';

// Home
import {
  HomeContainer,
  Logo,
  TopContent,
  UserImage

} from './styles';


const Home = () => {
  const [user, setUser] = React.useState('');
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const storage = localStorage.getItem("@users");

    if (storage !== null) {
      setUsers(JSON.parse(storage));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("@users", JSON.stringify(users));
  }, [users]);

    const handleInput = (ev) => {
      setUser(ev.target.value)
    }

    const handleSubmit = async () => {

      try {
        const response = await api.get(`/users/${user}`);

        setUsers([...users, response.data]);
        localStorage.setItem('@users', JSON.stringify([...users, response.data]));
        setUser("")

        console.log(response);
      } catch (error) {
        console.log(error.response);
      }
    }
  return (
    <Content>
      <HomeContainer>
        <Card>
          <Top>
            <Logo src="https://image.flaticon.com/icons/png/512/270/270798.png" />
            <TopContent>
            <Input
              placeholder="Buscar repositorio"
              style={{
                width: "50%"
              }}
              onChange={handleInput}
              value={user}
            />
            <Button
              content="Buscar"
              color="blue"
              style={{
                marginLeft: 10
              }}
              onClick={handleSubmit}
            />
          </TopContent>
          </Top>
          <Divider />
          <CenterContent>
            {users.map((item, key) => {
              console.log(item)
              return (
                <Item key={key}>
                  <ItemLeft>
                    <UserImage src={item.avatar_url} />
                    <Title>{item.login}</Title>
                  </ItemLeft>
                  <ItemRight>
                    <Link to={`/repositories/${item.login}`}>
                      <Button
                        content="Repositorios"
                        color="blue"
                      />
                    </Link>
                  </ItemRight>
                </Item>
              )
            })}
          </CenterContent>
        </Card>
      </HomeContainer>
    </Content>
  );
}

export default Home;
