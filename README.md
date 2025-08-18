# ezLearn Backend - AI-Powered Interview Preparation API

A robust, scalable Node.js backend API designed to power the ezLearn interview preparation platform. This backend provides comprehensive AI-powered interview preparation, user management, and analytics services with secure authentication and real-time data processing.

## 🚀 Live API
[Coming Soon] - RESTful API endpoints for AI-powered interview preparation platform.

## 📋 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Core Functionality](#core-functionality)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Authentication](#authentication)
- [AI Integration](#ai-integration)
- [Contributing](#contributing)

## ✨ Features

### 🔐 Authentication & Authorization
- **JWT-based Authentication**
  - Secure user registration and login
  - Password hashing with bcrypt
  - Token refresh mechanism
  - Role-based access control
  - Password reset functionality
  - Session management

### 🤖 AI-Powered Interview Preparation
- **OpenAI Integration**
  - Dynamic question generation based on role and difficulty
  - AI-powered response analysis and scoring
  - Personalized feedback generation
  - Role-specific preparation tracks:
    - Frontend Developer
    - Backend Developer
    - Full Stack Developer
    - Data Scientist
    - DevOps Engineer
  - Difficulty level management (Beginner, Intermediate, Advanced)

### 📊 Analytics & Performance Tracking
- **Comprehensive Analytics**
  - User performance tracking
  - Session-wise analytics
  - Topic-wise strength analysis
  - Progress visualization data
  - Leaderboard rankings
  - Time-based performance metrics

### 🗄️ Data Management
- **MongoDB Integration**
  - User data management
  - Question bank storage
  - Session history tracking
  - Performance data storage
  - Real-time data synchronization

### 📱 RESTful API Design
- **RESTful Architecture**
  - Clean API endpoints
  - Consistent response formats
  - Error handling and validation
  - Rate limiting
  - API documentation
  - Version control

### 🔒 Security Features
- **Security Best Practices**
  - Input validation and sanitization
  - SQL injection prevention
  - XSS protection
  - Rate limiting
  - CORS configuration
  - HTTPS enforcement

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **Multer** - File upload handling
- **CORS** - Cross-Origin Resource Sharing

### AI Integration
- **OpenAI API** - GPT models for AI features
- **Custom Prompt Engineering** - Tailored prompts for interview prep
- **Response Processing** - AI response analysis and scoring

### Development Tools
- **Nodemon** - Development server with auto-restart
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Git** - Version control

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rahull0328/ezLearn-Backend.git
   cd ezLearn-Backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/ezlearn
   JWT_SECRET=your_jwt_secret_key
   OPENAI_API_KEY=your_openai_api_key
   NODE_ENV=development
   ```

4. **Start MongoDB**
   Make sure MongoDB is running on your system.

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
ezLearn-Backend/
├── config/
│   └── db.js                 # Database configuration
├── controllers/
│   ├── ai.controller.js      # AI-related operations
│   ├── auth.controller.js    # Authentication logic
│   ├── question.controller.js # Question management
│   └── session.controller.js # Session management
├── middlewares/
│   ├── authMiddleware.js     # JWT authentication
│   └── uploadMiddleware.js   # File upload handling
├── models/
│   ├── question.model.js     # Question schema
│   ├── session.model.js      # Session schema
│   └── user.model.js         # User schema
├── routes/
│   ├── ai.route.js           # AI endpoints
│   ├── auth.route.js         # Authentication endpoints
│   ├── question.route.js     # Question endpoints
│   └── session.route.js      # Session endpoints
├── utils/
│   ├── prompt.js             # AI prompt templates
│   └── uploadImage.js        # Image upload utilities
├── server.js                 # Main server file
├── package.json              # Dependencies and scripts
└── README.md                 # Project documentation
```

## 🔧 Core Functionality

### 1. User Management
- **Registration**: New user account creation with email verification
- **Authentication**: Secure login with JWT tokens
- **Profile Management**: Update user information and preferences
- **Password Management**: Password reset and change functionality

### 2. Question Management
- **CRUD Operations**: Create, read, update, delete questions
- **Question Bank**: Comprehensive database of interview questions
- **Categorization**: Questions organized by role and difficulty
- **Search & Filter**: Advanced search capabilities

### 3. Session Management
- **Session Creation**: Start new interview preparation sessions
- **Progress Tracking**: Track user progress through sessions
- **Session History**: Maintain history of all user sessions
- **Analytics**: Generate performance reports

### 4. AI Integration
- **Question Generation**: AI generates questions based on user role
- **Response Analysis**: AI evaluates user responses
- **Feedback Generation**: AI provides personalized feedback
- **Scoring System**: AI-based performance scoring

### 5. Analytics & Reporting
- **User Analytics**: Track user engagement and performance
- **Session Analytics**: Analyze session effectiveness
- **Progress Reports**: Generate detailed progress reports
- **Leaderboards**: Rank users based on performance

## 📡 API Endpoints

### Authentication Endpoints
```
POST   /api/auth/register     - User registration
POST   /api/auth/login        - User login
POST   /api/auth/logout       - User logout
GET    /api/auth/profile      - Get user profile
PUT    /api/auth/profile      - Update user profile
POST   /api/auth/reset        - Password reset
```

### Question Endpoints
```
GET    /api/questions         - Get all questions
GET    /api/questions/:id     - Get specific question
POST   /api/questions         - Create new question
PUT    /api/questions/:id     - Update question
DELETE /api/questions/:id     - Delete question
GET    /api/questions/search  - Search questions
```

### Session Endpoints
```
GET    /api/sessions          - Get user sessions
POST   /api/sessions          - Create new session
GET    /api/sessions/:id      - Get specific session
PUT    /api/sessions/:id      - Update session
DELETE /api/sessions/:id      - Delete session
```

### AI Endpoints
```
POST   /api/ai/generate       - Generate AI questions
POST   /api/ai/analyze        - Analyze user response
POST   /api/ai/feedback       - Get AI feedback
GET    /api/ai/roles          - Get available roles
```

## 🗄️ Database Schema

### User Model
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  password: String (hashed),
  avatar: String,
  role: String,
  createdAt: Date,
  updatedAt: Date
}
``` 

### Question Model
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  role: String,
  difficulty: String,
  category: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Session Model
```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  questions: [ObjectId],
  responses: [{
    questionId: ObjectId,
    response: String,
    score: Number,
    feedback: String
  }],
  totalScore: Number,
  createdAt: Date,
  updatedAt: Date
}
```

## 🔐 Authentication

### JWT Token Structure
- **Access Token**: Short-lived token for API access
- **Refresh Token**: Long-lived token for token refresh
- **Token Validation**: Middleware-based token validation
- **Token Expiration**: Configurable token expiration times

### Security Measures
- **Password Hashing**: bcrypt for password encryption
- **Token Security**: Secure token generation and storage
- **Rate Limiting**: API rate limiting to prevent abuse
- **Input Validation**: Comprehensive input validation and sanitization

## 🤖 AI Integration

### OpenAI Configuration
- **Model Selection**: GPT-3.5-turbo for question generation
- **Prompt Engineering**: Custom prompts for interview preparation
- **Response Processing**: Structured response handling
- **Error Handling**: Robust error handling for AI failures

### AI Features
- **Dynamic Question Generation**: Questions based on user role and difficulty
- **Response Analysis**: AI-powered response evaluation
- **Personalized Feedback**: Tailored feedback based on user performance
- **Scoring Algorithm**: AI-driven scoring system

### Test Commands
```bash
npm test              # Run all tests
npm run test:watch    # Watch mode testing
npm run test:coverage # Generate coverage report
```

### Environment Variables
```bash
# Production
NODE_ENV=production
MONGODB_URI=your_production_mongodb_uri
JWT_SECRET=your_production_jwt_secret
OPENAI_API_KEY=your_production_openai_key
```

## 📊 Performance Optimization

### Database Optimization
- **Indexing**: Optimized MongoDB indexes
- **Connection Pooling**: Efficient database connections
- **Query Optimization**: Optimized database queries

### API Optimization
- **Caching**: Redis caching for frequently accessed data
- **Rate Limiting**: API rate limiting
- **Compression**: Response compression

### Monitoring
- **Health Checks**: API health monitoring
- **Error Tracking**: Comprehensive error logging
- **Performance Metrics**: API performance monitoring

## 🔒 Security Best Practices

### Data Protection
- **Encryption**: Sensitive data encryption
- **Secure Headers**: Security headers configuration
- **Input Validation**: Comprehensive input validation
- **SQL Injection Prevention**: Parameterized queries

### API Security
- **CORS Configuration**: Cross-origin resource sharing
- **Rate Limiting**: API rate limiting
- **Authentication**: JWT-based authentication
- **Authorization**: Role-based access control

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Development Workflow
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and test thoroughly
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

---

**Built with ❤️ by rahull038**