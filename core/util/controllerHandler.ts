import { ApiResponse } from './apiResponse';

/**
 * Wrapper pour controllers
 * Centralise le try/catch et la gestion des erreurs API
 */
export async function handle<T>(
  fn: () => Promise<T>,
) {
  try {
    return await fn();
  } catch (err) {
    return ApiResponse.error(err);
  }
}
