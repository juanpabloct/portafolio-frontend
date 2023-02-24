import { ReactNode, useState } from "react";
import { Button } from "../button";
interface PropsStepByStep {
  element: { title: string; elements: ReactNode }[];
  textLastStep: string;
  actionLastStep: () => void;
  valid: boolean;
}
export const StepByStep = ({
  actionLastStep,
  element,
  textLastStep,
  valid,
}: PropsStepByStep) => {
  const [step, setStep] = useState(0);
  const cuantitySteps = element.length;
  const { elements, title } = element[step];
  return (
    <div className="w-full h-full grid  grid-rows-6 grid-cols-1 justify-around items-center justify-items-center ">
      <div className="flex w-11/12">
        {element.map((element, i) => {
          const validate = i !== cuantitySteps - 1;
          return (
            <div
              className={`rounded-full  flex ${validate ? "w-full" : "w-min"}`}
              key={i}
            >
              <div
                className={`cursor-pointer ${
                  i <= step ? "bg-[#5c6d93]" : "bg-zinc-800"
                } text-center text-white rounded-full w-[1.75rem]`}
                onClick={() => setStep(i)}
              >
                {i}
              </div>
              {validate && (
                <div
                  className={`w-full ${
                    i < step ? "bg-blue-500" : "bg-zinc-800"
                  } h-1 self-center`}
                ></div>
              )}
            </div>
          );
        })}
      </div>
      <section className="w-3/6 row-span-4">
        <div className="h-full flex flex-col w-full justify-center">
          <div className="gap-3 flex flex-col">
            <h2 className="text-center">{title}</h2>
            {elements}
          </div>
        </div>
      </section>
      <div className="w-full justify-center flex">
        <Button
          text={step !== element.length - 1 ? "Continuar" : textLastStep}
          action={() => {
            step !== cuantitySteps - 1
              ? setStep((current) => current + 1)
              : valid && actionLastStep();
          }}
          validate={cuantitySteps - 1 !== step || valid ? false : true}
        />
      </div>
    </div>
  );
};
