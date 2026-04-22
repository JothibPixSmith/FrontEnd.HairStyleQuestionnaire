import { Questionnaire } from './components/Questionnaire';

export default function Home() {
  return (
    <main className="app-shell">
      <header className="app-header">
        <span className="app-header__logo">✦ HairIQ</span>
      </header>
      <div className="app-content">
        <Questionnaire />
      </div>
    </main>
  );
}
