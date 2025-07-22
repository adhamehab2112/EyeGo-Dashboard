'use client';
import { User, LogOut, BarChart3, Users, DollarSign, TrendingUp, Menu, X } from 'lucide-react';
import Image from 'next/image';
import logo from '../../assets/eyego-logo.png'
import { useState } from 'react';

function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
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
            {sidebarOpen && <div className="fixed inset-0 z-50 bg-white/50 "></div>}
            <div className="min-h-screen bg-gray-50">

                <nav className='bg-[#19A9EA] border-b border-gray-100 shadow-2xl p-4 flex items-center justify-between h-16'>
                    <div className="flex items-center justify-between w-1/2 lg:w-1/7 ">
                        <button className='cursor-pointer lg:hidden ' onClick={() => { setSidebarOpen(!sidebarOpen) }}>
                            <Menu className="h-7 w-7" />
                        </button>
                        <h2 className='text-2xl font-bold mb-1 mr-5 mt-1 text-white'>Dashboard</h2>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="cursor-pointer h-7 w-7 bg-white rounded-full flex items-center justify-center lg:h-10 lg:w-10">
                            <User className="h-6 w-6 text-[#19A9EA]" />
                        </div>
                        <button className="cursor-pointer p-2 text-white hover:text-gray-900 hover:bg-gray-100 rounded-lg ml-2 transition-all duration-500">
                            <LogOut className="h-6 w-6" />
                        </button>
                    </div>
                </nav>

                <div className="flex items-center">
                    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-[white] shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0 transition-transform duration-300 ease-in-out lg:min-h-[calc(100vh-64px)] `}>
                        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
                            <div className="flex items-center">
                                <Image className="w-9 h-10 " src={logo} alt="Eyego Logo" />
                                <span className="ml-2 text-xl font-bold text-[#19A9EA]">Eyego</span>
                            </div>
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="lg:hidden"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        <nav className="mt-8 px-6">
                            <div className="space-y-2">
                                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-[#19A9EA] bg-blue-50 rounded-lg">
                                    <BarChart3 className="h-5 w-5 mr-3" />
                                    Dashboard
                                </a>
                                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-[#19A9EA] hover:bg-gray-50 rounded-lg">
                                    <Users className="h-5 w-5 mr-3" />
                                    Users
                                </a>
                            </div>
                        </nav>
                    </div>
                    <div className="w-full mx-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-8 mt-10 ">
                            {stats.map((stat) => (
                                <div key={stat.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 transition-all duration-300 transform hover:scale-105">
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
                    </div>
                </div>

            </div>
        </>

    );
}

export default Dashboard;
