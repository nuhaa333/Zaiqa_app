import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const API_BASE = process.env.REACT_APP_API_URL;

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    fetch(`${API_BASE}/api/orders/${user.id}`)
      .then((res) => res.json())
      .then((data) => setOrders(data.orders))
      .catch((err) => console.error(err));
  }, [API_BASE, navigate, user]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Welcome, {user?.name}</h2>
        <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
        <h3 style={styles.subheading}>Your Orders:</h3>
        {orders.length === 0 ? (
          <p style={styles.text}>You haven't placed any orders yet.</p>
        ) : (
          <ul style={styles.list}>
            {orders.map((order, index) => (
              <li key={index} style={styles.listItem}>
                <span style={styles.itemText}>
                  {order.items.map((item) => item.name).join(", ")}
                </span>{" "}
                <span style={styles.dateText}>
                  — {new Date(order.date).toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
const styles = {
  page: {
    minHeight: '100vh',
    background: 'linear-gradient(to right, #c9d6ff, #e2e2e2)', // glass blue and gray
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '30px',
    maxWidth: '500px',
    width: '100%',
    color: '#fff',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#fff',
  },
  subheading: {
    fontSize: '18px',
    marginTop: '20px',
    color: '#c9d6ff',
  },
  text: {
    color: '#ddd',
  },
  list: {
    marginTop: '10px',
    paddingLeft: '20px',
  },
  listItem: {
    color: '#f0f0f0',
    marginBottom: '10px',
    lineHeight: '1.6',
  },
  itemText: {
    fontWeight: 'bold',
    color: '#a3cfff',
  },
  dateText: {
    fontStyle: 'italic',
    color: '#ddd',
  },
  logoutBtn: {
    marginTop: '10px',
    padding: '8px 16px',
    background: '#4e91ff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: '0.3s',
  },
};

export default Profile;

