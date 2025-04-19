import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

// Generate JWT token
export const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// Set token in cookie
export const setTokenCookie = (token) => {
  cookies().set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    path: '/',
  });
};

// Get token from cookie
export const getToken = async () => {
  const cookieStore = await cookies();
  return cookieStore.get('token')?.value;
};

// Verify token
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};

// Clear token cookie
export const clearTokenCookie = () => {
  cookies().delete('token');
}; 