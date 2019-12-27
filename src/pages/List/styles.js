import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div``;

export const TeachersList = styled.div`
  display: grid;

  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 100%;
    grid-auto-rows: 10px;
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
  min-width: 50%;
  height: 150px;
`;

export const SearchInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 16px;
  padding: 8px 8px;
  border-radius: 8px;
  margin-left: 16px;

  &:focus {
    outline: none;
  }
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
  margin-top: 15px;
`;

export const CardMiddle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const TeacherName = styled.h3`
  font-weight: 700;
  color: #303030;
`;

export const TeacherFields = styled.div``;

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
`;

export const CardBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 16px 16px;
`;

export const CardButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;

  height: 16px;
  color: #fff;
  background-color: #ff8008;
  border: 2px solid #ff8008;
  font-size: 18px;
  padding: 5px 25px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s;
`;
