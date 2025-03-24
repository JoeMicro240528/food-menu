import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import Catigore from "./components/Catigore";
import CartList from "./components/CartList";
import {items} from './data'
import { useState } from 'react';
function App() {
  
const [dataItems, setDataItems] = useState(items)

const allGategory = ["الكل",...(new Set(items.map(item => item.category)))]

const filterByCategory = (cat) =>{
  if(cat === 'الكل'){
    setDataItems(items)
    return
  }
 const newItems = items.filter((item) => item.category === cat)
  setDataItems(newItems)
}

const filterBySearch = (text) =>{
    const newItems = items.filter((item) => item.title.includes(text))
    setDataItems(newItems)

}
  
  return (
    <div className="color-body font">
      <NavBar filterBySearch = {filterBySearch}/>
      <Container>
        <Title/>
        <Catigore filterByCategory = {filterByCategory} catergory={allGategory}/>
        <CartList data={dataItems}/>
      </Container>
    </div>
  );
}

export default App;
