import styled from '@emotion/styled/macro'
import { tablet } from 'src/lib/theme'

const Favourites = styled.div`
  padding-bottom: 1.5rem;
  max-width: 100vw;
  overflow: hidden;

  ${tablet} {
    max-width: 92vw;
    width: calc(420px - 2%);
  }
`

interface FavouritesListProps {
  itemsAmount: number
}

const FavouritesList = styled.div<FavouritesListProps>`
  display: flex;
  gap: 1rem;
  padding: 0 1rem;
  width: ${({ itemsAmount }) => `${6 * itemsAmount + (itemsAmount + 1)}rem`};
`

const Styled = { Favourites, FavouritesList }

export default Styled
