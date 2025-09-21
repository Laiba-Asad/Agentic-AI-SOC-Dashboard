
import React, { useState } from 'react';
import Card from '../ui/Card';
import { MOCK_CHAT_MESSAGES } from '../../constants/mockData';
import { ICON_PAPER_PLANE, ICON_SPARKLES } from '../../constants/icons';
import type { ChatMessage } from '../../types';


const CollaborationPanel: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>(MOCK_CHAT_MESSAGES);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim() === '') return;
        const newMessage: ChatMessage = {
            id: `MSG-${messages.length + 1}`,
            user: 'Alex Johnson',
            avatar: 'https://picsum.photos/seed/alex/40/40',
            message: input,
            isAI: false,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages([...messages, newMessage]);
        setInput('');
    };
    
    const getAISuggestion = () => {
        const suggestion: ChatMessage = {
             id: `MSG-${messages.length + 1}`,
             user: 'SOC AI Copilot', 
             avatar: 'https://picsum.photos/seed/ai/40/40',
             message: 'Based on the current context, I recommend checking for persistence mechanisms established by the identified malware hash. Would you like me to query endpoint logs?', 
             isAI: true, 
             timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages([...messages, suggestion]);
    }

    return (
        <Card title="Analyst Collaboration">
            <div className="flex flex-col h-full">
                <div className="flex-grow space-y-4 overflow-y-auto pr-2">
                    {messages.map(msg => (
                        <div key={msg.id} className={`flex items-start gap-3 ${msg.isAI ? 'justify-start' : 'justify-start'}`}>
                            <img src={msg.avatar} alt={msg.user} className="w-8 h-8 rounded-full" />
                            <div className={`p-3 rounded-lg max-w-xs ${msg.isAI ? 'bg-primary/20' : 'bg-background'}`}>
                                <div className="flex items-center gap-2">
                                    <p className="font-semibold text-sm">{msg.user}</p>
                                    <p className="text-xs text-text-secondary">{msg.timestamp}</p>
                                </div>
                                <p className="text-sm mt-1">{msg.message}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex items-center gap-2 border-t border-border pt-4">
                     <button onClick={getAISuggestion} title="Get AI Suggestion" className="p-2 rounded-lg bg-primary/20 text-primary hover:bg-primary/40">
                       {ICON_SPARKLES}
                    </button>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Type a message or ask AI..."
                        className="flex-grow bg-background border border-border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button onClick={handleSend} className="p-2 rounded-lg bg-primary text-white hover:bg-primary/80">
                       {ICON_PAPER_PLANE}
                    </button>
                </div>
            </div>
        </Card>
    );
};

export default CollaborationPanel;
