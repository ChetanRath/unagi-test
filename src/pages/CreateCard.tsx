import axios from 'axios';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { HTTP_CODES, ROUTES, URLS } from '../utils/constant';
import { Button, CardHeading, CreateCardForm, CreateCardFormContainer, FieldGroup, Input, Label } from '../styled/createCard';
import { SortingParams } from '../utils/helpers';

const CreateCard = () => {
  const [card, setCard] = useState({
    firstname: '',
    lastname: '',
    birthday: '',
  });
  const history = useHistory();

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCard((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!card.firstname || !card.lastname || !card.birthday) {
        alert('Please fill in all fields.');
        return;
      }

      const formattedBirthday = new Date(card.birthday).toISOString();
      const payload = { player: { ...card, birthday: formattedBirthday } };
      const response = await axios.post(`${URLS.API_BASE_URL}/cards`, payload);
      if (response.status === HTTP_CODES.CREATED) {
        setCard({
          firstname: '',
          lastname: '',
          birthday: '',
        });
        history.push(ROUTES.COLLECTION);
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
      <CreateCardForm onSubmit={submitHandler}>
        <CardHeading>Create a Card</CardHeading>
        <FieldGroup>
          <Label>First Name:</Label>
          <Input
            type="text"
            name={SortingParams.FirstName}
            value={card.firstname}
            onChange={changeHandler}
          />
        </FieldGroup>
        <FieldGroup>
          <Label>Last Name:</Label>
          <Input
            type="text"
            name={SortingParams.LastName}
            value={card.lastname}
            onChange={changeHandler}
          />
        </FieldGroup>
        <FieldGroup>
          <Label>Date of Birth:</Label>
          <Input
            type="date"
            name={SortingParams.Birthday}
            value={card.birthday}
            onChange={changeHandler}
          />
        </FieldGroup>
        <Button type="submit">Create Card</Button>
      </CreateCardForm>
    </CreateCardFormContainer>
  );
};

export default CreateCard;
