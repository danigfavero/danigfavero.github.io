type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogEntry {
  level: LogLevel;
  message: string;
  context?: Record<string, unknown>;
  timestamp: string;
}

class Logger {
  private isDevelopment: boolean;

  constructor() {
    this.isDevelopment = process.env.NODE_ENV === 'development';
  }

  private log(level: LogLevel, message: string, context?: Record<string, unknown>): void {
    const entry: LogEntry = {
      level,
      message,
      context,
      timestamp: new Date().toISOString(),
    };

    // In development, use console for immediate feedback
    if (this.isDevelopment) {
      switch (level) {
        case 'debug':
        case 'info':
          console.log(`[${entry.timestamp}] ${level.toUpperCase()}: ${message}`, context || '');
          break;
        case 'warn':
          console.warn(`[${entry.timestamp}] WARN: ${message}`, context || '');
          break;
        case 'error':
          console.error(`[${entry.timestamp}] ERROR: ${message}`, context || '');
          break;
      }
    } else {
      // In production, you could integrate with external logging services
      // For now, we'll use structured console logging for simplicity
      console.log(JSON.stringify(entry));
    }
  }

  debug(message: string, context?: Record<string, unknown>): void {
    this.log('debug', message, context);
  }

  info(message: string, context?: Record<string, unknown>): void {
    this.log('info', message, context);
  }

  warn(message: string, context?: Record<string, unknown>): void {
    this.log('warn', message, context);
  }

  error(message: string, context?: Record<string, unknown>): void {
    this.log('error', message, context);
  }
}

export const logger = new Logger(); 