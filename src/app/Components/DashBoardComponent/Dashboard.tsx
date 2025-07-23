'use client';
import {
    User,
    LogOut,
    BarChart3,
    Users,
    DollarSign,
    TrendingUp,
    Menu,
    X
} from 'lucide-react';
import Image from 'next/image';
import logo from '../../../assets/eyego-logo.png';
import { useState } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell
} from 'recharts';
import { chartData, pieData } from '@/_mockedData/mockedData';
import UsersTable from "../UsersTable/UsersTable";
import { useRouter } from 'next/navigation';

function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    let router = useRouter();
    function handleLogout() {
        localStorage.removeItem('userToken');
        router.push('/login');

    }
    const stats = [
        {
            name: 'Total Users',
            value: '2,651',
            change: '+4.75%',
            icon: Users,
            color: 'text-blue-600',
            bgColor: 'bg-blue-50'
        },
        {
            name: 'Revenue',
            value: '$405,091.00',
            change: '+54.02%',
            icon: DollarSign,
            color: 'text-green-600',
            bgColor: 'bg-green-50'
        },
        {
            name: 'Growth Rate',
            value: '24.57%',
            change: '+14.05%',
            icon: TrendingUp,
            color: 'text-purple-600',
            bgColor: 'bg-purple-50'
        },
        {
            name: 'Active Sessions',
            value: '573',
            change: '+12.00%',
            icon: BarChart3,
            color: 'text-orange-600',
            bgColor: 'bg-orange-50'
        }
    ];

    return (
        <>
            {sidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    className="fixed inset-0 z-40 bg-black/30 lg:hidden"
                />
            )}

            <div className="min-h-screen flex flex-col bg-gray-50 relative">


                <nav className="bg-[#19A9EA] border-b border-gray-100 shadow-2xl p-4 flex items-center justify-between h-16 z-50">
                    <div className="flex items-center gap-4">
                        <button
                            className="text-white lg:hidden"
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                        >
                            <Menu className="h-7 w-7" />
                        </button>
                        <h2 className="text-2xl font-bold text-white">Dashboard</h2>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-9 w-9 bg-white rounded-full flex items-center justify-center">
                            <User className="h-6 w-6 text-[#19A9EA]" />
                        </div>
                        <button className="p-2 text-white hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-300" onClick={handleLogout}>
                            <LogOut className="h-6 w-6" />
                        </button>
                    </div>
                </nav>

                <div className="flex flex-1 overflow-hidden">


                    <aside
                        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out  ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0  `}>
                        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
                            <div className="flex items-center">
                                <Image className="w-9 h-10" src={logo} alt="Eyego Logo" />
                                <span className="ml-2 text-xl font-bold text-[#19A9EA]">Eyego</span>
                            </div>
                            <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        <nav className="mt-8 px-6 space-y-2">
                            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-[#19A9EA] bg-blue-50 rounded-lg">
                                <BarChart3 className="h-5 w-5 mr-3" />
                                Dashboard
                            </a>
                            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-[#19A9EA] hover:bg-gray-50 rounded-lg">
                                <Users className="h-5 w-5 mr-3" />
                                Users
                            </a>
                        </nav>
                    </aside>


                    <main className="flex-1 p-6 overflow-y-auto">

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
                            {stats.map((stat) => (
                                <div
                                    key={stat.name}
                                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 transition-all duration-300 transform hover:scale-105"
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-gray-600">{stat.name}</p>
                                            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                                            <p className="text-sm text-green-600 mt-1">{stat.change} from last month</p>
                                        </div>
                                        <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                                            <stat.icon className={`h-6 w-6 ${stat.color}`} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>


                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 w-full">
                            <h3 className="text-lg font-semibold text-gray-900 mb-6">Monthly Revenue</h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip
                                        formatter={(value, name) => [
                                            name === 'revenue' ? `$${value.toLocaleString()}` : value,
                                            name === 'revenue' ? 'Revenue' : 'Users'
                                        ]}
                                    />
                                    <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mt-7">
                            <h3 className="text-lg font-semibold text-gray-900 mb-6">User Status</h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={pieData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={120}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {pieData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="mt-4 space-y-2">
                                {pieData.map((entry, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className={`w-3 h-3 rounded-full mr-2`} style={{ backgroundColor: entry.color }}></div>
                                            <span className="text-sm text-gray-600">{entry.name}</span>
                                        </div>
                                        <span className="text-sm font-medium">{entry.value}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8 mt-7">
                            <h3 className="text-lg font-semibold text-gray-900 mb-6">User Growth Trend</h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip formatter={(value) => [value, 'Users']} />
                                    <Line
                                        type="monotone"
                                        dataKey="users"
                                        stroke="#8b5cf6"
                                        strokeWidth={3}
                                        dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
                                        activeDot={{ r: 6, stroke: '#8b5cf6', strokeWidth: 2, fill: '#fff' }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                        <UsersTable />
                    </main>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
