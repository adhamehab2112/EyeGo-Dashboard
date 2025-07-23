"use client";
import { Provider } from 'react-redux'
import { store } from '../store'
import AuthGuard from './Components/AuthGuard/AuthGuard';
import Dashboard from './dashboard/page';
import DashboardPage from './dashboard/page';
export default function App() {
  return (
    <>
      <DashboardPage />
    </>
  );
}
