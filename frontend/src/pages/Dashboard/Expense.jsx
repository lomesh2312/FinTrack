import React, { useEffect, useState, useContext, useCallback } from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { UserContext } from '../../context/UserContext';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import ExpenseList from '../../components/Expense/ExpenseList';
import ExpenseOverview from '../../components/Expense/ExpenseOverview';
import AddExpenseForm from '../../components/Expense/AddExpenseForm';
import Modal from '../../components/Modal';
import toast from 'react-hot-toast';

const Expense = () => {
  const { user } = useContext(UserContext);
  const [expenseData, setExpenseData] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const fetchExpenseDetails = useCallback(async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.EXPENSE.GET_ALL_EXPENSE);
      setExpenseData(response.data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  }, []);

  useEffect(() => {
    fetchExpenseDetails();
  }, [fetchExpenseDetails]);

  const handleAddExpense = async (formData) => {
    try {
      await axiosInstance.post(API_PATHS.EXPENSE.ADD_EXPENSE, formData);
      toast.success('Expense added successfully');
      setOpenModal(false);
      fetchExpenseDetails();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to add expense');
    }
  };

  const handleDeleteExpense = async (id) => {
    try {
      await axiosInstance.delete(API_PATHS.EXPENSE.DELETE_EXPENSE(id));
      toast.success('Expense deleted successfully');
      fetchExpenseDetails();
    } catch (err) {
      toast.error('Failed to delete expense');
    }
  };

  const handleDownloadExpense = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.EXPENSE.DOWNLOAD_EXPENSE, { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'expense_report.xlsx');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      toast.error('Failed to download report');
    }
  };

  return (
    <DashboardLayout activeMenu='Expense'>
      <div className='my-5 mx-auto max-w-7xl px-4 md:px-6'>
        <div className='mb-8'>
          <h1 className='text-[28px] font-bold text-[#000000] tracking-tight'>
            Expense <span className='text-[#7C5CFC]'>Tracking</span>
          </h1>
          <p className='text-[14px] text-[#9B8EC4] mt-1 italic font-medium'>
            Welcome back, {user?.fullName}. Monitor your spending habits and manage your budget.
          </p>
        </div>

        <div className='flex flex-col gap-8'>
          <ExpenseOverview
              transactions={expenseData}
              onExpenseIncome={() => setOpenModal(true)}
          />
          <ExpenseList
            transactions={expenseData}
            onDelete={handleDeleteExpense}
            onDownload={handleDownloadExpense}
          />
        </div>

        <Modal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          title='Add New Expense'
        >
          <AddExpenseForm onAddExpense={handleAddExpense} onCancel={() => setOpenModal(false)} />
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default Expense;
