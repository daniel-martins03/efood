import { RootReducer } from '../../store'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'

import logo from '../../assets/images/logo.svg'

import * as S from './styles'

// Componente de cabeçalho do site
const Header = () => {
  // Hook para despachar ações do Redux
  const dispatch = useDispatch()
  // Obtém os itens do carrinho do estado do Redux
  const { items } = useSelector((state: RootReducer) => state.cart)

  // Função para abrir o carrinho
  const openCart = () => {
    dispatch(open())
  }

  return (
    // Container principal do cabeçalho
    <S.HeaderContainer>
      <div className="container">
        {/* Link para a página de restaurantes */}
        <S.RestaurantLink
          title="Clique aqui para ir para a página de restaurantes"
          type="link"
          to={'/'}
        >
          Restaurantes
        </S.RestaurantLink>
        {/* Logo da efood */}
        <h1>
          <img src={logo} alt="Logo efood" />
        </h1>
        {/* Botão para abrir o carrinho, exibindo a quantidade de itens */}
        <button onClick={openCart}>
          {items.length} produto(s) no carrinho
        </button>
      </div>
    </S.HeaderContainer>
  )
}

export default Header
