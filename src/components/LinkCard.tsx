
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface LinkCardProps {
  to: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  theme?: 'bantu' | 'nilotic' | 'cushitic' | 'default';
}

const LinkCard = ({ to, label, description, icon, theme = 'default' }: LinkCardProps) => {
  const getThemeClasses = () => {
    switch (theme) {
      case 'bantu':
        return 'bantu-theme cultural-pattern border-bantu hover:shadow-bantu/30';
      case 'nilotic':
        return 'nilotic-theme cultural-pattern border-nilotic hover:shadow-nilotic/30';
      case 'cushitic':
        return 'cushitic-theme cultural-pattern border-cushitic hover:shadow-cushitic/30';
      default:
        return 'bg-white hover:bg-gray-50 border-gray-200 hover:shadow-gray-200/30';
    }
  };

  return (
    <Link 
      to={to}
      className={cn(
        'block rounded-lg border shadow-sm hover:shadow-lg transition-all duration-300',
        'transform hover:-translate-y-1',
        getThemeClasses()
      )}
    >
      <div className="p-5 flex flex-col h-full">
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            {icon && <span className="mr-3">{icon}</span>}
            <h3 className={cn(
              'font-semibold text-lg',
              theme === 'default' ? 'text-gray-800' : 'text-white'
            )}>
              {label}
            </h3>
          </div>
          <ArrowRight className={cn(
            'h-5 w-5 opacity-60',
            theme === 'default' ? 'text-gray-500' : 'text-white'
          )} />
        </div>

        {description && (
          <p className={cn(
            'mt-2 text-sm',
            theme === 'default' ? 'text-gray-600' : 'text-white/80'
          )}>
            {description}
          </p>
        )}
      </div>
    </Link>
  );
};

export default LinkCard;
