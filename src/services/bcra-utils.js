const BcraApi = {
  MONETARIAS: '/estadisticas/v3.0/Monetarias',
  CAMBIARIAS_MAESTROS: '/estadisticascambiarias/v1.0/Maestros/Divisas',
  CAMBIARIAS_COTIZACIONES: '/estadisticascambiarias/v1.0/Cotizaciones',
};

export function getUrlMonetarias() {
  return BcraApi.MONETARIAS;
};

export function getUrlDivisasMaestros() {
  return BcraApi.CAMBIARIAS_MAESTROS;
};

export function getUrlDivisasCotizaciones(fechadateFrom = '', fechadateTo = '', currencyCode = '', limit = '', offset = '') {
  var response = BcraApi.CAMBIARIAS_COTIZACIONES;

  if (currencyCode != '') {
    response = response + `/codMoneda=${currencyCode}`;

    if (fechadateFrom != '' && fechadateTo != '') response = response + `?fechaDesde=${fechadateFrom}&fechaHasta=${fechadateTo}`;

    if (limit != '') response = response + `&limit=${limit}`;

    if (offset != '') response = response + `&offset=${offset}`;
  }
  return response;
};