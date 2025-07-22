import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Award, Clock, Users, Star, Play } from "lucide-react"

const courses = [
  {
    title: "Basic Life Support (BLS)",
    provider: "American Red Cross",
    duration: "4 hours",
    price: "$89",
    rating: 4.8,
    enrolled: 12453,
    progress: 0,
    description: "Learn CPR, AED use, and choking response for adults, children, and infants.",
    features: ["CPR Certification", "AED Training", "Choking Response", "2-Year Certification"]
  },
  {
    title: "First Aid Fundamentals",
    provider: "American Heart Association", 
    duration: "6 hours",
    price: "$125",
    rating: 4.9,
    enrolled: 8921,
    progress: 35,
    description: "Comprehensive first aid training covering wounds, burns, fractures, and more.",
    features: ["Wound Care", "Burn Treatment", "Fracture Management", "Emergency Action Plans"]
  },
  {
    title: "Workplace Safety & Emergency Response",
    provider: "OSHA Certified",
    duration: "8 hours", 
    price: "$199",
    rating: 4.7,
    enrolled: 5632,
    progress: 0,
    description: "Complete workplace emergency preparedness and response training.",
    features: ["OSHA Compliance", "Evacuation Procedures", "Incident Reporting", "Team Training"]
  },
  {
    title: "Pediatric First Aid",
    provider: "Child Safety Institute",
    duration: "3 hours",
    price: "$69",
    rating: 4.9,
    enrolled: 7845,
    progress: 100,
    description: "Specialized first aid training for infants and children.",
    features: ["Child CPR", "Choking Response", "Fever Management", "Injury Assessment"]
  },
  {
    title: "Mental Health First Aid",
    provider: "National Council",
    duration: "8 hours",
    price: "$175",
    rating: 4.6,
    enrolled: 4521,
    progress: 0,
    description: "Learn to recognize and respond to mental health emergencies.",
    features: ["Crisis Intervention", "Suicide Prevention", "Trauma Response", "De-escalation"]
  },
  {
    title: "Wilderness First Aid",
    provider: "Outdoor Emergency Care",
    duration: "16 hours",
    price: "$299",
    rating: 4.8,
    enrolled: 2341,
    progress: 0,
    description: "Advanced first aid for remote and outdoor environments.",
    features: ["Remote Care", "Improvised Equipment", "Evacuation Planning", "Extended Care"]
  }
]

const achievements = [
  { title: "First Course Completed", icon: "🎓", earned: true },
  { title: "CPR Certified", icon: "❤️", earned: true },
  { title: "Perfect Score", icon: "⭐", earned: false },
  { title: "Quick Learner", icon: "⚡", earned: false },
  { title: "Helping Hand", icon: "🤝", earned: false },
  { title: "Expert Level", icon: "🏆", earned: false }
]

export default function Learning() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Learning Center</h1>
        <p className="text-muted-foreground">
          Professional first aid and emergency response training courses
        </p>
      </div>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Award className="w-6 h-6 mr-2 text-accent" />
            Your Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">2</div>
              <p className="text-sm text-muted-foreground">Courses Enrolled</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">1</div>
              <p className="text-sm text-muted-foreground">Completed</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4</div>
              <p className="text-sm text-muted-foreground">Certificates Earned</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle>Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className={`text-center p-3 rounded-lg border ${
                achievement.earned ? 'bg-accent/10 border-accent' : 'bg-muted border-muted'
              }`}>
                <div className="text-2xl mb-1">{achievement.icon}</div>
                <p className="text-xs font-medium">{achievement.title}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Courses */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <BookOpen className="w-8 h-8 text-primary" />
                <Badge variant="secondary">{course.price}</Badge>
              </div>
              <CardTitle className="text-lg">{course.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{course.provider}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">{course.description}</p>
              
              {course.progress > 0 && (
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
              )}

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {course.duration}
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 fill-current text-yellow-500" />
                  {course.rating}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {course.enrolled.toLocaleString()}
                </div>
              </div>

              <div className="space-y-1">
                {course.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="text-xs text-muted-foreground">
                    • {feature}
                  </div>
                ))}
              </div>

              <Button 
                className="w-full" 
                variant={course.progress > 0 ? "default" : "outline"}
              >
                {course.progress === 100 ? (
                  <>
                    <Award className="w-4 h-4 mr-2" />
                    View Certificate
                  </>
                ) : course.progress > 0 ? (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Continue Learning
                  </>
                ) : (
                  "Enroll Now"
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}