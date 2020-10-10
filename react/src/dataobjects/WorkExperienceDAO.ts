export type WorkExperienceDAO = {
    /**
     * Job position title
     */
    title: string;
    /**
     * Name of company this work was for
     */
    company: string;
    /**
     * Start date of employment
     */
    start: Date;
    /**
     * End date of employment (optional)
     * 
     * If undefined, it indicates that you still work at this position
     */
    end?: Date;
    /**
     * List of duties you performed at this position
     */
    duties: string[];
}