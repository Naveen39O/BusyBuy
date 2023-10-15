import Item from "../Item/Item";

const ItemContainer = ()=> {
  const data = [{
    link: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F9f%2Fdf%2F9fdfcc23665fe9e2b389b686a85cc9c97084d238.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shirts_longsleeved%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/zoom]&zoom=zoom",
    description: "M&H Men Black/Natural White Cotton flannel shirt",
    price: "1400"
  }];
  return (
    <div>
      {data.map((item)=> <Item imgLink={item.link} description={item.description} price={item.price}/>)}
    </div>
  )
}

export default ItemContainer;