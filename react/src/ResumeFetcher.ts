import { ResumeDAO } from "./dataobjects/ResumeDAO";

interface ResumeFetcher {
    fetchResume(): Promise<ResumeDAO>;
}

export default ResumeFetcher;