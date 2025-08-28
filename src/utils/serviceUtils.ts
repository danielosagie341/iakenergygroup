import React from 'react';

/**
 * Sets the current service ID in the component's state.
 * 
 * @param serviceId The ID of the service to set as active.
 * @param setCurrentService The state setter function from the `useState` hook.
 */
export const handleServiceClick = (
  serviceId: string,
  setCurrentService: React.Dispatch<React.SetStateAction<string | null>>
): void => {
  setCurrentService(serviceId);
};
