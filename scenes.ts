import { Scene, StoryData } from '@/types';

export const scenes: Scene[] = [
  // SCENE 0: LANDING PAGE
  {
    id: 'landing',
    type: 'landing',
    sequenceNumber: 0,
    title: 'A Journey Guided by a Star',
    illustrationPath: '/images/1_cover.png',
    illustrationAlt: 'A guiding star floating in an endless night sky',
    isEnvelopeScene: false,
    isChatScene: false,
    transitionType: 'fade',
    parallaxConfig: {
      enabled: true,
      layerDepth: 0.3,
      movementType: 'camera-zoom',
      fallbackEffect: 'zoom',
    },
    visibleTextBlocks: [
      {
        content: 'August 17, 2022',
        type: 'title',
        delay: 3000,
        animation: 'fade',
      },
      {
        content: 'Not a single day...',
        type: 'paragraph',
        delay: 6000,
        animation: 'fade',
      },
      {
        content: 'has made me regret asking you...',
        type: 'paragraph',
        delay: 7000,
        animation: 'fade',
      },
      {
        content: 'Instead...',
        type: 'paragraph',
        delay: 8000,
        animation: 'fade',
      },
      {
        content: 'every sunrise...',
        type: 'paragraph',
        delay: 9000,
        animation: 'fade',
      },
      {
        content: 'every sunset...',
        type: 'paragraph',
        delay: 10000,
        animation: 'fade',
      },
      {
        content: 'every ordinary day...',
        type: 'paragraph',
        delay: 11000,
        animation: 'fade',
      },
      {
        content: 'has reminded me...',
        type: 'paragraph',
        delay: 12000,
        animation: 'fade',
      },
      {
        content: 'how blessed I am...',
        type: 'paragraph',
        delay: 13000,
        animation: 'fade',
      },
      {
        content: 'that you said...',
        type: 'paragraph',
        delay: 14000,
        animation: 'fade',
      },
      {
        content: '"Yes." ❤️',
        type: 'title',
        delay: 15000,
        animation: 'fade',
      },
    ],
    technicalInstructions: [
      {
        type: 'animation',
        description: 'Night sky slowly fades in from complete darkness',
        durationMs: 3000,
        sequenceOrder: 1,
      },
      {
        type: 'animation',
        description: 'Hundreds of tiny stars gently twinkle',
        sequenceOrder: 2,
      },
      {
        type: 'animation',
        description: 'One star begins glowing brighter, becoming impossible to ignore',
        sequenceOrder: 3,
      },
      {
        type: 'camera',
        description: 'Camera slowly moves toward the guiding star',
        durationMs: 2000,
        sequenceOrder: 4,
      },
      {
        type: 'animation',
        description:
          'Guiding star leaves trail of light as if writing. Text appears slowly.',
        sequenceOrder: 5,
      },
      {
        type: 'animation',
        description: 'Passage of time: 365 days, 731 days, 1096 days, 1461 days',
        durationMs: 2000,
        sequenceOrder: 6,
      },
      {
        type: 'timing',
        description: 'Pause 4 seconds after final message',
        durationMs: 4000,
        sequenceOrder: 7,
      },
      {
        type: 'animation',
        description: 'Music begins softly (piano)',
        sequenceOrder: 8,
      },
      {
        type: 'animation',
        description: 'Begin Journey button fades in. Guiding star flies as shooting star when clicked.',
        sequenceOrder: 9,
      },
    ],
  },

  // SCENE 1: CHAPTER 1
  {
    id: 'chapter-1',
    type: 'chapter',
    sequenceNumber: 1,
    title: 'Before "Us"',
    illustrationPath: '/images/chapter_1.png',
    illustrationAlt:
      'A lone boy standing beneath a vast sky, looking at distant stars',
    isEnvelopeScene: true,
    isChatScene: false,
    transitionType: 'dissolve',
    parallaxConfig: {
      enabled: true,
      layerDepth: 0.4,
      movementType: 'scroll',
      fallbackEffect: 'zoom',
    },
    visibleTextBlocks: [
      {
        content: 'Setting',
        type: 'title',
        animation: 'fade',
      },
      {
        content: 'Don Bosco School of Excellence, Coimbatore',
        type: 'body',
        animation: 'fade',
      },
      {
        content: 'Year: 2020',
        type: 'body',
        animation: 'fade',
      },
      {
        content:
          'Both of us had just entered 6th Standard. She was a new student.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'The First Time I Saw You',
        type: 'title',
        animation: 'fade',
      },
      {
        content:
          'One day, my mom\'s friend told me, "My daughter is joining your school. Take care of her."',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'So when a new girl walked into the classroom...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I genuinely believed you were that aunty\'s daughter.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I noticed you because of that.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Only later did I realize...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You weren\'t.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We remained complete strangers.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'No conversations.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'No friendship.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Just two classmates living different stories.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Then Came Silence',
        type: 'title',
        animation: 'fade',
      },
      {
        content: 'Soon after...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'The world stopped.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'COVID arrived.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Lockdowns.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Schools closed.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Life changed.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Whatever tiny chance we had to know each other...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Disappeared.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Two Years Later',
        type: 'title',
        animation: 'fade',
      },
      {
        content: '2022',
        type: 'body',
        animation: 'fade',
      },
      {
        content: 'We were finally back at school.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Early summer.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '8th Standard.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'By coincidence...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We were placed in the same Science Expo group.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'It was the first time we actually shared something.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'The project was almost complete.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Just two days before the competition...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Something unexpected happened.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'All the boys—including me—',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'were removed from the group.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I still don\'t know why.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'The girls continued.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'They won Second Prize.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'My First Impression',
        type: 'title',
        animation: 'fade',
      },
      {
        content: 'That day...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I didn\'t admire you.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I didn\'t have a crush on you.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I wasn\'t even curious about you.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I was angry.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'In my mind...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You had become the face of that disappointment.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We weren\'t friends.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We were almost...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Foes.',
        type: 'paragraph',
        animation: 'fade',
      },
    ],
    technicalInstructions: [
      {
        type: 'interaction',
        description: 'Envelope appears with chapter title. Guiding star flies to envelope.',
        sequenceOrder: 1,
      },
      {
        type: 'animation',
        description: 'User taps envelope. Envelope unfolds.',
        sequenceOrder: 2,
      },
      {
        type: 'animation',
        description: 'Content fades in beneath envelope.',
        sequenceOrder: 3,
      },
    ],
  },

  // SCENE 2: CHAPTER 2
  {
    id: 'chapter-2',
    type: 'chapter',
    sequenceNumber: 2,
    title: 'The Accident That Changed Everything',
    illustrationPath: '/images/chapter_2.png',
    illustrationAlt: 'A fractured path illuminated by a beam of celestial light',
    isEnvelopeScene: true,
    isChatScene: false,
    transitionType: 'dissolve',
    parallaxConfig: {
      enabled: true,
      layerDepth: 0.35,
      movementType: 'scroll',
      fallbackEffect: 'zoom',
    },
    visibleTextBlocks: [
      {
        content: 'The Truth',
        type: 'title',
        animation: 'fade',
      },
      {
        content: 'After the Science Expo...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Nothing changed.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We still weren\'t friends.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We still didn\'t really like each other.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content:
          'There wasn\'t a single sign that one day we\'d become us.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Life simply moved on.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Then...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'One ordinary school day...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Our principal walked into the classroom.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'He announced something new.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content:
          'The school was starting its own FM Radio.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content:
          'He needed two students from our class to lead it.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'First, he asked,',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"Who likes this idea?"',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Everyone raised their hands.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Including me.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'But...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I was busy talking to my friend.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I didn\'t realize the next question had already been asked.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'The principal asked,',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"Who wants to be in charge?"',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I never lowered my hand.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You were sitting in the front row.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You didn\'t notice that my hand was still raised.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Neither of us intended to volunteer.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content:
          'Yet somehow...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Both of us became the FM in-charges.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'And That Changed Everything',
        type: 'title',
        animation: 'fade',
      },
      {
        content: 'For the first time...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We actually had a reason to talk.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Not because we wanted to.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Because we had to.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We exchanged phone numbers.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'At first...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content:
          'Every conversation was about FM.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Schedules.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Announcements.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Planning.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Nothing more.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Slowly...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Weeks passed.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'The conversations became easier.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content:
          'The assumptions we had about each other...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Started disappearing.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We realized something unexpected.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Maybe...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Neither of us was as bad as we had imagined.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'The Question',
        type: 'title',
        animation: 'fade',
      },
      {
        content: 'Then one day...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You asked me something simple.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"Will you be my friend?"',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I smiled.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'And answered...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"Yes."',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'That was the beginning.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Not of love.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Just...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Friendship.',
        type: 'paragraph',
        animation: 'fade',
      },
    ],
    technicalInstructions: [
      {
        type: 'interaction',
        description: 'Envelope appears. Guiding star pauses, then flies to next envelope.',
        sequenceOrder: 1,
      },
    ],
  },

  // SCENE 3: CHAPTER 3
  {
    id: 'chapter-3',
    type: 'chapter',
    sequenceNumber: 3,
    title: 'The Girl Who Changed My Direction',
    illustrationPath: '/images/chapter_3.png',
    illustrationAlt: 'A second glowing star appearing beside the first',
    isEnvelopeScene: true,
    isChatScene: false,
    transitionType: 'dissolve',
    parallaxConfig: {
      enabled: true,
      layerDepth: 0.4,
      movementType: 'scroll',
      fallbackEffect: 'zoom',
    },
    visibleTextBlocks: [
      {
        content:
          'There wasn\'t one single day...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'No dramatic moments.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content:
          'No instant realization.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Love didn\'t arrive all at once.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'It grew quietly.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content:
          'By the time we were in 9th Standard...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I wasn\'t doing well.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'My academics had fallen badly.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I felt like I was disappointing my family.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Especially my mom.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'One day...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I sat alone in the chapel.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Crying.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Feeling like I had failed.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You found me there.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You asked me what happened.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'So...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I told you everything.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You were the first-rank student in our class.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You could have walked away.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You could have seen me as competition.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content:
          'You had every reason to focus only on herself.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'But...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You didn\'t.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You made timetables for me.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You taught me every day.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Even on weekends.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You prepared for tests.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You corrected them.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You believed in me...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Long before I believed in myself.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'My mom gave me one goal.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '450 out of 500.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'It felt impossible.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Together...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We worked towards it.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'When the exam results came...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I scored',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '464 / 500.',
        type: 'title',
        animation: 'fade',
      },
      {
        content: 'For the first time in a long while...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I didn\'t feel like a failure.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'From that day onwards...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You became more than just a friend.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You became my teacher.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'My encouragement.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'The person who reminded me...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'That I could do better.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'But you gave me something even greater than better marks.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You gently led me back to my faith.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You encouraged me to pray.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You made me read the Bible.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Little by little...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'My life became more disciplined.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'And somewhere between...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'The study plans...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'The prayers...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'The conversations...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'And the encouragement...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Friendship quietly became love.',
        type: 'paragraph',
        animation: 'fade',
      },
    ],
    technicalInstructions: [
      {
        type: 'animation',
        description:
          'Guiding star gently moves from chapel window into night sky. No dramatic music, just silence.',
        sequenceOrder: 1,
      },
      {
        type: 'text-reveal',
        description:
          'Final line appears: Sometimes, God answers our prayers through people.',
        sequenceOrder: 2,
      },
    ],
  },

  // SCENE 4: CHAPTER 4
  {
    id: 'chapter-4',
    type: 'chapter',
    sequenceNumber: 4,
    title: 'When Friendship Became Love',
    illustrationPath: '/images/chapter_4.png',
    illustrationAlt: 'Two stars slowly orbiting each other',
    isEnvelopeScene: true,
    isChatScene: false,
    transitionType: 'dissolve',
    parallaxConfig: {
      enabled: true,
      layerDepth: 0.35,
      movementType: 'scroll',
      fallbackEffect: 'zoom',
    },
    visibleTextBlocks: [
      {
        content:
          'There wasn\'t a single moment.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'No fireworks.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'No dramatic confession.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'No movie scenes.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Love arrived quietly.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Almost without permission.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'It was my first love.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'And...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'It still is.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Something inside me had changed.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I couldn\'t explain it.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'It felt like something was constantly tugging at my heart.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'A beautiful kind of ache.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'One that I never wanted to disappear.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content:
          'Sometimes...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content:
          'It even felt like every atom inside me reacted differently whenever you were near.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'That\'s the closest I could ever come to describing it.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'People often ask,',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"Why do you love her?"',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'The truth is...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I don\'t know.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'And that\'s exactly why I love you.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Because I\'ve always believed...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'If love needs a reason...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'it might end when that reason is gone.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Mine never had one.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'It simply...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Became.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I kept it hidden.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Or at least...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I tried to.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'My heart stayed quiet.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'My mouth didn\'t.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'For months...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content:
          'I would tell you about a girl I liked.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I described her.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I admired her.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I spoke about everything I felt.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'But I never said her name.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You never realized...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'The girl I was talking about...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Was you.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'No one knew.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Not my friends.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Not my classmates.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Not anyone.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Because I had made a promise to myself.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Don\'t make it public...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'until it\'s permanent.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Then one day...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I gathered enough courage.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I asked you...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"Can I tell the girl I like how I feel?"',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You smiled.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'And said,',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"Go on."',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I asked another question.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'One I had been carrying for months.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"Do you think she\'d ever like me?"',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Without hesitation...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You answered...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"If she knows who you are...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'she would definitely love you."',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You had no idea...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You had just given me the courage...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'To tell you.',
        type: 'paragraph',
        animation: 'fade',
      },
    ],
    technicalInstructions: [
      {
        type: 'text-reveal',
        description: 'Chapter ends. Guiding star begins moving toward final envelope.',
        sequenceOrder: 1,
      },
    ],
  },

  // SCENE 5: CHAPTER 5 (EMOTIONAL CLIMAX)
  {
    id: 'chapter-5',
    type: 'chapter',
    sequenceNumber: 5,
    title: 'August 17, 2022',
    illustrationPath: '/images/chapter_5.png',
    illustrationAlt: 'A fractured path illuminated by a beam of celestial light',
    isEnvelopeScene: false,
    isChatScene: false,
    transitionType: 'fade',
    parallaxConfig: {
      enabled: false, // Emotional climax should be still
      movementType: 'scroll',
      fallbackEffect: 'none',
    },
    isEmotionallClimatic: true,
    visibleTextBlocks: [
      {
        content: 'Morning',
        type: 'title',
        animation: 'fade',
      },
      {
        content: 'It was August 17, 2022.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Sports Day preparations had taken over the school.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'But before any of that...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'There was a conversation.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I went to my best friend,',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Jayavant.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I finally told him.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I wanted to confess.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'He smiled.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'He encouraged me.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'He believed I should tell you.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I asked him for one small favor.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"Tell her to come to the water filter near the chapel."',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Simple.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Or so I thought.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Instead...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'He only said,',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"Go to the water filter."',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'There were several water filters.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You searched for me...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'One after another.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Eventually...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You reached the chapel.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'But by then...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I had already gone back to class.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I thought...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You didn\'t want to come.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I thought...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Maybe you didn\'t feel the same.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I quietly gave up.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'For a few hours.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Afternoon',
        type: 'title',
        animation: 'fade',
      },
      {
        content: 'The sun was relentless.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Around 3 PM...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'The whole school gathered for march-past practice.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We were both in the Yellow House – Laura.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You were the House Captain.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I was standing quietly at the back.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Nothing extraordinary.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Until...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Science Ma\'am called the Vice Captain, Tishawn, away.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'He handed me the placard.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'In a single moment...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I went from standing at the back...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'To stand directly behind you.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Another accident.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Or perhaps...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Another perfectly timed moment.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'The Walk',
        type: 'title',
        animation: 'fade',
      },
      {
        content: 'The drums hadn\'t started yet.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I knew...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'If I didn\'t say it now...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I never would.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'So I gathered every bit of courage I had.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'And quietly said...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"The girl I\'ve been telling you about..."',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Pause.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"...her name is M. Melita Jane."',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You turned around immediately.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Shocked.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"What?"',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Before I could explain...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'The drums began.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'The march started.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We walked an entire round of the ground.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'With hundreds of thoughts racing through my mind.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'And not another word between us.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'The Moment',
        type: 'title',
        animation: 'fade',
      },
      {
        content: 'When the drums finally stopped...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You looked at me again.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'And asked...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"You weren\'t joking... right?"',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I looked at you.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'And answered...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"No."',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"It\'s you."',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"I like you."',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Then I told you something...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'That I still mean today.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"I won\'t force you to answer today..."',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"...or tomorrow..."',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"...or next week."',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"Take your time."',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"Even if it takes months..."',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"...or years..."',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"I\'ll wait."',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"Because I like you..."',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '(Pause.)',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"...and only you." ❤️',
        type: 'paragraph',
        animation: 'fade',
      },
    ],
    technicalInstructions: [
      {
        type: 'animation',
        description: 'Background changes to warm afternoon sky with school ground silhouettes',
        sequenceOrder: 1,
      },
      {
        type: 'animation',
        description: 'Gentle marching drum sound begins in distance',
        sequenceOrder: 2,
      },
      {
        type: 'text-reveal',
        description: 'Text appears while guiding star moves beside text, as if walking through memory',
        sequenceOrder: 3,
      },
      {
        type: 'animation',
        description: 'When drums "start", screen subtly vibrates and text pauses momentarily',
        sequenceOrder: 4,
      },
      {
        type: 'animation',
        description: 'After final line, drums fade away leaving only silence',
        sequenceOrder: 5,
      },
      {
        type: 'timing',
        description: 'Hold this scene longer than others - allow it to breathe',
        durationMs: 5000,
        sequenceOrder: 6,
      },
    ],
  },

  // SCENE 6: CHAPTER 6
  {
    id: 'chapter-6',
    type: 'chapter',
    sequenceNumber: 6,
    title: 'The Waiting',
    illustrationPath: '/images/chapter_6.png',
    illustrationAlt: 'Two stars separated by clouds, still connected by a faint trail of light',
    isEnvelopeScene: true,
    isChatScene: false,
    transitionType: 'dissolve',
    parallaxConfig: {
      enabled: true,
      layerDepth: 0.35,
      movementType: 'scroll',
      fallbackEffect: 'zoom',
    },
    visibleTextBlocks: [
      {
        content: 'After I confessed...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Life didn\'t suddenly become romantic.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'There were no dramatic changes.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'No awkward silence.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'No distance between us.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Instead...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Something much quieter happened.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'The weight I had carried for months...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Was gone.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I had finally told you the truth.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Whatever happened next...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I was grateful that you knew.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'That same day...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'A WhatsApp voice message arrived.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'It was from you.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You said something...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'That I still remember.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"Every girl in our class had a crush on you..."',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"...so I did too."',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I smiled.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Not because of what everyone else felt.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Because of what you felt.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'From that day onward...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Nothing changed.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'And somehow...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Everything changed.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You still taught me.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You still reminded me to study.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You still helped me become a better student.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'The only difference...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Was that I finally allowed myself to tease you a little.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'To flirt.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'To smile a little longer.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You weren\'t someone who loved romantic movies.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You didn\'t quote songs.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You weren\'t expressive.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Love was completely new to you.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'And honestly...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'That was one of the things I loved most.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We were complete opposites.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Almost everything I liked...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You didn\'t.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Almost everything you loved...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'It was different from me.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Like...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'The North Pole...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'And the South Pole.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Yet...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Somehow...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We were always drawn toward each other.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'And then...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Something beautiful happened.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Without realizing it...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We stopped behaving like friends.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We stopped behaving like people trying to impress each other.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We simply...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Became home.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We never went on dates.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We never exchanged expensive gifts.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I never even held your hand.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Yet somehow...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We cared for each other.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We argued.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We laughed.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We encouraged one another.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We looked after each other.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We had quietly become...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'A family.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Long before we had a label.',
        type: 'paragraph',
        animation: 'fade',
      },
    ],
    technicalInstructions: [],
  },

  // SCENE 7: CHAPTER 7
  {
    id: 'chapter-7',
    type: 'chapter',
    sequenceNumber: 7,
    title: 'The Birthday She Gave Me',
    illustrationPath: '/images/chapter_7.png',
    illustrationAlt: 'A glowing lantern and a single candle beneath a starry sky',
    isEnvelopeScene: true,
    isChatScene: false,
    transitionType: 'dissolve',
    parallaxConfig: {
      enabled: true,
      layerDepth: 0.4,
      movementType: 'scroll',
      fallbackEffect: 'zoom',
    },
    visibleTextBlocks: [
      {
        content: 'Two years passed.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Not because we were unsure.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'But because we were growing.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We were happily engaged on February 14, 2024, even though it was in Finnish and you weren\'t aware of that.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Then came...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'June 10, 2025',
        type: 'title',
        animation: 'fade',
      },
      {
        content: 'The night before my birthday.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Midnight was approaching.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'The room was dark.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'A single candle was burning.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I called you.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'On Google Meet.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'The clock struck...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '12:00.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'It was officially...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'June 11.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'My birthday.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I looked at you.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'And asked the question...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'One more time.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"Will you be my girlfriend?"',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'This time...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You smiled.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'And answered with one simple word.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"Yes." ❤️',
        type: 'title',
        animation: 'fade',
      },
      {
        content: 'And just like that...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'My birthday didn\'t begin with gifts.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Or cake.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Or celebrations.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'It began...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'With you.',
        type: 'paragraph',
        animation: 'fade',
      },
    ],
    technicalInstructions: [
      {
        type: 'animation',
        description: 'Guiding star from landing page quietly grows brighter',
        sequenceOrder: 1,
      },
      {
        type: 'animation',
        description: 'Full circle achieved - guiding star now represents her saying Yes',
        sequenceOrder: 2,
      },
    ],
  },

  // SCENE 8: CHAPTER 8 (CHAT SCENE)
  {
    id: 'chapter-8',
    type: 'interactive',
    sequenceNumber: 8,
    title: 'The Little World We Built ❤️',
    illustrationPath: '/images/chapter_8.png',
    illustrationAlt: 'A tiny constellation forming a world of its own around two stars',
    isEnvelopeScene: false,
    isChatScene: true,
    transitionType: 'dissolve',
    parallaxConfig: {
      enabled: true,
      layerDepth: 0.3,
      movementType: 'scroll',
      fallbackEffect: 'zoom',
    },
    visibleTextBlocks: [
      {
        content: 'Every couple has memories.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Some have photos.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Some have gifts.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Some have expensive dates.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We had something different.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We built...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'our own little world.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Our Language',
        type: 'title',
        animation: 'fade',
      },
      {
        content: 'To everyone else...',
        type: 'body',
        animation: 'fade',
      },
      {
        content: 'They were ordinary messages.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'To us...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Every word meant something more.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Sometimes...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Even a punctuation mark carried emotions.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'One tiny message...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Hi.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'To everyone else...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'It was just a greeting.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'To us...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'It meant "I need to talk to you. Right now."',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Then there was...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Hu',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Not a typo.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'It meant 🤍 A Hug',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'And...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Ha',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '❤️ A Kiss',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Our Rituals',
        type: 'title',
        animation: 'fade',
      },
      {
        content: 'Every conversation...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'No matter when.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'No matter where.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Always began the same way.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Me: Ate??',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You: S...u??',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'It became our way of asking "Have you eaten?" "Yes... you?"',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Not because we had to.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Because caring became our habit.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'And no matter how long the conversation was...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Whether it lasted five minutes...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Or five hours...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'It always ended the same way.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Take care ❤️',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Then... You: Bye for now 💙',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Me: Bye for now 😉',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Every. Single. Time.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Without realizing it...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Those words became home.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Darla',
        type: 'title',
        animation: 'fade',
      },
      {
        content: 'We\'ve called each other many names.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Each one carries its own story.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'But one always remained.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Darla.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Somehow...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'That one never got old.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'It always felt like you.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Our Secret Code',
        type: 'title',
        animation: 'fade',
      },
      {
        content: 'As if one language wasn\'t enough...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We created another.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Numbers became letters.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Letters became conversations.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'To everyone else...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'It looked like random numbers.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'To us...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'It was another way of saying "This is ours."',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'A language only two people in the world could understand.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Looking Back',
        type: 'title',
        animation: 'fade',
      },
      {
        content: 'When I think about us...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I don\'t remember expensive gifts.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I don\'t remember fancy dates.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I remember...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'A full stop after Hi.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I remember Ate??',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I remember Take care.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I remember Bye for now.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I remember Our code.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Our nicknames.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Our tiny rituals.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Because...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Love isn\'t always found in grand moments.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Sometimes...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'It\'s hidden inside the little things that slowly become part of everyday life.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'And somewhere along the way...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Those little things became our home.',
        type: 'paragraph',
        animation: 'fade',
      },
    ],
    technicalInstructions: [
      {
        type: 'animation',
        description: 'Screen transforms into beautiful chat interface',
        sequenceOrder: 1,
      },
      {
        type: 'text-reveal',
        description: 'Messages animate naturally showing their conversation',
        sequenceOrder: 2,
      },
      {
        type: 'animation',
        description: 'Stream of number codes appears, guiding star rearranges them into words',
        sequenceOrder: 3,
      },
      {
        type: 'animation',
        description: 'Typing cursor disappears. Guiding star floats upward, leading to next chapter.',
        sequenceOrder: 4,
      },
    ],
  },

  // SCENE 9: CHAPTER 9
  {
    id: 'chapter-9',
    type: 'chapter',
    sequenceNumber: 9,
    title: 'We Chose Us',
    illustrationPath: '/images/chapter_9.png',
    illustrationAlt: 'The two stars merging into one brilliant guiding star',
    isEnvelopeScene: true,
    isChatScene: false,
    transitionType: 'dissolve',
    parallaxConfig: {
      enabled: true,
      layerDepth: 0.35,
      movementType: 'scroll',
      fallbackEffect: 'zoom',
    },
    visibleTextBlocks: [
      {
        content: 'People often think...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Love stories are made of happy moments.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Smiles.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Laughter.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Anniversaries.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'But real love...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Is also tested.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'When we entered 12th Standard...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Life became heavier.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Academics.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'NEET preparation.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Pressure.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Self-doubt.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Personal health struggles.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Slowly...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I wasn\'t becoming the person you deserved.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I stopped talking the way I used to.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I began avoiding you.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Small misunderstandings...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Turned into unnecessary arguments.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'What should have been tiny disagreements...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Keep growing.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Like a balloon...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Until one day...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'It burst.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You looked at me.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'And asked one question.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'A question neither of us had ever imagined asking.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You simply said...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"Can we do that?"',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I asked...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"What?"',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You answered...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"The B word."',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Neither of us could even say it.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Because saying it...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Made it feel real.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I was broken.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Not because we had fought.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'But because...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'For the first time...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I felt like I might lose you.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'So I asked...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'For one last chance.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Not to erase everything.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Not to pretend nothing happened.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'But to become better.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I promised...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I would change the habits that were hurting us.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Not because I wanted to win an argument.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Because I wanted to protect what we had.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Healing didn\'t happen overnight.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'For a long time...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We still weren\'t the same.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We spoke less.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Things felt different.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'But...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Neither of us had completely let go.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Then...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'After my NEET examination...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I asked you one simple question.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"Do you still want this?"',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Instead of answering...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You asked me something.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"Do you still love me?"',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I didn\'t need time to think.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I answered...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"I\'m ready to accept whatever happens..."',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"...but I can\'t love anyone other than you."',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'That wasn\'t a promise about the future.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'It was simply the truth of how I felt.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Somehow...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'That conversation found us again.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Not because our problems disappeared.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'But because...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We chose each other.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Again.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Even today...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We still argue over silly things.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We still misunderstand each other sometimes.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We\'re still learning.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'But one thing quietly changed.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'The B word never returned.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Not because we never fight.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'But because we both learned...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'That whatever happens...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We\'d rather find our way back...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Than walk away.',
        type: 'paragraph',
        animation: 'fade',
      },
    ],
    technicalInstructions: [
      {
        type: 'animation',
        description: 'Screen becomes cloudy. Guiding star disappears behind clouds.',
        sequenceOrder: 1,
      },
      {
        type: 'animation',
        description: 'Not because it\'s gone, but because sometimes we lose sight of the light.',
        sequenceOrder: 2,
      },
      {
        type: 'animation',
        description: 'As reader continues, clouds slowly begin to part.',
        sequenceOrder: 3,
      },
      {
        type: 'animation',
        description: 'Guiding star appears again, brighter than before.',
        sequenceOrder: 4,
      },
      {
        type: 'animation',
        description: 'Not because everything is perfect, but because we found each other again.',
        sequenceOrder: 5,
      },
    ],
  },

  // SCENE 10: CHAPTER 10
  {
    id: 'chapter-10',
    type: 'chapter',
    sequenceNumber: 10,
    title: 'Things I\'ve Never Told You',
    illustrationPath: '/images/chapter_10.png',
    illustrationAlt: 'A handwritten letter glowing under the guiding star',
    isEnvelopeScene: true,
    isChatScene: false,
    transitionType: 'dissolve',
    parallaxConfig: {
      enabled: true,
      layerDepth: 0.4,
      movementType: 'scroll',
      fallbackEffect: 'zoom',
    },
    visibleTextBlocks: [
      {
        content: 'I\'ve always been someone who talks a lot.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'If something is on my mind...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You usually know.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'But there\'s one thing...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I\'ve carried it in my heart for a long time.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'And I\'ve never known how to say it.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Whenever I\'m happy...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I talk to Jesus.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Whenever I\'m afraid...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I talk to Him.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Whenever I feel lost...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I talk to Him.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'He\'s never been a distant image to me.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'He\'s always been personal.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Present.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Closer than words can explain.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'And then...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'There\'s you.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I know you\'d never want to be compared with Jesus.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Neither do I.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Because no one can take His place.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'And that\'s not what I mean.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'What I\'ve never been able to explain is this...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'When life becomes heavy...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'The peace I find after talking to you...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Reminds me of the peace I find after praying.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Not because you replace Him.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'But because, in your own way...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You\'ve become one of the greatest blessings He has given me.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'The difference I see is simple.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I speak to Him...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'By faith.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I get to speak to you...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Face to face.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'And every time I do...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I\'m reminded of His kindness.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Thank you...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'for being someone who led me closer to God...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Instead of farther away.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I don\'t think I\'ll ever stop being grateful for that.',
        type: 'paragraph',
        animation: 'fade',
      },
    ],
    technicalInstructions: [],
  },

  // SCENE 11: CHAPTER 11
  {
    id: 'chapter-11',
    type: 'chapter',
    sequenceNumber: 11,
    title: 'Tomorrow',
    illustrationPath: '/images/3_ending.png',
    illustrationAlt: 'The guiding star rising with the first light of dawn',
    isEnvelopeScene: false,
    isChatScene: false,
    transitionType: 'dissolve',
    parallaxConfig: {
      enabled: true,
      layerDepth: 0.3,
      movementType: 'camera-pan',
      fallbackEffect: 'zoom',
    },
    visibleTextBlocks: [
      {
        content: 'People often ask...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: '"What does your dream life look like?"',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'For a long time...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I thought the answer was success.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'A good career.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'A beautiful house.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Financial freedom.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'But then...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I met you.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'And my definition of success quietly changed.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'When I imagine ten years from now...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I can\'t imagine a perfect life.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I imagine...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Us.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I hope I become that kind of husband...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Who never asks you to leave your dreams behind...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Just because you married me.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I never want you to lose an opportunity...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Because of me.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Instead...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I want to be the reason...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You feel brave enough to chase every dream God has placed in your heart.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Because if your dreams come true...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I\'ll celebrate them...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'As if they were my own.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I hope I get to see you smile...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Every single day.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Not because life is perfect.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'But because...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Your smile has always had a strange way of making even my hardest days feel lighter.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You probably don\'t know this...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'But your smile has rescued more of my days than you could ever count.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I don\'t dream of a palace.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I dream of a home.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Not a huge one.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Just enough.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'A home filled with warmth.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'A garden full of flowers.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Fresh morning air.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'A view of the mountains.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'A place where peace feels ordinary.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'A place where...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'People don\'t just live.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'They belong.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'But if you ask me...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'What I hope never changes...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'It isn\'t the house.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Or the city.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Or even the view.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'It\'s us.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I hope...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Years from now...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We\'re still talking exactly the way we do today.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I hope...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We never stop saying Ate??',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I hope...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Hi. still means "I need you."',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I hope...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Our code language...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Never get forgotten.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'I hope...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You still say Bye for now 💙',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'And I still answer Bye for now 😉',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Because somewhere between...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Those tiny words...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We built something bigger than either of us realized.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We built...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Home.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'And if...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Ten years from now...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We\'re still laughing at the same silly things...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Still teasing each other...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Still speaking a language that only we understand...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'Then I think...',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'We\'ll have already lived the dream I prayed for.',
        type: 'paragraph',
        animation: 'fade',
      },
      {
        content: 'You became the place where my heart feels at home.',
        type: 'paragraph',
        animation: 'fade',
      },
    ],
    technicalInstructions: [
      {
        type: 'animation',
        description: 'Gentle camera pan across landscape as text appears',
        sequenceOrder: 1,
      },
    ],
  },

  // SCENE 12: FINALE
  {
    id: 'finale',
    type: 'finale',
    sequenceNumber: 12,
    title: 'The Guiding Star',
    illustrationPath: '/images/3_ending.png',
    illustrationAlt: 'The guiding star illuminating the entire night sky above an open storybook',
    isEnvelopeScene: false,
    isChatScene: false,
    transitionType: 'fade',
    parallaxConfig: {
      enabled: false,
      movementType: 'scroll',
      fallbackEffect: 'none',
    },
    isEmotionallClimatic: true,
    visibleTextBlocks: [
      {
        content: 'Do you remember…',
        type: 'paragraph',
        delay: 2000,
        animation: 'fade',
      },
      {
        content: '...the first star you followed?',
        type: 'paragraph',
        delay: 3500,
        animation: 'fade',
      },
      {
        content: 'My Darla,',
        type: 'paragraph',
        delay: 5000,
        animation: 'fade',
      },
      {
        content: 'Four years ago...',
        type: 'paragraph',
        delay: 6000,
        animation: 'fade',
      },
      {
        content: 'I thought I was writing the beginning of our story.',
        type: 'paragraph',
        delay: 7000,
        animation: 'fade',
      },
      {
        content: 'Today...',
        type: 'paragraph',
        delay: 8000,
        animation: 'fade',
      },
      {
        content: 'I realised I was simply stepping into the story God had already been writing.',
        type: 'paragraph',
        delay: 9000,
        animation: 'fade',
      },
      {
        content: 'When I look back...',
        type: 'paragraph',
        delay: 10000,
        animation: 'fade',
      },
      {
        content: 'I don\'t see coincidences anymore.',
        type: 'paragraph',
        delay: 11000,
        animation: 'fade',
      },
      {
        content: 'I see grace.',
        type: 'paragraph',
        delay: 12000,
        animation: 'fade',
      },
      {
        content: 'A mistaken identity.',
        type: 'paragraph',
        delay: 13000,
        animation: 'fade',
      },
      {
        content: 'An unexpected rivalry.',
        type: 'paragraph',
        delay: 14000,
        animation: 'fade',
      },
      {
        content: 'An accidental raised hand.',
        type: 'paragraph',
        delay: 15000,
        animation: 'fade',
      },
      {
        content: 'A chapel.',
        type: 'paragraph',
        delay: 16000,
        animation: 'fade',
      },
      {
        content: 'A timetable.',
        type: 'paragraph',
        delay: 17000,
        animation: 'fade',
      },
      {
        content: 'A voice message.',
        type: 'paragraph',
        delay: 18000,
        animation: 'fade',
      },
      {
        content: 'A placard.',
        type: 'paragraph',
        delay: 19000,
        animation: 'fade',
      },
      {
        content: 'A candle.',
        type: 'paragraph',
        delay: 20000,
        animation: 'fade',
      },
      {
        content: 'A single word...',
        type: 'paragraph',
        delay: 21000,
        animation: 'fade',
      },
      {
        content: '"Yes."',
        type: 'paragraph',
        delay: 22000,
        animation: 'fade',
      },
      {
        content: 'If someone asked me...',
        type: 'paragraph',
        delay: 23000,
        animation: 'fade',
      },
      {
        content: '"What was the happiest day of your life?"',
        type: 'paragraph',
        delay: 24000,
        animation: 'fade',
      },
      {
        content: 'I don\'t think I\'d answer one day.',
        type: 'paragraph',
        delay: 25000,
        animation: 'fade',
      },
      {
        content: 'Because happiness with you was never built in one moment.',
        type: 'paragraph',
        delay: 26000,
        animation: 'fade',
      },
      {
        content: 'It was built...',
        type: 'paragraph',
        delay: 27000,
        animation: 'fade',
      },
      {
        content: 'One ordinary day at a time.',
        type: 'paragraph',
        delay: 28000,
        animation: 'fade',
      },
      {
        content: 'One conversation.',
        type: 'paragraph',
        delay: 29000,
        animation: 'fade',
      },
      {
        content: 'One prayer.',
        type: 'paragraph',
        delay: 30000,
        animation: 'fade',
      },
      {
        content: 'One smile.',
        type: 'paragraph',
        delay: 31000,
        animation: 'fade',
      },
      {
        content: 'One Ate?? at a time.',
        type: 'paragraph',
        delay: 32000,
        animation: 'fade',
      },
      {
        content: 'You never just loved me.',
        type: 'paragraph',
        delay: 33000,
        animation: 'fade',
      },
      {
        content: 'You believed in me...',
        type: 'paragraph',
        delay: 34000,
        animation: 'fade',
      },
      {
        content: 'Before I believed in myself.',
        type: 'paragraph',
        delay: 35000,
        animation: 'fade',
      },
      {
        content: 'You taught me.',
        type: 'paragraph',
        delay: 36000,
        animation: 'fade',
      },
      {
        content: 'You corrected me.',
        type: 'paragraph',
        delay: 37000,
        animation: 'fade',
      },
      {
        content: 'You encouraged me.',
        type: 'paragraph',
        delay: 38000,
        animation: 'fade',
      },
      {
        content: 'You prayed for me.',
        type: 'paragraph',
        delay: 39000,
        animation: 'fade',
      },
      {
        content: 'You quietly brought me closer to God.',
        type: 'paragraph',
        delay: 40000,
        animation: 'fade',
      },
      {
        content: 'For that...',
        type: 'paragraph',
        delay: 41000,
        animation: 'fade',
      },
      {
        content: 'I don\'t think I\'ll ever have enough words to thank you.',
        type: 'paragraph',
        delay: 42000,
        animation: 'fade',
      },
      {
        content: 'People say...',
        type: 'paragraph',
        delay: 43000,
        animation: 'fade',
      },
      {
        content: 'Home is a place.',
        type: 'paragraph',
        delay: 44000,
        animation: 'fade',
      },
      {
        content: 'I disagree.',
        type: 'paragraph',
        delay: 45000,
        animation: 'fade',
      },
      {
        content: 'Because every time I think about home...',
        type: 'paragraph',
        delay: 46000,
        animation: 'fade',
      },
      {
        content: 'I think about you.',
        type: 'paragraph',
        delay: 47000,
        animation: 'fade',
      },
      {
        content: 'Not because life with you has always been easy.',
        type: 'paragraph',
        delay: 48000,
        animation: 'fade',
      },
      {
        content: 'But because...',
        type: 'paragraph',
        delay: 49000,
        animation: 'fade',
      },
      {
        content: 'Even after our storms...',
        type: 'paragraph',
        delay: 50000,
        animation: 'fade',
      },
      {
        content: 'We always found our way back.',
        type: 'paragraph',
        delay: 51000,
        animation: 'fade',
      },
      {
        content: 'I don\'t know what tomorrow holds.',
        type: 'paragraph',
        delay: 52000,
        animation: 'fade',
      },
      {
        content: 'I don\'t know where life will take us.',
        type: 'paragraph',
        delay: 53000,
        animation: 'fade',
      },
      {
        content: 'I don\'t know how many more mountains we\'ll have to climb.',
        type: 'paragraph',
        delay: 54000,
        animation: 'fade',
      },
      {
        content: 'But I know this.',
        type: 'paragraph',
        delay: 55000,
        animation: 'fade',
      },
      {
        content: 'If one day...',
        type: 'paragraph',
        delay: 56000,
        animation: 'fade',
      },
      {
        content: 'We\'re sitting in that little house we dreamed about...',
        type: 'paragraph',
        delay: 57000,
        animation: 'fade',
      },
      {
        content: 'Surrounded by flowers...',
        type: 'paragraph',
        delay: 58000,
        animation: 'fade',
      },
      {
        content: 'Looking at the mountains...',
        type: 'paragraph',
        delay: 59000,
        animation: 'fade',
      },
      {
        content: 'Still saying Ate??',
        type: 'paragraph',
        delay: 60000,
        animation: 'fade',
      },
      {
        content: 'Still laughing at Hi.',
        type: 'paragraph',
        delay: 61000,
        animation: 'fade',
      },
      {
        content: 'Still ending every conversation with Bye for now...',
        type: 'paragraph',
        delay: 62000,
        animation: 'fade',
      },
      {
        content: 'Then I\'ll know...',
        type: 'paragraph',
        delay: 63000,
        animation: 'fade',
      },
      {
        content: 'God has been kinder to me than I ever deserved.',
        type: 'paragraph',
        delay: 64000,
        animation: 'fade',
      },
      {
        content: 'You once helped me understand...',
        type: 'paragraph',
        delay: 65000,
        animation: 'fade',
      },
      {
        content: 'That God answers prayers.',
        type: 'paragraph',
        delay: 66000,
        animation: 'fade',
      },
      {
        content: 'Sometimes...',
        type: 'paragraph',
        delay: 67000,
        animation: 'fade',
      },
      {
        content: 'His answers aren\'t loud.',
        type: 'paragraph',
        delay: 68000,
        animation: 'fade',
      },
      {
        content: 'Sometimes...',
        type: 'paragraph',
        delay: 69000,
        animation: 'fade',
      },
      {
        content: 'They quietly walk into a classroom...',
        type: 'paragraph',
        delay: 70000,
        animation: 'fade',
      },
      {
        content: 'And you don\'t even recognize them at first.',
        type: 'paragraph',
        delay: 71000,
        animation: 'fade',
      },
      {
        content: 'Thank you...',
        type: 'title',
        delay: 72000,
        animation: 'fade',
      },
      {
        content: 'for saying "Yes"...',
        type: 'paragraph',
        delay: 73000,
        animation: 'fade',
      },
      {
        content: 'every day since.',
        type: 'paragraph',
        delay: 74000,
        animation: 'fade',
      },
      {
        content: 'Not just on June 11.',
        type: 'paragraph',
        delay: 75000,
        animation: 'fade',
      },
      {
        content: 'Every day.',
        type: 'paragraph',
        delay: 76000,
        animation: 'fade',
      },
      {
        content: 'Because love isn\'t choosing someone once.',
        type: 'paragraph',
        delay: 77000,
        animation: 'fade',
      },
      {
        content: 'It\'s choosing them again...',
        type: 'paragraph',
        delay: 78000,
        animation: 'fade',
      },
      {
        content: 'And again...',
        type: 'paragraph',
        delay: 79000,
        animation: 'fade',
      },
      {
        content: 'And again.',
        type: 'paragraph',
        delay: 80000,
        animation: 'fade',
      },
      {
        content: 'Take care ❤️',
        type: 'paragraph',
        delay: 81000,
        animation: 'fade',
      },
      {
        content: 'Bye for now 💙',
        type: 'paragraph',
        delay: 82000,
        animation: 'fade',
      },
      {
        content: 'Bye for now 😉',
        type: 'paragraph',
        delay: 83000,
        animation: 'fade',
      },
    ],
    technicalInstructions: [
      {
        type: 'animation',
        description: 'Screen slowly fades to black',
        sequenceOrder: 1,
      },
      {
        type: 'timing',
        description: 'No music. Just sound of gentle night breeze.',
        sequenceOrder: 2,
      },
      {
        type: 'animation',
        description: 'Same night sky from landing page returns',
        sequenceOrder: 3,
      },
      {
        type: 'animation',
        description: 'Guiding star appears again. Not moving, just shining.',
        sequenceOrder: 4,
      },
      {
        type: 'animation',
        description: 'Guiding star begins moving. Patiently. Retracing every step.',
        sequenceOrder: 5,
      },
      {
        type: 'animation',
        description: 'Star reaches center of sky. Stops.',
        sequenceOrder: 6,
      },
      {
        type: 'animation',
        description: 'A constellation forms. Not random stars. A cross.',
        sequenceOrder: 7,
      },
      {
        type: 'animation',
        description: 'Not bright. Not dramatic. Just gently glowing.',
        sequenceOrder: 8,
      },
      {
        type: 'animation',
        description: 'Your story has always quietly carried your faith.',
        sequenceOrder: 9,
      },
      {
        type: 'animation',
        description: 'Wink fades first. Blue heart glows for second longer.',
        sequenceOrder: 10,
      },
      {
        type: 'animation',
        description: 'Guiding star becomes brightest object in sky, slowly disappears into heavens.',
        sequenceOrder: 11,
      },
      {
        type: 'animation',
        description: 'Fade to black.',
        sequenceOrder: 12,
      },
    ],
  },
];

export const storyData: StoryData = {
  scenes,
  totalScenes: scenes.length,
};
