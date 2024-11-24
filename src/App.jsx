import { useState } from 'react';
import { ShoppingBasket, Warehouse, LayoutDashboard } from 'lucide-react';
import Sidebar, { SidebarProvider, SidebarContext, SidebarItem } from './components/Sidebar';
import Products, { ProductItem } from './components/Products';
import Warehouses, { WarehouseItem } from './components/Warehouses';
import Login from './components/Login';
import books from './data/Books';
import warehouses from './data/Warehouses';

const DashboardContent = () => <div>Dashboard Content</div>;

function MainContent({ activeItem }) {
  const renderContent = () => {
    switch (activeItem) {
      case 'Dashboard':
        return <DashboardContent />;
      case 'Products':
        return (
          <Products>
            {books.map((book, index) => (
              <ProductItem key={index} index={index + 1} book={book} warehouses={warehouses} />
            ))}
          </Products>
        );
      case 'Warehouse':
        return (
          <Warehouses>
            {warehouses.map((warehouse, index) => (
              <WarehouseItem key={warehouse.id} index={index + 1} warehouse={warehouse} />
            ))}
          </Warehouses>
        );
      default:
        return <div>Select an item from the sidebar</div>;
    }
  };

  return <div className="flex-1 p-4">{renderContent()}</div>;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (status) => {
    setIsAuthenticated(status);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <SidebarProvider>
      <main className="app flex">
        <Sidebar handleLogout={handleLogout}>
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" />
          <hr className="my-2" />
          <SidebarItem icon={<ShoppingBasket size={20} />} text="Products" />
          <SidebarItem icon={<Warehouse size={20} />} text="Warehouse" />
          <hr className="my-2" />
        </Sidebar>
        <SidebarContext.Consumer>
          {({ activeItem }) => <MainContent activeItem={activeItem} />}
        </SidebarContext.Consumer>
      </main>
    </SidebarProvider>
  );
}

export default App;
