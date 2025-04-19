'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const checkUserLoggedIn = async () => {
      try {
        const res = await fetch('/api/auth/me');
        
        if (!res.ok) {
          setUser(null);
          setLoading(false);
          return;
        }
        
        const data = await res.json();
        
        if (data.success) {
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Failed to fetch user:', error);
        setUser(null);
      }
      
      setLoading(false);
    };

    checkUserLoggedIn();
  }, []);

  // Register user
  const register = async (userData) => {
    try {
      setLoading(true);
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setUser(data.user);
        router.push('/');
        return { success: true };
      } else {
        return { 
          success: false, 
          message: data.message || 'Registration failed'
        };
      }
    } catch (error) {
      console.error('Register error:', error);
      return { 
        success: false, 
        message: 'An unexpected error occurred'
      };
    } finally {
      setLoading(false);
    }
  };

  // Login user
  const login = async (email, password) => {
    try {
      setLoading(true);
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setUser(data.user);
        router.push('/');
        return { success: true };
      } else {
        return { 
          success: false, 
          message: data.message || 'Authentication failed'
        };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { 
        success: false, 
        message: 'An unexpected error occurred'
      };
    } finally {
      setLoading(false);
    }
  };

  // Logout user
  const logout = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/auth/logout', {
        method: 'POST',
      });

      if (res.ok) {
        setUser(null);
        router.push('/');
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); 