import logoSvg from '@/assets/logo.svg'
import Image from 'next/image'
import { SearchBar } from './components/SearchBar'
import { ShoppingBagOpen } from 'phosphor-react'
import { Button, Badge, HeaderContainer } from './style'
import { useCart } from '@/hooks/useCart'
import { useRouter } from 'next/navigation'

export function Header() {

  const { productList }  = useCart()
  const router = useRouter()

  return (
    <HeaderContainer>
      <Image onClick={()=>{router.push('/')}} src={logoSvg} alt='logo com a escrita Capputeeno' />
      <div>
        <SearchBar />
        <Button href="/cart">
          <ShoppingBagOpen size={24} />
          { productList.length > 0 && <Badge >{productList.length}</Badge>}
        </Button>
      </div>
    </HeaderContainer>
  )
}