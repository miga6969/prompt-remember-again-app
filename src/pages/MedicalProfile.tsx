import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  User, 
  Heart, 
  Pill, 
  AlertTriangle, 
  Phone, 
  Edit,
  Save,
  Calendar,
  MapPin
} from "lucide-react"

const initialProfile = {
  personalInfo: {
    fullName: "Alex Johnson",
    dateOfBirth: "1990-03-15",
    bloodType: "O+",
    height: "5'8\"",
    weight: "160 lbs",
    address: "123 Main St, City, State 12345",
    emergencyContact: "Jane Johnson - (555) 123-4567"
  },
  medicalInfo: {
    allergies: ["Penicillin", "Shellfish", "Latex"],
    medications: [
      { name: "Lisinopril", dosage: "10mg daily", reason: "Blood pressure" },
      { name: "Metformin", dosage: "500mg twice daily", reason: "Diabetes" }
    ],
    conditions: ["Type 2 Diabetes", "Hypertension"],
    notes: "Prefers generic medications when available. No known drug interactions."
  },
  preferences: {
    language: "English",
    religion: "None specified",
    organDonor: true,
    advanceDirective: true
  }
}

export default function MedicalProfile() {
  const [profile, setProfile] = useState(initialProfile)
  const [isEditing, setIsEditing] = useState(false)

  const handleSave = () => {
    setIsEditing(false)
    // In a real app, save to backend/local storage
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Medical Profile</h1>
          <p className="text-muted-foreground">
            Your medical information for emergency responders
          </p>
        </div>
        <Button 
          onClick={isEditing ? handleSave : () => setIsEditing(true)}
          variant={isEditing ? "default" : "outline"}
        >
          {isEditing ? (
            <>
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </>
          ) : (
            <>
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </>
          )}
        </Button>
      </div>

      {/* Personal Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <User className="w-6 h-6 mr-2 text-primary" />
            Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                value={profile.personalInfo.fullName}
                disabled={!isEditing}
                onChange={(e) => setProfile({
                  ...profile,
                  personalInfo: { ...profile.personalInfo, fullName: e.target.value }
                })}
              />
            </div>
            <div>
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={profile.personalInfo.dateOfBirth}
                disabled={!isEditing}
                onChange={(e) => setProfile({
                  ...profile,
                  personalInfo: { ...profile.personalInfo, dateOfBirth: e.target.value }
                })}
              />
            </div>
            <div>
              <Label htmlFor="bloodType">Blood Type</Label>
              <Input
                id="bloodType"
                value={profile.personalInfo.bloodType}
                disabled={!isEditing}
                onChange={(e) => setProfile({
                  ...profile,
                  personalInfo: { ...profile.personalInfo, bloodType: e.target.value }
                })}
              />
            </div>
            <div>
              <Label htmlFor="emergencyContact">Emergency Contact</Label>
              <Input
                id="emergencyContact"
                value={profile.personalInfo.emergencyContact}
                disabled={!isEditing}
                onChange={(e) => setProfile({
                  ...profile,
                  personalInfo: { ...profile.personalInfo, emergencyContact: e.target.value }
                })}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Medical Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Heart className="w-6 h-6 mr-2 text-primary" />
            Medical Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Allergies */}
          <div>
            <Label className="text-base font-semibold flex items-center mb-3">
              <AlertTriangle className="w-4 h-4 mr-2 text-warning" />
              Allergies
            </Label>
            <div className="flex flex-wrap gap-2">
              {profile.medicalInfo.allergies.map((allergy, index) => (
                <Badge key={index} variant="destructive">
                  {allergy}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Current Medications */}
          <div>
            <Label className="text-base font-semibold flex items-center mb-3">
              <Pill className="w-4 h-4 mr-2 text-primary" />
              Current Medications
            </Label>
            <div className="space-y-3">
              {profile.medicalInfo.medications.map((med, index) => (
                <Card key={index} className="bg-muted/30">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">{med.name}</h4>
                        <p className="text-sm text-muted-foreground">{med.dosage}</p>
                        <p className="text-xs text-muted-foreground">For: {med.reason}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Separator />

          {/* Medical Conditions */}
          <div>
            <Label className="text-base font-semibold mb-3 block">Medical Conditions</Label>
            <div className="flex flex-wrap gap-2">
              {profile.medicalInfo.conditions.map((condition, index) => (
                <Badge key={index} variant="secondary">
                  {condition}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Additional Notes */}
          <div>
            <Label htmlFor="notes" className="text-base font-semibold">Additional Notes</Label>
            <Textarea
              id="notes"
              value={profile.medicalInfo.notes}
              disabled={!isEditing}
              onChange={(e) => setProfile({
                ...profile,
                medicalInfo: { ...profile.medicalInfo, notes: e.target.value }
              })}
              className="mt-2"
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {/* Emergency Access */}
      <Card className="border-emergency bg-emergency/5">
        <CardHeader>
          <CardTitle className="text-emergency flex items-center">
            <AlertTriangle className="w-6 h-6 mr-2" />
            Emergency Access Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-background p-4 rounded-lg border">
              <h4 className="font-semibold mb-2">Quick Access Code</h4>
              <p className="font-mono text-lg bg-muted px-3 py-2 rounded">ICE-2024-AJ</p>
              <p className="text-sm text-muted-foreground mt-2">
                Share this code with emergency responders to access your medical profile
              </p>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label className="font-semibold">Blood Type</Label>
                <p className="text-2xl font-bold text-primary">{profile.personalInfo.bloodType}</p>
              </div>
              <div>
                <Label className="font-semibold">Critical Allergies</Label>
                <div className="flex flex-wrap gap-1 mt-1">
                  {profile.medicalInfo.allergies.slice(0, 2).map((allergy, index) => (
                    <Badge key={index} variant="destructive" className="text-xs">
                      {allergy}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}