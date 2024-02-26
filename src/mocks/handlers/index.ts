import { cartHandlers } from './cart';
import { dashboardHandlers } from './dashboard';

export const handlers = [...dashboardHandlers, ...cartHandlers];
