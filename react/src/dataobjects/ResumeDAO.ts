import { WorkExperienceDAO } from "./WorkExperienceDAO";

export type ResumeDAO = {
    /**
     * First and Last name
     */
    name: string;
    /**
     * Email address to contact you
     */
    email: string;
    /**
     * List of current/previous job experience
     */
    experience: WorkExperienceDAO[]
    /**
     * List of skills/keywords
     */
    skills: string[];
}