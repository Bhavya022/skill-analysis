// pages/index.tsx
"use client";

import Layout from '../components/Layout';
import SkillChart from '../components/SkillChart';
import QuestionChart from '../components/QuestionChart';
import QuickStatistics from '../components/QuickStatistics';

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-wrap">
        <QuickStatistics />
        <SkillChart />
        <QuestionChart />
      </div>
    </Layout>
  );
};

export default Home;
