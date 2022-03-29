var DELIVERY_METHODS = { HOME_DELIVERY: "Entregado el", PICKUP_FROM_STORE: "Retiro en tienda" };
var DELIVERY_STATUS = {
    DELIVERED: "Compra entregada",
    IN_PROCESS: "Solicitud recibida",
    WITH_INVOICE: "Compra confirmada",
    SHIPMENT_IN_PROCESS: "Compra en camino",
    CANCELED: "Compra cancelada",
};
export var getDeliveryMethod = function (method) {
    return DELIVERY_METHODS[method] || method;
};
export var getDeliveryStatus = function (status) {
    return DELIVERY_STATUS[status] || status;
};
