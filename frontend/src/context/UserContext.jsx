import React, { createContext, useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const updateUser = (userData) => setUser(userData);
    const clearUser = () => setUser(null);

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem("token");
            if (token) {
                try {
                    const response = await axiosInstance.get(API_PATHS.AUTH.GET_USER_INFO);
                    setUser(response.data);
                } catch (error) {
                    console.error("Failed to fetch user info:", error);
                    localStorage.removeItem("token");
                }
            }
            setLoading(false);
        };
        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, loading, updateUser, clearUser }}>
            {children}
        </UserContext.Provider>
    );
};