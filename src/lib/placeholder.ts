// Componente para gerar imagens placeholder
export const generatePlaceholder = (width: number, height: number, text: string, color: string) => {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad${color}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color}20;stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color}40;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad${color.replace('#', '')})" />
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="18" font-weight="bold" 
            text-anchor="middle" dy=".3em" fill="${color}">
        ${text}
      </text>
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
};