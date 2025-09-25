const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./src/config/database");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Root route
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>E-commerce API v2</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                background: #f8f9fa;
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #2d3748;
            }
            
            .container {
                text-align: center;
                background: white;
                border-radius: 20px;
                padding: 3rem 2rem;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                border: 1px solid #e2e8f0;
                max-width: 500px;
                width: 90%;
            }
            
            .status-icon {
                font-size: 4rem;
                margin-bottom: 1rem;
                animation: pulse 2s infinite;
                color: #8f8f8fff;
            }
            
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.1); }
                100% { transform: scale(1); }
            }
            
            h1 {
                font-size: 2.5rem;
                margin-bottom: 1rem;
                font-weight: 700;
                color: #1a202c;
            }
            
            .version {
                font-size: 1.2rem;
                opacity: 0.7;
                margin-bottom: 2rem;
                color: #4a5568;
            }
            
            .endpoints {
                background: #f7fafc;
                border-radius: 10px;
                padding: 1.5rem;
                margin-top: 2rem;
                border: 1px solid #e2e8f0;
            }
            
            .endpoints h3 {
                margin-bottom: 1rem;
                font-size: 1.3rem;
                color: #2d3748;
            }
            
            .endpoint {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0.5rem 0;
                border-bottom: 1px solid #e2e8f0;
            }
            
            .endpoint:last-child {
                border-bottom: none;
            }
            
            .endpoint-name {
                font-weight: 600;
                color: #2d3748;
            }
            
            .endpoint-path {
                font-family: 'Courier New', monospace;
                background: #3b4248ff;
                color: white;
                padding: 0.2rem 0.5rem;
                border-radius: 5px;
                font-size: 0.9rem;
            }
            
            .footer {
                margin-top: 2rem;
                opacity: 0.7;
                font-size: 0.9rem;
                color: #4a5568;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="status-icon">
                <i class="fas fa-rocket"></i>
            </div>
            <h1>API Running Successfully!</h1>
            <div class="version">E-commerce API v2.0.0</div>
            
            <div class="endpoints">
                <h3>Available Endpoints</h3>
                <div class="endpoint">
                    <span class="endpoint-name">Authentication</span>
                    <span class="endpoint-path">/auth/login</span>
                </div>
                <div class="endpoint">
                    <span class="endpoint-name">Products</span>
                    <span class="endpoint-path">/products</span>
                </div>
                <div class="endpoint">
                    <span class="endpoint-name">Cart</span>
                    <span class="endpoint-path">/cart</span>
                </div>
                <div class="endpoint">
                    <span class="endpoint-name">Orders</span>
                    <span class="endpoint-path">/orders</span>
                </div>
            </div>
            
            <div class="footer">
                <p>Server Status: <strong>Online</strong></p>
                <p>Last Updated: ${new Date().toLocaleString()}</p>
            </div>
        </div>
    </body>
    </html>
  `);
});

// API routes
app.use("/auth", require("./src/routes/auth"));
app.use("/products", require("./src/routes/products"));
app.use("/cart", require("./src/routes/cart"));
app.use("/orders", require("./src/routes/orders"));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
