import React, { useState } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import CircularProgress from './CircularProgress';
import { Activity, Users, ShoppingBag, DollarSign } from 'lucide-react';

const AnalyticsDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [dateRange, setDateRange] = useState('Last 30 days');

  // Sample analytics data
  const salesMetrics = {
    totalOrders: 1458,
    totalRevenue: 147395,
    averageOrderValue: 101.09,
    conversionRate: 3.2
  };

  const productMetrics = {
    totalProducts: 64,
    lowStock: 2,
    outOfStock: 1,
    topCategories: [
      { name: 'Electronics', count: 45, revenue: 500 },
      { name: 'Clothing', count: 78, revenue: 300 },
      { name: 'Home', count: 34, revenue: 1200 },
      { name: 'hhsbhhs', count: 45, revenue: 900 },
      { name: 'njksm', count: 78, revenue: 680 },
      { name: 'Hne', count: 34, revenue: 500 },
      { name: 'adarsha', count: 45, revenue: 800 },
      { name: 'jnjns', count: 78, revenue: 400 },
      { name: 'ajinada', count: 34, revenue: 1600 }
    ]
  };

  const userMetrics = {
    totalUsers: 215,
    activeUsers: 294,
    newUsers: 35,
    returningUsers: 120
  };

  // Product status data for pie chart
  const productStatusData = [
    { name: 'In Stock', value: productMetrics.totalProducts - productMetrics.lowStock - productMetrics.outOfStock, color: '#3B82F6' },
    { name: 'Low Stock', value: productMetrics.lowStock, color: '#F59E0B' },
    { name: 'Out of Stock', value: productMetrics.outOfStock, color: '#EF4444' }
  ];

  // User activity data by type
  const userTypeData = [
    { name: 'Active', value: userMetrics.activeUsers, color: '#3B82F6' },
    { name: 'New', value: userMetrics.newUsers, color: '#10B981' },
    { name: 'Returning', value: userMetrics.returningUsers, color: '#8B5CF6' }
  ];

  // Sample data for charts
  const revenueData = [
    { name: 'Jan', value: 0 },
    { name: 'Feb', value: 0 },
    { name: 'Mar', value: 0 },
    { name: 'Apr', value: 0 },
    { name: 'May', value: 150 },
    { name: 'Jun', value: 300 },
    { name: 'Jul', value: 0 },
    { name: 'Aug', value: 0 },
    { name: 'Seo', value: 0 },
    { name: 'Oct', value: 0 },
    { name: 'Nov', value: 0 },
    { name: 'Dec', value: 0 },
  ];

  const userActivityData = [
    { name: 'Mon', active: 100, new: 340 },
    { name: 'Tue', active: 1350, new: 280 },
    { name: 'Wed', active: 140, new: 170 },
    { name: 'Thu', active: 1600, new: 920 },
    { name: 'Fri', active: 1500, new: 290 },
    { name: 'Sat', active: 1200, new: 250 },
    { name: 'Sun', active: 1100, new: 220 },
  ];

  const categoryData = productMetrics.topCategories.map(cat => ({
    name: cat.name,
    revenue: cat.revenue,
  }));

  // Custom tooltip for pie charts
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 shadow rounded border">
          <p className="text-sm">{`${payload[0].name}: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`px-3 py-2 ${activeTab === 'dashboard' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
              >
                Analytics
              </button>
              <button className="px-3 py-2 text-gray-600">Products</button>
              <button className="px-3 py-2 text-gray-600">Users</button>
              <button className="px-3 py-2 text-gray-600">Categories</button>
              <button className="px-3 py-2 text-gray-600">Sliders</button>
            </div>
            <div className="flex items-center">
              <select 
                className="border rounded-lg px-3 py-1"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
              >
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500 text-sm">Total Revenue</h3>
              <DollarSign className="text-blue-500" size={20} />
            </div>
            <p className="text-2xl font-bold">${salesMetrics.totalRevenue.toLocaleString()}</p>
            <span className="text-green-500 text-sm">↑ 12.5% vs last period</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500 text-sm">Total Orders</h3>
              <ShoppingBag className="text-blue-500" size={20} />
            </div>
            <p className="text-2xl font-bold">{salesMetrics.totalOrders.toLocaleString()}</p>
            <span className="text-green-500 text-sm">↑ 8.2% vs last period</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500 text-sm">Active Users</h3>
              <Users className="text-blue-500" size={20} />
            </div>
            <p className="text-2xl font-bold">{userMetrics.activeUsers.toLocaleString()}</p>
            <span className="text-green-500 text-sm">↑ 15.3% vs last period</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500 text-sm">Conversion Rate</h3>
              <Activity className="text-blue-500" size={20} />
            </div>
            <p className="text-2xl font-bold">{salesMetrics.conversionRate}%</p>
            <span className="text-red-500 text-sm">↓ 2.1% vs last period</span>
          </div>
        </div>

        {/* Product Status and User Type Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Product Status Distribution</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={productStatusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {productStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">User Type Distribution</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={userTypeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {userTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Revenue Trend</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="value" stroke="#3B82F6" fill="#93C5FD" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">User Activity</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={userActivityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="active" stroke="#3B82F6" />
                  <Line type="monotone" dataKey="new" stroke="#10B981" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Circular Progress and Category Revenue */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Category Revenue</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Category Orders</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

        

        {/* User Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">User Activity</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Total Users</span>
                <span className="font-semibold">{userMetrics.totalUsers.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>New Users</span>
                <span className="font-semibold">{userMetrics.newUsers.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Returning Users</span>
                <span className="font-semibold">{userMetrics.returningUsers.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Sales Performance</h2>
            <div className="space-y-4">
            <div className="flex justify-between items-center">
                <span>Total Revenue </span>
                <span className="font-semibold">${salesMetrics.totalRevenue.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Average Order Value</span>
                <span className="font-semibold">${salesMetrics.averageOrderValue.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Conversion Rate</span>
                <span className="font-semibold">{salesMetrics.conversionRate}%</span>
              </div>
              
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AnalyticsDashboard;