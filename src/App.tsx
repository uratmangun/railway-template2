import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Vite + React + shadcn/ui</h1>
      <p className="text-muted-foreground">Starter setup with Tailwind and shadcn/ui.</p>
      <div className="flex gap-2">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
      </div>
    </div>
  )
}

export default App
