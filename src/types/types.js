export const types = {

    //ABRIR Y CERRAR EL MODAL
    uiOpenModal: '[UI] Open modal',
    uiCloseModal: '[UI] Close modal',

    //ACCIONES PARA CALENDARIO
    setActiveEvent: '[CALENDAR] set active',
    addNewEvent: '[CALENDAR] add new event',
    clearActiveEvent:'[CALENDAR] clear active event',
    updateEvent: '[CALENDAR] update event',
    deleteEvent: '[CALENDAR] delete event',

    //ACCIONES PARA AUTORIZACIÓN
    authChecking:'[AUTH] checking login state',
    authCheckingFinish:'[AUTH] finish checking login state',
    authStartLogin:'[AUTH] start login',
    authLogin:'[AUTH] login',
    authStartRegister:'[AUTH] start register',
    authStartTokenRenew:'[AUTH] start token renew',
    authLogOut:'[AUTH] logout',
}