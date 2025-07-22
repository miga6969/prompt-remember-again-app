import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { AlertTriangle, Phone, MapPin, Clock } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Geolocation } from '@capacitor/geolocation'

export function EmergencyButton() {
  const [isEmergencyMode, setIsEmergencyMode] = useState(false)
  const [location, setLocation] = useState<string>("")
  const [countdown, setCountdown] = useState(10)
  const { toast } = useToast()

  const handleEmergencyClick = async () => {
    try {
      // Get current location
      const coordinates = await Geolocation.getCurrentPosition()
      const { latitude, longitude } = coordinates.coords
      setLocation(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`)
      
      setIsEmergencyMode(true)
      
      // Start countdown
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer)
            // Simulate emergency dispatch
            toast({
              title: "Emergency Services Contacted",
              description: "Help is on the way. Stay calm and follow first aid guidance.",
              variant: "destructive"
            })
            setIsEmergencyMode(false)
            setCountdown(10)
            return 10
          }
          return prev - 1
        })
      }, 1000)
    } catch (error) {
      toast({
        title: "Location Error",
        description: "Could not get your location. Emergency services will still be contacted.",
        variant: "destructive"
      })
    }
  }

  const cancelEmergency = () => {
    setIsEmergencyMode(false)
    setCountdown(10)
    toast({
      title: "Emergency Cancelled",
      description: "Emergency call has been cancelled.",
    })
  }

  return (
    <>
      <Card className="bg-emergency text-emergency-foreground border-emergency">
        <CardContent className="p-6 text-center">
          <AlertTriangle className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Emergency</h2>
          <p className="mb-6">Press this button in case of a medical emergency</p>
          <Button 
            size="lg"
            onClick={handleEmergencyClick}
            className="bg-background text-emergency hover:bg-background/90 text-lg px-8 py-4"
          >
            <Phone className="w-6 h-6 mr-2" />
            CALL 911
          </Button>
        </CardContent>
      </Card>

      <Dialog open={isEmergencyMode} onOpenChange={setIsEmergencyMode}>
        <DialogContent className="border-emergency">
          <DialogHeader>
            <DialogTitle className="text-emergency flex items-center">
              <AlertTriangle className="w-6 h-6 mr-2" />
              Emergency Mode Active
            </DialogTitle>
          </DialogHeader>
          
          <div className="text-center space-y-4">
            <div className="text-6xl font-bold text-emergency">{countdown}</div>
            <p>Emergency services will be contacted in {countdown} seconds</p>
            
            {location && (
              <div className="flex items-center justify-center text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mr-1" />
                Location: {location}
              </div>
            )}
            
            <div className="flex gap-2 justify-center">
              <Button 
                variant="outline" 
                onClick={cancelEmergency}
                className="border-emergency text-emergency hover:bg-emergency hover:text-emergency-foreground"
              >
                Cancel
              </Button>
              <Button 
                className="bg-emergency text-emergency-foreground hover:bg-emergency/90"
                onClick={() => {
                  setCountdown(1)
                }}
              >
                Call Now
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}