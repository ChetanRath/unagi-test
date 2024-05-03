import axios from 'axios';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  CardHeading,
  CreateCardForm,
  CreateCardFormContainer,
  FieldGroup,
  Input,
  Label
} from '../styled/createCard';
import { URLS } from '../utils/constant';

const CreateCard = () => {
  const [card, setCard] = useState({
    firstname: '',
    lastname: '',
    birthday: '',
  });
  const history = useHistory();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCard((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!card.firstname || !card.lastname || !card.birthday) {
        alert('Please fill in all fields.');
        return;
      }

      const formattedBirthday = new Date(card.birthday).toISOString();
      const payload = { player: { ...card, birthday: formattedBirthday } };
      const response = await axios.post(`${URLS.API_BASE_URL}/cards`, payload);
      if (response.status === 201) {
        setCard({
          firstname: '',
          lastname: '',
          birthday: '',
        });
        history.push('/collection');
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const { status, data } = error.response;
        alert(`Error ${status}: ${data.message}`);
      } else {
        alert('Error creating card');
      }
    }
  };

  return (
    <CreateCardFormContainer>
      <CreateCardForm onSubmit={handleSubmit}>
        <CardHeading>Create a Card</CardHeading>
        <FieldGroup>
          <Label>First Name:</Label>
          <Input
            type="text"
            name="firstname"
            value={card.firstname}
            onChange={handleChange}
          />
        </FieldGroup>
        <FieldGroup>
          <Label>Last Name:</Label>
          <Input
            type="text"
            name="lastname"
            value={card.lastname}
            onChange={handleChange}
          />
        </FieldGroup>
        <FieldGroup>
          <Label>Date of Birth:</Label>
          <Input
            type="date"
            name="birthday"
            value={card.birthday}
            onChange={handleChange}
          />
        </FieldGroup>
        <Button type="submit">Create Card</Button>
      </CreateCardForm>
    </CreateCardFormContainer>
  );
};

export default CreateCard;
