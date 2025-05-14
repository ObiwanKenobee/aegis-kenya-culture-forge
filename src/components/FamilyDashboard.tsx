
import React, { ReactNode } from 'react';

interface FamilyDashboardProps {
  children: ReactNode;
  userName?: string;
}

const FamilyDashboard = ({ children, userName = 'Jambo' }: FamilyDashboardProps) => {
  const currentDate = new Date();
  const dateOptions: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', dateOptions);

  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Hello, {userName}</h1>
        <p className="text-gray-600">{formattedDate}</p>
      </div>
      
      <div className="space-y-8">
        {children}
      </div>
    </div>
  );
};

export default FamilyDashboard;
