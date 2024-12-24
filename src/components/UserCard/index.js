import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { UserProfileCard, CardImg, CardTitle, CardText, IconsContainer } from './styledComponents';
import { IconButton } from '../../GlobalStyles';
import { colors } from '../../styles/theme';

const UserCard = (props) => {
  const { user, fetchUsers } = props;

  const [disableDelete, setDisableDelete] = useState(false);

  const deleteUser = async (id) => {
    setDisableDelete(true);
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`);
      fetchUsers();
    } catch (err) {
      setDisableDelete(false);
    }
  }
  
  const handleDelete = () => {
    deleteUser(user.id);
  }

  return (
    <Col xs={12} md={6} xl={4} className='my-3'>
      <UserProfileCard disabled={disableDelete}>
        <CardImg src={user.avatar} alt="Profile image" />
        <Card.Body>
          <CardTitle>{user.first_name} {user.last_name}</CardTitle>
          <CardText>{user.email}</CardText>
          <IconsContainer>
            <Link to={'/edit-user/'+user.id}>
              <IconButton disabled={disableDelete}><FontAwesomeIcon icon={faPenToSquare} color={colors.primary} /></IconButton>
            </Link>
            <IconButton disabled={disableDelete} onClick={handleDelete} className='ms-3'><FontAwesomeIcon icon={faTrash} color={colors.primary} /></IconButton>
          </IconsContainer>
        </Card.Body>
      </UserProfileCard>
    </Col>
  )
}

export default UserCard