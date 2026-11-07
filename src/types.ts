export type IconName =
  | 'pill'
  | 'bag'
  | 'spine'
  | 'activity'
  | 'baby'
  | 'sparkles'
  | 'phone'
  | 'mail'
  | 'map-pin'
  | 'instagram'
  | 'clock'
  | 'arrow-right'
  | 'arrow-up-right'
  | 'check'
  | 'menu'
  | 'close'
  | 'star'
  | 'shield'
  | 'info'
  | 'calendar'
  | 'heart'
  | 'plus'
  | 'leaf';

export interface Service {
  title: string;
  description: string;
  icon: IconName;
}
