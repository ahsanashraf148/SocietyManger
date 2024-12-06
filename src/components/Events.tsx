import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusCircle } from 'lucide-react';

interface Event {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
}

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([
    { id: '1', name: 'Event 1', description: 'Description 1', startDate: '2024-12-06T21:43:39.072Z', endDate: '2024-12-06T21:43:39.072Z' },
    { id: '2', name: 'Event 2', description: 'Description 2', startDate: '2024-12-07T21:43:39.072Z', endDate: '2024-12-07T21:43:39.072Z' },
  ]);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({ name: '', description: '', startDate: '', endDate: '' });

  const handleCreateEvent = () => {
    if (newEvent.name.trim() && newEvent.description.trim() && newEvent.startDate.trim() && newEvent.endDate.trim()) {
      const newEventData: Event = {
        id: (events.length + 1).toString(),
        name: newEvent.name.trim(),
        description: newEvent.description.trim(),
        startDate: newEvent.startDate.trim(),
        endDate: newEvent.endDate.trim(),
      };
      setEvents([...events, newEventData]);
      setNewEvent({ name: '', description: '', startDate: '', endDate: '' });
      setIsDrawerOpen(false);
    }
  };

  return (
    <div className="p-8 pt-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Events</h2>
        <Button className='bg-blue-500' onClick={() => setIsDrawerOpen(true)}>
          <PlusCircle className="mr-2 h-4 w-4" /> Create New Event
        </Button>
      </div>

      <div className="space-y-4">
        {events.map(event => (
          <div key={event.id} className="flex justify-between items-center bg-gray-800 p-4 rounded-lg">
            <div>
              <span className="text-lg">{event.name}</span>
              <p className="text-sm text-gray-400">{event.description}</p>
              <p className="text-sm text-gray-400">Start: {new Date(event.startDate).toLocaleString()}</p>
              <p className="text-sm text-gray-400">End: {new Date(event.endDate).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>

      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="max-w-lg mx-auto">
          <DrawerHeader>
            <DrawerTitle>Create New Event</DrawerTitle>
            <DrawerDescription>Fill in the details to create a new event.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name" 
                value={newEvent.name} 
                onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })} 
                placeholder="Enter event name"
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Input 
                id="description" 
                value={newEvent.description} 
                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })} 
                placeholder="Enter event description"
              />
            </div>
            <div>
              <Label htmlFor="startDate">Start Date</Label>
              <Input 
                id="startDate" 
                type="datetime-local"
                value={newEvent.startDate} 
                onChange={(e) => setNewEvent({ ...newEvent, startDate: e.target.value })} 
              />
            </div>
            <div>
              <Label htmlFor="endDate">End Date</Label>
              <Input 
                id="endDate" 
                type="datetime-local"
                value={newEvent.endDate} 
                onChange={(e) => setNewEvent({ ...newEvent, endDate: e.target.value })} 
              />
            </div>
          </div>
          <DrawerFooter>
            <Button onClick={handleCreateEvent}>Create Event</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Events;