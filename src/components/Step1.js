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
          <h4 className={twMerge(stepClasses)}>Step 1</h4>
        </div>
        <div>
          <h4 className={twMerge(inputFieldLabelClasses)}>
            Job Title <span className="text-red-500">*</span>
          </h4>
          <input className={formInputField} placeholder="ex. UI UX Designer" />
        </div>
        <div>
          <h4 className={twMerge(inputFieldLabelClasses)}>
            Company Name<span className="text-red-500">*</span>
          </h4>
          <input className={formInputField} placeholder="ex.Google" />
        </div>
        <div>
          <h4 className={twMerge(inputFieldLabelClasses)}>
            Industry<span className="text-red-500">*</span>{" "}
          </h4>
          <input
            className={formInputField}
            placeholder="ex.Information Technology"
          />
        </div>
        <div className="flex justify-between gap-[24px]">
          <div className="w-full">
            <h4 className={twMerge(inputFieldLabelClasses)}>Location</h4>
            <input className={formInputField} placeholder="ex.Chennai" />
          </div>
          <div className="w-full">
            <h4 className={twMerge(inputFieldLabelClasses)}>Remote-Type</h4>
            <input className={formInputField} placeholder="ex. In-Office" />
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
