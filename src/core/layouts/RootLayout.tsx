import { Outlet, useLocation } from "react-router";
import PWAInstallPrompt from "./PWAInstallPrompt";

export default function RootLayout() {
  const location = useLocation();
  
  // Routes that should not show the main layout (e.g., login page)
  const noLayoutRoutes = ['/login', '/register'];
  const showMainLayout = !noLayoutRoutes.includes(location.pathname);

  if (!showMainLayout) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Outlet />
        <PWAInstallPrompt />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header/Navigation */}
      {/* <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-semibold text-gray-900">
                  Vehicle Inspection
                </h1>
              </div>
            </div> */}
            
            {/* Navigation */}
            {/* <nav className="hidden md:flex space-x-8">
              <a
                href="/menu"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                หน้าหลัก
              </a>
              <a
                href="/vehicle-inspection"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                ตรวจสอบรถ
              </a>
            </nav> */}
            
            {/* User menu */}
            {/* <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-900 p-2 rounded-md transition-colors">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              
              <button className="text-gray-500 hover:text-gray-900 p-2 rounded-md transition-colors">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            </div> */}
            
            {/* Mobile menu button */}
            {/* <div className="md:hidden">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 p-2"
                aria-label="toggle menu"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header> */}

      {/* Main content */}
      <main className="flex-1 bg-gray-50">
        <Outlet />
      </main>

      {/* PWA Install Prompt */}
      <PWAInstallPrompt />
    </div>
  );
}