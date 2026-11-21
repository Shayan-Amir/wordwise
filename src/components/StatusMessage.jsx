import "../styles/StatusMessage.css";

function StatusMessage({ type, title, text }) {
  return (
    <section className={`status-message ${type}`} role="status">
      <h2 className="status-title">{title}</h2>
      <p>{text}</p>
    </section>
  );
}

export default StatusMessage;
