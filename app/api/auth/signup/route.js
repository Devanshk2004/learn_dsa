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
    const { username, email, password } = body;
    
    // Validate input
    if (!username || !email || !password) {
      return NextResponse.json(
        { success: false, message: 'Please provide all required fields' },
        { status: 400 }
      );
    }
    
    // Check if user already exists
    const userExists = await User.findOne({ email });
    
    if (userExists) {
      return NextResponse.json(
        { success: false, message: 'User already exists' },
        { status: 400 }
      );
    }
    
    // Create new user
    const user = await User.create({
      username,
      email,
      password,
    });
    
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
        message: 'Signup successful',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
} 