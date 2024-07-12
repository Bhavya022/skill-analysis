import Layout from '../components/Layout';
import SkillChart from '../components/SkillChart';
import QuestionChart from '../components/QuestionChart';

export default function SkillTest() {
  return (
    <Layout>
      <div className="skill-test-page">
        <div className="quick-stats">
          <h3>Quick Statistics</h3>
          <p>Rank: 4</p>
          <p>Percentile: 90%</p>
          <p>Correct Answers: 12/15</p>
        </div>
        <SkillChart />
        <QuestionChart />
      </div>
    </Layout>
  );
}
