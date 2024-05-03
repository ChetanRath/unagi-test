import styled from 'styled-components';

const CardContainer = styled.div`
  width: 300px;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  color: #1a237e;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 20px;
  margin-bottom: 15px;
  object-fit: cover;
  height: 280px;
`;

const CardDetails = styled.div`
  text-align: center;
`;

const PlayerName = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const PlayerDOB = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
`;

export { CardContainer, CardDetails, CardImage, PlayerDOB, PlayerName };
