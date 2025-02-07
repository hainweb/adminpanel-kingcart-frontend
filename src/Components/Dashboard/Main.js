import React, { useState } from 'react';
import Dashboard from './Graph';
import DetailedAnalytics from './AllAnaltics';

function Main() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              <button
                onClick={() => setCurrentPage('dashboard')}
                className={`px-3 py-2 ${currentPage === 'dashboard' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setCurrentPage('revenue')}
                className={`px-3 py-2 ${currentPage === 'revenue' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
              >
                Revenue Analytics
              </button>
              <button
                onClick={() => setCurrentPage('product')}
                className={`px-3 py-2 ${currentPage === 'product' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
              >
                Product Analytics
              </button>
              <button
                onClick={() => setCurrentPage('user')}
                className={`px-3 py-2 ${currentPage === 'user' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
              >
                User Analytics
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {currentPage === 'dashboard' ? <Dashboard /> : <DetailedAnalytics />}
        {currentPage === 'revenue' ? <Dashboard /> : <DetailedAnalytics />}
        {currentPage === 'product' ? <Dashboard /> : <DetailedAnalytics />}
        {currentPage === 'user' ? <Dashboard /> : <DetailedAnalytics />}
      </main>
    </div>
  );
}

export default Main;