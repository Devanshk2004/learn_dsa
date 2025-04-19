import { NextResponse } from 'next/server';
import { clearTokenCookie } from '@/lib/auth';

export async function POST() {
  try {
    await clearTokenCookie();
    return NextResponse.json({ success: true, message: 'Logged out successfully' });
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
} 