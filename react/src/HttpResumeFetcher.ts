import { ResumeDAO } from "./dataobjects/ResumeDAO";
import ResumeFetcher from "./ResumeFetcher";
import axios from 'axios'
import { WorkExperienceDAO } from "./dataobjects/WorkExperienceDAO";

class HttpResumeFetcher implements ResumeFetcher {
    private url: string;
    constructor(url: string) {
        this.url = url;
    }
    async fetchResume(): Promise<ResumeDAO> {
        const response = await axios.get(this.url);
        const resumeData = response.data;
        const experience = resumeData.experience.map((e: any) => {
            const workExperience: WorkExperienceDAO = {
                ...e,
                start: new Date(e.start),
                end: e.end ? new Date(e.end) : undefined
            }
            return workExperience;
        });

        return {
            ...resumeData,
            experience
        };
    }

}

export default HttpResumeFetcher;