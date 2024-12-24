import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Spinner } from "react-bootstrap";
import { Background, StyledCard, Title, StyledButton, ErrorMessage } from "../../GlobalStyles";
import {ControlsWrapper} from './styledComponents'
import { colors } from "../../styles/theme";

const apiStatus = {
  INITIAL: 'initial',
  LOADING: 'loading',
  SUCCESS: 'success',
  FAILURE: 'failure',
}

const EditUser = () => {
  const { id } = useParams();
  const [apiState, setApiState] = useState(apiStatus.INITIAL);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });
  const [formState, setFormState] = useState({
    saving: false,
    error: "",
  });
  
  const navigate = useNavigate();

  const fetchUser = useCallback(async () => {
    setApiState(apiStatus.LOADING)
    setError("");
    try {
      const response = await axios.get(`https://reqres.in/api/users/${id}`);
      setFormData({
        first_name: response.data.data.first_name,
        last_name: response.data.data.last_name,
        email: response.data.data.email,
      });
      setApiState(apiStatus.SUCCESS)
    } catch (err) {
      setApiState(apiStatus.FAILURE)
      setError("Failed to fetch user details. Please try again.");
    }
  }, [id]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleCancel = () => {
    navigate(-1);
  }

  const handleSave = async (e) => {
    e.preventDefault();

    setFormState({saving: true, error: ""});
    try {
      await axios.put(`https://reqres.in/api/users/${id}`, formData);
      setFormState({saving: false, error: ""})
    } catch (err) {
      setFormState({
        saving: false,
        error: "Failed to save. Please try again.",
      })
    }
  };

  const renderLoader = () => {
    return (
        <Spinner animation="border" role="status" />
    );
  }

  const renderError = () => (
    <StyledCard>
      <ErrorMessage>
        {error}
      </ErrorMessage>
        <StyledButton onClick={fetchUser} className='mx-auto mt-4' >Retry</StyledButton>
    </StyledCard>
  );

  const renderEditForm = () => (
      <StyledCard maxwidth="500px">
        <Title size="2rem">Edit User</Title>
        <Form onSubmit={handleSave} className="mt-4">
          <Form.Group className="mb-4">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
              style={{ borderColor: colors.accent}}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
              style={{ borderColor: colors.accent}}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              style={{ borderColor: colors.accent}}
              required
            />
          </Form.Group>

          <ControlsWrapper>
            <StyledButton type="submit" disabled={formState.saving}>
              Save
            </StyledButton>
            <StyledButton type='button' onClick={handleCancel}>
              Cancel
            </StyledButton>
          </ControlsWrapper>
          {formState.error && <ErrorMessage>{formState.error}</ErrorMessage>}
        </Form>
      </StyledCard>
  );

  const renderContent = () => {
    switch (apiState) {
      case apiStatus.LOADING:
        return renderLoader();
      case apiStatus.SUCCESS:
        return renderEditForm();
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

export default EditUser;
