import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusCircle } from 'lucide-react';
import Modal from '@/components/Modal';

interface Team {
  id: string;
  name: string;
  head: string | null;
}

interface Member {
  id: string;
  name: string;
}

const Teams: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([
    { id: '1', name: 'Engineering', head: null },
    { id: '2', name: 'Design', head: null },
  ]);

  const [members] = useState<Member[]>([
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
    { id: '3', name: 'Bob Johnson' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTeamName, setNewTeamName] = useState('');

  const handleCreateTeam = () => {
    if (newTeamName.trim()) {
      const newTeam: Team = {
        id: (teams.length + 1).toString(),
        name: newTeamName.trim(),
        head: null,
      };
      setTeams([...teams, newTeam]);
      setNewTeamName('');
      setIsModalOpen(false);
    }
  };

  const handleSetTeamHead = (teamId: string, headId: string) => {
    const head = members.find(member => member.id === headId)?.name || null;
    setTeams(teams.map(team => 
      team.id === teamId ? { ...team, head } : team
    ));
  };

  return (
    <div className="p-8 pt-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Teams</h2>
        <Button className='bg-blue-500 text-white' onClick={() => setIsModalOpen(true)}>
          <PlusCircle className="mr-2 h-4 w-4" /> Create New Team
        </Button>
      </div>

      <div className="space-y-4">
        {teams.map(team => (
          <div key={team.id} className="flex justify-between items-center bg-gray-800 p-4 rounded-lg">
            <span className="text-lg text-white">{team.name}</span>
            <select 
              onChange={(e) => handleSetTeamHead(team.id, e.target.value)} 
              value={team.head || ''}
              className="w-[180px] bg-gray-700 border-gray-600 text-white p-2 rounded"
            >
              <option value="" disabled>Select Team Head</option>
              {members.map(member => (
                <option key={member.id} value={member.id}>{member.name}</option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create New Team">
        <div className="space-y-4">
          <div>
            <Label htmlFor="teamName" className="text-white">Team Name</Label>
            <Input 
              id="teamName" 
              value={newTeamName} 
              onChange={(e) => setNewTeamName(e.target.value)} 
              placeholder="Enter team name"
              className="text-white"
            />
          </div>
          <Button onClick={handleCreateTeam} className="bg-white text-black">Create Team</Button>
        </div>
      </Modal>
    </div>
  );
};

export default Teams;