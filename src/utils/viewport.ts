export const getOptimalFontSize = () => {
  if (typeof window === 'undefined') return '16px';
  
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  // Optimize for common laptop screen sizes
  if (width >= 1366 && width <= 1440 && height >= 768 && height <= 900) {
    return '15px';
  }
  
  if (width >= 1200 && width <= 1366) {
    return '14px';
  }
  
  return '16px';
};

export const isLaptopScreen = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= 1200 && window.innerWidth <= 1440;
};

export const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};
