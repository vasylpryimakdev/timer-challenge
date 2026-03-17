export default function TimerChallenge({ title, targetTime }) {
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleStart}>Start Challenge</button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        Time is running... / Timer inactive
      </p>
    </section>
  );
}
