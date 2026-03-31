import { Head } from '@inertiajs/react';

import AdminLayout from '@/layouts/admin-layout';

export default function AdminDashboard() {
    return (
        <AdminLayout showSidebar={true}>
            <Head title="Dashboard" />
            <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Admin Dashboard</title>
  <link
    href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html: "\n    body { font-family: 'DM Sans', sans-serif; }\n  "
    }}
  />
  {/* Top Bar */}
  <header className="flex items-center justify-between px-6 py-3">
    <button className="text-gray-400 hover:text-gray-600 transition">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 19l-7-7 7-7M18 19l-7-7 7-7"
        />
      </svg>
    </button>
    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold text-gray-700">
      A
    </div>
  </header>
  {/* Main Content */}
  <main className="px-6 py-4">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-4">
      {/* Welcome Card */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87m6-4.13a4 4 0 10-8 0 4 4 0 008 0z"
            />
          </svg>
          <h1 className="text-xl font-semibold text-gray-800">
            Welcome back, Admin
          </h1>
        </div>
        <p className="text-sm text-gray-400">admin@dev.com</p>
      </div>
      {/* Quick Actions Card */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-purple-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z"
            />
          </svg>
          <h2 className="text-lg font-semibold text-gray-800">Quick Actions</h2>
        </div>
        <div className="space-y-5">
          {/* Manage Estimates */}
          <div className="flex items-start gap-4 cursor-pointer group">
            <div className="mt-0.5 text-gray-400 group-hover:text-gray-600 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800 group-hover:text-gray-900 transition">
                Manage Estimates
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                View and manage all estimates
              </p>
            </div>
          </div>
          {/* Contact Messages */}
          <div className="flex items-start gap-4 cursor-pointer group">
            <div className="mt-0.5 text-gray-400 group-hover:text-gray-600 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H7l-4 4V5z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800 group-hover:text-gray-900 transition">
                Contact Messages
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                View contact inquiries
              </p>
            </div>
          </div>
          {/* Site Settings */}
          <div className="flex items-start gap-4 cursor-pointer group">
            <div className="mt-0.5 text-gray-400 group-hover:text-gray-600 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800 group-hover:text-gray-900 transition">
                Site Settings
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                Configure website settings
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</>

        </AdminLayout>
    );
}
