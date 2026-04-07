import moment from "moment";

export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const getInitials = (name) => {
    if (!name) return "";
    const words = name.split(" ");
    let initials = "";
    for (let i = 0; i < Math.min(words.length, 2); i++) {
        initials += words[i][0];
    }
    return initials.toUpperCase();
};

export const addThousandsSeparator = (num) => {
    if (num == null || isNaN(num)) return '';
    const [integerPart, fractionalPart] = num.toString().split('.');
    const formattedInteger = Number(integerPart).toLocaleString('en-IN');
    return fractionalPart ? `${formattedInteger}.${fractionalPart}` : formattedInteger;
};

const sortByDate = (data) => [...data].sort((a, b) => new Date(a.date) - new Date(b.date));

export const prepareExpenseBarChartData = (data = []) => {
    return sortByDate(data).map((item) => ({
      name: moment(item?.date).format('Do MMM'), 
      amount: Number(item?.amount || 0),         
      category: item?.category,
    }));
};

export const prepareIncomeBarChartData = (data = []) => {
    return sortByDate(data).map((item) => ({
        month: moment(item?.date).format('Do MMM'),
        amount: Number(item?.amount || 0),
        source: item?.source,
    }));
};

export const prepareExpenseLineChartData = (data = []) => {
    return sortByDate(data).map((item) => ({
        month: moment(item?.date).format('Do MMM'),
        amount: Number(item?.amount || 0),
        category: item?.category,
    }));
};
