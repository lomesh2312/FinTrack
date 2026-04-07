import React, { useEffect, useState, useContext, useCallback } from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { UserContext } from '../../context/UserContext';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import IncomeList from '../../components/Income/IncomeList';
import IncomeOverview from '../../components/Income/IncomeOverview';
import AddIncomeForm from '../../components/Income/AddIncomeForm';
import Modal from '../../components/Modal';
import toast from 'react-hot-toast';

const Income = () => {
  const { user } = useContext(UserContext);
  const [incomeData, setIncomeData] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const fetchIncomeDetails = useCallback(async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.INCOME.GET_ALL_INCOME);
      setIncomeData(response.data);
    } catch (error) {
      console.error('Error fetching income:', error);
    }
  }, []);

  useEffect(() => {
    fetchIncomeDetails();
  }, [fetchIncomeDetails]);

  const handleAddIncome = async (formData) => {
    try {
      await axiosInstance.post(API_PATHS.INCOME.ADD_INCOME, formData);
      toast.success('Income added successfully');
      setOpenModal(false);
      fetchIncomeDetails();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to add income');
    }
  };

  const handleDeleteIncome = async (id) => {
    try {
      await axiosInstance.delete(API_PATHS.INCOME.DELETE_INCOME(id));
      toast.success('Income deleted successfully');
      fetchIncomeDetails();
    } catch (err) {
      toast.error('Failed to delete income');
    }
  };

  const handleDownloadIncome = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.INCOME.DOWNLOAD_INCOME, { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'income_report.xlsx');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      toast.error('Failed to download report');
    }
  };

  return (
    <DashboardLayout activeMenu='Income'>
      <div className='my-5 mx-auto max-w-7xl px-4 md:px-6'>
        <div className='mb-8'>
          <h1 className='text-[28px] font-bold text-[#000000] tracking-tight'>
            Income <span className='text-[#7C5CFC]'>Management</span>
          </h1>
          <p className='text-[14px] text-[#9B8EC4] mt-1 italic font-medium'>
            Welcome back, {user?.fullName}. Efficiently track your sources of income here.
          </p>
        </div>

        <div className='flex flex-col gap-8'>
          <IncomeOverview
              transactions={incomeData}
              onAddIncome={() => setOpenModal(true)}
          />
          <IncomeList
            transactions={incomeData}
            onDelete={handleDeleteIncome}
            onDownload={handleDownloadIncome}
          />
        </div>

        <Modal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          title='Add New Income'
        >
          <AddIncomeForm onAddIncome={handleAddIncome} onCancel={() => setOpenModal(false)} />
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default Income;
