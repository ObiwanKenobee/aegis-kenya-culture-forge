
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import FamilyDashboard from '@/components/FamilyDashboard';
import Section from '@/components/Section';
import LinkCard from '@/components/LinkCard';
import TaskCard from '@/components/TaskCard';
import { Button } from '@/components/ui/button';
import { MapPin, Users, BookOpen, Sunrise, Cloud, Gift } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20d%3D%27M30%200l30%2030-30%2030L0%2030%2030%200zm0%206.3L6.3%2030%2030%2053.7%2053.7%2030%2030%206.3z%27%20fill%3D%27%23FFFFFF%27%20fill-opacity%3D%270.2%27%20fill-rule%3D%27evenodd%27%2F%3E%3C%2Fsvg%3E')]"></div>
          </div>
          
          <div className="container mx-auto px-6 relative">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">AEGIS Kenya Cultural Dashboard</h1>
              <p className="text-xl text-gray-300 mb-8">Preserving heritage through digital innovation across Kenya's diverse ethnic communities.</p>
              <div className="flex flex-wrap gap-3">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/bantu-heritage')}
                  className="bantu-theme"
                >
                  Explore Bantu Heritage
                </Button>
                <Button 
                  size="lg" 
                  onClick={() => navigate('/nilotic-wisdom')}
                  className="nilotic-theme"
                >
                  Discover Nilotic Wisdom
                </Button>
                <Button 
                  size="lg" 
                  onClick={() => navigate('/cushitic-trade')}
                  className="cushitic-theme"
                >
                  Visit Cushitic Trade
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 py-12">
          {/* Family Dashboard */}
          <FamilyDashboard>
            <Section title="My Ancestry" subtitle="Explore your cultural heritage connections">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <LinkCard 
                  to="/bantu-heritage" 
                  label="Bantu Clan Lineage & Land Map" 
                  description="Access your family tree, ancestral lands, and cultural traditions"
                  theme="bantu"
                />
                <LinkCard 
                  to="/nilotic-wisdom" 
                  label="Nilotic Herds & Warrior Rites" 
                  description="Track cattle herds, ancestral paths, and clan authority records"
                  theme="nilotic"
                />
                <LinkCard 
                  to="/cushitic-trade" 
                  label="Cushitic Oral & Trade Archive" 
                  description="Explore migration patterns, oral histories, and trade networks"
                  theme="cushitic"
                />
              </div>
            </Section>
            
            <Section title="Today's Family Tasks">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TaskCard 
                  title="Register Land Transaction with Elders" 
                  description="Update clan records with recent land agreement" 
                  status="pending"
                  dueDate="Today"
                  type="bantu"
                />
                <TaskCard 
                  title="Upload Oral History (Shosh/Mzee)" 
                  description="Record grandmother's story about migration during colonial era" 
                  status="upcoming"
                  dueDate="Tomorrow"
                  type="cushitic"
                />
                <TaskCard 
                  title="Sync Rainfall Data for Pasture Tracker" 
                  description="Update seasonal grazing patterns for community herds" 
                  status="completed"
                  type="nilotic"
                />
                <TaskCard 
                  title="Document Family Medicinal Plant Knowledge" 
                  description="Catalog plants and remedies with aunt's guidance" 
                  status="upcoming"
                  dueDate="Next Week"
                />
              </div>
            </Section>
          </FamilyDashboard>

          {/* Cultural Insights */}
          <Section title="Cultural Insights" className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="mb-4 text-bantu">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Bantu Communities</h3>
                <p className="text-gray-600 mb-4">Emphasizing clan lineages, agricultural heritage, and communal land management systems.</p>
                <Button variant="outline" className="w-full" onClick={() => navigate('/bantu-heritage')}>Learn More</Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="mb-4 text-nilotic">
                  <Sunrise className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Nilotic Traditions</h3>
                <p className="text-gray-600 mb-4">Celebrating warrior heritage, pastoral economics, and age-set societal structures.</p>
                <Button variant="outline" className="w-full" onClick={() => navigate('/nilotic-wisdom')}>Learn More</Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="mb-4 text-cushitic">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Cushitic Heritage</h3>
                <p className="text-gray-600 mb-4">Preserving trade networks, nomadic traditions, and rich oral history.</p>
                <Button variant="outline" className="w-full" onClick={() => navigate('/cushitic-trade')}>Learn More</Button>
              </div>
            </div>
          </Section>
          
          {/* Upcoming Events */}
          <Section title="Cultural Calendar" subtitle="Upcoming ceremonies and important dates" className="mt-16">
            <div className="bg-white rounded-lg border overflow-hidden">
              <div className="divide-y">
                <div className="p-5 flex items-start">
                  <div className="bg-bantu/10 text-bantu p-3 rounded-lg mr-4">
                    <Gift className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Kikuyu Planting Festival</h3>
                    <p className="text-gray-600 text-sm">March 21 - Murang'a County</p>
                    <p className="mt-2">Annual ceremony marking the beginning of the planting season with elder blessings.</p>
                  </div>
                </div>
                
                <div className="p-5 flex items-start">
                  <div className="bg-nilotic/10 text-nilotic p-3 rounded-lg mr-4">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Kalenjin Warrior Graduation</h3>
                    <p className="text-gray-600 text-sm">April 15 - Elgeyo-Marakwet</p>
                    <p className="mt-2">Coming-of-age ceremony for young men entering warriorhood status.</p>
                  </div>
                </div>
                
                <div className="p-5 flex items-start">
                  <div className="bg-cushitic/10 text-cushitic p-3 rounded-lg mr-4">
                    <Cloud className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Somali New Year Festival</h3>
                    <p className="text-gray-600 text-sm">May 3 - Garissa</p>
                    <p className="mt-2">Celebration marking the beginning of the rainy season with traditional dance and poetry.</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </main>
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">AEGIS Kenya</h3>
              <p className="text-gray-400">Preserving cultural heritage through digital innovation.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Communities</h4>
              <ul className="space-y-2">
                <li><a href="/bantu-heritage" className="text-gray-400 hover:text-white">Bantu Heritage</a></li>
                <li><a href="/nilotic-wisdom" className="text-gray-400 hover:text-white">Nilotic Wisdom</a></li>
                <li><a href="/cushitic-trade" className="text-gray-400 hover:text-white">Cushitic Trade</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Oral Histories</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Land Records</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cultural Calendar</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Languages</h4>
              <ul className="space-y-2">
                <li><button className="text-gray-400 hover:text-white">English</button></li>
                <li><button className="text-gray-400 hover:text-white">Swahili</button></li>
                <li><button className="text-gray-400 hover:text-white">Kikuyu</button></li>
                <li><button className="text-gray-400 hover:text-white">Dholuo</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} AEGIS Kenya Cultural Dashboard. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
