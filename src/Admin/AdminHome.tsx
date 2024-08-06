import { Link, Outlet } from "react-router-dom";

const LayoutAdmin = () => {
  return (
    <>
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">Hello Admin</h1>
        <nav className="mt-2">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-400">Home</Link>
            </li>
            <li>
              <Link to="/hosts" className="hover:text-gray-400">Quản lý host</Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-400">Xem thống kê</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="flex">
        <aside className="w-1/4 bg-gray-200 p-4">
          <ul className="space-y-2">
            <li>
              <Link to="/admin" className="block p-2 hover:bg-gray-300 rounded">Dashboard</Link>
            </li>
            <li>
              <Link to="/admin/users" className="block p-2 hover:bg-gray-300 rounded">User</Link>
            </li>
            <li>
              <Link to="/admin/products" className="block p-2 hover:bg-gray-300 rounded">Products</Link>
            </li>
            <li>
              <Link to="/admin/orders" className="block p-2 hover:bg-gray-300 rounded">Orders</Link>
            </li>
            <li>
              <Link to="/admin/brands" className="block p-2 hover:bg-gray-300 rounded">Brands</Link>
            </li>
          </ul>
        </aside>
        <main className="w-3/4 p-4">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default LayoutAdmin;
