import React from 'react';

interface TechItem {
  name: string;
  angle: number;
}

const TechStackComponent: React.FC = () => {
  const techItems: TechItem[] = [
    { name: 'UiPath', angle: -60 },
    { name: 'Automation Anywhere', angle: -30 },
    { name: 'Blue Prism', angle: 0 },
    { name: 'Microsoft Power Automate', angle: 30 },
    { name: 'WorkFusion', angle: 60 },
    { name: 'Selenium (for bot testing)', angle: 100 },
    { name: 'AI/ML Integrations (optional)', angle: 130 }
  ];

  const radius = 200;
  const outerCircleX = 400;
  const outerCircleY = 280;
  const innerCircleX = 180; 
  const innerCircleY = 280;

  return (
    <div className="w-full h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 relative overflow-hidden">


      <div 
        className="absolute rounded-full"
        style={{
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          left: `${outerCircleX - radius}px`,
          top: `${outerCircleY - radius}px`,
          border: '1px dashed rgba(139, 92, 246, 0.3)'
        }}
      ></div>

      <div 
        className="absolute transform -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${innerCircleX}px`, top: `${innerCircleY}px` }}
      >
        <div className="relative">
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-200 to-blue-200 opacity-60 blur-lg absolute inset-0"></div>
          
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-300 via-blue-300 to-indigo-400 flex items-center justify-center relative z-10 shadow-xl">
            <div className="text-center">
              <div className="text-base font-semibold text-gray-700 leading-tight">
                Tech<br />Stack
              </div>
            </div>
          </div>
        </div>
      </div>

      <div 
        className="absolute w-72"
        style={{ left: `${innerCircleX + 60}px`, top: `${innerCircleY - 50}px` }}
      >
        <p className="text-sm text-gray-600 leading-relaxed ml-8">
          We are Partner, leveraging the latest and most 
          robust technologies to build large-
          scale, high-performance business 
          automation services
        </p>
      </div>

      {techItems.map((item, index) => {
        const angleRad = (item.angle * Math.PI) / 180;
        const dotX = outerCircleX + radius * Math.cos(angleRad);
        const dotY = outerCircleY + radius * Math.sin(angleRad);
        
        const labelX = dotX + 20;
        
        return (
          <div key={index}>
            <div
              className="absolute w-3 h-3 bg-purple-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20"
              style={{
                left: `${dotX}px`,
                top: `${dotY}px`
              }}
            ></div>
            
            <div
              className="absolute transform -translate-y-1/2"
              style={{
                left: `${labelX}px`,
                top: `${dotY}px`
              }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-white/50">
                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            </div>

            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
              <line
                x1={dotX}
                y1={dotY}
                x2={dotX + 20}
                y2={dotY}
                stroke="rgba(139, 92, 246, 0.4)"
                strokeWidth="1"
              />
            </svg>
          </div>
        );
      })}
    </div>
  );
};

export default TechStackComponent;