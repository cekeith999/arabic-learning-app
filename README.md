# Arabic Learning App 🌍

A modern, gamified Arabic learning web application designed for complete beginners. Learn Arabic through interactive conversations with AI tutor Ustadh Ahmad, vocabulary flashcards, quizzes, and cultural insights.

## ✨ Features

### 🎯 Core Learning Features
- **AI Conversation Partner**: Chat with Ustadh Ahmad for interactive Arabic practice
- **Vocabulary Flashcards**: Learn Arabic words with audio, translations, and cultural notes
- **Interactive Quizzes**: Test your knowledge with gamified quizzes
- **Progress Tracking**: Monitor your learning journey with detailed analytics
- **Cultural Insights**: Unlock cultural facts and traditions

### 🎮 Gamification Elements
- **XP System**: Earn experience points for completing activities
- **Level Progression**: Level up as you learn more Arabic
- **Daily Streaks**: Maintain learning momentum with streak tracking
- **Achievements**: Unlock badges for milestones and accomplishments
- **Lingots**: Virtual currency for bonus content and rewards
- **Skill Tree**: Visual learning path with unlockable topics

### 🎨 User Experience
- **Beginner-Friendly**: Designed specifically for A1evel learners
- **RTL Support**: Full Arabic text rendering and right-to-left layout
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Audio Integration**: Native Arabic pronunciation with speed controls
- **Visual Aids**: Images and emojis to reinforce vocabulary learning

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Modern web browser with JavaScript enabled

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd arabic-learning-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📱 Usage Guide

### Dashboard
- View your learning progress, XP, level, and streak
- Access quick actions for different learning activities
- See recent achievements and activity history
- Navigate through the skill tree to unlock new topics

### Conversation with Ustadh Ahmad
- Start a conversation by clicking "Start Conversation"
- Practice basic greetings and introductions
- Receive gentle corrections and explanations
- Learn new vocabulary in context
- Use quick phrase buttons for common expressions

### Vocabulary Learning
- Browse flashcards with Arabic words and translations
- Listen to native pronunciation
- View example sentences and cultural notes
- Mark words as favorites for review
- Track your vocabulary progress

### Quizzes
- Take interactive quizzes to test your knowledge
- Receive immediate feedback on answers
- View explanations for correct answers
- Track your quiz performance and scores

## 🛠️ Technology Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations and transitions
- **Zustand**: Lightweight state management
- **Radix UI**: Accessible component primitives

### Key Libraries
- **Lucide React**: Beautiful icons
- **Recharts**: Data visualization for progress charts
- **clsx & tailwind-merge**: Conditional styling utilities

### Features
- **Arabic Typography**: Noto Sans Arabic and Cairo fonts
- **RTL Support**: Right-to-left text rendering
- **Responsive Design**: Mobile-first approach
- **PWA Ready**: Progressive web app capabilities
- **Accessibility**: WCAG compliant components

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Main dashboard page
│   ├── conversation/      # AI chat interface
│   ├── vocabulary/        # Flashcard system
│   ├── quizzes/          # Interactive quizzes
│   └── ...
├── components/            # React components
│   ├── gamification/     # XP, streaks, achievements
│   ├── conversation/     # Chat components
│   ├── vocabulary/       # Flashcard components
│   ├── quiz/            # Quiz components
│   └── ui/              # Reusable UI components
├── lib/                  # Utility functions and constants
├── store/               # Zustand state management
├── types/               # TypeScript type definitions
└── hooks/               # Custom React hooks
```

## 🎯 Learning Path

### Beginner Level (A1)
1. **Greetings & Introductions**
   - مرحبا (Hello)
   - شكرا (Thank you)
   - اسمي (My name is)
   - كيف حالك؟ (How are you?)
2 **Numbers 10*
   - واحد (One)
   - اثنان (Two)
   - ثلاثة (Three)
3 **Basic Colors**
   - أحمر (Red)
   - أزرق (Blue)
   - أخضر (Green)

4**Food & Drinks**
   - قهوة (Coffee)
   - شاي (Tea)
   - خبز (Bread)

## 🎮 Gamification System

### XP Rewards
- **Conversation Message**: +5 XP
- **Vocabulary Learned**: +10 XP
- **Quiz Correct Answer**: +15 XP
- **Perfect Quiz**: +50 XP
- **Daily Streak**: +20 XP
- **Achievement**: +25 XP

### Level Thresholds
- **Level 1**: 0 XP
- **Level 2**:10 XP
- **Level 3**:25 XP
- **Level 4**:50 XP
- **Level 5**:100

### Achievements
- **First Conversation**: Complete your first chat
- **Dedicated Learner**: Maintain a 10eak
- **Vocabulary Master**: Learn 100 words
- **Perfect Score**: Get 100% on any quiz
- **Cultural Explorer**: Unlock 10 cultural insights

## 🌍 Cultural Integration

The app includes cultural insights that unlock as you progress:
- **Arabic Hospitality**: Learn about guest traditions
- **Language History**: Discover Arabic script origins
- **Traditional Greetings**: Understand greeting customs
- **Coffee Culture**: Explore Arabic coffee traditions

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

### Environment Variables
Create a `.env.local` file for local development:
```env
# OpenAI API (for future AI integration)
OPENAI_API_KEY=your_openai_api_key

# Database (for future backend integration)
DATABASE_URL=your_database_url
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature`)
4.Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Arabic Language Experts**: For cultural and linguistic guidance
- **Duolingo**: Inspiration for gamification design
- **Next.js Team**: For the amazing framework
- **Tailwind CSS**: For the utility-first styling approach

## 📞 Support

For support, email support@arabiclearningapp.com or create an issue in the GitHub repository.

---

**Happy Learning! 🌍📚**

*Master Arabic one conversation at a time with Ustadh Ahmad*
