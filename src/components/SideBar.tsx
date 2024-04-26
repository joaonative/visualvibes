import Browser from "./icons/Browser";
import People from "./icons/People";
import Plus from "./icons/Plus";
import Settings from "./icons/Settings";
import Trending from "./icons/Trending";
import User from "./icons/User";
import Logo from "./Logo";
import Nav from "./Nav";
import NavItem from "./NavItem";

const SideBar = () => {
  return (
    <aside className="flex flex-col gap-6 p-6 border-r-4 border-layer">
      <Logo />
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col gap-6">
          <Nav name="Navegação">
            <NavItem
              name="Início"
              path="/"
              activeIcon={<Browser size={24} color="white" />}
              inactiveIcon={<Browser size={24} color="black" />}
            />
            <NavItem
              name="Em Alta"
              path="/trending"
              activeIcon={<Trending size={24} color="white" />}
              inactiveIcon={<Trending size={24} color="black" />}
            />
            <NavItem
              name="Artistas"
              path="/artists"
              activeIcon={<People size={24} color="white" />}
              inactiveIcon={<People size={24} color="black" />}
            />
          </Nav>
          <Nav name="Criação">
            <NavItem
              name="Criar Publicação"
              path="/create"
              highlighted
              activeIcon={<Plus size={24} color="white" />}
              inactiveIcon={<Plus size={24} color="black" />}
            />
          </Nav>
        </div>
        <Nav name="Personalização">
          <NavItem
            name="Configurações"
            path="/settings"
            activeIcon={<Settings size={24} color="white" />}
            inactiveIcon={<Settings size={24} color="black" />}
          />
          <NavItem
            name="Perfil Pessoal"
            path="/profile"
            activeIcon={<User size={24} color="white" />}
            inactiveIcon={<User size={24} color="black" />}
          />
        </Nav>
      </div>
    </aside>
  );
};

export default SideBar;
