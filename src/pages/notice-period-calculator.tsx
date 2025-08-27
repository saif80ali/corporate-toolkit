import { useEffect, useRef, useState } from "react";

function NoticePeriodCalculator() {
  const timerRef = useRef<NodeJS.Timeout>(null);
  const [selectedOption, setSelectedOption] = useState("notice");
  const enFormatter = new Intl.NumberFormat('en-IN', { style: 'decimal' });
  const [salary, setSalary] = useState({
    dateFrom: new Date().toISOString().split('T')[0],
    noticeDays: 90,
    dateTo: new Date().toISOString().split('T')[0]
  })

  const [noticeDays, setNoticeDays] = useState(addDays(salary.dateFrom, salary.noticeDays));

  useEffect(() => {
    debouncednoticePeriodCalculator();
  },[salary, selectedOption])

  function addDays(dateStr:string, days:number) {
    const date = new Date(dateStr); // dateStr in "yyyy-mm-dd"
    date.setDate(date.getDate() + days);

    return date.toDateString(); // returns in "yyyy-mm-dd"
  }

  function dateDiffInDays(date1:string, date2: string) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diffTime = Math.abs(d2.getTime() - d1.getTime()); // difference in milliseconds
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // convert ms → days

    return diffDays;
}

  const debounce = <T extends (...args: any[]) => void>(func: T, delay: number) => {

    return (...args: Parameters<T>) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const noticePeriodCalculator = ()=> {
    let dateFrom = salary.dateFrom;
    let noticeDays = Number(salary.noticeDays);
    let dateTo = salary.dateTo;
    switch(selectedOption) {
      case "notice":
        if (dateFrom && noticeDays) {
          setNoticeDays(addDays(salary.dateFrom, salary.noticeDays));
        } else {
          setNoticeDays("0");
        }
        break;
      case "range":
        if (dateFrom && dateTo) {
          setNoticeDays(dateDiffInDays(salary.dateFrom, salary.dateTo).toString());
        } else {
          setNoticeDays("0");
        }
        break;
    }

  }

  const handleSalaryCalculation = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSalary((prevState) => {
      return {...prevState, [event.target.name]: event.target.value}
    })
  }

  const debouncednoticePeriodCalculator = debounce(noticePeriodCalculator, 500);


  
  return (
    <section>
      <form>
        <div className="sm:col-span-3">
          <fieldset>
            <h1 className="text-3xl font-semibold">Notice Period Calculator</h1>
            <div className="mt-6 flex gap-x-6 items-center">
              <div className="flex items-center gap-x-3">
                <input
                  id="notice-period"
                  type="radio"
                  value="notice"
                  name="mode"
                  className="relative size-4"
                  checked={"notice" === selectedOption}
                  onChange={(e) => {
                    setSelectedOption(e.target.value)
                  }}
                />
                <label
                  htmlFor="notice-period"
                  className="block text-sm/6 font-medium text-slate-600 dark:text-white"
                >
                  Find Last Working Date
                </label>
              </div>
              <div className="flex items-center gap-x-3">
                <input
                  id="date-range"
                  type="radio"
                  value="range"
                  name="mode"
                  className="relative size-4"
                  checked={"range" === selectedOption}
                  onChange={(e) => {
                    setSelectedOption(e.target.value)
                  }}
                />
                <label
                  htmlFor="date-range"
                  className="block text-sm/6 font-medium text-slate-600 dark:text-white"
                >
                  Find Number of Days Left
                </label>
              </div>
            </div>
          </fieldset>
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3 space-y-4 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="dateFrom"
                  className="text-base text-font-500 mb-[6px] font-medium "
                >
                 {selectedOption === "notice" ? "Date of Resignation" : "Start Date"}
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      id="dateFrom"
                      type="date"
                      onChange={handleSalaryCalculation}
                      value={salary.dateFrom}
                      name="dateFrom"
                      placeholder="Current Salary"
                      className="block min-w-0 grow bg-white py-1.5 pr-3 pl-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                  {!salary.dateFrom && <p className="text-red-400 text-sm font-medium inline-block">Please enter a value</p>}
                </div>
              </div>
              {selectedOption === "notice" && <div className="sm:col-span-3">
                <label
                  htmlFor="noticeDays"
                  className="text-base text-font-500 mb-[6px] font-medium "
                >
                  Notice Period (in days):
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      id="noticeDays"
                      type="number"
                      name="noticeDays"
                      value={salary.noticeDays}
                      onChange={handleSalaryCalculation}
                      placeholder="New Salary"
                      className="block min-w-0 grow bg-white py-1.5 pr-3 pl-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                  {!salary.noticeDays && <p className="text-red-400 text-sm font-medium inline-block">Please enter a value</p>}
                </div>
              </div>}

              {selectedOption === "range" && <div className="sm:col-span-3">
                <label
                  htmlFor="dateTo"
                  className="text-base text-font-500 mb-[6px] font-medium "
                >
                  End Date
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      id="dateTo"
                      type="date"
                      name="dateTo"
                      value={salary.dateTo}
                      onChange={handleSalaryCalculation}
                      placeholder="Hike Percentage"
                      className="block min-w-0 grow bg-white py-1.5 pr-3 pl-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                  {!salary.dateTo && <p className="text-red-400 text-sm font-medium inline-block">Please enter a value</p>}
                </div>
              </div>}
            </div>
            <div className="sm:col-span-3 px-4">
              <div className="sm:col-span-3 border-b border-gray-950/5 dark:border-white/10 pb-4">
                <h2 className="text-2xl mb-2">{selectedOption === "notice" ? "Your Last Working Day Is" : "Number of Days Left"}</h2>
                <span className="text-2xl font-semibold text-indigo-500">
                  {noticeDays}
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

NoticePeriodCalculator.getInitialProps = async () => {
  return { title: "Notice Period Calculator" };
};

export default NoticePeriodCalculator;
