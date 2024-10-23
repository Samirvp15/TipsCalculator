import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import { menuItems } from "./data/db"
import UseOrder from "./hooks/useOrder"




function App() {
  
  const {order, addItem} = UseOrder()

  return (
    <>


    <header className=" bg-lime-500 py-5">
      <h1 className=" text-center text-4xl font-black">Calculador de Propinas y Consumo</h1>
    </header>
     
    <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2"> 
      <div className=" p-5">
      <h2 className=" text-4xl font-black">Menu</h2>

        <div className=" space-y-3 mt-10">
          {menuItems.map(item=>(
            <MenuItem
              key={item.id}
              item={item}
              addItem={addItem}
            />
          ))}
        </div>
      </div>

      <div className=" border border-dashed border-slate-500 p-5 rounded-lg space-y-10">
          <OrderContents
          
            order={order}
          />
        
      </div>


    </main>

    </>
  )
}

export default App
