import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 16px;
  padding: 8px 8px;
  border-radius: 8px;
  width: 300px;
  margin-bottom: 32px;

  &:focus {
    outline: none;
  }
`;

export const TeachersList = styled.div`
  max-width: 1400px;
  display: grid;
  grid-gap: 1rem;

  @media (min-width: 100px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr)
  }
`;

export const Card = styled.div`
  border: 1px solid #e3e3e3;
  border-radius: 9px;
  margin-bottom: 20px;
  background-color: #fff;
  transition: all 0.3s;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  margin: 16px 16px;
  width: 400px;
  height: 180px;
  padding: 16px 0;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 32px;
`;

export const CardImage = styled.img`
  height: 60px;
  border-radius: 30px;
  border: 3px solid rgba(0, 0, 0, 0.2);
`;

export const CardMiddle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export const TeacherName = styled.h3`
  font-weight: 700;
  color: #303030;
  margin-bottom: 16px;
`;

export const TeacherFields = styled.div`
  margin-left: 16px;
`;

export const CardFields = styled.div`
  display: flex;
  justify-content: center;
  margin: 8px 0;

`;

export const Field = styled.div`
  display: inline-block;
  border: 1px solid #ff8008;
  background-color: #fff;
  color: #ff8008;
  padding: 3px 13px;
  margin: 3px;
  border-radius: 5px;
  font-size: 12px;
  height: 20px;
`;

export const TeacherStars = styled.h3`
  color: #989898;
  margin-bottom: 16px;
`;

export const CardBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 16px 16px;
`;

export const CardButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;

  height: auto;
  color: #fff;
  background-color: #ff8008;
  border: 2px solid #ff8008;
  font-size: 18px;
  padding: 5px 25px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;

  transition: all 0.05s ease-in;

  &:hover {
    background-color: ${darken(0.05, '#ff8008')};
  }
`;

// Modal

export const ModalTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalImage = styled.img`
  height: 160px;
  border-radius: 80px;
  border: 5px solid #ff8008;
  margin-bottom: 16px;

`;

export const ModalLocation = styled.h4`
  margin: 8px;
  color: rgba(0, 0, 0, 0.4);
`;

export const ModalMiddle = styled.div``;
export const ModalCurriculum = styled.h4`
  color: rgba(0, 0, 0, 0.4);
  text-align: justify;
  margin: 32px 0;
`;
