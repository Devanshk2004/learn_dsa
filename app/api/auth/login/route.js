import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import User from '@/models/User';
import { generateToken, setTokenCookie } from '@/lib/auth';

export async function POST(request) {
  try {
    // Connect to database
    await dbConnect();
    
    // Parse JSON body
    const body = await request.json();
    const { email, password } = body;
    
    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Please provide email and password' },
        { status: 400 }
      );
    }
    
    // Find user and include password for verification
    const user = await User.findOne({ email }).select('+password');
    
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      );
    }
    
    // Check if password matches
    const isMatch = await user.matchPassword(password);
    
    if (!isMatch) {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      );
    }
    
    // Generate token
    const token = generateToken(user._id);
    
    // Set token in cookie
    setTokenCookie(token);
    
    return NextResponse.json(
      {
        success: true,
        user: {
          _id: user._id.toString(),
          username: user.username,
          email: user.email,
        },
        message: 'Login successful',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Login error:', error);
    
    // Return a proper JSON response for any error
    return NextResponse.json(
      { success: false, message: 'Server error: ' + error.message },
      { status: 500 }
    );
  }
} 