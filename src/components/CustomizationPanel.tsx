
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CustomOption {
  name: string;
  options: string[];
  type: 'color' | 'size' | 'text' | 'select';
}

interface CustomizationPanelProps {
  options: CustomOption[];
  onOptionChange: (name: string, value: string) => void;
  selectedOptions: Record<string, string>;
  className?: string;
}

const CustomizationPanel: React.FC<CustomizationPanelProps> = ({
  options,
  onOptionChange,
  selectedOptions,
  className,
}) => {
  const [customText, setCustomText] = useState('');

  const handleTextChange = (name: string, text: string) => {
    setCustomText(text);
    onOptionChange(name, text);
  };

  return (
    <div className={cn("space-y-8 animate-fade-in", className)}>
      <h3 className="text-lg font-medium text-primary">Customize Your Item</h3>

      {options.map((option) => (
        <div key={option.name} className="space-y-3">
          <h4 className="text-sm font-medium text-primary">{option.name}</h4>

          {option.type === 'color' && (
            <div className="flex flex-wrap gap-3">
              {option.options.map((color) => (
                <button
                  key={color}
                  className={cn(
                    "relative h-9 w-9 rounded-full border transition-all",
                    selectedOptions[option.name] === color
                      ? "ring-2 ring-primary ring-offset-2"
                      : "ring-0 hover:ring-1 hover:ring-primary/50 hover:ring-offset-1"
                  )}
                  style={{ backgroundColor: color }}
                  onClick={() => onOptionChange(option.name, color)}
                  aria-label={`Select ${color}`}
                >
                  {selectedOptions[option.name] === color && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <Check 
                        size={14} 
                        className={
                          color === '#FFFFFF' || color === '#F8F8F8' || color === '#EEEEEE'
                            ? 'text-black' 
                            : 'text-white'
                        } 
                      />
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}

          {option.type === 'size' && (
            <div className="flex flex-wrap gap-2">
              {option.options.map((size) => (
                <button
                  key={size}
                  className={cn(
                    "flex h-9 min-w-[2.5rem] items-center justify-center rounded-md border px-3 text-sm transition-all",
                    selectedOptions[option.name] === size
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-input bg-background hover:bg-secondary hover:text-secondary-foreground"
                  )}
                  onClick={() => onOptionChange(option.name, size)}
                >
                  {size}
                </button>
              ))}
            </div>
          )}

          {option.type === 'text' && (
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Enter your custom text..."
                className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                value={customText}
                onChange={(e) => handleTextChange(option.name, e.target.value)}
                maxLength={20}
              />
              <p className="text-xs text-muted-foreground">
                {customText.length}/20 characters used
              </p>
            </div>
          )}

          {option.type === 'select' && (
            <div className="space-y-2">
              <select
                className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                onChange={(e) => onOptionChange(option.name, e.target.value)}
                value={selectedOptions[option.name] || ''}
              >
                <option value="" disabled>Select an option</option>
                {option.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CustomizationPanel;
