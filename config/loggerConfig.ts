import { transports, format } from "winston";

export function options(testName: string) {
  return {
    transports: [
      new transports.File({
        filename: `test-results/logs/${testName}/log.log`,
        level: 'info',
        format: format.combine(
          format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
          format.align(),
          format.printf(info => `${info.level}: ${info.timestamp}: ${info.message}`)
        )
      })
    ]
  };
}