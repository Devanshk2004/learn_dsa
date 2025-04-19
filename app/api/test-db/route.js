import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import mongoose from 'mongoose';

export async function GET() {
  try {
    // Attempt to connect to MongoDB
    await dbConnect();
    
    // If we get here, connection was successful
    return NextResponse.json({
      success: true,
      message: 'Database connection successful',
      dbName: mongoose.connection.name,
      connectionState: mongoose.connection.readyState,
    });
  } catch (error) {
    // Connection failed
    return NextResponse.json({
      success: false,
      message: 'Database connection failed',
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : null,
    }, { status: 500 });
  }
} 