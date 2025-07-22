// Update this page (the content is just a fallback if you fail to update the page)

import { EmergencyButton } from "@/components/EmergencyButton"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, BookOpen, Phone, MapPin, Clock, Shield } from "lucide-react"

const Index = () => {
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
        
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-4 text-center">
            <Heart className="w-8 h-8 mx-auto mb-2 text-primary" />
            <h3 className="font-semibold">Medical Profile</h3>
            <p className="text-sm text-muted-foreground">Your health information</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
