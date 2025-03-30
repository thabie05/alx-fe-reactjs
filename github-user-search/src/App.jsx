import SearchAdvanced from './components/SearchAdvanced';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          🔍 GitHub Advanced User Search
        </h1>
        <SearchAdvanced />
      </div>
    </div>
  );
}

export default App;