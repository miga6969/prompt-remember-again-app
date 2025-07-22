import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Thermometer, Bone, Droplets, Brain, Activity } from "lucide-react"

const firstAidGuides = [
  {
    title: "CPR & Chest Compressions",
    urgency: "Critical",
    icon: Heart,
    description: "Life-saving technique for cardiac arrest",
    steps: [
      "Check responsiveness and breathing",
      "Call 911 immediately",
      "Position hands on center of chest",
      "Push hard and fast 2 inches deep",
      "30 compressions, 2 rescue breaths",
      "Continue until help arrives"
    ]
  },
  {
    title: "Choking Response",
    urgency: "Critical", 
    icon: Activity,
    description: "Clear airway obstruction quickly",
    steps: [
      "Ask 'Are you choking?'",
      "If they can't speak, act immediately",
      "5 back blows between shoulder blades",
      "5 abdominal thrusts (Heimlich)",
      "Alternate until object dislodged",
      "Call 911 if unsuccessful"
    ]
  },
  {
    title: "Severe Bleeding Control",
    urgency: "High",
    icon: Droplets,
    description: "Stop life-threatening blood loss",
    steps: [
      "Apply direct pressure to wound",
      "Use clean cloth or bandage",
      "Elevate injured area above heart",
      "Don't remove objects from wound",
      "Apply pressure bandage",
      "Call 911 for severe bleeding"
    ]
  },
  {
    title: "Burns Treatment",
    urgency: "Medium",
    icon: Thermometer,
    description: "Immediate care for burn injuries",
    steps: [
      "Remove from heat source",
      "Cool with running water 10-20 minutes",
      "Remove jewelry/tight clothing",
      "Don't break blisters",
      "Cover with clean, dry cloth",
      "Seek medical attention"
    ]
  },
  {
    title: "Fracture Management",
    urgency: "Medium",
    icon: Bone,
    description: "Stabilize suspected broken bones",
    steps: [
      "Don't move the person unnecessarily",
      "Immobilize the injured area",
      "Apply ice wrapped in cloth",
      "Check circulation below injury",
      "Support injured limb",
      "Get medical help immediately"
    ]
  },
  {
    title: "Stroke Recognition",
    urgency: "Critical",
    icon: Brain,
    description: "F.A.S.T. assessment for stroke",
    steps: [
      "Face - Ask person to smile",
      "Arms - Ask to raise both arms",
      "Speech - Ask to repeat phrase",
      "Time - Note time symptoms started",
      "Call 911 immediately",
      "Don't give food or water"
    ]
  }
]

const getUrgencyColor = (urgency: string) => {
  switch (urgency) {
    case "Critical": return "bg-emergency text-emergency-foreground"
    case "High": return "bg-warning text-warning-foreground"
    case "Medium": return "bg-accent text-accent-foreground"
    default: return "bg-secondary text-secondary-foreground"
  }
}

export default function FirstAid() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">First Aid Guide</h1>
        <p className="text-muted-foreground">
          Essential first aid procedures for common emergencies. Always call 911 for serious injuries.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {firstAidGuides.map((guide, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <guide.icon className="w-8 h-8 text-primary" />
                <Badge className={getUrgencyColor(guide.urgency)}>
                  {guide.urgency}
                </Badge>
              </div>
              <CardTitle className="text-lg">{guide.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{guide.description}</p>
            </CardHeader>
            <CardContent>
              <ol className="space-y-2 text-sm">
                {guide.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="flex">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                      {stepIndex + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-muted">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <Activity className="w-6 h-6 text-primary mr-2" />
            <h3 className="text-lg font-semibold">Important Reminders</h3>
          </div>
          <ul className="space-y-2 text-sm">
            <li>• Always call 911 for life-threatening emergencies</li>
            <li>• Stay calm and assess the situation safely</li>
            <li>• Don't move severely injured persons unless necessary</li>
            <li>• Use universal precautions to avoid disease transmission</li>
            <li>• Get proper first aid certification for comprehensive training</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}