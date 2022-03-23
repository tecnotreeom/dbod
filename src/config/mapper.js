/**
 * @author om Gupta
 */
import { DashboardScreen } from '../features/dashboard/screens/dashboard.screen';
import { OperationScreen } from '../features/dashboard/screens/operation.screen';
import { KpiScreen } from '../features/dashboard/screens/kpi.screen';
import { ProfileScreen } from '../features/profile/profile.screen';
// @constants
const components = [DashboardScreen, OperationScreen, KpiScreen, ProfileScreen];
/**
 * @param {string} componentIndex
 * @returns {function}
 */
export const mapComponent = (componentIndex) => components[componentIndex];
