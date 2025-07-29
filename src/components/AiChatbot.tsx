import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Bot, Send, User, Heart, AlertTriangle } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: 'user' | 'ai'
  timestamp: Date
  urgency?: 'low' | 'medium' | 'high'
}

export function AiChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI medical assistant. I can help with basic first aid guidance and medical information. Please describe your symptoms or situation, but remember that in case of severe emergency, call 911 immediately.",
      sender: 'ai',
      timestamp: new Date(),
      urgency: 'low'
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsLoading(true)

    // Simulate AI response (replace with actual AI integration)
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateAiResponse(inputText),
        sender: 'ai',
        timestamp: new Date(),
        urgency: determineUrgency(inputText)
      }
      setMessages(prev => [...prev, aiResponse])
      setIsLoading(false)
    }, 1500)
  }

  const generateAiResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()
    
    if (input.includes('chest pain') || input.includes('heart')) {
      return "⚠️ Chest pain can be serious. If you're experiencing severe chest pain, call 911 immediately. For mild discomfort: sit down, loosen tight clothing, take slow deep breaths. Do you have any heart medication prescribed? Are you also experiencing shortness of breath, nausea, or sweating?"
    }
    
    if (input.includes('bleeding') || input.includes('cut')) {
      return "For bleeding wounds: 1) Apply direct pressure with a clean cloth 2) Elevate the injured area above heart level if possible 3) Don't remove objects embedded in deep wounds 4) If bleeding doesn't stop after 10 minutes of pressure, seek immediate medical attention. How severe is the bleeding?"
    }
    
    if (input.includes('burn')) {
      return "For burns: 1) Cool the burn with cool (not cold) running water for 10-20 minutes 2) Remove jewelry/tight items before swelling 3) Don't use ice, butter, or ointments 4) Cover with sterile bandage. For large burns or burns on face/hands/genitals, seek immediate medical care. What caused the burn?"
    }
    
    if (input.includes('fever') || input.includes('temperature')) {
      return "For fever management: 1) Stay hydrated with water/clear fluids 2) Rest 3) Use fever reducers like acetaminophen or ibuprofen as directed 4) Remove excess clothing 5) Seek medical attention if fever exceeds 103°F (39.4°C) or persists. Any other symptoms like severe headache, rash, or difficulty breathing?"
    }
    
    return "I understand you're concerned about your symptoms. While I can provide general first aid guidance, it's important to consult with a healthcare professional for proper diagnosis and treatment. Can you provide more specific details about what you're experiencing?"
  }

  const determineUrgency = (input: string): 'low' | 'medium' | 'high' => {
    const urgentKeywords = ['chest pain', 'severe', 'emergency', 'blood', 'unconscious', 'breathing']
    const moderateKeywords = ['pain', 'fever', 'burn', 'cut', 'bleeding']
    
    if (urgentKeywords.some(keyword => input.toLowerCase().includes(keyword))) {
      return 'high'
    }
    if (moderateKeywords.some(keyword => input.toLowerCase().includes(keyword))) {
      return 'medium'
    }
    return 'low'
  }

  const getUrgencyColor = (urgency?: string) => {
    switch (urgency) {
      case 'high': return 'bg-destructive text-destructive-foreground'
      case 'medium': return 'bg-warning text-warning-foreground'
      default: return 'bg-muted text-muted-foreground'
    }
  }

  const getUrgencyIcon = (urgency?: string) => {
    switch (urgency) {
      case 'high': return <AlertTriangle className="h-3 w-3" />
      case 'medium': return <Heart className="h-3 w-3" />
      default: return null
    }
  }

  return (
    <Card className="h-[600px] flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-primary" />
          AI Medical Assistant
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Get instant medical guidance • For emergencies, call 911
        </p>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col gap-4">
        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'ai' && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                )}
                
                <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-first' : ''}`}>
                  <div
                    className={`rounded-lg p-3 ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground ml-auto'
                        : 'bg-muted'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-muted-foreground">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                    {message.urgency && message.urgency !== 'low' && (
                      <Badge variant="secondary" className={`text-xs ${getUrgencyColor(message.urgency)}`}>
                        {getUrgencyIcon(message.urgency)}
                        {message.urgency}
                      </Badge>
                    )}
                  </div>
                </div>
                
                {message.sender === 'user' && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>
                    <Bot className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="bg-muted rounded-lg p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.1s]" />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.2s]" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        
        <div className="flex gap-2">
          <Input
            placeholder="Describe your symptoms or ask a medical question..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            disabled={isLoading}
          />
          <Button 
            onClick={handleSendMessage} 
            disabled={isLoading || !inputText.trim()}
            size="icon"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        
        <p className="text-xs text-muted-foreground text-center">
          This AI provides general information only. Always consult healthcare professionals for medical advice.
        </p>
      </CardContent>
    </Card>
  )
}