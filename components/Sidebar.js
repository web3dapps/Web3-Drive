import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/upload-documents">Upload Documents</Link></li>
          <li><Link href="/document-list">Document List</Link></li>
          <li><Link href="/my-profile">My Profile</Link></li>
          <li><Link href="/logout">Logout</Link></li>
        </ul>
      </nav>
      <style jsx>{`
        .sidebar {
          width: 200px;
          background: #333;
          color: #fff;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          padding: 20px;
        }
        nav ul {
          list-style: none;
          padding: 0;
        }
        nav ul li {
          margin-bottom: 10px;
        }
        nav ul li a {
          color: #fff;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
