import React, { useEffect, useState, useContext, useCallback } from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { UserContext } from '../../context/UserContext';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import InfoCard from '../../components/Cards/InfoCard';
import { LuWallet, LuTrendingUp, LuTrendingDown } from 'react-icons/lu';
import RecentTransactions from '../../components/Dashboard/RecentTransactions';
import RecentIncomeWithChart from '../../components/Dashboard/RecentIncomeWithChart';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [stats, setStats] = useState(null);

    const fetchDashboardData = useCallback(async () => {
        try {
            const response = await axiosInstance.get(API_PATHS.DASHBOARD.GET_DATA);
            setStats(response.data);
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
        }
    }, []);

    useEffect(() => {
        fetchDashboardData();
    }, [fetchDashboardData]);

    return (
        <DashboardLayout activeMenu='Dashboard'>
            <div className='my-5 mx-auto max-w-7xl px-4 md:px-6'>
                <div className='mb-8'>
                    <h1 className='text-[28px] font-bold text-[#000000] tracking-tight'>
                        FinTrack <span className='text-[#7C5CFC]'>Dashboard</span>
                    </h1>
                    <p className='text-[14px] text-[#9B8EC4] mt-1'>
                        Welcome back, <span className='font-bold text-[#7C5CFC]'>{user?.fullName}</span>. Here's your financial summary.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
                    <InfoCard
                        icon={<LuWallet />}
                        label='Total Balance'
                        value={stats?.totalBalance || '0'}
                        color='bg-[#7C5CFC]'
                    />
                    <InfoCard
                        icon={<LuTrendingUp />}
                        label='Total Income'
                        value={stats?.totalIncome || '0'}
                        color='bg-emerald-500'
                    />
                    <InfoCard
                        icon={<LuTrendingDown />}
                        label='Total Expense'
                        value={stats?.totalExpense || '0'}
                        color='bg-rose-500'
                    />
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    <div className='lg:col-span-2 '>
                    
                    <RecentTransactions
                        transactions={stats?.recentTransactions}
                        onSeeMore={() => navigate('/expense')}
                    />
                    
                </div>
                    <div className='lg:col-span-1 space-y-8'>
                        <RecentIncomeWithChart
                            data={stats?.last60DaysIncome?.transactions || []}
                            totalIncome={stats?.last60DaysIncome?.total || 0}
                        />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;
