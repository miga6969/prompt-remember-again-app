import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Phone, Plus, Edit, Trash2, Shield, Heart, Home, Briefcase } from "lucide-react"

const emergencyServices = [
  { name: "Emergency Services", number: "911", description: "Police, Fire, Medical Emergency" },
  { name: "Poison Control", number: "1-800-222-1222", description: "24/7 Poison Emergency Hotline" },
  { name: "Crisis Text Line", number: "Text HOME to 741741", description: "Mental Health Crisis Support" },
  { name: "Suicide Prevention", number: "988", description: "24/7 Suicide & Crisis Lifeline" }
]

const initialContacts = [
  { 
    id: 1,
    name: "Dr. Sarah Johnson", 
    phone: "(555) 123-4567", 
    relationship: "Primary Doctor",
    category: "medical",
    address: "123 Medical Center Dr"
  },
  { 
    id: 2,
    name: "John Smith", 
    phone: "(555) 987-6543", 
    relationship: "Emergency Contact",
    category: "family", 
    address: "456 Main St"
  },
  { 
    id: 3,
    name: "City Hospital ER", 
    phone: "(555) 456-7890", 
    relationship: "Nearest Hospital",
    category: "medical",
    address: "789 Hospital Blvd"
  }
]

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "medical": return Heart
    case "family": return Home
    case "work": return Briefcase
    default: return Phone
  }
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case "medical": return "bg-primary text-primary-foreground"
    case "family": return "bg-success text-success-foreground"
    case "work": return "bg-warning text-warning-foreground"
    default: return "bg-secondary text-secondary-foreground"
  }
}

export default function EmergencyContacts() {
  const [contacts, setContacts] = useState(initialContacts)
  const [isAddingContact, setIsAddingContact] = useState(false)
  const [editingContact, setEditingContact] = useState<any>(null)
  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
    relationship: "",
    category: "family",
    address: ""
  })

  const handleAddContact = () => {
    if (newContact.name && newContact.phone) {
      const contact = {
        id: Date.now(),
        ...newContact
      }
      setContacts([...contacts, contact])
      setNewContact({ name: "", phone: "", relationship: "", category: "family", address: "" })
      setIsAddingContact(false)
    }
  }

  const handleDeleteContact = (id: number) => {
    setContacts(contacts.filter(contact => contact.id !== id))
  }

  const handleCall = (phone: string) => {
    window.open(`tel:${phone}`)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Emergency Contacts</h1>
          <p className="text-muted-foreground">
            Quick access to emergency services and personal contacts
          </p>
        </div>
        <Dialog open={isAddingContact} onOpenChange={setIsAddingContact}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Contact
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Emergency Contact</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={newContact.name}
                  onChange={(e) => setNewContact({...newContact, name: e.target.value})}
                  placeholder="Contact name"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={newContact.phone}
                  onChange={(e) => setNewContact({...newContact, phone: e.target.value})}
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <Label htmlFor="relationship">Relationship</Label>
                <Input
                  id="relationship"
                  value={newContact.relationship}
                  onChange={(e) => setNewContact({...newContact, relationship: e.target.value})}
                  placeholder="e.g., Doctor, Emergency Contact"
                />
              </div>
              <div>
                <Label htmlFor="address">Address (Optional)</Label>
                <Input
                  id="address"
                  value={newContact.address}
                  onChange={(e) => setNewContact({...newContact, address: e.target.value})}
                  placeholder="Street address"
                />
              </div>
              <Button onClick={handleAddContact} className="w-full">
                Add Contact
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Emergency Services */}
      <Card className="border-emergency bg-emergency/5">
        <CardHeader>
          <CardTitle className="flex items-center text-emergency">
            <Shield className="w-6 h-6 mr-2" />
            Emergency Services
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {emergencyServices.map((service, index) => (
              <Card key={index} className="border-emergency/20">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">{service.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{service.description}</p>
                      <p className="font-mono text-lg font-bold text-emergency">{service.number}</p>
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-emergency text-emergency-foreground hover:bg-emergency/90"
                      onClick={() => handleCall(service.number)}
                    >
                      <Phone className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Personal Contacts */}
      <Card>
        <CardHeader>
          <CardTitle>Personal Emergency Contacts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {contacts.map((contact) => {
              const CategoryIcon = getCategoryIcon(contact.category)
              return (
                <Card key={contact.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center">
                        <CategoryIcon className="w-5 h-5 mr-2 text-primary" />
                        <Badge className={getCategoryColor(contact.category)}>
                          {contact.category}
                        </Badge>
                      </div>
                      <div className="flex gap-1">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Edit className="w-3 h-3" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                          onClick={() => handleDeleteContact(contact.id)}
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    
                    <h4 className="font-semibold text-lg mb-1">{contact.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{contact.relationship}</p>
                    <p className="font-mono text-sm mb-2">{contact.phone}</p>
                    {contact.address && (
                      <p className="text-xs text-muted-foreground mb-3">{contact.address}</p>
                    )}
                    
                    <Button 
                      size="sm" 
                      className="w-full"
                      onClick={() => handleCall(contact.phone)}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}