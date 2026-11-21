import "../styles/About.css";

function About() {
  return (
    <section className="about" aria-labelledby="about-heading">
      <h2 id="about-heading" className="section-heading">
        About WordWise
      </h2>

      <article className="about-block">
        <p>
          College students regularly encounter unfamiliar vocabulary in academic
          readings, textbooks, and other educational materials. They may struggle
          to understand unfamiliar words, and repeatedly looking up words without
          having a way to save and review them makes vocabulary learning less
          organized.
        </p>
        <p>
          WordWise provides a simple place where students can look up unfamiliar
          words, understand their meanings, save important vocabulary, and review
          it through flashcards.
        </p>
      </article>
    </section>
  );
}

export default About;
