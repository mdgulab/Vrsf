import "./DonateBanner.css";

export default function DonateBanner() {
  return (
    <section className="donate-advanced">

      <div className="donate-gradient"></div>

      <div className="donate-glass">
        <span className="donate-small">
          WANT TO MAKE A DIFFERENCE?
        </span>

        <h2>
          Help us create lasting impact <br />
          for <span>humanitarian causes</span>
        </h2>

        <p>
          Every contribution brings hope, dignity, and opportunity
          to communities striving for a better tomorrow.
        </p>

        <button className="donate-cta" onClick={() => window.location.href = "https://pages.razorpay.com/veyonicrisesocialfoundation"}>
          Support the Cause →
        </button>
      </div>

    </section>
  );
}
