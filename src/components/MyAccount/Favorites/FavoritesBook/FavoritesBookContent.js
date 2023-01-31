import BookItem from "../../../Home/Books/BookItem";
import "../FavoritesBook/FavoritesBookContent.scss";
import { useSelector } from "react-redux";
import products from "../../../../data/products";

const FavoritesBook = () => {
  // let { favouriteItems } = useSelector((state) => state.favourite);
  // console.log(favouriteItems);
  const favouriteItems = products.slice(17, 18);
  // console.log(item.title);

  return (
    <div style={{ textAlign: "center" }}>
      {favouriteItems?.length === 0 ? (
        <div>
          <img
            className="empty-wrapper"
            src="https://drive.google.com/uc?id=1k2nXiRoCsJ2gKuRmL9FoFwkTgSpW_4n_"
            alt="no item favorites"
          />
          <p>
            <b>There are no socks in this category</b>
          </p>
        </div>
      ) : (
        <div className="category-books row row-cols-3 ">
          {favouriteItems.map((item, index) => {
            return (
              <BookItem
                key={index}
                id={item._id}
                name={item.name}
                images={item.images}
                price={item.price}
                Sold={item.Sold}
                ratings={item.ratings}
              />
            );
          })}
        </div>
      )}
      {/* {favouriteItems.map((item, index) => {
        return (
          <BookItem
            key={index}
            title={item.title}
            author={item.author}
            img={item.image}
            price={item.price}
          />
        );
      })} */}
    </div>
  );
};

export default FavoritesBook;
