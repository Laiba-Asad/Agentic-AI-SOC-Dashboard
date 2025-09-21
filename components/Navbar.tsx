
import React, { useState, useRef, useEffect } from 'react';
import { UserRole } from '../types';
import { ICON_LOGO, ICON_CHEVRON_DOWN } from '../constants/icons';

interface NavbarProps {
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
}

const ALL_MENU_ITEMS = [
  { name: 'Dashboard', roles: [UserRole.ANALYST, UserRole.MANAGER, UserRole.CISO] },
  { name: 'Active Alerts', roles: [UserRole.ANALYST, UserRole.MANAGER] },
  { name: 'Threat Intelligence', roles: [UserRole.ANALYST, UserRole.MANAGER] },
  { name: 'Incidents', roles: [UserRole.ANALYST, UserRole.MANAGER] },
  { name: 'Reports', roles: [UserRole.MANAGER, UserRole.CISO] },
  { name: 'Settings', roles: [UserRole.ANALYST, UserRole.MANAGER, UserRole.CISO] },
  { name: 'User Management', roles: [UserRole.MANAGER] },
];

const Navbar: React.FC<NavbarProps> = ({ userRole, setUserRole }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const menuItems = ALL_MENU_ITEMS.filter(item => item.roles.includes(userRole));

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);


  return (
    <header className="bg-surface shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            {ICON_LOGO}
            <span className="text-xl font-bold text-text-primary">Aegis SOC</span>
          </div>
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href="#"
                className={`py-2 px-3 rounded-md text-sm font-medium ${index === 0 ? 'bg-background text-primary' : 'text-text-secondary hover:bg-background hover:text-text-primary'}`}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center space-x-2 bg-background p-2 rounded-lg"
          >
            <img className="h-8 w-8 rounded-full" src={`https://picsum.photos/seed/${userRole}/40/40`} alt="User avatar" />
            <div className="text-left hidden sm:block">
              <p className="text-sm font-semibold text-text-primary">Alex Johnson</p>
              <p className="text-xs text-text-secondary">{userRole}</p>
            </div>
            {ICON_CHEVRON_DOWN}
          </button>
          
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-surface rounded-md shadow-lg py-1 z-50">
              <span className="block px-4 py-2 text-xs text-text-secondary">Switch Role</span>
              {(Object.values(UserRole)).map(role => (
                <a
                  key={role}
                  href="#"
                  onClick={(e) => { e.preventDefault(); setUserRole(role); setDropdownOpen(false); }}
                  className={`block px-4 py-2 text-sm ${userRole === role ? 'bg-primary text-white' : 'text-text-primary hover:bg-background'}`}
                >
                  {role}
                </a>
              ))}
              <div className="border-t border-border my-1"></div>
              <a href="#" className="block px-4 py-2 text-sm text-text-primary hover:bg-background">Logout</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
