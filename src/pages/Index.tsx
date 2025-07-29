import { useState } from "react"
import { EmergencyButton } from "@/components/EmergencyButton"
import { AiChatbot } from "@/components/AiChatbot"
import { PaywallModal } from "@/components/PaywallModal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, BookOpen, Phone, MapPin, Clock, Shield, Bot, Crown } from "lucide-react"

const Index = () => {
  const [showPaywall, setShowPaywall] = useState(false)
  const [showChatbot, setShowChatbot] = useState(false)

  const handlePremiumFeature = (featureName: string) => {
    setShowPaywall(true)
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Emergency Aid Pro</h1>
        <p className="text-xl text-muted-foreground">Your comprehensive emergency response companion</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <EmergencyButton />
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bot className="w-6 h-6 mr-2 text-primary" />
              AI Medical Assistant
              <Badge className="ml-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
                AI
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground mb-3">
              Get instant medical guidance and emergency consultation
            </p>
            <Button 
              onClick={() => setShowChatbot(!showChatbot)}
              className="w-full"
            >
              {showChatbot ? 'Hide Assistant' : 'Start Consultation'}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* AI Chatbot Section */}
      {showChatbot && (
        <section className="mt-8">
          <AiChatbot />
        </section>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Heart className="w-6 h-6 mr-2 text-success" />
              Quick First Aid
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              <Heart className="w-4 h-4 mr-2" />
              CPR & Life Support
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Shield className="w-4 h-4 mr-2" />
              Choking Response
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <MapPin className="w-4 h-4 mr-2" />
              Bleeding Control
            </Button>
          </CardContent>
        </Card>

        <Card 
          className="hover:shadow-lg transition-shadow cursor-pointer relative"
          onClick={() => handlePremiumFeature('Advanced Health Monitoring')}
        >
          <Badge className="absolute top-2 right-2 bg-warning text-warning-foreground">
            <Crown className="h-3 w-3 mr-1" />
            Premium
          </Badge>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Heart className="w-6 h-6 mr-2 text-destructive" />
              Health Monitoring
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Advanced vital tracking, symptom analysis, and health alerts
            </p>
            <Button variant="outline" className="w-full">
              Upgrade to Access
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-4 text-center">
            <BookOpen className="w-8 h-8 mx-auto mb-2 text-primary" />
            <h3 className="font-semibold">Learning Center</h3>
            <p className="text-sm text-muted-foreground">Professional courses & certifications</p>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-4 text-center">
            <Phone className="w-8 h-8 mx-auto mb-2 text-primary" />
            <h3 className="font-semibold">Emergency Contacts</h3>
            <p className="text-sm text-muted-foreground">Quick access to help</p>
          </CardContent>
        </Card>
        
        <Card 
          className="hover:shadow-md transition-shadow cursor-pointer relative"
          onClick={() => handlePremiumFeature('Advanced Medical Profile')}
        >
          <Badge className="absolute top-2 right-2 text-xs bg-warning text-warning-foreground">
            Premium
          </Badge>
          <CardContent className="p-4 text-center">
            <Heart className="w-8 h-8 mx-auto mb-2 text-primary" />
            <h3 className="font-semibold">Medical Profile</h3>
            <p className="text-sm text-muted-foreground">Advanced health information & sync</p>
          </CardContent>
        </Card>
      </div>

      {/* Paywall Modal */}
      <PaywallModal 
        isOpen={showPaywall} 
        onClose={() => setShowPaywall(false)}
        featureName="premium features"
      />
    </div>
  );
};

export default Index;