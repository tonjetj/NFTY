import useFetchProducts from "../../hooks/useFetchProducts";

export default function ProductCards() {
  const { products, loading, error } = useFetchProducts();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="card__container">
      {products.map((nft) => (
        <div key={nft.id} className="card__nft" style={{ backgroundImage: nft.media && nft.media.length > 0 ? `url(${nft.media[0].url})` : '' }}>
          <div className="card__copy">
            <h2>{nft.title}</h2>
            <div>
            </div>
            <div className="btn__group">
              <button className="card__btn primary">View</button>
              <button className="card__btn secondary"></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
