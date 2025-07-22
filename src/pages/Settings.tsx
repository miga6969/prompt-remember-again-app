import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { 
  Settings as SettingsIcon, 
  Bell, 
  Shield, 
  Globe, 
  Moon, 
  Phone,
  Download,
  Trash2,
  User
} from "lucide-react"

export default function Settings() {
  const [settings, setSettings] = useState({
    notifications: {
      emergencyAlerts: true,
      courseReminders: true,
      healthTips: false,
      systemUpdates: true
    },
    privacy: {
      shareLocation: true,
      autoCall911: false,
      anonymousData: true
    },
    preferences: {
      language: "en",
      theme: "system",
      emergencyCountdown: "10"
    }
  })

  const updateSetting = (category: string, key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [key]: value
      }
    }))
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Configure your Emergency Aid Pro preferences
        </p>
      </div>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Bell className="w-6 h-6 mr-2 text-primary" />
            Notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base">Emergency Alerts</Label>
              <p className="text-sm text-muted-foreground">
                Receive critical emergency notifications in your area
              </p>
            </div>
            <Switch
              checked={settings.notifications.emergencyAlerts}
              onCheckedChange={(checked) => 
                updateSetting('notifications', 'emergencyAlerts', checked)
              }
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base">Course Reminders</Label>
              <p className="text-sm text-muted-foreground">
                Reminders for upcoming courses and certifications
              </p>
            </div>
            <Switch
              checked={settings.notifications.courseReminders}
              onCheckedChange={(checked) => 
                updateSetting('notifications', 'courseReminders', checked)
              }
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base">Health Tips</Label>
              <p className="text-sm text-muted-foreground">
                Weekly health and safety tips
              </p>
            </div>
            <Switch
              checked={settings.notifications.healthTips}
              onCheckedChange={(checked) => 
                updateSetting('notifications', 'healthTips', checked)
              }
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base">System Updates</Label>
              <p className="text-sm text-muted-foreground">
                App updates and new feature announcements
              </p>
            </div>
            <Switch
              checked={settings.notifications.systemUpdates}
              onCheckedChange={(checked) => 
                updateSetting('notifications', 'systemUpdates', checked)
              }
            />
          </div>
        </CardContent>
      </Card>

      {/* Privacy & Safety */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="w-6 h-6 mr-2 text-primary" />
            Privacy & Safety
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base">Share Location in Emergencies</Label>
              <p className="text-sm text-muted-foreground">
                Automatically share your location with emergency services
              </p>
            </div>
            <Switch
              checked={settings.privacy.shareLocation}
              onCheckedChange={(checked) => 
                updateSetting('privacy', 'shareLocation', checked)
              }
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base">Auto-Call 911</Label>
              <p className="text-sm text-muted-foreground">
                Automatically call emergency services after countdown
              </p>
            </div>
            <Switch
              checked={settings.privacy.autoCall911}
              onCheckedChange={(checked) => 
                updateSetting('privacy', 'autoCall911', checked)
              }
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base">Anonymous Usage Data</Label>
              <p className="text-sm text-muted-foreground">
                Help improve the app by sharing anonymous usage statistics
              </p>
            </div>
            <Switch
              checked={settings.privacy.anonymousData}
              onCheckedChange={(checked) => 
                updateSetting('privacy', 'anonymousData', checked)
              }
            />
          </div>
        </CardContent>
      </Card>

      {/* App Preferences */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <SettingsIcon className="w-6 h-6 mr-2 text-primary" />
            App Preferences
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="language">Language</Label>
              <Select value={settings.preferences.language} onValueChange={(value) => 
                updateSetting('preferences', 'language', value)
              }>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="de">Deutsch</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="theme">Theme</Label>
              <Select value={settings.preferences.theme} onValueChange={(value) => 
                updateSetting('preferences', 'theme', value)
              }>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="countdown">Emergency Countdown (seconds)</Label>
            <Select value={settings.preferences.emergencyCountdown} onValueChange={(value) => 
              updateSetting('preferences', 'emergencyCountdown', value)
            }>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5 seconds</SelectItem>
                <SelectItem value="10">10 seconds</SelectItem>
                <SelectItem value="15">15 seconds</SelectItem>
                <SelectItem value="30">30 seconds</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Data Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Download className="w-6 h-6 mr-2 text-primary" />
            Data Management
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base">Export Profile Data</Label>
              <p className="text-sm text-muted-foreground">
                Download your medical profile and emergency contacts
              </p>
            </div>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base">Clear App Cache</Label>
              <p className="text-sm text-muted-foreground">
                Free up space by clearing temporary files
              </p>
            </div>
            <Button variant="outline" size="sm">
              Clear Cache
            </Button>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base text-destructive">Delete Account</Label>
              <p className="text-sm text-muted-foreground">
                Permanently delete your account and all data
              </p>
            </div>
            <Button variant="destructive" size="sm">
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* App Information */}
      <Card>
        <CardHeader>
          <CardTitle>App Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Version</span>
            <span>1.0.0</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Last Updated</span>
            <span>December 2024</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Platform</span>
            <span>Web/Mobile</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}