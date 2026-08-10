export interface ChatMessage {
  sender: 'him' | 'her';
  content: string;
  emoji?: string;
  meaning?: string;
}

export const chapter8ChatMessages: ChatMessage[] = [
  {
    sender: 'him',
    content: 'Ate??',
  },
  {
    sender: 'her',
    content: 'S...u??',
  },
  {
    sender: 'her',
    content: 'Hi.',
  },
  {
    sender: 'him',
    content: '"I need to talk to you..."',
  },
  {
    sender: 'her',
    content: 'Hu',
    emoji: '🤍',
    meaning: 'A Hug',
  },
  {
    sender: 'him',
    content: 'Ha',
    emoji: '❤️',
    meaning: 'A Kiss',
  },
  {
    sender: 'him',
    content: 'Take care ❤️',
  },
  {
    sender: 'her',
    content: 'Bye for now 💙',
  },
  {
    sender: 'him',
    content: 'Bye for now 😉',
  },
];
