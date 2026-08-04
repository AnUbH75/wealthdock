import { Dashboard } from './components/Dashboard';

export function App() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-zinc-950 text-zinc-100 selection:bg-zinc-800 selection:text-white">
      <Dashboard />
    </main>
  );
}

