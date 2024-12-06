import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusCircle } from 'lucide-react';

interface Member {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  teamId: string;
}

interface Team {
  id: string;
  name: string;
}

const Members: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([
    { id: '1', firstName: 'John', lastName: 'Doe', email: 'john@example.com', teamId: '1' },
    { id: '2', firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', teamId: '2' },
  ]);

  const [teams] = useState<Team[]>([
    { id: '1', name: 'Engineering' },
    { id: '2', name: 'Design' },
  ]);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [newMember, setNewMember] = useState({ firstName: '', lastName: '', email: '', password: '', teamId: '' });

  const handleAddMember = () => {
    if (newMember.firstName.trim() && newMember.lastName.trim() && newMember.email.trim() && newMember.password.trim() && newMember.teamId.trim()) {
      const newMemberData: Member = {
        id: (members.length + 1).toString(),
        firstName: newMember.firstName.trim(),
        lastName: newMember.lastName.trim(),
        email: newMember.email.trim(),
        teamId: newMember.teamId.trim(),
      };
      setMembers([...members, newMemberData]);
      setNewMember({ firstName: '', lastName: '', email: '', password: '', teamId: '' });
      setIsDrawerOpen(false);
    }
  };

  return (
    <div className="p-8 pt-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Members</h2>
        <Button className='bg-blue-500' onClick={() => setIsDrawerOpen(true)}>
          <PlusCircle className="mr-2 h-4 w-4" /> Add New Member
        </Button>
      </div>

      <div className="space-y-4">
        {teams.map(team => (
          <div key={team.id}>
            <h3 className="text-xl font-semibold mb-2">{team.name}</h3>
            <div className="space-y-2">
              {members.filter(member => member.teamId === team.id).map(member => (
                <div key={member.id} className="flex justify-between items-center bg-gray-800 p-4 rounded-lg">
                  <span className="text-lg">{member.firstName} {member.lastName}</span>
                  <span className="text-sm text-gray-400">{member.email}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="max-w-lg mx-auto">
          <DrawerHeader>
            <DrawerTitle>Add New Member</DrawerTitle>
            <DrawerDescription>Fill in the details to add a new member to a team.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 space-y-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input 
                id="firstName" 
                value={newMember.firstName} 
                onChange={(e) => setNewMember({ ...newMember, firstName: e.target.value })} 
                placeholder="Enter first name"
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input 
                id="lastName" 
                value={newMember.lastName} 
                onChange={(e) => setNewMember({ ...newMember, lastName: e.target.value })} 
                placeholder="Enter last name"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                value={newMember.email} 
                onChange={(e) => setNewMember({ ...newMember, email: e.target.value })} 
                placeholder="Enter email"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password"
                value={newMember.password} 
                onChange={(e) => setNewMember({ ...newMember, password: e.target.value })} 
                placeholder="Enter password"
              />
            </div>
            <div>
              <Label htmlFor="team">Team</Label>
              <select 
                id="team" 
                value={newMember.teamId} 
                onChange={(e) => setNewMember({ ...newMember, teamId: e.target.value })} 
                className="w-full bg-gray-700 border-gray-600 text-white p-2 rounded"
              >
                <option value="" disabled>Select team</option>
                {teams.map(team => (
                  <option key={team.id} value={team.id}>{team.name}</option>
                ))}
              </select>
            </div>
          </div>
          <DrawerFooter>
            <Button onClick={handleAddMember}>Add Member</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Members;