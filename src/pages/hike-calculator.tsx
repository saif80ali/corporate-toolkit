import { useEffect, useRef, useState } from "react";

function HikeCalculator() {
  const timerRef = useRef<NodeJS.Timeout>(null);
  const [selectedOption, setSelectedOption] = useState("salary");
  const enFormatter = new Intl.NumberFormat('en-IN', { style: 'decimal' });
  const [salary, setSalary] = useState({
    currentSalary: 1000000,
    newSalary: 2000000,
    hikePercentage: 10
  })

  useEffect(() => {
    debouncedhikeCalculator();
  },[salary, selectedOption])

  
  const [newSalary, setNewSalary] = useState("100");

  const debounce = <T extends (...args: Parameters<T>) => void>(func: T, delay: number) => {

    return (...args: Parameters<T>) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const hikeCalculator = ()=> {
    const currentSalary = Number(salary.currentSalary);
    const newSalary = Number(salary.newSalary);
    const hikePercentage = Number(salary.hikePercentage);
    switch(selectedOption) {
      case "salary":
        if (currentSalary && newSalary) {
          setNewSalary(enFormatter.format(Math.round((((newSalary - currentSalary)/currentSalary) * 100) * 100) /100))
        } else {
          setNewSalary("0");
        }
        break;
      case "percentage":
        if (currentSalary && hikePercentage) {
          setNewSalary(enFormatter.format(Math.round((currentSalary * (1 + hikePercentage / 100)) * 100) /100))
        } else {
          setNewSalary("0");
        }
        break;
    }

  }

  const handleSalaryCalculation = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSalary((prevState) => {
      return {...prevState, [event.target.name]: event.target.value}
    })
  }

  const debouncedhikeCalculator = debounce(hikeCalculator, 500);


  
  return (
    <section>
      <form>
        <div className="sm:col-span-3">
          <fieldset>
            <h1 className="text-3xl font-semibold text-indigo-700">Salary Hike Calculator </h1>
            <div className="mt-6 flex gap-x-6 items-center">
              <div className="flex items-center gap-x-3">
                <input
                  id="salary-diff"
                  type="radio"
                  value="salary"
                  name="push-notifications"
                  className="relative size-4"
                  checked={"salary" === selectedOption}
                  onChange={(e) => {
                    setSelectedOption(e.target.value)
                  }}
                />
                <label
                  htmlFor="salary-diff"
                  className="block text-sm/6 font-medium text-slate-600 dark:text-white"
                >
                  Find Hike Percentage By Salary
                </label>
              </div>
              <div className="flex items-center gap-x-3">
                <input
                  id="salary-percentage"
                  type="radio"
                  value="percentage"
                  name="push-notifications"
                  className="relative size-4"
                  checked={"percentage" === selectedOption}
                  onChange={(e) => {
                    setSelectedOption(e.target.value)
                  }}
                />
                <label
                  htmlFor="salary-percentage"
                  className="block text-sm/6 font-medium text-slate-600 dark:text-white"
                >
                  Find New Salary by Hike Percentage
                </label>
              </div>
            </div>
          </fieldset>
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3 space-y-4">
              <div className="sm:col-span-4">
                <label
                  htmlFor="CurrentSalary"
                  className="text-base text-font-500 mb-[6px] font-medium "
                >
                  Current Salary
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6 bg-gray-100 p-3">
                      ₹
                    </div>
                    <input
                      id="CurrentSalary"
                      type="number"
                      onChange={handleSalaryCalculation}
                      value={salary.currentSalary}
                      name="currentSalary"
                      placeholder="Current Salary"
                      className="block min-w-0 grow bg-white py-1.5 pr-3 pl-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                  {!salary.currentSalary && <p className="text-red-400 text-sm font-medium inline-block">Please enter a value</p>}
                </div>
              </div>
              {selectedOption === "salary" && <div className="sm:col-span-4">
                <label
                  htmlFor="NewSalary"
                  className="text-base text-font-500 mb-[6px] font-medium "
                >
                  New Salary
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6 bg-gray-100 p-3">
                      ₹
                    </div>
                    <input
                      id="NewSalary"
                      type="number"
                      name="newSalary"
                      value={salary.newSalary}
                      onChange={handleSalaryCalculation}
                      placeholder="New Salary"
                      className="block min-w-0 grow bg-white py-1.5 pr-3 pl-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                  {!salary.newSalary && <p className="text-red-400 text-sm font-medium inline-block">Please enter a value</p>}
                </div>
              </div>}

              {selectedOption === "percentage" && <div className="sm:col-span-4">
                <label
                  htmlFor="HikePercentage"
                  className="text-base text-font-500 mb-[6px] font-medium "
                >
                  Hike Percentage
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6 bg-gray-100 p-3">
                      %
                    </div>
                    <input
                      id="HikePercentage"
                      type="number"
                      name="hikePercentage"
                      value={salary.hikePercentage}
                      onChange={handleSalaryCalculation}
                      placeholder="Hike Percentage"
                      className="block min-w-0 grow bg-white py-1.5 pr-3 pl-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                  {!salary.hikePercentage && <p className="text-red-400 text-sm font-medium inline-block">Please enter a value</p>}
                </div>
              </div>}
            </div>
            <div className="sm:col-span-3 px-4">
              <div className="sm:col-span-3 border-b border-gray-950/5 dark:border-white/10 pb-4">
                <h2 className="text-2xl mb-2">{selectedOption === "salary" ? "Your Hike Percentage Is" : "Your New Salary Is"}</h2>
                <span className="text-2xl font-semibold text-indigo-500">
                  {selectedOption === "salary" ? newSalary + "%" : "₹ " + newSalary}
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

HikeCalculator.getInitialProps = async () => {
  return { title: "Salary Hike Calculator" };
};

export default HikeCalculator;
