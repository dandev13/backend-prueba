export interface PresenterInterface {
  data: any;
  detail: string;
  severities: 'success' | 'error' | 'info' | 'warn';
  summary: string;
  viewToast: boolean;
  count?: number;
}
