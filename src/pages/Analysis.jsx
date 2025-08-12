import ViolationTypeChart from "../components/analysis/ValidationTypeChart";
import ComPailenceScore from "../components/analysis/CompailenceScore";
import AnalysisHeading from "../components/analysis/AnalysisHeading";
import CaseReportBuilder from "../components/analysis/CaseReportBuilder";

export default function Analysis() {
  return (
    <div className="2xl:mt-8">
      <AnalysisHeading />

      <div className="grid grid-cols-2 gap-5 2xl:gap-9 2xl:mt-6">
        <ViolationTypeChart />
        <ComPailenceScore />
      </div>

      <div className="2xl:mt-10">
        <CaseReportBuilder />
      </div>
    </div>
  );
}
