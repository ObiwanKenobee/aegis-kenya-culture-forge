
import React from 'react';
import { CheckCircle, Circle, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface TaskCardProps {
  title: string;
  description?: string;
  status?: 'pending' | 'completed' | 'upcoming';
  dueDate?: string;
  type?: 'bantu' | 'nilotic' | 'cushitic' | 'default';
  onComplete?: () => void;
}

const TaskCard = ({ 
  title, 
  description, 
  status = 'pending', 
  dueDate,
  type = 'default',
  onComplete
}: TaskCardProps) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'upcoming':
        return <Clock className="h-5 w-5 text-amber-500" />;
      default:
        return <Circle className="h-5 w-5 text-gray-400" />;
    }
  };

  const getAccentColor = () => {
    switch (type) {
      case 'bantu':
        return 'border-l-bantu';
      case 'nilotic':
        return 'border-l-nilotic';
      case 'cushitic':
        return 'border-l-cushitic';
      default:
        return 'border-l-gray-300';
    }
  };

  return (
    <div className={cn(
      'bg-white rounded-md border shadow-sm p-4 border-l-4 flex flex-col',
      getAccentColor()
    )}>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          {getStatusIcon()}
          <h3 className={cn(
            'font-medium',
            status === 'completed' ? 'text-gray-500 line-through' : 'text-gray-800'
          )}>
            {title}
          </h3>
        </div>
        
        {dueDate && (
          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
            {dueDate}
          </span>
        )}
      </div>
      
      {description && (
        <p className={cn(
          "text-sm mt-2",
          status === 'completed' ? 'text-gray-400' : 'text-gray-600'
        )}>
          {description}
        </p>
      )}
      
      {status !== 'completed' && onComplete && (
        <Button 
          variant="outline" 
          size="sm" 
          className="mt-4 self-end"
          onClick={onComplete}
        >
          Mark Complete
        </Button>
      )}
    </div>
  );
};

export default TaskCard;
