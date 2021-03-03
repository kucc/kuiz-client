export const SHOW_ALERT_MODAL = "modal/SHOW_ALERT_MODAL" as const;
export const HIDE_ALERT_MODAL = "modal/HIDE_ALERT_MODAL" as const;

export const showAlertModal = (message: string) => ({
  type: SHOW_ALERT_MODAL,
  payload: message,
});

export const hideAlertModal = () => ({
  type: HIDE_ALERT_MODAL,
});
