import React, {useState, useEffect, useCallback} from 'react'
import axios from 'axios'
import { TailSpin } from 'react-loader-spinner';
import {Container, Row, Pagination } from 'react-bootstrap';
import { Background, Title, ErrorMessage } from '../../GlobalStyles'
import { Wrapper, StyledPagination } from './styledComponents';
import {colors} from '../../styles/theme'

import UserCard from '../../components/UserCard';

const apiStatus = {
  INITIAL: 'initial',
  LOADING: 'loading',
  SUCCESS: 'success',
  FAILURE: 'failure',
}
const DEFAULT_CURRENT_PAGE = 1;
const DEFAULT_TOTAL_PAGE = 1;

export const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(DEFAULT_CURRENT_PAGE);
  const [totalPages, setTotalPages] = useState(DEFAULT_TOTAL_PAGE);
  const [apiState, setApiState] = useState(apiStatus.INITIAL);
  const [error, setError] = useState('');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const fetchUsers = useCallback(async () => {
    setApiState(apiStatus.LOADING);
    setError('');
    try {
      const response = await axios.get(`https://reqres.in/api/users?page=${currentPage || DEFAULT_CURRENT_PAGE}`);
      if (response.data.data.length === 0) {
        throw new Error('No users found.');
      }
      setUsers(response.data.data);
      setTotalPages(response.data.total_pages);
      setApiState(apiStatus.SUCCESS);
    } catch (err) {
      setUsers([]);
      setTotalPages(DEFAULT_TOTAL_PAGE);
      setApiState(apiStatus.FAILURE);
      setError('Failed to fetch users. Please try again later.');
      setCurrentPage(DEFAULT_CURRENT_PAGE);
    }
  }, [currentPage]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const renderLoader = () => (

    <TailSpin
      visible={apiState === apiStatus.LOADING}
      height="60"
      width="60"
      color={colors.dark}
      ariaLabel="tail-spin-loading"
      radius={0}
    />
  )

  const renderUsers = () => (
    <>
    <Wrapper>
      <Title size='2rem' color={colors.dark}>Users</Title>

      <Container fluid className='flex-grow-1 my-4'>      
        <Row style={{maxWidth: '1500px'}}>
          {users.map((user) => (
            <UserCard key={user.id} user={user} fetchUsers={fetchUsers} />
          ))}
        </Row>
      </Container>

      <StyledPagination>
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </StyledPagination>
      </Wrapper>
      </>
  )

  const renderError = () => (
    <ErrorMessage>
      {error}
    </ErrorMessage>
  );

  const renderContent = () => {
    switch (apiState) {
      case apiStatus.LOADING:
        return renderLoader();
      case apiStatus.SUCCESS:
        return renderUsers();
      case apiStatus.FAILURE:
        return renderError();
      default:
        return null;
    }
  }

  return (
    <Background>
      {renderContent()}
    </Background>
  );
};

export default UsersList;
