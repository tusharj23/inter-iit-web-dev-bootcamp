// // src/components/Dashboard.js
// import React, { useEffect, useState } from 'react';
// import { Box, Grid, Paper, Typography } from '@mui/material';
// import { Bar, Line, Doughnut } from 'react-chartjs-2';
// import axios from 'axios';

// const POLYGON_API_KEY = 'YOUR_POLYGON_API_KEY'; // Replace with your actual API key
// const POLYGON_API_URL = `https://api.polygon.io/v2/aggs/ticker/{ticker}/prev?apiKey=${POLYGON_API_KEY}`;

// const Dashboard = () => {
//   const [barData, setBarData] = useState({});
//   const [lineData, setLineData] = useState({});
//   const [doughnutData, setDoughnutData] = useState({});
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const ticker = 'AAPL'; // Example ticker
//         const response = await axios.get('http://localhost:5001/api/stocks');

//         if (response.data.status === 'OK' && response.data.resultsCount > 0) {
//           const result = response.data.results[0];

//           setBarData({
//             labels: ['Volume'],
//             datasets: [
//               {
//                 label: 'Volume',
//                 data: [result.v],
//                 backgroundColor: 'rgba(75, 192, 192, 0.6)',
//               },
//             ],
//           });

//           setLineData({
//             labels: ['Price'],
//             datasets: [
//               {
//                 label: 'Close Price',
//                 data: [result.c],
//                 borderColor: 'rgba(153, 102, 255, 1)',
//                 fill: false,
//               },
//             ],
//           });

//           setDoughnutData({
//             labels: ['High', 'Low', 'Open', 'Close'],
//             datasets: [
//               {
//                 label: 'Prices',
//                 data: [result.h, result.l, result.o, result.c],
//                 backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
//               },
//             ],
//           });
//         } else {
//           setError('No data found for the ticker.');
//         }
//       } catch (error) {
//         console.error('Error fetching stock data', error);
//         setError('Error fetching stock data.');
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <Box sx={{ padding: 2 }}>
//       <Typography variant="h4" sx={{ mb: 2 }}>
//         Dashboard
//       </Typography>
//       {error && <Typography color="error">{error}</Typography>}
//       <Grid container spacing={2}>
//         <Grid item xs={12} sm={6}>
//           <Paper sx={{ padding: 2 }}>
//             <Bar data={barData} />
//           </Paper>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Paper sx={{ padding: 2 }}>
//             <Line data={lineData} />
//           </Paper>
//         </Grid>
//         <Grid item xs={12}>
//           <Paper sx={{ padding: 2 }}>
//             <Doughnut data={doughnutData} />
//           </Paper>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Dashboard;



import React from 'react';
import { Box, Grid, Paper, Typography, TextField, Avatar, IconButton, List, ListItemIcon, ListItem, ListItemText } from '@mui/material';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { Search as SearchIcon } from '@mui/icons-material';
import {
  Dashboard as DashboardIcon,
  ShoppingCart as OrdersIcon,
  AccountCircle as AccountIcon,
  Settings as SettingsIcon,
  Chat as ChatIcon,
  HelpOutline as FAQIcon,
  ArrowUpward as ArrowUpwardIcon
} from '@mui/icons-material';

// Register required components for chart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Data for charts
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [30, 45, 60, 50, 70, 80],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Users',
        data: [120, 150, 170, 200, 230, 250],
        borderColor: 'rgba(153, 102, 255, 1)',
        fill: false,
      },
    ],
  };

  const doughnutData = {
    labels: ['Stock A', 'Stock B', 'Stock C'],
    datasets: [
      {
        label: '# of Votes',
        data: [300, 150, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const additionalLineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [500, 600, 800, 700, 850, 900],
        borderColor: 'rgba(255, 159, 64, 1)',
        fill: false,
      },
    ],
  };

  const additionalBarData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Expenses',
        data: [50, 100, 80, 60, 90, 120],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
{/* Sidebar */}
<Box sx={{ width: 240, backgroundColor: '#f5f5f5', padding: 2 }}>
        {/* <Typography variant="h6" sx={{ mb: 3 }}>
          yourlogo
        </Typography> */}
        <List>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <OrdersIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AccountIcon />
            </ListItemIcon>
            <ListItemText primary="Account" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <Typography sx={{ mt: 2, ml: 2 }}>Support</Typography>
          <ListItem button>
            <ListItemIcon>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText primary="Chat" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FAQIcon />
            </ListItemIcon>
            <ListItemText primary="FAQ" />
          </ListItem>
        </List>
      </Box>


      {/* Main Content */}
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        {/* Top Bar */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <TextField
            placeholder="Search"
            variant="outlined"
            size="small"
            sx={{
              width: 300,
              backgroundColor: '#f1f1f1',
              borderRadius: '5px',
            }}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
          <Avatar alt="Matt Appleyard" src="/static/images/avatar/1.jpg" sx={{ width: 50, height: 50 }} />
        </Box>

        {/* Main Dashboard Content */}
        <Grid container spacing={2}>
          {/* Welcome and Image */}
          <Grid item xs={12} sm={8}>
            <Paper
              sx={{
                padding: 2,
                backgroundColor: '#2BEBC8',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Welcome to your dashboard!
                </Typography>
                <Typography variant="body1">
                  Try our new Admin Dashboard Template, built with live Ant-Design components. Customize it to your needs and release to production!
                </Typography>
              </Box>
              <img
                src="https://github.com/tusharj23/images_project/blob/main/Screenshot%202024-09-14%20030617.png?raw=true"
                alt="Dashboard Illustration"
                style={{ width: '100px', height: '100px', borderRadius: '8px' }}
              />
            </Paper>
          </Grid>

          {/* Graph next to Welcome Section */}
          <Grid item xs={12} sm={4}>
            <Paper sx={{ padding: 2 }}>
              <Typography variant="h6">Revenue Overview</Typography>
              <Line data={additionalLineData} />
            </Paper>
          </Grid>

          {/* Row 1: Three smaller graphs */}
          <Grid item xs={12} sm={4}>
            <Paper sx={{ padding: 2 }}>
              <Typography variant="h6">Sales Overview</Typography>
              <Bar data={barData} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ padding: 2 }}>
              <Typography variant="h6">User Growth</Typography>
              <Line data={lineData} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ padding: 2 }}>
              <Typography variant="h6">Revenue</Typography>
              <Line data={additionalLineData} />
            </Paper>
          </Grid>

          {/* Row 2: Two wider graphs */}
          <Grid item xs={12} sm={6}>
            <Paper sx={{ padding: 2 }}>
              <Typography variant="h6">Expenses</Typography>
              <Bar data={additionalBarData} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ padding: 2 }}>
              <Typography variant="h6">Stock Overview</Typography>
              <Doughnut data={doughnutData} />
            </Paper>
          </Grid>

          {/* Row 3: Full width chart */}
          <Grid item xs={12}>
            <Paper sx={{ padding: 2 }}>
              <Typography variant="h6">Detailed User Analytics</Typography>
              <Line data={lineData} />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
