import { ChevronLeft, LogOut } from 'lucide-react';
import { createContext, useState, useContext } from 'react';
const initialContext = {
  expanded: true,
  activeItem: 'Dashboard',
  setActiveItem: () => {},
  setExpanded: () => {},
};

export const SidebarContext = createContext(initialContext);

export function SidebarProvider({ children }) {
  const [expanded, setExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState('Dashboard');

  const value = {
    expanded,
    setExpanded,
    activeItem,
    setActiveItem,
  };

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
}

export default function Sidebar({ children, handleLogout }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <aside className={`flex h-screen ${expanded ? 'w-72' : 'w-20'}`}>
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <SidebarHeader />
        <ul className="flex-1 px-3">{children}</ul>
        <SidebarFooter handleLogout={handleLogout} expanded={expanded} />
      </nav>
    </aside>
  );
}

function SidebarHeader() {
  const { expanded, setExpanded } = useContext(SidebarContext);

  return (
    <div className="p-4 pb-2 flex justify-between items-center mb-2">
      <img
        src="https://img.logoipsum.com/280.svg"
        className={`overflow-hidden transition-all ${expanded ? 'w-16' : 'w-0'}`}
      />
      <button
        onClick={() => setExpanded((prev) => !prev)}
        className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
      >
        <ChevronLeft className={`transition-all duration-600 ${!expanded && 'rotate-180'}`} />
      </button>
    </div>
  );
}

export function SidebarItem({ icon, text, alert }) {
  const { expanded, setActiveItem, activeItem } = useContext(SidebarContext);
  const isActive = activeItem === text;

  return (
    <li
      onClick={() => setActiveItem(text)}
      className={`
        relative flex items-center p-3 my-1 font-medium rounded-md cursor-pointer 
        transition-colors group
        ${
          isActive
            ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
            : 'hover:bg-indigo-50 text-gray-600'
        }
      `}
    >
      {icon}
      <span className={`text-sm overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}`}>
        {text}
      </span>
      {alert && <AlertBadge expanded={expanded} />}
      {!expanded && <SidebarTooltip text={text} />}
    </li>
  );
}

export function SidebarFooter({ handleLogout, expanded }) {
  return (
    <div className={`flex p-3 ${expanded ? 'justify-end' : 'justify-center'}`}>
      <div
        onClick={handleLogout}
        className={`
        relative flex items-center p-3 rounded-md font-medium cursor-pointer w-fit
        transition-colors group hover:bg-indigo-50 text-gray-600 
      `}
      >
        <LogOut size={20} />
        {!expanded && <SidebarTooltip text="Login" />}
      </div>
    </div>
  );
}

function AlertBadge({ expanded }) {
  return (
    <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? '' : 'top-2'}`} />
  );
}

function SidebarTooltip({ text }) {
  return (
    <div className="absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
      {text}
    </div>
  );
}
