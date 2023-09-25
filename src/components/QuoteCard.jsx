import "./QuoteCard.css";

const QuoteCard = ({ quote, handleChangeQuote}) => {
  
  return (
    <section className="quoteCard">
      <article className="quoteCard_container">
        <h2 className="quoteCard_title">Infogalax</h2>

        <p className="quoteCard_phrase">{quote.phrase}</p>
        <button className="quoteCard_btn" onClick={handleChangeQuote}>
          Change
        </button>
      </article>
      <footer className="quoteCard_footer">Author: {quote.author}</footer>
    </section>
  );
};
export default QuoteCard;
