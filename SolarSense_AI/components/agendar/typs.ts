export interface SmartPlugEvent {
  id: string;
  name: string;
  deviceId: string;
  deviceName: string;
  startDate: Date;
  startTime: string; // Format: "HH:MM"
  duration: number; // Duration in hours
  isActive: boolean;
  isRecurring: boolean;
  recurringDays?: WeekDay[];
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SmartPlug {
  id: string;
  name: string;
  isOnline: boolean;
  isOn: boolean;
  powerConsumption: number; // in watts
  location: string;
  lastSeen: Date;
}

export enum WeekDay {
  SUNDAY = 0,
  MONDAY = 1,
  TUESDAY = 2,
  WEDNESDAY = 3,
  THURSDAY = 4,
  FRIDAY = 5,
  SATURDAY = 6,
}

export interface EventFormData {
  name: string;
  deviceId: string;
  date: Date;
  time: string;
  duration: number;
  isRecurring: boolean;
  recurringDays: WeekDay[];
  description: string;
}

export interface ScheduleContextType {
  events: SmartPlugEvent[];
  devices: SmartPlug[];
  addEvent: (event: Omit<SmartPlugEvent, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateEvent: (id: string, event: Partial<SmartPlugEvent>) => void;
  deleteEvent: (id: string) => void;
  toggleEvent: (id: string) => void;
  getUpcomingEvents: () => SmartPlugEvent[];
  getActiveEvents: () => SmartPlugEvent[];
}

export interface NotificationSettings {
  enabled: boolean;
  beforeStart: number; // minutes before event starts
  onStart: boolean;
  onEnd: boolean;
}