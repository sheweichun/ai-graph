export function isString(val: any) {
  return typeof val === 'string';
}

export function isNumber(val: any) {
  return typeof val === 'number';
}

export function isBoolean(val: any) {
  return typeof val === 'boolean';
}

export function isNull(val: any) {
  return val == null;
}
