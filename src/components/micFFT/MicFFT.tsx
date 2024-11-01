'use client';

import { AutoSizer } from 'react-virtualized';

interface MicFFTProps {
  fft: number[];
  className?: string;
}

const MicFFT: React.FC<MicFFTProps> = ({ fft, className }) => {
  return (
    <div className="relative size-full">
      <AutoSizer>
        {({ width, height }: { width: number; height: number }) => (
          <svg
            viewBox={`0 0 ${width} ${height}`}
            width={width}
            height={height}
            className={`absolute inset-0 size-full ${className}`}
          >
            {Array.from({ length: 24 }).map((_, index) => {
              const value = (fft[index] ?? 0) / 4;
              const h = Math.min(Math.max(height * value, 2), height);
              const yOffset = height * 0.5 - h * 0.5;

              return (
                <rect
                  key={`mic-fft-${index}`}
                  height={h}
                  width={2}
                  x={2 + (index * (width - 4)) / 24}
                  y={yOffset}
                  rx={4}
                  fill="currentColor"
                />
              );
            })}
          </svg>
        )}
      </AutoSizer>
    </div>
  );
};

export default MicFFT;
