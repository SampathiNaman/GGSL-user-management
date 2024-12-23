import {styled} from 'styled-components';
import {Pagination} from 'react-bootstrap';
import { colors } from '../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
`

export const StyledPagination = styled(Pagination)`
  .page-item.active .page-link {
    color: white;
    background-color: ${colors.primary};
    border-color: ${colors.primary};
  }
  .page-link {
    color: ${colors.primary};
    &:hover {
      color: ${colors.dark};
    }
  }
`;