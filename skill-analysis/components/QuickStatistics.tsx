// components/QuickStatistics.tsx
const QuickStatistics = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-2/3">
        <h2 className="text-xl font-bold mb-2">Hyper Text Markup Language</h2>
        <p>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
        <div className="flex justify-between mt-4">
          <div className="text-center">
            <p className="text-3xl font-bold">4</p>
            <p>Your Rank</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">90%</p>
            <p>Percentile</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">12 / 15</p>
            <p>Correct Answers</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default QuickStatistics;
  