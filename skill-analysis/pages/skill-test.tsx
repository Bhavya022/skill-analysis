import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faTrophy, faChartBar, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: '#EC6A8C',
    },
  ],
};

const SkillTest = () => {
  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faHtml5} size="2x" className="text-red-500" />
          <div>
            <h2 className="text-xl font-semibold">Hyper Text Markup Language</h2>
            <p className="text-gray-600">Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
          </div>
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Update</button>
      </div>
      <h2 className="text-lg font-semibold mb-2">Skill Test</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold">Quick Statistics</h3>
          <div className="flex items-center space-x-4 mt-2">
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faTrophy} className="text-yellow-500" />
              <span className="bg-yellow-500 text-white p-2 rounded-full">4</span>
              <span>Your Rank</span>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faChartBar} className="text-green-500" />
              <span className="bg-green-500 text-white p-2 rounded-full">90%</span>
              <span>Percentile</span>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-blue-500" />
              <span className="bg-blue-500 text-white p-2 rounded-full">12 / 15</span>
              <span>Correct Answers</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Syllabus Wise Analysis</h3>
          <div className="mt-2">
            <div className="flex items-center justify-between">
              <span>HTML Tools, Forms, History</span>
              <span>80%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex items-center justify-between">
              <span>Tags & References in HTML</span>
              <span>60%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex items-center justify-between">
              <span>Tables & References in HTML</span>
              <span>24%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '24%' }}></div>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex items-center justify-between">
              <span>Tables & CSS Basics</span>
              <span>96%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '96%' }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Comparison Graph</h3>
        <Line data={data} />
      </div>
    </div>
  );
};

export default SkillTest;
