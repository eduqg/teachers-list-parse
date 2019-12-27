import styled from 'styled-components';
import { darken } from 'polished';

export const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: ${props => (props.show ? 'block' : 'none')};
`;

export const ModalMain = styled.div`
  position: fixed;
  background: white;
  width: 80%;
  min-height: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 5px;
  padding: 5%;
`;

export const ModalButton = styled.button`
  border: 0;
  background-color: #ff8008;
  padding: 8px 32px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
  transition: all 0.05s ease-in;

  &:hover {
    background-color: ${darken(0.05, '#ff8008')};
  }
`;
