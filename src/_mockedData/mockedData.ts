import { ChartData, PieData, User } from "./types";

export const mockUsers : User[] = [
  { id: 1, name: 'John Doe', email: 'john@eyego.ai', role: 'Admin', status: 'Active', joinDate: '2024-01-15', revenue: 15000 },
  { id: 2, name: 'Jane Smith', email: 'jane@eyego.ai', role: 'User', status: 'Active', joinDate: '2024-02-20', revenue: 8500 },
  { id: 3, name: 'Mike Johnson', email: 'mike@eyego.ai', role: 'Editor', status: 'Inactive', joinDate: '2024-01-10', revenue: 12000 },
  { id: 4, name: 'Sarah Wilson', email: 'sarah@eyego.ai', role: 'User', status: 'Active', joinDate: '2024-03-05', revenue: 6700 },
  { id: 5, name: 'David Brown', email: 'david@eyego.ai', role: 'Admin', status: 'Active', joinDate: '2024-01-25', revenue: 18500 },
  { id: 6, name: 'Lisa Davis', email: 'lisa@eyego.ai', role: 'User', status: 'Pending', joinDate: '2024-03-15', revenue: 4200 },
  { id: 7, name: 'Tom Miller', email: 'tom@eyego.ai', role: 'Editor', status: 'Active', joinDate: '2024-02-10', revenue: 9800 },
  { id: 8, name: 'Anna Garcia', email: 'anna@eyego.ai', role: 'User', status: 'Active', joinDate: '2024-03-01', revenue: 7300 },
  { id: 9, name: 'Chris Lee', email: 'chris@eyego.ai', role: 'Admin', status: 'Active', joinDate: '2024-01-30', revenue: 16200 },
  { id: 10, name: 'Emma White', email: 'emma@eyego.ai', role: 'User', status: 'Inactive', joinDate: '2024-02-25', revenue: 5900 },
];

export const chartData : ChartData[] = [
  { name: 'Jan', users: 400, revenue: 24000 },
  { name: 'Feb', users: 300, revenue: 13980 },
  { name: 'Mar', users: 200, revenue: 98000 },
  { name: 'Apr', users: 278, revenue: 39080 },
  { name: 'May', users: 189, revenue: 48000 },
  { name: 'Jun', users: 239, revenue: 38000 },
];

export const pieData : PieData[] = [
  { name: 'Active', value: 60, color: '#10b981' },
  { name: 'Inactive', value: 25, color: '#ef4444' },
  { name: 'Pending', value: 15, color: '#f59e0b' },
];
