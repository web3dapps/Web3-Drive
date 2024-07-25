import Sidebar from '../components/Sidebar';

export default function Dashboard() {
  return (
    <div className="page">
      <Sidebar />
      <div className="content">
        <h1>Dashboard</h1>
      </div>
      <style jsx>{`
        .page {
          display: flex;
        }
        .content {
          margin-left: 220px;
          padding: 20px;
        }
      `}</style>
    </div>
  );
}
