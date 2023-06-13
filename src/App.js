import JobCardContainer from "./components/JobCardContainer";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col justify-center items-center gap-10 bg-gray-300">
        <div className="flex justify-center pt-10 ">
          <Step1
            headerClasses="text-xl font-normal"
            stepClasses="text-base font-medium"
            inputFieldLabelClasses="text-sm font-medium"
            formClass="w-[577px] rounded  h-[564px] bg-[#FFFFFF] border border-[#E6E6E6] rounded-lg p-[32px]"
            formClassSmall="gap-[24px]"
            formInputField="w-full border border-[#E6E6E6] mt-[4px] rounded h-[36px] p-1"
            fromButton=" bg-[#1597E4] w-[68px] h-[40px] rounded text-white text-base font-medium rounded-md"
            formButtonWrapper="justify-end"
          />
        </div>
        <div className="flex justify-center pt-10">
          <Step2
            headerClasses="text-xl font-normal"
            stepClasses="text-base font-medium"
            inputFieldLabelClasses="text-sm font-medium"
            formClass="w-[577px] rounded  h-[564px] bg-[#FFFFFF] border border-[#E6E6E6] rounded-lg p-[32px]"
            formClassSmall="gap-[24px]"
            formInputField="w-full border border-[#E6E6E6] mt-[4px] rounded h-[36px] p-1"
            fromButton=" bg-[#1597E4] w-[68px] h-[40px] rounded text-white text-base font-medium rounded-md"
            formButtonWrapper="justify-end"
          />
        </div>
        <JobCardContainer />
      </div>
    </div>
  );
}

export default App;
