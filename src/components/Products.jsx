export default function Products({ children }) {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="py-2">
        <span className="text-lg font-medium text-gray-700">All Products List</span>
      </div>
      {/* <hr className="my-2" />
      <div className="py-4 ">
        <span className="text-2xl text-gray-600">Product Statistics</span>
      </div> */}
      <hr className="my-2" />
      <ul className="flex-1">{children}</ul>
    </div>
  );
}

export function ProductItem({ index, book }) {
  return (
    <li className="py-1">
      <div className="p-4 border-b flex">
        <span className="pr-4 text-sm text-gray-500">{index}</span>
        <div className="flex items-center mr-4">
          <img src={book.image} alt="" className="w-16 h-16 object-fit rounded-lg" />
        </div>
        <div className="flex flex-col justify-center pr-4 mr-4 border-r flex-1">
          <h3 className="font-semibold text-lg">{book.title}</h3>
          <p>{book.author}</p>
        </div>
        <div className="flex items-center  pr-4 mr-4 border-r flex-1">
          <p>Stock: {book.stock_quantity}</p>
        </div>
        <div className="flex flex-col pr-4 mr-4 border-r flex-1">
          <p>{book.warehouse}</p>
          <p>{book.rack}</p>
        </div>
        <div className="flex flex-col pr-4 mr-4 border-r flex-1">
          <p>Product Price</p>
          <p>${book.price}</p>
        </div>
        <div className="flex items-center">
          <button className="bg-indigo-400 hover:bg-indigo-500 text-white py-1 px-3 rounded">
            Edit
          </button>
        </div>
      </div>
    </li>
  );
}
