import Link from 'next/link'
import { Bars3Icon} from '@heroicons/react/24/solid'
import { MenuProps, MenuListProps } from '@/props'

const ListItem = ({item}:any) => 
  <li className="group pl-6">
    <span
      /* @click="triggerNavItem('#about')" */
      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
      >
        <Link href={`/${item.toLowerCase()}`}>
      {item}
      </Link>
    </span>
    <span
      className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
    ></span>
  </li>

const MenuList = ({menuItems}:MenuListProps) => (
  <ul className="flex items-center">
    {
      menuItems.map((item, index) => (
        <ListItem item={item} key={index} />
      ))
    }
  </ul>
)


const Menu = (props:MenuProps) => {

  const menuListProps = {
    menuItems: props.menuItems
  }
  return (
    <>
      <div className="hidden lg:block">
        <MenuList {...menuListProps} />
      </div>
      <div className="block lg:hidden">
        <button 
        aria-label="Button"
        onClick={props.menuToggle}
        > 
          <Bars3Icon color="white" width={40} height={40}/>
        </button>
      </div>
    </>
  )
}

export default Menu