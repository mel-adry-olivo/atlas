export default function Warehouses({ children }) {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="py-2">
        <span className="text-lg font-medium text-gray-700">All Warehouses</span>
      </div>
      <hr className="my-2" />
      <ul className="flex-1">{children}</ul>
    </div>
  );
}

export function WarehouseItem({ index, warehouse }) {
  return (
    <li className="py-1">
      <div className="p-4 border-b flex">
        <span className="pr-4 text-sm text-gray-500">{index}</span>
        <div className="flex flex-col pr-4 mr-4 border-r flex-1">
          <h3 className="font-semibold text-lg">{warehouse.name}</h3>
          <p>{warehouse.address}</p>
        </div>
        <div className="flex items-center">
          <button className="bg-indigo-400 hover:bg-indigo-500 text-white py-1 px-3 rounded mr-2">
            Edit
          </button>
          <button className="bg-red-400 hover:bg-red-500 text-white py-1 px-3 rounded">
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}
