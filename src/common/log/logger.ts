import winston from 'winston';

export default class Logger {
    private logger!: any;

    public static async init(
        transports: any,
        format: any,
        defaultMeta: any,
    ) {
        return winston.createLogger({
            format: format,
            transports,
            defaultMeta
        });
    }

    public constructor(logger: any) {
        this.logger = logger;
    }

    public async crit(trace: any): Promise<void> {
        this.logger.crit(trace);
    }

    public async debug(debug: any): Promise<void> {
        this.logger.debug(debug);
    }

    public async info(info: any): Promise<void> {
        this.logger.info(info);
    }

    public async warn(warning: any): Promise<void> {
        this.logger.warn(warning);
    }

    public async error(error: any): Promise<void> {
        this.logger.error(error);
    }

    public async fatal(fatal: any): Promise<void> {
        this.logger.fatal(fatal);
    }
};