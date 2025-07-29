import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Crown, Star } from "lucide-react"

interface PaywallModalProps {
  isOpen: boolean
  onClose: () => void
  featureName: string
}

export function PaywallModal({ isOpen, onClose, featureName }: PaywallModalProps) {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('monthly')

  const plans = {
    monthly: {
      price: 9.99,
      period: 'month',
      savings: null
    },
    yearly: {
      price: 79.99,
      period: 'year',
      savings: '33% off'
    }
  }

  const features = [
    'Advanced AI medical consultations',
    'Certified first aid courses',
    'Emergency contact management',
    'Medical profile backup',
    'Priority emergency response',
    'Video call with professionals',
    'Offline mode access',
    'Advanced symptom checker'
  ]

  const handleUpgrade = () => {
    // Simulate payment processing
    console.log(`Upgrading to ${selectedPlan} plan`)
    // Here you would integrate with Stripe or your payment processor
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Crown className="h-5 w-5 text-warning" />
            Unlock Premium Features
          </DialogTitle>
          <DialogDescription>
            Upgrade to access {featureName} and all premium features
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Plan Selection */}
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant={selectedPlan === 'monthly' ? 'default' : 'outline'}
              onClick={() => setSelectedPlan('monthly')}
              className="h-auto p-3"
            >
              <div className="text-center">
                <div className="font-semibold">${plans.monthly.price}</div>
                <div className="text-xs">per month</div>
              </div>
            </Button>
            <Button
              variant={selectedPlan === 'yearly' ? 'default' : 'outline'}
              onClick={() => setSelectedPlan('yearly')}
              className="h-auto p-3 relative"
            >
              {plans.yearly.savings && (
                <Badge className="absolute -top-2 -right-2 text-xs bg-warning text-warning-foreground">
                  {plans.yearly.savings}
                </Badge>
              )}
              <div className="text-center">
                <div className="font-semibold">${plans.yearly.price}</div>
                <div className="text-xs">per year</div>
              </div>
            </Button>
          </div>

          {/* Features List */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm flex items-center gap-2">
                <Star className="h-4 w-4 text-warning" />
                Premium Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <Check className="h-3 w-3 text-success" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Maybe Later
            </Button>
            <Button onClick={handleUpgrade} className="flex-1">
              Upgrade Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}