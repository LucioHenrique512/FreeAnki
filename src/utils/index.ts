export const consoleLogger = (TYPE: 'RN-LOG' | 'RN-ERROR', text: string) =>
  console.log(`${TYPE}: ${text}`);
