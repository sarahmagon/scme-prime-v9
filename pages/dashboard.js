import Card from '../components/Card';
import mock from '../src/mocks/sample-data';

export default function Dashboard() {
  return (
    <section>
      <div className="hero">
        <h1>Dashboard</h1>
        <p>Quick overview of SCME PRIME v9.</p>
      </div>

      <div className="grid">
        <Card title="Quick Stats">
          <ul>
            <li>Mutations: {mock.mutations.length}</li>
            <li>Stories: {mock.stories.length}</li>
          </ul>
        </Card>

        <Card title="Recent Activity">
          <ul>
            {mock.recent.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
        </Card>
      </div>
    </section>
  );
}
