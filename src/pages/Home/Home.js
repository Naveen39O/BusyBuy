import style from "./Home.module.css"
import Filter from '../../components/Filter/Filter';
import ItemContainer from '../../components/ItemContainer/ItemContainer';

const Home = ()=> {

  return (
    <div className={`${style.home_container}`}>
        <Filter/>
        <ItemContainer/>
    </div>
  )
}

export default Home;