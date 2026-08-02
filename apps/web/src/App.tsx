import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { BudgetOverview } from './components/BudgetOverview';

export function App() {
  const [activeTab, setActiveTab] = useState<'net-worth' | 'budget'>('net-worth');

  return (
    <main className="flex min-h-screen flex-col items-center bg-zinc-950 text-zinc-100 selection:bg-zinc-800 selection:text-white">
      {/* Shared Layout Header */}
      <div className="w-full max-w-5xl px-4 pt-8 mx-auto">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-900 pb-6 mb-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">wealthdock</h1>
            <p className="text-sm text-zinc-400">Unified wealth and asset tracking platform</p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex bg-zinc-900 p-1 rounded-lg border border-zinc-800">
            <button
              onClick={() => setActiveTab('net-worth')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-md transition ${
                activeTab === 'net-worth'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Net Worth
            </button>
            <button
              onClick={() => setActiveTab('budget')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-md transition ${
                activeTab === 'budget'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Budget Planner
            </button>
          </div>
        </header>
      </div>

      {/* Page Content */}
      <div className="w-full">
        {activeTab === 'net-worth' ? <Dashboard /> : <BudgetOverview />}
      </div>
    </main>
  );
}
export default App;
