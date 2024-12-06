import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusCircle, CheckCircle } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  description: string;
  assignedToUser: string;
  status: 'pending' | 'completed';
}

interface User {
  id: string;
  name: string;
}

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Task 1', description: 'Description 1', assignedToUser: 'John Doe', status: 'pending' },
    { id: '2', title: 'Task 2', description: 'Description 2', assignedToUser: 'Jane Smith', status: 'completed' },
  ]);

  const [users] = useState<User[]>([
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
    { id: '3', name: 'Bob Johnson' },
  ]);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', description: '', assignedToUser: '' });

  const handleCreateTask = () => {
    if (newTask.title.trim() && newTask.description.trim() && newTask.assignedToUser.trim()) {
      const newTaskData: Task = {
        id: (tasks.length + 1).toString(),
        title: newTask.title.trim(),
        description: newTask.description.trim(),
        assignedToUser: newTask.assignedToUser.trim(),
        status: 'pending',
      };
      setTasks([...tasks, newTaskData]);
      setNewTask({ title: '', description: '', assignedToUser: '' });
      setIsDrawerOpen(false);
    }
  };

  const handleMarkAsDone = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: 'completed' } : task
    ));
  };

  return (
    <div className="p-8 pt-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Tasks</h2>
        <Button className='bg-blue-500' onClick={() => setIsDrawerOpen(true)}>
          <PlusCircle className="mr-2 h-4 w-4" /> Create New Task
        </Button>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Pending Tasks</h3>
          <div className="space-y-2">
            {tasks.filter(task => task.status === 'pending').map(task => (
              <div key={task.id} className="flex justify-between items-center bg-gray-800 p-4 rounded-lg">
                <div>
                  <span className="text-lg">{task.title}</span>
                  <p className="text-sm text-gray-400">{task.description}</p>
                  <p className="text-sm text-gray-400">Assigned to: {task.assignedToUser}</p>
                </div>
                <Button variant="ghost" onClick={() => handleMarkAsDone(task.id)}>
                  <CheckCircle className="mr-2 h-4 w-4" /> Mark as Done
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Completed Tasks</h3>
          <div className="space-y-2">
            {tasks.filter(task => task.status === 'completed').map(task => (
              <div key={task.id} className="flex justify-between items-center bg-gray-800 p-4 rounded-lg">
                <div>
                  <span className="text-lg">{task.title}</span>
                  <p className="text-sm text-gray-400">{task.description}</p>
                  <p className="text-sm text-gray-400">Assigned to: {task.assignedToUser}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="max-w-lg mx-auto">
          <DrawerHeader>
            <DrawerTitle>Create New Task</DrawerTitle>
            <DrawerDescription>Fill in the details to create a new task.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input 
                id="title" 
                value={newTask.title} 
                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} 
                placeholder="Enter task title"
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Input 
                id="description" 
                value={newTask.description} 
                onChange={(e) => setNewTask({ ...newTask, description: e.target.value })} 
                placeholder="Enter task description"
              />
            </div>
            <div>
              <Label htmlFor="assignedToUser">Assign To</Label>
              <select 
                id="assignedToUser" 
                value={newTask.assignedToUser} 
                onChange={(e) => setNewTask({ ...newTask, assignedToUser: e.target.value })} 
                className="w-full bg-gray-700 border-gray-600 text-white p-2 rounded"
              >
                <option value="" disabled>Select user</option>
                {users.map(user => (
                  <option key={user.id} value={user.name}>{user.name}</option>
                ))}
              </select>
            </div>
          </div>
          <DrawerFooter>
            <Button onClick={handleCreateTask}>Create Task</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Tasks;