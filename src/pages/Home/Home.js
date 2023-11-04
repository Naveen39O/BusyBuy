import style from "./Home.module.css"
import Filter from '../../components/Filter/Filter';
import ItemContainer from '../../components/ItemContainer/ItemContainer';
import { useValue } from "../../itemContext";

const Home = ()=> {
  const value = useValue();
  return (
    <div className={`${style.home_container}`}>
        <Filter/>
        <ItemContainer data = {value.filterData}/>
    </div>
  )
}

export default Home;