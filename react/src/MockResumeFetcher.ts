import { ResumeDAO } from "./dataobjects/ResumeDAO";
import ResumeFetcher from "./ResumeFetcher";

class MockResumeFetcher implements ResumeFetcher {
    private resume: ResumeDAO;

    constructor(resume: ResumeDAO) {
        this.resume = resume;
    }

    async fetchResume(): Promise<ResumeDAO> {
        return this.resume;
    }
}

export default MockResumeFetcher;