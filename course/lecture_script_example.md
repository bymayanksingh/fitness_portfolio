# Sample Lecture Script: Creating the Theme Toggle Component

## Introduction (2 minutes)
Hello everyone! In this lecture, we'll create a professional theme toggle component for our fitness website. This component will allow users to switch between light and dark modes, with smooth transitions and persistent state.

## Component Overview (3 minutes)
Our theme toggle will feature:
- Smooth icon transitions
- Persistent theme storage
- Automatic system preference detection
- Accessible keyboard controls
- Mobile-friendly touch targets

## Step-by-Step Implementation (15 minutes)

### 1. Creating the Theme Context
First, let's set up our theme context to manage the theme state:

```typescript
// src/contexts/ThemeContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check local storage or system preference
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme') as Theme;
      if (stored) return stored;
      
      return window.matchMedia('(prefers-color-scheme: dark)').matches 
        ? 'dark' 
        : 'light';
    }
    return 'light';
  });

  // Update document class and local storage when theme changes
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

### 2. Creating the Toggle Component
Now, let's create our theme toggle button:

```typescript
// src/components/ThemeToggle.tsx
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-material-100 dark:bg-dark-elevation-2
               hover:bg-material-200 dark:hover:bg-dark-elevation-3
               transition-colors duration-200"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-material-900" />
      ) : (
        <Sun className="w-5 h-5 text-material-50" />
      )}
    </button>
  );
}
```

### 3. Adding Animations
Let's enhance the toggle with smooth transitions:

```typescript
// Updated ThemeToggle.tsx
<button
  onClick={toggleTheme}
  className="p-2 rounded-lg bg-material-100 dark:bg-dark-elevation-2
           hover:bg-material-200 dark:hover:bg-dark-elevation-3
           transition-all duration-300 transform hover:scale-110
           active:scale-95"
  aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
>
  <div className="relative w-5 h-5">
    <Sun
      className={`absolute inset-0 transform transition-transform duration-300
                ${theme === 'light' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}
                text-material-900`}
    />
    <Moon
      className={`absolute inset-0 transform transition-transform duration-300
                ${theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}
                text-material-50`}
    />
  </div>
</button>
```

## Testing the Component (5 minutes)
Let's test our theme toggle:
1. Check initial theme detection
2. Verify theme persistence
3. Test keyboard accessibility
4. Ensure smooth transitions
5. Verify mobile responsiveness

## Common Issues and Solutions (3 minutes)
1. Flash of incorrect theme
2. Transition glitches
3. Local storage issues
4. System preference conflicts

## Best Practices and Tips (2 minutes)
1. Always provide keyboard accessibility
2. Use semantic HTML
3. Implement smooth transitions
4. Consider system preferences
5. Maintain consistent styling

## Homework Assignment
1. Add a theme preference setting to the user profile
2. Implement a scheduled theme change feature
3. Add different color schemes beyond just light/dark

## Additional Resources
- MDN Web Docs on color schemes
- TailwindCSS dark mode documentation
- React Context API documentation
- WCAG accessibility guidelines

Remember to check the course resources for the complete source code and additional examples!
