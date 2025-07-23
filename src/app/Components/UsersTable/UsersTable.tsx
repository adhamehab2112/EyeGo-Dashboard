import React, { useMemo, useState } from 'react'
import { mockUsers } from '../../../_mockedData/mockedData'
import { ChevronLeft, ChevronRight, Search, SortAsc, SortAscIcon, SortDesc } from 'lucide-react';




function UsersTable() {
    let [searchValue, setSearchValue] = useState("");
    let [currentPage, setCurrentPage] = useState(1);
    let itemsPerPage = 5;
    let [sortField, setSortField] = useState('name');
    let [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');;
    let [filterRole, setFilterRole] = useState('all');
    let [filterStatus, setFilterStatus] = useState('all');
    let [searchTerm, setSearchTerm] = useState('');
    const SortIcon = ({ field }: any) => {
        if (sortField !== field) return null;
        return sortDirection === 'asc' ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />;
    };
    const handleSort = (field: string) => {
        if (sortField === field) {
            setSortDirection(prev => (prev === 'asc' ? 'desc' : 'asc'));
        } else {
            setSortField(field);
            setSortDirection('asc');
        }
    };
    const filteredAndSortedData = useMemo(() => {
        let filtered = mockUsers.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.email.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (filterRole !== 'all') {
            filtered = filtered.filter(item => item.role === filterRole);
        }

        if (filterStatus !== 'all') {
            filtered = filtered.filter(item => item.status === filterStatus);
        }

        return filtered.sort((a: any, b: any) => {
            const aValue = a[sortField];
            const bValue = b[sortField];

            if (sortDirection === 'asc') {
                return aValue > bValue ? 1 : -1;
            } else {
                return aValue < bValue ? 1 : -1;
            }
        });
    }, [mockUsers, searchTerm, sortField, sortDirection, filterRole, filterStatus]);
    let pagedData = useMemo(() => {
        let startIndex = (currentPage - 1) * itemsPerPage;
        return filteredAndSortedData.slice(startIndex, startIndex + itemsPerPage);
    }, [currentPage,filteredAndSortedData])
    const totalPages = Math.ceil(mockUsers.length / itemsPerPage);
    return (
        <>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                    <div className="flex flex-col  gap-4 items-start  justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">User Management</h3>
                        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-full">
                            <div className="relative">
                                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    type="text" placeholder="Search users..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg   focus:border-transparent" />
                            </div>
                            <select
                                value={filterRole}
                                onChange={(e) => setFilterRole(e.target.value)}
                                className="px-3 py-2 w-1/2 lg:w-1/5  border border-gray-300 rounded-lg " >
                                <option value="all">All Roles</option>
                                <option value="Admin">Admin</option>
                                <option value="User">User</option>
                                <option value="Editor">Editor</option>
                            </select>
                            <select
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                                className="px-3 w-1/2 lg:w-1/5  py-2 border border-gray-300 rounded-lg " >
                                <option value="all">All Status</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                                <option value="Pending">Pending</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="overflow-x-auto">

                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleSort('name')}
                                >
                                    <div className="flex items-center space-x-1">
                                        <span>Name</span>
                                        <SortIcon field="name" />
                                    </div>
                                </th>
                                <th
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleSort('email')}
                                >
                                    <div className="flex items-center space-x-1">
                                        <span>Email</span>
                                        <SortIcon field="email" />
                                    </div>
                                </th>
                                <th
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleSort('role')}
                                >
                                    <div className="flex items-center space-x-1">
                                        <span>Role</span>
                                        <SortIcon field="role" />
                                    </div>
                                </th>
                                <th
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleSort('status')}
                                >
                                    <div className="flex items-center space-x-1">
                                        <span>Status</span>
                                        <SortIcon field="status" />
                                    </div>
                                </th>
                                <th
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleSort('revenue')}
                                >
                                    <div className="flex items-center space-x-1">
                                        <span>Revenue</span>
                                        <SortIcon field="revenue" />
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {pagedData.map((user, _i) => (
                                <tr key={_i} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium">
                                                {user.name.charAt(0)}
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {user.email}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 py-1 text-xs rounded-full ${user.role === 'Admin' ? 'bg-purple-100 text-purple-800' :
                                            user.role === 'Editor' ? 'bg-blue-100 text-blue-800' :
                                                'bg-gray-100 text-gray-800'
                                            }`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 py-1 text-xs rounded-full ${user.status === 'Active' ? 'bg-green-100 text-green-800' :
                                            user.status === 'Inactive' ? 'bg-red-100 text-red-800' :
                                                'bg-yellow-100 text-yellow-800'
                                            }`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        ${user.revenue.toLocaleString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="px-6 py-3 border-t border-gray-200 ">
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className="p-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </button>
                        <span className="px-3 py-1 text-sm">
                            {currentPage} of {totalPages}
                        </span>
                        <button
                            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className="p-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UsersTable