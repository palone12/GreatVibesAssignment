import React from "react";
import { twMerge } from "tailwind-merge";
const Form = ({
  headerClasses,
  stepClasses,
  inputFieldLabelClasses,
  formClassSmall,
  formClass,
  formInputField,
  fromButton,
  formButtonWrapper,
}) => {
  return (
    <div className={twMerge("flex flex-col gap-[96px]", formClass)}>
      <div className={twMerge("flex flex-col", formClassSmall)}>
        <div className="flex  justify-between w-full">
          <h4 className={twMerge(headerClasses)}>Create Job</h4>
          <h4 className={twMerge(stepClasses)}>Step 2</h4>
        </div>
        <div className="flex flex-col justify-between gap-[4px]">
          <div className="w-full">
            <h4 className={twMerge(inputFieldLabelClasses)}>Experience</h4>
          </div>
          <div className="w-full flex gap-[24px]">
            <input className={formInputField} placeholder="Miniumum" />
            <input className={formInputField} placeholder="Maximum" />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-[4px]">
          <div className="w-full">
            <h4 className={twMerge(inputFieldLabelClasses)}>Salary</h4>
          </div>
          <div className="w-full flex gap-[24px]">
            <input className={formInputField} placeholder="Miniumum" />
            <input className={formInputField} placeholder="Maximum" />
          </div>
        </div>
        <div>
          <h4 className={twMerge(inputFieldLabelClasses)}>Total employee</h4>
          <input className={formInputField} placeholder="ex.100" />
        </div>
        <div className="flex flex-col gap-[4px]">
          <h4 className={twMerge(inputFieldLabelClasses)}>Apply Type</h4>
          <div className="flex gap-[16px] text-[#7A7A7A]">
            <div className="flex gap-[4px] ">
              <input type="radio" />
              <label>Quick Apply</label>
            </div>
            <div className="flex gap-[4px]">
              <input type="radio" />
              <label>External Apply</label>
            </div>
          </div>
        </div>
      </div>
      <div className={twMerge("flex ", formButtonWrapper)}>
        <button className={fromButton}>Next</button>
      </div>
    </div>
  );
};

export default Form;
